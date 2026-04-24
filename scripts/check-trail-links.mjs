#!/usr/bin/env node
/**
 * Verifica todos os links (mapsUrl, bookUrl, image imports) do guia de trilhas.
 * Uso: node scripts/check-trail-links.mjs
 *      node scripts/check-trail-links.mjs --json   (saída JSON)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DATA_FILE = path.join(ROOT, "src/data/trilhas.ts");
const ASSETS_DIR = path.join(ROOT, "src/assets/trilhas");

const args = process.argv.slice(2);
const asJson = args.includes("--json");

const TIMEOUT_MS = 12000;
const CONCURRENCY = 8;

// ---------- 1. Parse trilhas.ts ----------
const src = fs.readFileSync(DATA_FILE, "utf8");

// Extrai cada bloco de objeto Trail usando contagem de chaves balanceadas.
// Localiza cada `id: "..."` e expande do `{` anterior até o `}` correspondente.
const trails = [];
const idRegex = /\bid:\s*"([^"]+)"/g;
let m;
while ((m = idRegex.exec(src)) !== null) {
  // Encontra a `{` que abre este objeto (varre para trás)
  let openIdx = -1;
  for (let i = m.index; i >= 0; i--) {
    if (src[i] === "{") {
      openIdx = i;
      break;
    }
    if (src[i] === "}") break; // não está dentro de um objeto válido
  }
  if (openIdx === -1) continue;

  // Encontra o `}` correspondente respeitando aninhamento e strings
  let depth = 0;
  let closeIdx = -1;
  let inStr = false;
  let strCh = "";
  for (let i = openIdx; i < src.length; i++) {
    const ch = src[i];
    const prev = src[i - 1];
    if (inStr) {
      if (ch === strCh && prev !== "\\") inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = true;
      strCh = ch;
      continue;
    }
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        closeIdx = i;
        break;
      }
    }
  }
  if (closeIdx === -1) continue;

  const block = src.slice(openIdx, closeIdx + 1);
  const id = m[1];

  // Só considera blocos que parecem Trail (têm mapsUrl)
  const mapsUrlMatch = block.match(/mapsUrl:\s*"([^"]+)"/);
  if (!mapsUrlMatch) continue;

  // Evita duplicar: se já temos esse id, pula
  if (trails.some((t) => t.id === id)) continue;

  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const locationMatch = block.match(/location:\s*"([^"]+)"/);
  const imageMatch = block.match(/image:\s*(\w+)/);
  const bookUrlMatch = block.match(/bookUrl:\s*"([^"]+)"/);

  trails.push({
    id,
    title: titleMatch?.[1] ?? "(sem título)",
    location: locationMatch?.[1] ?? "(sem local)",
    mapsUrl: mapsUrlMatch[1],
    imageVar: imageMatch?.[1] ?? null,
    bookUrl: bookUrlMatch?.[1] ?? null,
  });
}

// Mapa de imports image var -> caminho do arquivo
const importRegex = /import\s+(\w+)\s+from\s+"@\/assets\/trilhas\/([^"]+)"/g;
const imageMap = {};
while ((m = importRegex.exec(src)) !== null) {
  imageMap[m[1]] = m[2];
}

// ---------- 2. Verifica imagens locais ----------
const imageReport = trails.map((t) => {
  if (!t.imageVar) return { id: t.id, status: "missing-import", file: null };
  const file = imageMap[t.imageVar];
  if (!file) return { id: t.id, status: "import-not-found", file: t.imageVar };
  const fullPath = path.join(ASSETS_DIR, file);
  const exists = fs.existsSync(fullPath);
  const size = exists ? fs.statSync(fullPath).size : 0;
  return {
    id: t.id,
    file,
    status: exists ? (size > 1000 ? "ok" : "empty") : "missing",
    sizeKb: exists ? Math.round(size / 1024) : 0,
  };
});

// ---------- 3. Verifica URLs (HTTP) ----------
const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
  "Accept-Encoding": "gzip, deflate, br",
};

// Classifica o resultado:
//   "ok"      = funcionou (2xx ou 3xx)
//   "warn"    = provavelmente bloqueio anti-bot (403, 429, fetch failed, timeout)
//   "broken"  = link realmente quebrado (404, 410, 5xx)
function classify(status, error) {
  if (status >= 200 && status < 400) return "ok";
  if (status === 404 || status === 410) return "broken";
  if (status >= 500 && status < 600) return "broken";
  // 0 (fetch falhou), 403 (forbidden/bot), 429 (rate limit), outros → aviso
  return "warn";
}

async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: BROWSER_HEADERS,
    });
    // Alguns servidores não suportam HEAD - tenta GET
    if (res.status === 405 || res.status === 403 || res.status === 400) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: BROWSER_HEADERS,
      });
    }
    return {
      status: res.status,
      finalUrl: res.url,
      kind: classify(res.status, null),
    };
  } catch (err) {
    return {
      status: 0,
      error: err.message,
      kind: classify(0, err.message),
    };
  } finally {
    clearTimeout(timer);
  }
}

async function runWithConcurrency(items, fn, concurrency) {
  const results = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      results[idx] = await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return results;
}

const urlChecks = [];
trails.forEach((t) => {
  urlChecks.push({ id: t.id, kind: "mapsUrl", url: t.mapsUrl });
  if (t.bookUrl) urlChecks.push({ id: t.id, kind: "bookUrl", url: t.bookUrl });
});

console.error(
  `Verificando ${trails.length} trilhas, ${urlChecks.length} URLs e ${imageReport.length} imagens...`
);

const urlResults = await runWithConcurrency(
  urlChecks,
  async (item) => ({ ...item, ...(await checkUrl(item.url)) }),
  CONCURRENCY
);

// ---------- 4. Relatório ----------
const trailMap = Object.fromEntries(trails.map((t) => [t.id, t]));
const imageMapById = Object.fromEntries(imageReport.map((i) => [i.id, i]));

const report = trails.map((t) => {
  const urlsForTrail = urlResults.filter((u) => u.id === t.id);
  return {
    id: t.id,
    title: t.title,
    location: t.location,
    image: imageMapById[t.id],
    urls: urlsForTrail.map((u) => ({
      kind: u.kind,
      url: u.url,
      result: u.kind, // "ok" | "warn" | "broken"
      status: u.status,
      error: u.error,
      finalUrl: u.finalUrl,
    })),
  };
});

const summary = {
  totalTrails: trails.length,
  totalUrls: urlResults.length,
  okUrls: urlResults.filter((u) => u.kind === "ok").length,
  warnUrls: urlResults.filter((u) => u.kind === "warn").length,
  brokenUrls: urlResults.filter((u) => u.kind === "broken").length,
  missingImages: imageReport.filter((i) => i.status !== "ok").length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, report }, null, 2));
  // Exit 1 só se houver imagem faltando ou link realmente quebrado
  process.exit(summary.brokenUrls + summary.missingImages > 0 ? 1 : 0);
}

// ---- saída humana ----
const c = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
};

console.log(`\n${c.bold}🥾 Relatório do Guia de Trilhas${c.reset}\n`);
console.log(`${c.dim}Arquivo: ${DATA_FILE}${c.reset}\n`);

const trailsWithIssues = report.filter((r) => {
  const hasBroken = r.urls.some((u) => u.result === "broken");
  const hasWarn = r.urls.some((u) => u.result === "warn");
  const hasImg = r.image && r.image.status !== "ok";
  return hasBroken || hasWarn || hasImg;
});

if (trailsWithIssues.length === 0) {
  console.log(`${c.green}✓ Tudo OK! Nenhum problema encontrado.${c.reset}\n`);
} else {
  for (const r of trailsWithIssues) {
    const broken = r.urls.filter((u) => u.result === "broken");
    const warns = r.urls.filter((u) => u.result === "warn");
    const imgIssue = r.image && r.image.status !== "ok";
    if (broken.length === 0 && warns.length === 0 && !imgIssue) continue;

    console.log(`${c.bold}${r.title}${c.reset} ${c.dim}(${r.location} · id: ${r.id})${c.reset}`);
    if (imgIssue) {
      console.log(
        `  ${c.red}✗ imagem:${c.reset} ${r.image.status} → ${r.image.file ?? r.image.imageVar}`
      );
    }
    for (const u of broken) {
      console.log(
        `  ${c.red}✗ QUEBRADO ${u.kind}:${c.reset} HTTP ${u.status}\n     ${c.dim}${u.url}${c.reset}`
      );
    }
    for (const u of warns) {
      console.log(
        `  ${c.yellow}⚠ aviso ${u.kind}:${c.reset} HTTP ${u.status}${
          u.error ? ` (${u.error})` : ""
        } — provavelmente bloqueio anti-bot, verifique no navegador\n     ${c.dim}${u.url}${c.reset}`
      );
    }
    console.log("");
  }
}

console.log(`${c.bold}Resumo${c.reset}`);
console.log(`  Trilhas verificadas: ${summary.totalTrails}`);
console.log(
  `  URLs: ${c.green}${summary.okUrls} OK${c.reset} · ${
    summary.warnUrls > 0 ? `${c.yellow}${summary.warnUrls} avisos${c.reset}` : `0 avisos`
  } · ${
    summary.brokenUrls > 0
      ? `${c.red}${summary.brokenUrls} quebradas${c.reset}`
      : `${c.green}0 quebradas${c.reset}`
  }`
);
console.log(
  `  Imagens: ${
    summary.missingImages > 0
      ? `${c.red}${summary.missingImages} faltando${c.reset}`
      : `${c.green}todas OK (${imageReport.length})${c.reset}`
  }`
);
console.log(
  `\n${c.dim}⚠ Avisos = sites com proteção anti-bot (Cloudflare/DataDome). Os links provavelmente funcionam no navegador real.${c.reset}\n`
);

// Exit 1 só se houver problema real (imagem ou 404/5xx)
process.exit(summary.brokenUrls + summary.missingImages > 0 ? 1 : 0);

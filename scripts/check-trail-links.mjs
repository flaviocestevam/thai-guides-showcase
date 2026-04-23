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

// Extrai cada bloco de objeto Trail (id: "...", ... mapsUrl: "...")
const trails = [];
const trailRegex = /\{\s*id:\s*"([^"]+)"[\s\S]*?mapsUrl:\s*"([^"]+)"[\s\S]*?\n\s{2}\}/g;
let m;
while ((m = trailRegex.exec(src)) !== null) {
  const block = m[0];
  const id = m[1];
  const mapsUrl = m[2];

  const titleMatch = block.match(/title:\s*"([^"]+)"/);
  const locationMatch = block.match(/location:\s*"([^"]+)"/);
  const imageMatch = block.match(/image:\s*(\w+)/);
  const bookUrlMatch = block.match(/bookUrl:\s*"([^"]+)"/);

  trails.push({
    id,
    title: titleMatch?.[1] ?? "(sem título)",
    location: locationMatch?.[1] ?? "(sem local)",
    mapsUrl,
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
async function checkUrl(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; TrailLinkChecker/1.0; +https://guiastailandia.com.br)",
      },
    });
    // Alguns servidores não suportam HEAD - tenta GET
    if (res.status === 405 || res.status === 403 || res.status === 400) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; TrailLinkChecker/1.0; +https://guiastailandia.com.br)",
        },
      });
    }
    return { ok: res.ok, status: res.status, finalUrl: res.url };
  } catch (err) {
    return { ok: false, status: 0, error: err.message };
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
      ok: u.ok,
      status: u.status,
      error: u.error,
      finalUrl: u.finalUrl,
    })),
  };
});

const summary = {
  totalTrails: trails.length,
  totalUrls: urlResults.length,
  brokenUrls: urlResults.filter((u) => !u.ok).length,
  missingImages: imageReport.filter((i) => i.status !== "ok").length,
};

if (asJson) {
  console.log(JSON.stringify({ summary, report }, null, 2));
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

const broken = report.filter(
  (r) =>
    r.urls.some((u) => !u.ok) ||
    (r.image && r.image.status !== "ok")
);

if (broken.length === 0) {
  console.log(`${c.green}✓ Tudo OK! Nenhum problema encontrado.${c.reset}`);
} else {
  console.log(`${c.red}${c.bold}⚠ ${broken.length} trilha(s) com problemas:${c.reset}\n`);
  for (const r of broken) {
    console.log(`${c.bold}${r.title}${c.reset} ${c.dim}(${r.location} · id: ${r.id})${c.reset}`);
    if (r.image && r.image.status !== "ok") {
      console.log(
        `  ${c.red}✗ imagem:${c.reset} ${r.image.status} → ${r.image.file ?? r.image.imageVar}`
      );
    }
    for (const u of r.urls) {
      if (!u.ok) {
        console.log(
          `  ${c.red}✗ ${u.kind}:${c.reset} HTTP ${u.status}${
            u.error ? ` (${u.error})` : ""
          }\n     ${c.dim}${u.url}${c.reset}`
        );
      }
    }
    console.log("");
  }
}

console.log(`${c.bold}Resumo${c.reset}`);
console.log(`  Trilhas verificadas: ${summary.totalTrails}`);
console.log(
  `  URLs verificadas: ${summary.totalUrls}  ${
    summary.brokenUrls > 0
      ? `${c.red}(${summary.brokenUrls} quebradas)${c.reset}`
      : `${c.green}(todas OK)${c.reset}`
  }`
);
console.log(
  `  Imagens verificadas: ${imageReport.length}  ${
    summary.missingImages > 0
      ? `${c.red}(${summary.missingImages} faltando)${c.reset}`
      : `${c.green}(todas OK)${c.reset}`
  }`
);

process.exit(summary.brokenUrls + summary.missingImages > 0 ? 1 : 0);

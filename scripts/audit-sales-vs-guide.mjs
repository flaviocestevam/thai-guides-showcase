#!/usr/bin/env node
/**
 * Auditoria automatizada: Página de Vendas × Guia publicado.
 *
 * Para cada ilha que tem GUIA PAGO publicado, valida que toda promessa
 * declarada na página de vendas (modules, features, bonuses) tem um
 * "eco" detectável no código do guia — via título de seção, id de
 * âncora, label de TOC ou texto-chave.
 *
 * Uso:
 *   node scripts/audit-sales-vs-guide.mjs            # relatório completo
 *   node scripts/audit-sales-vs-guide.mjs --strict   # exit 1 se houver gap
 *   node scripts/audit-sales-vs-guide.mjs koh-lipe   # filtra por slug
 *
 * NÃO altere os arquivos dos guias por aqui — script é read-only.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// slug da página de vendas → arquivo TSX do guia pago correspondente
const GUIDE_MAP = {
  "koh-lipe-tailandia":    "src/pages/KohLipe2947.tsx",
  "koh-kood-tailandia":    "src/pages/KohKood7841.tsx",
  "koh-samui-tailandia":   "src/pages/KohSamui7392.tsx",
  "koh-phi-phi-tailandia": "src/pages/KohPhiPhi5128.tsx",
  "koh-phangan-tailandia": "src/pages/KohPhangan8463.tsx",
  "koh-tao-tailandia":     "src/pages/KohTao6294.tsx",
  "koh-chang-tailandia":   "src/pages/KohChang3517.tsx",
  "koh-lanta-tailandia":   "src/pages/KohLanta4831.tsx",
};

// ---------- Extrai promessas direto do source de ilhas.ts -------------
// (evita rodar TS+aliases+JSON imports só pra ler strings literais)
function extractSalesPromises() {
  const src = fs.readFileSync(path.join(ROOT, "src/data/sales/ilhas.ts"), "utf8");

  const metaBlock = src.match(/export const ilhasMeta[^\[]*\[([\s\S]*?)\];/);
  if (!metaBlock) throw new Error("Não achei ilhasMeta no ilhas.ts");
  const slugs = [...metaBlock[1].matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

  // Cada bloco `make(ilhasMeta[N], { ... })` — varre balanceando `{`/`}`.
  const blocks = {};
  const reStart = /make\(ilhasMeta\[(\d+)\]\s*,\s*\{/g;
  let m;
  while ((m = reStart.exec(src))) {
    const idx = Number(m[1]);
    let i = m.index + m[0].length - 1;
    let depth = 0;
    for (; i < src.length; i++) {
      const c = src[i];
      if (c === "{") depth++;
      else if (c === "}") { depth--; if (depth === 0) { blocks[idx] = src.slice(m.index + m[0].length - 1, i + 1); break; } }
    }
  }

  const sliceArray = (block, key) => {
    const re = new RegExp(`\\b${key}\\s*:\\s*\\[`);
    const km = re.exec(block);
    if (!km) return "";
    let i = km.index + km[0].length - 1;
    let depth = 0;
    for (; i < block.length; i++) {
      const c = block[i];
      if (c === "[") depth++;
      else if (c === "]") { depth--; if (depth === 0) return block.slice(km.index, i + 1); }
    }
    return "";
  };
  const titles = (chunk) =>
    [...chunk.matchAll(/title:\s*"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1].replace(/\\"/g, '"'));

  const result = {};
  for (const [idxStr, block] of Object.entries(blocks)) {
    const slug = slugs[Number(idxStr)];
    if (!slug) continue;
    result[slug] = {
      modules: titles(sliceArray(block, "modules")),
      features: titles(sliceArray(block, "features")),
      bonuses: titles(sliceArray(block, "bonuses")),
    };
  }
  return result;
}

// ---------- Normalização ------------------------------------------------
const STOPWORDS = new Set([
  "de","da","do","das","dos","a","o","as","os","e","ou","em","no","na","nos","nas",
  "para","pra","por","com","sem","um","uma","uns","umas","que","se","ao","aos","à","às",
  "the","of","and","to","in","on","for","by","is","are","be","with",
  "guia","manual","completo","top","melhor","melhores","como","quando","onde",
  "vs","x","×","mais","menos","real","reais","tudo","cada","qual","quais",
]);

const norm = (s) =>
  s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && w.length > 2 && !STOPWORDS.has(w));

function keywords(title) {
  // 2 tokens mais "fortes" do título — basta um bater pra considerar OK.
  return norm(title).slice(0, 4);
}

// ---------- Auditoria por ilha ------------------------------------------
function auditOne(slug, sales, guidePath) {
  const abs = path.join(ROOT, guidePath);
  if (!fs.existsSync(abs)) {
    return { slug, guidePath, missing: ["__GUIDE_FILE_NOT_FOUND__"], total: 0, ok: 0 };
  }
  const haystack = norm(fs.readFileSync(abs, "utf8")).join(" ");

  const promises = [
    ...sales.modules.map((m) => ({ kind: "module",  title: m.title })),
    ...sales.features.map((f) => ({ kind: "feature", title: f.title })),
    ...sales.bonuses.map((b) => ({ kind: "bonus",   title: b.title })),
  ];

  const missing = [];
  let ok = 0;
  for (const p of promises) {
    const kws = keywords(p.title);
    if (kws.length === 0) { ok++; continue; }
    const hit = kws.some((k) => haystack.includes(k));
    if (hit) ok++;
    else missing.push(`[${p.kind}] ${p.title}  (keywords: ${kws.join(", ")})`);
  }

  return { slug, guidePath, total: promises.length, ok, missing };
}

// ---------- Main --------------------------------------------------------
const args = process.argv.slice(2);
const strict = args.includes("--strict");
const filter = args.find((a) => !a.startsWith("--"));

const ilhas = await loadIlhas();

const targets = Object.entries(GUIDE_MAP).filter(([slug]) => !filter || slug.includes(filter));

let totalGaps = 0;
const lines = [];
lines.push("================================================================");
lines.push(" AUDITORIA VENDA × GUIA  —  " + new Date().toISOString());
lines.push("================================================================");

for (const [slug, guidePath] of targets) {
  const sales = ilhas[slug];
  if (!sales) {
    lines.push(`\n[${slug}]  ⚠ sales content não encontrado em ilhas.ts`);
    totalGaps++;
    continue;
  }
  const r = auditOne(slug, sales, guidePath);
  const pct = r.total ? Math.round((r.ok / r.total) * 100) : 0;
  const status = r.missing.length === 0 ? "✅" : "❌";
  lines.push(`\n${status} ${slug}  →  ${guidePath}`);
  lines.push(`   Cobertura: ${r.ok}/${r.total} (${pct}%)`);
  if (r.missing.length) {
    lines.push(`   Gaps (${r.missing.length}):`);
    for (const m of r.missing) lines.push(`     - ${m}`);
    totalGaps += r.missing.length;
  }
}

lines.push("\n----------------------------------------------------------------");
lines.push(` Total de gaps: ${totalGaps}`);
lines.push("================================================================");

const out = lines.join("\n");
console.log(out);

const reportDir = path.join(ROOT, ".lovable");
fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(path.join(reportDir, "audit-sales-vs-guide.txt"), out);

if (strict && totalGaps > 0) process.exit(1);

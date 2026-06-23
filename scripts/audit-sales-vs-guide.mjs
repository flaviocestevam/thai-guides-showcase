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

// ---------- Carrega ilhas via tsx loader nativo (Node 20+) -------------
async function loadIlhas() {
  // Reaproveita registrar do TS via esbuild-register se disponível;
  // caso contrário, faz parse leve do arquivo procurando os literais.
  // Para evitar dependência, fazemos um require dinâmico tolerante.
  try {
    const { register } = await import("tsx/esm/api");
    const unregister = register();
    const mod = await import(pathToFileURL(path.join(ROOT, "src/data/sales/ilhas.ts")).href);
    unregister();
    return mod.ilhas;
  } catch {
    console.error("Falha ao carregar ilhas.ts via tsx. Instale com: npm i -D tsx");
    process.exit(2);
  }
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

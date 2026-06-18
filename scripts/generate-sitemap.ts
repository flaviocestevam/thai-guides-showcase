// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes public/sitemap.xml with current date as <lastmod> for all routes.

import { writeFileSync } from "fs";
import { resolve } from "path";
import { ilhasMeta } from "../src/data/sales/ilhas";

const BASE_URL = "https://guiastailandia.com.br";
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  priority?: string;
  changefreq?: string;
}

// Páginas indexáveis. Excluídas intencionalmente:
//  - /guiatrilhasthai44 e /muaythai5645 (guias pagos, não devem aparecer)
//  - /export-copy-auditoria (interna)
const entries: Entry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },

  // Guias temáticos
  { path: "/festivaldaslanternas", priority: "0.8" },
  { path: "/santuariosdeelefantes", priority: "0.8" },
  { path: "/muaythai", priority: "0.8" },
  { path: "/guiatrilhasthai", priority: "0.8" },
  { path: "/lanternfestival", priority: "0.7" },
  { path: "/voluntariado-tailandia", priority: "0.8" },
  { path: "/tailandia-para-gays", priority: "0.8" },
  { path: "/songkran-ano-novo-tailandes", priority: "0.8" },
  { path: "/lua-de-mel-tailandia", priority: "0.8" },

  // Festas
  { path: "/festas", priority: "0.8" },

  // Páginas de vendas
  { path: "/aluguel-de-motos-tailandia", priority: "0.8" },
  { path: "/tailandia-para-aventureiros", priority: "0.8" },
  { path: "/beach-clubs-tailandia", priority: "0.8" },
  { path: "/cafes-e-coworkings-tailandia", priority: "0.7" },
  { path: "/casas-de-massagem-tailandia", priority: "0.7" },
  { path: "/clubes-de-strip-tailandia", priority: "0.7" },
  { path: "/tailandia-para-criancas", priority: "0.8" },
  { path: "/cursos-de-massagem", priority: "0.7" },
  { path: "/go-go-bars-tailandia", priority: "0.7" },
  { path: "/mergulho-tailandia", priority: "0.8" },
  { path: "/tailandia-para-pets", priority: "0.7" },
  { path: "/retiros-tailandia", priority: "0.8" },
  { path: "/reveillon-tailandia", priority: "0.8" },
  { path: "/top-hostels-tailandia", priority: "0.8" },

  // Ilhas (catálogo + dinâmico)
  { path: "/ilhas", priority: "0.9" },
  ...ilhasMeta.map((i) => ({ path: `/${i.slug}`, priority: "0.7" })),
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`✓ sitemap.xml written (${entries.length} URLs, lastmod=${today})`);

// Lista de URLs para o IndexNow consumir logo após o build
writeFileSync(
  resolve("public/.indexnow-urls.json"),
  JSON.stringify(entries.map((e) => `${BASE_URL}${e.path}`), null, 2),
);

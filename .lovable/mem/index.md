# Project Memory

## Core
Páginas de vendas usam preço **De R$ 197 por R$ 67** (12x R$ 6,71), checkout Cakto, garantia 7 dias.
Prova social padrão: "Mais de 7.000 pessoas no mundo todo já compraram nossos guias".
Página de vendas vende — nunca entrega o conteúdo do guia. Listar capítulos/cidades/dicas como teaser com 🔒 "No guia", nunca com nomes/endereços/respostas completas.
Rotas `/guiatrilhasthai44`, `/muaythai5645`, `/beachclubs8821`, `/cursosmassagem3367`, `/songkran9482`, `/cafescoworkings7391`, `/voluntariado4827`, `/clubesstrip6644`, `/festas7733`, `/gogobars8855`, `/pets9922`, `/criancas7811`, `/casasmassagem5582`, `/retiros8834`, `/tophostels7128`, `/aventureiros6712` e `/phuket8821` são os GUIAS pagos — nunca linkar/expor em catálogos/sitemap, mas pode atualizar conteúdo quando o usuário pedir explicitamente.
Cronômetro promocional = **15 minutos (MM:SS)** em todas as páginas de vendas. Nunca usar 24h nem mostrar bloco de "Horas". Não usar "últimas unidades/vagas".
Páginas de vendas: **nunca incluir ano (2024/2025/2026/2027)** — manter copy atemporal.
Nos GUIAS pagos: toda menção a região/bairro/praia/hotel/restaurante/locadora/pier/atração ganha um botão pequeno `📍 Mapa` ao lado do nome (Google Maps `search/?api=1&query=...`); o nome em si fica texto normal — nunca sublinhado/linkado inline.
Padrão de links nos GUIAS pagos: TODO link (interno ou externo, exceto âncoras `#id` da própria página e `mailto:`) abre em nova aba via `<a target="_blank" rel="noreferrer">` — nunca usar `<Link>` do react-router pra navegação entre páginas.
Layout visual padrão dos GUIAS pagos = Noir & Gold + DM Serif Display/Fira Sans + Bento Grid (referência: `src/pages/Phuket8821.tsx`). Aplicar em todos os próximos guias.

## Memories
- [Rotas internas protegidas](mem://constraints/rotas-internas-protegidas) — guias pagos protegidos; não expor publicamente, mas conteúdo é atualizável
- [Layout Premium dos Guias](mem://design/guia-premium-layout) — padrão Noir & Gold / Bento / DM Serif para redesign dos guias pagos


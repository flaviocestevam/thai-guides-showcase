## Escopo

Atualizar 12 páginas de vendas com a copy do prompt 1/3, preço **De R$197 por R$67**, timer de 15min, combo fixo (3 por 2 = R$134) e layout padronizado.

## Realidade do código (importante)

As 12 páginas **não compartilham a mesma arquitetura** — preciso confirmar a abordagem antes de mexer:

**Grupo A — JSX hardcoded (componentes individuais por seção):**
- `/festivaldaslanternas` → 18 componentes em `src/components/festival/*`
- `/lanternfestival` → 18 componentes em `src/components/lantern/*`
- `/santuariosdeelefantes` → JSX inline em `SantuariosDeElefantes.tsx`
- `/muaythai` → 14 componentes em `src/components/muaythai/*`
- `/guiatrilhasthai` → JSX inline em `GuiaTrilhasThai.tsx`
- `/festas` → página com cidades/cards (`Festas.tsx`)
- `/voluntariado-tailandia` → `GuiaVoluntariado.tsx`
- `/tailandia-para-gays` → `GuiaGays.tsx`
- `/songkran-ano-novo-tailandes` → `GuiaSongkran.tsx`
- `/lua-de-mel-tailandia` → `GuiaLuaDeMel.tsx`

**Grupo B — já usam `SalesPage` + data file (fácil):**
- `/cursos-de-massagem` → `src/data/sales/cursosDeMassagem.ts`
- `/casas-de-massagem-tailandia` → `src/data/sales/casasDeMassagem.ts`

## Problemas a decidir antes de codar

1. **Combo fixo + Guias relacionados + "O que evita" + "Para quem não é"** não existem no template atual `SalesPage`/data nem nos componentes hardcoded. Vou precisar:
   - **Opção 1 (recomendada):** migrar TUDO para `SalesPage` + data, estendendo o tipo `SalesContent` com `combo`, `relatedGuides`, `whatItAvoids`, `notForYou`, `stickyCTA`. Substitui as 10 páginas do Grupo A por wrappers de 4 linhas (como `CasasDeMassagem.tsx`). **Perde** o visual customizado atual (lanternas, muay thai, etc.).
   - **Opção 2:** editar cada uma das 10 páginas hardcoded individualmente, adicionando seções novas em cada uma, mantendo visuais. **Muito mais trabalho** e cada página continua divergente.
   - **Opção 3 (híbrida):** Grupo B + páginas simples (gays, songkran, lua-de-mel, voluntariado, santuários, festas, trilhas) migram pro `SalesPage`. Festival/Lantern/Muay Thai mantêm visual atual e recebem só ajustes de copy + novas seções injetadas.

2. **Preço R$197→R$67:** hoje Festival e Lantern usam R$47/$47 — confirmar troca.

3. **Combo R$134:** é só copy visual ou precisa de link de checkout Cakto separado por combo? (Hoje todos apontam pra mesma URL Cakto.) Se for só copy, ok; se for checkout real, preciso dos 12 links.

4. **"Guias relacionados" mencionam Bangkok, Phuket, Krabi, Phi Phi, Chiang Mai, Koh Samui** como produtos linkáveis — **essas páginas não existem** no projeto (só existem as 14 ilhas, sem Bangkok/Krabi/Chiang Mai standalone). Como tratar links quebrados?

5. **Sticky CTA mobile** com preço+timer+CTA: existe `FloatingCTA` só em Festival/Lantern. Criar global no `SalesPage`?

## Pergunta direta

Antes de eu mexer em 50+ arquivos, me confirma:

- **A)** Migrar Grupo A todo pro `SalesPage` (perde visual customizado, ganha consistência)? OU manter visual e só injetar copy nova nas hardcoded?
- **B)** Combo R$134 é copy/CTA fictício (mesmo link Cakto) ou tem checkout próprio?
- **C)** Links "guias relacionados" pra Bangkok/Krabi/Phuket etc. — apontar pra `#` por enquanto, esconder, ou só mencionar sem link?
- **D)** Confirmar troca de Festival/Lantern de R$47 pra R$67 (memory atual diz R$197→R$67 universal, mas Lantern está em dólar $47).

Sem essas respostas, qualquer caminho que eu escolher vai ter retrabalho.

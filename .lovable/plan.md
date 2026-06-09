### Plano de Implementação

1. **Estrutura de Componentes:** Criar componentes reutilizáveis para as novas páginas, baseados nos componentes existentes em `src/components/festival/`, mas sem as seções proibidas (vídeo, cronômetro, etc).
2. **Criação das Páginas:** Implementar `src/pages/GuiaGays.tsx`, `src/pages/GuiaSongkran.tsx` e `src/pages/GuiaLuaDeMel.tsx`.
3. **Registro das Rotas:** Adicionar as novas rotas em `src/App.tsx`.
4. **Conteúdo e SEO:** Preencher o conteúdo conforme a pesquisa exigida e as regras de posicionamento dos guias.

### Detalhes Técnicos
- Utilizar componentes existentes como `HeroSection`, `PainSection`, `ComparisonSection`, `PricingSection`, `FAQSection`, `FinalCTASection`, `FeaturesSection`, `ContentSection`, `BonusSection`, `AuthoritySection`, `TargetAudienceSection`, `RiskSection`.
- Criar variações específicas de conteúdo para os cards das seções "O que você precisa organizar..." que substituem a contagem regressiva.
- Utilizar `[LINK_DE_PAGAMENTO_GAYS]`, `[LINK_DE_PAGAMENTO_SONGKRAN]` e `[LINK_DE_PAGAMENTO_LUA_DE_MEL]` como placeholders.
- Manter o layout responsivo e o padrão visual de `FestivalDasLanternas.tsx`.

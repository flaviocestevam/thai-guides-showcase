---
name: Layout Premium dos Guias Pagos
description: Padrão visual Noir & Gold / Bento Grid / DM Serif Display + Fira Sans aplicado em todos os GUIAS pagos a partir de Phuket8821
type: design
---
Referência canônica: `src/pages/Phuket8821.tsx` + fontes em `src/main.tsx` (`@fontsource/dm-serif-display`, `@fontsource/fira-sans`).

Todos os próximos guias pagos devem seguir esse mesmo layout:

- **Paleta Noir & Gold** via CSS vars scoped na página (`--pk-bg #0d0d0d`, `--pk-surface`, `--pk-gold #c9a84c`, `--pk-gold-soft #f0d78c`). Nada de hardcode fora desse escopo.
- **Tipografia**: headings em `DM Serif Display`, body em `Fira Sans`. Kicker uppercase tracking-widest dourado + display serif grande.
- **Hero full-height** com mesh gradient orbs (`pk-orb`), grain sutil, glassmorphism nos chips/meta.
- **Bento Grid** (`pk-bento`) responsivo para meta/stats/intro.
- **Sticky TOC** com glass + scroll horizontal no mobile.
- **Componente `Reveal`** com stagger fade-in/slide-up via `animation-delay`.
- **Cards** com soft shadow, glass border, hover lift.
- **`SectionTitle`** padronizado (kicker + display).
- **Chip de mapa `G`** estilo pill dourado (mantém regra: nome texto normal + 📍 Mapa ao lado, abre em nova aba).
- **Links**: continuam `<a target="_blank" rel="noreferrer">` (regra Core).

Ao redesenhar um guia, replicar a estrutura: PK_STYLES + Reveal + Hero + TOC + Bento + Sections com SectionTitle + cards lift. Manter todo o conteúdo/dados existentes do guia — só troca o shell visual.

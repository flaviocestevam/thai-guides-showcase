// Shell visual premium compartilhado pelos guias pagos (Noir & Gold).
// Referência canônica: src/pages/Phuket8821.tsx
import type { ReactNode, CSSProperties, ComponentType } from "react";
import { MapPin } from "lucide-react";

// ---------- Map chip factory ----------
export const makeMapChip = (islandSuffix: string) => {
  const G = ({ q, children, className = "" }: { q?: string; children: ReactNode; className?: string }) => {
    const query = q ?? (typeof children === "string" ? children : "");
    return (
      <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
        <span>{children}</span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ", " + islandSuffix)}`}
          target="_blank"
          rel="noreferrer"
          title={`Abrir ${query} no Google Maps`}
          className="pk-map-chip"
        >
          <MapPin className="w-3 h-3" /> Mapa
        </a>
      </span>
    );
  };
  return G;
};

// ---------- Reveal ----------
export const Reveal = ({ i = 0, children, className = "" }: { i?: number; children: ReactNode; className?: string }) => (
  <div
    className={`pk-reveal ${className}`}
    style={{ animationDelay: `${Math.min(i, 12) * 60}ms` } as CSSProperties}
  >
    {children}
  </div>
);

// ---------- Section title ----------
export const SectionTitle = ({
  icon: Icon, kicker, title,
}: { icon: ComponentType<{ className?: string }>; kicker?: string; title: ReactNode }) => (
  <div className="mb-10">
    {kicker && <p className="pk-kicker">{kicker}</p>}
    <h2 className="pk-h2">
      <Icon className="w-7 h-7 text-[hsl(var(--pk-gold))]" /> {title}
    </h2>
    <div className="pk-rule" />
  </div>
);

export type Tone = "ok" | "premium" | "alert" | "warn" | "info";
export const TONE_CLASS: Record<Tone, string> = {
  ok: "pk-tone-ok",
  premium: "pk-tone-premium",
  alert: "pk-tone-alert",
  warn: "pk-tone-warn",
  info: "pk-tone-info",
};

// ---------- Style block (scoped a .pk-root) ----------
export const PK_STYLES = `
.pk-root {
  --pk-bg: 0 0% 5%;
  --pk-bg-2: 0 0% 7%;
  --pk-surface: 0 0% 8%;
  --pk-surface-2: 0 0% 11%;
  --pk-fg: 40 30% 96%;
  --pk-muted: 40 8% 65%;
  --pk-line: 40 10% 18%;
  --pk-line-strong: 40 10% 24%;
  --pk-gold: 43 60% 54%;
  --pk-gold-soft: 43 75% 78%;
  --pk-ok: 150 50% 55%;
  --pk-alert: 0 70% 62%;
  --pk-warn: 38 90% 60%;
  --pk-info: 200 60% 65%;
  --pk-violet: 270 50% 70%;

  font-family: 'Fira Sans', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-feature-settings: "ss01", "kern", "liga";
  background: hsl(var(--pk-bg));
  color: hsl(var(--pk-fg));
  letter-spacing: 0.005em;
}
.pk-root :where(h1,h2,h3,h4) {
  font-family: 'DM Serif Display', Georgia, serif;
  font-weight: 400;
  letter-spacing: -0.015em;
}

.pk-display { font-size: clamp(2.6rem, 6vw, 5.25rem); line-height: 1.02; letter-spacing: -0.028em; color: hsl(var(--pk-fg)); text-wrap: balance; }
.pk-display-em { font-style: italic; color: hsl(var(--pk-gold)); font-weight: 400; }
.pk-lede { font-size: clamp(1.05rem, 1.3vw, 1.25rem); line-height: 1.55; color: hsl(var(--pk-muted)); text-wrap: pretty; }

.pk-eyebrow {
  display: inline-flex; align-items: center; gap: .55rem;
  font-size: .72rem; letter-spacing: .26em; text-transform: uppercase;
  color: hsl(var(--pk-gold-soft));
  padding: .45rem .85rem;
  border: 1px solid hsl(var(--pk-line-strong));
  border-radius: 999px;
  background: hsl(var(--pk-surface) / 0.5);
  backdrop-filter: blur(8px);
}
.pk-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: hsl(var(--pk-gold)); box-shadow: 0 0 12px hsl(var(--pk-gold) / 0.8); }

.pk-kicker { font-size: .7rem; letter-spacing: .22em; text-transform: uppercase; color: hsl(var(--pk-muted)); font-weight: 500; }
.pk-gold { color: hsl(var(--pk-gold)); }
.pk-gold-soft { color: hsl(var(--pk-gold-soft)); }

.pk-h2 { display: flex; align-items: center; gap: .8rem; font-size: clamp(1.9rem, 3vw, 2.8rem); line-height: 1.1; color: hsl(var(--pk-fg)); margin-top: .5rem; }
.pk-h3 { font-size: 1.45rem; line-height: 1.2; color: hsl(var(--pk-fg)); }
.pk-h4 { font-size: 1.15rem; line-height: 1.25; color: hsl(var(--pk-fg)); }

.pk-rule { margin-top: 1.25rem; height: 1px; background: linear-gradient(90deg, hsl(var(--pk-gold) / 0.6), transparent 60%); }

.pk-italic { font-style: italic; color: hsl(var(--pk-muted)); font-size: .92rem; }
.pk-link { color: hsl(var(--pk-gold-soft)); text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; transition: color .25s ease; }
.pk-link:hover { color: hsl(var(--pk-gold)); }

.pk-hero {
  position: relative; overflow: hidden;
  background: radial-gradient(ellipse at 50% 0%, hsl(43 30% 12% / .55), transparent 60%), linear-gradient(180deg, hsl(0 0% 6%), hsl(0 0% 4%));
  border-bottom: 1px solid hsl(var(--pk-line));
}
.pk-hero-grain { position: absolute; inset: 0; background-image: radial-gradient(hsl(40 30% 90% / 0.02) 1px, transparent 1px); background-size: 3px 3px; pointer-events: none; mix-blend-mode: overlay; }
.pk-orb { position: absolute; border-radius: 9999px; filter: blur(110px); opacity: .55; pointer-events: none; }
.pk-orb-a { width: 520px; height: 520px; top: -160px; left: -120px; background: radial-gradient(circle, hsl(43 70% 40% / .35), transparent 60%); }
.pk-orb-b { width: 460px; height: 460px; top: 20%; right: -160px; background: radial-gradient(circle, hsl(28 80% 35% / .25), transparent 60%); }
.pk-orb-c { width: 380px; height: 380px; bottom: -140px; left: 30%; background: radial-gradient(circle, hsl(43 60% 45% / .18), transparent 60%); }

.pk-tag { font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; padding: .4rem .8rem; border: 1px solid hsl(var(--pk-line-strong)); border-radius: 999px; color: hsl(var(--pk-muted)); background: hsl(var(--pk-surface) / 0.4); }
.pk-tag-sm { font-size: .65rem; letter-spacing: .14em; text-transform: uppercase; padding: .25rem .55rem; border: 1px solid hsl(var(--pk-line)); border-radius: 4px; color: hsl(var(--pk-muted)); }

.pk-bento { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (min-width: 768px) {
  .pk-bento { grid-template-columns: repeat(6, 1fr); gap: 1.25rem; }
  .pk-bento-wide { grid-column: span 3; }
  .pk-bento-item:not(.pk-bento-wide) { grid-column: span 2; }
}
.pk-bento-item {
  position: relative; padding: 1.5rem 1.5rem 1.75rem;
  border: 1px solid hsl(var(--pk-line)); border-radius: 16px;
  background: linear-gradient(160deg, hsl(var(--pk-surface) / 0.85), hsl(var(--pk-surface-2) / 0.65));
  backdrop-filter: blur(10px);
  transition: border-color .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1);
}
.pk-bento-item:hover { border-color: hsl(var(--pk-gold) / 0.45); transform: translateY(-3px); box-shadow: 0 18px 50px -22px hsl(43 80% 30% / 0.45); }
.pk-bento-h { font-family: 'DM Serif Display', serif; font-size: 1.6rem; line-height: 1.15; margin-top: .85rem; color: hsl(var(--pk-fg)); }
.pk-bento-p { margin-top: .75rem; color: hsl(var(--pk-muted)); font-size: .95rem; line-height: 1.55; }
.pk-bento-stat { font-family: 'DM Serif Display', serif; font-size: clamp(2.6rem, 5vw, 4rem); line-height: 1; margin-top: .6rem; color: hsl(var(--pk-gold)); }
.pk-bento-cap { font-size: .8rem; color: hsl(var(--pk-muted)); margin-top: .35rem; letter-spacing: .05em; }

.pk-toc { position: sticky; top: 0; z-index: 30; background: hsl(var(--pk-bg) / 0.78); backdrop-filter: blur(14px) saturate(140%); border-bottom: 1px solid hsl(var(--pk-line)); }
.pk-toc-chip {
  display: inline-flex; align-items: center; gap: .4rem;
  font-size: .75rem; font-weight: 500; padding: .5rem .85rem; border-radius: 999px;
  border: 1px solid hsl(var(--pk-line)); color: hsl(var(--pk-muted)); white-space: nowrap;
  transition: all .35s cubic-bezier(.22,1,.36,1);
}
.pk-toc-chip:hover { color: hsl(var(--pk-gold-soft)); border-color: hsl(var(--pk-gold) / 0.45); background: hsl(var(--pk-gold) / 0.06); }

.pk-card {
  position: relative; padding: 1.75rem; border-radius: 16px;
  border: 1px solid hsl(var(--pk-line));
  background: linear-gradient(160deg, hsl(var(--pk-surface) / 0.9), hsl(var(--pk-surface-2) / 0.6));
  backdrop-filter: blur(8px);
  transition: border-color .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1);
}
.pk-card:hover { border-color: hsl(var(--pk-gold) / 0.4); transform: translateY(-2px); box-shadow: 0 20px 50px -28px hsl(43 80% 28% / 0.55); }
.pk-card-tight { padding: 1.25rem 1.35rem; }
.pk-card-feature {
  padding: 2rem 2.25rem; border-color: hsl(var(--pk-gold) / 0.28);
  background: radial-gradient(ellipse at 0% 0%, hsl(43 60% 18% / 0.55), transparent 60%), linear-gradient(160deg, hsl(var(--pk-surface) / 0.9), hsl(var(--pk-surface-2) / 0.6));
}

.pk-tone-ok { border-color: hsl(var(--pk-ok) / 0.28); }
.pk-tone-ok:hover { border-color: hsl(var(--pk-ok) / 0.5); }
.pk-tone-premium { border-color: hsl(var(--pk-violet) / 0.3); }
.pk-tone-premium:hover { border-color: hsl(var(--pk-violet) / 0.55); }
.pk-tone-alert { border-color: hsl(var(--pk-alert) / 0.3); }
.pk-tone-alert:hover { border-color: hsl(var(--pk-alert) / 0.55); }
.pk-tone-warn { border-color: hsl(var(--pk-warn) / 0.28); }
.pk-tone-warn:hover { border-color: hsl(var(--pk-warn) / 0.5); }
.pk-tone-info { border-color: hsl(var(--pk-info) / 0.25); }
.pk-tone-info:hover { border-color: hsl(var(--pk-info) / 0.5); }

.pk-verdict { font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; padding: .3rem .6rem; border-radius: 999px; border: 1px solid hsl(var(--pk-line-strong)); color: hsl(var(--pk-gold-soft)); white-space: nowrap; background: hsl(var(--pk-surface-2) / 0.6); }

.pk-dl { display: grid; gap: .85rem; }
.pk-dl > div { display: grid; grid-template-columns: 100px 1fr; gap: .85rem; align-items: baseline; }
.pk-dl dt { font-size: .68rem; letter-spacing: .18em; text-transform: uppercase; color: hsl(var(--pk-muted)); padding-top: 2px; }
.pk-dl dd { font-size: .92rem; line-height: 1.5; color: hsl(var(--pk-fg)); }

.pk-divider { height: 1px; background: hsl(var(--pk-line)); }

.pk-ol { list-style: none; counter-reset: pk; padding: 0; display: grid; gap: .65rem; }
.pk-ol li { counter-increment: pk; position: relative; padding-left: 2rem; line-height: 1.55; }
.pk-ol li::before { content: counter(pk, decimal-leading-zero); position: absolute; left: 0; top: 0; font-family: 'DM Serif Display', serif; font-size: .95rem; color: hsl(var(--pk-gold)); }

.pk-bullet {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  font-family: 'DM Serif Display', serif; font-size: .8rem;
  color: hsl(var(--pk-gold)); border: 1px solid hsl(var(--pk-gold) / 0.4);
  flex-shrink: 0; margin-top: 2px;
}

.pk-callout { display: flex; gap: .85rem; padding: 1.1rem 1.25rem; border-radius: 14px; border: 1px solid; font-size: .92rem; line-height: 1.55; backdrop-filter: blur(6px); }
.pk-callout-warn { background: hsl(var(--pk-warn) / 0.05); border-color: hsl(var(--pk-warn) / 0.3); color: hsl(var(--pk-fg)); }
.pk-callout-warn svg { color: hsl(var(--pk-warn)); }
.pk-callout-alert { background: hsl(var(--pk-alert) / 0.05); border-color: hsl(var(--pk-alert) / 0.3); color: hsl(var(--pk-fg)); }
.pk-callout-alert svg { color: hsl(var(--pk-alert)); }
.pk-callout-info { background: hsl(var(--pk-gold) / 0.04); border-color: hsl(var(--pk-gold) / 0.25); color: hsl(var(--pk-fg)); }
.pk-callout-info svg { color: hsl(var(--pk-gold)); }

.pk-table { width: 100%; border-collapse: collapse; font-size: .92rem; }
.pk-table thead th { text-align: left; font-size: .68rem; letter-spacing: .2em; text-transform: uppercase; color: hsl(var(--pk-gold-soft)); padding: 1rem 1.25rem; background: hsl(var(--pk-surface-2) / 0.8); border-bottom: 1px solid hsl(var(--pk-line-strong)); }
.pk-table tbody td { padding: 1rem 1.25rem; border-bottom: 1px solid hsl(var(--pk-line)); }
.pk-table tbody tr:last-child td { border-bottom: 0; }
.pk-table tbody tr { transition: background .25s ease; }
.pk-table tbody tr:hover { background: hsl(var(--pk-gold) / 0.04); }

.pk-map-chip {
  display: inline-flex; align-items: center; gap: .25rem;
  font-size: .65rem; font-weight: 500; letter-spacing: .04em;
  padding: .15rem .45rem; border-radius: 6px;
  border: 1px solid hsl(var(--pk-gold) / 0.35); background: hsl(var(--pk-gold) / 0.08);
  color: hsl(var(--pk-gold-soft)); text-decoration: none !important;
  transition: all .25s ease; vertical-align: middle; white-space: nowrap;
}
.pk-map-chip:hover { background: hsl(var(--pk-gold) / 0.18); border-color: hsl(var(--pk-gold) / 0.6); color: hsl(var(--pk-gold)); }
.pk-map-chip-inline { font-size: .65rem; padding: .1rem .35rem; }

.pk-island-link {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.1rem 1.25rem; border-radius: 12px;
  border: 1px solid hsl(var(--pk-line)); background: hsl(var(--pk-surface) / 0.6);
  color: hsl(var(--pk-fg)); font-size: .92rem;
  transition: all .35s cubic-bezier(.22,1,.36,1);
}
.pk-island-link:hover { border-color: hsl(var(--pk-gold) / 0.5); background: hsl(var(--pk-gold) / 0.06); color: hsl(var(--pk-gold-soft)); transform: translateY(-2px); }
.pk-island-link:hover svg { transform: translate(2px, -2px); color: hsl(var(--pk-gold)); }

@keyframes pkReveal { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
.pk-reveal { opacity: 0; animation: pkReveal .9s cubic-bezier(.22,1,.36,1) forwards; }

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

@media (prefers-reduced-motion: reduce) {
  .pk-reveal { opacity: 1; animation: none; transform: none; }
  .pk-card, .pk-bento-item, .pk-island-link, .pk-toc-chip { transition: none; }
}
`;

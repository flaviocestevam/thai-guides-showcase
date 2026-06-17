import { useState, useEffect, useRef, useId } from "react";
import {
  Check,
  X,
  Star,
  Shield,
  Clock,
  ChevronDown,
  ArrowRight,
  Sparkles,
  AlertTriangle,
  Lock,
  Zap,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection } from "@/components/ConversionSections";

export type SalesContent = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroWarning: string;
  heroBgGradient: string;
  heroEmoji: string;
  ctaLink: string;
  ctaText: string;
  pains: { icon?: string; title: string; desc: string }[];
  features: { icon?: string; title: string; desc: string }[];
  modules: { title: string; desc: string; bullets: string[] }[];
  bonuses: { title: string; desc: string; value: string }[];
  testimonials: { name: string; city: string; text: string }[];
  comparison: { ours: string[]; theirs: string[] };
  authority: { title: string; paragraphs: string[]; bullets: string[] };
  pricing: {
    badge: string;
    oldPrice: string;
    price: string;
    priceCents: string;
    installments: string;
    includes: string[];
  };
  guarantee: { days: number; title: string; text: string };
  faqs: { q: string; a: string }[];
  finalCTA: { title: string; subtitle: string };
};

/* ---------- Reveal on scroll with stagger ---------- */
const Reveal = ({
  children,
  delay = 0,
  as: As = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref as any} className={`reveal ${className}`}>
      {children}
    </As>
  );
};

/* ---------- Countdown ---------- */
const Countdown = ({ hours = 24 }: { hours?: number }) => {
  const [t, setT] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const end = Date.now() + hours * 3600000;
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setT({
        h: Math.floor(d / 3600000),
        m: Math.floor((d / 60000) % 60),
        s: Math.floor((d / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [hours]);
  const Box = ({ v, l }: { v: number; l: string }) => (
    <div className="glass-card rounded-2xl px-5 py-4 min-w-[80px] md:min-w-[104px]">
      <div className="text-4xl md:text-5xl font-display font-bold text-primary tabular-nums tracking-editorial leading-none">
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {l}
      </div>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <Box v={t.h} l="Horas" />
      <span className="text-2xl text-primary/40 font-light">:</span>
      <Box v={t.m} l="Min" />
      <span className="text-2xl text-primary/40 font-light">:</span>
      <Box v={t.s} l="Seg" />
    </div>
  );
};

/* ---------- FAQ Item ---------- */
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="glass-soft rounded-2xl overflow-hidden ease-premium transition-all hover:border-primary/30">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-foreground/[0.02] transition-colors"
      >
        <span className="font-display font-semibold text-base md:text-lg tracking-editorial text-pretty">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 ease-premium transition-transform duration-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={id}
        className="grid ease-premium transition-[grid-template-rows] duration-500"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed text-pretty">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- CTA ---------- */
const CTA = ({
  href,
  children,
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
}) => (
  <a
    href={href}
    className={`premium-cta inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold rounded-full overflow-hidden shadow-premium ${
      size === "lg" ? "text-base md:text-lg px-10 py-5" : "text-sm md:text-base px-7 py-4"
    }`}
    style={{ backgroundSize: "200% 100%" }}
  >
    <span className="relative z-10 tracking-wide">{children}</span>
    <ArrowRight className="w-5 h-5 relative z-10 ease-premium transition-transform group-hover:translate-x-1" />
  </a>
);

/* ---------- Section header ---------- */
const SectionHeader = ({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
}) => (
  <div className={`mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}>
    {eyebrow && (
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.28em] uppercase text-primary">
          <span className="w-6 h-px bg-primary/60" /> {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={80}>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mt-4 tracking-editorial leading-[1.05] text-balance">
        {title}
      </h2>
    </Reveal>
  </div>
);

const SalesPage = ({ c }: { c: SalesContent }) => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden antialiased selection:bg-primary/30">
    <SEO title={c.seoTitle} description={c.seoDescription} canonicalPath={`/${c.slug}`} />
    <Header />
    <main className="pt-20">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4">
        <BackToHome />
      </div>

      {/* ============== HERO ============== */}
      <section
        className={`relative min-h-[92vh] flex items-center justify-center overflow-hidden ${c.heroBgGradient}`}
      >
        {/* Mesh + orbs */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="orb w-[520px] h-[520px] -top-40 -left-40" style={{ background: "hsl(var(--primary) / 0.5)" }} />
        <div className="orb w-[420px] h-[420px] top-1/3 -right-32" style={{ background: "hsl(var(--accent) / 0.45)" }} />
        <div className="absolute inset-0 opacity-[0.07] text-[28rem] flex items-center justify-center pointer-events-none select-none">
          {c.heroEmoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24 md:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 glass-soft text-primary font-medium text-[11px] md:text-xs px-4 py-2 rounded-full tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" /> {c.heroBadge}
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.98] tracking-editorial text-balance">
              {c.heroTitle}{" "}
              <span className="text-gradient-gold italic font-bold">{c.heroHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.7] text-pretty">
              {c.heroSubtitle}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-8 glass-card rounded-2xl px-6 py-5 max-w-2xl mx-auto text-left">
              <p className="text-sm md:text-base leading-relaxed text-pretty flex gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-foreground">Leia até o final</strong>{" "}
                  <span className="text-muted-foreground">— {c.heroWarning}</span>
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-10">
              <CTA href={c.ctaLink} size="lg">
                {c.ctaText}
              </CTA>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary/70" /> Pagamento Seguro</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary/70" /> Acesso Imediato</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary/70" /> Garantia 7 dias</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== COUNTDOWN ============== */}
      <section className="py-16 px-4 relative">
        <hr className="hairline max-w-5xl mx-auto mb-16" />
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary font-semibold mb-6 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> Oferta com desconto termina em
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Countdown hours={24} />
          </Reveal>
        </div>
        <hr className="hairline max-w-5xl mx-auto mt-16" />
      </section>

      {/* ============== PAIN ============== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Você reconhece?"
            title="Os erros que custam caro a quem não se preparou"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {c.pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="card-lift h-full glass-soft rounded-2xl p-7 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-destructive/15 flex items-center justify-center flex-shrink-0">
                      <X className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl mb-2 tracking-editorial text-balance">
                        {p.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-[1.7] text-pretty">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURES ============== */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="A solução"
            title="Tudo que você precisa em um só lugar"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {c.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="card-lift h-full glass-card rounded-2xl p-8">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3 tracking-editorial">
                    {f.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-[1.7] text-pretty">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== COMPARISON ============== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Com o guia vs. sem o guia" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <div className="h-full glass-soft rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl mb-6 text-destructive flex items-center gap-3 tracking-editorial">
                  <span className="w-9 h-9 rounded-full bg-destructive/15 flex items-center justify-center">
                    <X className="w-4 h-4" />
                  </span>
                  Sem o guia
                </h3>
                <ul className="space-y-4">
                  {c.comparison.theirs.map((t) => (
                    <li key={t} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      <X className="w-4 h-4 text-destructive flex-shrink-0 mt-1" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full glass-card rounded-2xl p-8 shadow-premium border-primary/30">
                <h3 className="font-display font-bold text-xl mb-6 text-primary flex items-center gap-3 tracking-editorial">
                  <span className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </span>
                  Com o guia
                </h3>
                <ul className="space-y-4">
                  {c.comparison.ours.map((t) => (
                    <li key={t} className="flex gap-3 text-sm md:text-base leading-relaxed">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== AUTHORITY ============== */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionHeader eyebrow="Por que confiar" title={c.authority.title} />
          <div className="space-y-5">
            {c.authority.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base md:text-lg text-muted-foreground leading-[1.8] max-w-3xl mx-auto text-pretty">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-14">
            {c.authority.bullets.map((b, i) => (
              <Reveal key={b} delay={i * 90}>
                <div className="card-lift glass-soft rounded-2xl p-5 flex items-start gap-3 text-left h-full">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base font-medium">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MODULES ============== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="O que está incluído"
            title="Tudo o que você vai aprender"
          />
          <div className="space-y-6">
            {c.modules.map((m, i) => (
              <Reveal key={m.title} delay={i * 80}>
                <div className="card-lift glass-soft rounded-2xl p-7 md:p-10">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-premium">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl md:text-2xl mb-3 tracking-editorial text-balance">
                        {m.title}
                      </h3>
                      <p className="text-muted-foreground mb-5 leading-[1.7] text-pretty">
                        {m.desc}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm md:text-base">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" /> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== BONUSES ============== */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeader eyebrow="Bônus exclusivos" title="Você ainda leva grátis" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {c.bonuses.map((b, i) => (
              <Reveal key={b.title} delay={i * 90}>
                <div className="card-lift relative h-full glass-card rounded-2xl p-7 pt-9">
                  <span className="absolute -top-3 right-5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-[10px] font-bold tracking-[0.15em] px-3 py-1.5 rounded-full uppercase shadow-premium">
                    Bônus
                  </span>
                  <h3 className="font-display font-bold text-lg mb-2 tracking-editorial">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-[1.7] text-pretty">
                    {b.desc}
                  </p>
                  <p className="text-xs text-primary font-semibold tracking-wide">
                    Valor: <span className="line-through text-muted-foreground/70">{b.value}</span>{" "}
                    — GRÁTIS
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader eyebrow="Depoimentos" title="O que dizem quem já comprou" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {c.testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="card-lift h-full glass-soft rounded-2xl p-7 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-base text-foreground/90 leading-[1.7] mb-6 flex-1 text-pretty">
                    "{t.text}"
                  </blockquote>
                  <figcaption className="text-xs md:text-sm text-muted-foreground border-t border-foreground/5 pt-4">
                    <strong className="text-foreground font-display">{t.name}</strong> · {t.city}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PRICING ============== */}
      <section id="comprar" className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-mesh opacity-70 pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary">
                {c.pricing.badge}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 tracking-editorial text-balance">
                Garanta o seu agora
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="relative glass-card rounded-3xl p-8 md:p-12 shadow-premium border-primary/40">
              <div className="text-center mb-8">
                <p className="text-muted-foreground line-through text-base">
                  De {c.pricing.oldPrice}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">
                  por apenas
                </p>
                <div className="flex items-start justify-center gap-1 mt-3">
                  <span className="text-2xl font-display font-bold text-primary mt-4">R$</span>
                  <span className="text-7xl md:text-8xl font-display font-black text-primary tracking-editorial leading-none">
                    {c.pricing.price}
                  </span>
                  <span className="text-2xl font-display font-bold text-primary mt-4">
                    ,{c.pricing.priceCents}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">ou {c.pricing.installments}</p>
              </div>
              <hr className="hairline mb-8" />
              <ul className="space-y-4 mb-10">
                {c.pricing.includes.map((i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {i}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <CTA href={c.ctaLink} size="lg">
                  {c.ctaText}
                </CTA>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 mt-8 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Pagamento Seguro</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Acesso Imediato</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== GUARANTEE ============== */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/40 items-center justify-center mb-8 shadow-premium">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary">
              Garantia incondicional
            </span>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-editorial text-balance">
              {c.guarantee.title}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="text-base md:text-lg text-muted-foreground leading-[1.8] text-pretty max-w-2xl mx-auto">
              {c.guarantee.text}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <SectionHeader eyebrow="Dúvidas frequentes" title="Perguntas comuns" />
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <FAQItem {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="py-28 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="orb w-[420px] h-[420px] -bottom-32 left-1/4" style={{ background: "hsl(var(--primary) / 0.4)" }} />
        <div className="relative max-w-3xl mx-auto text-center space-y-8">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-editorial leading-[1.05] text-balance">
              {c.finalCTA.title}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-xl text-muted-foreground leading-[1.7] text-pretty max-w-2xl mx-auto">
              {c.finalCTA.subtitle}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="pt-2">
              <CTA href={c.ctaLink} size="lg">
                {c.ctaText}
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <p className="text-xs text-muted-foreground tracking-wide">
              🔒 Pagamento 100% seguro · Acesso imediato · Garantia de {c.guarantee.days} dias
            </p>
          </Reveal>
        </div>
      </section>

      <InternalLinksSection currentPath={`/${c.slug}`} />
      <BackToHomeFooter />
    </main>
    <Footer />

    {/* Floating CTA */}
    <a
      href={c.ctaLink}
      className="premium-cta fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-xs z-50 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold text-sm md:text-base px-6 py-4 rounded-full text-center shadow-premium"
      style={{ backgroundSize: "200% 100%" }}
    >
      {c.ctaText}
    </a>
  </div>
);

export default SalesPage;

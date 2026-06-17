import { useState, useEffect } from "react";
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
  heroBgGradient: string; // tailwind gradient classes
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
    <div className="bg-card border border-primary/40 rounded-xl px-4 py-3 min-w-[72px] md:min-w-[88px]">
      <div className="text-3xl md:text-4xl font-display font-bold text-primary tabular-nums">
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-2 md:gap-3">
      <Box v={t.h} l="Horas" />
      <Box v={t.m} l="Min" />
      <Box v={t.s} l="Seg" />
    </div>
  );
};

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-card/70 transition-colors"
      >
        <span className="font-display font-semibold text-base md:text-lg">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

const CTA = ({ href, children, size = "md" }: { href: string; children: React.ReactNode; size?: "md" | "lg" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-xl shadow-fire hover:scale-[1.02] transition-transform animate-pulse-glow ${
      size === "lg" ? "text-base md:text-lg px-8 py-5" : "text-sm md:text-base px-6 py-4"
    }`}
  >
    {children}
    <ArrowRight className="w-5 h-5" />
  </a>
);

const SalesPage = ({ c }: { c: SalesContent }) => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <SEO title={c.seoTitle} description={c.seoDescription} canonicalPath={`/${c.slug}`} />
    <Header />
    <main className="pt-20">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4">
        <BackToHome />
      </div>

      {/* HERO */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${c.heroBgGradient}`}>
        <div className="absolute inset-0 opacity-20 text-[28rem] flex items-center justify-center pointer-events-none select-none">
          {c.heroEmoji}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 py-20">
          <span className="inline-block bg-primary/20 border border-primary/40 text-primary font-semibold text-xs md:text-sm px-5 py-2 rounded-full tracking-wider uppercase">
            {c.heroBadge}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
            {c.heroTitle} <span className="text-gradient-gold">{c.heroHighlight}</span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {c.heroSubtitle}
          </p>
          <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-xl px-6 py-4 max-w-2xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed">
              <AlertTriangle className="w-4 h-4 inline text-destructive mr-1" />
              <strong>Leia até o final</strong> — {c.heroWarning}
            </p>
          </div>
          <CTA href={c.ctaLink} size="lg">{c.ctaText}</CTA>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1"><Lock className="w-4 h-4" /> Pagamento Seguro</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso Imediato</span>
            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Garantia 7 dias</span>
          </div>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-12 px-4 border-y border-border bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> Oferta com desconto termina em
          </p>
          <Countdown hours={24} />
        </div>
      </section>

      {/* PAIN */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Você reconhece?</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
              Os erros que custam caro a quem não se preparou
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.pains.map((p) => (
              <div key={p.title} className="bg-card border border-destructive/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <X className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES / SOLUÇÃO */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">A solução</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
              Tudo que você precisa em um só lugar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.features.map((f) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Com o guia vs. sem o guia</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-destructive/40 rounded-xl p-6">
              <h3 className="font-display font-bold text-xl mb-4 text-destructive flex items-center gap-2">
                <X className="w-5 h-5" /> Sem o guia
              </h3>
              <ul className="space-y-3">
                {c.comparison.theirs.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-primary/40 rounded-xl p-6 glow-orange">
              <h3 className="font-display font-bold text-xl mb-4 text-primary flex items-center gap-2">
                <Check className="w-5 h-5" /> Com o guia
              </h3>
              <ul className="space-y-3">
                {c.comparison.ours.map((t) => (
                  <li key={t} className="flex gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Por que confiar</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-8">{c.authority.title}</h2>
          {c.authority.paragraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {c.authority.bullets.map((b) => (
              <div key={b} className="bg-card border border-border rounded-xl p-4 flex items-start gap-2 text-left">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES / CONTEÚDO */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">O que está incluído</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Tudo o que você vai aprender</h2>
          </div>
          <div className="space-y-5">
            {c.modules.map((m, i) => (
              <div key={m.title} className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground font-display font-bold text-xl flex items-center justify-center flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{m.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{m.desc}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {m.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Bônus exclusivos</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Você ainda leva grátis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.bonuses.map((b) => (
              <div key={b.title} className="bg-card border border-primary/30 rounded-xl p-6 relative">
                <span className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  BÔNUS
                </span>
                <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{b.desc}</p>
                <p className="text-xs text-primary font-semibold">Valor: <span className="line-through">{b.value}</span> — GRÁTIS</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Depoimentos</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">O que dizem quem já comprou</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed mb-4">"{t.text}"</p>
                <div className="text-xs text-muted-foreground">
                  <strong className="text-foreground">{t.name}</strong> — {t.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="comprar" className="py-20 px-4 border-t border-border bg-card/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{c.pricing.badge}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Garanta o seu agora</h2>
          </div>
          <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-10 glow-orange">
            <div className="text-center mb-6">
              <p className="text-muted-foreground line-through text-lg">De {c.pricing.oldPrice}</p>
              <p className="text-sm text-muted-foreground mt-2">por apenas</p>
              <div className="flex items-start justify-center gap-1 mt-2">
                <span className="text-2xl font-display font-bold text-primary mt-3">R$</span>
                <span className="text-6xl md:text-7xl font-display font-black text-primary">{c.pricing.price}</span>
                <span className="text-2xl font-display font-bold text-primary mt-3">,{c.pricing.priceCents}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">ou {c.pricing.installments}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {c.pricing.includes.map((i) => (
                <li key={i} className="flex gap-2 text-sm">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {i}
                </li>
              ))}
            </ul>
            <CTA href={c.ctaLink} size="lg">{c.ctaText}</CTA>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Pagamento Seguro</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex w-24 h-24 rounded-full bg-primary/10 border-2 border-primary items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Garantia incondicional</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6">{c.guarantee.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.guarantee.text}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 border-t border-border bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">Dúvidas frequentes</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">Perguntas comuns</h2>
          </div>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 border-t border-border bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold">{c.finalCTA.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground">{c.finalCTA.subtitle}</p>
          <CTA href={c.ctaLink} size="lg">{c.ctaText}</CTA>
          <p className="text-xs text-muted-foreground">
            🔒 Pagamento 100% seguro · Acesso imediato · Garantia de {c.guarantee.days} dias
          </p>
        </div>
      </section>

      <InternalLinksSection currentPath={`/${c.slug}`} />
      <BackToHomeFooter />
    </main>
    <Footer />

    {/* Floating CTA */}
    <a
      href={c.ctaLink}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 z-50 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-sm md:text-base px-6 py-4 rounded-xl shadow-fire text-center animate-pulse-glow"
    >
      {c.ctaText}
    </a>
  </div>
);

export default SalesPage;

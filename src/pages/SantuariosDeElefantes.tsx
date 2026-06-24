import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { ConversionBlock } from "@/components/ConversionSections";
import RelatedSalesGrid from "@/components/RelatedSalesGrid";
import { Check, Shield, Clock, Star, MapPin, AlertTriangle, ChevronDown, Users, BookOpen, Zap, Heart, ArrowRight, Eye, TrendingUp, X, ThumbsDown, ThumbsUp, Quote, Sparkles, Ban, CircleCheck } from "lucide-react";

import { useState, useEffect, useCallback } from "react";
import heroAsset from "@/assets/generated/elefantes-hero.png.asset.json";

const HERO_IMG = heroAsset.url;
const ENP_IMG = "https://guia-elefantes.lovable.app/assets/elephant-nature-park-C5qJR4Vf.jpg";
const PHUKET_IMG = "https://guia-elefantes.lovable.app/assets/phuket-elephant-sanctuary-B7dQdaJu.jpg";

const CAKTO_LINK = "https://pay.cakto.com.br/dxfjjfs_830176";

/* ─── SOCIAL PROOF POPUP ─── */
const recentBuyers = [
  { name: "Mariana L.", city: "São Paulo", time: "3 min" },
  { name: "Pedro H.", city: "Belo Horizonte", time: "7 min" },
  { name: "Camila R.", city: "Florianópolis", time: "12 min" },
  { name: "Lucas F.", city: "Porto Alegre", time: "18 min" },
  { name: "Fernanda S.", city: "Brasília", time: "23 min" },
  { name: "Thiago M.", city: "Recife", time: "31 min" },
  { name: "Isabela C.", city: "Curitiba", time: "45 min" },
  { name: "João P.", city: "Salvador", time: "52 min" },
];

const SocialProofPopup = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const showNext = () => {
      if (dismissed) return;
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % recentBuyers.length);
        }, 500);
      }, 4000);
    };
    const initial = setTimeout(showNext, 5000);
    const interval = setInterval(showNext, 8000);
    return () => { clearTimeout(initial); clearInterval(interval); };
  }, [dismissed]);

  if (dismissed) return null;
  const buyer = recentBuyers[current];

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 bg-elephant-cream border border-elephant-border rounded-xl shadow-2xl p-4 max-w-[320px] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={() => setDismissed(true)} className="absolute top-2 right-2 text-elephant-muted-fg hover:text-elephant-fg">
        <X className="w-3.5 h-3.5" />
      </button>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
          <Check className="w-5 h-5 text-forest" />
        </div>
        <div>
          <p className="text-sm font-semibold text-elephant-fg">
            {buyer.name} <span className="font-normal text-elephant-muted-fg">de {buyer.city}</span>
          </p>
          <p className="text-xs text-elephant-muted-fg">
            Comprou o guia há <span className="text-forest font-medium">{buyer.time}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─── LIVE VIEWERS COUNTER ─── */
const LiveViewers = () => {
  const [count, setCount] = useState(37);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const displayed = Math.max(28, Math.min(52, count));
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
      </span>
      <span className="text-elephant-cream/70"><strong className="text-elephant-cream">{displayed}</strong> pessoas vendo agora</span>
    </div>
  );
};

/* ─── STICKY URGENCY BAR ─── */
const StickyUrgencyBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-forest-dark/95 backdrop-blur-sm border-b border-elephant-gold/20 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2.5 gap-4">
        <div className="hidden md:flex items-center gap-3 text-elephant-cream text-sm">
          <AlertTriangle className="w-4 h-4 text-elephant-gold" />
          <span>🔥 <strong>51% OFF</strong> — Oferta expira em breve</span>
        </div>
        <LiveViewers />
        <a
          href={CAKTO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-elephant-gold text-elephant-gold-fg px-5 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform"
        >
          GARANTIR MINHA VAGA →
        </a>
      </div>
    </div>
  );
};

/* ─── FLOATING BOTTOM CTA ─── */
const FloatingBottomCTA = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-forest-dark/95 backdrop-blur-md border-t border-elephant-gold/20 py-3 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm text-elephant-cream/70">
            <span className="line-through">R$ 197</span>{" "}
            <span className="text-2xl font-display font-bold text-elephant-gold">R$ 67</span>{" "}
            <span className="text-xs">ou 6x de R$ 18,50</span>
          </p>
        </div>
        <a
          href={CAKTO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-elephant-gold text-elephant-gold-fg font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform animate-pulse-subtle text-sm whitespace-nowrap"
        >
          🐘 QUERO MEU GUIA AGORA
        </a>
      </div>
    </div>
  );
};

/* ─── SPOTS LEFT COUNTER ─── */
const SpotsCounter = () => {
  const [spots, setSpots] = useState(23);
  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((prev) => (prev > 5 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
      </span>
      <span className="text-elephant-cream/70">Apenas <strong className="text-elephant-cream">{spots}</strong> vagas restantes neste preço</span>
    </div>
  );
};

const CountdownTimer = () => {
  const [time, setTime] = useState({ minutes: 15, seconds: 0 });
  useEffect(() => {
    const end = Date.now() + 15 * 60000;
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setTime({
        minutes: Math.floor(d / 60000),
        seconds: Math.floor((d / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-3 justify-center">
      {[
        { val: time.minutes, label: "Min" },
        { val: time.seconds, label: "Seg" },
      ].map((t) => (
        <div key={t.label} className="bg-forest-dark text-elephant-cream px-4 py-2 rounded-lg text-center min-w-[70px]">
          <div className="text-2xl font-bold font-display">{String(t.val).padStart(2, "0")}</div>
          <div className="text-xs opacity-70">{t.label}</div>
        </div>
      ))}
    </div>
  );
};

const CTAButton = ({ large = false }: { large?: boolean }) => (
  <a
    href={CAKTO_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-elephant-gold text-elephant-gold-fg font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl animate-pulse-subtle ${
      large ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg"
    }`}
  >
    QUERO MEU GUIA AGORA <ArrowRight className="w-5 h-5" />
  </a>
);

const TestimonialCard = ({ name, text, location, verified = true }: { name: string; text: string; location: string; verified?: boolean }) => (
  <div className="bg-elephant-card p-6 rounded-xl border border-elephant-border">
    <div className="flex items-center justify-between mb-3">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-elephant-gold text-elephant-gold" />
        ))}
      </div>
      {verified && (
        <span className="flex items-center gap-1 text-xs text-forest bg-forest/10 px-2 py-0.5 rounded-full">
          <Check className="w-3 h-3" /> Compra verificada
        </span>
      )}
    </div>
    <p className="text-elephant-fg/80 italic mb-4 font-body">"{text}"</p>
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-elephant-cream font-bold text-sm">
        {name[0]}
      </div>
      <div>
        <p className="font-semibold text-elephant-fg text-sm">{name}</p>
        <p className="text-elephant-muted-fg text-xs">{location}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-elephant-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-elephant-fg font-body"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-elephant-muted-fg transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-elephant-muted-fg font-body">{a}</p>}
    </div>
  );
};

const SantuariosDeElefantes = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Guia Santuários de Elefantes na Tailândia",
    "brand": { "@type": "Brand", "name": "Guia Tailândia" },
    "offers": { "@type": "Offer", "price": "97.00", "priceCurrency": "BRL" }
  };

  return (
    <div className="min-h-screen bg-elephant-bg font-body text-elephant-fg">
      <SEO 
        title="Santuários de Elefantes na Tailândia — Guia Ético"
        description="Como escolher um santuário de elefantes ético na Tailândia? Guia completo com avaliações, custos e o que ninguém te conta para evitar maus-tratos."
        canonicalPath="/santuariosdeelefantes"
      />
      <StructuredData data={productSchema} />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-4">
          <BackToHome />
        </div>
        <StickyUrgencyBar />
        <SocialProofPopup />
        <FloatingBottomCTA />

        {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={HERO_IMG} alt="Elefante em santuário na Tailândia" {...({ fetchpriority: "high" } as any)} decoding="async" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/80 via-forest-dark/60 to-forest-dark/90" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-elephant-cream/10 backdrop-blur-sm text-elephant-cream/90 px-3 py-1.5 rounded-full text-xs border border-elephant-cream/10">
              <Users className="w-3.5 h-3.5" /> 2.847+ viajantes já compraram
            </span>
            <span className="inline-flex items-center gap-1.5 bg-elephant-cream/10 backdrop-blur-sm text-elephant-cream/90 px-3 py-1.5 rounded-full text-xs border border-elephant-cream/10">
              <Star className="w-3.5 h-3.5 fill-elephant-gold text-elephant-gold" /> 4.9/5 avaliação
            </span>
          </div>
          <span className="inline-block bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-red-500/30 animate-pulse">
            ⚡ ÚLTIMAS HORAS — 51% DE DESCONTO
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-elephant-cream leading-tight mb-6">
            Pare de Financiar o <span className="text-elephant-gold">Sofrimento</span> de Elefantes
          </h1>
          <p className="text-elephant-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            80% dos "santuários" na Tailândia são falsos. Este guia te mostra exatamente <strong className="text-elephant-cream">onde ir, onde NÃO ir</strong> e como viver a experiência mais emocionante da sua vida — de forma 100% ética.
          </p>
          <CTAButton large />
          <p className="text-elephant-cream/50 text-sm mt-4">🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias</p>
          <div className="mt-6 flex justify-center">
            <LiveViewers />
          </div>
        </div>
      </section>

      {/* URGENCY BAR */}
      <div className="bg-forest-dark text-elephant-cream py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-elephant-gold animate-pulse" />
            <span className="font-semibold">Preço promocional acaba em:</span>
          </div>
          <CountdownTimer />
        </div>
      </div>

      {/* MARQUEE SOCIAL PROOF */}
      <div className="bg-elephant-gold/10 border-y border-elephant-gold/20 py-3 px-6 overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...recentBuyers, ...recentBuyers].map((b, i) => (
            <span key={i} className="text-sm text-elephant-fg/70 flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-forest" />
              <strong>{b.name}</strong> comprou há {b.time} — {b.city}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM AGITATION */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-8">
            Você sabia que pode estar <span className="text-red-400">financiando maus-tratos</span> sem perceber?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {[
              "Lugares que usam 'rescue' e 'sanctuary' no nome mas torturam elefantes",
              "Filhotes separados das mães pelo processo brutal do Phajaan",
              "Turistas pagando US$80+ em passeios que sustentam a exploração",
              "Fotos bonitas no Instagram escondendo uma realidade cruel",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-elephant-fg/80">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-elephant-muted-fg">
            A diferença entre uma experiência inesquecível e financiar crueldade é <strong className="text-elephant-fg">uma única decisão: ter a informação certa.</strong>
          </p>
        </div>
      </section>

      {/* EMOTIONAL STORY */}
      <section className="py-20 px-6 bg-forest-dark">
        <div className="max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-elephant-gold/40 mx-auto mb-6" />
          <blockquote className="font-display text-2xl md:text-3xl text-elephant-cream text-center leading-relaxed mb-8 italic">
            "Eu estava com o celular na mão, prestes a reservar um passeio de elefante em Chiang Mai. 
            Parecia perfeito: fotos lindas, avaliações positivas, preço bom. 
            Foi então que descobri que aqueles elefantes eram <span className="text-elephant-gold not-italic font-bold">torturados desde filhotes</span> para aceitar turistas nas costas."
          </blockquote>
          <p className="text-elephant-cream/60 text-center text-lg mb-8">
            Esse é o momento que separa dois tipos de turista: o que financia a crueldade sem saber — e o que <strong className="text-elephant-cream">escolhe fazer diferente</strong>.
          </p>
          <div className="text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* IMAGINE */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-10 h-10 text-elephant-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-8">
            Imagine Este Momento...
          </h2>
          <div className="text-left space-y-6 text-lg text-elephant-fg/80 leading-relaxed">
            <p>
              Você acorda cedo em Chiang Mai. O ar está fresco, com cheiro de terra molhada. Uma van te busca no hotel e, depois de uma hora por estradas de montanha, você chega a um vale verde cercado de floresta.
            </p>
            <p>
              Ali, <strong className="text-elephant-fg">elefantes caminham livres</strong>. Sem correntes. Sem selas. Sem shows. Eles comem, brincam no rio, cuidam dos filhotes — e você está ali, em silêncio, observando a cena mais bonita que já viu na vida.
            </p>
            <p>
              Um filhote curioso se aproxima. Você sente o toque áspero da tromba na sua mão. Seus olhos enchem de lágrimas. Não de tristeza — de <strong className="text-elephant-fg">gratidão por saber que fez a escolha certa</strong>.
            </p>
            <p className="text-elephant-gold font-semibold text-center text-xl">
              Esse momento existe. E este guia te leva até ele.
            </p>
          </div>
        </div>
      </section>

      {/* COM vs SEM GUIA */}
      <section className="py-20 px-6 bg-elephant-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg text-center mb-12">
            Dois Caminhos. Duas Experiências Completamente Diferentes.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 rounded-2xl p-8 border border-red-500/15">
              <div className="flex items-center gap-2 mb-6">
                <Ban className="w-6 h-6 text-red-400" />
                <h3 className="font-display text-xl font-bold text-red-400">Sem o Guia</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Paga US$80+ num 'santuário' que é na verdade um campo de exploração",
                  "Tira fotos com elefantes acorrentados sem perceber",
                  "Volta para casa e descobre que financiou maus-tratos",
                  "Sente culpa toda vez que vê as fotos da viagem",
                  "Perde horas pesquisando no Google sem chegar a uma conclusão",
                  "Fica sem saber se pode confiar nas avaliações do TripAdvisor",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-elephant-fg/70">
                    <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-forest/5 rounded-2xl p-8 border-2 border-forest/30 relative">
              <div className="absolute -top-3 right-4 bg-elephant-gold text-elephant-gold-fg px-3 py-1 text-xs font-bold rounded-full">
                RECOMENDADO
              </div>
              <div className="flex items-center gap-2 mb-6">
                <CircleCheck className="w-6 h-6 text-forest" />
                <h3 className="font-display text-xl font-bold text-forest">Com o Guia</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Vai direto ao santuário certo — verificado pessoalmente",
                  "Vive a experiência mais emocionante da viagem",
                  "Volta orgulhoso sabendo que fez a coisa certa",
                  "Cada foto é uma lembrança pura, sem culpa",
                  "Economiza horas de pesquisa com roteiros prontos",
                  "Tem segurança total de que sua escolha é ética",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-elephant-fg/80">
                    <Check className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <CTAButton large />
          </div>
        </div>
      </section>

      {/* SOLUTION + AUTHORITY */}
      <section className="py-20 px-6 bg-elephant-card">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-elephant-gold font-semibold text-sm uppercase tracking-wider">A Solução</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mt-2 mb-6">
              O Guia Que Eu Gostaria de Ter Antes de Ir
            </h2>
            <p className="text-elephant-muted-fg mb-6 leading-relaxed">
              Depois de visitar <strong className="text-elephant-fg">mais de uma dezena de santuários</strong> em diferentes regiões da Tailândia, compilei tudo o que aprendi neste guia completo. Vi lugares que me fizeram chorar de emoção — e lugares que me deram náusea.
            </p>
            <ul className="space-y-3">
              {[
                "Ranking dos santuários éticos verificados pessoalmente",
                "Lista negra dos lugares para EVITAR a todo custo",
                "Roteiros prontos (3, 5 e 7 dias) com custos detalhados",
                "Como chegar, quanto pagar, o que vestir e levar",
                "Frases em tailandês para se comunicar",
                "Critérios científicos para avaliar qualquer santuário",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center text-elephant-fg/80">
                  <Check className="w-5 h-5 text-forest shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={ENP_IMG} alt="Elephant Nature Park" className="rounded-2xl shadow-2xl" loading="lazy" width={800} height={800} />
            <div className="absolute -bottom-4 -right-4 bg-elephant-gold text-elephant-gold-fg px-5 py-3 rounded-xl font-bold shadow-lg">
              +12 santuários avaliados
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — Numbers */}
      <section className="py-16 px-6 bg-forest-dark">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, num: "2.847+", label: "Viajantes usaram" },
            { icon: MapPin, num: "12", label: "Santuários avaliados" },
            { icon: Star, num: "4.9/5", label: "Avaliação média" },
            { icon: BookOpen, num: "8", label: "Capítulos completos" },
          ].map((s) => (
            <div key={s.label}>
              <s.icon className="w-8 h-8 text-elephant-gold mx-auto mb-2" />
              <div className="text-3xl font-display font-bold text-elephant-cream">{s.num}</div>
              <div className="text-elephant-cream/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-4">
              O Que Dizem Quem Já Usou
            </h2>
            <p className="text-elephant-muted-fg mb-2">Experiências reais de viajantes brasileiros</p>
            <div className="flex items-center justify-center gap-2 text-sm text-forest">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Todas as avaliações são de compradores verificados</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <TestimonialCard
              name="Carolina S."
              location="São Paulo, SP"
              text="Sem esse guia, teria ido no santuário mais famoso de Chiang Mai — que é justamente um dos piores. Economizei dinheiro e fiz a coisa certa."
            />
            <TestimonialCard
              name="Rafael M."
              location="Curitiba, PR"
              text="Os roteiros prontos são incríveis. Cheguei na Tailândia sabendo exatamente o que fazer. A experiência com os elefantes foi o ponto alto da viagem."
            />
            <TestimonialCard
              name="Juliana P."
              location="Rio de Janeiro, RJ"
              text="Chorei vendo os elefantes livres no Elephant Nature Park. Agradeço todos os dias por ter encontrado esse guia antes de ir. Vale cada centavo."
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Marcos T."
              location="Goiânia, GO"
              text="Estava prestes a reservar um passeio de elefante em Phuket. Depois de ler o guia, mudei completamente os planos. Melhor decisão da viagem."
            />
            <TestimonialCard
              name="Ana Clara V."
              location="Fortaleza, CE"
              text="O checklist de viagem me salvou! Eu ia esquecer coisas básicas. E as frases em tailandês foram um diferencial enorme."
            />
            <TestimonialCard
              name="Bruno K."
              location="Porto Alegre, RS"
              text="Por R$67 eu economizei facilmente R$500 em passeios furada. O guia se paga na primeira decisão que você toma com ele."
            />
          </div>
          <div className="mt-12 text-center bg-elephant-card rounded-xl p-6 border border-elephant-border max-w-md mx-auto">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-elephant-gold text-elephant-gold" />
              ))}
            </div>
            <p className="font-display text-2xl font-bold text-elephant-fg">4.9 de 5.0</p>
            <p className="text-elephant-muted-fg text-sm">Baseado em 347 avaliações verificadas</p>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 px-6 bg-elephant-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-12">
            Tudo Que Você Recebe
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {[
              { icon: BookOpen, title: "Guia Completo (8 Capítulos)", desc: "Tudo sobre santuários éticos, critérios, custos e logística", val: "R$ 197" },
              { icon: MapPin, title: "3 Roteiros Prontos", desc: "Itinerários de 3, 5 e 7 dias com valores detalhados", val: "R$ 67" },
              { icon: AlertTriangle, title: "Lista Negra Exclusiva", desc: "Santuários falsos para evitar a todo custo", val: "R$ 67" },
              { icon: Zap, title: "Frases em Tailandês", desc: "Comunicação básica para se virar em qualquer situação", val: "R$ 47" },
              { icon: Shield, title: "Checklist de Viagem", desc: "O que levar, vestir, vacinas e documentos", val: "R$ 37" },
              { icon: Heart, title: "Atualizações Gratuitas", desc: "Toda atualização futura do guia, sem custo extra", val: "Inestimável" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 bg-elephant-bg rounded-xl border border-elephant-border">
                <item.icon className="w-8 h-8 text-elephant-gold shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-elephant-fg">{item.title}</h3>
                    <span className="text-elephant-muted-fg line-through text-sm">{item.val}</span>
                  </div>
                  <p className="text-elephant-muted-fg text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BONUS */}
          <div className="max-w-2xl mx-auto mt-4">
            <div className="relative bg-elephant-bg rounded-2xl border-2 border-elephant-gold/30 p-6 overflow-hidden">
              <div className="absolute top-0 left-0 bg-elephant-gold text-elephant-gold-fg px-4 py-1 text-xs font-bold rounded-br-lg uppercase tracking-wider">
                🎁 Bônus Exclusivo
              </div>
              <div className="mt-6 flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-elephant-gold/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-elephant-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-bold text-elephant-fg">Voluntariado em Santuários de Elefantes</h3>
                    <span className="text-elephant-muted-fg line-through text-sm">R$ 67</span>
                    <span className="text-forest font-bold text-sm">GRÁTIS</span>
                  </div>
                  <p className="text-elephant-muted-fg text-sm leading-relaxed">
                    Guia completo para quem quer ir além da visita: como se voluntariar nos melhores santuários, 
                    requisitos, custos reais, duração, o que esperar do dia a dia e depoimentos de quem já viveu 
                    essa experiência transformadora. Inclui contatos diretos e dicas para ser aceito.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="comprar" className="py-20 px-6 bg-forest-dark">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-elephant-gold font-semibold text-sm uppercase tracking-wider">Oferta Especial</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-cream mt-2 mb-4">
            Quanto Vale Sua Consciência Tranquila?
          </h2>
          <p className="text-elephant-cream/60 mb-8">
            Valor total de todos os bônus: <span className="line-through">R$ 445</span>
          </p>

          <div className="bg-elephant-cream rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg animate-pulse">
              🔥 51% OFF
            </div>
            <p className="text-elephant-muted-fg text-sm mb-1">De <span className="line-through">R$ 197</span> por apenas</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-forest-dark text-lg font-semibold">R$</span>
              <span className="font-display text-6xl font-bold text-forest-dark">97</span>
              <span className="text-elephant-muted-fg text-sm">,00</span>
            </div>
            <p className="text-elephant-muted-fg text-sm mb-2">ou 6x de R$ 18,50</p>

            <div className="flex items-center justify-center gap-2 text-xs text-forest bg-forest/5 rounded-full px-3 py-1 mb-6 mx-auto w-fit">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>127 pessoas compraram nas últimas 24h</span>
            </div>

            <CTAButton large />

            <div className="mt-6 flex flex-col items-center gap-2 text-sm text-elephant-muted-fg">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-forest" />
                Garantia incondicional de 7 dias
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-forest" />
                Acesso imediato após o pagamento
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-forest" />
                Acesso vitalício + atualizações
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <CountdownTimer />
            <SpotsCounter />
          </div>
        </div>
      </section>

      {/* EMOTIONAL COST COMPARISON */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-10">
            Coloque em Perspectiva
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { item: "Um jantar em Bangkok", price: "R$ 150", emoji: "🍽️" },
              { item: "Uma camiseta de souvenir", price: "R$ 120", emoji: "👕" },
              { item: "Transfer do aeroporto", price: "R$ 200", emoji: "🚕" },
            ].map((c) => (
              <div key={c.item} className="bg-elephant-card rounded-xl p-6 border border-elephant-border text-center">
                <span className="text-3xl mb-2 block">{c.emoji}</span>
                <p className="text-elephant-muted-fg text-sm">{c.item}</p>
                <p className="font-display text-xl font-bold text-elephant-fg">{c.price}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-elephant-fg/80 mb-2">
            Por <strong className="text-forest font-display text-2xl">R$ 67</strong> você garante que a experiência mais importante da sua viagem seja perfeita.
          </p>
          <p className="text-elephant-muted-fg">
            Quanto custa a culpa de ter financiado sofrimento animal? <strong className="text-elephant-fg">Isso não tem preço.</strong>
          </p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 px-6 bg-elephant-card">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-16 h-16 text-forest mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold text-elephant-fg mb-4">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-elephant-muted-fg text-lg leading-relaxed max-w-xl mx-auto mb-6">
            Se por qualquer motivo você sentir que o guia não vale o investimento, basta enviar um e-mail dentro de 7 dias e devolvemos <strong className="text-elephant-fg">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia. O risco é todo meu.
          </p>
          <p className="text-elephant-fg font-semibold text-lg">
            Na prática? <span className="text-forest">Menos de 1% dos compradores pedem reembolso.</span>
          </p>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg text-center mb-12">
            Este Guia É Para Você Se...
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Sonha em ver elefantes na Tailândia, mas não quer fazer errado",
              "Já pesquisou no Google e ficou mais confuso do que antes",
              "Quer ter certeza absoluta de que sua visita é ética",
              "Não quer perder tempo nem dinheiro em lugares turísticos de fachada",
              "Quer viver uma experiência que vai marcar sua vida para sempre",
              "Se importa com o bem-estar dos animais e quer fazer a diferença",
              "Está planejando (ou sonhando com) uma viagem para a Tailândia",
              "Quer voltar para casa orgulhoso da escolha que fez",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-center p-4 bg-elephant-card rounded-lg border border-elephant-border">
                <CircleCheck className="w-5 h-5 text-forest shrink-0" />
                <p className="text-elephant-fg/80">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton large />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-elephant-card">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-elephant-fg text-center mb-12">
            Perguntas Frequentes
          </h2>
          <FAQItem q="O guia é digital ou físico?" a="100% digital. Você recebe acesso imediato após a compra e pode ler no celular, tablet ou computador. Também pode baixar o PDF." />
          <FAQItem q="Preciso estar planejando uma viagem agora?" a="Não! Muitos compradores adquirem meses antes. O guia tem acesso vitalício e recebe atualizações gratuitas." />
          <FAQItem q="Como sei que os santuários são realmente éticos?" a="Cada santuário foi avaliado com critérios científicos baseados em padrões internacionais de bem-estar animal (as 5 liberdades). Além disso, todos foram visitados pessoalmente." />
          <FAQItem q="E se eu não gostar?" a="Garantia incondicional de 7 dias. Devolvemos 100% do valor, sem perguntas." />
          <FAQItem q="O guia serve para quem vai em grupo/casal/família?" a="Sim! Há dicas específicas para cada tipo de viajante, incluindo famílias com crianças." />
          <FAQItem q="Posso compartilhar com quem viaja comigo?" a="Sim! Uma compra serve para toda a família ou grupo de viagem. Quanto mais pessoas informadas, melhor para os elefantes." />
          <FAQItem q="E se eu for para outra região além de Chiang Mai?" a="O guia cobre santuários em Chiang Mai, Phuket, Kanchanaburi, Krabi, Koh Samui e outras regiões. Você está coberto." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-forest-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={PHUKET_IMG} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-elephant-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-elephant-cream mb-6 leading-tight">
            Cada Elefante Que Vive Livre Hoje Existe Porque Alguém Escolheu se Informar
          </h2>
          <p className="text-elephant-cream/70 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
            Quando você escolhe o santuário certo, você não está apenas vivendo uma experiência incrível — está <strong className="text-elephant-cream">votando com seu dinheiro</strong> por um mundo onde elefantes são tratados com dignidade.
          </p>
          <p className="text-elephant-cream/50 text-base mb-10 max-w-lg mx-auto">
            Junte-se a <strong className="text-elephant-gold">2.847+ viajantes conscientes</strong> que já fizeram essa escolha.
          </p>
          <CTAButton large />
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-elephant-cream/50 text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Garantia 7 dias</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Acesso vitalício</span>
            <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> Contribui para ONGs 🐘</span>
          </div>
        </div>
      </section>

      <ConversionBlock 
        title="Garanta sua experiência ética"
        subtitle="Não arrisque financiar maus-tratos. Saiba exatamente onde ir com nosso guia testado."
      />
      <RelatedSalesGrid currentPath="/santuariosdeelefantes" />
      <BackToHomeFooter />
      </main>
      <Footer />
    </div>
  );
};

export default SantuariosDeElefantes;


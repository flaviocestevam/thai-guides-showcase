import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import {
  Check, Shield, Clock, Star, MapPin, AlertTriangle, ChevronDown,
  Users, BookOpen, Zap, Heart, ArrowRight, TrendingUp, X,
  Quote, Sparkles, Ban, CircleCheck, Mountain, Compass, Map as MapIcon,
  Camera, Footprints, Calendar,
} from "lucide-react";
import heroTrekking from "@/assets/trilhas/hero-trekking.jpg";
import krabiRailay from "@/assets/trilhas/krabi-railay-lagoon.jpg";
import kohPhiPhi from "@/assets/trilhas/koh-phi-phi.jpg";

const CAKTO_LINK = "https://pay.cakto.com.br/au9fmx4";

/* ─── SOCIAL PROOF POPUP ─── */
const recentBuyers = [
  { name: "Gabriel R.", city: "São Paulo", time: "2 min" },
  { name: "Letícia M.", city: "Belo Horizonte", time: "6 min" },
  { name: "Rodrigo V.", city: "Florianópolis", time: "11 min" },
  { name: "Patrícia S.", city: "Porto Alegre", time: "17 min" },
  { name: "Eduardo F.", city: "Brasília", time: "24 min" },
  { name: "Aline C.", city: "Recife", time: "33 min" },
  { name: "Rafaela T.", city: "Curitiba", time: "41 min" },
  { name: "Henrique B.", city: "Salvador", time: "55 min" },
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
        setTimeout(() => setCurrent((p) => (p + 1) % recentBuyers.length), 500);
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
      className={`hidden sm:block fixed bottom-24 left-4 z-30 bg-elephant-cream border border-elephant-border rounded-xl shadow-2xl p-4 max-w-[320px] transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={() => setDismissed(true)} className="absolute top-2 right-2 text-elephant-muted-fg hover:text-elephant-fg" aria-label="Fechar">
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

const LiveViewers = () => {
  const [count, setCount] = useState(8);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((p) => p + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const displayed = Math.max(5, Math.min(13, count));
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
          <span>🔥 <strong>50% OFF</strong> — Oferta de lançamento</span>
        </div>
        <LiveViewers />
        <a
          href={CAKTO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-elephant-gold text-elephant-gold-fg px-5 py-2 rounded-lg text-sm font-bold hover:scale-105 transition-transform whitespace-nowrap"
        >
          QUERO O GUIA →
        </a>
      </div>
    </div>
  );
};

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
            <span className="text-2xl font-display font-bold text-elephant-gold">R$ 97</span>{" "}
            <span className="text-xs">ou 6x de R$ 18,50</span>
          </p>
        </div>
        <a
          href={CAKTO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-elephant-gold text-elephant-gold-fg font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform animate-pulse-subtle text-sm whitespace-nowrap"
        >
          🥾 QUERO MEU GUIA AGORA
        </a>
      </div>
    </div>
  );
};

const SpotsCounter = () => {
  const [spots, setSpots] = useState(19);
  useEffect(() => {
    const interval = setInterval(() => {
      setSpots((p) => (p > 4 ? p - 1 : p));
    }, 50000);
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
  const [time, setTime] = useState({ hours: 4, minutes: 52, seconds: 17 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) return { hours: 0, minutes: 0, seconds: 0 };
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex gap-3 justify-center">
      {[
        { val: time.hours, label: "Horas" },
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

const TestimonialCard = ({ name, text, location }: { name: string; text: string; location: string }) => (
  <div className="bg-elephant-card p-6 rounded-xl border border-elephant-border">
    <div className="flex items-center justify-between mb-3">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-elephant-gold text-elephant-gold" />
        ))}
      </div>
      <span className="flex items-center gap-1 text-xs text-forest bg-forest/10 px-2 py-0.5 rounded-full">
        <Check className="w-3 h-3" /> Compra verificada
      </span>
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

const GuiaTrilhasThai = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Guia Trilhas Tailândia",
    "brand": { "@type": "Brand", "name": "Guia Tailândia" },
    "offers": { "@type": "Offer", "price": "97.00", "priceCurrency": "BRL" }
  };

  return (
    <div className="min-h-screen bg-elephant-bg font-body text-elephant-fg">
      <SEO 
        title="Guia Trilhas Tailândia — 30+ Trekkings e Roteiros"
        description="Descubra a Tailândia real com nosso guia de trilhas: 30+ trekkings testados, roteiros por nível e custos detalhados."
        canonicalPath="/guiatrilhasthai"
      />
      <StructuredData data={productSchema} />
      <StickyUrgencyBar />
      <SocialProofPopup />
      <FloatingBottomCTA />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroTrekking} alt="Trilha de trekking na selva tailandesa" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest-dark/60 to-forest-dark/95" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-elephant-cream/10 backdrop-blur-sm text-elephant-cream/90 px-3 py-1.5 rounded-full text-xs border border-elephant-cream/10">
              <Users className="w-3.5 h-3.5" /> 1.420+ trilheiros já compraram
            </span>
            <span className="inline-flex items-center gap-1.5 bg-elephant-cream/10 backdrop-blur-sm text-elephant-cream/90 px-3 py-1.5 rounded-full text-xs border border-elephant-cream/10">
              <Star className="w-3.5 h-3.5 fill-elephant-gold text-elephant-gold" /> 4.9/5 avaliação
            </span>
          </div>
          <span className="inline-block bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-red-500/30 animate-pulse">
            ⚡ OFERTA DE LANÇAMENTO — 50% DE DESCONTO
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-elephant-cream leading-tight mb-6">
            Saia da Praia. <span className="text-elephant-gold">Descubra a Tailândia Real.</span>
          </h1>
          <p className="text-elephant-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            95% dos turistas nunca saem dos templos e praias lotadas. Este guia te leva às <strong className="text-elephant-cream">30+ trilhas mais espetaculares</strong> da Tailândia — com custos reais em reais, como chegar e o que ninguém te conta.
          </p>
          <CTAButton large />
          <p className="text-elephant-cream/50 text-sm mt-4">🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias</p>
          <div className="mt-6 flex justify-center">
            <LiveViewers />
          </div>
        </div>
      </section>

      {/* COUNTDOWN BAR */}
      <div className="bg-forest-dark text-elephant-cream py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-elephant-gold animate-pulse" />
            <span className="font-semibold">Preço de lançamento acaba em:</span>
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
            Você vai mesmo voltar da Tailândia <span className="text-red-400">tendo visto só o que todo mundo vê?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            {[
              "Praias lotadas com 200 pessoas tirando a mesma foto que você",
              "Templos disputados aos cotovelos com filas de 1 hora",
              "Excursões caras que levam num roteiro turístico genérico",
              "Aquela sensação de ter visto a Tailândia 'de fora', sem realmente conhecê-la",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start p-4 bg-red-500/5 rounded-lg border border-red-500/10">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-elephant-fg/80">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-elephant-muted-fg">
            A Tailândia <strong className="text-elephant-fg">tem mais de 100 parques nacionais</strong> com cachoeiras escondidas, cânions de arenito, florestas mais antigas que a Amazônia e mirantes de tirar o fôlego — e tudo isso fica a 30 minutos das praias famosas. Você só precisa <strong className="text-elephant-fg">saber onde ir</strong>.
          </p>
        </div>
      </section>

      {/* EMOTIONAL STORY */}
      <section className="py-20 px-6 bg-forest-dark">
        <div className="max-w-3xl mx-auto">
          <Quote className="w-12 h-12 text-elephant-gold/40 mx-auto mb-6" />
          <blockquote className="font-display text-2xl md:text-3xl text-elephant-cream text-center leading-relaxed mb-8 italic">
            "Passei <span className="text-elephant-gold not-italic font-bold">6 meses caminhando trilhas</span> em todas as regiões da Tailândia — de florestas nubladas a 2.500m até cânions secretos perto de Bangkok. Aprendi cada atalho na pior das formas: errando, me perdendo, gastando à toa. Esse guia é o atalho que eu queria ter tido."
          </blockquote>
          <p className="text-elephant-cream/60 text-center text-lg mb-8">
            Existem dois tipos de viajante: o que volta com fotos iguais às de qualquer outro — e o que volta com <strong className="text-elephant-cream">histórias que ninguém mais tem</strong>.
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
              Você acorda 5h da manhã em Krabi. O ar está fresco, o céu ainda tem estrelas. Pega o caminho de pedra até o topo do Dragon Crest — uma trilha que <strong className="text-elephant-fg">não aparece em nenhuma agência turística</strong>.
            </p>
            <p>
              Quando o sol nasce, você está sozinho na borda de um penhasco, com vista para um mar de ilhas calcárias emergindo da névoa. Nenhum turista. Nenhum vendedor. Apenas você e a Tailândia <strong className="text-elephant-fg">como ela é de verdade</strong>.
            </p>
            <p>
              Volta para o hotel ainda na hora do café, com a foto que ninguém mais do seu grupo terá. Essa é a viagem que <strong className="text-elephant-fg">você vai contar pelo resto da vida</strong> — e ela cabe num roteiro de 7 dias por menos de R$ 200/dia.
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
            Dois Caminhos. Duas Viagens Completamente Diferentes.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 rounded-2xl p-8 border border-red-500/15">
              <div className="flex items-center gap-2 mb-6">
                <Ban className="w-6 h-6 text-red-400" />
                <h3 className="font-display text-xl font-bold text-red-400">Sem o Guia</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Gasta horas no Google e sai mais confuso ainda",
                  "Paga R$ 350+ em uma excursão que vai onde todo mundo vai",
                  "Chega em uma trilha errada na estação errada — e ela está fechada",
                  "Sobe equipado errado, com calor de 38°C, e desiste no meio",
                  "Volta sem ver as melhores cachoeiras e mirantes da região",
                  "Sente que perdeu a chance da viagem da vida",
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
                  "Abre o roteiro pronto e já sabe exatamente o que fazer",
                  "Faz 5 trilhas incríveis pelo preço de UMA excursão tradicional",
                  "Vai na época certa, com o equipamento certo, no horário certo",
                  "Conhece atalhos, vistas e cachoeiras que nem 1% dos turistas vê",
                  "Economiza dias de pesquisa e centenas de reais em erros",
                  "Volta com fotos e histórias que ninguém mais do seu grupo tem",
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
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-elephant-gold font-semibold text-sm uppercase tracking-wider">A Solução</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mt-2 mb-6">
              O Guia Que Eu Caminhei a Pé Para Escrever
            </h2>
            <p className="text-elephant-muted-fg mb-6 leading-relaxed">
              Foram <strong className="text-elephant-fg">6 meses na Tailândia, mais de 30 trilhas percorridas pessoalmente</strong>, em 10 regiões diferentes — do norte montanhoso de Chiang Mai aos calcários do sul, passando por ilhas e parques nacionais quase desconhecidos. Cada trilha aqui foi caminhada, cronometrada, fotografada e avaliada.
            </p>
            <ul className="space-y-3">
              {[
                "30+ trilhas testadas e avaliadas em 10 regiões",
                "Roteiros prontos por nível: iniciante, intermediário e avançado",
                "Tabela de custos detalhada em THB e R$",
                "Mapas, links do Google Maps e como chegar de transporte público",
                "Trilhas secretas que não aparecem em nenhum guia turístico",
                "Apps essenciais, lista de equipamentos e dicas de segurança",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center text-elephant-fg/80">
                  <Check className="w-5 h-5 text-forest shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={krabiRailay} alt="Trilha em Railay, Krabi" className="rounded-2xl shadow-2xl" loading="lazy" width={800} height={800} />
            <div className="absolute -bottom-4 -right-4 bg-elephant-gold text-elephant-gold-fg px-5 py-3 rounded-xl font-bold shadow-lg">
              30+ trilhas testadas
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — Numbers */}
      <section className="py-16 px-6 bg-forest-dark">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, num: "1.420+", label: "Trilheiros usaram" },
            { icon: Mountain, num: "30+", label: "Trilhas testadas" },
            { icon: MapIcon, num: "10", label: "Regiões cobertas" },
            { icon: Star, num: "4.9/5", label: "Avaliação média" },
          ].map((s) => (
            <div key={s.label}>
              <s.icon className="w-8 h-8 text-elephant-gold mx-auto mb-2" />
              <div className="text-3xl font-display font-bold text-elephant-cream">{s.num}</div>
              <div className="text-elephant-cream/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON — COM vs SEM o GUIA */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-elephant-gold font-semibold text-sm uppercase tracking-wider">
              A Diferença é Brutal
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-elephant-fg mt-2 mb-4">
              Dois Trilheiros. Duas Viagens Completamente Diferentes.
            </h2>
            <p className="text-elephant-muted-fg max-w-2xl mx-auto">
              Veja o que muda na prática entre quem sobe a trilha preparado e quem vai "na sorte".
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* SEM O GUIA */}
            <div className="bg-elephant-card/60 border border-destructive/30 rounded-2xl p-7">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-destructive/10 text-destructive font-semibold text-sm px-4 py-2 rounded-full">
                  <Ban className="w-4 h-4" /> SEM O GUIA
                </span>
                <p className="font-display font-bold text-xl text-elephant-fg mt-3">Trilheiro Despreparado</p>
                <p className="text-elephant-muted-fg text-sm mt-1">"Vou ver lá quando chegar..."</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Perde dias inteiros pesquisando trilhas em fóruns desatualizados",
                  "Encara cachoeiras lotadas de turistas sem saber dos atalhos secretos",
                  "Paga R$ 400+ em tours de agência por trilhas que daria pra fazer sozinho por R$ 30",
                  "Se perde no transporte público sem entender Songthaew, Grab e horários",
                  "Compra o equipamento errado e sofre com bolhas, sol e chuva",
                  "Vai pro destino na época errada — encontra trilha fechada ou monção",
                  "Subestima a dificuldade e desiste no meio do caminho",
                  "Volta sentindo que viu só o óbvio — não viveu a Tailândia de verdade",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-elephant-muted-fg">
                    <X className="w-5 h-5 text-destructive/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COM O GUIA */}
            <div className="bg-elephant-card border-2 border-forest rounded-2xl p-7 shadow-2xl relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-elephant-gold text-elephant-gold-fg text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Recomendado
              </span>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-2 bg-forest/15 text-forest font-semibold text-sm px-4 py-2 rounded-full">
                  <CircleCheck className="w-4 h-4" /> COM O GUIA
                </span>
                <p className="font-display font-bold text-xl text-elephant-fg mt-3">Trilheiro Preparado</p>
                <p className="text-elephant-muted-fg text-sm mt-1">"Sei exatamente onde vou e o que esperar."</p>
              </div>
              <ul className="space-y-3">
                {[
                  "Abre o guia, escolhe a trilha ideal pro seu nível e parte no mesmo dia",
                  "Chega cedo nos pontos certos e tem a cachoeira só pra você",
                  "Faz a mesma trilha por R$ 30 com transporte público explicado passo a passo",
                  "Usa Grab, Songthaew e mapas offline como um local",
                  "Tem checklist completo de equipamento testado em campo",
                  "Sabe a melhor época de cada região e evita monção e fechamentos",
                  "Conhece a dificuldade real, tempo e desnível de cada trilha antes de ir",
                  "Volta com a sensação de ter vivido a Tailândia que poucos turistas veem",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-elephant-fg">
                    <Check className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-elephant-muted-fg mb-5 text-lg">
              Por menos de <strong className="text-elephant-fg">R$ 0,50/dia</strong> da sua viagem,
              você decide de que lado quer estar.
            </p>
            <CTAButton large />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-elephant-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-4">
              O Que Dizem Quem Já Trilhou
            </h2>
            <p className="text-elephant-muted-fg mb-2">Experiências reais de viajantes brasileiros</p>
            <div className="flex items-center justify-center gap-2 text-sm text-forest">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Todas as avaliações são de compradores verificados</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <TestimonialCard
              name="Mateus L."
              location="São Paulo, SP"
              text="Fiz 4 trilhas em Krabi seguindo o roteiro do guia. Cada uma melhor que a outra — e eu nunca teria achado a Tab Kak Hang Nak por conta própria. Vista absurda."
            />
            <TestimonialCard
              name="Juliana P."
              location="Curitiba, PR"
              text="O roteiro do norte (Chiang Mai/Pai) salvou minha viagem. Já tinha ido para a Tailândia uma vez e tinha visto 'tudo'. Esse guia me mostrou que eu não tinha visto nada."
            />
            <TestimonialCard
              name="Felipe G."
              location="Rio de Janeiro, RJ"
              text="As trilhas secretas valem o guia inteiro. Praias que parecem do Caribe, sem ninguém. Tirei fotos que parecem fake de tão bonitas."
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Camila R."
              location="Florianópolis, SC"
              text="Sou trilheira no Brasil e estava com medo do calor. O guia tem tudo: melhor época por região, água, equipamento. Fiz 8 trilhas em 12 dias sem sufoco."
            />
            <TestimonialCard
              name="Diego S."
              location="Belo Horizonte, MG"
              text="Economizei pelo menos R$ 800 em excursões que eu ia contratar. Fiz tudo por conta própria seguindo o passo a passo. Pagou-se na primeira trilha."
            />
            <TestimonialCard
              name="Beatriz M."
              location="Porto Alegre, RS"
              text="A tabela de custos em reais foi um divisor de águas pra planejar. Cheguei sabendo exatamente quanto ia gastar por dia. Zero surpresa, zero estresse."
            />
          </div>
          <div className="mt-12 text-center bg-elephant-card rounded-xl p-6 border border-elephant-border max-w-md mx-auto">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-elephant-gold text-elephant-gold" />
              ))}
            </div>
            <p className="font-display text-2xl font-bold text-elephant-fg">4.9 de 5.0</p>
            <p className="text-elephant-muted-fg text-sm">Baseado em 184 avaliações verificadas</p>
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
              { icon: Mountain, title: "30+ Trilhas Detalhadas", desc: "Distância, dificuldade, duração, custo, melhor época, como chegar e mapa", val: "R$ 197" },
              { icon: Calendar, title: "Roteiros Prontos por Nível", desc: "Iniciante, intermediário e avançado — só copiar e colar no seu planejamento", val: "R$ 97" },
              { icon: MapIcon, title: "10 Regiões Cobertas", desc: "Bangkok, Chiang Mai, Pai, Krabi, Phuket, Koh Tao, Koh Lipe, Koh Lanta e mais", val: "R$ 87" },
              { icon: Sparkles, title: "Trilhas Secretas Exclusivas", desc: "Praias escondidas e mirantes que nem 1% dos turistas conhece", val: "R$ 67" },
              { icon: TrendingUp, title: "Tabela de Custos em R$", desc: "Quanto custa cada item: entrada, transporte, guia, comida — sem surpresa", val: "R$ 47" },
              { icon: Zap, title: "Apps + Equipamentos + Segurança", desc: "Lista pronta de apps, o que levar e como evitar sanguessugas e desidratação", val: "R$ 47" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start p-5 bg-elephant-bg rounded-xl border border-elephant-border">
                <item.icon className="w-8 h-8 text-elephant-gold shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold text-elephant-fg">{item.title}</h3>
                    <span className="text-elephant-muted-fg line-through text-sm shrink-0">{item.val}</span>
                  </div>
                  <p className="text-elephant-muted-fg text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BONUS */}
          <div className="max-w-2xl mx-auto mt-4 space-y-4">
            <div className="relative bg-elephant-bg rounded-2xl border-2 border-elephant-gold/30 p-6 overflow-hidden">
              <div className="absolute top-0 left-0 bg-elephant-gold text-elephant-gold-fg px-4 py-1 text-xs font-bold rounded-br-lg uppercase tracking-wider">
                🎁 Bônus #1 — Grátis
              </div>
              <div className="mt-6 flex gap-4 items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-elephant-gold/10 flex items-center justify-center shrink-0">
                  <Camera className="w-6 h-6 text-elephant-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-xl font-bold text-elephant-fg">Mapa de Mirantes Fotográficos</h3>
                    <span className="text-elephant-muted-fg line-through text-sm">R$ 47</span>
                    <span className="text-forest font-bold text-sm">GRÁTIS</span>
                  </div>
                  <p className="text-elephant-muted-fg text-sm leading-relaxed">
                    Coordenadas exatas dos melhores pontos para sunrise e sunset em cada trilha — incluindo ângulos, horários ideais e dicas de fotografia.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-elephant-bg rounded-2xl border-2 border-elephant-gold/30 p-6 overflow-hidden">
              <div className="absolute top-0 left-0 bg-elephant-gold text-elephant-gold-fg px-4 py-1 text-xs font-bold rounded-br-lg uppercase tracking-wider">
                🎁 Bônus #2 — Grátis
              </div>
              <div className="mt-6 flex gap-4 items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-elephant-gold/10 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-elephant-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-xl font-bold text-elephant-fg">Frases em Tailandês para Trilheiros</h3>
                    <span className="text-elephant-muted-fg line-through text-sm">R$ 37</span>
                    <span className="text-forest font-bold text-sm">GRÁTIS</span>
                  </div>
                  <p className="text-elephant-muted-fg text-sm leading-relaxed">
                    Pedir água, perguntar caminho, contratar guia local, negociar transporte — com pronúncia simplificada para você falar sem medo.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-elephant-bg rounded-2xl border-2 border-elephant-gold/30 p-6 overflow-hidden">
              <div className="absolute top-0 left-0 bg-elephant-gold text-elephant-gold-fg px-4 py-1 text-xs font-bold rounded-br-lg uppercase tracking-wider">
                🎁 Bônus #3 — Grátis
              </div>
              <div className="mt-6 flex gap-4 items-start text-left">
                <div className="w-12 h-12 rounded-xl bg-elephant-gold/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-elephant-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-xl font-bold text-elephant-fg">Atualizações Vitalícias</h3>
                    <span className="text-elephant-muted-fg line-through text-sm">Inestimável</span>
                    <span className="text-forest font-bold text-sm">GRÁTIS</span>
                  </div>
                  <p className="text-elephant-muted-fg text-sm leading-relaxed">
                    Toda nova trilha, novo roteiro e nova dica que adicionamos no futuro chega no seu acesso sem custo extra. Para sempre.
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
          <span className="text-elephant-gold font-semibold text-sm uppercase tracking-wider">Oferta de Lançamento</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-cream mt-2 mb-4">
            Quanto Vale Voltar com a Viagem da Sua Vida?
          </h2>
          <p className="text-elephant-cream/60 mb-8">
            Valor total de tudo que está incluso: <span className="line-through">R$ 525</span>
          </p>

          <div className="bg-elephant-cream rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg animate-pulse">
              🔥 50% OFF
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
              <span>83 pessoas compraram nas últimas 24h</span>
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

      {/* PERSPECTIVE */}
      <section className="py-20 px-6 bg-elephant-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-elephant-fg mb-10">
            Coloque em Perspectiva
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { item: "Uma excursão de um dia", price: "R$ 350", emoji: "🚐" },
              { item: "Jantar para casal em Phuket", price: "R$ 220", emoji: "🍽️" },
              { item: "Massagem tailandesa premium", price: "R$ 180", emoji: "💆" },
            ].map((c) => (
              <div key={c.item} className="bg-elephant-card rounded-xl p-6 border border-elephant-border text-center">
                <span className="text-3xl mb-2 block">{c.emoji}</span>
                <p className="text-elephant-muted-fg text-sm">{c.item}</p>
                <p className="font-display text-xl font-bold text-elephant-fg">{c.price}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-elephant-fg/80 mb-2">
            Por <strong className="text-forest font-display text-2xl">R$ 97</strong> você acessa um guia que vai te economizar facilmente <strong className="text-elephant-fg">10x esse valor</strong> em excursões evitadas e erros que você não vai cometer.
          </p>
          <p className="text-elephant-muted-fg">
            E isso sem contar a viagem que você teria perdido sem ele.
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
            Compre, leia, explore o guia inteiro. Se em até 7 dias você sentir que ele não vale o investimento, basta enviar um e-mail e devolvemos <strong className="text-elephant-fg">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia. <strong className="text-elephant-fg">O risco é todo nosso.</strong>
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
              "Está planejando (ou sonhando com) uma viagem para a Tailândia",
              "Já foi para a Tailândia e quer voltar para ver o que ninguém vê",
              "Curte natureza, trilhas, cachoeiras e mirantes mais que cidade",
              "Quer fugir das excursões caras e fazer tudo por conta própria",
              "Não quer perder tempo pesquisando — quer um guia pronto e confiável",
              "Vai com a família ou amigos e precisa de opções para todos os níveis",
              "Quer voltar com fotos e histórias que ninguém mais do seu grupo tem",
              "Se importa em viajar de forma consciente e respeitar a natureza local",
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
          <FAQItem q="O guia é digital ou físico?" a="100% digital. Você recebe acesso imediato após a compra e pode consultar no celular durante a trilha, no tablet ou no computador na hora de planejar." />
          <FAQItem q="Preciso ser experiente em trilhas?" a="Não. O guia tem trilhas de todos os níveis — de caminhadas urbanas de 1 hora até trekkings de 3 dias. Cada trilha indica claramente a dificuldade, distância e elevação." />
          <FAQItem q="Funciona se eu já tenho a viagem marcada?" a="Sim! Vai te ajudar a montar um roteiro ainda melhor sem refazer tudo. Os roteiros prontos podem ser encaixados em qualquer viagem de 3 a 21 dias." />
          <FAQItem q="As trilhas servem para família com crianças?" a="Várias sim. O guia marca quais são adequadas para crianças, idosos e iniciantes — e quais exigem mais preparo físico." />
          <FAQItem q="Os preços estão em reais?" a="Sim. A tabela de custos tem tudo em THB (Baht tailandês) e em R$ (Real), com a cotação atualizada periodicamente." />
          <FAQItem q="E se a trilha estiver fechada quando eu for?" a="O guia indica a melhor época para cada região — assim você não cai numa trilha em manutenção ou inundada na estação chuvosa. Também damos alternativas próximas." />
          <FAQItem q="Tem mapa e como chegar de transporte público?" a="Sim. Cada trilha tem link do Google Maps, indicações de ônibus, songthaew, taxi e quanto custa cada opção." />
          <FAQItem q="E se eu não gostar?" a="Garantia incondicional de 7 dias. Devolvemos 100% do valor, sem perguntas. O risco é todo nosso." />
          <FAQItem q="Posso compartilhar com quem viaja comigo?" a="Sim! Uma compra serve para toda a família ou grupo de viagem." />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-forest-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={kohPhiPhi} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <Footprints className="w-12 h-12 text-elephant-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-elephant-cream mb-6 leading-tight">
            A Tailândia Que Importa <span className="text-elephant-gold">Não Está nos Cartões-Postais</span>
          </h2>
          <p className="text-elephant-cream/70 text-lg mb-4 max-w-xl mx-auto leading-relaxed">
            Está nas trilhas que você ainda não conhece. Nos mirantes que ninguém te mostrou. Nas cachoeiras que estão a 30 minutos da praia que você ia visitar de qualquer jeito. <strong className="text-elephant-cream">Esse guia é o mapa.</strong>
          </p>
          <p className="text-elephant-cream/50 text-base mb-10 max-w-lg mx-auto">
            Junte-se a <strong className="text-elephant-gold">1.420+ trilheiros</strong> que já escolheram ver a Tailândia de verdade.
          </p>
          <CTAButton large />
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-elephant-cream/50 text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Garantia 7 dias</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> Acesso imediato</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Acesso vitalício</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4" /> 30+ trilhas testadas</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-forest-dark border-t border-elephant-border/30 text-center">
        <p className="text-elephant-cream/50 text-sm">
          © {new Date().getFullYear()} Guia Trilhas Tailândia. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default GuiaTrilhasThai;

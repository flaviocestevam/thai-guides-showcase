import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Users, Star, Clock, TrendingUp, ShieldCheck, Flame, BookOpen, CheckCircle2, DollarSign, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";


import heroImg from "@/assets/hero-lanterns.jpg";
import elephantImg from "@/assets/hero-elephants.jpg";
import muayThaiImg from "@/assets/muay-thai-hero.jpg";
import trilhasImg from "@/assets/trilhas/hero-trekking.jpg";
import festasImg from "@/assets/festas/hero-thailand.jpg";

interface ProductCard {
  title: string;
  subtitle: string;
  description: string;
  path: string;
  emoji: string;
  badge?: string;
  image?: string;
  urgency: string;
  socialProof: string;
  originalPrice: string;
  price: string;
  highlight: string;
  viewers?: number;
}

const salesPages: ProductCard[] = [
  {
    title: "Festival das Lanternas",
    subtitle: "Yi Peng & Loy Krathong — Chiang Mai",
    description:
      "Guia completo para viver a experiência mais mágica da Tailândia: onde assistir, quanto custa, ingressos oficiais e roteiro dia a dia.",
    path: "/festivaldaslanternas",
    emoji: "🏮",
    badge: "🔥 MAIS VENDIDO",
    image: heroImg,
    urgency: "Hotéis esgotam 3 meses antes do festival!",
    socialProof: "4.200+ viajantes já compraram",
    originalPrice: "R$ 197",
    price: "R$ 47",
    highlight: "Economize até R$ 800 na viagem",
    viewers: 23,
  },
  {
    title: "Santuários de Elefantes",
    subtitle: "Experiências éticas na Tailândia",
    description:
      "Descubra os melhores santuários éticos, como evitar armadilhas turísticas e viver momentos inesquecíveis com os elefantes tailandeses.",
    path: "/santuariosdeelefantes",
    emoji: "🐘",
    image: elephantImg,
    badge: "⚡ NOVO",
    urgency: "87% dos turistas visitam o santuário errado!",
    socialProof: "2.800+ viajantes já compraram",
    originalPrice: "R$ 197",
    price: "R$ 97",
    highlight: "Evite armadilhas que custam caro",
    viewers: 37,
  },
  {
    title: "Guia Muay Thai na Tailândia",
    subtitle: "Treine no lugar certo, pelo preço certo",
    description:
      "Descubra exatamente onde treinar, quanto custa, como chegar e roteiros prontos para cada nível. Não caia em armadilhas turísticas.",
    path: "/muaythai",
    emoji: "🥊",
    badge: "🔥 POPULAR",
    image: muayThaiImg,
    urgency: "Últimas horas — 51% de desconto!",
    socialProof: "1.800+ lutadores já compraram",
    originalPrice: "R$ 197",
    price: "R$ 97",
    highlight: "3.000+ academias mapeadas",
    viewers: 42,
  },
  {
    title: "Guia Trilhas Tailândia",
    subtitle: "30+ Trekkings, Roteiros e Custos Reais",
    description:
      "Saia da rota turística comum e descubra a Tailândia real. 30+ trilhas testadas, roteiros por nível e custos detalhados para experiências inesquecíveis.",
    path: "/guiatrilhasthai",
    emoji: "🥾",
    badge: "⚡ LANÇAMENTO",
    image: trilhasImg,
    urgency: "Oferta de lançamento: 50% de desconto acaba hoje!",
    socialProof: "1.400+ trilheiros já compraram",
    originalPrice: "R$ 197",
    price: "R$ 97",
    highlight: "30+ trilhas exclusivas testadas",
    viewers: 8,
  },
  {
    title: "Guia de Festas na Tailândia",
    subtitle: "7 Cidades, Infinitas Noites",
    description:
      "Tudo que você precisa saber sobre as melhores festas, baladas e experiências noturnas. Bares, clubes e dicas de sobrevivência exclusivas.",
    path: "/festas",
    emoji: "🔥",
    badge: "✨ COMPLETO",
    image: festasImg,
    urgency: "Saiba onde estão as melhores noites de 2025!",
    socialProof: "Vivido por milhares de viajantes",
    originalPrice: "R$ 0",
    price: "GRÁTIS",
    highlight: "Roteiro noturno por 7 cidades",
    viewers: 15,
  },
  {
    title: "Guia de Voluntariado",
    subtitle: "Viva a Tailândia por dentro",
    description:
      "O guia completo em português para encontrar, se inscrever e se preparar para fazer voluntariado com elefantes, crianças ou comunidades.",
    path: "/voluntariado-tailandia",
    emoji: "🌿",
    badge: "✨ INÉDITO",
    urgency: "Descubra como ajudar causas reais com segurança!",
    socialProof: "Novidade para brasileiros",
    originalPrice: "R$ 197",
    price: "R$ 97",
    highlight: "Modelos de inscrição inclusos",
    viewers: 12,
  },
];

const LiveViewers = ({ base }: { base: number }) => {
  const [count, setCount] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-body text-destructive font-semibold">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
      </span>
      {Math.max(count, 5)} pessoas vendo agora
    </span>
  );
};

const Index = () => {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Guia Tailândia para Brasileiros",
    "url": "https://guiastailandia.com.br/",
    "description": "Guias completos e experiências autênticas na Tailândia para viajantes brasileiros."
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guia Tailândia",
    "url": "https://guiastailandia.com.br/",
    "logo": "https://guiastailandia.com.br/logo.png"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guias de Viagem Tailândia — Explore como um Local"
        description="Encontre os melhores guias de viagem para a Tailândia. Festival das Lanternas, Muay Thai, Santuários de Elefantes, Trilhas e Vida Noturna. Planeje sua viagem sem perrengues."
        canonicalPath="/"
      />
      <StructuredData data={webSiteSchema} />
      <StructuredData data={orgSchema} />
      <Header />

      {/* Hero */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 bg-primary/15 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
            <MapPin className="w-4 h-4" />
            Experiências na Tailândia
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
            Explore a Tailândia{" "}
            <span className="text-gradient-gold">como um local</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Encontre guias completos e informações testadas por viajantes reais para viver experiências autênticas sem desperdiçar tempo nem dinheiro.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4 text-sm text-muted-foreground font-body">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" /> 6.000+ viajantes
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-primary" /> 4.9/5 avaliações
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" /> Garantia 7 dias
            </span>
          </div>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 pb-12 text-center">
        <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl font-black shadow-2xl hover:scale-105 transition-transform bg-primary text-primary-foreground">
          <a href="#guias">QUERO MEU GUIA AGORA</a>
        </Button>
      </section>


      {/* Urgency Banner */}
      <aside className="bg-destructive/10 border-y border-destructive/20 py-3 px-4">
        <p className="text-center font-body text-sm text-foreground max-w-3xl mx-auto">
          <Flame className="w-4 h-4 inline text-destructive mr-1" />
          <strong>Oferta por tempo limitado:</strong> preços especiais de lançamento podem acabar a qualquer momento. Garanta seu acesso agora!
        </p>
      </aside>

      {/* Main Content Sections for SEO & UX */}
      <main>
        {/* Who is it for */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Para quem são estes <span className="text-gradient-gold">guias?</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-2xl border-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quem tem pouco tempo</h3>
                <p className="text-muted-foreground text-sm">Não perca horas em fóruns. Receba roteiros prontos e testados.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Viajantes éticos</h3>
                <p className="text-muted-foreground text-sm">Saiba onde ir para apoiar causas reais e evitar maus-tratos animais.</p>
              </div>
              <div className="p-6 bg-card rounded-2xl border-glow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quem quer economizar</h3>
                <p className="text-muted-foreground text-sm">Evite armadilhas para turistas e economize milhares de reais.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Pages Grid */}
        <section className="px-4 py-16 md:py-24" id="guias">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4">
              Escolha sua <span className="text-gradient-gold">experiência</span>
            </h2>
            <p className="text-muted-foreground text-center font-body mb-12 max-w-xl mx-auto">
              Cada página de venda oferece uma solução completa para problemas reais que viajantes enfrentam na Tailândia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {salesPages.map((page) => (
                <article key={page.path}>
                  <Link
                    to={page.path}
                    className="group flex flex-col h-full bg-card border-glow rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-gold relative"
                  >
                    {/* Card Image / Emoji Fallback */}
                    <div className="relative h-48 md:h-56 bg-gradient-card flex items-center justify-center overflow-hidden">
                      {page.image ? (
                        <img
                          src={page.image}
                          alt={`Imagem ilustrativa de ${page.title}`}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        />
                      ) : (
                        <span className="text-7xl md:text-8xl opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                          {page.emoji}
                        </span>
                      )}

                      {page.badge && (
                        <span className="absolute top-4 right-4 bg-primary text-primary-foreground font-body font-bold text-xs px-3 py-1.5 rounded-full pulse-glow">
                          {page.badge}
                        </span>
                      )}

                      {/* Live viewers */}
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <LiveViewers base={page.viewers ?? 10} />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl" role="img" aria-label="ícone">{page.emoji}</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-body">
                            {page.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">
                        {page.description}
                      </p>

                      {/* Urgency trigger */}
                      <div className="bg-destructive/10 rounded-lg px-3 py-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-destructive flex-shrink-0" />
                        <p className="text-xs font-body text-destructive font-semibold">
                          {page.urgency}
                        </p>
                      </div>

                      {/* Social proof + price */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
                            <Users className="w-3 h-3" /> {page.socialProof}
                          </p>
                          <p className="font-body text-xs">
                            {page.originalPrice !== "R$ 0" && (
                              <span className="line-through text-muted-foreground mr-1">{page.originalPrice}</span>
                            )}
                            <span className="text-lg font-display font-black text-gradient-gold">{page.price}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-body font-semibold text-sm group-hover:gap-3 transition-all">
                          Ver Detalhes
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Highlight */}
                      <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
                        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                        <p className="text-xs font-body text-primary font-semibold">
                          {page.highlight}
                        </p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* Coming soon placeholder */}
            <div className="mt-16 text-center space-y-4">
              <p className="text-muted-foreground font-body text-sm">
                🌏 Mais experiências em breve — Bangkok, ilhas do sul, norte da Tailândia e muito mais.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-body">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Pagamento 100% seguro</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Entrega imediata</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Garantia incondicional de 7 dias</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Pronto para transformar sua viagem?</h2>
            <p className="text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              Não perca tempo com informações desatualizadas. Garanta agora seus guias completos e viaje com segurança.
            </p>
            <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl font-black shadow-2xl hover:scale-105 transition-transform">
              <a href="#guias">ESCOLHER MEU GUIA</a>
            </Button>
          </div>
        </section>


        {/* Benefits Section */}
        <section className="py-16 md:py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center">Por que nossos <span className="text-gradient-gold">viajantes confiam?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Informação em Português</h4>
                  <p className="text-sm text-muted-foreground">Tudo detalhado na sua língua, por quem conhece a cultura local.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Roteiros Passo a Passo</h4>
                  <p className="text-sm text-muted-foreground">Não te damos só a lista, te dizemos como chegar e o que fazer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4 text-center bg-card border-t border-border" id="faq">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Dúvidas Frequentes</h2>
             <div className="space-y-4 text-left">
               <div className="p-6 bg-background rounded-2xl border border-border">
                 <h4 className="font-bold mb-2">Como recebo o guia?</h4>
                 <p className="text-muted-foreground text-sm">O acesso é imediato após a confirmação do pagamento via e-mail.</p>
               </div>
               <div className="p-6 bg-background rounded-2xl border border-border">
                 <h4 className="font-bold mb-2">Por quanto tempo tenho acesso?</h4>
                 <p className="text-muted-foreground text-sm">O acesso é vitalício, incluindo todas as atualizações futuras.</p>
               </div>
             </div>
             <div className="mt-12">
               <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl font-black shadow-2xl hover:scale-105 transition-transform">
                 <a href="#guias">QUERO MEU GUIA AGORA</a>
               </Button>
             </div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;


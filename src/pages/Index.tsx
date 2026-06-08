import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Users, Star, Clock, TrendingUp, ShieldCheck, Flame } from "lucide-react";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-lanterns.jpg";
import elephantImg from "@/assets/hero-elephants.jpg";

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
    image: "/src/assets/muay-thai-hero.jpg",
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
    image: "/src/assets/trilhas/hero-trekking.jpg",
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
    image: "/src/assets/festas/hero-thailand.jpg",
    urgency: "Saiba onde estão as melhores noites de 2025!",
    socialProof: "Vivido por milhares de viajantes",
    originalPrice: "R$ 0",
    price: "GRÁTIS",
    highlight: "Roteiro noturno por 7 cidades",
    viewers: 15,
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
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
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
      </section>

      {/* Urgency Banner */}
      <div className="bg-destructive/10 border-y border-destructive/20 py-3 px-4">
        <p className="text-center font-body text-sm text-foreground max-w-3xl mx-auto">
          <Flame className="w-4 h-4 inline text-destructive mr-1" />
          <strong>Oferta por tempo limitado:</strong> preços especiais de lançamento podem acabar a qualquer momento. Garanta seu acesso agora!
        </p>
      </div>

      {/* Sales Pages Grid */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            Escolha sua <span className="text-gradient-gold">experiência</span>
          </h2>
          <p className="text-muted-foreground text-center font-body mb-12 max-w-xl mx-auto">
            Cada página de venda oferece uma solução completa para problemas reais que viajantes enfrentam. Clique para saber mais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {salesPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="group bg-card border-glow rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-gold relative"
              >
                {/* Card Image / Emoji Fallback */}
                <div className="relative h-48 md:h-56 bg-gradient-card flex items-center justify-center overflow-hidden">
                  {page.image ? (
                    <img
                      src={page.image}
                      alt={page.title}
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
                <div className="p-6 md:p-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{page.emoji}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                        {page.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {page.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
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
                      Saiba mais
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
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-muted-foreground font-body text-sm">
              🌏 Mais experiências em breve — Bangkok, ilhas do sul, norte da Tailândia e muito mais.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-body">
              <span>✅ Pagamento 100% seguro</span>
              <span>✅ Entrega imediata</span>
              <span>✅ Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-xs font-body border-t border-border">
        <p>© Thailand Guides. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;

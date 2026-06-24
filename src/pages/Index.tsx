import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Users, Star, Clock, TrendingUp, ShieldCheck, Flame, BookOpen, CheckCircle2, DollarSign, HeartHandshake } from "lucide-react";
import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ilhasMeta, ilhas } from "@/data/sales/ilhas";

import heroImg from "@/assets/generated/lanternas-hero.png.asset.json";
import heroFirePoi from "@/assets/hero-firepoi-phiphi.png.asset.json";
import elephantImg from "@/assets/generated/elefantes-hero.png.asset.json";
import muayThaiImg from "@/assets/generated/muay-thai-hero.png.asset.json";
import trilhasImg from "@/assets/generated/trilhas-hero.png.asset.json";
import festasImg from "@/assets/generated/festas-hero.png.asset.json";
import voluntariadoImg from "@/assets/generated/voluntariado-hero.png.asset.json";
import gaysImg from "@/assets/generated/gays-hero.png.asset.json";
import songkranImg from "@/assets/generated/songkran-hero.png.asset.json";
import luaDeMelImg from "@/assets/generated/lua-de-mel-hero.png.asset.json";
import massagemImg from "@/assets/generated/cursos-massagem-hero.png.asset.json";
import motosImg from "@/assets/generated/aluguel-motos-hero.png.asset.json";
import mergulhoImg from "@/assets/generated/mergulho-hero.png.asset.json";
import cafesImg from "@/assets/generated/cafes-coworkings-hero.png.asset.json";
import reveillonImg from "@/assets/generated/reveillon-hero.png.asset.json";
import stripImg from "@/assets/generated/clubes-strip-hero.png.asset.json";
import goGoImg from "@/assets/generated/go-go-bars-hero.png.asset.json";
import topHostelsImg from "@/assets/generated/top-hostels-hero.png.asset.json";
import aventureirosImg from "@/assets/generated/aventureiros-hero.png.asset.json";
import beachClubsImg from "@/assets/generated/beach-clubs-hero.png.asset.json";
import petsImg from "@/assets/generated/pets-hero.png.asset.json";
import criancasImg from "@/assets/generated/criancas-hero.png.asset.json";
import casasMassagemImg from "@/assets/sales/casas-massagem.webp";
import retirosImg from "@/assets/sales/retiros.webp";
import ilhasImg from "@/assets/generated/ilhas-similan-hero.png.asset.json";

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
    image: heroImg.url,
    urgency: "Hotéis esgotam 3 meses antes do festival!",
    socialProof: "4.200+ viajantes já compraram",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Economize até R$ 800 na viagem",
    viewers: 23,
  },
  {
    title: "Guias das Ilhas da Tailândia",
    subtitle: "14 ilhas decifradas — Phuket, Samui, Phi Phi, Phangan, Tao, Lanta, Lipe, Kood e mais",
    description:
      "Catálogo completo das ilhas que importam. Praia certa, ferry certo, mês certo, hospedagem testada e os golpes mapeados — um guia por ilha, em português.",
    path: "/ilhas",
    emoji: "🏝️",
    badge: "🏝️ CATÁLOGO",
    image: ilhasImg.url,
    urgency: "Ilha errada = viagem perdida. 14 guias prontos.",
    socialProof: "Mais de 7.000 viajantes nas ilhas",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "14 ilhas mapeadas (cada guia individual)",
    viewers: 34,
  },
  {
    title: "Santuários de Elefantes",
    subtitle: "Experiências éticas na Tailândia",
    description:
      "Descubra os melhores santuários éticos, como evitar armadilhas turísticas e viver momentos inesquecíveis com os elefantes tailandeses.",
    path: "/santuariosdeelefantes",
    emoji: "🐘",
    image: elephantImg.url,
    badge: "⚡ NOVO",
    urgency: "87% dos turistas visitam o santuário errado!",
    socialProof: "2.800+ viajantes já compraram",
    originalPrice: "R$ 197",
    price: "R$ 67",
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
    image: muayThaiImg.url,
    urgency: "Últimas horas — 51% de desconto!",
    socialProof: "1.800+ lutadores já compraram",
    originalPrice: "R$ 197",
    price: "R$ 67",
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
    image: trilhasImg.url,
    urgency: "Oferta de lançamento: 50% de desconto acaba hoje!",
    socialProof: "1.400+ trilheiros já compraram",
    originalPrice: "R$ 197",
    price: "R$ 67",
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
    image: festasImg.url,
    urgency: "Saiba onde estão as melhores melhores noites!",
    socialProof: "Vivido por milhares de viajantes",
    originalPrice: "R$ 197",
    price: "R$ 67",
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
    image: voluntariadoImg.url,
    urgency: "Descubra como ajudar causas reais com segurança!",
    socialProof: "Novidade para brasileiros",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Modelos de inscrição inclusos",
    viewers: 12,
  },
  {
    title: "Guia Tailândia para Gays",
    subtitle: "Liberdade, segurança e confiança",
    description:
      "O guia definitivo em português para viajantes LGBTQIA+: onde ficar, onde sair, áreas inclusivas e como evitar ciladas turísticas.",
    path: "/tailandia-para-gays",
    emoji: "🏳️‍🌈",
    badge: "✨ EXCLUSIVO",
    image: gaysImg.url,
    urgency: "Viaje com segurança e orgulho!",
    socialProof: "Indispensável para o público",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Mapa de regiões inclusivas",
    viewers: 19,
  },
  {
    title: "Guia Songkran",
    subtitle: "Ano Novo Tailandês",
    description:
      "Viva a maior guerra de água do mundo do jeito certo. Datas, melhores cidades, onde ficar e como proteger seus bens.",
    path: "/songkran-ano-novo-tailandes",
    emoji: "💦",
    badge: "🔥 ESSENCIAL",
    image: songkranImg.url,
    urgency: "Hospedagem esgota rápido para abril!",
    socialProof: "Planejamento para o festival",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Calendário oficial completo",
    viewers: 28,
  },
  {
    title: "Guia Lua de Mel",
    subtitle: "Planejamento Inesquecível a Dois",
    description:
      "Transforme sua viagem romântica em um sonho. Melhores ilhas, hotéis com clima de romance e experiências exclusivas para casais.",
    path: "/lua-de-mel-tailandia",
    emoji: "💍",
    badge: "✨ ROMÂNTICO",
    image: luaDeMelImg.url,
    urgency: "Não arrisque o momento mais importante!",
    socialProof: "Favorito dos casais",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Seleção de hotéis boutique",
    viewers: 14,
  },
  {
    title: "Cursos de Massagem",
    subtitle: "Formação Tailandesa Certificada",
    description:
      "Onde estudar massagem tailandesa autêntica: escolas certificadas, visto de estudante, roteiros e como sair formado pagando 60% menos.",
    path: "/cursos-de-massagem",
    emoji: "🪷",
    image: massagemImg.url,
    badge: "🎓 CERTIFICAÇÃO",
    urgency: "Vagas limitadas nas escolas oficiais!",
    socialProof: "Indicado por 200+ alunos",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "10 escolas certificadas",
    viewers: 17,
  },
  {
    title: "Aluguel de Motos",
    subtitle: "Sem Golpes, Sem Caução Roubada",
    description:
      "As 25 melhores locadoras testadas, sistema anti-golpe da caução, PID e rotas prontas como Mae Hong Son Loop.",
    path: "/aluguel-de-motos-tailandia",
    emoji: "🏍️",
    image: motosImg.url,
    badge: "🛡️ ANTI-GOLPE",
    urgency: "1 em cada 4 turistas perde R$ 3.000!",
    socialProof: "10.000 km rodados",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Protocolo blindado de vistoria",
    viewers: 22,
  },
  {
    title: "Mergulho na Tailândia",
    subtitle: "Do Open Water ao Instrutor PADI",
    description:
      "Koh Tao, Similan, Phi Phi: 20 escolas avaliadas, roteiros do iniciante ao profissional e calendário das melhores ilhas.",
    path: "/mergulho-tailandia",
    emoji: "🤿",
    image: mergulhoImg.url,
    badge: "🌊 PADI",
    urgency: "Open Water em Koh Tao por R$ 1.200!",
    socialProof: "600+ mergulhos logados",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Escolas com turmas reduzidas",
    viewers: 15,
  },
  {
    title: "Cafés e Coworkings",
    subtitle: "Para Nômades Digitais",
    description:
      "Mais de 200 cafés e coworkings testados com Wi-Fi medido em Mbps, tomadas contadas e ar avaliado. Para trabalhar de verdade.",
    path: "/cafes-e-coworkings-tailandia",
    emoji: "💻",
    image: cafesImg.url,
    badge: "🌐 NÔMADE",
    urgency: "Wi-Fi ruim derruba reunião com cliente!",
    socialProof: "1.500+ nômades brasileiros",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Mapa interativo Google Maps",
    viewers: 31,
  },
  {
    title: "Réveillon na Tailândia",
    subtitle: "Vire o Ano com Estilo",
    description:
      "10 cidades comparadas, top 50 festas, hotéis com vista dos fogos e roteiros prontos de 28/12 a 02/01.",
    path: "/reveillon-tailandia",
    emoji: "🎆",
    image: reveillonImg.url,
    badge: "🥂 RÉVEILLON",
    urgency: "Hotéis bons esgotam em outubro!",
    socialProof: "5 Réveillons cobertos",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Grupo de WhatsApp do Réveillon",
    viewers: 38,
  },
  {
    title: "Clubes de Strip",
    subtitle: "Guia Honesto · +18",
    description:
      "Bangkok, Pattaya e Phuket: distritos, lista negra de golpes, etiqueta local e ranking dos melhores. Sem moralismo, só informação prática.",
    path: "/clubes-de-strip-tailandia",
    emoji: "🎭",
    image: stripImg.url,
    badge: "🔞 +18",
    urgency: "Golpe da conta inflada custa R$ 6.000!",
    socialProof: "100+ estabelecimentos avaliados",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Sistema anti-golpe blindado",
    viewers: 19,
  },
  {
    title: "Guia Go-Go Bars",
    subtitle: "Como Funcionam de Verdade · +18",
    description:
      "Manual completo: glossário (bar fine, lady drink, off-fee), top 50 bares e estratégias para pagar exatamente o que vale.",
    path: "/go-go-bars-tailandia",
    emoji: "🍸",
    image: goGoImg.url,
    badge: "🔞 +18",
    urgency: "A diferença entre R$ 600 e R$ 4.000 é conhecimento!",
    socialProof: "150+ bares mapeados",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Glossário tailandês completo",
    viewers: 24,
  },
  {
    title: "Top Hostels Tailândia",
    subtitle: "Os 100 Melhores Avaliados",
    description:
      "100 hostels testados em 12 cidades. Wi-Fi medido, vibe descrita, preço real e como reservar até 30% mais barato.",
    path: "/top-hostels-tailandia",
    emoji: "🛏️",
    image: topHostelsImg.url,
    badge: "🛏️ MOCHILEIRO",
    urgency: "Hostels bons esgotam em alta temporada!",
    socialProof: "100 hostels avaliados pessoalmente",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Filtro por perfil de viagem",
    viewers: 16,
  },
  {
    title: "Tailândia para Aventureiros",
    subtitle: "Trilhas, Mergulho, Selva e Adrenalina",
    description:
      "50 aventuras testadas: rapel, escalada, jungle trek, rafting, tirolesa e mergulho. Operadoras certificadas e lista negra.",
    path: "/tailandia-para-aventureiros",
    emoji: "⛰️",
    image: aventureirosImg.url,
    badge: "⛰️ RADICAL",
    urgency: "1 em 3 cai em operadora pirata!",
    socialProof: "70+ aventuras documentadas",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Calendário por esporte",
    viewers: 20,
  },
  {
    title: "Beach Clubs Tailândia",
    subtitle: "Top 40 com Preços e Vibes Reais",
    description:
      "40 beach clubs avaliados em Phuket, Samui, Phangan e Krabi. Day pass, mínimos, DJs e como reservar com 40% off.",
    path: "/beach-clubs-tailandia",
    emoji: "🌅",
    image: beachClubsImg.url,
    badge: "🌅 SUNSET",
    urgency: "Consumo mínimo escondido pode custar R$ 1.200!",
    socialProof: "100+ pôr do sol testados",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Calendário 12 meses de DJs",
    viewers: 26,
  },
  {
    title: "Tailândia para Pets",
    subtitle: "Leve seu Cachorro ou Gato sem Perrengue",
    description:
      "Documentação, voos, hotéis pet-friendly verificados, veterinários 24h e praias liberadas. Tudo em português.",
    path: "/tailandia-para-pets",
    emoji: "🐶",
    image: petsImg.url,
    badge: "🐶 PET-FRIENDLY",
    urgency: "Burocracia exige 6 meses de antecedência!",
    socialProof: "3 pets levados pessoalmente",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Grupo WhatsApp de famílias com pet",
    viewers: 9,
  },
  {
    title: "Tailândia com Crianças",
    subtitle: "Roteiros, Hotéis e Atividades Família",
    description:
      "Roteiros por idade (0-3, 4-8, 9-14), 30 hotéis com kids club testados e atrações que crianças realmente amam.",
    path: "/tailandia-para-criancas",
    emoji: "👨‍👩‍👧‍👦",
    image: criancasImg.url,
    badge: "👶 FAMÍLIA",
    urgency: "Ilha errada arruina viagem em família!",
    socialProof: "5 viagens com filhos pequenos",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Roteiros por faixa etária",
    viewers: 18,
  },
  {
    title: "Casas de Massagem",
    subtitle: "Top 200 Avaliadas e Honestas",
    description:
      "200 casas de massagem testadas em 6 cidades. Preço real, lista negra de fachadas e mapa Google Maps incluso.",
    path: "/casas-de-massagem-tailandia",
    emoji: "🪷",
    image: casasMassagemImg,
    badge: "🪷 RELAX",
    urgency: "70% no Patong são fachada!",
    socialProof: "1.000+ massagens documentadas",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Mapa por bairro com top 200",
    viewers: 22,
  },
  {
    title: "Guia de Retiros na Tailândia",
    subtitle: "Ioga, Meditação, Detox e Bem-Estar",
    description:
      "60 retiros avaliados: yoga, Vipassana, detox, silêncio. Dos gratuitos por doação aos premium. Por modalidade e nível.",
    path: "/retiros-tailandia",
    emoji: "🧘",
    image: retirosImg,
    badge: "🧘 TRANSFORMAÇÃO",
    urgency: "Vagas em retiros bons esgotam 3 meses antes!",
    socialProof: "12 retiros vividos pessoalmente",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Inclui retiros por doação",
    viewers: 14,
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
      <header className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
        <img
          src={heroFirePoi.url}
          alt="Show de fogo na praia em Koh Phi Phi à noite, multidão assistindo"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[fade-in_1.2s_ease-out]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_85%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7 animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-background/40 backdrop-blur-md border border-primary/30 text-primary font-body font-semibold text-xs md:text-sm px-5 py-2 rounded-full tracking-[0.2em] uppercase shadow-lg shadow-primary/10">
            <MapPin className="w-4 h-4" />
            Experiências na Tailândia
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-[1.02] tracking-tight text-white drop-shadow-2xl">
            Explore a Tailândia{" "}
            <span className="block text-gradient-gold">como um local</span>
          </h1>

          <p className="text-base md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed font-body">
            Guias completos e testados por viajantes reais para viver experiências autênticas — sem desperdiçar tempo nem dinheiro.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.03] transition-all duration-300">
              <a href="#guias">Ver guias disponíveis <ArrowRight className="w-4 h-4 ml-1" /></a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-6 text-sm text-white/80 font-body">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" /> 7.000+ viajantes
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

        {/* Sales Pages Grid — Experiências */}
        <section className="px-4 py-16 md:py-24" id="guias">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-semibold text-xs px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-4">
                Parte 1 · Experiências
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Guias de <span className="text-gradient-gold">experiências</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                Festivais, treinos, mergulho, vida noturna, voluntariado e tudo o que você pode viver na Tailândia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {salesPages.map((page) => (
                <article key={page.path}>
                  <Link
                    to={page.path}
                    className="group flex flex-col h-full bg-card border-glow rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-gold relative"
                  >
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
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <LiveViewers base={page.viewers ?? 10} />
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-3 flex-grow flex flex-col">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl" role="img" aria-label="ícone">{page.emoji}</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-body">{page.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">
                        {page.description}
                      </p>
                      <div className="bg-destructive/10 rounded-lg px-3 py-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-destructive flex-shrink-0" />
                        <p className="text-xs font-body text-destructive font-semibold">{page.urgency}</p>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground font-body flex items-center gap-1">
                            <Users className="w-3 h-3" /> {page.socialProof}
                          </p>
                          <p className="font-body text-xs">
                            <span className="line-through text-muted-foreground mr-1">{page.originalPrice}</span>
                            <span className="text-lg font-display font-black text-gradient-gold">{page.price}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-body font-semibold text-sm group-hover:gap-3 transition-all">
                          Ver Detalhes <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
                        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                        <p className="text-xs font-body text-primary font-semibold">{page.highlight}</p>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sales Pages Grid — Ilhas */}
        <section className="px-4 py-16 md:py-24 bg-primary/5 border-y border-primary/10" id="ilhas">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-semibold text-xs px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-4">
                Parte 2 · Ilhas
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Guias das <span className="text-gradient-gold">ilhas</span>
              </h2>
              <p className="text-muted-foreground font-body max-w-xl mx-auto">
                14 ilhas decifradas por quem dormiu, errou e voltou. De Phuket a Koh Kood, escolha a sua.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ilhasMeta.map((ilha) => (
                <Link
                  key={ilha.slug}
                  to={`/${ilha.slug}`}
                  className="group relative overflow-hidden bg-card border border-border rounded-2xl hover:border-primary/40 hover:-translate-y-1 hover:shadow-premium transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={ilhas[ilha.slug]?.heroImage}
                      alt={`Praia e paisagem de ${ilha.nome}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 text-3xl">{ilha.emoji}</div>
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.15em] font-bold text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full border border-primary/20">
                      {ilha.cardBadge}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg tracking-tight">{ilha.nome}</h3>
                    <p className="text-[11px] text-muted-foreground mb-1">{ilha.regiao}</p>
                    <p className="text-sm font-medium text-foreground/80 mb-2">{ilha.cardSubtitle}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {ilha.cardDescription}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-foreground/5">
                      <div>
                        <span className="text-xs text-muted-foreground line-through">R$ 197</span>{" "}
                        <span className="text-base font-display font-bold text-primary">R$ 67</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                        Ver guia <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center space-y-3">
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-body">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Pagamento 100% seguro</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Entrega imediata</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Garantia 7 dias</span>
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


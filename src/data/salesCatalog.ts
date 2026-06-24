// Catálogo central das páginas de vendas — fonte única para Index e RelatedSalesGrid.
import heroImg from "@/assets/generated/lanternas-hero.png.asset.json";
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

export interface ProductCard {
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
  /** Tags para casar páginas relacionadas. Ex: ["aventura","praia"] */
  tags?: string[];
}

export const salesPages: ProductCard[] = [
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
    tags: ["cultura", "festival", "chiang-mai"],
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
    tags: ["praia", "ilhas"],
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
    tags: ["natureza", "etico", "familia"],
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
    tags: ["aventura", "esporte", "cultura"],
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
    tags: ["aventura", "natureza"],
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
    urgency: "Saiba onde estão as melhores noites!",
    socialProof: "Vivido por milhares de viajantes",
    originalPrice: "R$ 197",
    price: "R$ 67",
    highlight: "Roteiro noturno por 7 cidades",
    viewers: 15,
    tags: ["noite", "festa"],
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
    tags: ["etico", "cultura", "natureza"],
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
    tags: ["noite", "publico"],
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
    tags: ["cultura", "festival", "festa"],
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
    tags: ["casal", "praia", "publico"],
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
    tags: ["bem-estar", "cultura"],
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
    tags: ["aventura", "logistica"],
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
    tags: ["aventura", "praia", "esporte"],
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
    tags: ["nomade", "logistica"],
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
    tags: ["festa", "festival", "noite"],
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
    tags: ["noite", "adulto"],
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
    tags: ["noite", "adulto"],
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
    tags: ["hospedagem", "mochilao"],
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
    tags: ["aventura", "natureza", "esporte"],
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
    tags: ["praia", "festa", "noite"],
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
    tags: ["familia", "logistica"],
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
    tags: ["familia", "publico"],
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
    tags: ["bem-estar", "cultura"],
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
    tags: ["bem-estar", "natureza", "cultura"],
  },
];

/**
 * Retorna até `limit` páginas relacionadas à `currentPath`.
 * Estratégia: prioriza páginas com tags em comum, depois completa com as mais populares.
 * Se `relatedPaths` for passado, respeita a ordem manual e completa o resto por tags.
 */
export function getRelatedSalesPages(
  currentPath?: string,
  limit = 10,
  relatedPaths?: string[],
): ProductCard[] {
  const pool = salesPages.filter((p) => p.path !== currentPath);
  const current = salesPages.find((p) => p.path === currentPath);
  const result: ProductCard[] = [];
  const taken = new Set<string>();

  // 1) curadoria manual
  if (relatedPaths?.length) {
    for (const path of relatedPaths) {
      const found = pool.find((p) => p.path === path);
      if (found && !taken.has(found.path)) {
        result.push(found);
        taken.add(found.path);
      }
    }
  }

  // 2) por tags em comum (mais tags = mais cima)
  if (current?.tags?.length) {
    const scored = pool
      .filter((p) => !taken.has(p.path))
      .map((p) => ({
        page: p,
        score: (p.tags ?? []).filter((t) => current.tags!.includes(t)).length,
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);
    for (const { page } of scored) {
      if (result.length >= limit) break;
      result.push(page);
      taken.add(page.path);
    }
  }

  // 3) completa com os mais "populares" (viewers desc)
  if (result.length < limit) {
    const rest = pool
      .filter((p) => !taken.has(p.path))
      .sort((a, b) => (b.viewers ?? 0) - (a.viewers ?? 0));
    for (const p of rest) {
      if (result.length >= limit) break;
      result.push(p);
    }
  }

  return result.slice(0, limit);
}

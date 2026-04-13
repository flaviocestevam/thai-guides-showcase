import bangkokImg from "@/assets/festas/bangkok-nightlife.jpg";
import phuketImg from "@/assets/festas/phuket-nightlife.jpg";
import pattayaImg from "@/assets/festas/pattaya-nightlife.jpg";
import kohphanganImg from "@/assets/festas/kohphangan-nightlife.jpg";
import phiphiImg from "@/assets/festas/phiphi-nightlife.jpg";
import krabiImg from "@/assets/festas/krabi-nightlife.jpg";
import chiangmaiImg from "@/assets/festas/chiangmai-nightlife.jpg";
import kohsamuiImg from "@/assets/festas/kohsamui-nightlife.jpg";
import kohlipeImg from "@/assets/festas/kohlipe-nightlife.jpg";

export interface Venue {
  name: string;
  type: string;
  description: string;
  priceRange: string;
}

export interface CityDetail {
  id: string;
  name: string;
  tagline: string;
  fireLevel: number;
  image: string;
  description: string;
  bestFor: string;
  bestNight: string;
  avgBeerPrice: string;
  venues: Venue[];
  tips: string[];
}

export const cityDetails: Record<string, CityDetail> = {
  bangkok: {
    id: "bangkok",
    name: "Bangkok",
    tagline: "A capital que nunca dorme",
    fireLevel: 5,
    image: bangkokImg,
    description:
      "Bangkok é o epicentro da vida noturna do Sudeste Asiático. Dos rooftop bars luxuosos de Sukhumvit aos becos movimentados de Khao San Road, a cidade oferece experiências para todos os gostos e bolsos.",
    bestFor: "Quem quer variedade — de baladas underground a rooftops 5 estrelas",
    bestNight: "Sexta e Sábado",
    avgBeerPrice: "80-180 THB",
    venues: [
      { name: "Khao San Road", type: "Rua de Bares", description: "A rua mais famosa para mochileiros. Baldes de drinks, música alta e gente do mundo todo.", priceRange: "$$" },
      { name: "Sukhumvit Soi 11", type: "Distrito de Clubes", description: "Concentração de clubes premium, bares de coquetel e rooftop lounges.", priceRange: "$$$" },
      { name: "RCA (Royal City Avenue)", type: "Rua de Clubes", description: "Área popular entre tailandeses jovens com grandes clubes de EDM e hip-hop.", priceRange: "$$" },
      { name: "Sky Bar (Lebua)", type: "Rooftop Bar", description: "Um dos rooftop bars mais icônicos do mundo com vista espetacular do rio Chao Phraya.", priceRange: "$$$$" },
      { name: "Thonglor", type: "Bairro Trendy", description: "Bares artesanais, restaurantes descolados e uma vibe mais sofisticada.", priceRange: "$$$" },
    ],
    tips: [
      "O BTS (metrô aéreo) funciona até meia-noite — depois, use Grab",
      "Khao San Road é melhor entre 22h e 2h",
      "Dress code em rooftop bars: sem chinelo e sem regata",
      "Evite tuk-tuks que oferecem 'passeios baratos' — geralmente são golpes",
    ],
  },
  phuket: {
    id: "phuket",
    name: "Phuket",
    tagline: "Praia, pool parties e muito mais",
    fireLevel: 4,
    image: phuketImg,
    description:
      "Phuket combina praias paradisíacas com uma vida noturna vibrante. Bangla Road é o coração da festa, mas beach clubs e pool parties em Surin e Kata também são imperdíveis.",
    bestFor: "Beach lovers que querem festa sem abrir mão do paraíso",
    bestNight: "Quarta (Ladies Night) e Sábado",
    avgBeerPrice: "100-200 THB",
    venues: [
      { name: "Bangla Road", type: "Rua de Bares", description: "A rua mais animada de Phuket com dezenas de bares, go-go bars e clubes.", priceRange: "$$" },
      { name: "Café del Mar", type: "Beach Club", description: "Pool party à beira-mar com DJs internacionais e pôr do sol incrível.", priceRange: "$$$" },
      { name: "Illuzion", type: "Mega Club", description: "O maior clube de Phuket com shows de luz impressionantes e DJs de EDM.", priceRange: "$$$" },
      { name: "Catch Beach Club", type: "Beach Club", description: "Beach club premium em Surin Beach, perfeito para festas diurnas.", priceRange: "$$$$" },
    ],
    tips: [
      "Bangla Road fecha para carros à noite — vá a pé",
      "Pool parties geralmente começam às 14h",
      "Negocie preço do tuk-tuk antes de entrar",
      "Temporada alta (nov-mar) tem as melhores festas",
    ],
  },
  pattaya: {
    id: "pattaya",
    name: "Pattaya",
    tagline: "A cidade que nunca para",
    fireLevel: 5,
    image: pattayaImg,
    description:
      "Pattaya é sinônimo de vida noturna intensa. Walking Street é o epicentro, com centenas de bares e clubes abertos até o amanhecer. A cidade também oferece cabarés famosos e bares à beira-mar.",
    bestFor: "Quem quer festa 24/7 sem parar",
    bestNight: "Todos os dias — Pattaya não descansa",
    avgBeerPrice: "70-150 THB",
    venues: [
      { name: "Walking Street", type: "Rua de Bares", description: "A rua mais famosa de Pattaya com centenas de bares, clubes e shows ao vivo.", priceRange: "$$" },
      { name: "Tiffany's Show", type: "Cabaré", description: "O cabaré mais famoso da Tailândia com shows espetaculares.", priceRange: "$$$" },
      { name: "Horizon Rooftop", type: "Rooftop Bar", description: "Vista panorâmica da baía com drinks premium.", priceRange: "$$$" },
      { name: "Soi 6", type: "Rua de Bares", description: "Bares mais acessíveis e ambiente mais casual para drinks baratos.", priceRange: "$" },
    ],
    tips: [
      "Walking Street começa a ferver depois das 23h",
      "Evite os horários de trânsito — use motos-táxi",
      "Bares de praia em Jomtien são mais relaxados",
      "Pattaya fica a 2h de Bangkok — dá pra ir e voltar no dia",
    ],
  },
  kohphangan: {
    id: "kohphangan",
    name: "Koh Phangan",
    tagline: "Onde nasceu a Full Moon Party",
    fireLevel: 5,
    image: kohphanganImg,
    description:
      "Koh Phangan é mundialmente famosa pela Full Moon Party, a maior festa de praia do mundo. Mas a ilha também oferece Half Moon Festival, Jungle Experience e festas menores quase todos os dias.",
    bestFor: "Quem quer a experiência definitiva de festa na praia",
    bestNight: "Noite de lua cheia (Full Moon Party)",
    avgBeerPrice: "100-200 THB (buckets 200-400 THB)",
    venues: [
      { name: "Full Moon Party", type: "Mega Festival", description: "A lendária festa de praia em Haad Rin com até 30.000 pessoas, pintura neon e música até o amanhecer.", priceRange: "$$" },
      { name: "Half Moon Festival", type: "Festival na Selva", description: "Festa na selva com decoração psicodélica e música eletrônica underground.", priceRange: "$$" },
      { name: "Jungle Experience", type: "Festival na Selva", description: "Festa na floresta com DJs internacionais e ambiente místico.", priceRange: "$$" },
      { name: "Backyard Bar", type: "Bar de Praia", description: "Bar de praia relaxado com reggae, fire shows e ambiente descontraído.", priceRange: "$" },
    ],
    tips: [
      "Compre ingressos da Full Moon na ilha — não antes",
      "Use sapatos fechados antigos (a praia fica suja)",
      "Leve pochete impermeável para celular e dinheiro",
      "Reserve hospedagem com antecedência na lua cheia",
    ],
  },
  phiphi: {
    id: "phiphi",
    name: "Phi Phi Islands",
    tagline: "Paraíso com festa garantida",
    fireLevel: 4,
    image: phiphiImg,
    description:
      "As ilhas Phi Phi combinam cenários de cinema com festas na praia inesquecíveis. De dia, mergulho e passeios de barco. De noite, fire shows e festas de balde na areia.",
    bestFor: "Quem quer combinar paraíso tropical com festa",
    bestNight: "Toda noite tem festa — alta temporada é melhor",
    avgBeerPrice: "80-160 THB",
    venues: [
      { name: "Slinky Beach Bar", type: "Bar de Praia", description: "O bar mais famoso de Phi Phi com fire shows diários e buckets generosos.", priceRange: "$$" },
      { name: "Ibiza Pool Party", type: "Pool Party", description: "Pool party no centro de Tonsai com DJs, jogos e drinks baratos.", priceRange: "$$" },
      { name: "Reggae Bar", type: "Bar de Luta", description: "Bar lendário onde turistas podem lutar no ringue por drinks grátis.", priceRange: "$" },
      { name: "Stones Bar", type: "Bar de Praia", description: "Bar nas pedras com vista do mar, perfeito para pôr do sol e drinks à noite.", priceRange: "$$" },
    ],
    tips: [
      "Não há carros em Phi Phi — tudo é a pé ou de barco",
      "As festas começam por volta das 22h na praia",
      "Fire shows são gratuitos nos bares de praia",
      "Leve protetor solar biodegradável por respeito à natureza",
    ],
  },
  krabi: {
    id: "krabi",
    name: "Krabi",
    tagline: "Festas com cenário de cinema",
    fireLevel: 3,
    image: krabiImg,
    description:
      "Krabi é mais relaxada que Phuket ou Pattaya, mas oferece bares de praia incríveis em Ao Nang e Railay Beach. Perfeita para quem quer festas em cenários deslumbrantes sem a loucura das grandes cidades.",
    bestFor: "Quem prefere festas relaxadas com cenário de tirar o fôlego",
    bestNight: "Sexta e Sábado",
    avgBeerPrice: "70-140 THB",
    venues: [
      { name: "Ao Nang Center", type: "Área de Bares", description: "Concentração de bares e restaurantes com música ao vivo e ambiente descontraído.", priceRange: "$$" },
      { name: "Last Bar (Railay)", type: "Bar de Praia", description: "O bar mais famoso de Railay com fire shows, reggae e ambiente hippie.", priceRange: "$$" },
      { name: "Carlito's Bar", type: "Bar de Praia", description: "Bar à beira-mar com drinks tropicais e música ao vivo.", priceRange: "$$" },
    ],
    tips: [
      "Railay Beach só é acessível por barco — planeje sua volta",
      "Última saída de Railay geralmente é às 18h",
      "Ao Nang tem mais opções de comida e bares que Railay",
      "Krabi é ótima base para explorar ilhas durante o dia",
    ],
  },
  chiangmai: {
    id: "chiangmai",
    name: "Chiang Mai",
    tagline: "A joia do norte tailandês",
    fireLevel: 3,
    image: chiangmaiImg,
    description:
      "Chiang Mai oferece uma vida noturna mais cultural e artesanal. Night Bazaar, bares de jazz, cervejarias artesanais e a famosa Nimmanhaemin Road fazem da cidade uma experiência noturna única.",
    bestFor: "Quem prefere bares com personalidade e ambiente cultural",
    bestNight: "Sábado (Night Market) e Domingo (Walking Street)",
    avgBeerPrice: "60-120 THB",
    venues: [
      { name: "Nimmanhaemin Road", type: "Rua Trendy", description: "O bairro mais descolado com bares artesanais, cafés noturnos e galerias.", priceRange: "$$" },
      { name: "Night Bazaar", type: "Mercado Noturno", description: "Mercado noturno com comida de rua, artesanato e bares ao redor.", priceRange: "$" },
      { name: "Zoe in Yellow", type: "Complexo de Bares", description: "Complexo de bares populares entre turistas e estudantes, aberto até tarde.", priceRange: "$" },
      { name: "THC Rooftop Bar", type: "Rooftop Bar", description: "Vista panorâmica de Chiang Mai com drinks artesanais e vibes relaxadas.", priceRange: "$$" },
    ],
    tips: [
      "Songthaews vermelhos são o transporte mais barato (20-40 THB)",
      "O Night Bazaar funciona toda noite, mas sábado é o melhor",
      "Bares fecham mais cedo aqui (1h-2h) comparado ao sul",
      "Nimmanhaemin é walkable — perfeito para bar hopping",
    ],
  },
  kohsamui: {
    id: "kohsamui",
    name: "Koh Samui",
    tagline: "Ilha tropical com noites eletrizantes",
    fireLevel: 4,
    image: kohsamuiImg,
    description:
      "Koh Samui combina resorts de luxo com vida noturna agitada. Chaweng Beach é o epicentro, com beach clubs, bares de praia e clubes que funcionam até o amanhecer.",
    bestFor: "Quem quer resort de dia e festa de noite",
    bestNight: "Sexta e Sábado",
    avgBeerPrice: "90-180 THB",
    venues: [
      { name: "Chaweng Beach Road", type: "Rua de Bares", description: "A rua principal da vida noturna com dezenas de bares e clubes.", priceRange: "$$" },
      { name: "Ark Bar", type: "Beach Club", description: "O beach club mais famoso da ilha com pool parties diurnas e festas à noite.", priceRange: "$$" },
      { name: "Green Mango", type: "Mega Club", description: "O maior clube de Koh Samui com vários andares de música diferente.", priceRange: "$$" },
      { name: "Nikki Beach", type: "Beach Club", description: "Beach club premium com brunch parties aos domingos e festas especiais.", priceRange: "$$$$" },
    ],
    tips: [
      "Chaweng é walkable — vá a pé entre os bares",
      "Ark Bar tem as melhores pool parties (grátis)",
      "Taxi/songthaew fica caro à noite — negocie antes",
      "Lamai Beach é alternativa mais tranquila",
    ],
  },
  kohlipe: {
    id: "kohlipe",
    name: "Koh Lipe",
    tagline: "As Maldivas da Tailândia com festa na areia",
    fireLevel: 3,
    image: kohlipeImg,
    description:
      "Koh Lipe é uma pequena ilha paradisíaca com águas cristalinas e praias de areia branca. A vida noturna é simples mas charmosa — bares de praia com reggae, fogueiras na areia e drinks sob as estrelas.",
    bestFor: "Quem quer festa intimista em cenário paradisíaco",
    bestNight: "Alta temporada (nov-abr) toda noite tem algo",
    avgBeerPrice: "80-150 THB",
    venues: [
      { name: "Pattaya Beach Bars", type: "Bares de Praia", description: "Fileira de bares na areia com almofadas, reggae e fire shows.", priceRange: "$$" },
      { name: "Pooh Bar", type: "Bar de Praia", description: "Bar popular com música ao vivo, cocktails tropicais e ambiente descontraído.", priceRange: "$$" },
      { name: "Castaway Resort Bar", type: "Bar de Resort", description: "Bar à beira-mar com vista incrível e drinks premium.", priceRange: "$$$" },
    ],
    tips: [
      "A ilha é pequena — tudo a pé em 20 minutos",
      "Não há caixas eletrônicos — leve dinheiro em espécie",
      "Melhor época: novembro a abril (seca)",
      "Barcos de Langkawi (Malásia) são opção de acesso",
    ],
  },
};

export interface City {
  id: string;
  name: string;
  tagline: string;
  fireLevel: number;
  tags: string[];
  image: string;
}

export const cities: City[] = [
  {
    id: "bangkok",
    name: "Bangkok",
    tagline: "A capital que nunca dorme",
    fireLevel: 5,
    tags: ["Rooftop Bars", "Clubes de Elite", "Khao San Road"],
    image: "/src/assets/festas/bangkok-nightlife.jpg",
  },
  {
    id: "phuket",
    name: "Phuket",
    tagline: "Praia, pool parties e muito mais",
    fireLevel: 4,
    tags: ["Pool Parties", "Beach Clubs", "Bangla Road"],
    image: "/src/assets/festas/phuket-nightlife.jpg",
  },
  {
    id: "pattaya",
    name: "Pattaya",
    tagline: "A cidade que nunca para",
    fireLevel: 5,
    tags: ["Walking Street", "Cabarés", "Bares à Beira-Mar"],
    image: "/src/assets/festas/pattaya-nightlife.jpg",
  },
  {
    id: "kohphangan",
    name: "Koh Phangan",
    tagline: "Onde nasceu a Full Moon Party",
    fireLevel: 5,
    tags: ["Full Moon Party", "Half Moon Festival", "Festas na Praia"],
    image: "/src/assets/festas/kohphangan-nightlife.jpg",
  },
  {
    id: "phiphi",
    name: "Phi Phi Islands",
    tagline: "Paraíso com festa garantida",
    fireLevel: 4,
    tags: ["Festas na Praia", "Fire Shows", "Bares Reggae"],
    image: "/src/assets/festas/phiphi-nightlife.jpg",
  },
  {
    id: "krabi",
    name: "Krabi",
    tagline: "Festas com cenário de cinema",
    fireLevel: 3,
    tags: ["Bares de Praia", "Ao Nang", "Railay Beach"],
    image: "/src/assets/festas/krabi-nightlife.jpg",
  },
  {
    id: "chiangmai",
    name: "Chiang Mai",
    tagline: "A joia do norte tailandês",
    fireLevel: 3,
    tags: ["Night Bazaar", "Bares Artesanais", "Reggae Bars"],
    image: "/src/assets/festas/chiangmai-nightlife.jpg",
  },
  {
    id: "kohsamui",
    name: "Koh Samui",
    tagline: "Ilha tropical com noites eletrizantes",
    fireLevel: 4,
    tags: ["Chaweng Beach", "Beach Clubs", "Cabarés"],
    image: "/src/assets/festas/kohsamui-nightlife.jpg",
  },
  {
    id: "kohlipe",
    name: "Koh Lipe",
    tagline: "As Maldivas da Tailândia com festa na areia",
    fireLevel: 3,
    tags: ["Bares de Praia", "Festas na Areia", "Reggae Bars"],
    image: "/src/assets/festas/kohlipe-nightlife.jpg",
  },
];

export interface SurvivalTip {
  icon: string;
  title: string;
  tips: string[];
}

export const survivalTips: SurvivalTip[] = [
  {
    icon: "🛡️",
    title: "Segurança",
    tips: [
      "Use pochete impermeável em festas de praia",
      "Nunca deixe seu drink sozinho",
      "Tenha cópias digitais dos seus documentos",
      "Compartilhe localização com amigos",
    ],
  },
  {
    icon: "💰",
    title: "Dinheiro",
    tips: [
      "1 THB ≈ R$0,15 (verifique a cotação atual)",
      "Sempre negocie preços de transporte antes",
      "Use Grab (app) para táxis — evite golpes",
      "Bares de rua são 3-5x mais baratos que clubes",
    ],
  },
  {
    icon: "🍹",
    title: "Drinks",
    tips: [
      "Singha, Chang e Leo são as cervejas locais",
      "Thai whisky (Sang Som) + Red Bull Thai = clássico",
      "Buckets (baldes) são tradição — sempre compartilhe",
      "Cuidado com drinks baratos demais — podem ser falsificados",
    ],
  },
  {
    icon: "🚌",
    title: "Transporte",
    tips: [
      "Grab é o app essencial — funciona em todas as cidades",
      "Songthaews (caminhonetes) são táxis compartilhados baratos",
      "Nunca aceite tuk-tuk sem negociar antes",
      "Scooter é comum, mas seguro de viagem não cobre acidentes",
    ],
  },
];

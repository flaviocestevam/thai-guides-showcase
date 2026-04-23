import bangkokBangKrachao from "@/assets/trilhas/bangkok-bang-krachao.jpg";
import bangkokLumpini from "@/assets/trilhas/bangkok-lumpini.jpg";
import bangkokKhaoYai from "@/assets/trilhas/bangkok-khao-yai.jpg";
import bangkokErawan from "@/assets/trilhas/bangkok-erawan.jpg";
import bangkokSamRoiYot from "@/assets/trilhas/bangkok-sam-roi-yot.jpg";
import bangkokKaengKrachan from "@/assets/trilhas/bangkok-kaeng-krachan.jpg";
import kohSamuiViewpoint from "@/assets/trilhas/koh-samui-viewpoint.jpg";
import kohSamuiNamuang from "@/assets/trilhas/koh-samui-namuang.jpg";
import kohPhanganTrail from "@/assets/trilhas/koh-phangan-trail.jpg";
import kohPhanganKohMa from "@/assets/trilhas/koh-phangan-koh-ma.jpg";
import kohPhanganBottle from "@/assets/trilhas/koh-phangan-bottle-beach.jpg";
import phuketBigBuddha from "@/assets/trilhas/phuket-big-buddha.jpg";
import phuketRangHill from "@/assets/trilhas/phuket-rang-hill.jpg";
import phuketTonSai from "@/assets/trilhas/phuket-ton-sai.jpg";
import kohPhiPhi from "@/assets/trilhas/koh-phi-phi.jpg";
import phiPhiCoastal from "@/assets/trilhas/phi-phi-coastal.jpg";
import pattayaKhaoChiChan from "@/assets/trilhas/pattaya-khao-chi-chan.jpg";
import pattayaKohLarn from "@/assets/trilhas/pattaya-koh-larn.jpg";
import tigerCaveKrabi from "@/assets/trilhas/tiger-cave-krabi.jpg";
import krabiRailay from "@/assets/trilhas/krabi-railay-lagoon.jpg";
import krabiTabKak from "@/assets/trilhas/krabi-tab-kak.jpg";
import krabiEmerald from "@/assets/trilhas/krabi-emerald-pool.jpg";
import kohTaoViewpoint from "@/assets/trilhas/koh-tao-viewpoint.jpg";
import kohTaoTanote from "@/assets/trilhas/koh-tao-tanote.jpg";
import kohLipeSunrise from "@/assets/trilhas/koh-lipe-sunrise.jpg";
import kohLipeCliff from "@/assets/trilhas/koh-lipe-cliff.jpg";
import kohLantaPark from "@/assets/trilhas/koh-lanta-national-park.jpg";
import kohLantaWaterfall from "@/assets/trilhas/koh-lanta-waterfall.jpg";
import kohSamuiBuddha from "@/assets/trilhas/koh-samui-buddha-garden.jpg";

export interface Trail {
  id: string;
  title: string;
  location: string;
  badge?: string;
  image: string;
  description: string;
  difficulty: "Fácil" | "Moderada" | "Difícil";
  distance: string;
  duration: string;
  cost: string;
  bestSeason: string;
  howToGet: string;
  highlights: string[];
  warnings: string[];
  guide?: {
    description: string;
    price: string;
    where: string;
    bookUrl?: string;
  };
  tags: string[];
  reviews: string[];
  mapsUrl: string;
}

export interface CitySection {
  id: string;
  emoji: string;
  name: string;
  description: string;
  trails: Trail[];
}

export const cities: CitySection[] = [
  {
    id: "bangkok",
    emoji: "🏙️",
    name: "Bangkok & Arredores",
    description:
      "Surpreendentemente, Bangkok tem ótimas opções de trilhas e natureza. Desde o 'pulmão verde' da cidade até parques nacionais patrimônio da UNESCO a poucas horas de distância.",
    trails: [
      {
        id: "bang-krachao",
        title: "Bang Krachao — O Pulmão Verde de Bangkok",
        location: "Perto do Centro",
        badge: "Bangkok #1",
        image: bangkokBangKrachao,
        description:
          "Uma ilha verde no meio do rio Chao Phraya, conhecida como o 'pulmão de Bangkok'. Passarelas de madeira sobre mangues, templos escondidos, jardins botânicos e mercados locais.",
        difficulty: "Fácil",
        distance: "12 km (circuito de bicicleta/caminhada)",
        duration: "3-4 horas",
        cost: "Gratuita (bicicleta ~80 THB / R$ 13)",
        bestSeason: "Novembro a Fevereiro (mais fresco). Possível o ano todo.",
        howToGet:
          "BTS até Bangna, táxi/Grab até Klong Toei Pier (50 THB). Barco 5 min (5 THB). Alugue bicicleta na chegada (80 THB/dia).",
        highlights: [
          "Passarelas de madeira elevadas sobre floresta de mangue",
          "Sri Nakhon Khuean Khan Park — jardim botânico espetacular",
          "Mercado flutuante Bang Nam Phueng aos fins de semana",
          "Templos budistas escondidos na vegetação",
          "A 10 minutos de barco do centro de Bangkok",
        ],
        warnings: [
          "Leve bastante água — calor intenso o ano todo",
          "Algumas passarelas podem estar escorregadias na chuva",
          "Melhor ir pela manhã cedo (antes das 9h)",
        ],
        guide: {
          description:
            "Guias locais disponíveis no pier de chegada. Tours guiados de bicicleta incluem paradas em templos e mercado.",
          price: "500-800 THB (~R$ 80-130) por grupo",
          where: "Co van Kessel Bangkok Tours, Grasshopper Adventures",
          bookUrl: "https://www.covankessel.com/",
        },
        tags: ["Urbano", "Bicicleta", "Mangue", "Fácil", "Day Trip"],
        reviews: [
          "Não acreditei que isso existe no meio de Bangkok. Silêncio total, passarinhos cantando, mangue verde. Voltei 3 vezes.",
          "Rented a bike for 80 baht and spent the whole morning exploring. The floating market is a bonus!",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=13.6833,100.5667",
      },
      {
        id: "lumpini",
        title: "Lumpini Park — Trilha Urbana com Lagartos Gigantes",
        location: "Bangkok #2",
        image: bangkokLumpini,
        description:
          "O Central Park de Bangkok. Um oásis de 57 hectares no coração da cidade com lagos, árvores tropicais centenárias e os famosos monitor lizards (lagartos de 1.5m) que passeiam livremente.",
        difficulty: "Fácil",
        distance: "2.5 km (circuito do lago)",
        duration: "1-2 horas",
        cost: "Gratuita",
        bestSeason: "O ano todo. Manhã cedo para evitar calor.",
        howToGet:
          "BTS Silom ou MRT Lumphini. Entrada principal na Rama IV Road. Grab de qualquer hotel ~50-100 THB.",
        highlights: [
          "Monitor lizards (lagartos-monitores) gigantes — até 2m",
          "Lago artificial com pedalinhos em forma de cisne",
          "Aulas gratuitas de tai chi e aeróbica toda manhã (5h30-7h)",
          "Vista dos arranha-céus entre palmeiras tropicais",
          "Gratuito e aberto das 4h30 às 21h",
        ],
        warnings: [
          "Não alimente os lagartos — são selvagens",
          "Calor intenso ao meio-dia — vá cedo ou ao final da tarde",
        ],
        tags: ["Urbano", "Grátis", "Família", "Lagartos", "Corrida"],
        reviews: ["Vi 3 lagartos enormes tomando sol no gramado. Experiência surreal no meio da cidade."],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=13.7308,100.5412",
      },
      {
        id: "khao-yai",
        title: "Khao Yai National Park — Patrimônio UNESCO",
        location: "Bangkok (3h de carro) #3",
        badge: "UNESCO",
        image: bangkokKhaoYai,
        description:
          "Patrimônio da UNESCO a 3 horas de Bangkok. Floresta tropical densa, cachoeiras monumentais (Haew Narok com 150m de queda), avistamento de elefantes selvagens e gibbons. A cachoeira Haew Suwat ficou famosa no filme 'A Praia' com Leonardo DiCaprio.",
        difficulty: "Moderada",
        distance: "5-12 km (varia por trilha)",
        duration: "1 dia inteiro",
        cost: "400 THB entrada (~R$ 64) + transporte",
        bestSeason: "Novembro a Fevereiro (seca). Jun-Out: chuvas mas ótimo para elefantes.",
        howToGet:
          "Van de Mo Chit (200 THB, 3h) até Pak Chong + songthaew até parque. Ou alugue carro. Tours: 2.000-3.500 THB com tudo incluso.",
        highlights: [
          "Patrimônio Mundial da UNESCO — biodiversidade impressionante",
          "Cachoeira Haew Narok — 150m de queda",
          "Cachoeira Haew Suwat — cenário do filme 'A Praia'",
          "Avistamento de elefantes, gibbons e tucanos selvagens",
          "Trilhas sinalizadas para todos os níveis",
        ],
        warnings: [
          "Reserve carro/van com antecedência — transporte público limitado",
          "Sanguessugas na estação chuvosa — use meias altas e repelente",
          "Não aproxime dos elefantes selvagens — mínimo 30m",
          "Parque fecha às 18h — chegue cedo (7h)",
        ],
        guide: {
          description: "Guias do parque na entrada. Tours privados incluem transporte e todas as trilhas.",
          price: "1.000-2.000 THB (~R$ 160-320) por guia/dia. Tours: 2.500-3.500 THB/pessoa",
          where: "Khao Yai Visitor Center, Greenleaf Tour",
          bookUrl: "https://www.khaoyainationalpark.com/",
        },
        tags: ["UNESCO", "Cachoeiras", "Vida Selvagem", "Day Trip", "Selva"],
        reviews: [
          "Vimos 3 elefantes selvagens cruzando a estrada. A cachoeira Haew Narok é absurda. Melhor day trip de Bangkok.",
          "The Jurassic Park of Thailand. Hornbills flying overhead, gibbons calling. Absolutely magical.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=14.4362,101.3700",
      },
      {
        id: "erawan",
        title: "Erawan National Park — 7 Cachoeiras Turquesa",
        location: "Kanchanaburi (3h de Bangkok) #4",
        badge: "Cachoeira #1",
        image: bangkokErawan,
        description:
          "O parque das 7 cachoeiras. Cada nível revela uma piscina natural de água turquesa mais bonita que a anterior. A Erawan Falls é considerada a cachoeira mais bonita da Tailândia. Peixes fazem 'fish spa' nos seus pés enquanto você descansa nas piscinas.",
        difficulty: "Moderada",
        distance: "3.5 km (até o 7º nível)",
        duration: "4-5 horas",
        cost: "300 THB entrada (~R$ 48) + transporte",
        bestSeason: "Novembro a Maio (melhor volume de água). Jun-Out possível mas chuvoso.",
        howToGet:
          "De Bangkok: van da Southern Bus Terminal para Kanchanaburi (120 THB, 2.5h), depois ônibus 8170 até Erawan (50 THB, 1.5h). Tour de 1 dia: 1.500-2.500 THB.",
        highlights: [
          "7 níveis de cachoeiras com piscinas naturais turquesa",
          "Banho em cada nível — leve roupa de banho",
          "Peixes fazem 'fish spa' natural nos seus pés",
          "Considerada a cachoeira mais bonita da Tailândia",
          "Combinável com Ponte do Rio Kwai no mesmo dia",
        ],
        warnings: [
          "Chegar antes das 9h — parque lotado aos fins de semana",
          "Proibido protetor solar nos níveis superiores (proteger água)",
          "Nível 7 exige subida íngreme por pedras — cuidado",
          "Guardar pertences — macacos roubam mochilas abertas",
        ],
        guide: {
          description: "Tours de dia inteiro saindo de Bangkok incluem transporte, guia, almoço e visita à Ponte do Rio Kwai.",
          price: "1.500-2.500 THB (~R$ 240-400) tour completo",
          where: "Tours de Bangkok: Klook, GetYourGuide, agências em Khao San Road",
          bookUrl: "https://www.klook.com/en-TH/activity/2078-erawan-waterfall-kanchanaburi/",
        },
        tags: ["Cachoeira", "Banho", "Turquesa", "Day Trip", "Top Tailândia"],
        reviews: [
          "Cada nível é mais lindo que o anterior. A água turquesa é surreal. Os peixes fazendo spa nos pés é hilário. OBRIGATÓRIO.",
          "Level 7 is worth every drop of sweat. The color of the water is unreal. Best waterfall I've seen in SE Asia.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=14.3694,98.8689",
      },
      {
        id: "sam-roi-yot",
        title: "Khao Sam Roi Yot — Caverna do Pavilhão Real",
        location: "Prachuap Khiri Khan (3.5h de Bangkok) #5",
        badge: "Foto Épica",
        image: bangkokSamRoiYot,
        description:
          "Parque nacional com 300 picos de calcário e a famosa Phraya Nakhon Cave — uma caverna enorme com um pavilhão real iluminado por raios de sol que entram pelo teto. A foto do raio de luz no pavilhão é uma das mais icônicas da Tailândia.",
        difficulty: "Moderada",
        distance: "3 km (ida e volta até a caverna)",
        duration: "3-4 horas",
        cost: "200 THB entrada (~R$ 32) + barco 400 THB",
        bestSeason: "Novembro a Março (seca). Sol na caverna: 10h-12h entre nov-fev.",
        howToGet: "De Bangkok: van para Pranburi (250 THB, 3.5h), táxi até parque. Ou alugue carro. De Hua Hin: 1h de carro.",
        highlights: [
          "Phraya Nakhon Cave — pavilhão real iluminado por raios de sol",
          "Uma das fotos mais icônicas da Tailândia",
          "300 picos de calcário — paisagem jurássica",
          "Praias selvagens e mangues protegidos",
          "Avistamento de golfinhos da costa (sorte)",
          "Poucos turistas — local autêntico",
        ],
        warnings: [
          "Melhor entre 10h-12h quando o sol entra na caverna",
          "Subida de 430 degraus até a caverna — leve água",
          "Barco até Laem Sala Beach obrigatório (ou trilha de 30min)",
          "Chão da caverna escorregadio — cuidado",
        ],
        guide: {
          description: "Guias locais no pier oferecem barco + acompanhamento até a caverna.",
          price: "400-600 THB barco + 300-500 THB guia",
          where: "No pier de Laem Sala, dentro do parque",
        },
        tags: ["Caverna", "Fotografia", "Patrimônio", "Day Trip", "Icônico"],
        reviews: [
          "Quando o raio de sol entrou na caverna e iluminou o pavilhão, eu fiquei sem palavras. Parece cenário de filme. A subida vale cada degrau.",
          "The light beam hitting the pavilion is surreal. Best photo opportunity in Thailand. Go at 10-11am for the magic.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.1985,99.9576",
      },
      {
        id: "kaeng-krachan",
        title: "Kaeng Krachan — Maior Parque Nacional da Tailândia",
        location: "Phetchaburi (3h de Bangkok) #6",
        badge: "Selvagem",
        image: bangkokKaengKrachan,
        description:
          "O maior parque nacional da Tailândia e Patrimônio da UNESCO. Mar de névoa ao nascer do sol no Panoen Thung, floresta tropical primária com elefantes, leopardos e mais de 400 espécies de aves.",
        difficulty: "Difícil",
        distance: "8-15 km (varia por trilha)",
        duration: "1-2 dias",
        cost: "300 THB entrada (~R$ 48)",
        bestSeason: "Novembro a Fevereiro (seca, mar de névoa). Estrada fecha na chuva.",
        howToGet:
          "De Bangkok: carro até Phetchaburi (2.5h), depois 1h até entrada do parque. 4x4 obrigatório para Panoen Thung. Tours de 2 dias: 4.000-6.000 THB.",
        highlights: [
          "Mar de névoa no mirante Panoen Thung ao nascer do sol",
          "Patrimônio UNESCO — maior parque nacional (2.915 km²)",
          "Mais de 400 espécies de aves — paraíso para birdwatching",
          "Elefantes, leopardos, ursos e gaurs selvagens",
          "Cachoeira Pala-U de 16 níveis",
          "Camping com estrelas sem poluição luminosa",
        ],
        warnings: [
          "Estrada até Panoen Thung abre só de nov a março (4x4 obrigatório)",
          "Malária em algumas áreas — use repelente e roupas longas",
          "Não faça trilhas sozinho — animais selvagens perigosos",
          "Reservar camping e 4x4 com antecedência",
          "Leve roupas quentes para o topo (pode chegar a 5°C de madrugada)",
        ],
        guide: {
          description: "Guias obrigatórios para trilhas no interior. Rangers do parque oferecem tours de 4x4 até o mirante.",
          price: "1.500-3.000 THB/dia (~R$ 240-480). Tour 4x4: 800 THB/pessoa",
          where: "Centro de Visitantes do Parque, Ban Krang Camping",
          bookUrl: "https://www.thainationalparks.com/kaeng-krachan-national-park",
        },
        tags: ["UNESCO", "Selvagem", "Birdwatching", "Camping", "Aventura"],
        reviews: [
          "O mar de névoa ao nascer do sol no Panoen Thung é a coisa mais linda que já vi na vida. Senti estar nas nuvens. Trilha puxada mas transcendente.",
          "Best birdwatching in Thailand. Saw hornbills, broadbills, and even a sun bear track. True wilderness.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.8023,99.3774",
      },
    ],
  },
  {
    id: "koh-samui",
    emoji: "🌴",
    name: "Koh Samui",
    description:
      "A ilha mais desenvolvida do Golfo da Tailândia também esconde trilhas incríveis. Mirantes sobre o oceano, cachoeiras na selva, jardins secretos e trilhas costeiras com praias desertas.",
    trails: [
      {
        id: "khao-pom",
        title: "Khao Pom Viewpoint Trek",
        location: "Koh Samui #1",
        badge: "Melhor Vista",
        image: kohSamuiViewpoint,
        description:
          "O mirante mais espetacular de Koh Samui. Trilha pela selva densa até o ponto mais alto acessível da ilha, com vista panorâmica 360° do oceano, praias e ilhas vizinhas.",
        difficulty: "Moderada",
        distance: "3 km (ida e volta)",
        duration: "2-3 horas",
        cost: "Gratuita",
        bestSeason: "Dezembro a Abril (seca). Evite outubro-novembro (monções).",
        howToGet: "De Chaweng/Lamai: scooter (~250 THB/dia) pela estrada interior. Grab ~300-500 THB.",
        highlights: [
          "Vista panorâmica 360° de Koh Samui e ilhas ao redor",
          "Trilha na selva com árvores centenárias e cipós",
          "Poucos turistas — maioria vai apenas às praias",
          "Ótimo para fotos ao nascer ou pôr do sol",
          "Flora tropical diversa — orquídeas selvagens na trilha",
        ],
        warnings: [
          "Trilha íngreme no trecho final — use tênis com aderência",
          "Sem sinalização clara — use AllTrails ou Maps.me",
          "Leve mínimo 1.5L de água",
          "Escorregadia na chuva — evite dias chuvosos",
        ],
        tags: ["Mirante", "Selva", "Grátis", "Fotografia", "Ilha"],
        reviews: ["Vista insana. Alugamos scooter e fomos cedo. Praticamente sozinhos no topo."],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.5120,100.0600",
      },
      {
        id: "namuang",
        title: "Na Muang Waterfalls Trail (1 e 2)",
        location: "Koh Samui #2",
        image: kohSamuiNamuang,
        description:
          "Duas cachoeiras espetaculares conectadas por trilha na selva. Na Muang 1 é fácil — 5 minutos do estacionamento. Na Muang 2 é o prêmio — 30 minutos de trilha íngreme até uma cachoeira de 80m com piscina de pedra.",
        difficulty: "Moderada",
        distance: "2 km (ida e volta até Namuang 2)",
        duration: "2-3 horas",
        cost: "Gratuita",
        bestSeason: "Novembro a Janeiro (melhor volume de água).",
        howToGet: "De Chaweng: 30 min de scooter ou Grab (~400 THB). Estacionamento gratuito.",
        highlights: [
          "Na Muang 1: acesso fácil, ótima para famílias",
          "Na Muang 2: cachoeira de 80m com piscina natural no topo",
          "Banho refrescante nas piscinas naturais",
          "Macacos selvagens pela trilha — ótimas fotos",
          "Totalmente gratuita",
        ],
        warnings: [
          "Trilha para Na Muang 2 é íngreme e com pedras soltas",
          "MUITO escorregadia na chuva",
          "Macacos podem roubar pertences — não deixe mochilas abertas",
          "Na Muang 2 pode secar nos meses mais secos (mar-abr)",
        ],
        tags: ["Cachoeira", "Banho", "Grátis", "Selva", "Família"],
        reviews: [
          "Na Muang 2 vale cada gota de suor. A piscina no topo é um sonho.",
          "Swimming in the natural pool at the top was unforgettable. Be careful on the rocks!",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.4650,100.0270",
      },
    ],
  },
  {
    id: "koh-phangan",
    emoji: "🌙",
    name: "Koh Phangan",
    description:
      "Muito além da Full Moon Party! Koh Phangan tem as melhores trilhas de praia da Tailândia — selva densa que termina em praias desertas acessíveis apenas a pé ou de barco.",
    trails: [
      {
        id: "khao-ra",
        title: "Khao Ra — Pico Mais Alto de Koh Phangan",
        location: "Koh Phangan #1",
        badge: "Desafio Máximo",
        image: kohPhanganTrail,
        description:
          "O desafio supremo de Koh Phangan. Trilha íngreme pela selva até o ponto mais alto da ilha (627m) com vista panorâmica de 360° — Koh Samui, Koh Tao e o Golfo da Tailândia inteiro.",
        difficulty: "Difícil",
        distance: "4 km (ida e volta)",
        duration: "3-4 horas",
        cost: "Gratuita",
        bestSeason: "Dezembro a Março (seca e visibilidade).",
        howToGet: "De Thong Sala: scooter até estrada de terra (~20 min). Grab não chega até o início.",
        highlights: [
          "Vista 360° — Koh Samui, Koh Tao e continente visíveis",
          "Trilha selvagem e desafiadora — sensação de explorador",
          "Floresta primária com árvores centenárias",
          "Pouquíssimos turistas",
          "Nascer do sol do topo é transcendente",
        ],
        warnings: [
          "Trilha MAL sinalizada — use GPS/AllTrails obrigatoriamente",
          "Não vá sozinho — leve companhia ou contrate guia",
          "Muito íngreme — necessário boa condição física",
          "Leve mínimo 2L de água e snacks",
          "Comece cedo (6h) para evitar calor",
        ],
        guide: {
          description: "Guias locais recomendados por segurança. Trilha mal sinalizada torna guia quase essencial.",
          price: "800-1.500 THB (~R$ 130-240) por grupo",
          where: "Hostels de Thong Sala ou Baan Tai. Eco Phangan Adventures",
          bookUrl: "https://www.ecophangan.com/",
        },
        tags: ["Montanha", "Desafio", "Grátis", "Vista Panorâmica", "Aventura"],
        reviews: [
          "A trilha mais difícil que fiz na Tailândia e a mais recompensadora. Lá de cima dá pra ver 3 ilhas.",
          "Started at 5:30am with headlamps. Caught sunrise at the top. Life-changing. Bring GPS!",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.7500,100.0300",
      },
      {
        id: "phaeng",
        title: "Phaeng Waterfall & Domsila Viewpoint",
        location: "Koh Phangan #2",
        image: kohPhanganTrail,
        description:
          "A trilha mais acessível de Koh Phangan dentro do Than Sadet National Park. Duas cachoeiras com piscinas naturais para banho, e o mirante Domsila com vista panorâmica da ilha.",
        difficulty: "Fácil",
        distance: "1.5 km (circuito)",
        duration: "1-2 horas",
        cost: "100 THB (~R$ 16)",
        bestSeason: "O ano todo. Melhor volume de outubro a janeiro.",
        howToGet: "De Thong Sala: 20 min de scooter. Grab ~200-300 THB. Estacionamento gratuito.",
        highlights: [
          "Duas cachoeiras com piscinas naturais para banho",
          "Mirante Domsila com vista panorâmica",
          "Trilha bem sinalizada — fácil de seguir",
          "Ótima para famílias e iniciantes",
          "Árvore centenária gigante na trilha",
        ],
        warnings: [
          "Degraus para o mirante são íngremes",
          "Volume de água varia — melhor após chuvas",
          "Macacos — proteja pertences",
        ],
        tags: ["Cachoeira", "Mirante", "Parque Nacional", "Família", "Banho"],
        reviews: ["Trilha perfeita para um dia relax. Banho na cachoeira, vista do mirante, tudo em 2 horas."],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.7200,100.0100",
      },
      {
        id: "koh-ma",
        title: "Mae Haad Beach → Koh Ma (Ilha Conectada)",
        location: "Koh Phangan #3",
        badge: "Snorkeling Top",
        image: kohPhanganKohMa,
        description:
          "Caminhada única por um banco de areia natural que conecta Koh Phangan à pequena ilha de Koh Ma. Na maré baixa, você literalmente caminha sobre o mar até outra ilha. Snorkeling espetacular nos dois lados.",
        difficulty: "Fácil",
        distance: "1 km (ida até Koh Ma)",
        duration: "1-2 horas",
        cost: "Gratuita",
        bestSeason: "Março a Setembro (mar calmo no lado oeste). Confira maré baixa.",
        howToGet: "De Thong Sala: 25 min de scooter até Mae Haad Beach (noroeste da ilha). Grab ~300 THB.",
        highlights: [
          "Caminhar sobre banco de areia entre duas ilhas",
          "Melhor snorkeling de Koh Phangan — tartarugas marinhas",
          "Corais coloridos a metros da praia",
          "Pôr do sol épico — um dos melhores da ilha",
          "Completamente gratuito",
          "Acessível para todos — famílias e crianças",
        ],
        warnings: [
          "Só possível na maré baixa — confira a tábua de marés",
          "Use sapato de água — corais cortam",
          "Corrente pode ser forte nos lados do banco de areia",
          "Protetor solar reef-safe para proteger os corais",
        ],
        tags: ["Snorkeling", "Ilha", "Praia", "Tartarugas", "Grátis"],
        reviews: [
          "Caminhei sobre o mar até outra ilha. Vi 2 tartarugas marinhas no snorkeling. Pôr do sol de chorar. Melhor dia em Koh Phangan.",
          "The sandbar between the islands is magical at low tide. Best snorkeling on KPG — saw turtles and lionfish.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.7830,99.9630",
      },
    ],
  },
  {
    id: "phuket",
    emoji: "🏖️",
    name: "Phuket",
    description:
      "A maior ilha da Tailândia não é só resort e balada. Phuket esconde trilhas com mirantes, templos no topo de montanhas, cachoeiras na selva e praias selvagens em parques nacionais.",
    trails: [
      {
        id: "big-buddha",
        title: "Big Buddha & Nakkerd Hill Trek",
        location: "Phuket #1",
        badge: "Icônico",
        image: phuketBigBuddha,
        description:
          "O ícone de Phuket. A maioria vai de carro, mas existe uma trilha alternativa pela selva até o Big Buddha de 45 metros de mármore de Carrara. Vista 360° de Chalong Bay, Kata, Karon e o Mar de Andaman.",
        difficulty: "Fácil",
        distance: "6 km (ida e volta pela trilha alternativa)",
        duration: "2-3 horas",
        cost: "Gratuita (doações bem-vindas)",
        bestSeason: "Novembro a Abril (seca). Possível o ano todo.",
        howToGet: "De Patong/Kata/Karon: Grab ~300-500 THB. Scooter pela estrada de Chalong (~30 min).",
        highlights: [
          "Big Buddha de 45m — revestido de mármore de Carrara",
          "Vista 360° de Phuket — praias, baías e ilhas",
          "Templo ativo com monges — experiência espiritual",
          "Trilha alternativa pela selva (poucos conhecem)",
          "Pôr do sol espetacular",
        ],
        warnings: [
          "Vista-se com respeito — ombros e joelhos cobertos",
          "A estrada de carro é sinuosa — cuidado de scooter",
          "Trilha alternativa mal sinalizada — use GPS",
        ],
        tags: ["Templo", "Mirante", "Grátis", "Pôr-do-sol", "Espiritual"],
        reviews: [
          "Fomos pela trilha alternativa. 1 hora de subida pela selva e chegamos no Big Buddha sem ninguém. Vista insana do sunset.",
          "The marble Buddha glowing at sunset is something I'll never forget.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.8277,98.3131",
      },
      {
        id: "rang-hill",
        title: "Rang Hill (Khao Rang) Nature Trail",
        location: "Phuket #2",
        image: phuketRangHill,
        description:
          "A trilha favorita dos moradores de Phuket Town. Subida suave pela floresta tropical até mirantes com vista da cidade e da baía. Cafés e restaurantes no topo.",
        difficulty: "Fácil",
        distance: "3 km (circuito)",
        duration: "1-2 horas",
        cost: "Gratuita",
        bestSeason: "O ano todo.",
        howToGet: "De Phuket Town: 10 min a pé ou Grab (~80 THB). De Patong: Grab ~200 THB.",
        highlights: [
          "Trilha sombreada — confortável mesmo no calor",
          "Vista panorâmica de Phuket Town e Chalong Bay",
          "Cafés e restaurantes no topo",
          "Macacos selvagens na trilha",
          "Combinável com Phuket Old Town (walking distance)",
        ],
        warnings: ["Macacos podem ser agressivos — não mostre comida", "Mosquitos no início — use repelente"],
        tags: ["Urbano", "Fácil", "Grátis", "Café", "Vista"],
        reviews: ["Perfeito para manhã ativa. Trilha fácil, vista linda e café no topo. Phuket tem mais que praia!"],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.8843,98.3848",
      },
    ],
  },
  {
    id: "koh-phi-phi",
    emoji: "🏝️",
    name: "Koh Phi Phi",
    description:
      "As ilhas mais fotografadas da Tailândia. Além das praias paradisíacas, Phi Phi tem mirantes espetaculares, trilhas costeiras e aventuras na selva.",
    trails: [
      {
        id: "viewpoint",
        title: "Phi Phi Viewpoint 1, 2 e 3",
        location: "Koh Phi Phi #1",
        badge: "Mais Famoso",
        image: kohPhiPhi,
        description:
          "Três mirantes progressivos sobre Koh Phi Phi Don. O viewpoint 3 tem a vista completa das duas baías formando o icônico formato de borboleta. A foto mais famosa da Tailândia sai daqui.",
        difficulty: "Moderada",
        distance: "1.5 km (subida)",
        duration: "30-60 minutos",
        cost: "30 THB (~R$ 5)",
        bestSeason: "Novembro a Abril (seca).",
        howToGet: "O viewpoint fica a 15min a pé do pier de Tonsai. Siga as placas.",
        highlights: [
          "A foto mais icônica da Tailândia — duas baías",
          "3 mirantes progressivos",
          "Pôr-do-sol e nascer do sol épicos do viewpoint 3",
          "Combinável com snorkeling e praias no mesmo dia",
          "Barraquinhas de coco na subida",
        ],
        warnings: [
          "Muito íngreme no final — use tênis",
          "Extremamente quente ao meio-dia — vá cedo ou tarde",
          "Lotado ao pôr do sol — chegue com antecedência",
        ],
        tags: ["Mirante", "Nascer do Sol", "Fotografia", "Icônico", "Ilha"],
        reviews: [
          "Acordei 5h30 pra ver o nascer do sol. Zero arrependimento. A vista é de postal.",
          "Viewpoint 3 is worth the extra climb. Had it almost to ourselves at sunrise.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.7390,98.7710",
      },
      {
        id: "coastal-trail",
        title: "Trilha Costeira Tonsai → Rantee → Long Beach",
        location: "Koh Phi Phi #2",
        image: phiPhiCoastal,
        description:
          "Trilha costeira que conecta as praias da costa leste de Phi Phi Don. Formações rochosas dramáticas, mirantes escondidos e praias acessíveis apenas a pé. Rantee Beach é especial — poucos turistas.",
        difficulty: "Moderada",
        distance: "3 km (total)",
        duration: "1.5-2 horas",
        cost: "Gratuita",
        bestSeason: "Novembro a Abril (mar calmo).",
        howToGet: "Começa em Tonsai Village pela costa leste. De Long Beach, barco de volta (100 THB).",
        highlights: [
          "3 praias conectadas por trilha costeira",
          "Rantee Beach — praia remota",
          "Long Beach — água cristalina para snorkeling",
          "Formações rochosas calcárias dramáticas",
          "Possível ver tubarões-de-ponta-preta (Long Beach)",
        ],
        warnings: ["Pedras e raízes — não vá de chinelo", "Maré alta pode dificultar passagem", "Volta de longtail boat (~100-200 THB)"],
        tags: ["Costeira", "Praias", "Snorkeling", "Grátis", "Remota"],
        reviews: ["Rantee Beach é o segredo de Phi Phi. Quase ninguém, água perfeita. Voltamos de barco cansados e felizes."],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.7350,98.7750",
      },
      {
        id: "maya-bay",
        title: "Maya Bay Trail (Phi Phi Leh)",
        location: "Koh Phi Phi #3",
        badge: "A Praia",
        image: kohPhiPhi,
        description:
          "A praia do filme 'A Praia' com Leonardo DiCaprio. Após anos fechada para recuperação ambiental, Maya Bay reabriu com acesso controlado. Tubarões-de-ponta-preta nadam na baía restaurada.",
        difficulty: "Fácil",
        distance: "500m (trilha na ilha)",
        duration: "2-3 horas (incluindo barco)",
        cost: "400 THB entrada + 700-1.500 THB barco",
        bestSeason: "Novembro a Abril (mar calmo para barcos).",
        howToGet:
          "De Phi Phi Don: longtail boat ou speed boat (700-1.500 THB ida e volta). Tours de meio dia incluem Maya Bay e snorkeling.",
        highlights: [
          "A praia mais famosa do cinema — cenário de 'A Praia'",
          "Tubarões-de-ponta-preta na baía restaurada",
          "Água cristalina com corais recuperados",
          "Acesso controlado — máximo 300 pessoas por vez",
          "Trilha pela floresta com vista panorâmica da baía",
        ],
        warnings: [
          "Reservar com antecedência — acesso limitado",
          "Proibido nadar na baía principal (proteção ambiental)",
          "Não é permitido ficar mais de 1 hora",
          "Só acessível de barco + trilha",
        ],
        guide: {
          description: "Tours de barco com guia incluem Maya Bay, Pileh Lagoon e snorkeling.",
          price: "700-1.500 THB (~R$ 112-240) por pessoa (tour completo)",
          where: "Agências em Tonsai Village, booking.com, Klook",
          bookUrl: "https://www.klook.com/en-TH/activity/1969-phi-phi-islands-day-trip-phuket/",
        },
        tags: ["Filme", "Praia", "Tubarões", "Barco", "Icônico"],
        reviews: [
          "Depois que fechou e reabriu, Maya Bay está muito mais bonita. Vi 4 tubarões na baía.",
          "The controlled access makes it so much better. Sharks swimming in the bay is proof nature heals. Book early!",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.6783,98.7647",
      },
    ],
  },
  {
    id: "pattaya",
    emoji: "🌊",
    name: "Pattaya & Arredores",
    description:
      "Pattaya vai muito além da vida noturna. A região esconde montanhas com Budas gigantes, ilhas com trilhas costeiras, reservas naturais e cachoeiras escondidas.",
    trails: [
      {
        id: "khao-chi-chan",
        title: "Khao Chi Chan — Buda na Montanha",
        location: "Pattaya #1",
        badge: "Monumental",
        image: pattayaKhaoChiChan,
        description:
          "Uma montanha de calcário com um Buda de 130m esculpido a laser na rocha — a maior imagem de Buda em pedra do mundo. Jardim botânico ao redor com trilhas leves entre jardins tropicais e lagos de lótus.",
        difficulty: "Fácil",
        distance: "2 km (circuito no entorno)",
        duration: "1-2 horas",
        cost: "Gratuita",
        bestSeason: "O ano todo. Manhã para melhor iluminação.",
        howToGet: "De Pattaya: 30 min de Grab (~300 THB). Combinável com Nong Nooch Garden (5 min).",
        highlights: [
          "Buda de 130m esculpido em montanha de calcário",
          "Jardim botânico tropical com lagos de lótus",
          "Trilhas leves e sombreadas",
          "Gratuito",
          "Combinável com Nong Nooch Garden",
        ],
        warnings: ["Local sagrado — vista-se com respeito", "Melhor pela manhã — sol ilumina o Buda de frente"],
        tags: ["Buda", "Jardim", "Grátis", "Fácil", "Cultural"],
        reviews: ["Impressionante ver o Buda de 130m de perto. O jardim é lindo e tranquilo."],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.7640,100.9480",
      },
      {
        id: "koh-larn",
        title: "Koh Larn — Trilhas da Ilha Coral",
        location: "Pattaya #2",
        image: pattayaKohLarn,
        description:
          "Ilha a 7 km de Pattaya com 6 praias de água cristalina conectadas por trilhas e estradas. Infinitamente mais bonitas que Pattaya Beach.",
        difficulty: "Fácil",
        distance: "8 km (circuito da ilha)",
        duration: "3-5 horas",
        cost: "30 THB ferry + entrada gratuita",
        bestSeason: "Novembro a Abril (mar calmo e cristalino).",
        howToGet: "Ferry de Bali Hai Pier (30 THB, 45 min) ou speed boat (300 THB, 15 min). Ferries a cada hora.",
        highlights: [
          "6 praias com água cristalina",
          "Tien Beach — a mais bonita e menos lotada",
          "Mirantes panorâmicos entre as praias",
          "Snorkeling com corais e peixes coloridos",
          "Ferry barato (30 THB) e frequente",
          "Frutos do mar frescos e baratos",
        ],
        warnings: [
          "Alugue scooter na ilha (~300 THB/dia)",
          "Protetor solar OBRIGATÓRIO",
          "Último ferry ~18h — não perca!",
          "Fins de semana lotado — prefira dias de semana",
        ],
        tags: ["Ilha", "Praias", "Snorkeling", "Day Trip", "Ferry"],
        reviews: [
          "Koh Larn é o que Pattaya deveria ser. Tien Beach é espetacular. Volte antes do último ferry!",
          "Best day trip from Pattaya. Rented a scooter, visited 4 beaches.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.9220,100.7830",
      },
    ],
  },
  {
    id: "krabi",
    emoji: "⛩️",
    name: "Krabi",
    description:
      "Praias paradisíacas E trilhas incríveis. Escadarias de templos, mirantes sobre ilhas, lagoas escondidas, piscinas naturais esmeraldas e trilhas com vistas que parecem CGI.",
    trails: [
      {
        id: "tiger-cave",
        title: "Tiger Cave Temple (Wat Tham Suea) — 1.260 Degraus",
        location: "Krabi #1",
        badge: "Desafio Épico",
        image: tigerCaveKrabi,
        description:
          "1.260 degraus íngremes até o topo com Buda dourado e vista 360° de toda a província de Krabi, Andaman Sea e centenas de formações calcárias.",
        difficulty: "Difícil",
        distance: "1.260 degraus (subida)",
        duration: "1-2 horas",
        cost: "Gratuita",
        bestSeason: "Novembro a Março (seca). Possível o ano todo.",
        howToGet: "De Ao Nang: 20min de Grab (~150 THB). De Krabi Town: 15min (~100 THB).",
        highlights: [
          "Vista 360° de Krabi — uma das melhores da Tailândia",
          "Buda dourado e templo no cume",
          "Macacos engraçados na subida",
          "Gratuita",
          "Cavernas com Buda na base",
        ],
        warnings: [
          "MUITO íngreme — leve água (mínimo 1L) e vá de manhã",
          "Use tênis — degraus irregulares",
          "Macacos agressivos no início — esconda comida",
          "NÃO recomendado para problemas no joelho",
        ],
        tags: ["Escadaria", "Templo", "Grátis", "Vista Panorâmica", "Desafio"],
        reviews: [
          "A subida é desumana. Mas a vista do topo me fez chorar. Literalmente. Faça isso.",
          "Started at 6:30am, had the top almost to myself. Sunrise up there is magical.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=8.1261,98.9226",
      },
      {
        id: "railay",
        title: "Railay Beach Lagoon & Viewpoint",
        location: "Krabi #2",
        badge: "Mais Aventura",
        image: krabiRailay,
        description:
          "Trilha curta mas intensa de Railay Beach East até mirante sobre falésias calcárias e lagoa escondida. A descida até a lagoa é técnica — cordas e escalaminhada. A lagoa muda de cor com a maré.",
        difficulty: "Difícil",
        distance: "1 km (curta mas técnica)",
        duration: "1-2 horas",
        cost: "Gratuita",
        bestSeason: "Novembro a Março (maré baixa).",
        howToGet: "De Ao Nang: longtail para Railay (100 THB, 15 min). Trilha começa em Railay East — siga placas 'Viewpoint'.",
        highlights: [
          "Mirante sobre falésias de Railay — cartão postal",
          "Lagoa escondida que muda de cor com a maré",
          "Escalaminhada por rocha calcária — adrenalina",
          "Railay acessível apenas por barco",
          "Um dos cenários mais fotogênicos da Tailândia",
        ],
        warnings: [
          "Descida até a lagoa MUITO técnica — cordas fixas",
          "Chinelo é suicídio aqui — use sapato fechado",
          "Mosquitos na lagoa — repelente",
          "Suje-se — a lama faz parte",
        ],
        guide: {
          description: "Guias em Railay ajudam na descida técnica. Recomendado para iniciantes.",
          price: "300-500 THB (~R$ 48-80) por pessoa",
          where: "Agências em Railay East Beach",
        },
        tags: ["Lagoa", "Escalada", "Aventura", "Fotografia", "Adrenalina"],
        reviews: [
          "A descida pra lagoa é insana. Cordas, lama, pedra molhada. Mas a água verde... UAU.",
          "The viewpoint over Railay is the best photo I've ever taken.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=8.0110,98.8380",
      },
      {
        id: "tab-kak",
        title: "Tab Kak Hang Nak Nature Trail",
        location: "Krabi #3",
        badge: "Vista #1",
        image: krabiTabKak,
        description:
          "A trilha mais espetacular de Krabi. Subida constante pela floresta até planalto rochoso com vista 360° — centenas de ilhotas calcárias no mar turquesa. Possivelmente a melhor vista do sul da Tailândia.",
        difficulty: "Difícil",
        distance: "3.7 km (ida)",
        duration: "3-4 horas (ida e volta)",
        cost: "200 THB (~R$ 32)",
        bestSeason: "Novembro a Março (seca, visibilidade máxima).",
        howToGet: "De Ao Nang: 40 min de Grab (~400 THB). De Krabi Town: 30 min. Highway 4.",
        highlights: [
          "Vista 360° — centenas de ilhotas calcárias no mar",
          "Possivelmente a melhor vista do sul da Tailândia",
          "Planalto rochoso amplo no topo",
          "Menos turístico que Tiger Cave — mais autêntico",
          "Fauna diversa — macacos e pássaros tropicais",
        ],
        warnings: [
          "Subida constante e íngreme — boa condição física necessária",
          "Leve mínimo 2L de água",
          "Comece antes das 8h",
          "Não recomendado na chuva",
          "Protetor solar essencial — topo exposto",
        ],
        guide: {
          description: "Guias na entrada do parque. Recomendado para iniciantes em trilhas íngremes.",
          price: "500-800 THB (~R$ 80-130) por grupo",
          where: "Tab Kak Hang Nak visitor center",
        },
        tags: ["Montanha", "Vista", "Desafio", "Natureza", "Top Trilha"],
        reviews: [
          "A MELHOR trilha que fiz na vida. Vista surreal — parece Avatar. Obrigatória.",
          "Tab Kak wins over Tiger Cave by far. The 360 view is unmatched. Bring LOTS of water.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=8.1730,98.7720",
      },
      {
        id: "emerald-pool",
        title: "Emerald Pool & Hot Springs Nature Trail",
        location: "Krabi #4",
        badge: "Imperdível",
        image: krabiEmerald,
        description:
          "Trilha pela floresta tropical até uma piscina natural de água esmeralda cristalina — a Sa Morakot (Emerald Pool). A água mineral quente vem de fontes termais subterrâneas. Caminhada fácil por passarela de madeira elevada.",
        difficulty: "Fácil",
        distance: "1.4 km (trilha até a piscina)",
        duration: "2-3 horas",
        cost: "200 THB (~R$ 32)",
        bestSeason: "O ano todo. Manhã para evitar multidões.",
        howToGet:
          "De Ao Nang: 45 min de Grab (~500 THB). De Krabi Town: 40 min. Tours de dia inteiro: 1.200-1.800 THB incluem Emerald Pool + Hot Springs + Tiger Cave.",
        highlights: [
          "Emerald Pool — piscina natural de água esmeralda cristalina",
          "Hot Springs — piscinas naturais de água quente (35-40°C)",
          "Passarela de madeira elevada pela floresta tropical",
          "Banho permitido nas duas — leve roupa de banho",
          "Blue Pool secreto — cor azul-turquesa impossível",
          "Combinável com Tiger Cave no mesmo dia",
        ],
        warnings: [
          "Blue Pool — proibido banhar, apenas contemplar",
          "Vai muito cedo (8h) — lotado a partir das 10h",
          "Proibido protetor solar na Emerald Pool",
          "Hot Springs ficam a 15 min de carro — não é no mesmo local",
        ],
        guide: {
          description: "Tours de dia inteiro combinam Emerald Pool + Hot Springs + Tiger Cave.",
          price: "1.200-1.800 THB (~R$ 190-290) tour completo",
          where: "Agências em Ao Nang e Krabi Town, Klook, GetYourGuide",
          bookUrl: "https://www.klook.com/en-TH/activity/7587-emerald-pool-hot-spring-tiger-cave-temple-krabi/",
        },
        tags: ["Piscina Natural", "Termal", "Fácil", "Banho", "Selva"],
        reviews: [
          "A cor da água da Emerald Pool é surreal. Parece photoshop mas é real. Tomar banho ali é mágico. Hot Springs depois completam o dia perfeito.",
          "The Blue Pool's color is unlike anything I've ever seen. The boardwalk trail through the jungle is beautiful too.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=8.1557,98.9408",
      },
    ],
  },
  {
    id: "koh-tao",
    emoji: "🐢",
    name: "Koh Tao",
    description:
      "A 'Ilha da Tartaruga' é famosa pelo mergulho, mas suas trilhas são igualmente espetaculares. Mirantes sobre baías turquesa, trilhas entre pedras gigantes e praias acessíveis apenas a pé.",
    trails: [
      {
        id: "john-suwan",
        title: "John Suwan Viewpoint",
        location: "Koh Tao #1",
        badge: "Melhor Vista",
        image: kohTaoViewpoint,
        description:
          "O mirante mais espetacular de Koh Tao. Subida por pedras gigantes de granito até o topo do promontório sul da ilha, com vista simultânea de Shark Bay e Chalok Baan Kao Bay.",
        difficulty: "Moderada",
        distance: "1 km (subida)",
        duration: "30-45 minutos",
        cost: "50 THB (~R$ 8)",
        bestSeason: "Março a Setembro (melhor visibilidade e mar calmo).",
        howToGet: "De Sairee Beach: scooter até Chalok Baan Kao (15 min). A trilha começa no sul da baía. Sinalizado.",
        highlights: [
          "Vista simultânea de duas baías turquesa",
          "Pedras de granito gigantes — cenário único",
          "A foto mais famosa de Koh Tao",
          "Possível ver tartarugas em Shark Bay (com binóculo)",
          "Pôr do sol espetacular",
          "Trilha curta mas muito gratificante",
        ],
        warnings: [
          "Subida por pedras — use tênis com aderência",
          "Sem sombra no topo — leve água e protetor solar",
          "Pode ser escorregadio após chuva",
          "Cuidado na borda — sem proteção",
        ],
        tags: ["Mirante", "Fotografia", "Pôr-do-sol", "Icônico", "Ilha"],
        reviews: [
          "A melhor vista de ilha que vi na Tailândia. As duas baías turquesa lado a lado são irreais.",
          "Worth every step. The dual bay view is iconic. Go for sunset with a beer from the bottom.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=10.0631,99.8303",
      },
      {
        id: "tanote",
        title: "Trilha Tanote Bay → Ao Leuk → Shark Bay",
        location: "Koh Tao #2",
        badge: "Vida Marinha",
        image: kohTaoTanote,
        description:
          "Trilha costeira que conecta as 3 melhores baías da costa leste de Koh Tao. Cada parada oferece snorkeling espetacular — Tanote tem pedras gigantes, Ao Leuk tem corais coloridos e Shark Bay tem tubarões-de-ponta-preta e tartarugas marinhas.",
        difficulty: "Difícil",
        distance: "5 km (total)",
        duration: "3-4 horas",
        cost: "Gratuita",
        bestSeason: "Março a Setembro (mar calmo, melhor visibilidade).",
        howToGet: "De Sairee Beach: scooter até Tanote Bay (10 min). Trilha segue pela costa sul.",
        highlights: [
          "3 baías com snorkeling espetacular",
          "Shark Bay — tartarugas marinhas e tubarões-de-ponta-preta",
          "Ao Leuk — melhor coral de Koh Tao",
          "Tanote Bay — pedras gigantes de granito na praia",
          "Trilha selvagem com vistas do oceano",
          "Possível ver toda a fauna marinha sem mergulho",
        ],
        warnings: [
          "Trilha mal sinalizada em partes — use AllTrails",
          "Trechos íngremes e com pedras — sapato fechado obrigatório",
          "Leve snorkel, água e protetor solar",
          "Pode ser feita em partes (scooter entre baías)",
          "Maré baixa revela mais corais para snorkeling",
        ],
        guide: {
          description: "Guias de snorkeling oferecem tours pelas baías. Alguns incluem equipamento e almoço.",
          price: "800-1.500 THB (~R$ 130-240) por pessoa (tour de dia inteiro)",
          where: "Dive shops em Sairee Beach: Goodtime Adventures, Roctopus",
          bookUrl: "https://www.roctopusdive.com/",
        },
        tags: ["Snorkeling", "Tartarugas", "Tubarões", "Costeira", "Aventura"],
        reviews: [
          "Nadei com tartaruga em Shark Bay e vi tubarão-de-ponta-preta. Tudo sem mergulho, só snorkel. Koh Tao é demais.",
          "The coastal trail is rough but connecting these three bays on foot is the ultimate Koh Tao experience.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=10.0800,99.8480",
      },
    ],
  },
  {
    id: "koh-lipe",
    emoji: "💎",
    name: "Koh Lipe",
    description:
      "A 'Maldivas da Tailândia'. A ilha mais remota e paradisíaca do país, no extremo sul do Mar de Andaman, perto da fronteira com a Malásia. Água cristalina, corais intocados e trilhas entre praias perfeitas.",
    trails: [
      {
        id: "sunrise-sunset",
        title: "Sunrise Beach → Sunset Beach (Trilha Cross-Island)",
        location: "Koh Lipe #1",
        badge: "Maldivas Thai",
        image: kohLipeSunrise,
        description:
          "Atravesse Koh Lipe de leste a oeste — de Sunrise Beach até Sunset Beach. A trilha passa pela Walking Street (rua principal), selva e chega na praia do pôr do sol.",
        difficulty: "Fácil",
        distance: "1.5 km (atravessando a ilha)",
        duration: "30-45 minutos",
        cost: "Gratuita",
        bestSeason: "Novembro a Abril (seca, barcos operando). Pico: dez-jan.",
        howToGet: "De Hat Yai: van para Pak Bara (2h), ferry para Koh Lipe (1.5h, ~450 THB). De Langkawi (Malásia): ferry direto na alta temporada.",
        highlights: [
          "Nascer do sol em Sunrise Beach — tons de rosa e dourado",
          "Pôr do sol em Sunset Beach — sobre o Andaman",
          "Walking Street — restaurantes, bares e artesanato",
          "Água cristalina turquesa em ambas as praias",
          "Areia branca como farinha — das mais bonitas da Tailândia",
          "Sem carros na ilha — tudo a pé",
        ],
        warnings: [
          "Sem ATMs na ilha — traga dinheiro de Pak Bara ou Hat Yai",
          "Eletricidade pode cair em tempestades",
          "Internet lenta — desconecte e aproveite",
          "Temporada de monções (mai-out) — muitos barcos cancelados",
        ],
        tags: ["Paraíso", "Praia", "Nascer do Sol", "Pôr-do-sol", "Remoto"],
        reviews: [
          "Koh Lipe é outro planeta. A água é a mais cristalina que já vi. Nascer do sol num lado, pôr do sol no outro, tudo a pé. Paraíso absoluto.",
          "The closest thing to Maldives in Thailand. Crystal clear water, white sand, no cars. Heaven.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=6.4919,99.3019",
      },
      {
        id: "koh-adang",
        title: "Snorkeling Trail — Koh Adang Viewpoint",
        location: "Koh Lipe (Koh Adang) #2",
        badge: "Vista de Ilha",
        image: kohLipeCliff,
        description:
          "Longtail boat curto até Koh Adang (ilha vizinha de Koh Lipe) e trilha na selva até o Chado Cliff Viewpoint — mirante espetacular sobre Koh Lipe do alto. Vista panorâmica da 'Maldivas da Tailândia' de cima.",
        difficulty: "Moderada",
        distance: "2.5 km (subida até o mirante)",
        duration: "3-4 horas (incluindo barco)",
        cost: "Gratuita + 50 THB barco (longtail)",
        bestSeason: "Novembro a Abril (parque aberto e mar calmo).",
        howToGet: "De Koh Lipe: longtail boat até Koh Adang (50 THB, 10 min). Trilha começa perto do ranger station.",
        highlights: [
          "Vista aérea de Koh Lipe de cima — foto épica",
          "Parque Nacional Marinho de Tarutao — biodiversidade",
          "Cachoeira na trilha de descida (estação chuvosa)",
          "Praias desertas em Koh Adang",
          "Snorkeling no caminho de barco — corais intocados",
          "Camping disponível em Koh Adang",
        ],
        warnings: [
          "Trilha íngreme e quente — leve bastante água",
          "Mosquitos na selva — repelente obrigatório",
          "Acampar requer permissão do parque nacional",
          "Longtail de volta — combine horário com barqueiro",
        ],
        guide: {
          description: "Rangers do parque na entrada de Koh Adang. Tours de snorkeling de Koh Lipe incluem parada em Koh Adang.",
          price: "800-1.500 THB (~R$ 130-240) tour de snorkeling com parada em Adang",
          where: "Agências na Walking Street de Koh Lipe, Forra Diving",
          bookUrl: "https://www.forradiving.com/",
        },
        tags: ["Mirante", "Parque Nacional", "Ilha", "Snorkeling", "Selvagem"],
        reviews: [
          "Ver Koh Lipe de cima, com aquela água turquesa absurda... é a melhor vista de ilha da Tailândia. Trilha puxada mas 100% vale.",
          "The viewpoint over Koh Lipe from Koh Adang is spectacular. Bring lots of water.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=6.5225,99.2783",
      },
    ],
  },
  {
    id: "koh-lanta",
    emoji: "🌿",
    name: "Koh Lanta",
    description:
      "A ilha mais tranquila e autêntica do Mar de Andaman. Sem a agitação de Phuket ou Phi Phi, Koh Lanta tem um parque nacional com farol, cachoeiras na selva e praias desérticas.",
    trails: [
      {
        id: "mu-ko-lanta",
        title: "Mu Ko Lanta National Park — Trilha do Farol",
        location: "Koh Lanta #1",
        badge: "Farol Paradisíaco",
        image: kohLantaPark,
        description:
          "No extremo sul de Koh Lanta, o parque nacional abriga um farol fotogênico no ponto mais ao sul da ilha. Trilha pela floresta tropical até praias rochosas, mirantes sobre o Andaman e o farol branco.",
        difficulty: "Fácil",
        distance: "3 km (circuito)",
        duration: "2-3 horas",
        cost: "200 THB (~R$ 32)",
        bestSeason: "Novembro a Abril (seca). Parque pode fechar na monção.",
        howToGet: "De Saladan (norte): scooter (1h) pela estrada principal até o extremo sul. Grab limitado — scooter é a melhor opção (~250 THB/dia).",
        highlights: [
          "Farol fotogênico no ponto mais ao sul da ilha",
          "Vista panorâmica do Mar de Andaman",
          "Praias rochosas selvagens e intocadas",
          "Floresta tropical com macacos e aves exóticas",
          "Local sagrado dos Chao Leh (ciganos do mar)",
          "Menos turístico que Phi Phi — experiência autêntica",
        ],
        warnings: [
          "Estrada até o parque é longa (~30 km do centro)",
          "Leve protetor solar — pouca sombra perto do farol",
          "Pedras escorregadias na costa — cuidado",
          "Últimos km de estrada em terra batida",
        ],
        tags: ["Farol", "Parque Nacional", "Fotografia", "Tranquilo", "Costa"],
        reviews: [
          "O farol no ponto mais ao sul da ilha, com aquele mar azul escuro ao redor... Koh Lanta é especial. Silêncio total, natureza pura.",
          "The lighthouse hike is the perfect ending to a Koh Lanta trip. Peaceful, scenic, and completely uncrowded.",
        ],
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.4530,99.0667",
      },
    ],
  },
];

export const secretTrails: Trail[] = [
  {
    id: "buddha-garden",
    title: "Secret Buddha Garden (Tarnim Magic Garden)",
    location: "Koh Samui #4",
    badge: "Secreto",
    image: kohSamuiBuddha,
    description:
      "Um jardim místico escondido no topo da montanha mais alta de Koh Samui. Dezenas de estátuas de Buda cobertas de musgo espalhadas pela selva, cascatas naturais e uma atmosfera mágica.",
    difficulty: "Moderada",
    distance: "1.5 km (circuito no jardim)",
    duration: "2-3 horas (incluindo acesso)",
    cost: "80 THB (~R$ 13)",
    bestSeason: "Dezembro a Abril (seca). Estrada perigosa na chuva.",
    howToGet: "De Chaweng/Lamai: songthaew com motorista (~800 THB ida e volta com espera). 4x4 alugado é a melhor opção.",
    highlights: [
      "Estátuas de Buda cobertas de musgo na selva — cenário mágico",
      "Cascatas naturais entre as esculturas",
      "Localização no ponto mais alto da ilha — vistas incríveis",
      "Atmosfera mística e silenciosa",
      "Poucas pessoas — experiência contemplativa",
      "Estrada de acesso é aventura à parte (4x4 ou scooter potente)",
    ],
    warnings: [
      "Estrada de acesso é MUITO íngreme e de terra — cuidado de scooter",
      "Recomendado 4x4 ou songthaew local — NÃO vá de scooter pequena",
      "Escorregadio na chuva — evite dias chuvosos",
      "Leve repelente — mosquitos abundantes",
    ],
    guide: {
      description: "Motoristas de songthaew servem como guias informais. Alguns tours de jipe incluem o jardim.",
      price: "800-1.200 THB (~R$ 130-190) songthaew ida e volta",
      where: "Perguntar em agências de Chaweng ou Lamai",
    },
    tags: ["Místico", "Jardim", "Selva", "Estátuas", "Off-road"],
    reviews: [
      "Parece que entramos num templo perdido de Indiana Jones. As estátuas com musgo na selva são surreais.",
      "A hidden gem most tourists never see. The Buddha statues overgrown with moss are hauntingly beautiful.",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.4976,100.0186",
  },
  {
    id: "bottle-beach",
    title: "Bottle Beach Trek (Haad Khuat)",
    location: "Koh Phangan #4",
    badge: "Praia Secreta",
    image: kohPhanganBottle,
    description:
      "A praia mais bonita de Koh Phangan — acessível apenas por trilha na selva ou barco. Areia branca, água cristalina turquesa e apenas um punhado de bungalows rústicos.",
    difficulty: "Moderada",
    distance: "2.5 km (ida)",
    duration: "1-1.5 horas (ida)",
    cost: "Gratuita (ou 100-200 THB de longtail boat)",
    bestSeason: "Dezembro a Março (mar calmo e seco).",
    howToGet: "De Chalok Lam: trilha no lado leste da vila. Ou longtail boat (100-200 THB, 15 min).",
    highlights: [
      "Praia paradisíaca acessível apenas a pé ou de barco",
      "Água cristalina turquesa — ótimo para snorkeling",
      "Poucos turistas — sensação de ilha privada",
      "Bungalows rústicos para pernoite (a partir de 500 THB)",
      "Trilha com mirantes sobre o oceano no caminho",
    ],
    warnings: [
      "Trilha íngreme — não vá de chinelo",
      "Leve bastante água",
      "Volta pela trilha é mais difícil (subida) — considere barco",
      "Sem ATM nem farmácia — leve dinheiro",
    ],
    tags: ["Praia", "Selva", "Paraíso", "Snorkeling", "Remoto"],
    reviews: ["A trilha é quente mas quando você chega e vê aquela praia... esquece tudo. Fiquei 2 dias num bungalow. Paraíso."],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=9.7820,100.0460",
  },
  {
    id: "ton-sai",
    title: "Ton Sai & Bang Pae Waterfalls — Selva de Phuket",
    location: "Phuket #4",
    image: phuketTonSai,
    description:
      "Duas cachoeiras conectadas por trilha na selva do interior de Phuket. Ton Sai tem piscina natural para banho. Bang Pae é maior e mais dramática. No meio, o Gibbon Rehabilitation Project permite ver gibbons sendo reintroduzidos na natureza.",
    difficulty: "Fácil",
    distance: "4 km (circuito entre as duas cachoeiras)",
    duration: "2-3 horas",
    cost: "200 THB (~R$ 32)",
    bestSeason: "Junho a Novembro (melhor volume de água). Possível o ano todo.",
    howToGet: "De Patong/Phuket Town: Grab ~300-400 THB (30 min). Interior da ilha, sinalizado na 4027.",
    highlights: [
      "Duas cachoeiras com piscinas naturais",
      "Gibbon Rehabilitation Project — ver gibbons de perto",
      "Trilha sombreada na selva — fácil e agradável",
      "Bang Pae — cachoeira dramática na estação chuvosa",
      "Pouco turístico — experiência autêntica",
      "Combinável com Khao Phra Thaeo Wildlife Sanctuary",
    ],
    warnings: ["Volume de água varia — melhor jun-nov (chuvas)", "Mosquitos — leve repelente", "Estrada de acesso sinuosa — cuidado de scooter"],
    guide: {
      description: "Guias do Gibbon Rehabilitation Project fazem tours educativos pela selva.",
      price: "Doação sugerida de 200 THB para o projeto",
      where: "Gibbon Rehabilitation Project, entre as duas cachoeiras",
      bookUrl: "https://www.gibbonproject.org/",
    },
    tags: ["Cachoeira", "Gibbons", "Selva", "Família", "Natureza"],
    reviews: ["Os gibbons gritando na selva, a cachoeira caindo... Phuket tem um lado selvagem incrível que a maioria ignora."],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=8.0270,98.3890",
  },
  {
    id: "lipe-cliff",
    title: "Koh Lipe Cliff Trail & Secret Beach",
    location: "Koh Lipe #3",
    badge: "Praia Secreta",
    image: kohLipeCliff,
    description:
      "Trilha costeira pelo lado norte rochoso de Koh Lipe até uma praia secreta acessível apenas a pé. Passagem por formações rochosas dramáticas, mirantes naturais sobre o mar de Andaman e piscinas naturais nas pedras.",
    difficulty: "Moderada",
    distance: "2 km (ida e volta)",
    duration: "1-2 horas",
    cost: "Gratuita",
    bestSeason: "Novembro a Abril (mar calmo).",
    howToGet: "Comece pelo lado norte de Sunrise Beach e siga pela costa rochosa para oeste.",
    highlights: [
      "Praia secreta acessível apenas pela trilha",
      "Formações rochosas dramáticas com mirantes naturais",
      "Piscinas naturais nas pedras — ótimo para fotos",
      "Vista do parque marinho de Tarutao",
      "Corais a metros da costa para snorkeling",
      "Quase ninguém conhece — experiência exclusiva",
    ],
    warnings: ["Pedras escorregadias — sapato de água obrigatório", "Sem sinalização — pergunte aos locais a direção", "Leve água — sem vendas na trilha", "Corais vivos — não pise neles"],
    tags: ["Praia Secreta", "Costeira", "Snorkeling", "Aventura", "Grátis"],
    reviews: ["Achamos uma praia minúscula sem ninguém. Água perfeitamente cristalina. Ficamos a tarde toda. O segredo de Koh Lipe."],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=6.4960,99.2980",
  },
  {
    id: "khlong-chak",
    title: "Khlong Chak Waterfall & Emerald Cave Trek",
    location: "Koh Lanta #2",
    image: kohLantaWaterfall,
    description:
      "Trilha pela selva densa até a cachoeira Khlong Chak, com piscina natural para banho. Perto dali, a famosa Emerald Cave (Tham Morakot) — caverna marinha onde você nada no escuro por 80m até chegar numa praia secreta iluminada pelo teto aberto.",
    difficulty: "Moderada",
    distance: "2 km (ida até a cachoeira)",
    duration: "2-3 horas",
    cost: "Gratuita",
    bestSeason: "Agosto a Dezembro (melhor volume de água). Emerald Cave: nov-abr.",
    howToGet: "De Saladan: scooter 40 min até o sul da ilha. A trilha começa no estacionamento sinalizado.",
    highlights: [
      "Cachoeira Khlong Chak com piscina natural",
      "Trilha na selva densa com fauna diversa",
      "Emerald Cave — nadar no escuro até praia secreta (de barco)",
      "Formações rochosas e pequenas cavernas na trilha",
      "Poucos turistas — experiência tranquila",
      "Combinável com Mu Ko Lanta NP no mesmo dia",
    ],
    warnings: [
      "Cachoeira seca nos meses de seca (fev-abr)",
      "Mosquitos abundantes — repelente obrigatório",
      "Emerald Cave requer tour de barco separado",
      "Trilha lameada na chuva — use sapato adequado",
    ],
    guide: {
      description: "Tours de barco para Emerald Cave incluem snorkeling e almoço. Trilha da cachoeira é autoguiada.",
      price: "800-1.200 THB (~R$ 130-190) tour de barco Emerald Cave",
      where: "Agências em Saladan ou resorts da praia",
      bookUrl: "https://www.klook.com/en-TH/activity/22133-koh-lanta-4-islands-tour/",
    },
    tags: ["Cachoeira", "Caverna", "Selva", "Banho", "Aventura"],
    reviews: [
      "A cachoeira é linda com a piscina natural. Mas a Emerald Cave é outra dimensão — nadar no escuro e sair numa praia dentro da caverna. Surreal.",
      "The waterfall trek is easy and pleasant. The Emerald Cave by boat is a must — swimming through darkness to a hidden beach is magical.",
    ],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=7.4750,99.0550",
  },
];

export const itineraries = [
  {
    title: "7 Dias — Norte Aventureiro",
    level: "Intermediário",
    route: "Chiang Mai → Pai → Chiang Rai",
    days: [
      { day: "Dia 1-2", text: "Chiang Mai: Monk's Trail + Doi Suthep. Aclimatação e trilhas leves." },
      { day: "Dia 3", text: "Doi Inthanon: trilha Kew Mae Pan + cachoeiras. Day trip completa." },
      { day: "Dia 4-5", text: "Pai: Pai Canyon ao pôr-do-sol + cachoeira Pambok + fontes termais. Scooter é essencial." },
      { day: "Dia 6-7", text: "Chiang Rai: trekking de 2 dias por aldeias hill tribes com pernoite. A cereja do bolo." },
    ],
  },
  {
    title: "5 Dias — Sul Selvagem",
    level: "Moderado a Difícil",
    route: "Khao Sok → Krabi → Koh Phi Phi",
    days: [
      { day: "Dia 1-2", text: "Khao Sok: trekking + noite em cabana flutuante no Cheow Lan Lake. Reserve com antecedência." },
      { day: "Dia 3", text: "Transfer para Krabi. Tiger Cave Temple ao amanhecer (1.260 degraus). Tarde livre em Ao Nang." },
      { day: "Dia 4-5", text: "Koh Phi Phi: viewpoint ao nascer do sol + snorkeling + praias. Combine trekking e praia." },
    ],
  },
  {
    title: "3 Dias — Escapada de Bangkok",
    level: "Fácil a Moderado",
    route: "Kanchanaburi (Erawan Falls)",
    days: [
      { day: "Dia 1", text: "Saída cedo de Bangkok. Erawan Falls — todos os 7 níveis. Pernoite em Kanchanaburi." },
      { day: "Dia 2", text: "Ponte sobre o Rio Kwai + trilha Hellfire Pass (memorial WWII). História e natureza." },
      { day: "Dia 3", text: "Sai Yok National Park: cachoeiras menores + rafting de bambu. Volta para Bangkok à tarde." },
    ],
  },
];

export const costTable = [
  { item: "Entrada em Parque Nacional", thb: "100-400 THB", brl: "R$ 16-64" },
  { item: "Guia local (dia inteiro)", thb: "500-1.500 THB", brl: "R$ 80-240" },
  { item: "Tour trekking 2 dias c/ tudo", thb: "2.500-5.000 THB", brl: "R$ 400-800" },
  { item: "Khao Sok 2 dias c/ cabana flutuante", thb: "3.000-6.000 THB", brl: "R$ 480-960" },
  { item: "Scooter alugada (dia)", thb: "150-300 THB", brl: "R$ 24-48" },
  { item: "Grab/táxi para parques (ida/volta)", thb: "500-1.500 THB", brl: "R$ 80-240" },
  { item: "Tênis de trilha na Tailândia", thb: "1.500-3.000 THB", brl: "R$ 240-480" },
  { item: "Seguro viagem (30 dias)", thb: "R$ 150-400", brl: "R$ 150-400" },
  { item: "Refeição local perto de trilha", thb: "60-150 THB", brl: "R$ 10-24" },
  { item: "Longtail boat (ida para praias)", thb: "100-300 THB", brl: "R$ 16-48" },
  { item: "Ferry entre ilhas (Koh Samui/Phangan)", thb: "200-600 THB", brl: "R$ 32-96" },
  { item: "Aluguel de bicicleta (dia)", thb: "50-100 THB", brl: "R$ 8-16" },
];

export const apps = [
  { name: "AllTrails", url: "https://www.alltrails.com/", desc: "Mapas offline de trilhas com reviews e rotas GPS" },
  { name: "Maps.me", url: "https://maps.me/", desc: "Mapas offline gratuitos (melhor que Google Maps para trilhas)" },
  { name: "Grab", url: "https://www.grab.com/", desc: "O 'Uber' da Tailândia (essencial para transporte)" },
  { name: "12Go", url: "https://12go.asia/", desc: "Reserva de vans, trens, ferries e ônibus" },
  { name: "Google Translate", url: "https://translate.google.com/", desc: "Câmera traduz placas em tailandês em tempo real" },
  { name: "XE Currency", url: "https://www.xe.com/", desc: "Conversão THB ↔ BRL em tempo real" },
  { name: "Klook", url: "https://www.klook.com/", desc: "Tours, ingressos e atividades com desconto" },
  { name: "Agoda", url: "https://www.agoda.com/", desc: "Melhores preços de hospedagem no Sudeste Asiático" },
];

export const commonMistakes = [
  "**Ir de chinelo** — mesmo para trilhas \"fáceis\", use tênis",
  "**Não levar água suficiente** — mínimo 2L por trilha",
  "**Não usar protetor solar** — queimadura em 30min",
  "**Não contratar seguro viagem** — hospital particular é caro",
  "**Trilhar na hora do almoço** — sol das 11h-14h é brutal",
  "**Subestimar distâncias** — 3km na selva ≠ 3km no asfalto",
  "**Não baixar mapas offline** — sem sinal em parques nacionais",
  "**Perder último ferry** — confira horários antes de ir para ilhas",
  "**Ignorar avisos de monções** — algumas trilhas fecham na chuva",
];

export const respectNature = [
  "**Lixo zero** — traga de volta tudo que levar",
  "**Não alimente animais** — especialmente macacos",
  "**Vista-se com respeito** em templos — ombros e joelhos cobertos",
  "**Peça permissão** antes de fotografar aldeias e comunidades",
  "**Contrate guias locais** — sustenta a economia da comunidade",
  "**Não colete** plantas, pedras ou corais",
];

export const equipment = [
  "Tênis de trilha com aderência (Salomon, Merrell)",
  "Mochila 20-30L com capa de chuva",
  "Garrafa d'água reutilizável (1L+)",
  "Repelente com DEET 30%+",
  "Protetor solar FPS 50",
  "Capa de chuva leve / poncho",
  "Lanterna de cabeça (headlamp)",
  "Meias altas (anti-sanguessuga)",
  "Kit primeiro-socorros básico",
  "Power bank carregado",
  "Sacos plásticos para eletrônicos",
  "Toalha de microfibra",
  "Snacks energéticos (barras, frutas secas)",
  "Cópia do passaporte + seguro viagem",
];

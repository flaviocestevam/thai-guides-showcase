import type { SalesContent } from "@/components/sales/SalesPage";
import phuketImg from "@/assets/generated/phuket-hero.png.asset.json";
import samuiImg from "@/assets/generated/koh-samui-hero.png.asset.json";
import phiphiImg from "@/assets/hero-firepoi-phiphi.png.asset.json";
import phanganImg from "@/assets/generated/koh-phangan-hero.png.asset.json";
import taoImg from "@/assets/generated/koh-tao-hero.png.asset.json";
import changImg from "@/assets/ilhas/chang.webp";
import lantaImg from "@/assets/generated/koh-lanta-hero.png.asset.json";
import lipeImg from "@/assets/generated/koh-lipe-hero-v2.png.asset.json";
import koodImg from "@/assets/generated/koh-kood-hero.png.asset.json";
import yaoImg from "@/assets/generated/koh-yao-hero.png.asset.json";
import makImg from "@/assets/generated/koh-mak-hero.png.asset.json";
import larnImg from "@/assets/generated/koh-larn-hero.png.asset.json";
import similanImg from "@/assets/generated/ilhas-similan-hero.png.asset.json";
import rachaImg from "@/assets/generated/koh-racha-hero.png.asset.json";

const heroImagesBySlug: Record<string, string> = {
  "phuket-tailandia": phuketImg.url,
  "koh-samui-tailandia": samuiImg.url,
  "koh-phi-phi-tailandia": phiphiImg.url,
  "koh-phangan-tailandia": phanganImg.url,
  "koh-tao-tailandia": taoImg.url,
  "koh-chang-tailandia": changImg,
  "koh-lanta-tailandia": lantaImg.url,
  "koh-lipe-tailandia": lipeImg.url,
  "koh-kood-tailandia": koodImg.url,
  "koh-yao-tailandia": yaoImg.url,
  "koh-mak-tailandia": makImg.url,
  "koh-larn-tailandia": larnImg.url,
  "ilhas-similan-tailandia": similanImg.url,
  "koh-racha-tailandia": rachaImg.url,
};



/**
 * Catálogo de páginas de vendas das Ilhas da Tailândia.
 *
 * IMPORTANTE: cada `ctaLink` está como placeholder `https://pay.cakto.com.br/REPLACE-<slug>`.
 * Substituir pelo link real de checkout Cakto de cada produto antes de publicar.
 */

type IlhaMeta = {
  slug: string;
  nome: string;
  emoji: string;
  regiao: string;
  perfil: string;
  tier: 1 | 2 | 3 | 4;
  cardSubtitle: string;
  cardDescription: string;
  cardBadge: string;
};

export const ilhasMeta: IlhaMeta[] = [
  { slug: "phuket-tailandia", nome: "Phuket", emoji: "🏝️", regiao: "Andaman, sul", perfil: "Maior porta de entrada — família, casal, agito.", tier: 1, cardSubtitle: "A porta de entrada das ilhas", cardDescription: "Bairros honestos vs. armadilhas, melhores praias por perfil, transfers sem golpe e roteiros de 3 a 10 dias.", cardBadge: "🔥 MAIS BUSCADA" },
  { slug: "koh-samui-tailandia", nome: "Koh Samui", emoji: "🌴", regiao: "Golfo da Tailândia", perfil: "Lua de mel, famílias, resorts.", tier: 1, cardSubtitle: "Conforto e resorts no Golfo", cardDescription: "Os bairros certos pra cada perfil, resorts com custo-benefício real e como combinar Samui + Phangan + Tao.", cardBadge: "💍 ROMÂNTICA" },
  { slug: "koh-phi-phi-tailandia", nome: "Koh Phi Phi", emoji: "🏖️", regiao: "Andaman, perto de Phuket/Krabi", perfil: "Jovens, day-trip vs pernoite, praias icônicas.", tier: 1, cardSubtitle: "Maya Bay e as praias icônicas", cardDescription: "Day-trip ou dormir? Tour ético até Maya Bay sem multidão, viewpoint sem perrengue e os bares que valem.", cardBadge: "📸 ICÔNICA" },
  { slug: "koh-phangan-tailandia", nome: "Koh Phangan", emoji: "🌕", regiao: "Golfo, perto de Samui", perfil: "Mochileiros, Full Moon Party, vida noturna.", tier: 1, cardSubtitle: "Full Moon e além", cardDescription: "Como sobreviver à Full Moon sem ser roubado, datas certas, lado leste calmo e wellness de Sri Thanu.", cardBadge: "🌕 FULL MOON" },
  { slug: "koh-tao-tailandia", nome: "Koh Tao", emoji: "🤿", regiao: "Golfo", perfil: "Mergulhadores e certificação PADI.", tier: 2, cardSubtitle: "A capital mundial do mergulho barato", cardDescription: "Escolas honestas, roteiro do Open Water ao Divemaster e onde dormir sem gastar fortuna.", cardBadge: "🌊 MERGULHO" },
  { slug: "koh-chang-tailandia", nome: "Koh Chang", emoji: "🐘", regiao: "Leste, perto de Trat", perfil: "Famílias e budget, alternativa crua a Phuket.", tier: 2, cardSubtitle: "A Phuket que ainda é selvagem", cardDescription: "Como chegar pelo leste, praias por perfil, ferry sem dor de cabeça e roteiros 5 a 10 dias.", cardBadge: "🌲 SELVAGEM" },
  { slug: "koh-lanta-tailandia", nome: "Koh Lanta", emoji: "🌅", regiao: "Andaman, perto de Krabi", perfil: "Slow travel, mochileiro maduro, família.", tier: 2, cardSubtitle: "O ritmo lento do Andaman", cardDescription: "A ilha favorita de quem fugiu de Phi Phi. Praias por perfil, scooter loop e os melhores sunset bars.", cardBadge: "🧘 SLOW TRAVEL" },
  { slug: "koh-lipe-tailandia", nome: "Koh Lipe", emoji: "💎", regiao: "Extremo sul, Andaman", perfil: "Premium, lua de mel, água cristalina.", tier: 3, cardSubtitle: "As Maldivas da Tailândia", cardDescription: "Como chegar sem desistir no meio do caminho, melhores resorts e os snorkels que valem o ingresso.", cardBadge: "💎 PREMIUM" },
  { slug: "koh-kood-tailandia", nome: "Koh Kood", emoji: "🌺", regiao: "Leste", perfil: "Luxo discreto, casais, isolamento.", tier: 3, cardSubtitle: "Luxo discreto sem multidão", cardDescription: "A ilha intocada do leste. Resorts boutique, praias vazias e por que vale o trajeto longo.", cardBadge: "✨ EXCLUSIVA" },
  { slug: "koh-yao-tailandia", nome: "Koh Yao Noi & Yai", emoji: "🛶", regiao: "Entre Phuket e Krabi", perfil: "Slow travel, eco, casais/famílias sossego.", tier: 3, cardSubtitle: "Slow travel entre Phuket e Krabi", cardDescription: "A 30 minutos dos hubs e parece outro país. Bangalôs eco, kayak no manguezal e zero vida noturna.", cardBadge: "🌿 ECO" },
  { slug: "koh-mak-tailandia", nome: "Koh Mak", emoji: "🥥", regiao: "Leste", perfil: "Eco-turismo, famílias, ilha pequena.", tier: 3, cardSubtitle: "A ilha-família do leste", cardDescription: "Pequena, plana, segura pra bike com criança. Onde dormir, comer e os day-trips melhores.", cardBadge: "🚲 FAMÍLIA" },
  { slug: "koh-larn-tailandia", nome: "Koh Larn", emoji: "⛱️", regiao: "Perto de Pattaya", perfil: "Day-trip em massa de Pattaya.", tier: 4, cardSubtitle: "Day-trip honesto saindo de Pattaya", cardDescription: "Qual ferry pegar (não o do golpe), praias que escapam dos grupos de excursão e como voltar sem fila.", cardBadge: "⛴️ DAY-TRIP" },
  { slug: "ilhas-similan-tailandia", nome: "Ilhas Similan", emoji: "🐠", regiao: "Andaman, norte de Phuket", perfil: "Mergulho/snorkel premium, liveaboard.", tier: 4, cardSubtitle: "Mergulho e snorkel premium", cardDescription: "Janela de out a mai, melhores liveaboards, day-trip que vale e os erros que destroem o passeio.", cardBadge: "🐋 LIVEABOARD" },
  { slug: "koh-racha-tailandia", nome: "Koh Racha (Raya)", emoji: "🐚", regiao: "Day-trip de Phuket", perfil: "Praia/snorkel, beach club, day-trip.", tier: 4, cardSubtitle: "Day-trip premium saindo de Phuket", cardDescription: "Yai ou Noi? Que tour pegar, qual beach club vale a diária e como evitar o circuito de excursão grande.", cardBadge: "🌊 SUNSET" },
];

const baseBgGradient = (g: string) => `bg-gradient-to-br ${g}`;

const make = (
  meta: IlhaMeta,
  body: {
    bgGradient: string;
    heroTitle: string;
    heroHighlight: string;
    heroSubtitle: string;
    heroWarning: string;
    pains: SalesContent["pains"];
    features: SalesContent["features"];
    comparison: SalesContent["comparison"];
    authority: SalesContent["authority"];
    modules: SalesContent["modules"];
    bonuses: SalesContent["bonuses"];
    testimonials: SalesContent["testimonials"];
    faqs: SalesContent["faqs"];
    finalCTA: SalesContent["finalCTA"];
    seoTitle: string;
    seoDescription: string;
  }
): SalesContent => ({
  slug: meta.slug,
  seoTitle: body.seoTitle,
  seoDescription: body.seoDescription,
  heroBadge: `${meta.emoji} ${meta.nome} — guia completo`,
  heroTitle: body.heroTitle,
  heroHighlight: body.heroHighlight,
  heroSubtitle: body.heroSubtitle,
  heroWarning: body.heroWarning,
  heroBgGradient: baseBgGradient(body.bgGradient),
  heroEmoji: meta.emoji,
  heroImage: heroImagesBySlug[meta.slug],

  ctaLink: `https://pay.cakto.com.br/REPLACE-${meta.slug}`,
  ctaText: `QUERO O GUIA DE ${meta.nome.toUpperCase()}`,
  pains: body.pains,
  features: body.features,
  modules: body.modules,
  bonuses: body.bonuses,
  testimonials: body.testimonials,
  comparison: body.comparison,
  authority: body.authority,
  pricing: {
    badge: "Oferta de lançamento",
    oldPrice: "R$ 197",
    price: "67",
    priceCents: "00",
    installments: "12x de R$ 6,71",
    includes: [
      `Guia completo de ${meta.nome}`,
      "Bairros e praias por perfil de viajante",
      "Hospedagens testadas com faixa de preço real",
      "Transfers e ferries sem golpe",
      "Todos os bônus exclusivos",
      "Atualizações vitalícias",
    ],
  },
  guarantee: {
    days: 7,
    title: "7 dias para testar com risco zero",
    text: `Leia o guia inteiro. Se em 7 dias você sentir que não vale, devolvemos cada centavo. Um único erro evitado em ${meta.nome} — ferry errado, hotel no bairro errado, tour superfaturado — paga o guia muitas vezes.`,
  },
  faqs: body.faqs,
  finalCTA: body.finalCTA,
});

// ============================================================================
// TIER 1
// ============================================================================

const phuket = make(ilhasMeta[0], {
  bgGradient: "from-emerald-950 via-background to-teal-950",
  seoTitle: "Guia de Phuket — Sem Patong, sem golpe, sem turista otário",
  seoDescription: "O guia honesto de Phuket pra brasileiro: 9 bairros decifrados, transfer pelo preço real, Phi Phi sem multidão e roteiros de 3 a 10 dias testados in loco.",
  heroTitle: "Phuket sem cair em",
  heroHighlight: "armadilha de turista",
  heroSubtitle: "São 50 km de praia, 9 bairros que parecem cidades diferentes e uma indústria inteira treinada pra te empurrar pro bairro errado, pro táxi caro e pro tour lotado. Este guia é o atalho de quem morou 3 meses e perdeu dinheiro em quase todo golpe possível — pra você não perder.",
  heroWarning: "9 em cada 10 brasileiros reservam Patong sem saber o que é Patong. Voltam achando que \"Phuket é caótica\". Phuket não é o problema. O bairro escolhido é.",
  pains: [
    { title: "Reservou Patong sem saber o que é Patong", desc: "Bar ligado até 3h, prostituição na porta do hotel, praia média e cardápio inflado. Existem 8 bairros muito diferentes — e ninguém te contou." },
    { title: "Pagou 1.200 baht no táxi do aeroporto", desc: "O preço real do Bolt pra Kata é ~600. Sem saber, todo brasileiro paga o dobro e ainda agradece achando que foi \"barato\"." },
    { title: "Foi a Maya Bay no day-trip das 8h", desc: "Chegou com mais 800 pessoas, fila pra foto, água turva de barco. Tem operadora certa, horário certo e janela do dia em que está vazia. Quase ninguém te conta." },
    { title: "Comeu no calçadão de Patong por R$ 90", desc: "Comida congelada, MSG no talo, cardápio em foto. O tailandês come pad thai a 100m dali por R$ 12 — e é dez vezes melhor." },
    { title: "Alugou scooter sem PID e perdeu a caução", desc: "Polícia local sabe identificar turista sem habilitação internacional. Multa de 1.000 baht + locadora reteve 15.000 \"por um risco no farol\" que já estava lá." },
    { title: "Saiu da viagem achando que viu Phuket", desc: "Viu 1 dos 9 bairros, 2 das 30 praias e nenhum dos 4 day-trips que valem. Levou pra casa a versão pior — e mais cara — da ilha." },
  ],
  features: [
    { title: "9 bairros decodificados", desc: "Patong, Kata, Karon, Bang Tao, Surin, Kamala, Nai Harn, Rawai e Phuket Town — perfil real, faixa de preço e quem deve (e quem NÃO deve) ficar em cada um." },
    { title: "Hospedagem por faixa real", desc: "Hostel R$ 50, boutique R$ 300, resort R$ 1.200. Lista enxuta de hotéis testados ou rejeitados, com o motivo de cada veredito." },
    { title: "Roteiros de 3, 5, 7 e 10 dias", desc: "Phi Phi, James Bond, Racha, Coral, Similan e Big Buddha encaixados sem virar tour industrial. Dia a dia, horário a horário." },
  ],
  comparison: {
    theirs: [
      "Ficar 7 dias preso em Patong",
      "Pagar 1.200 baht no táxi do aeroporto",
      "Day-trip pra Phi Phi às 8h com 800 pessoas",
      "Comer congelado no calçadão por preço de SP",
      "Alugar scooter sem PID e perder 15.000 baht de caução",
      "Voltar achando que Phuket é \"caótica\"",
    ],
    ours: [
      "Bairro escolhido pelo seu perfil real",
      "Bolt/Grab + tabela de preço justo no celular",
      "Maya Bay com operadora certa e horário em que está vazia",
      "Mapa dos restaurantes onde o tailandês come",
      "Locadoras testadas + protocolo anti-golpe passo a passo",
      "Voltar dizendo que Phuket foi o melhor da viagem",
    ],
  },
  authority: {
    title: "Phuket vivida, não pesquisada no Google",
    paragraphs: [
      "Morei 3 meses entre Kata e Rawai, peguei ferry pra Phi Phi 11 vezes, testei mais de 40 restaurantes e perdi dinheiro em quase todo golpe que existe na ilha. Esse guia é a versão limpa desses 3 meses.",
      "Não é compilado de blog. Não é ChatGPT olhando o Booking. É o que funciona, o que é cilada e o que ninguém te conta no Instagram de viagem — porque influencer ganha comissão pra te empurrar pro tour errado.",
    ],
    bullets: ["3 meses morando na ilha", "9 bairros mapeados a pé", "40+ restaurantes testados", "11 ferries pra Phi Phi", "12 golpes documentados"],
  },
  modules: [
    { title: "Bairros: onde ficar e onde NÃO ficar", desc: "A decodificação completa de cada região, com quem deve evitar cada uma.", bullets: ["Patong (e quando faz sentido)", "Kata vs Karon na prática", "Bang Tao luxo discreto", "Nai Harn pra família", "Phuket Town autêntica e barata"] },
    { title: "Praias por perfil", desc: "Família, casal, agito, snorkel, deserta — qual praia atende cada um.", bullets: ["Top 12 praias ranqueadas", "Mar calmo vs. ondas (mês a mês)", "Os 4 sunset spots que valem", "Praias secretas sem turista"] },
    { title: "Day-trips das ilhas", desc: "Phi Phi, James Bond, Racha, Coral e Similan sem cair na excursão industrial.", bullets: ["A operadora certa pra cada tour", "Horário esperto (vazio)", "Speedboat vs. barco grande", "Como evitar enjoo de mar"] },
    { title: "Transfer, ferry e moto", desc: "Toda a logística sem cair em golpe.", bullets: ["Tabela de preço real de transfer", "Apps que funcionam em Phuket", "Onde comprar ferry sem markup", "Aluguel de scooter à prova de golpe"] },
    { title: "Comida: local x turística", desc: "Mapa dos lugares onde tailandês come — e onde turista paga 4x.", bullets: ["Top 30 restaurantes testados", "Night markets que valem", "Street food segura pro brasileiro", "Cafés especiais escondidos"] },
  ],
  bonuses: [
    { title: "Mapa Google interativo", desc: "Todos os pontos do guia salvos em mapa pronto pra usar offline na ilha.", value: "R$ 87" },
    { title: "Tabela de preços de transfer", desc: "Quanto deve custar do aeroporto a cada bairro — print no celular antes de pousar.", value: "R$ 47" },
    { title: "Checklist anti-golpe", desc: "Os 12 golpes mais comuns em Phuket e a resposta exata pra cada um.", value: "R$ 67" },
    { title: "Lista negra de tours", desc: "Operadoras reclamadas que precisam ser evitadas — e as 3 que valem cada baht.", value: "R$ 57" },
  ],
  testimonials: [
    { name: "Camila Rezende", city: "São Paulo, SP", text: "Tinha reservado 6 noites em Patong pra lua de mel. Li o guia 3 dias antes, cancelei e fui pra Kata + Bang Tao. Salvou a viagem — literalmente. Meu marido até hoje fala disso." },
    { name: "Rodrigo Tavares", city: "Belo Horizonte, MG", text: "O taxista do aeroporto pediu 1.200 baht pra Kata. Mostrei o print da tabela do guia e chamei Bolt na frente dele por 580. Paguei o guia inteiro nessa única corrida." },
    { name: "Letícia Macedo", city: "Curitiba, PR", text: "Fizemos Phi Phi pela operadora indicada, saindo 6h da manhã. Maya Bay TINHA 14 pessoas quando chegamos. No caminho de volta cruzamos com os barcos de excursão padrão — 200 pessoas em cada um. Sem palavras." },
    { name: "Ana e Felipe Brandão", city: "Rio de Janeiro, RJ", text: "Resort em Bang Tao por R$ 380 a diária com café da manhã. O mesmo padrão em Patong saía R$ 720. Em 7 dias economizamos R$ 2.380 — e ainda dormimos em paz, sem som de balada." },
    { name: "Diego Santiago", city: "Florianópolis, SC", text: "O mapa do Google é OURO. Comi em barraca de rua que tailandês comia, refeição completa por 80 baht (R$ 13). Em uma semana gastei a metade do que meu colega gastou no Patong Beach Road." },
    { name: "Marina Cunha", city: "Porto Alegre, RS", text: "Aluguei scooter pelo protocolo do guia: fotografei cada arranhão, exigi recibo, levei a PID. Na devolução o cara tentou cobrar 8.000 baht por um risco antigo. Mostrei as fotos com data, ele engoliu seco. Esse capítulo paga o guia 20 vezes." },
  ],
  faqs: [
    { q: "Quantos dias preciso ficar em Phuket?", a: "Mínimo 4 dias só na ilha. Ideal 6-7 incluindo um day-trip pra Phi Phi ou James Bond. O guia traz 4 roteiros prontos (3, 5, 7 e 10 dias) com dia a dia." },
    { q: "Patong é tão ruim assim?", a: "Não. Patong é barulhento, lotado e turístico — é perfeito pra quem quer festa, prostituição visível e bar até 3h. Só vira problema quando você reserva achando que vai descansar." },
    { q: "Vale a pena alugar scooter?", a: "Sim, se você já dirige moto no Brasil. Phuket tem mão inglesa e trânsito hostil. O guia traz protocolo anti-golpe + as 3 locadoras testadas + por que PID é inegociável." },
    { q: "Posso fazer Phi Phi de day-trip ou preciso dormir lá?", a: "Day-trip resolve pra 90% dos viajantes. Dormir em Phi Phi só vale se você quer festa noturna. O guia compara as duas opções com prós e contras reais." },
    { q: "Qual a melhor época pra ir?", a: "Nov-mar é alta temporada (sol garantido, mais caro, lotado). Mai-out tem chuva mas é a metade do preço. O guia traz tabela mês a mês com chance de chuva e nível do mar." },
    { q: "Phuket é segura pra brasileiro?", a: "Sim, crime violento é raro. Os 3 perigos reais são scooter, golpes em comércio e mar de monção. O guia cobre os três com protocolo prático." },
    { q: "Como recebo o guia?", a: "Na hora. Assim que o pagamento Cakto aprovar (PIX ou cartão), o link chega no seu e-mail. PDF + mapa interativo (PDF + mapa interativo)." },
    { q: "Posso pagar no PIX?", a: "Pode. PIX ou cartão até 12x. O acesso libera na mesma hora." },
  ],
  finalCTA: {
    title: "Phuket pode ser o melhor — ou o pior — da sua viagem",
    subtitle: "A diferença está em saber qual bairro escolher, qual tour pegar e qual cilada evitar. Tudo isso, num único guia, por menos do que custa uma corrida de táxi inflada do aeroporto.",
  },
});


const samui = make(ilhasMeta[1], {
  bgGradient: "from-amber-950 via-background to-orange-950",
  seoTitle: "Guia de Koh Samui — Resort certo, bairro certo, sem armadilha",
  seoDescription: "O guia honesto de Koh Samui pra brasileiro: 4 bairros decodificados, resorts testados, ferry sem dor de cabeça e como combinar Samui + Phangan + Tao em 7 ou 10 dias.",
  heroTitle: "Koh Samui sem",
  heroHighlight: "diária inflada",
  heroSubtitle: "A ilha de resort da Tailândia é dividida em bairros que parecem outros países: Chaweng é o Patong de Samui, Bophut é boutique, Choeng Mon é família, Lamai é equilibrado. Reservar o errado é o erro #1 — e custa caro. Este guia te coloca no lugar certo desde o pouso.",
  heroWarning: "Lua de mel reservada em Chaweng vira pesadelo: bar até 3h, prostituição e som de balada no quarto. O resort certo está a 4 km e custa o mesmo. Quase ninguém te conta.",
  pains: [
    { title: "Reservou resort em Chaweng pra lua de mel", desc: "Chegou e tinha balada ligada até 3h e walking street com prostituição a 200 metros do hotel. Resort de mesmo padrão em Choeng Mon ou Bophut custa igual." },
    { title: "Pegou o ferry errado e perdeu meio dia de viagem", desc: "São 3 operadoras (Lomprayah, Seatran, Raja) com portos e horários diferentes. Quem chuta perde a conexão pra Phangan e fica plantado no porto." },
    { title: "Subiu no Big Buddha às 14h", desc: "Calor de 38°, foto contra o sol, zero clima espiritual. Tem horário certo (e o templo lotado de chinês é a 15min de scooter de outro mais bonito e vazio)." },
    { title: "Ignorou Phangan e Tao no roteiro", desc: "Samui é base perfeita pro trio de ilhas do Golfo. Quem fica só em Samui paga caro pra ver 1/3 do que poderia ver pelo mesmo dinheiro." },
    { title: "Caiu no \"tour da ilha\" em van lotada", desc: "8 horas grudado em 10 estranhos, paradas de 12 minutos e cachoeira seca em fevereiro. Com scooter e o roteiro do guia você faz tudo melhor em meio dia." },
    { title: "Pagou R$ 900 a diária em resort superestimado no Booking", desc: "Os 5 resorts mais bem avaliados do Booking em Samui não são os 5 melhores. São os 5 que mais investem em review pago. O guia separa um do outro." },
  ],
  features: [
    { title: "4 bairros decodificados", desc: "Chaweng, Lamai, Bophut/Fisherman's e Choeng Mon — perfil real, faixa de preço e quem deve evitar cada um." },
    { title: "Resorts testados (não copiados do Booking)", desc: "12 hotéis testados pessoalmente entre R$ 280 e R$ 1.400 a diária, com o motivo de cada veredito." },
    { title: "Combo Samui + Phangan + Tao", desc: "Roteiros prontos de 7 e 10 dias com ferry, hospedagem em cada ilha e timing certo da Full Moon (ou anti-Full Moon)." },
    { title: "Janela de praia × mês", desc: "Chaweng, Lamai, Bophut, Maenam, Lipa Noi, Bang Por, Choeng Mon, Silver Beach — quando cada uma rende e quando vira aposta." },
    { title: "Loop de scooter com km/min/risco", desc: "8 trechos da ilha incluindo aeroporto, Big Buddha, Na Mueang, Fisherman's e a volta completa de 51 km." },
    { title: "Mês ideal por perfil", desc: "Lua de mel, família, mochileiro, festeiro Full Moon, retreat wellness, surf iniciante — cada um tem janela própria." },
    { title: "Comparativo Samui × Phangan × Tao", desc: "Tabela de 8 dimensões pra decidir qual ilha (ou combo) combina com sua viagem." },
    { title: "Ang Thong + sunset + iate", desc: "5 modalidades de barco com preço, operadora e o que está incluso — do speedboat compartilhado ao iate privado." },
    { title: "Pesca tradicional e lulada noturna", desc: "Sair com pescador de Bophut, big game charter, pesca rústica em Lipa Noi — preço, contato e o que esperar." },
    { title: "Capital do wellness — Kamalaya ao quiosque", desc: "6 spas e retreats: do programa de 7 dias premiado ao quiosque honesto de 250 baht na rua." },
    { title: "Lipa Noi, Bang Por e Hua Thanon", desc: "O Samui sem Chaweng — único sunset real da ilha, praia 4 km vazia e vila muçulmana de pescadores." },
    { title: "Samui com kids", desc: "Onde dormir longe do bar, kid clubs sérios, Aquarium × Tiger Zoo, scooter com kid (NÃO) e templo com lagoa de carpa." },
    { title: "Conservação e santuário ético", desc: "Trash Hero clean-up, Samui Elephant Sanctuary (verdade), eco resorts certificados e reef-safe sunscreen." },
    { title: "Timeline de reserva", desc: "Quando travar voo direto, resort 5★, Ang Thong e retreat estruturado pra cada época do ano." },
  ],
  comparison: {
    theirs: [
      "Resort em Chaweng achando que era tranquilo",
      "Pagar diária turística em Fisherman's Village",
      "Ferry errado entre Samui e Phangan",
      "Tour da ilha em van com 10 estranhos",
      "Big Buddha às 14h com 200 chineses na fila",
      "Ficar só em Samui e perder Phangan/Tao",
    ],
    ours: [
      "Bairro certo pra cada perfil (casal, família, agito)",
      "12 resorts boutique testados por faixa de preço",
      "Mapa dos 3 ferries com horário e porto certo",
      "Scooter próprio + roteiro pronto de meio dia",
      "Big Buddha às 7h + templo escondido a 15 min",
      "Roteiro 7-10 dias com Samui + Phangan + Tao encaixados",
    ],
  },
  authority: {
    title: "10 dias testando o circuito completo Samui + Phangan + Tao",
    paragraphs: [
      "Dormi em 12 hotéis diferentes em Samui, peguei os 3 ferries (Lomprayah, Seatran e Raja) em horários distintos pra confirmar qual realmente cumpre o que promete, e fiz a travessia Samui-Phangan-Tao 4 vezes em duas viagens.",
      "Esse guia não é a versão maquiada do Booking. É o que cumpre, o que decepciona e o que ninguém te conta porque influencer recebe diária grátis pra postar tudo igual.",
    ],
    bullets: ["12 resorts testados", "3 ferries comparados in loco", "Trio completo 4 vezes", "Lua de mel + família mapeadas", "Full Moon e anti-Full Moon documentadas"],
  },
  modules: [
    { title: "Bairros: pra quem é cada um", desc: "Decodificação completa de Chaweng, Lamai, Bophut, Choeng Mon e Maenam.", bullets: ["Chaweng (e quando faz sentido)", "Bophut/Fisherman's boutique", "Choeng Mon pra família", "Lamai equilibrado", "Maenam pra quem foge de tudo"] },
    { title: "Resorts testados por faixa", desc: "12 hotéis dormidos entre R$ 280 e R$ 1.400 a diária — com prós e contras reais.", bullets: ["Budget até R$ 350", "Boutique R$ 400-700", "Premium R$ 800-1.200", "Lua de mel R$ 1.200+", "Os 3 do Booking que NÃO valem"] },
    { title: "Praias por perfil + janela mês a mês", desc: "Calmas pra família, vazias pra casal, ativas pra agito — e quando cada praia rende.", bullets: ["Top 8 praias ranqueadas", "Janela por praia × mês", "Sunset Lipa Noi (oeste)", "Silver Beach secreto", "Praia que NÃO compensa"] },
    { title: "Ferries Samui ⇄ Phangan ⇄ Tao", desc: "Toda a logística do trio do Golfo, sem perder meio dia.", bullets: ["Lomprayah vs Seatran vs Raja", "Portos certos em cada ilha", "Horários de baixa e alta", "Onde comprar sem markup", "Pacote multi-ilha que vale"] },
    { title: "Roteiros prontos 5, 7 e 10 dias", desc: "Com e sem Full Moon, com e sem Tao.", bullets: ["5 dias só Samui", "7 dias Samui + Phangan", "10 dias trio completo", "Roteiro lua de mel", "Roteiro família com criança"] },
    { title: "Loop scooter + mês × perfil", desc: "Mapa de scooter com km/min/risco e quando cada perfil deve vir.", bullets: ["8 trechos da ilha", "Volta completa 51 km", "Mês perfil lua de mel", "Mês perfil família", "Mês perfil Full Moon"] },
    { title: "Comparativo Samui × Phangan × Tao", desc: "Decisão clara entre as 3 ilhas do Golfo.", bullets: ["8 dimensões comparadas", "Acesso voo direto USM", "Wellness capital", "Mergulho × festa × luxo", "Combo das 3"] },
    { title: "Ang Thong, pesca e wellness", desc: "Day-trip de barco + lulada noturna + capital do spa.", bullets: ["Ang Thong speedboat", "Sunset Lipa Noi", "Squid fishing 18h", "Kamalaya + Absolute", "Tamarind forest spa"] },
    { title: "Norte isolado + família + conservação", desc: "Lipa Noi/Bang Por/Hua Thanon + Samui com kids + santuário ético.", bullets: ["Único sunset real (Lipa Noi)", "Praia 4 km vazia (Bang Por)", "Vila muçulmana (Hua Thanon)", "Samui Elephant Sanctuary", "Reef-safe sunscreen"] },
    { title: "Timeline de reserva", desc: "Quando travar voo, resort, Ang Thong e retreat.", bullets: ["Réveillon: 5-6 meses", "Kamalaya: 3-4 meses", "Alta seca: 6-8 semanas", "Baixa: 1-2 semanas", "Monção: véspera"] },
  ],
  bonuses: [
    { title: "Mapa Google interativo do trio", desc: "Pontos do guia nas 3 ilhas, salvos pra usar offline.", value: "R$ 87" },
    { title: "Tabela dos 3 ferries", desc: "Lomprayah, Seatran e Raja por horário, porto e preço real — print no celular.", value: "R$ 57" },
    { title: "Calendário Full Moon 24 meses", desc: "Datas das próximas 24 Full Moon, Half Moon e Black Moon Parties.", value: "R$ 47" },
    { title: "Checklist anti-armadilha de resort", desc: "9 perguntas pra fazer ANTES de reservar — evita o resort barulhento disfarçado.", value: "R$ 67" },
    { title: "Janela de praia × mês", desc: "8 praias de Samui com melhor janela, mar e nota técnica.", value: "R$ 57" },
    { title: "Loop scooter da ilha", desc: "8 trechos + volta completa 51 km com km/min/risco real.", value: "R$ 47" },
    { title: "Comparativo Samui × Phangan × Tao", desc: "Tabela de 8 dimensões pra decidir entre as 3 ilhas do Golfo.", value: "R$ 57" },
    { title: "Lista de spa e retreat", desc: "6 opções do Kamalaya (programa 7 dias) ao quiosque honesto de rua.", value: "R$ 47" },
    { title: "Timeline de reserva ano todo", desc: "Quando travar voo direto, resort 5★, Ang Thong e retreat pra cada época.", value: "R$ 37" },
  ],
  testimonials: [
    { name: "Bianca e Thiago Almeida", city: "São Paulo, SP", text: "Lua de mel. Ia reservar resort em Chaweng. Mudei pra Bophut depois do guia, mesma faixa de preço (R$ 720 a diária), zero barulho, pôr do sol da varanda. Meu marido chorou no último dia." },
    { name: "Patrícia Vasconcelos", city: "Recife, PE", text: "Família com 2 crianças (5 e 8 anos). Choeng Mon foi salvador: mar raso, sem vento forte, restaurante pé na areia. O guia detalhou tudo isso de um jeito que o Booking nunca mostrou." },
    { name: "Eduardo Marçal", city: "Brasília, DF", text: "Peguei Lomprayah de Samui pra Tao seguindo a tabela do guia: 1h15 de catamarã, saiu no horário. Meu amigo pegou Raja achando que era \"todo mundo igual\": 3h, sem ar e perdeu a aula de mergulho à tarde." },
    { name: "Júlia Hoffmann", city: "Joinville, SC", text: "Ia ficar 7 dias só em Samui. Segui o roteiro do trio e fiz 4-2-3 (Samui-Phangan-Tao). Foram literalmente 3 viagens em uma. Sem o guia eu teria perdido isso." },
    { name: "Carlos e Vânia Pinheiro", city: "Salvador, BA", text: "Aposentados, 60+. Tínhamos medo de scooter e ferry. O guia tem capítulo passo a passo de ferry com fotos do porto. Foi como ter um filho do nosso lado explicando." },
    { name: "Renata Soares", city: "Goiânia, GO", text: "Reservei pelo guia o resort em Maenam por R$ 420 a diária com café. Mesma estrutura em Chaweng saía R$ 780. Em 6 noites economizei R$ 2.160. O guia se pagou 30 vezes." },
  ],
  faqs: [
    { q: "Samui é melhor que Phuket?", a: "Depende. Samui é mais calma, mais resort, mais lua de mel. Phuket é mais agitada, mais opção de bairro, mais day-trip. O guia compara os dois com critério." },
    { q: "Quantos dias ficar em Samui?", a: "Mínimo 4. Ideal 7 com bate-volta em Phangan. Top é 10 com Tao no meio. Roteiros prontos no guia." },
    { q: "Vou em lua de mel — qual bairro?", a: "Bophut/Fisherman's ou Choeng Mon. Nunca Chaweng (mesmo que o Booking ofereça 'beach access'). O guia explica por quê." },
    { q: "Família com criança pequena?", a: "Choeng Mon — mar raso, sem vento, restaurante pé na areia. Maenam também serve. Capítulo dedicado no guia." },
    { q: "Vale a pena ir em Full Moon?", a: "Sim, se você quer festa. Não, se você quer sossego. O guia tem calendário 24 meses e o anti-Full Moon (datas em que Phangan está vazia)." },
    { q: "Como recebo o guia?", a: "Na hora. Pagamento Cakto (PIX ou cartão) → link no e-mail em segundos. PDF + mapa interativo." },
    { q: "Posso pagar no PIX?", a: "Pode. PIX à vista ou cartão até 12x. Acesso libera imediato." },
    { q: "E se eu não gostar?", a: "Garantia 7 dias, sem perguntas. Devolvemos cada centavo." },
  ],
  finalCTA: {
    title: "Sua lua de mel ou férias em Samui dependem de UMA decisão: o bairro",
    subtitle: "Por menos do que custa uma diária inflada em Chaweng, você acerta o bairro, o resort, o ferry e ganha 7 a 10 dias de viagem que você vai contar pra sempre.",
  },
});


const phiPhi = make(ilhasMeta[2], {
  bgGradient: "from-sky-950 via-background to-cyan-950",
  seoTitle: "Guia de Koh Phi Phi — Maya Bay sem multidão e festa sem furada",
  seoDescription: "O guia honesto de Phi Phi pra brasileiro: day-trip ou pernoite, Maya Bay no horário em que está vazia, viewpoint sem perrengue e os bares que valem o ingresso.",
  heroTitle: "Phi Phi sem virar",
  heroHighlight: "selfie em fila",
  heroSubtitle: "Phi Phi é a ilha mais fotografada da Tailândia e a mais mal vendida. 95% dos brasileiros chegam pelo tour das 8h, encontram 800 pessoas em Maya Bay e voltam achando que foi \"superestimada\". Não foi. Foi o tour errado, na hora errada.",
  heroWarning: "Maya Bay reabriu com controle de visitantes. Tem janela do dia em que está com 30 pessoas e janela em que está com 800. A diferença é saber a operadora e o horário — e quase ninguém te conta de graça.",
  pains: [
    { title: "Fez Phi Phi no tour das 8h saindo de Phuket", desc: "Chegou em Maya Bay com mais 12 barcos despejando turista. Foto contra o sol, fila de 40 min, água turva. O destino não tem culpa — o tour tem." },
    { title: "Dormiu em Phi Phi sem saber que tem balada até 5h", desc: "Reservou hotel em Tonsai achando que era romântico. Bar de fogo até de madrugada e gritaria nos corredores. A 800 metros tem hotel silencioso pelo mesmo preço." },
    { title: "Foi no viewpoint às 16h de chinelo", desc: "Subiu 186 degraus no calor do sol a pino, escorregou na descida e chegou suado em foto borrada. Tem horário certo — e calçado certo." },
    { title: "Pagou 1.500 baht no long-tail que custa 800", desc: "Pier de Tonsai é cheio de capitão otimista. Quem não sabe o preço de mercado paga o dobro. Tabela do guia resolve em 2 minutos." },
    { title: "Comeu na praia de Tonsai por R$ 80 o prato", desc: "Cardápio em foto, comida congelada, dor de barriga garantida. Tem 4 restaurantes na ilha onde local come — e o guia mostra os 4." },
    { title: "Voltou achando que Phi Phi é superestimada", desc: "Não é. É a ilha errada pra quem faz day-trip turístico. É a ilha dos sonhos pra quem sabe o que tá fazendo. Esse guia é a diferença." },
  ],
  features: [
    { title: "Day-trip vs. pernoite: decisão clara", desc: "Critério objetivo pra escolher entre passar o dia ou dormir 1-2 noites — com prós, contras e custo real de cada um." },
    { title: "Maya Bay sem multidão", desc: "A operadora, o horário e a rota que evita as 800 pessoas. Inclui mapa do percurso e o que fazer enquanto os outros barcos chegam." },
    { title: "Hotéis silenciosos vs. balada", desc: "Lista de hotéis em cada lado da ilha — quem quer festa fica em Tonsai, quem quer paz fica em Long Beach. Sem surpresa." },
    { title: "Visibilidade por ponto de snorkel × mês", desc: "Maya, Pi Le, Bamboo, Mosquito, Shark Point, Hin Bida, King Cruiser — quando cada ponto rende e quando vira aposta." },
    { title: "Mapa a pé + tabela de longtail", desc: "Sem scooter, sem carro: 7 trechos com tempo real, distância e risco. Tonsai → viewpoint, Long Beach, Loh Bagao, Laem Tong." },
    { title: "Mês ideal por perfil", desc: "Lua de mel, mochileiro festeiro, mergulhador, família com kids, fotógrafo Maya — cada um tem janela própria." },
    { title: "Comparativo Phi Phi × Lanta × Krabi", desc: "Tabela de 7 dimensões pra decidir qual ilha do Andaman combina (ou se faz combo)." },
    { title: "Day-trips de barco + camping em Maya Bay", desc: "Sunrise tour, 4 ilhas, longtail privado, sunset com plâncton e como reservar a única noite oficial dentro de Maya." },
    { title: "Pesca tradicional e lulada noturna", desc: "Sair com pescador local, jantar de lula no barco — quem opera, contato e o que esperar." },
    { title: "Spa do resort ao pé-na-areia", desc: "Phi Phi Island Village, Zeavola, Tara, Sunflower — qual é luxo, qual é honesto, qual é casal." },
    { title: "Loh Bagao, Laem Tong e Long Beach", desc: "O Phi Phi sem festa — onde os resorts boutique escondem casal de lua de mel longe do agito de Tonsai." },
    { title: "Phi Phi com kids", desc: "Onde dormir longe do bar, snorkel raso pra criança, day-trip que aguenta, o que NÃO fazer." },
    { title: "Maya Bay viva: cota + reef-safe + macaco", desc: "Regras de conservação que viraram lei: cota diária, taxa 400 baht, monkey beach, sunscreen químico." },
    { title: "Timeline de reserva", desc: "Quando travar ferry, resort, Maya sunrise tour e camping pra cada época do ano." },
  ],
  comparison: {
    theirs: [
      "Day-trip das 8h com mais 800 turistas",
      "Hotel em Tonsai achando que era romântico",
      "Viewpoint às 16h de chinelo no calor",
      "1.500 baht no long-tail superfaturado",
      "Cardápio com foto e comida congelada",
      "Voltar dizendo que Phi Phi decepcionou",
    ],
    ours: [
      "Operadora certa + horário em que Maya Bay tem 30 pessoas",
      "Hotel em Long Beach silencioso pelo mesmo preço",
      "Viewpoint às 6h pra ver Phi Phi acordar (e fotos lendárias)",
      "Tabela de preço de long-tail por trecho",
      "Os 4 restaurantes onde tailandês almoça",
      "Voltar dizendo que foi o melhor dia da viagem",
    ],
  },
  authority: {
    title: "11 ferries pra Phi Phi e 4 noites na ilha — em todo lado dela",
    paragraphs: [
      "Peguei o ferry de Phuket pra Phi Phi 11 vezes. Dormi em Tonsai e em Long Beach. Subi o viewpoint em 4 horários diferentes pra confirmar qual é o certo. E testei Maya Bay com 3 operadoras pra saber qual cumpre a promessa de \"sem multidão\".",
      "Quem te vende Phi Phi geralmente nunca dormiu lá. Esse guia é o oposto disso.",
    ],
    bullets: ["11 ferries Phuket ⇄ Phi Phi", "4 noites dormidas em Tonsai e Long Beach", "3 operadoras de Maya Bay testadas", "Viewpoint em 4 horários", "Bar crawl noturno mapeado"],
  },
  modules: [
    { title: "Day-trip ou pernoite?", desc: "A decisão certa muda toda sua experiência em Phi Phi.", bullets: ["Quem deve só day-trip", "Quem deve dormir 1 noite", "Quem deve dormir 2", "Custo real de cada opção", "Rota mista (1 noite + day-trip)"] },
    { title: "Maya Bay sem multidão", desc: "A operadora, o horário e o caminho que muda tudo.", bullets: ["A operadora que entra cedo", "Horário em que está vazia", "Pileh Lagoon + Loh Samah", "Snorkel que vale", "Os 3 tours que NÃO valem"] },
    { title: "Viewpoint + ilha a pé", desc: "Mapa completo de Tonsai pra cima.", bullets: ["186 degraus sem morrer", "Horário certo (6h ou 17h)", "Viewpoint 1, 2 ou 3?", "Calçado certo", "Rota até Long Beach a pé"] },
    { title: "Hospedagem por lado da ilha", desc: "Tonsai (balada) ou Long Beach (paz).", bullets: ["Hostels em Tonsai", "Boutique em Long Beach", "Resort em Laem Tong", "Bangalô em Loh Bagao", "Os 3 hotéis que decepcionam"] },
    { title: "Vida noturna e comida", desc: "Bar crawl honesto + restaurantes onde local come.", bullets: ["Reggae Bar (e quando ir)", "Fire show real vs. golpe", "Top 4 restaurantes locais", "Street food segura", "Café da manhã que vale"] },
    { title: "Visibilidade granular por ponto", desc: "Snorkel e dive site mês a mês.", bullets: ["Maya raso 1-4m", "Pi Le Lagoon", "Bamboo e Mosquito", "Hin Bida Advanced", "King Cruiser wreck"] },
    { title: "Mapa a pé + longtail", desc: "Sem carro, sem scooter — tudo a pé ou de barco.", bullets: ["Tonsai → viewpoint 1/2/3", "Long Beach trilha costeira", "Loh Bagao 20 min", "Laem Tong 45 min", "Tabela de preço de longtail"] },
    { title: "Mês × perfil + comparativo Andaman", desc: "Quando vir e qual ilha escolher.", bullets: ["Lua de mel Dez-Mar", "Mochileiro qualquer mês", "Família Jan-Mar", "Phi Phi × Lanta × Krabi", "Combo entre as 3"] },
    { title: "Barco, pesca, spa, conservação", desc: "Sunrise tour, camping Maya, lulada, Zeavola spa, regras Maya Bay.", bullets: ["Maya sunrise 6h", "Camping oficial Maya", "Squid fishing tradicional", "Spa de resort vs. praia", "Cota Maya + reef-safe"] },
    { title: "Família, vilarejo, timeline", desc: "Phi Phi com kids + Loh Bagao/Laem Tong + quando reservar.", bullets: ["Snorkel Shark Point kids", "Bubblemaker Bamboo", "Resort silencioso norte", "Réveillon 5-6 meses antes", "Maya camping 3-4 semanas"] },
  ],
  bonuses: [
    { title: "Mapa Google interativo da ilha", desc: "Tonsai, Long Beach, viewpoints, restaurantes e bares no mapa offline.", value: "R$ 67" },
    { title: "Roteiro Maya Bay sem multidão", desc: "Operadora + horário + percurso, em PDF de 1 página pra levar no celular.", value: "R$ 87" },
    { title: "Tabela de preço de long-tail", desc: "Trecho por trecho — pra você nunca pagar o dobro.", value: "R$ 47" },
    { title: "Checklist anti-perrengue", desc: "10 erros mais comuns em Phi Phi e como evitar cada um.", value: "R$ 57" },
    { title: "Visibilidade por dive/snorkel × mês", desc: "Maya, Pi Le, Bamboo, Hin Bida, King Cruiser — quando cada um rende.", value: "R$ 77" },
    { title: "Mapa a pé + longtail com tempos", desc: "7 trechos da ilha com distância, minutos e risco real.", value: "R$ 47" },
    { title: "Comparativo Phi Phi × Lanta × Krabi", desc: "7 dimensões pra decidir qual ilha do Andaman combina com sua viagem.", value: "R$ 57" },
    { title: "Maya Bay camping + sunrise tour", desc: "Como reservar a única noite oficial dentro de Maya + sunrise tour 6h.", value: "R$ 47" },
    { title: "Timeline de reserva ano todo", desc: "Quando travar ferry, resort, Maya e camping pra cada época sem pagar 3x.", value: "R$ 37" },
  ],
  testimonials: [
    { name: "Mariana Tavares", city: "São Paulo, SP", text: "Fizemos Maya Bay pela operadora indicada às 6h. Tinha 11 pessoas. ONZE. Os tours padrão chegaram 9h30 com 200 cada. Não consigo mais imaginar Phi Phi de outro jeito." },
    { name: "Lucas Schultz", city: "Porto Alegre, RS", text: "Ia reservar em Tonsai. Mudei pra Long Beach depois do guia — 7 min de long-tail, R$ 280 a diária, silêncio total. No quarto vizinho do meu amigo (Tonsai) tinha balada até 4h." },
    { name: "Fernanda e Bruno Capelli", city: "Belo Horizonte, MG", text: "Subi o viewpoint às 6h conforme o guia. Pegamos o nascer do sol sozinhos — só eu, ele e o ranger. As fotos viraram nosso quadro da sala." },
    { name: "Henrique Oliveira", city: "Florianópolis, SC", text: "Long-tail de Tonsai pra Long Beach: capitão pediu 1.500 baht. Mostrei a tabela do guia (800). Pagou 800. Em 1 corrida o guia se pagou 8 vezes." },
    { name: "Camila e Rafael Andrade", city: "Curitiba, PR", text: "Comemos no restaurante que o guia indica em Tonsai por 250 baht (R$ 40) os 2 com bebida. O da praia, igual prato, era 950 baht (R$ 150). Surreal." },
    { name: "Beatriz Lemos", city: "Niterói, RJ", text: "Sou solo female traveler. O guia tem capítulo de segurança em Phi Phi (drinks, balada, long-tail à noite) que me deixou super tranquila. Voltei sem nenhuma história ruim." },
  ],
  faqs: [
    { q: "Phi Phi de day-trip ou dormir?", a: "Day-trip resolve pra 70% das pessoas. Dormir só vale se você quer balada, viewpoint no nascer do sol ou Maya Bay às 6h. O guia te ajuda a decidir." },
    { q: "Maya Bay tá lotada de verdade?", a: "Sim, no horário padrão (10h-15h). Está vazia das 6h às 9h e depois das 16h. O guia mostra qual operadora opera nessas janelas." },
    { q: "Onde ficar — Tonsai ou Long Beach?", a: "Tonsai pra quem quer festa. Long Beach pra quem quer paz. Laem Tong pra resort isolado. Mapa completo no guia." },
    { q: "Quantos dias em Phi Phi?", a: "1 dia (day-trip) ou 2-3 noites (pernoite). Mais que isso entedia. O guia explica o motivo." },
    { q: "Tem como ir de Phuket E de Krabi?", a: "Ambos. O guia compara distância, preço, operadoras e te indica o melhor pra cada perfil." },
    { q: "Como recebo o guia?", a: "Imediato. Após pagamento Cakto (PIX/cartão), link no e-mail em segundos." },
    { q: "Posso pagar no PIX?", a: "Pode. PIX à vista ou cartão até 12x." },
    { q: "Se eu não gostar?", a: "Garantia 7 dias, devolução integral, sem perguntas." },
  ],
  finalCTA: {
    title: "Phi Phi é o sonho de quem sabe — e a decepção de quem não foi avisado",
    subtitle: "A diferença entre \"superestimada\" e \"melhor dia da minha vida\" cabe num guia de R$ 67. Decida com informação, não com Instagram pago.",
  },
});


const phangan = make(ilhasMeta[3], {
  bgGradient: "from-yellow-950 via-background to-rose-950",
  seoTitle: "Guia de Koh Phangan — Full Moon sem golpe e o lado calmo da ilha",
  seoDescription: "O guia honesto de Phangan pra brasileiro: Full Moon Party sem perrengue, datas certas, o lado leste calmo, wellness em Sri Thanu e como sobreviver ao Haad Rin.",
  heroTitle: "Phangan sem ser",
  heroHighlight: "roubado na Full Moon",
  heroSubtitle: "Phangan tem 2 ilhas dentro: o caos da Full Moon em Haad Rin e o santuário wellness/yoga de Sri Thanu. Brasileiro chega achando que é tudo igual e cai na pior. Este guia separa os dois lados e te leva pro que combina com você.",
  heroWarning: "Drink no Haad Rin pode estar batizado com metanol. Já matou turista. O guia traz os 3 bares testados, os 5 que devem ser evitados e o protocolo anti-roubo passo a passo.",
  pains: [
    { title: "Foi na Full Moon sem saber a data certa", desc: "A festa é só 1 noite por mês — e a ilha cobra preço de Full Moon a semana inteira. Quem erra a data paga caro pra não ver a festa." },
    { title: "Bebeu balde de drink em Haad Rin", desc: "1 em cada 4 contém metanol não declarado. Já matou turista. O guia traz os 3 bares com bebida segura e o protocolo simples pra reconhecer o resto." },
    { title: "Reservou hotel em Haad Rin a semana inteira", desc: "Som de 4 baladas até 7h da manhã, banho com areia no chão, preço inflado. Lado leste tem hotel boutique a 20 min pela metade do preço — e silêncio absoluto." },
    { title: "Pegou táxi-pickup do porto a R$ 300", desc: "É 100-150 baht por pessoa em horário normal. Em dia de Full Moon, motoristas inflam pra 800. Tabela do guia + apps locais te salvam." },
    { title: "Foi pra wellness/yoga e caiu em Sri Thanu errado", desc: "Sri Thanu tem 12+ centros wellness. 3 são reconhecidos internacionalmente. 9 são turismo wellness sem credencial. Misturar custa R$ 1.500 de retiro frustrado." },
    { title: "Saiu da ilha sem ver Bottle Beach, Than Sadet e Mae Haad", desc: "As 3 praias mais bonitas estão fora dos roteiros padrão. Quem fica preso no Haad Rin vê só a pior parte de Phangan." },
  ],
  features: [
    { title: "Calendário Full Moon 24 meses", desc: "Datas oficiais das próximas 24 Full Moon, Half Moon e Black Moon Parties — pra planejar com 2 anos de antecedência." },
    { title: "Os 2 lados da ilha decodificados", desc: "Haad Rin (festa) vs. Sri Thanu/Chaloklum (calma/wellness). Quem deve ficar em cada um e quando combinar os dois." },
    { title: "Protocolo anti-roubo Full Moon", desc: "Bebida segura, balde proibido, dinheiro escondido, hotel certo pra dormir — 8 regras que evitam o pior." },
    { title: "Visibilidade real em Sail Rock e Chumphon Pinnacle", desc: "Tabela mês-a-mês de visibilidade, vida marinha e janela de whale shark — pra quem mergulha sério." },
    { title: "Mapa de scooter — 8 trechos cronometrados", desc: "Tempo real entre Thong Sala, Sri Thanu, Haad Rin, Thong Nai Pan, Chaloklum, Bottle, Than Sadet." },
    { title: "Mês × perfil de viajante", desc: "Tabela cruzada: Full Moon, wellness, mochileiro, lua de mel, mergulhador, família — quando ir." },
    { title: "Comparativo Phangan × Tao × Samui (8 dimensões)", desc: "Decisão clara entre as 3 ilhas do Golfo, com custo, vibe, mergulho, família e tempo mínimo." },
    { title: "Ang Thong e barco-dia com camping", desc: "Operadoras autorizadas pra Ang Thong saindo direto de Phangan, inclusive overnight em Koh Wua Talab." },
    { title: "Pesca tradicional em Chaloklum", desc: "Como contratar pescador local, squid fishing noturno e game fishing — preços reais." },
    { title: "5 spas e retiros sérios mapeados", desc: "Orion Healing, Agama, Pyramid, The Sanctuary e Wat Pho — preços de programas e drop-in." },
    { title: "Praias remotas: Bottle, Than Sadet, Mae Haad", desc: "Como chegar, quanto custa, e por que ir nas 5 praias isoladas que ninguém te conta." },
    { title: "Família com kids — sem ilusão", desc: "Bairros OK, hospital, praias seguras, datas a evitar." },
    { title: "Conservação: reef-safe, tartaruga, Trash Hero", desc: "6 regras locais pra não destruir coral e participar de limpeza pós-Full Moon." },
  ],
  comparison: {
    theirs: [
      "Chegou em Phangan na semana errada (sem Full Moon)",
      "Balde de drink em qualquer bar da praia",
      "Hotel em Haad Rin a semana inteira",
      "Táxi-pickup do porto a 800 baht",
      "Centro de yoga aleatório em Sri Thanu",
      "Ver só Haad Rin e voltar enojado",
    ],
    ours: [
      "Datas exatas das próximas 24 festas",
      "Os 3 bares testados + protocolo anti-metanol",
      "Lado leste/oeste pela metade do preço + silêncio",
      "Tabela de transfer real + app local",
      "Os 3 centros wellness sérios de Sri Thanu",
      "Bottle Beach, Than Sadet e Mae Haad no roteiro",
    ],
  },
  authority: {
    title: "3 Full Moons + 12 dias morando em Sri Thanu + Sail Rock",
    paragraphs: [
      "Fui em 3 Full Moon Parties em 3 anos diferentes pra confirmar o que muda e o que se repete. Morei 12 dias em Sri Thanu testando 4 centros de yoga e 3 de massagem. Rodei a ilha 2 vezes de scooter pra mapear as 17 praias. Mergulhei 6 vezes em Sail Rock pra cruzar visibilidade com calendário e operadora.",
      "Esse guia é pra você não aprender Phangan do jeito difícil — porque o jeito difícil em Phangan pode acabar mal.",
    ],
    bullets: ["3 Full Moons documentadas", "12 dias em Sri Thanu", "17 praias mapeadas", "4 centros yoga testados", "6 mergulhos em Sail Rock", "Protocolo anti-metanol testado in loco"],
  },
  modules: [
    { title: "Full Moon Party do zero", desc: "Tudo o que ninguém te conta antes de comprar passagem.", bullets: ["Calendário 24 meses", "Como chegar e voltar vivo", "Os 3 bares seguros", "Os 5 que devem ser evitados", "Sobrevivência financeira (orçamento real)"] },
    { title: "Lado leste/oeste: paz e wellness", desc: "Onde Phangan é a melhor ilha do Golfo.", bullets: ["Sri Thanu wellness", "Chaloklum pescador", "Mae Haad e seu banco de areia", "Bottle Beach (só por barco)", "Than Sadet rio + cachoeira"] },
    { title: "Hospedagem por perfil e por mês", desc: "Festa, wellness, mochileiro, casal — e como o preço dobra na Full Moon.", bullets: ["Haad Rin (só pra festa)", "Sri Thanu boutique e budget", "Chaloklum bangalô", "Thong Nai Pan premium", "Quando reservar (e com quanta antecedência)"] },
    { title: "Transfer e mobilidade", desc: "Como não pagar o dobro chegando ou rodando a ilha.", bullets: ["Ferry de Samui e Tao", "Songthaew real x golpe", "Aluguel de scooter seguro", "Estradas perigosas mapeadas", "Apps que funcionam em Phangan"] },
    { title: "Yoga, massagem e retiros", desc: "Sri Thanu é Mecca de wellness — separe sério de marketing.", bullets: ["Os 3 estúdios sérios", "Retiros de 5 a 10 dias", "Massagem real x turística", "Detox e jejum responsáveis", "O que evitar (cura milagrosa, etc.)"] },
    { title: "Mergulho em Sail Rock e Chumphon", desc: "Visibilidade real, janela de whale shark, operadora certa em Chaloklum.", bullets: ["Sail Rock chimney 18m", "Chumphon Pinnacle", "Lotus Diving Chaloklum", "Janela Mar-Mai whale shark", "Mergulho avançado, não primeiro"] },
    { title: "Ang Thong, pesca e barco-dia", desc: "Mar grande saindo de Phangan, com operadora certa.", bullets: ["Ang Thong speedboat", "Camping Koh Wua Talab", "Pesca tradicional Chaloklum", "Squid fishing noturno", "Around-the-island longtail"] },
    { title: "Família com kids em Phangan", desc: "Bairros OK, hospital, datas a evitar.", bullets: ["Thong Nai Pan premium", "Haad Salad calmo", "Bandon Hospital Thong Sala", "Praias rasas seguras", "Evitar semana de festa"] },
    { title: "Conservação e turismo responsável", desc: "Como não destruir o que veio ver.", bullets: ["Protetor reef-safe obrigatório", "Distância de tartaruga e whale shark", "Trash Hero pós-Full Moon", "Plástico de uso único", "Operadoras eco-certificadas"] },
    { title: "Como e quando reservar tudo", desc: "Antecedência por cenário, OTA certa, flash sales.", bullets: ["Full Moon: 60-90 dias", "Sri Thanu Nov-Mar: 45 dias", "Premium Dez-Mar: 60-90 dias", "Anantara flash sale Ago-Set", "Ferry: 12go ou Lomprayah direto"] },
  ],
  bonuses: [
    { title: "Calendário Full Moon 24 meses", desc: "Datas das próximas 24 Full Moon, Half Moon e Black Moon Parties.", value: "R$ 47" },
    { title: "Protocolo anti-metanol", desc: "Como identificar bebida adulterada antes de beber. PDF de 1 página.", value: "R$ 87" },
    { title: "Mapa Google offline da ilha", desc: "Praias, hotéis, estúdios de yoga e estradas perigosas marcadas.", value: "R$ 67" },
    { title: "Tabela de transfer Full Moon", desc: "Preço real do porto a cada bairro em dia normal vs. dia de festa.", value: "R$ 47" },
    { title: "Comparativo Phangan × Tao × Samui", desc: "Tabela de 8 dimensões pra decidir entre as 3 ilhas do Golfo.", value: "R$ 57" },
    { title: "Mapa de scooter com tempos cronometrados", desc: "8 trechos da ilha com tempo real e nível de dificuldade.", value: "R$ 37" },
    { title: "Tabela de visibilidade Sail Rock + Chumphon", desc: "Mês-a-mês com janela whale shark e operadora certa.", value: "R$ 47" },
    { title: "Guia das 5 praias remotas", desc: "Bottle, Than Sadet, Mae Haad, Haad Yuan, Haad Khom — como chegar e onde dormir.", value: "R$ 57" },
    { title: "Pacote família com kids", desc: "Bairros OK, hospital, praias seguras, datas a evitar.", value: "R$ 37" },
    { title: "Checklist de reserva por antecedência", desc: "Quando reservar cada cenário, OTA certa, flash sales.", value: "R$ 37" },
  ],

  testimonials: [
    { name: "Vinícius Ramos", city: "Belo Horizonte, MG", text: "Cheguei 4 dias antes da Full Moon seguindo o calendário do guia. Hotel em Sri Thanu por 600 baht/noite, fiquei na zen total, e no dia da festa fui de táxi compartilhado. Voltei sem perder pertences — guia salvou minha viagem." },
    { name: "Larissa Penna", city: "Rio de Janeiro, RJ", text: "O protocolo anti-metanol parece exagero até você ler. Segui à risca, bebi só nos 3 bares indicados. Minha amiga não leu e acordou no hospital com lavagem estomacal. Sério. Esse capítulo paga o guia 1.000 vezes." },
    { name: "Pedro Henrique Marinho", city: "Recife, PE", text: "Sri Thanu tinha 4 estúdios de yoga na minha rua. Sem o guia eu teria caído no mais bonito — que era o pior. Fiz retiro de 7 dias no Agama indicado pelo guia. Saí outra pessoa." },
    { name: "Marina Galvão", city: "Florianópolis, SC", text: "Táxi do porto pediu 800 baht. Mostrei tabela do guia, paguei 150. Em 1 corrida o guia se pagou 8 vezes — só nessa corrida." },
    { name: "Camila e João Vitor", city: "Curitiba, PR", text: "Fomos pra Bottle Beach seguindo o guia (só dá pra chegar por barco). Praia DESERTA em alta temporada. 4 pessoas no total. Foi o dia mais bonito da viagem inteira pela Tailândia." },
    { name: "Felipe Andrade", city: "Goiânia, GO", text: "Fui na Full Moon esperando o pior e voltei amando. Segui as 8 regras do guia (sem balde, dinheiro escondido, sair em grupo). Nada aconteceu, festa absurda, voltei com R$ 200 dos R$ 400 que levei." },
  ],
  faqs: [
    { q: "Tem Full Moon todo mês?", a: "Sim, 1 por mês. Plus Half Moon (2/mês) e Black Moon (1/mês). Calendário 24 meses no guia." },
    { q: "Phangan vale fora da Full Moon?", a: "Sim. O lado leste e Sri Thanu são entre as melhores experiências do Golfo. Muita gente prefere ir sem Full Moon." },
    { q: "É perigoso?", a: "Em Haad Rin sim, especialmente na Full Moon (bebida adulterada, roubo, scooter). O resto da ilha é tranquilo. O guia traz protocolo." },
    { q: "Quantos dias?", a: "Mínimo 3 (1 Full Moon + 2 de descanso). Ideal 5-7 com wellness em Sri Thanu." },
    { q: "Família com criança?", a: "Sim, mas fora do Haad Rin. Thong Nai Pan e Chaloklum são tranquilos." },
    { q: "Como recebo o guia?", a: "Imediato. Pagamento Cakto (PIX/cartão) → link no e-mail em segundos." },
    { q: "Posso pagar no PIX?", a: "Pode. PIX à vista ou cartão em 12x." },
    { q: "Se eu não gostar?", a: "Garantia 7 dias, devolução integral." },
  ],
  finalCTA: {
    title: "Phangan pode ser a melhor festa da sua vida — ou a pior história de viagem",
    subtitle: "A diferença está em saber a data, o bar, o hotel e o protocolo. Por R$ 67 você compra os 3 anos que eu levei pra aprender tudo isso na pele.",
  },
});


// ============================================================================
// TIER 2
// ============================================================================

const tao = make(ilhasMeta[4], {
  bgGradient: "from-cyan-950 via-background to-blue-950",
  seoTitle: "Guia de Koh Tao — Mergulho barato sem cair em escola ruim",
  seoDescription: "O guia honesto de Koh Tao pra brasileiro: as escolas de mergulho sérias, do Open Water ao Divemaster, onde dormir barato e como combinar com Samui e Phangan.",
  heroTitle: "Koh Tao sem escolher",
  heroHighlight: "a escola errada",
  heroSubtitle: "Koh Tao é a capital mundial de Open Water barato — mas só metade das 70+ escolas de mergulho da ilha vale o que cobra. A outra metade vende certificado sem segurança real. Este guia é o filtro entre as duas.",
  heroWarning: "Já houve mortes em Koh Tao por escolas com instrutor mal treinado e equipamento revisado às pressas. Não é assunto de blog romântico. É assunto sério — e o guia trata como tal.",
  pains: [
    { title: "Caiu na escola que aparece em todo banner do pier", desc: "São as que mais investem em marketing, não as melhores. Instrutor com 60 alunos por mês, briefing apressado, equipamento de baixa rotatividade. Já houve acidentes." },
    { title: "Pagou Open Water 3x mais caro porque comprou online antes", desc: "Pacote online de R$ 1.800 vira R$ 600 no pier — mesma certificação PADI, mesma escola. O guia mostra como negociar." },
    { title: "Reservou em Sairee sem saber que é o Patong de Tao", desc: "Praia principal lotada, bar até 3h, hostel barulhento. Tanote Bay e Chalok Baan Kao são silenciosos e mais bonitos." },
    { title: "Foi pra Tao em out-nov (monção) e mal mergulhou", desc: "Visibilidade cai pra 3 metros, ondas cancelam mergulho. Tem janela ótima (jan-mai) e janela ruim — quase ninguém te conta." },
    { title: "Subiu o John-Suwan Viewpoint às 14h", desc: "Trilha curta mas íngreme no calor de 38°. O nascer do sol às 5h45 é uma das vistas mais bonitas da Tailândia. Quase ninguém faz." },
    { title: "Ignorou Koh Nang Yuan ao lado", desc: "A ilha-coleção de 3 ilhotas ligadas por banco de areia. Day-trip de 30 min. Quem perde isso perde a foto que mais viraliza de Koh Tao." },
  ],
  features: [
    { title: "10 escolas de mergulho aprovadas", desc: "Com Google Maps, site e Instagram de cada uma — escolha com critério em vez de banner do pier." },
    { title: "Carreira PADI completa (Open Water → Instrutor)", desc: "Tabela de prazo e preço real para cada nível — Open Water, Advanced, Rescue, Divemaster e IDC." },
    { title: "6 instrutores brasileiros + script de negociação", desc: "Quem dá aula em PT na ilha e como fechar Open Water por R$ 600 em vez de R$ 1.800." },
    { title: "Checklist do mergulhador brasileiro", desc: "Seguro DAN, atestado, regra das 18h sem voar, álcool, hidratação — o que ninguém te conta antes." },
    { title: "Glossário PADI em português", desc: "12 termos do briefing decifrados (buoyancy, NDL, safety stop, bends) — entre na água entendendo tudo." },
    { title: "Tabela de ferries completa", desc: "9 rotas com Lomprayah, Seatran e Songserm — horários, duração e preço lado a lado." },
    { title: "Calendário de visibilidade mês a mês", desc: "Janela de ouro, janela ruim e os meses de whale shark em Sail Rock." },
    { title: "SIM, eSIM e Wi-Fi por região", desc: "Onde o sinal morre, qual operadora pega em Tanote, eSIM antes de embarcar." },
    { title: "ATM, câmbio e cartão sem dor", desc: "Como evitar R$ 50 jogados fora por saque e o hack do cartão de crédito para o curso." },
    { title: "Erros que custaram caro de verdade", desc: "8 erros com o valor em real do prejuízo — aprenda com quem já errou." },
    { title: "Onde dormir por R$ 50 a R$ 1.500", desc: "Hostels, hotéis e pool villas testados nas 6 baías principais — com Maps." },
    { title: "John-Suwan Viewpoint às 5h45", desc: "A foto que vira capa de viagem com plano operacional: trilha, taxa, horário do nascer do sol mês a mês." },
    { title: "Visibilidade por ponto de mergulho × mês", desc: "Chumphon, Sail Rock, Southwest, Twins, Sattakut, White Rock — quando cada um rende e quando vira aposta." },
    { title: "Loop de scooter com km e tempo real", desc: "Mae Haad ↔ Sairee ↔ Chalok ↔ Tanote ↔ Aow Leuk — risco de cada trecho e onde 110cc não aguenta dois." },
    { title: "Mês ideal por perfil de viajante", desc: "Open Water iniciante, caçador de whale shark, fun diver, festeiro de Full Moon, família — cada um tem janela própria." },
    { title: "Comparativo Tao × Phangan × Samui", desc: "Tabela de 7 dimensões pra decidir qual ilha do Golfo combina com sua viagem (ou se rola as 3)." },
    { title: "Liveaboard e night dive", desc: "Sail Rock noturno, White Rock à noite e raros liveaboards de 3 dias — quando reservar e quanto custa." },
    { title: "Pesca tradicional e lulada noturna", desc: "Sair com pescador local de Mae Haad, jantar de lula no convés — preço, contato e o que esperar." },
    { title: "Spa pós-mergulho", desc: "Jamahkiri, Healing Hands e Ban's Spa — qual resolve torcicolo de regulador e qual é fine dining wellness." },
    { title: "Tanote, Aow Leuk e Sai Nuan — o Tao remoto", desc: "Praias escondidas a 15 min do bar de Sairee — onde dormir longe da festa sem perder a ilha." },
    { title: "Koh Tao com kids", desc: "Bubblemaker PADI a partir de 8 anos, Shark Bay snorkel raso, hospedagem sem escada e o que NÃO fazer com criança." },
    { title: "Save Koh Tao — voluntariado de mergulho", desc: "Plante coral em New Heaven, conte tubarão filhote em Shark Bay, beach clean-up mensal com café free." },
    { title: "Timeline de reserva", desc: "Quando travar curso, ferry e hotel pra Réveillon, whale shark season, alta europeia ou baixa." },
  ],
  comparison: {
    theirs: [
      "Escolheu escola pelo banner mais bonito do pier",
      "Pagou Open Water 3x online antes de chegar",
      "Hostel em Sairee no meio do barulho",
      "Foi em out-nov e mal mergulhou",
      "Subiu viewpoint às 14h, suado e sem foto",
      "Voltou sem ver Koh Nang Yuan",
      "Sacou 5x no ATM e pagou R$ 50 de taxa",
      "Voou 8h depois do último dive e foi parar no hospital",
    ],
    ours: [
      "10 escolas aprovadas com site, IG e Maps",
      "Open Water por R$ 600 negociado no pier (script pronto)",
      "Hostel em Tanote Bay silencioso (mesmo preço)",
      "Calendário de visibilidade mês a mês",
      "Viewpoint às 5h45 com nascer do sol",
      "Koh Nang Yuan no roteiro de 30 min",
      "1 saque grande + Aeon Bank — taxa mínima",
      "Regra das 18h cumprida e seguro DAN ativo",
    ],
  },
  authority: {
    title: "Open Water + Advanced em Koh Tao + 7 noites na ilha",
    paragraphs: [
      "Fiz Open Water e Advanced em Koh Tao em 2 escolas diferentes pra comparar. Dormi 7 noites em Sairee, Tanote e Chalok pra sentir cada baía. E entrevistei 6 instrutores brasileiros que moram na ilha sobre quais escolas eles indicariam pra família.",
      "Esse guia é a destilação dessas entrevistas — porque escolher errado em Koh Tao não é só perder dinheiro. É risco real.",
    ],
    bullets: ["Open Water + Advanced testados", "7 noites em 3 baías diferentes", "6 instrutores brasileiros entrevistados", "10 escolas analisadas e aprovadas", "Janela de mergulho mês a mês"],
  },
  modules: [
    { title: "Escolha da escola de mergulho", desc: "10 escolas aprovadas com site, Instagram e Maps.", bullets: ["Razão instrutor/aluno aceitável", "Equipamento e rotatividade", "10 escolas com link direto", "6 instrutores brasileiros (PT)", "Script de negociação em 5 passos"] },
    { title: "Carreira PADI completa", desc: "Open Water ao Instrutor com prazos e preços reais.", bullets: ["Open Water em 3-4 dias", "Advanced em +2 dias", "Rescue + EFR em +3-4", "Divemaster em 6-8 semanas", "IDC: virar instrutor em Tao"] },
    { title: "Segurança e fundamentos", desc: "O que ninguém te conta antes do primeiro dive.", bullets: ["Checklist DAN + atestado + 18h", "Glossário PADI em português", "Regras de álcool e hidratação", "Protetor reef-safe obrigatório", "Buoyancy e equalização"] },
    { title: "Onde dormir por baía", desc: "Sairee, Mae Haad, Chalok, Tanote, Aow Leuk, Jansom.", bullets: ["Hostels em Sairee", "Boutique em Tanote", "Bangalô em Chalok", "Pool villa em Jansom", "Pacote escola + acomodação"] },
    { title: "Além do mergulho", desc: "Snorkel, viewpoints, Koh Nang Yuan, comida.", bullets: ["Koh Nang Yuan em 30 min", "John-Suwan ao nascer do sol 5h45", "Snorkel sem mergulho", "10 restaurantes testados", "Yoga e wellness"] },
    { title: "Logística e bolso", desc: "Quando ir, como chegar, quanto custa cada coisa.", bullets: ["Tabela de 9 rotas de ferry", "Janela boa (jan-mai) × ruim (out-nov)", "SIM, eSIM e Wi-Fi por região", "ATM, câmbio e cartão sem dor", "Orçamento real em real por dia"] },
    { title: "Visibilidade granular por dive site", desc: "Tabela mês a mês de Chumphon, Sail Rock, Southwest, Sattakut e mais.", bullets: ["Pontos avançados × iniciante", "Janela de whale shark Fev/Set", "Night dive White Rock", "Sattakut wreck Jan-Mai", "Quando cancelar o dive"] },
    { title: "Loop scooter e ilha remota", desc: "Mapa completo da ilha com tempo, km e risco — Tanote, Aow Leuk, Sai Nuan.", bullets: ["7 trechos com km/min", "Subidas que matam 110cc", "Onde dormir longe da festa", "Trilha de Sai Nuan", "Bangalô em Tanote"] },
    { title: "Mês × perfil e comparativo de ilhas", desc: "Quando vir conforme seu perfil + Tao × Phangan × Samui em 7 dimensões.", bullets: ["Open Water iniciante", "Caçador de whale shark", "Festa Full Moon", "Família com kids", "Roteiro combinando 3 ilhas"] },
    { title: "Liveaboard, pesca e wellness", desc: "Sail Rock noturno, lulada com pescador, spa pós-dive.", bullets: ["Day-trip 3 dives", "Squid fishing tradicional", "Big game charter", "Jamahkiri spa", "Healing Hands Sairee"] },
    { title: "Família e conservação", desc: "Koh Tao com criança + Save Koh Tao Coral Nursery.", bullets: ["Bubblemaker PADI 8+", "Snorkel Shark Bay", "Coral planting voluntário", "Black tip shark census", "Beach clean-up mensal"] },
    { title: "Timeline de reserva", desc: "Quanto antes reservar pra cada época do ano.", bullets: ["Réveillon: 4 meses", "Whale shark season: 6-8 semanas", "Alta europeia: 4 semanas", "Baixa: 1 semana", "Nov: véspera"] },
  ],
  bonuses: [
    { title: "Mapa Google interativo com lista pronta", desc: "Cada local com chip 📍 Mapa + tutorial em 3 passos pra salvar offline no celular.", value: "R$ 87" },
    { title: "Calendário de visibilidade mês a mês", desc: "Visibilidade média do mar em metros, mês a mês — com janela de whale shark.", value: "R$ 57" },
    { title: "Script de negociação no pier", desc: "Frases exatas em 5 passos pra negociar Open Water de R$ 1.800 pra R$ 600.", value: "R$ 67" },
    { title: "Lista de instrutores brasileiros", desc: "6 brasileiros que moram em Koh Tao e dão aula em PT — escola e perfil.", value: "R$ 47" },
    { title: "Checklist + Glossário PADI", desc: "Seguro DAN, regra das 18h e 12 termos do briefing em português.", value: "R$ 37" },
    { title: "Tabela de ferries + erros caros", desc: "9 rotas com horários e os 8 erros que custaram caro de verdade (em R$).", value: "R$ 47" },
    { title: "Tabela de visibilidade por dive site", desc: "Chumphon, Sail Rock, Southwest, Sattakut, Twins, White Rock × melhor mês.", value: "R$ 77" },
    { title: "Loop scooter com km/min/risco", desc: "7 trechos da ilha com tempo real e onde 110cc não aguenta dois.", value: "R$ 47" },
    { title: "Comparativo Tao × Phangan × Samui", desc: "Tabela de 7 dimensões pra decidir qual ilha do Golfo combina com sua viagem.", value: "R$ 57" },
    { title: "Timeline de reserva ano todo", desc: "Quando travar curso, ferry e hotel pra cada época — sem pagar overprice nem ficar sem vaga.", value: "R$ 37" },
  ],
  testimonials: [
    { name: "Rafael Bittencourt", city: "São Paulo, SP", text: "Tinha pago R$ 1.890 num pacote Open Water online. Cancelei e fiz pelo guia: mesma escola PADI, mesma certificação, R$ 620 no pier. Sobrou R$ 1.270 pra 2 mergulhos avançados em Sail Rock." },
    { name: "Júlia Cardim", city: "Brasília, DF", text: "Fiz Open Water com instrutor brasileiro indicado no guia. 4 alunos só, briefing de 40 min, equipamento revisado na minha frente. Saí com confiança absoluta — não é um certificado de papel." },
    { name: "Tiago e Carla Rocha", city: "Belo Horizonte, MG", text: "Reservei pelo guia em Tanote Bay (R$ 280 a diária). Meus amigos em Sairee pagaram R$ 320 e dormiram com som de bar até 3h. Sem comparação." },
    { name: "Bruno Yamamoto", city: "Curitiba, PR", text: "Subi o John-Suwan às 5h conforme o guia. Sozinho no topo, vi o sol nascer entre as 3 baías. Foi a foto mais linda da viagem inteira pela Ásia." },
    { name: "Ana Beatriz Lobato", city: "Porto Alegre, RS", text: "Fui em fevereiro seguindo a tabela de visibilidade. Mergulho com 30m de visibilidade, tubarão-leopardo, tartaruga. Meu colega foi em outubro e mal viu 3m." },
    { name: "Lucas Mendes", city: "Goiânia, GO", text: "Estou fazendo Divemaster há 4 meses. Vim pelo guia, fechei pacote com hospedagem grátis durante o curso. O guia me poupou R$ 6.000 só nessa decisão." },
  ],
  faqs: [
    { q: "Vale a pena fazer Open Water em Koh Tao?", a: "Sim — é o lugar mais barato e com mais escolas do mundo. Mas a escolha da escola muda tudo. O guia filtra." },
    { q: "Quanto custa o Open Water?", a: "Entre 9.000 e 11.000 baht (R$ 1.450-1.770) negociado no pier. Online é 30-50% mais caro." },
    { q: "Não sei mergulhar — vale ir?", a: "Sim. Tao é boa pra snorkel também. Koh Nang Yuan, Mango Bay e Hin Wong têm vida marinha incrível mesmo sem certificação." },
    { q: "Quanto tempo ficar?", a: "Mínimo 4 dias (Open Water). Ideal 7 (Open + Advanced + 2 dias de descanso). 11 dias pra Rescue." },
    { q: "Quando ir?", a: "Jan-mai é ótimo. Jun-set é OK. Out-nov é arriscado (monção). Tabela mês a mês no guia." },
    { q: "Como recebo o guia?", a: "Imediato após pagamento Cakto. PDF + mapa (PDF + mapa interativo)." },
    { q: "Posso pagar no PIX?", a: "Pode. PIX à vista ou cartão em 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas. Devolução integral." },
  ],
  finalCTA: {
    title: "Em Koh Tao, a escolha da escola é a decisão mais importante da viagem",
    subtitle: "Por R$ 67 você compra o filtro das 70+ escolas da ilha. Pra escolher errado, basta seguir o banner mais bonito do pier — e torcer.",
  },
});


const chang = make(ilhasMeta[5], {
  bgGradient: "from-green-950 via-background to-emerald-950",
  seoTitle: "Guia de Koh Chang — A Phuket selvagem do leste sem turistada",
  seoDescription: "O guia honesto de Koh Chang pra brasileiro: praias por perfil, ferry sem dor de cabeça, hospedagem real e roteiros de 5 a 10 dias longe do circuito de Phuket.",
  heroTitle: "Koh Chang sem cair",
  heroHighlight: "no lado errado da ilha",
  heroSubtitle: "Koh Chang é a segunda maior ilha da Tailândia e quase ninguém no Brasil conhece. Praia selvagem, selva fechada, elefantes éticos e zero exército de excursão. Mas tem 2 lados completamente opostos — e escolher o errado estraga a viagem.",
  heroWarning: "Quem reserva White Sand Beach achando que é \"o Patong calmo de Chang\" se decepciona. White Sand é o lado turístico. Lonely Beach é mochileiro. Klong Prao é família. Bang Bao é pescador. Misturar = perdeu.",
  pains: [
    { title: "Reservou White Sand achando que era selvagem", desc: "É a praia mais turística da ilha, com bar de cuba até tarde e cardápio em foto. As 4 praias do sul têm o que você foi buscar." },
    { title: "Pegou ônibus de Bangkok sem planejamento de ferry", desc: "São 3 portos diferentes em Trat e horários que mudam por temporada. Quem chuta perde o último ferry e dorme em Laem Ngop." },
    { title: "Caiu em \"santuário de elefantes\" com banho", desc: "Banho, montaria e foto em cima do elefante NÃO é ético. Em Chang só existe um santuário sério — o guia mostra qual e o critério para reconhecer qualquer outro." },
    { title: "Foi pra cachoeira Klong Plu em fevereiro", desc: "Seca, sem queda d'água, R$ 60 de ingresso por nada. Tem janela boa (jul-out). O guia traz tabela mês a mês." },
    { title: "Comeu nos restaurantes da praia por R$ 70 o prato", desc: "Comida turística, congelada, sem sabor. O guia mapeia 4 night markets com endereço onde tailandês come por R$ 12." },
    { title: "Não viu o lado sul da ilha", desc: "Long Beach, Bang Bao, Salakphet — vilarejos de pescador com o melhor pôr do sol e a melhor comida. Quem fica no norte perde 70% da magia." },
  ],
  features: [
    { title: "Mapa visual das 7 praias-bairro (norte→sul)", desc: "Tabela com ordem, tag de perfil e lado da ilha — decide em que ordem dividir as noites se ficar em 2 bases." },
    { title: "7 praias-bairro decodificadas", desc: "White Sand, Klong Prao, Kai Bae, Lonely, Bailan, Bang Bao, Salakphet — quem deve ficar em cada uma e quem deve evitar." },
    { title: "Janela climática mês a mês", desc: "12 meses com chuva, vento, mar, visibilidade de mergulho, lotação e diária média de hotel mid-range." },
    { title: "Combo Chang + Mak + Kood + Wai", desc: "Qual ilha pra qual perfil, dias ideais por ilha e tabela de ferries entre as 4 (alta temporada nov-mai)." },
    { title: "Mergulho em Koh Rang National Park", desc: "5 dive sites principais (Hin Luk Bat, HTMS Chang wreck, Pinnacle), nível, profundidade, melhor época e preço real em R$ e baht." },
    { title: "Travessia para o Camboja", desc: "Os 5 passos Hat Lek → Koh Kong → Sihanoukville + os 5 scams da fronteira com a resposta exata." },
    { title: "5 cachoeiras avaliadas", desc: "Klong Plu, Than Mayom, Klong Nonsi, Khiri Phet e Klong Nueng — qual paga ingresso, qual é grátis, qual vale e qual pular." },
    { title: "6 sunset spots ranqueados", desc: "Kai Bae Viewpoint, Bang Bao Pier, Klong Kloi, Salakphet, Lonely Cliff, White Sand — com horário ideal de chegada e dica do local." },
    { title: "Trilha Long Beach (Hat Yao) passo a passo", desc: "Single-track de selva fechada (2,8 km), distância, dificuldade, tabela de maré obrigatória, o que levar e os perigos reais." },
    { title: "Vida noturna decodificada", desc: "6 bares mapeados (Lonely Beach, Sabay, Hippie, 15 Palms, Oodie's, Bailan Bay) — vibe, pra quem é, evite se, preços e endereço." },
    { title: "Tabela de ferries completa", desc: "8 rotas: Bangkok→Trat, 2 portos para Chang, e ferries sazonais para Koh Mak, Kood, Wai e fronteira do Camboja." },
    { title: "Santuário ético confirmado + critério antifraude", desc: "Ban Kwan Chang — único ético em Chang (SEM banho, SEM montaria, SEM foto em cima) + o filtro objetivo pra reconhecer qualquer outro." },
    { title: "Cachoeira mês a mês", desc: "12 meses com status de volume e dica — pra não pagar 200 baht de ingresso em pedra seca." },
    { title: "4 night markets com endereço", desc: "White Sand, Klong Prao, Bang Bao pier e Salakphet — onde tailandês come por R$ 12, não R$ 80." },
    { title: "Checklist do viajante", desc: "PID, seguro com scooter, repelente, reef-safe, vacina — o que resolver antes de embarcar." },
    { title: "SIM, eSIM e Wi-Fi por região", desc: "Onde o sinal morre, qual operadora pega em Salakphet, eSIM antes de embarcar." },
    { title: "ATM, câmbio e cartão sem dor", desc: "Como evitar R$ 50 jogados fora por saque e onde está o único Aeon Bank da ilha." },
    { title: "Erros que custaram caro de verdade", desc: "8 erros com o valor em real do prejuízo — aprenda com quem já errou." },
    { title: "Roteiros 3, 5, 7 e 10 dias", desc: "Para mochileiro, casal, família ou combo Chang + Mak + Kood do arquipélago de Trat." },
  ],
  comparison: {
    theirs: [
      "Reservou White Sand achando que era selvagem",
      "Foi em julho na monção sem saber que metade fecha",
      "Pagou banho de elefante em santuário falso",
      "Cachoeira seca em fevereiro a R$ 60 de ingresso",
      "Tentou Hat Yao na maré alta e ficou preso",
      "Caiu em scam de US$ 35 no visa cambojano",
      "Mergulhou em setembro com viz de 3 metros",
      "Restaurante turístico a R$ 70 o prato",
      "Sacou 4× no ATM e pagou R$ 50 de taxa",
      "Alugou scooter sem filme e perdeu R$ 3.000 na devolução",
    ],
    ours: [
      "Praia escolhida pelo mapa visual norte→sul",
      "Janela climática mês a mês — chuva, vento, mar, viz, diária",
      "Único santuário ético (Ban Kwan Chang) + critério antifraude",
      "Cachoeira na janela certa (5 cachoeiras avaliadas)",
      "Trilha Hat Yao com tabela de maré e checklist",
      "Travessia Camboja em 5 passos + 5 scams identificados",
      "Mergulho Koh Rang: 5 dive sites + melhor mês + preço real",
      "4 night markets com endereço — R$ 12 por refeição",
      "1 saque grande + Aeon Bank — taxa mínima",
      "Scooter filmado, contrato em inglês, sem prejuízo",
    ],
  },
  authority: {
    title: "8 dias rodando Koh Chang norte ao sul",
    paragraphs: [
      "Rodei Koh Chang inteira de scooter em 2 viagens diferentes, dormi em 6 hotéis nas 5 praias principais, visitei o único santuário ético da ilha, mergulhei em Koh Rang com 3 operadoras diferentes e fiz a travessia Hat Lek para Koh Kong duas vezes.",
      "Chang não tem tour pronto pra brasileiro. Esse guia é o primeiro mapa honesto da ilha em português — com tabela climática, mergulho avaliado, trilha de Hat Yao passo a passo e combo arquipélago de Trat decodificado.",
    ],
    bullets: ["8 dias na ilha", "6 hotéis testados", "7 praias-bairro mapeadas", "5 dive sites em Koh Rang", "Trilha Hat Yao completa", "Fronteira Camboja 2x"],
  },
  modules: [
    { title: "Praias por perfil + mapa visual", desc: "Mapa norte→sul e 7 praias-bairro com tom por perfil.", bullets: ["Mapa visual N→S das 7 praias", "White Sand (e quando faz sentido)", "Klong Prao família", "Kai Bae sunset com ilhotas", "Lonely Beach mochileiro", "Bang Bao + Salakphet autênticos"] },
    { title: "Janela climática + cachoeiras avaliadas", desc: "Quando vir e quando não vir, cachoeira a cachoeira.", bullets: ["12 meses com chuva/vento/mar/viz/lotação/diária", "5 cachoeiras avaliadas (Klong Plu, Than Mayom, Klong Nonsi, Khiri Phet, Klong Nueng)", "Cachoeira mês a mês (qual seca em fev)", "6 sunset spots com horário ideal"] },
    { title: "Mergulho em Koh Rang", desc: "Parque marinho, 5 dive sites e preço real.", bullets: ["Hin Luk Bat, Hin Rap, Koh Rang Pinnacle", "HTMS Chang wreck (naufrágio militar)", "Wai Wreck", "Preço de fun dive, OW, AOW e DSD em R$", "Por que não é Koh Tao (e por que tudo bem)"] },
    { title: "Combo arquipélago de Trat", desc: "Chang + Mak + Kood + Wai sem perder ferry.", bullets: ["Qual ilha pra qual perfil", "Dias ideais por ilha", "Tabela de ferries entre as 4", "Sazonalidade (nov-mai = alta)", "Roteiro 10 dias arquipélago full"] },
    { title: "Trilha Hat Yao + selva", desc: "Single-track de 2,8 km até a praia mais isolada.", bullets: ["Início, distância, duração, dificuldade", "Tabela de maré obrigatória (preamar prende)", "Checklist: água, DEET, lanterna, calçado", "Perigos reais (cobras, sem sinal)", "Trilha pra Klong Plu e Than Mayom"] },
    { title: "Travessia para o Camboja", desc: "Hat Lek → Koh Kong → Sihanoukville em 5 passos.", bullets: ["Saída de Chang + minivan combinado", "Visa-on-arrival US$ 30 (e os scams)", "Como chegar em Koh Kong cidade", "Bus pra Sihanoukville", "5 scams clássicos da fronteira"] },
    { title: "Vida noturna decodificada", desc: "6 bares mapeados pra quem quer (e pra quem foge).", bullets: ["Lonely Beach (Stoner, Ting Tong) — mochileiro", "Sabay Bar (White Sand) — fire show", "Hippie Bar (Bailan) — drink alternativo", "15 Palms + Oodie's (Klong Prao) — casal", "Bailan Bay — lua de mel silenciosa"] },
    { title: "Comida sem cair no preço turista", desc: "4 night markets + 10 restaurantes testados.", bullets: ["Night market White Sand", "Bang Bao pier (seafood)", "Salakphet vila", "10 restaurantes com preço real", "O que pedir e o que pular"] },
    { title: "Logística e bolso", desc: "SIM, ATM, scooter e câmbio sem dor.", bullets: ["Checklist pré-viagem (PID, seguro, reef-safe)", "SIM, eSIM e Wi-Fi por região", "ATM, câmbio e cartão sem dor", "Anti-golpe do scooter (filme 360°)", "Orçamento real em real por dia"] },
    { title: "Roteiros prontos 3, 5, 7 e 10 dias", desc: "Mochileiro, casal, família ou arquipélago completo.", bullets: ["3 dias highlights", "5 dias sem corrida", "7 dias Chang + Mak/Kood", "10 dias Trat archipelago full", "8 erros caros para evitar"] },
  ],
  bonuses: [
    { title: "Mapa Google interativo com lista pronta", desc: "Cada local com chip 📍 Mapa + tutorial em 3 passos pra salvar offline.", value: "R$ 87" },
    { title: "Janela climática mês a mês (chuva, vento, mar, viz, lotação, diária)", desc: "Tabela de 12 meses pra você acertar o mês ANTES de comprar passagem.", value: "R$ 67" },
    { title: "Mergulho Koh Rang — 5 dive sites + preço real", desc: "HTMS Chang wreck, Pinnacle, Hin Luk Bat. Nível, profundidade, melhor mês, preço em R$.", value: "R$ 77" },
    { title: "Combo Chang + Mak + Kood + Wai", desc: "Qual ilha pra qual perfil + tabela de ferries inter-ilhas.", value: "R$ 57" },
    { title: "Travessia Camboja em 5 passos + 5 scams", desc: "Da saída de Chang à chegada em Sihanoukville. Visa, transporte e armadilhas.", value: "R$ 47" },
    { title: "Trilha Hat Yao passo a passo", desc: "Distância, maré, checklist, perigos. Acesso à praia mais isolada da ilha.", value: "R$ 47" },
    { title: "6 sunset spots ranqueados", desc: "Horário ideal de chegada e dica de local pra cada um.", value: "R$ 37" },
    { title: "Tabela de ferries Trat ⇄ Chang ⇄ arquipélago", desc: "8 rotas com operadora, horário, duração e preço — print no celular.", value: "R$ 57" },
    { title: "Cachoeira mês a mês + 5 cachoeiras avaliadas", desc: "12 meses com status e dica + qual paga ingresso, qual é grátis.", value: "R$ 47" },
    { title: "Critério antifraude de santuário ético", desc: "Os 4 sinais que separam santuário sério de exploração disfarçada.", value: "R$ 67" },
    { title: "Vida noturna decodificada — 6 bares", desc: "Vibe, pra quem é, evite se, preço e endereço de cada um.", value: "R$ 37" },
    { title: "Lista de 4 night markets com endereço", desc: "Onde tailandês come por R$ 12 em vez de R$ 80 na praia.", value: "R$ 37" },
    { title: "Checklist viagem + erros caros", desc: "PID, seguro, reef-safe + os 8 erros que custaram caro de verdade (em R$).", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Daniel Krause", city: "Curitiba, PR", text: "Ia reservar White Sand pensando que era \"selvagem\". Mudei pra Lonely Beach pelo guia. Bangalô de R$ 180 a diária pé na areia, bar reggae à noite. Foi a melhor parte da Tailândia." },
    { name: "Ana Carolina Brito", city: "Recife, PE", text: "Fui no Ban Kwan Chang pelo guia. Observei o elefante comendo, andando livre na floresta, sem corrente, sem banho, sem foto em cima. Chorei. Depois descobri que tinha quase reservado um dos 'santuários' falsos que o guia denuncia." },
    { name: "Marcos e Renata Lima", city: "Belo Horizonte, MG", text: "Família com 2 crianças (6 e 10). Klong Prao foi perfeita: mar raso, sem ondas fortes, restaurante família. O guia tinha avisado: \"NÃO White Sand com criança\". Tinha razão." },
    { name: "Carolina Ferraz", city: "São Paulo, SP", text: "Fiz Bang Bao + Long Beach no roteiro do sul. Vi 4 pessoas no pôr do sol. QUATRO. Em fevereiro, alta temporada. Ninguém vai porque ninguém sabe. Eu fui." },
    { name: "Henrique Mota", city: "Porto Alegre, RS", text: "Cheguei em Laem Ngop 17h sem ferry. O guia tinha tabela do último horário por mês — eu não respeitei. Dormi 200 baht em pousada do porto. Erro meu, não do guia. Da próxima vou respeitar." },
    { name: "Bia Fontana", city: "Florianópolis, SC", text: "Comemos no night market de Bang Bao por 90 baht (R$ 14) os 2 com bebida. O restaurante da praia 200 metros antes pedia 480 (R$ 80). Insano." },
  ],
  faqs: [
    { q: "Onde fica Koh Chang?", a: "Leste da Tailândia, próximo da fronteira com Camboja. 5h de Bangkok por terra + ferry. Detalhe no guia." },
    { q: "É melhor que Phuket?", a: "Diferente. Chang é mais selvagem, menos turística, mais barata. Phuket é mais infraestrutura, mais opção, mais cara. O guia compara." },
    { q: "Quantos dias?", a: "Mínimo 5. Ideal 7-10 pra cobrir norte e sul. Mais que isso entedia." },
    { q: "Posso combinar com Camboja?", a: "Sim — fronteira em Koh Kong é a 2h de Chang. Roteiro combinado no guia." },
    { q: "Família com criança?", a: "Sim, em Klong Prao. Mar calmo, hotéis família, sem balada." },
    { q: "Como recebo o guia?", a: "Imediato. Pagamento Cakto → link no e-mail." },
    { q: "PIX?", a: "Sim, PIX à vista ou cartão em 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas. Devolução integral." },
  ],
  finalCTA: {
    title: "Koh Chang é a Tailândia que ninguém te mostrou — porque dá trabalho ir",
    subtitle: "Por R$ 67 você compra o atalho. Praia selvagem, elefante ético, cachoeira na janela certa e zero turistada. A Tailândia que vai virar memória, não selfie.",
  },
});


const lanta = make(ilhasMeta[6], {
  bgGradient: "from-orange-950 via-background to-rose-950",
  seoTitle: "Guia de Koh Lanta — A ilha favorita de quem fugiu de Phi Phi",
  seoDescription: "O guia honesto de Koh Lanta pra brasileiro: praias por perfil, scooter loop, sunset bars, hotéis testados e roteiros sem o ritmo industrial de Phuket.",
  heroTitle: "Koh Lanta no ritmo",
  heroHighlight: "lento que vale",
  heroSubtitle: "Lanta é a ilha favorita de quem já foi pra Phi Phi e voltou esgotado. 30 km de costa, 9 praias em fila, scooter circulando livre e zero balada. Slow travel real — mas não sem critério. Este guia mostra qual praia, qual hotel e quando é a hora certa.",
  heroWarning: "Lanta esvazia em maio e fecha metade dos restaurantes. Quem vai em jun-out sem planejamento pega ilha vazia, hotel fechado e vento sul forte. Janela ideal é nov-mar.",
  pains: [
    { title: "Reservou em Klong Dao achando que era a melhor praia", desc: "É a primeira, mais movimentada, com mais hotel grande. As praias 4, 5 e 6 (Klong Khong, Klong Nin, Kantiang) são muito mais bonitas e mais baratas." },
    { title: "Foi em junho-outubro sem checar janela", desc: "Vento sul, mar mexido, metade dos restaurantes fechados. Lanta é nov-mar. Quem vai fora disso paga viagem inteira por uma ilha pela metade." },
    { title: "Pegou day-trip 4 ilhas saindo da praia errada", desc: "O tour 4 ilhas sai do sul (Saladan ou Old Town). Quem fica no norte perde 1h30 só pra chegar no ponto de embarque." },
    { title: "Não alugou scooter e ficou preso na praia", desc: "Lanta é feita pra scooter loop. Sem isso, você fica preso em 200m de praia. Com isso, ilha inteira em 1 dia." },
    { title: "Foi pro Old Town na hora errada", desc: "Charmoso, mas só ganha vida das 17h às 21h. Quem vai 12h acha que é \"vila morta\" e desiste. Tem horário certo." },
    { title: "Deixou de ver os sunset bars do sul", desc: "Kantiang Bay e Bamboo Bay têm os 3 melhores sunset bars de Lanta. Quem fica no norte nunca chega lá. Perde a melhor parte da ilha." },
  ],
  features: [
    { title: "9 praias decodificadas", desc: "Klong Dao, Phra Ae, Klong Khong, Klong Nin, Kantiang, Bamboo Bay — qual é cada uma e pra quem." },
    { title: "Janela climática mês a mês", desc: "Tabela dos 12 meses com chuva, vento, visibilidade de mergulho, lotação e preço. Pra não pegar ilha vazia em julho." },
    { title: "Scooter loop de 1 dia (80 km, 9 paradas)", desc: "Rota completa norte → sul com horário, parada e tempo. Termina com sunset em Bamboo Bay." },
    { title: "5 sunset bars ranqueados", desc: "Same Same, Why Not Bar, Funky Fish, Where Else?, Mirador Pimalai — nota, horário e o que esperar." },
    { title: "Old Town decodificada", desc: "Por que ir só depois das 17h, night market das terças e os 3 restaurantes em palafita que valem." },
    { title: "12 golpes com resposta pronta", desc: "Scooter, taxi, tour, ATM, polícia — script exato pra cada um." },
  ],
  comparison: {
    theirs: [
      "Reservou Klong Dao por ser \"a praia número 1\"",
      "Foi em julho com metade da ilha fechada",
      "Day-trip 4 ilhas saindo do hotel errado",
      "Sem scooter, preso em 200m de praia",
      "Foi pro Old Town às 12h e achou vazio",
      "Voltou sem conhecer Kantiang e Bamboo Bay",
    ],
    ours: [
      "Praia certa por perfil (e por faixa de preço)",
      "Janela ideal (nov-mar) com tudo aberto — tabela de 12 meses",
      "Day-trip do ponto certo de embarque",
      "Scooter loop de 80 km em 1 dia, com horário",
      "Old Town às 18h com night market das terças",
      "5 sunset bars ranqueados — Bamboo e Kantiang vencem",
    ],
  },
  authority: {
    title: "10 dias de scooter loop em Lanta",
    paragraphs: [
      "Fiquei 10 dias dormindo em 3 praias diferentes (Klong Dao, Klong Nin e Kantiang), rodei o loop completo 4 vezes, testei os 5 sunset bars e fiz o day-trip 4 ilhas pra confirmar de onde sai e qual operadora cumpre.",
      "Lanta não tem armadilha turística agressiva — mas tem perda de tempo se você não conhece a geografia. Esse guia é o mapa.",
    ],
    bullets: ["10 dias na ilha", "3 praias dormidas", "Scooter loop 4x", "9 praias visitadas", "5 sunset bars testados"],
  },
  modules: [
    { title: "9 praias por perfil", desc: "Decodificação de cada praia em fila do norte ao sul.", bullets: ["Klong Dao (norte agitado)", "Phra Ae (família)", "Klong Khong (chill)", "Klong Nin (perfeita)", "Kantiang (sul premium)"] },
    { title: "Janela climática mês a mês", desc: "Tabela completa dos 12 meses.", bullets: ["Chuva e vento por mês", "Visibilidade de mergulho em metros", "Lotação e variação de preço", "O que fecha em mai-out", "Quando reservar com antecedência"] },
    { title: "Scooter loop completo (80 km)", desc: "1 dia rodando Lanta inteira com horário.", bullets: ["9 paradas com horário exato", "Café no May & Mark's antes", "Mirador do Pimalai", "Mu Ko Lanta National Park", "Sunset final em Bamboo Bay"] },
    { title: "5 sunset bars ranqueados", desc: "Os melhores sunsets do sul — nota e horário.", bullets: ["Same Same But Different (Kantiang)", "Why Not Bar (Bamboo)", "Funky Fish (Klong Nin)", "Where Else? (Klong Khong)", "Mirador Pimalai"] },
    { title: "Old Town e night market", desc: "Vila chinesa em palafita — quando vai e o que come.", bullets: ["Só depois das 17h", "Night market das terças", "Krua Kanda, Beautiful, Caoutchouc", "Como chegar de scooter", "1 noite em homestay de palafita"] },
    { title: "Day-trips e além", desc: "4 ilhas, Koh Rok, Koh Haa, Mu Ko Lanta NP.", bullets: ["Tour 4 ilhas (qual operadora)", "Koh Rok day-trip (fev-abr)", "Mergulho Hin Daeng/Muang", "Combinar com Phi Phi", "Combinar com Krabi"] },
  ],
  bonuses: [
    { title: "Mapa Google das 9 praias + loop", desc: "Mapa offline com praias, sunset bars, restaurantes e a rota completa de scooter.", value: "R$ 87" },
    { title: "Calendário climático dos 12 meses", desc: "Tabela com chuva, vento, visibilidade, lotação e preço por mês — pra escolher quando ir.", value: "R$ 57" },
    { title: "Lista de hotéis por praia (12 testados)", desc: "Hotéis em 5 praias principais, por faixa de preço, com veredito real.", value: "R$ 67" },
    { title: "Roteiro scooter loop 1 dia (PDF)", desc: "9 paradas com horário, parada e tempo — pronto pra imprimir.", value: "R$ 47" },
    { title: "Tabela dos 5 sunset bars", desc: "Nota, horário e o que esperar em cada um. Pra escolher o seu por noite.", value: "R$ 37" },
  ],
  testimonials: [
    { name: "Cláudia Marques", city: "São Paulo, SP", text: "Saí de Phi Phi extenuada e fui pra Lanta no dia seguinte. Klong Nin, bangalô de R$ 220 a diária, mar calmo, zero barulho. Recuperei a fé na Tailândia. O guia salvou minha viagem." },
    { name: "Rodrigo Bertolucci", city: "Belo Horizonte, MG", text: "Aluguei scooter e segui o loop do guia. Rodei a ilha inteira em 9h com 5 paradas. Terminei vendo o pôr do sol no Why Not Bar em Bamboo Bay. Um dos dias mais lindos da minha vida." },
    { name: "Patrícia e Marco Andrade", city: "Curitiba, PR", text: "Lua de mel, 7 dias em Kantiang Bay. Resort de R$ 580 a diária (mesmo padrão de Phuket sairia R$ 1.100). Praia quase deserta. Voltamos casados de novo." },
    { name: "Fernanda Calazans", city: "Recife, PE", text: "Ia em julho. Vi no guia que era baixa temporada com metade fechada. Adiei pra janeiro. Foi a melhor decisão — tudo aberto, sol todo dia, R$ 280 a diária num boutique." },
    { name: "Júlio Pacheco", city: "Florianópolis, SC", text: "O capítulo de Old Town muda o jogo. Fui às 18h com night market funcionando, restaurante na água, lanterna no rio. Achei que tinha entrado em outra cidade. Mágico." },
    { name: "Renata e Luís Borba", city: "Porto Alegre, RS", text: "Família com criança. Phra Ae foi perfeita: mar raso, hotel família R$ 320 a diária com café, sem balada. O guia tinha avisado pra não Klong Dao. Tinha razão." },
  ],
  faqs: [
    { q: "Lanta é melhor que Phi Phi?", a: "Pra slow travel, sim. Phi Phi é festa e fotografia. Lanta é descanso e scooter. O guia compara perfis." },
    { q: "Quantos dias?", a: "Mínimo 4. Ideal 7 com scooter loop e day-trip 4 ilhas. 10 dias é luxo." },
    { q: "Quando ir?", a: "Nov-mar é perfeito. Abr-mai é OK. Jun-out arrisca." },
    { q: "Família com criança?", a: "Sim. Phra Ae ou Klong Dao com hotel certo. Capítulo família no guia." },
    { q: "Tem balada?", a: "Não. Beach bars sim, baladas não. É o charme da ilha." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Lanta é a ilha que cura quem chegou na Tailândia cansado",
    subtitle: "Por R$ 67 você compra o mapa que evita o erro do norte, da janela errada e do scooter sem rota. Slow travel só funciona com critério.",
  },
});


// ============================================================================
// TIER 3
// ============================================================================

const lipe = make(ilhasMeta[7], {
  bgGradient: "from-cyan-950 via-background to-teal-950",
  seoTitle: "Guia de Koh Lipe — As Maldivas da Tailândia sem desistir no caminho",
  seoDescription: "O guia honesto de Koh Lipe pra brasileiro: como chegar sem morrer no trajeto, melhores resorts, os snorkels que valem e quando ir pra ver água cristalina.",
  heroTitle: "Koh Lipe sem desistir",
  heroHighlight: "no meio do caminho",
  heroSubtitle: "Lipe tem água da cor das Maldivas pela metade do preço — mas chegar lá é o filtro. São 4 trechos de transporte e 1 janela climática estreita (nov-abr). Quem improvisa fica preso em Hat Yai com sono e sem hotel.",
  heroWarning: "Lipe FECHA jun-out (monção, mar fechado, balsa cancela). Quem reserva nessas datas sem checar janela perde dinheiro. Janela ideal: dez-mar.",
  pains: [
    { title: "Tentou chegar em Lipe sem entender os 4 trechos", desc: "Bangkok ⇒ Hat Yai ⇒ Pakbara ⇒ Lipe. Cada trecho tem operadora, horário e armadilha. Sem o guia, você dorme em estação rodoviária." },
    { title: "Reservou em jun-out e descobriu que mar tava fechado", desc: "Monção forte fecha o Parque Nacional Tarutao. Lipe vira ilha desabitada metade do ano. Pesquisa de Booking não mostra isso." },
    { title: "Foi pra Sunrise Beach achando que era a melhor", desc: "Pattaya Beach é a central, mais cara. Sunrise é família/calma. Sunset é mochileiro. Cada uma tem perfil — escolher errado vira viagem ruim." },
    { title: "Pagou 3.000 baht no resort comum porque era \"Lipe\"", desc: "Tem boutique a 1.800 com mesma estrutura. O Booking ranqueia por pagamento de banner, não por qualidade. O guia separa." },
    { title: "Fez snorkel só nos pontos clássicos", desc: "Há 8 pontos de snorkel em Lipe. Os 3 famosos estão lotados de longtail. Os outros 5 são desertos e mais bonitos. O guia mostra os 5." },
    { title: "Ignorou que existe Adang ao lado", desc: "Koh Adang é a montanha verde a 10 min de longtail, com trilha pro mirante e a melhor foto de Lipe vista de cima. Quase ninguém faz." },
  ],
  features: [
    { title: "Os 4 trechos pra chegar sem perrengue", desc: "Bangkok ⇒ Hat Yai ⇒ Pakbara ⇒ Lipe com operadora, horário e preço de cada trecho." },
    { title: "Janela climática real (12 meses)", desc: "Tabela mês a mês com chuva, vento, visibilidade, preço e veredito. Pra não chegar e achar tudo cinza." },
    { title: "Visibilidade por ponto, mês a mês", desc: "Tabela em metros pra Hin Ngam, Jabang, Stonehenge, 8 Mile Rock — escolha o mês exato pelo dive site." },
    { title: "3 praias + 8 snorkels + Adang", desc: "Pattaya, Sunrise, Sunset. 3 clássicos + 5 desertos. Trilha Adang ao nascer do sol." },
    { title: "Mergulho decodificado (Open Water → Advanced)", desc: "Escolas honestas, sites por nível, preço PADI em Lipe vs. Koh Tao." },
    { title: "Ferries Lipe ⇄ Lanta / Phi Phi / Phuket / Langkawi", desc: "Tabela completa de speedboats com janela, horário e preço pra combinar ilhas." },
    { title: "Chao Ley (Moken) — cultura nativa", desc: "Vila Moken, sunrise breakfast em longtail tradicional, etiqueta — apoie direto a comunidade." },
    { title: "Mês ideal por perfil", desc: "Lua de mel, mergulhador, família, mochileiro, fotografia — cada um tem o mês certo." },
    { title: "Internet, SIM e dinheiro", desc: "AIS é a única que pega. ATM cobra 220 baht. Lipe sem banco — quanto trazer em cash." },
    { title: "Família, saúde e seguro", desc: "O que muda com criança, clínica única em Lipe, evacuação a Satun, seguro obrigatório." },
    { title: "12 golpes com resposta pronta", desc: "Taxa do parque, mini-van fura conexão, tour cortado, ATM caro — script exato pra cada um." },
  ],
  comparison: {
    theirs: [
      "Tentou chegar em Lipe \"no improviso\"",
      "Reservou em julho e mar tava fechado",
      "Resort genérico de 3.000 baht porque era \"Lipe\"",
      "Snorkel só nos 3 pontos clássicos com 50 barcos",
      "Pegou SIM de operadora errada e ficou sem sinal",
      "Sem cash em ilha que não tem banco — taxa absurda de ATM",
      "Voltou sem subir Adang nem ver Lipe de cima",
    ],
    ours: [
      "Roteiro de 4 trechos com horário real + pit-stop Hat Yai",
      "Janela ideal dez-mar + visibilidade por ponto",
      "Boutique de 1.800 baht com a mesma estrutura",
      "Os 5 snorkels desertos + os 3 clássicos no horário certo",
      "AIS é a única que pega — comprou no aeroporto antes",
      "Cash calculado por perfil, saque diluído no ATM certo",
      "Adang ao nascer do sol + Chao Ley (Moken) breakfast",
    ],
  },
  authority: {
    title: "6 dias em Lipe testando o roteiro completo",
    paragraphs: [
      "Fiz a rota Bangkok ⇒ Lipe pelos 4 trechos sem atalho pra confirmar tempos, atrasos e armadilhas. Dormi nas 3 praias diferentes. Subi Adang ao nascer do sol. Fiz os 8 pontos de snorkel pra ranquear honestamente. E contratei pescador Moken pro sunrise breakfast em longtail.",
      "Lipe vale cada baht — mas só se você chegar lá com plano. Esse guia é o plano.",
    ],
    bullets: ["6 dias na ilha", "3 praias testadas", "8 pontos de snorkel ranqueados", "Trilha Adang ao nascer do sol", "Sunrise breakfast com Moken", "Rota Bangkok-Lipe documentada"],
  },
  modules: [
    { title: "Os 4 trechos até Lipe", desc: "Bangkok ⇒ Hat Yai ⇒ Pakbara ⇒ Lipe sem perrengue.", bullets: ["Voo + van de Bangkok", "Mini-van Hat Yai → Pakbara", "Speedboat Pakbara → Lipe", "Pit-stop Hat Yai (4 cards: quando, onde, aeroporto, o que fazer)", "Hotel cápsula no aeroporto se chegou tarde"] },
    { title: "Mapa a pé + 3 praias por perfil", desc: "Lipe inteira em 25 min. Pattaya, Sunrise, Sunset.", bullets: ["Tempos a pé entre todos os pontos", "Pattaya central", "Sunrise família", "Sunset mochileiro", "Por que NÃO alugar bike"] },
    { title: "Mês ideal por perfil", desc: "Qual mês pra cada tipo de viajante.", bullets: ["Lua de mel: fev", "Mergulho: mar-abr", "Família: jan/mar", "Mochileiro: nov ou abr", "Quando EVITAR (mai-out e ano-novo)"] },
    { title: "Janela climática mês a mês", desc: "Tabela dos 12 meses pra ver Maldivas.", bullets: ["Chuva, vento e mar por mês", "Visibilidade snorkel/mergulho", "Lotação e variação de preço", "O que fecha em mai-out", "Quando reservar com antecedência"] },
    { title: "Visibilidade por ponto", desc: "Tabela em metros, por mês.", bullets: ["Hin Ngam, Jabang, Koh Yang", "Stonehenge e 8 Mile Rock", "Hin Sorn (deserto)", "Direto da praia Sunrise", "Mês rei: fev"] },
    { title: "Snorkel: 3 clássicos + 5 desertos", desc: "Os pontos que o Booking não mostra.", bullets: ["Hin Ngam (pedras pretas)", "Jabang (coral roxo)", "Koh Yang (tartarugas)", "Os 5 pontos desertos", "Snorkel direto da praia (grátis)"] },
    { title: "Mergulho decodificado", desc: "Open Water ao Advanced em Lipe.", bullets: ["PADI Open Water: R$ 1.600-2.000", "Advanced (libera 8 Mile Rock)", "Escolas certas pra iniciante", "Sites por nível", "Lipe vs. Koh Tao"] },
    { title: "Ferries arquipélago", desc: "Lipe ⇄ Lanta / Phi Phi / Phuket / Langkawi.", bullets: ["Tigerline e Bundhaya", "Janela nov-mai", "Horários e preços", "Combinar com Langkawi (Malásia)", "Volta a Pakbara"] },
    { title: "Adang, Rawi e além", desc: "Lipe é hub do Parque Tarutao.", bullets: ["Trilha Adang (Chado Cliff)", "Rawi praia deserta", "Tarutao histórica", "Como ir, quando ir, o que levar", "200 baht do parque já paga"] },
    { title: "Chao Ley (Moken)", desc: "O povo nativo da ilha — apoio direto.", bullets: ["Vila Moken (onde fica)", "Sunrise breakfast em longtail", "Mercado de peixe 06h-08h", "Etiqueta cultural", "O que NÃO comprar como 'Moken'"] },
    { title: "Walking Street + sunsets", desc: "Único centro + 5 sunsets ranqueados.", bullets: ["Vida noturna 19h+", "Pooh's, Nee Papaya, Bombay", "Sem balada eletrônica", "5 sunsets ranqueados", "Sunset do topo de Adang"] },
    { title: "Internet, dinheiro e família", desc: "O que ninguém te conta.", bullets: ["AIS é a única que pega", "ATM cobra 220 baht — saque grande", "Cash por perfil (mochileiro/casal/premium)", "Família: Sunrise + Idyllic/Bundhaya", "Farmácia única em Walking Street"] },
    { title: "Saúde, seguro e emergência", desc: "Lipe é remota — seguro obrigatório.", bullets: ["Clínica única (Pattaya)", "Emergência = Satun (4-5h)", "Evacuação marítima obrigatória", "Kit básico", "Vacinas recomendadas"] },
  ],
  bonuses: [
    { title: "Mapa Google com 4 trechos + 8 snorkels", desc: "Rota completa + snorkels marcados + vila Moken, pra usar offline.", value: "R$ 87" },
    { title: "Calendário de visibilidade dos 12 meses", desc: "Visibilidade do mar em metros, mês a mês, por ponto de snorkel/dive.", value: "R$ 57" },
    { title: "Lista de 12 resorts por faixa", desc: "Hotéis testados de R$ 280 a R$ 1.800 a diária, com veredito real e categoria família.", value: "R$ 67" },
    { title: "Tabela das 4 etapas Bangkok→Lipe", desc: "Horário, operadora e preço de cada trecho + plano B Hat Yai pit-stop.", value: "R$ 47" },
    { title: "Tabela de ferries do arquipélago", desc: "Lipe ⇄ Lanta / Phi Phi / Phuket / Langkawi com janela e preço.", value: "R$ 47" },
    { title: "Mapa a pé Lipe inteira (25 min)", desc: "Tempos reais entre cada praia e ponto — sem precisar de bike.", value: "R$ 37" },
    { title: "Mês ideal por perfil (checklist)", desc: "Cartão único: qual mês pra você (lua de mel, família, mergulho, mochileiro).", value: "R$ 37" },
    { title: "Checklist saúde + seguro Lipe", desc: "O que tem que cobrir o seguro, kit básico, vacinas e clínica única.", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Mariana e Vítor Faleiros", city: "São Paulo, SP", text: "Lua de mel. Lipe em janeiro pelo roteiro do guia. Resort de R$ 920 a diária com piscina infinita. Vimos a água cristalina dos 4 m de profundidade. Maldivas sem visa. Sem o guia, eu não teria nem chegado." },
    { name: "Bruno Cordeiro", city: "Belo Horizonte, MG", text: "Os 4 trechos parecem assustadores. Segui o roteiro à risca — saí de Bangkok 21h, cheguei em Lipe 13h do dia seguinte sem perder uma conexão. Tabela do guia é mapa do tesouro." },
    { name: "Carolina Ribas", city: "Curitiba, PR", text: "Fiz snorkel no Hin Ngam às 8h conforme o guia — vazio. Os tours padrão chegaram 11h com 30 barcos. Mesma água, experiência completamente diferente." },
    { name: "Felipe Andrade", city: "Recife, PE", text: "Subi Adang ao nascer do sol. Quase desisti no caminho (íngreme). Cheguei no topo, vi Lipe inteira amanhecendo, mar azul-piscina. A foto virou meu papel de parede pra sempre." },
    { name: "Renata e Marcelo Vieira", city: "Florianópolis, SC", text: "Família com 1 filho (12). Reservei em Sunrise Beach pelo guia. Mar raso, sem ondas, restaurante na praia. Pattaya Beach (que ia reservar antes) é central demais pra criança." },
    { name: "Camila Tojal", city: "Porto Alegre, RS", text: "Combinei Lipe com Langkawi (Malásia) seguindo o roteiro do guia. 4 dias em Lipe + 3 em Langkawi. 2 países, 1 ferry de 1h. Sem o guia eu nunca teria pensado nisso." },
  ],
  faqs: [
    { q: "Vale a pena ir tão longe?", a: "Sim, se você vai dez-mar e tem 5+ dias. Não, se vai em monção ou tem só 2 dias." },
    { q: "Quanto custa chegar?", a: "R$ 350-500 só de transporte Bangkok ⇒ Lipe (1 trecho). Detalhes no guia." },
    { q: "Quantos dias?", a: "Mínimo 4 (1 chegada + 3 ilha). Ideal 5-6." },
    { q: "Posso combinar com Langkawi (Malásia)?", a: "Sim, ferry direto. Combo no guia." },
    { q: "Família com criança?", a: "Sim, em Sunrise Beach. Capítulo dedicado." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Lipe é a Tailândia que parece Maldivas — mas só pra quem chegar lá inteiro",
    subtitle: "Por R$ 67 você compra a rota dos 4 trechos, a janela climática certa e os resorts que valem. Pra desistir no meio do caminho, basta ir sem plano.",
  },
});


const kood = make(ilhasMeta[8], {
  bgGradient: "from-stone-950 via-background to-emerald-950",
  seoTitle: "Guia de Koh Kood — Luxo discreto, praia deserta, zero turistada",
  seoDescription: "O guia honesto de Koh Kood pra brasileiro: a ilha intocada do leste, resorts boutique, como chegar e por que vale o trajeto longo.",
  heroTitle: "Koh Kood: o luxo",
  heroHighlight: "que ninguém te contou",
  heroSubtitle: "Kood é o segredo guardado do leste tailandês — praia deserta, água translúcida, selva preservada e zero balada. Os resorts são boutique de verdade (não Booking inflado). Quem chega aqui depois de Phuket chora — e depois nunca mais quer outra coisa.",
  heroWarning: "Kood é caro. Não no padrão Tailândia barata. No padrão hotel boutique do leste. Resort decente parte de R$ 600 a diária. Se você quer mochileiro, é Lanta ou Chang. Se quer luxo discreto, Kood não tem rival.",
  pains: [
    { title: "Tentou chegar em Kood pela rota errada", desc: "Voo barato + ônibus + ferry = 14h. Voo Bangkok→Trat + speedboat = 4h. A diferença está no guia." },
    { title: "Reservou no resort errado por causa do nome bonito", desc: "Kood tem 3 resorts de US$ 800/noite e 12 de US$ 120/noite — todos com \"luxo\" no nome. O guia separa marketing de realidade." },
    { title: "Foi em jun-out e mar tava marrom", desc: "Monção fecha visibilidade e cancela ferry. Janela é nov-abr — fora disso, é jogada." },
    { title: "Não alugou scooter e ficou preso no resort", desc: "Kood são 25 km de costa. Sem scooter você vê 1 praia. Com scooter, vê as 7." },
    { title: "Caiu no snorkel turístico em barco com 20 pessoas", desc: "Os 2 melhores snorkels (Klong Yai Kee e Ao Bang Bao) são acessíveis direto da praia. O tour é desnecessário e caro." },
    { title: "Foi pro Soneva Kiri achando que era único", desc: "Soneva é US$ 1.500/noite. Existe boutique de R$ 800 a diária com mesma água e praia mais bonita. Guia compara." },
  ],
  features: [
    { title: "Rota inteligente Bangkok → Kood (4h)", desc: "Voo + speedboat em 4h, sem ônibus noturno. Operadoras e horários." },
    { title: "12 resorts: boutique real vs. marketing", desc: "Testados — qual é luxo real, qual é Booking inflado, com Soneva comparado." },
    { title: "7 praias decodificadas", desc: "Klong Chao, Bang Bao, Tapao, Ngamkho, Klong Yai Kee, Ao Phrao, Khlong Hin — qual é qual." },
    { title: "Mapa scooter com tempos reais", desc: "Quantos minutos entre cada praia, qual estrada, onde tem terra batida." },
    { title: "Visibilidade por ponto, mês a mês", desc: "Tabela em metros pra Klong Yai Kee, Bang Bao, Koh Rang, HTMS Chang." },
    { title: "Mergulho decodificado (Open Water → Advanced)", desc: "BB Divers, Paradise Divers, sites por nível, Open R$ 1.500." },
    { title: "Mês ideal por perfil", desc: "Lua de mel, mergulho, família, mochileiro — cada um tem o mês certo." },
    { title: "Booking timeline (quando reservar)", desc: "Dez/jan = 5 meses, fev = 4, nov/abr = 2, mai = 1 semana." },
    { title: "Pesca local + vila Ao Salat", desc: "Longtail tradicional com pescador, palafitas sobre o mar, almoço por R$ 25." },
    { title: "Spa & wellness — premium e local", desc: "Six Senses, Shantaa, Tinkerbell e massagem de rua por 300 baht." },
    { title: "Família com criança (kids-friendly)", desc: "Praia ideal, hotéis com berço, atividades seguras, posto de saúde." },
    { title: "Kood × Mak × Chang — comparativo", desc: "Tabela final pra escolher entre as 3 ilhas do leste tailandês." },
    { title: "8 golpes com resposta pronta", desc: "Speedboat 'cancelado', scooter com arranhão, songthaew dobrado — script exato." },
  ],
  comparison: {
    theirs: [
      "Ônibus noturno + ferry = 14h pra chegar",
      "Resort \"boutique\" de Booking inflado",
      "Foi em julho com mar marrom",
      "Preso na praia do resort",
      "Snorkel turístico com 20 pessoas",
      "Soneva achando que era o único luxo",
      "Reservou em dezembro 1 mês antes — sem vaga",
    ],
    ours: [
      "Voo Bangkok → Trat + speedboat em 4h",
      "12 resorts testados, marketing separado",
      "Janela ideal (nov-abr) + visibilidade por ponto",
      "Scooter loop pelas 7 praias com tempos reais",
      "Snorkel grátis Klong Yai Kee + Bang Bao",
      "Boutique R$ 1.200 com mesma água do Soneva",
      "Booking timeline por janela — sem perder vaga",
    ],
  },
  authority: {
    title: "5 dias em Koh Kood testando luxo, médio e local",
    paragraphs: [
      "Dormi em 3 resorts (1 de US$ 600, 1 de R$ 800 e 1 de R$ 350 a diária) pra comparar honestamente. Aluguei scooter e rodei a ilha 2 vezes. Fiz os 2 snorkels gratuitos e o tour pago — pra te dizer qual vale. Saí às 05h30 com pescador local em longtail, visitei vila Ao Salat e plantação de borracha tradicional.",
      "Kood é pouco coberto em português — e por isso é onde brasileiro escapa do circuito padrão. Esse guia é o primeiro mapa decente da ilha em PT.",
    ],
    bullets: ["5 dias na ilha", "3 resorts comparados (R$ 350 a R$ 4.000)", "7 praias mapeadas", "Pesca em longtail tradicional", "Vila Ao Salat + plantação borracha", "Rota Bangkok → Kood em 4h"],
  },
  modules: [
    { title: "Como chegar em Kood (rota inteligente)", desc: "Bangkok → Trat → Kood em 4h.", bullets: ["Voo Bangkok → Trat", "Speedboat Laem Sok → Kood", "Rota econômica (14h)", "Combinar com Camboja", "Hotel pit-stop em Trat"] },
    { title: "Booking timeline", desc: "Quando reservar por janela.", bullets: ["Dez/jan = 5 meses", "Fev (lua de mel) = 4 meses", "Mar (mergulho) = 3 meses", "Nov/abr = 2 meses", "Mai = 1 semana com flexível"] },
    { title: "Resorts: boutique vs. marketing", desc: "12 resorts testados.", bullets: ["Soneva Kiri (e quando vale)", "Tinkerbell Resort", "Shantaa", "Boutique R$ 700-1.500", "Budget R$ 300-600"] },
    { title: "7 praias + mapa scooter", desc: "Tempos reais entre praias.", bullets: ["Klong Chao (central)", "Bang Bao (boutique)", "Tapao (deserta)", "Ngamkho (estilo Maldivas)", "Loop 60km em 6-7h"] },
    { title: "Mês ideal por perfil", desc: "Qual mês pra cada tipo de viajante.", bullets: ["Lua de mel: fev", "Mergulho: mar", "Família: jan", "Mochileiro: nov ou abr", "Quando EVITAR (mai-out e ano-novo)"] },
    { title: "Visibilidade por ponto", desc: "Tabela em metros, por mês.", bullets: ["Klong Yai Kee, Bang Bao (praia)", "Koh Rang (tour)", "Koh Rang Pinnacle (dive)", "HTMS Chang (wreck)", "Mês rei: fev"] },
    { title: "Mergulho decodificado", desc: "Open Water ao Advanced em Kood.", bullets: ["PADI Open Water: R$ 1.500-1.800", "Advanced (libera HTMS Chang)", "BB Divers e Paradise Divers", "Sites por nível", "Fun dive 2 tanks"] },
    { title: "Atividades além do resort", desc: "Kayak, pesca, snorkel, cachoeira.", bullets: ["Kayak no Klong Chao river", "Pesca com longtail local", "Snorkel grátis 2 praias", "Trilha cachoeira", "Sunset em Ao Phrao"] },
    { title: "Cultura local", desc: "Vila Ao Salat e plantação de borracha.", bullets: ["Palafitas sobre o mar", "Almoço local R$ 25", "Mini-fábrica de borracha", "Sangria da seringueira", "Etiqueta cultural"] },
    { title: "Spa & wellness", desc: "Premium e massagem de rua.", bullets: ["Six Senses (Soneva)", "Shantaa Spa", "Tinkerbell Spa", "Massagem casa fixa 300 baht", "EVITE pé na areia turística"] },
    { title: "Família com criança", desc: "O que muda com criança.", bullets: ["Praia ideal Klong Chao", "Resorts com berço/kids club", "Atividades seguras", "Posto de saúde + farmácia", "O que NÃO fazer"] },
    { title: "Kood × Mak × Chang", desc: "Tabela final de decisão.", bullets: ["Tamanho e movimento", "Perfil e preço médio", "Praias destaque", "Snorkel direto da praia", "Veredito por perfil"] },
    { title: "Roteiros 4, 5 e 7 dias", desc: "Pra casal, lua de mel, isolamento.", bullets: ["4 dias express", "5 dias clássico", "7 dias slow", "Combinando com Mak (2 ilhas)", "Combinando com Bangkok/Camboja"] },
  ],
  bonuses: [
    { title: "Mapa Google offline da ilha", desc: "7 praias, resorts, snorkels, restaurantes, vila Ao Salat — pra usar sem internet.", value: "R$ 87" },
    { title: "Comparativo de 12 resorts em PDF", desc: "12 resorts lado a lado: praia, estrutura, preço médio, veredito.", value: "R$ 87" },
    { title: "Tabela visibilidade dos 6 meses úteis", desc: "Visibilidade em metros, mês a mês, por ponto de snorkel/dive.", value: "R$ 57" },
    { title: "Mapa scooter com tempos entre praias", desc: "Tempos reais minuto a minuto + loop completo 60km.", value: "R$ 47" },
    { title: "Roteiro Bangkok → Kood em 4h", desc: "Voo + speedboat com horário e operadora, em 1 PDF.", value: "R$ 47" },
    { title: "Booking timeline (cartão único)", desc: "Quando reservar por janela — dez/fev/mar/nov/abr/mai.", value: "R$ 37" },
    { title: "Mês ideal por perfil (checklist)", desc: "Cartão único: qual mês pra você (lua de mel, família, mergulho, mochileiro).", value: "R$ 37" },
    { title: "Lista do que NÃO fazer", desc: "Os 6 tours/atrações que custam caro e decepcionam.", value: "R$ 47" },
    { title: "Comparativo Kood × Mak × Chang", desc: "Tabela única pra decidir entre as 3 ilhas do leste.", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Patrícia e Henrique Falcão", city: "São Paulo, SP", text: "Aniversário de 10 anos de casamento. Reservamos boutique em Klong Chao por R$ 920 a diária pelo guia. Lookbook de revista — sem o preço de revista. Marido até pediu pra estender 2 dias." },
    { name: "Marcelo Tomé", city: "Curitiba, PR", text: "Cheguei em Kood pela rota errada (ônibus + ferry, 14h). Na volta segui o guia: voo + speedboat, 4h. A diferença é uma viagem inteira. Errei feio na ida." },
    { name: "Cristiane Lobo", city: "Belo Horizonte, MG", text: "Kayak no rio Klong Chao seguindo o guia. Manguezal absoluto, 0 pessoas, peixe-arquearch nadando ao lado. Foi a hora mais zen da minha vida." },
    { name: "Diego e Marina Aguiar", city: "Porto Alegre, RS", text: "Lua de mel. Soneva era o nosso sonho — mas o guia mostrou alternativa de R$ 1.100 a diária com praia mais bonita. Fomos no alternativo, economizamos R$ 16.000 em 7 noites. Sem arrependimento." },
    { name: "Fernanda Castelar", city: "Recife, PE", text: "Snorkel grátis em Klong Yai Kee saindo da praia. Coral vivo, peixe colorido. O tour pago com 20 pessoas seria 1.500 baht. Foi grátis pelo guia. Insano." },
    { name: "Vinícius Cabral", city: "Florianópolis, SC", text: "Aluguei scooter e rodei as 7 praias em 1 dia. Sem o guia eu teria ficado no resort e visto 1. Kood é pra rodar. O loop tá no PDF, é só seguir." },
  ],
  faqs: [
    { q: "Kood é só pra rico?", a: "Não. Tem boutique de R$ 350-600 a diária. Mas não tem mochileiro de R$ 80." },
    { q: "Como chegar?", a: "Voo Bangkok → Trat (1h) + speedboat (45 min). Total 4h. Guia detalha." },
    { q: "Quantos dias?", a: "Mínimo 4. Ideal 5-7 com slow travel." },
    { q: "Quando ir?", a: "Nov-abr. Fora disso, monção fecha tudo." },
    { q: "Família com criança?", a: "Sim, em resort boutique família. Mas não é destino infantil — é casal/luxo discreto." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Kood é o luxo que não precisa de Maldivas — nem do preço delas",
    subtitle: "Por R$ 67 você compra a rota inteligente, os resorts que valem e as 7 praias. O segredo da Tailândia premium do leste em um único PDF.",
  },
});


const yao = make(ilhasMeta[9], {
  bgGradient: "from-emerald-950 via-background to-stone-950",
  seoTitle: "Guia de Koh Yao — Slow travel entre Phuket e Krabi sem perder tempo",
  seoDescription: "O guia honesto de Koh Yao Noi & Yai pra brasileiro: bangalôs eco, kayak no manguezal, zero balada e como combinar com Phuket ou Krabi em 1-2 dias.",
  heroTitle: "Koh Yao: a 30 min",
  heroHighlight: "de Phuket, em outro país",
  heroSubtitle: "Yao Noi e Yao Yai são duas ilhas vizinhas entre Phuket e Krabi. Bangalô eco, búfalo na estrada, ferry sem turistada, pescador que ainda pesca. Quem coloca 2 dias delas no meio do roteiro Phuket-Krabi muda a memória da viagem inteira.",
  heroWarning: "Yao Yai é maior e mais bruta. Yao Noi é menor, mais turística (no nível Yao). 90% dos brasileiros confundem as duas. O guia separa o que é cada uma.",
  pains: [
    { title: "Foi pra Yao achando que era 1 ilha só", desc: "Yao Noi e Yao Yai são duas. Ferry diferente, perfil diferente, hospedagem diferente. Quem chuta perde meio dia." },
    { title: "Pegou ferry do pier errado em Phuket", desc: "São 2 piers que vão pra Yao (Bang Rong e Ao Po). Cada um tem horário e destino diferente. Sem o guia, você dorme em outra ilha." },
    { title: "Reservou bangalô \"eco\" caindo aos pedaços", desc: "Booking mostra 12 \"eco resorts\" em Yao Noi — 4 são reais, 8 são marketing. O guia testou os 12 e separa." },
    { title: "Não alugou scooter e ficou preso em 1 praia", desc: "Yao é feita pra rodar — manguezal, vila de pescador, mirante. Sem scooter você vê 10% da ilha." },
    { title: "Foi sem kayak e perdeu o manguezal de Klong Mu", desc: "Kayak por túneis de manguezal no nascer do sol é uma das 3 melhores experiências do Andaman. Quem não faz, sai sem ver Yao de verdade." },
    { title: "Esperou \"balada\" e achou que ilha era \"morta\"", desc: "Yao não tem balada e essa é a vantagem. Quem vai esperando agito sai decepcionado. Quem vai esperando paz sai apaixonado." },
  ],
  features: [
    { title: "Yao Noi vs. Yao Yai", desc: "Decodificação completa das 2 ilhas — qual escolher por perfil." },
    { title: "Ferry sem erro", desc: "Os 2 piers de Phuket, os 1 de Krabi, horário por ilha de destino." },
    { title: "Kayak no manguezal de Klong Mu", desc: "Como, quando, com qual operadora — a experiência número 1 de Yao." },
  ],
  comparison: {
    theirs: [
      "Foi pra \"Yao\" achando que era 1 ilha",
      "Pier errado em Phuket, perdeu o ferry",
      "Bangalô \"eco\" caindo aos pedaços",
      "Preso na praia do hotel",
      "Sem kayak, perdeu Klong Mu",
      "Achou que ilha era morta sem balada",
    ],
    ours: [
      "Noi ou Yai escolhida pelo seu perfil",
      "Pier certo + horário do ferry",
      "Os 4 bangalôs eco reais (não marketing)",
      "Scooter loop pelas vilas e mirantes",
      "Kayak no manguezal ao nascer do sol",
      "Yao no ritmo que ela merece — silêncio",
    ],
  },
  authority: {
    title: "4 dias entre Yao Noi e Yao Yai",
    paragraphs: [
      "Dormi 2 noites em Yao Noi e 2 em Yao Yai pra comparar pessoalmente. Aluguei scooter nas 2 ilhas. Fiz kayak no manguezal de Klong Mu ao nascer do sol e ao pôr do sol. E peguei os 2 piers de Phuket pra te dizer qual vale.",
      "Yao é pouco coberto em PT — esse guia é o atalho de quem testou as duas.",
    ],
    bullets: ["4 dias nas 2 ilhas", "2 noites em cada", "Kayak ao nascer e pôr do sol", "Scooter loop nas duas", "2 piers de Phuket testados"],
  },
  modules: [
    { title: "Yao Noi vs. Yao Yai", desc: "Perfil real de cada uma.", bullets: ["Yao Noi (menor, mais turística)", "Yao Yai (maior, mais bruta)", "Qual escolher por estilo", "Pode-se fazer as 2?", "Combinar com Phuket-Krabi"] },
    { title: "Ferry e logística", desc: "Os 3 piers (Bang Rong, Ao Po, Krabi).", bullets: ["Pier por ilha de destino", "Horários reais por temporada", "Speedboat vs. longtail", "Preço médio", "Como chegar de Phuket airport"] },
    { title: "Hospedagem por perfil", desc: "Eco real, boutique, budget.", bullets: ["4 eco resorts reais", "Boutique R$ 280-600", "Budget R$ 120-220", "Premium R$ 1.000+", "Os 8 'eco' que NÃO são"] },
    { title: "Atividades", desc: "Kayak, scooter loop, snorkel, mirante.", bullets: ["Kayak Klong Mu ao nascer do sol", "Scooter loop completo", "Snorkel em Koh Hong", "Mirante de Yao Noi", "Búfalos na estrada (sério)"] },
    { title: "Roteiros 2, 3 e 4 dias", desc: "Como encaixar no roteiro Phuket-Krabi.", bullets: ["2 dias express (entre Phuket e Krabi)", "3 dias slow", "4 dias completo", "Combinando com Hong Islands", "Day-trip de Phuket"] },
  ],
  bonuses: [
    { title: "Mapa Google das 2 ilhas", desc: "Praias, piers, bangalôs e mirantes — offline.", value: "R$ 87" },
    { title: "Tabela de ferries por pier", desc: "3 piers, horário por temporada, qual ilha cada um atende.", value: "R$ 57" },
    { title: "Lista de bangalôs eco reais", desc: "Os 4 que cumprem + os 8 falsos.", value: "R$ 67" },
    { title: "Roteiro kayak Klong Mu", desc: "Operadora, horário, ponto de partida em PDF.", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Carolina e Felipe Sotero", city: "São Paulo, SP", text: "Estávamos fazendo Phuket → Krabi e o guia sugeriu 2 noites em Yao Noi no meio. Foi a melhor parte da Tailândia inteira — bangalô eco real (R$ 320 a diária), kayak no manguezal, búfalo passando na frente." },
    { name: "Renato Schmidt", city: "Curitiba, PR", text: "Pier errado em Phuket. Cheguei em Bang Rong achando que era Ao Po — perdi 2h. Aprendi do jeito difícil. Se eu tivesse lido o capítulo de ferry antes, não teria perdido a manhã." },
    { name: "Mariana Carvalho", city: "Belo Horizonte, MG", text: "Kayak no Klong Mu ao nascer do sol seguindo o guia. Sozinha entre os túneis de manguezal, sol amarelo, peixe pulando. Voltei pro bangalô e chorei. Yao é OUTRO nível." },
    { name: "Pedro e Letícia Vilas-Boas", city: "Recife, PE", text: "Reservei em Yao Yai pelo guia (não Yao Noi). Praia deserta, vila de pescador, 3 restaurantes no total. Foi um experimento — voltei sabendo que viver tailandês é assim." },
    { name: "Bruna Cavalcanti", city: "Porto Alegre, RS", text: "Aluguei scooter R$ 25 o dia e rodei Yao Noi inteira em 3h. Subi o mirante de Yao Noi, vi as ilhas de Phang Nga em pé. Sem o guia eu nem saberia que existia o mirante." },
    { name: "Ricardo Almeida Lopes", city: "Florianópolis, SC", text: "Pesquisei eco resort em Yao Noi no Booking — 12 opções. Pelo guia, 4 são reais. Reservei o 'Suntisook' (R$ 280 a diária com café) — bangalô de madeira, pé na areia, dono te ensina cozinhar. Surreal." },
  ],
  faqs: [
    { q: "Yao Noi ou Yao Yai?", a: "Noi é menor, mais turística (no nível Yao), com mais opção. Yai é maior, mais bruta. Pra primeira vez: Noi." },
    { q: "Como chegar?", a: "Ferry de Phuket (2 piers) ou Krabi (1 pier). 45-90 min. Tabela no guia." },
    { q: "Quantos dias?", a: "Mínimo 2 (no meio do roteiro Phuket-Krabi). Ideal 3-4." },
    { q: "Família com criança?", a: "Sim, mas é destino bem rústico. Sem balada, sem opções de comida internacional." },
    { q: "Tem balada?", a: "Não. E é a vantagem." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Yao é 2 dias que mudam a memória da sua viagem na Tailândia",
    subtitle: "Por R$ 67 você compra o atalho pra Yao real — bangalô eco verdadeiro, kayak no manguezal e a vila de pescador que vai virar a sua história favorita.",
  },
});


const mak = make(ilhasMeta[10], {
  bgGradient: "from-amber-950 via-background to-emerald-950",
  seoTitle: "Guia de Koh Mak — A ilha-família segura e tranquila do leste",
  seoDescription: "O guia honesto de Koh Mak pra brasileiro: pequena, plana, segura pra bike com criança, com os melhores day-trips do leste tailandês.",
  heroTitle: "Koh Mak: a ilha",
  heroHighlight: "feita pra família",
  heroSubtitle: "Mak é a ilha mais discreta do leste — pequena, plana, segura pra bicicleta com criança e com 2 day-trips de tirar o fôlego (Koh Kham e Koh Rang). Quem quer Tailândia sem perrengue de balsa, sem estrada perigosa e sem multidão: Mak é a resposta.",
  heroWarning: "Mak FECHA em jun-out (monção). Quem vai fora da janela nov-abr pega ilha vazia, restaurante fechado e mar fechado. Confirma a data antes de comprar passagem.",
  pains: [
    { title: "Foi pra Mak em julho com tudo fechado", desc: "Monção fecha 60% dos restaurantes e cancela ferry da Camboja. Mak é nov-abr — janela fora disso é apostar." },
    { title: "Reservou hotel no lado errado da ilha", desc: "Ao Suan Yai (sul) é família/calmo. Ao Khao (oeste) é mais agito. Misturar com criança = trauma." },
    { title: "Não alugou bicicleta e perdeu o ponto de Mak", desc: "Mak é 16 km² plana. Bicicleta com criança no banquinho funciona. Não usar é perder 80% da experiência." },
    { title: "Ignorou Koh Kham e Koh Rang", desc: "Koh Kham (40 min de longtail) tem a melhor praia da região. Koh Rang tem o melhor snorkel. Quem fica só em Mak perde os 2 highlights." },
    { title: "Pagou day-trip turístico em grupo de 20", desc: "Tem operadora local pequena com 6 pessoas/grupo, mesmo preço. O guia tem nome e telefone." },
    { title: "Foi pra resort \"premium\" que era padrão", desc: "Mak tem 2 resorts realmente premium e 8 que se vendem como tal. Diferença de R$ 600 a diária — guia separa." },
  ],
  features: [
    { title: "Ilha decodificada por região", desc: "Ao Khao, Ao Suan Yai, Ao Kao, Ao Talup — qual escolher por perfil." },
    { title: "Day-trip Koh Kham + Koh Rang", desc: "Operadora local (não grupão), horário, o que levar." },
    { title: "Hospedagem família-friendly", desc: "12 hotéis testados, com cama extra, café família e mar raso." },
  ],
  comparison: {
    theirs: [
      "Foi em julho com 60% da ilha fechada",
      "Hotel no lado errado pra família",
      "Sem bike, perdeu 80% da ilha",
      "Ignorou Koh Kham e Koh Rang",
      "Day-trip turístico em grupo de 20",
      "Resort 'premium' que era padrão",
    ],
    ours: [
      "Janela ideal (nov-abr) com tudo aberto",
      "Ao Suan Yai pra família, Ao Khao pra agito",
      "Bike loop pela ilha inteira",
      "Day-trip pras 2 melhores ilhas vizinhas",
      "Operadora local com 6 pessoas/grupo",
      "Os 2 resorts realmente premium",
    ],
  },
  authority: {
    title: "5 dias em Koh Mak com bike e 2 day-trips",
    paragraphs: [
      "Dormi em 2 lados da ilha (Ao Suan Yai e Ao Khao), rodei tudo de bike, fiz Koh Kham e Koh Rang com a operadora local que indico. Testei 4 hotéis. Comi nos 6 restaurantes que continuam abertos na baixa.",
      "Mak é a ilha menos coberta em PT — esse guia é o primeiro mapa decente em português.",
    ],
    bullets: ["5 dias na ilha", "2 lados dormidos", "Koh Kham + Koh Rang feitos", "Bike loop completo", "4 hotéis testados"],
  },
  modules: [
    { title: "A ilha por região", desc: "Ao Khao, Ao Suan Yai, Ao Kao, Ao Talup.", bullets: ["Ao Suan Yai (família)", "Ao Khao (agito Mak-nível)", "Ao Kao (deserta)", "Ao Talup (sunset)", "Vila central (mercados)"] },
    { title: "Koh Kham + Koh Rang day-trip", desc: "As 2 melhores ilhas vizinhas.", bullets: ["Koh Kham (praia branca)", "Koh Rang (snorkel)", "Operadora local recomendada", "O que levar", "Horário ideal"] },
    { title: "Hospedagem família e casal", desc: "12 hotéis testados.", bullets: ["Premium real (2 hotéis)", "Boutique R$ 350-600", "Budget R$ 150-280", "Bangalô família", "Hotel pet-friendly"] },
    { title: "Bike loop e atividades", desc: "Como rodar Mak inteira em 1 dia.", bullets: ["Loop completo 16 km", "Bike com cadeirinha pra criança", "Kayak grátis em alguns hotéis", "Snorkel direto da praia", "Spa local que vale"] },
    { title: "Como chegar e combinar", desc: "De Bangkok, de Chang, de Camboja.", bullets: ["Ferry de Trat (Laem Ngop)", "Speedboat de Koh Chang", "Combinar com Chang/Kood", "Fronteira com Camboja", "Voo Bangkok → Trat"] },
  ],
  bonuses: [
    { title: "Mapa Google offline da ilha", desc: "Praias, hotéis, restaurantes, bike loop — pra usar sem internet.", value: "R$ 87" },
    { title: "Roteiro Koh Kham + Koh Rang", desc: "Operadora, horário, custo, em PDF de 1 página.", value: "R$ 67" },
    { title: "Lista de hotéis família-friendly", desc: "12 hotéis testados com cama extra e mar raso.", value: "R$ 67" },
    { title: "Calendário climático Mak", desc: "Quando ir, o que abre/fecha em cada mês.", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Roberta e Marcos Cavalheiro", city: "São Paulo, SP", text: "Família com 2 filhos (4 e 7). Reservei em Ao Suan Yai pelo guia. Bangalô família R$ 380 a diária, mar raso até 50m, sem onda, restaurante na praia. Foi a viagem mais tranquila que já fizemos." },
    { name: "Júnior Albuquerque", city: "Curitiba, PR", text: "Aluguei bike por R$ 18 o dia e rodei a ilha inteira em 5h. Fui pro Ao Talup ver o pôr do sol. Sozinho na praia, sol amarelo, água laranja. Mak é cinema." },
    { name: "Sabrina Tedesco", city: "Belo Horizonte, MG", text: "Koh Kham pelo guia — operadora local com 6 pessoas só. Praia BRANCA, areia de farinha, água translúcida. Meu colega pagou tour 'grande' em outra agência, 22 pessoas, fila pra foto. Eu paguei o mesmo." },
    { name: "Fernando e Maria Antonia", city: "Recife, PE", text: "Lua de mel discreta. Mak foi a escolha mais não-óbvia da vida — e a mais certa. 7 dias, R$ 540 a diária num boutique, sem agito, sem turistada. Voltamos casados em paz." },
    { name: "Daniel Rocha Costa", city: "Florianópolis, SC", text: "Fui em agosto sem ler janela. 4 restaurantes funcionando, ferry irregular, chuva todo dia. Erro meu — o guia avisa. Da próxima vou nov-mar." },
    { name: "Carla Bornhausen", city: "Porto Alegre, RS", text: "Snorkel direto da praia do Ao Khao seguindo o guia. Coral logo à entrada, peixe colorido. Sem barco, sem operadora, sem custo. O guia transformou um dia comum num dos melhores." },
  ],
  faqs: [
    { q: "Mak é boa pra família?", a: "É a melhor pra família nesta lista. Pequena, plana, segura, mar raso, sem balada." },
    { q: "Quantos dias?", a: "Mínimo 3. Ideal 5 com day-trip Kham + Rang." },
    { q: "Quando ir?", a: "Nov-abr. Fora disso, monção fecha tudo." },
    { q: "Posso combinar com Chang ou Kood?", a: "Sim — Mak fica entre as duas. Roteiro 3-ilhas no guia." },
    { q: "Tem balada?", a: "Não. Mak é silêncio + família + casal calmo." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Mak é a ilha que faz família falar 'queria ter ficado mais'",
    subtitle: "Por R$ 67 você compra o atalho pra ilha-família mais subestimada do leste — sem perrengue, sem balada, com bike e com o melhor snorkel da região.",
  },
});


// ============================================================================
// TIER 4
// ============================================================================

const larn = make(ilhasMeta[11], {
  bgGradient: "from-sky-950 via-background to-amber-950",
  seoTitle: "Guia de Koh Larn — Day-trip honesto de Pattaya sem golpe",
  seoDescription: "O guia honesto de Koh Larn pra brasileiro: ferry certo, praias que escapam da excursão, almoço sem inflação e como voltar sem fila pra Pattaya.",
  heroTitle: "Koh Larn sem virar",
  heroHighlight: "excursão de massa",
  heroSubtitle: "Larn é o day-trip clássico de Pattaya — e o mais mal feito da Tailândia. 95% dos brasileiros caem na excursão padrão, vão pra Tien Beach lotada, comem por R$ 100 e voltam achando que foi armadilha. Foi. Mas é evitável.",
  heroWarning: "Existem 2 ferries pra Larn: o público (30 baht) e o do golpe (300+). 90% dos brasileiros pagam o do golpe sem saber. O guia mostra qual pegar e onde encontrar.",
  pains: [
    { title: "Pegou ferry no Bali Hai pela operadora errada", desc: "Ferry público sai do mesmo pier, custa 30 baht (R$ 5) por pessoa. O 'pacote' cobra 300-500 baht pelo mesmo trajeto. Quem não sabe, paga o golpe." },
    { title: "Foi pra Tien Beach achando que era 'a melhor'", desc: "É a praia que TODA excursão joga turista. Tem 6 praias em Larn — 4 escapam do circuito. O guia mostra as 4." },
    { title: "Almoçou na barraca da Tien por 600 baht", desc: "R$ 100 num pad thai congelado com cerveja morna. Tem vila de pescador a 5 min com a mesma comida por 100 baht (R$ 16)." },
    { title: "Pegou ferry de volta às 17h junto com 2.000 pessoas", desc: "Fila de 1h30, sol forte, criança chorando, banheiro fechado. Tem horário esperto de voltar — 14h ou 19h. Guia mostra." },
    { title: "Alugou banana boat por 800 baht", desc: "Preço real de tailandês: 200. Você é cobrado 4x sem saber. O guia traz tabela." },
    { title: "Saiu achando que Larn 'é uma cilada'", desc: "Não é. É um day-trip que vira ótimo quando feito direito. O guia faz com que dê certo." },
  ],
  features: [
    { title: "2 ferries: o público vs. o golpe", desc: "Onde está cada um, horário e como reconhecer pra não cair." },
    { title: "6 praias decodificadas", desc: "Tien, Tawaen, Samae, Nual, Tonglang, Tayai — quais escapam da excursão." },
    { title: "Horário esperto de ida e volta", desc: "Os horários em que o ferry tem fila zero — e os que devem ser evitados." },
  ],
  comparison: {
    theirs: [
      "Ferry 'pacote' por 300 baht",
      "Tien Beach com 5 mil pessoas",
      "Almoço por 600 baht na praia",
      "Banana boat por 800 baht",
      "Volta às 17h com fila de 1h30",
      "Voltou achando que Larn era cilada",
    ],
    ours: [
      "Ferry público por 30 baht",
      "Praias do leste sem excursão",
      "Almoço por 100 baht na vila pescador",
      "Banana boat por 200 baht",
      "Volta às 14h ou 19h sem fila",
      "Voltou achando que foi o melhor dia",
    ],
  },
  authority: {
    title: "3 dias rodando Larn como morador de Pattaya faz",
    paragraphs: [
      "Fiz Larn 4 vezes em viagens diferentes — pelo ferry público, pelo pacote, em alta e baixa temporada. Comi nos restaurantes da praia e da vila. Aluguei scooter na ilha pra mapear as 6 praias.",
      "Larn é o day-trip mais fácil de errar e mais simples de acertar — se você tem o mapa certo.",
    ],
    bullets: ["4 visitas em temporadas diferentes", "6 praias mapeadas", "2 ferries comparados", "Scooter loop na ilha", "Vila de pescador mapeada"],
  },
  modules: [
    { title: "Como chegar (sem pagar golpe)", desc: "Os 2 ferries — público vs. pacote.", bullets: ["Ferry público 30 baht", "Pier Bali Hai exato", "Horário ida e volta", "Speedboat (quando vale)", "Como evitar o pacote do golpe"] },
    { title: "6 praias decodificadas", desc: "Quais escapam da excursão.", bullets: ["Tien (evitar)", "Tawaen (ok, central)", "Samae (família)", "Nual (deserta)", "Tonglang (snorkel)"] },
    { title: "Onde comer (sem inflação)", desc: "Vila vs. praia.", bullets: ["Vila Naa Baan", "Pad thai R$ 16", "Marisco fresco no pier", "Café local", "O que NÃO comer na praia"] },
    { title: "Atividades além de praia", desc: "Snorkel, banana boat, mirante.", bullets: ["Snorkel grátis em Tonglang", "Banana boat por 200 baht", "Mirante 360°", "Templo no topo", "Scooter na ilha"] },
    { title: "Horário esperto", desc: "Como evitar a fila brutal da volta.", bullets: ["Ida 8h ou 11h", "Volta 14h ou 19h", "Evitar 16h-17h", "Cronograma 1 dia", "Cronograma meio dia"] },
  ],
  bonuses: [
    { title: "Mapa Google da ilha", desc: "6 praias, vila, ferries, snorkel — offline.", value: "R$ 67" },
    { title: "Tabela de preços tailandês vs. turista", desc: "Banana boat, lanche, transporte — preço real de cada coisa.", value: "R$ 47" },
    { title: "Cronograma 1 dia em Larn", desc: "Hora a hora pra você não enrolar.", value: "R$ 47" },
    { title: "Lista de restaurantes na vila", desc: "Onde tailandês almoça em Larn — com mapa.", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Luiz Felipe Brandão", city: "São Paulo, SP", text: "Tinha contratado pacote Larn por R$ 280. Cancelei, fui pelo ferry público (R$ 5), praia Nual deserta, almoço por R$ 16. Mesmo dia, R$ 259 a menos do que ia gastar." },
    { name: "Camila Tudo Esposito", city: "Curitiba, PR", text: "Família com 1 filho (5). Pula Tien e foi pra Samae conforme o guia. Mar raso, sem ondas, banheiro de bar privado. Meu filho dormiu na areia, eu li livro. Day-trip perfeito." },
    { name: "Rogério Tanaka", city: "Belo Horizonte, MG", text: "Voltei às 14h conforme o guia, sem fila. Meu amigo voltou às 17h pelo pacote — 1h45 de fila no sol. A diferença foi UM detalhe que o guia avisou." },
    { name: "Bianca Vasconcelos", city: "Recife, PE", text: "Almocei na vila Naa Baan por 95 baht (R$ 15) prato + cerveja. O restaurante de Tien pedia 650 (R$ 105). Diferença na conta = guia inteiro pago." },
    { name: "Marcelo Henriques", city: "Porto Alegre, RS", text: "Snorkel grátis em Tonglang seguindo o guia. Coral à entrada, peixe colorido. Sem operadora, sem tour, sem custo. Foi o melhor snorkel da viagem inteira pela Tailândia." },
    { name: "Fernanda Cinco", city: "Florianópolis, SC", text: "Pacote 'all-inclusive' me cobrava 800 baht banana boat. Aluguei direto por 200 com o vendedor local que o guia indica. Eu pago por essas dicas." },
  ],
  faqs: [
    { q: "Vale a pena ir em Larn?", a: "Sim, pra day-trip ou meia-noite (se você está em Pattaya). Não pra dormir — 1 noite no máximo." },
    { q: "Posso ir sem operadora?", a: "Sim — é mais barato e mais flexível. Guia ensina." },
    { q: "Crianças?", a: "Sim, em Samae ou Tawaen. Praia rasa, sem onda." },
    { q: "Quantas horas?", a: "Mínimo 5h (ida + 4h ilha + volta). Ideal 7h." },
    { q: "Quando ir?", a: "Nov-mar é alta. Abr-out é OK (sem chuva forte)." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Larn é o day-trip mais fácil de transformar — basta saber o ferry e a praia",
    subtitle: "Por R$ 67 você compra o atalho que economiza R$ 250 em ferry, R$ 80 em almoço e 1h30 de fila. Day-trip honesto, sem cilada, sem grupão.",
  },
});


const similan = make(ilhasMeta[12], {
  bgGradient: "from-blue-950 via-background to-cyan-950",
  seoTitle: "Guia das Ilhas Similan — Mergulho e snorkel premium sem cilada",
  seoDescription: "O guia honesto das Ilhas Similan pra brasileiro: janela aberta out-mai, melhores liveaboards, day-trip que vale e os erros que destroem o passeio.",
  heroTitle: "Similan sem cair em",
  heroHighlight: "barco superlotado",
  heroSubtitle: "Similan tem o melhor mergulho da Tailândia e a janela mais curta — abre só de out a mai e fecha o resto do ano. Day-trip cabe em 1 dia. Liveaboard é o sonho. Quem confunde os dois ou pega operadora errada perde o que viu vir pela frente do Andaman.",
  heroWarning: "Similan FECHA 16/mai a 14/out. Quem reserva nessas datas perde dinheiro — Parque Nacional fechado, sem ferry, sem mergulho. Confirma data antes de comprar passagem.",
  pains: [
    { title: "Reservou day-trip Similan no maior banner de Phuket", desc: "Operadoras grandes despejam 80 pessoas no mesmo recife. Tem 4 operadoras pequenas com 15-25 pessoas. Mesmo preço, experiência incomparável." },
    { title: "Foi de speedboat com 80 pessoas e enjoou o dia inteiro", desc: "São 3h de mar aberto. Speedboat com 80 pessoas em mar agitado é tortura. Operadora certa = barco menor + Dramamine." },
    { title: "Achou que liveaboard era 'caro demais' sem comparar", desc: "3 dias / 11 mergulhos liveaboard custa R$ 4.500. Day-trip 3x repete e custa R$ 1.800. Conta no papel: liveaboard vale." },
    { title: "Foi em 15 de maio achando que tava aberto", desc: "Fechou no dia 16. Perdeu R$ 800 do day-trip. Janela é out-mai com data exata — guia tem calendário." },
    { title: "Comprou snorkel com cilindro achando que era mergulho", desc: "Sem certificação você não desce. Snorkel é só superfície. Pra mergulhar Similan precisa Advanced (e o guia diz onde tirar Advanced em 2 dias)." },
    { title: "Ignorou Koh Bon e Koh Tachai (parte do parque)", desc: "Manta-ray sazonal e tubarão-baleia ocorrem em Bon e Tachai, não nas Similan principais. Tour completo precisa cobrir os 3." },
  ],
  features: [
    { title: "Day-trip vs. liveaboard — decisão clara", desc: "Critério objetivo + cálculo de custo pra escolher entre 1 dia e 3 dias." },
    { title: "Janela climática exata", desc: "Calendário oficial out-mai com datas que o parque abre e fecha." },
    { title: "4 operadoras pequenas testadas", desc: "Day-trip e liveaboard com 15-25 pessoas (não 80). Lista de quem cumpre." },
  ],
  comparison: {
    theirs: [
      "Day-trip do banner mais bonito de Phuket",
      "Speedboat com 80 pessoas e enjoo",
      "Achou liveaboard 'caro' sem comparar",
      "Foi em 15 de maio sem checar fechamento",
      "Comprou snorkel pensando que era mergulho",
      "Ignorou Bon e Tachai (manta-ray)",
    ],
    ours: [
      "4 operadoras pequenas (15-25 pessoas)",
      "Barco menor + Dramamine recomendado",
      "Liveaboard a R$ 4.500 vs. 3 day-trips a R$ 1.800",
      "Calendário oficial com data exata",
      "Open Water + Advanced em 4 dias antes",
      "Tour com Bon + Tachai + manta-ray janela",
    ],
  },
  authority: {
    title: "Day-trip + Liveaboard 3 dias nas Similan",
    paragraphs: [
      "Fiz day-trip com 2 operadoras diferentes pra comparar e liveaboard de 3 dias / 11 mergulhos pra confirmar o que vale. Vi tubarão-baleia em Tachai e tartaruga gigante nas Similan principais. Documentei a janela exata de abertura e fechamento.",
      "Similan é o cartão postal do mergulho tailandês — e a operadora certa é a diferença entre experiência da vida e dia perdido em barco lotado.",
    ],
    bullets: ["Day-trip 2x (operadoras diferentes)", "Liveaboard 3 dias / 11 mergulhos", "Tubarão-baleia visto em Tachai", "Janela exata documentada", "Acidentes documentados (segurança)"],
  },
  modules: [
    { title: "Day-trip ou liveaboard?", desc: "Decisão clara com critério.", bullets: ["Day-trip (quando faz sentido)", "Liveaboard 3 dias", "Liveaboard 4-5 dias", "Custo lado a lado", "Quem deve cada um"] },
    { title: "Janela climática (data exata)", desc: "Calendário oficial out-mai.", bullets: ["Abertura oficial 15/out", "Fechamento oficial 15/mai", "Melhor janela (nov-mar)", "Mês a mês visibilidade", "Manta-ray e whale shark sazonais"] },
    { title: "Operadoras: 4 testadas", desc: "As pequenas que cumprem.", bullets: ["Wicked Diving", "Big Blue Diving", "Sea Bees", "Phuket Scuba Club", "Os 5 grandes que despejam 80 pessoas"] },
    { title: "Pontos de mergulho", desc: "Os top 10 das Similan + Bon + Tachai.", bullets: ["Christmas Point", "Elephant Head", "Boulder City", "Koh Bon (manta-ray)", "Koh Tachai (whale shark)"] },
    { title: "Preparação", desc: "Certificação e logística.", bullets: ["Open Water → Advanced em Koh Tao", "Aluguel de equipamento", "Hotel em Khao Lak (base)", "Transfer Phuket → Khao Lak", "O que levar no liveaboard"] },
  ],
  bonuses: [
    { title: "Calendário Similan 24 meses", desc: "Datas de abertura/fechamento + visibilidade por mês.", value: "R$ 67" },
    { title: "Comparativo das 4 operadoras", desc: "Tamanho do barco, preço, pontos visitados — lado a lado.", value: "R$ 87" },
    { title: "Tabela day-trip vs. liveaboard", desc: "Custo, mergulhos, conforto — pra decidir o que vale pra você.", value: "R$ 67" },
    { title: "Lista de pontos de mergulho", desc: "Top 10 das Similan + Bon + Tachai com nível de dificuldade.", value: "R$ 57" },
  ],
  testimonials: [
    { name: "Roberto Schultz", city: "São Paulo, SP", text: "Tinha reservado day-trip Similan numa operadora grande de Phuket (75 pessoas no barco). Cancelei pelo guia e fui na Wicked Diving com 16 pessoas. Mesmo preço (R$ 580), experiência incomparável. Vi tartaruga gigante." },
    { name: "Vinícius Carvalho Neto", city: "Belo Horizonte, MG", text: "Fiz liveaboard de 3 dias em janeiro — 11 mergulhos, manta-ray no Koh Bon, whale shark no Tachai. R$ 4.450 com tudo incluso. A maior experiência de mergulho da minha vida. Sem o guia eu nem teria considerado." },
    { name: "Bárbara Tinoco", city: "Curitiba, PR", text: "Tirei Open Water em Koh Tao 2 semanas antes (também guia da Lovable) → Advanced em 2 dias → liveaboard Similan. O guia até costurou o roteiro de certificação. Plano completo." },
    { name: "Felipe Andrade Cabral", city: "Recife, PE", text: "Quase fui em 17 de maio. O guia tinha calendário oficial: fechou no 15. Adiei pra novembro do ano seguinte. Salvou R$ 800 de day-trip que eu nem teria feito." },
    { name: "Marina Tieppo", city: "Florianópolis, SC", text: "Speedboat com 18 pessoas (operadora pequena). Tomei Dramamine 1h antes conforme o guia. Zero enjoo nas 3h de mar aberto. Meu colega numa operadora grande passou 1 dia inteiro vomitando." },
    { name: "Diego Pacheco", city: "Porto Alegre, RS", text: "Fiquei base em Khao Lak (não Phuket) seguindo o guia. Cortou 2h de transfer todo dia. Hotel pé na praia por R$ 220 a diária. Quem fica em Phuket pra ir Similan paga caro em transfer." },
  ],
  faqs: [
    { q: "Quando posso ir?", a: "Out (15/out) a mai (15/mai). Resto do ano parque fechado." },
    { q: "Day-trip ou liveaboard?", a: "Day-trip pra ver superficial. Liveaboard pra mergulho sério. Critério no guia." },
    { q: "Preciso ter certificação?", a: "Pra mergulhar sim — Advanced recomendado. Pra snorkel, não." },
    { q: "Quanto custa?", a: "Day-trip R$ 500-700. Liveaboard 3 dias R$ 4.000-5.000." },
    { q: "De onde sair?", a: "Khao Lak (melhor) ou Phuket (cansativo, mas possível)." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Similan abre 7 meses por ano — e fecha pra quem chegar sem plano",
    subtitle: "Por R$ 67 você compra a janela exata, as operadoras pequenas e a escolha entre day-trip e liveaboard. O melhor mergulho da Tailândia merece o melhor preparo.",
  },
});


const racha = make(ilhasMeta[13], {
  bgGradient: "from-cyan-950 via-background to-emerald-950",
  seoTitle: "Guia de Koh Racha — Day-trip premium de Phuket sem grupão",
  seoDescription: "O guia honesto de Koh Racha (Raya) pra brasileiro: Yai ou Noi, qual tour pegar, qual beach club vale e como evitar o circuito de excursão grande.",
  heroTitle: "Koh Racha sem virar",
  heroHighlight: "tour de massa",
  heroSubtitle: "Racha é o day-trip premium de Phuket — água azul-piscina, areia branca e a 35 min de Chalong. Mas a ilha tem 2 (Yai e Noi), 3 beach clubs, 4 operadoras de tour e 1 armadilha clássica de barco cheio. Este guia te coloca no lugar certo, na hora certa, pelo preço certo.",
  heroWarning: "90% dos brasileiros que vão pra Racha vão pelo pacote 'Coral + Racha' de Chalong — barco com 60 pessoas, 40 minutos na ilha, almoço congelado. Pelo guia: barco pequeno, 4 horas em Yai, almoço no beach club. Mesma faixa de preço.",
  pains: [
    { title: "Reservou 'Coral + Racha' achando que era a melhor combinação", desc: "É o pacote mais vendido (e o pior). 60 pessoas, 40 min em Racha, almoço congelado. Operadora pequena vai SÓ Racha por 4h." },
    { title: "Foi pra Racha Yai ou Noi sem saber a diferença", desc: "Yai é maior, tem beach club, mais gente. Noi é menor, mais selvagem, sem estrutura. Misturar = expectativa errada." },
    { title: "Caiu no beach club que cobra ingresso de R$ 350", desc: "Tem beach club que cobra R$ 350 a entrada — sem diária ali. Tem outro que é gratuito + paga só pelo consumo. Guia separa." },
    { title: "Pegou speedboat que pulou direto pra Coral", desc: "Saiu, foi pra Coral primeiro (com 200 pessoas), só sobrou tempo de 1h em Racha. Operadora certa vai direto." },
    { title: "Comeu no único restaurante da praia de Yai", desc: "R$ 90 num pad thai. Tem alternativa no beach club por 250 baht (R$ 40) com vista." },
    { title: "Não levou snorkel próprio", desc: "Aluguel na ilha é 300 baht. Trazer do Brasil ou comprar em Phuket por 200 baht resolve o resto da viagem." },
  ],
  features: [
    { title: "Yai vs. Noi: qual escolher", desc: "Perfil de cada ilha e quem deve evitar qual." },
    { title: "4 operadoras de tour testadas", desc: "Pacote grande vs. tour pequeno — preço, número de pessoas, tempo na ilha." },
    { title: "Beach clubs decodificados", desc: "Quanto custa cada um, qual cobra entrada, qual é gratuito, qual vale a diária." },
  ],
  comparison: {
    theirs: [
      "'Coral + Racha' com 60 pessoas",
      "40 min em Racha (tempo zero)",
      "Almoço congelado a bordo",
      "Beach club com R$ 350 de entrada",
      "Yai ou Noi 'tanto faz'",
      "Voltou achando que Racha era 'só ok'",
    ],
    ours: [
      "Operadora pequena SÓ Racha (15-25 pessoas)",
      "4 horas em Yai (tempo real)",
      "Almoço no beach club por R$ 40",
      "Beach club gratuito + consumo direto",
      "Yai pra estrutura, Noi pra deserta",
      "Voltou achando que foi o melhor day-trip",
    ],
  },
  authority: {
    title: "Racha visitada 3 vezes (em 3 tipos de tour)",
    paragraphs: [
      "Fiz Racha 3 vezes: pacote grande 'Coral + Racha' (pra documentar o erro), tour pequeno só Racha Yai (4h), e overnight em Yai dormindo no resort. Visitei os 3 beach clubs principais. Comparei almoço a bordo vs. almoço no beach club.",
      "Racha não é Phi Phi — é mais cara, mais discreta e mais bonita pra quem chega com plano. Esse guia é o plano.",
    ],
    bullets: ["3 visitas a Racha em modos diferentes", "Yai e Noi mapeadas", "3 beach clubs comparados", "4 operadoras testadas", "Overnight + day-trip cobertos"],
  },
  modules: [
    { title: "Yai vs. Noi", desc: "As 2 Rachas decodificadas.", bullets: ["Yai (maior, com estrutura)", "Noi (menor, mais selvagem)", "Qual escolher por perfil", "Como combinar as 2", "Quem deve evitar Noi"] },
    { title: "Tours: pacote vs. pequeno", desc: "4 operadoras testadas.", bullets: ["'Coral + Racha' (evitar)", "Tour pequeno só Racha", "Speedboat compartilhado", "Speedboat privado", "Como reservar barato"] },
    { title: "Beach clubs", desc: "Os 3 principais comparados.", bullets: ["Ban Raya Resort", "The Racha", "Beach club gratuito da praia", "Qual cobra entrada", "Qual vale a diária"] },
    { title: "Atividades além de praia", desc: "Snorkel, kayak, trilha.", bullets: ["Snorkel direto da praia (grátis)", "Kayak alugado", "Trilha pelo mirante", "Pôr do sol em Yai", "O que NÃO fazer"] },
    { title: "Overnight em Racha", desc: "Vale dormir? Hotel, custo, vantagem.", bullets: ["Quem deve dormir", "The Racha (premium)", "Ban Raya (médio)", "Como chegar de barco direto", "Manhã sem turista é cinema"] },
  ],
  bonuses: [
    { title: "Mapa Google de Yai e Noi", desc: "Praias, beach clubs, snorkel — offline.", value: "R$ 67" },
    { title: "Comparativo de 4 operadoras", desc: "Preço, número de pessoas, tempo na ilha — lado a lado.", value: "R$ 87" },
    { title: "Lista de beach clubs", desc: "Os 3 principais com entrada, consumo mínimo e veredito.", value: "R$ 67" },
    { title: "Roteiro day-trip ou overnight", desc: "PDF de 1 página com horário e opções.", value: "R$ 47" },
  ],
  testimonials: [
    { name: "Tatiane Lacerda", city: "São Paulo, SP", text: "Quase contratei o pacote 'Coral + Racha' por R$ 320. Vi no guia que era armadilha. Fui pelo Hey Beach tour SÓ Racha por R$ 380 — barco com 17 pessoas, 4h na praia, almoço no beach club. Diferença de mundo." },
    { name: "Ronaldo Pacheco", city: "Belo Horizonte, MG", text: "Fui dormir 1 noite em Yai pelo guia (Ban Raya por R$ 580 a diária). De manhã, antes dos tours chegarem, a praia tava com 6 pessoas. Era literalmente sonho. Sem o guia eu nem saberia que dava pra dormir." },
    { name: "Fernanda Vieira", city: "Curitiba, PR", text: "O snorkel direto da praia em Yai surpreendeu — vi 4 espécies de peixe colorido, coral vivo, em água rasa. Trouxe meu snorkel de casa conforme o guia (aluguel era 300 baht). Salvou R$ 50." },
    { name: "Lucas e Camila Rosso", city: "Recife, PE", text: "Beach club que ia entrar cobrava R$ 350 de entrada. Pelo guia, fomos no gratuito e gastamos R$ 180 só em consumo. Mesma vista, R$ 170 a menos." },
    { name: "Henrique Mafra", city: "Porto Alegre, RS", text: "Speedboat privado pelo guia (4 amigos) por R$ 280 cada. Saímos 8h, fomos direto, voltamos 16h. Sem grupão. Vale 100x o pacote 'todos incluídos'." },
    { name: "Bruna e Felipe Tavares", city: "Florianópolis, SC", text: "Lua de mel. Fizemos overnight em The Racha por R$ 1.450 a diária — o resort tem piscina infinita e a praia praticamente privada à noite. O guia confirmou que valia. Confirmou demais." },
  ],
  faqs: [
    { q: "Racha vale a pena saindo de Phuket?", a: "Sim — é o day-trip mais bonito da região. Mas só se for pelo tour certo (não 'Coral + Racha')." },
    { q: "Yai ou Noi?", a: "Pra primeira vez: Yai (mais estrutura). Pra busca por deserta: Noi (sem nada)." },
    { q: "Dá pra dormir?", a: "Sim — 2 resorts em Yai. Vale pra casal/lua de mel. Day-trip resolve pra resto." },
    { q: "Quanto custa o tour?", a: "Pacote ruim 300 baht. Tour pequeno 1.000-1.400. Privado 4.000-5.000." },
    { q: "Quando ir?", a: "Nov-abr ideal. Maio-out tem mar mais fechado." },
    { q: "Como recebo?", a: "Imediato após pagamento Cakto." },
    { q: "PIX?", a: "Sim, PIX ou cartão 12x." },
    { q: "Garantia?", a: "7 dias, sem perguntas." },
  ],
  finalCTA: {
    title: "Racha é o day-trip mais subestimado de Phuket — quando feito certo",
    subtitle: "Por R$ 67 você compra o filtro entre 'Coral + Racha grupão' e 'tour pequeno SÓ Racha'. A diferença é entre um dia ok e o melhor dia do roteiro inteiro.",
  },
});

// ============================================================================
// EXPORT
// ============================================================================

export const ilhas: Record<string, SalesContent> = {
  "phuket-tailandia": phuket,
  "koh-samui-tailandia": samui,
  "koh-phi-phi-tailandia": phiPhi,
  "koh-phangan-tailandia": phangan,
  "koh-tao-tailandia": tao,
  "koh-chang-tailandia": chang,
  "koh-lanta-tailandia": lanta,
  "koh-lipe-tailandia": lipe,
  "koh-kood-tailandia": kood,
  "koh-yao-tailandia": yao,
  "koh-mak-tailandia": mak,
  "koh-larn-tailandia": larn,
  "ilhas-similan-tailandia": similan,
  "koh-racha-tailandia": racha,
};

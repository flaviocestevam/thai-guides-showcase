import type { SalesContent } from "@/components/sales/SalesPage";

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
  seoTitle: "Phuket sem perrengue — Guia completo para brasileiros",
  seoDescription: "Onde ficar, o que fazer, transfers honestos e roteiros de 3 a 10 dias em Phuket. Evite Patong superlotado e descubra a Phuket que vale.",
  heroTitle: "Phuket sem cair em",
  heroHighlight: "armadilha de turista",
  heroSubtitle: "A maior porta de entrada das ilhas tailandesas tem 50 km de praia, 9 bairros muito diferentes e uma indústria inteira pronta pra inflar seu preço. Aqui está o atalho de quem já errou tudo o que dava pra errar.",
  heroWarning: "90% dos brasileiros ficam em Patong sem saber que existe Kata, Karon, Bang Tao e Nai Harn — e voltam achando que Phuket é \"caótica\".",
  pains: [
    { title: "Reservou em Patong sem saber o que é Patong", desc: "Ruas barulhentas, bares com conta inflada, praia média. Existem 8 outros bairros com perfis muito diferentes." },
    { title: "Pegou táxi do aeroporto sem combinar preço", desc: "O preço real é fixo. Sem o guia, você paga 3x e nem sabe que foi enganado." },
    { title: "Foi pra Phi Phi no day-trip lotado", desc: "Tem janela do dia, operadora certa e horário em que Maya Bay não está com 1.000 pessoas. Sem isso, é selfie em fila." },
    { title: "Comeu em armadilha turística", desc: "Cardápio em foto, preço em dólar, comida congelada. Os locais comem a 100m dali pagando 1/4." },
  ],
  features: [
    { title: "9 bairros decifrados", desc: "Patong, Kata, Karon, Bang Tao, Surin, Kamala, Nai Harn, Rawai, Phuket Town. Pra quem é cada um." },
    { title: "Hospedagens por faixa", desc: "Hostel R$50, boutique R$300, resort R$1.200. Testados ou rejeitados com motivo." },
    { title: "Roteiros 3, 5, 7 e 10 dias", desc: "Inclui Phi Phi, James Bond, Racha, Coral e Big Buddha sem virar tour industrial." },
  ],
  comparison: {
    theirs: ["Ficar 7 dias só em Patong", "Pagar 3x no táxi do aeroporto", "Fazer Phi Phi tour das 8h (lotado)", "Comer no calçadão por preço de SP", "Alugar moto sem PID e perder a caução"],
    ours: ["Bairro certo pro seu perfil", "Bolt/Grab + tabela de preço justo", "Phi Phi nas operadoras que evitam a multidão", "Mapa dos restaurantes onde local come", "Locadoras testadas + protocolo anti-golpe"],
  },
  authority: {
    title: "Phuket vivida, não pesquisada no Google",
    paragraphs: [
      "Morei 3 meses entre Kata e Rawai, peguei ferry pra Phi Phi 11 vezes, testei mais de 40 restaurantes e perdi dinheiro em quase todo golpe possível — pra você não precisar perder.",
      "Esse guia é a versão limpa desses 3 meses: o que funciona, o que é cilada, e o que ninguém te conta no Instagram de viagem.",
    ],
    bullets: ["3 meses morados na ilha", "9 bairros mapeados a pé", "40+ restaurantes testados"],
  },
  modules: [
    { title: "Bairros: onde ficar e onde NÃO ficar", desc: "Decodificação completa de cada região.", bullets: ["Patong (e quando faz sentido)", "Kata vs Karon", "Bang Tao luxo", "Nai Harn família", "Phuket Town autêntica"] },
    { title: "Praias por perfil", desc: "Família, casal, agito, snorkel, deserta.", bullets: ["Top 12 praias", "Mar calmo vs ondas", "Sunset spots", "Praias secretas"] },
    { title: "Day-trips das ilhas", desc: "Phi Phi, James Bond, Racha, Coral, Similan.", bullets: ["Operadora certa", "Horário esperto", "Speedboat vs barco grande", "Como evitar enjoo"] },
    { title: "Transfer, ferry e moto", desc: "Toda logística sem cair em golpe.", bullets: ["Tabela de preço real", "Apps que funcionam", "Onde comprar ferry", "Aluguel de moto seguro"] },
    { title: "Comida: local x turística", desc: "Mapa dos lugares onde tailandês come.", bullets: ["Top 30 restaurantes", "Markets noturnos", "Street food segura", "Cafés especiais"] },
  ],
  bonuses: [
    { title: "Mapa Google interativo", desc: "Todos os pontos do guia salvos em mapa pronto pra usar offline.", value: "R$ 87" },
    { title: "Tabela de preços de transfer", desc: "Quanto deve custar do aeroporto a cada bairro — tira print no celular.", value: "R$ 47" },
    { title: "Checklist anti-golpe", desc: "Os 12 golpes mais comuns em Phuket e a resposta exata pra cada um.", value: "R$ 67" },
    { title: "Lista negra de tours", desc: "Operadoras que reclamamos e que devem ser evitadas.", value: "R$ 57" },
    { title: "Grupo de viajantes brasileiros", desc: "Tire dúvida em tempo real com quem está na ilha agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Camila R.", city: "São Paulo", text: "Ia ficar 6 dias em Patong. Mudei pra Kata e Bang Tao depois do guia. Foi a melhor decisão da viagem." },
    { name: "Rodrigo T.", city: "Belo Horizonte", text: "A tabela de transfer me salvou no aeroporto. O motorista pediu 1.200 baht, paguei 600 com Bolt." },
    { name: "Letícia M.", city: "Curitiba", text: "Fizemos Phi Phi pela operadora que o guia indica, saímos às 6h e Maya Bay estava vazia. Sonho." },
    { name: "Ana e Felipe", city: "Rio de Janeiro", text: "Resort em Bang Tao por R$ 380 a diária. Resort em Patong igual saía R$ 700. Pagamos o guia 10x." },
    { name: "Diego S.", city: "Florianópolis", text: "Mapa do Google é OURO. Comi nos lugares dos locais a viagem toda e gastei metade." },
    { name: "Marina C.", city: "Porto Alegre", text: "O capítulo de moto evitou que eu perdesse 15.000 baht de caução. Vale o guia inteiro." },
  ],
  faqs: [
    { q: "Quantos dias ficar em Phuket?", a: "Mínimo 4 dias só pra Phuket. Ideal 6-7 incluindo um day-trip pra Phi Phi ou James Bond. Roteiros prontos no guia." },
    { q: "Patong é ruim?", a: "Não. É barulhento, lotado e turístico — perfeito pra quem quer festa. Ruim só se você não sabia disso." },
    { q: "Vale a pena alugar moto?", a: "Sim, se você já dirige. Phuket tem mão inglesa e trânsito hostil. Guia traz protocolo anti-golpe e PID obrigatório." },
    { q: "Posso fazer Phi Phi de day-trip ou preciso dormir lá?", a: "Day-trip resolve. Dormir só vale se quiser festa. O guia compara as duas opções." },
    { q: "Quando ir?", a: "Nov-mar é alta temporada (sol, lotado). Mai-out é chuvoso mas barato. Detalhe mês a mês no guia." },
    { q: "É seguro?", a: "Sim, para crime violento. Os \"perigos\" reais são scooter, scams e mar de monção. Guia cobre os 3." },
  ],
  finalCTA: {
    title: "Phuket pode ser o melhor — ou o pior — da sua viagem",
    subtitle: "A diferença está em saber qual bairro escolher, qual tour pegar e qual cilada evitar. Tudo isso, em um único guia.",
  },
});

const samui = make(ilhasMeta[1], {
  bgGradient: "from-amber-950 via-background to-orange-950",
  seoTitle: "Koh Samui — Guia completo para brasileiros (resorts, praias, roteiros)",
  seoDescription: "Resorts honestos, bairros certos e como combinar Samui com Phangan e Tao. O guia da ilha de lua de mel e família no Golfo da Tailândia.",
  heroTitle: "Koh Samui sem",
  heroHighlight: "diária inflada",
  heroSubtitle: "A ilha de resort da Tailândia é dividida entre bairros que parecem outros países. Chaweng é o Patong de Samui. Choeng Mon é família. Bophut é boutique. Lamai é equilibrado. O guia te leva pro lugar certo.",
  heroWarning: "Reservar resort em Chaweng achando que vai ter sossego é o erro #1 de quem chega em Samui. E é evitável.",
  pains: [
    { title: "Reservou resort em Chaweng pra lua de mel", desc: "Chegou e tinha bar barulhento até 3h da manhã. Resort certo está a 4km e custa o mesmo." },
    { title: "Pegou ferry errado e perdeu meio dia", desc: "São 3 operadoras com horários e portos diferentes. Sem saber, vira novela." },
    { title: "Foi no Big Buddha às 14h", desc: "Calor de 38°, foto contra o sol, sem nada de espiritual. Tem horário certo — e quase ninguém te conta." },
    { title: "Ignorou Phangan e Tao no roteiro", desc: "Samui é base perfeita pra um trio de ilhas. Quem fica só em Samui perde 60% do potencial da região." },
  ],
  features: [
    { title: "4 bairros decodificados", desc: "Chaweng, Lamai, Bophut/Fisherman's, Choeng Mon. Perfil real de cada um." },
    { title: "Resorts com custo-benefício real", desc: "Não a lista do Booking. A lista de quem dormiu em 12 deles." },
    { title: "Trio Samui + Phangan + Tao", desc: "Roteiros 7 e 10 dias com ferry, hospedagem e timing dos festivais." },
  ],
  comparison: {
    theirs: ["Resort em Chaweng achando que é tranquilo", "Pagar diária turística em Bophut Fisherman's", "Perder o melhor de Phangan", "Ferry errado entre as ilhas", "Tour da ilha em van lotada"],
    ours: ["Bairro certo pra cada perfil", "Resorts boutique testados", "Roteiro com Full Moon ou anti-Full Moon", "Mapa dos ferries por porto e horário", "Tour com scooter próprio + roteiro pronto"],
  },
  authority: {
    title: "10 dias em Samui + Phangan + Tao testando o circuito completo",
    paragraphs: [
      "Fiz o circuito do Golfo 3 vezes em estações diferentes: alta, baixa e Full Moon. Dormi em hostel, em boutique e em resort 5 estrelas pra entender quando vale cada um.",
      "Esse guia é a destilação de quem já errou ferry, errou bairro e errou hotel pra te entregar o caminho limpo.",
    ],
    bullets: ["3 circuitos completos do Golfo", "12 hotéis testados em Samui", "15 ferries cronometrados"],
  },
  modules: [
    { title: "Bairros de Samui", desc: "Onde ficar pra qual experiência.", bullets: ["Chaweng (agito)", "Lamai (equilíbrio)", "Bophut Fisherman's (boutique)", "Choeng Mon (família)", "Maenam (silêncio)"] },
    { title: "Resorts e boutiques", desc: "12 hotéis testados pessoalmente.", bullets: ["Faixa econômica", "Mid-range", "Boutique", "Luxo", "Pool villa"] },
    { title: "O que fazer em Samui", desc: "Big Buddha, Na Muang, Ang Thong, Fisherman's Village.", bullets: ["Roteiro de scooter", "Ang Thong tour", "Mercados noturnos", "Praias por perfil"] },
    { title: "Combo Samui + Phangan + Tao", desc: "Roteiros, ferries, timing.", bullets: ["7 dias clássico", "10 dias completo", "Calendário Full Moon", "Ferries entre ilhas"] },
    { title: "Comer e beber", desc: "Onde os expats e tailandeses estão.", bullets: ["Fisherman's Village", "Lamai food courts", "Restaurantes do guia", "Cafés especiais"] },
  ],
  bonuses: [
    { title: "Calendário Full Moon 2026-2027", desc: "Datas oficiais e janelas pra evitar (ou cair de cabeça) na festa.", value: "R$ 47" },
    { title: "Mapa Google de Samui", desc: "Bairros, hotéis, ferries e top spots salvos pra offline.", value: "R$ 87" },
    { title: "Tabela de ferries", desc: "Lomprayah x Seatran x Songserm: horários, portos, preços e qual escolher.", value: "R$ 57" },
    { title: "Lista de massagens honestas", desc: "Onde fazer massagem boa de verdade em Samui sem cair em fachada.", value: "R$ 47" },
    { title: "Grupo de viajantes brasileiros", desc: "Tire dúvida com quem está nas ilhas agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Júlia e Marco", city: "São Paulo", text: "Lua de mel. Ficamos em Choeng Mon como o guia indica. Acordamos com o som do mar, não com bar." },
    { name: "Renata B.", city: "Rio de Janeiro", text: "Fiz Samui + Tao em 7 dias pelo roteiro do guia. Saí mergulhando certificada e relaxada." },
    { name: "Paulo A.", city: "Brasília", text: "A tabela de ferries economizou um dia inteiro de viagem. Cheguei em Phangan na hora certa." },
    { name: "Família Souza", city: "Curitiba", text: "Resort em Bophut por R$ 420. Igual no Booking saía R$ 780. O guia mostra como reservar direto." },
    { name: "Ricardo L.", city: "Porto Alegre", text: "Não fui na Full Moon porque o calendário do guia mostrou que cairia uma semana antes da minha ida. Salvou o sossego." },
    { name: "Ana P.", city: "Recife", text: "Big Buddha às 7h, vazio e mágico. Outros amigos foram às 14h e odiaram. Detalhe que muda tudo." },
  ],
  faqs: [
    { q: "Samui é melhor que Phuket?", a: "Diferente. Samui é mais resort, menos caos, melhor pra família/casal. Phuket é maior, mais opções e mais agito. Guia compara em detalhe." },
    { q: "Quantos dias?", a: "Mínimo 4 dias só em Samui. 7-10 se for fazer o trio com Phangan e Tao." },
    { q: "Posso ir em qualquer mês?", a: "Out-nov pode ter chuva forte. Dez-mar é a melhor janela. Detalhamento mês a mês no guia." },
    { q: "Lua de mel em Samui ou Phuket?", a: "Samui ganha pela tranquilidade dos bairros certos. Guia traz os 5 hotéis ideais para lua de mel." },
    { q: "Como chegar?", a: "Voo direto de Bangkok (Bangkok Airways) ou voo+ferry via Surat Thani. Comparação de preço e tempo no guia." },
    { q: "Vale alugar carro ou scooter?", a: "Scooter para a maioria. Carro só se viajar com criança ou idoso. Guia mostra locadoras seguras." },
  ],
  finalCTA: {
    title: "Samui foi feita pra ser lembrada — não pra dar errado",
    subtitle: "Bairro certo, resort certo, ferry certo. Em um guia. Sem achismo.",
  },
});

const phiPhi = make(ilhasMeta[2], {
  bgGradient: "from-cyan-950 via-background to-blue-950",
  seoTitle: "Koh Phi Phi — Guia honesto (Maya Bay, viewpoint, day-trip vs pernoite)",
  seoDescription: "Como fazer Phi Phi sem virar mais um na fila do Maya Bay. Operadoras certas, viewpoint sem perrengue e quando vale dormir na ilha.",
  heroTitle: "Phi Phi sem fila e",
  heroHighlight: "sem turismo industrial",
  heroSubtitle: "A praia mais fotografada da Ásia virou indústria. Existe uma janela do dia em que Maya Bay tem 50 pessoas em vez de 1.500 — e o guia te leva exatamente nela.",
  heroWarning: "O tour padrão das 9h é o pior tour do mundo. Se você vai gastar 1.500 baht, gaste no horário e na operadora que entrega Phi Phi de verdade.",
  pains: [
    { title: "Maya Bay com 1.200 pessoas na areia", desc: "É exatamente o tour que vendem pra todo turista. A janela boa é antes ou depois — e quase ninguém te conta." },
    { title: "Speedboat lotado, sem briefing, sem snorkel decente", desc: "Operadora ruim transforma o passeio mais bonito em pesadelo de náusea coletiva." },
    { title: "Subiu o viewpoint às 12h", desc: "1 hora de escada no calor, foto contra o sol, exaustão. Existe horário em que se faz em 30min com luz dourada." },
    { title: "Dormiu em Phi Phi sem precisar", desc: "A Phi Phi noturna é bar de balde e festa. Se você queria sossego, dormir foi armadilha. Day-trip resolve." },
  ],
  features: [
    { title: "Day-trip ou pernoite: o teste de 5 perguntas", desc: "Cinco critérios honestos pra decidir sem se arrepender." },
    { title: "3 operadoras de tour aprovadas", desc: "As que entregam barco bom, snorkel decente e Maya Bay no horário esperto." },
    { title: "Viewpoint, Bamboo, Mosquito e Loh Samah", desc: "O que vale, o que é cilada, e quando ir em cada um." },
  ],
  comparison: {
    theirs: ["Tour padrão das 9h (1.500 pessoas em Maya)", "Speedboat de 50 pax", "Viewpoint às 12h", "Pernoite sem saber que é festa", "Reservar no balcão do hotel"],
    ours: ["Janela sunrise ou sunset (vazio)", "Operadora com barco e instrutor decente", "Viewpoint às 7h ou 16h", "Day-trip se quer sossego, pernoite se quer festa", "Comparativo de preço por canal"],
  },
  authority: {
    title: "11 vezes em Phi Phi — 8 day-trips e 3 pernoites",
    paragraphs: [
      "Testei tour de barco grande, speedboat, longtail privado e até pacote 2D1N. Algumas foram experiências dos sonhos. Outras, dinheiro jogado fora.",
      "O guia destila exatamente o que separa as duas: operadora, horário, época, perfil. Sem misticismo.",
    ],
    bullets: ["11 visitas documentadas", "8 operadoras testadas", "3 pernoites comparados"],
  },
  modules: [
    { title: "Maya Bay sem multidão", desc: "Horário, operadora, janela do ano.", bullets: ["Sunrise tour", "Sunset tour", "Estação de monção", "Taxa do parque"] },
    { title: "Os outros pontos", desc: "Bamboo, Mosquito, Loh Samah, Pileh Lagoon.", bullets: ["Snorkel rankings", "Plâncton à noite", "Monkey Beach (e por que pular)", "Viking Cave"] },
    { title: "Day-trip vs pernoite", desc: "Teste prático pra decidir.", bullets: ["Saída de Phuket", "Saída de Krabi", "Hotéis Phi Phi Don", "Phi Phi Leh (não dorme)"] },
    { title: "Viewpoint e trilhas", desc: "O famoso viewpoint e as alternativas.", bullets: ["Viewpoint 1, 2 e 3", "Horário esperto", "Long Beach a pé", "Nui Bay deserta"] },
    { title: "Vida noturna em Phi Phi Don", desc: "Pra quem quer festa.", bullets: ["Slinky Beach Bar", "Ibiza Bar", "Fire show", "Bares mais calmos"] },
  ],
  bonuses: [
    { title: "Lista das 3 operadoras top", desc: "Nomes, contato e como reservar com desconto direto.", value: "R$ 67" },
    { title: "Calendário Maya Bay", desc: "Quando o parque fecha, abre, e os horários de menor lotação.", value: "R$ 47" },
    { title: "Mapa snorkel offline", desc: "Os 8 melhores spots da região com coordenadas.", value: "R$ 57" },
    { title: "Checklist day-trip", desc: "O que levar, o que NÃO levar, comida, hidratação.", value: "R$ 37" },
    { title: "Grupo de viajantes brasileiros", desc: "Atualizações em tempo real de quem está na região agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Bianca M.", city: "São Paulo", text: "Maya Bay no sunset. Tinha 40 pessoas na praia. Parecia que o lugar era nosso." },
    { name: "Lucas e Carol", city: "Belo Horizonte", text: "Decidimos pelo day-trip depois do teste do guia. Foi a escolha certa — Phi Phi Don à noite seria estresse pra gente." },
    { name: "Patrícia S.", city: "Curitiba", text: "Operadora indicada tinha barco com banheiro, snorkel novo, almoço bom. Os outros barcos que cruzamos eram precários." },
    { name: "Henrique T.", city: "Rio de Janeiro", text: "Viewpoint às 7h. Subi com café na mão, fiz fotos vazias. Quando desci às 9h, era fila." },
    { name: "Camila e amigas", city: "Florianópolis", text: "Pernoite na vibe certa: bar de balde, fire show, Slinky. Exatamente o que queríamos." },
    { name: "Andressa B.", city: "Porto Alegre", text: "Plâncton à noite no tour do guia. Bioluminescência real, sem turistada. Magia." },
  ],
  faqs: [
    { q: "Day-trip ou dormir em Phi Phi?", a: "Day-trip pra quem quer paisagem. Pernoite pra quem quer festa. O guia tem teste prático de 5 perguntas." },
    { q: "Maya Bay está aberta?", a: "Sim, com taxa de parque e horário restrito. Detalhe atualizado no guia, incluindo períodos de fechamento sazonal." },
    { q: "De Phuket ou de Krabi?", a: "Krabi é mais perto e geralmente mais barato. Phuket tem mais oferta. Comparativo completo no guia." },
    { q: "Tem internet boa em Phi Phi?", a: "4G ok em Phi Phi Don, zero em Phi Phi Leh. Detalhe operadora por operadora." },
    { q: "É seguro?", a: "Sim. Cuidado padrão com pertences na praia e no bar. Sem violência relevante." },
    { q: "Tem caixa eletrônico?", a: "Sim, mas com taxa absurda. Leve baht em mão de Phuket/Krabi. Tabela no guia." },
  ],
  finalCTA: {
    title: "Phi Phi pode ser foto de capa — ou fila de selfie",
    subtitle: "A diferença é hora, operadora e decisão de dormir ou não. Tudo isso, em um guia.",
  },
});

const phangan = make(ilhasMeta[3], {
  bgGradient: "from-purple-950 via-background to-pink-950",
  seoTitle: "Koh Phangan — Full Moon, Sri Thanu e a ilha além da festa",
  seoDescription: "Como ir à Full Moon sem ser roubado. Datas, lado leste calmo, wellness em Sri Thanu e o que os mochileiros experientes fazem em Phangan.",
  heroTitle: "Phangan completa —",
  heroHighlight: "festa, wellness e calma",
  heroSubtitle: "Phangan não é só Full Moon. É também o maior hub de wellness do Sudeste Asiático, com Sri Thanu cheio de retiros de yoga e o lado leste que é puro silêncio. Tudo isso na mesma ilha — e o guia separa cada perfil.",
  heroWarning: "Ir pra Phangan na semana da Full Moon achando que vai descansar é o erro #1. Ir achando que tem festa todo dia, também.",
  pains: [
    { title: "Caiu na semana da Full Moon sem querer", desc: "Diárias triplicam, ilha vira loucura, todo bangalô lotado. Sem o calendário, você cai sem perceber." },
    { title: "Foi roubado na praia de Haad Rin", desc: "Mochila no chão durante a festa = mochila perdida. Existe protocolo simples que ninguém te ensina." },
    { title: "Reservou em Haad Rin querendo wellness", desc: "Sri Thanu fica do outro lado da ilha. Quem queria yoga e meditação foi parar no bar de balde." },
    { title: "Não conheceu o lado leste", desc: "Thong Nai Pan e Bottle Beach são os segredos mais bem guardados de Phangan. Sem moto, você não chega." },
  ],
  features: [
    { title: "Mapa por perfil: festa, wellness, sossego", desc: "Haad Rin (festa), Sri Thanu (yoga), leste (sossego). Cada perfil em uma região." },
    { title: "Calendário Full Moon 2026-2027", desc: "Datas oficiais + Half Moon, Black Moon, Jungle Experience." },
    { title: "Protocolo anti-roubo na festa", desc: "Como ir, o que levar, onde guardar, como voltar." },
  ],
  comparison: {
    theirs: ["Cair na Full Moon sem querer", "Diária 3x mais cara", "Mochila roubada na areia", "Tentar sossego em Haad Rin", "Não ter moto e ficar preso"],
    ours: ["Calendário no celular", "Reserva fora da semana de pico", "Protocolo anti-roubo do guia", "Mapa por perfil (festa/yoga/sossego)", "Scooter loop pelo lado leste"],
  },
  authority: {
    title: "3 estações em Phangan — Full Moon, alta e baixa",
    paragraphs: [
      "Vivi a Full Moon na areia. Fiz 10 dias de retiro de yoga em Sri Thanu. Aluguei bangalô em Thong Nai Pan e fiquei uma semana sem ver um turista. Phangan é várias ilhas em uma.",
      "Esse guia decodifica cada uma delas para você ir pelo motivo certo — e não cair no motivo errado.",
    ],
    bullets: ["3 estações documentadas", "Retiro de yoga vivido", "Lado leste explorado de moto"],
  },
  modules: [
    { title: "Full Moon Party — sobrevivência", desc: "Como aproveitar sem ser roubado nem hospitalizado.", bullets: ["O que levar/não levar", "Como voltar pro hotel", "Protocolo de mochila", "Half Moon e Black Moon"] },
    { title: "Sri Thanu wellness", desc: "Retiros, yoga, meditação, comida vegana.", bullets: ["Top retiros", "Yoga drop-in", "Estúdios sérios", "Cafés saudáveis"] },
    { title: "Lado leste secreto", desc: "Thong Nai Pan, Bottle Beach, Than Sadet.", bullets: ["Como chegar de scooter", "Bangalôs frente-mar", "Trilhas e cachoeiras", "Pôr do sol no leste"] },
    { title: "Onde dormir por perfil", desc: "Hostel, bangalô, boutique, retiro.", bullets: ["Haad Rin (festa)", "Sri Thanu (yoga)", "Thong Nai Pan (sossego)", "Chaloklum (família)"] },
    { title: "Logística da ilha", desc: "Ferry, scooter, taxis pirata.", bullets: ["Ferry Samui-Phangan", "Aluguel de scooter", "Tabela taxi songthaew", "Internet por região"] },
  ],
  bonuses: [
    { title: "Calendário lunar oficial", desc: "Full Moon, Half Moon, Black Moon, Jungle pra 24 meses.", value: "R$ 47" },
    { title: "Mapa Google offline", desc: "Bangalôs, retiros, praias e estradas todas marcadas.", value: "R$ 87" },
    { title: "Protocolo anti-roubo Full Moon", desc: "PDF com checklist exato pra noite da festa.", value: "R$ 57" },
    { title: "Lista de retiros sérios", desc: "Os 12 retiros de yoga avaliados pessoalmente em Sri Thanu.", value: "R$ 87" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros em Phangan agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Tarsila M.", city: "São Paulo", text: "Fiz retiro de 10 dias em Sri Thanu e nem soube que tinha Full Moon do outro lado. O guia mostrou que eram universos separados." },
    { name: "Otávio R.", city: "Rio de Janeiro", text: "Full Moon sem roubo nem ressaca destruidora. O protocolo do guia funciona." },
    { name: "Larissa P.", city: "Curitiba", text: "Thong Nai Pan virou meu lugar favorito do mundo. Sem o guia, eu nunca teria chegado lá." },
    { name: "Bruno F.", city: "BH", text: "Cancelei a reserva em Haad Rin depois de ler o guia. Fui pra Sri Thanu. Salvei a viagem." },
    { name: "Marina C.", city: "Recife", text: "Calendário lunar foi o que mais me ajudou. Reservei 2 semanas antes da Full Moon — preço metade, ilha calma." },
    { name: "Diogo S.", city: "Brasília", text: "Lista de retiros é OURO. O que eu fiz mudou minha relação com meditação pra sempre." },
  ],
  faqs: [
    { q: "Vale a pena ir na Full Moon?", a: "Se você quer festa de praia épica: sim. Se quer descansar: nem chegue na semana. Guia traz datas e alternativas." },
    { q: "É perigoso?", a: "Crime violento, baixíssimo. Roubo na festa, scooter e overdoses de \"shake\" são os riscos reais. Guia cobre os 3." },
    { q: "Phangan é só festa?", a: "Não. Sri Thanu é o maior hub de wellness do Sudeste Asiático. Leste é o sossego absoluto. Guia separa." },
    { q: "Como chegar?", a: "Sempre via Koh Samui (voo + ferry) ou Surat Thani. Tabela completa no guia." },
    { q: "Quantos dias?", a: "Mínimo 4. Ideal 7 pra conhecer os 3 lados (Haad Rin, Sri Thanu, leste)." },
    { q: "Posso ir com criança?", a: "Sim, em Chaloklum ou Thong Nai Pan, nunca em Haad Rin. Guia traz opções família." },
  ],
  finalCTA: {
    title: "Phangan é 3 ilhas — só uma vai ser sua",
    subtitle: "O guia te leva pra certa: festa, yoga ou silêncio. Sem misturar.",
  },
});

// ============================================================================
// TIER 2
// ============================================================================

const tao = make(ilhasMeta[4], {
  bgGradient: "from-teal-950 via-background to-cyan-950",
  seoTitle: "Koh Tao — Mergulho, certificação PADI e hospedagem barata",
  seoDescription: "A ilha do mergulho. Escolas honestas, roteiros do Open Water ao Divemaster e onde dormir sem gastar fortuna em Koh Tao.",
  heroTitle: "Koh Tao — capital",
  heroHighlight: "mundial do mergulho",
  heroSubtitle: "Koh Tao forma mais mergulhadores PADI por ano que qualquer outro lugar do planeta. Mar quente, visibilidade absurda e curso custando 60% menos que no Brasil. Mas a escola errada transforma o sonho em linha de montagem.",
  heroWarning: "Em alta temporada, as escolas viram fábrica. Turma de 8 alunos, instrutor exausto, certificação por carimbo. Existe um filtro simples — e o guia entrega.",
  pains: [
    { title: "Escola superlotada em alta temporada", desc: "Você paga curso, recebe certificado, mas sai sem saber mergulhar de verdade. Caro e perigoso." },
    { title: "Pagar R$ 4.000+ pelo OW no Brasil", desc: "Quando o mesmo Open Water em Koh Tao sai por R$ 1.200 com mar de Andaman e instrutor que tem tempo." },
    { title: "Reservou hospedagem cara perto do porto", desc: "Sairon vira armadilha de turista. Mae Haad e Chalok tem preço metade e vibe melhor." },
    { title: "Ficou poucos dias", desc: "Quem vai 3 dias só pra OW perde a essência da ilha. Mínimo 5-7 dias pra valer a logística." },
  ],
  features: [
    { title: "Top 10 escolas avaliadas", desc: "Avaliadas pessoalmente: turmas reduzidas, instrutores experientes, equipamento revisado." },
    { title: "Roteiros OW a Divemaster", desc: "Quanto tempo, quanto custa, qual a sequência ideal e onde dormir em cada fase." },
    { title: "Hospedagem por bairro", desc: "Sairon (turístico), Mae Haad (porto), Chalok (calmo), Tanote (deserto)." },
  ],
  comparison: {
    theirs: ["Pagar R$ 4.500 OW no Brasil", "Escola escolhida pelo Instagram", "Turma de 8 e 1 instrutor", "Hostel em Sairon caro", "Ficar só 3 dias"],
    ours: ["OW em Koh Tao por R$ 1.200", "10 escolas auditadas no detalhe", "Turmas de no máximo 4 alunos", "Mae Haad com preço justo", "Roteiro de 7 dias completo"],
  },
  authority: {
    title: "PADI MSDT certificado em Koh Tao",
    paragraphs: [
      "Me certifiquei Open Water, Advanced, Rescue, Divemaster e Instructor (IDC) em Koh Tao ao longo de 14 meses morando na ilha.",
      "Esse guia é resultado de mais de 600 mergulhos no Golfo da Tailândia e da convivência com instrutores brasileiros, australianos e europeus que ensinam ali todos os dias.",
    ],
    bullets: ["MSDT PADI certificado", "600+ mergulhos logados", "14 meses morando em Koh Tao"],
  },
  modules: [
    { title: "As 10 melhores escolas", desc: "Auditadas pessoalmente.", bullets: ["Turmas reduzidas", "Instrutor brasileiro", "Equipamento novo", "Preço transparente"] },
    { title: "Roteiros por nível", desc: "Do iniciante ao profissional.", bullets: ["OW 4 dias", "OW + AOW 7 dias", "Rescue 14 dias", "Divemaster 60 dias"] },
    { title: "Top dive sites", desc: "Chumphon Pinnacle, Sail Rock, Southwest, White Rock.", bullets: ["Quando ir", "O que vai ver", "Tubarão-baleia janela", "Mergulho noturno"] },
    { title: "Onde dormir", desc: "Por bairro e por orçamento.", bullets: ["Sairon (movimento)", "Mae Haad (porto)", "Chalok (sossego)", "Tanote (deserto)"] },
    { title: "Vida na ilha", desc: "Beach bar, comida, scooter, internet.", bullets: ["Top restaurantes", "Beach bars sunset", "Aluguel scooter seguro", "Cafés com Wi-Fi"] },
  ],
  bonuses: [
    { title: "Logbook digital", desc: "Template editável pra registrar todos os mergulhos.", value: "R$ 47" },
    { title: "Combos hospedagem+curso", desc: "Lista de hostels parceiros que reduzem 25% do orçamento.", value: "R$ 87" },
    { title: "Glossário PADI PT/EN", desc: "Termos técnicos para acompanhar curso em inglês.", value: "R$ 37" },
    { title: "Mapa dos dive sites", desc: "Os 30 melhores pontos da região com profundidade.", value: "R$ 67" },
    { title: "Grupo de divers brasileiros", desc: "Conexão com brasileiros mergulhando em Koh Tao agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Pedro H.", city: "Rio de Janeiro", text: "OW + AOW em 7 dias por R$ 2.000 total. No Brasil tinha orçado R$ 6.500 só o OW." },
    { name: "Laura M.", city: "São Paulo", text: "Turma de 4 pessoas. Atenção total do instrutor. Saí mergulhando de verdade, não com diploma de papel." },
    { name: "Bruno T.", city: "Curitiba", text: "Divemaster em 3 meses. Hoje sou dive guide em Bali. Mudou minha vida." },
    { name: "Aline C.", city: "Florianópolis", text: "Vi tubarão-baleia em Sail Rock. Só fui na janela certa por causa do guia." },
    { name: "Marcos R.", city: "BH", text: "Combo hostel + curso saiu 25% mais barato. O guia paga sozinho na primeira semana." },
    { name: "Juliana S.", city: "Brasília", text: "Mae Haad em vez de Sairon: mesma comodidade, metade do preço. Detalhe que faz diferença." },
  ],
  faqs: [
    { q: "Iniciante pode fazer OW?", a: "Sim, é exatamente pra quem nunca mergulhou. Saber nadar 200m e atestado simples bastam." },
    { q: "Quanto tempo o OW?", a: "3-4 dias. O guia mostra como combinar OW + Advanced em 6-7 dias com desconto." },
    { q: "PADI ou SSI?", a: "Os dois são mundialmente reconhecidos. SSI tende a ser mais barato. Diferença prática é mínima." },
    { q: "Preciso saber inglês?", a: "Inglês básico ajuda. Existem instrutores brasileiros em Koh Tao — o guia lista todos com contato." },
    { q: "Posso fazer Divemaster e trabalhar?", a: "Sim. Divemaster é o primeiro nível profissional. Muitos brasileiros viram dive guides em Koh Tao e Bali." },
    { q: "Quando NÃO ir?", a: "Out-dez tem monção do Golfo com plâncton. Visibilidade cai. Janeiro-setembro é melhor." },
  ],
  finalCTA: {
    title: "Koh Tao é onde sua certificação custa metade",
    subtitle: "Mar morno, visibilidade de 25 metros e a melhor formação do mundo. Falta só você escolher a escola certa.",
  },
});

const chang = make(ilhasMeta[5], {
  bgGradient: "from-green-950 via-background to-emerald-950",
  seoTitle: "Koh Chang — A ilha selvagem do leste da Tailândia",
  seoDescription: "Alternativa cruee barata a Phuket. Como chegar pelo leste, melhores praias, ferry sem dor de cabeça e roteiros 5 a 10 dias em Koh Chang.",
  heroTitle: "Koh Chang — a Tailândia",
  heroHighlight: "que ainda é selvagem",
  heroSubtitle: "Segunda maior ilha do país, coberta de selva, com praias enormes e preços que parecem 2010. Quem foge de Phuket vem aqui. E a logística do leste — Trat, ferry de Laem Ngop — afasta o turismo de massa.",
  heroWarning: "Quem chega em Koh Chang esperando aeroporto e shopping vai sofrer. Quem chega esperando selva, sim. O guia separa pra quem é a ilha.",
  pains: [
    { title: "Tentou ir de táxi de Bangkok", desc: "São 5h de carro + ferry. Existe ônibus VIP barato e voo Trat que ninguém te conta." },
    { title: "Pegou o ferry errado", desc: "Há 2 portos diferentes em Laem Ngop. Sem saber, você espera 2 horas." },
    { title: "Ficou em White Sand achando que era a única praia", desc: "Lonely Beach é vibe diferente. Klong Prao é família. Bang Bao é vista. Cada uma é outro mundo." },
    { title: "Foi em julho-setembro sem saber", desc: "Monção em Koh Chang é forte. Hotéis fecham, mar fica perigoso. Detalhe que ninguém te conta." },
  ],
  features: [
    { title: "Como chegar do jeito esperto", desc: "Voo Bangkok-Trat, ônibus VIP, transfer direto. Comparativo de preço e tempo." },
    { title: "5 praias decifradas", desc: "White Sand, Klong Prao, Kai Bae, Lonely, Bang Bao. Perfil de cada uma." },
    { title: "Day-trips e snorkel", desc: "Koh Wai, Koh Rang, Koh Mak e Koh Kood saindo de Chang." },
  ],
  comparison: {
    theirs: ["Táxi 5h de Bangkok", "Ferry sem saber porto", "Ficar só em White Sand", "Ir em agosto na chuva", "Reservar no balcão por preço dobrado"],
    ours: ["Voo Trat 1h", "Ferry certo, sem fila", "Praia certa pro perfil", "Calendário de monção", "Reservar direto com hotel"],
  },
  authority: {
    title: "Koh Chang em alta e baixa temporada",
    paragraphs: [
      "Conheci Koh Chang em janeiro com sol pleno e em agosto na monção pesada. Os dois cenários são úteis pra entender quando vale ir, e quando NÃO.",
      "Esse guia consolida 25 dias na ilha, scooter loop completo pelas 5 praias e teste de 14 hospedagens.",
    ],
    bullets: ["25 dias na ilha", "14 hospedagens testadas", "5 praias visitadas em scooter"],
  },
  modules: [
    { title: "Como chegar e quanto custa", desc: "Bangkok → Koh Chang sem dor.", bullets: ["Voo Trat", "Ônibus VIP", "Minivan", "Ferry e porto certo"] },
    { title: "As 5 praias por perfil", desc: "Família, casal, mochileiro, festa.", bullets: ["White Sand (turística)", "Klong Prao (família)", "Kai Bae (equilíbrio)", "Lonely (mochileiro)", "Bang Bao (vista)"] },
    { title: "Hospedagem por bairro", desc: "12 hotéis testados.", bullets: ["Bangalô R$ 80", "Resort R$ 250", "Boutique R$ 500", "Pool villa R$ 900"] },
    { title: "Day-trips pelas ilhas vizinhas", desc: "Koh Wai, Mak, Kood, Rang.", bullets: ["Tour 4 ilhas", "Snorkel", "Operadora certa", "Privado vs grupo"] },
    { title: "O que fazer dentro da ilha", desc: "Selva, cachoeira, elefante, kayak.", bullets: ["Cachoeira Klong Plu", "Santuário ético de elefante", "Kayak no mangue", "Hike Salakphet"] },
  ],
  bonuses: [
    { title: "Mapa Google offline", desc: "Praias, hotéis, restaurantes e estradas marcados.", value: "R$ 67" },
    { title: "Comparativo de ferry", desc: "Centerpoint vs Ao Thammachat: horário, preço, fila.", value: "R$ 37" },
    { title: "Calendário de monção", desc: "Mês a mês com chuva esperada e mar.", value: "R$ 47" },
    { title: "Roteiro 4 ilhas em day-trip", desc: "PDF com operadora, horário e o que esperar de cada parada.", value: "R$ 57" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros no leste da Tailândia agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Felipe M.", city: "Rio de Janeiro", text: "Voo direto Bangkok-Trat por R$ 280. Cheguei em Koh Chang em meia tarde. Sem o guia, ia pegar van de 6h." },
    { name: "Carolina S.", city: "São Paulo", text: "Klong Prao com a família. Praia enorme, criança correndo solta, hotel a 1/3 de Phuket." },
    { name: "Diego R.", city: "Porto Alegre", text: "Lonely Beach pra mochileiro é o paraíso. Bangalô na areia por R$ 120 a diária." },
    { name: "Lia B.", city: "Curitiba", text: "Day-trip 4 ilhas com a operadora do guia foi a melhor experiência da viagem inteira." },
    { name: "Renan T.", city: "BH", text: "Quase fui em agosto. O calendário de monção me fez mudar pra fevereiro. Salvou a viagem." },
    { name: "Sofia P.", city: "Brasília", text: "Santuário de elefante ético em Koh Chang é um dos melhores que visitei na Tailândia." },
  ],
  faqs: [
    { q: "Vale a pena ir em vez de Phuket?", a: "Se você quer selva, preço justo e menos turistada: sim. Se quer estrutura grande e vida noturna: vai pra Phuket." },
    { q: "Quantos dias?", a: "Mínimo 5. Ideal 7-10 incluindo day-trip pelas ilhas vizinhas." },
    { q: "Como chegar mais rápido?", a: "Voo Bangkok-Trat (Bangkok Airways) + transfer. 3h total. Detalhe no guia." },
    { q: "Tem vida noturna?", a: "Tem, em Lonely Beach. Não é Pattaya nem Phangan. É reggae bar e fire show." },
    { q: "Posso ir com criança?", a: "Sim, em Klong Prao ou White Sand. Guia indica os hotéis com kids amenities." },
    { q: "Quando NÃO ir?", a: "Julho a setembro tem monção forte. Maioria dos hotéis fecha. Detalhe no calendário do guia." },
  ],
  finalCTA: {
    title: "Koh Chang é a Tailândia de antes da fama",
    subtitle: "Selva, praia enorme, preço justo, sem multidão. Falta só você escolher a praia certa.",
  },
});

const lanta = make(ilhasMeta[6], {
  bgGradient: "from-orange-950 via-background to-red-950",
  seoTitle: "Koh Lanta — O slow travel do Andaman",
  seoDescription: "A ilha que mochileiros experientes preferem a Phi Phi. Praias por perfil, scooter loop e os melhores sunset bars em Koh Lanta.",
  heroTitle: "Koh Lanta — o ritmo",
  heroHighlight: "lento do Andaman",
  heroSubtitle: "Quem foge de Phuket vai pra Lanta. Quem foge de Phi Phi vai pra Lanta. Ilha comprida, com 9 praias diferentes ao longo da costa oeste, e uma vibe que ainda preserva o que a Tailândia era 15 anos atrás.",
  heroWarning: "Lanta é grande. Sem scooter, você fica preso a uma praia. Com scooter, vira a melhor ilha do Andaman.",
  pains: [
    { title: "Ficou só em Long Beach", desc: "Long Beach é a entrada. Klong Khong, Klong Nin e Bamboo Bay são outras vibes a 15min de scooter." },
    { title: "Foi sem scooter", desc: "Lanta sem moto = ilha pela metade. Songthaew é caro e infrequente." },
    { title: "Não pegou o sunset bar", desc: "Os 5 melhores sunsets do Andaman estão em Lanta. Quem perde, perde a alma da ilha." },
    { title: "Foi em junho-setembro", desc: "Monção do Andaman fecha boa parte dos hotéis. Lanta vira fantasma." },
  ],
  features: [
    { title: "9 praias por perfil", desc: "Long, Klong Dao, Klong Khong, Klong Nin, Bamboo Bay, Kantiang, Nui Bay, Mai Pai." },
    { title: "Scooter loop completo", desc: "Roteiro de 1 dia que cobre praias, viewpoint, old town e sunset bar." },
    { title: "Sunset bars sérios", desc: "Os 5 que valem o congestionamento. Hora certa, drink certo, vibe certa." },
  ],
  comparison: {
    theirs: ["Ficar só em Long Beach", "Songthaew caro e demorado", "Perder os sunsets", "Ir na monção sem saber", "Reservar em janeiro de última hora (caro)"],
    ours: ["Scooter loop pelas 9 praias", "Aluguel de moto por R$ 20/dia", "Mapa dos 5 melhores sunset bars", "Calendário de monção", "Antecipação de 2 meses com 30% off"],
  },
  authority: {
    title: "21 dias em Lanta — alta e baixa temporada",
    paragraphs: [
      "Lanta virou minha ilha favorita do Andaman depois de 3 visitas e 21 dias acumulados. Scooter por toda a costa oeste, sunset diário, vida lenta.",
      "Esse guia é pra quem quer o que Phi Phi foi antes da fama.",
    ],
    bullets: ["3 visitas em estações diferentes", "21 dias documentados", "Scooter loop testado 4 vezes"],
  },
  modules: [
    { title: "As 9 praias decifradas", desc: "Perfil, preço, vibe e segurança.", bullets: ["Long Beach", "Klong Dao família", "Klong Nin equilíbrio", "Kantiang luxo", "Bamboo Bay deserta"] },
    { title: "Scooter loop perfeito", desc: "Roteiro de 1 dia pelos pontos chave.", bullets: ["Old Town", "Viewpoint", "Mu Ko Lanta park", "5 sunset bars"] },
    { title: "Onde dormir", desc: "Bangalô a resort, por bairro.", bullets: ["Bangalô R$ 60", "Boutique R$ 250", "Resort R$ 600", "Pool villa R$ 1.200"] },
    { title: "Day-trips", desc: "4 Islands, Koh Rok, Koh Haa, Koh Mook.", bullets: ["Operadora honesta", "Snorkel rankings", "Emerald Cave", "Sunset cruise"] },
    { title: "Comer e beber", desc: "Os endereços onde o local vai.", bullets: ["Lanta Old Town", "Markets noturnos", "Sunset bars", "Cafés especiais"] },
  ],
  bonuses: [
    { title: "Mapa Google das 9 praias", desc: "Salvo para offline com hotéis, restaurantes e bares.", value: "R$ 67" },
    { title: "Calendário de monção Andaman", desc: "Mês a mês com chuva e hotéis fechados.", value: "R$ 47" },
    { title: "Lista dos 12 sunsets do guia", desc: "Bares com nome, horário ideal e drink recomendado.", value: "R$ 57" },
    { title: "Top operadoras de day-trip", desc: "Comparativo com preço e o que cada uma inclui.", value: "R$ 57" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros em Lanta agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Roberta S.", city: "São Paulo", text: "Cancelei minha reserva em Phi Phi depois do primeiro dia em Lanta. Outro nível de paz." },
    { name: "Diego M.", city: "BH", text: "Scooter loop em Lanta foi a melhor coisa que fiz na Tailândia inteira." },
    { name: "Carla B.", city: "Curitiba", text: "Klong Nin com a família. Mar calmo, comida boa, hotel com piscina. Voltarei." },
    { name: "Lucas T.", city: "Rio de Janeiro", text: "Emerald Cave em Koh Mook na operadora do guia foi mágico. Sem turistada." },
    { name: "Aline R.", city: "Porto Alegre", text: "Sunset bar em Kantiang com piña colada é a melhor memória da viagem." },
    { name: "Henrique L.", city: "Recife", text: "Reservei com 2 meses de antecedência seguindo o guia. Boutique por R$ 180 a diária." },
  ],
  faqs: [
    { q: "Lanta é melhor que Phi Phi?", a: "Pra quem quer descansar, conhecer praia variada e ter vibe slow: sim. Pra quem quer festa e selfie em Maya Bay: não." },
    { q: "Quantos dias?", a: "Mínimo 5. Ideal 7-10 com day-trips pelas ilhas vizinhas." },
    { q: "Preciso de scooter?", a: "Sim, na prática. Sem moto, Lanta vira só uma praia. Aluguel é R$ 20/dia." },
    { q: "Como chegar?", a: "De Krabi (ferry ou minivan) ou Phuket (ferry combinado). Ambos no guia." },
    { q: "Posso ir em julho?", a: "Pode, mas vai chover muito e boa parte dos hotéis fecha. Janeiro-março é o pico." },
    { q: "Tem vida noturna?", a: "Não no estilo Phangan. Tem reggae bar, beach bar e fire show. Suficiente." },
  ],
  finalCTA: {
    title: "Lanta é a ilha que mochileiro experiente esconde",
    subtitle: "Slow travel, sunset diário e o Andaman como deveria ser. Vem antes de virar moda.",
  },
});

// ============================================================================
// TIER 3
// ============================================================================

const lipe = make(ilhasMeta[7], {
  bgGradient: "from-blue-950 via-background to-indigo-950",
  seoTitle: "Koh Lipe — As Maldivas da Tailândia (e como chegar lá)",
  seoDescription: "Água cristalina, areia branca e a logística complicada que filtra o turismo de massa. O guia completo de Koh Lipe pra brasileiros.",
  heroTitle: "Koh Lipe — as",
  heroHighlight: "Maldivas tailandesas",
  heroSubtitle: "Areia branca, água azul-turquesa e três praias enfileiradas que parecem post de Instagram retocado. Único detalhe: chegar exige 1 voo + 1 transfer + 1 speedboat. O filtro logístico é o que protege a ilha.",
  heroWarning: "Quem chega em Lipe pela primeira vez sem planejar fica chocado com o preço. Quem chega preparado, paga 30% menos e dorme em frente a praia certa.",
  pains: [
    { title: "Comprou pacote turístico fechado", desc: "Você paga 40% a mais por intermediário. Reservar direto com resort é 5x mais simples do que parece." },
    { title: "Ficou em Pattaya Beach na alta", desc: "Praia principal lotada e cara. Sunrise Beach e Sunset Beach são o que você queria — e mais barato." },
    { title: "Ignorou os snorkels do parque", desc: "Tarutao é o nome da reserva nacional. Quem só fica em Pattaya Beach perde o motivo de ter ido até Lipe." },
    { title: "Foi entre maio e outubro", desc: "Monção fecha quase tudo. Os speedboats param. Detalhe que destrói viagem mal planejada." },
  ],
  features: [
    { title: "Como chegar (3 rotas comparadas)", desc: "Via Pak Bara, via Langkawi (Malásia) ou via Phuket. Preço e tempo de cada uma." },
    { title: "3 praias — perfil exato", desc: "Pattaya (movimento), Sunrise (silêncio), Sunset (família)." },
    { title: "Snorkel no Parque Tarutao", desc: "Os 7 spots imperdíveis e qual operadora vale a pena." },
  ],
  comparison: {
    theirs: ["Pacote fechado com agência", "Pattaya Beach na alta", "Pular o parque Tarutao", "Ir em junho na monção", "Não reservar transfer antecipado"],
    ours: ["Reserva direta + speedboat avulso", "Sunrise ou Sunset Beach", "Snorkel nos 7 spots do parque", "Janela dezembro-março", "Speedboat reservado com 1 mês"],
  },
  authority: {
    title: "10 dias em Lipe na alta e na entre-estação",
    paragraphs: [
      "Conheci Lipe vindo de Langkawi (Malásia) e voltei pela rota de Pak Bara. As duas têm vantagens — e o guia compara em detalhe.",
      "São 10 dias acumulados em 2 visitas, com teste de 6 hospedagens e tour completo do parque Tarutao.",
    ],
    bullets: ["2 visitas em estações diferentes", "6 hospedagens testadas", "Parque Tarutao inteiro"],
  },
  modules: [
    { title: "Como chegar", desc: "3 rotas honestas comparadas.", bullets: ["Pak Bara via Hat Yai", "Langkawi via Malásia", "Phuket via Trang", "Speedboat: timing"] },
    { title: "3 praias", desc: "Perfil real de cada uma.", bullets: ["Pattaya (movimento)", "Sunrise (silêncio)", "Sunset (família/luxo)", "Walking Street à noite"] },
    { title: "Hospedagem", desc: "6 hotéis testados.", bullets: ["Bangalô R$ 250", "Mid-range R$ 500", "Boutique R$ 900", "Resort R$ 1.800"] },
    { title: "Snorkel e mergulho", desc: "Parque Tarutao.", bullets: ["7 spots top", "Day-trip 4 ilhas", "Day-trip 7 ilhas", "Operadora certa"] },
    { title: "Comer em Lipe", desc: "Comida na ilha-resort.", bullets: ["Walking Street", "Cafés autorais", "Restaurantes resort", "Beach BBQ"] },
  ],
  bonuses: [
    { title: "Rotas comparadas (mapa)", desc: "Pak Bara, Langkawi, Phuket em mapa visual com preço e horário.", value: "R$ 57" },
    { title: "Calendário Tarutao", desc: "Quando o parque fecha e abre — janela exata de visitação.", value: "R$ 47" },
    { title: "Lista snorkel 7 spots", desc: "Coordenadas e nível de cada um.", value: "R$ 57" },
    { title: "Hotéis com 30% off direto", desc: "Como reservar fora do Booking com preço melhor.", value: "R$ 87" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros no extremo sul agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Mariana T.", city: "São Paulo", text: "Lipe é a viagem mais linda que fiz na vida. Sunrise Beach ao amanhecer não tem comparação." },
    { name: "Caio R.", city: "Rio de Janeiro", text: "Fui via Langkawi pelo guia. Chegou metade do preço da rota Pak Bara, e ainda emendei Malásia." },
    { name: "Daniela M.", city: "Curitiba", text: "Resort em Sunset Beach por R$ 600 a diária reservando direto. Booking pedia R$ 1.100." },
    { name: "Bruno L.", city: "BH", text: "Snorkel no parque Tarutao foi cenário de filme. Os 7 spots do guia valem cada baht." },
    { name: "Helena B.", city: "Porto Alegre", text: "Walking Street à noite, comida boa, e dormir com o som das ondas. Voltarei." },
    { name: "Pedro V.", city: "Brasília", text: "Janela dezembro-janeiro do guia: zero chuva, mar de piscina. Perfeito." },
  ],
  faqs: [
    { q: "Vale a viagem longa?", a: "Se você quer água cristalina e fugir de multidão: sim, vale cada hora de transfer." },
    { q: "É caro?", a: "Médio-alto. Diária a partir de R$ 250 no bangalô. Resort top, R$ 1.500. Guia traz comparativo." },
    { q: "Quando ir?", a: "Novembro a abril. Maio a outubro tem monção e speedboats param." },
    { q: "Posso emendar Malásia?", a: "Sim, pela rota Langkawi. Guia traz o roteiro." },
    { q: "Vida noturna?", a: "Walking Street tem bares de praia. Calma, sem balada. Charme da ilha." },
    { q: "Tem caixa eletrônico?", a: "Sim, com taxa salgada. Leve baht da Tailândia continental." },
  ],
  finalCTA: {
    title: "Lipe é o destino que filtra quem entra",
    subtitle: "Logística complicada protege a ilha. Você só precisa do roteiro certo pra furar o filtro.",
  },
});

const kood = make(ilhasMeta[8], {
  bgGradient: "from-violet-950 via-background to-fuchsia-950",
  seoTitle: "Koh Kood — Luxo discreto e isolamento no leste da Tailândia",
  seoDescription: "A ilha intocada do leste tailandês. Resorts boutique, praias desertas e o trajeto longo que mantém Koh Kood exclusiva.",
  heroTitle: "Koh Kood — luxo",
  heroHighlight: "discreto e quase secreto",
  heroSubtitle: "Quarta maior ilha da Tailândia, com menos de 2.500 habitantes, sem aeroporto, sem 7-Eleven e sem vida noturna. Apenas selva, praia branca e bangalô em palafita. É deliberadamente difícil chegar — por isso ainda existe.",
  heroWarning: "Koh Kood não é pra todo mundo. Quem quer agito, sai chocado. Quem quer silêncio absoluto e luxo, encontra a melhor ilha da Tailândia.",
  pains: [
    { title: "Foi sem entender que é silêncio total", desc: "Quem chega em Kood esperando bar de praia e festa, fica frustrado. A ilha é luxo introspectivo." },
    { title: "Reservou o resort errado", desc: "Soneva Kiri custa R$ 12.000/noite. Tinhat Beach Resort custa R$ 400. Existem 5 opções no meio." },
    { title: "Errou a estação", desc: "Monção é forte. Maioria dos resorts fecha de jul a out. Quem não sabe, perde a reserva." },
    { title: "Tentou ir de Bangkok no mesmo dia", desc: "Bangkok → Trat → Laem Sok → speedboat = 8h de viagem. Quebrar em Trat ou Bangkok é obrigatório." },
  ],
  features: [
    { title: "7 resorts comparados", desc: "Do Soneva Kiri ao bangalô local. Faixa de preço, perfil, vista." },
    { title: "Como chegar sem morrer no caminho", desc: "Rotas, horários, onde pernoitar e quanto custa cada perna." },
    { title: "O que fazer em Kood", desc: "Snorkel, kayak, cachoeira, jungle trek. Sem turismo de massa." },
  ],
  comparison: {
    theirs: ["Bangkok a Kood em 1 dia", "Reservar resort caro no escuro", "Chegar em julho na monção", "Achar que tem vida noturna", "Pular kayak no manguezal"],
    ours: ["Quebra em Bangkok+1 noite em Trat", "Comparativo de 7 resorts", "Janela dezembro-março garantida", "Aceitar o silêncio (e amar)", "Kayak pelo Klong Yai Ki"],
  },
  authority: {
    title: "8 dias em Koh Kood — alta temporada",
    paragraphs: [
      "Koh Kood é a única ilha onde voltei e fiquei mais tempo do que planejei. Testei 3 resorts diferentes e fiz os 6 melhores passeios da ilha.",
      "O guia é pra você não cometer o erro #1 — chegar achando que é Phi Phi. Não é. É outra coisa.",
    ],
    bullets: ["8 dias na ilha", "3 resorts testados", "6 passeios documentados"],
  },
  modules: [
    { title: "Como chegar", desc: "Logística leste sem dor.", bullets: ["Voo Bangkok-Trat", "Transfer Laem Sok", "Speedboat 1h15", "Quebra em Trat"] },
    { title: "Resorts por faixa", desc: "7 opções testadas.", bullets: ["Local R$ 300", "Boutique R$ 800", "Premium R$ 2.000", "Soneva Kiri R$ 12.000+"] },
    { title: "Praias da ilha", desc: "Quais valem ir.", bullets: ["Khlong Chao", "Tinhat", "Bang Bao", "Ao Phrao"] },
    { title: "Atividades", desc: "Pra não enjoar do silêncio.", bullets: ["Kayak no Klong Yai Ki", "Cachoeira Klong Chao", "Jungle trek", "Snorkel reefs"] },
    { title: "Comer em Kood", desc: "Poucos endereços, todos relevantes.", bullets: ["Restaurantes resort", "Local seafood Bang Bao", "Mercado em Klong Yai", "Cafés do guia"] },
  ],
  bonuses: [
    { title: "Comparativo dos 7 resorts", desc: "PDF com fotos reais, preço, prós e contras de cada um.", value: "R$ 87" },
    { title: "Roteiro de transfer Bangkok-Kood", desc: "Mapa visual com timing e onde pernoitar.", value: "R$ 57" },
    { title: "Calendário de chuva", desc: "Mês a mês com nível de chuva e resorts abertos.", value: "R$ 47" },
    { title: "Mapa Google offline", desc: "Praias, resorts, cachoeiras, restaurantes salvos.", value: "R$ 67" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros no leste agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Marcos e Helena", city: "São Paulo", text: "Aniversário de 10 anos de casados. Soneva Kiri 4 noites. Outra dimensão de luxo. Voltarei." },
    { name: "Carolina R.", city: "Rio de Janeiro", text: "Boutique resort por R$ 750 a diária com café da manhã premium. Achei que Kood era inacessível, não é." },
    { name: "Ricardo B.", city: "BH", text: "Kayak no manguezal de Klong Yai Ki foi o passeio mais bonito da viagem inteira." },
    { name: "Júlia M.", city: "Curitiba", text: "Quebrei em Trat 1 noite seguindo o guia. Sem isso, chegava destruída em Kood." },
    { name: "Felipe T.", city: "Porto Alegre", text: "Bang Bao seafood com pé na areia. Lagosta por preço de Brasil interior. Surreal." },
    { name: "Diego S.", city: "Brasília", text: "Calendário do guia me fez ir em fevereiro. Sol todos os dias. Mar de piscina." },
  ],
  faqs: [
    { q: "Vale o trajeto?", a: "Se você quer silêncio, luxo e sentir que está em paraíso secreto: vale absolutamente." },
    { q: "Tem vida noturna?", a: "Zero. Resort tem bar. É só isso. Charme da ilha." },
    { q: "Posso ir com criança?", a: "Sim, em resorts família-friendly. Guia indica os 3 melhores." },
    { q: "Quando ir?", a: "Novembro a maio. Junho a outubro tem monção forte e muitos resorts fecham." },
    { q: "Internet boa?", a: "Resorts top têm Wi-Fi decente. Restante, 4G fraco. Vá pra desconectar." },
    { q: "Câmbio na ilha?", a: "Caro. Leve baht do continente. Cartão funciona em resorts grandes." },
  ],
  finalCTA: {
    title: "Koh Kood é o luxo que não posta no Instagram",
    subtitle: "Silêncio, selva e bangalô em palafita. Quem chega, volta.",
  },
});

const yao = make(ilhasMeta[9], {
  bgGradient: "from-lime-950 via-background to-green-950",
  seoTitle: "Koh Yao Noi & Yai — Slow travel entre Phuket e Krabi",
  seoDescription: "A 30 minutos dos hubs e parecem outro país. Bangalôs eco, kayak no manguezal e zero vida noturna em Koh Yao Noi e Yai.",
  heroTitle: "Koh Yao — slow travel",
  heroHighlight: "entre Phuket e Krabi",
  heroSubtitle: "Dois irmãos ignorados pelo turismo de massa, exatamente no meio da baía de Phang Nga. Phuket de um lado, Krabi do outro, e no meio uma vila de pescadores muçulmanos onde a vida acontece em outro relógio.",
  heroWarning: "Quem espera Phuket vai sofrer. Quem espera o que Bali era 30 anos atrás, encontra o paraíso.",
  pains: [
    { title: "Foi pra Yao esperando vida noturna", desc: "É uma vila muçulmana, álcool é restrito, lojas fecham cedo. Resort tem bar, fim de papo." },
    { title: "Reservou Yao Yai sem moto", desc: "Yai é grande. Sem scooter você fica confinado ao resort. Yao Noi é menor e mais andável." },
    { title: "Não pegou o kayak no manguezal", desc: "Kayak em Phang Nga ao amanhecer é o que faz Yao diferente. Quem perde, perde o motivo de ir." },
    { title: "Ignorou o James Bond Island vizinho", desc: "Tour pela baía de Phang Nga sai de Yao com 1/3 do preço de Phuket." },
  ],
  features: [
    { title: "Noi ou Yai? Decidido em 5 minutos", desc: "Cinco critérios práticos pra escolher a ilha certa." },
    { title: "Resorts eco testados", desc: "8 hospedagens com perfil real de cada uma." },
    { title: "Tours pela baía de Phang Nga", desc: "James Bond, Hong Island, kayak, todos saindo direto de Yao." },
  ],
  comparison: {
    theirs: ["Esperar vida noturna em Yao", "Reservar Yai sem moto", "Pular o kayak ao amanhecer", "James Bond saindo de Phuket (caro)", "Ferry sem horário"],
    ours: ["Aceitar o silêncio (e amar)", "Noi se 3 dias, Yai se 5+", "Kayak Phang Nga ao alvorecer", "James Bond direto de Yao (1/3 do preço)", "Tabela completa de speedboats"],
  },
  authority: {
    title: "7 dias entre Noi e Yai — comparativo direto",
    paragraphs: [
      "Visitei Noi 2 vezes e Yai 1 vez. As ilhas têm vibes parecidas mas escalas diferentes. O guia te poupa de escolher errada.",
      "Foram 7 dias acumulados, 5 hospedagens testadas e o kayak da Phang Nga feito 3 vezes em horários diferentes pra entender o melhor.",
    ],
    bullets: ["2 visitas em Noi", "1 visita em Yai", "Kayak na Phang Nga 3x"],
  },
  modules: [
    { title: "Noi ou Yai", desc: "Comparativo direto.", bullets: ["Tamanho", "Quantidade resorts", "Vida na vila", "Praias"] },
    { title: "Como chegar", desc: "De Phuket e Krabi.", bullets: ["Speedboat Bang Rong", "Ferry Krabi", "Transfer privado", "Combo Phuket+Yao+Krabi"] },
    { title: "Onde dormir", desc: "8 resorts testados.", bullets: ["Bangalô local R$ 150", "Boutique R$ 450", "Resort R$ 800", "Luxo R$ 1.500"] },
    { title: "Atividades", desc: "O que se faz sem vida noturna.", bullets: ["Kayak no manguezal", "James Bond tour", "Hong Island", "Bicicleta pela vila"] },
    { title: "Comer", desc: "Cozinha muçulmana e seafood.", bullets: ["Restaurantes da vila", "Resort dining", "Cafés do guia", "Markets noturnos"] },
  ],
  bonuses: [
    { title: "Comparativo Noi vs Yai", desc: "Tabela com 12 critérios pra você decidir em 5 minutos.", value: "R$ 47" },
    { title: "Mapa kayak Phang Nga", desc: "As 3 rotas com horário e o que vai ver em cada uma.", value: "R$ 57" },
    { title: "Operadora James Bond direta", desc: "Como reservar saindo de Yao por 1/3 do preço Phuket.", value: "R$ 67" },
    { title: "Mapa Google offline", desc: "Vila, resorts, praias, cais.", value: "R$ 67" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros na região agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Renata e Pedro", city: "São Paulo", text: "Fugimos de Phuket no 3º dia. Yao Noi salvou a viagem. Voltaremos." },
    { name: "Carla M.", city: "Rio de Janeiro", text: "Kayak ao amanhecer na Phang Nga é a memória mais forte da viagem inteira." },
    { name: "Lucas R.", city: "BH", text: "James Bond saindo de Yao por R$ 350. Em Phuket cobravam R$ 1.100. Pagou o guia." },
    { name: "Ana B.", city: "Curitiba", text: "Boutique eco em Noi por R$ 480 com café da manhã. Vista pra baía. Coisa de sonho." },
    { name: "Bruno T.", city: "Porto Alegre", text: "Yao Yai com a família, bicicleta pela vila, criança correndo solta. Outra Tailândia." },
    { name: "Mariana S.", city: "Brasília", text: "Sem vida noturna a gente acabou jantando cedo, lendo na varanda. Reset completo." },
  ],
  faqs: [
    { q: "Noi ou Yai?", a: "Noi se for 3 dias ou se quer poder andar a pé. Yai se 5+ dias e quer mais isolamento." },
    { q: "Vida noturna?", a: "Zero. Vila muçulmana, álcool restrito. Resorts têm bar. É isso." },
    { q: "Posso ir com criança?", a: "Sim, principalmente Noi. Resorts família-friendly indicados no guia." },
    { q: "Como chegar?", a: "Speedboat de Phuket (Bang Rong) ou de Krabi. 30-45min. Detalhes no guia." },
    { q: "Quando ir?", a: "Novembro a abril. Maio-outubro tem monção do Andaman." },
    { q: "Faz sentido entre Phuket e Krabi?", a: "Perfeito. Yao é a parada que quebra o ritmo turístico dos dois hubs." },
  ],
  finalCTA: {
    title: "Yao é o que Bali era antes de virar Bali",
    subtitle: "Slow travel, eco, vila autêntica. A 30 minutos de Phuket. Vem antes da fama.",
  },
});

const mak = make(ilhasMeta[10], {
  bgGradient: "from-rose-950 via-background to-pink-950",
  seoTitle: "Koh Mak — A ilha-família do leste tailandês",
  seoDescription: "Ilha plana, pequena e segura pra bike com criança. Onde dormir, comer e os day-trips melhores em Koh Mak.",
  heroTitle: "Koh Mak — eco e família",
  heroHighlight: "no leste tailandês",
  heroSubtitle: "Privada, plana, com 16 km² e 400 habitantes. Bicicleta resolve a ilha inteira. Praias rasas, mar calmo, sem trânsito. É a ilha que famílias com criança pequena descobrem e levam segredo.",
  heroWarning: "Mak não tem vida noturna, balada nem shopping. Quem precisa disso, vai pra Phuket. Quem quer 5 dias de descanso real, encontrou.",
  pains: [
    { title: "Foi achando que tinha agito", desc: "Mak é vila, café, praia. Quem precisa de festa, sofre. Quem quer parar o tempo, ama." },
    { title: "Não alugou bicicleta", desc: "Bicicleta é o transporte oficial. Sem ela, você anda muito a pé. Scooter também funciona." },
    { title: "Não fez day-trip pra Koh Rang", desc: "Snorkel em Koh Rang saindo de Mak é a melhor água-cristalina-mais-perto-do-Brasil." },
    { title: "Reservou no lado errado da ilha", desc: "Norte (Ao Suan Yai) é calmo. Leste (Ao Kao) é praia top. Comparativo no guia." },
  ],
  features: [
    { title: "Resorts família testados", desc: "6 hospedagens com criança em mente." },
    { title: "Bike loop pela ilha", desc: "Roteiro de 1 dia pela ilha inteira com paradas e snacks." },
    { title: "Day-trip Koh Rang snorkel", desc: "Operadora certa, horário esperto e o que esperar." },
  ],
  comparison: {
    theirs: ["Esperar vida noturna", "Andar só a pé", "Pular Koh Rang", "Reservar lado errado", "Não levar repelente"],
    ours: ["Bike loop pela ilha", "Bicicleta R$ 15/dia", "Koh Rang com operadora certa", "Ao Kao ou Ao Suan Yai conforme perfil", "Checklist família do guia"],
  },
  authority: {
    title: "5 dias em Koh Mak com família",
    paragraphs: [
      "Visitei Mak num roteiro família e voltei pra confirmar que era exatamente o que parecia: a ilha mais relax que conheci no Sudeste Asiático.",
      "5 dias, 3 hospedagens testadas, bike loop completo e day-trip Koh Rang.",
    ],
    bullets: ["5 dias na ilha", "3 hospedagens testadas", "Bike loop completo"],
  },
  modules: [
    { title: "Onde dormir", desc: "6 resorts testados.", bullets: ["Bangalô local R$ 130", "Boutique família R$ 380", "Resort R$ 600", "Pool villa R$ 1.000"] },
    { title: "Como chegar", desc: "Logística do leste.", bullets: ["Bangkok-Trat", "Speedboat Laem Ngop", "Combo via Koh Chang", "Combo via Koh Kood"] },
    { title: "O que fazer", desc: "Atividades pra ilha pequena.", bullets: ["Bike loop", "Stand-up paddle", "Snorkel Koh Rang", "Cooking class"] },
    { title: "Praias", desc: "Pra criança e pra adulto.", bullets: ["Ao Kao (top)", "Ao Suan Yai (calmo)", "Ao Pra (deserta)", "Sunset spots"] },
    { title: "Comer", desc: "Vila pequena, escolhas justas.", bullets: ["Restaurantes da vila", "Resort dining", "BBQ na praia", "Cafés do guia"] },
  ],
  bonuses: [
    { title: "Checklist viagem com criança", desc: "Repelente, protetor, medicamentos, brinquedos de praia.", value: "R$ 37" },
    { title: "Mapa bike loop", desc: "PDF com a rota completa, paradas e snacks.", value: "R$ 47" },
    { title: "Operadora Koh Rang", desc: "Como reservar direto com 25% off.", value: "R$ 57" },
    { title: "Mapa Google offline", desc: "Resorts, restaurantes, cais, snorkel.", value: "R$ 67" },
    { title: "Grupo de viajantes brasileiros", desc: "Famílias brasileiras na região agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Família Mendes", city: "São Paulo", text: "5 dias em Mak com 2 filhos pequenos. A ilha mais segura que visitamos. Voltaremos no próximo ano." },
    { name: "Renata B.", city: "Rio de Janeiro", text: "Bike loop com snack na vila. Senti que estava em outro tempo." },
    { name: "Diego M.", city: "BH", text: "Koh Rang em Mak é o snorkel mais bonito que fiz no leste. Operadora do guia entregou." },
    { name: "Carla T.", city: "Curitiba", text: "Boutique família por R$ 420 com café incluso. Piscina, criança feliz, pais relaxados." },
    { name: "Bruno L.", city: "Porto Alegre", text: "Cooking class no resort foi a melhor atividade da viagem. Receita aprendida virou tradição em casa." },
    { name: "Helena S.", city: "Brasília", text: "Sem vida noturna, jantamos cedo e fomos dormir. Resetou o ritmo." },
  ],
  faqs: [
    { q: "Vale pra família?", a: "Perfeito. Mar calmo, plana, segura, sem trânsito. Ilha mais família-friendly do leste." },
    { q: "Quantos dias?", a: "4-5 dias. Mais que isso, ilha pode ficar lenta demais." },
    { q: "Como chegar?", a: "Speedboat de Laem Ngop (Trat). 50 min. Detalhes no guia." },
    { q: "Tem internet?", a: "4G ok, Wi-Fi nos resorts. Suficiente pra trabalho remoto leve." },
    { q: "Vida noturna?", a: "Zero. Vila pequena. Charme da ilha." },
    { q: "Posso combinar com Chang ou Kood?", a: "Sim. Roteiros combinados no guia." },
  ],
  finalCTA: {
    title: "Koh Mak é o reset que sua família precisa",
    subtitle: "Bike, praia rasa, vila amigável. 5 dias e você volta outra pessoa.",
  },
});

// ============================================================================
// TIER 4 (Day-trips / mergulho premium)
// ============================================================================

const larn = make(ilhasMeta[11], {
  bgGradient: "from-yellow-950 via-background to-amber-950",
  seoTitle: "Koh Larn — Day-trip honesto saindo de Pattaya",
  seoDescription: "Qual ferry pegar, praias que escapam dos grupos de excursão e como voltar sem fila. Day-trip de Koh Larn sem turistada chinesa.",
  heroTitle: "Koh Larn — day-trip",
  heroHighlight: "que vale (com manual)",
  heroSubtitle: "A 40 minutos de ferry de Pattaya, Koh Larn é o day-trip mais barato da Tailândia. Mas é também o mais cheio de armadilha: ferry pirata, taxi com preço inflado e a praia principal lotada de excursão. O guia te leva pra fora desse circuito.",
  heroWarning: "Quem vai em Tawaen Beach às 11h vira parte de selfie de 1.500 chineses. Existe outra praia, outro horário, outro ferry. E é simples.",
  pains: [
    { title: "Pegou o ferry pirata no cais", desc: "Tem dois cais em Pattaya. Um é o oficial. O outro cobra 5x." },
    { title: "Foi pra Tawaen Beach às 11h", desc: "Praia central, lotada, sem água limpa. Tem Samae e Tien Beach a 10min de songthaew." },
    { title: "Pagou caro no aluguel da espreguiçadeira", desc: "Preço justo é 100-150 baht. Cobram 400 e você nem sabe. Tabela no guia." },
    { title: "Não voltou no ferry certo", desc: "Último ferry oficial é cedo. Quem perde paga 10x num barco privado." },
  ],
  features: [
    { title: "Ferry oficial vs pirata", desc: "Como identificar e onde comprar." },
    { title: "5 praias mapeadas", desc: "Tawaen, Samae, Tien, Nual, Tha Waen. Qual escapar e qual ir." },
    { title: "Logística de volta", desc: "Último ferry, alternativa de barco e timing." },
  ],
  comparison: {
    theirs: ["Ferry pirata", "Tawaen lotada às 11h", "Espreguiçadeira a 400 baht", "Almoço no buffet de excursão", "Voltar no último barco lotado"],
    ours: ["Ferry oficial 30 baht", "Samae ou Tien a 10min", "Espreguiçadeira a 120 baht", "Restaurante local indicado", "Ferry de 14h sem fila"],
  },
  authority: {
    title: "3 day-trips em Koh Larn em fim de semana",
    paragraphs: [
      "Fiz 3 visitas a Larn em fins de semana diferentes pra entender o fluxo das excursões. O padrão é claro: chegam às 10h, saem às 15h. A janela boa é antes e depois.",
      "Todo o guia é mapeado pra essa janela.",
    ],
    bullets: ["3 visitas em sábados", "5 praias testadas a pé/songthaew", "Tabela de preços confirmada"],
  },
  modules: [
    { title: "Como chegar", desc: "Cais oficial e horários.", bullets: ["Cais Bali Hai", "Ferry público 30 baht", "Speedboat privado", "Tabela horários"] },
    { title: "As 5 praias", desc: "Qual vale ir.", bullets: ["Tawaen (evitar)", "Samae (top)", "Tien (calma)", "Nual (deserta)", "Tha Waen (chegada)"] },
    { title: "Songthaew na ilha", desc: "Tabela de preços.", bullets: ["Compartilhado", "Privado", "Negociação", "Mapa de rotas"] },
    { title: "Comer em Larn", desc: "Fora do circuito buffet.", bullets: ["Restaurante local Na-Ban", "Seafood pé na areia", "Frutas no markey", "Cafés do guia"] },
    { title: "Atividades", desc: "Além da praia.", bullets: ["Snorkel Tien", "Banana boat", "Parasailing (negociação)", "Mirante"] },
  ],
  bonuses: [
    { title: "Tabela de preços real", desc: "Espreguiçadeira, songthaew, almoço, snorkel — tudo cronometrado.", value: "R$ 47" },
    { title: "Mapa Google offline", desc: "Cais, praias, restaurantes, songthaew.", value: "R$ 57" },
    { title: "Roteiro 1 dia perfeito", desc: "PDF com horário de saída, praia, almoço e volta.", value: "R$ 47" },
    { title: "Lista negra de operadoras", desc: "As que aplicam golpe da espreguiçadeira e da volta.", value: "R$ 57" },
    { title: "Grupo de viajantes brasileiros", desc: "Brasileiros em Pattaya agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Rafael S.", city: "São Paulo", text: "Tinha planejado Tawaen. Mudei pra Samae depois do guia. Praia vazia, água limpa, 50 baht no songthaew." },
    { name: "Ana M.", city: "Rio de Janeiro", text: "Ferry oficial 30 baht em vez de 150 do pirata. Pagou o guia em 1 viagem." },
    { name: "Diego R.", city: "BH", text: "Voltei no ferry de 14h sem fila. Quem ficou pro último, perdeu 2h em pé esperando." },
    { name: "Carla B.", city: "Curitiba", text: "Almoço no restaurante local da vila por 200 baht. No buffet de excursão tinha cobrança de 800." },
    { name: "Lucas T.", city: "Porto Alegre", text: "Snorkel em Tien Beach foi melhor que muito tour pago em Phi Phi. Custo zero." },
    { name: "Mariana P.", city: "Brasília", text: "Tabela de preços do guia: usei como print no celular. Negociei tudo no preço justo." },
  ],
  faqs: [
    { q: "Vale a pena ir?", a: "Sim, como day-trip de Pattaya. Mar limpo, areia branca, perto. Só não vá em Tawaen às 11h." },
    { q: "Posso dormir em Larn?", a: "Pode, mas a maioria vai em day-trip. Quem dorme aproveita praia vazia ao amanhecer." },
    { q: "Quanto custa o passeio?", a: "Ferry R$ 6, espreguiçadeira R$ 25, almoço R$ 50. Total R$ 100 por pessoa. Detalhe no guia." },
    { q: "Quando ir?", a: "Qualquer mês. Evite fim de semana se quiser menos lotação." },
    { q: "É seguro?", a: "Sim. Crime baixo. Cuidado padrão com pertences na praia." },
    { q: "Tem internet?", a: "4G ok. Wi-Fi nos restaurantes." },
  ],
  finalCTA: {
    title: "Koh Larn é day-trip honesto — se você sair do circuito",
    subtitle: "Ferry certo, praia certa, preço justo. Em um PDF.",
  },
});

const similan = make(ilhasMeta[12], {
  bgGradient: "from-sky-950 via-background to-blue-950",
  seoTitle: "Ilhas Similan — Mergulho e snorkel premium (e como NÃO errar)",
  seoDescription: "Janela de outubro a maio, melhores liveaboards e day-trips, e os erros que destroem o passeio mais bonito da Tailândia.",
  heroTitle: "Ilhas Similan — top 10",
  heroHighlight: "do mergulho mundial",
  heroSubtitle: "Arquipélago no mar de Andaman, dentro de parque nacional, com água azul-cobalto e fauna marinha intocada. Fica aberto apenas 7 meses por ano. Quem pega a janela certa, vê o mergulho mais bonito do Sudeste Asiático.",
  heroWarning: "Quem tenta ir entre maio e outubro é barrado. Quem reserva o liveaboard errado paga 2x. Quem pega day-trip lotado, vê metade do que deveria.",
  pains: [
    { title: "Tentou ir em julho", desc: "Parque fecha 16 mai a 15 out. Você nem entra. Detalhe oficial que ainda surpreende muito turista." },
    { title: "Pegou day-trip lotado", desc: "Speedboat de 50 pessoas, 1h de fila pra subir o viewpoint, snorkel em água com 200 turistas." },
    { title: "Reservou liveaboard caro à toa", desc: "Tem barco a partir de R$ 4.500 (3 dias) e barco a R$ 25.000 (7 dias). Sem critério, você não escolhe certo." },
    { title: "Foi sem certificação", desc: "Quase todos os melhores spots de Similan são pra mergulhador certificado. Snorkel é só metade da experiência." },
  ],
  features: [
    { title: "Calendário de abertura oficial", desc: "Datas exatas + janela de melhor visibilidade." },
    { title: "Day-trip vs liveaboard", desc: "Quando vale cada um, com tabela de custo e o que entrega." },
    { title: "Top 8 operadoras avaliadas", desc: "Day-trip e liveaboard, com nota de segurança e didática." },
  ],
  comparison: {
    theirs: ["Tentar ir em junho", "Speedboat de 50 pax", "Liveaboard escolhido pelo Instagram", "Ir sem certificação", "Reservar 1 semana antes (esgotado)"],
    ours: ["Janela nov-mar garantida", "Barco com até 20 pessoas", "8 liveaboards comparados", "Combo OW em Koh Tao + liveaboard", "Reserva com 2 meses de antecedência"],
  },
  authority: {
    title: "3 liveaboards e 4 day-trips a Similan",
    paragraphs: [
      "Mergulhei em Similan em 3 anos diferentes, com operadoras diferentes, no Anita's Reef, East of Eden, Elephant Head, Christmas Point e Richelieu Rock.",
      "O guia é a destilação de 40+ mergulhos no parque, suficiente pra te dar a versão honesta de cada operadora e cada spot.",
    ],
    bullets: ["3 liveaboards comparados", "4 day-trips testados", "40+ mergulhos em Similan"],
  },
  modules: [
    { title: "Janela oficial e melhor época", desc: "Quando reservar.", bullets: ["Abertura 16 out", "Fechamento 15 mai", "Melhor visibilidade fev-abr", "Tubarão-baleia janela"] },
    { title: "Day-trip honesto", desc: "Qual operadora não lota o barco.", bullets: ["Saída de Khao Lak", "Saída de Phuket", "Speedboat vs barco grande", "O que esperar"] },
    { title: "Liveaboard", desc: "8 barcos comparados.", bullets: ["3 dias R$ 4.500", "5 dias R$ 8.500", "7 dias R$ 25.000", "Como reservar direto"] },
    { title: "Top dive sites", desc: "O que vai mergulhar.", bullets: ["Elephant Head", "Christmas Point", "East of Eden", "Richelieu Rock"] },
    { title: "Logística Khao Lak base", desc: "Onde dormir e como chegar.", bullets: ["Hotéis Khao Lak", "Transfer aeroporto Phuket", "Restaurantes", "Beach time"] },
  ],
  bonuses: [
    { title: "Calendário oficial do parque", desc: "Datas atualizadas + janelas de melhor visibilidade.", value: "R$ 47" },
    { title: "Comparativo 8 liveaboards", desc: "Tabela com preço, dias, dive sites, conforto.", value: "R$ 87" },
    { title: "Mapa dos 12 dive sites", desc: "Profundidade, nível, fauna esperada.", value: "R$ 67" },
    { title: "Lista hotéis Khao Lak", desc: "5 hospedagens testadas pra base no continente.", value: "R$ 57" },
    { title: "Grupo de mergulhadores brasileiros", desc: "Brasileiros mergulhando na região agora.", value: "R$ 97" },
  ],
  testimonials: [
    { name: "Bruno F.", city: "São Paulo", text: "Liveaboard 5 dias em Similan + Richelieu. Vi tubarão-baleia 3 vezes. Memória da vida." },
    { name: "Carla M.", city: "Rio de Janeiro", text: "Day-trip de Khao Lak na operadora do guia: 18 pessoas no barco, snorkel limpo. Diferença total." },
    { name: "Diego R.", city: "Curitiba", text: "Quase fui em julho. Calendário do guia me salvou de viagem perdida." },
    { name: "Helena S.", city: "BH", text: "Reservei liveaboard 3 meses antes pelo guia. 30% off em relação a quem fechou em cima da hora." },
    { name: "Lucas T.", city: "Porto Alegre", text: "Christmas Point é o mergulho mais bonito que fiz na vida. Visibilidade de 30m." },
    { name: "Ana P.", city: "Brasília", text: "Combo OW em Koh Tao + liveaboard em Similan: roteiro perfeito do guia. Saí com 20 mergulhos logados." },
  ],
  faqs: [
    { q: "Posso ir só pra snorkel?", a: "Sim, mas vai ver metade do que verá um mergulhador. Day-trip é ok pra snorkel." },
    { q: "Preciso de certificação?", a: "Pros melhores spots, sim (OW + AOW). O guia mostra como combinar com curso em Koh Tao." },
    { q: "Quando ir?", a: "Nov-abr é a melhor janela. Fev-mar é pico de visibilidade." },
    { q: "Day-trip ou liveaboard?", a: "Liveaboard ganha. Day-trip cansa pelo trajeto longo. Tabela completa no guia." },
    { q: "Onde dormir antes?", a: "Khao Lak. Mais perto do porto e dos liveaboards." },
    { q: "Quanto custa?", a: "Day-trip R$ 600-900. Liveaboard 3 dias R$ 4.500. Liveaboard 5 dias R$ 8.500." },
  ],
  finalCTA: {
    title: "Similan abre 7 meses por ano — você está na janela?",
    subtitle: "Liveaboard certo, operadora certa, época certa. Em um guia.",
  },
});

const racha = make(ilhasMeta[13], {
  bgGradient: "from-emerald-950 via-background to-sky-950",
  seoTitle: "Guia Koh Racha Tailândia | Ilha perto de Phuket sem perrengue",
  seoDescription: "Guia em português para brasileiros que querem conhecer Koh Racha saindo de Phuket com mais clareza, evitando passeio corrido, caro ou mal explicado.",
  heroTitle: "Koh Racha sem passeio corrido,",
  heroHighlight: "praia lotada e dinheiro jogado fora",
  heroSubtitle: "Um guia em português para brasileiros que querem conhecer Koh Racha com mais clareza: como encaixar a ilha no roteiro, o que esperar, quando vale a pena ir e como evitar passeio pega-turista saindo de Phuket.",
  heroWarning: "Koh Racha parece simples no Instagram. Mas escolher errado pode estragar o dia — barco cheio, parada mal planejada e pouco tempo de praia.",
  pains: [
    { title: "Comprou no escuro pela foto bonita", desc: "O vídeo curto não mostra se o passeio é corrido, se a praia lota no horário que você chega, ou se o barco vai estar cheio." },
    { title: "Encaixou Koh Racha no dia errado", desc: "Sem entender quando a ilha vale a pena no seu roteiro, você acaba sacrificando um dia de Phuket por um bate-volta que não combina com você." },
    { title: "Caiu em passeio pega-turista", desc: "Promessa de paraíso, entrega de barco lotado, parada rápida e aquela sensação de 'era bonito, mas eu não aproveitei como deveria'." },
    { title: "Não comparou com outras ilhas", desc: "Phi Phi, Coral, Racha, Yao... sem critério, você escolhe a errada pro seu perfil e perde dinheiro tentando." },
  ],
  features: [
    { title: "Quando Koh Racha faz sentido", desc: "Se vale bate-volta, se encaixa melhor de outra forma ou se outra ilha serve mais pra você." },
    { title: "O que observar antes de fechar", desc: "Sinais práticos de passeio corrido, promessa exagerada e tour pega-turista saindo de Phuket." },
    { title: "Comparação mental com outras ilhas", desc: "Racha vs. Phi Phi, Coral, Yao — pra você decidir sem montar roteiro corrido demais." },
  ],
  comparison: {
    theirs: [
      "Escolhe Koh Racha só por foto bonita",
      "Compra bate-volta sem saber se o tempo na ilha compensa",
      "Pega barco cheio, praia lotada e roteiro corrido",
      "Não sabe comparar com outras ilhas saindo de Phuket",
      "Gasta em passeio que não combina com seu perfil",
    ],
    ours: [
      "Entende quando Koh Racha faz sentido no roteiro",
      "Sabe o que observar antes de fechar passeio",
      "Compara melhor opções saindo de Phuket",
      "Evita expectativa errada sobre tempo e deslocamento",
      "Planeja o dia com clareza e menos tentativa e erro",
    ],
  },
  authority: {
    title: "Informação prática, não texto genérico de blog",
    paragraphs: [
      "O Guias Tailândia foi criado para brasileiros que querem viajar melhor, com menos perrengue e mais clareza. A proposta não é encher a página de frase bonita.",
      "É te ajudar a tomar decisões práticas: onde vale ir, o que evitar, como comparar opções e quando uma experiência realmente combina com seu roteiro. Koh Racha pode ser incrível — mas só se você souber escolher do jeito certo.",
    ],
    bullets: ["Conteúdo prático em português", "Foco em decisão, não em frase bonita", "Pensado pra quem está em Phuket"],
  },
  modules: [
    { title: "Quando Koh Racha vale a pena", desc: "Em que momento da viagem a ilha encaixa.", bullets: ["Bate-volta ou outro formato", "Quanto tempo reservar", "Perfil de viajante que combina", "Quando escolher outra ilha"] },
    { title: "Como encaixar no roteiro de Phuket", desc: "Sem sacrificar o que importa em Phuket.", bullets: ["Que dia escolher", "O que cortar", "Combinação com outras experiências", "Logística honesta"] },
    { title: "O que observar antes de reservar", desc: "Sinais de passeio bom x cilada.", bullets: ["Duração real", "Tamanho do barco", "Paradas e tempo de praia", "Promessa exagerada"] },
    { title: "Comparação com outras ilhas", desc: "Pra escolher com critério, não no impulso.", bullets: ["Phi Phi", "Coral Island", "Koh Yao", "Critérios de decisão"] },
    { title: "Checklist antes de fechar tour", desc: "Pra perguntar tudo antes de pagar.", bullets: ["O que confirmar", "O que perguntar ao vendedor", "Sinais de alerta", "Quando recuar"] },
  ],
  bonuses: [
    { title: "Checklist antes de reservar passeio", desc: "Tudo o que perguntar antes de pagar qualquer tour pra Koh Racha.", value: "R$ 47" },
    { title: "Comparativo rápido entre ilhas", desc: "Racha, Phi Phi, Coral e Yao em uma página de decisão.", value: "R$ 47" },
    { title: "Sinais de passeio pega-turista", desc: "Como identificar tour corrido antes de soltar o cartão.", value: "R$ 57" },
    { title: "Roteiro de dia bem aproveitado", desc: "Horário, expectativa e o que priorizar pra não voltar frustrado.", value: "R$ 47" },
    { title: "Acesso digital pra consultar na viagem", desc: "Conteúdo fácil de abrir no celular durante o roteiro em Phuket.", value: "R$ 67" },
  ],
  testimonials: [
    { name: "Camila R.", city: "Belo Horizonte", text: "Eu ia comprar um passeio para Koh Racha só porque vi uma foto linda. O guia me ajudou a entender melhor se fazia sentido no meu roteiro e o que perguntar antes de fechar." },
    { name: "Diego M.", city: "São Paulo", text: "Eu estava em Phuket e completamente perdido entre Phi Phi, Racha, Coral Island e outras opções. O guia deixou a decisão mais simples e evitou que eu comprasse no impulso." },
    { name: "Renata A.", city: "Curitiba", text: "Gostei porque não fica romantizando tudo. Ele mostra o que observar antes de pagar, principalmente se o passeio for muito corrido." },
    { name: "Marcos T.", city: "Rio de Janeiro", text: "Cheguei em Phuket cheio de vendedor oferecendo Racha. Com o guia consegui filtrar e escolher sem stress." },
    { name: "Helena B.", city: "Porto Alegre", text: "Eu achei que ia ser só mais um bate-volta. O guia me ajudou a entender quando faz sentido — e quando é melhor pular." },
    { name: "Lucas P.", city: "Florianópolis", text: "Vale cada centavo só pelo checklist antes de fechar tour. Evita compra no impulso." },
  ],
  faqs: [
    { q: "O guia é digital?", a: "Sim. Você recebe acesso ao guia digital em português para consultar antes e durante a viagem." },
    { q: "Recebo o guia na hora?", a: "Sim. Após a confirmação da compra, o acesso é liberado digitalmente." },
    { q: "Esse guia serve para quem vai ficar em Phuket?", a: "Sim. Koh Racha costuma ser considerada por quem está em Phuket, então o guia foi pensado para ajudar nessa decisão e nesse encaixe de roteiro." },
    { q: "O guia inclui reserva de passeio?", a: "Não. O guia não é uma agência e não inclui reserva. Ele te ajuda a entender melhor antes de pagar qualquer passeio." },
    { q: "Serve para quem viaja sozinho, em casal ou em grupo?", a: "Sim. A lógica do guia serve para diferentes estilos de viagem, porque o foco é te ajudar a decidir se Koh Racha vale a pena pro seu roteiro." },
    { q: "Posso acessar pelo celular?", a: "Sim. O conteúdo foi pensado pra ser fácil de consultar pelo celular durante a viagem." },
    { q: "E se eu comprar e não gostar?", a: "Você tem garantia simples de 7 dias. Se o guia não te ajudar a planejar com mais clareza, pode pedir reembolso dentro do prazo." },
  ],
  finalCTA: {
    title: "Não transforme Koh Racha em mais um passeio comprado no impulso",
    subtitle: "Entenda antes se a ilha combina com seu roteiro, o que observar antes de reservar e como evitar um dia bonito virar um perrengue caro.",
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

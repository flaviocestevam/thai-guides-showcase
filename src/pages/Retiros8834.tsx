import { SEO } from "@/components/SEO";

const Section = ({ chapter, title, id, children }: { chapter: string; title: string; id?: string; children: React.ReactNode }) => (
  <section id={id} className="py-16 px-6 scroll-mt-20">
    <div className="max-w-3xl mx-auto">
      <p className="guide-section-label mb-4">{chapter}</p>
      <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">{title}</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-card rounded-lg p-5 border border-border space-y-2">{children}</div>
);

const gmaps = (q: string) => `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
const websiteSearch = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q + " official site Thailand")}`;

type Retreat = {
  name: string;
  area: string;
  modality: string;
  level: "Iniciante" | "Intermediário" | "Avançado" | "Todos";
  duration: string;
  price: string;
  language: string;
  tip: string;
  rating: number;
  mapsUrl: string;
  website: string;
};

const r = (city: string, o: Omit<Retreat, "mapsUrl" | "website"> & { mapsQ?: string; site?: string }): Retreat => ({
  ...o,
  mapsUrl: gmaps(o.mapsQ ?? `${o.name} ${city} Thailand`),
  website: o.site ?? websiteSearch(`${o.name} ${city}`),
});

const RetreatCard = ({ x }: { x: Retreat }) => (
  <Card>
    <div className="flex justify-between items-start gap-3">
      <h3 className="font-display text-2xl text-foreground">{x.name}</h3>
      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">★ {x.rating}/10</span>
    </div>
    <p className="text-sm">📍 {x.area}</p>
    <p className="text-sm">🧘 <strong>Modalidade:</strong> {x.modality}</p>
    <p className="text-sm">📊 <strong>Nível:</strong> {x.level} · <strong>Duração:</strong> {x.duration}</p>
    <p className="text-sm">💰 <strong>Preço:</strong> {x.price}</p>
    <p className="text-sm">🗣️ <strong>Idioma:</strong> {x.language}</p>
    <p className="text-sm italic">💡 {x.tip}</p>
    <div className="flex flex-wrap gap-3 pt-1">
      <a href={x.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Google Maps</a>
      <a href={x.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Site oficial</a>
    </div>
  </Card>
);

type CityBlock = { slug: string; name: string; tagline: string; retreats: Retreat[] };

const cities: CityBlock[] = [
  {
    slug: "bangkok",
    name: "Bangkok e arredores",
    tagline: "Capital + Bang Krachao (ilha verde) + templos no centro. Bom pra retiros curtos antes/depois de outras paradas.",
    retreats: [
      r("Bangkok", { name: "RAKxa Wellness & Medical Retreat", area: "Bang Nam Phueng, Bang Krachao (ilha verde)", modality: "Detox médico integrativo + yoga", level: "Todos", duration: "3 a 14 dias", price: "฿80.000–฿300.000 (R$ 11.650–R$ 43.700)", language: "Inglês (concierge pt-br)", tip: "Único 'medical wellness' real do país. Exames clínicos inclusos.", rating: 10, site: "https://www.rakxawellness.com" }),
      r("Bangkok", { name: "Wat Mahathat Section 5", area: "Maharaj Rd, ao lado do Grand Palace", modality: "Vipassana intro", level: "Iniciante", duration: "3 a 7 dias (aberto)", price: "POR DOAÇÃO", language: "Inglês", tip: "Pra testar antes de comprometer 10 dias. Bem no centro turístico.", rating: 8, site: "https://www.mahachula.com" }),
      r("Bangkok", { name: "Wat Pho Meditation Center", area: "Wat Pho, Phra Nakhon", modality: "Meditação Samatha + Vipassana", level: "Iniciante", duration: "1 a 7 dias (drop-in)", price: "POR DOAÇÃO — ฿500/dia sugerido", language: "Inglês + thai", tip: "No templo do Buda Reclinado. Sessões de 90min em grupo, abertas.", rating: 8 }),
      r("Bangkok", { name: "Divana Divine Spa & Wellness", area: "Sukhumvit 11", modality: "Spa retreat dia ou half-day", level: "Iniciante", duration: "4h a 8h (day)", price: "฿4.500–฿12.000 (R$ 650–R$ 1.750)", language: "Inglês", tip: "Não é retiro residencial, mas combo dia inteiro com tratamentos + almoço orgânico.", rating: 8, site: "https://www.divanaspa.com" }),
      r("Bangkok", { name: "Sorn Thawee Meditation Centre", area: "Chachoengsao, 1h30 leste", modality: "Mahasi Vipassana", level: "Intermediário", duration: "7 a 30 dias", price: "POR DOAÇÃO", language: "Inglês", tip: "Alternativa perto de Bangkok pra quem não consegue ir até Surat Thani.", rating: 9, site: "https://www.sornthawee.org" }),
    ],
  },
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    tagline: "Capital espiritual do norte. Maior densidade de retiros de meditação, yoga TTC e templos por doação do país.",
    retreats: [
      r("Chiang Mai", { name: "Wat Ram Poeng (Northern Insight)", area: "Suthep, atrás de Wat Umong", modality: "Vipassana Mahasi Sayadaw", level: "Intermediário", duration: "10 ou 26 dias", price: "POR DOAÇÃO — ฿200/dia sugerido", language: "Inglês", tip: "Entrevistas diárias com mestre. Cabine privativa. O mais sério da cidade.", rating: 9, site: "https://www.palikanon.com/vipassana/wat_rampoeng" }),
      r("Chiang Mai", { name: "Doi Suthep Vipassana Center", area: "Doi Suthep mountain", modality: "Vipassana fundamentals", level: "Iniciante", duration: "3, 10 ou 21 dias", price: "POR DOAÇÃO — ฿500–฿1.500", language: "Inglês", tip: "Vista de montanha. Curso 'fundamentals' de 3 dias é o melhor 1º Vipassana.", rating: 9, site: "https://fivethousandyears.org" }),
      r("Chiang Mai", { name: "Wise Living Yoga Academy", area: "Mae Rim, 25min do centro", modality: "YTT 200h/300h Yoga Alliance", level: "Intermediário", duration: "21 a 28 dias", price: "฿65.000–฿95.000 (R$ 9.500–R$ 13.800)", language: "Inglês", tip: "TTC sério, com anatomia clínica. Fora do circuito instagrammer.", rating: 9, site: "https://www.wiselivingyoga.com" }),
      r("Chiang Mai", { name: "Yoga Tree Chiang Mai", area: "Sirimangkalajarn Rd, Nimman", modality: "Hatha, vinyasa, yin (retiros curtos)", level: "Iniciante", duration: "3 a 7 dias", price: "฿8.000–฿18.000 (R$ 1.170–R$ 2.620)", language: "Inglês", tip: "Bom pra 1º retiro. Combina aulas com vida na cidade.", rating: 8, site: "https://www.yogatreechiangmai.com" }),
      r("Chiang Mai", { name: "Sacred Sound Healing (Pun Pun Farm)", area: "Mae Taeng, 1h ao norte", modality: "Cacau cerimonial + som + raw food + permacultura", level: "Iniciante", duration: "3 a 7 dias", price: "฿12.000–฿30.000 (R$ 1.750–R$ 4.370)", language: "Inglês", tip: "Fazenda orgânica histórica. Workshops de seed saving inclusos.", rating: 8, site: "https://www.punpunthailand.org" }),
      r("Chiang Mai", { name: "5Rhythms Thailand", area: "Nimman (salões rotativos)", modality: "Dança 5Rhythms (Gabrielle Roth)", level: "Iniciante", duration: "Workshops 3 dias", price: "฿8.000–฿18.000 (R$ 1.170–R$ 2.620)", language: "Inglês", tip: "Linhagem oficial certificada. Calendário irregular — siga Facebook.", rating: 8 }),
      r("Chiang Mai", { name: "Suan Sati Yoga Retreat", area: "Doi Saket, 30min leste", modality: "Hatha + meditação + ecstatic dance", level: "Todos", duration: "5 a 14 dias", price: "฿20.000–฿55.000 (R$ 2.900–R$ 8.000)", language: "Inglês", tip: "Comunidade pequena na montanha. Comida vegetariana incluída.", rating: 9, site: "https://www.suansati.com" }),
      r("Chiang Mai", { name: "Mantra Wake Up Yoga Retreat", area: "Mae Rim", modality: "Yoga + meditação + breathwork", level: "Iniciante", duration: "3 a 10 dias", price: "฿12.000–฿38.000 (R$ 1.750–R$ 5.530)", language: "Inglês", tip: "Custo-benefício forte. Estrutura simples mas honesta.", rating: 8 }),
    ],
  },
  {
    slug: "pai",
    name: "Pai (norte hippie)",
    tagline: "Vilarejo de montanha 3h ao norte de Chiang Mai. Cena alternativa, retiros pequenos e baratos.",
    retreats: [
      r("Pai", { name: "Mam Yoga House Pai", area: "Centro de Pai", modality: "Hatha + yin + meditação", level: "Iniciante", duration: "5 a 14 dias", price: "฿9.000–฿25.000 (R$ 1.310–R$ 3.640)", language: "Inglês", tip: "Bangalôs simples na rizicultura. Mam é referência local há 15 anos.", rating: 8 }),
      r("Pai", { name: "Xhale Yoga Pai", area: "Wiang Tai", modality: "Vinyasa, breathwork, ice bath", level: "Todos", duration: "3 a 7 dias", price: "฿10.000–฿28.000 (R$ 1.450–R$ 4.080)", language: "Inglês", tip: "Wim Hof na cachoeira é o destaque. Grupos pequenos.", rating: 8 }),
      r("Pai", { name: "Sumantra Yoga Retreat", area: "Mae Hee Valley", modality: "Tantra, kundalini, sound healing", level: "Intermediário", duration: "7 a 14 dias", price: "฿18.000–฿45.000 (R$ 2.620–R$ 6.550)", language: "Inglês", tip: "Cena tantra séria, sem o circo de Sri Thanu.", rating: 8 }),
      r("Pai", { name: "Wat Pa Tam Wua Forest Monastery", area: "Mae La Noi, 1h de Pai", modality: "Vipassana floresta, monges thai", level: "Iniciante", duration: "Aberto (3 a 30 dias)", price: "POR DOAÇÃO", language: "Inglês básico + thai", tip: "Roupas brancas fornecidas. Vagas sempre — chegue qualquer dia.", rating: 10, site: "https://www.watpatamwua.com" }),
    ],
  },
  {
    slug: "chiang-rai",
    name: "Chiang Rai e Triângulo Dourado",
    tagline: "Extremo norte. Menos retiros, mas templos discretos de meditação e wellness premium em resorts isolados.",
    retreats: [
      r("Chiang Rai", { name: "Anantara Golden Triangle Wellness", area: "Chiang Saen, beira do Mekong", modality: "Yoga + spa + meditação em resort", level: "Todos", duration: "3 a 7 dias", price: "฿35.000–฿120.000 (R$ 5.100–R$ 17.500)", language: "Inglês", tip: "Day pass com 3 tratamentos sai ฿4.500. Vista pra Laos e Mianmar.", rating: 10, site: "https://www.anantara.com/en/golden-triangle-chiang-rai" }),
      r("Chiang Rai", { name: "Four Seasons Tented Camp Wellness", area: "Triângulo Dourado", modality: "Wellness em barracas de luxo + elefantes", level: "Todos", duration: "3 noites (pacote fixo)", price: "฿85.000+/noite (R$ 12.400+)", language: "Inglês (pt-br concierge)", tip: "Caro mas inclui experiência com elefantes resgatados.", rating: 10, site: "https://www.fourseasons.com/goldentriangle" }),
      r("Chiang Rai", { name: "Wat Phra That Doi Tung Meditation", area: "Doi Tung mountain", modality: "Meditação em templo de montanha", level: "Iniciante", duration: "1 a 5 dias (drop-in)", price: "POR DOAÇÃO", language: "Thai (inglês limitado)", tip: "Sem estrutura turística — só vá se topa simplicidade total.", rating: 7 }),
    ],
  },
  {
    slug: "phuket",
    name: "Phuket",
    tagline: "Maior ilha do país. Centros médicos sérios + spas premium. Evite Patong, foque em Nai Harn, Chalong e Mai Khao.",
    retreats: [
      r("Phuket", { name: "Atmanjai Wellness Centre", area: "Patong (mas isolado em colina)", modality: "Detox supervisionado, jejum, raw food", level: "Iniciante", duration: "7 a 21 dias", price: "฿55.000–฿180.000 (R$ 8.000–R$ 26.200)", language: "Inglês", tip: "Médico ayurvédico residente. O detox mais sério da Tailândia.", rating: 10, site: "https://www.atmanjai.com" }),
      r("Phuket", { name: "Phuket Cleanse", area: "Nai Harn", modality: "Fitness + detox + jejum intermitente", level: "Intermediário", duration: "7 a 28 dias", price: "฿60.000–฿200.000 (R$ 8.740–R$ 29.100)", language: "Inglês", tip: "Treino funcional pesado. Pra quem quer perder peso real.", rating: 9, site: "https://www.phuketcleanse.com" }),
      r("Phuket", { name: "Mangosteen Ayurveda & Wellness Resort", area: "Rawai", modality: "Ayurveda autêntica + panchakarma", level: "Todos", duration: "5 a 21 dias", price: "฿45.000–฿150.000 (R$ 6.550–R$ 21.800)", language: "Inglês", tip: "Médicos ayurvédicos indianos residentes. Panchakarma sério.", rating: 9, site: "https://www.mangosteen-phuket.com" }),
      r("Phuket", { name: "Amatara Wellness Resort", area: "Cape Panwa", modality: "Wellness integrativo + medicina chinesa", level: "Todos", duration: "3 a 14 dias", price: "฿55.000–฿180.000 (R$ 8.000–R$ 26.200)", language: "Inglês", tip: "Beira-mar, programa 'Detox & Cleanse' tem evidência clínica.", rating: 9, site: "https://www.amataraphuket.com" }),
      r("Phuket", { name: "Anantara Mai Khao Spa Retreats", area: "Mai Khao (norte da ilha)", modality: "Yoga + spa + retiros 3 noites", level: "Iniciante", duration: "3 a 5 dias", price: "฿38.000–฿120.000 (R$ 5.530–R$ 17.500)", language: "Inglês", tip: "Vilas com piscina privada. Praia deserta no norte.", rating: 9 }),
      r("Phuket", { name: "Sukko Cultural Spa & Wellness", area: "Chalong", modality: "Spa cultural Lanna, rituais 3h", level: "Todos", duration: "Day a 3 dias", price: "฿3.000–฿18.000 (R$ 440–R$ 2.620)", language: "Inglês", tip: "Day pass ฿5.500 com almoço + 3 tratamentos.", rating: 10, site: "https://www.sukkospa.com" }),
    ],
  },
  {
    slug: "krabi",
    name: "Krabi e Railay",
    tagline: "Falésias, escalada e silêncio. Retiros pequenos em Ao Nang, Tonsai e ilhas próximas.",
    retreats: [
      r("Krabi", { name: "Yoga Sala Ao Nang", area: "Ao Nang Beach", modality: "Hatha + vinyasa + retiros 5 dias", level: "Iniciante", duration: "3 a 7 dias", price: "฿9.000–฿22.000 (R$ 1.310–R$ 3.200)", language: "Inglês", tip: "Sala aberta com vista pro mar. Drop-in possível.", rating: 8 }),
      r("Krabi", { name: "The Tubkaak Krabi Wellness", area: "Tubkaak Beach (norte de Ao Nang)", modality: "Yoga + spa + retiros românticos", level: "Iniciante", duration: "3 a 7 dias", price: "฿28.000–฿95.000 (R$ 4.080–R$ 13.830)", language: "Inglês", tip: "Boutique 5*, vista pra ilhas Hong. Ideal pra casais.", rating: 9, site: "https://www.tubkaakresort.com" }),
      r("Krabi", { name: "Rayavadee Wellness", area: "Railay Beach", modality: "Yoga + spa em falésia", level: "Todos", duration: "3 a 5 dias", price: "฿55.000+/noite (R$ 8.000+)", language: "Inglês", tip: "Único 5* em Railay, sem estradas. Spa entre falésias calcárias.", rating: 10, site: "https://www.rayavadee.com" }),
      r("Krabi", { name: "Sahara Yoga Studio", area: "Tonsai Beach", modality: "Yoga pra escaladores + restorative", level: "Todos", duration: "Drop-in a 7 dias", price: "฿400/aula · pacotes ฿8.000+", language: "Inglês", tip: "Pra quem combina escalada com yoga. Sem luxo, atmosfera hippie.", rating: 7 }),
    ],
  },
  {
    slug: "koh-samui",
    name: "Koh Samui",
    tagline: "Top mundial em wellness premium. Kamalaya, Vikasa, Absolute Sanctuary, Six Senses — tudo aqui.",
    retreats: [
      r("Koh Samui", { name: "Kamalaya Wellness Sanctuary", area: "Laem Set, sul da ilha", modality: "Yoga + medicina chinesa + ayurveda", level: "Todos", duration: "5 a 21 dias", price: "฿120.000–฿400.000 (R$ 17.500–R$ 58.000)", language: "Inglês", tip: "Top mundial. Programa 'Burnout' tem médico dedicado.", rating: 10, site: "https://www.kamalaya.com" }),
      r("Koh Samui", { name: "Vikasa Yoga Retreat", area: "Lamai sul, em falésia", modality: "Yoga + breathwork + sound healing", level: "Todos", duration: "5 a 14 dias", price: "฿32.000–฿110.000 (R$ 4.650–R$ 16.000)", language: "Inglês", tip: "Peça quarto 'Cliff' — vista direta no Golfo.", rating: 10, site: "https://www.vikasayoga.com" }),
      r("Koh Samui", { name: "Absolute Sanctuary", area: "Choeng Mon", modality: "Yoga + pilates + detox + fitness", level: "Todos", duration: "3 a 14 dias", price: "฿40.000–฿150.000 (R$ 5.800–R$ 21.800)", language: "Inglês", tip: "Mais fitness que espiritual. Bom pra quem odeia incenso.", rating: 9, site: "https://www.absolutesanctuary.com" }),
      r("Koh Samui", { name: "Six Senses Samui Wellness", area: "Choeng Mon (cabo)", modality: "Wellness integrativo + detox", level: "Todos", duration: "3 a 7 dias", price: "฿95.000+/noite (R$ 13.830+)", language: "Inglês", tip: "Vilas em colina com piscina privada. Programa 'Sleep' é o destaque.", rating: 10, site: "https://www.sixsenses.com/en/resorts/samui" }),
      r("Koh Samui", { name: "Spa Samui Beach Resort (The Spa)", area: "Lamai", modality: "Detox + jejum + colônica", level: "Iniciante", duration: "3 a 14 dias", price: "฿15.000–฿55.000 (R$ 2.180–R$ 8.000)", language: "Inglês", tip: "Pioneiro de detox em Samui (1990s). Estrutura simples, preço justo.", rating: 8, site: "https://www.thesparesorts.com" }),
      r("Koh Samui", { name: "Yogarden Samui", area: "Bang Por (oeste)", modality: "Yoga + permacultura + raw food", level: "Iniciante", duration: "3 a 14 dias", price: "฿12.000–฿38.000 (R$ 1.750–R$ 5.530)", language: "Inglês", tip: "Comunidade pequena. Fazenda própria fornece comida.", rating: 8 }),
    ],
  },
  {
    slug: "koh-phangan",
    name: "Koh Phangan",
    tagline: "Capital mundial do yoga, tantra e ecstatic dance. Sri Thanu é o epicentro. Evite Haad Rin (festa).",
    retreats: [
      r("Koh Phangan", { name: "Agama Yoga", area: "Sri Thanu", modality: "Tantra yoga, hatha, meditação", level: "Todos", duration: "1 semana a 1 mês", price: "฿18.000–฿55.000 (R$ 2.600–R$ 8.000)", language: "Inglês", tip: "Maior escola tantra do mundo. Aborda sexualidade sagrada — vá aberto.", rating: 9, site: "https://www.agamayoga.com" }),
      r("Koh Phangan", { name: "Orion Healing Center", area: "Srithanu Beach", modality: "Yoga + detox + jejum", level: "Iniciante", duration: "3, 7 ou 14 dias", price: "฿12.000–฿45.000 (R$ 1.750–R$ 6.500)", language: "Inglês", tip: "Combo detox + yoga é o carro-chefe. Naturopata na equipe.", rating: 9, site: "https://www.orionhealing.com" }),
      r("Koh Phangan", { name: "Samma Karuna", area: "Sri Thanu", modality: "Yoga, tantra, breathwork, ice bath", level: "Intermediário", duration: "1 a 4 semanas", price: "฿22.000–฿70.000 (R$ 3.200–R$ 10.200)", language: "Inglês", tip: "Professores brasileiros frequentes. Peça calendário pt-br.", rating: 9, site: "https://sammakaruna.org" }),
      r("Koh Phangan", { name: "The Sanctuary", area: "Haad Tien Beach (só de barco)", modality: "Yoga + detox + healing", level: "Todos", duration: "Mín. 3 noites", price: "฿2.500–฿6.000/noite + aulas", language: "Inglês", tip: "Isolamento total. Bom pra desintoxicar do mundo.", rating: 9, site: "https://www.thesanctuarythailand.com" }),
      r("Koh Phangan", { name: "Pyramid Yoga Center", area: "Sri Thanu", modality: "Yoga em pirâmide + raw vegan", level: "Intermediário", duration: "7 a 28 dias", price: "฿20.000–฿60.000 (R$ 2.900–R$ 8.700)", language: "Inglês", tip: "Conceito alternativo. Comida raw inclusa.", rating: 8, site: "https://www.pyramidyogakohphangan.com" }),
      r("Koh Phangan", { name: "Wat Khao Tham", area: "Topo da colina, centro", modality: "Vipassana em monastério", level: "Intermediário", duration: "10 ou 20 dias", price: "POR DOAÇÃO — ฿6.500 sugerido", language: "Inglês", tip: "Único Vipassana sério em ilha. Calor + insetos — preparo físico.", rating: 9, site: "https://www.watkowtahm.org" }),
      r("Koh Phangan", { name: "Mantra Detox", area: "Sri Thanu", modality: "Suco + colônica + meditação", level: "Iniciante", duration: "5 a 10 dias", price: "฿15.000–฿35.000 (R$ 2.180–R$ 5.100)", language: "Inglês", tip: "Custo-benefício forte. Sem luxo, mas com supervisão.", rating: 8, site: "https://mantradetox.com" }),
      r("Koh Phangan", { name: "Ecstatic Dance Sri Thanu", area: "Pyramid Yoga / Sri Thanu", modality: "Dança extática + breathwork", level: "Iniciante", duration: "Semanal · retiros 5 dias", price: "฿200/sessão · ฿15.000+ retiros", language: "Inglês", tip: "Cena ecstatic dance mais forte da Ásia. Vá descalço.", rating: 9 }),
      r("Koh Phangan", { name: "Phangan Kratom Center", area: "Sri Thanu", modality: "Kratom (legal) + meditação", level: "Iniciante", duration: "5 a 14 dias", price: "฿18.000–฿50.000 (R$ 2.620–R$ 7.280)", language: "Inglês", tip: "Kratom é legal desde 2021. Ritual leve, não psicodélico.", rating: 8 }),
    ],
  },
  {
    slug: "koh-tao",
    name: "Koh Tao",
    tagline: "Ilha do mergulho. Poucos retiros, mas yoga combinado com freediving é a especialidade local.",
    retreats: [
      r("Koh Tao", { name: "Ocean Sound Dive & Yoga", area: "Sairee Beach", modality: "Yoga + freediving + meditação aquática", level: "Todos", duration: "5 a 10 dias", price: "฿18.000–฿55.000 (R$ 2.620–R$ 8.000)", language: "Inglês", tip: "Combo único: ioga matinal + apneia à tarde. Sem isso, sem retiro sério.", rating: 9 }),
      r("Koh Tao", { name: "Shambhala Yoga & Healing", area: "Chalok Baan Kao", modality: "Yin yoga + restorative + sound bath", level: "Iniciante", duration: "3 a 7 dias", price: "฿10.000–฿28.000 (R$ 1.450–R$ 4.080)", language: "Inglês", tip: "Ambiente intimista, máx 8 pessoas. Vista pro mar.", rating: 8 }),
      r("Koh Tao", { name: "Goodtime Adventures Yoga Retreat", area: "Sairee", modality: "Yoga + freediving + escalada", level: "Intermediário", duration: "5 a 7 dias", price: "฿22.000–฿45.000 (R$ 3.200–R$ 6.550)", language: "Inglês", tip: "Pra quem quer movimento e aventura junto.", rating: 8 }),
    ],
  },
  {
    slug: "koh-lanta",
    name: "Koh Lanta",
    tagline: "Ilha tranquila no Andamã. Atmosfera lenta, retiros pequenos focados em yin e silêncio.",
    retreats: [
      r("Koh Lanta", { name: "Oasis Yoga Lanta", area: "Long Beach (Phra Ae)", modality: "Hatha, vinyasa, yin", level: "Todos", duration: "3 a 7 dias", price: "฿9.000–฿24.000 (R$ 1.310–R$ 3.490)", language: "Inglês", tip: "Sala aberta em jardim. Aulas pôr-do-sol são o ponto alto.", rating: 8 }),
      r("Koh Lanta", { name: "Pimalai Spa Retreats", area: "Ba Kantiang Bay (sul)", modality: "Spa + yoga + meditação", level: "Iniciante", duration: "3 a 5 dias", price: "฿45.000–฿150.000 (R$ 6.550–R$ 21.800)", language: "Inglês", tip: "5* na enseada mais isolada da ilha. Spa em palácio thai.", rating: 9, site: "https://www.pimalai.com" }),
      r("Koh Lanta", { name: "Layana Resort Wellness", area: "Long Beach", modality: "Yoga + spa + retiros 'silêncio digital'", level: "Iniciante", duration: "3 a 7 dias", price: "฿28.000–฿85.000 (R$ 4.080–R$ 12.380)", language: "Inglês", tip: "Adults-only. Programa digital detox real (lacram celular).", rating: 9, site: "https://www.layanaresort.com" }),
    ],
  },
  {
    slug: "koh-chang",
    name: "Koh Chang e leste",
    tagline: "Lado leste, perto do Camboja. Versão mais barata e silenciosa de Phangan.",
    retreats: [
      r("Koh Chang", { name: "The Spa Resorts Koh Chang", area: "Klong Prao Beach", modality: "Detox + raw food + yoga", level: "Iniciante", duration: "3 a 14 dias", price: "฿18.000–฿70.000 (R$ 2.620–R$ 10.200)", language: "Inglês", tip: "Versão mais barata e tranquila do detox de Phangan/Samui.", rating: 8, site: "https://www.thesparesorts.com" }),
      r("Koh Chang", { name: "Amber Sands Beach Resort Yoga", area: "Lonely Beach", modality: "Yoga + meditação informal", level: "Iniciante", duration: "Drop-in a 7 dias", price: "฿8.000–฿22.000 (R$ 1.170–R$ 3.200)", language: "Inglês", tip: "Pra quem quer combinar yoga leve com praia deserta.", rating: 7 }),
      r("Trat", { name: "Wat Marp Jan", area: "Rayong (3h de Koh Chang)", modality: "Tradição Ajahn Chah, floresta", level: "Avançado", duration: "Aberto (1 semana+)", price: "POR DOAÇÃO", language: "Inglês", tip: "Mosteiro de floresta sério. Pra quem já meditou.", rating: 9, site: "https://www.watmarpjan.org" }),
    ],
  },
  {
    slug: "hua-hin",
    name: "Hua Hin",
    tagline: "Praia da realeza thai. Lar do Chiva-Som, primeiro wellness resort de luxo da Ásia.",
    retreats: [
      r("Hua Hin", { name: "Chiva-Som International Health Resort", area: "Petchkasem Rd, praia central", modality: "Wellness integrativo + medicina holística", level: "Todos", duration: "3 a 21 dias (mín. 3)", price: "฿95.000–฿400.000 (R$ 13.830–R$ 58.000)", language: "Inglês (concierge pt-br)", tip: "Pioneiro asiático (1995). Consultor de saúde dedicado.", rating: 10, site: "https://www.chivasom.com" }),
      r("Hua Hin", { name: "Evason Hua Hin Wellness", area: "Pranburi (30min sul)", modality: "Spa + yoga + ayurveda", level: "Iniciante", duration: "3 a 7 dias", price: "฿18.000–฿65.000 (R$ 2.620–R$ 9.470)", language: "Inglês", tip: "Boutique 4*, custo-benefício pra quem não topa Chiva-Som.", rating: 8, site: "https://www.evasonhuahin.com" }),
      r("Hua Hin", { name: "V Villas Hua Hin Wellness", area: "Cha-Am", modality: "Spa + yoga em villa privada", level: "Iniciante", duration: "3 a 5 dias", price: "฿55.000+/noite (R$ 8.000+)", language: "Inglês", tip: "Vilas com piscina privada. Pra quem quer retiro sem grupo.", rating: 9, site: "https://www.vvillashuahin.com" }),
    ],
  },
  {
    slug: "khao-yai",
    name: "Khao Yai (montanha perto de Bangkok)",
    tagline: "Parque nacional 3h ao norte de Bangkok. Plum Village (linhagem Thich Nhat Hanh) é a estrela.",
    retreats: [
      r("Khao Yai", { name: "Plum Village Thailand", area: "Pak Chong, Nakhon Ratchasima", modality: "Mindfulness Thich Nhat Hanh + noble silence", level: "Iniciante", duration: "5 a 21 dias", price: "POR DOAÇÃO — ฿4.500/sem sugerido", language: "Inglês + vietnamita + thai", tip: "Linhagem direta de Thich Nhat Hanh. Silêncio nobre nas refeições.", rating: 10, site: "https://thaiplumvillage.org" }),
      r("Khao Yai", { name: "Sala Khaoyai Yoga Retreats", area: "Mu Si, Khao Yai", modality: "Yoga + caminhada na floresta", level: "Iniciante", duration: "3 a 5 dias", price: "฿15.000–฿42.000 (R$ 2.180–R$ 6.100)", language: "Inglês", tip: "Ar puro de montanha, 3h de Bangkok. Bom retiro de fim de semana longo.", rating: 8 }),
      r("Khao Yai", { name: "Muthi Maya Forest Pool Villa Wellness", area: "Khao Yai National Park", modality: "Spa + yoga em vila com piscina", level: "Iniciante", duration: "3 a 5 dias", price: "฿38.000+/noite (R$ 5.530+)", language: "Inglês", tip: "Vila privada na floresta. Pra casais que querem natureza com luxo.", rating: 9 }),
    ],
  },
  {
    slug: "vipassana-classicos",
    name: "Vipassana clássicos (POR DOAÇÃO, fora dos roteiros turísticos)",
    tagline: "Os mosteiros mais sérios — silêncio total, monges thai, calendário rígido. Quase invisíveis no Google.",
    retreats: [
      r("Surat Thani", { name: "Wat Suan Mokkh (International Dharma Hermitage)", area: "Chaiya, Surat Thani", modality: "Vipassana + Anapanasati, silêncio total", level: "Iniciante", duration: "10 dias (dia 1 a 10 do mês)", price: "POR DOAÇÃO — ฿2.000 sugerido", language: "Inglês", tip: "Maior retiro por doação do país. Registro presencial dia 30/31.", rating: 10, site: "https://www.suanmokkh-idh.org" }),
      r("Mae Hong Son", { name: "Wat Pa Tam Wua Forest Monastery", area: "Mae La Noi, 160km de Chiang Mai", modality: "Vipassana floresta, monges thai", level: "Iniciante", duration: "Aberto (3 a 30 dias)", price: "POR DOAÇÃO", language: "Inglês básico + thai", tip: "Vagas livres sempre. Caminhada meditativa diária na floresta.", rating: 10, site: "https://www.watpatamwua.com" }),
      r("Prachinburi", { name: "Dhamma Kamala (Vipassana Centre Thailand)", area: "Saen Phuday, 2h30 de Bangkok", modality: "Vipassana Goenka tradição", level: "Iniciante", duration: "10 dias (calendário fixo)", price: "POR DOAÇÃO", language: "Áudio inglês + thai", tip: "Inscrição 2 meses antes — fila grande.", rating: 10, site: "https://www.kamala.dhamma.org" }),
      r("Phitsanulok", { name: "Dhamma Abha", area: "Wang Thong, Phitsanulok", modality: "Vipassana Goenka", level: "Iniciante", duration: "10 dias", price: "POR DOAÇÃO", language: "Inglês + thai", tip: "Mais vagas que Kamala. Boa alternativa.", rating: 9, site: "https://www.abha.dhamma.org" }),
      r("Ubon Ratchathani", { name: "International Forest Monastery (Wat Pah Nanachat)", area: "Bung Wai, Warin Chamrap", modality: "Tradição Ajahn Chah, monástica", level: "Avançado", duration: "Aberto (1 semana mín.)", price: "POR DOAÇÃO", language: "Inglês", tip: "Mosteiro de monges ocidentais. Disciplina pesada — só pra experientes.", rating: 10, site: "https://www.watpahnanachat.org" }),
    ],
  },
];

const Retiros8834 = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Guia de Retiros na Tailândia — Por Cidade"
      description="60+ retiros agrupados por cidade/ilha: Bangkok, Chiang Mai, Pai, Phuket, Krabi, Samui, Phangan, Koh Tao, Lanta, Hua Hin e mais. Maps + site oficial em cada um."
    />

    {/* HERO */}
    <section className="py-20 px-6 bg-gradient-to-br from-teal-950 via-background to-emerald-950">
      <div className="max-w-3xl mx-auto text-center">
        <p className="guide-section-label mb-6">🧘 Edição Retiros — Conteúdo do Guia</p>
        <h1 className="font-display text-5xl sm:text-7xl text-foreground mb-6">Retiros na Tailândia</h1>
        <p className="text-xl text-muted-foreground">Agora organizado <strong>por cidade e ilha</strong>. Mais de 60 retiros nas principais paradas do país, com Google Maps e site oficial em cada um.</p>
      </div>
    </section>

    {/* NAV POR CIDADE */}
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <p className="guide-section-label mb-4">Navegação rápida</p>
        <h2 className="font-display text-3xl text-foreground mb-6">Pule direto pra cidade</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cities.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
              <p className="font-semibold text-foreground text-sm">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.retreats.length} retiros</p>
            </a>
          ))}
          <a href="#preparacao" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Como se preparar</p>
            <p className="text-xs text-muted-foreground">21 dias antes</p>
          </a>
          <a href="#vipassana-10-dias" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Vipassana 10 dias</p>
            <p className="text-xs text-muted-foreground">Dia por dia</p>
          </a>
          <a href="#diario" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Diário de retiro</p>
            <p className="text-xs text-muted-foreground">Template</p>
          </a>
          <a href="#pos-retiro" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Pós-retiro</p>
            <p className="text-xs text-muted-foreground">Como integrar</p>
          </a>
        </div>
      </div>
    </section>

    {/* COMO ESCOLHER */}
    <Section chapter="Antes de tudo" title="Como escolher o retiro certo">
      <Card>
        <p><strong>1. Já meditei alguma vez?</strong></p>
        <p>• <strong>Nunca</strong>: yoga ou mindfulness 3–5 dias (Pai, Chiang Mai, Phangan).</p>
        <p>• <strong>1–10 sessões</strong>: 7 dias em Wat Pa Tam Wua (aberto, flexível).</p>
        <p>• <strong>6+ meses</strong>: Vipassana 10 dias (Suan Mokkh ou Dhamma Kamala).</p>
        <p>• <strong>2+ anos</strong>: Mahasi 26 dias (Wat Ram Poeng) ou Forest Monastery.</p>
      </Card>
      <Card>
        <p><strong>2. Quanto posso pagar?</strong></p>
        <p>• <strong>R$ 0–500</strong>: doação — qualquer um da seção "Vipassana clássicos".</p>
        <p>• <strong>R$ 1.500–4.000</strong>: yoga/detox 7 dias em Phangan ou Chiang Mai.</p>
        <p>• <strong>R$ 6.000–25.000</strong>: Vikasa, Atmanjai, Absolute Sanctuary.</p>
        <p>• <strong>R$ 25.000+</strong>: Kamalaya, RAKxa, Chiva-Som, Six Senses.</p>
      </Card>
      <Card>
        <p><strong>3. Sozinho ou com parceiro?</strong></p>
        <p>• <strong>Sozinho</strong>: qualquer um funciona.</p>
        <p>• <strong>Casal em yoga/detox</strong>: ficam juntos (Vikasa, Kamalaya, Pimalai).</p>
        <p>• <strong>Casal em Vipassana/silêncio</strong>: dormem separados, sem contato 10 dias.</p>
      </Card>
    </Section>

    {/* CIDADES */}
    {cities.map((c) => (
      <Section key={c.slug} id={c.slug} chapter={c.name} title={`${c.retreats.length} retiros em ${c.name}`}>
        <p className="text-base">{c.tagline}</p>
        <div className="grid gap-4">
          {c.retreats.map((x) => <RetreatCard key={x.name} x={x} />)}
        </div>
      </Section>
    ))}

    {/* 12 POR DOAÇÃO — LISTA AGREGADA */}
    <Section id="por-doacao" chapter="Lista agregada" title="12 retiros POR DOAÇÃO — todos juntos">
      <p>Sérios, quase invisíveis no Google. Reserve por e-mail direto ou site oficial. Doação livre cobre alojamento, comida e ensinamento.</p>
      <div className="grid gap-3">
        {[
          { name: "Wat Suan Mokkh", city: "Surat Thani", note: "10 dias Vipassana + Anapanasati, calendário mensal", site: "https://www.suanmokkh-idh.org" },
          { name: "Wat Pa Tam Wua", city: "Mae Hong Son", note: "Aberto, vagas sempre, monges thai", site: "https://www.watpatamwua.com" },
          { name: "Dhamma Kamala", city: "Prachinburi", note: "10 dias Goenka, calendário rígido", site: "https://www.kamala.dhamma.org" },
          { name: "Dhamma Abha", city: "Phitsanulok", note: "Alternativa Goenka, mais vagas", site: "https://www.abha.dhamma.org" },
          { name: "Wat Pah Nanachat", city: "Ubon Ratchathani", note: "Ajahn Chah, monges ocidentais (avançado)", site: "https://www.watpahnanachat.org" },
          { name: "Wat Ram Poeng", city: "Chiang Mai", note: "Mahasi tradition, 10 ou 26 dias", site: "https://www.palikanon.com/vipassana/wat_rampoeng" },
          { name: "Doi Suthep Vipassana", city: "Chiang Mai", note: "3, 10 ou 21 dias, montanha", site: "https://fivethousandyears.org" },
          { name: "Wat Khao Tham", city: "Koh Phangan", note: "Único Vipassana sério em ilha", site: "https://www.watkowtahm.org" },
          { name: "Wat Mahathat Section 5", city: "Bangkok", note: "Intro de 3-7 dias no centro", site: "https://www.mahachula.com" },
          { name: "Plum Village Thailand", city: "Khao Yai", note: "Thich Nhat Hanh, mindfulness", site: "https://thaiplumvillage.org" },
          { name: "Wat Marp Jan", city: "Rayong", note: "Tradição Ajahn Chah, floresta", site: "https://www.watmarpjan.org" },
          { name: "Sorn Thawee Meditation Centre", city: "Chachoengsao", note: "Mahasi, 7-30 dias, perto de Bangkok", site: "https://www.sornthawee.org" },
        ].map((x) => (
          <Card key={x.name}>
            <p><strong>{x.name}</strong> — {x.city}</p>
            <p className="text-sm">{x.note}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href={gmaps(`${x.name} ${x.city} Thailand`)} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Google Maps</a>
              <a href={x.site} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Site oficial</a>
            </div>
          </Card>
        ))}
      </div>
    </Section>

    {/* TOP 10 LUXO */}
    <Section id="luxo" chapter="Bônus" title="Top 10 retiros de luxo que valem o preço">
      <p>Quando vale pagar R$ 25k+: programa estruturado, equipe médica, resultado mensurável.</p>
      <ol className="space-y-3 list-decimal pl-6">
        <li><strong>Kamalaya (Koh Samui)</strong> — programa Burnout com médico dedicado.</li>
        <li><strong>RAKxa (Bangkok / Bang Krachao)</strong> — único 'medical wellness' real, exames clínicos inclusos.</li>
        <li><strong>Chiva-Som (Hua Hin)</strong> — pioneiro asiático, consultor de saúde dedicado.</li>
        <li><strong>Six Senses Samui</strong> — programa 'Sleep' é o destaque, vilas em colina.</li>
        <li><strong>Vikasa (Koh Samui)</strong> — yoga em falésia, quarto Cliff vale cada baht.</li>
        <li><strong>Atmanjai (Phuket)</strong> — detox sério com médico ayurvédico residente.</li>
        <li><strong>Anantara Golden Triangle (Chiang Rai)</strong> — wellness + elefantes resgatados.</li>
        <li><strong>Pimalai (Koh Lanta)</strong> — spa em enseada isolada, 5* discreto.</li>
        <li><strong>Sukko Cultural Spa (Phuket)</strong> — rituais Lanna 3h em vila tradicional.</li>
        <li><strong>Amatara (Phuket)</strong> — wellness integrativo + medicina chinesa, beira-mar.</li>
      </ol>
    </Section>

    {/* PREPARAÇÃO */}
    <Section id="preparacao" chapter="Preparação" title="Como se preparar — 21 dias antes">
      <Card>
        <p><strong>Semana -3 (21–15 dias antes):</strong></p>
        <p>• Meditar 10min/dia (app Insight Timer, grátis).</p>
        <p>• Reduzir cafeína pela metade.</p>
        <p>• Avisar família/trabalho do silêncio digital.</p>
      </Card>
      <Card>
        <p><strong>Semana -2 (14–8 dias antes):</strong></p>
        <p>• Meditação 20min/dia.</p>
        <p>• Cortar álcool e açúcar refinado.</p>
        <p>• Comprar roupa branca/clara e sandália simples.</p>
      </Card>
      <Card>
        <p><strong>Semana -1 (7–1 dia antes):</strong></p>
        <p>• Meditação 30min manhã e noite.</p>
        <p>• Última cafeína 3 dias antes (evita dor de cabeça no dia 2).</p>
        <p>• Pacote: roupa branca, lanterna, repelente DEET, garrafa, kit higiene mínimo. NADA eletrônico.</p>
      </Card>
      <Card>
        <p><strong>Dia 0 (chegada):</strong></p>
        <p>• Chegue 1 dia antes — não emende voo com check-in do retiro.</p>
        <p>• Coma leve, durma cedo. O dia 1 começa às 4h.</p>
      </Card>
    </Section>

    {/* VIPASSANA DIA POR DIA */}
    <Section id="vipassana-10-dias" chapter="Bônus" title="Vipassana 10 dias — dia por dia">
      <p>Baseado em Suan Mokkh e Dhamma Kamala (Goenka). Outros locais variam, mas o esqueleto é o mesmo.</p>
      <Card><p><strong>Dia 1</strong> — Chegada à tarde. Entrega de celular/livros. Primeira sessão noturna.</p></Card>
      <Card><p><strong>Dia 2</strong> — 4h sino. 4h30–6h30 meditação. 7h café (vegano). 8h–11h meditação. 11h almoço. 13h–17h meditação. 18h–21h meditação + discurso. <strong>Dor de cabeça de cafeína provável.</strong></p></Card>
      <Card><p><strong>Dia 3</strong> — O mais físico. Dores nas costas, joelhos, quadril. Vontade de desistir é normal. <strong>Não desista hoje — passa.</strong></p></Card>
      <Card><p><strong>Dia 4</strong> — Introdução ao scan corporal Vipassana. Primeira "abertura" mental.</p></Card>
      <Card><p><strong>Dia 5–6</strong> — Mente estabilizada. Choro espontâneo, memórias antigas, sensações estranhas no corpo. Normal.</p></Card>
      <Card><p><strong>Dia 7–8</strong> — Adhitthana (1h sem mexer). Picos de equanimidade. Leveza no corpo.</p></Card>
      <Card><p><strong>Dia 9</strong> — Metta (amor compassivo). Último dia denso.</p></Card>
      <Card><p><strong>Dia 10</strong> — Silêncio é quebrado. Choque de voltar a falar.</p></Card>
      <Card><p><strong>Dia 11 (saída)</strong> — Despedida + doação. <strong>Não marque compromisso pesado pros 3 dias seguintes.</strong></p></Card>
    </Section>

    {/* DIÁRIO */}
    <Section id="diario" chapter="Bônus" title="Diário de retiro — template">
      <p>Imprima 1 cópia pra cada dia. Preencha à mão antes de dormir.</p>
      <Card>
        <p><strong>Dia ____ · Data ____</strong></p>
        <p>1. O que apareceu no corpo? (dor, leveza, calor, choro)</p>
        <p>2. O que apareceu na mente? (memória, decisão, padrão)</p>
        <p>3. Em que sessão fui mais fundo? Por quê?</p>
        <p>4. Em que sessão escapei mais? Por quê?</p>
        <p>5. Uma frase pra resumir o dia: __________</p>
        <p>6. O que quero levar pra casa: __________</p>
      </Card>
      <p className="text-sm italic">Releia 30 dias depois — é aí que você percebe o que mudou.</p>
    </Section>

    {/* PÓS-RETIRO */}
    <Section id="pos-retiro" chapter="Bônus" title="Roteiro pós-retiro — como integrar">
      <Card>
        <p><strong>Semana +1:</strong></p>
        <p>• Não marque reunião importante, festa ou viagem nova.</p>
        <p>• Mantenha 30min de meditação manhã + 15min noite.</p>
        <p>• Coma leve e vegetariano por 7 dias.</p>
      </Card>
      <Card>
        <p><strong>Semanas +2 a +4:</strong></p>
        <p>• Reintroduza café/álcool com consciência — vai sentir 3x mais.</p>
        <p>• Comunique 1 limite novo pra família/trabalho.</p>
        <p>• Encontre um grupo local de meditação (sangha).</p>
      </Card>
      <Card>
        <p><strong>Mês +2 e +3:</strong></p>
        <p>• Cuidado com 'ressaca espiritual': euforia vira tristeza ~semana 6.</p>
        <p>• Reveja o diário. Compare quem você era no dia 1 com quem é agora.</p>
        <p>• Próximo retiro: agende pra 6–12 meses, não pra já.</p>
      </Card>
    </Section>

    <section className="py-12 px-6 text-center">
      <p className="text-sm text-muted-foreground">Guia atualizado periodicamente. Em caso de dúvida sobre vagas, preços ou status legal de plantas, escreva direto ao mosteiro/centro listado.</p>
    </section>
  </div>
);

export default Retiros8834;

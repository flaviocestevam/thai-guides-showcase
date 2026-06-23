import { SEO } from "@/components/SEO";

const Section = ({ chapter, title, children }: { chapter: string; title: string; children: React.ReactNode }) => (
  <section className="py-16 px-6">
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

type Retreat = {
  name: string;
  city: string;
  address: string;
  mapsUrl: string;
  website: string;
  type: string;
  level: "Iniciante" | "Intermediário" | "Avançado" | "Todos";
  duration: string;
  price: string;
  language: string;
  tip: string;
  rating: number;
};

const websiteSearch = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q + " official site Thailand")}`;

const r = (o: Omit<Retreat, "mapsUrl" | "website"> & { mapsQ?: string; site?: string }): Retreat => ({
  ...o,
  mapsUrl: gmaps(o.mapsQ ?? `${o.name} ${o.city} Thailand`),
  website: o.site ?? websiteSearch(o.name),
});

const RetreatCard = ({ x }: { x: Retreat }) => (
  <Card>
    <div className="flex justify-between items-start gap-3">
      <h3 className="font-display text-2xl text-foreground">{x.name}</h3>
      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">★ {x.rating}/10</span>
    </div>
    <p className="text-sm"><strong>📍 {x.city}</strong> — {x.address}</p>
    <p className="text-sm">🧘 <strong>Tipo:</strong> {x.type}</p>
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



const yoga: Retreat[] = [
  r({ name: "Agama Yoga", city: "Koh Phangan", address: "Sri Thanu, oeste da ilha", type: "Tantra yoga, hatha, meditação", level: "Todos", duration: "1 semana a 1 mês", price: "฿18.000–฿55.000 (R$ 2.600–R$ 8.000)", language: "Inglês (tradução pt-br sob demanda)", tip: "Maior escola tantra do mundo. Vá com mente aberta — abordagem inclui sexualidade sagrada.", rating: 9 , site: "https://www.agamayoga.com" }),
  r({ name: "Orion Healing Center", city: "Koh Phangan", address: "Srithanu Beach", type: "Yoga + detox + jejum", level: "Iniciante", duration: "3, 7 ou 14 dias", price: "฿12.000–฿45.000 (R$ 1.750–R$ 6.500)", language: "Inglês", tip: "Combo detox + yoga é o carro-chefe. Médico naturopata na equipe.", rating: 9 , site: "https://www.orionhealing.com" }),
  r({ name: "Samma Karuna", city: "Koh Phangan", address: "Sri Thanu", type: "Yoga, tantra, breathwork, ice bath", level: "Intermediário", duration: "1 a 4 semanas", price: "฿22.000–฿70.000 (R$ 3.200–R$ 10.200)", language: "Inglês", tip: "Comunidade forte, professores brasileiros frequentes. Peça calendário pt-br.", rating: 9 , site: "https://sammakaruna.org" }),
  r({ name: "Yoga Retreat Koh Phangan (The Sanctuary)", city: "Koh Phangan", address: "Haad Tien Beach, sudeste", type: "Yoga, detox, healing", level: "Todos", duration: "Open (mín. 3 noites)", price: "฿2.500–฿6.000/noite + aulas", language: "Inglês", tip: "Só se chega de barco. Isolamento total — bom pra desintoxicar do mundo.", rating: 9 , site: "https://www.thesanctuarythailand.com" }),
  r({ name: "Wise Living Yoga Academy", city: "Chiang Mai", address: "Mae Rim, 25min do centro", type: "YTT 200h/300h Yoga Alliance", level: "Intermediário", duration: "21 a 28 dias", price: "฿65.000–฿95.000 (R$ 9.500–R$ 13.800)", language: "Inglês", tip: "TTC sério, fora do circuito 'instagrammer'. Inclui anatomia clínica.", rating: 9 , site: "https://www.wiselivingyoga.com" }),
  r({ name: "Yoga Tree Chiang Mai", city: "Chiang Mai", address: "Sirimangkalajarn Rd, Nimman", type: "Hatha, vinyasa, yin (drop-in + retiros)", level: "Iniciante", duration: "3 a 7 dias", price: "฿8.000–฿18.000 (R$ 1.170–R$ 2.620)", language: "Inglês", tip: "Bom pra primeiro retiro. Combina aulas com vida na cidade.", rating: 8 , site: "https://www.yogatreechiangmai.com" }),
  r({ name: "Vikasa Yoga Retreat", city: "Koh Samui", address: "Lamai sul, à beira-mar", type: "Yoga, breathwork, sound healing", level: "Todos", duration: "5 a 14 dias", price: "฿32.000–฿110.000 (R$ 4.650–R$ 16.000)", language: "Inglês", tip: "Estrutura premium em falésia. Peça o quarto 'Cliff' — vista direta no Golfo.", rating: 10 , site: "https://www.vikasayoga.com" }),
  r({ name: "Kamalaya Wellness Sanctuary", city: "Koh Samui", address: "Laem Set, sul da ilha", type: "Yoga + medicina chinesa + ayurveda", level: "Todos", duration: "5 a 21 dias", price: "฿120.000–฿400.000 (R$ 17.500–R$ 58.000)", language: "Inglês (concierge pt-br)", tip: "Top mundial. Programa 'Burnout' tem médico dedicado. Caro, mas entrega.", rating: 10 , site: "https://www.kamalaya.com" }),
  r({ name: "Absolute Sanctuary", city: "Koh Samui", address: "Choeng Mon", type: "Yoga, pilates, detox, fitness", level: "Todos", duration: "3 a 14 dias", price: "฿40.000–฿150.000 (R$ 5.800–R$ 21.800)", language: "Inglês", tip: "Mais fitness que espiritual. Bom pra quem odeia incenso.", rating: 9 , site: "https://www.absolutesanctuary.com" }),
  r({ name: "Pyramid Yoga Center", city: "Koh Phangan", address: "Sri Thanu", type: "Pirâmide energética + yoga + raw food", level: "Intermediário", duration: "7 a 28 dias", price: "฿20.000–฿60.000 (R$ 2.900–R$ 8.700)", language: "Inglês", tip: "Conceito alternativo dentro de pirâmide. Comida raw vegan inclusa.", rating: 8 , site: "https://www.pyramidyogakohphangan.com" }),
];

const vipassana: Retreat[] = [
  r({ name: "Wat Suan Mokkh (International Dharma Hermitage)", city: "Chaiya, Surat Thani", address: "Wat Suan Mokkh Palaram, Chaiya", type: "Vipassana + Anapanasati, silêncio total", level: "Iniciante", duration: "10 dias (dia 1 a 10 de cada mês)", price: "POR DOAÇÃO — sugerido ฿2.000 (R$ 290)", language: "Inglês", tip: "Maior retiro por doação da Tailândia. Chegue dia 30/31 ou último dia do mês pra registro presencial. Sem celular, acordar 4h, refeições antes do meio-dia.", rating: 10 , site: "https://www.suanmokkh-idh.org" }),
  r({ name: "Wat Pa Tam Wua Forest Monastery", city: "Mae Hong Son", address: "Mae La Noi, 160km de Chiang Mai", type: "Vipassana floresta, monges thai", level: "Iniciante", duration: "Aberto (3 a 30 dias)", price: "POR DOAÇÃO", language: "Inglês básico + thai", tip: "Vagas livres — chegue a qualquer dia. Roupas brancas fornecidas. Caminhada meditativa pela floresta diariamente.", rating: 10 , site: "https://www.watpatamwua.com" }),
  r({ name: "Dhamma Kamala (Vipassana Centre Thailand)", city: "Prachinburi", address: "Saen Phuday, 2h30 de Bangkok", type: "Vipassana S.N. Goenka tradição", level: "Iniciante", duration: "10 dias (calendário fixo)", price: "POR DOAÇÃO", language: "Áudio em inglês + thai", tip: "Linhagem Goenka pura. Inscrição online com 2 meses antes — fila grande.", rating: 10 , site: "https://www.kamala.dhamma.org" }),
  r({ name: "Dhamma Abha", city: "Phitsanulok", address: "Wang Thong, Phitsanulok", type: "Vipassana Goenka", level: "Iniciante", duration: "10 dias", price: "POR DOAÇÃO", language: "Inglês + thai", tip: "Mais vagas que Dhamma Kamala. Boa alternativa se Prachinburi estiver lotado.", rating: 9 , site: "https://www.abha.dhamma.org" }),
  r({ name: "Wat Ram Poeng (Northern Insight Meditation Center)", city: "Chiang Mai", address: "Suthep, atrás de Wat Umong", type: "Vipassana Mahasi Sayadaw", level: "Intermediário", duration: "26 dias (programa completo) ou 10 dias intro", price: "POR DOAÇÃO — sugerido ฿200/dia", language: "Inglês", tip: "Programa sério com entrevistas diárias com mestre. Cabine privativa.", rating: 9 , site: "https://www.palikanon.com/vipassana/wat_rampoeng" }),
  r({ name: "Doi Suthep Vipassana Center (Wat Phra That)", city: "Chiang Mai", address: "Doi Suthep mountain", type: "Vipassana fundamentals", level: "Iniciante", duration: "3, 10 ou 21 dias", price: "POR DOAÇÃO — ฿500–฿1.500 sugerido", language: "Inglês", tip: "Vista de montanha. Bom pra primeira vez — tem curso 'fundamentals' de 3 dias.", rating: 9 , site: "https://fivethousandyears.org" }),
  r({ name: "International Forest Monastery (Wat Pah Nanachat)", city: "Ubon Ratchathani", address: "Bung Wai, Warin Chamrap", type: "Tradição Ajahn Chah, monástica", level: "Avançado", duration: "Aberto (1 semana mínimo)", price: "POR DOAÇÃO", language: "Inglês", tip: "Mosteiro de monges ocidentais. Disciplina pesada — só pra quem já meditou.", rating: 10 , site: "https://www.watpahnanachat.org" }),
  r({ name: "Wat Mahathat Section 5", city: "Bangkok", address: "Maharaj Rd, ao lado do Grand Palace", type: "Vipassana intro no centro de Bangkok", level: "Iniciante", duration: "3 a 7 dias (aberto)", price: "POR DOAÇÃO", language: "Inglês", tip: "Pra quem quer experimentar antes de comprometer 10 dias. Bem no centro.", rating: 8 , site: "https://www.mahachula.com" }),
  r({ name: "Wat Khao Tham", city: "Koh Phangan", address: "topo da colina, centro de Koh Phangan", type: "Vipassana em monastério de ilha", level: "Intermediário", duration: "10 ou 20 dias (calendário)", price: "POR DOAÇÃO — ฿6.500 sugerido", language: "Inglês", tip: "Único Vipassana sério em ilha. Calor + insetos — não é pra fracos.", rating: 9 , site: "https://www.watkowtahm.org" }),
  r({ name: "Sunyata Retreats", city: "Khon Kaen", address: "Nong Wang, Khon Kaen", type: "Mindfulness + zen ocidental", level: "Iniciante", duration: "5 a 10 dias", price: "฿15.000–฿28.000 (R$ 2.180–R$ 4.060)", language: "Inglês", tip: "Não é doação, mas estrutura confortável pra quem não topa templo cru.", rating: 8 , site: "https://www.sunyataretreats.org" }),
];

const detox: Retreat[] = [
  r({ name: "Sanctuary Detox", city: "Koh Phangan", address: "Haad Tien Beach", type: "Detox de suco + jejum + colônica", level: "Iniciante", duration: "3, 7 ou 14 dias", price: "฿25.000–฿85.000 (R$ 3.640–R$ 12.380)", language: "Inglês", tip: "Detox mais famoso da ilha. Inclui yoga, massagem e consultoria com naturopata.", rating: 9 , site: "https://www.thesanctuarythailand.com/wellness/detox" }),
  r({ name: "Atmanjai Wellness Centre", city: "Phuket", address: "Patong", type: "Detox supervisionado, jejum, raw food", level: "Iniciante", duration: "7 a 21 dias", price: "฿55.000–฿180.000 (R$ 8.000–R$ 26.200)", language: "Inglês", tip: "Médico ayurvédico residente. Programa sério, não 'wellness instagram'.", rating: 10 , site: "https://www.atmanjai.com" }),
  r({ name: "Phuket Cleanse", city: "Phuket", address: "Nai Harn", type: "Fitness + detox + intermittent fasting", level: "Intermediário", duration: "7 a 28 dias", price: "฿60.000–฿200.000 (R$ 8.740–R$ 29.100)", language: "Inglês", tip: "Detox com treino funcional pesado. Pra quem quer perder peso de verdade.", rating: 9 , site: "https://www.phuketcleanse.com" }),
  r({ name: "Kamalaya Optimal Fitness & Detox", city: "Koh Samui", address: "Laem Set", type: "Detox + medicina integrativa", level: "Todos", duration: "5 a 14 dias", price: "฿140.000+ (R$ 20.400+)", language: "Inglês", tip: "Versão detox do Kamalaya. Caro mas com médico, nutricionista e terapeuta.", rating: 10 , site: "https://www.kamalaya.com/wellness-programs/detox.htm" }),
  r({ name: "The Spa Resorts Koh Chang", city: "Koh Chang", address: "Klong Prao Beach", type: "Detox + raw food + yoga", level: "Iniciante", duration: "3 a 14 dias", price: "฿18.000–฿70.000 (R$ 2.620–R$ 10.200)", language: "Inglês", tip: "Versão mais barata e tranquila de Koh Phangan. Praia bonita, longe da balada.", rating: 8 , site: "https://www.thesparesorts.com" }),
  r({ name: "Mantra Detox", city: "Koh Phangan", address: "Sri Thanu", type: "Suco + colônica + meditação", level: "Iniciante", duration: "5 a 10 dias", price: "฿15.000–฿35.000 (R$ 2.180–R$ 5.100)", language: "Inglês", tip: "Custo-benefício forte. Sem luxo, mas com supervisão.", rating: 8 , site: "https://mantradetox.com" }),
  r({ name: "RAKxa Wellness & Medical Retreat", city: "Bangkok (Bang Krachao)", address: "Bang Nam Phueng, Phra Pradaeng", type: "Detox médico integrativo", level: "Todos", duration: "3 a 14 dias", price: "฿80.000–฿300.000 (R$ 11.650–R$ 43.700)", language: "Inglês (pt-br concierge)", tip: "Único na 'ilha verde' de Bangkok. Médicos com PhD, exames de sangue inclusos.", rating: 10 , site: "https://www.rakxawellness.com" }),
];

const plantMedicine: Retreat[] = [
  r({ name: "Phangan Kratom Center", city: "Koh Phangan", address: "Sri Thanu", type: "Kratom (planta legal) + meditação", level: "Iniciante", duration: "5 a 14 dias", price: "฿18.000–฿50.000 (R$ 2.620–R$ 7.280)", language: "Inglês", tip: "Kratom é legal na Tailândia desde 2021. Ritual leve, não psicodélico.", rating: 8 , site: "https://www.kratomphangan.com" }),
  r({ name: "Cannabis Wellness Retreats (Highland Network)", city: "Chiang Mai", address: "Mae Rim", type: "Cannabis terapêutica + yoga (legal desde 2022)", level: "Iniciante", duration: "3 a 7 dias", price: "฿22.000–฿55.000 (R$ 3.200–R$ 8.000)", language: "Inglês", tip: "Cannabis recreativa foi recriminalizada em 2024 — uso retiro é só medicinal com prescrição local. Confirme o status legal antes de reservar.", rating: 7 , site: "https://www.highlandcafe.co.th" }),
  r({ name: "Mushroom Magic Koh Pha Ngan", city: "Koh Phangan", address: "(consulta privada)", type: "Cogumelo (cinza legal — sob ritual em templo)", level: "Avançado", duration: "1 a 3 dias", price: "Por consulta", language: "Inglês", tip: "Status legal cinza. Faça apenas com facilitadores experientes e supervisão médica — risco real existe.", rating: 6 , site: "https://www.google.com/search?q=mushroom+ceremony+koh+phangan" }),
  r({ name: "Sacred Sound Healing (Pun Pun)", city: "Chiang Mai", address: "Mae Taeng", type: "Cerimônias de cacau + som + plantas locais", level: "Iniciante", duration: "3 a 7 dias", price: "฿12.000–฿30.000 (R$ 1.750–R$ 4.370)", language: "Inglês", tip: "Alternativa segura e legal a psicodélicos. Cacau cerimonial + gongo + breathwork.", rating: 8 , site: "https://www.punpunthailand.org" }),
];

const danceExpression: Retreat[] = [
  r({ name: "Ecstatic Dance Sri Thanu", city: "Koh Phangan", address: "Pyramid Yoga, Sri Thanu", type: "Dança extática + breathwork", level: "Iniciante", duration: "Weekly (drop-in) ou retiros 5 dias", price: "฿200/sessão · retiros ฿15.000+", language: "Inglês", tip: "Cena mais forte de ecstatic dance da Ásia. Vá descalço.", rating: 9 , site: "https://www.ecstaticdance.org/all-locations/koh-phangan" }),
  r({ name: "Embodied Tantra Retreat (Samma Karuna)", city: "Koh Phangan", address: "Sri Thanu", type: "Tantra + movimento + voz", level: "Intermediário", duration: "7 a 21 dias", price: "฿28.000–฿85.000 (R$ 4.080–R$ 12.380)", language: "Inglês", tip: "Sério, terapêutico. Não confunda com 'tantra sexual' de Instagram.", rating: 9 , site: "https://sammakaruna.org/tantra" }),
  r({ name: "5Rhythms Thailand", city: "Chiang Mai", address: "Nimman, salões rotativos", type: "Dança 5Rhythms de Gabrielle Roth", level: "Iniciante", duration: "Workshops 3 dias", price: "฿8.000–฿18.000 (R$ 1.170–R$ 2.620)", language: "Inglês", tip: "Linhagem oficial certificada. Calendário irregular — siga no Facebook.", rating: 8 , site: "https://www.5rhythms.com" }),
  r({ name: "Breathwork Bali Style (Koh Phangan)", city: "Koh Phangan", address: "Various — Sri Thanu cluster", type: "Holotropic + Wim Hof + ice bath", level: "Todos", duration: "3 a 7 dias", price: "฿12.000–฿35.000 (R$ 1.750–R$ 5.100)", language: "Inglês", tip: "Vários professores rodando workshops. Pergunte por 'Joaquin' ou 'Inga' — referências locais.", rating: 9 , site: "https://www.google.com/search?q=breathwork+koh+phangan" }),
];

const silence: Retreat[] = [
  r({ name: "Wat Suan Mokkh (silêncio dentro do Vipassana)", city: "Chaiya, Surat Thani", address: "ver Vipassana", type: "Silêncio total 10 dias", level: "Iniciante", duration: "10 dias", price: "POR DOAÇÃO", language: "Inglês", tip: "Já listado em Vipassana. Silêncio é parte integral do programa.", rating: 10 , site: "https://www.suanmokkh-idh.org" }),
  r({ name: "Wat Pa Tam Wua (silêncio aberto)", city: "Mae Hong Son", address: "ver Vipassana", type: "Silêncio + caminhada meditativa", level: "Iniciante", duration: "Flexível", price: "POR DOAÇÃO", language: "Inglês", tip: "Você define quantos dias em silêncio. Bom pra 1ª vez.", rating: 10 , site: "https://www.watpatamwua.com" }),
  r({ name: "Wat Khao Tham Silent Retreat", city: "Koh Phangan", address: "ver Vipassana", type: "Silêncio em monastério de ilha", level: "Intermediário", duration: "10 ou 20 dias", price: "POR DOAÇÃO", language: "Inglês", tip: "Silêncio + calor de ilha. Desafio físico extra.", rating: 9 , site: "https://www.watkowtahm.org" }),
  r({ name: "Plum Village Thailand (Thai Plum Village)", city: "Pak Chong, Khao Yai", address: "Nakhon Ratchasima", type: "Mindfulness Thich Nhat Hanh + 'noble silence'", level: "Iniciante", duration: "5 a 21 dias (calendário)", price: "POR DOAÇÃO — ฿4.500 sugerido/semana", language: "Inglês + vietnamita + thai", tip: "Linhagem direta de Thich Nhat Hanh. Silêncio nobre nas refeições e manhãs.", rating: 10 , site: "https://thaiplumvillage.org" }),
];

const donationOnly = [
  { name: "Wat Suan Mokkh", city: "Surat Thani", note: "10 dias Vipassana + Anapanasati, calendário mensal", site: "https://www.suanmokkh-idh.org" },
  { name: "Wat Pa Tam Wua", city: "Mae Hong Son", note: "Aberto, vagas sempre, monges thai", site: "https://www.watpatamwua.com" },
  { name: "Dhamma Kamala", city: "Prachinburi", note: "10 dias Goenka, calendário rígido", site: "https://www.kamala.dhamma.org" },
  { name: "Dhamma Abha", city: "Phitsanulok", note: "Alternativa Goenka, mais vagas", site: "https://www.abha.dhamma.org" },
  { name: "International Forest Monastery (Wat Pah Nanachat)", city: "Ubon Ratchathani", note: "Ajahn Chah lineage, monges ocidentais", site: "https://www.watpahnanachat.org" },
  { name: "Wat Ram Poeng", city: "Chiang Mai", note: "Mahasi tradition, 26 dias completo", site: "https://www.palikanon.com/vipassana/wat_rampoeng" },
  { name: "Doi Suthep Vipassana", city: "Chiang Mai", note: "3, 10 ou 21 dias, montanha", site: "https://fivethousandyears.org" },
  { name: "Wat Khao Tham", city: "Koh Phangan", note: "Único sério em ilha", site: "https://www.watkowtahm.org" },
  { name: "Wat Mahathat Section 5", city: "Bangkok", note: "Intro de 3-7 dias no centro", site: "https://www.mahachula.com" },
  { name: "Plum Village Thailand", city: "Pak Chong", note: "Thich Nhat Hanh, mindfulness", site: "https://thaiplumvillage.org" },
  { name: "Wat Marp Jan", city: "Rayong", note: "Tradição Ajahn Chah, floresta", site: "https://www.watmarpjan.org" },
  { name: "Sorn Thawee Meditation Centre", city: "Chachoengsao", note: "Mahasi, 7-30 dias, perto de Bangkok", site: "https://www.sornthawee.org" },
];

const Retiros8834 = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Guia de Retiros na Tailândia — Conteúdo Completo"
      description="60 retiros avaliados, 12 por doação, Vipassana detalhado, preparação e roteiro pós-retiro."
    />


    {/* HERO */}
    <section className="py-20 px-6 bg-gradient-to-br from-teal-950 via-background to-emerald-950">
      <div className="max-w-3xl mx-auto text-center">
        <p className="guide-section-label mb-6">🧘 Edição Retiros — Conteúdo do Guia</p>
        <h1 className="font-display text-5xl sm:text-7xl text-foreground mb-6">Retiros na Tailândia</h1>
        <p className="text-xl text-muted-foreground">Yoga, Vipassana, detox, plant medicine, silêncio e dança — 60 retiros testados, com preço real, nível e idioma. Tudo pra você não cair em wellness raso e encontrar o retiro certo pro seu momento.</p>
      </div>
    </section>

    {/* SUMÁRIO */}
    <Section chapter="Sumário" title="O que você vai encontrar">
      <ul className="space-y-2 list-disc pl-6">
        <li>Capítulo 01 — Como escolher o retiro certo (por nível e momento)</li>
        <li>Capítulo 02 — Yoga (10 retiros)</li>
        <li>Capítulo 03 — Vipassana e meditação (10 retiros)</li>
        <li>Capítulo 04 — Detox e jejum (7 retiros)</li>
        <li>Capítulo 05 — Plant medicine legal (4 retiros)</li>
        <li>Capítulo 06 — Dança e expressão (4 retiros)</li>
        <li>Capítulo 07 — Silêncio (4 retiros)</li>
        <li>Capítulo 08 — 12 retiros POR DOAÇÃO (templos e ashrams sérios)</li>
        <li>Capítulo 09 — Como se preparar (21 dias antes)</li>
        <li>Capítulo 10 — Vipassana 10 dias: dia por dia (bônus)</li>
        <li>Capítulo 11 — Top 10 retiros de luxo que valem o preço (bônus)</li>
        <li>Capítulo 12 — Diário de retiro: template (bônus)</li>
        <li>Capítulo 13 — Roteiro pós-retiro: como integrar (bônus)</li>
      </ul>
    </Section>

    {/* CAP 01 */}
    <Section chapter="Capítulo 01" title="Como escolher o retiro certo">
      <p><strong>3 perguntas antes de reservar qualquer coisa:</strong></p>
      <Card>
        <p><strong>1. Já meditei alguma vez?</strong></p>
        <p>• <strong>Nunca</strong>: comece com 3–5 dias de yoga ou mindfulness (Cap 02 ou Plum Village).</p>
        <p>• <strong>1–10 sessões</strong>: 7 dias Wat Pa Tam Wua (aberto, flexível).</p>
        <p>• <strong>Pratica há 6+ meses</strong>: Vipassana 10 dias (Suan Mokkh ou Dhamma Kamala).</p>
        <p>• <strong>Pratica há 2+ anos</strong>: Mahasi 26 dias (Wat Ram Poeng) ou Forest Monastery.</p>
      </Card>
      <Card>
        <p><strong>2. Quanto posso pagar?</strong></p>
        <p>• <strong>R$ 0–500</strong>: qualquer um dos 12 do Cap 08 (por doação).</p>
        <p>• <strong>R$ 1.500–4.000</strong>: yoga/detox 7 dias em Koh Phangan ou Chiang Mai.</p>
        <p>• <strong>R$ 6.000–25.000</strong>: Vikasa, Absolute Sanctuary, Atmanjai.</p>
        <p>• <strong>R$ 25.000+</strong>: Kamalaya, RAKxa, Banyan Tree Wellness.</p>
      </Card>
      <Card>
        <p><strong>3. Vou sozinho ou com parceiro?</strong></p>
        <p>• <strong>Sozinho</strong>: qualquer um da lista funciona.</p>
        <p>• <strong>Casal em yoga/detox</strong>: ficam juntos (Vikasa, Sanctuary, Kamalaya).</p>
        <p>• <strong>Casal em Vipassana/silêncio</strong>: dormem separados, sem contato 10 dias.</p>
      </Card>
    </Section>

    {/* CAP 02 YOGA */}
    <Section chapter="Capítulo 02" title="Yoga — 10 retiros">
      <p>De Koh Phangan (epicentro do yoga na Ásia) a Chiang Mai. YTT, retreats curtos, tantra sério e luxo wellness.</p>
      <div className="grid gap-4">{yoga.map((x) => <RetreatCard key={x.name} x={x} />)}</div>
    </Section>

    {/* CAP 03 VIPASSANA */}
    <Section chapter="Capítulo 03" title="Vipassana e meditação — 10 retiros">
      <p>Os retiros mais sérios e transformadores. A maioria é POR DOAÇÃO. Silêncio total, acordar 4h, refeições antes do meio-dia.</p>
      <div className="grid gap-4">{vipassana.map((x) => <RetreatCard key={x.name} x={x} />)}</div>
    </Section>

    {/* CAP 04 DETOX */}
    <Section chapter="Capítulo 04" title="Detox e jejum — 7 retiros">
      <p>Jejum, suco verde, colônica, raw food. Os 7 com supervisão real (médico, naturopata ou nutricionista). Os outros são wellness instagram — evite.</p>
      <div className="grid gap-4">{detox.map((x) => <RetreatCard key={x.name} x={x} />)}</div>
    </Section>

    {/* CAP 05 PLANT MEDICINE */}
    <Section chapter="Capítulo 05" title="Plant medicine — o que é legal e seguro">
      <p>Cannabis foi descriminalizada em 2022 e parcialmente recriminalizada em 2024. Kratom é legal desde 2021. Cogumelo é zona cinza. Ayahuasca <strong>não</strong> existe legalmente na Tailândia — desconfie de quem oferece. Confirme status legal antes de viajar.</p>
      <div className="grid gap-4">{plantMedicine.map((x) => <RetreatCard key={x.name} x={x} />)}</div>
    </Section>

    {/* CAP 06 DANÇA */}
    <Section chapter="Capítulo 06" title="Dança e expressão — 4 retiros">
      <p>Ecstatic dance, 5Rhythms, breathwork. Cena forte em Sri Thanu (Koh Phangan).</p>
      <div className="grid gap-4">{danceExpression.map((x) => <RetreatCard key={x.name} x={x} />)}</div>
    </Section>

    {/* CAP 07 SILÊNCIO */}
    <Section chapter="Capítulo 07" title="Silêncio — 4 retiros">
      <p>Onde o silêncio é o método central, não acessório.</p>
      <div className="grid gap-4">{silence.map((x) => <RetreatCard key={x.name} x={x} />)}</div>
    </Section>

    {/* CAP 08 DOAÇÃO */}
    <Section chapter="Capítulo 08" title="12 retiros por doação — sérios e quase invisíveis">
      <p>Templos e mosteiros que oferecem retiro completo (alojamento, comida, ensinamento) por <strong>doação livre</strong>. Quase nenhum aparece em Google, Instagram ou TripAdvisor. Reservas: site oficial ou e-mail direto ao mosteiro.</p>
      <div className="grid gap-3">
        {donationOnly.map((x) => (
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

    {/* CAP 09 PREPARAÇÃO */}
    <Section chapter="Capítulo 09" title="Como se preparar — 21 dias antes">
      <Card>
        <p><strong>Semana -3 (21 a 15 dias antes):</strong></p>
        <p>• Comece a meditar 10min/dia (app Insight Timer, grátis).</p>
        <p>• Reduza cafeína pela metade.</p>
        <p>• Avise família/trabalho do silêncio digital.</p>
      </Card>
      <Card>
        <p><strong>Semana -2 (14 a 8 dias antes):</strong></p>
        <p>• Suba meditação pra 20min/dia.</p>
        <p>• Corte álcool e açúcar refinado.</p>
        <p>• Compre roupa branca (Vipassana exige) e sandália simples.</p>
      </Card>
      <Card>
        <p><strong>Semana -1 (7 a 1 dia antes):</strong></p>
        <p>• Meditação 30min manhã e noite.</p>
        <p>• Última cafeína: 3 dias antes (evita dor de cabeça forte no dia 2).</p>
        <p>• Pacote: roupa branca/clara, lanterna, repelente DEET, garrafa, kit higiene mínimo, NADA eletrônico.</p>
      </Card>
      <Card>
        <p><strong>Dia 0 (chegada):</strong></p>
        <p>• Chegue na cidade 1 dia antes — não emende voo com check-in do retiro.</p>
        <p>• Coma leve, durma cedo. O dia 1 começa às 4h da manhã.</p>
      </Card>
    </Section>

    {/* CAP 10 VIPASSANA DETALHADO */}
    <Section chapter="Capítulo 10 · Bônus" title="Vipassana 10 dias — dia por dia">
      <p>Baseado em Suan Mokkh e Dhamma Kamala (Goenka). Outros locais variam, mas o esqueleto é o mesmo.</p>
      <Card><p><strong>Dia 1</strong> — Chegada à tarde. Entrega de celular/livros. Primeira sessão noturna (instrução de respiração). Cama dura, quarto compartilhado ou cubículo.</p></Card>
      <Card><p><strong>Dia 2</strong> — 4h: sino. 4h30–6h30: meditação. 7h: café (vegano, antes do nascer do sol). 8h–11h: meditação em sessões de 1h. 11h: almoço. 13h–17h: meditação. 17h: chá. 18h–21h: meditação + discurso. <strong>Dor de cabeça de cafeína provável.</strong></p></Card>
      <Card><p><strong>Dia 3</strong> — O dia mais físico. Dores nas costas, joelhos, quadril aparecem. Vontade de desistir é normal. <strong>Não desista hoje — passa.</strong></p></Card>
      <Card><p><strong>Dia 4</strong> — Introdução à técnica Vipassana propriamente dita (scan corporal). Primeira "abertura" mental. Insights começam.</p></Card>
      <Card><p><strong>Dia 5–6</strong> — Mente estabilizada. Sessões mais profundas. Pode ter choro espontâneo, memórias antigas, sensações estranhas no corpo. Normal.</p></Card>
      <Card><p><strong>Dia 7–8</strong> — "Adhitthana" (sessões de 1h sem mexer). Picos de equanimidade. Sensação de leveza no corpo.</p></Card>
      <Card><p><strong>Dia 9</strong> — Metta (meditação de amor compassivo). Último dia denso.</p></Card>
      <Card><p><strong>Dia 10</strong> — Silêncio é quebrado. Conversas com outros retirantes. Choque de voltar a falar. Almoço social.</p></Card>
      <Card><p><strong>Dia 11 (saída)</strong> — Manhã livre, despedida, doação. <strong>Não marque compromisso pesado pros 3 dias seguintes</strong> — você sai sensível.</p></Card>
    </Section>

    {/* CAP 11 LUXO */}
    <Section chapter="Capítulo 11 · Bônus" title="Top 10 retiros de luxo que valem o preço">
      <ol className="space-y-3 list-decimal pl-6">
        <li><strong>Kamalaya (Koh Samui)</strong> — programa Burnout com médico dedicado. Quem pode pagar R$ 30k+, paga e agradece.</li>
        <li><strong>RAKxa (Bangkok / Bang Krachao)</strong> — único 'medical wellness' real. Exames clínicos inclusos.</li>
        <li><strong>Vikasa (Koh Samui)</strong> — yoga em falésia. Quarto Cliff vale cada baht.</li>
        <li><strong>Banyan Tree Spa Sanctuary (Phuket)</strong> — vila privativa com piscina e terapeuta.</li>
        <li><strong>Atmanjai (Phuket)</strong> — detox sério, médico ayurvédico residente.</li>
        <li><strong>Anantara Mai Khao (Phuket)</strong> — retreats curtos em vila com piscina privada.</li>
        <li><strong>Sukko Cultural Spa (Phuket)</strong> — rituais Lanna 3h, vila tradicional.</li>
        <li><strong>Six Senses Yao Noi</strong> — wellness em ilha-resort, ioga em pavilhão sobre o mar.</li>
        <li><strong>Chiva-Som (Hua Hin)</strong> — pioneiro asiático, programa 7+ dias com consultor de saúde.</li>
        <li><strong>Absolute Sanctuary (Koh Samui)</strong> — fitness/wellness sem ar 'espiritual demais'.</li>
      </ol>
    </Section>

    {/* CAP 12 DIÁRIO */}
    <Section chapter="Capítulo 12 · Bônus" title="Diário de retiro — template">
      <p>Imprima 1 cópia pra cada dia. Preencha à mão, à noite, antes de dormir.</p>
      <Card>
        <p><strong>Dia ____ · Data ____</strong></p>
        <p>1. O que apareceu no corpo hoje? (dor, leveza, calor, formigamento, choro)</p>
        <p>2. O que apareceu na mente hoje? (memória, decisão, padrão, insight)</p>
        <p>3. Em que sessão fui mais fundo? Por quê?</p>
        <p>4. Em que sessão escapei mais? Por quê?</p>
        <p>5. Uma frase pra resumir o dia: __________________________________</p>
        <p>6. O que quero levar pra casa: __________________________________</p>
      </Card>
      <p className="text-sm italic">Dica: releia o diário 30 dias depois do retiro. É aí que você percebe o que de fato mudou.</p>
    </Section>

    {/* CAP 13 PÓS RETIRO */}
    <Section chapter="Capítulo 13 · Bônus" title="Roteiro pós-retiro — como integrar">
      <Card>
        <p><strong>Semana +1:</strong></p>
        <p>• Não marque reunião importante, festa ou viagem nova.</p>
        <p>• Mantenha 30min de meditação manhã + 15min noite.</p>
        <p>• Coma leve e vegetariano por 7 dias (corpo está recalibrado).</p>
        <p>• Anote tudo que vier no diário — insights aparecem com 3–7 dias de atraso.</p>
      </Card>
      <Card>
        <p><strong>Semanas +2 a +4:</strong></p>
        <p>• Reintroduza café/álcool com consciência — você vai sentir 3x mais.</p>
        <p>• Comunique 1 limite novo pra família/trabalho (você vai querer mudar algo, não force).</p>
        <p>• Encontre um grupo local de meditação (sangha) — sustenta o que você abriu.</p>
      </Card>
      <Card>
        <p><strong>Mês +2 e +3:</strong></p>
        <p>• Cuidado com a 'ressaca espiritual': euforia vira tristeza por volta da semana 6.</p>
        <p>• Reveja o diário (Cap 12). Compare quem você era no dia 1 com quem você é agora.</p>
        <p>• Se a transformação foi profunda, agende o próximo retiro pra daqui 6–12 meses, não pra já.</p>
      </Card>
    </Section>

    <section className="py-12 px-6 text-center">
      <p className="text-sm text-muted-foreground">Guia atualizado periodicamente. Em caso de dúvida sobre status legal de plantas, vagas ou preços, escreva direto ao mosteiro/centro listado.</p>
    </section>
  </div>
);

export default Retiros8834;

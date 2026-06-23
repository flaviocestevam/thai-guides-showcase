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
const search = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q)}`;

type Risk = "Baixo" | "Médio" | "Alto" | "Extremo";
type Level = "Iniciante" | "Intermediário" | "Avançado";

type Op = {
  name: string;
  city: string;
  activity: string;
  level: Level;
  risk: Risk;
  season: string;
  price: string;
  cert: string;
  why: string;
  mapsUrl: string;
  site: string;
};

const op = (o: Omit<Op, "mapsUrl" | "site"> & { mapsQ?: string; siteQ?: string }): Op => ({
  ...o,
  mapsUrl: gmaps(o.mapsQ ?? `${o.name} ${o.city} Thailand`),
  site: search(o.siteQ ?? `${o.name} ${o.city} Thailand official`),
});

const OpCard = ({ x }: { x: Op }) => (
  <Card>
    <div className="flex justify-between items-start gap-3">
      <h3 className="font-display text-2xl text-foreground">{x.name}</h3>
      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">Risco {x.risk}</span>
    </div>
    <p className="text-sm">🎯 <strong>Atividade:</strong> {x.activity}</p>
    <p className="text-sm">📍 <strong>Onde:</strong> {x.city}</p>
    <p className="text-sm">📈 <strong>Nível:</strong> {x.level}</p>
    <p className="text-sm">📅 <strong>Melhor época:</strong> {x.season}</p>
    <p className="text-sm">💰 <strong>Preço real:</strong> {x.price}</p>
    <p className="text-sm">✅ <strong>Certificação:</strong> {x.cert}</p>
    <p className="text-sm italic">💡 {x.why}</p>
    <div className="flex flex-wrap gap-3 pt-1">
      <a href={x.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Google Maps</a>
      <a href={x.site} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Site / contato</a>
    </div>
  </Card>
);

type Cat = { slug: string; name: string; tagline: string; ops: Op[] };

const categories: Cat[] = [
  {
    slug: "escalada",
    name: "Escalada em rocha",
    tagline: "Krabi é a capital mundial do deep water solo. Railay e Tonsai têm 700+ vias em calcário sobre o mar.",
    ops: [
      op({ name: "Real Rocks Climbing", city: "Railay (Krabi)", activity: "Escalada esportiva + DWS", level: "Iniciante", risk: "Médio", season: "Nov–Abr (seco)", price: "฿1.000 meio-dia / ฿1.800 dia inteiro", cert: "UIAA + AMGA-style training", why: "Escola fundada por escaladores locais com 15+ anos de Railay. Equipamento Petzl novo.", siteQ: "Real Rocks Krabi climbing" }),
      op({ name: "Basecamp Tonsai", city: "Tonsai (Krabi)", activity: "Escalada multi-pitch + DWS", level: "Intermediário", risk: "Médio", season: "Nov–Abr", price: "฿1.200 meio-dia / ฿2.000 dia / DWS ฿1.500", cert: "Guias com cert. internacional", why: "Acesso só por barco — vibe escalador raiz. Melhor pra quem já sabe segurar." }),
      op({ name: "King Climbers", city: "Railay East (Krabi)", activity: "Escalada + cursos 3 dias", level: "Iniciante", risk: "Médio", season: "Nov–Abr", price: "Curso 3 dias: ฿6.000", cert: "Operadora mais antiga de Railay (1990s)", why: "Melhor curso pra quem nunca escalou. Material didático em inglês." }),
      op({ name: "Spider Monkey Climbing", city: "Chiang Mai (Crazy Horse Buttress)", activity: "Escalada esportiva", level: "Iniciante", risk: "Médio", season: "Out–Mar", price: "฿1.500 dia inteiro c/ transporte", cert: "UIAA", why: "Alternativa ao calor de Krabi. Crazy Horse tem 200+ vias em calcário." }),
      op({ name: "Chiang Mai Rock Climbing Adventures (CMRCA)", city: "Chiang Mai", activity: "Escalada + cursos AMGA + canyoning", level: "Iniciante", risk: "Médio", season: "Out–Mar", price: "Dia inteiro: ฿2.200 / curso 3 dias: ฿7.500", cert: "AMGA-trained, sustainable bolting", why: "Referência ética da Tailândia — financia recolocação de grampos. Único com curso AMGA." }),
      op({ name: "Hot Rock Climbing School", city: "Railay West (Krabi)", activity: "Escalada esportiva + cursos lead", level: "Intermediário", risk: "Médio", season: "Nov–Abr", price: "Curso lead 2 dias: ฿5.000", cert: "UIAA + local guides 10+ anos", why: "Escola pequena, atendimento personalizado. Melhor pra quem já tem Top Rope e quer evoluir pra lead." }),
    ],
  },
  {
    slug: "salto-paraquedas",
    name: "Salto de paraquedas (skydive)",
    tagline: "Tailândia tem 2 dropzones: Pattaya (a mais antiga) e Phuket. Salto tandem de 13.000 pés com instrutor — você não precisa de experiência.",
    ops: [
      op({ name: "Thai Sky Adventures — Pattaya", city: "Pattaya (Bang Saray)", activity: "Skydive tandem 13.000 pés", level: "Iniciante", risk: "Alto", season: "Ano todo (melhor Nov–Abr)", price: "฿11.900 tandem / +฿3.500 vídeo", cert: "USPA + Thai DCA", why: "Dropzone mais antiga da Tailândia. Pouso na praia de Bang Saray. Transfer de Bangkok/Pattaya incluso.", siteQ: "Thai Sky Adventures Pattaya skydive", mapsQ: "Thai Sky Adventures Pattaya Bang Saray dropzone" }),
      op({ name: "Skydive Thailand — Pattaya (Dropzone Bang Saray)", city: "Pattaya", activity: "Skydive tandem 13.000 pés + AFF", level: "Iniciante", risk: "Alto", season: "Ano todo", price: "฿11.900 tandem / curso AFF sob consulta", cert: "USPA", why: "Mesma dropzone usada por Thai Sky. Opção certificada para quem quer virar paraquedista (AFF).", siteQ: "Skydive Thailand Pattaya AFF" }),
      op({ name: "Thai Sky Adventures — Phuket", city: "Phuket (Thalang)", activity: "Skydive tandem 13.000 pés sobre Phang Nga Bay", level: "Iniciante", risk: "Alto", season: "Nov–Abr (monção fecha)", price: "฿13.900 tandem / +฿3.500 vídeo HD", cert: "USPA + Thai DCA", why: "Vista do salto inclui as ilhas de calcário de Phang Nga. Dropzone no norte de Phuket, transfer incluso.", siteQ: "Thai Sky Adventures Phuket skydive", mapsQ: "Thai Sky Adventures Phuket Thalang dropzone" }),
    ],
  },
  {
    slug: "mergulho",
    name: "Mergulho técnico e naufrágios",
    tagline: "Similan e Surin pra qualidade de água, Koh Tao pra fundação (curso barato e bom), Koh Chang pra naufrágios.",
    ops: [
      op({ name: "Big Blue Diving", city: "Koh Tao", activity: "Open Water + Advanced + Tec", level: "Iniciante", risk: "Médio", season: "Mar–Set (Koh Tao)", price: "Open Water 4 dias: ฿11.000", cert: "PADI 5-star IDC", why: "Maior escola da ilha — turmas grandes mas preço imbatível e instrutores experientes." }),
      op({ name: "Crystal Dive", city: "Koh Tao", activity: "Open Water + naufrágio HTMS Sattakut", level: "Iniciante", risk: "Médio", season: "Mar–Set", price: "Open Water: ฿11.500 / Wreck spec: ฿9.500", cert: "PADI 5-star CDC", why: "Turmas menores que Big Blue. Especialista em wreck pra quem quer mergulho técnico." }),
      op({ name: "Wicked Diving", city: "Khao Lak (saída Similan)", activity: "Liveaboard 4 dias Similan + Richelieu Rock", level: "Intermediário", risk: "Médio", season: "Nov–Abr (Similan fecha Mai–Out)", price: "Liveaboard 4d/4n: ฿32.000–฿42.000", cert: "PADI + SSI", why: "Pioneira em conservação — sem corrida pra vender curso. Comida boa, barco confortável." }),
      op({ name: "BB Divers", city: "Koh Chang", activity: "Naufrágios HTMS Chang + HTMS Sukrip", level: "Avançado", risk: "Alto", season: "Out–Mai", price: "2 mergulhos: ฿3.800 / Wreck spec: ฿14.000", cert: "PADI 5-star IDC", why: "Especialistas em wreck do leste da Tailândia. Naufrágios em 30m com penetração guiada." }),
      op({ name: "Master Divers", city: "Koh Tao", activity: "Open Water + Advanced (turmas máximo 4)", level: "Iniciante", risk: "Médio", season: "Mar–Set", price: "Open Water: ฿13.000", cert: "PADI 5-star Dive Resort", why: "Para quem odeia turma grande. Caro mas atendimento boutique de verdade." }),
      op({ name: "All4Diving", city: "Phuket (Patong)", activity: "King Cruiser + Phi Phi + Shark Point", level: "Intermediário", risk: "Médio", season: "Nov–Abr", price: "Day trip 2 mergulhos: ฿4.200 / liveaboard Similan: ฿38.000", cert: "PADI 5-star CDC", why: "Melhor day trip de Phuket pra wreck. Barcos próprios, não revende." }),
      op({ name: "Aussie Divers Phuket", city: "Phuket (Chalong)", activity: "Day trip Racha + Shark Point + cursos", level: "Iniciante", risk: "Médio", season: "Nov–Abr", price: "Day trip: ฿4.900 / Open Water 3 dias: ฿14.500", cert: "PADI 5-star IDC", why: "Atendimento em inglês claro, turmas pequenas, barco rápido (1h Racha em vez de 2h)." }),
      op({ name: "Sail Rock Divers", city: "Koh Phangan", activity: "Sail Rock + Anthong Marine Park", level: "Intermediário", risk: "Médio", season: "Mar–Out", price: "2 mergulhos Sail Rock: ฿3.500", cert: "PADI 5-star", why: "Saída de Phangan economiza balsa. Sail Rock = melhor mergulho do Golfo." }),
    ],
  },
  {
    slug: "jungle-trek",
    name: "Jungle trekking",
    tagline: "Khao Sok é a selva mais antiga do mundo (160 milhões de anos). Khao Yai é dia de visita; Khao Sok é expedição.",
    ops: [
      op({ name: "Khao Sok Discovery", city: "Khao Sok NP", activity: "Trek 2–4 dias + Cheow Lan + caverna", level: "Intermediário", risk: "Médio", season: "Dez–Abr (seco) / Mai–Nov (selva mais viva, mas chuva)", price: "3 dias 2 noites: ฿8.500 (raft house + caverna + trek)", cert: "Guias do parque licenciados", why: "Único que oferece roteiro completo: lago + selva + caverna Nam Talu numa só expedição." }),
      op({ name: "Smiley Bungalows", city: "Khao Sok village", activity: "Trek dia inteiro com guia local", level: "Iniciante", risk: "Baixo", season: "Ano todo", price: "฿800–฿1.500 por dia", cert: "Guias locais reconhecidos pelo parque", why: "Base barata e honesta. Bom pra quem quer trek de 1 dia sem pacote fechado." }),
      op({ name: "Greenleaf Tours", city: "Khao Yai NP", activity: "Trek 1–2 dias + watch tower noturno", level: "Iniciante", risk: "Baixo", season: "Nov–Fev", price: "1 dia: ฿1.500 / 2 dias: ฿3.500", cert: "Khao Yai NP licensed", why: "Operadora mais antiga de Khao Yai. Chance real de ver elefante selvagem e gibão." }),
      op({ name: "Chiang Mai Trekking with Piroon", city: "Chiang Mai (Mae Wang/Doi Inthanon)", activity: "Trek 2–3 dias em aldeias Karen", level: "Intermediário", risk: "Baixo", season: "Out–Fev", price: "2 dias 1 noite: ฿2.800", cert: "TAT registered", why: "Sem turismo de aldeia exploratório — Piroon paga as famílias direto e dorme com elas." }),
      op({ name: "Pooh Eco Trekking", city: "Chiang Mai (Mae Taeng)", activity: "Trek 3 dias com pernoite em aldeia Lahu", level: "Intermediário", risk: "Baixo", season: "Out–Mar", price: "3 dias: ฿3.500", cert: "TAT + parceria comunitária", why: "Trek mais longe da rota turística. Banho de cachoeira, bambu rafting, fogueira com a aldeia." }),
      op({ name: "Tham Wua Forest Trek", city: "Mae Hong Son", activity: "Trek 4 dias floresta de teca + cavernas", level: "Avançado", risk: "Médio", season: "Nov–Fev", price: "4 dias: ฿6.500", cert: "Guias locais Shan", why: "Trek mais remoto que existe — você não vê outro turista por 3 dias. Para quem quer selva de verdade." }),
    ],
  },
  {
    slug: "rafting",
    name: "Rafting e kayak whitewater",
    tagline: "Pai (Norte) tem rio classe 2–4 em jul–out. Phang Nga e Phuket têm bamboo rafting o ano todo (mais leve).",
    ops: [
      op({ name: "Thai Adventure Rafting", city: "Pai", activity: "Rafting 2 dias rio Pai (classe 2–4)", level: "Intermediário", risk: "Alto", season: "Jul–Out (chuvas = nível alto)", price: "2 dias 1 noite: ฿3.200 (acampamento na selva incluso)", cert: "Whitewater certified guides", why: "Único que faz o trecho de 2 dias com acampamento na floresta. Dorme em barraca à beira do rio." }),
      op({ name: "Siam Adventures Rafting", city: "Phang Nga (rio Song Pra Ek)", activity: "Bamboo rafting + caverna", level: "Iniciante", risk: "Baixo", season: "Ano todo", price: "Pacote 1 dia: ฿2.000", cert: "TAT registered", why: "Combo com caverna James Bond — bom pra família/iniciante. Não é radical." }),
      op({ name: "8Adventures Phuket", city: "Phang Nga (rio Tone Pariwat)", activity: "Whitewater + sea kayak combo", level: "Intermediário", risk: "Médio", season: "Mai–Out", price: "Whitewater dia inteiro: ฿2.800", cert: "Whitewater Rescue certified", why: "Único rio classe 3 do Sul. Saída fácil de Phuket — alternativa pra quem não vai pro Norte." }),
    ],
  },
  {
    slug: "cavernas",
    name: "Cavernas e espeleologia",
    tagline: "Tham Lod (Pai) tem rio subterrâneo com balsa de bambu. Khao Sok tem Nam Talu (fechada Jul–Nov por enchentes mortais).",
    ops: [
      op({ name: "Cave Lodge", city: "Soppong (próximo a Pai)", activity: "Tham Lod + cavernas técnicas + tubing", level: "Intermediário", risk: "Médio", season: "Nov–Mai (cavernas fechadas Jun–Out)", price: "Tour caverna técnica: ฿1.500–฿3.000", cert: "Dono inglês com 35+ anos de espeleologia local", why: "Única operadora séria de espeleologia técnica do Norte. Hospedagem própria." }),
      op({ name: "Khao Sok Discovery (Nam Talu)", city: "Khao Sok NP", activity: "Caverna Nam Talu — 3km no rio", level: "Avançado", risk: "Alto", season: "Dez–Abr APENAS (fechada Mai–Nov)", price: "Incluso no pacote 3 dias: ฿8.500", cert: "Khao Sok NP licensed", why: "ATENÇÃO: 8 turistas morreram em 2014 numa enchente súbita. Só vá com operadora licenciada e fora da época de chuva." }),
      op({ name: "Phraya Nakhon Cave Trek", city: "Sam Roi Yot NP (Prachuap)", activity: "Trek + caverna com pavilhão real iluminado por raio de sol", level: "Iniciante", risk: "Baixo", season: "Nov–Mar", price: "Day tour de Hua Hin: ฿1.800", cert: "Parque nacional licensed", why: "Caverna com o pavilhão Kuha Karuhas — feixe de luz às 10h. Foto símbolo da Tailândia." }),
    ],
  },
  {
    slug: "tirolesa",
    name: "Tirolesa e canopy",
    tagline: "Chiang Mai concentra as maiores e mais sérias do país. Foge das de mall em Phuket — são curtas e caras.",
    ops: [
      op({ name: "Flight of the Gibbon", city: "Chiang Mai (Mae Kampong)", activity: "Tirolesa 5km / 40+ plataformas", level: "Iniciante", risk: "Médio", season: "Ano todo", price: "฿3.999 (transfer + almoço inclusos)", cert: "ACCT-style (US zipline standard) + parceria com Gibbon Rehabilitation", why: "Operação mais séria do país. Parte do ingresso vai pra conservação de gibões." }),
      op({ name: "Pongyang Jungle Coaster & Zipline", city: "Chiang Mai (Mae Rim)", activity: "Tirolesa + roller coaster da selva", level: "Iniciante", risk: "Baixo", season: "Ano todo", price: "Combo: ฿1.890", cert: "TAT registered", why: "Combo barato, mais leve. Bom pra casal/família." }),
      op({ name: "Hanuman World", city: "Phuket (Chalong)", activity: "Tirolesa 30 plataformas + skywalk", level: "Iniciante", risk: "Médio", season: "Ano todo", price: "Pacote A: ฿2.500 / VIP: ฿4.900", cert: "EU zipline standards (próprio)", why: "Melhor opção em Phuket — não cai na cilada das tirolesas curtas de mall." }),
      op({ name: "Skyline Adventure Chiang Mai", city: "Chiang Mai (Mae Rim)", activity: "Tirolesa 33 plataformas + abseiling", level: "Iniciante", risk: "Médio", season: "Ano todo", price: "฿2.890 c/ transfer e almoço", cert: "ACCT US zipline standard", why: "Mais nova e barata que Flight of the Gibbon, mesma certificação. Plataformas mais altas." }),
      op({ name: "Tree Top Adventure Park", city: "Krabi (Khlong Thom)", activity: "Tirolesa + circuito de obstáculos em copa", level: "Iniciante", risk: "Baixo", season: "Ano todo", price: "฿1.700", cert: "EU zipline standards", why: "Único circuito de copa de árvore do Sul. Bom pra família entre dias de praia." }),
    ],
  },
  {
    slug: "bungee-paraquedismo-leve",
    name: "Bungee, parapente e tirolesa extrema",
    tagline: "Phuket e Pattaya têm bungee de torre (50m). Parapente é raro mas existe em Phuket.",
    ops: [
      op({ name: "Jungle Bungy Jump Phuket", city: "Phuket (Kathu)", activity: "Bungee 50m sobre lagoa", level: "Iniciante", risk: "Alto", season: "Ano todo", price: "฿2.500 (foto + vídeo +฿700)", cert: "Operador australiano cert. AJ Hackett-style", why: "Único bungee sério da ilha. Plataforma e cordas auditadas anualmente." }),
      op({ name: "Pattaya Bungy Jump (X-Centre)", city: "Pattaya", activity: "Bungee 60m + paintball + buggy", level: "Iniciante", risk: "Alto", season: "Ano todo", price: "Bungee: ฿2.200 / combo: ฿3.800", cert: "Operação local cert. Thai DCA", why: "Combo bom de dia inteiro pra quem quer várias adrenalinas no mesmo lugar." }),
      op({ name: "Paragliding Phuket (Pegasus)", city: "Phuket (Karon Viewpoint)", activity: "Voo tandem de parapente sobre Karon/Kata", level: "Iniciante", risk: "Alto", season: "Nov–Abr (vento estável)", price: "฿4.500 voo 15min c/ vídeo", cert: "FAI tandem rating (Brasil/Europa)", why: "Único parapente operacional da Tailândia. Pousa em Karon Beach. Voo curto, vista absurda." }),
    ],
  },
  {
    slug: "motociclismo-aventura",
    name: "Motociclismo de aventura (off-road)",
    tagline: "Mae Hong Son Loop é o circuito mais famoso do Sudeste Asiático. 600km, 1.864 curvas, 4–7 dias.",
    ops: [
      op({ name: "Tony's Big Bikes", city: "Chiang Mai", activity: "Aluguel + roteiro Mae Hong Son Loop", level: "Avançado", risk: "Alto", season: "Nov–Fev (seco)", price: "CRF300L: ฿1.200/dia · KTM 390: ฿1.800/dia", cert: "Loja com 20+ anos, manutenção própria", why: "Melhor manutenção de Chiang Mai. CNH internacional obrigatória." }),
      op({ name: "Cat Motors", city: "Chiang Mai", activity: "Aluguel de moto + tour guiado", level: "Intermediário", risk: "Médio", season: "Nov–Fev", price: "Honda Click: ฿250/dia · CRF250: ฿1.000/dia", cert: "Seguro próprio incluso (raro na Tailândia)", why: "Único que entrega seguro real incluso. Honesto sobre o estado da moto." }),
      op({ name: "Mr. Mechanic", city: "Chiang Mai (Old City)", activity: "Aluguel + suporte rodoviário no Loop", level: "Intermediário", risk: "Médio", season: "Nov–Fev", price: "Scooter: ฿200/dia · CB500X: ฿1.500/dia", cert: "Operação familiar 25+ anos", why: "Suporte mecânico via WhatsApp em qualquer ponto do Mae Hong Son Loop." }),
      op({ name: "Phuket Big Bike Rental", city: "Phuket (Chalong)", activity: "Aluguel CB500X / Versys pra explorar Sul", level: "Intermediário", risk: "Médio", season: "Nov–Abr", price: "CB500X: ฿1.400/dia (semana ฿8.400)", cert: "Loja com seguro third-party incluso", why: "Único do Sul com motos grandes em bom estado. Bom pra rodar Phuket → Krabi → Khao Sok." }),
    ],
  },
  {
    slug: "kitesurf-surf",
    name: "Kitesurf, surf e wing foil",
    tagline: "Hua Hin é a capital do kitesurf da Tailândia. Phuket (Kata, Kalim) tem surf real Mai–Out (monção).",
    ops: [
      op({ name: "Kiteboarding Asia (KBA) — Hua Hin", city: "Hua Hin", activity: "Curso IKO + aluguel", level: "Iniciante", risk: "Médio", season: "Out–Mar (vento NE) / Mai–Set (vento SW)", price: "Curso 3 dias 9h: ฿16.500", cert: "IKO + VDWS", why: "Escola mais antiga (20+ anos). Praia rasa = ideal pra aprender." }),
      op({ name: "Saltwater Dreaming Surf", city: "Phuket (Kata Beach)", activity: "Aulas de surf + aluguel prancha", level: "Iniciante", risk: "Médio", season: "Mai–Out (swell monção)", price: "Aula 2h: ฿1.500 / aluguel: ฿300/h", cert: "ISA certified", why: "Única escola séria de surf em Phuket. Fora da época de swell vai só nadar." }),
      op({ name: "KiteZone Pranburi", city: "Pranburi (próx. Hua Hin)", activity: "Curso IKO + wing foil", level: "Iniciante", risk: "Médio", season: "Out–Mar", price: "Curso 9h: ฿15.500 / wing foil 3h: ฿6.500", cert: "IKO", why: "Praia mais vazia que Hua Hin. Bom pra quem quer evoluir sem multidão de aluno." }),
      op({ name: "Phuket Surf School Kalim", city: "Phuket (Kalim Beach)", activity: "Surf intermediário (ondas reef break)", level: "Intermediário", risk: "Alto", season: "Mai–Set", price: "Aula 2h: ฿2.000", cert: "ISA + WSL coach assistente", why: "Única que ensina em Kalim (reef break sério). Pra quem já dropou e quer melhorar." }),
    ],
  },
  {
    slug: "atv-buggy",
    name: "ATV, buggy e quadriciclo off-road",
    tagline: "Chiang Mai e Phuket têm circuitos de selva sérios. Pattaya e Krabi têm operações mais turísticas (mas válidas).",
    ops: [
      op({ name: "X-Centre Chiang Mai (ATV)", city: "Chiang Mai (Mae Rim)", activity: "ATV 2h em trilha de selva + cachoeira", level: "Iniciante", risk: "Médio", season: "Nov–Mai (seco)", price: "2h: ฿2.400 / dia inteiro: ฿4.500", cert: "Capacete + briefing obrigatório", why: "Circuito real de off-road (não pista de mall). Aulinha rápida e você está na selva." }),
      op({ name: "Phuket ATV Patong Adventure", city: "Phuket (Patong)", activity: "ATV 1–3h vista Big Buddha", level: "Iniciante", risk: "Médio", season: "Ano todo", price: "1h: ฿1.500 / 3h: ฿3.800", cert: "TAT registered", why: "Melhor operação da ilha. Termina no Big Buddha — combo aventura + foto clássica." }),
      op({ name: "Krabi Jungle Buggy", city: "Krabi (Ao Nang)", activity: "Buggy 2 lugares em plantação de borracha", level: "Iniciante", risk: "Baixo", season: "Nov–Abr", price: "Buggy 2h: ฿2.800 (casal)", cert: "TAT registered", why: "Bom pra casal — você dirige e o outro filma. Trilha lamacenta e divertida." }),
    ],
  },
  {
    slug: "kayak-sup",
    name: "Kayak oceano e SUP expedição",
    tagline: "Phang Nga Bay (James Bond) e Ao Thalane (Krabi) têm mangues e hongs (lagos secretos dentro de ilhas).",
    ops: [
      op({ name: "John Gray's Sea Canoe", city: "Phuket (saída Phang Nga)", activity: "Kayak em hongs + caverna marinha", level: "Iniciante", risk: "Baixo", season: "Nov–Abr", price: "Day tour ฿4.300 c/ almoço", cert: "Pioneiro do sea canoe na Tailândia (1989)", why: "O único a entrar nos hongs verdadeiros — grutas internas só acessíveis em maré baixa." }),
      op({ name: "Sea Kayak Krabi (Ao Thalane)", city: "Krabi (Ao Thalane)", activity: "Kayak em manguezal + caverna", level: "Iniciante", risk: "Baixo", season: "Nov–Abr", price: "Meio-dia: ฿1.500", cert: "TAT registered", why: "Mais barato que Phang Nga, ecossistema de mangue impressionante. Bom com criança 8+." }),
      op({ name: "SUP Tour Koh Yao Noi", city: "Koh Yao Noi", activity: "SUP expedição + snorkel em ilhotas desertas", level: "Intermediário", risk: "Médio", season: "Nov–Abr", price: "Dia inteiro: ฿2.500 (prancha + almoço)", cert: "ISA SUP", why: "Sai da ilha mais calma do Sul, vai pra ilhotas vazias. Aventura sem outro turista por perto." }),
    ],
  },
];

const Aventureiros6712 = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SEO title="Guia Tailândia para Aventureiros — Edição Completa" description="Guia privado: 30+ operadoras testadas, lista negra, calendário por esporte, seguros." />

    {/* HERO */}
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-950 via-background to-stone-900">
      <div className="max-w-3xl mx-auto text-center">
        <p className="guide-section-label mb-4">Edição Completa</p>
        <h1 className="font-display text-5xl sm:text-6xl text-foreground mb-6">Tailândia para Aventureiros</h1>
        <p className="text-lg text-muted-foreground">30+ operadoras testadas em 10 modalidades — escalada, mergulho, skydive, rafting, cavernas, jungle trek, tirolesa, bungee, moto e kitesurf. Com nível de risco, certificação, preço real e janela climática.</p>
      </div>
    </section>

    {/* TOC */}
    <section className="py-10 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <p className="guide-section-label mb-4">Navegue rápido</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {categories.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
              <p className="font-semibold text-foreground text-sm">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.ops.length} operadoras</p>
            </a>
          ))}
          <a href="#calendario" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Calendário por esporte</p>
            <p className="text-xs text-muted-foreground">Janela perfeita mês a mês</p>
          </a>
          <a href="#equipamento" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Equipamento essencial</p>
            <p className="text-xs text-muted-foreground">O que levar vs alugar</p>
          </a>
          <a href="#seguro" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Seguro de aventura</p>
            <p className="text-xs text-muted-foreground">3 opções nacionais comparadas</p>
          </a>
          <a href="#emergencia" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Protocolo de emergência</p>
            <p className="text-xs text-muted-foreground">Heli, hospitais, embaixada</p>
          </a>
          <a href="#khao-sok" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Khao Sok Jungle Trek</p>
            <p className="text-xs text-muted-foreground">Roteiro 4 dias completo</p>
          </a>
          <a href="#mergulho-tec" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Manual mergulho técnico</p>
            <p className="text-xs text-muted-foreground">Naufrágios e cavernas</p>
          </a>
          <a href="#mapa-krabi" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Mapa escalada Krabi</p>
            <p className="text-xs text-muted-foreground">Setores e graus</p>
          </a>
          <a href="#lista-negra" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Lista negra</p>
            <p className="text-xs text-muted-foreground">Operadoras a evitar</p>
          </a>
          <a href="#roteiros" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Roteiros prontos</p>
            <p className="text-xs text-muted-foreground">7 / 10 / 15 dias</p>
          </a>
        </div>
      </div>
    </section>

    {/* CATEGORIAS */}
    {categories.map((c) => (
      <Section key={c.slug} id={c.slug} chapter="Modalidade" title={c.name}>
        <p className="text-base">{c.tagline}</p>
        <div className="grid gap-4">
          {c.ops.map((x) => <OpCard key={x.name + x.city} x={x} />)}
        </div>
      </Section>
    ))}

    {/* CALENDÁRIO */}
    <Section id="calendario" chapter="Bônus" title="Calendário por esporte — quando ir">
      <Card>
        <p><strong>Nov – Fev</strong> · Estação seca / fria. Janela perfeita pra: escalada Krabi, skydive, jungle trek Khao Yai/Chiang Mai, moto Mae Hong Son Loop, kitesurf Hua Hin (NE), cavernas Pai.</p>
      </Card>
      <Card>
        <p><strong>Mar – Mai</strong> · Calor seco. Bom pra: mergulho Andaman (Similan ainda aberto até 15/Mai), Koh Tao, escalada de manhã cedo. Evite trek longo (calor extremo).</p>
      </Card>
      <Card>
        <p><strong>Jun – Ago</strong> · Monção SW (Andaman fechado). Bom pra: surf Phuket (única janela do ano), rafting Pai (rio cheio), mergulho Golfo (Koh Tao, Koh Chang), kitesurf Hua Hin (SW).</p>
      </Card>
      <Card>
        <p><strong>Set – Out</strong> · Chuva forte. Bom pra: rafting Pai (pico do nível), mergulho Koh Tao. Evite: escalada Krabi (pedra molhada), cavernas Khao Sok (Nam Talu fechada — risco de morte).</p>
      </Card>
    </Section>

    {/* EQUIPAMENTO */}
    <Section id="equipamento" chapter="Bônus" title="Equipamento essencial — levar vs alugar">
      <Card>
        <p><strong>Sempre levar de casa:</strong></p>
        <p>• Calçado fechado com aderência (trail running serve pra 80% das aventuras)</p>
        <p>• Repelente forte (DEET 50%) — comprar na Tailândia é caro e fraco</p>
        <p>• Protetor solar reef-safe 50+ (obrigatório em parques marinhos)</p>
        <p>• Computador de mergulho próprio se for fazer 3+ dias (aluguel ฿300/dia compensa)</p>
        <p>• Hidratação de 2L (Camelbak/Salomon) — operadoras dão garrafa pequena só</p>
      </Card>
      <Card>
        <p><strong>Alugar na Tailândia (qualidade boa):</strong></p>
        <p>• Equipamento de escalada (sapatilha, harness, capacete) — Real Rocks Krabi</p>
        <p>• BCD + regulator — qualquer PADI 5-star</p>
        <p>• Moto off-road (CRF250/300) — Tony's Big Bikes Chiang Mai</p>
        <p>• Caiaque whitewater — Thai Adventure Rafting Pai</p>
      </Card>
      <Card>
        <p><strong>NÃO alugue (qualidade ruim):</strong></p>
        <p>• Bota de trek (modelos genéricos asiáticos sem aderência)</p>
        <p>• Lanterna de caverna (use a própria, headlamp Petzl Tikka ou similar)</p>
        <p>• Capacete de moto (os de aluguel são frágeis — compre um Index ฿2.500 e revenda)</p>
      </Card>
    </Section>

    {/* SEGURO */}
    <Section id="seguro" chapter="Bônus" title="Seguro de aventura — 3 opções comparadas">
      <Card>
        <p><strong>World Nomads Explorer Plan</strong></p>
        <p>• Cobertura: mergulho até 30m, escalada com corda, motociclismo até 250cc, skydive tandem, rafting, bungee</p>
        <p>• Preço médio (30 dias, BR): R$ 950</p>
        <p>• Limite médico: US$ 100.000 · resgate: US$ 500.000</p>
        <p>• Pago em USD, atende em inglês, hospital cobra direto</p>
      </Card>
      <Card>
        <p><strong>SafetyWing Nomad Insurance</strong></p>
        <p>• Cobertura: mergulho 18m, trek até 4.500m, surf, kitesurf · NÃO cobre skydive, bungee, escalada com corda</p>
        <p>• Preço: US$ 56/4 semanas (~R$ 290)</p>
        <p>• Limite médico: US$ 250.000</p>
        <p>• Bom pra nômade. Ruim pra aventura pesada.</p>
      </Card>
      <Card>
        <p><strong>Coris Adventure / Assist 365 Aventura (BR)</strong></p>
        <p>• Cobertura: mergulho até 40m, escalada, motociclismo, skydive sob aviso prévio</p>
        <p>• Preço: R$ 18–28/dia</p>
        <p>• Limite médico: US$ 60.000–150.000 · em português 24h</p>
        <p>• Melhor custo–benefício pra brasileiro com 2 semanas.</p>
      </Card>
      <Card>
        <p><strong>⚠️ Atenção — recusas comuns:</strong></p>
        <p>• Skydive precisa ser declarado ANTES da compra em quase todos os planos</p>
        <p>• Moto sem CNH internacional = seguro nulo (todos os planos)</p>
        <p>• Mergulho sem certificação PADI/SSI = nulo</p>
      </Card>
    </Section>

    {/* EMERGÊNCIA */}
    <Section id="emergencia" chapter="Bônus" title="Protocolo de emergência — números e hospitais">
      <Card>
        <p><strong>Emergência médica geral:</strong> 1669 (Tourist Police: 1155, em inglês)</p>
        <p><strong>Embaixada do Brasil em Bangkok:</strong> +66 2 643 4555 (plantão 24h em PT)</p>
      </Card>
      <Card>
        <p><strong>Hospitais 24h confiáveis pra aventureiro ferido:</strong></p>
        <p>• <strong>Bangkok</strong>: Bumrungrad International (atende seguro internacional direto)</p>
        <p>• <strong>Phuket</strong>: Bangkok Hospital Phuket — câmara hiperbárica pra acidente de mergulho</p>
        <p>• <strong>Koh Samui</strong>: Bangkok Hospital Samui — câmara hiperbárica</p>
        <p>• <strong>Krabi</strong>: Krabi Nakharin International Hospital (urgência ortopédica de escalada)</p>
        <p>• <strong>Chiang Mai</strong>: Bangkok Hospital Chiang Mai</p>
      </Card>
      <Card>
        <p><strong>Heli rescue:</strong> só via seguro internacional (US$ 30.000–80.000 fora seguro). World Nomads e Coris Adventure cobrem. SafetyWing não.</p>
      </Card>
    </Section>

    {/* KHAO SOK 4 DIAS */}
    <Section id="khao-sok" chapter="Bônus" title="Khao Sok Jungle Trek — roteiro 4 dias">
      <Card>
        <p><strong>Dia 1 — Chegada + raft house Cheow Lan</strong></p>
        <p>Pickup em Khao Sok village 8h. Longtail boat 1h30 pelo lago de calcário. Check-in em raft house simples (chalé flutuante sem eletricidade). Tarde: caiaque entre os pilares + banho no lago.</p>
      </Card>
      <Card>
        <p><strong>Dia 2 — Caverna Nam Talu (só Dez–Abr)</strong></p>
        <p>Trek 2h pela selva até entrada da caverna. Travessia de 3km no rio subterrâneo com lanterna e colete. Volta noturna procurando civeta e tarsius. Banho de cachoeira no caminho.</p>
      </Card>
      <Card>
        <p><strong>Dia 3 — Trek profundo + acampamento</strong></p>
        <p>Volta de barco. Trek 6h até acampamento na selva primária. Banho em poço natural. Noite com cantos de gibão e (se sorte) calau gigante.</p>
      </Card>
      <Card>
        <p><strong>Dia 4 — Retorno + Rafflesia (se em flor)</strong></p>
        <p>Trek de saída 4h. Se for entre Dez–Fev, parada no setor da Rafflesia kerrii (maior flor do mundo, fede a carne podre). Retorno a Khao Sok village 14h.</p>
      </Card>
      <Card>
        <p><strong>O que levar:</strong> 2 mudas que sequem rápido, sandália + bota, lanterna de cabeça, repelente DEET, sacola seca pra eletrônicos, R$ 200 em cash thai (sem ATM).</p>
        <p><strong>Operadora:</strong> Khao Sok Discovery (link em #jungle-trek). ฿8.500–฿10.500 conforme grupo.</p>
      </Card>
    </Section>

    {/* MERGULHO TÉCNICO */}
    <Section id="mergulho-tec" chapter="Bônus" title="Manual de mergulho técnico — naufrágios e cavernas">
      <Card>
        <p><strong>HTMS Sattakut (Koh Tao)</strong> · Naufrágio militar afundado em 2011 a 30m. Penetração permitida com certificação Wreck. Operadora: Crystal Dive. Preço: ฿3.500/2 mergulhos.</p>
      </Card>
      <Card>
        <p><strong>HTMS Chang (Koh Chang)</strong> · Maior naufrágio da Tailândia (100m de barco). 15–30m. Visibilidade variável. Operadora: BB Divers. Preço: ฿3.800/2 mergulhos.</p>
      </Card>
      <Card>
        <p><strong>King Cruiser (Phuket / Phi Phi)</strong> · Ferry afundado em 1997 a 18–32m. Famoso pela escola de barracudas. Operadoras saindo de Phuket — All4Diving, Aussie Divers. Preço: ~฿4.200.</p>
      </Card>
      <Card>
        <p><strong>Caverna submarina Sail Rock (Koh Tao)</strong> · Chimney natural de superfície a 18m. Sem penetração técnica — passagem ampla. Operadora: qualquer PADI 5-star.</p>
      </Card>
      <Card>
        <p><strong>⚠️ Pré-requisitos:</strong> Advanced Open Water + Deep Diver + Wreck Specialty pra penetração. Sem essas certificações, recusem a oferta — você não está coberto pelo seguro.</p>
      </Card>
    </Section>

    {/* MAPA KRABI */}
    <Section id="mapa-krabi" chapter="Bônus" title="Mapa de escalada Krabi — setores e graus">
      <Card>
        <p><strong>Railay East — 1, 2, 3 World</strong> · Setor de iniciante. 5.7 a 5.10c (4a–6b). Sol pela manhã, sombra à tarde. 150+ vias.</p>
      </Card>
      <Card>
        <p><strong>Railay East — Diamond Cave</strong> · Intermediário. 5.10 a 5.12 (6a–7a). Sombra o dia todo. Vias clássicas: Lal Bahdur 6a+, The Lion King 6b.</p>
      </Card>
      <Card>
        <p><strong>Phra Nang Beach — Thaiwand Wall</strong> · Multi-pitch até 200m. 5.11 a 5.13 (6c–7c+). Vista pra praia mais bonita do mundo (literal).</p>
      </Card>
      <Card>
        <p><strong>Tonsai — Eagle Wall, Melting Wall</strong> · Avançado. 5.12 a 5.14 (7a+–8a). Para escaladores que querem projetos sérios. Acesso só por barco.</p>
      </Card>
      <Card>
        <p><strong>Deep Water Solo (DWS)</strong> · Ilhotas de Phra Nang, saída de barco. 5.10 a 5.13. Sem corda, queda no mar. Operadoras: Real Rocks, Basecamp Tonsai. ฿1.500/meio-dia.</p>
      </Card>
    </Section>

    {/* LISTA NEGRA */}
    <Section id="lista-negra" chapter="Bônus" title="Lista negra — operadoras a evitar">
      <Card>
        <p><strong>Como identificar pirata (regra geral):</strong></p>
        <p>• Balcão de hotel ou tuk-tuk vendendo "pacote de aventura" 30% mais barato — comissão zero pro instrutor</p>
        <p>• Operadora sem site próprio, só Facebook</p>
        <p>• Recusa mostrar certificação física dos guias</p>
        <p>• Sem briefing de segurança em inglês</p>
        <p>• Equipamento com rastros de ferrugem ou costura solta</p>
      </Card>
      <Card>
        <p><strong>Categorias mais comuns de cilada:</strong></p>
        <p>• <strong>Tirolesa de mall em Phuket</strong> — 80m, ฿1.500, dura 4 minutos</p>
        <p>• <strong>"Adventure park" perto de Patong</strong> — equipamento de plástico, sem certificação</p>
        <p>• <strong>Dive shops sem nome, em Khao Lak</strong> — vendem mergulho em Similan fora de época (Mai–Out, parque fechado)</p>
        <p>• <strong>Mergulho de 1 dia em Phi Phi vendido na rua de Phuket</strong> — barco lotado, ar de garrafa antigo</p>
        <p>• <strong>"Trek de elefante" em qualquer operadora</strong> — turismo cruel disfarçado, evite a todo custo</p>
      </Card>
      <Card>
        <p><strong>⚠️ Nota:</strong> Nomes específicos mudam rápido — operadora pirata fecha e abre com nome novo a cada 6 meses. O filtro é o padrão de comportamento acima, não o nome.</p>
      </Card>
    </Section>

    {/* ROTEIROS */}
    <Section id="roteiros" chapter="Bônus" title="Roteiros prontos — 7, 10 e 15 dias">
      <Card>
        <p><strong>7 dias — Krabi adrenalina total</strong></p>
        <p>D1–2: Escalada Railay (Real Rocks, dia inteiro + DWS) · D3: Caiaque em Hong Islands · D4–5: Tonsai (multi-pitch) · D6: Mergulho King Cruiser · D7: Descanso/voo.</p>
      </Card>
      <Card>
        <p><strong>10 dias — Sul aquático completo</strong></p>
        <p>D1–4: Open Water em Koh Tao (Crystal Dive) · D5: Travessia Koh Tao → Krabi · D6–8: Escalada Railay + DWS · D9: Skydive Phuket · D10: Voo.</p>
      </Card>
      <Card>
        <p><strong>15 dias — Norte + Sul, multi-modal</strong></p>
        <p>D1–2: Chegada Bangkok + Khao Yai trek · D3–4: Voo Chiang Mai + Flight of the Gibbon · D5–7: Mae Hong Son Loop de moto (Tony's Big Bikes) · D8: Tham Lod caverna (Cave Lodge) · D9–11: Khao Sok 3 dias · D12–13: Escalada Railay · D14: Skydive Phuket · D15: Voo.</p>
      </Card>
    </Section>

    <section className="py-16 px-6 text-center">
      <p className="text-muted-foreground">Boa aventura — e volta inteiro pra contar.</p>
    </section>
  </main>
);

export default Aventureiros6712;

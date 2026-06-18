import { SEO } from "@/components/SEO";
import { Heart, Calendar, MapPin, Hotel, Utensils, Camera, Ship, Sparkles, Wallet, CheckCircle2, AlertTriangle, Gift, Sun, Cloud } from "lucide-react";

const Section = ({ n, title, icon: Icon, children, id }: { n: string; title: string; icon?: any; children: React.ReactNode; id?: string }) => (
  <section id={id} className="py-14 px-6 border-b border-border/40">
    <div className="max-w-3xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-primary/80 mb-3 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />} Capítulo {n}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">{title}</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

const Bul = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-disc pl-6">
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card border border-border rounded-lg p-5 ${className}`}>{children}</div>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-xl text-foreground mt-6 mb-2">{children}</h3>
);

type Month = { name: string; status: "ótimo" | "bom" | "atenção" | "evitar"; regions: string; combo: string };
const months: Month[] = [
  { name: "Janeiro", status: "ótimo", regions: "Bangkok, Chiang Mai, Phuket, Krabi, Phi Phi, Koh Yao, Koh Lanta, Koh Lipe, Koh Samui", combo: "Bangkok + Chiang Mai + Krabi ou Koh Yao" },
  { name: "Fevereiro", status: "ótimo", regions: "Andaman inteira + Bangkok e Chiang Mai", combo: "Bangkok + Chiang Mai + Koh Yao Noi + Krabi" },
  { name: "Março", status: "ótimo", regions: "Andaman com mar mais calmo", combo: "Bangkok + Phuket + Koh Yao + Phang Nga Bay" },
  { name: "Abril", status: "bom", regions: "Calor forte, bom para praia/piscina", combo: "Bangkok curto + resort de praia com boa piscina" },
  { name: "Maio", status: "atenção", regions: "Andaman começa instável, Samui melhora", combo: "Bangkok + Koh Samui" },
  { name: "Junho", status: "bom", regions: "Golfo (Samui, Phangan, Tao)", combo: "Bangkok + Koh Samui + Koh Tao" },
  { name: "Julho", status: "bom", regions: "Golfo da Tailândia", combo: "Bangkok + Koh Samui + Koh Phangan" },
  { name: "Agosto", status: "bom", regions: "Samui e Golfo", combo: "Bangkok + Koh Samui + Ang Thong Marine Park" },
  { name: "Setembro", status: "atenção", regions: "Mais instável em várias regiões", combo: "Bangkok + Koh Samui (plano flexível)" },
  { name: "Outubro", status: "evitar", regions: "Samui mais chuvoso, Andaman ainda transição", combo: "Bangkok + Chiang Mai (praia opcional)" },
  { name: "Novembro", status: "ótimo", regions: "Andaman volta forte", combo: "Bangkok + Chiang Mai + Krabi ou Koh Yao" },
  { name: "Dezembro", status: "ótimo", regions: "Andaman, Bangkok, Chiang Mai (alta temporada)", combo: "Bangkok + Chiang Mai + Koh Yao Noi + Krabi" },
];

const statusColor = (s: Month["status"]) => ({
  "ótimo": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "bom": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "atenção": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "evitar": "bg-red-500/15 text-red-400 border-red-500/30",
}[s]);

type Island = {
  name: string; tagline: string; combina: string[]; naoCombina: string[];
  epoca: string; dias: string; resorts: string[]; experiencias: string[]; dica: string;
};
const islands: Island[] = [
  {
    name: "Koh Yao Noi",
    tagline: "Refúgio cinematográfico em Phang Nga Bay — a ilha mais romântica da Tailândia.",
    combina: ["Casais que querem privacidade", "Hotel boutique ou resort especial", "Fugir da muvuca", "Visual de rochedos calcários", "Ritmo lento"],
    naoCombina: ["Vida noturna", "Muitas lojas e restaurantes", "Orçamento muito apertado"],
    epoca: "Novembro a abril",
    dias: "3 a 5 noites",
    resorts: ["Six Senses Yao Noi", "Cape Kudu Hotel", "TreeHouse Villas (adults-only)", "Paradise KohYao", "Anantara Koh Yao Yai", "Santhiya Koh Yao Yai", "Koh Yao Yai Village", "Elixir Resort Koh Yao Yai"],
    experiencias: ["Jantar no resort", "Passeio privativo por Phang Nga Bay", "Caiaque ao pôr do sol", "Massagem para casal", "Ensaio fotográfico no pier", "Café da manhã com vista para os rochedos"],
    dica: "Não coloquem correria aqui. Funciona melhor no meio ou no final da viagem.",
  },
  {
    name: "Krabi / Railay",
    tagline: "Falésias, longtails e praias de cinema — a paisagem mais fotografada do país.",
    combina: ["Casais que querem paisagem impactante", "Fotos lindas", "Passeio de barco", "Misturar praia e atividade", "Pôr do sol"],
    naoCombina: ["Quem não gosta de barco", "Resort ultra isolado", "Quem viaja em mês de mar agitado"],
    epoca: "Novembro a abril",
    dias: "3 a 5 noites",
    resorts: ["Rayavadee", "Phulay Bay, a Ritz-Carlton Reserve", "Banyan Tree Krabi", "Nakamanda Resort & Spa", "Tubkaak Krabi Boutique Resort", "Centara Grand Beach Resort & Villas Krabi", "Railay Bay Resort & Spa", "Avatar Railay", "Dusit Thani Krabi Beach Resort"],
    experiencias: ["Longtail privativo", "Hong Islands", "Pôr do sol em Railay", "Jantar pé na areia", "Ensaio com longtail", "Spa no resort", "Ilhas próximas"],
    dica: "Ao Nang é prático. Railay é especial. Tubkaek é resort e descanso. Escolham pela energia.",
  },
  {
    name: "Koh Samui",
    tagline: "A ilha mais completa: aeroporto próprio, resorts de luxo e melhor opção no meio do ano.",
    combina: ["Conforto", "Resort pé na areia", "Boa estrutura", "Menos deslocamento", "Luxo sem isolamento total"],
    naoCombina: ["Quem quer ilha secreta", "Orçamento muito baixo", "Período mais chuvoso (out/nov)"],
    epoca: "Janeiro a agosto",
    dias: "4 a 7 noites",
    resorts: ["Four Seasons Resort Koh Samui", "Banyan Tree Samui", "Conrad Koh Samui", "The Ritz-Carlton Koh Samui", "SALA Samui Chaweng", "SALA Samui Choengmon", "Kimpton Kitalay Samui", "Anantara Bophut", "Cape Fahn Hotel", "Garrya Tongsai Bay", "Silavadee Pool Spa Resort", "Vana Belle"],
    experiencias: ["Jantar no resort", "Spa para casal", "Ang Thong Marine Park", "Fisherman's Village à noite", "Drink com vista", "Sessão de fotos ao pôr do sol"],
    dica: "Boa para fechar a viagem. Depois de Bangkok e Chiang Mai, encaixa perfeito como descanso final.",
  },
  {
    name: "Phuket",
    tagline: "Luxo e logística — escolha a praia certa e a ilha é um espetáculo.",
    combina: ["Praticidade", "Hotel de alto padrão", "Jantar especial", "Phang Nga Bay", "Spa e resort"],
    naoCombina: ["Quem escolhe área errada (Patong)", "Quem quer ilha pequena", "Quem não gosta de trânsito"],
    epoca: "Novembro a abril",
    dias: "3 a 6 noites",
    resorts: ["Rosewood Phuket", "Trisara", "Amanpuri", "The Surin Phuket", "The Shore at Katathani", "The Nai Harn", "Keemala", "Sri Panwa", "InterContinental Phuket", "Anantara Mai Khao Villas", "COMO Point Yamu", "Twinpalms Phuket", "Avani+ Mai Khao Suites", "Aleenta Phang Nga", "Iniala Beach House"],
    experiencias: ["Jantar em restaurante Michelin", "Barco privativo para Phang Nga", "Spa de luxo", "Rooftop ou beach club", "Sunset em Promthep Cape"],
    dica: "Não escolham só pelo preço. Praia e região mudam tudo. Fuja de Patong se quer romance.",
  },
  {
    name: "Koh Lanta",
    tagline: "Ritmo lento, pôr do sol e bom custo-benefício para quem quer paz acima de status.",
    combina: ["Tranquilidade", "Pôr do sol", "Praia sem muvuca", "Bom custo-benefício"],
    naoCombina: ["Resort ultra luxuoso", "Vida noturna forte", "Acesso muito fácil"],
    epoca: "Novembro a abril",
    dias: "3 a 5 noites",
    resorts: ["Pimalai Resort & Spa", "Layana Resort & Spa (adults-only)", "Rawi Warin Resort & Spa", "Twin Lotus Resort", "Avani+ Koh Lanta Krabi", "Long Beach Chalet", "SriLanta Resort"],
    experiencias: ["Pôr do sol em praia tranquila", "Jantar na areia", "Passeio para Koh Rok ou Koh Haa", "Road trip leve pela ilha", "Café da manhã sem pressa"],
    dica: "Casais que valorizam paz mais do que status saem encantados de Koh Lanta.",
  },
  {
    name: "Koh Lipe",
    tagline: "Mar mais azul do país — ilha pequena e cinematográfica, exige logística longa.",
    combina: ["Mar azul cartão-postal", "Ilha pequena", "Snorkel", "Clima de paraíso"],
    naoCombina: ["Poucos dias", "Quem odeia barco", "Resort ultra luxuoso"],
    epoca: "Novembro a abril",
    dias: "3 a 5 noites",
    resorts: ["Irene Resort Koh Lipe", "Ten Moons Lipe Resort", "Serendipity Beach Resort", "Akira Lipe Resort", "Idyllic Concept Resort", "Ananya Lipe Resort", "Mali Resort Sunrise Beach", "Castaway Resort Koh Lipe"],
    experiencias: ["Sunrise em Sunrise Beach", "Snorkel nas ilhas próximas", "Longtail privativo", "Walking Street à noite", "Pôr do sol em Sunset Beach"],
    dica: "Vale muito com tempo. Em roteiro curto cansa pela logística.",
  },
];

type Itinerary = { dias: string; nome: string; para: string; rota: string; dias_detalhe: { d: string; t: string; b: string[] }[] };
const itineraries: Itinerary[] = [
  {
    dias: "10 dias",
    nome: "Essencial Romântico",
    para: "Primeira viagem, férias mais curtas, sem trocar de lugar demais.",
    rota: "Bangkok + Koh Samui (mai–ago) ou Bangkok + Krabi/Railay (nov–abr)",
    dias_detalhe: [
      { d: "Dia 1", t: "Chegada em Bangkok", b: ["Check-in", "Banho e descanso", "Drink com vista + jantar leve"] },
      { d: "Dia 2", t: "Bangkok cultural", b: ["Grand Palace, Wat Pho, Wat Arun", "Café com vista para o rio", "Massagem tailandesa", "Jantar especial + rooftop"] },
      { d: "Dia 3", t: "Bangkok com charme", b: ["Jim Thompson House ou cafés em Ari", "Barco pelos canais", "Spa", "Jantar especial de despedida"] },
      { d: "Dia 4", t: "Voo para ilha", b: ["Transfer com calma", "Check-in sem passeio", "Pôr do sol no resort"] },
      { d: "Dia 5", t: "Praia, spa e jantar", b: ["Café sem pressa", "Spa para casal", "Jantar pé na areia (reservado antes da viagem)"] },
      { d: "Dia 6", t: "Passeio de barco", b: ["Ang Thong (Samui) ou Hong Islands (Krabi)", "Evitar tour barato lotado"] },
      { d: "Dia 7", t: "Dia livre romântico", b: ["Sem roteiro fixo", "Praia, massagem, fotos, pôr do sol"] },
      { d: "Dia 8", t: "Experiência especial", b: ["Ensaio fotográfico ou barco privativo", "Jantar com decoração", "Aula de culinária ou renovação simbólica"] },
      { d: "Dia 9", t: "Último dia de praia", b: ["Sem passeio longo", "Repetir restaurante favorito", "Organizar malas"] },
      { d: "Dia 10", t: "Retorno", b: ["Voltar para Bangkok com margem", "Pernoite estratégico se voo for cedo"] },
    ],
  },
  {
    dias: "14 dias",
    nome: "Clássico Apaixonado",
    para: "Roteiro mais equilibrado: cidade, norte e praia. O melhor para quem quer sentir o país.",
    rota: "Bangkok + Chiang Mai + Koh Yao Noi + Krabi (nov–abr) ou Bangkok + Chiang Mai + Koh Samui (mai–ago)",
    dias_detalhe: [
      { d: "Dia 1", t: "Chegada em Bangkok", b: ["Descanso e jantar leve"] },
      { d: "Dia 2", t: "Templos e rio", b: ["Grand Palace, Wat Pho, Wat Arun", "Massagem", "Jantar no rio ou rooftop"] },
      { d: "Dia 3", t: "Bangkok gastronômica", b: ["Café em Ari", "Chinatown ou shopping bonito", "Spa", "Sühring, Le Du, Baan Tepa, Paste, Sorn, Rongros ou Sala Rattanakosin"] },
      { d: "Dia 4", t: "Voo para Chiang Mai", b: ["Check-in em hotel charmoso", "Old City + templo + jantar tranquilo"] },
      { d: "Dia 5", t: "Chiang Mai cultural", b: ["Templos + café local", "Spa", "Mercado noturno"] },
      { d: "Dia 6", t: "Natureza ou experiência ética", b: ["Santuário ético de elefantes (sem montaria)", "Ou aula de culinária", "Ou Doi Suthep"] },
      { d: "Dia 7", t: "Dia lento em Chiang Mai", b: ["Manhã livre", "Massagem, café, fotos, piscina", "Jantar especial"] },
      { d: "Dia 8", t: "Voo para praia", b: ["Andaman: Phuket/Krabi → Koh Yao ou Railay", "Golfo: voo direto Koh Samui", "Sem passeio no dia da chegada"] },
      { d: "Dia 9", t: "Resort e jantar romântico", b: ["Café longo, praia, piscina, spa", "Jantar à luz de velas"] },
      { d: "Dia 10", t: "Barco privativo ou semiprivativo", b: ["Phang Nga + James Bond (Koh Yao/Phuket)", "Hong Islands ou 4 Islands (Krabi)", "Ang Thong Marine Park (Samui)"] },
      { d: "Dia 11", t: "Dia livre", b: ["Curtir o hotel sem obrigação"] },
      { d: "Dia 12", t: "Experiência inesquecível", b: ["Ensaio fotográfico", "Renovação de votos simbólica", "Picnic privado ou spa premium"] },
      { d: "Dia 13", t: "Último dia de praia", b: ["Sem transfer longo", "Repetir o que deu mais certo"] },
      { d: "Dia 14", t: "Retorno", b: ["Voltar a Bangkok na véspera se conexão apertada"] },
    ],
  },
  {
    dias: "21 dias",
    nome: "Lua de Mel Completa",
    para: "Três semanas sem pressa: cidade, cultura, norte, duas regiões de praia e dias livres.",
    rota: "Bangkok + Chiang Mai + Koh Yao Noi + Krabi + Koh Lanta (Andaman) ou Bangkok + Chiang Mai + Koh Samui + Koh Phangan/Koh Tao (Golfo)",
    dias_detalhe: [
      { d: "Dias 1–4", t: "Bangkok", b: ["Chegada + jantar leve", "Templos e rio", "Gastronomia, rooftop, spa", "Compras, alfaiataria, jantar especial"] },
      { d: "Dias 5–8", t: "Chiang Mai", b: ["Voo + primeiro contato", "Templos + Old City + massagem", "Elefantes éticos ou culinária", "Dia lento + spa + jantar especial"] },
      { d: "Dias 9–13", t: "Primeira ilha", b: ["Chegada com calma", "Resort + spa + jantar", "Passeio de barco", "Dia livre", "Experiência especial"] },
      { d: "Dias 14–18", t: "Segunda ilha", b: ["Transfer com calma", "Praia e descanso", "Snorkel ou barco", "Dia livre", "Jantar especial"] },
      { d: "Dias 19–21", t: "Fechamento", b: ["Retorno a Bangkok", "Última noite especial + rooftop + compras", "Voo de volta"] },
    ],
  },
];

const resortGroups = [
  { region: "Bangkok — luxo urbano, rio e rooftop", hotels: [
    ["Mandarin Oriental Bangkok", "Clássico absoluto, tradição e serviço impecável."],
    ["Capella Bangkok", "Luxo contemporâneo na beira do rio."],
    ["Four Seasons Hotel Bangkok", "Moderno, elegante, ótima estrutura."],
    ["The Siam", "Boutique de luxo com personalidade."],
    ["The Standard Bangkok Mahanakhon", "Moderno, jovem, visual e bem localizado."],
    ["The Okura Prestige", "Elegante e confortável."],
    ["Avani+ Riverside Bangkok", "Vista bonita do rio, custo-benefício."],
    ["Riva Arun Bangkok", "Boutique com vista linda para Wat Arun."],
  ]},
  { region: "Chiang Mai — charme, cultura e natureza", hotels: [
    ["Four Seasons Resort Chiang Mai", "Um dos mais românticos do norte, vista de arrozais."],
    ["Raya Heritage", "Boutique sofisticado, calmo e lindo."],
    ["137 Pillars House", "Histórico e elegante."],
    ["Anantara Chiang Mai Resort", "Boa estrutura, localização prática."],
    ["Aleenta Retreat Chiang Mai", "Retiro elegante, voltado a bem-estar."],
    ["Cross Chiang Mai Riverside", "Boutique à beira-rio."],
    ["Na Nirand Romantic Boutique Resort", "Pensado para casal, fotos e charme."],
    ["Tamarind Village", "Charme dentro da cidade antiga."],
  ]},
  { region: "Phuket — luxo, praia e estrutura", hotels: [
    ["Rosewood Phuket", "Luxo discreto e serviço alto."],
    ["Trisara", "Villas com piscina privativa, alto luxo."],
    ["Amanpuri", "Clássico do luxo tailandês."],
    ["The Surin Phuket", "Praia linda, luxo sem ostentação."],
    ["The Shore at Katathani", "Villas, vista, lua de mel pura."],
    ["The Nai Harn", "Vista linda, pôr do sol, fotos."],
    ["Keemala", "Villas na mata, visual único."],
    ["Sri Panwa", "Vista, piscina, glamour."],
    ["InterContinental Phuket Resort", "Resort grande, conforto previsível."],
    ["Anantara Mai Khao Villas", "Villas reservadas, descanso."],
    ["COMO Point Yamu", "Design + vista para Phang Nga."],
    ["Aleenta Phuket Phang Nga", "Praia mais calma em Natai, luxo relaxado."],
  ]},
  { region: "Koh Yao Noi & Yao Yai — paz e romance", hotels: [
    ["Six Senses Yao Noi", "Um dos melhores resorts da Tailândia para casal."],
    ["Cape Kudu Hotel", "Boutique com bom custo-benefício."],
    ["TreeHouse Villas", "Adults-only, esconderijo romântico."],
    ["Paradise KohYao", "Boa para descanso e natureza."],
    ["Anantara Koh Yao Yai Resort & Villas", "Resort novo, grande e confortável."],
    ["Santhiya Koh Yao Yai", "Visual tailandês marcante."],
  ]},
  { region: "Krabi, Railay e arredores", hotels: [
    ["Rayavadee", "Ícone de Railay, cenário espetacular."],
    ["Phulay Bay, a Ritz-Carlton Reserve", "Luxo alto, clima de retiro."],
    ["Banyan Tree Krabi", "Moderno e confortável."],
    ["Tubkaak Krabi Boutique Resort", "Praia calma, pôr do sol, romance sem excesso."],
    ["Nakamanda Resort & Spa", "Boutique privativo, bom custo-benefício."],
    ["Centara Grand Beach & Villas Krabi", "Acesso especial e cenário forte."],
  ]},
  { region: "Koh Samui — resorts e conforto", hotels: [
    ["Four Seasons Resort Koh Samui", "Ícone de luxo em Samui."],
    ["Banyan Tree Samui", "Villas com piscina, muito romântico."],
    ["Conrad Koh Samui", "Villas com vista de mar e pôr do sol."],
    ["The Ritz-Carlton Koh Samui", "Resort grande, estrutura forte."],
    ["SALA Samui Chaweng", "Design claro, pé na areia."],
    ["SALA Samui Choengmon", "Praia mais tranquila."],
    ["Kimpton Kitalay Samui", "Moderno com boa energia."],
    ["Cape Fahn Hotel", "Pequena ilha privada, exclusividade."],
    ["Garrya Tongsai Bay", "Natural, elegante e tranquilo."],
    ["Silavadee Pool Spa Resort", "Villas e vista, ótimo preço-luxo."],
  ]},
  { region: "Koh Lanta e Koh Lipe — descanso e mar bonito", hotels: [
    ["Pimalai Resort & Spa", "Melhor de Lanta para lua de mel."],
    ["Layana Resort & Spa", "Adults-only, silêncio."],
    ["Rawi Warin Resort & Spa", "Boa estrutura, custo melhor."],
    ["Irene Resort Koh Lipe", "Uma das mais bonitas da ilha."],
    ["Ten Moons Lipe Resort", "Charmoso e bem posicionado."],
    ["Serendipity Beach Resort Koh Lipe", "Vista bonita, clima romântico."],
  ]},
];

const restaurants = [
  { city: "Bangkok", list: [
    ["Sühring", "Alta gastronomia, noite marcante, menu degustação."],
    ["Le Du", "Tailandês contemporâneo, premiado."],
    ["Baan Tepa", "Autoral em ambiente especial."],
    ["Paste", "Alta cozinha tailandesa refinada."],
    ["Rongros", "Vista linda para o Wat Arun."],
    ["Sala Rattanakosin", "Pôr do sol no rio."],
    ["Sorn", "Cozinha do sul, experiência rara."],
  ]},
  { city: "Phuket", list: [
    ["PRU (Trisara)", "Alta gastronomia, experiência marcante."],
    ["Sizzle", "Jantar com vista e pôr do sol."],
    ["The Boathouse Phuket", "Clássico à beira-mar em Kata."],
    ["Acqua", "Italiano elegante."],
    ["One Chun", "Cozinha local de Phuket, sem formalidade."],
  ]},
  { city: "Koh Samui", list: [
    ["Saffron (Banyan Tree)", "Tailandês romântico, vista e serviço."],
    ["Long Dtai", "Cozinha do sul com identidade local."],
    ["Tree Tops Signature Dining", "Mesa elevada e reservada para pedido."],
    ["The View Dining (Ritz-Carlton)", "Visual e noite especial."],
    ["Dining on the Rocks (Six Senses)", "Vista e clima sofisticado."],
  ]},
  { city: "Krabi / Railay", list: [
    ["The Grotto (Rayavadee)", "Cenário único entre rochedos."],
    ["Lae Lay Grill", "Vista de Ao Nang, frutos do mar."],
    ["Jenna's Bistro & Wine", "Vinho e jantar confortável."],
  ]},
  { city: "Koh Yao Noi", list: [
    ["Dining Room (Six Senses Yao Noi)", "Premium, vista e experiência."],
    ["Hornbill (Cape Kudu)", "Charmoso e confortável."],
  ]},
];

const experiences = [
  {
    icon: Utensils, title: "Jantar pé na areia",
    where: "Koh Samui, Krabi, Koh Yao Noi, Phuket, Koh Lanta, Koh Lipe",
    how: ["Mesa na areia + velas + flores", "Horário do pôr do sol", "Menu do casal + vinho ou espumante (opcional)", "Avisar restrições alimentares", "Plano B em caso de chuva"],
    price: "Charmoso 2.000–4.000 THB · Completo 4.000–8.000 THB · Luxo 8.000–18.000+ THB (o casal)",
    avoid: ["Reservar no mesmo dia", "Mesa 'romântica' em área cheia", "Restaurante sem vista", "Marcar tarde demais"],
  },
  {
    icon: Sparkles, title: "Spa tailandês para casal",
    where: "Bangkok, Chiang Mai, Koh Samui, Phuket, Krabi, Koh Yao",
    how: ["Sala privativa para casal", "Massagem tailandesa, óleo, aromaterapia ou ritual completo", "Reservar pelo menos um spa premium na viagem", "Evitar massagem forte logo após voo longo"],
    price: "Simples 300–800 · Spa bom 1.500–3.500 · Resort premium 4.000–9.000 THB por pessoa",
    avoid: ["Spa barato com ambiente ruim", "Marcar logo depois de passeio cansativo"],
  },
  {
    icon: Camera, title: "Ensaio fotográfico",
    where: "Railay, Krabi, Koh Yao Noi, Phuket, Koh Samui, Bangkok, Chiang Mai",
    how: ["Nascer do sol ou 1h antes do pôr do sol", "Definir quantidade de fotos editadas e prazo", "Combinar transporte, plano de chuva e autorização do hotel"],
    price: "Local 3.000–6.000 · Profissional 8.000–18.000 · Premium 20.000–45.000+ THB",
    avoid: ["Fotógrafo sem portfólio", "Horário de meio-dia", "Pagar tudo antes sem contrato"],
  },
  {
    icon: Ship, title: "Barco privativo / James Bond Island",
    where: "Phang Nga Bay, Hong Islands, 4 Islands, Koh Rok, Koh Haa, Ang Thong, ilhas de Koh Lipe",
    how: ["Saída cedo ou em horário alternativo (fora dos megabarcos)", "Menos paradas com mais tempo em cada lugar", "Confirmar: combustível, almoço, água, taxa de parque, snorkel, seguro, política de chuva"],
    price: "Longtail privativo 2.500–6.000 · Speedboat 12.000–35.000 · Yacht 40.000–150.000+ THB",
    avoid: ["Operador sem avaliação", "Tour vendido como 'privativo' mas semi", "Sair no horário das excursões grandes"],
  },
  {
    icon: Heart, title: "Renovação de votos simbólica",
    where: "Resorts em Samui, Phuket, Krabi, Koh Yao, hotéis boutique em Chiang Mai",
    how: ["Votos na praia, jantar com votos, cerimônia simbólica no resort", "Combinar com fotógrafo", "Nunca usar templo religioso como cenário"],
    price: "Surpresa simples 1.500–5.000 · Jantar decorado 4.000–15.000 · Cerimônia em resort 20.000–80.000+ THB",
    avoid: ["Deixar para a última hora", "Contratar fornecedor sem contrato"],
  },
];

type Surprise = { title: string; desc: string; msg: string };
const surprises: Surprise[] = [
  { title: "Carta no quarto na chegada", desc: "Escreva antes de viajar e peça ao hotel para deixar no quarto.", msg: "Hello. We are staying with you for our honeymoon. Could you please place a letter in the room before our arrival? I can send it by email or bring it at check-in. Thank you." },
  { title: "Decoração simples no quarto", desc: "Flores, pétalas, mensagem no espelho, pequeno bolo ou espumante.", msg: "Hello. We are celebrating our honeymoon. Do you offer simple room decoration with flowers or petals? Could you send me the options and prices?" },
  { title: "Jantar surpresa no meio da viagem", desc: "Escolha uma noite no meio (não no último dia) para causar mais impacto.", msg: "Hello. I would like to organize a surprise romantic dinner for my partner. We are on our honeymoon. Could you help with a private table, candles, flowers and sunset timing?" },
  { title: "Ensaio fotográfico secreto", desc: "Combine com o fotógrafo para parecer um passeio normal e revele no local.", msg: "Hello. I want to book a couple photoshoot as a surprise during our honeymoon. Can you suggest a romantic location, best time for light and package options?" },
  { title: "Caixa de memórias", desc: "Guarde durante a viagem: bilhetes, tickets, cartões de hotel, foto impressa, mapa, recibo do jantar. Entregue no último dia.", msg: "—" },
];

const budgets = [
  { tier: "Econômico Charmoso", from: "R$18 mil o casal (14 dias)", perfil: ["Hotéis 3–4★ bem escolhidos + alguns boutique", "Comida local boa, 1 jantar especial", "Transfers compartilhados, passeios em grupo", "Voos econômicos"], breakdown: ["Aéreo internacional R$7–10k", "Hospedagem R$4,5–7k", "Voos internos R$2–3,5k", "Passeios R$2–3,5k", "Alimentação R$2,5–4k", "Margem R$1,5–3k"], local: "70.000 a 120.000 THB sem aéreo" },
  { tier: "Romântico Confortável", from: "R$28 mil o casal (14 dias)", perfil: ["Hotéis 4–5★", "Resort pé na areia em parte da viagem", "2–3 jantares especiais + spa para casal", "Pelo menos 1 passeio privativo ou semiprivativo"], breakdown: ["Aéreo R$8–13k", "Hospedagem R$9–16k", "Voos internos R$3–5,5k", "Passeios R$4–8k", "Alimentação R$4–7k", "Margem R$2,5–5k"], local: "130.000 a 230.000 THB sem aéreo" },
  { tier: "Luxo", from: "R$45 mil o casal (14 dias)", perfil: ["Hotéis 5★ + villas com piscina", "Restaurantes premiados", "Barco privativo + spa premium + fotógrafo", "Transfers privados e concierge"], breakdown: ["Aéreo R$12–20k", "Hospedagem R$20–45k", "Voos internos R$5–10k", "Passeios R$8–20k", "Alimentação R$7–15k", "Margem R$5–12k"], local: "250.000 a 600.000 THB sem aéreo" },
];

const transfers = [
  ["Bangkok → Chiang Mai", "Voo doméstico", "1h10–1h30", "Evite voo muito tarde se tiver conexão no dia seguinte."],
  ["Bangkok → Phuket", "Voo doméstico", "1h20", "Base para Phuket, Koh Yao, Phang Nga, Phi Phi."],
  ["Bangkok → Krabi", "Voo doméstico", "1h25", "Base para Ao Nang, Railay, Koh Lanta, Phi Phi."],
  ["Bangkok → Koh Samui", "Voo direto (Bangkok Airways)", "1h20", "Mais caro mas vale; alternativa: Surat Thani + ferry."],
  ["Phuket → Koh Yao Noi", "Speedboat / barco local", "30–60 min", "Resort de luxo geralmente cota transfer completo."],
  ["Phuket → Phi Phi", "Ferry ou speedboat", "1h–2h", "Phi Phi vale mais como passeio do que base longa."],
  ["Krabi → Railay", "Longtail", "10–20 min", "Não chegar tarde com mala grande."],
  ["Krabi → Koh Lanta", "Van/carro privado + ferry/ponte", "2h30–4h", "Transfer privado vale para casal."],
  ["Koh Samui → Koh Phangan", "Ferry ou speedboat", "30–60 min", "Evite datas de Full Moon Party se quer paz."],
  ["Koh Samui → Koh Tao", "Ferry/speedboat", "1h30–3h", "Koh Tao é melhor para snorkel/mergulho."],
];

const errors = [
  "Roteiro com troca de hotel a cada 2 noites",
  "Chegar em ilha à noite",
  "Depender de ferry no dia do voo internacional",
  "Escolher hotel só pela foto",
  "Ficar em Patong esperando romance",
  "Marcar barco no primeiro dia de praia",
  "Phi Phi como base longa para quem quer paz",
  "Koh Samui no período mais chuvoso da ilha",
  "Andaman no meio do ano esperando mar perfeito",
  "Economizar em transfer com mala grande",
  "Deixar tudo para decidir na hora",
];

const stylePacks = [
  ["Casal luxo e descanso", "Bangkok + Koh Yao Noi + Phuket", "Resorts, jantar especial, barco privativo, spa, pouca correria."],
  ["Casal cultura e praia", "Bangkok + Chiang Mai + Krabi", "Templos, comida, natureza, praias bonitas, custo equilibrado."],
  ["Casal praia total", "Phuket + Koh Yao Noi + Krabi + Koh Lanta", "Quem já conhece cidade e quer mar + resort."],
  ["Casal meio do ano", "Bangkok + Chiang Mai + Koh Samui", "Para mai–ago, fugindo da chuva mais forte da Andaman."],
  ["Casal econômico charmoso", "Bangkok + Chiang Mai + Krabi/Ao Nang", "Custo-benefício, variedade, hotéis bons sem luxo extremo."],
  ["Casal premium", "Bangkok + Chiang Mai + Six Senses Yao Noi + Rosewood Phuket", "Viagem dos sonhos, resorts de alto padrão."],
];

const LuaDeMel8272524 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Guia Lua de Mel na Tailândia — Roteiro Romântico Completo" description="Guia completo para lua de mel na Tailândia: ilhas, melhor época, 40+ resorts, roteiros de 10, 14 e 21 dias, restaurantes, experiências e orçamento." />

      {/* Hero */}
      <header className="py-20 px-6 text-center border-b border-border/40">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">Guia Lua de Mel na Tailândia</h1>
          <p className="text-lg text-muted-foreground">Roteiro romântico completo para casais brasileiros viverem uma viagem inesquecível sem dor de cabeça.</p>
          <p className="text-sm text-primary/80 mt-6 uppercase tracking-widest">26 capítulos · 40+ resorts · 3 roteiros prontos</p>
        </div>
      </header>

      <Section n="1" title="A lua de mel dos sonhos na Tailândia" icon={Heart}>
        <p>A Tailândia é um dos melhores destinos do mundo para lua de mel porque junta três coisas difíceis de encontrar no mesmo lugar: <strong className="text-foreground">beleza absurda, luxo acessível e variedade real</strong>.</p>
        <p>Em uma única viagem, vocês podem ter templos dourados em Bangkok, hotéis com piscina infinita, jantar à luz de velas na areia, ilhas com mar azul, massagens em spas premiados, barco privativo em baías cinematográficas, ensaio fotográfico em praia paradisíaca, resort pé na areia, noite especial em rooftop e dias de descanso sem roteiro corrido.</p>
        <p>O segredo não é simplesmente "ir para a Tailândia". O segredo é escolher as ilhas certas, no mês certo, com o roteiro certo.</p>
        <Card className="bg-primary/5 border-primary/20">
          <p className="text-foreground font-medium mb-2">O que vocês vão encontrar neste guia</p>
          <Bul items={["As melhores ilhas para casal", "Quando ir para cada região", "Roteiros prontos de 10, 14 e 21 dias", "40+ resorts indicados por estilo e orçamento", "Experiências românticas prontas", "Restaurantes para jantar especial", "Transfers entre ilhas", "Spots para fotos", "Orçamento realista em reais e baht", "Templates de surpresa", "Checklist final para montar a viagem sem agência"]} />
        </Card>
      </Section>

      <Section n="2" title="Para quem este guia foi feito" icon={CheckCircle2}>
        <H3>Funciona para</H3>
        <Bul items={["Casais que querem montar a viagem por conta própria", "Casais que querem economizar sem perder charme", "Casais que querem hotéis bonitos, mas não necessariamente caríssimos", "Casais que querem praia, cultura, gastronomia e descanso", "Casais que têm medo de errar ilha, época ou resort", "Casais que querem roteiro pronto, mas com liberdade"]} />
        <H3>Não foi feito para</H3>
        <Bul items={["Quem quer viajar sem pesquisar nada", "Quem quer escolher tudo no improviso", "Quem não aceita fazer reservas importantes com antecedência", "Quem quer apenas o menor preço possível"]} />
        <p>Lua de mel não é só férias. É uma viagem que vocês vão lembrar por muitos anos. Por isso, precisa ser planejada com mais cuidado.</p>
      </Section>

      <Section n="3" title="Por que escolher a Tailândia" icon={Sparkles}>
        <p>A Tailândia entrega sensação de viagem cara por um custo menor do que destinos clássicos de luxo. Em vez de gastar tudo em um único resort isolado, vocês conseguem montar uma viagem completa equilibrando:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {["Luxo e custo-benefício", "Aventura e descanso", "Praia e cidade", "Gastronomia local e jantar especial", "Hotel boutique e resort 5★", "Passeio privativo e experiência simples", "Cultura e romance", "Bangkok urbano + Chiang Mai cultural + ilhas tropicais"].map((t) => (
            <Card key={t}><p className="text-foreground">{t}</p></Card>
          ))}
        </div>
        <p>O segredo é saber onde vale gastar e onde não vale. Pouco em comida local durante o dia, investimento em jantar especial à noite. Hotel confortável em Bangkok, resort pé na areia no final.</p>
      </Section>

      <Section n="4" title="O que uma lua de mel mal planejada estraga" icon={AlertTriangle}>
        <H3>Erro 1: escolher a ilha errada para o mês</H3>
        <p>Phuket, Krabi, Phi Phi, Koh Yao, Koh Lanta e Koh Lipe ficam do lado Andaman — melhor entre <strong className="text-foreground">novembro e abril</strong>. Koh Samui, Phangan e Tao ficam no Golfo — costuma ser melhor entre <strong className="text-foreground">janeiro e agosto</strong>.</p>
        <H3>Erro 2: resort bonito mas errado para casal</H3>
        <p>Nem todo resort bonito é romântico. Alguns são família. Outros, festa. Outros ficam em praias lindas mas isoladas demais. Alguns parecem pé na areia mas exigem escada, shuttle ou táxi para tudo.</p>
        <H3>Erro 3: ilhas demais no roteiro</H3>
        <p>Trocar de ilha envolve malas, checkout, táxi, pier, ferry, lancha, espera, novo táxi e novo check-in. Um transfer mal colocado mata um dia inteiro.</p>
        <H3>Erro 4: jantar especial reservado tarde</H3>
        <p>Mesa na areia, decoração, flores, menu especial e pôr do sol não são coisas para deixar para a véspera.</p>
        <H3>Erro 5: passeio de barco cheio demais</H3>
        <p>James Bond, Phi Phi, Maya Bay e Hong Islands podem ser mágicos ou frustrantes. A diferença está no horário, tipo de barco e operador.</p>
        <H3>Erro 6: economizar no que sustenta a experiência</H3>
        <p>Economizar no hotel errado, no transfer errado ou no passeio errado pode arruinar a sensação da viagem. O objetivo não é gastar mais — é gastar certo.</p>
      </Section>

      <Section n="5" title="Melhor época para lua de mel" icon={Calendar}>
        <p>A pergunta certa não é "qual o melhor mês para a Tailândia?", e sim <strong className="text-foreground">"qual região combina melhor com o mês da minha lua de mel?"</strong></p>
        <div className="grid sm:grid-cols-2 gap-3">
          {months.map((m) => (
            <Card key={m.name}>
              <div className="flex items-center justify-between mb-2">
                <p className="font-display text-lg text-foreground">{m.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColor(m.status)} uppercase tracking-wide`}>{m.status}</span>
              </div>
              <p className="text-sm mb-2">{m.regions}</p>
              <p className="text-sm text-foreground/80"><span className="text-primary">Combo:</span> {m.combo}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="6" title="As 6 ilhas mais românticas" icon={MapPin}>
        <p>Nem toda ilha bonita serve para lua de mel. Algumas têm festa demais, outras logística ruim, outras são ótimas para mochileiro mas ruins para casal que quer conforto. Estas são as 6 melhores escolhas.</p>
        {islands.map((il, idx) => (
          <Card key={il.name} className="space-y-3">
            <div>
              <p className="text-primary/80 text-sm uppercase tracking-wider">#{idx + 1}</p>
              <h3 className="font-display text-2xl text-foreground">{il.name}</h3>
              <p className="text-sm">{il.tagline}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-foreground font-medium mb-1">Combina com</p>
                <Bul items={il.combina} />
              </div>
              <div>
                <p className="text-foreground font-medium mb-1">Não combina com</p>
                <Bul items={il.naoCombina} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <p><span className="text-foreground font-medium">Melhor época:</span> {il.epoca}</p>
              <p><span className="text-foreground font-medium">Quantos dias:</span> {il.dias}</p>
            </div>
            <div>
              <p className="text-foreground font-medium mb-1 text-sm">Resorts indicados</p>
              <p className="text-sm">{il.resorts.join(" · ")}</p>
            </div>
            <div>
              <p className="text-foreground font-medium mb-1 text-sm">Experiências românticas</p>
              <Bul items={il.experiencias} />
            </div>
            <p className="text-sm italic border-l-2 border-primary/40 pl-3">{il.dica}</p>
          </Card>
        ))}
      </Section>

      <Section n="7" title="Mapa rápido: qual ilha escolher">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ["Luxo e facilidade", "Koh Samui ou Phuket"],
            ["Paz e romance", "Koh Yao Noi ou Koh Lanta"],
            ["Fotos cinematográficas", "Krabi, Railay ou Koh Yao Noi"],
            ["Mar azul cartão-postal", "Koh Lipe ou Phi Phi em passeio"],
            ["Meio do ano sem erro climático", "Koh Samui, Koh Phangan ou Koh Tao"],
            ["Primeira viagem com menos risco", "Bangkok + Chiang Mai + Koh Samui ou Bangkok + Krabi + Koh Yao"],
          ].map(([k, v]) => (
            <Card key={k}><p className="text-foreground font-medium mb-1">{k}</p><p className="text-sm">{v}</p></Card>
          ))}
        </div>
        <p className="text-sm italic mt-4">Para fugir da muvuca: evite Patong, hospedagem em Phi Phi no pico e passeios de barco muito baratos em horário comum.</p>
      </Section>

      {itineraries.map((it, idx) => (
        <Section key={it.dias} n={`${8 + idx}`} title={`Roteiro de ${it.dias}: ${it.nome}`} icon={Calendar}>
          <Card className="bg-primary/5 border-primary/20">
            <p className="text-foreground font-medium mb-1">Para quem é</p>
            <p className="text-sm mb-3">{it.para}</p>
            <p className="text-foreground font-medium mb-1">Rota recomendada</p>
            <p className="text-sm">{it.rota}</p>
          </Card>
          <div className="space-y-3">
            {it.dias_detalhe.map((d) => (
              <Card key={d.d}>
                <p className="text-primary/80 text-xs uppercase tracking-wider">{d.d}</p>
                <p className="font-display text-lg text-foreground mb-2">{d.t}</p>
                <Bul items={d.b} />
              </Card>
            ))}
          </div>
        </Section>
      ))}

      <Section n="11" title="Os 40+ resorts recomendados" icon={Hotel}>
        <p>Use a lista escolhendo 5 a 8 favoritos e comparando datas reais — preços variam muito por temporada e antecedência.</p>
        {resortGroups.map((g) => (
          <div key={g.region} className="space-y-2">
            <H3>{g.region}</H3>
            <div className="grid sm:grid-cols-2 gap-3">
              {g.hotels.map(([n, d]) => (
                <Card key={n}><p className="text-foreground font-medium">{n}</p><p className="text-sm mt-1">{d}</p></Card>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section n="12" title="Restaurantes para jantares românticos" icon={Utensils}>
        <p>A regra: não precisa ser o mais caro, precisa ser o mais bem escolhido. Alguns dias pedem alta gastronomia, outros, comida local boa com vista bonita.</p>
        {restaurants.map((c) => (
          <div key={c.city} className="space-y-2">
            <H3>{c.city}</H3>
            <div className="grid sm:grid-cols-2 gap-3">
              {c.list.map(([n, d]) => (
                <Card key={n}><p className="text-foreground font-medium">{n}</p><p className="text-sm mt-1">{d}</p></Card>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section n="13" title="Experiências românticas prontas" icon={Sparkles}>
        {experiences.map((e) => (
          <Card key={e.title} className="space-y-3">
            <div className="flex items-center gap-3">
              <e.icon className="w-6 h-6 text-primary" />
              <h3 className="font-display text-xl text-foreground">{e.title}</h3>
            </div>
            <p className="text-sm"><span className="text-foreground font-medium">Onde funciona:</span> {e.where}</p>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">Como organizar</p>
              <Bul items={e.how} />
            </div>
            <p className="text-sm"><span className="text-foreground font-medium">Preço:</span> {e.price}</p>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">Evitar</p>
              <Bul items={e.avoid} />
            </div>
          </Card>
        ))}
      </Section>

      <Section n="14" title="Transfers entre ilhas" icon={Ship}>
        <p>Não olhem só a distância no mapa. Na Tailândia, deslocamento entre ilhas envolve pier, horário, clima e tipo de barco.</p>
        <div className="space-y-2">
          {transfers.map(([rota, modo, dur, dica]) => (
            <Card key={rota}>
              <p className="text-foreground font-medium">{rota}</p>
              <p className="text-sm mt-1"><span className="text-primary">{modo}</span> · {dur}</p>
              <p className="text-sm italic mt-1">{dica}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="15" title="Quanto custa uma lua de mel" icon={Wallet}>
        <p className="text-sm">Valores para casal, 14 dias, estilo realista. Não são promessa de preço fixo — passagem, câmbio e hotel mudam muito. Use 1 THB ≈ R$0,15 (R$1 ≈ 6,5 THB).</p>
        {budgets.map((b) => (
          <Card key={b.tier} className="space-y-3">
            <div>
              <h3 className="font-display text-xl text-foreground">{b.tier}</h3>
              <p className="text-primary text-sm mt-1">A partir de {b.from}</p>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">Perfil</p>
              <Bul items={b.perfil} />
            </div>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">Distribuição aproximada</p>
              <Bul items={b.breakdown} />
            </div>
            <p className="text-sm"><span className="text-foreground font-medium">Orçamento local (sem aéreo):</span> {b.local}</p>
          </Card>
        ))}
      </Section>

      <Section n="16" title="Planilha de orçamento (estrutura)" icon={Wallet}>
        <p>Copie a estrutura para Excel, Google Sheets ou Notion. Reservem pelo menos <strong className="text-foreground">10% a 15% de margem</strong> — lua de mel sem margem vira estresse.</p>
        {[
          ["Passagens internacionais", ["Brasil → Bangkok", "Retorno Bangkok → Brasil", "Bagagem extra", "Assento", "Seguro de conexão"]],
          ["Voos internos", ["Bangkok → Chiang Mai", "Chiang Mai → praia", "Praia → Bangkok", "Mala despachada", "Remarcação"]],
          ["Hospedagem", ["Bangkok", "Chiang Mai", "Ilha 1", "Ilha 2", "Última noite estratégica"]],
          ["Transfers", ["Aeroporto ↔ hotel", "Hotel → pier", "Ferry / speedboat", "Carro privado", "Transfer do resort", "Táxi/Grab/Bolt"]],
          ["Alimentação", ["Cafés", "Almoços", "Jantares simples", "Jantares especiais", "Rooftop", "Room service", "Água e snacks"]],
          ["Passeios", ["Templos", "Food tour", "Santuário ético", "Barco / ilhas", "Aula de culinária", "Ensaio fotográfico", "Spa", "Extras"]],
          ["Romance e surpresas", ["Flores", "Decoração no quarto", "Jantar privativo", "Fotógrafo", "Renovação de votos", "Presente", "Carta", "Picnic"]],
        ].map(([t, items]) => (
          <Card key={t as string}>
            <p className="font-display text-lg text-foreground mb-2">{t}</p>
            <Bul items={items as string[]} />
          </Card>
        ))}
      </Section>

      <Section n="17" title="Agência vs. guia próprio">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <p className="font-display text-lg text-foreground mb-2">Pacote de agência</p>
            <p className="text-foreground text-sm font-medium">Vantagens</p>
            <Bul items={["Menos trabalho", "Alguém monta tudo", "Pagamento centralizado", "Suporte"]} />
            <p className="text-foreground text-sm font-medium mt-3">Desvantagens</p>
            <Bul items={["Roteiro engessado", "Hotéis podem ser escolhidos por comissão", "Menos liberdade", "Custo mais alto", "Pouca personalização"]} />
          </Card>
          <Card>
            <p className="font-display text-lg text-foreground mb-2">Com este guia</p>
            <p className="text-foreground text-sm font-medium">Vantagens</p>
            <Bul items={["Vocês escolhem o estilo", "Podem trocar hotéis", "Equilibram luxo e economia", "Não dependem de vendedor", "Fogem do genérico", "Gastam melhor"]} />
            <p className="text-foreground text-sm font-medium mt-3">Desvantagens</p>
            <Bul items={["Precisam reservar", "Precisam comparar datas", "Precisam tomar decisões"]} />
          </Card>
        </div>
        <p className="italic text-sm">Meio-termo funciona muito bem: usar o guia para montar a viagem e contratar apenas trechos específicos (transfer privativo, barco, fotógrafo, jantar).</p>
      </Section>

      <Section n="18" title="Surpresas para o par" icon={Gift}>
        <p>Lua de mel não precisa de surpresa cara. Precisa de intenção. Cinco modelos prontos:</p>
        {surprises.map((s, i) => (
          <Card key={s.title}>
            <p className="text-primary/80 text-xs uppercase tracking-wider">Surpresa {i + 1}</p>
            <p className="font-display text-lg text-foreground mb-2">{s.title}</p>
            <p className="text-sm mb-3">{s.desc}</p>
            {s.msg !== "—" && (
              <div className="bg-muted/30 border border-border rounded p-3">
                <p className="text-xs text-primary/80 uppercase tracking-wider mb-1">Mensagem para o hotel</p>
                <p className="text-sm text-foreground/90 italic">{s.msg}</p>
              </div>
            )}
          </Card>
        ))}
      </Section>

      <Section n="19" title="Spots de foto" icon={Camera}>
        {[
          ["Bangkok", ["Wat Arun do outro lado do rio", "Rooftop do hotel", "Chinatown à noite", "Cafés em Ari", "Barco no Chao Phraya", "Templos pela manhã"]],
          ["Chiang Mai", ["Templos da Old City", "Doi Suthep", "Arrozais do Four Seasons", "Cafés de montanha", "Ruas antigas", "Jardim de resort"]],
          ["Phuket", ["Promthep Cape", "Nai Harn", "Kata Noi", "Mai Khao", "Panwa", "Praia ao nascer do sol", "Barco para Phang Nga"]],
          ["Krabi", ["Railay", "Phra Nang", "Longtail boat", "Tubkaek", "Hong Islands", "Ao Nang ao pôr do sol"]],
          ["Koh Samui", ["Fisherman's Village", "Choeng Mon", "Cape Fahn", "Praia do resort ao nascer do sol", "Ang Thong Marine Park", "Villa com piscina"]],
          ["Koh Yao Noi", ["Pier", "Praia com rochedos ao fundo", "Estrada rural", "Longtail boat", "Piscina com vista", "Phang Nga Bay"]],
          ["Koh Lipe", ["Sunrise Beach", "Sunset Beach", "Longtail boat", "Snorkel", "Walking Street à noite"]],
        ].map(([cidade, spots]) => (
          <Card key={cidade as string}>
            <p className="font-display text-lg text-foreground mb-2">{cidade}</p>
            <Bul items={spots as string[]} />
          </Card>
        ))}
      </Section>

      <Section n="20" title="Experiências por orçamento" icon={Wallet}>
        {[
          ["Econômico charmoso", ["Restaurantes locais bons", "Café com vista", "1 jantar especial na viagem", "Massagem fora do resort", "Passeio compartilhado de qualidade"], "Guardar dinheiro para hotel bom nos dias de praia."],
          ["Romântico confortável", ["2 jantares especiais", "1 spa para casal", "1 passeio semiprivativo", "Hotel pé na areia", "Rooftop em Bangkok", "Ensaio fotográfico curto"], "Misturar hotéis bons com experiências marcantes."],
          ["Luxo", ["Villa com piscina", "Resort premium", "Barco privativo", "Jantar degustação", "Spa completo", "Fotógrafo + transfer privado", "Surpresa no quarto"], "Menos deslocamentos, mais qualidade."],
        ].map(([t, items, est]) => (
          <Card key={t as string}>
            <p className="font-display text-lg text-foreground mb-2">{t}</p>
            <Bul items={items as string[]} />
            <p className="text-sm italic mt-3 text-primary/90">Estratégia: {est}</p>
          </Card>
        ))}
      </Section>

      <Section n="21" title="O que reservar com antecedência" icon={CheckCircle2}>
        <H3>Reservem antes da viagem</H3>
        <Bul items={["Hotéis principais", "Voos internos", "Transfer de chegada", "Primeiro jantar especial", "Barco privativo", "Ensaio fotográfico", "Spa premium", "Renovação de votos", "Resort em ilha pequena", "Restaurantes disputados", "Ferry em alta temporada"]} />
        <H3>Podem decidir durante a viagem</H3>
        <Bul items={["Massagens simples", "Restaurantes locais", "Cafés", "Pequenas compras", "Praias do dia", "Passeios simples", "Deslocamentos urbanos"]} />
      </Section>

      <Section n="22" title="O que evitar na lua de mel" icon={AlertTriangle}>
        <Bul items={errors} />
      </Section>

      <Section n="23" title="Roteiros por estilo de casal" icon={Heart}>
        <div className="grid sm:grid-cols-2 gap-3">
          {stylePacks.map(([t, r, d]) => (
            <Card key={t}>
              <p className="font-display text-lg text-foreground">{t}</p>
              <p className="text-primary text-sm mt-1">{r}</p>
              <p className="text-sm mt-2">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="24" title="Checklist final" icon={CheckCircle2}>
        {[
          ["Documentos", ["Passaporte válido", "Seguro viagem", "Comprovantes de hotéis", "Voos internos", "Cartão internacional", "Dinheiro em baht", "Cópias digitais", "Contatos de emergência"]],
          ["Reservas", ["Hotel Bangkok", "Hotel Chiang Mai", "Resort de praia", "Transfers", "Voos internos", "Jantar especial", "Spa", "Passeio de barco", "Fotógrafo (se houver)"]],
          ["Financeiro", ["Orçamento total definido", "Margem de 10–15%", "Cartão desbloqueado", "Dinheiro em espécie", "Planilha atualizada", "Valores em reais e baht"]],
          ["Romance", ["Surpresa planejada", "Carta", "Jantar reservado", "Fotos", "Tempo livre", "Roupa especial", "Plano de chuva"]],
          ["Logística", ["Não depender de ferry no dia do voo internacional", "Evitar check-in tarde em ilha", "Conferir franquia em voo doméstico", "Salvar mapas offline", "Confirmar transfers 24h antes", "Ter WhatsApp dos hotéis"]],
        ].map(([t, items]) => (
          <Card key={t as string}>
            <p className="font-display text-lg text-foreground mb-2">{t}</p>
            <Bul items={items as string[]} />
          </Card>
        ))}
      </Section>

      <Section n="25" title="Dúvidas comuns" icon={Sparkles}>
        {[
          ["Quantos dias são ideais?", "14 dias é o melhor equilíbrio. 10 funciona enxuto. 21 é ideal para duas ilhas sem correria."],
          ["Phuket, Krabi ou Koh Samui?", "Depende do mês e do estilo. Phuket é prática e luxuosa, Krabi é cinematográfica, Samui é completa para resort e melhor no meio do ano."],
          ["Phi Phi vale para lua de mel?", "Como passeio, sim. Como base, só com hotel mais isolado. Para paz, prefira Koh Yao, Koh Lanta ou Railay."],
          ["Precisa de agência?", "Não obrigatoriamente. Com roteiro, reservas e transfers organizados, dá para fazer por conta. Contrate fornecedores pontuais quando fizer sentido."],
          ["Onde vale gastar mais?", "Hotel de praia, transfer em dia cansativo, jantar especial, barco privativo, spa marcante, fotógrafo bom e última noite."],
          ["Onde dá para economizar?", "Hotel de Bangkok (se vão ficar pouco no quarto), almoço, transporte urbano, cafés, passeios simples, massagens fora do resort."],
          ["Lua de mel na Tailândia é segura?", "Sim, bem planejada. Cuidem de golpes turísticos, transporte, seguro, documentos, excesso de álcool e passeios de barco sem segurança."],
          ["Qual o maior erro?", "Colocar destinos demais. Lua de mel precisa de tempo livre. Não tentem vencer a Tailândia inteira — vivam bem a viagem."],
        ].map(([q, a]) => (
          <Card key={q}>
            <p className="text-foreground font-medium mb-1">{q}</p>
            <p className="text-sm">{a}</p>
          </Card>
        ))}
      </Section>

      <Section n="26" title="Resumo final" icon={Heart}>
        <p>A Tailândia pode ser uma lua de mel inesquecível. Mas não porque qualquer roteiro serve. Ela fica especial quando vocês escolhem bem:</p>
        <Bul items={["A época certa", "A ilha certa", "O hotel certo", "O ritmo certo", "Os transfers certos", "As experiências certas", "Os dias livres certos"]} />
        <Card className="bg-primary/5 border-primary/20">
          <p className="text-foreground font-medium mb-2">Para a maioria dos casais, o roteiro ideal é:</p>
          <Bul items={["Bangkok para começar com impacto", "Chiang Mai para cultura e charme", "Uma ilha perfeita para descansar", "Pelo menos uma experiência romântica planejada com antecedência"]} />
        </Card>
        <p className="text-center text-lg text-foreground italic mt-6">Uma lua de mel perfeita não é a mais cara.<br/>É a que parece de vocês dois.</p>
      </Section>

      <footer className="py-10 px-6 text-center text-sm text-muted-foreground">
        <Heart className="w-6 h-6 text-primary mx-auto mb-3" />
        <p>Guia Lua de Mel na Tailândia · guiastailandia.com.br</p>
      </footer>
    </div>
  );
};

export default LuaDeMel8272524;

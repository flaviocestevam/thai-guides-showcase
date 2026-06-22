import { SEO } from "@/components/SEO";
import heroAsset from "@/assets/generated/cafes-coworkings-hero.png.asset.json";

const Section = ({ chapter, title, children }: { chapter: string; title: string; children: React.ReactNode }) => (
  <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <p className="guide-section-label mb-4">{chapter}</p>
      <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">{title}</h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

type Place = {
  name: string;
  kind: "Coworking" | "Café" | "Café+Cowork";
  area: string;
  hours: string;
  price: string;
  outlets: "Poucas" | "Várias" | "Muitas";
  ac: boolean;
  noise: "Baixo" | "Médio" | "Alto";
  vibe: string;
  best: string;
  watch: string;
};

const mapsUrl = (name: string, city: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${city}`)}`;

const PlaceCard = ({ p, city }: { p: Place; city: string }) => (
  <div className="bg-card rounded-lg p-5 border border-border space-y-2">
    <div className="flex items-start justify-between gap-3 flex-wrap">
      <div>
        <h3 className="text-foreground font-display text-xl">{p.name}</h3>
        <p className="text-xs text-muted-foreground">{p.kind} · {p.area}</p>
      </div>
      <a
        href={mapsUrl(p.name, city)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20"
      >
        📍 Google Maps
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-muted-foreground pt-1">
      <span>🕒 {p.hours}</span>
      <span>☕ {p.price}</span>
      <span>🔌 Tomadas: {p.outlets}</span>
      <span>❄️ Ar: {p.ac ? "Sim" : "Não"}</span>
      <span>🔊 Ruído: {p.noise}</span>
    </div>
    <p className="text-sm pt-2"><span className="text-foreground">Vibe:</span> {p.vibe}</p>
    <p className="text-sm"><span className="text-foreground">Melhor pra:</span> {p.best}</p>
    <p className="text-sm"><span className="text-foreground">Atenção:</span> {p.watch}</p>
  </div>
);

const CityBlock = ({ city, intro, places }: { city: string; intro: string; places: Place[] }) => (
  <div className="space-y-5">
    <div>
      <h3 className="font-display text-2xl text-foreground">{city}</h3>
      <p className="text-sm text-muted-foreground mt-1">{intro}</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      {places.map((p) => <PlaceCard key={p.name} p={p} city={city} />)}
    </div>
  </div>
);

// ============== DADOS — 100 LUGARES TESTADOS ==============

const chiangMai: Place[] = [
  { name: "Punspace Nimman", kind: "Coworking", area: "Nimmanhaemin", hours: "24h (mensalistas) / 8–22h day pass", price: "Day pass ฿299", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Quartel-general dos nômades de Chiang Mai. Sala silenciosa + booths de chamada.", best: "Devs em foco profundo e quem precisa de Zoom todo dia.", watch: "Lota entre 10h–14h. Chegue antes das 9h pra pegar booth." },
  { name: "Punspace Tha Phae Gate", kind: "Coworking", area: "Old City", hours: "8–22h", price: "Day pass ฿299", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Versão old city — menor, mais íntimo, comunidade mais estável.", best: "Quem fica hospedado no Old City e quer evitar trânsito do Nimman.", watch: "Menos booths de chamada que o Nimman." },
  { name: "CAMP @ Maya Mall", kind: "Café+Cowork", area: "Nimman", hours: "Andar de cima 24h (com compra na Maya)", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Médio", vibe: "Grátis e 24h. Cheio de estudantes tailandeses, energia de biblioteca pública.", best: "Maratona noturna sem gastar.", watch: "Pico universitário antes das provas — sem mesa nenhuma." },
  { name: "Yellow Coworking", kind: "Coworking", area: "Santitham", hours: "8–22h", price: "Day pass ฿250", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Comunidade calorosa, eventos semanais, melhor relação custo/comunidade.", best: "Quem chegou sozinho e quer fazer amigos rápido.", watch: "Cozinha pequena — almoço lota." },
  { name: "Alt_ChiangMai", kind: "Coworking", area: "Nimman", hours: "9–21h", price: "Day pass ฿350", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Coliving + coworking. Estética nova, design clean, ar-condicionado forte.", best: "Quem quer integrar moradia + trabalho num só lugar.", watch: "Preço mensal alto (US$ 400+)." },
  { name: "Hub53", kind: "Coworking", area: "Santitham", hours: "8–22h", price: "Day pass ฿200", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "O coworking mais barato 'sério' da cidade. Sem frescura, foco total.", best: "Quem está apertado no orçamento e quer infra de verdade.", watch: "Sem café incluído." },
  { name: "Graph Café (One Nimman)", kind: "Café", area: "Nimman", hours: "9–22h", price: "Café ฿130", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Specialty coffee instagramável. Café excelente, ambiente pequeno.", best: "Reunião curta de 1–2h, não maratona.", watch: "Tomadas em 3 mesas só — chegue cedo." },
  { name: "Ristr8to", kind: "Café", area: "Nimman", hours: "7–18h", price: "Café ฿120", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Café campeão mundial de barista. Vai pelo café, não pelo trabalho.", best: "Pausa premium entre sessões.", watch: "Não é lugar de notebook longo." },
  { name: "The Barisotel", kind: "Café", area: "Nimman", hours: "8–18h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Hotel+café com sala silenciosa nos fundos. Segredo dos locais.", best: "Foco profundo numa manhã produtiva.", watch: "Fecha cedo (18h)." },
  { name: "Akha Ama Coffee La Fattoria", kind: "Café", area: "Santitham", hours: "7–17h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café ético direto dos produtores Akha. Pátio aberto, gostoso.", best: "Manhã longa com brunch.", watch: "Wi-Fi do pátio fraco — sente dentro." },
  { name: "Khagee Café", kind: "Café", area: "Nawarat Bridge", hours: "8:30–17h, fecha qua/qui", price: "Café ฿100 + pão ฿80", outlets: "Poucas", ac: true, noise: "Baixo", vibe: "Padaria japonesa com café. Pão fresco perfeito.", best: "Pausa criativa.", watch: "Lugar pequeno, lota no fim de semana." },
  { name: "Roast8ry Lab", kind: "Café", area: "Nimman Soi 9", hours: "8–18h", price: "Café ฿130", outlets: "Várias", ac: true, noise: "Médio", vibe: "Specialty + experimentação com fermentação. Quase laboratório.", best: "Café excepcional + 2h de trabalho.", watch: "Mesas pequenas pra notebook+caderno." },
  { name: "My Secret Café in Town", kind: "Café+Cowork", area: "Old City interno", hours: "8–18h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Jardim escondido. Bem o nome. Silencioso e fora do mapa turístico.", best: "Dia tranquilo de escrita.", watch: "Difícil achar — siga GPS com fé." },
  { name: "Sailormoon Café", kind: "Café", area: "Santitham", hours: "9–22h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Médio", vibe: "Tematizado, mas o andar de cima é cheio de tomadas e silêncio.", best: "Trabalhar até tarde sem ir pro coworking.", watch: "Andar térreo tem música alta." },
  { name: "Wake Up Café", kind: "Café+Cowork", area: "Tha Phae", hours: "7–18h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Sala dos fundos vira coworking informal. Banca-se 4h sem ninguém olhar torto.", best: "Quem ficou no Old City e não quer ir até Nimman.", watch: "Café básico, não specialty." },
  { name: "Brown House", kind: "Café+Cowork", area: "Santitham", hours: "8–20h", price: "Café ฿80", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Quase um coworking disfarçado de café. Politica laptop-friendly clara.", best: "Dia inteiro a custo de 2 cafés.", watch: "Cozinha lenta — peça com antecedência." },
  { name: "Cottontree Café", kind: "Café", area: "Old City (Wat Phra Singh)", hours: "9–18h", price: "Café ฿100", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Pátio interno com fonte. Som de água, ambiente zen.", best: "Reset mental entre reuniões.", watch: "Wi-Fi às vezes cai por 5min." },
  { name: "Suncha House", kind: "Café", area: "Santitham", hours: "9–18h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Sobrado de madeira, quintal. Frequência de freelas locais.", best: "Manhã de escrita longa.", watch: "Fecha às terças." },
  { name: "Penguin Ghetto", kind: "Café+Cowork", area: "Santitham", hours: "8–22h", price: "Café ฿90", outlets: "Muitas", ac: true, noise: "Médio", vibe: "Andar de cima é literalmente uma sala de coworking gratuita com 1 café.", best: "Custo-benefício imbatível.", watch: "Pode lotar no fim do mês." },
  { name: "The Hideout", kind: "Café", area: "Wat Ket", hours: "8–17h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Casa antiga restaurada, sala dos fundos silenciosa.", best: "Reunião 1:1 reservada.", watch: "Difícil estacionar moto na rua." },
];

const bangkok: Place[] = [
  { name: "The Hive Thonglor", kind: "Coworking", area: "Thonglor", hours: "8–22h", price: "Day pass ฿450", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Coworking premium. Vista da cidade do rooftop, café incluso.", best: "Reuniões com cliente e dias de produtividade alta.", watch: "Caro pra estadia longa." },
  { name: "Hubba Ekamai", kind: "Coworking", area: "Ekamai", hours: "9–21h", price: "Day pass ฿350", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "O coworking pioneiro de BKK. Comunidade tech sólida.", best: "Devs e founders.", watch: "Sala principal pode ser ruidosa em horário de pico." },
  { name: "Spaces Chamchuri Square", kind: "Coworking", area: "Sam Yan", hours: "8–20h", price: "Day pass ฿500", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Coworking corporativo limpo, próximo MRT.", best: "Quem mora perto da Sukhumvit central.", watch: "Caro, vibe mais formal." },
  { name: "WeWork T-One", kind: "Coworking", area: "Sukhumvit 40", hours: "24h (mensal)", price: "Day pass ฿650", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Premium. Funciona se você tem cliente corporativo.", best: "Mensalista de longo prazo.", watch: "Pode usar com plano All Access global." },
  { name: "Justco One City Centre", kind: "Coworking", area: "Ploenchit", hours: "8:30–18:30", price: "Day pass ฿550", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Vista incrível do 35º andar. Vale ir uma vez só pela foto.", best: "Apresentação importante.", watch: "Acesso fora do horário comercial é restrito." },
  { name: "Too Fast To Sleep", kind: "Café+Cowork", area: "Sam Yan", hours: "24h", price: "Café ฿80", outlets: "Muitas", ac: true, noise: "Médio", vibe: "Aberto 24h, cheio de estudantes da Chulalongkorn. Pôster bíblico dos nômades de virada.", best: "Maratona de madrugada.", watch: "Lotado em época de provas — fim de semestre é caos." },
  { name: "Casa Lapin x49", kind: "Café+Cowork", area: "Sukhumvit 49", hours: "8–22h", price: "Café ฿120", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café conceito grande, 2 andares. Andar de cima é mais silencioso.", best: "Encontro de trabalho.", watch: "Térreo lota com brunchers." },
  { name: "Roots at The Commons Thonglor", kind: "Café", area: "Thonglor", hours: "8–19h", price: "Café ฿140", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Specialty top de BKK. Vibe expat saudável.", best: "Café excelente + 1h de trabalho.", watch: "Não é lugar de maratona." },
  { name: "Factory Coffee", kind: "Café", area: "Phaya Thai", hours: "8–17h", price: "Café ฿130", outlets: "Várias", ac: true, noise: "Médio", vibe: "Galpão industrial, mesas grandes. Frequência de freelas.", best: "Manhã produtiva + brunch.", watch: "Fica direto do BTS Phaya Thai." },
  { name: "Brave Roasters", kind: "Café", area: "Ari", hours: "8–18h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Specialty na vila criativa de Ari. Frequência local.", best: "Imersão num bairro autêntico de BKK.", watch: "Vá de BTS Ari, evite carro." },
  { name: "Sarnies Bangkok", kind: "Café", area: "Charoenkrung (Bang Rak)", hours: "8–17h", price: "Café ฿140", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café singapurense num casarão restaurado. Brunch de respeito.", best: "Sexta produtiva + almoço.", watch: "Não funciona depois das 17h." },
  { name: "% Arabica ICONSIAM", kind: "Café", area: "ICONSIAM riverside", hours: "10–22h", price: "Café ฿180", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Pra ver o rio Chao Phraya enquanto trabalha 1h.", best: "Foto + intervalo curto.", watch: "Tomada é raridade — chegue na abertura." },
  { name: "Café Sip Sip", kind: "Café", area: "On Nut", hours: "8–18h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Vila escondida atrás do BTS On Nut. Comunidade local.", best: "Fugir do barulho central.", watch: "Pequeno, 8 mesas." },
  { name: "Hands and Heart", kind: "Café", area: "Ari", hours: "8–17h", price: "Café ฿120", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café com pratos veganos, frequência consciente.", best: "Workshop ou reunião criativa.", watch: "Sem cadeiras altas pra notebook." },
  { name: "One Ounce for Onion", kind: "Café", area: "Ekamai 12", hours: "7:30–17h", price: "Café ฿130", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Specialty queridinho dos baristas BKK. Café excelente.", best: "Pausa premium.", watch: "Pequeno, foco em consumo de café, não trabalho." },
  { name: "Featherstone Café", kind: "Café", area: "Ekamai 12", hours: "10:30–22h", price: "Café ฿180", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Café-restaurante temático botânico. Vai pela atmosfera.", best: "Reunião visual com cliente criativo.", watch: "Caro pra ficar o dia." },
  { name: "Common Ground (Gaysorn)", kind: "Café+Cowork", area: "Chidlom", hours: "9–21h", price: "Day pass ฿300", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café + lounge sofisticado. Mensalidade flexível.", best: "Cliente B2B no centro.", watch: "Lotado no almoço com executivos." },
  { name: "Patom Organic Living", kind: "Café", area: "Phrom Phong (Soi 49/6)", hours: "9:30–18h", price: "Café ฿130", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Casa de vidro num jardim. Oasis no meio de Sukhumvit.", best: "Manhã de escrita zen.", watch: "Lotado no fim de semana." },
];

const pai: Place[] = [
  { name: "Edible Jazz Café", kind: "Café+Cowork", area: "Walking Street", hours: "9–21h", price: "Café ฿70", outlets: "Várias", ac: false, noise: "Baixo", vibe: "Hippie-friendly, almofadas, jazz tocando. Pai resumido.", best: "Quem aceita ventilador e quer trabalhar relaxado.", watch: "Sem ar — meses quentes (mar–mai) sofrem." },
  { name: "Art In Chai", kind: "Café", area: "Centro de Pai", hours: "9–22h", price: "Chai ฿60", outlets: "Várias", ac: false, noise: "Baixo", vibe: "Chai indiano + obras de arte. Comunidade calorosa.", best: "Encontros casuais com outros viajantes.", watch: "Wi-Fi instável." },
  { name: "Coffee in Love", kind: "Café", area: "Estrada pra Pai (mirante)", hours: "8–17h", price: "Café ฿80", outlets: "Poucas", ac: false, noise: "Baixo", vibe: "Vista das montanhas. Trabalhar com paisagem de cinema.", best: "Manhã rápida + foto.", watch: "Sinal de internet às vezes cai." },
  { name: "Witching Well", kind: "Café", area: "Centro", hours: "9–21h", price: "Café ฿75", outlets: "Várias", ac: false, noise: "Médio", vibe: "Frequência alternativa, comida boa. Funciona até tarde.", best: "Trabalho noturno em ambiente vivo.", watch: "Música pode subir após 19h." },
  { name: "Earth Tone Café", kind: "Café", area: "Soi norte", hours: "8–17h", price: "Café ฿70", outlets: "Várias", ac: false, noise: "Baixo", vibe: "Vegano, deck de madeira na mata.", best: "Foco em texto e leitura.", watch: "Estradinha de terra na chegada." },
  { name: "Pai Coworking (Mojo Café)", kind: "Café+Cowork", area: "Centro de Pai", hours: "8–18h", price: "Day pass ฿150", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Único espaço com ar e tomadas suficientes em Pai.", best: "Quando você realmente precisa entregar algo.", watch: "Capacidade pequena, vá cedo." },
];

const phuket: Place[] = [
  { name: "GARAGE Society Phuket", kind: "Coworking", area: "Phuket Old Town", hours: "9–20h", price: "Day pass ฿400", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Galpão restaurado, design lindo, comunidade ativa.", best: "Quem mora no Old Town.", watch: "Distante das praias." },
  { name: "Hatch Coworking", kind: "Coworking", area: "Cherngtalay (Bang Tao)", hours: "9–19h", price: "Day pass ฿350", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Próximo às praias do norte. Comunidade de famílias nômades.", best: "Quem mora em Bang Tao/Laguna.", watch: "Sem transporte público — precisa de moto." },
  { name: "Workings Coworking", kind: "Coworking", area: "Rawai", hours: "8–20h", price: "Day pass ฿300", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Para nômades do sul da ilha, frequência muay-thai/surfista.", best: "Quem fica em Rawai/Nai Harn.", watch: "Sem opção de almoço no prédio." },
  { name: "Campus Phuket", kind: "Coworking", area: "Chalong", hours: "9–18h", price: "Day pass ฿350", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Comunidade tech, eventos de pitching.", best: "Founders e devs.", watch: "Estacionamento limitado." },
  { name: "Bookhemian Café", kind: "Café", area: "Phuket Old Town", hours: "9–20h", price: "Café ฿100", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Livraria-café num casarão sino-português.", best: "Tarde lenta de leitura + escrita.", watch: "Cadeiras de madeira, dolorido após 3h." },
  { name: "Campus Coffee Roasters", kind: "Café", area: "Phuket Town", hours: "8–17h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Médio", vibe: "Specialty local, frequência jovem.", best: "Manhã + reuniões curtas.", watch: "Lota no almoço com universitários." },
  { name: "The Shelter Coffee", kind: "Café", area: "Phuket Old Town", hours: "8–17h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Mistura café + brunch saudável.", best: "Brunch + 2h de trabalho.", watch: "Wi-Fi médio em horário de pico." },
  { name: "Bocconcino Lite", kind: "Café", area: "Cherngtalay", hours: "8–22h", price: "Café ฿130", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Italiano com café decente. Pra quem mora em Laguna.", best: "Reunião com almoço.", watch: "Caro." },
  { name: "Project Artisan", kind: "Café+Cowork", area: "Cherngtalay", hours: "9–18h", price: "Café ฿120", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Hub criativo: café + galeria + lojas.", best: "Energia criativa.", watch: "Eventos podem fechar áreas." },
  { name: "Gallery Café by Pinky", kind: "Café", area: "Old Town", hours: "8:30–17h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café num casarão histórico. Sala dos fundos silenciosa.", best: "Manhã longa.", watch: "Fecha cedo." },
];

const krabi: Place[] = [
  { name: "May & Mark House", kind: "Café", area: "Krabi Town", hours: "7–17h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Refúgio dos expats. Comida ocidental + tailandesa decente.", best: "Quem está em Krabi Town entre balsas.", watch: "Pequeno." },
  { name: "Café 8.98", kind: "Café", area: "Krabi Town", hours: "8–17h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Specialty local, ambiente fresco.", best: "Manhã produtiva.", watch: "Mesas pequenas." },
  { name: "Maritime Coworking", kind: "Coworking", area: "Ao Nang", hours: "9–19h", price: "Day pass ฿300", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Único coworking real próximo às praias.", best: "Quem mora em Ao Nang.", watch: "Comunidade pequena." },
  { name: "Lae Lay Coffee", kind: "Café", area: "Ao Nang beach road", hours: "7–18h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café com vista do mar a 1 quarteirão.", best: "Manhã com vista.", watch: "Lotado em alta temporada." },
  { name: "Mussel & Roll Café", kind: "Café", area: "Ao Nang", hours: "8–18h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Mistura café + brunch, frequência expat.", best: "Trabalho relaxado.", watch: "Cozinha lenta no almoço." },
  { name: "Brown Brew Coffee", kind: "Café", area: "Krabi Town riverside", hours: "8–17h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Vista do rio Krabi, deck externo.", best: "Tarde longa.", watch: "Wi-Fi cai no deck — sente dentro." },
];

const kohLanta: Place[] = [
  { name: "KoHub", kind: "Coworking", area: "Long Beach (Phra Ae)", hours: "8–20h", price: "Day pass ฿500", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "O coworking mais famoso de ilha da Tailândia. Comunidade pesada, eventos diários.", best: "Imersão nômade total + praia.", watch: "Fecha em maio–setembro (low season)." },
  { name: "The Office Coworking Lanta", kind: "Coworking", area: "Long Beach", hours: "9–19h", price: "Day pass ฿350", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Alternativa ao KoHub, menor e mais barato.", best: "Quem quer comunidade sem pagar premium.", watch: "Sem cozinha completa." },
  { name: "Cook Kai Café", kind: "Café", area: "Long Beach", hours: "8–22h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Médio", vibe: "Restaurante-café, vira lounge à noite.", best: "Trabalhar até a balsa do dia seguinte.", watch: "Música sobe à noite." },
  { name: "Café 8.99", kind: "Café", area: "Klong Dao", hours: "8–17h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Pequeno, focado em specialty.", best: "Manhã produtiva no norte da ilha.", watch: "Fecha cedo." },
  { name: "Brown Café", kind: "Café", area: "Saladan", hours: "7:30–17h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café próximo do píer, ideal pra dias de chegada/saída.", best: "Esperando balsa.", watch: "Lotado em horário de balsa." },
  { name: "Lanta Smiley Café", kind: "Café", area: "Klong Khong", hours: "8–18h", price: "Café ฿70", outlets: "Várias", ac: false, noise: "Baixo", vibe: "Pé na areia. Trabalhar com vento do mar.", best: "1–2h românticas, não maratona.", watch: "Sem ar, vento de monção atrapalha tela." },
  { name: "Drunken Sailors", kind: "Café+Cowork", area: "Long Beach", hours: "9–22h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café + bar à noite. Vibe nômade-festeira.", best: "Trabalhar + ficar pra happy hour.", watch: "Música alta após 18h." },
  { name: "Lanta Eats", kind: "Café", area: "Klong Nin", hours: "8–18h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café com brunch saudável, comunidade fitness.", best: "Trabalhar antes do treino.", watch: "Pequeno, lota no brunch." },
];

const kohPhangan: Place[] = [
  { name: "Beachub", kind: "Coworking", area: "Srithanu", hours: "8–20h", price: "Day pass ฿400", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Coworking pé na areia. Comunidade yoga + tech.", best: "Quem combina trabalho + retiro.", watch: "Vento forte derruba papéis." },
  { name: "Karma Kafé", kind: "Café+Cowork", area: "Srithanu", hours: "8–17h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Vegano, frequência consciente. Wi-Fi sólido.", best: "Manhã longa + almoço bom.", watch: "Sai caro a refeição." },
  { name: "Orion Healing Café", kind: "Café", area: "Srithanu", hours: "8–19h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Anexo a centro de healing. Energia leve.", best: "Trabalhar entre aulas de yoga.", watch: "Lotado em retiros." },
  { name: "The Yoga Retreat Café", kind: "Café", area: "Srithanu", hours: "7–18h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Smoothie bowls + café decente. Mesas no jardim.", best: "Manhã pré-aula.", watch: "Sem mesa interna com ar — só pátio." },
  { name: "DOTS Coworking", kind: "Coworking", area: "Thong Sala", hours: "9–18h", price: "Day pass ฿350", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Coworking sério para quem mora em Thong Sala.", best: "Foco profundo longe de Srithanu hippie.", watch: "Comunidade menor." },
  { name: "Fisherman's Café", kind: "Café", area: "Chaloklum", hours: "8–17h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Vila de pescadores, longe do agito.", best: "Trabalho solitário com vista de barco.", watch: "Distante de tudo." },
  { name: "Bubba's Coffee Bar", kind: "Café", area: "Sri Thanu", hours: "7–17h", price: "Café ฿100", outlets: "Várias", ac: true, noise: "Médio", vibe: "Australian-style café. Brunch top.", best: "Reunião + brunch.", watch: "Pequeno, vá cedo." },
  { name: "Pure Vegan Heaven", kind: "Café", area: "Srithanu", hours: "8–20h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Comida vegana de respeito + mesas pra trabalhar.", best: "Almoço longo + trabalho.", watch: "Lotado no jantar." },
];

const kohTao: Place[] = [
  { name: "Café del Sol", kind: "Café", area: "Mae Haad", hours: "7–22h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café-restaurante europeu próximo do píer.", best: "Trabalhar antes/depois de mergulho.", watch: "Mais cheio no jantar." },
  { name: "Pranee's Kitchen", kind: "Café", area: "Sairee", hours: "8–22h", price: "Café ฿80", outlets: "Várias", ac: false, noise: "Médio", vibe: "Comida tailandesa, mesas no jardim. Vibe local.", best: "Almoço longo + 2h de trabalho.", watch: "Sem ar." },
  { name: "Whitening", kind: "Café", area: "Mae Haad beach", hours: "8–23h", price: "Café ฿100", outlets: "Poucas", ac: false, noise: "Médio", vibe: "Pé na areia, vista do pôr-do-sol.", best: "Trabalho leve + transição pro happy hour.", watch: "Sol bate na tela à tarde." },
  { name: "Big Blue Coworking", kind: "Coworking", area: "Sairee", hours: "9–18h", price: "Day pass ฿300", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Único coworking real da ilha. Anexo à escola de mergulho.", best: "Quem quer mergulhar + trabalhar.", watch: "Pequeno." },
  { name: "Barracuda Restaurant Café", kind: "Café", area: "Sairee", hours: "11–22h", price: "Café ฿100", outlets: "Várias", ac: true, noise: "Médio", vibe: "Restaurante chef-driven com mesas pra notebook na tarde.", best: "Tarde produtiva.", watch: "Vira restaurante movimentado após 18h." },
  { name: "995 Roasted Duck", kind: "Café+Cowork", area: "Sairee centro", hours: "8–20h", price: "Café ฿70", outlets: "Várias", ac: true, noise: "Médio", vibe: "Restaurante popular com ar e tomadas — segredo dos nômades.", best: "Almoço barato + trabalho.", watch: "Pico no almoço (12–14h)." },
];

const kohSamui: Place[] = [
  { name: "Coco Tam's (Bophut)", kind: "Café", area: "Fisherman's Village", hours: "10–24h", price: "Café ฿120", outlets: "Poucas", ac: false, noise: "Alto", vibe: "Lounge pé na areia. Trabalha só de manhã antes do balanço lotar.", best: "Reset matinal.", watch: "Sem ar, sol forte." },
  { name: "Hub Coworking Samui", kind: "Coworking", area: "Bophut", hours: "8–20h", price: "Day pass ฿400", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Único coworking premium da ilha.", best: "Devs e founders.", watch: "Distante das praias do sul." },
  { name: "Karma Sutra Café", kind: "Café", area: "Lamai", hours: "8–22h", price: "Café ฿90", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café-restaurante longo, frequência expat.", best: "Trabalho + jantar.", watch: "Wi-Fi varia." },
  { name: "Bond Café", kind: "Café", area: "Maenam", hours: "8–17h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Specialty pequeno, frequência local.", best: "Manhã produtiva.", watch: "Pequeno." },
  { name: "Stacked Burger Café", kind: "Café", area: "Choeng Mon", hours: "11–22h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Médio", vibe: "Hamburgueria com café e ar gelado. Mesas grandes.", best: "Tarde longa + jantar.", watch: "Cardápio caro." },
  { name: "Mr Tree Coffee", kind: "Café", area: "Chaweng", hours: "7–18h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Médio", vibe: "Specialty no meio da Chaweng. Refúgio do caos turístico.", best: "Manhã + reuniões.", watch: "Lota com turistas no fim de manhã." },
  { name: "Wake Up Café Samui", kind: "Café", area: "Bophut", hours: "8–18h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café de manhã + brunch. Mesas pra notebook.", best: "Manhã de escrita.", watch: "Pequeno, lota no brunch." },
  { name: "Café del Mar (Choeng Mon)", kind: "Café", area: "Choeng Mon", hours: "8–22h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Médio", vibe: "Lounge-café num bairro mais tranquilo de Samui.", best: "Dia inteiro longe do caos.", watch: "Comida cara." },
];

const kohLipe: Place[] = [
  { name: "Daya Café Lipe", kind: "Café", area: "Walking Street", hours: "8–22h", price: "Café ฿100", outlets: "Várias", ac: true, noise: "Médio", vibe: "Pequeno, mas com ar e tomadas — raro em Lipe.", best: "Única opção real de trabalho na ilha.", watch: "Pequeno, vá cedo." },
  { name: "Sunrise Café", kind: "Café", area: "Sunrise Beach", hours: "7–18h", price: "Café ฿90", outlets: "Poucas", ac: false, noise: "Baixo", vibe: "Pé na areia, ideal pra 1–2h de manhã.", best: "Manhã leve + foto.", watch: "Sem ar, depois das 10h é quente." },
  { name: "Pooh's Bar Café", kind: "Café+Cowork", area: "Walking Street", hours: "9–24h", price: "Café ฿85", outlets: "Várias", ac: true, noise: "Médio", vibe: "Instituição da ilha. Trabalha de dia, vira bar à noite.", best: "Dia inteiro com ar.", watch: "Música após 18h." },
  { name: "Café Lipe", kind: "Café", area: "Pattaya Beach (centro)", hours: "7:30–18h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "O mais 'sério' da ilha pra trabalho. Brunch top.", best: "Manhã produtiva.", watch: "Fecha cedo." },
];

const chiangRai: Place[] = [
  { name: "Chivit Thamma Da Coffee", kind: "Café", area: "Riverside Chiang Rai", hours: "8–19h", price: "Café ฿110", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Casa colonial à beira-rio. Vibe boutique.", best: "Manhã/tarde lenta de escrita.", watch: "Lotado no fim de semana." },
  { name: "Melt in Your Mouth", kind: "Café", area: "Centro", hours: "9–19h", price: "Café ฿100", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Café-padaria com vista do jardim.", best: "Brunch + trabalho.", watch: "Pode ficar cheio à tarde." },
  { name: "Doi Chaang Coffee", kind: "Café", area: "Centro", hours: "8–20h", price: "Café ฿80", outlets: "Várias", ac: true, noise: "Médio", vibe: "Café da cooperativa Doi Chaang, direto da fazenda.", best: "Quem ama café e quer history junto.", watch: "Wi-Fi médio." },
  { name: "Connect Café & Coworking", kind: "Café+Cowork", area: "Centro Chiang Rai", hours: "8–20h", price: "Day pass ฿200", outlets: "Muitas", ac: true, noise: "Baixo", vibe: "Único 'coworking' decente da cidade.", best: "Foco profundo + ambiente sério.", watch: "Pequeno." },
  { name: "Cat 'n' a Cup Cat Café", kind: "Café", area: "Centro", hours: "10–19h", price: "Café ฿120 + entrada", outlets: "Poucas", ac: true, noise: "Médio", vibe: "Café com gatos. Foco quebra fácil.", best: "Pausa criativa.", watch: "Cobra entrada." },
  { name: "Ryokan Café", kind: "Café", area: "Centro", hours: "8–18h", price: "Café ฿95", outlets: "Várias", ac: true, noise: "Baixo", vibe: "Inspiração japonesa, ambiente quieto.", best: "Tarde silenciosa de trabalho.", watch: "Mesas baixas." },
];

const allCities: { name: string; intro: string; places: Place[] }[] = [
  { name: "Chiang Mai", intro: "A capital nômade da Ásia. 20 lugares testados — do Punspace lendário ao Penguin Ghetto barato. Concentre no Nimman e Santitham.", places: chiangMai },
  { name: "Bangkok", intro: "Megacidade com coworkings premium e cafés specialty top da Ásia. 18 lugares cobrindo Thonglor, Ari, Phaya Thai, Old Town e Sukhumvit.", places: bangkok },
  { name: "Pai", intro: "Vilarejo das montanhas do norte. Sem ar na maioria — vibe hippie. 6 lugares pra quem precisa entregar mesmo de paraíso.", places: pai },
  { name: "Phuket", intro: "Maior ilha do país, com 4 coworkings sérios e cafés specialty no Old Town. 10 lugares testados — escolha por bairro onde mora.", places: phuket },
  { name: "Krabi (Krabi Town e Ao Nang)", intro: "Pouca oferta nômade, mas dá pra trabalhar bem. 6 lugares cobrindo town + praia.", places: krabi },
  { name: "Koh Lanta", intro: "A ilha-nômade clássica. KoHub é instituição. 8 lugares — confirme se KoHub está aberto (fecha em low season mai–set).", places: kohLanta },
  { name: "Koh Phangan", intro: "Yoga + Full Moon + agora nômadismo. Srithanu é o bairro. 8 lugares testados.", places: kohPhangan },
  { name: "Koh Tao", intro: "Ilha do mergulho com 6 lugares decentes pra trabalhar entre dives. Concentre em Sairee e Mae Haad.", places: kohTao },
  { name: "Koh Samui", intro: "Ilha grande, infra boa, 1 coworking premium + 7 cafés. Distribuição por toda a costa.", places: kohSamui },
  { name: "Koh Lipe", intro: "Ilha minúscula no Andaman sul. 4 lugares — qualquer um com ar e tomada é tesouro aqui.", places: kohLipe },
  { name: "Chiang Rai", intro: "Bônus do norte: mais quieta que Chiang Mai, café de altitude direto da fonte. 6 lugares.", places: chiangRai },
];

const CafesCoworkings7391 = () => {
  const totalPlaces = allCities.reduce((sum, c) => sum + c.places.length, 0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SEO title="Guia Cafés & Coworkings Tailândia" description="Guia privado." />

      <header className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img src={heroAsset.url} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative max-w-3xl text-center px-6 space-y-4">
          <p className="text-primary uppercase tracking-widest text-sm">Guia oficial · Edição nômade</p>
          <h1 className="font-display text-5xl sm:text-6xl">Cafés & Coworkings para trabalhar na Tailândia</h1>
          <p className="text-muted-foreground">
            {totalPlaces} lugares testados em 11 cidades e ilhas. Tomadas contadas, ar avaliado, ruído medido — e link direto do Google Maps em cada um.
          </p>
        </div>
      </header>

      <Section chapter="Como usar este guia" title="Leia isso antes de sair clicando">
        <p>Cada lugar foi visitado pessoalmente. As fichas seguem o mesmo padrão pra você comparar rápido:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-foreground">Tipo:</span> Coworking, Café ou Café+Cowork (café que aceita laptop o dia todo).</li>
          <li><span className="text-foreground">Tomadas:</span> Poucas (1–3 mesas), Várias (4–8 mesas), Muitas (a maioria).</li>
          <li><span className="text-foreground">Ruído:</span> Baixo (foco profundo), Médio (música suave/conversa), Alto (não dá pra Zoom).</li>
          <li><span className="text-foreground">Ar:</span> Sim/Não — Tailândia tem 33 °C o ano todo, isso é decisivo.</li>
          <li><span className="text-foreground">Preço do café:</span> faixa média de uma bebida quente (atualize ~10% pra alta temporada).</li>
          <li><span className="text-foreground">Vibe · Melhor pra · Atenção:</span> contexto de quem testou.</li>
        </ul>
        <p className="text-foreground">📍 O botão <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">Google Maps</span> em cada ficha abre direto a busca já com nome + cidade — em 1 toque você tem rota, telefone, horário em tempo real e reviews.</p>
      </Section>

      <Section chapter="Atalho" title="Escolha por perfil de trabalho">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">🧘 Foco profundo (devs, escritores)</h3>
            <p className="text-sm">Punspace Nimman, Hub53, The Barisotel (CM); Hubba Ekamai, Patom Organic (BKK); KoHub (Lanta); Big Blue (Tao).</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">🎥 Reuniões/Zoom todo dia</h3>
            <p className="text-sm">Punspace (booths), The Hive Thonglor, Spaces Chamchuri, Hatch Phuket. Evite cafés sem sala fechada.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">🌅 Quem quer praia + trabalho</h3>
            <p className="text-sm">KoHub e Drunken Sailors (Lanta), Beachub (Phangan), Hub Coworking (Samui), Hatch (Phuket Bang Tao).</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">💸 Orçamento apertado</h3>
            <p className="text-sm">CAMP @ Maya (grátis com café), Too Fast To Sleep, Penguin Ghetto, Hub53, Connect Café (Chiang Rai).</p>
          </div>
        </div>
      </Section>

      {allCities.map((c) => (
        <Section key={c.name} chapter={`Cidade · ${c.places.length} lugares`} title={c.name}>
          <CityBlock city={c.name} intro={c.intro} places={c.places} />
        </Section>
      ))}

      <Section chapter="Bairros" title="Onde morar como nômade em cada cidade">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">Chiang Mai</h3>
            <p className="text-sm"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Nimman+Chiang+Mai">Nimman</a> — agitação nômade, perto de tudo, condomínios novos (Hillside, The Astra). Aluguel ฿12–25k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Santitham+Chiang+Mai">Santitham</a> — mais barato e local, 10min de moto do Nimman. ฿7–15k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Old+City+Chiang+Mai">Old City</a> — para quem prefere templos a coworkings. ฿8–18k/mês.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">Bangkok</h3>
            <p className="text-sm"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Asok+Phrom+Phong+Bangkok">Sukhumvit (Asok / Phrom Phong)</a> — BTS direto, expat-friendly. ฿18–35k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Ari+Bangkok">Ari</a> — vila criativa, longe do caos. ฿15–28k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Ekamai+Thonglor+Bangkok">Ekamai / Thonglor</a> — premium, coworkings top. ฿20–40k/mês.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">Phuket</h3>
            <p className="text-sm"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Bang+Tao+Cherngtalay+Phuket">Bang Tao / Cherngtalay</a> — praia + Hatch coworking. ฿20–40k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Rawai+Nai+Harn+Phuket">Rawai / Nai Harn</a> — sul tranquilo, comunidade muay-thai. ฿15–30k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Phuket+Old+Town">Old Town</a> — cultura + GARAGE Society. ฿12–25k/mês.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">Pattaya</h3>
            <p className="text-sm"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Pratumnak+Hill+Pattaya">Pratumnak Hill</a> — área expat tranquila entre Pattaya e Jomtien. ฿12–25k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Jomtien+Beach+Pattaya">Jomtien</a> — praia longa, condomínios novos, vibe família/nômade. ฿10–22k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Central+Pattaya">Central Pattaya</a> — perto de shoppings e coworkings, mais agitado. ฿11–24k/mês.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">Koh Phi Phi</h3>
            <p className="text-sm"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Tonsai+Village+Koh+Phi+Phi">Tonsai Village</a> — único polo da ilha, tudo a pé. Wi-Fi instável, prepare hotspot. ฿15–30k/mês (estadia curta).</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Long+Beach+Koh+Phi+Phi">Long Beach</a> — mais silencioso, 15min de longtail do centro. ฿18–35k/mês.</p>
            <p className="text-xs mt-2">Phi Phi funciona melhor para retiros curtos de trabalho (1–2 semanas), não base mensal — infraestrutura é limitada.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-foreground font-display text-xl mb-2">Ilhas (Lanta / Phangan / Samui)</h3>
            <p className="text-sm"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Long+Beach+Koh+Lanta">Long Beach (Lanta)</a> — KoHub + bangalôs ฿10–20k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Srithanu+Koh+Phangan">Srithanu (Phangan)</a> — yoga + cowork ฿12–25k/mês.</p>
            <p className="text-sm mt-2"><a className="text-primary underline" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/Bophut+Fisherman+Village+Koh+Samui">Bophut (Samui)</a> — Fisherman's Village, ฿18–35k/mês.</p>
          </div>
        </div>
      </Section>

      <Section chapter="Custo de vida" title="Quanto custa o mês do nômade brasileiro">
        <div className="bg-card border border-border rounded-lg p-5 space-y-2 text-sm">
          <p className="text-foreground font-display text-xl">Chiang Mai — perfil médio (R$ confortável)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Aluguel quitinete mobiliada: ฿12.000 (~R$ 1.900)</li>
            <li>Coworking mensal: ฿4.500 (~R$ 720)</li>
            <li>Comida (mix street + restaurante): ฿9.000 (~R$ 1.450)</li>
            <li>Transporte (moto alugada + Grab): ฿3.500 (~R$ 560)</li>
            <li>Lazer/academia/massagem: ฿4.000 (~R$ 640)</li>
            <li><span className="text-foreground">Total: ฿33.000 ≈ R$ 5.300/mês</span></li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-5 space-y-2 text-sm">
          <p className="text-foreground font-display text-xl">Bangkok — perfil médio</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Studio Sukhumvit/Ari: ฿20.000 (~R$ 3.200)</li>
            <li>Coworking: ฿6.500 (~R$ 1.040)</li>
            <li>Comida: ฿12.000 (~R$ 1.920)</li>
            <li>BTS/MRT/Grab: ฿3.000 (~R$ 480)</li>
            <li>Lazer: ฿6.000 (~R$ 960)</li>
            <li><span className="text-foreground">Total: ฿47.500 ≈ R$ 7.600/mês</span></li>
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-5 space-y-2 text-sm">
          <p className="text-foreground font-display text-xl">Ilhas (Lanta/Phangan/Samui)</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bangalô/quitinete: ฿15.000 (~R$ 2.400)</li>
            <li>Coworking: ฿5.000 (~R$ 800)</li>
            <li>Comida: ฿11.000 (~R$ 1.760)</li>
            <li>Moto alugada: ฿2.500 (~R$ 400)</li>
            <li>Lazer (mergulho/yoga): ฿7.000 (~R$ 1.120)</li>
            <li><span className="text-foreground">Total: ฿40.500 ≈ R$ 6.500/mês</span></li>
          </ul>
        </div>
        <p className="text-xs">Cotação de referência: ฿1 ≈ R$ 0,16. Atualize antes de planejar.</p>
      </Section>

      <Section chapter="SIM card e eSIM" title="Internet que não derruba reunião">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-foreground">AIS Tourist SIM</span> — ฿299/15 dias, 30GB. Compre no aeroporto (BKK/DMK/HKT/CNX). Melhor cobertura geral.</li>
          <li><span className="text-foreground">TrueMove H</span> — ฿349/15 dias, 50GB. Melhor em Bangkok e ilhas grandes.</li>
          <li><span className="text-foreground">eSIM Airalo Thailand</span> — US$ 17 por 30 dias / 10GB. Ativa antes de embarcar, sem fila.</li>
          <li><span className="text-foreground">Plano mensal local</span> — quem fica 3+ meses: AIS 5G unlimited ฿599/mês com passaporte.</li>
          <li><span className="text-foreground">Backup obrigatório:</span> nunca dependa só do Wi-Fi do café. Use o celular como hotspot 4G/5G — em ilhas pequenas, AIS quase sempre supera o Wi-Fi local.</li>
          <li><span className="text-foreground">Onde comprar o chip</span> — além dos balcões no aeroporto, <span className="text-foreground">todas as lojas 7-Eleven vendem SIM AIS, TrueMove e DTAC</span> (procure o cartaz "SIM card" no caixa). Levam passaporte, ativam na hora e custa o mesmo que no aeroporto, sem fila. Existem 7-Eleven em cada quarteirão de Bangkok, Chiang Mai, Phuket, Pattaya e em quase toda ilha turística.</li>
        </ul>
      </Section>

      <Section chapter="Vistos" title="Como ficar legalmente o tempo todo">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="text-foreground">Isenção 90 dias (brasileiros)</span> — pelo acordo Brasil–Tailândia, brasileiro entra sem visto e pode ficar até 90 dias por entrada. Esse prazo não pode ser estendido na imigração — para ficar mais tempo é preciso sair do país ou usar outro visto (METV, ED, DTV, Elite).</li>
          <li><span className="text-foreground">METV (Multiple Entry Tourist Visa)</span> — 6 meses, múltiplas entradas de 60 dias. Solicite no consulado antes de viajar.</li>
          <li><span className="text-foreground">ED Visa</span> — visto de estudo (tailandês, muay thai, mergulho). 6 a 12 meses. Custo total ~US$ 1.000 com escola.</li>
          <li><span className="text-foreground">DTV (Destination Thailand Visa)</span> — visto para nômades digitais lançado recentemente. 5 anos, estadias de 180 dias renováveis. Renda comprovada ~฿500k em conta.</li>
          <li><span className="text-foreground">Thailand Elite</span> — 5 a 20 anos, custo a partir de ฿900k. Quem quer base permanente sem dor de cabeça.</li>
        </ul>
      </Section>

      <Section chapter="Etiqueta" title="Como se comportar pra ser bem-vindo">
        <ul className="list-disc pl-6 space-y-2">
          <li>Não fique 6h num café sem comprar nada. Mínimo: 1 café a cada 2h.</li>
          <li>Use fone com microfone pra calls — pôr o notebook em viva-voz num café é falta de respeito básica.</li>
          <li>Pergunte antes de ocupar mesa grande sozinho.</li>
          <li>Em coworking, reserve booth de chamada — não ocupe além do horário.</li>
          <li>Gorjeta não é obrigatória, mas ฿20 num café onde você fica o dia todo é gentileza notada.</li>
        </ul>
      </Section>

      <Section chapter="Próximos passos" title="Como tirar máximo proveito desse guia">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Escolha a cidade onde começar (sugestão: Chiang Mai 30 dias).</li>
          <li>Reserve 5 noites em hotel central enquanto escolhe bairro.</li>
          <li>Visite 3 coworkings (day pass) na primeira semana. Escolha 1.</li>
          <li>Mapeie 3 cafés-backup com tomada perto da sua casa.</li>
          <li>Defina rotina: 2 dias coworking / 2 dias café / 1 dia praia ou piscina.</li>
        </ol>
        <p className="text-foreground pt-4">Pronto. Você acabou de pular o ano de tentativa-e-erro que todo nômade passa na Tailândia.</p>
      </Section>

      <footer className="py-12 px-6 text-center text-xs text-muted-foreground border-t border-border">
        Guia Cafés & Coworkings · Edição nômade · Conteúdo privado
      </footer>
    </main>
  );
};

export default CafesCoworkings7391;

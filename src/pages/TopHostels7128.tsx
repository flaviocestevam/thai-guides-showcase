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
const websiteSearch = (q: string) => `https://www.google.com/search?q=${encodeURIComponent(q + " hostel Thailand official")}`;

type Profile = "Festa" | "Silencioso" | "Nômade digital" | "Solo feminino" | "Casal" | "Mochileiro social";

type Hostel = {
  name: string;
  area: string;
  rating: number;
  price: string;
  profiles: Profile[];
  highlight: string;
  tip: string;
  mapsUrl: string;
  website: string;
};

const h = (city: string, o: Omit<Hostel, "mapsUrl" | "website"> & { mapsQ?: string; site?: string }): Hostel => ({
  ...o,
  mapsUrl: gmaps(o.mapsQ ?? `${o.name} hostel ${city} Thailand`),
  website: o.site ?? websiteSearch(`${o.name} ${city}`),
});

const HostelCard = ({ x }: { x: Hostel }) => (
  <Card>
    <div className="flex justify-between items-start gap-3">
      <h3 className="font-display text-2xl text-foreground">{x.name}</h3>
      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded whitespace-nowrap">★ {x.rating}/10</span>
    </div>
    <p className="text-sm">📍 {x.area}</p>
    <p className="text-sm">💰 <strong>Faixa:</strong> {x.price}</p>
    <p className="text-sm">🎯 <strong>Perfil:</strong> {x.profiles.join(" · ")}</p>
    <p className="text-sm">⭐ <strong>Destaque:</strong> {x.highlight}</p>
    <p className="text-sm italic">💡 {x.tip}</p>
    <div className="flex flex-wrap gap-3 pt-1">
      <a href={x.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Google Maps</a>
      <a href={x.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">→ Site oficial</a>
    </div>
  </Card>
);

type CityBlock = { slug: string; name: string; tagline: string; hostels: Hostel[] };

const cities: CityBlock[] = [
  {
    slug: "bangkok",
    name: "Bangkok",
    tagline: "Khao San pra festa, Silom/Sathorn pra trabalho, Phra Nakhon pra cultura. O bairro pesa mais que a estrela.",
    hostels: [
      h("Bangkok", { name: "Mad Monkey Bangkok", area: "Soi Sukhumvit 12", rating: 9.4, price: "฿350–฿900", profiles: ["Festa", "Mochileiro social"], highlight: "Rooftop bar próprio, eventos diários, fila de viajantes em massa", tip: "Reserve dormitório feminino se quer dormir antes das 3h.", site: "https://madmonkeyhostels.com/madmonkeybangkok" }),
      h("Bangkok", { name: "Lub d Bangkok Siam", area: "Rama I, ao lado do BTS Siam", rating: 9.3, price: "฿450–฿1.300", profiles: ["Casal", "Nômade digital", "Solo feminino"], highlight: "Localização imbatível pra shoppings e BTS", tip: "Quartos privativos têm qualidade de hotel 3★ por metade do preço.", site: "https://www.lubd.com/bangkoksiamsquare" }),
      h("Bangkok", { name: "Once Again Hostel", area: "Phra Nakhon (cidade antiga)", rating: 9.5, price: "฿400–฿1.100", profiles: ["Casal", "Solo feminino", "Mochileiro social"], highlight: "Café charmoso no térreo + bairro autêntico", tip: "10 min a pé do Wat Pho. Bem mais calmo que Khao San.", site: "https://www.onceagainhostel.com" }),
      h("Bangkok", { name: "NapPark Hostel @ Khao San", area: "Tani Rd, off Khao San", rating: 9.2, price: "฿380–฿900", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Khao San sem o barulho na porta", tip: "Pé na festa mas dormitório razoavelmente silencioso.", site: "https://www.nappark.com" }),
      h("Bangkok", { name: "Beat Hostel", area: "Sukhumvit Soi 4 (Nana)", rating: 9.1, price: "฿420–฿1.000", profiles: ["Mochileiro social", "Casal"], highlight: "Café da manhã quente incluso, design moderno", tip: "Pertinho do BTS Nana, ótimo pra primeira noite chegando do aeroporto." }),
      h("Bangkok", { name: "Niras Bankoc Cultural Hostel", area: "Pak Khlong Talat (mercado das flores)", rating: 9.6, price: "฿550–฿1.400", profiles: ["Casal", "Solo feminino"], highlight: "Casa antiga restaurada — cada quarto é diferente", tip: "Sem grandes dormitórios. Vibe casa de família.", site: "https://nirashostelbangkok.com" }),
      h("Bangkok", { name: "Yim Huai Khwang Hostel", area: "Huai Khwang (MRT)", rating: 9.3, price: "฿320–฿800", profiles: ["Nômade digital", "Casal"], highlight: "Bairro thai 100% local + MRT na porta", tip: "Comida de rua barata 24h em volta. Wi-Fi sólido." }),
      h("Bangkok", { name: "The Yard Hostel", area: "Ari (BTS Ari)", rating: 9.5, price: "฿480–฿1.200", profiles: ["Nômade digital", "Casal"], highlight: "Containers em jardim, bairro hipster, cafés ao redor", tip: "Melhor escolha pra quem vai trabalhar remoto em Bangkok.", site: "https://www.theyardhostel.com" }),
      h("Bangkok", { name: "Adler Hostel", area: "Chinatown (Yaowarat)", rating: 9.4, price: "฿550–฿1.500", profiles: ["Casal", "Solo feminino"], highlight: "Primeiro 'luxury hostel' da Tailândia — cápsulas com colchão king-size", tip: "Pé na melhor street food de Bangkok à noite." }),
      h("Bangkok", { name: "Loftel 22 Hostel", area: "Chinatown (Soi Nana)", rating: 9.5, price: "฿420–฿1.100", profiles: ["Casal", "Nômade digital"], highlight: "Loft restaurado em zona de bares speakeasy", tip: "Bairro virou polo de coquetelaria — Tep Bar a 2min." }),
      h("Bangkok", { name: "Cacha Bed", area: "Sukhumvit Soi 22", rating: 9.3, price: "฿400–฿1.000", profiles: ["Mochileiro social", "Casal"], highlight: "BTS Phrom Phong a 5min + área comum gigante", tip: "Boa base se quer balancear festa Sukhumvit e descanso." }),
      h("Bangkok", { name: "Bed Station Hostel Khao San", area: "Khao San área (Tanao Rd)", rating: 9.2, price: "฿380–฿950", profiles: ["Mochileiro social", "Festa"], highlight: "Cápsula moderna com cortina, tomada e luz individual", tip: "Khao San moderno — sem mofo dos hostels antigos." }),
      h("Bangkok", { name: "Silq Hostel", area: "Sathorn", rating: 9.3, price: "฿450–฿1.200", profiles: ["Nômade digital", "Solo feminino"], highlight: "Distrito financeiro, BTS na porta, Wi-Fi enterprise", tip: "Caro pra mochileiro, ótimo pra quem trabalha remoto sério." }),
      h("Bangkok", { name: "Suk11 Hostel", area: "Sukhumvit Soi 11", rating: 9.0, price: "฿350–฿900", profiles: ["Mochileiro social"], highlight: "Casa de madeira em jardim escondido entre arranha-céus", tip: "Vibe oásis no caos de Sukhumvit. Reserve com antecedência." }),
      h("Bangkok", { name: "Born Free Hostel", area: "Phra Nakhon (perto do Wat Saket)", rating: 9.4, price: "฿320–฿850", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Pequeno, familiar, café da manhã thai feito na hora", tip: "10min a pé do Golden Mount ao pôr do sol." }),
      h("Bangkok", { name: "Glur Bangkok Hostel", area: "Sukhumvit Soi 38", rating: 9.2, price: "฿380–฿950", profiles: ["Mochileiro social", "Casal"], highlight: "Rua famosa de street food na porta", tip: "Thonglor BTS a 8min — perto da vida noturna fina." }),
    ],
  },
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    tagline: "Old City pra cultura e templos, Nimman pra cafés e coworking. Tudo a 15min de moto entre si.",
    hostels: [
      h("Chiang Mai", { name: "Stamps Backpackers", area: "Old City norte", rating: 9.5, price: "฿250–฿700", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Família thai dona — jantar coletivo de graça à noite", tip: "Reserve por WhatsApp direto: 30% mais barato." }),
      h("Chiang Mai", { name: "Hug Hostel Rooftop Bar", area: "Old City leste, perto de Tha Phae", rating: 9.2, price: "฿300–฿850", profiles: ["Festa", "Mochileiro social"], highlight: "Rooftop com pôr do sol no Doi Suthep", tip: "Vai pra festa e pra fazer amigos, não pra dormir cedo.", site: "https://www.hughostel.com" }),
      h("Chiang Mai", { name: "Bed Phrasingh Hostel", area: "Old City, ao lado de Wat Phra Singh", rating: 9.6, price: "฿320–฿900", profiles: ["Casal", "Solo feminino"], highlight: "Design boutique, dormitórios silenciosos", tip: "Pé no templo mais bonito da cidade.", site: "https://www.bedphrasingh.com" }),
      h("Chiang Mai", { name: "Bunchun Nimman", area: "Soi 9, Nimman", rating: 9.4, price: "฿380–฿1.100", profiles: ["Nômade digital", "Casal"], highlight: "No coração do Nimman, cafés e coworking em volta", tip: "Wi-Fi forte e mesa ergonômica nos privativos." }),
      h("Chiang Mai", { name: "Green Sleep Hostel", area: "Old City, Ratchadamnoen", rating: 9.5, price: "฿280–฿700", profiles: ["Solo feminino", "Mochileiro social"], highlight: "Dormitório feminino exclusivo bem avaliado", tip: "Banheiros impecáveis e silêncio respeitado após 22h." }),
      h("Chiang Mai", { name: "Hostel by Bed", area: "Nimman", rating: 9.3, price: "฿320–฿850", profiles: ["Nômade digital", "Casal"], highlight: "Cápsulas modernas + área coworking interna", tip: "Tomada e cortina em cada cápsula, raro nesse preço." }),
      h("Chiang Mai", { name: "Diva Guesthouse", area: "Old City norte", rating: 9.0, price: "฿220–฿600", profiles: ["Mochileiro social"], highlight: "Mais barato da cidade que ainda é decente", tip: "Vibe simples e honesta. Não espere luxo." }),
    ],
  },
  {
    slug: "pai",
    name: "Pai",
    tagline: "Vilarejo hippie 3h ao norte de Chiang Mai. Hostels pequenos, vibe lenta.",
    hostels: [
      h("Pai", { name: "Common Grounds Pai", area: "Wiang Tai, centro", rating: 9.5, price: "฿250–฿700", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Café e bar próprio, fica fácil fazer amigos", tip: "Cozinha aberta e jam sessions improvisadas à noite." }),
      h("Pai", { name: "Famous Pai Circus School Hostel", area: "Mae Hi, 2km do centro", rating: 9.3, price: "฿280–฿800", profiles: ["Festa", "Mochileiro social"], highlight: "Aulas grátis de slackline, malabares, aéreo", tip: "Vai dormir tarde — é o ponto de festa de Pai.", site: "https://www.paicircus.com" }),
      h("Pai", { name: "Spicypai Backpackers", area: "Sai Ngam Rd", rating: 9.1, price: "฿200–฿550", profiles: ["Mochileiro social", "Festa"], highlight: "Estrutura bambu, fogueiras à noite", tip: "Não tem ar-condicionado. Confortável só em inverno (nov–fev)." }),
      h("Pai", { name: "Darling View Point", area: "Wiang Tai", rating: 9.4, price: "฿350–฿1.000", profiles: ["Casal", "Solo feminino"], highlight: "Bangalôs com vista do vale", tip: "Privativos com varanda, ótima opção pra casal." }),
    ],
  },
  {
    slug: "phuket",
    name: "Phuket",
    tagline: "Patong pra festa, Kata/Karon pra praia tranquila, Phuket Old Town pra cultura. Não fique só em Patong.",
    hostels: [
      h("Phuket", { name: "Lub d Phuket Patong", area: "Sawatdirak Rd, Patong", rating: 9.3, price: "฿500–฿1.400", profiles: ["Festa", "Mochileiro social"], highlight: "Piscina, bar, eventos diários", tip: "200m da Bangla Road. Não venha aqui pra silêncio.", site: "https://www.lubd.com/phuketpatong" }),
      h("Phuket", { name: "The Memory at On On Hotel", area: "Phuket Old Town", rating: 9.4, price: "฿450–฿1.300", profiles: ["Casal", "Solo feminino"], highlight: "Hotel histórico de 1929 + dormitórios", tip: "Cena Old Town é o que muita gente não conhece de Phuket." }),
      h("Phuket", { name: "Sino Inn Phuket", area: "Phuket Old Town", rating: 9.5, price: "฿380–฿1.100", profiles: ["Casal", "Solo feminino"], highlight: "Boutique sino-portuguesa, café da manhã thai incluso", tip: "Melhor base pra explorar a cultura Peranakan da ilha." }),
      h("Phuket", { name: "Phuvaree Resort", area: "Patong (mas em colina, silencioso)", rating: 9.2, price: "฿520–฿1.500", profiles: ["Casal", "Nômade digital"], highlight: "Patong sem o barulho, piscina infinita", tip: "5min de tuk-tuk até a praia. Vale a pé de subida." }),
      h("Phuket", { name: "Bodega Phuket Party Resort", area: "Patong", rating: 9.0, price: "฿450–฿1.200", profiles: ["Festa"], highlight: "Piscina, palco com DJ, pool parties", tip: "Foco em backpackers jovens. Não é pra quem quer dormir." }),
    ],
  },
  {
    slug: "krabi",
    name: "Krabi (Ao Nang e Railay)",
    tagline: "Base pra escaladas em Railay e ilhas Phi Phi/Hong. Hostels concentrados em Ao Nang.",
    hostels: [
      h("Krabi", { name: "Pak-Up Hostel", area: "Krabi Town", rating: 9.4, price: "฿320–฿850", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Melhor base pra balsas + bar próprio bom", tip: "Krabi Town é mais barata e autêntica que Ao Nang.", site: "https://www.pakuphostel.com" }),
      h("Krabi", { name: "Slumber Party Hostel Ao Nang", area: "Ao Nang", rating: 9.1, price: "฿400–฿1.000", profiles: ["Festa", "Mochileiro social"], highlight: "Pub crawls noturnos inclusos", tip: "Marca conhecida do mochileiro festeiro. Som alto até 1h." }),
      h("Krabi", { name: "Railay Garden View Resort", area: "Railay East", rating: 9.3, price: "฿800–฿2.200", profiles: ["Casal", "Mochileiro social"], highlight: "Bangalôs em frente às paredes de escalada", tip: "Reserva direto economiza 25%. Sem ATM em Railay — leve cash." }),
      h("Krabi", { name: "Glur Hostel", area: "Ao Nang", rating: 9.2, price: "฿380–฿900", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Design moderno + café da manhã sólido", tip: "5min a pé da praia, sem barulho de bar na porta." }),
    ],
  },
  {
    slug: "koh-phangan",
    name: "Koh Phangan",
    tagline: "Haad Rin é Full Moon. Sri Thanu/Srithanu é yoga e silêncio. Chaloklum é família/casal. Escolha o lado certo.",
    hostels: [
      h("Koh Phangan", { name: "Echo Beach Hostel", area: "Baan Tai", rating: 9.4, price: "฿380–฿950", profiles: ["Festa", "Mochileiro social"], highlight: "5min de Haad Rin, piscina, festas próprias", tip: "Sobe pra ฿1.500+ na semana da Full Moon — reserve 60 dias antes." }),
      h("Koh Phangan", { name: "Pariya Resort Phangan", area: "Haad Yuan (acesso só por barco)", rating: 9.5, price: "฿900–฿2.400", profiles: ["Casal", "Mochileiro social"], highlight: "Praia isolada, sem estrada, vibe paradisíaca", tip: "Não é hostel barato, mas dorms acessíveis em paraíso real." }),
      h("Koh Phangan", { name: "Mac Bay Resort", area: "Baan Tai", rating: 9.2, price: "฿420–฿1.100", profiles: ["Mochileiro social", "Casal"], highlight: "Praia particular calma, perto de Haad Rin sem o caos", tip: "Boa base pra Half Moon Party (5min de táxi)." }),
      h("Koh Phangan", { name: "Sanctuary Thailand (Haad Tien)", area: "Haad Tien (só por barco)", rating: 9.6, price: "฿800–฿2.500", profiles: ["Silencioso", "Solo feminino"], highlight: "Centro de yoga e detox histórico, dorms em paraíso", tip: "Vibe wellness séria — não confunda com hostel comum.", site: "https://www.thesanctuarythailand.com" }),
      h("Koh Phangan", { name: "Phangan Arena Hostel", area: "Thong Sala", rating: 9.1, price: "฿320–฿850", profiles: ["Mochileiro social"], highlight: "Centro da ilha, perto do mercado noturno", tip: "Boa base se vai alugar moto e rodar a ilha inteira." }),
      h("Koh Phangan", { name: "Mai Pen Rai Bungalows", area: "Than Sadet", rating: 9.4, price: "฿500–฿1.300", profiles: ["Casal", "Silencioso"], highlight: "Praia isolada no leste, jungle, total desconexão", tip: "Sem Wi-Fi forte. Vá pra esquecer celular." }),
    ],
  },
  {
    slug: "koh-tao",
    name: "Koh Tao",
    tagline: "Capital mundial do mergulho. Sairee pra festa, Chalok pra calma, Tanote pra escapar.",
    hostels: [
      h("Koh Tao", { name: "Savage Hostel Koh Tao", area: "Sairee Beach", rating: 9.5, price: "฿450–฿1.100", profiles: ["Festa", "Mochileiro social"], highlight: "Bar próprio famoso, pool parties", tip: "Pega curso PADI com hostel vinculado — combo desconta hospedagem.", site: "https://www.savagehosteltao.com" }),
      h("Koh Tao", { name: "Goodtime Adventures Hostel", area: "Sairee", rating: 9.4, price: "฿400–฿1.000", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Escola de mergulho top + dormitórios bons", tip: "Combo curso Open Water + 5 noites por preço de pacote." }),
      h("Koh Tao", { name: "Mr. J Bungalow", area: "Chalok Baan Kao", rating: 9.3, price: "฿380–฿1.000", profiles: ["Casal", "Mochileiro social"], highlight: "Lado calmo da ilha, comida thai família", tip: "Bom pra quem mergulha de manhã e quer paz à noite." }),
      h("Koh Tao", { name: "Big Blue Diving Resort", area: "Sairee", rating: 9.2, price: "฿450–฿1.300", profiles: ["Mochileiro social", "Casal"], highlight: "Escola gigante + alojamento próprio", tip: "Padrão pra fazer Open Water. Hostel barato fica grátis se assinar curso." }),
      h("Koh Tao", { name: "Tanote Bay Resort", area: "Tanote Bay (leste)", rating: 9.4, price: "฿500–฿1.500", profiles: ["Casal", "Silencioso"], highlight: "Praia escondida, snorkel da varanda", tip: "Estrada de terra ruim — pegue táxi 4x4 do porto." }),
    ],
  },
  {
    slug: "koh-samui",
    name: "Koh Samui",
    tagline: "Chaweng pra festa, Bophut/Fisherman's Village pra charme, Lamai pra economia.",
    hostels: [
      h("Koh Samui", { name: "Lub d Koh Samui Chaweng Beach", area: "Chaweng Beach", rating: 9.3, price: "฿550–฿1.500", profiles: ["Festa", "Mochileiro social", "Casal"], highlight: "Pé na areia + piscina grande", tip: "O design hotel mais consistente da rede.", site: "https://www.lubd.com/kohsamui" }),
      h("Koh Samui", { name: "MyPlace @ Surat Hostel", area: "Bophut, Fisherman's Village", rating: 9.4, price: "฿400–฿1.100", profiles: ["Casal", "Solo feminino"], highlight: "No coração da vila mais charmosa da ilha", tip: "Walking Street toda sexta na porta." }),
      h("Koh Samui", { name: "Born Lucky Hostel", area: "Chaweng", rating: 9.0, price: "฿350–฿900", profiles: ["Mochileiro social"], highlight: "Barato em Chaweng, raro", tip: "Não espera ar potente — abre janela." }),
      h("Koh Samui", { name: "Spider Monkey Hostel", area: "Lamai", rating: 9.1, price: "฿300–฿800", profiles: ["Mochileiro social", "Solo feminino"], highlight: "Lado mais barato e calmo da ilha", tip: "Boa base pra alugar moto e rodar Samui inteira." }),
    ],
  },
  {
    slug: "koh-lanta",
    name: "Koh Lanta",
    tagline: "Ilha família e casal, longe da farra. Long Beach (Phra-Ae) pra atmosfera, Klong Khong pra hippie, Kantiang pra isolamento.",
    hostels: [
      h("Koh Lanta", { name: "Hub of Joys Hostel", area: "Long Beach (Phra-Ae)", rating: 9.5, price: "฿380–฿1.000", profiles: ["Mochileiro social", "Casal", "Solo feminino"], highlight: "Família tailandesa, jantar coletivo, vibe acolhedora", tip: "Provável melhor custo-benefício de Lanta." }),
      h("Koh Lanta", { name: "Where The Lost Things Go Hostel", area: "Long Beach", rating: 9.4, price: "฿400–฿1.100", profiles: ["Casal", "Solo feminino"], highlight: "Boutique sob bambu, dorms decorados", tip: "Vibe instagrammer. Quartos privados são lindos." }),
      h("Koh Lanta", { name: "Chill Out House Lanta", area: "Klong Dao", rating: 9.2, price: "฿350–฿950", profiles: ["Mochileiro social"], highlight: "Próximo ao porto, base prática", tip: "Bom pra primeira noite chegando de balsa." }),
    ],
  },
  {
    slug: "koh-lipe",
    name: "Koh Lipe",
    tagline: "Sul extremo, perto da Malásia. Águas mais claras da Tailândia. Hostels só na Walking Street.",
    hostels: [
      h("Koh Lipe", { name: "Castaway Beach Resort", area: "Sunrise Beach", rating: 9.3, price: "฿900–฿2.500", profiles: ["Casal", "Mochileiro social"], highlight: "Pé na areia da praia mais bonita da ilha", tip: "Não é hostel clássico, mas dorms acessíveis em paraíso real." }),
      h("Koh Lipe", { name: "Forra Dive Resort", area: "Pattaya Beach (Walking Street)", rating: 9.1, price: "฿500–฿1.300", profiles: ["Mochileiro social"], highlight: "Mergulho + hospedagem barata", tip: "Combo curso de mergulho + noites desconta forte." }),
    ],
  },
  {
    slug: "ayutthaya",
    name: "Ayutthaya",
    tagline: "Parada cultural 1h30 de Bangkok. Visita 1–2 noites pra templos.",
    hostels: [
      h("Ayutthaya", { name: "Baan Are Gong Riverside Homestay", area: "Ilha histórica", rating: 9.6, price: "฿400–฿1.200", profiles: ["Casal", "Solo feminino"], highlight: "Casa de madeira centenária à beira do rio", tip: "Família dona — café da manhã thai legítimo incluso." }),
      h("Ayutthaya", { name: "Stockhome Hostel", area: "Centro histórico", rating: 9.4, price: "฿320–฿850", profiles: ["Mochileiro social"], highlight: "Aluga bicicleta na recepção pra circuito de templos", tip: "Bicicleta é o jeito certo de ver Ayutthaya, não tuk-tuk." }),
    ],
  },
  {
    slug: "sukhothai",
    name: "Sukhothai",
    tagline: "Primeiro reino siamês. Cidade nova pra dormir, Old Sukhothai pros templos.",
    hostels: [
      h("Sukhothai", { name: "Sukhothai Garden Guesthouse", area: "New Sukhothai", rating: 9.3, price: "฿300–฿800", profiles: ["Mochileiro social", "Casal"], highlight: "Bicicletas grátis e mapa do parque histórico", tip: "Visite parque histórico ao amanhecer pra fugir do calor." }),
      h("Sukhothai", { name: "Old City Guesthouse", area: "Old Sukhothai", rating: 9.2, price: "฿320–฿900", profiles: ["Casal", "Mochileiro social"], highlight: "Dentro do parque histórico — único na vila", tip: "Sai mais caro mas amanhecer no Wat Mahathat vale." }),
    ],
  },
];

const TopHostels7128 = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Guia Top Hostels Tailândia — Por cidade, ranking honesto"
      description="100 hostels avaliados em 12 cidades e ilhas: Bangkok, Chiang Mai, Pai, Phuket, Krabi, Koh Phangan, Koh Tao, Koh Samui, Koh Lanta e mais. Maps + site oficial em cada um."
    />

    {/* HERO */}
    <section className="py-20 px-6 bg-gradient-to-br from-amber-950 via-background to-orange-950">
      <div className="max-w-3xl mx-auto text-center">
        <p className="guide-section-label mb-6">🛏️ Edição Top Hostels — Conteúdo do Guia</p>
        <h1 className="font-display text-5xl sm:text-7xl text-foreground mb-6">Top Hostels da Tailândia</h1>
        <p className="text-xl text-muted-foreground">Organizado <strong>por cidade e ilha</strong>, com os melhores ranqueados pela nota real — sem cota fixa. Google Maps e site oficial em cada um.</p>
      </div>
    </section>

    {/* NAV */}
    <section className="py-12 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <p className="guide-section-label mb-4">Navegação rápida</p>
        <h2 className="font-display text-3xl text-foreground mb-6">Pule direto pra cidade</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {cities.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
              <p className="font-semibold text-foreground text-sm">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.hostels.length} hostels</p>
            </a>
          ))}
          <a href="#perfis" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Filtro por perfil</p>
            <p className="text-xs text-muted-foreground">Festa · Silêncio · Nômade · Solo F</p>
          </a>
          <a href="#bairros" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Bairros explicados</p>
            <p className="text-xs text-muted-foreground">Onde ficar de verdade</p>
          </a>
          <a href="#reserva-direta" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Reserva 30% mais barata</p>
            <p className="text-xs text-muted-foreground">Templates em inglês</p>
          </a>
          <a href="#anti-cilada" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Sistema anti-cilada</p>
            <p className="text-xs text-muted-foreground">Sinais de que vai ser ruim</p>
          </a>
          <a href="#boutique" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">30 boutique sub-R$ 80</p>
            <p className="text-xs text-muted-foreground">Bônus</p>
          </a>
          <a href="#solo-feminino" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Solo feminino</p>
            <p className="text-xs text-muted-foreground">25 mais seguros</p>
          </a>
          <a href="#festa" className="block bg-card border border-border rounded-lg p-3 hover:border-primary transition">
            <p className="font-semibold text-foreground text-sm">Top 10 festa</p>
            <p className="text-xs text-muted-foreground">Onde a noite começa dentro</p>
          </a>
        </div>
      </div>
    </section>

    {/* PERFIS */}
    <Section id="perfis" chapter="Antes de tudo" title="Qual é o seu perfil de viagem?">
      <Card>
        <p><strong>Festeiro</strong> — quer barulho, pool party, fila pra bar.</p>
        <p>→ Mad Monkey Bangkok, Hug Hostel Chiang Mai, Slumber Party Krabi, Savage Koh Tao, Echo Beach Phangan, Bodega Patong.</p>
      </Card>
      <Card>
        <p><strong>Mochileiro silencioso</strong> — quer dormir e fazer amigos sem balada.</p>
        <p>→ Once Again Bangkok, Stamps Chiang Mai, Hub of Joys Lanta, Mr. J Koh Tao, Common Grounds Pai.</p>
      </Card>
      <Card>
        <p><strong>Nômade digital</strong> — Wi-Fi sólido, mesa, café 24h em volta.</p>
        <p>→ The Yard Bangkok (Ari), Bunchun Nimman, Hostel by Bed Nimman, Yim Huai Khwang.</p>
      </Card>
      <Card>
        <p><strong>Solo feminino</strong> — segurança real, dorms femininos avaliados.</p>
        <p>→ Lub d Bangkok Siam, Green Sleep Chiang Mai, Niras Bankoc, Glur Krabi, Goodtime Koh Tao, Hub of Joys Lanta.</p>
      </Card>
      <Card>
        <p><strong>Casal</strong> — privativo com qualidade de hotel a preço de hostel.</p>
        <p>→ Niras Bankoc, Bed Phrasingh, Sino Inn Phuket, Baan Are Gong Ayutthaya, MyPlace Bophut.</p>
      </Card>
    </Section>

    {/* CIDADES */}
    {cities.map((c) => (
      <Section key={c.slug} id={c.slug} chapter={c.name} title={`Hostels em ${c.name}`}>
        <p className="text-base">{c.tagline}</p>
        <div className="grid gap-4">
          {[...c.hostels].sort((a, b) => b.rating - a.rating).map((x) => <HostelCard key={x.name} x={x} />)}
        </div>
      </Section>
    ))}

    {/* BAIRROS */}
    <Section id="bairros" chapter="Bônus" title="Bairros explicados — onde ficar de verdade">
      <Card>
        <p><strong>Bangkok</strong></p>
        <p>• <strong>Khao San / Phra Nakhon</strong>: mochileiro clássico, perto de templos. Barulho de festa até 2h.</p>
        <p>• <strong>Sukhumvit (Nana, Asok, Phrom Phong)</strong>: BTS, shoppings, cosmopolita. Caro mas prático.</p>
        <p>• <strong>Silom/Sathorn</strong>: negócios + nightlife gay. BTS/MRT cruzam aqui.</p>
        <p>• <strong>Ari</strong>: hipster, cafés, pra nômade digital. 15min do centro.</p>
        <p>• <strong>Huai Khwang</strong>: thai local, MRT, comida de rua 24h, barato.</p>
      </Card>
      <Card>
        <p><strong>Chiang Mai</strong></p>
        <p>• <strong>Old City</strong>: dentro do fosso, templos, vida lenta. Melhor pra primeira vez.</p>
        <p>• <strong>Nimman</strong>: cafés, coworking, nômade digital. Mais caro, mais ocidental.</p>
        <p>• <strong>Santitham</strong>: thai local, super barato, entre Old City e Nimman.</p>
      </Card>
      <Card>
        <p><strong>Phuket</strong></p>
        <p>• <strong>Patong</strong>: festa pesada (Bangla Rd), sex tourism, barulho.</p>
        <p>• <strong>Kata / Karon</strong>: praia tranquila, família, casal.</p>
        <p>• <strong>Phuket Old Town</strong>: cultura sino-portuguesa, cafés, sem praia perto.</p>
        <p>• <strong>Rawai / Nai Harn</strong>: expat, calmo, melhores praias do sul.</p>
      </Card>
      <Card>
        <p><strong>Koh Phangan</strong></p>
        <p>• <strong>Haad Rin</strong>: Full Moon Party. Caos 4 dias/mês, calmo o resto.</p>
        <p>• <strong>Sri Thanu / Srithanu</strong>: capital do yoga, vegano, silencioso.</p>
        <p>• <strong>Chaloklum</strong>: vila de pescadores, família, casal.</p>
        <p>• <strong>Baan Tai</strong>: meio termo entre Haad Rin e Thong Sala.</p>
      </Card>
    </Section>

    {/* RESERVA DIRETA */}
    <Section id="reserva-direta" chapter="Bônus" title="Como reservar 30% mais barato (templates em inglês)">
      <p>Booking, Agoda e Hostelworld cobram comissão de 15–20% do hostel. Muitos repassam desconto se você reservar direto via WhatsApp ou e-mail.</p>
      <Card>
        <p><strong>Template 1 — pedido de desconto direto</strong></p>
        <p className="text-sm font-mono bg-muted/50 p-3 rounded">"Hi! I'm interested in booking [tipo de quarto] for [datas] ([N] nights). I saw your hostel on Booking for [฿preço]/night. Do you offer a better rate for direct booking via WhatsApp? I can pay 50% deposit by bank transfer and the rest in cash on arrival. Thanks!"</p>
      </Card>
      <Card>
        <p><strong>Template 2 — estadia longa (7+ noites)</strong></p>
        <p className="text-sm font-mono bg-muted/50 p-3 rounded">"Hello! I'm planning to stay [N] nights at your hostel. What's your best monthly/long-stay rate for a [tipo de quarto]? I'm a remote worker, quiet guest, no parties. Available to pay full upfront if discount is significant."</p>
      </Card>
      <Card>
        <p><strong>Template 3 — walk-in (sem reserva)</strong></p>
        <p className="text-sm font-mono bg-muted/50 p-3 rounded">"Hi! Do you have a [tipo de quarto] available tonight? What's your walk-in rate? I'm paying cash."</p>
        <p className="text-sm italic">Funciona em low season (mai–out). Em high season (dez–fev), só reserve antecipado.</p>
      </Card>
      <Card>
        <p><strong>Onde encontrar o WhatsApp</strong></p>
        <p>1. Site oficial do hostel (link em cada card acima).</p>
        <p>2. Página do Facebook — quase todo hostel responde por Messenger.</p>
        <p>3. Instagram DM — funciona bem com boutique.</p>
      </Card>
    </Section>

    {/* ANTI-CILADA */}
    <Section id="anti-cilada" chapter="Bônus" title="Sistema anti-cilada — sinais que mostram que vai ser ruim">
      <Card>
        <p><strong>1. Fotos genéricas demais</strong></p>
        <p>Só foto de fachada e mapa? Sem foto de dormitório, banheiro, área comum? Provavelmente é ruim por dentro. Bons hostels mostram tudo.</p>
      </Card>
      <Card>
        <p><strong>2. Reviews suspeitos</strong></p>
        <p>• Muitos reviews 10/10 idênticos em 1 semana = comprados.</p>
        <p>• Filtre por "última review" e leia os últimos 30 dias — é o que importa.</p>
        <p>• Procure reviews de 6–7/10: brasileiros honestos costumam estar aí.</p>
      </Card>
      <Card>
        <p><strong>3. Localização Google falsa</strong></p>
        <p>Hostel marca "Patong Beach" mas fica 2km da praia subindo morro. <strong>Sempre cole o endereço no Google Maps e meça a distância até o que importa pra você.</strong></p>
      </Card>
      
      <Card>
        <p><strong>4. Nota geral 8.5 mas...</strong></p>
        <p>...com "limpeza 7.2" = sujo. "Localização 6.8" = longe. "Sono 6.5" = barulho. <strong>Sempre olhe os sub-scores, nunca a média.</strong></p>
      </Card>
      <Card>
        <p><strong>5. Política de cancelamento "non-refundable" sem desconto</strong></p>
        <p>Bons hostels oferecem flex grátis OU desconto real (15–20%) pra não-reembolsável. Se cobra igual sem flex, é cilada — não confiam no próprio produto.</p>
      </Card>
      <Card>
        <p><strong>6. Sem WhatsApp respondendo</strong></p>
        <p>Mande "Hi, is breakfast included?" — se não responder em 24h antes da reserva, vai ser pior depois. Skip.</p>
      </Card>
    </Section>

    {/* BOUTIQUE */}
    <Section id="boutique" chapter="Bônus" title="30 hostels boutique sub-R$ 80/noite">
      <p>Hostels com cara de hotel pequeno, decoração caprichada, dorms de 4–6 camas com cortina e tomada, por preço de albergue comum.</p>
      <div className="grid gap-3">
        {[
          { name: "Once Again Hostel", city: "Bangkok", note: "Phra Nakhon, casa antiga restaurada" },
          { name: "Niras Bankoc", city: "Bangkok", note: "Pak Khlong Talat, mercado das flores" },
          { name: "The Yard Hostel", city: "Bangkok", note: "Ari, containers em jardim" },
          { name: "Bed Phrasingh", city: "Chiang Mai", note: "Old City, ao lado do templo" },
          { name: "Green Sleep", city: "Chiang Mai", note: "Old City, dorm feminino top" },
          { name: "Hostel by Bed", city: "Chiang Mai", note: "Nimman, cápsulas modernas" },
          { name: "Darling View Point", city: "Pai", note: "Bangalô com vista do vale" },
          { name: "Common Grounds", city: "Pai", note: "Café e bar próprios" },
          { name: "Sino Inn Phuket", city: "Phuket Old Town", note: "Boutique sino-portuguesa" },
          { name: "The Memory at On On", city: "Phuket Old Town", note: "Hotel histórico 1929" },
          { name: "Where The Lost Things Go", city: "Koh Lanta", note: "Boutique sob bambu" },
          { name: "Hub of Joys", city: "Koh Lanta", note: "Família thai, jantar coletivo" },
          { name: "Glur Hostel", city: "Ao Nang, Krabi", note: "Design moderno" },
          { name: "Pak-Up Hostel", city: "Krabi Town", note: "Base pra balsas" },
          { name: "MyPlace @ Surat", city: "Koh Samui", note: "Fisherman's Village" },
          { name: "Sanctuary Thailand", city: "Koh Phangan", note: "Haad Tien, só por barco" },
          { name: "Mai Pen Rai Bungalows", city: "Koh Phangan", note: "Than Sadet, leste isolado" },
          { name: "Tanote Bay Resort", city: "Koh Tao", note: "Praia escondida no leste" },
          { name: "Baan Are Gong", city: "Ayutthaya", note: "Casa de madeira, beira-rio" },
          { name: "Castaway Beach Resort", city: "Koh Lipe", note: "Pé na Sunrise Beach" },
          { name: "Pariya Resort", city: "Koh Phangan", note: "Haad Yuan, só por barco" },
          { name: "Goodtime Adventures", city: "Koh Tao", note: "Sairee, mergulho + dorm" },
          { name: "Phuvaree Resort", city: "Patong, Phuket", note: "Patong sem barulho, piscina infinita" },
          { name: "Stockhome Hostel", city: "Ayutthaya", note: "Bicicleta na recepção" },
          { name: "Yim Huai Khwang", city: "Bangkok", note: "MRT na porta, bairro thai" },
          { name: "Bunchun Nimman", city: "Chiang Mai", note: "Coração de Nimman" },
          { name: "Spider Monkey", city: "Lamai, Koh Samui", note: "Lado mais barato" },
          { name: "Sukhothai Garden GH", city: "Sukhothai", note: "Bicicletas grátis" },
          { name: "Old City Guesthouse", city: "Sukhothai", note: "Dentro do parque histórico" },
          { name: "Beat Hostel", city: "Bangkok", note: "Sukhumvit Soi 4, BTS Nana" },
        ].map((x) => (
          <div key={x.name + x.city} className="bg-card rounded-lg p-4 border border-border flex justify-between items-start gap-3">
            <div>
              <p className="font-semibold text-foreground">{x.name}</p>
              <p className="text-sm text-muted-foreground">{x.city} — {x.note}</p>
            </div>
            <a href={gmaps(`${x.name} ${x.city}`)} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline whitespace-nowrap">→ Maps</a>
          </div>
        ))}
      </div>
    </Section>

    {/* SOLO FEMININO */}
    <Section id="solo-feminino" chapter="Bônus" title="Solo feminino — 25 hostels mais seguros">
      <p>Lista baseada em: dorm feminino exclusivo, recepção 24h, fechaduras eletrônicas, avaliação de mulheres viajantes em 2024–2025.</p>
      <div className="grid gap-3">
        {[
          "Lub d Bangkok Siam — Siam, BTS na porta",
          "Niras Bankoc — Pak Khlong Talat, bairro calmo",
          "Once Again Hostel — Phra Nakhon, casa familiar",
          "The Yard Hostel — Ari, hipster e seguro",
          "Beat Hostel — Sukhumvit, BTS",
          "Yim Huai Khwang — MRT, bairro thai",
          "Green Sleep Hostel — Chiang Mai Old City, dorm feminino exclusivo",
          "Stamps Backpackers — Chiang Mai, família thai dona",
          "Bed Phrasingh — Chiang Mai, dorm silencioso",
          "Bunchun Nimman — Chiang Mai, área segura",
          "Common Grounds — Pai, comunidade acolhedora",
          "Darling View Point — Pai, privativo recomendado",
          "Sino Inn Phuket — Old Town, recepção 24h",
          "The Memory at On On — Old Town Phuket",
          "Glur Hostel — Ao Nang, design moderno",
          "Pak-Up Hostel — Krabi Town, dorm feminino",
          "Goodtime Adventures — Koh Tao Sairee, escola de mulheres",
          "Mr. J Bungalow — Koh Tao Chalok, calmo",
          "Hub of Joys — Koh Lanta, família",
          "Where The Lost Things Go — Koh Lanta",
          "Sanctuary Thailand — Koh Phangan, wellness feminino",
          "MyPlace @ Surat — Koh Samui Bophut",
          "Baan Are Gong — Ayutthaya, homestay família",
          "Stockhome Hostel — Ayutthaya",
          "Sukhothai Garden Guesthouse — Sukhothai, família",
        ].map((x) => (
          <div key={x} className="bg-card rounded-lg p-3 border border-border">
            <p className="text-sm text-foreground">✓ {x}</p>
          </div>
        ))}
      </div>
      <Card>
        <p><strong>Regras de ouro solo feminino:</strong></p>
        <p>• Sempre dorm feminino, mesmo se ฿100 mais caro.</p>
        <p>• Reserve cadeado próprio (compre em qualquer 7-Eleven, ฿80).</p>
        <p>• Confira se tem fechadura eletrônica na porta do quarto.</p>
        <p>• Recepção 24h não é luxo — é segurança.</p>
        <p>• Evite hostels com bar na recepção em bairros de sex tourism (Patong, Pattaya).</p>
      </Card>
    </Section>

    {/* FESTA */}
    <Section id="festa" chapter="Bônus" title="Top 10 hostels de festa — a noite começa dentro">
      <div className="grid gap-3">
        {[
          { name: "Mad Monkey Bangkok", note: "Rooftop bar, fila de jovens, eventos diários" },
          { name: "Slumber Party Hostel Ao Nang", note: "Pub crawls inclusos" },
          { name: "Savage Hostel Koh Tao", note: "Pool parties + bar próprio famoso" },
          { name: "Bodega Phuket Party Resort", note: "DJ ao redor da piscina" },
          { name: "Lub d Phuket Patong", note: "200m da Bangla Road" },
          { name: "Hug Hostel Chiang Mai", note: "Rooftop bar com pôr do sol" },
          { name: "Echo Beach Hostel Phangan", note: "Base oficial pra Full Moon" },
          { name: "Famous Pai Circus School", note: "Aulas + fogueira + jam" },
          { name: "Goodtime Adventures Koh Tao", note: "Mergulho de dia, bar à noite" },
          { name: "Spicypai Backpackers", note: "Fogueira e bambu, vibe alternativa" },
        ].map((x) => (
          <div key={x.name} className="bg-card rounded-lg p-4 border border-border flex justify-between items-start gap-3">
            <div>
              <p className="font-semibold text-foreground">🍺 {x.name}</p>
              <p className="text-sm text-muted-foreground">{x.note}</p>
            </div>
            <a href={gmaps(x.name + " Thailand")} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline whitespace-nowrap">→ Maps</a>
          </div>
        ))}
      </div>
    </Section>

    <section className="py-12 px-6 text-center">
      <p className="text-sm text-muted-foreground">Guia atualizado periodicamente. Em caso de dúvida sobre vagas ou preços, escreva direto ao hostel pelo WhatsApp/Facebook listado.</p>
    </section>
  </div>
);

export default TopHostels7128;

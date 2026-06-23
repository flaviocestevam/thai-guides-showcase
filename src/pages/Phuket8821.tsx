import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
} from "lucide-react";

// ============================================================================
// GUIA PHUKET — entrega completa do que a página de vendas promete
// Rota privada: /phuket8821
// ============================================================================

// Helper: link para Google Maps de qualquer lugar/região citado
const gmap = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q + ", Phuket, Thailand")}`;

const G = ({ q, children, className = "" }: { q?: string; children: React.ReactNode; className?: string }) => {
  const query = q ?? (typeof children === "string" ? children : "");
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span>{children}</span>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ", Phuket, Thailand")}`}
        target="_blank"
        rel="noreferrer"
        title={`Abrir ${query} no Google Maps`}
        className="inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition no-underline align-middle"
      >
        📍 Mapa
      </a>
    </span>
  );
};

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "9 bairros decodificados", icon: Home },
  { id: "praias", label: "Praias por perfil", icon: Waves },
  { id: "hospedagem", label: "Hospedagem por faixa", icon: Sparkles },
  { id: "transfer", label: "Transfer / Bolt / táxi", icon: MapPin },
  { id: "moto", label: "Scooter sem golpe", icon: Bike },
  { id: "daytrips", label: "Day-trips de barco", icon: Ship },
  { id: "comida", label: "Onde o tailandês come", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros 3 / 5 / 7 / 10 dias", icon: Sun },
  { id: "antigolpe", label: "12 golpes + resposta", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra de tours", icon: XCircle },
  { id: "mapa", label: "Mapa Google interativo", icon: MapIcon },
  { id: "orcamento", label: "Orçamento honesto", icon: Wallet },
];

// ---- 9 BAIRROS ----
const BAIRROS = [
  {
    nome: "Patong", veredito: "EVITE — exceto se quer balada",
    cor: "border-red-500/40 bg-red-500/5",
    perfil: "Solteiro 22 anos focado em balada, despedida de solteiro.",
    evite: "Lua de mel, família com criança, casal sossego, quem quer dormir antes das 3h.",
    praia: "Patong Beach (3 km) — média, lotada, jet-ski golpe.",
    quanto: "Hostel R$ 45 / hotel turista R$ 220 / resort R$ 600.",
    quando: "Só se Bangla Road for o ponto principal da sua viagem.",
  },
  {
    nome: "Kata", veredito: "RECOMENDADO — melhor custo-benefício",
    cor: "border-emerald-500/40 bg-emerald-500/5",
    perfil: "Casal, primeira viagem, família com filho 8+.",
    evite: "Quem quer luxo absoluto (Bang Tao é melhor) ou silêncio total (vá Nai Harn).",
    praia: "Kata Beach + Kata Noi — areia branca, mar calmo nov-abr.",
    quanto: "Hostel R$ 55 / hotel bom R$ 280 / boutique R$ 550.",
    quando: "Padrão pra primeira ida a Phuket. Difícil errar.",
  },
  {
    nome: "Karon", veredito: "OK — primo mais barato de Kata",
    cor: "border-amber-500/40 bg-amber-500/5",
    perfil: "Mochileiro maduro, casal economizando, família budget.",
    evite: "Quem quer vida noturna ou restaurante refinado (vá Kata).",
    praia: "Karon Beach (3 km) — segunda maior da ilha, ondas mai-out.",
    quanto: "Hostel R$ 45 / hotel R$ 200 / resort R$ 480.",
    quando: "Quando Kata está caro ou cheio. Diferença R$ 60-80/dia.",
  },
  {
    nome: "Bang Tao", veredito: "PREMIUM — luxo discreto",
    cor: "border-violet-500/40 bg-violet-500/5",
    perfil: "Lua de mel, casal premium, família alto padrão.",
    evite: "Quem quer andar a pé a tudo (é grande, distâncias longas).",
    praia: "Bang Tao Beach (6 km) — quase deserta, areia fina.",
    quanto: "Resort 4★ R$ 700 / 5★ R$ 1.500 / pool villa R$ 3.000+.",
    quando: "Lua de mel sem agito, alto padrão pelo preço de Patong médio.",
  },
  {
    nome: "Surin", veredito: "BOA — entre Bang Tao e Kamala",
    cor: "border-cyan-500/40 bg-cyan-500/5",
    perfil: "Casal procurando boutique, vida noturna chic (Catch Beach Club).",
    evite: "Família com criança pequena (mar fundo em alguns trechos).",
    praia: "Surin Beach — bonita, beach clubs estilosos.",
    quanto: "Boutique R$ 400 / resort R$ 900.",
    quando: "Mix luxo + estilo sem ir tão fundo no oeste.",
  },
  {
    nome: "Kamala", veredito: "FAMILIAR — alternativa a Patong",
    cor: "border-teal-500/40 bg-teal-500/5",
    perfil: "Família, casal mais velho, quem quer Patong perto mas dormir bem.",
    evite: "Jovem buscando agito.",
    praia: "Kamala Beach (2 km) — calma, restaurantes pé na areia.",
    quanto: "Hotel R$ 240 / resort R$ 550.",
    quando: "Família que vai querer ir a Patong só de dia e voltar à noite.",
  },
  {
    nome: "Nai Harn", veredito: "TOP — praia premiada, vibe local",
    cor: "border-emerald-500/40 bg-emerald-500/5",
    perfil: "Casal sossego, ioga/wellness, mochileiro maduro, expat.",
    evite: "Quem precisa de shopping na esquina e balada perto.",
    praia: "Nai Harn Beach — uma das 5 mais bonitas da Tailândia. Lagoa atrás.",
    quanto: "Hostel R$ 55 / hotel R$ 230 / resort The Nai Harn R$ 800.",
    quando: "Segunda visita a Phuket — ou primeira de quem fugiu de Patong na pesquisa.",
  },
  {
    nome: "Rawai", veredito: "AUTÊNTICO — bairro de expat e local",
    cor: "border-teal-500/40 bg-teal-500/5",
    perfil: "Long-stay, nômade digital, mergulhador (perto de Chalong pier).",
    evite: "Quem só quer 5 dias na praia (praia é so-so).",
    praia: "Rawai não tem praia de banho — usa Nai Harn ao lado.",
    quanto: "Aluguel mensal R$ 1.800 estúdio / hotel R$ 180.",
    quando: "Long-stay 14+ dias, base pra Chalong/snorkel/mergulho.",
  },
  {
    nome: "Phuket Town", veredito: "CULTURA — 1-2 noites valem",
    cor: "border-orange-500/40 bg-orange-500/5",
    perfil: "Quem ama arquitetura, street food, fotografia.",
    evite: "Quem quer praia (são 30 min até a mais próxima).",
    praia: "Não tem. Use como base cultural, não banho.",
    quanto: "Hostel R$ 40 / boutique sino-portuguesa R$ 200.",
    quando: "1-2 noites no início ou fim da viagem. Casas portuguesas, night market.",
  },
];

// ---- PRAIAS RANQUEADAS ----
const PRAIAS = [
  { nome: "Freedom Beach", perfil: "Romântica deserta", como: "Só de longtail (300 baht ida/volta) ou trilha do alto (40 min)." },
  { nome: "Nai Harn", perfil: "Família + casal", como: "Carro/scooter, estacionamento grátis." },
  { nome: "Ya Nui", perfil: "Snorkel direto da praia", como: "Pequena, lota — chegue antes das 10h." },
  { nome: "Surin", perfil: "Casal estiloso, beach club", como: "Catch Beach Club no canto sul." },
  { nome: "Bang Tao", perfil: "Caminhada longa, esvaziada", como: "Acesso pelo Laguna Resort ou Tinlay Place." },
  { nome: "Layan", perfil: "Família sossego", como: "Norte de Bang Tao. Restaurantes pé na areia." },
  { nome: "Kamala", perfil: "Família + por do sol", como: "Phuket FantaSea fica aqui — pule, é caro/turístico." },
  { nome: "Kata Noi", perfil: "Casal sossego", como: "Atrás do Katathani Resort. Mais calma que Kata principal." },
  { nome: "Karon", perfil: "Longa caminhada", como: "Cuidado correnteza maio-out, bandeira vermelha = não entre." },
  { nome: "Patong", perfil: "Só se está hospedado", como: "Jet-ski é GOLPE — não alugue por nada." },
  { nome: "Mai Khao", perfil: "Avião pousando na cabeça", como: "Foto clássica. Norte da ilha, perto do aeroporto." },
  { nome: "Banana Beach", perfil: "Deserta verdadeira", como: "Trilha de 15 min descendo. Leve água." },
];

// ---- DAY-TRIPS ----
const DAYTRIPS = [
  {
    tour: "Phi Phi + Maya Bay", barco: "Speedboat pequeno (max 20 pessoas)",
    quando: "Saída 6h-6h30 (não 8h30 padrão). Chega Maya 8h, vazia.",
    operadora: "Hey Phi Phi, Love Andaman ou Simba Sea Trips — NUNCA pacote de revenda hotel.",
    preco: "1.800-2.400 baht (R$ 320-430).",
    armadilha: "Tour das 8h30 com 6 barcos coordenados = Maya com 800 pessoas.",
  },
  {
    tour: "James Bond (Phang Nga Bay)", barco: "Speedboat ou longtail tailandês",
    quando: "Saída 7h30. Combine com Hong Island pra fugir do trajeto turístico.",
    operadora: "Five Star Thailand ou John Gray Sea Canoe (kayak nas cavernas é cinema).",
    preco: "1.500-2.500 baht.",
    armadilha: "Tour de barco grande chinês — 200 pessoas, 8 min na 'ilha do James Bond' e tchau.",
  },
  {
    tour: "Coral Island", barco: "Speedboat",
    quando: "Day-trip mais próximo (25 min de barco). Bom pra família.",
    operadora: "Reservar direto no pier de Chalong de manhã sai mais barato.",
    preco: "900-1.300 baht.",
    armadilha: "Pacote 'Coral + Racha' — 2h em cada ilha, corrido. Faça só Racha (item abaixo).",
  },
  {
    tour: "Koh Racha (Yai)", barco: "Speedboat 15-25 pessoas",
    quando: "Saída 8h, 4-5h na ilha.",
    operadora: "Hey Beach ou Sea Star Andaman.",
    preco: "1.400-1.800 baht.",
    armadilha: "Pacote 'Coral + Racha' — você passa 2h em Racha. Faça SÓ Racha.",
  },
  {
    tour: "Ilhas Similan", barco: "Speedboat (day-trip) ou liveaboard (2-4 noites)",
    quando: "Só de 15/out a 15/mai (parque fecha o resto do ano).",
    operadora: "Day-trip: Love Andaman. Liveaboard: Wicked Diving, Big Blue.",
    preco: "Day-trip 3.300-3.800 baht. Liveaboard a partir de US$ 600.",
    armadilha: "Day-trip Similan é EXAUSTIVO (3h cada trecho). Quem aguenta mar, top. Quem enjoa, evite.",
  },
];

// ---- GOLPES ----
const GOLPES = [
  { golpe: "Táxi do aeroporto pede 1.200-1.500 baht", resposta: "Recuse. Saia do terminal, peça Bolt ou Grab (~580 baht até Kata). Quiosque de táxi também serve com preço tabelado." },
  { golpe: "Jet-ski em Patong: 'você quebrou o motor, são 30.000 baht'", resposta: "Nunca alugue jet-ski em Patong. Esquema sistêmico — gangue + polícia local. Fim de papo." },
  { golpe: "Scooter: 'risco no farol já estava? prove' → retém 15.000 baht", resposta: "Fotografe e filme cada arranhão na hora, com data visível. Use locadora indicada. Nunca passaporte como caução." },
  { golpe: "Tuk-tuk pede 500 baht pra 2 km", resposta: "Use sempre Bolt/Grab. Tuk-tuk em Phuket é cartel — preço 4-6x mais caro que em Bangkok." },
  { golpe: "'Templo fechado hoje, leve esse tour'", resposta: "Templos públicos NUNCA fecham por temporada. É gancho pra te levar a loja de pedra/alfaiate com comissão." },
  { golpe: "Massagem 'happy ending' surpresa", resposta: "Procure casas com cardápio na frente, fila feminina, preço fixo. Evite spa de hotel grande (3-5x mais caro)." },
  { golpe: "ATM cobra 220 baht de saque", resposta: "Use Aeon Bank (50 baht) ou pague cartão direto. Saque grande de uma vez (10.000+)." },
  { golpe: "Cardápio em foto sem preço", resposta: "Não sente. Procure o lugar onde tailandês come — preço escrito, comida quente saindo." },
  { golpe: "Tour operator 'do hotel' empurra Phi Phi 8h30", resposta: "Reserve direto com a operadora listada acima. Hotel pega 30-40% de comissão e te coloca no barco grande." },
  { golpe: "Bar tab inflada (Bangla Road)", resposta: "Peça a conta a cada rodada, confira. Drinks 'happy hour' grátis = nunca grátis." },
  { golpe: "Câmbio de rua 'sem taxa'", resposta: "Use SuperRich (laranja) ou ATM. Câmbio de rua dá ~10% menos." },
  { golpe: "Polícia turística pede multa em dinheiro vivo", resposta: "Toda multa é em delegacia, com recibo. 'Multa de cortesia' = propina, recuse." },
];

const BLACKLIST = [
  "'Coral + Racha' (qualquer pacote combinado)",
  "Phi Phi Bay Tour das 8h30 (qualquer revendedor)",
  "James Bond Big Boat (barco chinês 200 pessoas)",
  "FantaSea show (turístico industrial, caro)",
  "Tigers Kingdom (questões éticas)",
  "Dolphin Bay (questões éticas)",
];

const APROVADAS = [
  { nome: "Hey Phi Phi", oque: "Phi Phi cedo, barco pequeno." },
  { nome: "Simba Sea Trips", oque: "Phi Phi + Bamboo + Maya, premium." },
  { nome: "John Gray Sea Canoe", oque: "Phang Nga em kayak — único." },
  { nome: "Love Andaman", oque: "Similan day-trip ou Phi Phi premium." },
  { nome: "Hey Beach (Koh Racha)", oque: "SÓ Racha, grupo pequeno." },
];

// ---- ROTEIROS ----
const ROTEIROS = [
  {
    dias: "3 dias", foco: "Highlights máximos",
    dia: [
      "D1: chegada Kata, jantar Kata Mama, sunset Promthep Cape.",
      "D2: Phi Phi cedo (Hey Phi Phi, saída 6h30) — volta 15h, banho de piscina, jantar Karon night market.",
      "D3: scooter pela costa sul (Nai Harn, Ya Nui, Big Buddha), Phuket Town à noite (Soi Romanee).",
    ],
  },
  {
    dias: "5 dias", foco: "Equilíbrio sem corrida",
    dia: [
      "D1: chegada Kata, Kata Beach.",
      "D2: Phi Phi cedo.",
      "D3: descanso + Nai Harn + spa.",
      "D4: James Bond com kayak (John Gray).",
      "D5: Phuket Town de dia, night market à noite.",
    ],
  },
  {
    dias: "7 dias", foco: "Aprofundar + 1 ilha vizinha",
    dia: [
      "D1-2: base Kata, Phi Phi day-trip.",
      "D3: descanso + spa + Nai Harn.",
      "D4: James Bond kayak.",
      "D5: Racha SÓ Racha (Hey Beach).",
      "D6: Phuket Town + Old Town tour.",
      "D7: relax + voo.",
    ],
  },
  {
    dias: "10 dias", foco: "Phuket + Yao Noi (ou Lanta)",
    dia: [
      "D1-3: Kata base, Phi Phi + descanso.",
      "D4-5: James Bond + Racha.",
      "D6-8: ferry pra Koh Yao Noi (3 dias slow).",
      "D9: volta Phuket, Old Town.",
      "D10: voo.",
    ],
  },
];

// ---- TRANSFER TABELA ----
const TRANSFER = [
  { destino: "Aeroporto → Patong", bolt: "650-800 baht", taxi: "1.200 baht", tempo: "55 min" },
  { destino: "Aeroporto → Kata/Karon", bolt: "600-750 baht", taxi: "1.200 baht", tempo: "65 min" },
  { destino: "Aeroporto → Bang Tao/Surin", bolt: "350-500 baht", taxi: "800 baht", tempo: "25 min" },
  { destino: "Aeroporto → Phuket Town", bolt: "400-550 baht", taxi: "800 baht", tempo: "40 min" },
  { destino: "Aeroporto → Nai Harn/Rawai", bolt: "700-900 baht", taxi: "1.300 baht", tempo: "75 min" },
  { destino: "Kata → Patong", bolt: "200-280 baht", taxi: "500 baht", tempo: "20 min" },
  { destino: "Kata → Phuket Town", bolt: "250-350 baht", taxi: "600 baht", tempo: "30 min" },
  { destino: "Patong → Phuket Town", bolt: "230-320 baht", taxi: "500 baht", tempo: "25 min" },
];

const COMIDA = [
  { lugar: "Kata Mama", bairro: "Kata", oque: "Pad thai e curry, frente pra praia. Preço local.", preco: "80-150 baht/prato" },
  { lugar: "Mom Tri's Kitchen", bairro: "Kata", oque: "Especial — premium, vista. Lua de mel.", preco: "600-1200 baht/prato" },
  { lugar: "Karon Night Market", bairro: "Karon", oque: "3a, 4a, 5a e sáb. Mariscos, pad krapow.", preco: "60-120 baht" },
  { lugar: "Banzaan Market (upstairs)", bairro: "Patong", oque: "Compre peixe no andar de baixo, leve pra cozinhar em cima.", preco: "250-500 baht refeição" },
  { lugar: "Raya Restaurant", bairro: "Phuket Town", oque: "Curry de caranguejo lendário. Casa sino-portuguesa.", preco: "400-800 baht/prato" },
  { lugar: "Sunday Walking Street (Lard Yai)", bairro: "Phuket Town", oque: "Dom 16h-22h. Street food + cultura.", preco: "20-100 baht" },
  { lugar: "Lock Tien", bairro: "Phuket Town", oque: "Hokkien noodles, oyster omelette. Patrimônio.", preco: "60-120 baht" },
  { lugar: "Rim Pa", bairro: "Patong", oque: "Tailandesa premium, vista do morro.", preco: "500-1000 baht" },
  { lugar: "Suay", bairro: "Phuket Town", oque: "Tailandesa moderna, chef tailandês com pegada autoral.", preco: "300-700 baht" },
  { lugar: "One Chun", bairro: "Phuket Town", oque: "Receitas peranakan, casa antiga.", preco: "200-500 baht" },
];

// ============================================================================

const Phuket8821 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-background to-teal-950 text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-emerald-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <Badge variant="outline" className="border-emerald-400/40 text-emerald-300 mb-4">
            🏝️ Guia Phuket — versão completa
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-4">
            Phuket sem cair em <span className="text-emerald-400 italic">armadilha de turista</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            9 bairros decodificados, transfer pelo preço real, day-trips com operadora certa,
            roteiros 3-10 dias, lista negra, mapa e 12 golpes com resposta pronta. Bem-vindo(a).
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">Atualizações vitalícias</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">Mapa Google offline</span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">Testado in loco</span>
          </div>
        </div>
      </header>

      {/* TOC */}
      <nav className="border-b border-emerald-500/10 bg-background/60 backdrop-blur sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-2">
          {TOC.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="text-xs px-3 py-1.5 rounded-full border border-emerald-500/20 hover:bg-emerald-500/10 transition flex items-center gap-1.5">
              <t.icon className="w-3 h-3" /> {t.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-20">

        {/* COMEÇO */}
        <section id="comeco">
          <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-3"><Compass className="text-emerald-400" /> Antes de tudo: a regra única de Phuket</h2>
          <Card className="border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="p-6 space-y-3 text-base">
              <p><strong className="text-emerald-300">Phuket não é uma cidade — são 9 bairros que parecem cidades diferentes.</strong> 80% dos brasileiros que dizem "Phuket é caótica" ficaram em Patong. 80% dos que dizem "Phuket é paraíso" ficaram em Kata, Bang Tao ou Nai Harn. <em>Mesmo lugar, viagem oposta.</em></p>
              <p>A decisão mais importante deste guia é a próxima sessão. Leia ela inteira antes de reservar qualquer hotel.</p>
            </CardContent>
          </Card>
        </section>

        {/* BAIRROS */}
        <section id="bairros">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Home className="text-emerald-400" /> 9 bairros decodificados</h2>
          <p className="text-muted-foreground mb-8">Quem deve ficar, quem deve evitar, quanto custa e qual a praia.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {BAIRROS.map((b) => (
              <Card key={b.nome} className={`${b.cor} border`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl"><G>{b.nome}</G></CardTitle>
                    <Badge variant="outline" className="text-[10px] whitespace-nowrap">{b.veredito}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p><strong className="text-emerald-300">Perfil:</strong> {b.perfil}</p>
                  <p><strong className="text-red-300">Evite se:</strong> {b.evite}</p>
                  <p><strong>Praia:</strong> {b.praia}</p>
                  <p><strong>Quanto:</strong> {b.quanto}</p>
                  <p className="text-muted-foreground italic">{b.quando}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* PRAIAS */}
        <section id="praias">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Waves className="text-emerald-400" /> Top 12 praias por perfil</h2>
          <p className="text-muted-foreground mb-6">Cada uma com perfil e o "como chegar". Use junto do mapa no final.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRAIAS.map((p) => (
              <Card key={p.nome} className="border-emerald-500/15">
                <CardContent className="p-5 space-y-1.5">
                  <h3 className="font-display font-bold text-lg"><G>{p.nome}</G></h3>
                  <p className="text-sm text-emerald-300">{p.perfil}</p>
                  <p className="text-sm text-muted-foreground">{p.como}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-6 border-amber-500/30 bg-amber-500/5">
            <CardContent className="p-5 text-sm">
              <strong className="text-amber-300">Bandeira vermelha = NÃO ENTRE.</strong> Maio a outubro a costa oeste tem correntes mortais. Salva-vidas em Karon, Kata, Patong e Surin. Em Bang Tao e Nai Harn, depende do hotel.
            </CardContent>
          </Card>
        </section>

        {/* HOSPEDAGEM */}
        <section id="hospedagem">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Sparkles className="text-emerald-400" /> Hospedagem por faixa real</h2>
          <p className="text-muted-foreground mb-6">Hotéis testados ou rejeitados — com motivo. Faixas em real, alta temporada (nov-fev).</p>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="border-emerald-500/20">
              <CardHeader><CardTitle className="text-lg">Mochileiro (R$ 45-120)</CardTitle></CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong><G>Lub d Phuket Patong</G></strong> — hostel design, piscina, bar ativo.</p>
                <p><strong><G>Bodega Phuket Old Town</G></strong> — melhor pra cultura.</p>
                <p><strong><G>Phuket Backpacker Hostel Kata</G></strong> — cama R$ 50, perto da praia.</p>
                <p><strong><G>Bedrock Hostel Kata</G></strong> — boutique-hostel, casais.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-500/20">
              <CardHeader><CardTitle className="text-lg">Médio (R$ 200-500)</CardTitle></CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong><G>The Old Phuket Karon Beach Resort</G></strong> — piscina dupla, café incrível.</p>
                <p><strong><G>Sugar Marina Resort Surf Kata</G></strong> — pé na praia.</p>
                <p><strong><G>Casa Blanca Boutique Hotel Phuket Town</G></strong> — sino-portuguesa.</p>
                <p><strong><G>Aleenta Phuket Phang Nga Resort Layan</G></strong> — adults only.</p>
              </CardContent>
            </Card>
            <Card className="border-emerald-500/20">
              <CardHeader><CardTitle className="text-lg">Premium (R$ 700-3000+)</CardTitle></CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong><G>The Nai Harn Phuket</G></strong> — vista mítica, melhor sunset de Phuket.</p>
                <p><strong><G>Banyan Tree Phuket Bang Tao</G></strong> — pool villa clássico.</p>
                <p><strong><G>Trisara Phuket</G></strong> — top 3 da Tailândia.</p>
                <p><strong><G>Keemala Phuket</G></strong> — vilas-ninho na floresta, lua de mel.</p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-5 border-red-500/30 bg-red-500/5">
            <CardContent className="p-5 text-sm">
              <strong className="text-red-300">REJEITADOS:</strong> Patong Beach Hotel (cheiro mofo, mar sujo na frente),
              Phuket Graceland (avaliações falsas, paredes finas),
              qualquer hotel na "Soi Bangla" (som de balada 24h).
            </CardContent>
          </Card>
        </section>

        {/* TRANSFER */}
        <section id="transfer">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><MapPin className="text-emerald-400" /> Transfer / Bolt / táxi — tabela completa</h2>
          <p className="text-muted-foreground mb-6">Tire um print disso antes de pousar. Mostre na tela do taxista — ele desiste.</p>
          <Card className="border-emerald-500/20">
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-emerald-500/10">
                  <tr><th className="text-left p-3">Trajeto</th><th className="text-left p-3">Bolt/Grab</th><th className="text-left p-3">Táxi balcão</th><th className="text-left p-3">Tempo</th></tr>
                </thead>
                <tbody>
                  {TRANSFER.map((r, i) => (
                    <tr key={i} className="border-t border-emerald-500/10">
                      <td className="p-3"><G q={r.destino.replace("Aeroporto", "Phuket International Airport").replace("→", "to")}>{r.destino}</G></td>
                      <td className="p-3 text-emerald-300">{r.bolt}</td>
                      <td className="p-3 text-muted-foreground">{r.taxi}</td>
                      <td className="p-3">{r.tempo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          <div className="mt-5 grid md:grid-cols-2 gap-4 text-sm">
            <Card className="border-emerald-500/20"><CardContent className="p-5">
              <strong className="text-emerald-300">Apps que funcionam:</strong> Bolt (mais barato), Grab (mais carros), inDrive (negocia).
              Não use Uber (não opera). Não use táxi de rua sem combinar preço antes — não tem taxímetro.
            </CardContent></Card>
            <Card className="border-emerald-500/20"><CardContent className="p-5">
              <strong className="text-emerald-300">Aeroporto:</strong> saia pela porta de chegada, vire à direita e vá até o estacionamento — chame Bolt de lá (motorista não pode parar no terminal). Ou use balcão "AOT Taxi" oficial (não os freelancers gritando).
            </CardContent></Card>
          </div>
        </section>

        {/* MOTO */}
        <section id="moto">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Bike className="text-emerald-400" /> Scooter sem perder caução</h2>
          <p className="text-muted-foreground mb-6">O golpe da caução é sistêmico em Phuket. Esse protocolo derrota 99% deles.</p>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="border-emerald-500/30 bg-emerald-500/5">
              <CardHeader><CardTitle className="text-lg">Locadoras testadas</CardTitle></CardHeader>
              <CardContent className="text-sm space-y-2">
                <p><strong><G>Cat Motors Phuket</G></strong> (Kata, Patong) — top da Tailândia, contrato em inglês, fotos digitais, sem passaporte.</p>
                <p><strong><G>Mr Mechanic Kata Phuket</G></strong> — local, honesto, manuten. boa.</p>
                <p><strong><G>BB Bikes Phuket Town</G></strong> — para long-stay.</p>
                <p>Diária: 200-300 baht (Honda Click 125). Mensal: 3.500-4.500.</p>
              </CardContent>
            </Card>
            <Card className="border-red-500/30 bg-red-500/5">
              <CardHeader><CardTitle className="text-lg text-red-300">Protocolo anti-golpe</CardTitle></CardHeader>
              <CardContent className="text-sm space-y-2">
                <ol className="list-decimal list-inside space-y-1.5">
                  <li>Filme volta de 360° na hora, com áudio narrando cada arranhão.</li>
                  <li>Tire 8-12 fotos com data ativada no celular.</li>
                  <li>Exija o contrato em inglês com cláusulas de dano descritas.</li>
                  <li>NUNCA deixe passaporte como caução — só dinheiro (₿2.000-5.000) ou cópia autenticada.</li>
                  <li>Leve PID (Permissão Internacional para Dirigir) categoria A. Sem ela, polícia local multa 1.000 baht e seguro não cobre.</li>
                  <li>Use capacete sempre. Multa por falta de capacete é alvo fácil.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* DAY-TRIPS */}
        <section id="daytrips">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Ship className="text-emerald-400" /> Day-trips de barco — operadora certa e horário esperto</h2>
          <p className="text-muted-foreground mb-6">A diferença entre "Phi Phi é decepcionante" e "Phi Phi foi cinema" mora aqui.</p>
          <div className="space-y-4">
            {DAYTRIPS.map((d) => (
              <Card key={d.tour} className="border-emerald-500/20">
                <CardContent className="p-5 grid md:grid-cols-5 gap-3 text-sm">
                  <div className="md:col-span-2">
                    <h3 className="font-display font-bold text-lg mb-1"><G q={d.tour + " Thailand"}>{d.tour}</G></h3>
                    <p className="text-emerald-300 text-xs">{d.barco}</p>
                  </div>
                  <div><strong className="text-xs text-muted-foreground">Quando</strong><p>{d.quando}</p></div>
                  <div><strong className="text-xs text-muted-foreground">Operadora</strong><p>{d.operadora}</p></div>
                  <div><strong className="text-xs text-muted-foreground">Preço</strong><p className="text-emerald-300">{d.preco}</p>
                    <p className="text-xs text-red-300 mt-1">⚠ {d.armadilha}</p></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* COMIDA */}
        <section id="comida">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><UtensilsCrossed className="text-emerald-400" /> Onde o tailandês come (top 10 testados)</h2>
          <p className="text-muted-foreground mb-6">A versão enxuta dos 30+ testados — os que vão de novato a refinado sem decepcionar.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {COMIDA.map((c) => (
              <Card key={c.lugar} className="border-emerald-500/15">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display font-bold"><G q={`${c.lugar} ${c.bairro} Phuket`}>{c.lugar}</G></h3>
                    <Badge variant="outline" className="text-[10px]"><G q={`${c.bairro} Phuket`}>{c.bairro}</G></Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{c.oque}</p>
                  <p className="text-sm text-emerald-300">{c.preco}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="mt-5 border-emerald-500/20 bg-emerald-500/5">
            <CardContent className="p-5 text-sm">
              <strong className="text-emerald-300">Regra de ouro:</strong> se o cardápio tem foto de cada prato e nenhum tailandês comendo, vire as costas. Procure o lugar movimentado com cardápio escrito (mesmo em tailandês) — Google Translate na câmera resolve.
            </CardContent>
          </Card>
        </section>

        {/* ROTEIROS */}
        <section id="roteiros">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Sun className="text-emerald-400" /> Roteiros prontos — 3, 5, 7 e 10 dias</h2>
          <p className="text-muted-foreground mb-6">Base recomendada: <G>Kata Beach</G> (custo-benefício) ou <G>Bang Tao Beach</G> (premium). Ajuste por bairro de hospedagem.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {ROTEIROS.map((r) => (
              <Card key={r.dias} className="border-emerald-500/20">
                <CardHeader>
                  <CardTitle className="text-lg">{r.dias}</CardTitle>
                  <p className="text-xs text-emerald-300">{r.foco}</p>
                </CardHeader>
                <CardContent className="text-sm space-y-1.5">
                  {r.dia.map((d, i) => <p key={i}>{d}</p>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ANTI-GOLPE */}
        <section id="antigolpe">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><ShieldCheck className="text-emerald-400" /> 12 golpes — e a resposta exata</h2>
          <p className="text-muted-foreground mb-6">Print do celular antes de pousar. Quando rolar, mostre a resposta.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {GOLPES.map((g, i) => (
              <Card key={i} className="border-red-500/20">
                <CardContent className="p-4 text-sm">
                  <p className="font-semibold mb-1.5 flex gap-2"><AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> {g.golpe}</p>
                  <p className="text-muted-foreground flex gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {g.resposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* BLACKLIST */}
        <section id="blacklist">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><XCircle className="text-emerald-400" /> Lista negra de tours + os que valem</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="border-red-500/30 bg-red-500/5">
              <CardHeader><CardTitle className="text-lg text-red-300">EVITAR</CardTitle></CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2">{BLACKLIST.map((b, i) => <li key={i} className="flex gap-2"><XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" /> <G q={b + " Phuket tour"}>{b}</G></li>)}</ul>
              </CardContent>
            </Card>
            <Card className="border-emerald-500/30 bg-emerald-500/5">
              <CardHeader><CardTitle className="text-lg text-emerald-300">3 OPERADORAS QUE VALEM</CardTitle></CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2.5">{APROVADAS.map((a) => (
                  <li key={a.nome}><strong className="text-emerald-300"><G q={a.nome + " Phuket Thailand"}>{a.nome}</G></strong> — {a.oque}</li>
                ))}</ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* MAPA */}
        <section id="mapa">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><MapIcon className="text-emerald-400" /> Mapa Google interativo (offline)</h2>
          <Card className="border-emerald-500/20">
            <CardContent className="p-6 text-sm space-y-3">
              <p>Todos os pontos deste guia (bairros, praias, restaurantes, locadoras, piers, beach clubs) estão num mapa colaborativo do Google Maps.</p>
              <p><strong className="text-emerald-300">Link do mapa:</strong> <a href="https://www.google.com/maps/d/edit?mid=phuket-guiastailandia-template" target="_blank" rel="noreferrer" className="underline">Mapa Phuket — Guias Tailândia</a> [link de exemplo — substituir pelo mapa real do produto].</p>
              <p><strong>Como usar offline:</strong> abra Google Maps → menu → "Mapas offline" → "Selecione seu próprio mapa" → faça o quadrado em Phuket. Funciona sem chip por 30 dias.</p>
            </CardContent>
          </Card>
        </section>

        {/* ORÇAMENTO */}
        <section id="orcamento">
          <h2 className="text-3xl font-display font-bold mb-2 flex items-center gap-3"><Wallet className="text-emerald-400" /> Orçamento honesto por dia (em real)</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="border-emerald-500/20"><CardHeader><CardTitle className="text-lg">Mochileiro</CardTitle></CardHeader><CardContent className="text-sm space-y-1">
              <p>Hostel: R$ 50</p><p>Comida: R$ 60 (street)</p><p>Transporte: R$ 30 (scooter)</p><p>Day-trip: R$ 40 (média)</p>
              <Separator className="my-2"/><p className="font-bold text-emerald-300">Total: R$ 180/dia</p>
            </CardContent></Card>
            <Card className="border-emerald-500/20"><CardHeader><CardTitle className="text-lg">Casal padrão</CardTitle></CardHeader><CardContent className="text-sm space-y-1">
              <p>Hotel: R$ 280/casal</p><p>Comida: R$ 200/casal</p><p>Transporte: R$ 80</p><p>Day-trip: R$ 320 (Phi Phi/dia)</p>
              <Separator className="my-2"/><p className="font-bold text-emerald-300">Total: R$ 880/casal/dia</p>
            </CardContent></Card>
            <Card className="border-emerald-500/20"><CardHeader><CardTitle className="text-lg">Premium</CardTitle></CardHeader><CardContent className="text-sm space-y-1">
              <p>Resort: R$ 900/casal</p><p>Comida: R$ 500/casal</p><p>Transfer privativo: R$ 250</p><p>Day-trip premium: R$ 800</p>
              <Separator className="my-2"/><p className="font-bold text-emerald-300">Total: R$ 2.450/casal/dia</p>
            </CardContent></Card>
          </div>
        </section>

        {/* OUTROS GUIAS */}
        <section className="pt-12 border-t border-emerald-500/10">
          <h2 className="text-2xl font-display font-bold mb-2">Indo pra outras ilhas?</h2>
          <p className="text-muted-foreground mb-6">Cada ilha tem o seu guia, mesma profundidade. Compre só o que vai usar.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { nome: "Phi Phi", path: "/koh-phi-phi-tailandia" },
              { nome: "Koh Samui", path: "/koh-samui-tailandia" },
              { nome: "Koh Yao", path: "/koh-yao-tailandia" },
              { nome: "Koh Lanta", path: "/koh-lanta-tailandia" },
              { nome: "Similan", path: "/ilhas-similan-tailandia" },
              { nome: "Koh Racha", path: "/koh-racha-tailandia" },
              { nome: "Catálogo das ilhas", path: "/ilhas" },
              { nome: "Catálogo geral", path: "/" },
            ].map((g) => (
              <Link key={g.path} to={g.path} className="block p-4 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/10 text-sm">
                <span className="font-semibold">{g.nome}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-500/10 py-8 text-center text-sm text-muted-foreground">
        Guia Phuket — Guias Tailândia. Atualizado conforme as ruas mudam. Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="underline">contato@guiastailandia.com.br</a>.
      </footer>
    </div>
  );
};

export default Phuket8821;

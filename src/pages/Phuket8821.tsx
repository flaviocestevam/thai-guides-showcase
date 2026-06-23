// internal links open in new tab (padrão dos guias pagos)
import type { ReactNode, CSSProperties } from "react";
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight,
} from "lucide-react";

// ============================================================================
// GUIA PHUKET — versão premium (Noir & Gold · DM Serif Display + Fira Sans)
// Rota privada: /phuket8821
// ============================================================================

// ---- Map chip (Google Maps) ----
const G = ({ q, children, className = "" }: { q?: string; children: ReactNode; className?: string }) => {
  const query = q ?? (typeof children === "string" ? children : "");
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span>{children}</span>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ", Phuket, Thailand")}`}
        target="_blank"
        rel="noreferrer"
        title={`Abrir ${query} no Google Maps`}
        className="pk-map-chip"
      >
        <MapPin className="w-3 h-3" /> Mapa
      </a>
    </span>
  );
};

// ---- Reveal (stagger) ----
const Reveal = ({ i = 0, children, className = "" }: { i?: number; children: ReactNode; className?: string }) => (
  <div
    className={`pk-reveal ${className}`}
    style={{ animationDelay: `${Math.min(i, 12) * 60}ms` } as CSSProperties}
  >
    {children}
  </div>
);

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "9 bairros", icon: Home },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Transfer", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida local", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

// ---- 9 BAIRROS ----
type Tone = "ok" | "premium" | "alert" | "warn" | "info";
const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Patong", veredito: "EVITE — exceto balada", tone: "alert", perfil: "Solteiro 22 anos focado em balada, despedida de solteiro.", evite: "Lua de mel, família com criança, casal sossego, quem quer dormir antes das 3h.", praia: "Patong Beach (3 km) — média, lotada, jet-ski golpe.", quanto: "Hostel R$ 45 / hotel turista R$ 220 / resort R$ 600.", quando: "Só se Bangla Road for o ponto principal da viagem." },
  { nome: "Kata", veredito: "RECOMENDADO — melhor custo-benefício", tone: "ok", perfil: "Casal, primeira viagem, família com filho 8+.", evite: "Quem quer luxo absoluto (Bang Tao é melhor) ou silêncio total (vá Nai Harn).", praia: "Kata Beach + Kata Noi — areia branca, mar calmo nov-abr.", quanto: "Hostel R$ 55 / hotel bom R$ 280 / boutique R$ 550.", quando: "Padrão pra primeira ida a Phuket. Difícil errar." },
  { nome: "Karon", veredito: "OK — primo mais barato de Kata", tone: "warn", perfil: "Mochileiro maduro, casal economizando, família budget.", evite: "Quem quer vida noturna ou restaurante refinado (vá Kata).", praia: "Karon Beach (3 km) — segunda maior da ilha, ondas mai-out.", quanto: "Hostel R$ 45 / hotel R$ 200 / resort R$ 480.", quando: "Quando Kata está caro ou cheio. Diferença R$ 60-80/dia." },
  { nome: "Bang Tao", veredito: "PREMIUM — luxo discreto", tone: "premium", perfil: "Lua de mel, casal premium, família alto padrão.", evite: "Quem quer andar a pé a tudo (é grande, distâncias longas).", praia: "Bang Tao Beach (6 km) — quase deserta, areia fina.", quanto: "Resort 4★ R$ 700 / 5★ R$ 1.500 / pool villa R$ 3.000+.", quando: "Lua de mel sem agito, alto padrão pelo preço de Patong médio." },
  { nome: "Surin", veredito: "BOA — entre Bang Tao e Kamala", tone: "info", perfil: "Casal procurando boutique, vida noturna chic (Catch Beach Club).", evite: "Família com criança pequena (mar fundo em alguns trechos).", praia: "Surin Beach — bonita, beach clubs estilosos.", quanto: "Boutique R$ 400 / resort R$ 900.", quando: "Mix luxo + estilo sem ir tão fundo no oeste." },
  { nome: "Kamala", veredito: "FAMILIAR — alternativa a Patong", tone: "info", perfil: "Família, casal mais velho, quem quer Patong perto mas dormir bem.", evite: "Jovem buscando agito.", praia: "Kamala Beach (2 km) — calma, restaurantes pé na areia.", quanto: "Hotel R$ 240 / resort R$ 550.", quando: "Família que vai querer ir a Patong só de dia e voltar à noite." },
  { nome: "Nai Harn", veredito: "TOP — praia premiada, vibe local", tone: "ok", perfil: "Casal sossego, ioga/wellness, mochileiro maduro, expat.", evite: "Quem precisa de shopping na esquina e balada perto.", praia: "Nai Harn Beach — uma das 5 mais bonitas da Tailândia. Lagoa atrás.", quanto: "Hostel R$ 55 / hotel R$ 230 / resort The Nai Harn R$ 800.", quando: "Segunda visita a Phuket — ou primeira de quem fugiu de Patong." },
  { nome: "Rawai", veredito: "AUTÊNTICO — bairro de expat e local", tone: "info", perfil: "Long-stay, nômade digital, mergulhador (perto de Chalong pier).", evite: "Quem só quer 5 dias na praia (praia é so-so).", praia: "Rawai não tem praia de banho — usa Nai Harn ao lado.", quanto: "Aluguel mensal R$ 1.800 estúdio / hotel R$ 180.", quando: "Long-stay 14+ dias, base pra Chalong/snorkel/mergulho." },
  { nome: "Phuket Town", veredito: "CULTURA — 1-2 noites valem", tone: "warn", perfil: "Quem ama arquitetura, street food, fotografia.", evite: "Quem quer praia (são 30 min até a mais próxima).", praia: "Não tem. Use como base cultural, não banho.", quanto: "Hostel R$ 40 / boutique sino-portuguesa R$ 200.", quando: "1-2 noites no início ou fim. Casas portuguesas, night market." },
];

const TONE_CLASS: Record<Tone, string> = {
  ok: "pk-tone-ok",
  premium: "pk-tone-premium",
  alert: "pk-tone-alert",
  warn: "pk-tone-warn",
  info: "pk-tone-info",
};

// ---- PRAIAS ----
const PRAIAS = [
  { nome: "Freedom Beach", perfil: "Romântica deserta", como: "Só de longtail (300 baht ida/volta) ou trilha do alto (40 min)." },
  { nome: "Nai Harn", perfil: "Família + casal", como: "Carro/scooter, estacionamento grátis." },
  { nome: "Ya Nui", perfil: "Snorkel direto da praia", como: "Pequena, lota — chegue antes das 10h." },
  { nome: "Surin", perfil: "Casal estiloso, beach club", como: "Catch Beach Club no canto sul." },
  { nome: "Bang Tao", perfil: "Caminhada longa, esvaziada", como: "Acesso pelo Laguna Resort ou Tinlay Place." },
  { nome: "Layan", perfil: "Família sossego", como: "Norte de Bang Tao. Restaurantes pé na areia." },
  { nome: "Kamala", perfil: "Família + por do sol", como: "Phuket FantaSea fica aqui — pule, é caro/turístico." },
  { nome: "Kata Noi", perfil: "Casal sossego", como: "Atrás do Katathani Resort. Mais calma que Kata principal." },
  { nome: "Karon", perfil: "Longa caminhada", como: "Cuidado correnteza mai-out, bandeira vermelha = não entre." },
  { nome: "Patong", perfil: "Só se está hospedado", como: "Jet-ski é GOLPE — não alugue por nada." },
  { nome: "Mai Khao", perfil: "Avião pousando na cabeça", como: "Foto clássica. Norte da ilha, perto do aeroporto." },
  { nome: "Banana Beach", perfil: "Deserta verdadeira", como: "Trilha de 15 min descendo. Leve água." },
];

const DAYTRIPS = [
  { tour: "Phi Phi + Maya Bay", barco: "Speedboat pequeno (max 20 pessoas)", quando: "Saída 6h-6h30 (não 8h30 padrão). Chega Maya 8h, vazia.", operadora: "Hey Phi Phi, Love Andaman ou Simba Sea Trips — NUNCA pacote de revenda hotel.", preco: "1.800-2.400 baht (R$ 320-430).", armadilha: "Tour das 8h30 com 6 barcos coordenados = Maya com 800 pessoas." },
  { tour: "James Bond (Phang Nga Bay)", barco: "Speedboat ou longtail tailandês", quando: "Saída 7h30. Combine com Hong Island pra fugir do trajeto turístico.", operadora: "Five Star Thailand ou John Gray Sea Canoe (kayak nas cavernas é cinema).", preco: "1.500-2.500 baht.", armadilha: "Tour de barco grande chinês — 200 pessoas, 8 min na 'ilha do James Bond' e tchau." },
  { tour: "Coral Island", barco: "Speedboat", quando: "Day-trip mais próximo (25 min de barco). Bom pra família.", operadora: "Reservar direto no pier de Chalong de manhã sai mais barato.", preco: "900-1.300 baht.", armadilha: "Pacote 'Coral + Racha' — 2h em cada ilha, corrido. Faça só Racha." },
  { tour: "Koh Racha (Yai)", barco: "Speedboat 15-25 pessoas", quando: "Saída 8h, 4-5h na ilha.", operadora: "Hey Beach ou Sea Star Andaman.", preco: "1.400-1.800 baht.", armadilha: "Pacote 'Coral + Racha' — você passa 2h em Racha. Faça SÓ Racha." },
  { tour: "Ilhas Similan", barco: "Speedboat (day-trip) ou liveaboard (2-4 noites)", quando: "Só de 15/out a 15/mai (parque fecha o resto do ano).", operadora: "Day-trip: Love Andaman. Liveaboard: Wicked Diving, Big Blue.", preco: "Day-trip 3.300-3.800 baht. Liveaboard a partir de US$ 600.", armadilha: "Day-trip Similan é EXAUSTIVO (3h cada trecho). Quem aguenta mar, top. Quem enjoa, evite." },
];

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

const ROTEIROS = [
  { dias: "3 dias", foco: "Highlights máximos", dia: [
    "D1: chegada Kata, jantar Kata Mama, sunset Promthep Cape.",
    "D2: Phi Phi cedo (Hey Phi Phi, saída 6h30) — volta 15h, piscina, Karon night market.",
    "D3: scooter pela costa sul (Nai Harn, Ya Nui, Big Buddha), Phuket Town à noite (Soi Romanee).",
  ]},
  { dias: "5 dias", foco: "Equilíbrio sem corrida", dia: [
    "D1: chegada Kata, Kata Beach.",
    "D2: Phi Phi cedo.",
    "D3: descanso + Nai Harn + spa.",
    "D4: James Bond com kayak (John Gray).",
    "D5: Phuket Town de dia, night market à noite.",
  ]},
  { dias: "7 dias", foco: "Aprofundar + 1 ilha vizinha", dia: [
    "D1-2: base Kata, Phi Phi day-trip.",
    "D3: descanso + spa + Nai Harn.",
    "D4: James Bond kayak.",
    "D5: Racha SÓ Racha (Hey Beach).",
    "D6: Phuket Town + Old Town tour.",
    "D7: relax + voo.",
  ]},
  { dias: "10 dias", foco: "Phuket + Yao Noi (ou Lanta)", dia: [
    "D1-3: Kata base, Phi Phi + descanso.",
    "D4-5: James Bond + Racha.",
    "D6-8: ferry pra Koh Yao Noi (3 dias slow).",
    "D9: volta Phuket, Old Town.",
    "D10: voo.",
  ]},
];

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

// Section header
const SectionTitle = ({ icon: Icon, kicker, title }: { icon: any; kicker?: string; title: ReactNode }) => (
  <div className="mb-10">
    {kicker && <p className="pk-kicker">{kicker}</p>}
    <h2 className="pk-h2">
      <Icon className="w-7 h-7 text-[hsl(var(--pk-gold))]" /> {title}
    </h2>
    <div className="pk-rule" />
  </div>
);

const Phuket8821 = () => {
  return (
    <>
      <style>{PK_STYLES}</style>
      <div className="pk-root min-h-screen">
        {/* ====================== HERO ====================== */}
        <header className="pk-hero">
          <div className="pk-orb pk-orb-a" />
          <div className="pk-orb pk-orb-b" />
          <div className="pk-orb pk-orb-c" />
          <div className="pk-hero-grain" />

          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
            <Reveal>
              <span className="pk-eyebrow">
                <span className="pk-eyebrow-dot" /> Guia Phuket · Edição Definitiva
              </span>
            </Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Phuket sem cair em <em className="pk-display-em">armadilha de turista</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Nove bairros decodificados, transfer pelo preço real, day-trips com a operadora certa,
                roteiros de 3 a 10 dias e doze golpes com resposta pronta.
              </p>
            </Reveal>
            <Reveal i={3}>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Atualizações vitalícias", "Mapa Google offline", "Testado in loco"].map((t) => (
                  <span key={t} className="pk-tag">{t}</span>
                ))}
              </div>
            </Reveal>

            {/* Bento meta */}
            <div className="pk-bento mt-16">
              <Reveal i={4} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">A regra única</p>
                <p className="pk-bento-h">9 bairros, 9 viagens diferentes.</p>
                <p className="pk-bento-p">
                  Quem diz que Phuket é caótica ficou em Patong. Quem diz que é paraíso ficou em Kata,
                  Bang Tao ou Nai Harn. <em>Mesmo lugar, viagem oposta.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item">
                <p className="pk-kicker">Bairros</p>
                <p className="pk-bento-stat">09</p>
                <p className="pk-bento-cap">decodificados</p>
              </Reveal>
              <Reveal i={6} className="pk-bento-item">
                <p className="pk-kicker">Golpes</p>
                <p className="pk-bento-stat">12</p>
                <p className="pk-bento-cap">com resposta pronta</p>
              </Reveal>
              <Reveal i={7} className="pk-bento-item">
                <p className="pk-kicker">Roteiros</p>
                <p className="pk-bento-stat">04</p>
                <p className="pk-bento-cap">de 3 a 10 dias</p>
              </Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve o mapa offline antes de embarcar.
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        {/* ====================== STICKY TOC ====================== */}
        <nav className="pk-toc">
          <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
            {TOC.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="pk-toc-chip">
                <t.icon className="w-3.5 h-3.5" /> {t.label}
              </a>
            ))}
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-20 md:py-28 space-y-28 md:space-y-36">

          {/* COMEÇO */}
          <section id="comeco">
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Phuket" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Phuket não é uma cidade — são nove bairros que parecem cidades diferentes.</strong>{" "}
                  80% dos brasileiros que dizem "Phuket é caótica" ficaram em Patong. 80% dos que dizem "Phuket é paraíso"
                  ficaram em Kata, Bang Tao ou Nai Harn. <em>Mesmo lugar, viagem oposta.</em>
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  A decisão mais importante deste guia é a próxima seção. Leia-a inteira antes de reservar qualquer hotel.
                </p>
              </div>
            </Reveal>
          </section>

          {/* BAIRROS */}
          <section id="bairros">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="9 bairros decodificados" />
            <div className="grid md:grid-cols-2 gap-6">
              {BAIRROS.map((b, i) => (
                <Reveal key={b.nome} i={i}>
                  <article className={`pk-card pk-bairro ${TONE_CLASS[b.tone]}`}>
                    <header className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="pk-h3"><G>{b.nome}</G></h3>
                      <span className="pk-verdict">{b.veredito}</span>
                    </header>
                    <dl className="pk-dl">
                      <div><dt>Perfil</dt><dd>{b.perfil}</dd></div>
                      <div><dt>Evite se</dt><dd>{b.evite}</dd></div>
                      <div><dt>Praia</dt><dd>{b.praia}</dd></div>
                      <div><dt>Quanto</dt><dd>{b.quanto}</dd></div>
                    </dl>
                    <p className="mt-4 pk-italic">{b.quando}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* PRAIAS */}
          <section id="praias">
            <SectionTitle icon={Waves} kicker="03 — Costa" title="Top 12 praias por perfil" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRAIAS.map((p, i) => (
                <Reveal key={p.nome} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <h3 className="pk-h4"><G>{p.nome}</G></h3>
                    <p className="pk-gold-soft text-sm mt-1">{p.perfil}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{p.como}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-warn mt-8">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Bandeira vermelha = NÃO ENTRE.</strong> De maio a outubro a costa oeste tem correntes mortais.
                  Salva-vidas em Karon, Kata, Patong e Surin. Em Bang Tao e Nai Harn, depende do hotel.</p>
              </div>
            </Reveal>
          </section>

          {/* HOSPEDAGEM */}
          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="04 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 45 — 120", items: [
                  ["Lub d Phuket Patong", "hostel design, piscina, bar ativo."],
                  ["Bodega Phuket Old Town", "melhor pra cultura."],
                  ["Phuket Backpacker Hostel Kata", "cama R$ 50, perto da praia."],
                  ["Bedrock Hostel Kata", "boutique-hostel, casais."],
                ]},
                { faixa: "Médio", price: "R$ 200 — 500", items: [
                  ["The Old Phuket Karon Beach Resort", "piscina dupla, café incrível."],
                  ["Sugar Marina Resort Surf Kata", "pé na praia."],
                  ["Casa Blanca Boutique Hotel Phuket Town", "sino-portuguesa."],
                  ["Aleenta Phuket Phang Nga Resort Layan", "adults only."],
                ]},
                { faixa: "Premium", price: "R$ 700 — 3.000+", items: [
                  ["The Nai Harn Phuket", "melhor sunset de Phuket."],
                  ["Banyan Tree Phuket Bang Tao", "pool villa clássico."],
                  ["Trisara Phuket", "top 3 da Tailândia."],
                  ["Keemala Phuket", "vilas-ninho na floresta, lua de mel."],
                ]},
              ].map((col, i) => (
                <Reveal key={col.faixa} i={i}>
                  <article className="pk-card h-full">
                    <p className="pk-kicker">{col.faixa}</p>
                    <p className="pk-h4 mt-1">{col.price}</p>
                    <div className="pk-divider my-4" />
                    <ul className="space-y-3 text-sm">
                      {col.items.map(([name, desc]) => (
                        <li key={name}>
                          <strong className="text-[hsl(var(--pk-fg))]"><G>{name}</G></strong>
                          <span className="text-[hsl(var(--pk-muted))]"> — {desc}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-alert mt-8">
                <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Rejeitados:</strong> Patong Beach Hotel (cheiro de mofo, mar sujo na frente),
                  Phuket Graceland (avaliações falsas, paredes finas), qualquer hotel na Soi Bangla (som de balada 24h).</p>
              </div>
            </Reveal>
          </section>

          {/* TRANSFER */}
          <section id="transfer">
            <SectionTitle icon={MapPin} kicker="05 — Chegada" title="Transfer, Bolt e táxi — tabela completa" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead>
                      <tr><th>Trajeto</th><th>Bolt / Grab</th><th>Táxi balcão</th><th>Tempo</th></tr>
                    </thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td><G q={r.destino.replace("Aeroporto", "Phuket International Airport").replace("→", "to")}>{r.destino}</G></td>
                          <td className="pk-gold-soft font-medium">{r.bolt}</td>
                          <td className="text-[hsl(var(--pk-muted))]">{r.taxi}</td>
                          <td>{r.tempo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
            <div className="mt-6 grid md:grid-cols-2 gap-5 text-sm">
              <Reveal>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">Apps que funcionam</p>
                  <p>Bolt (mais barato), Grab (mais carros), inDrive (negocia). Não use Uber (não opera). Não use táxi de rua sem combinar preço antes — não tem taxímetro.</p>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">No aeroporto</p>
                  <p>Saia pela porta de chegada, vire à direita e vá até o estacionamento — chame Bolt de lá. Ou use o balcão oficial "AOT Taxi" (não os freelancers gritando).</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* MOTO */}
          <section id="moto">
            <SectionTitle icon={Bike} kicker="06 — Scooter" title="Scooter sem perder caução" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Cat Motors Phuket</G></strong> (Kata, Patong) — top da Tailândia, contrato em inglês, fotos digitais, sem passaporte.</li>
                    <li><strong><G>Mr Mechanic Kata Phuket</G></strong> — local, honesto, manutenção boa.</li>
                    <li><strong><G>BB Bikes Phuket Town</G></strong> — para long-stay.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht (Honda Click 125). Mensal 3.500-4.500.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Protocolo anti-golpe</p>
                  <ol className="pk-ol text-sm">
                    <li>Filme 360° na hora, com áudio narrando cada arranhão.</li>
                    <li>Tire 8-12 fotos com data ativada no celular.</li>
                    <li>Exija contrato em inglês com cláusulas de dano descritas.</li>
                    <li>Nunca deixe passaporte como caução — só dinheiro (฿2.000-5.000 / R$ 300-750) ou cópia autenticada.</li>
                    <li>Leve PID (Permissão Internacional para Dirigir) categoria A. Sem ela, multa de 1.000 baht e seguro não cobre.</li>
                    <li>Use capacete sempre. Multa por falta é alvo fácil.</li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </section>

          {/* DAY-TRIPS */}
          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="07 — Mar" title="Day-trips de barco — operadora certa e horário esperto" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Thailand"}>{d.tour}</G></h3>
                      <p className="pk-gold-soft text-xs mt-2 uppercase tracking-[0.18em]">{d.barco}</p>
                    </div>
                    <div><p className="pk-kicker">Quando</p><p className="text-sm mt-1">{d.quando}</p></div>
                    <div><p className="pk-kicker">Operadora</p><p className="text-sm mt-1">{d.operadora}</p></div>
                    <div>
                      <p className="pk-kicker">Preço</p>
                      <p className="pk-gold-soft font-medium text-sm mt-1">{d.preco}</p>
                      <p className="text-xs text-[hsl(var(--pk-alert))] mt-2 flex gap-1.5"><AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" /> {d.armadilha}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* COMIDA */}
          <section id="comida">
            <SectionTitle icon={UtensilsCrossed} kicker="08 — Mesa" title="Onde o tailandês come — 10 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Phuket`}>{c.lugar}</G></h3>
                      <span className="pk-tag-sm">{c.bairro}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mb-3">{c.oque}</p>
                    <p className="pk-gold-soft text-sm font-medium">{c.preco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-info mt-8">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Regra de ouro:</strong> cardápio com foto de cada prato e nenhum tailandês comendo? Vire as costas. Procure o lugar movimentado, cardápio escrito — Google Translate na câmera resolve.</p>
              </div>
            </Reveal>
          </section>

          {/* ROTEIROS */}
          <section id="roteiros">
            <SectionTitle icon={Sun} kicker="09 — Tempo" title="Roteiros prontos — 3, 5, 7 e 10 dias" />
            <div className="grid md:grid-cols-2 gap-6">
              {ROTEIROS.map((r, i) => (
                <Reveal key={r.dias} i={i}>
                  <article className="pk-card h-full">
                    <p className="pk-kicker">{r.foco}</p>
                    <h3 className="pk-h3 mt-1">{r.dias}</h3>
                    <div className="pk-divider my-4" />
                    <ul className="space-y-2 text-sm">
                      {r.dia.map((d, k) => <li key={k} className="flex gap-3"><span className="pk-bullet">{k + 1}</span><span>{d}</span></li>)}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ANTI-GOLPE */}
          <section id="antigolpe">
            <SectionTitle icon={ShieldCheck} kicker="10 — Defesa" title="12 golpes — e a resposta exata" />
            <div className="grid md:grid-cols-2 gap-4">
              {GOLPES.map((g, i) => (
                <Reveal key={i} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="text-sm font-semibold flex gap-2">
                      <AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" /> {g.golpe}
                    </p>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2 flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> {g.resposta}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* BLACKLIST */}
          <section id="blacklist">
            <SectionTitle icon={XCircle} kicker="11 — Curadoria" title="Lista negra de tours + os que valem" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker text-[hsl(var(--pk-alert))]">Evitar</p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {BLACKLIST.map((b, i) => (
                      <li key={i} className="flex gap-2.5">
                        <XCircle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" />
                        <G q={b + " Phuket tour"}>{b}</G>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
              <Reveal i={1}>
                <article className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker pk-gold">Operadoras que valem</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {APROVADAS.map((a) => (
                      <li key={a.nome}>
                        <strong className="pk-gold"><G q={a.nome + " Phuket Thailand"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          {/* MAPA */}
          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="12 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada bairro, praia, restaurante, locadora, pier e beach club deste guia tem um chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado do nome — toque para abrir direto no Google Maps.</p>
                <p>
                  <strong className="pk-gold">Abrir Phuket no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Phuket,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha inteira</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps no celular → menu → "Mapas offline" → "Selecione seu próprio mapa" → enquadre Phuket → baixar. Funciona sem chip por 30 dias.</p>
              </div>
            </Reveal>
          </section>

          {/* ORÇAMENTO */}
          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="13 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Hostel", "R$ 50"], ["Comida (street)", "R$ 60"], ["Transporte (scooter)", "R$ 30"], ["Day-trip (média)", "R$ 40"]], total: "R$ 180 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 280 / casal"], ["Comida", "R$ 200 / casal"], ["Transporte", "R$ 80"], ["Day-trip Phi Phi", "R$ 320"]], total: "R$ 880 / casal / dia" },
                { tipo: "Premium", linhas: [["Resort", "R$ 900 / casal"], ["Comida", "R$ 500 / casal"], ["Transfer privativo", "R$ 250"], ["Day-trip premium", "R$ 800"]], total: "R$ 2.450 / casal / dia" },
              ].map((b, i) => (
                <Reveal key={b.tipo} i={i}>
                  <article className="pk-card h-full">
                    <p className="pk-kicker">Faixa</p>
                    <h3 className="pk-h3 mt-1">{b.tipo}</h3>
                    <div className="pk-divider my-4" />
                    <ul className="space-y-2 text-sm">
                      {b.linhas.map(([k, v]) => (
                        <li key={k} className="flex justify-between gap-3">
                          <span className="text-[hsl(var(--pk-muted))]">{k}</span>
                          <span className="font-medium">{v}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pk-divider my-4" />
                    <p className="pk-gold font-semibold text-lg">{b.total}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* OUTROS GUIAS */}
          <section className="pt-16 border-t border-[hsl(var(--pk-line))]">
            <p className="pk-kicker">Continue explorando</p>
            <h2 className="pk-h2 mt-2">Indo pra outras ilhas?</h2>
            <p className="text-[hsl(var(--pk-muted))] mt-3 mb-8 max-w-2xl">
              Cada ilha tem o seu guia, mesma profundidade. Compre só o que vai usar.
            </p>
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
              ].map((g, i) => (
                <Reveal key={g.path} i={i}>
                  <a href={g.path} target="_blank" rel="noreferrer" className="pk-island-link">
                    <span className="font-medium">{g.nome}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform" />
                  </a>
                </Reveal>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-[hsl(var(--pk-line))] py-10 text-center text-sm text-[hsl(var(--pk-muted))]">
          Guia Phuket — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

// ===================================================================
// PREMIUM STYLES — Noir & Gold · scoped to .pk-root
// ===================================================================
const PK_STYLES = `
.pk-root {
  --pk-bg: 0 0% 5%;
  --pk-bg-2: 0 0% 7%;
  --pk-surface: 0 0% 8%;
  --pk-surface-2: 0 0% 11%;
  --pk-fg: 40 30% 96%;
  --pk-muted: 40 8% 65%;
  --pk-line: 40 10% 18%;
  --pk-line-strong: 40 10% 24%;
  --pk-gold: 43 60% 54%;
  --pk-gold-soft: 43 75% 78%;
  --pk-ok: 150 50% 55%;
  --pk-alert: 0 70% 62%;
  --pk-warn: 38 90% 60%;
  --pk-info: 200 60% 65%;
  --pk-violet: 270 50% 70%;

  font-family: 'Fira Sans', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  font-feature-settings: "ss01", "kern", "liga";
  background: hsl(var(--pk-bg));
  color: hsl(var(--pk-fg));
  letter-spacing: 0.005em;
}
.pk-root :where(h1,h2,h3,h4) {
  font-family: 'DM Serif Display', Georgia, serif;
  font-weight: 400;
  letter-spacing: -0.015em;
}

.pk-display {
  font-size: clamp(2.6rem, 6vw, 5.25rem);
  line-height: 1.02;
  letter-spacing: -0.028em;
  color: hsl(var(--pk-fg));
  text-wrap: balance;
}
.pk-display-em {
  font-style: italic;
  color: hsl(var(--pk-gold));
  font-weight: 400;
}
.pk-lede {
  font-size: clamp(1.05rem, 1.3vw, 1.25rem);
  line-height: 1.55;
  color: hsl(var(--pk-muted));
  text-wrap: pretty;
}

.pk-eyebrow {
  display: inline-flex; align-items: center; gap: .55rem;
  font-size: .72rem; letter-spacing: .26em; text-transform: uppercase;
  color: hsl(var(--pk-gold-soft));
  padding: .45rem .85rem;
  border: 1px solid hsl(var(--pk-line-strong));
  border-radius: 999px;
  background: hsl(var(--pk-surface) / 0.5);
  backdrop-filter: blur(8px);
}
.pk-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: hsl(var(--pk-gold)); box-shadow: 0 0 12px hsl(var(--pk-gold) / 0.8); }

.pk-kicker {
  font-size: .7rem; letter-spacing: .22em; text-transform: uppercase;
  color: hsl(var(--pk-muted));
  font-weight: 500;
}
.pk-gold { color: hsl(var(--pk-gold)); }
.pk-gold-soft { color: hsl(var(--pk-gold-soft)); }

.pk-h2 {
  display: flex; align-items: center; gap: .8rem;
  font-size: clamp(1.9rem, 3vw, 2.8rem);
  line-height: 1.1;
  color: hsl(var(--pk-fg));
  margin-top: .5rem;
}
.pk-h3 { font-size: 1.45rem; line-height: 1.2; color: hsl(var(--pk-fg)); }
.pk-h4 { font-size: 1.15rem; line-height: 1.25; color: hsl(var(--pk-fg)); }

.pk-rule {
  margin-top: 1.25rem;
  height: 1px;
  background: linear-gradient(90deg, hsl(var(--pk-gold) / 0.6), transparent 60%);
}

.pk-italic { font-style: italic; color: hsl(var(--pk-muted)); font-size: .92rem; }
.pk-link {
  color: hsl(var(--pk-gold-soft));
  text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px;
  transition: color .25s ease;
}
.pk-link:hover { color: hsl(var(--pk-gold)); }

/* ============ HERO ============ */
.pk-hero {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 0%, hsl(43 30% 12% / .55), transparent 60%),
    linear-gradient(180deg, hsl(0 0% 6%), hsl(0 0% 4%));
  border-bottom: 1px solid hsl(var(--pk-line));
}
.pk-hero-grain {
  position: absolute; inset: 0;
  background-image: radial-gradient(hsl(40 30% 90% / 0.02) 1px, transparent 1px);
  background-size: 3px 3px;
  pointer-events: none;
  mix-blend-mode: overlay;
}
.pk-orb { position: absolute; border-radius: 9999px; filter: blur(110px); opacity: .55; pointer-events: none; }
.pk-orb-a { width: 520px; height: 520px; top: -160px; left: -120px; background: radial-gradient(circle, hsl(43 70% 40% / .35), transparent 60%); }
.pk-orb-b { width: 460px; height: 460px; top: 20%; right: -160px; background: radial-gradient(circle, hsl(28 80% 35% / .25), transparent 60%); }
.pk-orb-c { width: 380px; height: 380px; bottom: -140px; left: 30%; background: radial-gradient(circle, hsl(43 60% 45% / .18), transparent 60%); }

.pk-tag {
  font-size: .72rem; letter-spacing: .12em; text-transform: uppercase;
  padding: .4rem .8rem;
  border: 1px solid hsl(var(--pk-line-strong));
  border-radius: 999px;
  color: hsl(var(--pk-muted));
  background: hsl(var(--pk-surface) / 0.4);
}
.pk-tag-sm {
  font-size: .65rem; letter-spacing: .14em; text-transform: uppercase;
  padding: .25rem .55rem;
  border: 1px solid hsl(var(--pk-line));
  border-radius: 4px;
  color: hsl(var(--pk-muted));
}

/* ============ BENTO ============ */
.pk-bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
@media (min-width: 768px) {
  .pk-bento { grid-template-columns: repeat(6, 1fr); gap: 1.25rem; }
  .pk-bento-wide { grid-column: span 3; }
  .pk-bento-item:not(.pk-bento-wide) { grid-column: span 2; }
}
.pk-bento-item {
  position: relative;
  padding: 1.5rem 1.5rem 1.75rem;
  border: 1px solid hsl(var(--pk-line));
  border-radius: 16px;
  background: linear-gradient(160deg, hsl(var(--pk-surface) / 0.85), hsl(var(--pk-surface-2) / 0.65));
  backdrop-filter: blur(10px);
  transition: border-color .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1);
}
.pk-bento-item:hover {
  border-color: hsl(var(--pk-gold) / 0.45);
  transform: translateY(-3px);
  box-shadow: 0 18px 50px -22px hsl(43 80% 30% / 0.45);
}
.pk-bento-h {
  font-family: 'DM Serif Display', serif;
  font-size: 1.6rem;
  line-height: 1.15;
  margin-top: .85rem;
  color: hsl(var(--pk-fg));
}
.pk-bento-p { margin-top: .75rem; color: hsl(var(--pk-muted)); font-size: .95rem; line-height: 1.55; }
.pk-bento-stat {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2.6rem, 5vw, 4rem);
  line-height: 1; margin-top: .6rem;
  color: hsl(var(--pk-gold));
}
.pk-bento-cap { font-size: .8rem; color: hsl(var(--pk-muted)); margin-top: .35rem; letter-spacing: .05em; }

/* ============ TOC ============ */
.pk-toc {
  position: sticky; top: 0; z-index: 30;
  background: hsl(var(--pk-bg) / 0.78);
  backdrop-filter: blur(14px) saturate(140%);
  border-bottom: 1px solid hsl(var(--pk-line));
}
.pk-toc-chip {
  display: inline-flex; align-items: center; gap: .4rem;
  font-size: .75rem; font-weight: 500;
  padding: .5rem .85rem;
  border-radius: 999px;
  border: 1px solid hsl(var(--pk-line));
  color: hsl(var(--pk-muted));
  white-space: nowrap;
  transition: all .35s cubic-bezier(.22,1,.36,1);
}
.pk-toc-chip:hover {
  color: hsl(var(--pk-gold-soft));
  border-color: hsl(var(--pk-gold) / 0.45);
  background: hsl(var(--pk-gold) / 0.06);
}

/* ============ CARDS ============ */
.pk-card {
  position: relative;
  padding: 1.75rem;
  border-radius: 16px;
  border: 1px solid hsl(var(--pk-line));
  background: linear-gradient(160deg, hsl(var(--pk-surface) / 0.9), hsl(var(--pk-surface-2) / 0.6));
  backdrop-filter: blur(8px);
  transition: border-color .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1);
}
.pk-card:hover {
  border-color: hsl(var(--pk-gold) / 0.4);
  transform: translateY(-2px);
  box-shadow: 0 20px 50px -28px hsl(43 80% 28% / 0.55);
}
.pk-card-tight { padding: 1.25rem 1.35rem; }
.pk-card-feature {
  padding: 2rem 2.25rem;
  border-color: hsl(var(--pk-gold) / 0.28);
  background:
    radial-gradient(ellipse at 0% 0%, hsl(43 60% 18% / 0.55), transparent 60%),
    linear-gradient(160deg, hsl(var(--pk-surface) / 0.9), hsl(var(--pk-surface-2) / 0.6));
}

.pk-tone-ok { border-color: hsl(var(--pk-ok) / 0.28); }
.pk-tone-ok:hover { border-color: hsl(var(--pk-ok) / 0.5); }
.pk-tone-premium { border-color: hsl(var(--pk-violet) / 0.3); }
.pk-tone-premium:hover { border-color: hsl(var(--pk-violet) / 0.55); }
.pk-tone-alert { border-color: hsl(var(--pk-alert) / 0.3); }
.pk-tone-alert:hover { border-color: hsl(var(--pk-alert) / 0.55); }
.pk-tone-warn { border-color: hsl(var(--pk-warn) / 0.28); }
.pk-tone-warn:hover { border-color: hsl(var(--pk-warn) / 0.5); }
.pk-tone-info { border-color: hsl(var(--pk-info) / 0.25); }
.pk-tone-info:hover { border-color: hsl(var(--pk-info) / 0.5); }

.pk-verdict {
  font-size: .65rem; letter-spacing: .12em; text-transform: uppercase;
  padding: .3rem .6rem;
  border-radius: 999px;
  border: 1px solid hsl(var(--pk-line-strong));
  color: hsl(var(--pk-gold-soft));
  white-space: nowrap;
  background: hsl(var(--pk-surface-2) / 0.6);
}

.pk-dl { display: grid; gap: .85rem; }
.pk-dl > div { display: grid; grid-template-columns: 100px 1fr; gap: .85rem; align-items: baseline; }
.pk-dl dt {
  font-size: .68rem; letter-spacing: .18em; text-transform: uppercase;
  color: hsl(var(--pk-muted)); padding-top: 2px;
}
.pk-dl dd { font-size: .92rem; line-height: 1.5; color: hsl(var(--pk-fg)); }

.pk-divider { height: 1px; background: hsl(var(--pk-line)); }

.pk-ol { list-style: none; counter-reset: pk; padding: 0; display: grid; gap: .65rem; }
.pk-ol li { counter-increment: pk; position: relative; padding-left: 2rem; line-height: 1.55; }
.pk-ol li::before {
  content: counter(pk, decimal-leading-zero);
  position: absolute; left: 0; top: 0;
  font-family: 'DM Serif Display', serif;
  font-size: .95rem;
  color: hsl(var(--pk-gold));
}

.pk-bullet {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  font-family: 'DM Serif Display', serif; font-size: .8rem;
  color: hsl(var(--pk-gold));
  border: 1px solid hsl(var(--pk-gold) / 0.4);
  flex-shrink: 0; margin-top: 2px;
}

/* ============ CALLOUTS ============ */
.pk-callout {
  display: flex; gap: .85rem;
  padding: 1.1rem 1.25rem;
  border-radius: 14px;
  border: 1px solid;
  font-size: .92rem; line-height: 1.55;
  backdrop-filter: blur(6px);
}
.pk-callout-warn { background: hsl(var(--pk-warn) / 0.05); border-color: hsl(var(--pk-warn) / 0.3); color: hsl(var(--pk-fg)); }
.pk-callout-warn svg { color: hsl(var(--pk-warn)); }
.pk-callout-alert { background: hsl(var(--pk-alert) / 0.05); border-color: hsl(var(--pk-alert) / 0.3); color: hsl(var(--pk-fg)); }
.pk-callout-alert svg { color: hsl(var(--pk-alert)); }
.pk-callout-info { background: hsl(var(--pk-gold) / 0.04); border-color: hsl(var(--pk-gold) / 0.25); color: hsl(var(--pk-fg)); }
.pk-callout-info svg { color: hsl(var(--pk-gold)); }

/* ============ TABLE ============ */
.pk-table { width: 100%; border-collapse: collapse; font-size: .92rem; }
.pk-table thead th {
  text-align: left;
  font-size: .68rem; letter-spacing: .2em; text-transform: uppercase;
  color: hsl(var(--pk-gold-soft));
  padding: 1rem 1.25rem;
  background: hsl(var(--pk-surface-2) / 0.8);
  border-bottom: 1px solid hsl(var(--pk-line-strong));
}
.pk-table tbody td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid hsl(var(--pk-line));
}
.pk-table tbody tr:last-child td { border-bottom: 0; }
.pk-table tbody tr { transition: background .25s ease; }
.pk-table tbody tr:hover { background: hsl(var(--pk-gold) / 0.04); }

/* ============ MAP CHIP ============ */
.pk-map-chip {
  display: inline-flex; align-items: center; gap: .25rem;
  font-size: .65rem; font-weight: 500; letter-spacing: .04em;
  padding: .15rem .45rem;
  border-radius: 6px;
  border: 1px solid hsl(var(--pk-gold) / 0.35);
  background: hsl(var(--pk-gold) / 0.08);
  color: hsl(var(--pk-gold-soft));
  text-decoration: none !important;
  transition: all .25s ease;
  vertical-align: middle;
  white-space: nowrap;
}
.pk-map-chip:hover {
  background: hsl(var(--pk-gold) / 0.18);
  border-color: hsl(var(--pk-gold) / 0.6);
  color: hsl(var(--pk-gold));
}
.pk-map-chip-inline { font-size: .65rem; padding: .1rem .35rem; }

/* ============ ISLAND LINKS ============ */
.pk-island-link {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.1rem 1.25rem;
  border-radius: 12px;
  border: 1px solid hsl(var(--pk-line));
  background: hsl(var(--pk-surface) / 0.6);
  color: hsl(var(--pk-fg));
  font-size: .92rem;
  transition: all .35s cubic-bezier(.22,1,.36,1);
}
.pk-island-link:hover {
  border-color: hsl(var(--pk-gold) / 0.5);
  background: hsl(var(--pk-gold) / 0.06);
  color: hsl(var(--pk-gold-soft));
  transform: translateY(-2px);
}
.pk-island-link:hover svg { transform: translate(2px, -2px); color: hsl(var(--pk-gold)); }

/* ============ REVEAL ============ */
@keyframes pkReveal {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.pk-reveal {
  opacity: 0;
  animation: pkReveal .9s cubic-bezier(.22,1,.36,1) forwards;
}

.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

@media (prefers-reduced-motion: reduce) {
  .pk-reveal { opacity: 1; animation: none; transform: none; }
  .pk-card, .pk-bento-item, .pk-island-link, .pk-toc-chip { transition: none; }
}
`;

export default Phuket8821;

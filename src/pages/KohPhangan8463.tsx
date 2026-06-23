// Guia Koh Phangan — versão premium (Noir & Gold)
// Rota privada: /kohphangan8463
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, Moon,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Phangan, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "Bairros", icon: Home },
  { id: "fullmoon", label: "Full Moon", icon: Moon },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Chegar", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida local", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Haad Rin", veredito: "FULL MOON — evite fora da festa", tone: "alert", perfil: "Quem vai pra Full Moon Party e só.", evite: "Tudo que não é dia da festa: caro, lixo na praia, vazio sem alma.", praia: "Sunrise Beach (palco da festa) e Sunset Beach (mais sossegado).", quanto: "Em Full Moon: dorm R$ 200+ / hotel R$ 800+. Fora: R$ 60 / R$ 250.", quando: "3 noites em torno da Full Moon — chega 1 dia antes, sai 1 dia depois." },
  { nome: "Sri Thanu (Wellness)", veredito: "TOP WELLNESS — yoga, vegan", tone: "ok", perfil: "Quem quer yoga, vegan, retiro, comunidade de longa estadia.", evite: "Quem busca balada ou praia bombando.", praia: "Hin Kong (raso, sunset) e Secret Beach.", quanto: "Bangalô R$ 120 / hotel R$ 280 / Anantara Rasananda R$ 1.500.", quando: "7+ dias. Lar do Orion Healing, Pyramid Yoga, Agama Yoga." },
  { nome: "Chaloklum (norte)", veredito: "AUTÊNTICO — vila de pescador", tone: "info", perfil: "Mergulhador, casal sossego, long-stay, mochileiro maduro.", evite: "Quem quer praia de pôster (mar tem barco de pesca).", praia: "Chaloklum Bay — base de mergulho. Praias top vizinhas.", quanto: "Bangalô R$ 100 / hotel R$ 220.", quando: "Base pra mergulho em Sail Rock. Restaurantes de peixe lendários." },
  { nome: "Thong Sala", veredito: "PRÁTICO — chegada + mercado", tone: "warn", perfil: "Quem precisa de banco, hospital, mercado, base curta.", evite: "Quem quer praia (não tem).", praia: "Não tem boa. Use Baan Tai vizinho.", quanto: "Hotel R$ 180 / boutique R$ 400.", quando: "1 noite no início pra resolver tudo (saque, chip, compras)." },
  { nome: "Baan Tai / Ban Kai", veredito: "MÉDIO — festas Half/Black Moon", tone: "warn", perfil: "Mochileiro festeiro, quem quer balada quase toda semana.", evite: "Família, casal sossego.", praia: "Baan Tai Beach — raso, sunset OK.", quanto: "Hostel R$ 60 / bangalô R$ 130 / hotel R$ 280.", quando: "Quem vai 10+ dias e quer pegar Half Moon (faz parte do circuito)." },
  { nome: "Thong Nai Pan (leste)", veredito: "PREMIUM — duas baías paraíso", tone: "premium", perfil: "Casal premium, lua de mel, família alto padrão.", evite: "Quem quer balada (zero) ou estrada ruim (Phangan tem).", praia: "Thong Nai Pan Yai e Noi — top 3 da Tailândia.", quanto: "Bangalô R$ 250 / resort R$ 700 / Anantara/Santhiya R$ 1.800+.", quando: "Casal premium, sossego absoluto, praia que é o que dizem ser." },
  { nome: "Bottle Beach (Haad Khuat)", veredito: "ISOLADO — só de barco/trilha", tone: "premium", perfil: "Mochileiro corajoso, casal sossego que topa logística.", evite: "Quem tem mala dura (não chega scooter).", praia: "Bottle Beach — paraíso isolado, 3 guesthouses.", quanto: "Bangalô R$ 130-300 (só dinheiro).", quando: "2-3 noites desconectado. Sem ATM, sem 7-Eleven, com mar absurdo." },
];

const FULLMOON = [
  { titulo: "Datas oficiais", desc: "12-13x por ano, sempre na noite da Full Moon (~lua cheia ±1 dia). Confira o calendário oficial 'Full Moon Party Koh Phangan' antes de comprar voo." },
  { titulo: "Onde dormir", desc: "Em Haad Rin SE você quer sair do quarto direto pra festa. Em Baan Tai / Thong Sala se quer dormir bem e pegar taxi-truck (200-300 baht ida e volta)." },
  { titulo: "Custo da entrada", desc: "200 baht (~R$ 35), pago no portão da praia. Tem pulseira. Não pague antecipado pra revendedor da rua." },
  { titulo: "O que NÃO levar", desc: "Mochila grande, celular caro, joia, sapato bom. Vai descalço, com câmera de praia, dinheiro suficiente pra noite." },
  { titulo: "Buckets de balde", desc: "Cuidado: drinks fortes, mistura desconhecida. Pegue lacrado se possível, ou beba só cerveja em garrafa." },
  { titulo: "Volta segura", desc: "Não atravesse na escuridão sozinho. Trilha pelo morro tem assalto. Pegue songthaew em grupo (50-100 baht/cabeça)." },
  { titulo: "Outras festas", desc: "Half Moon (Baan Tai, decoração de selva, eletrônica), Black Moon Culture (Baan Tai), Jungle Experience (Baan Tai). Mais legal que a Full pra muita gente." },
  { titulo: "Pular a Full?", desc: "Sim, é uma opção. Phangan é incrível sem ela. Se vai só pra festa, basta 3 noites. Pra ilha, 7+." },
];

const PRAIAS = [
  { nome: "Thong Nai Pan Yai", perfil: "Top 3 do país", como: "Leste, estrada melhorou. 30 min de Thong Sala." },
  { nome: "Thong Nai Pan Noi", perfil: "Vizinha menor, mais chic", como: "Anantara fica aqui. Mar calmo, areia talco." },
  { nome: "Bottle Beach", perfil: "Isolada absoluta", como: "Só por barco de Chaloklum ou trilha de 1h30." },
  { nome: "Mae Haad", perfil: "Snorkel com ilhota", como: "Trilha de areia até Koh Ma na maré baixa." },
  { nome: "Secret Beach", perfil: "Sunset cult", como: "Sri Thanu, escondida. Acesso por restaurante Secret Beach Bar." },
  { nome: "Haad Yuan / Haad Why Nam", perfil: "Festa secreta + sossego", como: "Acesso só por longtail de Haad Rin (200 baht)." },
  { nome: "Haad Salad", perfil: "Família, snorkel", como: "Norte-oeste, restaurantes pé na areia, recife próximo." },
  { nome: "Haad Khom", perfil: "Snorkel direto da praia", como: "Norte, perto de Chaloklum." },
  { nome: "Haad Rin Sunrise", perfil: "Palco da Full Moon", como: "De dia tem lixo. Pula." },
  { nome: "Haad Rin Sunset", perfil: "Sunset + bar relax", como: "Lado oposto, mais sossegado fora de Full Moon." },
];

const DAYTRIPS = [
  { tour: "Koh Tao + Nang Yuan", barco: "Speedboat (1h) ou ferry (1h30)", quando: "Saída 8h-8h30, volta 18h. Day-trip cheio.", operadora: "Lomprayah, Seatran Discovery.", preco: "1.300-1.800 baht (R$ 230-320).", armadilha: "Dia exaustivo. Melhor dormir 2 noites em Tao." },
  { tour: "Ang Thong Marine Park", barco: "Speedboat (2h de Phangan)", quando: "Saída 7h30, volta 17h.", operadora: "Backpacker Tours, 100 Degrees East.", preco: "2.300-2.800 baht.", armadilha: "Phangan é mais longe que Samui pra Ang Thong. Se já vai a Samui, faça de lá." },
  { tour: "Sail Rock dive/snorkel", barco: "Speedboat de Chaloklum", quando: "Saída 8h, volta 14h.", operadora: "Lotus Diving, Chaloklum Diving, Reefers Diving Resort.", preco: "Dive 3.500-4.500 / snorkel 1.200-1.500.", armadilha: "Pináculo de mergulho avançado — não é boa primeira mergulhada." },
  { tour: "Around the island longtail", barco: "Longtail privativo (4-6 pessoas)", quando: "Sai do hotel 9h-10h, volta 17h.", operadora: "Reserve direto no pier de Chaloklum ou Thong Sala.", preco: "3.500-5.000 baht o barco inteiro.", armadilha: "Combine paradas ANTES (Bottle, Mae Haad, Haad Salad). Sem combinação = só Mae Haad." },
];

const GOLPES = [
  { golpe: "Taxi-truck do pier de Thong Sala cobra 500 baht pra Sri Thanu (150 é justo)", resposta: "Pergunte preço escrito a 2-3 motoristas. Compartilhe com outros viajantes (taxa por pessoa)." },
  { golpe: "Scooter: arranhão antigo vira 10.000+ baht", resposta: "Filme 360°, 12 fotos com data. Nunca passaporte como caução. Estradas de Phangan são as mais perigosas da Tailândia — só dirija se tem prática." },
  { golpe: "Pulseira Full Moon vendida no songthaew por 500 baht", resposta: "Entrada oficial é 200 baht no portão da praia. Quem vende fora é cambista." },
  { golpe: "Bucket roubado/dopado em Haad Rin", resposta: "Não aceite drink aberto. Compre lacrado ou beba só cerveja em garrafa. Vá em grupo." },
  { golpe: "'Mushroom shake' / drogas — operação policial disfarçada", resposta: "Vendedor pode ser cúmplice de polícia. Multa = 20.000-50.000 baht ou prisão. Não vale." },
  { golpe: "Aluguel de jet-ski (mesmo cartel de Phuket)", resposta: "Não alugue jet-ski na Tailândia. Sistêmico." },
  { golpe: "Cooking class 'autêntica' com chef de cozinha de hostel", resposta: "Pum (filial Phangan), Same Same But Different ou Phangan Thai Cooking Class — escolas reais." },
  { golpe: "Massagem em barraca pirata com finalização forçada", resposta: "Procure casa com cardápio, preço fixo, fila feminina. Wat Pho Massage School Phangan é referência." },
  { golpe: "Boat noturno 'última saída' que cobra dobrado", resposta: "Última oficial de Haad Rin pra Thong Sala é meia-noite/01h. Combine ida + volta com mesmo motorista." },
  { golpe: "ATM cobra 220 baht", resposta: "Aeon Bank cobra 50. Saque 10.000+ de uma vez (limite por saque varia)." },
];

const BLACKLIST = [
  "Mushroom shake/drogas (polícia disfarçada + multa absurda)",
  "Jet-ski (cartel sistêmico)",
  "Bucket aberto de estranho (drugging risco real)",
  "Tour barato 'Around Island' sem paradas combinadas",
  "Aluguel de jipe pra Bottle Beach (estrada destrói carro/scooter)",
  "Tour com elefante",
];

const APROVADAS = [
  { nome: "Lomprayah", oque: "Ferries Phangan ↔ Samui ↔ Tao, day-trip Tao." },
  { nome: "Lotus Diving (Chaloklum)", oque: "Mergulho em Sail Rock, instrutores conhecidos." },
  { nome: "Orion Healing Center (Sri Thanu)", oque: "Detox, yoga, comunidade — referência mundial." },
  { nome: "Pum Cooking School Phangan", oque: "Aula de culinária consistente." },
  { nome: "Backpacker Tours Koh Phangan", oque: "Day-trip Ang Thong saindo direto de Phangan." },
];

const ROTEIROS = [
  { dias: "3 dias (só Full Moon)", foco: "Festa e fora", dia: [
    "D-1 da Full: chegada Haad Rin, instala, descanso, jantar local.",
    "D Full: dia na praia, festa começa ~21h.",
    "D+1: descanso, volta pra Samui ou continua.",
  ]},
  { dias: "5 dias wellness", foco: "Sri Thanu + costa norte", dia: [
    "D1: chegada Thong Sala, taxi pra Sri Thanu.",
    "D2: yoga Orion, almoço vegan, Secret Beach sunset.",
    "D3: scooter pro norte (Chaloklum + Mae Haad snorkel).",
    "D4: spa, descanso, Hin Kong sunset.",
    "D5: volta.",
  ]},
  { dias: "7 dias mix completo", foco: "Phangan inteira", dia: [
    "D1-2: Sri Thanu (yoga, vegan, sunset).",
    "D3: scooter norte (Chaloklum, Mae Haad, Haad Salad).",
    "D4: longtail Bottle Beach + Haad Khom.",
    "D5: Thong Nai Pan leste, jantar premium.",
    "D6: descanso ou Sail Rock dive/snorkel.",
    "D7: volta.",
  ]},
  { dias: "10 dias com Full Moon", foco: "Pre + festa + pós", dia: [
    "D1-3: Sri Thanu wellness.",
    "D4: muda pra Haad Rin (1-2 noites Full Moon).",
    "D5: Full Moon Party.",
    "D6: recuperação em Sri Thanu ou Thong Nai Pan.",
    "D7-9: Thong Nai Pan + day-trip Bottle Beach.",
    "D10: volta.",
  ]},
];

const TRANSFER = [
  { destino: "Aeroporto USM (Samui) → Phangan (ferry Bangrak)", bolt: "Bolt 250 baht ao pier + ferry 300-650 baht", taxi: "Transfer privado 1.500 baht", tempo: "1h30 total" },
  { destino: "Surat Thani Airport (URT) → Phangan", bolt: "Bus + ferry combo 600-800 baht", taxi: "Transfer privado 2.000 baht", tempo: "4-5h" },
  { destino: "Koh Samui (Bangrak) → Thong Sala", bolt: "Ferry Lomprayah 300-650 baht", taxi: "Speedboat privado 8.000 baht", tempo: "30-45 min" },
  { destino: "Koh Tao → Thong Sala", bolt: "Ferry Lomprayah 600 baht", taxi: "—", tempo: "1h15" },
  { destino: "Thong Sala → Haad Rin", bolt: "Songthaew compartilhado 100-150 baht", taxi: "Privado 400-500 baht", tempo: "20 min" },
  { destino: "Thong Sala → Sri Thanu", bolt: "Songthaew 100-150 baht", taxi: "Privado 350 baht", tempo: "15 min" },
  { destino: "Thong Sala → Thong Nai Pan", bolt: "Songthaew 250-300 baht", taxi: "Privado 600-800 baht", tempo: "45 min" },
  { destino: "Thong Sala → Chaloklum", bolt: "Songthaew 150-200 baht", taxi: "Privado 500 baht", tempo: "25 min" },
];

const COMIDA = [
  { lugar: "Fisherman's Restaurant", bairro: "Chaloklum", oque: "Peixe direto do barco. Camarão tigre lendário.", preco: "250-500 baht" },
  { lugar: "Karma Kafe", bairro: "Sri Thanu", oque: "Vegan-friendly que carnívoro também gosta. Açai bowl.", preco: "180-320 baht" },
  { lugar: "Orion Healing Cafe", bairro: "Sri Thanu", oque: "Raw, vegan, sucos detox.", preco: "200-380 baht" },
  { lugar: "John's Restaurant", bairro: "Chaloklum", oque: "Tailandesa familiar consistente. Massaman top.", preco: "120-250 baht" },
  { lugar: "Pantip Market food stalls", bairro: "Thong Sala", oque: "Mercado noturno, street food preço local.", preco: "40-120 baht" },
  { lugar: "Phantip Market (Sat/Mon)", bairro: "Thong Sala", oque: "Versão maior aos sábados. Pad thai 50 baht.", preco: "40-100 baht" },
  { lugar: "Cucina Italiana", bairro: "Thong Sala", oque: "Pizza napolitana de chef italiano. Quando enjoar de arroz.", preco: "300-500 baht" },
  { lugar: "Three Sixty Bar (Sunset)", bairro: "Sri Thanu", oque: "Drink + sunset 360°. Vai cedo (17h).", preco: "200-400 baht (drinks)" },
  { lugar: "Anantara Rasananda Beachfront", bairro: "Thong Nai Pan", oque: "Premium pé na areia.", preco: "800-1.500 baht" },
  { lugar: "Bubba's Coffee Bar", bairro: "Sri Thanu", oque: "Café de especialidade + brunch.", preco: "150-280 baht" },
];

const KohPhangan8463 = () => {
  return (
    <>
      <style>{PK_STYLES}</style>
      <div className="pk-root min-h-screen">
        <header className="pk-hero">
          <div className="pk-orb pk-orb-a" />
          <div className="pk-orb pk-orb-b" />
          <div className="pk-orb pk-orb-c" />
          <div className="pk-hero-grain" />

          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Phangan · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Phangan além da <em className="pk-display-em">Full Moon</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Sete bairros decodificados, sobrevivência à Full Moon, scooter sem hospital,
                wellness em Sri Thanu, Thong Nai Pan premium e dez golpes com resposta pronta.
              </p>
            </Reveal>
            <Reveal i={3}>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Atualizações vitalícias", "Mapa Google offline", "Testado in loco"].map((t) => (
                  <span key={t} className="pk-tag">{t}</span>
                ))}
              </div>
            </Reveal>

            <div className="pk-bento mt-16">
              <Reveal i={4} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">A regra única</p>
                <p className="pk-bento-h">Phangan tem 3 ilhas dentro dela.</p>
                <p className="pk-bento-p">
                  Haad Rin = festa. Sri Thanu = wellness. Thong Nai Pan = lua de mel.
                  <em> Quem mistura num só hotel não vê nenhuma das três.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Bairros</p><p className="pk-bento-stat">07</p><p className="pk-bento-cap">decodificados</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">10</p><p className="pk-bento-cap">com resposta pronta</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Roteiros</p><p className="pk-bento-stat">04</p><p className="pk-bento-cap">de 3 a 10 dias</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado —
                  toque e abre direto no Google Maps. Salve offline (interior tem buracos de sinal).
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        <nav className="pk-toc">
          <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
            {TOC.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="pk-toc-chip"><t.icon className="w-3.5 h-3.5" /> {t.label}</a>
            ))}
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-20 md:py-28 space-y-28 md:space-y-36">
          <section id="comeco">
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Phangan" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Phangan é três ilhas dentro de uma — só não fica claro no mapa.</strong>{" "}
                  Sul (Haad Rin) = balada hardcore. Oeste (Sri Thanu) = yoga e vegan. Leste (Thong Nai Pan) = praia premium.
                  Norte (Chaloklum, Bottle) = autêntico e isolado.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Quem reserva &quot;hotel em Phangan&quot; sem escolher o lado fica em Baan Tai (meio do caminho, sem alma) e acha que a ilha é meia-boca.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="bairros">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="7 bairros decodificados" />
            <div className="grid md:grid-cols-2 gap-6">
              {BAIRROS.map((b, i) => (
                <Reveal key={b.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[b.tone]}`}>
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

          <section id="fullmoon">
            <SectionTitle icon={Moon} kicker="03 — Mainstage" title="Sobreviver à Full Moon — 8 regras" />
            <div className="grid md:grid-cols-2 gap-5">
              {FULLMOON.map((m, i) => (
                <Reveal key={m.titulo} i={i}>
                  <article className="pk-card pk-card-tight">
                    <h3 className="pk-h4 pk-gold">{m.titulo}</h3>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{m.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-warn mt-8">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Realidade dura:</strong> drogas em Phangan = operação policial constante. Vendedor pode ser informante. Multa 20-50k baht ou prisão. Cerveja resolve.</p>
              </div>
            </Reveal>
          </section>

          <section id="praias">
            <SectionTitle icon={Waves} kicker="04 — Costa" title="10 praias por perfil" />
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
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="05 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 60 — 200", items: [
                  ["Echo Beach Hostel Haad Rin", "social, perto da festa."],
                  ["Lime n Soda Beachfront Resort", "Baan Tai, custo-benefício."],
                  ["Tantawan Bungalows Sri Thanu", "bangalô clássico."],
                  ["Mac Bay Resort Bottle Beach", "isolado, sem luxo."],
                ]},
                { faixa: "Médio", price: "R$ 250 — 700", items: [
                  ["Coco Garden Resort Baan Tai", "piscina, jardim."],
                  ["Loyfa Natural Resort Sri Thanu", "vista mar, sunset."],
                  ["Phangan Cabana Resort Haad Rin", "padrão Full Moon."],
                  ["Salad Beach Resort Haad Salad", "pé na areia, calmo."],
                ]},
                { faixa: "Premium", price: "R$ 900 — 3.000+", items: [
                  ["Anantara Rasananda Thong Nai Pan", "5★ pé na areia, top da ilha."],
                  ["Santhiya Koh Phangan Resort", "vila premium, isolado."],
                  ["Buri Rasa Village", "Thong Nai Pan Yai, charme tailandês."],
                  ["Kupu Kupu Phangan", "spa, vegan-friendly premium."],
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
                <p><strong>Rejeitados:</strong> qualquer hotel em Haad Rin fora dos dias da Full Moon (caro pelo nada), guesthouses "praia X" sem fotos próprias no Google, bangalôs sem ventilador em alta.</p>
              </div>
            </Reveal>
          </section>

          <section id="transfer">
            <SectionTitle icon={MapPin} kicker="06 — Chegar" title="Ferry, songthaew e transfer" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Trajeto</th><th>Compartilhado / Ferry</th><th>Privado</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td><G q={r.destino.replace("→", "to") + " Koh Phangan"}>{r.destino}</G></td>
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
          </section>

          <section id="moto">
            <SectionTitle icon={Bike} kicker="07 — Scooter" title="Scooter em Phangan — risco real" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Phangan Bikes (Thong Sala)</G></strong> — contrato em inglês, fotos digitais, sem passaporte.</li>
                    <li><strong><G>Cat Motors Koh Phangan</G></strong> — referência da rede, Sri Thanu.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht (Honda Click 125). Mensal 3.500-4.500.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Aviso vermelho</p>
                  <p className="text-sm leading-relaxed">As estradas de Phangan são as mais perigosas da Tailândia turística — ladeiras 45°, asfalto liso na chuva, e a subida pra Thong Nai Pan e Bottle Beach destrói scooter pequeno.</p>
                  <p className="text-sm text-[hsl(var(--pk-muted))] mt-3"><strong>Não pegue scooter se</strong>: é sua primeira vez, está bebendo, ou pretende ir a Bottle Beach (use longtail). Hospital de Phangan vê 3-5 turistas por dia com acidente em alta.</p>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="08 — Mar" title="Day-trips — operadora certa" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Koh Phangan Thailand"}>{d.tour}</G></h3>
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

          <section id="comida">
            <SectionTitle icon={UtensilsCrossed} kicker="09 — Mesa" title="Onde o tailandês come — 10 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Phangan`}>{c.lugar}</G></h3>
                      <span className="pk-tag-sm">{c.bairro}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mb-3">{c.oque}</p>
                    <p className="pk-gold-soft text-sm font-medium">{c.preco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="roteiros">
            <SectionTitle icon={Sun} kicker="10 — Tempo" title="Roteiros prontos" />
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

          <section id="antigolpe">
            <SectionTitle icon={ShieldCheck} kicker="11 — Defesa" title="10 golpes — e a resposta exata" />
            <div className="grid md:grid-cols-2 gap-4">
              {GOLPES.map((g, i) => (
                <Reveal key={i} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="text-sm font-semibold flex gap-2"><AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" /> {g.golpe}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2 flex gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> {g.resposta}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="blacklist">
            <SectionTitle icon={XCircle} kicker="12 — Curadoria" title="Lista negra + operadoras que valem" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker text-[hsl(var(--pk-alert))]">Evitar</p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {BLACKLIST.map((b, i) => (
                      <li key={i} className="flex gap-2.5"><XCircle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" /><span>{b}</span></li>
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
                        <strong className="pk-gold"><G q={a.nome + " Koh Phangan"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="13 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada bairro, praia, restaurante e pier tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado do nome.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Phangan no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Phangan,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps → menu → "Mapas offline" → enquadre Phangan → baixar. Interior tem buracos de sinal.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="14 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Bangalô", "R$ 70"], ["Comida (street)", "R$ 60"], ["Scooter", "R$ 35"], ["Festa/extras", "R$ 50"]], total: "R$ 215 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 300 / casal"], ["Comida", "R$ 220 / casal"], ["Scooter ou songthaew", "R$ 90"], ["Atividade (yoga/spa)", "R$ 160"]], total: "R$ 770 / casal / dia" },
                { tipo: "Premium", linhas: [["Resort 5★ Thong Nai Pan", "R$ 1.500 / casal"], ["Comida", "R$ 550 / casal"], ["Transfer privativo", "R$ 250"], ["Day-trip/spa", "R$ 800"]], total: "R$ 3.100 / casal / dia" },
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

          <section className="pt-16 border-t border-[hsl(var(--pk-line))]">
            <p className="pk-kicker">Continue explorando</p>
            <h2 className="pk-h2 mt-2">Outras ilhas e guias</h2>
            <p className="text-[hsl(var(--pk-muted))] mt-3 mb-8 max-w-2xl">Cada ilha tem o seu guia, mesma profundidade. Compre só o que vai usar.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { nome: "Koh Samui (vizinha)", path: "/koh-samui-tailandia" },
                { nome: "Koh Tao (vizinha)", path: "/koh-tao-tailandia" },
                { nome: "Festas & vida noturna", path: "/festas" },
                { nome: "Retiros & wellness", path: "/retiros-tailandia" },
                { nome: "Top hostels", path: "/top-hostels-tailandia" },
                { nome: "Aluguel de motos", path: "/aluguel-de-motos-tailandia" },
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
          Guia Koh Phangan — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohPhangan8463;

// Guia Koh Phi Phi — versão premium (Noir & Gold)
// Rota privada: /kohphiphi5128
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, Footprints,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Phi Phi, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "dormir-ou-nao", label: "Dormir ou day-trip", icon: Home },
  { id: "bairros", label: "Onde dormir", icon: Home },
  { id: "praias", label: "Praias e baías", icon: Waves },
  { id: "maya", label: "Maya Bay", icon: Ship },
  { id: "viewpoints", label: "Viewpoints", icon: Footprints },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Chegar", icon: MapPin },
  { id: "comida", label: "Comida local", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Tonsai Village (centro)", veredito: "AGITO — mochileiro, balada", tone: "alert", perfil: "Jovem, mochileiro, quem quer Fire Show e bar todas as noites.", evite: "Quem quer dormir antes das 2h, casal sossego, família.", praia: "Tonsai Bay (chegada do ferry) e Loh Dalum logo atrás.", quanto: "Dorm R$ 70 / hotel turista R$ 280 / boutique R$ 500.", quando: "Se a viagem inteira é a vibe Phi Phi de pôster — bar, dança, conhecer gente." },
  { nome: "Loh Dalum Bay", veredito: "BALADA NA AREIA", tone: "warn", perfil: "Mesma vibe Tonsai mas pé na praia + sunset frontal.", evite: "Mar muito raso em maré baixa (atravessa caminhando).", praia: "Loh Dalum Beach — palco dos Fire Shows.", quanto: "Hotel R$ 320 / resort R$ 700.", quando: "Quer balada na areia + acordar 10 passos do mar." },
  { nome: "Long Beach (Hat Yao)", veredito: "MELHOR PRAIA — sossegado", tone: "ok", perfil: "Casal, snorkel direto da praia, quem quer ouvir o mar dormir.", evite: "Quem não topa 15 min de longtail (300 baht) ou 25 min andando.", praia: "Long Beach — a melhor praia de Phi Phi Don, snorkel raso.", quanto: "Bangalô R$ 250 / hotel R$ 500 / resort R$ 1.200.", quando: "Casal e quem quer Phi Phi sem o caos do centro." },
  { nome: "Laem Tong (norte)", veredito: "PREMIUM — isolado, resort", tone: "premium", perfil: "Lua de mel, casal premium, família que paga por isolamento.", evite: "Quem quer sair do hotel à noite (sem cidade perto).", praia: "Laem Tong Beach — praia exclusiva de 4 resorts.", quanto: "Resort 4★ R$ 900 / Zeavola R$ 2.000+.", quando: "Você quer Phi Phi sem ver Phi Phi: só praia, longtail, snorkel." },
  { nome: "Phak Nam / Lo Bakao", veredito: "ISOLADO — boutique", tone: "premium", perfil: "Casal premium, lua de mel discreta.", evite: "Quem precisa de variedade de restaurante.", praia: "Phak Nam Bay — só acessível por barco.", quanto: "Phi Phi Island Village ou Phi Phi Natural Resort: R$ 700-1.500.", quando: "Você quer todos os pluses sem nenhum minus." },
  { nome: "Koh Phi Phi Leh (Maya Bay)", veredito: "SÓ DAY-TRIP — não dorme", tone: "info", perfil: "Visitante, não morador.", evite: "Ilha sem hospedagem, só day-trip de Tonsai ou Phuket/Krabi.", praia: "Maya Bay, Pileh Lagoon, Loh Samah, Viking Cave.", quanto: "Tour 1.500-2.500 baht + taxa de parque 400 baht.", quando: "Toda visita a Phi Phi precisa de pelo menos meio dia em Phi Phi Leh." },
];

const PRAIAS = [
  { nome: "Maya Bay (Phi Phi Leh)", perfil: "A icônica — só vazia 7h-9h", como: "Tour cedo (saída 6h-6h30 de Tonsai). Reservas obrigatórias, taxa 400 baht." },
  { nome: "Long Beach (Hat Yao)", perfil: "Melhor praia de Don", como: "300 baht de longtail de Tonsai. Snorkel direto da areia." },
  { nome: "Loh Dalum Bay", perfil: "Balada + sunset", como: "Pé na praia desde Tonsai. Maré baixa = piscina natural." },
  { nome: "Monkey Beach", perfil: "Macacos + foto", como: "Longtail de Tonsai (15 min). Macacos roubam — sem comida na bolsa." },
  { nome: "Bamboo Island", perfil: "Praia branca + snorkel", como: "Day-tour Phi Phi Leh costuma incluir. Taxa parque 200 baht." },
  { nome: "Pileh Lagoon", perfil: "Lagoa azul de paredão", como: "Parada do tour Phi Phi Leh. Kayak ou nadar." },
  { nome: "Loh Samah Bay", perfil: "Snorkel + Viking Cave", como: "Parte do circuito Phi Phi Leh. Lado oeste." },
  { nome: "Nui Beach", perfil: "Praia secreta", como: "30 min de longtail. Combine com Monkey + Maya." },
  { nome: "Phak Nam Bay", perfil: "Isolada, só por barco", como: "Dormindo em Phi Phi Island Village ou tour específico." },
  { nome: "Laem Tong", perfil: "Norte premium", como: "Praia dos resorts de Laem Tong. Hospede ou day-pass." },
];

const MAYA = [
  { titulo: "Reserva obrigatória", desc: "Desde 2022, entrada em Maya Bay exige reserva pelo app Thai National Parks ou via operadora. Taxa: 400 baht estrangeiro." },
  { titulo: "Janela: 7h-9h", desc: "Vai com operadora que ENTRA na praia cedo. Maioria dos tours das 9h-10h fica do lado de fora." },
  { titulo: "Não pode nadar dentro", desc: "Proibido entrar na água em Maya Bay (recife em recuperação). Você desce, anda, fotografa, sobe." },
  { titulo: "Estação fechada", desc: "Maya Bay fecha em ago-set (alta temporada de monção/recuperação). Confira antes de marcar viagem." },
  { titulo: "Cuidado com 'tour barato'", desc: "Pacote 1.000 baht não inclui taxa de 400. Pergunte SE Maya está na rota OU só Pileh + Bamboo." },
];

const VIEWPOINTS = [
  { nome: "Phi Phi Viewpoint 1", subida: "15-20 min, escada de pedra", melhor: "Sunset (17h-18h30)", custo: "20 baht" },
  { nome: "Phi Phi Viewpoint 2", subida: "+10 min do Viewpoint 1", melhor: "Mesmo horário — vista panorâmica das 2 baías", custo: "Sem taxa adicional" },
  { nome: "Phi Phi Viewpoint 3", subida: "+15 min, trilha de terra", melhor: "Mais alta, menos gente. Leve água.", custo: "Sem taxa" },
  { nome: "Nui Bay Viewpoint", subida: "20 min descida íngreme", melhor: "Praia escondida abaixo, ótima foto", custo: "Gratuito" },
];

const COMIDA = [
  { lugar: "Unni's Restaurant", bairro: "Tonsai", oque: "Brunch ocidental + tailandesa decente. Ótimo café.", preco: "200-400 baht" },
  { lugar: "Anna's Restaurant", bairro: "Tonsai", oque: "Tailandesa lenta e cara, mas consistente. Pad thai ok.", preco: "180-350 baht" },
  { lugar: "Local Food Cafe", bairro: "Tonsai (saída pro viewpoint)", oque: "Tailandês de verdade, sem turismo. Khao soi.", preco: "80-150 baht" },
  { lugar: "Papaya Restaurant", bairro: "Tonsai", oque: "Curry, som tam picante de verdade, preço justo.", preco: "120-220 baht" },
  { lugar: "Banana Bar Restaurant", bairro: "Tonsai", oque: "Pizza e cerveja gelada, vibe mochileiro.", preco: "180-300 baht" },
  { lugar: "Pum Restaurant & Cooking School", bairro: "Tonsai", oque: "Aula de culinária de manhã, jantar à noite. Curry top.", preco: "300-500 baht" },
  { lugar: "Cosmic", bairro: "Tonsai", oque: "Pizza, vibe boa, abre tarde — bom pós-balada.", preco: "200-380 baht" },
  { lugar: "Tonsai Market food court", bairro: "Tonsai", oque: "Stalls de pad thai 60-100 baht. Onde o local come.", preco: "50-120 baht" },
];

const GOLPES = [
  { golpe: "Tour Maya Bay 'incluindo tudo' por 800 baht", resposta: "Não inclui taxa de parque (400 baht) nem entrada em Maya (precisa de reserva). Confirme o valor TOTAL antes de pagar." },
  { golpe: "Longtail cobra 800 baht pra Long Beach (300 baht é o justo)", resposta: "Tabela está afixada no pier de Tonsai. Mostre o número, pague o justo." },
  { golpe: "Hostel sem ar fica do lado de bar até 4h", resposta: "Reserve com cuidado em Tonsai centro. Loh Dalum lado leste é mais quieto." },
  { golpe: "'Snorkel sunset' que volta no escuro sem colete", resposta: "Confirme se tem colete e horário de retorno por escrito. Recuse barco sem rádio." },
  { golpe: "Pula-fila pra Maya Bay vendido na rua", resposta: "Não existe pula-fila — todo mundo tem horário marcado. Você pagou nada." },
  { golpe: "Bar tab com 'drinks grátis' que aparecem cobrados", resposta: "Peça conta a cada rodada. Bangla Road Phi Phi-style: mesmo esquema." },
  { golpe: "'Aula de Muay Thai turística' R$ 600 a hora", resposta: "Aula real em Phi Phi não existe no nível de Chiang Mai. Pule." },
  { golpe: "Taxi-boat noturno 'última saída' inflado", resposta: "Última longtail oficial é 22h. Combine ida + volta com o mesmo barqueiro." },
  { golpe: "Ferry para Phuket com asiento garantido (e não tem)", resposta: "Compre só com Tigerline, Andaman Wave Master ou no balcão oficial do pier." },
  { golpe: "Massagem na praia 'preço amigo' dobra na hora", resposta: "Preço escrito antes. Casa fixa com cardápio resolve." },
];

const BLACKLIST = [
  "Pacote 'Phi Phi day-trip de Phuket 8h30' (Maya com 800 pessoas)",
  "Booze cruise sem licença e colete (várias acidentes graves)",
  "Snorkel noturno com plâncton sem operadora certificada",
  "Aluguel de jet-ski na praia (mesmo cartel de Phuket)",
  "Tour 'baby shark feeding' — não existe ético",
  "Show com macaco/animal acorrentado",
];

const APROVADAS = [
  { nome: "Captain Bob's Booze Cruise", oque: "Festa em barco com colete e segurança (single só)." },
  { nome: "Maya Bay Tours (oficial)", oque: "Tour pequeno, entrada cedo, taxa inclusa." },
  { nome: "Simba Sea Trips (de Phuket)", oque: "Day-trip premium de Phuket com Maya cedo." },
  { nome: "Phi Phi Cruiser", oque: "Sunset cruise honesto saindo de Tonsai." },
  { nome: "Pum Cooking School", oque: "Aula de culinária que vale o investimento." },
];

const ROTEIROS = [
  { dias: "Day-trip (saindo Phuket)", foco: "Sem dormir", dia: [
    "Saída 6h-6h30 Phuket (Simba Sea Trips ou Hey Phi Phi).",
    "Chega Maya 8h — vazia.",
    "Snorkel Pileh Lagoon + Bamboo Island.",
    "Almoço em Tonsai 12h-13h.",
    "Volta 14h-15h. Chega Phuket 17h.",
  ]},
  { dias: "2 dias / 1 noite", foco: "Essencial sem corrida", dia: [
    "D1: chegada Tonsai 11h, almoço, sunset viewpoint 1 e 2.",
    "Noite: Fire Show em Loh Dalum.",
    "D2: tour Maya Bay 6h30 (entrada cedo), volta 13h, ferry de tarde.",
  ]},
  { dias: "3 dias / 2 noites", foco: "Phi Phi com sossego", dia: [
    "D1: chegada, instala Long Beach (mude de hotel pro D2 se quer balada).",
    "D2: Maya Bay tour cedo + Bamboo Island.",
    "D3: viewpoint 3 + Monkey Beach, ferry pra Phuket/Krabi.",
  ]},
  { dias: "4-5 dias premium", foco: "Phi Phi todo", dia: [
    "Base Laem Tong ou Phak Nam (resort isolado).",
    "Day-trip Maya + Bamboo.",
    "Snorkel Hin Klang/Hin Daeng (mergulhador).",
    "Day-pass Phi Phi Island Village.",
    "Sunset cruise saindo de Tonsai.",
  ]},
];

const TRANSFER = [
  { destino: "Phuket Pier (Rassada) → Tonsai", bolt: "Ferry 350-550 baht", taxi: "Speedboat 800-1.200 baht", tempo: "Ferry 2h / speedboat 45 min" },
  { destino: "Krabi (Klong Jilad) → Tonsai", bolt: "Ferry 400-600 baht", taxi: "Speedboat 900 baht", tempo: "Ferry 1h30 / speedboat 40 min" },
  { destino: "Koh Lanta → Tonsai", bolt: "Ferry 600-800 baht", taxi: "Speedboat 1.200 baht", tempo: "Ferry 1h45" },
  { destino: "Ao Nang → Tonsai", bolt: "Ferry 500 baht", taxi: "Speedboat 850 baht", tempo: "Ferry 2h" },
  { destino: "Tonsai → Long Beach (longtail)", bolt: "—", taxi: "300 baht (longtail)", tempo: "10-15 min" },
  { destino: "Tonsai → Monkey Beach (longtail)", bolt: "—", taxi: "300-400 baht", tempo: "15 min" },
  { destino: "Tonsai → Laem Tong (longtail)", bolt: "—", taxi: "900-1.200 baht", tempo: "45 min" },
];

const KohPhiPhi5128 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Phi Phi · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Phi Phi sem cair no <em className="pk-display-em">tour das 8h30</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Dormir ou day-trip, Maya Bay vazia na janela certa, três viewpoints sem perrengue,
                onde fica longe da balada e dez golpes com resposta pronta.
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
                <p className="pk-bento-h">Phi Phi se ganha no horário, não no preço.</p>
                <p className="pk-bento-p">
                  Maya Bay às 8h é cinema. Maya Bay às 10h é 800 turistas brigando por foto.
                  <em> Mesmo lugar, viagem oposta.</em> A diferença está em qual barco você escolhe.
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Zonas</p><p className="pk-bento-stat">06</p><p className="pk-bento-cap">decodificadas</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">10</p><p className="pk-bento-cap">com resposta pronta</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Roteiros</p><p className="pk-bento-stat">04</p><p className="pk-bento-cap">de day-trip a 5 dias</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve o mapa offline (em Phi Phi o sinal cai).
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
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Phi Phi" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Phi Phi não tem carro, não tem estrada — só trilha e barco.</strong>{" "}
                  Quem chega esperando "tirar da mala no quarto" leva susto: do pier de Tonsai até o hotel pode ser 15 min andando com mala, ou um longtail extra. <em>Mochila &gt; mala dura.</em>
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  E Maya Bay é tudo o que dizem — mas só entre 7h e 9h. Depois das 9h30, vira selfie war. A próxima seção decide a estratégia.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="dormir-ou-nao">
            <SectionTitle icon={Home} kicker="02 — Decisão crítica" title="Dormir em Phi Phi ou só day-trip?" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker pk-gold">Dorme em Phi Phi se</p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    <li className="flex gap-2.5"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> Quer Maya Bay vazia (só barco saindo de Tonsai entra cedo).</li>
                    <li className="flex gap-2.5"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> Quer Fire Show + balada em Loh Dalum.</li>
                    <li className="flex gap-2.5"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> Quer Long Beach acordando sem 50 barcos na frente.</li>
                    <li className="flex gap-2.5"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> Tem 2+ noites pra justificar a logística de mala.</li>
                  </ul>
                </article>
              </Reveal>
              <Reveal i={1}>
                <article className="pk-card h-full pk-tone-warn">
                  <p className="pk-kicker">Só day-trip se</p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    <li className="flex gap-2.5"><AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-warn))] shrink-0 mt-0.5" /> Tem poucos dias e Phuket/Krabi é a base.</li>
                    <li className="flex gap-2.5"><AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-warn))] shrink-0 mt-0.5" /> Aceita Maya Bay com gente OU paga premium pra speedboat que entra cedo.</li>
                    <li className="flex gap-2.5"><AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-warn))] shrink-0 mt-0.5" /> Vai com criança pequena (hotéis de Phuket são mais práticos).</li>
                    <li className="flex gap-2.5"><AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-warn))] shrink-0 mt-0.5" /> Não topa quarto sem TV/sem ar de qualidade duvidosa.</li>
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="bairros">
            <SectionTitle icon={Home} kicker="03 — Onde dormir" title="6 zonas decodificadas" />
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

          <section id="praias">
            <SectionTitle icon={Waves} kicker="04 — Costa" title="10 praias e baías por perfil" />
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

          <section id="maya">
            <SectionTitle icon={Ship} kicker="05 — Joia da coroa" title="Maya Bay sem perrengue" />
            <div className="grid md:grid-cols-2 gap-5">
              {MAYA.map((m, i) => (
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
                <p><strong>Atualize antes:</strong> regras de Maya mudam toda temporada. Confirme entrada e horários no app oficial <em>Thai National Parks</em> ou com a operadora 48h antes.</p>
              </div>
            </Reveal>
          </section>

          <section id="viewpoints">
            <SectionTitle icon={Footprints} kicker="06 — Trilha" title="Os 4 viewpoints — qual subir" />
            <div className="grid md:grid-cols-2 gap-5">
              {VIEWPOINTS.map((v, i) => (
                <Reveal key={v.nome} i={i}>
                  <article className="pk-card">
                    <h3 className="pk-h3"><G>{v.nome}</G></h3>
                    <div className="pk-divider my-4" />
                    <dl className="pk-dl">
                      <div><dt>Subida</dt><dd>{v.subida}</dd></div>
                      <div><dt>Melhor</dt><dd>{v.melhor}</dd></div>
                      <div><dt>Custo</dt><dd>{v.custo}</dd></div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-info mt-8">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Combinação ideal:</strong> sai 16h30, sobe Viewpoint 1 (foto), continua até 2 (sunset), desce com lanterna pelo caminho oficial — não pela trilha lateral.</p>
              </div>
            </Reveal>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="07 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 70 — 250", items: [
                  ["Blanco Hostel at Tonsai Beach", "social, vibe alta."],
                  ["The Rock Backpacker", "barato, perto do pier."],
                  ["Mama Beach Residence", "Long Beach, bangalô simples."],
                  ["Phi Phi Hill Resort", "alto, vista — sem ar."],
                ]},
                { faixa: "Médio", price: "R$ 320 — 800", items: [
                  ["Phi Phi Holiday Resort", "Loh Dalum, piscina, padrão."],
                  ["Phi Phi Don Chukit Resort", "Tonsai, bom custo."],
                  ["Phi Phi The Beach Resort", "Long Beach, pé na areia."],
                  ["Bay View Resort Phi Phi", "Tonsai East, sossegado."],
                ]},
                { faixa: "Premium", price: "R$ 900 — 2.500+", items: [
                  ["Zeavola Resort", "Laem Tong, lua de mel ícone."],
                  ["Phi Phi Island Village Beach Resort", "Phak Nam, isolado, kid-friendly."],
                  ["SAii Phi Phi Island Village", "5★, programa eco."],
                  ["Phi Phi Natural Resort", "Laem Tong, melhor sunset."],
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
                <p><strong>Rejeitados:</strong> qualquer hostel sem janela em Tonsai Centro (som de bar até 4h), Phi Phi Banyan Villa (parede com bar), hotéis "sem ar 350 baht" (calor de 35°C, vai sair correndo).</p>
              </div>
            </Reveal>
          </section>

          <section id="transfer">
            <SectionTitle icon={MapPin} kicker="08 — Chegar" title="Ferry, speedboat e longtail" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Trajeto</th><th>Ferry</th><th>Speedboat / Longtail</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td><G q={r.destino.replace("→", "to") + " Phi Phi"}>{r.destino}</G></td>
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
                  <p className="pk-kicker mb-2">Operadoras de ferry</p>
                  <p>Tigerline, Andaman Wave Master e Phi Phi Cruiser ligam Phuket/Krabi a Tonsai. Compre direto no balcão do pier no dia anterior — comissão do hotel é 100-200 baht.</p>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">Taxa de pier</p>
                  <p>20 baht na chegada em Tonsai (sustentabilidade da ilha). Pague no caminho, recibo na mão. Nunca dê mais que isso a quem cobra "imposto".</p>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="comida">
            <SectionTitle icon={UtensilsCrossed} kicker="09 — Mesa" title="Comer em Phi Phi — 8 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Phi Phi`}>{c.lugar}</G></h3>
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
                <p><strong>Realidade da comida em Phi Phi:</strong> tudo chega de barco, preço é 30-50% acima de Phuket. Restaurantes com cardápio em 6 idiomas = turístico. Procure mercadinhos atrás do pier.</p>
              </div>
            </Reveal>
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
                        <strong className="pk-gold"><G q={a.nome + " Phi Phi"}>{a.nome}</G></strong>
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
                <p>Cada baía, praia, restaurante e pier deste guia tem um chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado do nome.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Phi Phi no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Phi+Phi+Don,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha</a>.
                </p>
                <p><strong>Salve offline antes de embarcar:</strong> em Phi Phi o sinal cai e roteamento depende disso.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="14 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Dorm", "R$ 70"], ["Comida", "R$ 80"], ["Longtail (médio)", "R$ 30"], ["Bar/balada", "R$ 60"]], total: "R$ 240 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 350 / casal"], ["Comida", "R$ 240 / casal"], ["Tour Maya", "R$ 480 / casal"], ["Extras", "R$ 100"]], total: "R$ 1.170 / casal / dia (com tour)" },
                { tipo: "Premium", linhas: [["Resort Laem Tong", "R$ 1.500 / casal"], ["Comida", "R$ 600 / casal"], ["Transfer privativo", "R$ 350"], ["Day-trip premium", "R$ 900"]], total: "R$ 3.350 / casal / dia" },
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
                { nome: "Phuket (hub Andaman)", path: "/phuket-tailandia" },
                { nome: "Koh Lanta (vizinha)", path: "/koh-lanta-tailandia" },
                { nome: "Koh Yao", path: "/koh-yao-tailandia" },
                { nome: "Mergulho na Tailândia", path: "/mergulho-tailandia" },
                { nome: "Beach Clubs", path: "/beach-clubs-tailandia" },
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
          Guia Koh Phi Phi — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohPhiPhi5128;

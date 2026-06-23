// Guia Koh Tao — versão premium (Noir & Gold)
// Rota privada: /kohtao6294
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Tao, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "Bairros", icon: Home },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "mergulho", label: "Mergulho", icon: Waves },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Chegada", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Sairee Beach", veredito: "PRINCIPAL — vida + praia + mergulho", tone: "warn", perfil: "Mergulhador iniciante, primeira vez na ilha, mochileiro social.", evite: "Quem quer silêncio absoluto (música até 2h em alguns trechos).", praia: "Sairee Beach (1,7 km) — a maior praia da ilha, sunset frontal.", quanto: "Hostel R$ 50 / hotel R$ 180 / boutique R$ 450.", quando: "Quer dive shop, restaurante e bar tudo a pé." },
  { nome: "Mae Haad", veredito: "PRÁTICO — pier + serviços", tone: "info", perfil: "Quem chega/sai com bagagem, primeira noite, quem trabalha remoto.", evite: "Quem quer praia bonita (é zona de pier).", praia: "Pequeno trecho usável ao sul do pier; vá para Sairee.", quanto: "Hotel R$ 160 / boutique R$ 380.", quando: "Base curta antes de mergulho ou ferry." },
  { nome: "Chalok Baan Kao", veredito: "TRANQUILO — casal, expat", tone: "ok", perfil: "Casal, mergulhador veterano, slow travel, family-style.", evite: "Quem quer balada (é silêncio depois das 23h).", praia: "Chalok Beach — calma, mar raso, bom pôr do sol lateral.", quanto: "Hotel R$ 200 / resort R$ 550.", quando: "Quer alternar mergulho com sossego real." },
  { nome: "Tanote Bay", veredito: "REMOTO — snorkel premium", tone: "premium", perfil: "Lua de mel discreta, fotógrafo, quem aluga scooter.", evite: "Quem não anda de scooter (estrada íngreme, táxi caro).", praia: "Tanote Bay — corais a 10 m da areia, peixes a granel.", quanto: "Bangalô R$ 230 / resort R$ 700.", quando: "Você quer acordar e nadar com peixe-papagaio." },
  { nome: "Aow Leuk", veredito: "ESCONDIDO — snorkel + sunrise", tone: "ok", perfil: "Mergulhador, casal sossego, quem topa estrada ruim.", evite: "Quem chega de táxi (descida brava, sair caro).", praia: "Aow Leuk — uma das melhores águas da ilha.", quanto: "Bangalô R$ 200 / resort R$ 600.", quando: "Para fugir totalmente da multidão." },
  { nome: "Jansom Bay / South", veredito: "PREMIUM — boutique no penhasco", tone: "premium", perfil: "Casal premium, lua de mel, fotos no penhasco.", evite: "Mochileiro (sem nada por perto a pé).", praia: "Jansom Bay — pequena, pedrosa, snorkel ótimo.", quanto: "Boutique R$ 600 / Charm Churee Villa R$ 900.", quando: "Quer privacidade total e infinity-pool." },
];

const PRAIAS = [
  { nome: "Sairee Beach", perfil: "Praia principal, sunset", como: "Setor norte é mais calmo; sul tem bares pé na areia." },
  { nome: "Sai Nuan", perfil: "Escondida a 15 min a pé de Mae Haad", como: "Trilha pela mata depois do Sensi Paradise. Vá com tênis." },
  { nome: "Freedom Beach", perfil: "Pequena, corais", como: "Acesso por trilha ou taxa de 50 baht no resort." },
  { nome: "Chalok Baan Kao", perfil: "Calma, família", como: "Mar raso até 50 m. Bom para criança." },
  { nome: "Tanote Bay", perfil: "Snorkel top, pedra de salto", como: "Scooter até lá. Bois Bar serve almoço pé na areia." },
  { nome: "Aow Leuk", perfil: "Snorkel + sunrise (leste)", como: "Estrada íngreme. Vá de scooter pela manhã." },
  { nome: "Hin Wong Bay", perfil: "Snorkel selvagem, leste", como: "Estrada de terra. Mochileiro adora; turista comum, não." },
  { nome: "Mango Bay", perfil: "Só por barco — snorkel/diving", como: "Inclusa em todo tour de snorkel da ilha." },
  { nome: "Shark Bay", perfil: "Tubarões de recife, snorkel", como: "Saída pela Thian Og Bay (Shark Bay Lounge cobra 50 baht)." },
  { nome: "Koh Nang Yuan", perfil: "Postal — 3 ilhotas ligadas por areia", como: "Day-trip 250 baht entrada. Não leve plástico. Mirante obrigatório." },
];

const MERGULHO = [
  { ponto: "Chumphon Pinnacle", nivel: "Advanced", oque: "Pináculo profundo (14-36m), grupos de barracuda, melhor mergulho da ilha." },
  { ponto: "Sail Rock", nivel: "Open Water+", oque: "Pináculo no canal Tao-Phangan, whale shark season (mar-abr/set-out)." },
  { ponto: "Twins / White Rock", nivel: "Open Water iniciante", oque: "Padrão de check-dive e Open Water. Tartarugas frequentes." },
  { ponto: "Japanese Gardens", nivel: "Snorkel + Open Water", oque: "Corais rasos em frente a Koh Nang Yuan. Perfeito iniciante." },
  { ponto: "HTMS Sattakut", nivel: "Advanced/Wreck", oque: "Naufrágio militar a 30m, entre Mae Haad e Hin Pee Wee." },
  { ponto: "Shark Island", nivel: "Advanced", oque: "Correntes, tubarões-de-recife, grandes cardumes." },
];

const ESCOLAS = [
  { nome: "Big Blue Diving", oque: "Maior e mais social. Open Water + hospedagem em pacote." },
  { nome: "Crystal Dive", oque: "5★ PADI Career Development. Inglês cristalino para iniciante." },
  { nome: "Master Divers", oque: "Boutique, turmas pequenas, ótima para tímido." },
  { nome: "Roctopus Dive", oque: "Vibe relax, instrutores experientes." },
  { nome: "New Heaven Reef Conservation", oque: "Ecoconsciente, conservação de coral + mergulho." },
];

const DAYTRIPS = [
  { tour: "Koh Nang Yuan + 4 pontos snorkel", barco: "Speedboat (volta às 16h)", quando: "Saída 9h-9h30 do pier de Mae Haad.", operadora: "Direto no pier (Lomprayah, John Suwan tours).", preco: "650-1.000 baht + 250 baht entrada Nang Yuan.", armadilha: "Última parada é Nang Yuan sob sol forte. Leve protetor reef-safe (cobrado se trouxer químico)." },
  { tour: "Sunset booze cruise", barco: "Veleiro ou barco grande", quando: "Saída 16h, retorno 19h.", operadora: "Aow Leuk Sunset, Sailing Catamaran Tao.", preco: "900-1.500 baht (open bar moderado).", armadilha: "Open bar nem sempre vale; alguns só dão 2 drinks. Pergunte antes." },
  { tour: "Try Dive — primeiro mergulho", barco: "Longtail / speedboat curto", quando: "Manhã, 9h às 13h.", operadora: "Big Blue, Crystal, Master Divers.", preco: "1.800-2.500 baht (2 mergulhos rasos).", armadilha: "Tem que dormir bem, sem álcool 12h antes — senão fica mal no barco." },
  { tour: "Open Water Course (3-4 dias)", barco: "Diário, Mae Haad", quando: "Início diário, manhã.", operadora: "Crystal, Big Blue, Roctopus.", preco: "9.500-11.000 baht (com material + hospedagem 3 noites).", armadilha: "Curso barato sem instrutor falando seu idioma estressa; pague +500 baht por turma menor." },
  { tour: "Volta de ilha de scooter", barco: "—", quando: "Manhã 9h-15h.", operadora: "Faça por conta com mapa offline.", preco: "Scooter 200 baht + gasolina 80 baht.", armadilha: "Estrada para Aow Leuk e Tanote é íngreme; sem PID = sem seguro." },
];

const GOLPES = [
  { golpe: "Scooter: arranhão prévio vira 8.000-25.000 baht (epidemia em Tao)", resposta: "Filme 360° narrando, 12 fotos com data, contrato em inglês. Use só Oishi, Adventure ou Mr Bee." },
  { golpe: "'Polícia' parando turista por capacete na Sairee road", resposta: "Multa real é 200-500 baht com recibo na delegacia. Tem propina embutida; peça recibo." },
  { golpe: "Taxi-truck Mae Haad → Sairee cobra 300 baht", resposta: "Tabela oficial 100 baht/pessoa, 200 com bagagem grande. Some passageiros e divida." },
  { golpe: "Bar tab em Sairee com 'cortesias' cobradas", resposta: "Peça a conta a cada rodada. Recuse drinks que não pediu." },
  { golpe: "Curso de mergulho com material 'novo' que é genérico", resposta: "Pergunte marca da máscara/regulador. Crystal, Big Blue e Master Divers são confiáveis." },
  { golpe: "Day-trip 'all inclusive' a Nang Yuan: entrada não inclusa", resposta: "Entrada de 250 baht NUNCA está no pacote. Considere no orçamento." },
  { golpe: "Loja de massagem na Sairee 'preço amigo', cobra dobro", resposta: "Acerte preço por escrito. Healing Hands e Jamahkiri spa são honestos." },
  { golpe: "ATM com taxa de 220 baht 'sem aviso'", resposta: "Aeon Bank em Mae Haad cobra 50 baht. Saque uma vez por viagem (10.000+)." },
  { golpe: "Sunset cruise 'open bar' = 2 drinks só", resposta: "Pergunte por escrito o que open bar significa. Pague 200 baht a mais por um real." },
  { golpe: "Bicicleta alugada com cadeado quebrado vira cobrança de roubo", resposta: "Teste o cadeado antes. Fotografe. Recuse pagar sem nota fiscal." },
  { golpe: "Tour de barco 'volta a ilha' some com sua bolsa na praia", resposta: "Não deixe nada na areia. Use dry-bag e leve junto no snorkel." },
  { golpe: "Visa run da rua que some com passaporte 8h", resposta: "Faça no Lomprayah ou Big Blue. Caixinha confiável." },
];

const BLACKLIST = [
  "Quad bike tour com 'instrutor' menor de 18 anos",
  "Aluguel de jet-ski (mesma quadrilha de Phuket/Samui)",
  "Curso de mergulho com escola sem certificado PADI/SSI visível",
  "Tour de pesca com âncora em recife (mata coral vivo)",
  "Tatuagem de bambu sem autoclave (epidemia de infecção em Sairee)",
  "Bar do mochileiro que serve 'bucket' com Lao Whisky local não-rotulado",
];

const APROVADAS = [
  { nome: "Crystal Dive Koh Tao", oque: "Curso PADI iniciante padrão-ouro." },
  { nome: "Big Blue Diving Koh Tao", oque: "Pacote curso+dorm, vida social." },
  { nome: "Master Divers", oque: "Boutique, turma pequena, ideal para tímido." },
  { nome: "Lomprayah", oque: "Ferries Tao ↔ Phangan ↔ Samui + Surat Thani." },
  { nome: "Oishi Bike", oque: "Scooter honesto em Sairee, sem golpe de caução." },
];

const ROTEIROS = [
  { dias: "3 dias", foco: "Snorkel + 1 dive", dia: [
    "D1: chegada Mae Haad, hotel em Sairee, sunset na praia.",
    "D2: day-trip Koh Nang Yuan + snorkel pontos clássicos.",
    "D3: try-dive Twins ou Japanese Gardens; voo/ferry à tarde.",
  ]},
  { dias: "5 dias", foco: "Open Water Course", dia: [
    "D1: chegada, assinatura na escola, vídeo + pool.",
    "D2-D4: confined + 4 mergulhos abertos (cert. emitida no D4).",
    "D5: fun dive em Sail Rock ou Chumphon Pinnacle, descanso, ferry.",
  ]},
  { dias: "7 dias", foco: "Tao + Phangan", dia: [
    "D1-D4: Open Water em Tao (Crystal ou Big Blue).",
    "D5: ferry Lomprayah para Koh Phangan (Sri Thanu).",
    "D6: Bottle Beach + Thong Nai Pan.",
    "D7: ferry de volta + voo.",
  ]},
  { dias: "10 dias", foco: "Tao + Phangan + Samui", dia: [
    "D1-D4: Open Water Tao.",
    "D5: 1 fun dive + ferry para Phangan.",
    "D6-D7: oeste de Phangan (sunset Sri Thanu).",
    "D8: ferry para Samui (Bangrak).",
    "D9: Ang Thong speedboat.",
    "D10: voo USM.",
  ]},
];

const TRANSFER = [
  { destino: "Bangkok → Koh Tao (avião+ferry, via Chumphon)", bolt: "—", taxi: "Lomprayah combo 1.300-1.500 baht", tempo: "10h porta a porta" },
  { destino: "Bangkok → Koh Tao (avião USM + ferry)", bolt: "—", taxi: "Voo 1.500-2.500 + ferry Lomprayah 650 baht", tempo: "6-7h" },
  { destino: "Koh Samui (Bangrak) → Koh Tao", bolt: "—", taxi: "Lomprayah 650 baht / Seatran 600 baht", tempo: "1h45 - 2h30" },
  { destino: "Koh Phangan (Thong Sala) → Koh Tao", bolt: "—", taxi: "Lomprayah 500 baht", tempo: "1h - 1h15" },
  { destino: "Mae Haad pier → Sairee Beach", bolt: "—", taxi: "Taxi-truck 100 baht/pessoa", tempo: "5 min" },
  { destino: "Mae Haad → Chalok Baan Kao", bolt: "—", taxi: "Taxi-truck 150 baht/pessoa", tempo: "10 min" },
  { destino: "Mae Haad → Tanote Bay", bolt: "—", taxi: "Taxi privado 400-600 baht", tempo: "15 min" },
];

const COMIDA = [
  { lugar: "995 Roasted Duck", bairro: "Mae Haad", oque: "Pato chinês lendário. Senta com tailandês.", preco: "120-200 baht/prato" },
  { lugar: "Su Chili", bairro: "Sairee", oque: "Tailandesa familiar, lotado por motivo.", preco: "80-180 baht" },
  { lugar: "Whitening Restaurant & Bar", bairro: "Mae Haad", oque: "Pé na areia, jantar pôr do sol.", preco: "300-700 baht" },
  { lugar: "Barracuda Restaurant", bairro: "Sairee", oque: "Fusion fine dining; carta de vinho.", preco: "500-1.200 baht" },
  { lugar: "The Gallery Restaurant", bairro: "Sairee", oque: "Tailandesa moderna, arte nas paredes.", preco: "250-550 baht" },
  { lugar: "Pranee's Kitchen", bairro: "Mae Haad", oque: "Curry massaman do livro.", preco: "100-220 baht" },
  { lugar: "Coffee Boat", bairro: "Sairee", oque: "Café de especialidade ao amanhecer.", preco: "80-150 baht" },
  { lugar: "Banyan Tree Mountain View", bairro: "Sairee Hill", oque: "Sunset 360° + jantar romântico.", preco: "400-800 baht" },
  { lugar: "Taste of Home", bairro: "Sairee", oque: "Café da manhã ocidental de verdade.", preco: "180-320 baht" },
  { lugar: "New Heaven Bakery", bairro: "Chalok", oque: "Pão fresco, sanduíches honestos.", preco: "70-180 baht" },
];

const KohTao6294 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Tao · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Tao sem cair no <em className="pk-display-em">curso errado</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Seis bairros decodificados, seis pontos de mergulho com nível real, escolas testadas,
                roteiros de Open Water a Tao+Phangan+Samui e doze golpes com resposta pronta.
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
                <p className="pk-bento-h">Tao é uma ilha de mergulho — não de praia perfeita.</p>
                <p className="pk-bento-p">
                  Quem vem por praia branca de cinema sai decepcionado. Quem vem mergulhar sai apaixonado.
                  <em> A escolha de escola decide a viagem inteira.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Bairros</p><p className="pk-bento-stat">06</p><p className="pk-bento-cap">decodificados</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Dive sites</p><p className="pk-bento-stat">06</p><p className="pk-bento-cap">por nível</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">com resposta</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve offline antes de embarcar (sinal é fraco).
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
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Tao" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Tao se vende pelo mergulho — e cumpre.</strong>{" "}
                  É o segundo lugar do mundo que mais emite certificações PADI. Praia bonita existe (Sairee, Tanote),
                  mas quem vem só para deitar em areia branca tem melhores opções em Phi Phi ou Lipe.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Escolha primeiro a escola, depois o bairro, depois o hotel. A escola dita o pier, o horário e quase a sua vida social. Próxima seção decide tudo.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="bairros">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="6 bairros decodificados" />
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
            <SectionTitle icon={Waves} kicker="03 — Costa" title="10 praias por perfil" />
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

          <section id="mergulho">
            <SectionTitle icon={Waves} kicker="04 — Mar" title="Pontos de mergulho por nível" />
            <div className="grid md:grid-cols-2 gap-5">
              {MERGULHO.map((m, i) => (
                <Reveal key={m.ponto} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${m.ponto} dive site Koh Tao`}>{m.ponto}</G></h3>
                      <span className="pk-tag-sm">{m.nivel}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{m.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <p className="pk-kicker mb-4">Escolas testadas</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ESCOLAS.map((e, i) => (
                  <Reveal key={e.nome} i={i}>
                    <article className="pk-card pk-card-tight pk-tone-ok h-full">
                      <h4 className="pk-h4"><G q={`${e.nome} Koh Tao`}>{e.nome}</G></h4>
                      <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{e.oque}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-info mt-8">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Regra de ouro do curso:</strong> turmas até 4 alunos por instrutor, vídeo e teórica em seu idioma, material novo (peça para ver as máscaras). Pague +500 baht por turma menor — vale cada centavo.</p>
              </div>
            </Reveal>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="05 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 50 — 140", items: [
                  ["Savage Hostel Koh Tao", "social, em Sairee."],
                  ["Goodtime Adventures", "pacote curso+dorm."],
                  ["Tao Bora Bora Hostel", "boutique-hostel calmo."],
                  ["Big Blue Resort dorm", "pé na areia."],
                ]},
                { faixa: "Médio", price: "R$ 180 — 500", items: [
                  ["Koh Tao Bamboo Huts", "vista de Sairee Hill."],
                  ["Beach Club Hotel by Haadtien", "Chalok premium-acessível."],
                  ["Sensi Paradise Beach Resort", "boutique em Mae Haad."],
                  ["Tarna Align Resort", "design + piscina sunset."],
                ]},
                { faixa: "Premium", price: "R$ 700 — 2.500+", items: [
                  ["Cape Shark Pool Villas", "villa privativa, vista mar."],
                  ["Charm Churee Villa", "boutique em Jansom Bay."],
                  ["Haadtien Beach Resort", "praia privada (Shark Bay)."],
                  ["Koh Tao Heights Boutique", "vista 360° das hills."],
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
          </section>

          <section id="transfer">
            <SectionTitle icon={MapPin} kicker="06 — Chegada" title="Como chegar — combos que funcionam" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Trajeto</th><th>Bolt</th><th>Preço real</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td>{r.destino}</td>
                          <td className="text-[hsl(var(--pk-muted))]">{r.bolt}</td>
                          <td className="pk-gold-soft font-medium">{r.taxi}</td>
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
                  <p className="pk-kicker mb-2">Combo certo</p>
                  <p>Bangkok → Surat Thani (avião AirAsia/Nok 1.000-1.800 baht) → ônibus+ferry Lomprayah (650 baht). Total ~8h, R$ 280-350.</p>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">Mar agitado (out-jan)</p>
                  <p>Lomprayah cancela em monção pesada. Sempre tenha 1 dia extra na volta antes de voo internacional.</p>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="moto">
            <SectionTitle icon={Bike} kicker="07 — Scooter" title="Scooter sem perder caução (Tao é o pior da Tailândia)" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Oishi Bike Koh Tao</G></strong> — referência da ilha, sem golpe.</li>
                    <li><strong><G>Adventure Koh Tao</G></strong> — Sairee, contrato em inglês.</li>
                    <li><strong><G>Mr Bee Bike Koh Tao</G></strong> — honesto, Mae Haad.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht. Mensal 3.500-4.500.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Protocolo anti-golpe</p>
                  <ol className="pk-ol text-sm">
                    <li>Filme 360° narrando cada arranhão.</li>
                    <li>12 fotos com data ativada.</li>
                    <li>Contrato em inglês com cláusulas legíveis.</li>
                    <li>Caução em dinheiro (3.000-5.000 baht) OU cópia do passaporte — nunca o original.</li>
                    <li>PID obrigatório. Sem ela, seguro = zero e propina policial.</li>
                    <li>Trajeto Sairee→Tanote/Aow Leuk tem ladeira brava — só com Click 125 nova.</li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="08 — Mar" title="Day-trips — operadora certa e horário esperto" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Koh Tao Thailand"}>{d.tour}</G></h3>
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
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Tao`}>{c.lugar}</G></h3>
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
            <SectionTitle icon={Sun} kicker="10 — Tempo" title="Roteiros prontos — 3, 5, 7 e 10 dias" />
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
            <SectionTitle icon={ShieldCheck} kicker="11 — Defesa" title="12 golpes — e a resposta exata" />
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
                      <li key={i} className="flex gap-2.5">
                        <XCircle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" />
                        <span>{b}</span>
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
                        <strong className="pk-gold"><G q={a.nome + " Thailand"}>{a.nome}</G></strong>
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
                <p>Cada bairro, praia, dive site, escola e restaurante deste guia tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado — toque e abre direto no Google Maps.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Tao no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Tao,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha inteira</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps no celular → menu → "Mapas offline" → enquadre Tao + Nang Yuan → baixar. Sinal de 4G é fraco no leste da ilha.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="14 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Dorm", "R$ 45"], ["Comida (street + 1 jantar)", "R$ 60"], ["Scooter", "R$ 30"], ["1 fun dive", "R$ 220"]], total: "R$ 355 / dia (com dive)" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 250 / casal"], ["Comida", "R$ 220"], ["Scooter", "R$ 50"], ["Open Water (rateio 4 dias)", "R$ 480/dia"]], total: "R$ 1.000 / casal / dia (em curso)" },
                { tipo: "Premium", linhas: [["Pool villa", "R$ 1.500"], ["Comida + drinks", "R$ 600"], ["Transfer privado", "R$ 250"], ["Boat-charter privativo", "R$ 1.400"]], total: "R$ 3.750 / casal / dia" },
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
                { nome: "Koh Phangan", path: "/kohphangan8463" },
                { nome: "Koh Samui", path: "/kohsamui7392" },
                { nome: "Koh Phi Phi", path: "/kohphiphi5128" },
                { nome: "Catálogo geral", path: "/" },
              ].map((g) => (
                <a key={g.path} href={g.path} target="_blank" rel="noreferrer" className="pk-island-link">
                  <span className="font-medium">{g.nome}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform" />
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-[hsl(var(--pk-line))] py-10 text-center text-sm text-[hsl(var(--pk-muted))]">
          Guia Koh Tao — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohTao6294;

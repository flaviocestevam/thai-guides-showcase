// Guia Koh Samui — versão premium (Noir & Gold)
// Rota privada: /kohsamui7392
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, Footprints, Fish, Baby, Scale, Leaf, CalendarClock, Anchor, Flower2,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Samui, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "Bairros", icon: Home },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Transfer", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida local", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "visi-praias", label: "Praia × mês", icon: Waves },
  { id: "mapa-loop", label: "Loop scooter", icon: Footprints },
  { id: "mes-perfil", label: "Mês × perfil", icon: CalendarClock },
  { id: "comparativo", label: "Samui×Phangan×Tao", icon: Scale },
  { id: "ang-thong", label: "Ang Thong + barco", icon: Anchor },
  { id: "pesca", label: "Pesca & sunset", icon: Fish },
  { id: "spa", label: "Spa & wellness", icon: Flower2 },
  { id: "norte-isolado", label: "Bang Por / Lipa Noi", icon: Home },
  { id: "familia", label: "Família/kids", icon: Baby },
  { id: "conservacao", label: "Conservação", icon: Leaf },
  { id: "booking", label: "Quando reservar", icon: CalendarClock },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Chaweng", veredito: "PRINCIPAL — agito + praia", tone: "warn", perfil: "Primeira viagem, casal jovem, quem quer balada na esquina.", evite: "Lua de mel sossegada, família com bebê (Soi Green Mango é alta).", praia: "Chaweng Beach (7 km) — a melhor da ilha em areia/água.", quanto: "Hostel R$ 60 / hotel R$ 240 / resort R$ 700.", quando: "Quer praia top + vida noturna sem precisar de táxi." },
  { nome: "Lamai", veredito: "BOM — Chaweng mais barato e calmo", tone: "ok", perfil: "Casal padrão, mochileiro maduro, longa estadia.", evite: "Quem quer praia 5★ (mar com pedras em vários trechos).", praia: "Lamai Beach (4 km) — sul é o melhor pedaço.", quanto: "Hostel R$ 50 / hotel R$ 200 / resort R$ 500.", quando: "Mesma vibe de Chaweng com 20-30% menos no bolso." },
  { nome: "Bophut / Fisherman's Village", veredito: "TOP — boutique chic, lua de mel", tone: "premium", perfil: "Casal, lua de mel, quem quer charme + sunset sem balada pesada.", evite: "Quem busca praia de cinema (areia OK, mar raso).", praia: "Bophut Beach — calma, com vista pra Koh Phangan.", quanto: "Boutique R$ 380 / resort R$ 900 / villa R$ 2.500.", quando: "Walking Street toda sexta. Melhor jantar da ilha aqui." },
  { nome: "Choeng Mon", veredito: "FAMÍLIA — praia segura, sossego", tone: "ok", perfil: "Família com criança, casal sossego, lua de mel discreta.", evite: "Quem quer vida noturna a pé.", praia: "Choeng Mon Beach — meia-lua, mar calmo, areia branca.", quanto: "Hotel R$ 280 / resort R$ 700 / Sala Samui R$ 1.800.", quando: "Padrão pra família e quem quer dormir antes da meia-noite." },
  { nome: "Maenam", veredito: "SLOW — autêntico, expat", tone: "info", perfil: "Long-stay, nômade, casal sossego, orçamento médio.", evite: "Quem fica só 4 dias (vai sentir falta de movimento).", praia: "Maenam Beach (6 km) — quase deserta, areia dourada.", quanto: "Bangalô R$ 150 / hotel R$ 240 / resort R$ 600.", quando: "14+ dias. Walking Street toda quinta, ótima." },
  { nome: "Bang Po", veredito: "AUTÊNTICO — local food, pôr do sol", tone: "info", perfil: "Quem quer rotina lenta + restaurantes lendários.", evite: "Quem quer agito (é vila de pescador).", praia: "Bang Po Beach — mar raso, snorkel fraco, ótimo p/ caminhar.", quanto: "Bangalô R$ 130 / hotel R$ 220.", quando: "Combine com Maenam. Bang Po Seafood vale a viagem." },
  { nome: "Taling Ngam / Lipa Noi", veredito: "PREMIUM — costa oeste, sunset", tone: "premium", perfil: "Lua de mel premium, quem quer sunset frontal.", evite: "Quem quer caminhar a restaurantes (precisa de táxi/scooter).", praia: "Taling Ngam — calma, fundo. Lipa Noi rasa, kid-friendly.", quanto: "Resort 5★ R$ 1.200 / Conrad ou InterContinental R$ 2.500+.", quando: "Casal com carro/scooter. Sunset diário sem turismo." },
  { nome: "Big Buddha / Bangrak", veredito: "PRÁTICO — pier pra Phangan/Tao", tone: "info", perfil: "Quem vai combinar Samui + Phangan/Tao, base por 1-2 noites.", evite: "Quem busca praia bonita (é praia de barco/pier).", praia: "Não use pra banho. Use Choeng Mon ao lado.", quanto: "Hotel R$ 200 / resort R$ 500.", quando: "Última noite antes de pegar ferry de Bangrak." },
];

const PRAIAS = [
  { nome: "Chaweng Beach", perfil: "Praia principal, areia top", como: "Chegue cedo (8-9h) pra pegar guarda-sol. Norte mais calmo." },
  { nome: "Chaweng Noi", perfil: "Vizinha menor de Chaweng", como: "Atrás do Centara Grand. Vazia mesmo em alta." },
  { nome: "Choeng Mon", perfil: "Família, meia-lua", como: "Mar calmo o ano inteiro. Restaurantes pé na areia." },
  { nome: "Bophut", perfil: "Pôr do sol + jantar", como: "Vai pela Walking Street e termina na praia." },
  { nome: "Maenam", perfil: "Caminhar 6km vazia", como: "Estacione no W Samui ou Santiburi Resort." },
  { nome: "Bang Po", perfil: "Sunset + jantar local", como: "Combine com Bang Po Seafood (frente pra praia)." },
  { nome: "Silver Beach (Crystal Bay)", perfil: "Snorkel direto da praia", como: "Entre Chaweng e Lamai. Pequena, lota — chegue 9h." },
  { nome: "Lamai", perfil: "Mais selvagem, ondas", como: "Use o sul (mais areia). Norte tem pedras." },
  { nome: "Hin Ta Hin Yai", perfil: "Pedra dos avós (foto)", como: "Não é praia de banho. 10 min descendo de Lamai." },
  { nome: "Taling Ngam", perfil: "Sunset deserto, premium", como: "Quase só hóspedes do InterContinental. Vá ao bar deles." },
  { nome: "Lipa Noi", perfil: "Mar raso, criança", como: "200m de mar até a cintura. Sunset frontal." },
  { nome: "Thong Krut", perfil: "Pier pra ilhas secretas", como: "Saída pra Koh Tan e Koh Madsum (snorkel)." },
];

const DAYTRIPS = [
  { tour: "Ang Thong Marine Park", barco: "Speedboat (1h) ou barco grande (2h30)", quando: "Saída 8h. Speedboat volta 16h, barco grande 17h.", operadora: "100 Degrees East, Blue Stars (kayak) — direto, não pelo hotel.", preco: "1.900-2.500 baht (R$ 340-450).", armadilha: "Pacote de hotel = barco grande lotado + paradas curtas. Reserve direto." },
  { tour: "Koh Tao + Nang Yuan snorkel", barco: "Speedboat", quando: "Saída 8h30 do pier de Bangrak/Maenam.", operadora: "Lomprayah (combinado), Seatran Discovery.", preco: "2.500-3.000 baht.", armadilha: "Dia muito longo (12h). Quem enjoa, pule. Melhor dormir em Tao 2 noites." },
  { tour: "Full Moon Party (Koh Phangan)", barco: "Speedboat ida+volta noturno", quando: "Saída ~20h de Bangrak, volta 4h-6h.", operadora: "Haad Rin Queen (oficial) ou Lomprayah Party Boat.", preco: "650-1.100 baht ida+volta.", armadilha: "Ferry da volta tem fila enorme 4h-5h. Vá no penúltimo barco (7h)." },
  { tour: "Koh Madsum (Pig Island) + Koh Tan", barco: "Longtail ou speedboat", quando: "Saída 9h30 do pier de Thong Krut.", operadora: "Reserve no pier mesmo — preço metade do hotel.", preco: "700-1.200 baht.", armadilha: "Pacotes 'Pig Island' premium não valem — porcos são os mesmos." },
  { tour: "Safari interior + cachoeira Na Muang", barco: "—", quando: "Manhã ou tarde, 4-5h.", operadora: "Mr Ung's Magical Safari (clássico), Samui Tropical Safari.", preco: "1.400-2.000 baht.", armadilha: "Tour com elephant trekking não é ético — recuse. Peça versão SEM elefante." },
];

const GOLPES = [
  { golpe: "Táxi do aeroporto pede 800-1.200 baht pra Chaweng", resposta: "Use Bolt/Grab — sai 350-450 baht. Ou pré-pague no balcão oficial dentro do terminal." },
  { golpe: "'Songthaew' (caminhãozinho) cobra 200 baht por trecho de 3 km", resposta: "Tabela oficial é 50-100 baht. Pergunte preço ANTES de subir, ou use Bolt." },
  { golpe: "Scooter: arranhão prévio vira 8.000-15.000 baht no devolver", resposta: "Filme 360° com áudio. 8-12 fotos com data. Nunca passaporte como caução." },
  { golpe: "Jet-ski em Chaweng com mesma quadrilha de Phuket", resposta: "Não alugue jet-ski na Tailândia. Esquema sistêmico, mesmo modus operandi." },
  { golpe: "Massagem na praia 'preço amigo' e cobra o dobro", resposta: "Acerte preço escrito (não falado) ANTES. Casa fixa com cardápio é mais segura." },
  { golpe: "Bar tab em Chaweng: drinks 'cortesia' que aparecem na conta", resposta: "Peça conta a cada rodada. Se 'cortesia' aparecer cobrada, recuse na hora." },
  { golpe: "Pacote 'tudo incluso' pra Ang Thong é barco grande lotado", resposta: "Pague 500-800 baht a mais e vá em speedboat de 20 pessoas. Vale cada baht." },
  { golpe: "Tuk-tuk noturno em Lamai pede 400 baht pra 2 km", resposta: "Use Bolt mesmo de madrugada. Tuk-tuk de Samui é cartel." },
  { golpe: "Cardápio sem preço em restaurante de praia", resposta: "Não sente. Lugar honesto tem preço escrito e tailandês comendo." },
  { golpe: "'Visa run' barato com agência da rua", resposta: "Faça pelo seu hotel grande ou agência conhecida. Agência de calçada some com seu passaporte." },
  { golpe: "ATM 'sem taxa' que cobra 220 baht", resposta: "Aeon Bank cobra 50 baht. Saque grande de uma vez (10.000+)." },
  { golpe: "Polícia turística 'multa de cortesia'", resposta: "Toda multa real tem recibo e é em delegacia. Senão é propina — recuse." },
];

const BLACKLIST = [
  "Elephant trekking (qualquer tour com passeio em cima do elefante)",
  "Tiger Zoo / qualquer foto com tigre",
  "Snake Show de calçada",
  "Pacote 'Ang Thong barco grande' (lotado, paradas curtas)",
  "Crocodile Farm Samui",
  "Tour 'Full Moon barco grande' sem retorno garantido",
];

const APROVADAS = [
  { nome: "100 Degrees East", oque: "Ang Thong speedboat premium." },
  { nome: "Blue Stars Kayaking", oque: "Ang Thong com kayak nas lagoas — único." },
  { nome: "Lomprayah", oque: "Ferries Samui ↔ Phangan ↔ Tao, day-trip Tao." },
  { nome: "Seatran Discovery", oque: "Ferry confiável Bangrak ↔ Phangan." },
  { nome: "Mr Ung's Magical Safari", oque: "Safari interior clássico (peça SEM elefante)." },
];

const ROTEIROS = [
  { dias: "3 dias", foco: "Highlights", dia: [
    "D1: chegada Choeng Mon ou Chaweng norte, jantar Bophut Walking Street (se sexta).",
    "D2: Ang Thong speedboat (8h-16h), spa à tarde, sunset Bophut.",
    "D3: scooter pela costa norte (Bang Po → Maenam → Big Buddha → Wat Plai Laem).",
  ]},
  { dias: "5 dias", foco: "Sem corrida", dia: [
    "D1: chegada Choeng Mon.",
    "D2: Ang Thong (Blue Stars com kayak).",
    "D3: descanso + Silver Beach snorkel.",
    "D4: safari interior + Na Muang cachoeira.",
    "D5: Bophut + Fisherman's, jantar Walking Street.",
  ]},
  { dias: "7 dias", foco: "Samui + 1 ilha", dia: [
    "D1-2: base Choeng Mon, Ang Thong.",
    "D3: descanso + spa.",
    "D4: Koh Tao day-trip (Lomprayah).",
    "D5: safari interior.",
    "D6: Bophut + Maenam.",
    "D7: relax + voo.",
  ]},
  { dias: "10 dias", foco: "Samui + Phangan + Tao", dia: [
    "D1-3: Samui (Ang Thong + Bophut).",
    "D4-6: ferry pra Koh Phangan (Sri Thanu lado oeste).",
    "D7-9: ferry pra Koh Tao (mergulho/snorkel).",
    "D10: volta a Samui, voo.",
  ]},
];

const TRANSFER = [
  { destino: "Aeroporto USM → Chaweng", bolt: "350-500 baht", taxi: "800-1.000 baht", tempo: "20 min" },
  { destino: "Aeroporto → Choeng Mon", bolt: "200-300 baht", taxi: "500-700 baht", tempo: "10 min" },
  { destino: "Aeroporto → Bophut", bolt: "250-380 baht", taxi: "600-800 baht", tempo: "15 min" },
  { destino: "Aeroporto → Lamai", bolt: "450-600 baht", taxi: "1.000-1.200 baht", tempo: "30 min" },
  { destino: "Aeroporto → Maenam", bolt: "350-500 baht", taxi: "700-900 baht", tempo: "20 min" },
  { destino: "Aeroporto → Taling Ngam", bolt: "700-950 baht", taxi: "1.500 baht", tempo: "55 min" },
  { destino: "Chaweng → Bophut", bolt: "180-260 baht", taxi: "400 baht", tempo: "15 min" },
  { destino: "Chaweng → Lamai", bolt: "200-300 baht", taxi: "500 baht", tempo: "20 min" },
  { destino: "Chaweng → Bangrak Pier", bolt: "230-340 baht", taxi: "500-600 baht", tempo: "20 min" },
];

const COMIDA = [
  { lugar: "Bang Po Seafood", bairro: "Bang Po", oque: "Frutos do mar lendários, pés na areia. Lula grelhada obrigatória.", preco: "300-600 baht/prato" },
  { lugar: "Krua Bophut", bairro: "Fisherman's Village", oque: "Tailandesa autêntica que tailandês frequenta.", preco: "120-280 baht/prato" },
  { lugar: "Coco Tam's", bairro: "Bophut", oque: "Beach bar com puffs, fogo, sunset frontal.", preco: "200-450 baht (drinks/petiscos)" },
  { lugar: "Dining on the Rocks (Six Senses)", bairro: "Choeng Mon", oque: "Tasting menu premium, vista penhasco. Lua de mel.", preco: "3.500-6.000 baht/menu" },
  { lugar: "Stacked Burgers", bairro: "Chaweng", oque: "Pra quando quiser parar de comer arroz.", preco: "350-550 baht" },
  { lugar: "Khao Hom", bairro: "Maenam", oque: "Tailandesa familiar, preço local mesmo em pico.", preco: "80-180 baht/prato" },
  { lugar: "Fisherman's Village Walking Street", bairro: "Bophut", oque: "Sexta 17h-23h. Street food + boutiques.", preco: "40-180 baht" },
  { lugar: "Maenam Walking Street", bairro: "Maenam", oque: "Quinta. Mais local, menos turística.", preco: "30-150 baht" },
  { lugar: "Page Restaurant (The Library)", bairro: "Chaweng", oque: "Tailandesa moderna, piscina vermelha.", preco: "400-900 baht" },
  { lugar: "Khaw Glong", bairro: "Lamai", oque: "Curry massaman e khao soi de boa, preço justo.", preco: "100-200 baht" },
];

const KohSamui7392 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Samui · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Samui sem cair no <em className="pk-display-em">resort errado</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Oito bairros decodificados, transfer pelo preço real, day-trips ao Ang Thong e Koh Tao com a operadora certa,
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

            <div className="pk-bento mt-16">
              <Reveal i={4} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">A regra única</p>
                <p className="pk-bento-h">Costa norte ≠ costa leste ≠ costa oeste.</p>
                <p className="pk-bento-p">
                  Chaweng é praia + balada. Bophut é charme + jantar. Taling Ngam é sunset + silêncio.
                  <em> Três Samuis na mesma ilha.</em> Escolher errado é odiar Samui sem culpa de Samui.
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Bairros</p><p className="pk-bento-stat">08</p><p className="pk-bento-cap">decodificados</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">com resposta pronta</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Roteiros</p><p className="pk-bento-stat">04</p><p className="pk-bento-cap">de 3 a 10 dias</p></Reveal>
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

        <nav className="pk-toc">
          <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
            {TOC.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="pk-toc-chip"><t.icon className="w-3.5 h-3.5" /> {t.label}</a>
            ))}
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-20 md:py-28 space-y-28 md:space-y-36">
          <section id="comeco">
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Samui" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Samui não é uma vibe — são três costas com três humores.</strong>{" "}
                  Costa leste (Chaweng/Lamai) = praia top + agito. Costa norte (Bophut/Maenam/Bang Po) = charme + sunset.
                  Costa oeste (Taling Ngam/Lipa Noi) = silêncio + lua de mel.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Escolher o bairro errado é a única forma garantida de odiar Samui sem que Samui tenha culpa. A próxima seção decide a viagem.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="bairros">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="8 bairros decodificados" />
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

          <section id="praias">
            <SectionTitle icon={Waves} kicker="03 — Costa" title="12 praias por perfil" />
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
                <p><strong>Águas-vivas raras mas presentes (nov-jan, costa leste).</strong> Se ver bandeira amarela ou vinagre na orla, evite o trecho. Resorts grandes têm rede.</p>
              </div>
            </Reveal>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="04 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 50 — 140", items: [
                  ["Lub d Koh Samui Chaweng Beach", "design, pé na praia."],
                  ["The Hammock Samui Beach Resort Lamai", "bangalô económico."],
                  ["Coco Garden Resort Lamai", "clássico mochileiro."],
                  ["Bodega Phangan-style hostels em Maenam", "vibe slow."],
                ]},
                { faixa: "Médio", price: "R$ 220 — 600", items: [
                  ["The Hideaway Samui Bophut", "boutique discreto."],
                  ["OZO Chaweng Samui", "piscina top, preço justo."],
                  ["Peace Resort Bophut", "pé na areia, lua de mel acessível."],
                  ["Ibis Samui Bophut", "padrão internacional, sem surpresa."],
                ]},
                { faixa: "Premium", price: "R$ 900 — 4.000+", items: [
                  ["Six Senses Samui Choeng Mon", "Top 3 da Tailândia."],
                  ["Sala Samui Choeng Mon Resort", "pool villa elegante."],
                  ["W Koh Samui Maenam", "design + festas curadas."],
                  ["InterContinental Koh Samui Taling Ngam", "sunset frontal, infinity-pool icônica."],
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
                <p><strong>Rejeitados:</strong> qualquer hotel na Soi Green Mango (som de balada até 4h), Chaweng Cove Beach Resort (mar com pedras + manutenção fraca), Samui First House (avaliações infladas).</p>
              </div>
            </Reveal>
          </section>

          <section id="transfer">
            <SectionTitle icon={MapPin} kicker="05 — Chegada" title="Transfer, Bolt e ferries" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Trajeto</th><th>Bolt / Grab</th><th>Táxi balcão</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td><G q={r.destino.replace("Aeroporto USM", "Samui International Airport").replace("→", "to")}>{r.destino}</G></td>
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
                  <p>Bolt é o mais barato. Grab tem mais carros à noite. Songthaew (caminhãozinho amarelo/vermelho) custa 50-100 baht por trecho — pergunte preço ANTES.</p>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">Chegando de ferry</p>
                  <p>Lomprayah (catamarã rápido) e Seatran (mais barato) ligam Samui a Phangan (30 min) e Tao (1h45). Pier principal: <G q="Bangrak Pier Koh Samui">Bangrak</G>. Saídas múltiplas por dia.</p>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="moto">
            <SectionTitle icon={Bike} kicker="06 — Scooter" title="Scooter sem perder caução" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Cat Motors Koh Samui</G></strong> (Chaweng/Bophut) — top da Tailândia, contrato em inglês, sem passaporte.</li>
                    <li><strong><G>Mr Bee Bike Rent Samui</G></strong> — local honesto em Lamai.</li>
                    <li><strong><G>BMR Motorbike Rental Samui</G></strong> — Maenam, long-stay.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht (Honda Click 125). Mensal 3.500-4.500.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Protocolo anti-golpe</p>
                  <ol className="pk-ol text-sm">
                    <li>Filme 360° na hora, narrando cada arranhão.</li>
                    <li>Tire 8-12 fotos com data ativada no celular.</li>
                    <li>Exija contrato em inglês com cláusulas descritas.</li>
                    <li>Caução só em dinheiro (฿2.000-5.000) ou cópia autenticada do passaporte — nunca o original.</li>
                    <li>Leve PID (Permissão Internacional, categoria A). Sem ela, seguro não cobre.</li>
                    <li>Use capacete sempre. Polícia para turista sem capacete pra propina.</li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="07 — Mar" title="Day-trips — operadora certa e horário esperto" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Koh Samui Thailand"}>{d.tour}</G></h3>
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
            <SectionTitle icon={UtensilsCrossed} kicker="08 — Mesa" title="Onde o tailandês come — 10 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Samui`}>{c.lugar}</G></h3>
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
                <p><strong>Regra de ouro:</strong> cardápio em foto de cada prato sem preço e zero tailandês = vire as costas. Procure o lugar movimentado, cardápio escrito — Google Translate na câmera resolve.</p>
              </div>
            </Reveal>
          </section>

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

          <section id="antigolpe">
            <SectionTitle icon={ShieldCheck} kicker="10 — Defesa" title="12 golpes — e a resposta exata" />
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
            <SectionTitle icon={XCircle} kicker="11 — Curadoria" title="Lista negra de tours + os que valem" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker text-[hsl(var(--pk-alert))]">Evitar</p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {BLACKLIST.map((b, i) => (
                      <li key={i} className="flex gap-2.5">
                        <XCircle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" />
                        <G q={b + " Koh Samui"}>{b}</G>
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
                        <strong className="pk-gold"><G q={a.nome + " Koh Samui Thailand"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="12 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada bairro, praia, restaurante, locadora e pier deste guia tem um chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado do nome — toque para abrir direto no Google Maps.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Samui no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Samui,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha inteira</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps no celular → menu → "Mapas offline" → "Selecione seu próprio mapa" → enquadre Samui → baixar. Funciona sem chip por 30 dias.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="13 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Hostel/bangalô", "R$ 55"], ["Comida (street)", "R$ 60"], ["Transporte (scooter)", "R$ 30"], ["Day-trip (média)", "R$ 50"]], total: "R$ 195 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 280 / casal"], ["Comida", "R$ 220 / casal"], ["Transporte", "R$ 90"], ["Day-trip Ang Thong", "R$ 680"]], total: "R$ 920 / casal / dia (médio sem tour)" },
                { tipo: "Premium", linhas: [["Resort 5★", "R$ 1.200 / casal"], ["Comida", "R$ 550 / casal"], ["Transfer privativo", "R$ 280"], ["Day-trip premium", "R$ 1.000"]], total: "R$ 2.700 / casal / dia" },
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
                { nome: "Koh Phangan (ilha vizinha)", path: "/koh-phangan-tailandia" },
                { nome: "Koh Tao (ilha vizinha)", path: "/koh-tao-tailandia" },
                { nome: "Koh Phi Phi", path: "/koh-phi-phi-tailandia" },
                { nome: "Lua de Mel na Tailândia", path: "/lua-de-mel-tailandia" },
                { nome: "Beach Clubs", path: "/beach-clubs-tailandia" },
                { nome: "Retiros & wellness", path: "/retiros-tailandia" },
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
          Guia Koh Samui — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohSamui7392;

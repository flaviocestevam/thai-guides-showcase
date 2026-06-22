import { SEO } from "@/components/SEO";
import heroAsset from "@/assets/generated/songkran-hero.png.asset.json";

const Section = ({ chapter, title, children }: { chapter: string; title: string; children: React.ReactNode }) => (
  <section className="py-16 px-6">
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

type City = {
  name: string;
  vibe: string;
  intensity: string;
  duration: string;
  bestFor: string;
  avoid: string;
  stayZone: string;
  avoidZone: string;
  templeHighlight: string;
  rating: number;
};

const cities: City[] = [
  {
    name: "Chiang Mai",
    vibe: "A capital espiritual e a guerra de água mais longa do país. Cerimônias em Wat Phra Singh pela manhã, batalha total ao redor do fosso do Old City à tarde.",
    intensity: "10/10 — caos organizado",
    duration: "Festa estende-se por 6 dias (geralmente 11 a 16 de abril, oficialmente 13–15).",
    bestFor: "Quem quer a experiência completa: tradição + festa pesada. Foto perfeita do fosso virando piscina pública.",
    avoid: "Quem odeia multidão extrema ou trânsito travado por dias.",
    stayZone: "Nimmanhaemin (Nimman) — perto do agito mas com bairro respirável à noite. Hotéis com pátio interno, não rua direta.",
    avoidZone: "Ratchadamnoen Road dentro do Old City — sua porta vira frente de batalha 12h por dia. Não dorme aí.",
    templeHighlight: "Wat Phra Singh: cerimônia de banho da imagem do Buda às 8h do dia 13. Wat Chedi Luang: procissão à tarde.",
    rating: 10,
  },
  {
    name: "Bangkok",
    vibe: "Megacidade dividida: Khao San e Silom viram zona de guerra; o resto da cidade segue (quase) normal. Energia jovem, internacional, mochileiro.",
    intensity: "9/10 nas zonas designadas, 2/10 fora delas",
    duration: "Oficial 13–15 de abril. Khao San estica até dia 16 informalmente.",
    bestFor: "Quem combina festa com museus, comida de rua premium, vida noturna e quer voltar pra ar-condicionado fácil.",
    avoid: "Quem busca o lado tradicional puro — Bangkok virou mais festival que ritual.",
    stayZone: "Sukhumvit (Asok, Phrom Phong) — BTS direto, longe da guerra, fácil ir e voltar. Sathorn para conforto.",
    avoidZone: "Khao San Road, Rambuttri, Silom Road — não reserve hotel com porta na rua nessas três.",
    templeHighlight: "Wat Pho: cerimônia de despertar do Buda Reclinado. Wat Suthat: balanço gigante e procissão.",
    rating: 9,
  },
  {
    name: "Pattaya",
    vibe: "A festa mais 'extra': dura oficialmente até dia 19 (Wan Lai). Praia, expat, vibe de carnaval com música eletrônica até 4h.",
    intensity: "10/10 com gosto de Spring Break",
    duration: "13 a 19 de abril (mais longa do país).",
    bestFor: "Quem quer praia + festa intensa + vida noturna sem freio. Grupo de amigos jovens.",
    avoid: "Família com crianças pequenas e quem busca cultura.",
    stayZone: "Pratamnak Hill ou Wongamat (Naklua) — 5 min da festa, dormida tranquila. Hotel com piscina sai ฿2.500/noite.",
    avoidZone: "Beach Road e Walking Street nas datas — caos absoluto 24h.",
    templeHighlight: "Wat Yansangwararam (saída de Pattaya): cerimônia mais sóbria, menos turistas.",
    rating: 8,
  },
  {
    name: "Phuket (Patong)",
    vibe: "Festa concentrada em Bangla Road. Mais turística, mais cara, mais curta. Misto de Songkran com vida noturna padrão de Patong.",
    intensity: "8/10",
    duration: "Apenas 13 de abril (oficial). Algumas resorts estendem dia 14.",
    bestFor: "Quem já vai pra Phuket por outros motivos e quer 1 dia de Songkran. Combina com Phi Phi/Krabi pós-festa.",
    avoid: "Quem está fazendo viagem específica pra Songkran — Phuket é a opção mais fraca em duração.",
    stayZone: "Karon ou Kata Beach — 15 min de Patong, longe do caos.",
    avoidZone: "Bangla Road, Soi Bangla, primeiras 2 quadras da Beach Road de Patong.",
    templeHighlight: "Wat Chalong: procissão na manhã do dia 13.",
    rating: 7,
  },
  {
    name: "Ayutthaya",
    vibe: "Versão tradicional sem turistas em massa. Ruínas históricas, elefantes em procissão (não os turísticos), cerimônias autênticas em templos de 700 anos.",
    intensity: "5/10 — festa controlada e respeitosa",
    duration: "13 a 15 de abril.",
    bestFor: "Quem quer fotos épicas (água + ruínas), evita aglomerações jovens e prioriza a parte ritual. Bate-e-volta de Bangkok (1h30 de trem).",
    avoid: "Quem quer balada e DJs.",
    stayZone: "Pequenas guesthouses no centro histórico (฿800–฿1.500/noite). Sai a pé pra todos os templos.",
    avoidZone: "Não há zona de risco — a cidade é small enough.",
    templeHighlight: "Wat Phra Mahathat (Buda na raiz da árvore): cerimônia coletiva ao amanhecer dia 13.",
    rating: 8,
  },
];

const CityCard = ({ c }: { c: City }) => (
  <Card>
    <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
      <h4 className="text-foreground font-semibold text-lg">{c.name}</h4>
      <span className="text-gold text-sm whitespace-nowrap">★ {c.rating}/10</span>
    </div>
    <p className="text-sm"><strong className="text-foreground">Vibe:</strong> {c.vibe}</p>
    <p className="text-sm"><strong className="text-foreground">Intensidade:</strong> {c.intensity}</p>
    <p className="text-sm"><strong className="text-foreground">Duração:</strong> {c.duration}</p>
    <p className="text-sm"><strong className="text-foreground">Ideal para:</strong> {c.bestFor}</p>
    <p className="text-sm"><strong className="text-foreground">Evite se:</strong> {c.avoid}</p>
    <p className="text-sm"><strong className="text-foreground">Onde se hospedar:</strong> {c.stayZone}</p>
    <p className="text-sm"><strong className="text-foreground">Nunca durma em:</strong> {c.avoidZone}</p>
    <p className="text-sm text-gold">🛕 {c.templeHighlight}</p>
  </Card>
);

const Songkran9482 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Guia Songkran — 5 cidades comparadas, roteiros e proteção"
        description="Guia interno: 5 cidades de Songkran lado a lado, 3 roteiros prontos (5/10/15 dias), proteção de documentos e eletrônicos, etiqueta de templo e mapas das zonas quentes."
        canonicalPath="/songkran9482"
      />

      {/* Hero */}
      <header className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroAsset.url} alt="Songkran — Ano Novo Tailandês" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative max-w-3xl mx-auto px-6 pb-16 w-full">
          <p className="guide-section-label mb-3">💦 Guia Songkran — Ano Novo Tailandês</p>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground leading-tight">
            Sobreviva e curta<br />a maior festa da Tailândia.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            5 cidades comparadas, 3 roteiros prontos, mapas das zonas quentes, proteção real de celular e passaporte, e o lado sagrado que 90% dos turistas perdem.
          </p>
        </div>
      </header>

      <Section chapter="Capítulo 1" title="O que é Songkran (e por que importa entender isso)">
        <p>Songkran é o Ano Novo Tailandês — feriado nacional de 3 dias oficiais (13, 14 e 15 de abril) com origem budista. A palavra vem do sânscrito <em>saṃkrānti</em>, "passagem", marcando a entrada do sol em Áries no calendário astrológico.</p>
        <p>O ritual original é simples: jogar água sobre as imagens de Buda nos templos para purificar, e depois sobre familiares mais velhos em sinal de respeito. A água é uma bênção, não uma piada.</p>
        <p>Foi essa bênção que virou, ao longo de décadas, a maior guerra de água do planeta — com baldes, mangueiras, caminhões-pipa e armas de água industriais nas ruas de Chiang Mai, Bangkok e Pattaya.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Dois Songkrans em um:</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Manhã (6h–10h):</strong> cerimônia em templo. Banho da imagem do Buda, oferendas, monges. Silencioso.</li>
            <li><strong className="text-foreground">Tarde e noite (12h–22h):</strong> guerra de água nas ruas. Música, dança, álcool e zero piedade com celular.</li>
          </ul>
        </Card>
        <p className="text-gold">💡 Quem curte só o segundo perde a alma da festa. Quem foge do segundo perde a energia. Faça os dois — esse guia mostra como.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 2" title="As 5 cidades de Songkran, comparadas">
        <p>Cada cidade tem uma personalidade. Escolher errado é o equivalente a passar o réveillon em Belo Horizonte achando que vai pegar Copacabana.</p>
        <div className="space-y-3">{cities.map((c) => <CityCard key={c.name} c={c} />)}</div>
        <p className="text-gold mt-4">💡 <strong>Resumo brutalmente honesto:</strong> primeira viagem? <strong className="text-foreground">Chiang Mai</strong>. Combina com balada e BTS? <strong className="text-foreground">Bangkok</strong>. Quer extrema com praia? <strong className="text-foreground">Pattaya</strong>. Busca o lado cultural? <strong className="text-foreground">Ayutthaya</strong>. Phuket só se já estiver lá.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 3" title="Calendário oficial — dia a dia, cidade a cidade">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">11 de abril (sexta antes)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Chiang Mai:</strong> primeira tarde de batalha leve. Locais começam a testar. Já leva proteção.</li>
            <li><strong className="text-foreground">Bangkok / Pattaya:</strong> ainda normal. Aproveite pra abastecer.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">12 de abril (Wan Sungkharn Lohng — limpeza)</p>
          <ul className="text-sm space-y-1">
            <li>Dia tradicional de limpar a casa. Templos enchem. Boas fotos cerimoniais.</li>
            <li><strong className="text-foreground">Chiang Mai:</strong> festa pega na Nimman à noite.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">13 de abril (Maha Songkran — dia principal)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Manhã (6h–10h):</strong> banho da imagem do Buda. Vista branco/azul claro, sem chinelo dentro do templo.</li>
            <li><strong className="text-foreground">Procissão:</strong> Chiang Mai sai do Tha Phae Gate às 13h. Bangkok: Wat Pho 14h. Ayutthaya: Wat Phra Mahathat 9h.</li>
            <li><strong className="text-foreground">Tarde/noite:</strong> guerra de água começa pra valer em todas as cidades.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">14 de abril (Wan Nao — dia da família)</p>
          <ul className="text-sm space-y-1">
            <li>Tailandeses passam o dia com pais e avós (rod nam dam hua: água sobre as mãos dos mais velhos).</li>
            <li>Festa nas ruas continua intensa. Trânsito caótico — abandone Grab, vá a pé ou de songthaew.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">15 de abril (Wan Thaloeng Sok — Ano Novo)</p>
          <ul className="text-sm space-y-1">
            <li>Último dia oficial. Pico de turistas. Pattaya estica pra 16, 17, 18 e 19 (Wan Lai).</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">16–19 de abril (encerramento)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Chiang Mai:</strong> dia 16 ainda tem ação leve nas Nimman. Dia 17 cidade volta ao normal.</li>
            <li><strong className="text-foreground">Pattaya:</strong> Wan Lai 19 de abril — última batalha colossal na Beach Road.</li>
            <li><strong className="text-foreground">Resto do país:</strong> tudo encerrado dia 16.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 4" title="Roteiro 5 dias — Modo Imersão (Chiang Mai)">
        <p><strong className="text-foreground">Para quem:</strong> tem feriado curto, quer 100% da festa, sem deslocamento.</p>
        <Card>
          <ul className="text-sm space-y-1">
            <li>📅 <strong>Dia 12 (chegada):</strong> voo BKK→CNX (1h, ฿1.500). Check-in no hotel da Nimman. Compra de armas e proteção no Tha Phae Market (saiba quanto pagar — Cap. 7).</li>
            <li>🛕 <strong>Dia 13 (manhã):</strong> Wat Phra Singh às 7h pra cerimônia do banho do Buda. Almoço em Khao Soi Mae Sai.</li>
            <li>💦 <strong>Dia 13 (tarde):</strong> primeira batalha no fosso do Old City. Vá pelo lado Suan Dok (oeste) — menos turista, mais local.</li>
            <li>💦 <strong>Dia 14:</strong> dia inteiro de batalha. Pausa às 16h pra massagem nos pés (฿250/h) e recuperar o ouvido.</li>
            <li>🎉 <strong>Dia 15:</strong> manhã de templo (Wat Chedi Luang) + tarde Tha Phae Gate (pico de turistas). À noite, jantar no Sunday Walking Street se for domingo.</li>
            <li>✈️ <strong>Dia 16 (retorno):</strong> voo de volta cedo. Cidade ainda úmida mas operando.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Orçamento total:</strong> ฿18.000–฿25.000 (R$ 2.700–R$ 3.750) sem passagem internacional.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 5" title="Roteiro 10 dias — Cultura + Festa (Ayutthaya → Chiang Mai → Phuket)">
        <p><strong className="text-foreground">Para quem:</strong> quer combinar tradição, batalha e descanso na praia.</p>
        <Card>
          <ul className="text-sm space-y-1">
            <li>📅 <strong>Dia 1–2 (Bangkok):</strong> aclimatar. Hospede em Sukhumvit. Visite Wat Pho e Grand Palace antes do feriado fechar tudo.</li>
            <li>🛕 <strong>Dia 3 (Ayutthaya):</strong> trem ฿20 (1h30). Cerimônia de Songkran no Wat Phra Mahathat. Dorme na guesthouse local.</li>
            <li>✈️ <strong>Dia 4:</strong> volta Bangkok manhã, voo BKK→CNX à tarde.</li>
            <li>🛕💦 <strong>Dia 5–7 (Chiang Mai):</strong> 13, 14, 15 — auge. Combo templo de manhã + guerra à tarde.</li>
            <li>✈️ <strong>Dia 8:</strong> voo CNX→HKT manhã (3h, ฿2.200).</li>
            <li>🏝️ <strong>Dia 9–10 (Phuket/Phi Phi):</strong> descomprimir. Praia, mergulho, massagem. Sem água na cara.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Orçamento:</strong> ฿42.000–฿55.000 (R$ 6.300–R$ 8.250).</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 6" title="Roteiro 15 dias — Songkran Completo (3 cidades, 3 estilos)">
        <p><strong className="text-foreground">Para quem:</strong> quer pegar a festa em múltiplos formatos e ter dias de descanso entre cada uma.</p>
        <Card>
          <ul className="text-sm space-y-1">
            <li>🛕 <strong>Dia 1–3 (Bangkok):</strong> aclimatar + 1 dia em Ayutthaya.</li>
            <li>💦 <strong>Dia 4–9 (Chiang Mai):</strong> chegada antes da festa começar (dia 11). 6 dias na cidade que estica a festa por mais tempo.</li>
            <li>🏝️ <strong>Dia 10–11 (Pai):</strong> 3h de van de Chiang Mai. Mountain town pra resetar.</li>
            <li>✈️ <strong>Dia 12 (Bangkok layover):</strong> voo Pai→CNX→BKK.</li>
            <li>🌊 <strong>Dia 13–14 (Pattaya):</strong> Wan Lai dia 19. Última festa colossal antes do retorno.</li>
            <li>✈️ <strong>Dia 15 (retorno):</strong> Bangkok → Brasil.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Orçamento:</strong> ฿62.000–฿85.000 (R$ 9.300–R$ 12.750).</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 7" title="Armas de água — onde comprar, quanto pagar, qual escolher">
        <p>Comprar arma na hora errada no lugar errado custa 3x. Aqui está o que pagar (preço local) e onde achar.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Tabela de preço justo (em baht)</p>
          <ul className="text-sm space-y-1">
            <li>Pistola pequena (1L): ฿80–฿150 (turista paga ฿300)</li>
            <li>Espingarda pump (2L): ฿180–฿250 (turista paga ฿600)</li>
            <li>Super Soaker (Hasbro original, 3L+): ฿800–฿1.200</li>
            <li>Mochila d'água (3,5L com bomba): ฿350–฿500</li>
            <li>Balde improvisado (você compra na 7-Eleven): ฿40</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Onde comprar (preço local)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Chiang Mai:</strong> Warorot Market (Kad Luang) — corredor de armas a partir do dia 5 de abril. Tha Phae Market também.</li>
            <li><strong className="text-foreground">Bangkok:</strong> Sampheng Lane (Chinatown) — atacado. Pratunam à noite.</li>
            <li><strong className="text-foreground">Pattaya:</strong> Tukcom IT Mall (subsolo) — modelos elétricos.</li>
            <li><strong className="text-foreground">Phuket:</strong> Banzaan Market (Patong) — apenas modelos médios, caros.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">🛒 Comprar online no Lazada (entrega no hotel)</p>
          <p className="text-sm mb-2">Se você chega em cima da hora ou não quer perder tempo caçando mercado, dá pra pedir no <a href="https://www.lazada.co.th/catalog/?q=water+gun+songkran" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold">Lazada Tailândia</a> (equivalente local da Amazon) e receber direto no hotel em 1–3 dias.</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Busque por:</strong> "water gun songkran", "ปืนฉีดน้ำ" (pistola d'água em tailandês) ou "super soaker".</li>
            <li><strong className="text-foreground">Preço online:</strong> igual ou até mais barato que o mercado de rua (฿90–฿400), sem preço de turista.</li>
            <li><strong className="text-foreground">Pagamento:</strong> aceita cartão internacional (Visa/Master) e COD (paga na entrega, em dinheiro).</li>
            <li><strong className="text-foreground">Endereço de entrega:</strong> use o nome e endereço do hotel + seu telefone tailandês (compre SIM no aeroporto). Avise a recepção que vai chegar pacote no seu nome.</li>
            <li><strong className="text-foreground">Prazo:</strong> peça com pelo menos 5 dias de antecedência. Entre os dias 10–15 o Lazada atrasa por volume.</li>
            <li><strong className="text-foreground">Alternativa:</strong> <a href="https://shopee.co.th/search?keyword=water%20gun" target="_blank" rel="noopener noreferrer" className="text-primary underline">Shopee Tailândia</a> tem o mesmo catálogo, normalmente ฿10–฿30 mais barato.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Estratégia de compra:</strong></p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Compre <strong>2 dias antes</strong> do dia 13. Dia 12 já dobra preço.</li>
          <li>Negocie em tailandês básico: "<em>tao rai khrap?</em>" (quanto custa?). Se responder direto, é preço local. Se hesitar, é preço turista.</li>
          <li>Espingarda &gt; pistola pra batalha de rua. Pistola pequena só pra brincar com criança.</li>
          <li>Compre 2: uma fica no hotel, outra contigo. Roubo de arma de água EXISTE.</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 8" title="Proteção de eletrônicos — o que funciona e o que vai estragar seu celular">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">✅ O que FUNCIONA de verdade</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Pouch de PVC com fecho duplo zip-lock</strong> (modelo "JOTO" no Shopee/Lazada): ฿120. Solução #1 dos brasileiros que moram aqui.</li>
            <li><strong className="text-foreground">Saco zip-lock industrial 3L + elástico de cabelo:</strong> ฿15 no 7-Eleven. Funciona se selar bem.</li>
            <li><strong className="text-foreground">Celular com IP68 (iPhone 12+, Galaxy S20+):</strong> aguenta respingo, NÃO aguenta jato direto contínuo. Use mesmo assim a pouch.</li>
            <li><strong className="text-foreground">Capa Pelican mini ou OtterBox:</strong> caro (฿1.500+) mas é a solução pra fotógrafo.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">❌ O que NÃO funciona (apesar de venderem)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Capinha plástica "waterproof" vendida na rua por ฿100:</strong> 80% rompe no primeiro jato forte. Não use.</li>
            <li><strong className="text-foreground">Saco plástico comum amarrado:</strong> rompe e a água entra pelo nó.</li>
            <li><strong className="text-foreground">"Arroz salvador":</strong> mito. Celular molhado vai pra autorizada (BKK: iCare Sukhumvit).</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Para câmera DSLR/mirrorless:</strong> capa de chuva DiCAPac WP-S10 (฿2.500 importada). Pra GoPro: já é à prova d'água, só não submerja além de 10m.</p>
        <p className="text-gold">💡 Regra de ouro: <strong>NUNCA</strong> tire o celular da pouch pra tirar foto no meio da batalha. Você acha que vai voltar rápido, não vai. Use a câmera frontal através do plástico.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 9" title="Proteção de documentos — passaporte, dinheiro, cartão">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">A regra de ouro</p>
          <p className="text-sm"><strong className="text-foreground">Passaporte NUNCA sai do hotel durante Songkran.</strong> Deixe no cofre. Leve foto digital + cópia laminada plastificada.</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">O que levar na rua</p>
          <ul className="text-sm space-y-1">
            <li>Cópia plastificada do passaporte + visto (autoridades aceitam durante o feriado).</li>
            <li>Dinheiro em saco zip-lock dentro do bolso interno da pochete impermeável.</li>
            <li>1 cartão de crédito secundário (não o principal) também no zip-lock.</li>
            <li>Cópia em papel do número de emergência da operadora do cartão.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Onde guardar (em ordem de segurança)</p>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Cofre do hotel — passaporte, dinheiro principal, cartão principal.</li>
            <li>Pochete impermeável tipo riñonera Sea to Summit (฿1.200) — debaixo da camisa.</li>
            <li>Bolso interno da bermuda de surf com zíper — uso emergencial.</li>
          </ol>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Se perder passaporte mesmo assim:</strong> Embaixada do Brasil em Bangkok (+66 2 256 6023) emite emergencial em 24–48h durante o feriado (plantão). Custo: USD 50. Você precisa do BO (Boletim de Ocorrência) feito na Tourist Police 1155.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 10" title="Etiqueta de templo — como participar do lado sagrado sem ofender">
        <p>Manhã do dia 13 é o momento mais bonito do feriado. Mas é também onde brasileiro mete a pata mais facilmente.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Vestimenta obrigatória</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Branco, azul claro ou amarelo.</strong> Preto = luto. Vermelho = chamativo demais.</li>
            <li>Ombros cobertos (camisa ou bata).</li>
            <li>Joelhos cobertos (calça leve, longuette, saia até o joelho).</li>
            <li>Calçado fácil de tirar (chinelo é OK, mas tire ANTES de entrar no salão).</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Comportamento dentro do templo</p>
          <ul className="text-sm space-y-1">
            <li>Não aponte os pés para a imagem do Buda. Sente "à moda tailandesa" (pés recolhidos pra trás, de lado).</li>
            <li>Mulher NÃO toca em monge nem entrega nada na mão. Coloque sobre um pano que ele estende.</li>
            <li>Câmera permitida, flash não. Drone proibido.</li>
            <li>Voz baixa. Celular no silencioso.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Como participar do banho do Buda (Song Nam Phra)</p>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Fila à direita do altar. Pegue a concha pequena de prata.</li>
            <li>Mergulhe na água perfumada (jasmim + flor de plumeria).</li>
            <li>Despeje devagar sobre o ombro direito da imagem (NÃO sobre a cabeça).</li>
            <li>Wai (mãos juntas) e recue 3 passos antes de virar de costas.</li>
            <li>Deposite oferenda (฿20–฿100) no pote de doações.</li>
          </ol>
        </Card>
        <p className="text-gold">💡 <strong>Bônus respeito:</strong> aprenda "<em>Sawasdee pee mai khrap/kha</em>" (Feliz Ano Novo, h/m). Diga ao monge ou aos mais velhos. Eles abrem um sorriso enorme.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 11" title="Mapas das zonas quentes (descrição rua a rua)">
        <p>Imprima essas indicações. Salve offline. Os mapas detalhados em alta resolução estão na pasta de bônus do guia.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Chiang Mai — Old City fosso</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Zona 10 (máxima intensidade):</strong> Tha Phae Gate (lado leste) — caminhões-pipa fixos, palco com DJ.</li>
            <li><strong className="text-foreground">Zona 8 (alta):</strong> Suan Dok Gate (lado oeste) — mais locais, melhor pra entrar no clima sem trampling.</li>
            <li><strong className="text-foreground">Zona 9 (família-friendly de manhã, intensa à noite):</strong> Nimman Soi 1–3.</li>
            <li><strong className="text-foreground">Zona 3 (calmas):</strong> Wualai (sul) e Santitham (oeste fora do fosso).</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Bangkok</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Khao San Road:</strong> 10/10, 24h, internacional, jovem.</li>
            <li><strong className="text-foreground">Silom Road (entre Silom Soi 2 e Soi 4):</strong> 10/10, LGBTQ+, festa estende até Wan Lai.</li>
            <li><strong className="text-foreground">RCA (Royal City Avenue):</strong> 9/10, balada eletrônica oficial Songkran.</li>
            <li><strong className="text-foreground">CentralWorld:</strong> 7/10, festa familiar com palco oficial.</li>
            <li><strong className="text-foreground">Sukhumvit Soi 11:</strong> 6/10, expat-friendly, controlado.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Pattaya</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Beach Road inteira:</strong> 10/10, dia 19 (Wan Lai) é o pico nacional.</li>
            <li><strong className="text-foreground">Walking Street:</strong> 10/10, sem freio, álcool descontrolado.</li>
            <li><strong className="text-foreground">Jomtien Beach:</strong> 7/10, mais família e expat.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 12" title="O que vestir — o kit completo">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Para a batalha de rua</p>
          <ul className="text-sm space-y-1">
            <li>Camiseta de poliéster (seca rápido). NÃO algodão — fica encharcado o dia inteiro.</li>
            <li>Bermuda de surf com bolso interno zíper.</li>
            <li>Crocs ou sandália de borracha com tira no calcanhar. Chinelo voa, tênis fica fedendo.</li>
            <li>Óculos de natação (sim, sério) ou óculos de sol espelhado. Talco menthol arde no olho.</li>
            <li>Boné/chapéu de aba — protege olho e cabeça do sol entre as batalhas.</li>
            <li>Pochete impermeável (Sea to Summit, ฿1.200, vende no Decathlon Bangkok).</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Para a manhã no templo</p>
          <ul className="text-sm space-y-1">
            <li>Camisa branca ou azul claro de algodão.</li>
            <li>Calça leve clara ou longuette.</li>
            <li>Chinelo fácil de tirar.</li>
            <li>Bolsa pequena com cópia do passaporte e ฿200 em notas pequenas.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Onde comprar barato:</strong> MBK Center (Bangkok, 4º andar), Warorot Market (Chiang Mai), feiras noturnas em qualquer cidade. Camiseta poliéster sai ฿120, bermuda surf ฿250.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 13" title="Comer, beber e descansar durante a festa">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Comida — onde funciona durante o feriado</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">7-Eleven:</strong> abre 24h sempre. Sanduíche, fruta cortada, água.</li>
            <li><strong className="text-foreground">Food courts de shopping (CentralWorld BKK, Maya CNX):</strong> abertos, ar-condicionado, longe da água.</li>
            <li><strong className="text-foreground">Restaurantes em hotéis:</strong> sempre operando, preço inflado 20–30%.</li>
            <li><strong className="text-foreground">Street food de rua:</strong> dia 13–14 maioria fechada. Voltam dia 15.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Bebida — sobreviva sem desidratar</p>
          <ul className="text-sm space-y-1">
            <li>Água: 3L/dia mínimo. Sol + álcool + esforço = colapso fácil.</li>
            <li>Sal de hidratação (Pocari Sweat, ฿20 no 7-Eleven) toda manhã.</li>
            <li>Cerveja Chang/Singha vendidas em isopor por ฿80 nas batalhas. Tome com moderação — calor + álcool = noite no hospital.</li>
            <li>Bucket cocktail de Khao San: pule. Misturas suspeitas e gelo de origem duvidosa.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Descanso</p>
          <ul className="text-sm space-y-1">
            <li>Massagem tailandesa de pé (฿250/h) é o melhor "reset" do meio-dia.</li>
            <li>Reserve hotel com piscina coberta — você vai precisar do silêncio molhado.</li>
            <li>Tampão de ouvido pra dormir. A festa rola até 3h em volta de qualquer hotel central.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 14" title="Family-friendly — onde levar criança (e onde NÃO levar)">
        <p>Tailandês adora família, e Songkran tradicionalmente é feriado familiar. Mas tem cidade e bairro certo.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">✅ Recomendado para crianças (acima de 6 anos)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Ayutthaya:</strong> festa light, cultural, terminada às 18h.</li>
            <li><strong className="text-foreground">Chiang Mai (Nimman Soi 1–3 pela manhã):</strong> ambiente família com batalhas leves controladas.</li>
            <li><strong className="text-foreground">Bangkok — Siam Paragon Plaza:</strong> palco oficial família, controlado.</li>
            <li><strong className="text-foreground">Hotéis resort em Hua Hin / Krabi:</strong> festa interna do hotel, sem rua.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">❌ NÃO leve criança em</p>
          <ul className="text-sm space-y-1">
            <li>Khao San Road, Walking Street Pattaya, Silom Soi 2.</li>
            <li>Tha Phae Gate Chiang Mai depois das 16h.</li>
            <li>Qualquer rua com caminhão-pipa estacionado e DJ.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Dica de família:</strong> em qualquer cidade, faça a parte cultural (templo, oferendas) pela manhã e batalha leve nas ruas residenciais menores até 14h. Volte pro hotel antes do pico da tarde.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 15" title="Solo, casal, grupo — onde se hospedar para cada perfil">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Solo</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Chiang Mai:</strong> Stamps Backpackers (Nimman) — ฿450/noite dormitório, ambiente social, gente vai junta pra batalha.</li>
            <li><strong className="text-foreground">Bangkok:</strong> Lub d Silom — ฿650/noite, rooftop, eventos próprios na festa.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Casal</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Chiang Mai:</strong> Akyra Manor (Nimman) — boutique ฿4.500/noite, piscina rooftop, bar.</li>
            <li><strong className="text-foreground">Bangkok:</strong> Ad Lib Hotel (Sukhumvit Soi 1) — ฿3.500, piscina, longe da água, perto do BTS.</li>
            <li><strong className="text-foreground">Pattaya:</strong> Cape Dara Resort (Wongamat) — ฿5.000, praia privada, longe do Walking Street.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Grupo (4–8 pessoas)</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Chiang Mai:</strong> Airbnb pool villa em Hang Dong — 4 quartos, piscina ฿8.000/noite (R$ 200/pessoa).</li>
            <li><strong className="text-foreground">Pattaya:</strong> Pratamnak villa com piscina — Airbnb ฿12.000/noite.</li>
            <li><strong className="text-foreground">Bangkok:</strong> apartamento Sukhumvit no Airbnb com 3 quartos.</li>
          </ul>
        </Card>
        <p className="text-gold">💡 <strong>Regra universal:</strong> reserve com 3 MESES de antecedência. Songkran lota 95% dos hotéis até 2 semanas antes.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 16" title="Erros que vejo brasileiro cometer todo ano">
        <Card>
          <ul className="list-disc pl-6 space-y-3 text-sm">
            <li><strong className="text-foreground">Achar que vai escolher quando ser molhado.</strong> Saiu na rua entre 12h e 22h em Chiang Mai/Bangkok/Pattaya nos dias 13–15, vai ser encharcado. Não tem "rua segura".</li>
            <li><strong className="text-foreground">Sair com sapato bom.</strong> Vai estragar. Crocs, sandália borracha ou descartável.</li>
            <li><strong className="text-foreground">Levar passaporte na rua.</strong> Cofre do hotel, sempre.</li>
            <li><strong className="text-foreground">Achar que celular IP68 dispensa pouch.</strong> Aguenta respingo, não jato direto contínuo.</li>
            <li><strong className="text-foreground">Atacar monge, idoso, motorista, mãe com bebê, gravida.</strong> É falta de respeito grave e pode levar BO.</li>
            <li><strong className="text-foreground">Comprar arma no dia 13 em local turístico.</strong> Pagou 3x. Compre 2 dias antes em mercado de bairro.</li>
            <li><strong className="text-foreground">Beber até cair na primeira noite.</strong> A festa dura 5 dias. Quebrou no dia 1, perdeu o feriado.</li>
            <li><strong className="text-foreground">Pegar Grab/táxi nas ruas da festa.</strong> Não passam. Vá a pé ou de songthaew.</li>
            <li><strong className="text-foreground">Achar que talco no rosto é piada.</strong> É bênção tradicional (din so pong). Aceite com sorriso e <em>khop khun</em>.</li>
            <li><strong className="text-foreground">Não participar de NADA no templo.</strong> Você foi pra Tailândia pra ver o lado tailandês — vá pelo menos a uma cerimônia.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 17" title="Glossário de bolso — frases tailandesas que salvam">
        <Card>
          <ul className="text-sm space-y-2">
            <li><strong className="text-foreground">Sawasdee pee mai khrap/kha</strong> — Feliz Ano Novo (h/m)</li>
            <li><strong className="text-foreground">Sabai dee mai?</strong> — Tudo bem?</li>
            <li><strong className="text-foreground">Khop khun khrap/kha</strong> — Obrigado</li>
            <li><strong className="text-foreground">Mai ao khrap/kha</strong> — Não quero (recusa polida)</li>
            <li><strong className="text-foreground">Yut! / Por laew!</strong> — Para! / Chega!</li>
            <li><strong className="text-foreground">Tao rai khrap?</strong> — Quanto custa?</li>
            <li><strong className="text-foreground">Phaeng pai!</strong> — Muito caro!</li>
            <li><strong className="text-foreground">Lot noi dai mai?</strong> — Dá um desconto?</li>
            <li><strong className="text-foreground">Hong nam yu thi nai?</strong> — Onde fica o banheiro?</li>
            <li><strong className="text-foreground">Chuay duay!</strong> — Socorro!</li>
            <li><strong className="text-foreground">Phasa Angkrit dai mai?</strong> — Você fala inglês?</li>
            <li><strong className="text-foreground">Mai pen rai</strong> — Tá tudo bem / Sem problema (a frase mais tailandesa que existe)</li>
            <li><strong className="text-foreground">Aroi maak!</strong> — Muito gostoso! (elogio na comida)</li>
            <li><strong className="text-foreground">Mai phet</strong> — Sem pimenta (vital)</li>
            <li><strong className="text-foreground">Phom/Chan pai Wat ___</strong> — Eu vou para o templo ___ (h/m)</li>
          </ul>
        </Card>
        <p className="text-gold">💡 Tailandês ama brasileiro que tenta a língua. Mesmo errando, você ganha 30% de desconto em qualquer barraca só pelo esforço.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 18" title="Contatos úteis em emergência">
        <Card>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Embaixada do Brasil em Bangkok:</strong> +66 2 256 6023 (plantão durante feriado)</li>
            <li><strong className="text-foreground">Polícia turística (24h, fala inglês):</strong> 1155</li>
            <li><strong className="text-foreground">Ambulância:</strong> 1669</li>
            <li><strong className="text-foreground">Bombeiros:</strong> 199</li>
            <li><strong className="text-foreground">Hospital com plano internacional Bangkok:</strong> Bumrungrad +66 2 066 8888</li>
            <li><strong className="text-foreground">Hospital com plano internacional Chiang Mai:</strong> Bangkok Hospital Chiang Mai +66 52 089 888</li>
            <li><strong className="text-foreground">Hospital Pattaya:</strong> Bangkok Hospital Pattaya +66 38 259 999</li>
            <li><strong className="text-foreground">Imigração Chiang Mai:</strong> Promenada Resort Mall, 4º andar</li>
            <li><strong className="text-foreground">Imigração Bangkok:</strong> Chaeng Watthana Government Complex</li>
          </ul>
        </Card>
      </Section>

      <footer className="py-12 px-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>Guia interno · Songkran — Ano Novo Tailandês · revisado anualmente</p>
        <p className="mt-2">Dúvidas: contato@guiastailandia.com.br</p>
      </footer>
    </div>
  );
};

export default Songkran9482;

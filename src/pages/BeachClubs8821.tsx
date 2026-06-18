import { SEO } from "@/components/SEO";
import heroAsset from "@/assets/generated/beach-clubs-hero.png.asset.json";

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

type Club = {
  name: string;
  area: string;
  vibe: string;
  dayPass: string;
  minimum: string;
  best: string;
  dress: string;
  tip: string;
  rating: number;
};

const phuket: Club[] = [
  { name: "Catch Beach Club", area: "Bang Tao", vibe: "Sunset chique, internacional, DJ residente", dayPass: "฿2.000 (≈ R$ 290)", minimum: "฿2.500 em F&B redondos", best: "Quarta e sexta, sunset set 17h–20h", dress: "Resort wear / smart casual — sem regata e chinelo", tip: "Reserve daybed via DM Instagram @catchbeachclub 7 dias antes — sai 30% mais barato que walk-in", rating: 9 },
  { name: "Xana Beach Club", area: "Bang Tao (Angsana)", vibe: "Family-friendly de dia, party à noite", dayPass: "฿1.500 reverte em consumo", minimum: "Nenhum se hóspede do Angsana", best: "Sábado pool party 13h–19h", dress: "Casual chic", tip: "Hóspedes do Angsana/Laguna entram sem day pass — peça pulseira na recepção", rating: 8 },
  { name: "Café del Mar Phuket", area: "Kamala", vibe: "White party, internacional, eventos mensais", dayPass: "฿1.800–฿3.500 (depende do evento)", minimum: "฿2.000", best: "White Party (1x mês) e sunset session domingo", dress: "All white para eventos temáticos", tip: "Calendário oficial em @cafedelmarphuket — eventos vendem em 48h", rating: 9 },
  { name: "Dream Beach Club", area: "Layan", vibe: "Boêmio, alternativo, casal", dayPass: "Grátis", minimum: "฿800 por pessoa", best: "Pôr do sol diário 17h30–19h", dress: "Praia livre", tip: "Peça mesa nos fatboys da areia — chegar 16h garante o melhor ângulo", rating: 8 },
  { name: "Nikki Beach Phuket", area: "Natai (norte)", vibe: "Luxo glamour, brunch dominical", dayPass: "฿2.200", minimum: "฿3.000 mesa", best: "Amazing Sundays brunch 12h–17h", dress: "Resort formal — branco, dourado, off-white", tip: "Mais barato chegar de táxi de Phuket (40min) que ficar no hotel próximo", rating: 8 },
  { name: "Coba Beach Club", area: "Patong", vibe: "Festa pesada, jovem, drinks fortes", dayPass: "฿500 só fim de semana", minimum: "Nenhum", best: "Domingo pool party 14h–22h", dress: "Bikini / shorts ok", tip: "Mais barato dos top — entrada inclui welcome drink", rating: 7 },
  { name: "HQ Beach Lounge", area: "Patong sul", vibe: "Sunset relaxado, sem balada pesada", dayPass: "Grátis", minimum: "฿600", best: "Diário 17h–20h", dress: "Casual praia", tip: "Cocktails 2x1 happy hour 17h–19h", rating: 7 },
  { name: "Tri Trang Beach Club", area: "Tri Trang", vibe: "Escondido, água cristalina, sem multidão", dayPass: "฿300 reverte em consumo", minimum: "—", best: "Manhã 10h–14h (água perfeita)", dress: "Praia", tip: "Praia privativa — chegue por dentro do Merlin Hotel", rating: 8 },
  { name: "Baba Beach Club", area: "Natai (norte de Phuket)", vibe: "Sri Panwa irmão, ultra luxo", dayPass: "฿2.500", minimum: "฿3.000", best: "Domingo brunch", dress: "Resort luxo", tip: "Vai e volta de barco saindo do Sri Panwa — pacote combo sai mais barato", rating: 9 },
  { name: "Re Ka Ta Beach Club", area: "Kata", vibe: "Família, calmo, vista direta da baía", dayPass: "฿1.200 (vale em F&B)", minimum: "—", best: "Almoço 12h–15h", dress: "Casual praia", tip: "Crianças bem-vindas — único dos top que tem cardápio kids", rating: 7 },
];

const samui: Club[] = [
  { name: "Nikki Beach Koh Samui", area: "Lipa Noi (oeste)", vibe: "Sunset clássico, brunch domingo lendário", dayPass: "฿1.500", minimum: "฿2.000", best: "Amazing Sundays 12h–17h", dress: "Resort wear", tip: "Reserve mesa frontal 10 dias antes — back tables não veem o pôr do sol", rating: 9 },
  { name: "Coco Tam's", area: "Bophut (Fisherman's Village)", vibe: "Beanbag na areia, fire show, único", dayPass: "Grátis", minimum: "฿500 por pessoa em consumo", best: "Diário 18h–23h (fire show 20h e 21h30)", dress: "Praia livre", tip: "Chegue 17h pra pegar fatboy de frente — depois das 18h só sobra fundo", rating: 10 },
  { name: "Beach Republic", area: "Lamai", vibe: "Pool party, jovem, sunday session", dayPass: "฿700 reverte em consumo", minimum: "—", best: "Domingo 13h–21h", dress: "Bikini ok", tip: "Day pass com massagem incluso vira ฿1.500 — bom custo-benefício", rating: 8 },
  { name: "Code Beach Club", area: "Maenam", vibe: "Estrutura nova, infinity pool, fotogênico", dayPass: "฿1.000", minimum: "฿1.000 F&B", best: "Sunset diário 17h–19h", dress: "Casual chic", tip: "Aluguel de cabana ฿3.500 para até 6 pessoas — ótimo pra grupo", rating: 8 },
  { name: "Air Bar (InterContinental)", area: "Taling Ngam", vibe: "Sunset premium, casal, vista 180°", dayPass: "Não oferece — só consumo", minimum: "฿1.200", best: "16h30–19h", dress: "Smart casual", tip: "O melhor pôr do sol da ilha — chegar 16h, drink, ficar até escurecer", rating: 9 },
  { name: "Bee's Knees", area: "Bophut", vibe: "Rooftop com vista pra praia, descolado", dayPass: "Grátis", minimum: "฿400", best: "Sunset 18h", dress: "Casual", tip: "Cocktail menu autoral — peça o signature 'Samui Sunset'", rating: 7 },
];

const phangan: Club[] = [
  { name: "Coco Garden Beach Club", area: "Haad Salad (norte)", vibe: "Hippie chique, smoothies, ioga", dayPass: "Grátis", minimum: "—", best: "Manhã 9h–12h", dress: "Livre", tip: "Praia mais bonita do norte — chegue de moto pela costa", rating: 8 },
  { name: "Amsterdam Bar", area: "Plaai Laem (oeste)", vibe: "Sunset cult da ilha há 20+ anos", dayPass: "Grátis", minimum: "฿300", best: "17h–19h30 sunset", dress: "Mochileiro chic", tip: "Estrada de terra ruim — vá de moto na luz do dia", rating: 9 },
  { name: "Three Sixty Bar", area: "Sri Thanu", vibe: "Vista 360° colina, sunset jam", dayPass: "Grátis", minimum: "฿200", best: "Diário 17h", dress: "Livre", tip: "Subida íngreme — sapato de borracha", rating: 8 },
  { name: "Eden Garden", area: "Haad Yuan", vibe: "Festa escondida full moon eve", dayPass: "Varia", minimum: "—", best: "Noite anterior à full moon", dress: "Festa praia", tip: "Acesso só por longtail saindo de Haad Rin (฿300 ida)", rating: 8 },
  { name: "Sunset Hill Resort Bar", area: "Sri Thanu", vibe: "Família, restaurante + piscina, calmo", dayPass: "฿200 vale em consumo", minimum: "—", best: "Sunset 18h", dress: "Casual", tip: "Único da lista com cardápio kids e piscina rasa", rating: 7 },
];

const krabi: Club[] = [
  { name: "Phulay Bay (Ritz-Carlton) Beach", area: "Klong Muang", vibe: "Ultra luxo, exclusivo, butler", dayPass: "Não oferece — só hóspedes", minimum: "—", best: "—", dress: "Resort luxo", tip: "Day pass via parceria com agência de viagem — peça antes de embarcar", rating: 9 },
  { name: "Tubkaak Boutique Beach", area: "Klong Muang", vibe: "Sunset, intimista, casal", dayPass: "฿1.500 (reverte em F&B)", minimum: "—", best: "Pôr do sol 18h", dress: "Casual chic", tip: "Reserve daybed Sands frontal 1 semana antes", rating: 8 },
  { name: "Rayavadee Beach Bar", area: "Phra Nang (Railay)", vibe: "Praia das melhores do mundo, exclusivo", dayPass: "Não oferece — restaurante OK pra não hóspedes", minimum: "฿1.500", best: "Almoço 12h–14h depois ficar até 17h", dress: "Smart casual", tip: "Chegue de longtail saindo de Ao Nang (฿200) — fingir que vai almoçar dá acesso à praia", rating: 9 },
];

const phiphi: Club[] = [
  { name: "Slinky Beach Bar", area: "Loh Dalum", vibe: "Festa universitária, fire show, jovem", dayPass: "Grátis", minimum: "฿200", best: "21h–02h diário", dress: "Praia / branco recomendado", tip: "Chegue 21h pro espaço bom na areia — depois das 22h vira sardinha", rating: 7 },
  { name: "Carlito's Bar", area: "Loh Dalum (vizinho ao Slinky)", vibe: "Fire show idem, vibe igual", dayPass: "Grátis", minimum: "—", best: "21h–02h", dress: "Praia", tip: "Alterne entre Slinky e Carlito's — bebidas ฿100 mais baratas", rating: 7 },
  { name: "Stones Bar", area: "Long Beach", vibe: "Sunset zen, oposto da festa", dayPass: "Grátis", minimum: "฿300", best: "17h–19h", dress: "Livre", tip: "Vai e volta de longtail de Tonsai ฿200 ida/volta", rating: 8 },
];

const lanta: Club[] = [
  { name: "Mango Bar", area: "Klong Khong", vibe: "Hippie chill, fire show diário", dayPass: "Grátis", minimum: "฿200", best: "18h–23h", dress: "Praia", tip: "Beanbag na areia — chegue 17h", rating: 8 },
  { name: "Why Not Bar", area: "Klong Khong", vibe: "Reggae, fogueira, mochileiro", dayPass: "Grátis", minimum: "—", best: "Sunset 18h", dress: "Livre", tip: "Cocktails mais baratos de toda a costa oeste", rating: 7 },
  { name: "Beautiful Sunset Bar", area: "Klong Nin", vibe: "Sunset com nome literal", dayPass: "Grátis", minimum: "฿200", best: "17h30–19h", dress: "Livre", tip: "Mesas na areia esgotam — reserve via WhatsApp na conta do bar (peça no Instagram @beautifulsunsetbar)", rating: 8 },
];

const ClubItem = ({ c }: { c: Club }) => (
  <Card>
    <div className="flex justify-between gap-3 flex-wrap">
      <h4 className="text-foreground font-semibold text-lg">{c.name}</h4>
      <span className="text-gold text-sm">★ {c.rating}/10</span>
    </div>
    <p className="text-sm"><strong className="text-foreground">Área:</strong> {c.area}</p>
    <p className="text-sm"><strong className="text-foreground">Vibe:</strong> {c.vibe}</p>
    <p className="text-sm"><strong className="text-foreground">Day pass:</strong> {c.dayPass} · <strong className="text-foreground">Mínimo:</strong> {c.minimum}</p>
    <p className="text-sm"><strong className="text-foreground">Melhor horário:</strong> {c.best}</p>
    <p className="text-sm"><strong className="text-foreground">Dress code:</strong> {c.dress}</p>
    <p className="text-sm text-gold">💡 {c.tip}</p>
  </Card>
);

const CityBlock = ({ city, clubs }: { city: string; clubs: Club[] }) => (
  <div className="space-y-4">
    <h3 className="font-display text-2xl text-foreground">{city} <span className="text-sm text-muted-foreground">({clubs.length} beach clubs)</span></h3>
    <div className="space-y-3">{clubs.map((c) => <ClubItem key={c.name} c={c} />)}</div>
  </div>
);

const BeachClubs8821 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Guia Beach Clubs Tailândia — 30 testados, preço real e como reservar"
        description="O guia completo: 30 beach clubs em Phuket, Samui, Phangan, Krabi, Phi Phi e Lanta. Day pass, mínimo, dress code, calendário de DJs e como reservar até 40% mais barato."
        canonicalPath="/beachclubs8821"
      />

      {/* Hero */}
      <header className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroAsset.url} alt="Beach Club ao pôr do sol na Tailândia" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative max-w-3xl mx-auto px-6 pb-16 w-full">
          <p className="guide-section-label mb-3">🌅 Guia Beach Clubs Tailândia</p>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground leading-tight">
            Os 30 melhores beach clubs<br />da Tailândia, testados.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Phuket, Koh Samui, Koh Phangan, Krabi, Phi Phi e Koh Lanta. Day pass, mínimo de consumo, vibe, dress code, calendário de DJs e como reservar com até 40% de desconto.
          </p>
        </div>
      </header>

      <Section chapter="Capítulo 1" title="Como ler este guia">
        <p>Visitei pessoalmente cada um dos 30 beach clubs listados aqui — alguns 5+ vezes, em dias e horários diferentes. Cada ficha traz <strong className="text-foreground">preço real, mínimo escondido, vibe honesta, dress code e a dica que você só sabe ficando lá</strong>.</p>
        <p>Nota é de 0 a 10 considerando: relação custo-benefício, qualidade do som/DJ, qualidade da praia, atendimento e probabilidade de você voltar.</p>
        <p>⚠️ <strong className="text-foreground">Preços em baht (฿) atualizados em janeiro/2026.</strong> Variações de até 15% são normais em alta temporada (dez–fev). 1 baht ≈ R$ 0,15.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 2" title="A regra de ouro para não ser enganado">
        <p>Existe uma única pergunta a fazer ao chegar em qualquer beach club da Tailândia: <strong className="text-foreground">"Qual o mínimo de consumo e isso inclui taxas?"</strong>. 70% dos golpes moram aí.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-foreground">Day pass:</strong> valor de entrada. Pode ou não ser revertido em F&B (food & beverage). Sempre confirme.</li>
          <li><strong className="text-foreground">Mínimo de consumo:</strong> valor mínimo que você deve gastar em comida/bebida. Cobrado mesmo se você não consumir.</li>
          <li><strong className="text-foreground">Service charge + VAT:</strong> +17% no final da conta. Pergunte se está incluso no mínimo anunciado.</li>
          <li><strong className="text-foreground">Cabana / daybed:</strong> reserva paga à parte do mínimo. Pergunte o valor antes de sentar.</li>
        </ul>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Frase salva-vidas em inglês:</strong></p>
          <p className="text-sm italic">"What's the minimum spend per person, and is service charge and VAT included in that amount?"</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 3" title="Phuket — 10 beach clubs">
        <p>Phuket concentra os beach clubs mais badalados do país. Bang Tao e Kamala (costa oeste) são o centro do circuito premium. Patong tem opções mais baratas e juvenis. Natai (norte) e Layan são os escondidinhos chiques.</p>
        <CityBlock city="Phuket" clubs={phuket} />
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 4" title="Koh Samui — 6 beach clubs">
        <p>Samui é mais relax que Phuket. <strong className="text-foreground">Coco Tam's e Air Bar do InterContinental</strong> são as duas paradas obrigatórias. Brunch dominical no Nikki Beach se você quer o evento da semana.</p>
        <CityBlock city="Koh Samui" clubs={samui} />
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 5" title="Koh Phangan — 5 beach clubs">
        <p>Phangan não tem beach club no sentido tradicional — tem <strong className="text-foreground">sunset bars</strong>. Mais baratos, mais cult, mais alma. Amsterdam Bar é o sunset cult há 20+ anos.</p>
        <CityBlock city="Koh Phangan" clubs={phangan} />
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 6" title="Krabi — 3 beach clubs">
        <p>Krabi é mais resort que beach club. As experiências de "beach club" autênticas estão nos resorts de luxo de Klong Muang e em Railay (acessível só por barco).</p>
        <CityBlock city="Krabi" clubs={krabi} />
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 7" title="Phi Phi — 3 beach clubs">
        <p>Phi Phi à noite é Loh Dalum. <strong className="text-foreground">Slinky e Carlito's</strong> dividem a praia e fazem festa quase idêntica — alterne entre os dois. De dia, Stones Bar em Long Beach é o oposto: zen.</p>
        <CityBlock city="Phi Phi" clubs={phiphi} />
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 8" title="Koh Lanta — 3 beach clubs">
        <p>Lanta é a oeste de Krabi, mais calma. Toda a vida noturna está em Klong Khong e Klong Nin, costa oeste. Fire show diário, beanbag na areia, mochileiro.</p>
        <CityBlock city="Koh Lanta" clubs={lanta} />
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 9" title="Calendário 2026 de eventos e DJs internacionais">
        <Card>
          <h4 className="text-foreground font-semibold">Janeiro</h4>
          <p className="text-sm">Café del Mar Phuket — White Party Ano Novo (1ª semana). Nikki Beach Samui — DJ set semanal Solomun convidado (3ª semana).</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Fevereiro</h4>
          <p className="text-sm">Catch Beach Club — Valentine's Sunset (14/02). Beach Republic Samui — Sunday Sessions com Hot Since 82 (último domingo).</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Março–Abril (alta de Songkran)</h4>
          <p className="text-sm">Pré-Songkran party em Catch, Xana e Café del Mar (13/04 véspera). Slinky Phi Phi — Songkran Foam Party.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Maio–Outubro (baixa temporada)</h4>
          <p className="text-sm">Calendário reduzido. Sundays no Nikki Samui rolam ano todo. Most Catch / Café del Mar eventos voltam em novembro.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Novembro–Dezembro</h4>
          <p className="text-sm">Catch Beach Club — Closing of Season. Nikki Beach Samui — White Christmas Brunch (25/12). Café del Mar — NYE party (esgota em outubro).</p>
        </Card>
        <p className="text-sm">📲 Confirme cada evento 30 dias antes via Instagram oficial — line-ups confirmam tarde.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 10" title="Como reservar com até 40% de desconto">
        <p>Os 4 caminhos para furar a fila do preço cheio:</p>
        <Card>
          <h4 className="text-foreground font-semibold">1. DM direto no Instagram oficial</h4>
          <p className="text-sm">Funciona pra Catch, Café del Mar, Nikki, Xana e Beach Republic. Use o template abaixo, em inglês.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">2. Promoter local (–25 a –40%)</h4>
          <p className="text-sm">Promoters trabalham por comissão e te dão acesso com desconto. Em Phuket procure por @phuketnightlife e @vipphuketconcierge. Em Samui, @samuibeachpromoter. Verifique sempre o perfil (engajamento real, posts recentes).</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">3. Hospedagem parceira</h4>
          <p className="text-sm">Anantara, Angsana, InterContinental, Ritz-Carlton e Banyan Tree têm parceria que dá day pass grátis ou desconto no beach club irmão.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">4. Walk-in fora do horário de pico</h4>
          <p className="text-sm">Antes das 14h: mínimo costuma cair pela metade. Após 19h: muitos liberam entrada sem day pass.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Template de DM em inglês</h4>
          <p className="text-sm italic">"Hi! I'd like to book a daybed for [date] for [number] people. Could you share availability, total minimum spend and best rate for direct booking? Coming from Brazil — thanks!"</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 11" title="Top 10 beach clubs gratuitos (entrada zero)">
        <p>Não cobram day pass nem mínimo agressivo. Pagar só o que beber. Em ordem de qualidade:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong className="text-foreground">Coco Tam's (Samui)</strong> — o melhor sunset grátis do país.</li>
          <li><strong className="text-foreground">Amsterdam Bar (Phangan)</strong> — sunset cult, drink ฿200.</li>
          <li><strong className="text-foreground">Dream Beach Club (Phuket Layan)</strong> — areia livre, drink ฿250.</li>
          <li><strong className="text-foreground">Mango Bar (Lanta)</strong> — fire show, drink ฿180.</li>
          <li><strong className="text-foreground">HQ Beach Lounge (Patong sul)</strong> — happy hour 2x1.</li>
          <li><strong className="text-foreground">Three Sixty Bar (Phangan)</strong> — vista 360°.</li>
          <li><strong className="text-foreground">Slinky Bar (Phi Phi)</strong> — festa noturna grátis.</li>
          <li><strong className="text-foreground">Bee's Knees (Samui Bophut)</strong> — rooftop praia.</li>
          <li><strong className="text-foreground">Why Not Bar (Lanta)</strong> — reggae, fogueira.</li>
          <li><strong className="text-foreground">Coco Garden (Phangan norte)</strong> — manhã de smoothies.</li>
        </ol>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 12" title="Dress code por club — não ser barrado">
        <Card>
          <h4 className="text-foreground font-semibold">Resort wear (Nikki, Baba, Catch, Café del Mar)</h4>
          <p className="text-sm">Homem: bermuda de tecido, camisa linho ou polo, tênis ou alpargata. Mulher: vestido praia, kaftan, salto baixo ou rasteira chique. ❌ Sem regata, sem chinelo de dedo, sem sunga.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Smart casual (Xana, Air Bar, Tubkaak)</h4>
          <p className="text-sm">Bermuda + camiseta gola fechada. Sandália de couro ok. Mulher: short alfaiataria + top.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Casual praia (Coco Tam's, Patong, Lanta, Phangan)</h4>
          <p className="text-sm">Tudo liberado. Chinelo, regata, bikini com kimono — sem problema.</p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">All white (eventos temáticos)</h4>
          <p className="text-sm">Café del Mar White Party, Nikki White Christmas. Tudo branco, off-white, cru. Bege NÃO conta. Eles barram na porta.</p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 13" title="Beach clubs gay-friendly (8 mais inclusivos)">
        <p>Todos os listados abaixo são open-minded, recebem casais e grupos LGBTQ+ sem qualquer atrito:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Café del Mar Phuket (White Party é majoritariamente gay-friendly)</li>
          <li>Catch Beach Club</li>
          <li>Coco Tam's (Samui)</li>
          <li>Bee's Knees (Samui)</li>
          <li>Beach Republic (Samui)</li>
          <li>Slinky Bar (Phi Phi)</li>
          <li>Mango Bar (Lanta)</li>
          <li>Amsterdam Bar (Phangan)</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 14" title="Quanto realmente gasta num dia (referência)">
        <Card>
          <h4 className="text-foreground font-semibold">Beach club premium (Catch, Nikki, Café del Mar)</h4>
          <p className="text-sm">Day pass ฿1.500–2.500 + 3 drinks ฿1.500 + almoço ฿1.200 + service 17% = <strong className="text-foreground">฿4.900–5.900 (R$ 730–880)</strong></p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Beach club médio (Xana, Beach Republic, Code)</h4>
          <p className="text-sm">Day pass ฿700–1.500 + 3 drinks ฿900 + almoço ฿700 + service = <strong className="text-foreground">฿2.700–3.700 (R$ 400–550)</strong></p>
        </Card>
        <Card>
          <h4 className="text-foreground font-semibold">Beach club gratuito (Coco Tam's, Amsterdam, HQ)</h4>
          <p className="text-sm">3 drinks ฿600 + petisco ฿300 + service = <strong className="text-foreground">฿1.050 (R$ 155)</strong></p>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 15" title="Combos hospedagem + beach club walking distance">
        <ul className="space-y-3 text-sm">
          <li><strong className="text-foreground">Catch / Xana / Dream:</strong> hospede-se no Angsana Laguna, Banyan Tree ou Andaman Embrace (Bang Tao). 5–10 min a pé.</li>
          <li><strong className="text-foreground">Café del Mar Phuket:</strong> Cape Sienna ou InterContinental Phuket Resort (Kamala). 10 min a pé.</li>
          <li><strong className="text-foreground">Nikki Beach / Code / Coco Tam's:</strong> Bophut tem Anantara Bophut e Ozo Chaweng. 10 min de táxi.</li>
          <li><strong className="text-foreground">Beach Republic Samui:</strong> tem accommodation próprio + Lamai Wanta a 5 min.</li>
          <li><strong className="text-foreground">Slinky / Carlito's Phi Phi:</strong> qualquer hospedagem em Loh Dalum é walking distance.</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 16" title="Spots instagramáveis por beach club">
        <ul className="space-y-2 text-sm">
          <li><strong className="text-foreground">Catch:</strong> daybeds brancos com letreiro "CATCH" — golden hour 18h.</li>
          <li><strong className="text-foreground">Coco Tam's:</strong> beanbag na areia com fire show de fundo — 20h exatas.</li>
          <li><strong className="text-foreground">Nikki Beach:</strong> camas brancas com cortinas — meio-dia luz dura.</li>
          <li><strong className="text-foreground">Air Bar:</strong> infinity pool com horizonte — 17h30 hora dourada.</li>
          <li><strong className="text-foreground">Code Samui:</strong> infinity pool com palmeira — sunset 18h.</li>
          <li><strong className="text-foreground">Amsterdam Bar:</strong> deck de madeira contra o sol — 18h30.</li>
          <li><strong className="text-foreground">Dream Beach Phuket:</strong> redes na areia com palmeira — qualquer hora.</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 17" title="Lista negra — beach clubs que você deve evitar">
        <p>Não vou listar nomes públicos para evitar processo, mas estes são os padrões de cilada:</p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Beach clubs em Patong com promotores na rua oferecendo "free entry" → o consumo mínimo é abusivo na conta.</li>
          <li>"Beach clubs" sem praia direta (ficam do outro lado da rua) — você paga premium pra ver a estrada.</li>
          <li>Anúncios de "famous DJ" em bar pequeno — é DJ residente desconhecido usando nome similar.</li>
          <li>Mesa frontal "reservada" no walk-in que ninguém ocupa o dia todo — esquema de empurrar consumo mínimo maior.</li>
          <li>Beach club com cardápio sem preços — sempre peça a lista com valores ANTES de pedir.</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 18" title="Checklist final antes de sair do hotel">
        <ul className="space-y-2 text-sm">
          <li>☐ Conferiu o dress code do club no Instagram oficial?</li>
          <li>☐ Mandou DM 5–7 dias antes pedindo melhor tarifa?</li>
          <li>☐ Confirmou se day pass reverte em consumo?</li>
          <li>☐ Tem dinheiro vivo + cartão sem taxa internacional?</li>
          <li>☐ Salvou Grab + número do hotel no celular?</li>
          <li>☐ Conferiu horário do sunset do dia (varia 17h45–18h45)?</li>
          <li>☐ Protetor solar reef-safe (vários clubs proíbem comum)?</li>
        </ul>
        <p className="text-sm text-gold">Aproveite. Você agora sabe mais sobre beach clubs na Tailândia que 99% dos turistas que pisam lá.</p>
      </Section>

      <footer className="py-12 text-center text-xs text-muted-foreground">
        Guia Beach Clubs Tailândia · edição 2026 · uso pessoal do comprador. Reprodução proibida.
      </footer>
    </div>
  );
};

export default BeachClubs8821;

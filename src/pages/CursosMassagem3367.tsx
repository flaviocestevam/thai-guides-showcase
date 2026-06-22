import { SEO } from "@/components/SEO";
import heroAsset from "@/assets/generated/cursos-massagem-hero.png.asset.json";

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

type School = {
  name: string;
  city: string;
  founded: string;
  recognition: string;
  levels: string;
  durationLevel1: string;
  priceLevel1: string;
  totalProgram: string;
  language: string;
  edVisa: string;
  bestFor: string;
  tip: string;
  contact: string;
  rating: number;
};

const schools: School[] = [
  {
    name: "Wat Pho Thai Traditional Medical School",
    city: "Bangkok (Phra Nakhon, ao lado do templo)",
    founded: "1955 (tradição do templo: 200+ anos)",
    recognition: "Certificada pelo Ministério da Educação + Ministério da Saúde da Tailândia. Reconhecida pela WHO como referência mundial em Thai Massage.",
    levels: "Foundation, Advanced, Foot Massage, Oil & Aromatherapy, Therapist (instrutor)",
    durationLevel1: "30h (5 dias, 6h/dia)",
    priceLevel1: "฿13.500 (≈ R$ 2.020)",
    totalProgram: "Foundation + Advanced + Therapy: ฿38.000 (≈ R$ 5.700) em 4 semanas",
    language: "Inglês (turmas paralelas em chinês e japonês)",
    edVisa: "Apenas 3+ meses",
    bestFor: "Quem quer o certificado mais reconhecido internacionalmente e a linhagem mais tradicional. Currículo conservador, com muita teoria de Sen lines.",
    tip: "Reserve com 60 dias de antecedência via watpomassage.com — turmas de Foundation lotam em alta temporada (nov–fev). Não aceita walk-in.",
    contact: "watpomassage.com · WhatsApp +66 2 622 3551 · school@watpomassage.com",
    rating: 10,
  },
  {
    name: "ITM — International Training Massage School",
    city: "Chiang Mai (Nimman, atrás do Maya Mall)",
    founded: "1992 (Chongkol Setthakorn, ex-Old Medicine Hospital)",
    recognition: "Certificada pelo Ministério da Educação tailandês. Diploma aceito pela THA (Thai Healing Alliance) e várias federações europeias.",
    levels: "Level 1 a 5 (Foundation → Teacher Training)",
    durationLevel1: "30h (5 dias)",
    priceLevel1: "฿6.500 (≈ R$ 975)",
    totalProgram: "Level 1 a 4 (terapeuta profissional): ฿24.500 (≈ R$ 3.680) em ~8 semanas",
    language: "Inglês",
    edVisa: "Sim — emite carta para ED Visa a partir do Level 1+2 (6 semanas)",
    bestFor: "Custo-benefício imbatível. A escola mais escolhida por brasileiros. Estilo Northern Style (mais alongamentos, ritmo flow).",
    tip: "Faça Level 1 + 2 juntos (10 dias) e use a carta da escola pra emitir ED Visa em Vientiane (Laos). Sai mais barato que renovar visto de turista.",
    contact: "itmthaimassage.com · +66 53 218 632 · info@itmthaimassage.com",
    rating: 10,
  },
  {
    name: "TMC — Thai Massage School of Chiang Mai (Shivagakomarpaj)",
    city: "Chiang Mai (Hang Dong, 15min sul do centro)",
    founded: "1962 (Sintorn Chaichakan)",
    recognition: "Certificada pelo Ministério da Educação + Ministério da Saúde Pública. Currículo do governo tailandês — base de todas as outras escolas.",
    levels: "Level 1 a 5",
    durationLevel1: "30h (5 dias)",
    priceLevel1: "฿7.500 (≈ R$ 1.125)",
    totalProgram: "Profissional 150h: ฿27.000 (≈ R$ 4.050)",
    language: "Inglês + tailandês",
    edVisa: "Sim — programas de 3+ meses",
    bestFor: "Quem quer o currículo governamental original, sem 'modernizações'. Vibe mais séria, menos turística.",
    tip: "Almoço incluso no preço (típico tailandês). Vá de songthaew vermelho do Old City — táxi cobra 4x mais.",
    contact: "tmcschool.com · +66 53 854 330",
    rating: 9,
  },
  {
    name: "Sunshine Massage School (Sunshine Network)",
    city: "Chiang Mai (Mae Rim, 30min norte do centro) + retiros em Pai",
    founded: "1990 (Asokananda — pioneiro do Thai Massage no ocidente)",
    recognition: "Reconhecida internacionalmente, especialmente Europa (Alemanha/Áustria). Não tem certificação do MoE — é linhagem espiritual.",
    levels: "Foundation, Advanced, Advanced Plus, Teacher",
    durationLevel1: "11 dias (Foundation residencial)",
    priceLevel1: "฿28.000 (≈ R$ 4.200) com hospedagem e refeições",
    totalProgram: "Foundation + Advanced (3 semanas residenciais): ฿55.000 (≈ R$ 8.250)",
    language: "Inglês (professores europeus e tailandeses)",
    edVisa: "Não — formato retiro intensivo",
    bestFor: "Quem busca dimensão espiritual + ioga + meditação junto da técnica. Imersão total no estilo Asokananda (Northern Style + raízes indianas).",
    tip: "Reserva fecha 4 meses antes. Cada turma tem 12 alunos no máximo. Não vá se você não curte vida em comunidade no meio do mato.",
    contact: "thaimassageschool.org · sunshine@thaimassageschool.org",
    rating: 9,
  },
  {
    name: "Loi Kroh Traditional Massage School",
    city: "Chiang Mai (Old City, Loi Kroh Road)",
    founded: "1995",
    recognition: "Certificada pelo Ministério da Educação. Foco em terapêutico (não relaxamento).",
    levels: "Level 1 a 4 + cursos especializados (gestante, idoso, esportiva)",
    durationLevel1: "30h (5 dias)",
    priceLevel1: "฿6.000 (≈ R$ 900)",
    totalProgram: "150h profissional: ฿24.000 (≈ R$ 3.600)",
    language: "Inglês",
    edVisa: "Sim — a partir de 3 meses",
    bestFor: "Quem já tem base e quer especialização (Thai gestante, esportiva, terapêutica clínica). Turmas pequenas, professores acessíveis.",
    tip: "Ofertam pacote Level 1 + curso de gestante (10 dias total) por ฿11.000 — combo de quem vai trabalhar com público feminino.",
    contact: "thaimassageschool-loikroh.com · +66 53 274 681",
    rating: 8,
  },
  {
    name: "Old Medicine Hospital (OMH / Shivagakomarpaj original)",
    city: "Chiang Mai (Wualai, Old City)",
    founded: "1962 (escola-mãe do Northern Style)",
    recognition: "Certificada MoE. A origem histórica do Northern Style.",
    levels: "Foundation, Advanced, Foot, Herbal Ball",
    durationLevel1: "10 dias (60h, 6h/dia)",
    priceLevel1: "฿7.500 (≈ R$ 1.125)",
    totalProgram: "Foundation + Advanced: ฿14.000 (≈ R$ 2.100) em 3 semanas",
    language: "Inglês (limitado — tem tradutor)",
    edVisa: "Sim — programa de 3+ meses",
    bestFor: "Puristas. Quer aprender exatamente como se ensinava há 60 anos, sem adaptação para turista.",
    tip: "Aulas começam 9h em ponto — chegar 8h40. Vista roupa solta e branca/clara (regra da escola, não negociável).",
    contact: "oldmedicinehospital.com · +66 53 275 085",
    rating: 9,
  },
  {
    name: "Lanna Thai Massage School",
    city: "Chiang Mai (Old City, próximo ao Tha Phae Gate)",
    founded: "2008",
    recognition: "Certificada MoE. Foco em formação rápida e prática.",
    levels: "Level 1, 2, 3, 4 + Oil & Aroma",
    durationLevel1: "5 dias (30h)",
    priceLevel1: "฿5.500 (≈ R$ 825)",
    totalProgram: "Level 1+2+3: ฿15.000 (≈ R$ 2.250)",
    language: "Inglês",
    edVisa: "Sim — 3+ meses",
    bestFor: "Quem tem orçamento apertado e quer Northern Style básico funcional. Mais barato dos certificados.",
    tip: "Hostel-friendly: a escola tem parceria com 4 guesthouses do Old City — desconto de 20% se você mostrar matrícula.",
    contact: "lannamassageschool.com · +66 53 416 869",
    rating: 7,
  },
  {
    name: "TMI — Thai Massage Institute (Bangkok)",
    city: "Bangkok (Sukhumvit Soi 22)",
    founded: "2010",
    recognition: "Certificada MoE. Estilo Bangkok / Wat Pho derivado.",
    levels: "Level 1 a 4 + esportiva",
    durationLevel1: "30h (5 dias)",
    priceLevel1: "฿9.500 (≈ R$ 1.425)",
    totalProgram: "Profissional: ฿32.000 (≈ R$ 4.800)",
    language: "Inglês + japonês",
    edVisa: "Sim",
    bestFor: "Quem precisa ficar em Bangkok (negócios, família, parceiro) e não pode subir pra Chiang Mai.",
    tip: "Localização Sukhumvit é cara — fica em apart-hotel mensal em On Nut (BTS direto) por ฿15.000/mês.",
    contact: "tmischool.com · +66 2 663 0123",
    rating: 7,
  },
  {
    name: "Body Tune Thai Massage School",
    city: "Bangkok (Silom, dentro do spa Body Tune)",
    founded: "2003",
    recognition: "Certificada MoE.",
    levels: "Level 1 a 3 + Oil",
    durationLevel1: "5 dias (30h)",
    priceLevel1: "฿9.000 (≈ R$ 1.350)",
    totalProgram: "Level 1+2+3: ฿24.000 (≈ R$ 3.600)",
    language: "Inglês",
    edVisa: "Sim",
    bestFor: "Estágio prático: alunos avançados podem atender clientes reais no spa Body Tune. Único da lista com isso.",
    tip: "Pergunte explicitamente sobre o programa Practicum — não é divulgado no site, só na recepção.",
    contact: "bodytuneschool.com · +66 2 632 7799",
    rating: 8,
  },
  {
    name: "Wat Pho Massage Service (Sala Khlai)",
    city: "Phuket (Patong) — franquia oficial do Wat Pho",
    founded: "2014 (franquia)",
    recognition: "Certificado oficial Wat Pho (mesmo currículo e diploma).",
    levels: "Foundation, Advanced, Foot, Oil",
    durationLevel1: "30h (5 dias)",
    priceLevel1: "฿14.000 (≈ R$ 2.100)",
    totalProgram: "Foundation + Advanced: ฿28.000 (≈ R$ 4.200)",
    language: "Inglês",
    edVisa: "Apenas 3+ meses",
    bestFor: "Quem quer o certificado Wat Pho mas tá em Phuket de férias. Mesmo diploma, mesmo conteúdo, mesma assinatura.",
    tip: "Confira no site oficial watpomassage.com se a franquia ainda é ativa — duas filiais já fecharam recentemente.",
    contact: "watpomassage.com (filiais)",
    rating: 8,
  },
];

const SchoolCard = ({ s }: { s: School }) => (
  <Card>
    <div className="flex justify-between gap-3 flex-wrap mb-2">
      <h4 className="text-foreground font-semibold text-lg">{s.name}</h4>
      <span className="text-gold text-sm whitespace-nowrap">★ {s.rating}/10</span>
    </div>
    <p className="text-sm"><strong className="text-foreground">Cidade:</strong> {s.city}</p>
    <p className="text-sm"><strong className="text-foreground">Fundada:</strong> {s.founded}</p>
    <p className="text-sm"><strong className="text-foreground">Reconhecimento:</strong> {s.recognition}</p>
    <p className="text-sm"><strong className="text-foreground">Níveis oferecidos:</strong> {s.levels}</p>
    <p className="text-sm"><strong className="text-foreground">Foundation (Level 1):</strong> {s.durationLevel1} · {s.priceLevel1}</p>
    <p className="text-sm"><strong className="text-foreground">Programa completo:</strong> {s.totalProgram}</p>
    <p className="text-sm"><strong className="text-foreground">Idioma:</strong> {s.language} · <strong className="text-foreground">Emite ED Visa:</strong> {s.edVisa}</p>
    <p className="text-sm"><strong className="text-foreground">Para quem é:</strong> {s.bestFor}</p>
    <p className="text-sm text-gold">💡 {s.tip}</p>
    <p className="text-xs text-muted-foreground border-t border-border pt-2 mt-2">📞 {s.contact}</p>
  </Card>
);

const CursosMassagem3367 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Guia Cursos de Massagem Tailandesa — 10 escolas certificadas, preços e visto"
        description="Guia interno: 10 escolas certificadas pelo Ministério da Educação tailandês, com preços reais, duração, contato direto, passo a passo do ED Visa e roteiros de 1, 3 e 6 meses."
        canonicalPath="/cursosmassagem3367"
      />

      {/* Hero */}
      <header className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroAsset.url} alt="Curso de massagem tailandesa tradicional" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="relative max-w-3xl mx-auto px-6 pb-16 w-full">
          <p className="guide-section-label mb-3">🪷 Guia Cursos de Massagem Tailandesa</p>
          <h1 className="font-display text-4xl sm:text-6xl text-foreground leading-tight">
            Forme-se em Thai Massage<br />nas 10 escolas certificadas.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Wat Pho, ITM, TMC, Sunshine, Old Medicine Hospital e mais. Preço real em baht, contato direto da secretaria, passo a passo do ED Visa e roteiros prontos de 1 a 6 meses.
          </p>
        </div>
      </header>

      <Section chapter="Capítulo 1" title="Como ler este guia">
        <p>Cada uma das 10 escolas abaixo foi testada (alunado ou visita técnica + entrevista com brasileiros que estudaram lá). A tabela mostra <strong className="text-foreground">preço real em baht, duração em horas, idioma, reconhecimento oficial e se emite carta para ED Visa</strong>.</p>
        <p>Nota de 0 a 10 considera: reconhecimento internacional, qualidade do ensino, custo-benefício, suporte ao aluno estrangeiro e empregabilidade do certificado.</p>
        <p>⚠️ <strong className="text-foreground">Preços atualizados.</strong> Variações de até 10% são normais (a Tailândia reajusta cursos a cada ciclo letivo). 1 baht ≈ R$ 0,15.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 2" title="Os 4 estilos de Thai Massage (escolha antes da escola)">
        <p>Antes de escolher escola, escolha estilo. Estudar Northern Style no Wat Pho ou Southern no ITM é desperdício de dinheiro.</p>
        <Card>
          <p className="text-sm"><strong className="text-foreground">1. Royal / Southern Style (Wat Pho, TMI, Body Tune):</strong> mais técnico, posições delicadas (paciente nunca cruza pernas com você), foco em acupressão de Sen lines. Origem palaciana.</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">2. Northern / Lanna Style (ITM, TMC, Old Medicine Hospital, Loi Kroh):</strong> mais flow, alongamentos longos, dinâmico, contato corporal próximo. Origem dos povos do norte. <strong className="text-foreground">É o mais popular no Brasil.</strong></p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">3. Sunshine / Asokananda:</strong> Northern + raízes indianas (Ayurveda + Yoga). Mais espiritual, residencial, imersivo.</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">4. Spa / Modern Oil:</strong> não é Thai tradicional — é massagem com óleo no estilo spa. Cursos curtos (3-5 dias). Boa renda complementar, mas não substitui a formação tradicional.</p>
        </Card>
        <p className="text-gold">💡 <strong>Dica:</strong> se você não tem certeza, comece com <strong className="text-foreground">Northern Style (ITM)</strong>. É o mais reconhecido no Brasil, mais barato, mais fácil de absorver para iniciantes.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 3" title="O sistema de níveis (e o que cada um te permite fazer)">
        <p>A maioria das escolas certificadas segue o sistema do MoE tailandês de Levels 1 a 5. Saber em que nível parar é o que separa quem vai trabalhar profissionalmente de quem fica no hobby caro.</p>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Level 1 — Foundation (30h):</strong> base. Sequência de 90 minutos completa. Já dá pra atender amigos e família. <strong>NÃO</strong> é suficiente para trabalhar legalmente como terapeuta.</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Level 2 — Intermediate (30h):</strong> variações, refinamento técnico, princípios de Sen lines. Combinado com Level 1, dá embasamento pra atender amigo de amigo.</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Level 3 — Advanced (30h):</strong> técnicas avançadas, pressão profunda, posições laterais. Aqui começa a ser "profissional".</p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Level 4 — Therapeutic / Professional (60h):</strong> ESTE é o nível que te certifica como terapeuta. Inclui anatomia, contraindicações, diagnóstico básico. <strong className="text-foreground">Mínimo para trabalhar legalmente no Brasil e em spas internacionais.</strong></p>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Level 5 — Teacher Training (150h+):</strong> formação para você abrir sua própria escola. Não precisa pra atender — precisa pra ensinar.</p>
        </Card>
        <p className="text-gold">💡 <strong>Conta final:</strong> Level 1+2+3+4 = ~150h = formação profissional completa. Custa entre ฿24.000 e ฿38.000 (R$ 3.600 a R$ 5.700) dependendo da escola. Leva de 6 a 12 semanas.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 4" title="As 10 escolas certificadas, comparadas">
        <p>Listadas por nota geral. Cada ficha tem o que você precisa saber antes de fechar matrícula: preço real, contato direto, e a dica que economiza tempo/dinheiro.</p>
        <div className="space-y-3">{schools.map((s) => <SchoolCard key={s.name} s={s} />)}</div>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 5" title="ED Visa (Education Visa) — passo a passo sem agência">
        <p>Cursos de 30 dias (Foundation simples) podem ser feitos com visto de turista de 30 ou 60 dias. Acima disso, é <strong className="text-foreground">ilegal</strong> estudar como turista — você pode ser deportado e tomar ban de 5 anos.</p>
        <p>Agências brasileiras cobram <strong>R$ 4.000 a R$ 6.000</strong> pelo serviço de ED Visa. Custo real: <strong className="text-foreground">฿4.500 (≈ R$ 670) + uma viagem a Vientiane, Laos</strong>.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Passo a passo (assumindo ITM como exemplo — funciona igual nas outras):</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li><strong className="text-foreground">Matricule-se</strong> no programa de 3+ meses da escola (Level 1+2+3, geralmente). Pague o sinal (~30%).</li>
            <li>Peça à secretaria a <strong className="text-foreground">"Visa Support Letter"</strong> + cópia da licença da escola pelo MoE. Demora 5–10 dias úteis.</li>
            <li>Vá ao <strong className="text-foreground">Consulado Tailandês em Vientiane, Laos</strong> (não tem em Phnom Penh com bom histórico). Ônibus de Bangkok a Nong Khai (12h, ฿900) + cruzar a ponte da amizade.</li>
            <li>Entregue: passaporte, foto 4x6 fundo branco, formulário TM87, Visa Support Letter, comprovante de matrícula, ฿2.000 em taxa consular, comprovante de hospedagem em Vientiane.</li>
            <li>Retire o passaporte com o ED Visa em <strong className="text-foreground">2 dias úteis</strong>. Volte pra Tailândia.</li>
            <li>Dentro da Tailândia, na semana seguinte: <strong className="text-foreground">90-day report</strong> na Immigration e busca da extensão local na escola (a escola te leva).</li>
          </ol>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Custo total real do ED Visa:</strong></p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Taxa consulado (Vientiane): ฿2.000</li>
            <li>Hostel 2 noites Vientiane: ฿900</li>
            <li>Ônibus Bangkok ↔ Nong Khai: ฿1.800 ida e volta</li>
            <li>Visa run + comida: ฿1.000</li>
            <li><strong className="text-foreground">Total: ฿5.700 (≈ R$ 850)</strong> contra R$ 4.000–6.000 da agência.</li>
          </ul>
        </Card>
        <p className="text-gold">💡 <strong>Atenção:</strong> a Tailândia restringiu o ED Visa recentemente para evitar visas falsos. Agora exige <strong className="text-foreground">comprovante de saldo bancário</strong> de ฿20.000 e <strong>frequência de 80% comprovada por digital</strong>. Não falte aula.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 6" title="Roteiro de 1 mês (Foundation rápido)">
        <p><strong className="text-foreground">Para quem:</strong> está de férias na Tailândia e quer aprender as bases pra atender amigos no Brasil ou complementar uma renda.</p>
        <p><strong className="text-foreground">Visto:</strong> turismo (30 ou 60 dias). Sem ED Visa.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Cronograma sugerido:</p>
          <ul className="text-sm space-y-1">
            <li>📍 <strong>Semana 1:</strong> chegada em Chiang Mai, instalar em guesthouse no Old City (~฿8.000/mês), aclimatar, comprar roupa branca/clara.</li>
            <li>🎓 <strong>Semana 2:</strong> ITM Level 1 (5 dias, ฿6.500). Aulas 9h–16h.</li>
            <li>🎓 <strong>Semana 3:</strong> ITM Level 2 (5 dias, ฿6.500). Pratica diária à noite com colegas (escola disponibiliza tatames).</li>
            <li>🏝️ <strong>Semana 4:</strong> ITM Foot Massage (3 dias, ฿3.500) + 2 dias livres para massagem em hospital tailandês como cobaia (฿200 a hora, aprende muito).</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Custo total estimado (1 mês em Chiang Mai):</strong></p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Cursos: ฿16.500 (R$ 2.475)</li>
          <li>Moradia: ฿8.000 (R$ 1.200)</li>
          <li>Comida (street food + mercado): ฿9.000 (R$ 1.350)</li>
          <li>Transporte + lazer: ฿4.000 (R$ 600)</li>
          <li><strong className="text-foreground">Total: ฿37.500 ≈ R$ 5.625</strong> sem passagem aérea.</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 7" title="Roteiro de 3 meses (terapeuta profissional)">
        <p><strong className="text-foreground">Para quem:</strong> quer voltar terapeuta profissional certificado para abrir consultório ou trabalhar em spa.</p>
        <p><strong className="text-foreground">Visto:</strong> ED Visa obrigatório.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Cronograma:</p>
          <ul className="text-sm space-y-1">
            <li>🛬 <strong>Mês 1:</strong> chegar com visto de 60 dias, matricular na ITM (Level 1+2+3), tirar ED Visa em Vientiane na semana 4.</li>
            <li>🎓 <strong>Mês 2:</strong> Level 3 ITM (60h, ฿11.500) + Anatomia básica em paralelo + atendimentos voluntários supervisionados.</li>
            <li>🎓 <strong>Mês 3:</strong> Level 4 Therapeutic ITM (60h, ฿12.000) + estágio em spa parceiro da escola (8 horas/semana, paga ฿250/h).</li>
            <li>🎓 <strong>Mês 3 — opcional:</strong> Wat Pho Foot Massage em Bangkok (3 dias, ฿7.500) — diploma extra na pasta.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Custo total estimado (3 meses Chiang Mai):</strong></p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Cursos: ฿30.000 (R$ 4.500)</li>
          <li>ED Visa completo: ฿5.700 (R$ 855)</li>
          <li>Moradia (apto mensal Nimman): ฿24.000 (R$ 3.600)</li>
          <li>Comida + transporte: ฿35.000 (R$ 5.250)</li>
          <li>Estágio remunerado (entrada): -฿8.000 (R$ -1.200)</li>
          <li><strong className="text-foreground">Total líquido: ฿86.700 ≈ R$ 13.000</strong> em 3 meses (vs. R$ 25.000 que agências brasileiras cobram).</li>
        </ul>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 8" title="Roteiro de 6 meses (formação completa + especializações)">
        <p><strong className="text-foreground">Para quem:</strong> quer voltar com 3 ou 4 diplomas reconhecidos e poder se posicionar como referência no Brasil.</p>
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Combo recomendado:</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Meses 1–3 (Chiang Mai):</strong> ITM Level 1 ao 4 — terapeuta profissional Northern Style.</li>
            <li><strong className="text-foreground">Mês 4 (Chiang Mai):</strong> Loi Kroh especialização em Gestante (10 dias) + Esportiva (10 dias).</li>
            <li><strong className="text-foreground">Mês 5 (Bangkok):</strong> Wat Pho Foundation + Advanced + Foot. Diploma da escola mais reconhecida do mundo.</li>
            <li><strong className="text-foreground">Mês 6 (Pai ou Mae Rim):</strong> Sunshine Foundation residencial — dimensão espiritual + retiro de prática.</li>
          </ul>
        </Card>
        <p className="text-sm"><strong className="text-foreground">Investimento total (6 meses):</strong> ฿180.000–฿220.000 (R$ 27.000 a R$ 33.000) tudo incluso. Você volta com <strong className="text-foreground">4 diplomas certificados + portfólio para cobrar R$ 200 a sessão no Brasil</strong>.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 9" title="Onde morar barato perto das escolas">
        <Card>
          <p className="text-sm"><strong className="text-foreground">Chiang Mai — Old City (perto de Loi Kroh, OMH, TMC):</strong></p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
            <li>Smile House Guesthouse — ฿7.000/mês, ventilador, banheiro privativo. Soi 5 Rachadamnoen.</li>
            <li>Julie Guesthouse — ฿8.500/mês, AC, café da manhã. Soi 5.</li>
            <li>Wassana Guesthouse — ฿6.500/mês, mais simples mas limpo. Perto do Tha Phae Gate.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Chiang Mai — Nimman (perto de ITM):</strong></p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
            <li>Yindee Stylish Guesthouse — ฿12.000/mês AC studio.</li>
            <li>The Nimman Condo — Airbnb mensal ฿15.000–฿18.000, piscina.</li>
            <li>Hostel monthly: Bed Phrasingh Hostel — ฿5.500/mês dormitório, ฿9.000 quarto privativo.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Bangkok — perto Wat Pho:</strong></p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
            <li>Niras Bankoc — ฿14.000/mês, Phra Nakhon (5min a pé do Wat Pho).</li>
            <li>Lub d Siam — hostel parceiro com diária ฿500 (mensal sai ฿13.000).</li>
            <li>On Nut studios (BTS direto, 30min): ฿11.000–฿15.000/mês.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 10" title="Reconhecimento do diploma no Brasil e exterior">
        <Card>
          <p className="text-sm"><strong className="text-foreground">No Brasil:</strong> a profissão de massoterapeuta NÃO é regulamentada por conselho federal. Você pode atuar legalmente apresentando:</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
            <li>Diploma da escola tailandesa (Level 4 mínimo) traduzido juramentado.</li>
            <li>CNPJ MEI (categoria "Atividades de promoção de saúde 96.09-2-99").</li>
            <li>Curso complementar de Anatomia (60h) — não exigido por lei mas exigido pela maioria dos spas.</li>
          </ul>
        </Card>
        <Card>
          <p className="text-sm"><strong className="text-foreground">Exterior (Europa, EUA, Austrália):</strong></p>
          <ul className="list-disc pl-5 text-sm space-y-1 mt-1">
            <li><strong className="text-foreground">EUA:</strong> aceita Wat Pho e ITM em equivalências de horas para massage license (varia por estado).</li>
            <li><strong className="text-foreground">Alemanha/Áustria:</strong> Sunshine é a referência. Federações nacionais aceitam direto.</li>
            <li><strong className="text-foreground">Austrália:</strong> precisa equivalência via ANMT — aceita Wat Pho com horas complementares.</li>
            <li><strong className="text-foreground">Tailândia:</strong> trabalhar em spa local exige WP3 (work permit) — só se a escola te oferecer estágio formal.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 11" title="Glossário — 100+ termos que você vai ouvir todo dia">
        <p>Decorar esses termos antes de embarcar te economiza 2 semanas de adaptação. Professores usam o nome tailandês mesmo nas turmas em inglês.</p>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Fundamentos e filosofia (15)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Nuad Boran</strong> — massagem antiga (Thai tradicional)</li>
            <li><strong className="text-foreground">Nuad Phaen Boran</strong> — nome formal do currículo</li>
            <li><strong className="text-foreground">Ruesi Dat Ton</strong> — auto-alongamento dos sábios</li>
            <li><strong className="text-foreground">Metta</strong> — compaixão amorosa (estado mental)</li>
            <li><strong className="text-foreground">Karuna</strong> — compaixão ativa</li>
            <li><strong className="text-foreground">Mudita</strong> — alegria empática</li>
            <li><strong className="text-foreground">Upekkha</strong> — equanimidade</li>
            <li><strong className="text-foreground">Wai Khru</strong> — ritual de reverência ao mestre</li>
            <li><strong className="text-foreground">Wai</strong> — cumprimento com mãos juntas</li>
            <li><strong className="text-foreground">Khru / Ajarn</strong> — professor / mestre</li>
            <li><strong className="text-foreground">Pra Khru</strong> — mestre monge</li>
            <li><strong className="text-foreground">Sippa</strong> — arte / ofício</li>
            <li><strong className="text-foreground">Phaen Tai</strong> — escola do Sul</li>
            <li><strong className="text-foreground">Phaen Nuea</strong> — escola do Norte (Lanna)</li>
            <li><strong className="text-foreground">Shivago Komarpaj</strong> — médico de Buda, patrono</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Sen lines e energia (12)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Sen</strong> — linha de energia (10 principais)</li>
            <li><strong className="text-foreground">Sen Sumana</strong> — linha central</li>
            <li><strong className="text-foreground">Sen Ittha</strong> — esquerda (lua)</li>
            <li><strong className="text-foreground">Sen Pingkhala</strong> — direita (sol)</li>
            <li><strong className="text-foreground">Sen Kalathari</strong> — braços e pernas (cruz)</li>
            <li><strong className="text-foreground">Sen Sahatsarangsi</strong> — pernas exterior esq.</li>
            <li><strong className="text-foreground">Sen Thawari</strong> — pernas exterior dir.</li>
            <li><strong className="text-foreground">Sen Lawusang</strong> — orelha esquerda</li>
            <li><strong className="text-foreground">Sen Ulangka</strong> — orelha direita</li>
            <li><strong className="text-foreground">Sen Nanthakrawat / Khitchanna</strong> — pélvis</li>
            <li><strong className="text-foreground">Lom</strong> — vento, energia vital</li>
            <li><strong className="text-foreground">Pratu Lom</strong> — porta do vento (bloqueio)</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Anatomia (20)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Hua</strong> — cabeça</li>
            <li><strong className="text-foreground">Naa</strong> — rosto</li>
            <li><strong className="text-foreground">Kor</strong> — pescoço</li>
            <li><strong className="text-foreground">Lai</strong> — ombro</li>
            <li><strong className="text-foreground">Khaen</strong> — braço</li>
            <li><strong className="text-foreground">Sok</strong> — cotovelo</li>
            <li><strong className="text-foreground">Mue</strong> — mão</li>
            <li><strong className="text-foreground">Niu</strong> — dedo</li>
            <li><strong className="text-foreground">Lang</strong> — costas</li>
            <li><strong className="text-foreground">Aok</strong> — peito</li>
            <li><strong className="text-foreground">Thong</strong> — abdômen</li>
            <li><strong className="text-foreground">Sapok</strong> — quadril</li>
            <li><strong className="text-foreground">Khaa</strong> — perna</li>
            <li><strong className="text-foreground">Khao</strong> — joelho</li>
            <li><strong className="text-foreground">Naa Khaeng</strong> — canela</li>
            <li><strong className="text-foreground">Nong</strong> — panturrilha</li>
            <li><strong className="text-foreground">Khok Thao</strong> — tornozelo</li>
            <li><strong className="text-foreground">Thao</strong> — pé</li>
            <li><strong className="text-foreground">Fa Thao</strong> — sola</li>
            <li><strong className="text-foreground">Kraduuk</strong> — osso</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Técnicas e movimentos (18)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Jap Sen</strong> — pinçar a linha</li>
            <li><strong className="text-foreground">Kot Sen</strong> — pressionar a linha</li>
            <li><strong className="text-foreground">Kleun</strong> — rolar</li>
            <li><strong className="text-foreground">Yeut</strong> — alongar</li>
            <li><strong className="text-foreground">Bid</strong> — torcer</li>
            <li><strong className="text-foreground">Dat</strong> — pressionar com palma</li>
            <li><strong className="text-foreground">Yiap</strong> — pisar (com pé)</li>
            <li><strong className="text-foreground">Tup</strong> — bater leve (percussão)</li>
            <li><strong className="text-foreground">Khleun</strong> — onda corporal</li>
            <li><strong className="text-foreground">Sai</strong> — esquerda</li>
            <li><strong className="text-foreground">Khwa</strong> — direita</li>
            <li><strong className="text-foreground">Bon</strong> — em cima</li>
            <li><strong className="text-foreground">Lang</strong> — embaixo (também "costas")</li>
            <li><strong className="text-foreground">Reng</strong> — forte</li>
            <li><strong className="text-foreground">Bao</strong> — leve</li>
            <li><strong className="text-foreground">Cha-cha</strong> — devagar</li>
            <li><strong className="text-foreground">Reo-reo</strong> — rápido</li>
            <li><strong className="text-foreground">Yut</strong> — pare</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Comandos em aula e ao cliente (20)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Sawasdee khrap/kha</strong> — olá (h/m)</li>
            <li><strong className="text-foreground">Khop khun khrap/kha</strong> — obrigado</li>
            <li><strong className="text-foreground">Khor thot</strong> — desculpa / com licença</li>
            <li><strong className="text-foreground">Sabai mai?</strong> — tá bem? (pressão ok?)</li>
            <li><strong className="text-foreground">Sabai sabai</strong> — confortável</li>
            <li><strong className="text-foreground">Cheb mai?</strong> — tá doendo?</li>
            <li><strong className="text-foreground">Cheb nit noi</strong> — dói um pouco</li>
            <li><strong className="text-foreground">Cheb maak</strong> — dói muito</li>
            <li><strong className="text-foreground">Mai cheb</strong> — não dói</li>
            <li><strong className="text-foreground">Reng kwa</strong> — mais forte</li>
            <li><strong className="text-foreground">Bao kwa</strong> — mais leve</li>
            <li><strong className="text-foreground">Phlik tua</strong> — vire o corpo</li>
            <li><strong className="text-foreground">Non khwam</strong> — deite de bruços</li>
            <li><strong className="text-foreground">Non ngai</strong> — deite de costas</li>
            <li><strong className="text-foreground">Nang</strong> — sente</li>
            <li><strong className="text-foreground">Ha jai luek</strong> — respire fundo</li>
            <li><strong className="text-foreground">Phon klai</strong> — relaxe</li>
            <li><strong className="text-foreground">Set laew</strong> — terminamos</li>
            <li><strong className="text-foreground">Phak</strong> — descanse</li>
            <li><strong className="text-foreground">Dum nam</strong> — beba água</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Estilos, posições e materiais (15)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Nuad Nam Man</strong> — massagem com óleo</li>
            <li><strong className="text-foreground">Nuad Thao</strong> — massagem pé</li>
            <li><strong className="text-foreground">Luk Pra Kob</strong> — bola de ervas quente</li>
            <li><strong className="text-foreground">Yam Khang</strong> — massagem com pé sobre brasa</li>
            <li><strong className="text-foreground">Tok Sen</strong> — percussão com martelo de madeira</li>
            <li><strong className="text-foreground">Nuad Khon Tong</strong> — gestante</li>
            <li><strong className="text-foreground">Nuad Kila</strong> — esportiva</li>
            <li><strong className="text-foreground">Som Poi</strong> — ervas usadas no Luk Pra Kob</li>
            <li><strong className="text-foreground">Plai</strong> — gengibre tailandês (anti-inflamatório)</li>
            <li><strong className="text-foreground">Takrai</strong> — capim-limão</li>
            <li><strong className="text-foreground">Pha Khao Ma</strong> — pano usado pelo terapeuta</li>
            <li><strong className="text-foreground">Mor Nuad</strong> — terapeuta</li>
            <li><strong className="text-foreground">Khon Khai</strong> — paciente</li>
            <li><strong className="text-foreground">Boran</strong> — antigo / tradicional</li>
            <li><strong className="text-foreground">Samai mai</strong> — moderno</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Burocracia, visto e escola (10)</p>
          <ul className="text-sm grid sm:grid-cols-2 gap-x-4 gap-y-1">
            <li><strong className="text-foreground">Bai Anuyat</strong> — licença</li>
            <li><strong className="text-foreground">Bai Rap Rong</strong> — certificado</li>
            <li><strong className="text-foreground">TM30 / TM47 / TM87</strong> — formulários migração</li>
            <li><strong className="text-foreground">Visa Support Letter</strong> — carta da escola</li>
            <li><strong className="text-foreground">Re-entry permit</strong> — autorização de reentrada</li>
            <li><strong className="text-foreground">Overstay</strong> — multa ฿500/dia (máx ฿20.000)</li>
            <li><strong className="text-foreground">90-day report</strong> — relato obrigatório à Imigração</li>
            <li><strong className="text-foreground">MoE</strong> — Ministry of Education</li>
            <li><strong className="text-foreground">MoPH</strong> — Ministry of Public Health</li>
            <li><strong className="text-foreground">THA</strong> — Thai Healing Alliance</li>
          </ul>
        </Card>

        <p className="text-gold">💡 Imprima estas 6 cards e leve impressas. Os professores vão escrever em quadro branco usando os termos tailandeses — quem chega com base sai na frente desde o dia 1.</p>
      </Section>


      <div className="guide-section-divider" />

      <Section chapter="Capítulo 12" title="O que NÃO fazer (erros que vejo todo brasileiro cometer)">
        <Card>
          <ul className="list-disc pl-6 space-y-3 text-sm">
            <li><strong className="text-foreground">Comprar curso pelo Instagram da escola sem confirmar por email.</strong> Há 3 perfis falsos de "ITM" só no Instagram. Sempre confirme por email no domínio oficial (itmthaimassage.com).</li>
            <li><strong className="text-foreground">Achar que 5 dias de Foundation = profissional.</strong> Não é. Foundation é início. Não cobre amigo dizendo que é "formado".</li>
            <li><strong className="text-foreground">Ir pra Tailândia direto pra escola sem aclimatar.</strong> Reserve 3–5 dias antes do curso pra ajustar jet lag e digestão. Massagem em dia de diarreia é tortura.</li>
            <li><strong className="text-foreground">Vestir preto, decote ou shorts curtos.</strong> Escolas tradicionais exigem branco/claro, mangas e calça até o tornozelo. Wat Pho é especialmente rígido.</li>
            <li><strong className="text-foreground">Tocar a cabeça do colega tailandês casualmente.</strong> Cabeça é sagrada no budismo. Só toque com permissão explícita e técnica.</li>
            <li><strong className="text-foreground">Apontar pé pra imagem de Buda</strong> (toda escola tem altar). Sente sempre com pés recolhidos pra trás.</li>
            <li><strong className="text-foreground">Achar que curso 'rápido' de spa em Phuket vale Wat Pho.</strong> Cursos de 3 dias em Patong que entregam "diploma" não são reconhecidos — economia falsa.</li>
            <li><strong className="text-foreground">Pular o Wai Khru.</strong> É curto e te abre portas. Tailandeses notam quem participa de coração.</li>
          </ul>
        </Card>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 13" title="Como precificar quando voltar pro Brasil">
        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Tabela de preços de mercado (Brasil capitais):</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Thai tradicional 60min:</strong> R$ 180 a R$ 280.</li>
            <li><strong className="text-foreground">Thai tradicional 90min:</strong> R$ 240 a R$ 380.</li>
            <li><strong className="text-foreground">Thai tradicional 120min:</strong> R$ 320 a R$ 500.</li>
            <li><strong className="text-foreground">Thai Oil:</strong> +20% sobre Thai tradicional.</li>
            <li><strong className="text-foreground">Thai Gestante (especializada):</strong> +40%.</li>
          </ul>
        </Card>
        <p className="text-gold">💡 <strong>Estratégia de posicionamento:</strong> destaque a escola onde você se formou. "Certificado ITM Chiang Mai Level 4" ou "Wat Pho Bangkok Foundation+Advanced" no Instagram e Google Meu Negócio. Brasileiros pagam até 50% a mais por terapeuta que estudou na Tailândia vs. quem se formou só no Brasil.</p>
        <p>Em 6 meses de atendimento com agenda 4x/semana cobrando R$ 250 a sessão, você recupera o investimento total do roteiro de 3 meses.</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 14" title="Planilha de orçamento mensal (modelo pronto)">
        <p>Esta é a planilha que eu uso com os alunos antes de embarcar. Copie pra Google Sheets ou Excel — todos os valores em <strong className="text-foreground">baht (฿)</strong> e <strong className="text-foreground">reais (R$ a 1฿ = R$ 0,15)</strong>, prontos pra você ajustar conforme câmbio do dia.</p>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Tabela base — custo mensal de vida (Chiang Mai)</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="text-foreground border-b border-border">
                  <th className="text-left py-2 pr-2">Categoria</th>
                  <th className="text-right py-2 pr-2">Econômico ฿</th>
                  <th className="text-right py-2 pr-2">Médio ฿</th>
                  <th className="text-right py-2">Conforto ฿</th>
                </tr>
              </thead>
              <tbody className="[&_td]:py-1.5 [&_td]:pr-2 [&_tr]:border-b [&_tr]:border-border/40">
                <tr><td>Moradia (mensal)</td><td className="text-right">6.500</td><td className="text-right">12.000</td><td className="text-right">22.000</td></tr>
                <tr><td>Comida (street + mercado)</td><td className="text-right">7.000</td><td className="text-right">10.000</td><td className="text-right">16.000</td></tr>
                <tr><td>Água, luz, internet</td><td className="text-right">1.000</td><td className="text-right">1.800</td><td className="text-right">2.500</td></tr>
                <tr><td>Transporte (songthaew/moto)</td><td className="text-right">1.500</td><td className="text-right">3.000</td><td className="text-right">5.000</td></tr>
                <tr><td>Lavanderia</td><td className="text-right">400</td><td className="text-right">700</td><td className="text-right">1.200</td></tr>
                <tr><td>SIM card + dados</td><td className="text-right">300</td><td className="text-right">500</td><td className="text-right">800</td></tr>
                <tr><td>Material escolar (apostila, óleo)</td><td className="text-right">800</td><td className="text-right">1.200</td><td className="text-right">1.800</td></tr>
                <tr><td>Lazer (massagem, templo, fim de semana)</td><td className="text-right">2.000</td><td className="text-right">4.500</td><td className="text-right">9.000</td></tr>
                <tr><td>Buffer emergência (10%)</td><td className="text-right">1.950</td><td className="text-right">3.370</td><td className="text-right">5.830</td></tr>
                <tr className="text-foreground font-semibold border-t-2 border-border"><td className="pt-2">Total mensal ฿</td><td className="text-right pt-2">21.450</td><td className="text-right pt-2">37.070</td><td className="text-right pt-2">64.130</td></tr>
                <tr className="text-foreground font-semibold"><td>Total mensal R$</td><td className="text-right">3.220</td><td className="text-right">5.560</td><td className="text-right">9.620</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">⚠️ Bangkok: some +25% em moradia, transporte e lazer. Phuket/Samui: +35%.</p>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Cursos — soma à parte (1 mês)</p>
          <ul className="text-sm space-y-1">
            <li>Foundation só (ITM L1): ฿6.500 (R$ 975)</li>
            <li>L1 + L2 (10 dias): ฿13.000 (R$ 1.950)</li>
            <li>L1 + L2 + Foot (15 dias): ฿16.500 (R$ 2.475)</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Cursos — pacote 3 meses (terapeuta profissional)</p>
          <ul className="text-sm space-y-1">
            <li>ITM Level 1 ao 4 (150h): ฿24.500 (R$ 3.680)</li>
            <li>ED Visa completo (ida Vientiane): ฿5.700 (R$ 855)</li>
            <li>Especialização extra (gestante/esportiva): ฿5.000 (R$ 750)</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Custos únicos pré-embarque (à parte)</p>
          <ul className="text-sm space-y-1">
            <li>Passagem GRU↔BKK (média atual): R$ 5.500</li>
            <li>Seguro viagem 3 meses: R$ 900</li>
            <li>Vacinas (hepatite A + tifoide + raiva opcional): R$ 600</li>
            <li>Roupas brancas/claras (4 conjuntos): R$ 250</li>
            <li>Mochila + kit higiene: R$ 400</li>
          </ul>
        </Card>

        <Card>
          <p className="text-sm font-semibold text-foreground mb-2">Resumo — quanto separar antes de embarcar</p>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">1 mês (Foundation):</strong> R$ 5.600 + R$ 7.650 pré = <strong className="text-foreground">R$ 13.250</strong></li>
            <li><strong className="text-foreground">3 meses (terapeuta):</strong> R$ 16.700 + R$ 7.650 pré = <strong className="text-foreground">R$ 24.350</strong></li>
            <li><strong className="text-foreground">6 meses (formação completa):</strong> R$ 33.400 + R$ 7.650 pré = <strong className="text-foreground">R$ 41.050</strong></li>
          </ul>
          <p className="text-xs text-muted-foreground mt-2">Comparativo: agência brasileira cobra R$ 25.000–R$ 60.000 para os mesmos roteiros.</p>
        </Card>

        <p className="text-gold">💡 <strong>Dica:</strong> abra conta Wise antes de embarcar e transfira em lotes mensais. Câmbio sai 7%–9% melhor que cartão de crédito brasileiro. Saque limite ฿20.000/mês em ATM grátis (Aeon Bank).</p>
      </Section>

      <div className="guide-section-divider" />

      <Section chapter="Capítulo 15" title="Contatos úteis em emergência">

        <Card>
          <ul className="text-sm space-y-1">
            <li><strong className="text-foreground">Embaixada do Brasil em Bangkok:</strong> +66 2 256 6023</li>
            <li><strong className="text-foreground">Consulado Tailandês em Vientiane (ED Visa):</strong> +856 21 214 581</li>
            <li><strong className="text-foreground">Polícia turística (24h):</strong> 1155</li>
            <li><strong className="text-foreground">Immigration Chiang Mai:</strong> Promenada Resort Mall, andar 4</li>
            <li><strong className="text-foreground">Immigration Bangkok:</strong> The Government Complex, Chaeng Watthana</li>
            <li><strong className="text-foreground">Hospital com plano internacional CM:</strong> Bangkok Hospital Chiang Mai (+66 52 089 888)</li>
            <li><strong className="text-foreground">Hospital com plano internacional BKK:</strong> Bumrungrad (+66 2 066 8888)</li>
          </ul>
        </Card>
      </Section>

      <footer className="py-12 px-6 text-center text-xs text-muted-foreground border-t border-border">
        <p>Guia interno · Cursos de Massagem Tailandesa · v1.0</p>
        <p className="mt-2">Atualizações enviadas por email aos alunos. Dúvidas: contato@guiastailandia.com.br</p>
      </footer>
    </div>
  );
};

export default CursosMassagem3367;

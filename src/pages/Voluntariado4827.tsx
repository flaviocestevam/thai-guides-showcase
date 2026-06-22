import { SEO } from "@/components/SEO";
import { Shield, ExternalLink, PawPrint, GraduationCap, Leaf, Home, FileText, DollarSign, Heart, Map, BookOpen, Calendar, Users, AlertTriangle, Check } from "lucide-react";

const GREEN = "#16A34A";
const GOLD = "#D4A017";
const DEEP = "#064E3B";

type LinkRef = { label: string; url: string; note?: string };

const Section = ({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) => (
  <section id={id} className="py-12 border-b border-emerald-100">
    {kicker && <div className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: GREEN }}>{kicker}</div>}
    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: DEEP }}>{title}</h2>
    <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed space-y-4">{children}</div>
  </section>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold underline decoration-emerald-300 hover:decoration-emerald-700 inline-flex items-center gap-1">
    {children}<ExternalLink className="w-3 h-3" />
  </a>
);

const LinkList = ({ items }: { items: LinkRef[] }) => (
  <ul className="space-y-2">
    {items.map((l) => (
      <li key={l.url} className="flex items-start gap-2">
        <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: GREEN }} />
        <span><A href={l.url}>{l.label}</A>{l.note && <span className="text-gray-600"> — {l.note}</span>}</span>
      </li>
    ))}
  </ul>
);

const platforms: LinkRef[] = [
  { label: "Worldpackers", url: "https://www.worldpackers.com/search/thailand", note: "plataforma BR mais usada por brasileiros — projetos verificados, suporte em português, assinatura anual" },
  { label: "Workaway", url: "https://www.workaway.info/en/host/thailand", note: "maior banco mundial de hosts (hostels, fazendas, ONGs); assinatura anual" },
  { label: "HelpX", url: "https://www.helpx.net/locations.asp?country=Thailand", note: "barato, focado em fazendas, permacultura e hostels" },
  { label: "WWOOF Thailand", url: "https://wwoofthailand.com/", note: "rede oficial de fazendas orgânicas" },
  { label: "GoEco Thailand", url: "https://www.goeco.org/destination/volunteer-in-thailand", note: "projetos pagos com elefantes e ensino — mais caro, mais estruturado" },
  { label: "GVI Thailand", url: "https://www.gviusa.com/destinations/volunteer-in-thailand/", note: "ONG britânica séria, conservação marinha em Phang Nga" },
  { label: "Volunteer World", url: "https://www.volunteerworld.com/en/volunteer-abroad/thailand", note: "agregador que mostra avaliação e preço de cada projeto" },
  { label: "Love Volunteers", url: "https://www.lovevolunteers.org/destinations/thailand", note: "ensino, orfanato (com critério ético), animais" },
  { label: "IVHQ", url: "https://www.volunteerhq.org/destinations/thailand/", note: "neozelandeses; projetos em Chiang Mai e Surin" },
];

const sanctuaries: LinkRef[] = [
  { label: "Elephant Nature Park (Chiang Mai)", url: "https://www.elephantnaturepark.org/volunteer/", note: "referência ética mundial. Lek Chailert. Programas de 1 dia a 4 semanas" },
  { label: "Boon Lott's Elephant Sanctuary — BLES (Sukhothai)", url: "https://www.blesele.org/", note: "lista de espera grande, projeto pequeno e ético" },
  { label: "Burm and Emily's Elephant Sanctuary — BEES (Chiang Mai)", url: "https://www.bees-elesanctuary.org/volunteer/", note: "voluntariado semanal sem banho/passeio" },
  { label: "Wildlife Friends Foundation Thailand (Phetchaburi)", url: "https://www.wfft.org/volunteer/", note: "elefantes + ursos + macacos resgatados" },
  { label: "Soi Dog Foundation (Phuket)", url: "https://www.soidog.org/get-involved/volunteer-with-us", note: "cães e gatos de rua, programas de 2+ semanas" },
  { label: "Lanta Animal Welfare (Koh Lanta)", url: "https://lantaanimalwelfare.com/volunteer/", note: "clínica em ilha, vagas raras" },
];

const teaching: LinkRef[] = [
  { label: "FutureSense Foundation", url: "https://www.futuresensefoundation.org/", note: "ensino em escolas rurais no Norte" },
  { label: "Mirror Foundation (Chiang Rai)", url: "https://www.mirrorartgroup.org/en/volunteer", note: "comunidades de tribos das colinas" },
  { label: "Daughters Rising (Chiang Mai)", url: "https://daughtersrising.org/", note: "empoderamento de meninas Karen, prevenção de tráfico humano" },
  { label: "BaanDek Foundation (Chiang Mai)", url: "https://www.baandekfoundation.org/get-involved/", note: "crianças migrantes em canteiros de obra" },
];

const conservation: LinkRef[] = [
  { label: "New Heaven Reef Conservation (Koh Tao)", url: "https://newheavenreefconservation.com/", note: "mergulho + restauração de corais" },
  { label: "Marine Conservation Phang Nga (GVI)", url: "https://www.gvi.co.uk/projects/marine-conservation-thailand/", note: "tartarugas e recifes" },
  { label: "Naucrates (Koh Phra Thong)", url: "https://www.naucrates.org/", note: "proteção de tartarugas marinhas" },
];

const fbGroups: LinkRef[] = [
  { label: "Brasileiros na Tailândia", url: "https://www.facebook.com/groups/brasileirosnatailandia/", note: "comunidade geral — peça indicações de projeto" },
  { label: "Mochileiros na Tailândia", url: "https://www.facebook.com/groups/mochileirosnatailandia/", note: "dicas práticas de viagem e voluntariado" },
  { label: "Voluntariado pelo Mundo", url: "https://www.facebook.com/groups/voluntariadopelomundo/", note: "vagas reais, depoimentos, alertas de golpe" },
  { label: "Worldpackers — Comunidade Brasil", url: "https://www.facebook.com/groups/worldpackerscommunity/", note: "oficial, troca de experiências entre wpackers" },
  { label: "Workaway Travelers", url: "https://www.facebook.com/groups/workawaytravelers/", note: "internacional, ajuda a validar host antes de fechar" },
  { label: "Volunteer in Thailand", url: "https://www.facebook.com/groups/volunteerinthailand/", note: "hosts e voluntários postam vagas direto" },
  { label: "Digital Nomads Brasil — Tailândia", url: "https://www.facebook.com/groups/nomadesdigitaisbrasil/", note: "útil para ponte com projetos remotos/híbridos" },
];

const Voluntariado4827 = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Poppins',sans-serif]">
      <SEO
        title="Guia de Voluntariado na Tailândia — Conteúdo Completo"
        description="Guia completo de voluntariado na Tailândia: plataformas, projetos éticos, vistos, custos, templates e grupos de Facebook."
        canonicalPath="/voluntariado4827"
      />

      {/* HERO */}
      <header className="py-16 px-6 text-white" style={{ background: `linear-gradient(135deg, ${GREEN}, ${DEEP})` }}>
        <div className="container mx-auto max-w-4xl">
          <div className="inline-block bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Guia Premium</div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            Voluntariado na Tailândia — <span style={{ color: GOLD }}>Tudo Que Você Precisa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Plataformas testadas, projetos éticos avaliados in loco, vistos passo a passo, custos reais, templates em inglês e grupos de Facebook BR. Tudo com link clicável.
          </p>
        </div>
      </header>

      {/* SUMÁRIO */}
      <nav className="bg-emerald-50 py-6 px-6 border-b border-emerald-100 sticky top-0 z-20">
        <div className="container mx-auto max-w-4xl flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-emerald-900">
          {[
            ["cap-1", "1. Filtro ético"],
            ["cap-2", "2. Worldpackers"],
            ["cap-3", "3. Plataformas"],
            ["cap-4", "4. Elefantes"],
            ["cap-5", "5. Ensino"],
            ["cap-6", "6. Conservação"],
            ["cap-7", "7. Vistos"],
            ["cap-8", "8. Custos"],
            ["cap-9", "9. Saúde"],
            ["cap-10", "10. Templates"],
            ["cap-11", "11. Etiqueta"],
            ["cap-12", "12. Grupos FB"],
            ["cap-13", "13. Pós-projeto"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-emerald-600">{label}</a>
          ))}
        </div>
      </nav>

      <main className="container mx-auto max-w-4xl px-6">

        <Section id="cap-1" kicker="Capítulo 1" title="Filtro ético: os 7 sinais para descartar um projeto">
          <p>Antes de qualquer plataforma, aprenda a julgar o projeto. Em voluntariado com animais e crianças, intenção não basta — estrutura importa.</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Banho com elefante / passeio com cadeira (howdah):</strong> descarte automático. Elefante adulto não precisa de banho diário; é coreografia para turista.</li>
            <li><strong>Show / pintura / futebol com animal:</strong> indica quebra (phajaan). Descarte.</li>
            <li><strong>Acesso irrestrito a crianças sem checagem de antecedentes:</strong> projeto sério pede background check, cópia de passaporte e contrato.</li>
            <li><strong>Orfanato com porta giratória de voluntários estrangeiros:</strong> apego/desapego semanal causa trauma. Procure projetos de ensino em escola pública, não orfanato.</li>
            <li><strong>Promessa de "salvar" em 1 semana:</strong> impacto real exige tempo. Projetos sérios pedem 2+ semanas.</li>
            <li><strong>Sem prestação de contas pública:</strong> o site precisa ter quem fundou, CNPJ local (mostrar nº de registro junto à <A href="https://www.boi.go.th/index.php?page=index">autoridade tailandesa</A> ou ao registro de NGO), e relatório anual.</li>
            <li><strong>Cobra mais de US$ 100/dia sem hospedagem ou comida inclusa:</strong> tem alguém faturando alto. Compare com a média (cap. 8).</li>
          </ol>
        </Section>

        <Section id="cap-2" kicker="Capítulo 2" title="Worldpackers — referência para brasileiros">
          <p><A href="https://www.worldpackers.com/search/thailand">Worldpackers</A> é a plataforma mais usada pelos brasileiros porque tem suporte em português, política de proteção do viajante (se o host desistir você é reembolsado ou realocado), avaliações em PT-BR e assinatura anual única (cerca de US$ 49/ano com nosso <A href="https://www.worldpackers.com/promo/GUIASTAILANDIA">cupom GUIASTAILANDIA — 10 USD off</A>).</p>
          <h3 className="font-bold text-lg mt-4">Como usar bem:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Filtre por <em>Thailand</em> + categoria (NGO, Eco-village, Animal welfare, Hostel).</li>
            <li>Leia <strong>todas</strong> as avaliações em inglês — Google Translate dá conta.</li>
            <li>Se o host tem &lt; 5 avaliações ou &lt; 4,5 estrelas, evite.</li>
            <li>Mande mensagem usando o template do cap. 10 — hosts populares recebem 30+ pedidos/semana.</li>
            <li>Confirme horas/dia, dias de folga, comida, quarto privado vs. dormitório <strong>por escrito dentro da plataforma</strong> (vira prova em caso de disputa).</li>
            <li>Use o app durante a viagem — o botão SOS aciona o suporte 24h.</li>
          </ul>
          <h3 className="font-bold text-lg mt-4">Quando NÃO usar Worldpackers:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Voluntariado com elefante de verdade (santuários sérios como Elephant Nature Park inscrevem direto pelo site próprio).</li>
            <li>Estadia &gt; 60 dias num mesmo host (acima disso, contato direto com a ONG sai mais barato).</li>
          </ul>
        </Section>

        <Section id="cap-3" kicker="Capítulo 3" title="Plataformas testadas (todas com link)">
          <p>Cada uma tem um perfil. Não pague duas no mesmo ano — escolha uma.</p>
          <LinkList items={platforms} />
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mt-6">
            <div className="flex gap-2 font-bold text-amber-900"><AlertTriangle className="w-5 h-5" /> Cuidado</div>
            <p className="text-amber-900 text-sm mt-1">Evite "agências brasileiras" que cobram R$ 6 mil+ pra te colocar nessas mesmas plataformas. Você consegue sozinho com este guia.</p>
          </div>
        </Section>

        <Section id="cap-4" kicker="Capítulo 4" title="Santuários de elefantes e bem-estar animal">
          <p>Trabalhar com elefante exige escolher o santuário certo — a Tailândia tem &gt; 200 "elephant camps" e só uma minoria é ética.</p>
          <LinkList items={sanctuaries} />
          <p className="text-sm text-gray-600 mt-3">Todos acima passam pelos 7 critérios do cap. 1. Inscreva-se direto no site oficial; nenhum cobra através de agência.</p>
        </Section>

        <Section id="cap-5" kicker="Capítulo 5" title="Ensino e projetos comunitários">
          <p>Ensinar inglês em vila rural ou em escola de refugiados Karen é a porta mais acessível pra quem não fala tailandês. Aceitam de 2 semanas a 6 meses.</p>
          <LinkList items={teaching} />
          <p>Para ensino remunerado (com salário), procure por <A href="https://www.teflheaven.com/teach-english-thailand/">TEFL Heaven</A> ou <A href="https://www.xploreasia.org/teach-in-thailand/">XploreAsia</A> — exigem curso TEFL (120h).</p>
        </Section>

        <Section id="cap-6" kicker="Capítulo 6" title="Conservação marinha e natureza">
          <p>Sul da Tailândia é hotspot mundial de restauração de coral e proteção de tartarugas.</p>
          <LinkList items={conservation} />
          <p className="text-sm text-gray-600">Maioria exige certificação Open Water PADI (você pode fazer no Koh Tao por ฿9.000–11.000 antes de começar — veja <A href="https://www.bigbluediving.com/">Big Blue Diving</A>).</p>
        </Section>

        <Section id="cap-7" kicker="Capítulo 7" title="Vistos passo a passo (para brasileiros)">
          <p>Brasileiro entra na Tailândia <strong>sem visto</strong> e pode ficar até <strong>90 dias por entrada</strong> (acordo Brasil–Tailândia). Esse prazo <em>não</em> pode ser estendido na imigração — para ficar mais tempo é preciso sair do país ou usar visto específico.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Até 90 dias (voluntariado curto):</strong> entra como turista. Tenha passagem de saída e comprovação de hospedagem para o oficial.</li>
            <li><strong>90 a 180 dias:</strong> use Tourist Visa METV (6 meses, múltiplas entradas, ฿5.000) tirado no <A href="https://thaievisa.go.th/">Thai e-Visa oficial</A>.</li>
            <li><strong>Voluntariado formal &gt; 90 dias contínuos:</strong> Non-Immigrant O Volunteer Visa — pede carta da ONG registrada no Ministério do Interior tailandês. Custa cerca de ฿2.000 + carta.</li>
            <li><strong>DTV — Destination Thailand Visa (5 anos, múltiplas entradas, 180 dias por entrada):</strong> aceita "soft power activity" (Muay Thai, cozinha, retiros). Não cobre voluntariado puro, mas combina bem se você for nômade que ajuda também. Veja <A href="https://www.thaiembassy.com/destination-thailand-visa-dtv">requisitos</A>.</li>
            <li><strong>Education Visa (ED):</strong> útil se for combinar voluntariado com curso de tailandês (escolas como <A href="https://www.duketolanguageschool.com/">Duke Language</A>).</li>
          </ul>
          <p className="bg-emerald-50 p-4 rounded">Tire o e-Visa sempre pelo portal oficial <A href="https://thaievisa.go.th/">thaievisa.go.th</A>. Sites como "thailande-visa.org" são intermediários que cobram a mais.</p>
        </Section>

        <Section id="cap-8" kicker="Capítulo 8" title="Custos reais (sem agência)">
          <p>Tabela média por dia, fora passagem aérea Brasil↔BKK (R$ 4.500–7.500 ida-e-volta).</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-emerald-50">
                <tr><th className="text-left p-3 border">Categoria</th><th className="text-left p-3 border">Custo médio/dia</th><th className="text-left p-3 border">Observação</th></tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border">Worldpackers/Workaway (hostel, fazenda)</td><td className="p-3 border">฿0–200 (assinatura US$ 49/ano)</td><td className="p-3 border">Comida e quarto inclusos</td></tr>
                <tr><td className="p-3 border">Elephant Nature Park — 1 semana</td><td className="p-3 border">~฿3.500/dia (US$ 100)</td><td className="p-3 border">Hospedagem + 3 refeições + transporte CM</td></tr>
                <tr><td className="p-3 border">Soi Dog Foundation</td><td className="p-3 border">฿0</td><td className="p-3 border">Voluntário paga a própria estadia em Phuket (฿500–1.000/dia)</td></tr>
                <tr><td className="p-3 border">Ensino TEFL pago</td><td className="p-3 border">+฿800–1.200/dia (salário)</td><td className="p-3 border">Contrato 1 semestre, salário ฿30k–45k/mês</td></tr>
                <tr><td className="p-3 border">Mergulho/conservação Koh Tao</td><td className="p-3 border">~฿2.500/dia</td><td className="p-3 border">Inclui mergulhos diários e dormitório</td></tr>
                <tr><td className="p-3 border">Alimentação fora do projeto</td><td className="p-3 border">฿200–400</td><td className="p-3 border">Comida de rua</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="cap-9" kicker="Capítulo 9" title="Saúde, vacinas e seguro">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Febre amarela:</strong> obrigatória se veio escala em país de risco (passe no posto da Anvisa no Galeão/GRU 10 dias antes).</li>
            <li><strong>Hepatite A e B, tifoide, tétano:</strong> recomendadas — gratuitas em CRIE pelo SUS.</li>
            <li><strong>Raiva pré-exposição:</strong> recomendado se for trabalhar com cães/elefantes (3 doses, ~R$ 600 na rede privada).</li>
            <li><strong>Encefalite japonesa:</strong> se ficará &gt; 1 mês em zona rural na estação chuvosa.</li>
            <li><strong>Dengue:</strong> use repelente Icaridina diariamente. Não há vacina padrão acessível.</li>
            <li><strong>Seguro viagem:</strong> obrigatório. Recomendo <A href="https://www.safetywing.com/">SafetyWing Nomad Insurance</A> (US$ 56/mês, cobre voluntariado e mergulho) ou <A href="https://www.worldnomads.com/">World Nomads</A>.</li>
          </ul>
        </Section>

        <Section id="cap-10" kicker="Capítulo 10" title="Templates de inscrição em inglês">
          <h3 className="font-bold text-lg">Template 1 — Worldpackers/Workaway</h3>
          <pre className="bg-gray-50 border p-4 rounded text-sm whitespace-pre-wrap">{`Subject: Application — [Your name], [Month] for [duration]

Hi [Host name],

My name is [Name], I'm [age], from Brazil. I'm planning to be in [city] from [date] to [date] and your project caught my attention because [genuine reason — 1 sentence].

Skills I can offer:
• [skill 1 — be specific, e.g. "social media: I run a 5k Instagram"]
• [skill 2]
• [skill 3]

I'm a calm, punctual person, used to living in shared spaces. I speak Portuguese (native), English (intermediate) and basic Spanish.

A few questions:
1. How many hours per day, how many days off per week?
2. Is the accommodation private or shared dorm?
3. Are meals included on days off?
4. What is the nearest town and how do I get there from [BKK/CNX]?

Thank you so much. Looking forward to hearing from you.

Warmly,
[Name]
[WhatsApp +55 ...]`}</pre>

          <h3 className="font-bold text-lg mt-6">Template 2 — Santuário/ONG (e-mail direto)</h3>
          <pre className="bg-gray-50 border p-4 rounded text-sm whitespace-pre-wrap">{`Subject: Volunteer application — [duration] starting [month]

Dear [Coordinator name or "Volunteer Coordinator"],

I would like to apply for the volunteer programme at [Project name].

Profile:
• Name / age / nationality
• Profession / studies
• Languages
• Relevant experience (animal care / teaching / construction / diving certification)

Availability: from [date] to [date] — [X] weeks total.

I have read your ethics policy on [link] and fully agree with [specific point]. I have travel insurance covering volunteer work and am up to date with rabies, tetanus and hepatitis vaccines.

Please let me know:
1. Available start dates
2. Total program fee and what it covers
3. Payment method and refund policy
4. Documents required (passport copy, background check, medical form?)

Thank you for the work you do.

Best regards,
[Name]`}</pre>
        </Section>

        <Section id="cap-11" kicker="Capítulo 11" title="Etiqueta cultural — o que NÃO fazer">
          <ul className="list-disc pl-6 space-y-2">
            <li>Nunca toque a cabeça de ninguém (sagrada), inclusive crianças.</li>
            <li>Nunca aponte os pés para imagens de Buda ou pessoas mais velhas.</li>
            <li>Tire os sapatos antes de entrar em casa, templo ou sala de aula.</li>
            <li>Ombros e joelhos cobertos em templos e escolas — leve calça/saia leve.</li>
            <li>Não critique o rei nem a família real (crime, lèse-majesté).</li>
            <li>Não beije nem abrace em público — afetuosidade é privada.</li>
            <li>Wai (saudação juntando as mãos) é cortesia — devolva sempre, mas comece pelos mais velhos.</li>
            <li>"Mai pen rai" (não tem problema) é a filosofia local. Respire fundo e adapte.</li>
          </ul>
        </Section>

        <Section id="cap-12" kicker="Capítulo 12" title="Grupos de Facebook de voluntários BR e internacionais">
          <p>Use grupos para validar host antes de fechar, pegar carona até o projeto e trocar contatos pós-viagem.</p>
          <LinkList items={fbGroups} />
          <p className="text-sm text-gray-600 mt-2">Dica: ao postar pedindo opinião sobre um projeto, cite o nome exato e a cidade — você recebe respostas em horas.</p>
        </Section>

        <Section id="cap-13" kicker="Capítulo 13" title="Pós-projeto — roteiro bônus de turismo">
          <p>Depois do voluntariado, recompense-se. Sugestões por região:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Norte (depois de Chiang Mai):</strong> 3 dias em <A href="https://www.google.com/maps/search/Pai+Thailand">Pai</A>, 2 dias em <A href="https://www.google.com/maps/search/Chiang+Rai+White+Temple">Chiang Rai</A> (Templo Branco).</li>
            <li><strong>Sul (depois de Phuket/Phang Nga):</strong> ferry para <A href="https://www.google.com/maps/search/Koh+Phi+Phi">Koh Phi Phi</A> e <A href="https://www.google.com/maps/search/Koh+Lanta">Koh Lanta</A>.</li>
            <li><strong>Golfo (depois de Koh Tao):</strong> Full Moon Party em Koh Phangan se o calendário bater.</li>
            <li><strong>Central:</strong> 2 dias em <A href="https://www.google.com/maps/search/Ayutthaya">Ayutthaya</A> antes de fechar viagem em Bangkok.</li>
          </ul>
          <p>Antes de voar de volta, reserve 1 dia em Bangkok para massagem tailandesa de despedida no <A href="https://www.watpomassage.com/">Wat Pho</A> (฿480/h) — fecha o ciclo.</p>
        </Section>

        <footer className="py-12 text-center text-sm text-gray-500">
          <Shield className="inline w-4 h-4 mr-1" /> Conteúdo do guia premium — uso pessoal do comprador.
        </footer>
      </main>
    </div>
  );
};

export default Voluntariado4827;

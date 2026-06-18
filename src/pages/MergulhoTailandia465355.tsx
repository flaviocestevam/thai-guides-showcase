import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Anchor, AlertTriangle, Award, Calendar, CheckCircle2, DollarSign, Fish,
  GraduationCap, Info, LifeBuoy, MapPin, Ship, Shield, Sparkles, Waves,
  Wrench, BookOpen, ListChecks, HelpCircle, Hotel, Wallet, Compass, Languages,
  HeartPulse, Camera, Leaf, Users, Phone,
} from "lucide-react";

const TEAL = "#0EA5A3";
const NAVY = "#0F2A44";
const SAND = "#FFF8EE";
const CORAL = "#FF6B5B";

const Section = ({
  id, icon: Icon, kicker, title, children,
}: { id: string; icon: any; kicker: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 md:py-20 border-t border-slate-200">
    <div className="container mx-auto px-5 max-w-5xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ background: TEAL, color: "white" }}>
          <Icon className="w-5 h-5" />
        </span>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: TEAL }}>{kicker}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8" style={{ color: NAVY }}>{title}</h2>
      <div className="space-y-5 text-[17px] leading-relaxed text-slate-700">{children}</div>
    </div>
  </section>
);

const Card = ({ title, children, tone = "default" }: { title?: string; children: React.ReactNode; tone?: "default" | "warn" | "good" | "info" }) => {
  const tones: Record<string, string> = {
    default: "bg-white border-slate-200",
    warn: "bg-amber-50 border-amber-300",
    good: "bg-emerald-50 border-emerald-300",
    info: "bg-sky-50 border-sky-300",
  };
  return (
    <div className={`rounded-2xl border p-5 md:p-6 shadow-sm ${tones[tone]}`}>
      {title && <h4 className="font-bold text-lg mb-2" style={{ color: NAVY }}>{title}</h4>}
      <div className="text-[16px] leading-relaxed text-slate-700 space-y-2">{children}</div>
    </div>
  );
};

const Bul = ({ items }: { items: (string | [string, string])[] }) => (
  <ul className="space-y-2">
    {items.map((it, i) => {
      const [a, b] = Array.isArray(it) ? it : [it, ""];
      return (
        <li key={i} className="flex gap-2">
          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
          <span>{b ? <><strong>{a}</strong> — {b}</> : a}</span>
        </li>
      );
    })}
  </ul>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl md:text-2xl font-extrabold mt-6 mb-3" style={{ color: NAVY }}>{children}</h3>
);

const cursos = [
  { n: "Discover Scuba / Try Dive", t: "Experiência introdutória, sem certificação", d: "Meio dia. Para quem quer testar antes do Open Water." },
  { n: "Open Water Diver", t: "Primeira certificação completa (até 18m)", d: "3 a 4 dias. Teoria + água confinada + 4 mergulhos em mar." },
  { n: "Advanced Open Water", t: "Acesso até 30m + 5 mergulhos de aventura", d: "2 dias. Inclui obrigatórios: navegação e mergulho profundo." },
  { n: "Rescue Diver", t: "Prevenção e resposta a problemas", d: "3 a 4 dias + EFR. Muda sua visão de mergulho." },
  { n: "Divemaster", t: "Primeiro nível profissional", d: "6 a 12 semanas. Liderança, briefing, condução de grupo." },
  { n: "IDC / Instructor", t: "Para ensinar mergulho", d: "Vários meses de preparo. Carreira global." },
];

const precos = [
  { ilha: "Koh Tao", tag: "A mais barata para curso", linhas: [
    ["Try Dive", "2.500–4.500 THB"],
    ["Open Water", "9.900–12.950 THB"],
    ["Advanced", "9.500–12.500 THB"],
    ["OW + Advanced", "18.000–24.000 THB"],
    ["Rescue", "10.500–18.000 THB"],
    ["Divemaster", "30.000–45.000 THB (sem custo de vida)"],
    ["Fun dive", "800–1.500 THB / mergulho"],
  ]},
  { ilha: "Koh Phangan", tag: "Base para Sail Rock", linhas: [
    ["Fun dive Sail Rock (2 mergulhos)", "3.000–4.500 THB"],
    ["Open Water", "12.000–16.500 THB"],
    ["Advanced", "12.000–16.000 THB"],
    ["Rescue", "12.000–17.000 THB"],
  ]},
  { ilha: "Phuket", tag: "Logística + day trips + liveaboards", linhas: [
    ["Discover Scuba", "3.000–6.000 THB"],
    ["Open Water", "10.900–14.900 THB+"],
    ["Advanced", "13.000–17.000 THB"],
    ["Rescue", "12.900–18.000 THB"],
    ["Day trip (2–3 mergulhos)", "3.500–6.500 THB"],
  ]},
  { ilha: "Khao Lak", tag: "Base para Similan/Surin/Richelieu", linhas: [
    ["Open Water local", "14.000–17.000 THB"],
    ["OW com Similan/liveaboard", "24.000–31.000 THB+"],
    ["Advanced com Similan/Surin", "15.000–25.000 THB"],
    ["Liveaboard", "17.900–60.000+ THB"],
  ]},
];

const calendario = [
  { mes: "Janeiro", regiao: "Andaman + Golfo", nota: "Excelente. Similan, Surin, Richelieu, Phuket, Khao Lak, Koh Tao, Phangan, Samui." },
  { mes: "Fevereiro", regiao: "Andaman forte", nota: "Um dos melhores meses. Boa visibilidade, alta temporada — reserve antes." },
  { mes: "Março", regiao: "Andaman + Richelieu", nota: "Excelente para liveaboard e grandes encontros de vida marinha." },
  { mes: "Abril", regiao: "Andaman (fim)", nota: "Calor forte. Songkran movimenta transporte. Último mês forte." },
  { mes: "Maio", regiao: "Transição → Golfo", nota: "Similan/Surin fecham em meados de maio. Vá para Koh Tao/Phangan/Samui." },
  { mes: "Junho", regiao: "Golfo", nota: "Andaman instável. Koh Tao, Sail Rock e Phangan funcionam bem." },
  { mes: "Julho", regiao: "Golfo (alta)", nota: "Koh Tao popular. Ótimo para Open Water e fun dives." },
  { mes: "Agosto", regiao: "Golfo", nota: "Forte para Koh Tao, Phangan, Samui. Movimento alto por férias internacionais." },
  { mes: "Setembro", regiao: "Golfo (variável)", nota: "Chuva e visibilidade variável. Preços menores; aceite imprevisibilidade." },
  { mes: "Outubro", regiao: "Transição", nota: "Andaman reabre em meados de outubro. Planeje com flexibilidade." },
  { mes: "Novembro", regiao: "Andaman volta", nota: "Similan e Surin reabrem. Boa época para liveaboard em Khao Lak." },
  { mes: "Dezembro", regiao: "Alta temporada", nota: "Andaman cheia. Phuket e Khao Lak lotados — reserve cedo." },
];

const dives = [
  { reg: "Golfo (Koh Tao / Phangan / Samui)", pontos: [
    ["Chumphon Pinnacle", "Cardumes e formações — intermediário"],
    ["Southwest Pinnacle", "Rochas e vida — intermediário"],
    ["Sail Rock", "Joia do Golfo — OW confortável a Advanced"],
    ["Shark Island / White Rock / Twins / Japanese Gardens", "Pontos clássicos de Koh Tao"],
    ["Green Rock / Mango Bay / Hin Wong Pinnacle / Aow Leuk", "Variedade para todos os níveis"],
    ["HTMS Sattakut", "Naufrágio — Advanced + treinamento específico"],
  ]},
  { reg: "Andaman / Phuket", pontos: [
    ["Racha Yai", "Iniciante–intermediário. Bom para check dive"],
    ["Racha Noi", "Mais azul, melhor vida — intermediário/avançado"],
    ["King Cruiser Wreck", "Naufrágio famoso — Advanced"],
    ["Shark Point / Anemone Reef / Koh Doc Mai", "Vida marinha e recife"],
    ["Phi Phi Bida Nok / Bida Nai", "Paredões e vida pelágica"],
  ]},
  { reg: "Similan / Surin / Khao Lak", pontos: [
    ["Richelieu Rock", "Um dos melhores mergulhos da Ásia"],
    ["Koh Bon / Koh Tachai", "Encontros maiores quando aberto"],
    ["Elephant Head Rock / West of Eden / Christmas Point / Donald Duck Bay", "Topo dos Similan"],
  ]},
  { reg: "Koh Lanta", pontos: [
    ["Koh Haa", "Cenário e câmaras — iniciante confortável a avançado"],
    ["Hin Daeng / Hin Muang", "Para avançados — corrente e profundidade"],
  ]},
];

const glossario: [string, string][] = [
  ["Open Water", "Primeira certificação completa (até 18m)"],
  ["Advanced Open Water", "Mergulhos de aventura + até 30m"],
  ["Rescue Diver", "Prevenção e resposta a emergências"],
  ["Divemaster", "Primeiro nível profissional"],
  ["IDC", "Instructor Development Course — preparação para virar instrutor"],
  ["Fun dive", "Mergulho recreativo para certificado"],
  ["Try dive / Discover Scuba", "Experiência introdutória sem certificação"],
  ["Confined water", "Água confinada / ambiente controlado para treino"],
  ["Open water dives", "Mergulhos em ambiente aberto (mar)"],
  ["BCD", "Colete equilibrador"],
  ["Regulator", "Regulador — peça usada para respirar o ar do cilindro"],
  ["Tank", "Cilindro"],
  ["Weights", "Lastro"],
  ["Wetsuit / Fins / Mask", "Roupa de neoprene / nadadeiras / máscara"],
  ["Dive computer", "Computador de mergulho"],
  ["Buddy", "Dupla de mergulho"],
  ["Briefing", "Explicação antes do mergulho"],
  ["Dive site", "Ponto de mergulho"],
  ["Visibility / viz", "Visibilidade"],
  ["Current", "Correnteza"],
  ["Surface interval", "Intervalo de superfície"],
  ["No-decompression limit", "Limite sem descompressão"],
  ["Safety stop", "Parada de segurança"],
  ["SMB / Surface marker buoy", "Boia de sinalização"],
  ["Logbook", "Registro dos mergulhos"],
  ["Nitrox", "Mistura enriquecida com oxigênio"],
  ["Liveaboard", "Barco onde você dorme e mergulha vários dias"],
];

const MergulhoTailandia465355 = () => {
  return (
    <div className="min-h-screen font-['Poppins',sans-serif]" style={{ background: SAND, color: NAVY }}>
      <SEO
        title="Guia Mergulho na Tailândia 2026 | PADI, SSI, Koh Tao, Similan"
        description="Guia completo de mergulho na Tailândia: cursos PADI/SSI, custos reais, calendário, dive sites, liveaboards, segurança e roteiros — do Open Water ao Instructor."
        canonicalPath="/mergulho-tailandia465355"
      />
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #163a5f 60%, ${TEAL} 100%)` }}>
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1920"
            alt="Mergulho na Tailândia"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-5 max-w-5xl relative z-10 text-white">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5" style={{ background: CORAL }}>
            🤿 Guia 2026 • 34 capítulos
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
            Mergulho na Tailândia <span style={{ color: "#7FE7E5" }}>do Open Water ao Divemaster</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Cursos PADI/SSI, melhores ilhas, custos reais em THB, calendário mês a mês, dive sites mapeados,
            liveaboards, seguro DAN, câmaras hiperbáricas, vida marinha, fotografia subaquática, checklist pré-viagem
            e diretório de escolas com Google Maps e telefone — do iniciante ao profissional.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {["34 capítulos","Diretório de escolas (Maps + tel.)","Checklist pré-viagem","Equipamento detalhado","Seguro DAN","Vida marinha mês a mês","Glossário PT/EN","Roteiros 7/10/14/21 dias"].map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/20">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* AVISO */}
      <section className="py-10 bg-amber-50 border-y border-amber-300">
        <div className="container mx-auto px-5 max-w-5xl flex gap-4 items-start">
          <AlertTriangle className="w-8 h-8 flex-shrink-0 text-amber-700" />
          <div>
            <h2 className="font-bold text-xl mb-1 text-amber-900">Aviso importante antes de começar</h2>
            <p className="text-amber-900/90 leading-relaxed">
              Mergulho autônomo é uma atividade linda, mas séria. Não mergulhe sem treinamento, instrutor qualificado,
              equipamento adequado, avaliação de saúde e respeito aos limites da sua certificação. Este guia não substitui
              curso, instrutor, dive center, avaliação médica ou treinamento prático. <strong>Mergulho bom não é o mais barato. É o mais seguro.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 1 */}
      <Section id="por-que" icon={Sparkles} kicker="Capítulo 1" title="Por que a Tailândia virou referência mundial em mergulho">
        <p>Mar quente, custo menor que muitos países, grande volume de escolas, cursos em vários idiomas e ilhas com estrutura para semanas ou meses. Koh Tao virou sinônimo de Open Water barato — e isso tem dois lados.</p>
        <div className="grid md:grid-cols-2 gap-4 mt-2">
          <Card title="✅ Lado bom" tone="good">
            <Bul items={["Preço competitivo","Muitas opções de escola","Cursos saindo quase todos os dias","Vida social de mergulhador","Boa estrutura para iniciantes","Possibilidade de seguir até Instructor"]} />
          </Card>
          <Card title="⚠️ Lado ruim" tone="warn">
            <Bul items={["Escolas superlotadas em alta","Turmas grandes","Instrutor sem tempo individual","Equipamento muito usado","Curso corrido","Aluno certificado mas inseguro","Escolha feita só por preço ou Instagram"]} />
          </Card>
        </div>
        <p className="font-semibold">Este guia existe para você não escolher a primeira escola que aparece achando que certificação é tudo igual. Não é.</p>
      </Section>

      {/* 2 */}
      <Section id="padi-ssi" icon={Award} kicker="Capítulo 2" title="PADI, SSI e certificações: o que importa de verdade">
        <p>Na Tailândia você verá principalmente PADI e SSI. Ambas são reconhecidas mundialmente. Para mergulho recreativo, as duas funcionam — a diferença prática está na escola, no instrutor, no tamanho da turma.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="PADI">
            <Bul items={["Mais famosa do mundo","Forte no mercado internacional","Boa para quem pensa em carreira","Fácil de explicar em qualquer dive center"]} />
          </Card>
          <Card title="SSI">
            <Bul items={["Reconhecida globalmente","Preço pode ser melhor","Material digital integrado","Muito comum em Koh Tao"]} />
          </Card>
        </div>
        <Card title="O que realmente importa" tone="info">
          <Bul items={["Turma pequena","Instrutor presente","Equipamento revisado","Boa didática e briefing claro","Respeito ao ritmo do aluno","Política séria de segurança","Dive center que não força aluno inseguro","Transparência total de preço"]} />
        </Card>
      </Section>

      {/* 3 */}
      <Section id="quem-pode" icon={Shield} kicker="Capítulo 3" title="Quem pode fazer curso de mergulho">
        <p>Para Open Water você precisa em geral:</p>
        <Bul items={["Saber nadar","Estar confortável na água","Condição física compatível","Preencher questionário médico","Não ter contraindicação médica","Conseguir flutuar e nadar distância básica","Seguir instruções em inglês ou no idioma do curso"]} />
        <Card title="⚠️ Nunca minta no formulário médico" tone="warn">
          Asma, problemas cardíacos, epilepsia, cirurgia recente, alguns medicamentos, ansiedade forte em água — consulte médico antes. Mentir sobre saúde coloca você e outras pessoas em risco.
        </Card>
      </Section>

      {/* 4 */}
      <Section id="caminho" icon={GraduationCap} kicker="Capítulo 4" title="O caminho das certificações">
        <div className="grid md:grid-cols-2 gap-4">
          {cursos.map(c => (
            <Card key={c.n} title={c.n}>
              <p className="font-semibold" style={{ color: TEAL }}>{c.t}</p>
              <p>{c.d}</p>
            </Card>
          ))}
        </div>
        <Card title="💡 Dica de tempo" tone="info">
          Reserve sempre <strong>1 a 2 dias extras</strong> no roteiro. Curso de mergulho não combina com "voo no dia seguinte" — respeite o intervalo antes de voar.
        </Card>
      </Section>

      {/* 5 - Custos */}
      <Section id="custos" icon={DollarSign} kicker="Capítulo 5" title="Quanto custa mergulhar (faixas reais em THB)">
        <p>Preços variam por ilha, escola, certificadora, temporada, barco, equipamento e tamanho da turma. Use como referência:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {precos.map(p => (
            <Card key={p.ilha} title={p.ilha}>
              <p className="text-sm font-semibold mb-2" style={{ color: TEAL }}>{p.tag}</p>
              <Bul items={p.linhas as [string, string][]} />
            </Card>
          ))}
        </div>
        <Card tone="warn" title="⚠️ Não escolha só pelo preço">
          A diferença de 2.000 THB pode ser a diferença entre turma de 8 e turma de 4. Em mergulho, isso é tudo.
        </Card>
      </Section>

      {/* 6 - Onde */}
      <Section id="onde" icon={MapPin} kicker="Capítulo 6" title="Onde mergulhar em cada região">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Koh Tao">
            <p><strong>Para:</strong> Open Water, Advanced, vida de ilha, Divemaster.</p>
            <p><strong>Vibe:</strong> ilha-escola, muita gente aprendendo. Escolha a escola com cuidado.</p>
          </Card>
          <Card title="Koh Phangan">
            <p><strong>Para:</strong> Sail Rock, certificados, mistura com yoga.</p>
            <p><strong>Vibe:</strong> menos "fábrica" que Koh Tao, Sail Rock pode ser o melhor mergulho da viagem.</p>
          </Card>
          <Card title="Koh Samui">
            <p><strong>Para:</strong> casais, conforto, day trip para Sail Rock e Koh Tao.</p>
            <p><strong>Vibe:</strong> resort + mergulho ocasional. Não é a base para curso barato.</p>
          </Card>
          <Card title="Phuket">
            <p><strong>Para:</strong> Racha, Phi Phi, King Cruiser, liveaboards.</p>
            <p><strong>Vibe:</strong> prática, infraestrutura forte. Mais cara para se certificar.</p>
          </Card>
          <Card title="Khao Lak">
            <p><strong>Para:</strong> Similan, Surin, Richelieu Rock, liveaboard.</p>
            <p><strong>Vibe:</strong> menos festa, mais mergulho. Base certa da Andaman.</p>
          </Card>
          <Card title="Koh Lanta">
            <p><strong>Para:</strong> Hin Daeng, Hin Muang, Koh Haa.</p>
            <p><strong>Vibe:</strong> calma, mergulhos melhores para certificados — não para Open Water barato.</p>
          </Card>
        </div>
      </Section>

      {/* 7 - Calendário */}
      <Section id="calendario" icon={Calendar} kicker="Capítulo 7" title="Calendário de mergulho mês a mês">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead style={{ background: NAVY, color: "white" }}>
              <tr>
                <th className="p-3">Mês</th>
                <th className="p-3">Região forte</th>
                <th className="p-3">Observação</th>
              </tr>
            </thead>
            <tbody>
              {calendario.map((c, i) => (
                <tr key={c.mes} className={i % 2 ? "bg-slate-50" : ""}>
                  <td className="p-3 font-bold" style={{ color: TEAL }}>{c.mes}</td>
                  <td className="p-3 font-semibold">{c.regiao}</td>
                  <td className="p-3">{c.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Card tone="warn" title="⛔ Regra de ouro">
          Similan e Surin <strong>fecham entre meados de maio e meados de outubro</strong>. Não planeje Andaman nesse período — vá para o Golfo (Koh Tao, Phangan, Samui).
        </Card>
      </Section>

      {/* 8 - Dive sites */}
      <Section id="dive-sites" icon={Fish} kicker="Capítulo 8" title="Os 30+ melhores dive sites por região">
        <div className="space-y-4">
          {dives.map(d => (
            <Card key={d.reg} title={d.reg}>
              <Bul items={d.pontos as [string, string][]} />
            </Card>
          ))}
        </div>
        <Card tone="warn">⚠️ Naufrágios e cavernas exigem treinamento específico. "Só entrar um pouquinho" não existe — ambientes overhead são outra categoria de risco.</Card>
      </Section>

      {/* 9 - Como escolher escola */}
      <Section id="escolher-escola" icon={Compass} kicker="Capítulo 9" title="Como escolher uma escola de mergulho">
        <p>Não escolha por foto bonita. Escolha por segurança. Antes de fechar, pergunte:</p>
        <Bul items={[
          ["Tamanho máximo da turma?", "ideal até 4 por instrutor em Open Water, alerta a partir de 8"],
          ["Quem será meu instrutor?", "nome, idioma, experiência, anos ensinando"],
          ["Equipamento incluído?", "BCD, regulador, neoprene, máscara, nadadeiras, computador"],
          ["Tem piscina/água confinada?", "muda muito o aprendizado inicial"],
          ["O curso é corrido?", "cuidado com pacotes compactados demais"],
          ["E se eu não me sentir confortável?", "escola séria não força aluno"],
          ["Como são os barcos?", "oxigênio a bordo, kit primeiros socorros, plano de emergência"],
          ["O preço inclui tudo?", "eLearning, taxa de certificação, parque nacional, transporte"],
          ["Avaliações falam de segurança?", "não basta só falar de 'vibe' e festa"],
          ["A escola respeita limites?", "certificação não é prêmio de presença"],
        ]} />
      </Section>

      {/* 10 - Sinais vermelhos */}
      <Section id="sinais-vermelhos" icon={AlertTriangle} kicker="Capítulo 10" title="Sinais vermelhos de escola ruim">
        <Card tone="warn">
          <Bul items={[
            "Empurra desconto agressivo",
            "Promete curso rápido demais",
            "Não responde perguntas de segurança",
            "Não informa tamanho de turma",
            "Não mostra o que está incluído",
            "Não fala sobre questionário médico",
            "Ignora medo ou desconforto",
            "Equipamento visivelmente gasto",
            "Não explica plano de emergência",
            "Trata mergulho como festa",
            "Força aluno inseguro a continuar",
            "Não respeita clima e condição do mar",
            "Não cancela saída quando deveria",
          ]} />
        </Card>
        <Card tone="info" title="🗣️ Frase útil em inglês">
          <p className="italic">"Safety is more important than finishing fast."</p>
          <p className="text-sm">Tradução: segurança é mais importante do que terminar rápido.</p>
        </Card>
      </Section>

      {/* 11 - Roteiros por nível */}
      <Section id="roteiros-nivel" icon={ListChecks} kicker="Capítulo 11" title="Roteiros por nível">
        <H3>10 dias: Open Water + Advanced (Koh Tao)</H3>
        <Card><Bul items={[
          ["Dia 1","chegada — não comece curso cansado"],
          ["Dias 2 a 5","Open Water (teoria + confinada + mar)"],
          ["Dia 5","descanso ou reserva"],
          ["Dias 6 e 7","Advanced (5 mergulhos de aventura)"],
          ["Dia 8","fun dives leves"],
          ["Dia 9","dia livre"],
          ["Dia 10","saída — respeite intervalo antes de voar"],
        ]} /></Card>
        <H3>1 mês: até Rescue (Koh Tao)</H3>
        <Card><Bul items={[
          ["Semana 1","Open Water + descanso"],
          ["Semana 2","Advanced + fun dives"],
          ["Semana 3","Flutuabilidade, Nitrox opcional, experiência"],
          ["Semana 4","EFR + Rescue"],
        ]} /></Card>
        <H3>3 meses: Divemaster (Koh Tao)</H3>
        <Card><Bul items={[
          ["Mês 1","OW + Advanced + Rescue + EFR + fun dives"],
          ["Mês 2","Início Divemaster, assistência em cursos, teoria"],
          ["Mês 3","Mais mergulhos, liderança, mapa de site, briefing, finalização"],
        ]} /></Card>
        <H3>6 meses: até Instructor</H3>
        <Card><Bul items={[
          ["Mês 1","base: OW, Advanced, Rescue"],
          ["Mês 2","fun dives, especialidades, experiência"],
          ["Meses 3–4","Divemaster bem feito"],
          ["Mês 5","assistência, shadowing, preparação de habilidades"],
          ["Mês 6","IDC e exames, se estiver realmente preparado"],
        ]} /></Card>
      </Section>

      {/* 12 - Liveaboards */}
      <Section id="liveaboards" icon={Ship} kicker="Capítulo 12" title="Liveaboards: a melhor forma de mergulhar Similan e Richelieu">
        <p>Mergulho em barco por vários dias. Você dorme no barco e faz múltiplos mergulhos por dia. A melhor forma de acessar Similan, Surin, Koh Bon, Koh Tachai e Richelieu Rock.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="✅ Vale para" tone="good">
            <Bul items={["Certificados confortáveis","Quem quer vários mergulhos por dia","Acesso a pontos distantes","Busca por vida marinha mais rica","Quem aceita rotina de barco"]} />
          </Card>
          <Card title="❌ Não vale para" tone="warn">
            <Bul items={["Quem nunca mergulhou","Quem enjoa muito","Quem tem pouco tempo","Quem não sabe se gosta de mergulho","Desconfortáveis com profundidade/corrente"]} />
          </Card>
        </div>
        <H3>Faixas de preço</H3>
        <Bul items={[
          ["Econômico","17.900–30.000 THB"],
          ["Intermediário","30.000–50.000 THB"],
          ["Premium","50.000–90.000+ THB"],
        ]} />
        <H3>Perguntas obrigatórias antes de reservar</H3>
        <Card><Bul items={[
          "Quantos mergulhos inclui?",
          "Equipamento, computador e Nitrox incluídos?",
          "Taxa de parque incluída?",
          "Máximo de mergulhadores no barco e proporção guia/aluno?",
          "Tem oxigênio e plano de emergência?",
          "Política de cancelamento por clima?",
          "Cabine privativa ou compartilhada? Banheiro?",
          "Aceita Open Water ou exige Advanced?",
          "Mergulho noturno incluído?",
          "Rota exata e datas?",
        ]} /></Card>
        <Card tone="info">📅 <strong>Melhor época:</strong> 15 de outubro a 15 de maio. Pico em dezembro, janeiro, fevereiro e março — reserve com antecedência.</Card>
      </Section>

      {/* 13 - Custo de vida Koh Tao */}
      <Section id="custo-vida" icon={Wallet} kicker="Capítulo 13" title="Custo de vida em Koh Tao (30 / 60 / 90 dias)">
        <p>Koh Tao pode ser barata ou cara — depende do estilo. Estimativas em THB:</p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="30 dias">
            <Bul items={[
              ["Econômico","35.000–60.000"],
              ["Confortável","60.000–100.000"],
              ["Pro / intenso","100.000–160.000"],
            ]} />
          </Card>
          <Card title="60 dias">
            <Bul items={[
              ["Econômico","60.000–110.000"],
              ["Confortável","110.000–190.000"],
              ["Pro training","180.000–300.000"],
            ]} />
          </Card>
          <Card title="90 dias">
            <Bul items={[
              ["Econômico","90.000–160.000"],
              ["Confortável","160.000–280.000"],
              ["Divemaster/Pro","250.000–450.000"],
            ]} />
          </Card>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="✂️ Onde economizar" tone="good">
            <Bul items={["Hospedagem mensal","Comida local","Curso em pacote","Evitar festa diária","Negociar aluguel longo","Dividir quarto","Equipamento da escola no início"]} />
          </Card>
          <Card title="🚫 Onde NÃO economizar" tone="warn">
            <Bul items={["Escola","Seguro de mergulho","Equipamento essencial","Médico","Ferry seguro","Computador de mergulho","Máscara que encaixa bem"]} />
          </Card>
        </div>
      </Section>

      {/* 14 - Equipamento */}
      <Section id="equipamento" icon={Wrench} kicker="Capítulo 14" title="Equipamento: comprar ou alugar?">
        <p>Para Open Water, a escola normalmente fornece tudo. Não compre tudo no começo — mergulhe mais e entenda seu estilo.</p>
        <Card title="🎯 Primeiro item para comprar" tone="info">
          <strong>Máscara.</strong> Uma máscara que veda bem muda toda a experiência.
        </Card>
        <Card title="Próximos itens (quando fizer sentido)">
          <Bul items={["Computador de mergulho","SMB / boia de sinalização","Máscara reserva","Roupa adequada à temperatura","Nadadeiras próprias","Logbook","Lanterna (com treinamento noturno)","Seguro de mergulho"]} />
        </Card>
      </Section>

      {/* 15 - Segurança */}
      <Section id="seguranca" icon={Shield} kicker="Capítulo 15" title="Segurança no mergulho — as regras inegociáveis">
        <Card tone="warn">
          <Bul items={[
            "Nunca mergulhe além do seu treinamento",
            "Nunca entre em caverna ou naufrágio sem treinamento específico",
            "Nunca esconda problema de saúde",
            "Nunca mergulhe cansado, bêbado ou de ressaca",
            "Nunca aceite pressão — se não quer mergulhar, não mergulhe",
            "Sempre respeite intervalo antes de voar",
            "Sempre escute o briefing (mesmo se já conhece o site)",
            "Não toque em coral — coral é vivo e frágil",
            "Controle flutuabilidade — protege você e o recife",
            "Use reef-safe sunscreen quando possível",
          ]} />
        </Card>
      </Section>

      {/* 16 - Golpes */}
      <Section id="golpes" icon={AlertTriangle} kicker="Capítulo 16" title="Golpes e armadilhas comuns">
        <Bul items={[
          ["Curso barato demais","descubra o que foi cortado: tempo, turma, equipamento, taxa, instrutor"],
          ["Pacote 'tudo incluso' sem detalhe","peça lista clara por escrito"],
          ["Hospedagem 'grátis' que encarece o curso","compare preço com e sem quarto"],
          ["Foto e vídeo caros no fim","pergunte o valor antes, não decida no impulso"],
          ["Escola com avaliação inflada","leia comentários negativos e procure padrões"],
          ["Vendedor que promete tubarão-baleia","vida marinha não tem garantia — fuja"],
        ]} />
      </Section>

      {/* 17 - Como reservar */}
      <Section id="reservar" icon={Languages} kicker="Capítulo 17" title="Como reservar sem intermediário caro (script em inglês)">
        <p>Fale direto com a escola. Modelo de mensagem em inglês:</p>
        <Card>
          <p className="font-mono text-sm whitespace-pre-line">
{`Hello. I'm interested in the Open Water course.

Can you confirm:
- course duration
- certification agency
- maximum students per instructor
- total price
- what is included
- equipment included
- certification fees included
- schedule
- language of the instructor
- cancellation policy
- medical requirements?

Safety and small groups are important for me.

Thank you.`}
          </p>
        </Card>
        <Card tone="info" title="🇧🇷 Tradução">
          Olá. Tenho interesse no Open Water. Pode confirmar duração, certificadora, máximo de alunos por instrutor, preço total, o que está incluído, equipamento, taxa de certificação, agenda, idioma do instrutor, política de cancelamento e requisitos médicos? Segurança e turmas pequenas são importantes para mim. Obrigado.
        </Card>
      </Section>

      {/* 18 - Glossário */}
      <Section id="glossario" icon={BookOpen} kicker="Capítulo 18" title="Glossário PADI/SSI (PT ↔ EN)">
        <div className="grid md:grid-cols-2 gap-3">
          {glossario.map(([en, pt]) => (
            <div key={en} className="rounded-xl bg-white border border-slate-200 p-4">
              <p className="font-bold" style={{ color: TEAL }}>{en}</p>
              <p className="text-sm text-slate-700">{pt}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 19 - Logbook */}
      <Section id="logbook" icon={ListChecks} kicker="Capítulo 19" title="Template de logbook digital">
        <Card>
          <p className="text-sm whitespace-pre-line leading-relaxed">
{`📍 BÁSICO: Data | País | Ilha | Dive site | Escola | Instrutor/guia | Dupla | Certificação usada

🌊 CONDIÇÕES: Clima | Visibilidade | Corrente | Temperatura da água | Profundidade máx | Tempo de fundo | Hora de entrada/saída

🎒 EQUIPAMENTO: Cilindro | Lastro | Roupa | Computador | Nitrox | Pressão inicial / final

🐠 VIDA MARINHA: Animais vistos | Corais | Observações

🧠 APRENDIZADO: O que fiz bem | O que preciso melhorar | Algo que me deixou inseguro | Próximo foco

📸 FOTO: do mergulho ou do log carimbado`}
          </p>
        </Card>
      </Section>

      {/* 20 - Mapa 30 pontos */}
      <Section id="mapa-30" icon={MapPin} kicker="Capítulo 20" title="Mapa dos 30 melhores pontos da Tailândia">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="🌊 Golfo">
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              {["Chumphon Pinnacle","Southwest Pinnacle","Sail Rock","Shark Island","White Rock","Twins","Japanese Gardens","Green Rock","Mango Bay","HTMS Sattakut","Hin Wong Pinnacle","Aow Leuk"].map(p => <li key={p}>{p}</li>)}
            </ol>
          </Card>
          <Card title="🌅 Andaman / Phuket">
            <ol className="list-decimal pl-5 space-y-1 text-sm" start={13}>
              {["Racha Yai","Racha Noi","King Cruiser Wreck","Shark Point","Anemone Reef","Koh Doc Mai","Phi Phi Bida Nok","Phi Phi Bida Nai"].map(p => <li key={p}>{p}</li>)}
            </ol>
          </Card>
          <Card title="🏝️ Similan / Surin / Khao Lak">
            <ol className="list-decimal pl-5 space-y-1 text-sm" start={21}>
              {["Richelieu Rock","Koh Bon","Koh Tachai","Elephant Head Rock","West of Eden","Christmas Point","Donald Duck Bay"].map(p => <li key={p}>{p}</li>)}
            </ol>
          </Card>
          <Card title="🪸 Koh Lanta">
            <ol className="list-decimal pl-5 space-y-1 text-sm" start={28}>
              {["Koh Haa","Hin Daeng","Hin Muang"].map(p => <li key={p}>{p}</li>)}
            </ol>
          </Card>
        </div>
      </Section>

      {/* 21 - Hospedagem */}
      <Section id="hospedagem" icon={Hotel} kicker="Capítulo 21" title="Hospedagem para mergulhadores">
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Koh Tao"><Bul items={[
            ["Sairee","mais social, mais movimento"],
            ["Mae Haad","prática para ferry e escolas"],
            ["Chalok","mais calma"],
            ["Áreas afastadas","lindas, mas exigem deslocamento"],
          ]} /><p className="mt-2 text-sm">Em curso, fique perto da escola — você vai acordar cedo e voltar cansado.</p></Card>
          <Card title="Koh Phangan"><Bul items={[
            ["Norte / Chaloklum","melhor para mergulho"],
            ["Sri Thanu","yoga e comunidade alternativa"],
            ["Oeste","pôr do sol"],
            ["Haad Rin","festa — evite para curso focado"],
          ]} /></Card>
          <Card title="Phuket"><Bul items={[
            ["Chalong","mergulho prático"],
            ["Kata / Karon","equilíbrio"],
            ["Patong","festa"],
            ["Rawai / Nai Harn","vibe mais local"],
            ["Mai Khao / Kamala / Surin","resort"],
          ]} /></Card>
          <Card title="Khao Lak"><Bul items={[
            ["Bang Niang / Khao Lak Center","perto dos operadores de Similan"],
          ]} /><p className="mt-2 text-sm">Mais tranquila que Phuket e melhor base para Similan.</p></Card>
        </div>
      </Section>

      {/* 22 - Roteiros prontos */}
      <Section id="roteiros-prontos" icon={Anchor} kicker="Capítulo 22" title="Roteiros prontos (7 / 10 / 14 / 21 dias)">
        <H3>7 dias — primeiro curso em Koh Tao</H3>
        <Card><Bul items={[["Dia 1","chegada e descanso"],["Dia 2","início do OW"],["Dia 3","teoria e prática"],["Dia 4","mergulhos de treinamento"],["Dia 5","finalização e certificação"],["Dia 6","fun dive leve ou descanso"],["Dia 7","saída"]]} /></Card>
        <H3>10 dias — OW + Advanced</H3>
        <Card><Bul items={[["Dia 1","chegada"],["Dias 2–5","Open Water"],["Dia 6","descanso"],["Dias 7–8","Advanced"],["Dia 9","fun dives"],["Dia 10","saída"]]} /></Card>
        <H3>14 dias — curso + Sail Rock</H3>
        <Card><Bul items={[["Dias 1–5","Koh Tao OW"],["Dias 6–7","Advanced"],["Dia 8","descanso"],["Dia 9","fun dives em Koh Tao"],["Dia 10","transfer Koh Phangan"],["Dia 11","Sail Rock"],["Dia 12","descanso ou praia"],["Dia 13","retorno Samui/Bangkok"],["Dia 14","saída"]]} /></Card>
        <H3>21 dias — Golfo + Andaman</H3>
        <Card><Bul items={[["Dias 1–7","Koh Tao OW + Advanced"],["Dias 8–10","Koh Phangan + Sail Rock"],["Dias 11–12","Bangkok/Phuket/Khao Lak"],["Dias 13–17","liveaboard Similan/Surin"],["Dias 18–20","descanso Phuket/Khao Lak"],["Dia 21","retorno"]]} /></Card>
        <Card tone="warn">⚠️ O roteiro de 21 dias só funciona <strong>na temporada da Andaman</strong> (nov–abr).</Card>
      </Section>

      {/* 23 - FAQ */}
      <Section id="faq" icon={HelpCircle} kicker="Capítulo 23" title="Perguntas comuns">
        <div className="space-y-3">
          {[
            ["Koh Tao é realmente o lugar mais barato?", "Um dos mais baratos e populares. Mas barato não significa melhor — escolha pela segurança."],
            ["Dá para fazer Open Water em português?", "Às vezes há instrutor brasileiro/português em Koh Tao e Phuket, mas varia por temporada. Pergunte antes. Em inglês? Use o glossário deste guia."],
            ["Preciso saber nadar?", "Sim. Você precisa estar confortável na água e cumprir os requisitos do curso."],
            ["Posso fazer OW e Advanced juntos?", "Pode, mas não precisa correr. Se tiver tempo, faça 1 dia de descanso entre eles."],
            ["PADI ou SSI?", "Para recreativo as duas servem. Escolha a melhor escola e o melhor instrutor."],
            ["Vale fazer Divemaster em Koh Tao?", "Sim, com tempo e maturidade. Não faça só porque parece barato."],
            ["Liveaboard vale para iniciante?", "Em geral vale mais para certificado confortável. Para primeiro contato, faça curso + fun dives simples."],
            ["Similan fecha mesmo?", "Sim — meados de maio a meados de outubro. Não planeje mergulho lá nesse período."],
            ["Dá para ver tubarão-baleia?", "É possível, nunca garantido. Desconfie de quem promete animal selvagem."],
            ["Quanto tempo antes de voar?", "Siga seu instrutor, certificadora e dive center. Não coloque voo logo depois de mergulho."],
          ].map(([q, a]) => (
            <Card key={q as string}>
              <p className="font-bold mb-1" style={{ color: NAVY }}>{q}</p>
              <p>{a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 24 - Checklist curso */}
      <Section id="checklist-curso" icon={CheckCircle2} kicker="Capítulo 24" title="Checklist antes de fechar o curso">
        <Card tone="good"><Bul items={[
          "Sei nadar e estou confortável na água",
          "Preenchi formulário médico com honestidade",
          "Escolhi a certificadora",
          "Perguntei tamanho da turma",
          "Confirmei preço total e o que está incluído",
          "Confirmei idioma do instrutor",
          "Perguntei sobre equipamento e seguro",
          "Li avaliações sobre segurança",
          "Não escolhi só pelo menor preço",
          "Tenho dias extras no roteiro",
          "Não vou voar logo após mergulhar",
          "Tenho seguro viagem adequado",
          "Entendi: certificação depende de desempenho, não de pagamento",
        ]} /></Card>
      </Section>

      {/* 25 - Checklist liveaboard */}
      <Section id="checklist-live" icon={LifeBuoy} kicker="Capítulo 25" title="Checklist de liveaboard">
        <Card tone="good"><Bul items={[
          "Tenho certificação adequada",
          "Estou confortável em barco",
          "Sei se enjoo (e levei remédio)",
          "Entendi a cabine",
          "Confirmei nº de mergulhos e taxas de parque",
          "Confirmei equipamento, computador e Nitrox",
          "Confirmei rota e datas",
          "Confirmei política de cancelamento por clima",
          "Confirmei plano de emergência e limite de profundidade",
          "Confirmei se aceitam Open Water ou exigem Advanced",
          "Tenho seguro de mergulho",
          "Tenho intervalo seguro antes do voo",
        ]} /></Card>
      </Section>

      {/* 26 - Seguro & Emergências */}
      <Section id="seguro-emergencias" icon={Phone} kicker="Capítulo 26" title="Seguro de mergulho, DAN e câmaras hiperbáricas">
        <p>Seguro viagem comum geralmente <strong>não cobre acidente de mergulho</strong>. Tratamento de doença descompressiva em câmara hiperbárica na Tailândia pode custar <strong>US$ 800 a US$ 3.000 por sessão</strong> — e raramente é uma sessão só. Não viaje sem cobertura específica.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="DAN (Divers Alert Network)" tone="info">
            <Bul items={[
              ["DAN World / DAN Asia-Pacific","planos anuais a partir de ~US$ 40–100"],
              ["Cobre","tratamento, evacuação, câmara hiperbárica"],
              ["Hotline 24h","emergência médica de mergulho em inglês"],
              ["Vale a pena","mesmo para quem mergulha pouco — uma sessão paga o ano inteiro"],
            ]} />
          </Card>
          <Card title="Seguros alternativos">
            <Bul items={[
              ["World Nomads / SafetyWing","alguns planos incluem mergulho recreativo até 30m — leia a letra miúda"],
              ["DiveAssure","cobertura ampla, opção para Divemaster/Instructor"],
              ["Seguro brasileiro padrão","quase sempre EXCLUI esportes aquáticos com cilindro"],
            ]} />
          </Card>
        </div>
        <H3>Câmaras hiperbáricas na Tailândia</H3>
        <Card><Bul items={[
          ["Koh Tao","Badalveda Hyperbaric Chamber (a mais próxima das escolas)"],
          ["Koh Samui","Bandon International Hospital — câmara operacional"],
          ["Phuket","Bangkok Hospital Phuket + SSS Recompression Chamber Network"],
          ["Bangkok","Hospital Naval / Somdech Phra Pinklao"],
        ]} /></Card>
        <Card title="🚨 Em emergência — o que fazer" tone="warn">
          <Bul items={[
            "Sinais de doença descompressiva podem aparecer em até 24h depois do mergulho",
            "Dor articular, formigamento, fraqueza, tontura, visão alterada → procure ajuda IMEDIATAMENTE",
            "Não tome banho quente, não voe, não beba álcool",
            "Ligue para o DAN Hotline: +1-919-684-9111 (24h, internacional)",
            "Informe o dive center — eles têm protocolo de evacuação",
            "Hidrate e mantenha-se calmo até atendimento",
          ]} />
        </Card>
      </Section>

      {/* 27 - Saúde e Preparo Físico */}
      <Section id="saude-fitness" icon={HeartPulse} kicker="Capítulo 27" title="Saúde e preparo físico: como chegar pronto para mergulhar">
        <p>Mergulho não exige atleta, mas exige condicionamento mínimo. Cardio ruim, sobrepeso descontrolado, sinusite crônica ou problema de ouvido podem virar problema sério a 18 metros de profundidade.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Antes da viagem (1–2 meses)" tone="good">
            <Bul items={[
              ["Cardio leve","30 min, 3x por semana — caminhada, corrida, natação"],
              ["Natação","prática a respiração e flutuabilidade"],
              ["Exercícios de equalização","prática de Valsalva e Frenzel — YouTube ensina"],
              ["Check-up","cardio, otorrino, dentista (dor de dente subaquática é tortura)"],
              ["Vacinas em dia","febre amarela, hepatites, tétano"],
            ]} />
          </Card>
          <Card title="Cuidados no dia a dia" tone="warn">
            <Bul items={[
              ["Hidratação","desidratação aumenta risco de descompressão — beba 3L/dia"],
              ["Álcool","evite na noite anterior — ressaca + mergulho é receita de problema"],
              ["Sono","mínimo 7h antes de mergulhar"],
              ["Alimentação","refeição leve 1–2h antes; nada de feijoada"],
              ["Sinusite/resfriado","NÃO mergulhe — barotrauma de seios paranasais é grave"],
              ["Medicamentos","antihistamínicos com cuidado, alguns causam sonolência em profundidade"],
            ]} />
          </Card>
        </div>
        <Card title="🧠 Saúde mental também conta" tone="info">
          Ansiedade em água é comum e não é fraqueza. Avise o instrutor antes do curso. Boa escola adapta ritmo, ensina técnicas de respiração e nunca empurra ninguém. Pânico subaquático é uma das principais causas de acidente — prefira voltar à superfície a engolir o medo.
        </Card>
      </Section>

      {/* 28 - Vida Marinha */}
      <Section id="vida-marinha" icon={Fish} kicker="Capítulo 28" title="Vida marinha: o que você pode encontrar (e quando)">
        <p>Vida marinha nunca tem garantia, mas há padrões. Veja o que esperar em cada região e época:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="🌊 Golfo (Koh Tao/Phangan/Samui)">
            <Bul items={[
              ["Tubarão-baleia","raros encontros, mais comuns mar-mai e ago-out"],
              ["Tubarão-touro (bull shark)","Sail Rock, principalmente fev-mai"],
              ["Tubarões-de-pontas-pretas","comuns em Shark Island e Aow Leuk"],
              ["Barracudas, carangueijos, peixes-leão, polvos","quase todo mergulho"],
              ["Tartarugas","frequentes em Shark Island e Hin Wong"],
            ]} />
          </Card>
          <Card title="🌅 Andaman (Phuket/Lanta/Phi Phi)">
            <Bul items={[
              ["Tubarão-leopardo (zebra shark)","Phi Phi, Shark Point, Koh Haa"],
              ["Cavalos-marinhos","Koh Doc Mai, Anemone Reef"],
              ["Sépias e polvos","quase certeza"],
              ["Mantas e tubarão-baleia","Hin Daeng/Muang em fev–abr"],
              ["Peixes-frade, peixes-papagaio gigantes","abundantes"],
            ]} />
          </Card>
          <Card title="🏝️ Similan / Surin / Richelieu">
            <Bul items={[
              ["Tubarão-baleia","Richelieu Rock, pico em fev–abr"],
              ["Mantas oceânicas","Koh Bon, dez–abr"],
              ["Tartarugas-de-pente","abundantes"],
              ["Atuns, barracudas, jacks","cardumes enormes"],
              ["Frogfish, ghost pipefish, nudibranchs","macro raro em Richelieu"],
            ]} />
          </Card>
          <Card title="🚫 O que NÃO tocar — nunca">
            <Bul items={[
              ["Peixe-pedra (stonefish)","veneno doloroso, pode matar — camuflado no fundo"],
              ["Peixe-leão","espinhos venenosos — não persiga"],
              ["Ouriços-do-mar","espinhos quebram dentro da pele"],
              ["Coral-de-fogo","queima por horas"],
              ["Águas-vivas tipo box","raras mas perigosas — vinagre ajuda no acidente"],
              ["Cones-do-mar","conchas bonitas que matam — nunca pegue"],
            ]} />
          </Card>
        </div>
      </Section>

      {/* 29 - Fotografia subaquática */}
      <Section id="fotografia" icon={Camera} kicker="Capítulo 29" title="Fotografia e vídeo subaquático: dicas práticas">
        <p>Mergulho com câmera é um nível a mais de atenção. Iniciante deve focar no mergulho — câmera só depois que flutuabilidade está perfeita.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="Para começar barato" tone="good">
            <Bul items={[
              ["GoPro Hero 11/12/13","melhor custo-benefício até 10m"],
              ["Caixa estanque oficial","aceita até 60m com dive housing"],
              ["Filtro vermelho","essencial além de 5m — sem ele tudo vira azul"],
              ["Bastão flutuante","evita perder no fundo do mar"],
            ]} />
          </Card>
          <Card title="Para evoluir">
            <Bul items={[
              ["Mirrorless + housing","Olympus TG-7, Sony A7, Canon R — investimento alto"],
              ["Strobes / luzes de vídeo","cor real além de 10m"],
              ["Curso PADI Digital Underwater Photographer","2 dias, vale a pena"],
              ["Edição","Lightroom Mobile + filtro automático já transforma fotos"],
            ]} />
          </Card>
        </div>
        <Card title="📐 Regras de ouro" tone="info">
          <Bul items={[
            "Flutuabilidade perfeita PRIMEIRO — câmera é distração",
            "Aproxime-se devagar — peixe foge de movimento brusco",
            "Nunca persiga, encurrale ou toque vida marinha pela foto",
            "Não use flash em peixes pequenos (especialmente cavalos-marinhos) — pode cegar",
            "Bom enquadramento > vida marinha rara mal fotografada",
            "Backup das fotos todo dia — cartão de memória pode falhar no calor",
          ]} />
        </Card>
        <Card tone="warn">⚠️ Nunca arrisque sua segurança ou a vida marinha por uma foto. Foto de Instagram não vale lesão na pele do recife — ou na sua.</Card>
      </Section>

      {/* 30 - Conservação */}
      <Section id="conservacao" icon={Leaf} kicker="Capítulo 30" title="Mergulho responsável: proteja o recife que você veio ver">
        <p>O recife tailandês está sob pressão: branqueamento, turismo de massa, pesca predatória, plástico. Cada mergulhador faz diferença — para melhor ou para pior.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card title="✅ Faça" tone="good">
            <Bul items={[
              "Use protetor solar reef-safe (sem oxibenzona/octinoxato)",
              "Mantenha flutuabilidade — não pise, não chute, não arraste",
              "Mantenha distância — 1 metro mínimo de coral e fauna",
              "Recolha lixo que encontrar no mergulho",
              "Escolha escola/operador com prática 'Green Fins' ou PADI Eco Center",
              "Recuse passeios com cativeiro de animais marinhos",
              "Evite consumir tubarão, raia e peixe-papagaio em restaurantes",
            ]} />
          </Card>
          <Card title="❌ Não faça" tone="warn">
            <Bul items={[
              "Não toque, alimente ou monte em tartaruga, raia ou tubarão",
              "Não colete conchas, corais, areia ou estrelas — é crime na Tailândia",
              "Não use luvas em mergulho recreativo (estimula tocar coisas)",
              "Não jogue bituca, plástico ou comida no mar",
              "Não compre souvenirs de coral, tartaruga, marfim ou tubarão",
              "Não mergulhe com âncora largada em coral — exija boia de amarração",
            ]} />
          </Card>
        </div>
        <Card title="🌱 ONGs e projetos para apoiar ou se voluntariar" tone="info">
          <Bul items={[
            ["Save Koh Tao","conservação local, mergulhos de limpeza, plantio de coral"],
            ["New Heaven Reef Conservation Program","cursos de marine conservation em Koh Tao"],
            ["Eco Koh Tao","programa estruturado de conservação para mergulhadores"],
            ["Green Fins Thailand","certifica operadores com práticas sustentáveis"],
          ]} />
        </Card>
      </Section>

      {/* 31 - Conclusão */}
      <Section id="conclusao" icon={Waves} kicker="Capítulo 31" title="Conclusão: o caminho do mergulhador brasileiro na Tailândia">
        <p>A Tailândia é um dos melhores lugares do mundo para começar. Mas o erro é achar que todo curso é igual. A melhor escolha não é a mais barata — é a que te ensina com calma, respeita seu ritmo e forma um mergulhador de verdade.</p>
        <Card title="🎯 Para a maioria dos brasileiros">
          <Bul items={[
            ["Koh Tao","Open Water e Advanced"],
            ["Koh Phangan","Sail Rock"],
            ["Khao Lak","Similan, Surin e Richelieu Rock"],
            ["Phuket","logística, day trips e conexão com liveaboards"],
            ["Koh Lanta","mergulhos mais avançados na temporada certa"],
          ]} />
        </Card>
        <p className="text-lg font-semibold" style={{ color: NAVY }}>
          Mergulho não é corrida. É confiança, técnica, calma e respeito pelo mar.
        </p>
      </Section>

      <Footer />
    </div>
  );
};

export default MergulhoTailandia465355;

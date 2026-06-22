import { SEO } from "@/components/SEO";
import { Shield, ExternalLink, AlertTriangle, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

/* ============================================================
   PREMIUM PALETTE — sober base + calculated vibrant accent
   ============================================================ */
const INK = "#0B1F1A";        // deep forest ink
const BONE = "#F6F1E7";       // warm bone background
const EMERALD = "#0F6B4E";    // primary accent
const EMERALD_DEEP = "#0A3F30";
const GOLD = "#B8893A";       // luxe accent
const LINE = "rgba(11,31,26,0.08)";

type LinkRef = { label: string; url: string; note?: string };

/* ---------- Reusable atoms ---------- */

const Reveal = ({ children, delay = 0, as: As = "div", className = "" }: { children: React.ReactNode; delay?: number; as?: any; className?: string }) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As ref={ref as any} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </As>
  );
};

const Section = ({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 py-20 md:py-28">
    <Reveal>
      {kicker && (
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10" style={{ background: GOLD }} />
          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase" style={{ color: GOLD }}>{kicker}</span>
        </div>
      )}
      <h2
        className="font-display tracking-editorial text-balance text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.08] mb-8"
        style={{ color: INK }}
      >
        {title}
      </h2>
    </Reveal>
    <Reveal delay={80}>
      <div className="text-[17px] leading-[1.75] text-pretty space-y-5" style={{ color: "rgba(11,31,26,0.82)" }}>
        {children}
      </div>
    </Reveal>
  </section>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative font-medium underline-offset-[5px] decoration-1 hover:decoration-2 transition-all"
    style={{ color: EMERALD, textDecorationColor: "rgba(15,107,78,0.35)" }}
  >
    {children}
    <ExternalLink className="inline-block w-3 h-3 ml-0.5 -translate-y-px opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
  </a>
);

const LinkCard = ({ item, index }: { item: LinkRef; index: number }) => (
  <Reveal delay={index * 60}>
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl p-5 md:p-6 transition-all duration-500 ease-premium hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid ${LINE}`,
        boxShadow: "0 1px 2px rgba(11,31,26,0.04)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(15,107,78,0.25), 0 8px 20px -10px rgba(11,31,26,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(11,31,26,0.04)")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ background: "rgba(15,107,78,0.1)", color: EMERALD }}
          >
            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
          </span>
          <h4 className="font-semibold text-[15px] leading-snug" style={{ color: INK }}>{item.label}</h4>
        </div>
        <ArrowUpRight
          className="w-4 h-4 flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500"
          style={{ color: EMERALD }}
        />
      </div>
      {item.note && <p className="text-[13.5px] leading-relaxed pl-[38px]" style={{ color: "rgba(11,31,26,0.6)" }}>{item.note}</p>}
    </a>
  </Reveal>
);

const LinkGrid = ({ items }: { items: LinkRef[] }) => (
  <div className="grid sm:grid-cols-2 gap-3 md:gap-4 not-prose">
    {items.map((l, i) => <LinkCard key={l.url} item={l} index={i} />)}
  </div>
);

/* ---------- Data ---------- */

const platforms: LinkRef[] = [
  { label: "Worldpackers", url: "https://www.worldpackers.com/search/thailand", note: "plataforma BR mais usada — projetos verificados, suporte em português, assinatura anual" },
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
  { label: "BLES (Sukhothai)", url: "https://www.blesele.org/", note: "lista de espera grande, projeto pequeno e ético" },
  { label: "BEES (Chiang Mai)", url: "https://www.bees-elesanctuary.org/volunteer/", note: "voluntariado semanal sem banho/passeio" },
  { label: "Wildlife Friends Foundation (Phetchaburi)", url: "https://www.wfft.org/volunteer/", note: "elefantes + ursos + macacos resgatados" },
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

const chapters: [string, string][] = [
  ["cap-1", "Filtro ético"],
  ["cap-2", "Worldpackers"],
  ["cap-3", "Plataformas"],
  ["cap-4", "Elefantes"],
  ["cap-5", "Ensino"],
  ["cap-6", "Conservação"],
  ["cap-7", "Vistos"],
  ["cap-8", "Custos"],
  ["cap-9", "Saúde"],
  ["cap-10", "Templates"],
  ["cap-11", "Etiqueta"],
  ["cap-12", "Grupos FB"],
  ["cap-13", "Pós-projeto"],
];

/* ============================================================ */

const Voluntariado4827 = () => {
  return (
    <div
      className="min-h-screen antialiased selection:bg-emerald-200/60 selection:text-emerald-950"
      style={{
        background: BONE,
        color: INK,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
      }}
    >
      <SEO
        title="Guia de Voluntariado na Tailândia — Conteúdo Completo"
        description="Guia completo de voluntariado na Tailândia: plataformas, projetos éticos, vistos, custos, templates e grupos de Facebook."
        canonicalPath="/voluntariado4827"
      />

      {/* ============= HERO ============= */}
      <header className="relative overflow-hidden">
        {/* Ambient orbs */}
        <div
          className="orb"
          style={{
            top: "-10%", left: "-10%", width: 520, height: 520,
            background: `radial-gradient(circle, ${EMERALD}55, transparent 70%)`,
            opacity: 0.35,
          }}
        />
        <div
          className="orb"
          style={{
            top: "20%", right: "-15%", width: 600, height: 600,
            background: `radial-gradient(circle, ${GOLD}40, transparent 70%)`,
            opacity: 0.3,
          }}
        />

        <div className="relative container mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-20 md:pb-28">
          <Reveal>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase mb-8"
              style={{
                background: "rgba(15,107,78,0.08)",
                color: EMERALD,
                border: `1px solid rgba(15,107,78,0.15)`,
              }}
            >
              <Sparkles className="w-3 h-3" /> Guia Premium · Edição Completa
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="font-display tracking-editorial text-balance font-semibold leading-[0.98] text-[clamp(2.6rem,7vw,5.6rem)]"
              style={{ color: INK }}
            >
              Voluntariado<br />
              na{" "}
              <span
                className="italic font-normal"
                style={{
                  background: `linear-gradient(120deg, ${EMERALD}, ${GOLD})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tailândia
              </span>
              <span style={{ color: GOLD }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-[19px] md:text-[20px] leading-[1.6] text-pretty" style={{ color: "rgba(11,31,26,0.7)" }}>
              Plataformas testadas, projetos éticos avaliados <em>in loco</em>, vistos passo a passo, custos reais,
              templates em inglês e grupos de Facebook BR. Cada referência com link clicável.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm" style={{ color: "rgba(11,31,26,0.55)" }}>
              {[
                ["13", "Capítulos"],
                ["35+", "Projetos verificados"],
                ["7", "Grupos de FB"],
                ["2", "Templates prontos"],
              ].map(([n, l]) => (
                <div key={l} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold" style={{ color: EMERALD_DEEP }}>{n}</span>
                  <span className="tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Hairline */}
        <div className="h-px mx-6 md:mx-auto max-w-5xl" style={{ background: `linear-gradient(90deg, transparent, ${LINE}, transparent)` }} />
      </header>

      {/* ============= STICKY NAV ============= */}
      <nav
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{
          background: "rgba(246,241,231,0.78)",
          borderBottom: `1px solid ${LINE}`,
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
        }}
      >
        <div className="container mx-auto max-w-5xl px-6 py-3.5 overflow-x-auto">
          <div className="flex gap-1 text-[13px] font-medium whitespace-nowrap">
            {chapters.map(([id, label], i) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-emerald-900/5"
                style={{ color: "rgba(11,31,26,0.62)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = EMERALD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(11,31,26,0.62)")}
              >
                <span className="opacity-50 mr-1.5">{String(i + 1).padStart(2, "0")}</span>{label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6 divide-y" style={{ borderColor: LINE }}>
        {/* Cap 1 */}
        <Section id="cap-1" kicker="Capítulo 01" title="Filtro ético: os 7 sinais para descartar um projeto">
          <p>Antes de qualquer plataforma, aprenda a julgar o projeto. Em voluntariado com animais e crianças, intenção não basta — estrutura importa.</p>
          <ol className="not-prose space-y-3 mt-6">
            {[
              ["Banho com elefante / passeio com cadeira (howdah)", "descarte automático. Elefante adulto não precisa de banho diário; é coreografia para turista."],
              ["Show / pintura / futebol com animal", "indica quebra (phajaan). Descarte."],
              ["Acesso irrestrito a crianças sem checagem de antecedentes", "projeto sério pede background check, cópia de passaporte e contrato."],
              ["Orfanato com porta giratória de voluntários", "apego/desapego semanal causa trauma. Procure ensino em escola pública, não orfanato."],
              ["Promessa de \"salvar\" em 1 semana", "impacto real exige tempo. Projetos sérios pedem 2+ semanas."],
              ["Sem prestação de contas pública", "o site precisa ter quem fundou, registro de NGO e relatório anual."],
              ["Cobra mais de US$ 100/dia sem hospedagem ou comida", "tem alguém faturando alto. Compare com a média (cap. 8)."],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 40}>
                <div
                  className="flex gap-4 p-4 rounded-xl transition-all duration-500 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${LINE}` }}
                >
                  <span
                    className="font-display text-xl font-semibold flex-shrink-0 leading-none mt-0.5"
                    style={{ color: GOLD }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <strong style={{ color: INK }}>{head}:</strong>{" "}
                    <span style={{ color: "rgba(11,31,26,0.7)" }}>{body}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Cap 2 */}
        <Section id="cap-2" kicker="Capítulo 02" title="Worldpackers — a referência para brasileiros">
          <p>
            <A href="https://www.worldpackers.com/search/thailand">Worldpackers</A> é a plataforma mais usada por brasileiros: suporte em português,
            proteção do viajante (se o host desistir você é reembolsado ou realocado), avaliações em PT-BR e assinatura anual única (≈ US$ 49/ano
            com o cupom <A href="https://www.worldpackers.com/promo/GUIASTAILANDIA">GUIASTAILANDIA — 10 USD off</A>).
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-5 mt-6">
            <Reveal>
              <div className="rounded-2xl p-6 h-full" style={{ background: "rgba(15,107,78,0.06)", border: `1px solid rgba(15,107,78,0.15)` }}>
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: EMERALD_DEEP }}>Como usar bem</h3>
                <ul className="space-y-2 text-[15px]">
                  {[
                    "Filtre por Thailand + categoria (NGO, Eco-village, Animal welfare, Hostel).",
                    "Leia todas as avaliações — Google Translate dá conta.",
                    "Host com < 5 reviews ou < 4,5★, evite.",
                    "Use o template do cap. 10 — populares recebem 30+ pedidos/semana.",
                    "Confirme horas/dia, folgas e comida por escrito na plataforma.",
                    "Botão SOS no app aciona suporte 24h.",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: EMERALD }} /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl p-6 h-full" style={{ background: "rgba(184,137,58,0.07)", border: `1px solid rgba(184,137,58,0.2)` }}>
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: GOLD }}>Quando NÃO usar</h3>
                <ul className="space-y-2 text-[15px]">
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: GOLD }} /><span>Voluntariado com elefante real (santuários sérios inscrevem direto pelo site próprio).</span></li>
                  <li className="flex gap-2"><AlertTriangle className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: GOLD }} /><span>Estadia &gt; 60 dias num mesmo host — contato direto sai mais barato.</span></li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Cap 3 */}
        <Section id="cap-3" kicker="Capítulo 03" title="Plataformas testadas (todas com link)">
          <p>Cada uma tem um perfil próprio. Não pague duas no mesmo ano — escolha uma.</p>
          <div className="mt-8"><LinkGrid items={platforms} /></div>
          <Reveal>
            <div className="not-prose mt-8 rounded-2xl p-5 flex gap-3" style={{ background: "rgba(184,137,58,0.08)", border: `1px solid rgba(184,137,58,0.25)` }}>
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
              <p className="text-[14.5px]" style={{ color: "rgba(11,31,26,0.78)" }}>
                <strong>Cuidado:</strong> evite "agências brasileiras" que cobram R$ 6 mil+ pra te colocar nessas mesmas plataformas. Você consegue sozinho com este guia.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* Cap 4 */}
        <Section id="cap-4" kicker="Capítulo 04" title="Santuários de elefantes e bem-estar animal">
          <p>A Tailândia tem &gt; 200 "elephant camps" — só uma minoria é ética. Os abaixo passam pelos 7 critérios do cap. 1.</p>
          <div className="mt-8"><LinkGrid items={sanctuaries} /></div>
          <p className="text-sm mt-6" style={{ color: "rgba(11,31,26,0.55)" }}>Inscreva-se direto no site oficial; nenhum cobra através de agência.</p>
        </Section>

        {/* Cap 5 */}
        <Section id="cap-5" kicker="Capítulo 05" title="Ensino e projetos comunitários">
          <p>Ensinar inglês em vila rural ou em escola de refugiados Karen é a porta mais acessível pra quem não fala tailandês. Aceitam de 2 semanas a 6 meses.</p>
          <div className="mt-8"><LinkGrid items={teaching} /></div>
          <p className="mt-6">
            Para ensino remunerado (com salário), procure <A href="https://www.teflheaven.com/teach-english-thailand/">TEFL Heaven</A> ou{" "}
            <A href="https://www.xploreasia.org/teach-in-thailand/">XploreAsia</A> — exigem curso TEFL (120h).
          </p>
        </Section>

        {/* Cap 6 */}
        <Section id="cap-6" kicker="Capítulo 06" title="Conservação marinha e natureza">
          <p>Sul da Tailândia é hotspot mundial de restauração de coral e proteção de tartarugas.</p>
          <div className="mt-8"><LinkGrid items={conservation} /></div>
          <p className="text-sm mt-6" style={{ color: "rgba(11,31,26,0.6)" }}>
            Maioria exige certificação Open Water PADI (Koh Tao: ฿9.000–11.000 — veja <A href="https://www.bigbluediving.com/">Big Blue Diving</A>).
          </p>
        </Section>

        {/* Cap 7 */}
        <Section id="cap-7" kicker="Capítulo 07" title="Vistos passo a passo (para brasileiros)">
          <p>
            Brasileiro entra na Tailândia <strong>sem visto</strong> e pode ficar até <strong>90 dias por entrada</strong> (acordo Brasil–Tailândia).
            Esse prazo <em>não</em> pode ser estendido na imigração — para ficar mais é preciso sair do país ou usar visto específico.
          </p>
          <ul className="not-prose mt-6 space-y-3">
            {[
              ["Até 90 dias (voluntariado curto)", "entra como turista. Tenha passagem de saída e comprovação de hospedagem para o oficial."],
              ["90 a 180 dias", <>use Tourist Visa METV (6 meses, múltiplas entradas, ฿5.000) tirado no <A href="https://thaievisa.go.th/">Thai e-Visa oficial</A>.</>],
              ["Voluntariado formal > 90 dias contínuos", "Non-Immigrant O Volunteer Visa — pede carta da ONG registrada no Ministério do Interior. ฿2.000 + carta."],
              ["DTV (5 anos, 180 dias por entrada)", <>aceita "soft power activity" (Muay Thai, cozinha, retiros). Não cobre voluntariado puro. <A href="https://www.thaiembassy.com/destination-thailand-visa-dtv">Requisitos</A>.</>],
              ["Education Visa (ED)", <>combine voluntariado com curso de tailandês (<A href="https://www.duketolanguageschool.com/">Duke Language</A>).</>],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl p-4 flex gap-4" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <span className="w-1 rounded-full flex-shrink-0" style={{ background: EMERALD }} />
                  <div>
                    <strong style={{ color: INK }}>{head}:</strong>{" "}
                    <span style={{ color: "rgba(11,31,26,0.72)" }}>{body}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="not-prose mt-6 rounded-xl p-4 text-[15px]" style={{ background: "rgba(15,107,78,0.07)", border: `1px solid rgba(15,107,78,0.15)`, color: EMERALD_DEEP }}>
              💡 Tire o e-Visa sempre pelo portal oficial <A href="https://thaievisa.go.th/">thaievisa.go.th</A>. Sites como "thailande-visa.org" são intermediários que cobram a mais.
            </p>
          </Reveal>
        </Section>

        {/* Cap 8 */}
        <Section id="cap-8" kicker="Capítulo 08" title="Custos reais (sem agência)">
          <p>Tabela média por dia, fora passagem aérea Brasil↔BKK (R$ 4.500–7.500 ida-e-volta).</p>
          <Reveal>
            <div className="not-prose mt-8 rounded-2xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.5)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(15,107,78,0.06)" }}>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: EMERALD_DEEP, letterSpacing: "0.08em" }}>Categoria</th>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: EMERALD_DEEP, letterSpacing: "0.08em" }}>Custo/dia</th>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: EMERALD_DEEP, letterSpacing: "0.08em" }}>Observação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Worldpackers/Workaway (hostel, fazenda)", "฿0–200 · US$ 49/ano", "Comida e quarto inclusos"],
                      ["Elephant Nature Park — 1 semana", "~฿3.500 (US$ 100)", "Hospedagem + 3 refeições + transporte CM"],
                      ["Soi Dog Foundation", "฿0", "Voluntário paga estadia em Phuket (฿500–1.000/dia)"],
                      ["Ensino TEFL pago", "+฿800–1.200 (salário)", "Contrato 1 semestre, ฿30k–45k/mês"],
                      ["Mergulho/conservação Koh Tao", "~฿2.500", "Inclui mergulhos diários e dormitório"],
                      ["Alimentação fora do projeto", "฿200–400", "Comida de rua"],
                    ].map((row, i) => (
                      <tr key={i} className="transition-colors hover:bg-emerald-900/[0.02]" style={{ borderTop: `1px solid ${LINE}` }}>
                        {row.map((c, j) => (
                          <td key={j} className="p-4" style={{ color: j === 0 ? INK : "rgba(11,31,26,0.72)", fontWeight: j === 0 ? 500 : 400 }}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Cap 9 */}
        <Section id="cap-9" kicker="Capítulo 09" title="Saúde, vacinas e seguro">
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              ["Febre amarela", "obrigatória se veio com escala em país de risco (Anvisa Galeão/GRU, 10 dias antes)."],
              ["Hep A e B, tifoide, tétano", "recomendadas — gratuitas em CRIE pelo SUS."],
              ["Raiva pré-exposição", "se for trabalhar com cães/elefantes (3 doses, ~R$ 600 na privada)."],
              ["Encefalite japonesa", "se ficará > 1 mês em zona rural na estação chuvosa."],
              ["Dengue", "use repelente Icaridina diariamente. Sem vacina padrão acessível."],
              ["Seguro viagem", <>obrigatório. <A href="https://www.safetywing.com/">SafetyWing</A> (US$ 56/mês) ou <A href="https://www.worldnomads.com/">World Nomads</A>.</>],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl p-4 h-full" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <div className="font-semibold mb-1" style={{ color: INK }}>{head}</div>
                  <div className="text-[14.5px]" style={{ color: "rgba(11,31,26,0.7)" }}>{body}</div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Cap 10 */}
        <Section id="cap-10" kicker="Capítulo 10" title="Templates de inscrição em inglês">
          {[
            {
              title: "Template 1 — Worldpackers / Workaway",
              body: `Subject: Application — [Your name], [Month] for [duration]

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
[WhatsApp +55 ...]`,
            },
            {
              title: "Template 2 — Santuário / ONG (e-mail direto)",
              body: `Subject: Volunteer application — [duration] starting [month]

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
[Name]`,
            },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="not-prose mt-6">
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: EMERALD_DEEP }}>{t.title}</h3>
                <pre
                  className="rounded-2xl p-5 md:p-6 text-[13.5px] leading-[1.7] whitespace-pre-wrap overflow-x-auto"
                  style={{
                    background: INK,
                    color: "#E8E4D8",
                    border: `1px solid ${LINE}`,
                    fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 50px -25px rgba(11,31,26,0.4)",
                  }}
                >{t.body}</pre>
              </div>
            </Reveal>
          ))}
        </Section>

        {/* Cap 11 */}
        <Section id="cap-11" kicker="Capítulo 11" title="Etiqueta cultural — o que NÃO fazer">
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              "Nunca toque a cabeça de ninguém (sagrada), inclusive crianças.",
              "Nunca aponte os pés para imagens de Buda ou pessoas mais velhas.",
              "Tire os sapatos antes de entrar em casa, templo ou sala de aula.",
              "Ombros e joelhos cobertos em templos e escolas — leve calça/saia leve.",
              "Não critique o rei nem a família real (crime, lèse-majesté).",
              "Não beije nem abrace em público — afetuosidade é privada.",
              "Wai (saudação juntando as mãos) é cortesia — devolva, comece pelos mais velhos.",
              "\"Mai pen rai\" (não tem problema) é a filosofia local. Respire fundo e adapte.",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-xl p-4 h-full flex gap-3" style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${LINE}` }}>
                  <span className="font-display text-sm font-semibold opacity-50 flex-shrink-0" style={{ color: GOLD }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[14.5px]" style={{ color: "rgba(11,31,26,0.78)" }}>{t}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Cap 12 */}
        <Section id="cap-12" kicker="Capítulo 12" title="Grupos de Facebook — BR e internacionais">
          <p>Use grupos para validar host antes de fechar, pegar carona até o projeto e trocar contatos pós-viagem.</p>
          <div className="mt-8"><LinkGrid items={fbGroups} /></div>
          <p className="text-sm mt-6" style={{ color: "rgba(11,31,26,0.55)" }}>
            Dica: ao postar pedindo opinião sobre um projeto, cite o nome exato e a cidade — você recebe respostas em horas.
          </p>
        </Section>

        {/* Cap 13 */}
        <Section id="cap-13" kicker="Capítulo 13" title="Pós-projeto — roteiro bônus de turismo">
          <p>Depois do voluntariado, recompense-se. Sugestões por região:</p>
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-6">
            {[
              ["Norte (depois de Chiang Mai)", <>3 dias em <A href="https://www.google.com/maps/search/Pai+Thailand">Pai</A>, 2 dias em <A href="https://www.google.com/maps/search/Chiang+Rai+White+Temple">Chiang Rai</A>.</>],
              ["Sul (Phuket / Phang Nga)", <>ferry para <A href="https://www.google.com/maps/search/Koh+Phi+Phi">Koh Phi Phi</A> e <A href="https://www.google.com/maps/search/Koh+Lanta">Koh Lanta</A>.</>],
              ["Golfo (depois de Koh Tao)", "Full Moon Party em Koh Phangan se o calendário bater."],
              ["Central", <>2 dias em <A href="https://www.google.com/maps/search/Ayutthaya">Ayutthaya</A> antes de fechar viagem em Bangkok.</>],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl p-5 h-full" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <div className="font-display font-semibold mb-1" style={{ color: EMERALD_DEEP }}>{head}</div>
                  <div className="text-[14.5px]" style={{ color: "rgba(11,31,26,0.72)" }}>{body}</div>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-8">
            Antes de voar de volta, reserve 1 dia em Bangkok para massagem tailandesa de despedida no{" "}
            <A href="https://www.watpomassage.com/">Wat Pho</A> (฿480/h) — fecha o ciclo.
          </p>
        </Section>

        <footer className="py-16 text-center text-sm flex items-center justify-center gap-2" style={{ color: "rgba(11,31,26,0.45)" }}>
          <Shield className="w-4 h-4" /> Conteúdo do guia premium — uso pessoal do comprador.
        </footer>
      </main>
    </div>
  );
};

export default Voluntariado4827;

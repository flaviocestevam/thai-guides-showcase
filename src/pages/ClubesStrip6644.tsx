import { SEO } from "@/components/SEO";
import { Shield, ExternalLink, AlertTriangle, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

/* ============================================================
   PREMIUM PALETTE — midnight base + neon accent
   ============================================================ */
const INK = "#0A0A0F";        // midnight ink
const BONE = "#F4EFE6";       // warm bone background
const NEON = "#E11D48";       // primary accent (deep rose/neon)
const NEON_DEEP = "#9F1239";
const GOLD = "#C9A24B";       // luxe accent
const LINE = "rgba(10,10,15,0.08)";

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
      <div className="text-[17px] leading-[1.75] text-pretty space-y-5" style={{ color: "rgba(10,10,15,0.82)" }}>
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
    style={{ color: NEON, textDecorationColor: "rgba(225,29,72,0.35)" }}
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
        boxShadow: "0 1px 2px rgba(10,10,15,0.04)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(225,29,72,0.25), 0 8px 20px -10px rgba(10,10,15,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(10,10,15,0.04)")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ background: "rgba(225,29,72,0.1)", color: NEON }}
          >
            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
          </span>
          <h4 className="font-semibold text-[15px] leading-snug" style={{ color: INK }}>{item.label}</h4>
        </div>
        <ArrowUpRight
          className="w-4 h-4 flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500"
          style={{ color: NEON }}
        />
      </div>
      {item.note && <p className="text-[13.5px] leading-relaxed pl-[38px]" style={{ color: "rgba(10,10,15,0.6)" }}>{item.note}</p>}
    </a>
  </Reveal>
);

const LinkGrid = ({ items }: { items: LinkRef[] }) => (
  <div className="grid sm:grid-cols-2 gap-3 md:gap-4 not-prose">
    {items.map((l, i) => <LinkCard key={l.url} item={l} index={i} />)}
  </div>
);

/* ---------- Data ---------- */

const bangkok: LinkRef[] = [
  { label: "Soi Cowboy", url: "https://www.google.com/maps/search/Soi+Cowboy+Bangkok", note: "rua de 150m com ~40 bares. O distrito mais bem regulado — preços fixos, menus em inglês, sem cobrança surpresa em 90% dos lugares" },
  { label: "Nana Plaza", url: "https://www.google.com/maps/search/Nana+Plaza+Bangkok", note: "complexo de 3 andares, o maior da Ásia. Mais turístico que Cowboy, intensidade alta — vá com plano" },
  { label: "Patpong (Soi 1 e 2)", url: "https://www.google.com/maps/search/Patpong+Bangkok", note: "histórico (anos 70). Soi 2 é mais tranquilo. EVITE bares no 2º andar com placa 'ping pong show' — golpe clássico" },
  { label: "Soi Thaniya (japonês)", url: "https://www.google.com/maps/search/Soi+Thaniya+Bangkok", note: "voltado ao público japonês, gaijin geralmente não entra. Vá só se chamarem" },
  { label: "RCA / Royal City Avenue", url: "https://www.google.com/maps/search/RCA+Royal+City+Avenue+Bangkok", note: "não é red-light — é onde o tailandês jovem realmente vai. Clubes grandes (Onyx, Route 66)" },
];

const pattaya: LinkRef[] = [
  { label: "Walking Street", url: "https://www.google.com/maps/search/Walking+Street+Pattaya", note: "1km de bares, agogos e clubes. Abre 18h, pico 23h–2h. Concentração maior que Bangkok inteira" },
  { label: "Soi 6 (daytime)", url: "https://www.google.com/maps/search/Soi+6+Pattaya", note: "única zona com movimento real durante o dia (12h–19h). Bares pequenos, menos pressão de venda" },
  { label: "LK Metro", url: "https://www.google.com/maps/search/LK+Metro+Pattaya", note: "alternativa local à Walking Street, preços 30% menores e clientela mais residente" },
  { label: "Soi Buakhao", url: "https://www.google.com/maps/search/Soi+Buakhao+Pattaya", note: "bares de cerveja (beer bars) e pubs — sem agogo, baixa pressão. Bom para começar a noite" },
  { label: "Beach Road à noite", url: "https://www.google.com/maps/search/Beach+Road+Pattaya", note: "área de freelancers. Saiba que a polícia turística (TPD) faz ronda — mantenha passaporte na bolsa do hotel" },
];

const phuket: LinkRef[] = [
  { label: "Bangla Road (Patong)", url: "https://www.google.com/maps/search/Bangla+Road+Patong", note: "fechada para carros à noite. ~300m de agogos, clubes e cabarés. Pico 22h–3h" },
  { label: "Soi Easy", url: "https://www.google.com/maps/search/Soi+Easy+Patong", note: "ramal de Bangla, agogos médios — preços razoáveis e show menos agressivo" },
  { label: "Soi Sea Dragon", url: "https://www.google.com/maps/search/Soi+Sea+Dragon+Patong", note: "outro ramal, com bares LGBT/ladyboy respeitados" },
  { label: "Paradise Complex", url: "https://www.google.com/maps/search/Paradise+Complex+Patong", note: "zona LGBT principal de Phuket — bares, drag shows e clubes" },
  { label: "After-hours (3h–7h)", url: "https://www.google.com/maps/search/Illuzion+Phuket", note: "Illuzion e Sugar Club ficam abertos até de manhã quando os bares fecham" },
];

const blacklist: LinkRef[] = [
  { label: "Super Pussy / King's Castle 2º andar — Patpong", url: "https://www.google.com/maps/search/Patpong+Bangkok", note: "show com 'preço de entrada grátis' que vira conta de US$ 600. Denúncia recorrente no TripAdvisor desde 2010" },
  { label: "Bares 'tiger show' em Bangla", url: "https://www.google.com/maps/search/Bangla+Road+Patong", note: "promotor te puxa pro 2º andar prometendo 'free show'. Saída só pagando ฿8.000–20.000" },
  { label: "Hostess bars com menu sem preço", url: "https://www.google.com/maps/search/Sukhumvit+Soi+33", note: "Sukhumvit Soi 33 e Soi 22 têm casos. Regra: se menu não tiver preço impresso, levante e saia" },
  { label: "Currency exchange '0% commission'", url: "https://www.google.com/maps/search/Super+Rich+Bangkok", note: "use Super Rich (verde ou laranja) ou SuperRich Thailand — taxa real. Casas com 'zero commission' usam câmbio inflado" },
];

const russos: LinkRef[] = [
  // Pattaya
  { label: "Galaxy Club (Walking Street, Pattaya)", url: "https://www.google.com/maps/search/Galaxy+Club+Walking+Street+Pattaya", note: "o mais conhecido com dançarinas russas e leste-europeias. Cardápio em russo e inglês, preços fixos no menu" },
  { label: "Sensations Showgirls (Walking Street, Pattaya)", url: "https://www.google.com/maps/search/Sensations+Showgirls+Walking+Street+Pattaya", note: "produção tipo cabaré com elenco majoritariamente russo/ucraniano. Entrada paga, drink incluso" },
  { label: "X-Zone Pattaya (Walking Street)", url: "https://www.google.com/maps/search/X-Zone+Walking+Street+Pattaya", note: "showgirls eslavas, ambiente estilo Las Vegas. Cobra cover (~฿500) com 1 drink" },
  { label: "Russian Bar Pattaya (Soi 16, Beach Road)", url: "https://www.google.com/maps/search/Russian+Bar+Pattaya+Soi+16", note: "ponto de encontro da comunidade russa em Pattaya. Bar com dança, atmosfera mais local que turística" },
  { label: "Zona russa — Jomtien / Pratumnak", url: "https://www.google.com/maps/search/Jomtien+Pattaya+Russian+area", note: "bairro com restaurantes, bares e clubes voltados à diáspora russa. Vibe diferente do centro de Pattaya" },
  // Patong
  { label: "Suzy Wong (Bangla Road, Patong)", url: "https://www.google.com/maps/search/Suzy+Wong+Bangla+Road+Patong", note: "agogo principal de Bangla com escalação mista (tailandesas + russas/ucranianas em alta temporada nov–mar)" },
  { label: "Seduction Beach Club & Disco (Patong)", url: "https://www.google.com/maps/search/Seduction+Beach+Club+Patong", note: "balada grande com go-go dancers russas no palco. Cover ฿300–500, drink ฿250–350" },
  { label: "Tiger Bar Complex (Bangla, Patong)", url: "https://www.google.com/maps/search/Tiger+Nightclub+Bangla+Patong", note: "vários bares no mesmo prédio; o agogo do 2º andar costuma ter dançarinas eslavas no inverno (alta temporada russa)" },
];


const chapters: [string, string][] = [
  ["cap-1", "Glossário"],
  ["cap-2", "Etiqueta"],
  ["cap-3", "Bangkok"],
  ["cap-4", "Pattaya"],
  ["cap-5", "Phuket"],
  ["cap-6", "Lista negra"],
  ["cap-7", "Preços reais"],
  ["cap-8", "Segurança"],
  ["cap-9", "Roteiro 1 noite"],
  ["cap-10", "Frases TH"],
  ["cap-11", "Mulheres/casais"],
  ["cap-12", "Se for enganado"],
];

/* ============================================================ */

const ClubesStrip6644 = () => {
  return (
    <div
      className="min-h-screen antialiased selection:bg-rose-200/60 selection:text-rose-950"
      style={{
        background: BONE,
        color: INK,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
      }}
    >
      <SEO
        title="Guia Clubes de Strip Tailândia — Conteúdo Completo"
        description="Guia completo: distritos de Bangkok, Pattaya e Phuket; lista negra de golpes; preços reais; etiqueta; frases em tailandês."
        canonicalPath="/clubesstrip6644"
      />

      {/* ============= HERO ============= */}
      <header className="relative overflow-hidden">
        <div
          className="orb"
          style={{
            top: "-10%", left: "-10%", width: 520, height: 520,
            background: `radial-gradient(circle, ${NEON}55, transparent 70%)`,
            opacity: 0.3,
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
                background: "rgba(225,29,72,0.08)",
                color: NEON,
                border: `1px solid rgba(225,29,72,0.15)`,
              }}
            >
              <Sparkles className="w-3 h-3" /> Guia Premium · +18 · Edição Completa
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1
              className="font-display tracking-editorial text-balance font-semibold leading-[0.98] text-[clamp(2.6rem,7vw,5.6rem)]"
              style={{ color: INK }}
            >
              Clubes de Strip<br />
              na{" "}
              <span
                className="italic font-normal"
                style={{
                  background: `linear-gradient(120deg, ${NEON}, ${GOLD})`,
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
            <p className="mt-8 max-w-2xl text-[19px] md:text-[20px] leading-[1.6] text-pretty" style={{ color: "rgba(10,10,15,0.7)" }}>
              Os 3 destinos sem surpresa: Bangkok, Pattaya e Phuket. Distritos no Google Maps, lista negra de golpes,
              tabela de preços reais, glossário completo e roteiro pronto por cidade.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm" style={{ color: "rgba(10,10,15,0.55)" }}>
              {[
                ["12", "Capítulos"],
                ["20+", "Endereços no mapa"],
                ["3", "Cidades cobertas"],
                ["100+", "Bares avaliados"],
              ].map(([n, l]) => (
                <div key={l} className="flex items-baseline gap-2">
                  <span className="font-display text-2xl font-semibold" style={{ color: NEON_DEEP }}>{n}</span>
                  <span className="tracking-wide">{l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="h-px mx-6 md:mx-auto max-w-5xl" style={{ background: `linear-gradient(90deg, transparent, ${LINE}, transparent)` }} />
      </header>

      {/* ============= STICKY NAV ============= */}
      <nav
        className="sticky top-0 z-30 backdrop-blur-xl"
        style={{
          background: "rgba(244,239,230,0.78)",
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
                className="px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-rose-900/5"
                style={{ color: "rgba(10,10,15,0.62)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = NEON)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,10,15,0.62)")}
              >
                <span className="opacity-50 mr-1.5">{String(i + 1).padStart(2, "0")}</span>{label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6 divide-y" style={{ borderColor: LINE }}>
        {/* Cap 1 — Glossário */}
        <Section id="cap-1" kicker="Capítulo 01" title="Glossário — os 12 termos que você precisa saber antes de entrar">
          <p>Quase todo prejuízo de turista vem de pedir algo cujo nome ele não conhece. Decore esses termos.</p>
          <ul className="not-prose space-y-3 mt-6">
            {[
              ["Lady drink", "drink (com ou sem álcool) que VOCÊ paga para a dançarina sentar com você. ฿180–300 em Cowboy, ฿200–400 em Nana, ฿250 em Bangla. Ela ganha comissão (~50%)."],
              ["Bar fine", "taxa que você paga AO BAR para 'liberar' a moça antes do fim do turno dela. ฿600–1.200 (varia por cidade e horário). Não inclui nada além disso."],
              ["Off / Short time / Long time", "o que acontece DEPOIS é combinado direto com ela, fora do bar. Bar não fala preço — se falar, é gerente comissionando."],
              ["Tip box", "caixinha no palco. ฿20–100 é educado. Diferente da 'comissão automática' na conta."],
              ["Cover charge", "Cowboy e Nana NÃO cobram entrada na rua. Em Patpong 2º andar dizem 'free' mas cobram ฿500 no menu como 'show charge'."],
              ["Service charge / VAT", "10% + 7% adicional. Sempre cobrado, sempre legítimo se estiver no menu."],
              ["Mama-san", "gerente do bar (geralmente mulher mais velha). Negocie bar fine com ela, não com a dançarina."],
              ["Coyote / Agogo / Gentlemen's club", "três níveis diferentes: coyote = dança vestida; agogo = topless ou nude; GC = privado, modelo escort. Preço sobe na ordem."],
              ["Freelance", "moça que não trabalha em bar. Aborda em rua/club (Beach Road, Insomnia). Preço maior, risco maior."],
              ["Ladyboy / Kathoey", "mulher trans. Bares específicos (Cascade em Nana, Obsessions em Bangla). Respeito = bom rolê."],
              ["Yellow Pages", "expressão local para o site Stickman Bangkok — review semanal dos bares com nota e alerta de golpe."],
              ["Tea money", "propina informal pra polícia turística ignorar pequena infração. Não inicie; se for solicitado, ฿500–1.000 resolve."],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="rounded-xl p-4 flex gap-4" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <span className="w-1 rounded-full flex-shrink-0" style={{ background: NEON }} />
                  <div>
                    <strong style={{ color: INK }}>{head}:</strong>{" "}
                    <span style={{ color: "rgba(10,10,15,0.72)" }}>{body}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Cap 2 — Etiqueta */}
        <Section id="cap-2" kicker="Capítulo 02" title="Etiqueta — o código não escrito">
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              "Nunca tire foto de dançarina no palco — proibido, te expulsam e podem reter celular.",
              "Não toque sem permissão. Em agogo, ela vem até você se quiser conversar.",
              "Pague cada rodada na hora. NÃO 'abra conta' — é a porta para a conta inflada.",
              "Sempre peça o menu impresso ANTES de pedir o primeiro drink.",
              "Cerveja na garrafa (Singha, Chang, Leo): ฿140–200 é o padrão honesto.",
              "Gorjeta ฿20–100 quando sair é cortesia, não obrigação.",
              "Não negocie em voz alta. Negociação de bar fine é discreta, com a mama-san.",
              "Respeite ladyboy bars — comportamento de zoeira gera expulsão imediata.",
              "Não leve passaporte. Cópia + carteira de motorista internacional já basta.",
              "Beijo, mão dada e abraço em público são malvistos mesmo em red-light district.",
            ].map((t, i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="rounded-xl p-4 h-full flex gap-3" style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${LINE}` }}>
                  <span className="font-display text-sm font-semibold opacity-50 flex-shrink-0" style={{ color: GOLD }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.78)" }}>{t}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Cap 3 — Bangkok */}
        <Section id="cap-3" kicker="Capítulo 03" title="Bangkok — Soi Cowboy, Nana, Patpong">
          <p>Três distritos clássicos com perfis distintos. Comece sempre por <strong>Cowboy</strong> se for sua primeira noite.</p>
          <div className="mt-8"><LinkGrid items={bangkok} /></div>
          <p className="text-sm mt-6" style={{ color: "rgba(10,10,15,0.6)" }}>
            Hotel ideal para essa zona: Sukhumvit entre Asoke (Soi 21) e Nana (Soi 4). BTS Asoke ou Nana facilita tudo —{" "}
            <A href="https://www.google.com/maps/search/Hotels+Asoke+Sukhumvit+Bangkok">veja a região</A>.
          </p>
        </Section>

        {/* Cap 4 — Pattaya */}
        <Section id="cap-4" kicker="Capítulo 04" title="Pattaya — Walking Street e além">
          <p>Pattaya é a capital tailandesa da noite. Concentração e variedade maiores que Bangkok, preços médios 15–20% menores.</p>
          <div className="mt-8"><LinkGrid items={pattaya} /></div>
          <Reveal>
            <div className="not-prose mt-6 rounded-xl p-4" style={{ background: "rgba(225,29,72,0.07)", border: `1px solid rgba(225,29,72,0.18)` }}>
              <p className="text-[14.5px]" style={{ color: NEON_DEEP }}>
                Cuidado com promotor na rua oferecendo "free show no 2º andar" — é o golpe clássico. Em Walking Street só entre em bar com fachada na rua e menu visível.
              </p>
            </div>
          </Reveal>
        </Section>

        {/* Cap 5 — Phuket */}
        <Section id="cap-5" kicker="Capítulo 05" title="Phuket — Bangla Road em Patong">
          <p>Bangla é menor que Walking Street, mais turística e mais cara. Bom para 1 noite — pra mais que isso, Pattaya entrega melhor.</p>
          <div className="mt-8"><LinkGrid items={phuket} /></div>
          <p className="text-sm mt-6" style={{ color: "rgba(10,10,15,0.6)" }}>
            Hospede em Patong se for ficar 1–2 noites. Se for ficar mais, prefira Kata ou Karon e use Grab/Bolt para Bangla (฿250–400 cada trecho).
          </p>
        </Section>

        {/* Cap 6 — Lista negra */}
        <Section id="cap-6" kicker="Capítulo 06" title="Lista negra — armadilhas conhecidas">
          <p>Categorias e endereços onde o golpe da conta inflada é recorrente. Não entre.</p>
          <div className="mt-8"><LinkGrid items={blacklist} /></div>
          <Reveal>
            <div className="not-prose mt-8 rounded-2xl p-5 flex gap-3" style={{ background: "rgba(225,29,72,0.08)", border: `1px solid rgba(225,29,72,0.25)` }}>
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
              <p className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.78)" }}>
                <strong>Regra única que evita 95% dos golpes:</strong> só entre em bar com menu impresso visível na entrada. Sem menu na entrada, vire e siga.
              </p>
            </div>
          </Reveal>
          <p className="mt-6 text-sm" style={{ color: "rgba(10,10,15,0.55)" }}>
            Para reviews atualizados, consulte{" "}
            <A href="https://www.stickmanbangkok.com/">Stickman Bangkok</A> e{" "}
            <A href="https://www.tripadvisor.com/Tourism-g293916-Bangkok-Vacations.html">TripAdvisor Bangkok Nightlife</A> — filtre por "1 estrela" para ver os relatos de golpe.
          </p>
        </Section>

        {/* Cap 7 — Preços reais */}
        <Section id="cap-7" kicker="Capítulo 07" title="Tabela de preços reais (Baht)">
          <p>Médias praticadas em bar honesto, sem 'menu sem preço'. Conversão aproximada: ฿100 ≈ R$ 15.</p>
          <Reveal>
            <div className="not-prose mt-8 rounded-2xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.5)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(225,29,72,0.06)" }}>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: NEON_DEEP, letterSpacing: "0.08em" }}>Item</th>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: NEON_DEEP, letterSpacing: "0.08em" }}>Cowboy/Nana</th>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: NEON_DEEP, letterSpacing: "0.08em" }}>Pattaya</th>
                      <th className="text-left p-4 font-semibold tracking-wide text-[12px] uppercase" style={{ color: NEON_DEEP, letterSpacing: "0.08em" }}>Bangla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Cerveja local (Singha, Chang)", "฿140–180", "฿100–150", "฿180–220"],
                      ["Heineken / Asahi", "฿200–250", "฿150–200", "฿220–280"],
                      ["Lady drink", "฿180–280", "฿150–220", "฿200–350"],
                      ["Tequila/Sambuca shot", "฿150–200", "฿120–150", "฿180–250"],
                      ["Bar fine (típico)", "฿800–1.200", "฿600–1.000", "฿1.000–1.500"],
                      ["Cover charge (rua)", "฿0", "฿0", "฿0"],
                      ["Service + VAT", "+17%", "+17%", "+17%"],
                    ].map((row, i) => (
                      <tr key={i} className="transition-colors hover:bg-rose-900/[0.02]" style={{ borderTop: `1px solid ${LINE}` }}>
                        {row.map((c, j) => (
                          <td key={j} className="p-4" style={{ color: j === 0 ? INK : "rgba(10,10,15,0.72)", fontWeight: j === 0 ? 500 : 400 }}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <p className="mt-6 text-[14.5px]" style={{ color: "rgba(10,10,15,0.7)" }}>
            <strong>Orçamento de referência para 1 noite honesta:</strong> ฿1.500–2.500 em Cowboy/Pattaya (4–5 cervejas + 2 lady drinks + gorjeta). Tudo acima de ฿4.000 numa noite sem bar fine é sinal de cobrança errada — peça o detalhe da conta.
          </p>
        </Section>

        {/* Cap 8 — Segurança */}
        <Section id="cap-8" kicker="Capítulo 08" title="Segurança — antes, durante e depois">
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              ["Antes de sair", "deixe passaporte no cofre. Leve cópia + ID. Carteira só com o necessário (฿3.000) + um cartão extra escondido."],
              ["Câmbio", <>troque dinheiro de dia em <A href="https://www.google.com/maps/search/Super+Rich+Thailand">Super Rich Thailand</A> (verde). À noite, só ATM dentro de 7-Eleven.</>],
              ["Drink", "nunca aceite drink já servido nem deixe o seu sozinho. Buckets compartilhados em festa de praia são exceção, mas só com pessoas que você conhece."],
              ["Transporte", <>use <A href="https://www.grab.com/th/en/">Grab</A> ou <A href="https://bolt.eu/">Bolt</A>. Tuk-tuk fora do app sempre tenta supercobrar. Recusou ligar o taxímetro? Saia.</>],
              ["Polícia turística (TPD)", <>1155 funciona. Diferente da polícia comum, fala inglês. Antes deles, tente resolver com a mama-san — 80% das contas erradas voltam ao normal quando você diz 'TPD'.</>],
              ["Consulado", <>Consulado do Brasil em Bangkok: <A href="https://www.gov.br/mre/pt-br/consulado-banguecoque">Cguia oficial</A>. Salve o número no celular ANTES de sair.</>],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-xl p-4 h-full" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <div className="font-semibold mb-1" style={{ color: INK }}>{head}</div>
                  <div className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.7)" }}>{body}</div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Cap 9 — Roteiro 1 noite */}
        <Section id="cap-9" kicker="Capítulo 09" title="Roteiro pronto — 1 noite por cidade">
          {[
            {
              title: "Bangkok — Sukhumvit",
              steps: [
                "19h — jantar no Cabbages & Condoms (Soi 12). Tradição, comida boa, ar-condicionado, ฿400–600.",
                "21h — caminhe até Soi Cowboy (Asoke BTS). Comece pelo Baccara (3º andar, vista pra rua) — cerveja ฿180.",
                "22h30 — atravesse pra Country Road, Sam's 2000 ou Suzie Wong (clássicos).",
                "00h30 — taxi/Grab pra Levels Club (Soi 11) ou Sing Sing Theater se quiser balada misturada.",
                "03h — fechamento. Street food em Soi 38 ou Sukhumvit Soi 11.",
              ],
            },
            {
              title: "Pattaya — Walking Street",
              steps: [
                "19h — jantar à beira-mar no Mantra Restaurant (Beach Road). ฿700/pessoa.",
                "20h30 — comece em Soi Buakhao (beer bars) para esquentar — cerveja ฿80.",
                "22h — taxi/baht-bus pra Walking Street. Entre pelo lado norte (sem barreira).",
                "22h30 — Windmill Club (lado direito, agogo top), depois Iron Club (esquerda).",
                "01h — Insomnia Club ou Lucifer (after-hours até 4h).",
                "04h — Tony's Disco se ainda restar fôlego.",
              ],
            },
            {
              title: "Phuket — Patong",
              steps: [
                "19h30 — jantar no Savoey Seafood (Soi Bangla área). Frutos do mar, ฿800/pessoa.",
                "21h — comece no Soi Easy (Tiger Bar, Roxy) — preços mais honestos.",
                "22h30 — Bangla Road principal. Visite o Suzy Wong (palco icônico) e o Devil's Playground.",
                "00h30 — Illuzion (a maior balada do sul) ou Sugar Club para encerrar.",
                "03h — Molly Malone's tem cozinha aberta para um late dinner.",
              ],
            },
          ].map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="not-prose mt-8 rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                <h3 className="font-display text-lg font-semibold mb-4" style={{ color: NEON_DEEP }}>{r.title}</h3>
                <ol className="space-y-2 text-[15px]">
                  {r.steps.map((s, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="font-display text-sm font-semibold opacity-50 flex-shrink-0" style={{ color: GOLD }}>{String(j + 1).padStart(2, "0")}</span>
                      <span style={{ color: "rgba(10,10,15,0.78)" }}>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </Section>

        {/* Cap 10 — Frases TH */}
        <Section id="cap-10" kicker="Capítulo 10" title="Frases em tailandês para a noite">
          <Reveal>
            <pre
              className="not-prose mt-6 rounded-2xl p-5 md:p-6 text-[13.5px] leading-[1.85] whitespace-pre-wrap overflow-x-auto"
              style={{
                background: INK,
                color: "#E8E4D8",
                border: `1px solid ${LINE}`,
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 50px -25px rgba(10,10,15,0.4)",
              }}
            >{`"Khor menu noi krap/ka"          — Me dê o cardápio, por favor
"Tao rai krap/ka?"               — Quanto custa?
"Phaeng pai"                     — Caro demais
"Mai ao krap/ka"                 — Não quero (educado para recusar)
"Mai pen rai"                    — Tudo bem / não esquenta
"Check bin"                      — A conta, por favor
"Bia Singha nueng khuat"         — Uma garrafa de Singha
"Mai sai nam khaeng"             — Sem gelo
"Mai ow Lady drink"              — Não quero pagar Lady drink
"Yu ti nai?"                     — Onde fica?
"Pai…krap/ka"                    — Vou para… (+ destino)
"Khop khun krap/ka"              — Obrigado(a)

Use 'krap' se você é homem, 'ka' se é mulher.`}</pre>
          </Reveal>
        </Section>

        {/* Cap 11 — Mulheres/casais */}
        <Section id="cap-11" kicker="Capítulo 11" title="Para mulheres turistas e casais">
          <p>Toda a cena é mais aberta do que parece de fora. Casais e mulheres sozinhas frequentam bares mistos sem hostilidade.</p>
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-6">
            {[
              ["Cabarés (ladyboy show)", <><A href="https://www.calypsocabaret.com/">Calypso (Asiatique, BKK)</A>, <A href="https://www.tiffany-show.co.th/">Tiffany Show (Pattaya)</A>, <A href="https://www.simoncabaret.com/">Simon Cabaret (Phuket)</A>. ฿800–1.500, ambiente família, fotos liberadas no fim.</>],
              ["Bares mistos premium", "Sky Bar Lebua, Octave Marriott, Tichuca — não são red-light. Roupa social. Drinks ฿400–600."],
              ["Beach Clubs", <><A href="https://www.cafedelmar.co.th/">Café del Mar</A> (Phuket) e <A href="https://www.kudo-beachclub.com/">KUDO</A> são clima Ibiza. Pool party, sem agogo.</>],
              ["Para casais curiosos", "Demonia (BKK) e Insomnia (Pattaya) são clubes onde casais entram tranquilos. Sem pressão."],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <div className="font-display font-semibold mb-1" style={{ color: NEON_DEEP }}>{head}</div>
                  <div className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.72)" }}>{body}</div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* Cap 12 — Se for enganado */}
        <Section id="cap-12" kicker="Capítulo 12" title="Se você for enganado — passo a passo">
          <ol className="not-prose space-y-3 mt-6">
            {[
              ["Mantenha a calma e não pague de imediato", "exija o menu impresso e peça para mostrar cada item cobrado. Quem inflou a conta SABE que está errado."],
              ["Diga claramente: 'Tourist Police, 1155'", "80% dos casos a mama-san reduz a conta na hora. Eles temem auditoria e perda de licença."],
              ["Se mantiverem, ligue 1155 da sua linha", "a Tourist Police (TPD) chega em 10–20 min em zona turística. Inglês básico, treinados para esses casos."],
              ["Nunca entregue passaporte como caução", "é ilegal. Se exigirem, é crime contra você — registre BO depois."],
              ["Cartão de crédito: conteste depois", "Visa/Master Brasil aceitam contestação por 'serviço não prestado/preço diferente do acordado'. Tire foto do menu impresso ANTES de pagar."],
              ["Registre BO online", <>via <A href="https://www.thaipoliceonline.com/">Thai Police Online</A>. Tem versão em inglês. Importante se for usar contestação no cartão.</>],
              ["Consulado do Brasil", <><A href="https://www.gov.br/mre/pt-br/consulado-banguecoque">Consulado em Bangkok</A> tem plantão para emergência. Útil se passaporte foi retido.</>],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-xl p-4 flex gap-4" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <span className="font-display text-xl font-semibold flex-shrink-0 leading-none mt-0.5" style={{ color: GOLD }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <strong style={{ color: INK }}>{head}:</strong>{" "}
                    <span style={{ color: "rgba(10,10,15,0.72)" }}>{body}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        <footer className="py-16 text-center text-sm flex items-center justify-center gap-2" style={{ color: "rgba(10,10,15,0.45)" }}>
          <Shield className="w-4 h-4" /> Conteúdo do guia premium — uso pessoal do comprador. +18.
        </footer>
      </main>
    </div>
  );
};

export default ClubesStrip6644;

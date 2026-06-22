import { SEO } from "@/components/SEO";
import { Sparkles, ExternalLink, Check, ArrowUpRight, AlertTriangle, Moon } from "lucide-react";
import { useEffect, useRef } from "react";

/* ============================================================
   PREMIUM PALETTE — midnight neon (festa)
   ============================================================ */
const INK = "#0A0A0F";
const BONE = "#F4EFE6";
const NEON = "#D946EF";       // magenta/pink neon
const NEON_DEEP = "#86198F";
const GOLD = "#C9A24B";
const LINE = "rgba(10,10,15,0.08)";

type LinkRef = { label: string; url: string; note?: string };

/* ---------- Atoms ---------- */
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
      <h2 className="font-display tracking-editorial text-balance text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.08] mb-8" style={{ color: INK }}>
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

const LinkCard = ({ item, index }: { item: LinkRef; index: number }) => (
  <Reveal delay={index * 60}>
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl p-5 md:p-6 transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${LINE}`,
        boxShadow: "0 1px 2px rgba(10,10,15,0.04)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(217,70,239,0.25), 0 8px 20px -10px rgba(10,10,15,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(10,10,15,0.04)")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ background: "rgba(217,70,239,0.1)", color: NEON }}>
            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
          </span>
          <h4 className="font-semibold text-[15px] leading-snug" style={{ color: INK }}>{item.label}</h4>
        </div>
        <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" style={{ color: NEON }} />
      </div>
      {item.note && <p className="text-[13.5px] leading-relaxed pl-[38px]" style={{ color: "rgba(10,10,15,0.6)" }}>{item.note}</p>}
    </a>
  </Reveal>
);

const LinkGrid = ({ items }: { items: LinkRef[] }) => (
  <div className="grid sm:grid-cols-2 gap-3 md:gap-4 not-prose">
    {items.map((l, i) => <LinkCard key={l.url + l.label} item={l} index={i} />)}
  </div>
);

/* ---------- DATA: 9 cidades ---------- */

const bangkok: LinkRef[] = [
  { label: "Sky Bar / Lebua (Rooftop icônico)", url: "https://www.google.com/maps/search/Sky+Bar+Lebua+Bangkok", note: "63º andar. Vá entre 18h30–19h30 pro pôr-do-sol, dress code (calça + sapato fechado). Drink ฿650–950. Vai 1x na vida." },
  { label: "Vertigo & Moon Bar (Banyan Tree)", url: "https://www.google.com/maps/search/Vertigo+Moon+Bar+Bangkok", note: "61º andar, vista 360º. Melhor pôr-do-sol da cidade — chegue 17h45. Coquetel ฿550, sem cobrança de entrada." },
  { label: "Tichuca Rooftop (Sukhumvit 40)", url: "https://www.google.com/maps/search/Tichuca+Rooftop+Bar+Bangkok", note: "rooftop com 'árvore neon' — instagrammável. Reserva por IG @tichuca.bkk obrigatória nos fins de semana." },
  { label: "Sing Sing Theater (Sukhumvit 45)", url: "https://www.google.com/maps/search/Sing+Sing+Theater+Bangkok", note: "club temático Xangai 1920. Quinta–sábado lotado, vá 23h. Sem cover, drink ฿350." },
  { label: "RCA — Route 66 / Onyx", url: "https://www.google.com/maps/search/RCA+Route+66+Bangkok", note: "Royal City Avenue. Onde tailandês jovem realmente vai. Hip-hop/EDM. Entrada ฿300 com 1 drink." },
  { label: "Beam Club (Thonglor)", url: "https://www.google.com/maps/search/Beam+Club+Thonglor+Bangkok", note: "techno/house de qualidade europeia. Sexta–sábado. Cover ฿500." },
  { label: "Khao San Road (Banglamphu)", url: "https://www.google.com/maps/search/Khao+San+Road+Bangkok", note: "bares mochileiros, baldes a ฿200. Caótico, divertido, sem cobrança de entrada. Pico 22h–2h." },
];

const bangkokLatino: LinkRef[] = [
  { label: "Havana Social Bar (Sukhumvit Soi 11)", url: "https://www.google.com/maps/search/Havana+Social+Bangkok", note: "🔥 ENTRADA SECRETA: cabine telefônica antiga no fim do beco. Disque 'havana' no teclado e a parede abre. Salsa/son cubano ao vivo qua/sex. Coquetel ฿380." },
  { label: "El Mercado (Soi 24, Sukhumvit)", url: "https://www.google.com/maps/search/El+Mercado+Bangkok+Sukhumvit+24", note: "restaurante + bar latino. Noites de bachata às quintas. Pista pequena, mas autêntica." },
  { label: "Charm Eatery & Bar (Phrom Phong)", url: "https://www.google.com/maps/search/Charm+Eatery+Phrom+Phong", note: "sábado é noite latina — DJ toca reggaeton + bachata. Free entry, drink ฿250." },
];

const phuket: LinkRef[] = [
  { label: "Illuzion Phuket (Bangla Road)", url: "https://www.google.com/maps/search/Illuzion+Phuket", note: "maior club da Tailândia depois de Bangkok. Lasers, shows, EDM. Cover ฿500 com 1 drink, abre até 4h." },
  { label: "Bangla Road (Patong)", url: "https://www.google.com/maps/search/Bangla+Road+Patong", note: "rua fechada à noite. 300m de bares, agogos e clubs. Pico 22h–3h. Cuidado com promotor de '2º andar'." },
  { label: "Catch Beach Club (Bang Tao)", url: "https://www.google.com/maps/search/Catch+Beach+Club+Phuket", note: "pool party domingo das 14h. Pé na areia, DJ internacional. Day pass ฿1.500 com ฿1.000 em consumo." },
  { label: "Paradise Complex (Patong)", url: "https://www.google.com/maps/search/Paradise+Complex+Patong", note: "zona LGBT principal. Drag shows às 23h em Boat Bar e My Way. Sem cover." },
  { label: "Kudo Beach Club (Patong)", url: "https://www.google.com/maps/search/Kudo+Beach+Club+Patong", note: "pôr-do-sol + DJ na praia. Cocktail ฿320. Vibe sunset perfeita 17h–20h." },
];

const phuketLatino: LinkRef[] = [
  { label: "Ka Jok See (Phuket Old Town)", url: "https://www.google.com/maps/search/Ka+Jok+See+Phuket", note: "🔥 PONTO DE ENCONTRO LATINO em Phuket. Sábado pós-meia-noite vira pista de salsa/reggaeton. Mesa no jantar (฿1.500) garante entrada — depois das 23h, vira club." },
  { label: "Sound Phuket (Jungceylon Mall)", url: "https://www.google.com/maps/search/Sound+Phuket+Jungceylon", note: "noite latina às quartas. Free entry até 23h." },
];

const pattaya: LinkRef[] = [
  { label: "Walking Street", url: "https://www.google.com/maps/search/Walking+Street+Pattaya", note: "1 km de bares, agogos e clubs. Abre 18h, pico 23h–2h." },
  { label: "Lima Lima Club (Walking Street)", url: "https://www.google.com/maps/search/Lima+Lima+Club+Pattaya", note: "club mainstream com EDM e hip-hop. Cover ฿300 inclui 1 drink." },
  { label: "Insomnia Pattaya", url: "https://www.google.com/maps/search/Insomnia+Pattaya", note: "abre 1h, vai até 6h. After-hours principal. Cover ฿500." },
  { label: "Differ Pub (Beach Road)", url: "https://www.google.com/maps/search/Differ+Pub+Pattaya", note: "música ao vivo (rock/pop) — alternativa ao EDM. Sem cover, cerveja ฿120." },
];

const kohPhangan: LinkRef[] = [
  { label: "Full Moon Party (Haad Rin)", url: "https://www.google.com/maps/search/Haad+Rin+Beach+Koh+Phangan", note: "calendário oficial: fullmoonparty-thailand.com. Entrada ฿200, balde ฿350. Pulseira fluo essencial." },
  { label: "Half Moon Festival (Ban Tai)", url: "https://www.google.com/maps/search/Half+Moon+Festival+Koh+Phangan", note: "festa irmã da Full Moon, na selva. Acontece 1 semana antes/depois da lua cheia. Cover ฿1.500." },
  { label: "Jungle Experience (Baan Tai)", url: "https://www.google.com/maps/search/Jungle+Experience+Koh+Phangan", note: "🔥 LADO B DA FULL MOON. Festa underground na floresta, vibe psy-trance, sem turistão. Datas no IG @jungleexperience. Cover ฿800." },
  { label: "Eden Garden Party (Haad Rin)", url: "https://www.google.com/maps/search/Eden+Garden+Bar+Koh+Phangan", note: "festa diurna após a Full Moon. Começa 14h e vai até de noite. Recuperação coletiva." },
  { label: "Black Moon Culture (Baan Khai)", url: "https://www.google.com/maps/search/Black+Moon+Culture+Koh+Phangan", note: "festa de lua nova (oposto da Full Moon). Psy-trance puro, multidão local." },
  { label: "Guy's Bar (Haad Rin)", url: "https://www.google.com/maps/search/Guys+Bar+Koh+Phangan", note: "pré-festa todo dia 19h–22h. Lugar onde a galera se encontra antes." },
];

const phiPhi: LinkRef[] = [
  { label: "Slinky Beach Bar (Loh Dalum)", url: "https://www.google.com/maps/search/Slinky+Bar+Phi+Phi", note: "fire show 21h30 e 23h. Festa na areia até 2h. Sem cover, balde ฿350." },
  { label: "Ibiza Pool Bar (Loh Dalum)", url: "https://www.google.com/maps/search/Ibiza+House+Phi+Phi", note: "festa na piscina diariamente. Música house, sem cover." },
  { label: "Stones Bar (Loh Dalum)", url: "https://www.google.com/maps/search/Stones+Bar+Phi+Phi", note: "reggae bar autêntico, fire show, vibe rastafári. Cerveja ฿100." },
  { label: "Carlito's Bar (Tonsai)", url: "https://www.google.com/maps/search/Carlitos+Bar+Phi+Phi", note: "começa as 21h com fire dancers. Lotado todo dia em alta temporada." },
];

const krabi: LinkRef[] = [
  { label: "Last Bar (Ao Nang)", url: "https://www.google.com/maps/search/Last+Bar+Ao+Nang", note: "rooftop com fire show. Música pop/rock ao vivo. Sem cover." },
  { label: "Boogie Bar (Railay West)", url: "https://www.google.com/maps/search/Boogie+Bar+Railay", note: "bar de praia com pista de areia. Reggae/eletrônico. Balde ฿400." },
  { label: "Chang Bar (Ao Nang)", url: "https://www.google.com/maps/search/Chang+Bar+Ao+Nang", note: "rua principal, cerveja barata (฿80), música ao vivo. Bom warm-up." },
];

const chiangMai: LinkRef[] = [
  { label: "Zoe in Yellow (Old City)", url: "https://www.google.com/maps/search/Zoe+in+Yellow+Chiang+Mai", note: "complexo de 5 bares no mesmo quarteirão. Sem cover, drinks ฿150. Pico 23h–2h." },
  { label: "Warm-Up Cafe (Nimman)", url: "https://www.google.com/maps/search/Warm+Up+Cafe+Chiang+Mai", note: "club nº1 da cidade. Bandas ao vivo + DJ. Cover ฿200 com 1 drink." },
  { label: "Beer Republic (Nimman)", url: "https://www.google.com/maps/search/Beer+Republic+Chiang+Mai", note: "100+ cervejas artesanais. Vibe relaxada, sem balada. Fecha à 1h." },
  { label: "North Gate Jazz Co-Op", url: "https://www.google.com/maps/search/North+Gate+Jazz+Chiang+Mai", note: "jazz ao vivo terça–sábado. Lotado, chegue 21h. Sem cover, cerveja ฿100." },
  { label: "Sunday Walking Street (Tha Pae)", url: "https://www.google.com/maps/search/Sunday+Walking+Street+Chiang+Mai", note: "noite de domingo, feira + música ao vivo na rua inteira. Comida de rua + cerveja a ฿60." },
];

const kohSamui: LinkRef[] = [
  { label: "Ark Bar (Chaweng Beach)", url: "https://www.google.com/maps/search/Ark+Bar+Koh+Samui", note: "festa na praia toda quarta e sexta. Fire show, DJ, sem cover. Balde ฿400." },
  { label: "Green Mango Club (Chaweng)", url: "https://www.google.com/maps/search/Green+Mango+Club+Koh+Samui", note: "club lendário da ilha. Cover ฿200. Abre 22h, vai até 4h." },
  { label: "Coco Tam's (Bophut)", url: "https://www.google.com/maps/search/Coco+Tams+Koh+Samui", note: "beach bar chique. Pôr-do-sol, fire show 21h. Coquetel ฿320." },
  { label: "Reggae Pub (Chaweng Lake)", url: "https://www.google.com/maps/search/Reggae+Pub+Koh+Samui", note: "institucional desde 1985. Sexta–sábado lotado. Cover ฿200." },
];

const kohLipe: LinkRef[] = [
  { label: "Maya Bar (Walking Street)", url: "https://www.google.com/maps/search/Maya+Bar+Koh+Lipe", note: "principal da ilha. Festa na areia, fire show 22h. Sem cover, cerveja ฿100." },
  { label: "Pooh's Bar (Walking Street)", url: "https://www.google.com/maps/search/Poohs+Bar+Koh+Lipe", note: "música ao vivo (reggae/acústico) todas as noites. Ambiente relaxado." },
  { label: "Elephant Koh Lipe", url: "https://www.google.com/maps/search/Elephant+Koh+Lipe", note: "bar/restaurante com DJ aos finais de semana. Coquetel ฿250." },
];

const afterHours: LinkRef[] = [
  { label: "Insanity Nightclub (Sukhumvit 11)", url: "https://www.google.com/maps/search/Insanity+Bangkok", note: "abre quando os outros fecham. Vai até 6h. Cover ฿500." },
  { label: "Sugar Club (Sukhumvit 11)", url: "https://www.google.com/maps/search/Sugar+Club+Bangkok", note: "after-hours até 7h. Vibe mais 'depois da festa'." },
  { label: "Levels Club (Aloft Sukhumvit 11)", url: "https://www.google.com/maps/search/Levels+Club+Bangkok", note: "Hip-Hop / EDM. Pico 1h–4h. Cover ฿500 com 2 drinks." },
  { label: "Wave Club (Pattaya, beira-mar)", url: "https://www.google.com/maps/search/Wave+Club+Pattaya", note: "after-hours de Pattaya. Funciona até 7h–8h." },
];

const blacklist: LinkRef[] = [
  { label: "Promotor 'free show' 2º andar (Patpong)", url: "https://www.google.com/maps/search/Patpong+Bangkok", note: "conta de US$ 600 disfarçada de 'ping pong gratuito'. NUNCA suba escada de bar sem ver menu impresso." },
  { label: "Tiger Bar Bangla — 2º andar (Patong)", url: "https://www.google.com/maps/search/Bangla+Road+Patong", note: "mesma cilada do Patpong. Promotor agressivo na rua → conta de ฿8.000–20.000." },
  { label: "Taxi sem taximetro (Suvarnabhumi → cidade)", url: "https://www.google.com/maps/search/Suvarnabhumi+Airport+Bangkok", note: "use Grab ou táxi do guichê oficial 'Public Taxi'. Nunca aceite oferta de motorista na chegada." },
  { label: "Tuk-tuk de 'tour' por ฿20", url: "https://www.google.com/maps/search/Grand+Palace+Bangkok", note: "te leva para lojas de gemas/alfaiates onde ele ganha comissão. Templo grátis, tour falso." },
  { label: "Câmbio 'zero commission' nas zonas turísticas", url: "https://www.google.com/maps/search/Super+Rich+Thailand+Bangkok", note: "use Super Rich (laranja ou verde). Casas 'zero commission' têm spread escondido de 5%." },
];

const chapters: [string, string][] = [
  ["cap-iniciantes", "Iniciantes"],
  ["cap-bangkok", "Bangkok"],
  ["cap-latino", "Latino"],
  ["cap-rooftops", "Rooftops"],
  ["cap-after", "After-hours"],
  ["cap-phuket", "Phuket"],
  ["cap-pattaya", "Pattaya"],
  ["cap-phangan", "Koh Phangan"],
  ["cap-phiphi", "Phi Phi"],
  ["cap-krabi", "Krabi"],
  ["cap-chiangmai", "Chiang Mai"],
  ["cap-samui", "Koh Samui"],
  ["cap-lipe", "Koh Lipe"],
  ["cap-precos", "Preços reais"],
  ["cap-golpes", "Lista negra"],
  ["cap-seguranca", "Segurança"],
  ["cap-frases", "Frases TH"],
];

/* ============================================================ */

const Festas7733 = () => {
  return (
    <div
      className="min-h-screen antialiased selection:bg-fuchsia-200/60 selection:text-fuchsia-950"
      style={{
        background: BONE,
        color: INK,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
      }}
    >
      <SEO
        title="Guia Festas & Vida Noturna Tailândia — Conteúdo Completo"
        description="Guia completo: 9 cidades, bares latinos com endereço, rooftops, after-hours, festas secretas em Koh Phangan, lista negra de golpes e preços reais."
        canonicalPath="/festas7733"
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="orb" style={{ top: "-10%", left: "-10%", width: 520, height: 520, background: `radial-gradient(circle, ${NEON}55, transparent 70%)`, opacity: 0.3 }} />
        <div className="orb" style={{ top: "20%", right: "-15%", width: 600, height: 600, background: `radial-gradient(circle, ${GOLD}40, transparent 70%)`, opacity: 0.3 }} />

        <div className="relative container mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase mb-8"
              style={{ background: "rgba(217,70,239,0.08)", color: NEON, border: `1px solid rgba(217,70,239,0.15)` }}>
              <Sparkles className="w-3 h-3" /> Guia Premium · Edição Completa
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display tracking-editorial text-balance font-semibold leading-[0.98] text-[clamp(2.6rem,7vw,5.6rem)]" style={{ color: INK }}>
              Festas & Vida Noturna<br />
              na{" "}
              <span className="italic font-normal" style={{ background: `linear-gradient(120deg, ${NEON}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tailândia
              </span>
              <span style={{ color: GOLD }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-[19px] md:text-[20px] leading-[1.6] text-pretty" style={{ color: "rgba(10,10,15,0.7)" }}>
              9 cidades mapeadas. Onde sair, onde dançar salsa, qual rooftop vale a fila, quais festas secretas Koh Phangan
              esconde e qual bar tem entrada por cabine telefônica. Tudo no Google Maps.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm" style={{ color: "rgba(10,10,15,0.55)" }}>
              {[
                ["9", "Cidades"],
                ["60+", "Endereços no mapa"],
                ["17", "Capítulos"],
                ["100%", "Testado in loco"],
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

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-30 backdrop-blur-xl" style={{ background: "rgba(244,239,230,0.78)", borderBottom: `1px solid ${LINE}` }}>
        <div className="container mx-auto max-w-5xl px-6 py-3.5 overflow-x-auto">
          <div className="flex gap-1 text-[13px] font-medium whitespace-nowrap">
            {chapters.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className="px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-fuchsia-900/5"
                style={{ color: "rgba(10,10,15,0.62)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = NEON)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(10,10,15,0.62)")}>
                <span className="opacity-50 mr-1.5">{String(i + 1).padStart(2, "0")}</span>{label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6 divide-y" style={{ borderColor: LINE }}>

        {/* INICIANTES */}
        <Section id="cap-iniciantes" kicker="Comece aqui" title="10 regras de ouro pra primeira noite">
          <p>Decore essas 10 regras antes de sair. Resolvem 95% dos perrengues clássicos do brasileiro na Tailândia.</p>
          <ul className="not-prose grid sm:grid-cols-2 gap-3 mt-6">
            {[
              ["Use Grab ou Bolt — sempre", "Táxi sem taxímetro e tuk-tuk cobram 3–5x. Grab funciona em todas as 9 cidades, preço fixo no app."],
              ["Saia entre 22h e 1h", "Cedo demais (20h) tudo vazio. Tarde demais (3h+) só sobra freelancer agressivo."],
              ["Leve ฿2.000–3.000 em cash", "Mais que isso fica no hotel. Cartão fica em bolso separado pra emergência."],
              ["NUNCA aceite drink já servido", "Drink-spiking acontece. Bebida só da mão do bartender, no copo lacrado ou aberto na sua frente."],
              ["Endereço do hotel em tailandês no celular", "Print da reserva com nome em ทท. Motorista entende, você não fica perdido às 4h."],
              ["Negocie balde ANTES de aceitar", "Balde (bucket) varia de ฿250 a ฿500. Pergunte preço antes — depois não tem recurso."],
              ["Sem foto no palco / sem flash em dançarina", "Te expulsam e podem reter o celular. Selfie na rua, ok."],
              ["Cópia do passaporte, nunca original", "Cópia colorida + foto na nuvem. Original fica no cofre do hotel."],
              ["Compartilhe localização com 1 amigo", "Live location do WhatsApp/Google Maps. Custa nada, salva tudo."],
              ["'1155' = polícia turística", "Falar essa frase em voz firme resolve 80% das contas erradas antes da ligação real."],
            ].map(([head, body], i) => (
              <Reveal key={i} delay={i * 30}>
                <div className="rounded-xl p-4 h-full" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <div className="flex items-baseline gap-2.5 mb-1.5">
                    <span className="font-display text-sm font-semibold flex-shrink-0" style={{ color: GOLD }}>{String(i + 1).padStart(2, "0")}</span>
                    <div className="font-semibold" style={{ color: INK }}>{head}</div>
                  </div>
                  <div className="text-[14.5px] pl-7" style={{ color: "rgba(10,10,15,0.7)" }}>{body}</div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* BANGKOK */}
        <Section id="cap-bangkok" kicker="Capítulo 02" title="Bangkok — a capital que nunca dorme">
          <p>De rooftops de cinema a clubs de techno europeu, Bangkok é o mais completo. Comece por Sukhumvit (BTS Asoke/Nana/Phrom Phong) — concentra 70% do que vale a pena.</p>
          <LinkGrid items={bangkok} />
          <div className="not-prose mt-8 rounded-xl p-5 flex gap-3" style={{ background: "rgba(217,70,239,0.07)", border: `1px solid rgba(217,70,239,0.2)` }}>
            <Moon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.78)" }}>
              <strong>Roteiro 1 noite perfeita:</strong> 18h Moon Bar (pôr-do-sol) → 20h jantar Soi 11 → 22h Sing Sing → 0h30 Beam → 3h Sugar Club after-hours → 5h Grab para hotel. Custo total: ฿2.500–3.500.
            </p>
          </div>
        </Section>

        {/* LATINO */}
        <Section id="cap-latino" kicker="Capítulo 03" title="Salsa, Bachata & Reggaeton — o circuito latino">
          <p>Quando a saudade do Brasil bate. Esses são os pontos onde a comunidade latina + brasileira se cruza em Bangkok e Phuket. Inclui o famoso <strong>bar de Havana com entrada secreta por cabine telefônica</strong>.</p>
          <h3 className="font-display text-xl font-semibold mt-8 mb-4" style={{ color: NEON_DEEP }}>Bangkok</h3>
          <LinkGrid items={bangkokLatino} />
          <h3 className="font-display text-xl font-semibold mt-10 mb-4" style={{ color: NEON_DEEP }}>Phuket</h3>
          <LinkGrid items={phuketLatino} />
          <div className="not-prose mt-8 rounded-xl p-5" style={{ background: "rgba(201,162,75,0.08)", border: `1px solid rgba(201,162,75,0.25)` }}>
            <p className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.78)" }}>
              <strong>Código de entrada do Havana Social:</strong> entre no beco da Sukhumvit Soi 11, ache a cabine telefônica vermelha vintage no fim. Tire o fone, disque <strong>H-A-V-A-N-A</strong> (4-2-8-2-6-2) — a parede ao lado abre. Não funciona depois das 2h. Não fale do código para os porteiros — eles fingem não saber.
            </p>
          </div>
        </Section>

        {/* ROOFTOPS */}
        <Section id="cap-rooftops" kicker="Capítulo 04" title="Rooftops escondidos — vista sem fila">
          <p>Os turistões lotam Sky Bar/Lebua. Esses 4 oferecem vista igual ou melhor, sem fila e com drink mais barato.</p>
          <LinkGrid items={[
            { label: "Tichuca Rooftop (Sukhumvit 40)", url: "https://www.google.com/maps/search/Tichuca+Rooftop+Bar+Bangkok", note: "árvore neon, ฿400 coquetel, reserva por IG." },
            { label: "Char Rooftop (Hotel Indigo, Wireless)", url: "https://www.google.com/maps/search/Char+Rooftop+Bangkok", note: "visão do parque Lumpini. Vazio nos dias úteis. Coquetel ฿380." },
            { label: "Cielo Sky Bar (Sky Walk Ekkamai)", url: "https://www.google.com/maps/search/Cielo+Sky+Bar+Bangkok", note: "46º andar, vista do rio. Local, sem turista. Cerveja ฿250." },
            { label: "Octave Rooftop (Marriott Thonglor)", url: "https://www.google.com/maps/search/Octave+Rooftop+Bangkok", note: "3 andares de bar, 49º no topo. Happy hour 17h–19h, coquetel ฿250." },
          ]} />
        </Section>

        {/* AFTER-HOURS */}
        <Section id="cap-after" kicker="Capítulo 05" title="After-hours — onde a noite continua">
          <p>Bangkok e Pattaya têm bares que oficialmente fecham à 2h. Esses ficam abertos até 6–7h, sem fingir.</p>
          <LinkGrid items={afterHours} />
        </Section>

        {/* PHUKET */}
        <Section id="cap-phuket" kicker="Capítulo 06" title="Phuket — praia, pool party e Bangla Road">
          <p>Phuket tem três cenas distintas: Bangla Road (intensidade nível Vegas), beach clubs de luxo em Bang Tao/Surin, e Old Town (sofisticado/latino).</p>
          <LinkGrid items={phuket} />
        </Section>

        {/* PATTAYA */}
        <Section id="cap-pattaya" kicker="Capítulo 07" title="Pattaya — a cidade que nunca para">
          <p>A Walking Street concentra tudo. Pra fugir do óbvio: LK Metro (preços 30% menores, clientela mais local) e Soi Buakhao (pubs sem agogo).</p>
          <LinkGrid items={pattaya} />
        </Section>

        {/* KOH PHANGAN */}
        <Section id="cap-phangan" kicker="Capítulo 08" title="Koh Phangan — Full Moon e o que existe além dela">
          <p>A Full Moon é só a porta de entrada. A ilha tem festa o ano todo — e as melhores não são as anunciadas pros turistas.</p>
          <LinkGrid items={kohPhangan} />
          <div className="not-prose mt-8 rounded-xl p-5 flex gap-3" style={{ background: "rgba(217,70,239,0.07)", border: `1px solid rgba(217,70,239,0.2)` }}>
            <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.78)" }}>
              <strong>Calendário completo:</strong> Full Moon (lua cheia) → Half Moon (1 semana antes/depois) → Black Moon (lua nova) → Jungle Experience (3x por lunar cycle). Acompanhe os IGs <strong>@halfmoonfestival</strong>, <strong>@jungleexperience</strong> e <strong>@blackmoonculture</strong> — eles soltam datas com 10 dias de antecedência.
            </p>
          </div>
        </Section>

        {/* PHI PHI */}
        <Section id="cap-phiphi" kicker="Capítulo 09" title="Phi Phi — festa na areia, fire show garantido">
          <p>Ilha pequena, festa concentrada na praia de Loh Dalum. Tudo a pé, tudo no chão de areia.</p>
          <LinkGrid items={phiPhi} />
        </Section>

        {/* KRABI */}
        <Section id="cap-krabi" kicker="Capítulo 10" title="Krabi — festa com vista de cinema">
          <p>Krabi não tem balada gigante. Tem bares de praia, rooftops pequenos e fire shows com falésias de fundo.</p>
          <LinkGrid items={krabi} />
        </Section>

        {/* CHIANG MAI */}
        <Section id="cap-chiangmai" kicker="Capítulo 11" title="Chiang Mai — a joia do norte">
          <p>Vibe alternativa, jazz, cerveja artesanal e o Zoe in Yellow (cinco bares no mesmo quarteirão). Mais barato que o sul.</p>
          <LinkGrid items={chiangMai} />
        </Section>

        {/* KOH SAMUI */}
        <Section id="cap-samui" kicker="Capítulo 12" title="Koh Samui — ilha tropical com noite eletrizante">
          <p>Chaweng Beach concentra tudo. Festas na areia (Ark Bar) + clubs (Green Mango). Vibe mais família que Phangan.</p>
          <LinkGrid items={kohSamui} />
        </Section>

        {/* KOH LIPE */}
        <Section id="cap-lipe" kicker="Capítulo 13" title="Koh Lipe — as Maldivas tailandesas com festa na areia">
          <p>Ilha minúscula. Toda a noite acontece na Walking Street — 400m de bares de areia com fire show.</p>
          <LinkGrid items={kohLipe} />
        </Section>

        {/* PREÇOS */}
        <Section id="cap-precos" kicker="Capítulo 14" title="Preços reais 2025 — tabela de bolso">
          <ul className="not-prose space-y-2.5 mt-4">
            {[
              ["Cerveja local (Singha/Chang/Leo) bar de rua", "฿80–120"],
              ["Cerveja em club médio", "฿180–250"],
              ["Cerveja em rooftop premium (Sky Bar)", "฿350–500"],
              ["Coquetel autoral em club", "฿280–400"],
              ["Coquetel em rooftop premium", "฿550–950"],
              ["Balde (bucket) em festa de praia", "฿250–400"],
              ["Cover de club em Bangkok (com 1 drink)", "฿300–500"],
              ["Cover Full Moon Party", "฿200"],
              ["Cover Half Moon / Jungle Experience", "฿800–1.500"],
              ["Grab Sukhumvit → Khao San (BKK)", "฿120–180"],
              ["Songthaew Patong → Karon (Phuket)", "฿200 por pessoa"],
              ["Ferry Koh Samui → Koh Phangan ida", "฿300"],
            ].map(([item, price], i) => (
              <Reveal key={i} delay={i * 20}>
                <div className="flex justify-between items-baseline rounded-lg px-4 py-2.5" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <span style={{ color: "rgba(10,10,15,0.78)" }}>{item}</span>
                  <span className="font-display font-semibold tabular-nums" style={{ color: NEON_DEEP }}>{price}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* GOLPES */}
        <Section id="cap-golpes" kicker="Capítulo 15" title="Lista negra — golpes que custam caro">
          <p>Esses são reportados ano após ano em fórum (TripAdvisor, Stickman, /r/Thailand). Memorize o nome e a regra.</p>
          <LinkGrid items={blacklist} />
        </Section>

        {/* SEGURANÇA */}
        <Section id="cap-seguranca" kicker="Capítulo 16" title="Erros vs acertos — código de sobrevivência">
          <div className="not-prose grid sm:grid-cols-2 gap-4 mt-6">
            <Reveal>
              <div className="rounded-xl p-5" style={{ background: "rgba(239,68,68,0.06)", border: `1px solid rgba(239,68,68,0.2)` }}>
                <div className="flex items-center gap-2 mb-3 font-semibold" style={{ color: "#dc2626" }}>
                  <AlertTriangle className="w-4 h-4" /> NÃO faça
                </div>
                <ul className="space-y-2 text-[14.5px]" style={{ color: "rgba(10,10,15,0.75)" }}>
                  <li>• Andar com passaporte original no bolso</li>
                  <li>• Beber água da torneira (mesmo no gelo de drink em barraca)</li>
                  <li>• Aceitar carona de estranho na saída de club</li>
                  <li>• Subir escada de bar com promotor de 'free show'</li>
                  <li>• Negociar balde DEPOIS de aceitar</li>
                  <li>• Mexer no celular caminhando à noite em Bangla/Walking Street</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-xl p-5" style={{ background: "rgba(34,197,94,0.06)", border: `1px solid rgba(34,197,94,0.2)` }}>
                <div className="flex items-center gap-2 mb-3 font-semibold" style={{ color: "#16a34a" }}>
                  <Check className="w-4 h-4" /> FAÇA
                </div>
                <ul className="space-y-2 text-[14.5px]" style={{ color: "rgba(10,10,15,0.75)" }}>
                  <li>• Grab/Bolt em todo deslocamento noturno</li>
                  <li>• Endereço do hotel em tailandês no print do celular</li>
                  <li>• Cash dividido em 2 bolsos + cartão no terceiro</li>
                  <li>• Pedir menu impresso antes do primeiro drink</li>
                  <li>• Live location compartilhada com amigo/família</li>
                  <li>• Beber só de copo aberto/lacrado na sua frente</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* FRASES */}
        <Section id="cap-frases" kicker="Capítulo 17" title="10 frases em tailandês — a noite responde melhor">
          <ul className="not-prose space-y-2.5 mt-4">
            {[
              ["Sa-wat-dii khrap/kha", "olá (homem/mulher)"],
              ["Khop-khun khrap/kha", "obrigado"],
              ["Mai pen rai", "sem problema / tranquilo"],
              ["Tao-rai?", "quanto custa?"],
              ["Phaeng pai", "tá caro"],
              ["Lot dai mai?", "tem desconto?"],
              ["Mai ao khrap/kha", "não quero (recusar lady drink/oferta)"],
              ["Chek bin", "a conta, por favor"],
              ["Nueng beer Singha", "uma Singha"],
              ["Chuay duay! / Tam-ruat!", "socorro! / polícia!"],
            ].map(([th, pt], i) => (
              <Reveal key={i} delay={i * 25}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 rounded-lg px-4 py-3" style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${LINE}` }}>
                  <span className="font-display font-semibold" style={{ color: INK }}>{th}</span>
                  <span className="text-[14.5px]" style={{ color: "rgba(10,10,15,0.65)" }}>{pt}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* FOOTER */}
        <div className="py-16 text-center">
          <p className="text-[13px] tracking-[0.25em] uppercase font-semibold mb-2" style={{ color: GOLD }}>guiastailandia.com.br</p>
          <p className="text-[14px]" style={{ color: "rgba(10,10,15,0.55)" }}>
            Guia atualizado in loco. Preços, endereços e datas conferidos na última temporada.
          </p>
        </div>
      </main>

      <style>{`
        .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .orb { position: absolute; border-radius: 9999px; pointer-events: none; filter: blur(40px); }
        .tracking-editorial { letter-spacing: -0.02em; }
        .ease-premium { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default Festas7733;

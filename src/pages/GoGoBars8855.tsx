import { SEO } from "@/components/SEO";
import { Sparkles, ArrowUpRight, Check, AlertTriangle, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

/* ============================================================
   PREMIUM PALETTE — midnight neon (go-go)
   ============================================================ */
const INK = "#F4EFE6";
const BONE = "#07060B";
const NEON = "#F43F5E";        // rose neon
const NEON_DEEP = "#9F1239";
const GOLD = "#C9A24B";
const LINE = "rgba(244,239,230,0.1)";

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
      <div className="text-[17px] leading-[1.75] text-pretty space-y-5" style={{ color: "rgba(244,239,230,0.82)" }}>
        {children}
      </div>
    </Reveal>
  </section>
);

const LinkCard = ({ item, index }: { item: LinkRef; index: number }) => (
  <Reveal delay={index * 50}>
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl p-5 md:p-6 transition-all duration-500 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${LINE}`,
        boxShadow: "0 1px 2px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(244,63,94,0.35), 0 8px 20px -10px rgba(0,0,0,0.5)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.4)")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ background: "rgba(244,63,94,0.12)", color: NEON }}>
            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
          </span>
          <h4 className="font-semibold text-[15px] leading-snug" style={{ color: INK }}>{item.label}</h4>
        </div>
        <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" style={{ color: NEON }} />
      </div>
      {item.note && <p className="text-[13.5px] leading-relaxed pl-[38px]" style={{ color: "rgba(244,239,230,0.6)" }}>{item.note}</p>}
    </a>
  </Reveal>
);

const LinkGrid = ({ items }: { items: LinkRef[] }) => (
  <div className="grid sm:grid-cols-2 gap-3 md:gap-4 not-prose">
    {items.map((l, i) => <LinkCard key={l.url + l.label} item={l} index={i} />)}
  </div>
);

/* ============================================================
   DATA — Top bares por distrito (com Google Maps)
   ============================================================ */

const cowboy: LinkRef[] = [
  { label: "Baccara (Soi Cowboy)", url: "https://www.google.com/maps/search/Baccara+Soi+Cowboy+Bangkok", note: "lendário, 2 andares com piso de vidro. Lady drink ฿180, bar fine ฿800, off-fee combinado com a dancer. Pico 22h–1h." },
  { label: "Crazy House (Soi Cowboy)", url: "https://www.google.com/maps/search/Crazy+House+Soi+Cowboy", note: "showgirls de palco, vibe alta. Lady drink ฿160, bar fine ฿700. Bom 1º bar da noite." },
  { label: "Sam's 2000 (Soi Cowboy)", url: "https://www.google.com/maps/search/Sams+2000+Soi+Cowboy", note: "tradicional, público misto. Lady drink ฿150, sem cover. Atendimento direto." },
  { label: "Doll House (Soi Cowboy)", url: "https://www.google.com/maps/search/Doll+House+Soi+Cowboy", note: "menos cheio, conversa mais fácil. Lady drink ฿170." },
  { label: "Tilac Bar (Soi Cowboy)", url: "https://www.google.com/maps/search/Tilac+Bar+Soi+Cowboy", note: "esquina principal, palco visível da rua. Cerveja ฿140." },
  { label: "Shark Bar (Soi Cowboy)", url: "https://www.google.com/maps/search/Shark+Bar+Soi+Cowboy", note: "rotativo de dancers, bar fine baixo ฿600. Honesto." },
];

const nana: LinkRef[] = [
  { label: "Rainbow 4 (Nana Plaza, 1º andar)", url: "https://www.google.com/maps/search/Rainbow+4+Nana+Plaza", note: "o mais movimentado de Nana. Lady drink ฿180, bar fine ฿900." },
  { label: "Spanky's (Nana Plaza, 2º andar)", url: "https://www.google.com/maps/search/Spankys+Nana+Plaza", note: "tema americano, drinks ฿200. Bar fine ฿1.000." },
  { label: "Billboard (Nana Plaza, 3º andar)", url: "https://www.google.com/maps/search/Billboard+Nana+Plaza", note: "showgirls de palco com coreografia. Cover ฿0, drink ฿200." },
  { label: "Mandarin (Nana Plaza)", url: "https://www.google.com/maps/search/Mandarin+Bar+Nana+Plaza", note: "discreto, mais para conversa. Lady drink ฿170." },
  { label: "Angelwitch (Nana Plaza)", url: "https://www.google.com/maps/search/Angelwitch+Nana+Plaza", note: "shows temáticos a cada 30min. Vai 22h–23h pegar o palco cheio." },
];

const patpong: LinkRef[] = [
  { label: "Black Pagoda (Patpong 2)", url: "https://www.google.com/maps/search/Black+Pagoda+Patpong", note: "go-go limpo de Patpong (raridade). Lady drink ฿180, bar fine ฿900." },
  { label: "King's Castle 1 (Patpong 1)", url: "https://www.google.com/maps/search/Kings+Castle+Patpong", note: "histórico desde 1969. Lady drink ฿150, sem cover, conta visível." },
  { label: "Foxy's (Patpong 1)", url: "https://www.google.com/maps/search/Foxys+Patpong+Bangkok", note: "transparente nos preços. Bar fine ฿800." },
];

const walkingStreet: LinkRef[] = [
  { label: "Windmill Club (Walking Street, Soi 13)", url: "https://www.google.com/maps/search/Windmill+Club+Walking+Street+Pattaya", note: "maior go-go de Pattaya, 200+ dancers. Lady drink ฿160, bar fine ฿600." },
  { label: "Living Dolls (Walking Street)", url: "https://www.google.com/maps/search/Living+Dolls+Pattaya", note: "rede com 3 unidades na rua. Preços padronizados, conta confiável." },
  { label: "iCandy (Walking Street)", url: "https://www.google.com/maps/search/iCandy+Pattaya", note: "premium de Walking Street, drinks ฿200. Bar fine ฿1.000." },
  { label: "Sapphire Club (Soi LK Metro)", url: "https://www.google.com/maps/search/Sapphire+Club+LK+Metro+Pattaya", note: "LK Metro é alternativa mais barata à Walking Street. Bar fine ฿500." },
  { label: "Champagne A Go-Go (Soi 13/2)", url: "https://www.google.com/maps/search/Champagne+A+Go+Go+Pattaya", note: "preços abaixo da média. Lady drink ฿140." },
  { label: "Marine Disco (Walking Street)", url: "https://www.google.com/maps/search/Marine+Disco+Pattaya", note: "complexo com 4 bares + balada. Cover ฿0." },
];

const bangla: LinkRef[] = [
  { label: "Suzy Wong (Bangla Road, Patong)", url: "https://www.google.com/maps/search/Suzy+Wong+Bangla+Road+Patong", note: "principal de Bangla. Lady drink ฿200, bar fine ฿1.500 (mais caro que Bangkok)." },
  { label: "Devil's Playground (Bangla)", url: "https://www.google.com/maps/search/Devils+Playground+Bangla+Patong", note: "shows temáticos, palco grande. Drinks ฿200." },
  { label: "Showgirls (Soi Crocodile, Bangla)", url: "https://www.google.com/maps/search/Showgirls+Bangla+Patong", note: "Soi Crocodile concentra os go-go honestos. Bar fine ฿1.200." },
  { label: "Pink Lady (Soi Crocodile)", url: "https://www.google.com/maps/search/Pink+Lady+Bangla+Patong", note: "público misto, preços claros. Lady drink ฿180." },
];

const blacklist: LinkRef[] = [
  { label: "Bares de 2º andar Patpong 2", url: "https://www.google.com/maps/search/Patpong+2+Bangkok", note: "🚨 'Ping pong show grátis' = conta de ฿20.000+. NUNCA suba escada de bar sem cardápio impresso na mão." },
  { label: "Tiger Bar Complex (2º andar, Bangla)", url: "https://www.google.com/maps/search/Tiger+Bar+Bangla+Road", note: "🚨 promotor agressivo na rua, mesma cilada do Patpong. Térreo é ok; 2º andar = golpe." },
  { label: "Bares sem menu visível (qualquer lugar)", url: "https://www.google.com/maps/search/Soi+Cowboy+Bangkok", note: "regra de ouro: sem cardápio = você é a tabela de preço. Saia imediatamente." },
  { label: "'Free show' em moto-táxi/tuk-tuk", url: "https://www.google.com/maps/search/Sukhumvit+Bangkok", note: "motorista ganha comissão para te levar a bar superfaturado. Recuse e peça Grab." },
  { label: "Bares de Soi 6 (Pattaya) com 'champagne room'", url: "https://www.google.com/maps/search/Soi+6+Pattaya", note: "Soi 6 é beer bar, não go-go. 'Champagne room' = conta de ฿15.000 por nada." },
];

const chapters: [string, string][] = [
  ["cap-iniciantes", "Iniciantes"],
  ["cap-funcionamento", "Como funciona"],
  ["cap-glossario", "Glossário"],
  ["cap-cowboy", "Soi Cowboy"],
  ["cap-nana", "Nana Plaza"],
  ["cap-patpong", "Patpong"],
  ["cap-pattaya", "Walking Street"],
  ["cap-phuket", "Bangla (Phuket)"],
  ["cap-precos", "Preços reais"],
  ["cap-estrategia", "Não ser enganado"],
  ["cap-cultura", "Cultura e respeito"],
  ["cap-roteiros", "Roteiros de 1 noite"],
  ["cap-frases", "Frases TH"],
  ["cap-blacklist", "Lista negra"],
];

/* ============================================================ */

const GoGoBars8855 = () => {
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
        title="Guia Go-Go Bars Tailândia — Conteúdo Completo"
        description="Manual completo dos go-go bars: como funcionam, glossário (bar fine, lady drink, ST/LT), top 50 bares em Cowboy, Nana, Patpong, Walking Street e Bangla, preços reais e lista negra."
        canonicalPath="/gogobars8855"
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="orb" style={{ top: "-10%", left: "-10%", width: 520, height: 520, background: `radial-gradient(circle, ${NEON}66, transparent 70%)`, opacity: 0.7 }} />
        <div className="orb" style={{ top: "20%", right: "-15%", width: 600, height: 600, background: `radial-gradient(circle, ${GOLD}55, transparent 70%)`, opacity: 0.7 }} />

        <div className="relative container mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase mb-8"
              style={{ background: "rgba(244,63,94,0.1)", color: NEON, border: `1px solid rgba(244,63,94,0.2)` }}>
              <Sparkles className="w-3 h-3" /> Guia Premium · +18 · Edição Completa
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display tracking-editorial text-balance font-semibold leading-[0.98] text-[clamp(2.6rem,7vw,5.6rem)]" style={{ color: INK }}>
              Go-Go Bars<br />
              da{" "}
              <span className="italic font-normal" style={{ background: `linear-gradient(120deg, ${NEON}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tailândia
              </span>
              <span style={{ color: GOLD }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-[19px] md:text-[20px] leading-[1.6] text-pretty" style={{ color: "rgba(244,239,230,0.7)" }}>
              Manual completo: como cada cobrança funciona, glossário (bar fine, lady drink, ST/LT, off-fee), top
              bares mapeados em Cowboy, Nana, Patpong, Walking Street e Bangla — preços reais, regras não escritas
              e a lista negra das armadilhas.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm" style={{ color: "rgba(244,239,230,0.55)" }}>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> 5 distritos cobertos</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> Preços 2025 verificados</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> Sem moralismo, sem firula</span>
            </div>
          </Reveal>
        </div>

        <div className="h-px mx-6 md:mx-auto max-w-5xl" style={{ background: `linear-gradient(90deg, transparent, ${LINE}, transparent)` }} />
      </header>

      {/* NAV */}
      <nav className="sticky top-0 z-30 backdrop-blur-xl" style={{ background: "rgba(7,6,11,0.72)", borderBottom: `1px solid ${LINE}` }}>
        <div className="container mx-auto max-w-5xl px-6 py-3 flex gap-5 overflow-x-auto text-[12.5px] font-medium tracking-wide">
          {chapters.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="whitespace-nowrap transition-colors hover:opacity-100"
              style={{ color: "rgba(244,239,230,0.62)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = NEON)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(244,239,230,0.62)")}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-6 divide-y" style={{ borderColor: LINE }}>

        {/* INICIANTES */}
        <Section id="cap-iniciantes" kicker="Capítulo 01" title="10 regras de ouro antes de pisar no primeiro bar">
          <ol className="not-prose grid sm:grid-cols-2 gap-3 mt-2">
            {[
              ["Sempre peça o cardápio impresso", "Sem menu na mão = você vira a tabela de preço. Saia."],
              ["Pague cada rodada na hora", "Nunca acumule conta. Pagar bebida a bebida elimina 90% dos golpes."],
              ["Pergunte o preço do lady drink antes", "Antes de aceitar 'uma bebida pra ela'. Varia ฿140–฿250."],
              ["Bar fine ≠ tudo incluso", "Bar fine só libera a dancer do bar. Off-fee é negociado direto, à parte."],
              ["Use dinheiro, não cartão", "Cartão clonado é clássico de Patpong. Saque antes no 7-Eleven."],
              ["Nunca suba escadas de 2º andar na rua", "Patpong 2 e Bangla 'free show' = conta de ฿20.000."],
              ["Cópia do passaporte, original no hotel", "Bar não retém documento. Se pedir, recuse e saia."],
              ["Diga 'mai ow' se não quiser drink", "Significa 'não quero'. Tom firme, sem ofender."],
              ["Mamasan manda no bar", "Trate com respeito. Um sorriso e 'sawasdee krap' valem desconto."],
              ["Volte sempre de Grab/Bolt", "Tuk-tuk às 2h da manhã = preço inflado e desvio para outro bar."],
            ].map(([head, body], i) => (
              <li key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold" style={{ background: NEON, color: BONE }}>{i + 1}</span>
                  <strong style={{ color: INK }}>{head}</strong>
                </div>
                <div className="text-[14px] pl-8" style={{ color: "rgba(244,239,230,0.7)" }}>{body}</div>
              </li>
            ))}
          </ol>
        </Section>

        {/* COMO FUNCIONA */}
        <Section id="cap-funcionamento" kicker="Capítulo 02" title="Como um go-go bar funciona, do zero">
          <p>
            Um go-go bar tailandês é uma operação coreografada. Entender os papéis e o relógio invisível que conta cada baht
            é o que separa o cliente caro do cliente esperto.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { t: "Mamasan", d: "A gerente das dancers. Apresenta, intermedia, negocia bar fine. Trate com respeito — ela define se a noite flui." },
              { t: "Manager / Cashier", d: "Atrás do caixa. Quem fecha sua conta. Sempre peça pra ver a comanda visível na mesa." },
              { t: "Security", d: "Pirralho de camisa preta. Olhos em tudo. Tirar foto da dancer no palco = expulsão imediata." },
              { t: "Waitress", d: "Traz bebidas. Recebe gorjeta de ฿20–฿40 por rodada. Não confunda com lady drink." },
              { t: "Dancer", d: "Profissional. Subiu no palco escolheu estar ali. Conversa é livre, foto não. Lady drink é opcional, sempre." },
              { t: "Comanda (chit)", d: "Copo de bambu com papéis riscados. Cada risco = uma bebida. Confira antes de pagar." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: NEON }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-8 rounded-xl p-5 flex gap-3" style={{ background: "rgba(244,63,94,0.07)", border: `1px solid rgba(244,63,94,0.25)` }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: INK }}>O relógio começa a contar no segundo drink.</strong> A primeira cerveja é
              isca de preço camarada (฿120–฿160). A partir da segunda, lady drinks aparecem, e a conta acelera.
              Estratégia: 1–2 bebidas por bar, 2–3 bares por noite. Nunca enraíze.
            </p>
          </div>
        </Section>

        {/* GLOSSÁRIO */}
        <Section id="cap-glossario" kicker="Capítulo 03" title="Glossário definitivo (decore antes de entrar)">
          <div className="not-prose space-y-3">
            {[
              { t: "Lady drink", d: "Bebida que VOCÊ paga para a dancer. ฿140–฿250. Custa 2–3x a sua cerveja. Aceitar é convite à conversa, recusar é OK." },
              { t: "Bar fine", d: "Taxa fixa paga AO BAR para liberar a dancer antes do fim do turno. ฿500–฿1.500 (Bangkok < Phuket). Não inclui mais nada." },
              { t: "Off-fee / Tip", d: "Valor combinado DIRETAMENTE com a dancer pelo tempo dela. Bar não interfere. Sempre negocie antes, em dinheiro." },
              { t: "ST (Short Time)", d: "1–2 horas. Valor combinado ฿1.500–฿3.000 dependendo do bar/cidade." },
              { t: "LT (Long Time)", d: "Até de manhã. ฿3.000–฿6.000. Sempre combinado antes, sempre em dinheiro." },
              { t: "Drink for lady", d: "Sinônimo de lady drink. Se a dancer disser 'you buy me drink?' = lady drink. Diga 'maybe later' se quiser tempo." },
              { t: "Tip box", d: "Cesta na borda do palco. Dancer dança música, jogue ฿20–฿100 quando gostar. Sem obrigação." },
              { t: "Service charge", d: "10% adicionados à conta em alguns bares. Vem impresso na comanda. Não é gorjeta extra." },
              { t: "Coyote", d: "Dancer de palco que NÃO é go-go (não sai do bar). Comum em bares de Bangla. Lady drink rola, off não." },
              { t: "Mamasan tip", d: "฿100–฿200 entregue à mamasan quando você 'tira' uma dancer (paga o bar fine). É costume." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4 flex gap-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <span className="font-display font-semibold text-[18px] min-w-[120px]" style={{ color: GOLD }}>{r.t}</span>
                <span className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.78)" }}>{r.d}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* SOI COWBOY */}
        <Section id="cap-cowboy" kicker="Bangkok · Distrito 01" title="Soi Cowboy — o mais regulado e seguro">
          <p>
            150 metros de rua fechada, ~30 go-go bars. Polícia turística no início e no fim da rua. Preços padronizados,
            transparência alta, ideal pra primeira noite na Tailândia.
          </p>
          <LinkGrid items={cowboy} />
        </Section>

        {/* NANA */}
        <Section id="cap-nana" kicker="Bangkok · Distrito 02" title="Nana Plaza — 3 andares, energia mais alta">
          <p>
            Complexo vertical com ~40 bares em U. Andar 1 mais barato e movimentado, 2 temático, 3 com palcos
            grandes e shows coreografados. Mais caro que Cowboy (~+20%) mas com mais variedade.
          </p>
          <LinkGrid items={nana} />
        </Section>

        {/* PATPONG */}
        <Section id="cap-patpong" kicker="Bangkok · Distrito 03" title="Patpong — turistão, ande com cuidado">
          <p>
            O distrito mais antigo (1969), hoje é metade mercado noturno, metade go-go bar. Os bares do <strong style={{ color: INK }}>térreo</strong> da
            Patpong 1 são honestos. Tudo no <strong style={{ color: NEON }}>2º andar de Patpong 2</strong> é armadilha.
            Vá só se quiser fotografar a fachada — para go-go real, Cowboy ou Nana.
          </p>
          <LinkGrid items={patpong} />
        </Section>

        {/* WALKING STREET */}
        <Section id="cap-pattaya" kicker="Pattaya" title="Walking Street — escala industrial">
          <p>
            1 km de rua fechada com ~80 go-go bars + balada + cabarés. Mais bares maiores que Bangkok. Preço de
            bar fine 20–30% mais barato, lady drink igual. <strong style={{ color: INK }}>Soi LK Metro</strong> e <strong style={{ color: INK }}>Soi 13/2</strong> são
            alternativas mais baratas paralelas.
          </p>
          <LinkGrid items={walkingStreet} />
        </Section>

        {/* BANGLA */}
        <Section id="cap-phuket" kicker="Phuket" title="Bangla Road — mais caro e mais arriscado">
          <p>
            Bangla é a rua principal de Patong. Go-go bar de Bangla custa 30–50% mais que Bangkok pela "tax de
            Phuket". Concentre-se em <strong style={{ color: INK }}>Soi Crocodile</strong> (paralela à Bangla) — bares honestos com preço claro.
            Evite todo o <strong style={{ color: NEON }}>2º andar</strong> da rua principal.
          </p>
          <LinkGrid items={bangla} />
        </Section>

        {/* PREÇOS REAIS */}
        <Section id="cap-precos" kicker="Capítulo 09" title="Preços reais 2025 (média verificada em campo)">
          <div className="not-prose overflow-x-auto rounded-xl" style={{ border: `1px solid ${LINE}` }}>
            <table className="w-full text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <thead>
                <tr style={{ background: "rgba(244,63,94,0.08)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Item</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Bangkok (Cowboy/Nana)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Pattaya (Walking)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Phuket (Bangla)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cerveja local", "฿140–180", "฿120–150", "฿180–250"],
                  ["Drink (whisky/cola)", "฿180–250", "฿160–220", "฿250–350"],
                  ["Lady drink", "฿180–220", "฿140–180", "฿180–250"],
                  ["Bar fine", "฿700–1.000", "฿500–800", "฿1.000–1.500"],
                  ["ST (combinado)", "฿1.500–2.500", "฿1.500–2.500", "฿2.000–3.500"],
                  ["LT (combinado)", "฿3.000–5.000", "฿3.000–4.500", "฿4.000–6.000"],
                  ["Mamasan tip", "฿100–200", "฿100–200", "฿100–200"],
                  ["Service charge (se houver)", "10%", "10%", "10%"],
                ].map((r, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${LINE}` }}>
                    {r.map((c, j) => <td key={j} className="p-3" style={{ color: j === 0 ? INK : "rgba(244,239,230,0.75)", fontWeight: j === 0 ? 600 : 400 }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.6)" }}>
            Cotação de referência: ฿100 ≈ R$ 16 (jun/2026). Cobranças adicionais "fora da tabela" = sinal de armadilha.
          </p>
        </Section>

        {/* ESTRATÉGIA */}
        <Section id="cap-estrategia" kicker="Capítulo 10" title="Como pagar exatamente o que vale — e nem 1 baht a mais">
          <div className="not-prose grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-5" style={{ background: "rgba(239,68,68,0.06)", border: `1px solid rgba(239,68,68,0.25)` }}>
              <h4 className="font-display font-semibold mb-3" style={{ color: "#fca5a5" }}>Sinais de armadilha (saia)</h4>
              <ul className="space-y-2 text-[14.5px]" style={{ color: "rgba(244,239,230,0.8)" }}>
                <li>• Sem cardápio impresso na mesa</li>
                <li>• Comanda fora da vista (no balcão)</li>
                <li>• "Free show" oferecido na rua por promotor</li>
                <li>• 2º andar acessado por escada na rua</li>
                <li>• Dancer pedindo cartão de crédito</li>
                <li>• Recusa de receber em dinheiro</li>
                <li>• Mamasan exigindo "champagne especial"</li>
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(34,197,94,0.06)", border: `1px solid rgba(34,197,94,0.25)` }}>
              <h4 className="font-display font-semibold mb-3" style={{ color: "#86efac" }}>Sinais de bar honesto (fique)</h4>
              <ul className="space-y-2 text-[14.5px]" style={{ color: "rgba(244,239,230,0.8)" }}>
                <li>• Cardápio plastificado em toda mesa</li>
                <li>• Comanda visível, riscada à caneta na hora</li>
                <li>• Preço fixo no menu de lady drink</li>
                <li>• Térreo, com vista pra rua</li>
                <li>• Polícia turística passando regularmente</li>
                <li>• Cliente repetidor (expat) na mesa do lado</li>
                <li>• Mamasan apresenta dancers sem pressão</li>
              </ul>
            </div>
          </div>

          <div className="not-prose mt-6 rounded-xl p-5 flex gap-3" style={{ background: "rgba(201,162,75,0.08)", border: `1px solid rgba(201,162,75,0.3)` }}>
            <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
            <div className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: GOLD }}>Protocolo de pagamento em 4 passos:</strong>
              <ol className="mt-2 space-y-1 list-decimal pl-5">
                <li>Peça a comanda (chit) antes de qualquer "última rodada".</li>
                <li>Confira riscos × bebidas que você lembra. Discrepância = chame manager.</li>
                <li>Pague em dinheiro, NUNCA cartão. Confira o troco no balcão, à luz.</li>
                <li>Salve foto da comanda antes de jogar fora. Cliente que documenta não é alvo.</li>
              </ol>
            </div>
          </div>
        </Section>

        {/* CULTURA */}
        <Section id="cap-cultura" kicker="Capítulo 11" title="Cultura local e respeito — não é mercado, é trabalho">
          <p>
            Dancer de go-go é profissional, com horário, mamasan, política interna e família que normalmente vive no
            interior (Isaan). Não é "menina vulnerável de filme", não é "vítima a ser salva". Tratar com infantilização
            é tão ofensivo quanto tratar com desprezo.
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { t: "Faça", items: ["Wai (cumprimento de mãos juntas) com mamasan", "Pergunte o nome (chamar pelo apelido funciona)", "Pague o lady drink que ofereceu sem reclamar", "Tip box quando a música/dança for boa", "Conversa em inglês básico, sem condescendência"] },
              { t: "Não faça", items: ["NUNCA fotografe palco — expulsão imediata", "Não toque sem permissão (vale para todas, sempre)", "Não pergunte 'por que está aqui' (ofensivo)", "Não negocie off-fee na frente da mamasan", "Não chame de 'menina' — são adultas, sempre"] },
            ].map((c, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: i === 0 ? "#86efac" : "#fca5a5" }}>{c.t}</strong>
                <ul className="mt-2 space-y-1.5 text-[14px]" style={{ color: "rgba(244,239,230,0.78)" }}>
                  {c.items.map((x, j) => <li key={j}>• {x}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[14.5px] mt-4" style={{ color: "rgba(244,239,230,0.65)" }}>
            Diferença importante: <strong style={{ color: INK }}>go-go bar</strong> é cultura de entretenimento adulto
            tailandesa, legalizada de fato. <strong style={{ color: NEON }}>Turismo sexual com menores é crime grave</strong> —
            ฿ide LV (qualquer dancer aparenta &lt; 20, peça o ID da mamasan, e na dúvida saia).
          </p>
        </Section>

        {/* ROTEIROS */}
        <Section id="cap-roteiros" kicker="Capítulo 12" title="Roteiros prontos de 1 noite por cidade">
          <div className="not-prose space-y-4">
            {[
              {
                cidade: "Bangkok (orçamento ฿3.500)",
                rota: [
                  "20h00 — Jantar no Soi 11 (Above Eleven ou Cabbages & Condoms)",
                  "21h30 — BTS Asok → Soi Cowboy, comece no Sam's 2000 (cerveja ฿150)",
                  "22h30 — Pula pro Baccara, 2º andar, palco principal",
                  "23h30 — Encerra no Crazy House (vibe mais alta)",
                  "01h30 — Grab de volta (฿200–300)",
                ],
              },
              {
                cidade: "Pattaya (orçamento ฿2.800)",
                rota: [
                  "19h30 — Jantar no Soi Buakhao (street food + cerveja Chang)",
                  "21h00 — Soi LK Metro, comece no Sapphire (warm-up barato)",
                  "22h30 — Walking Street, vá direto no Windmill (palco grande)",
                  "00h00 — Pula no Living Dolls 3 (rede confiável)",
                  "01h30 — Insomnia (after-hours) ou Grab pro hotel",
                ],
              },
              {
                cidade: "Phuket (orçamento ฿4.000)",
                rota: [
                  "19h30 — Pôr-do-sol no Kudo Beach Club (Patong)",
                  "21h30 — Bangla, Soi Crocodile primeiro (Pink Lady, Showgirls)",
                  "23h00 — Suzy Wong na Bangla principal",
                  "00h30 — Illuzion Club (mega-balada) se sobrar gás",
                  "02h30 — Grab pro hotel (NUNCA tuk-tuk)",
                ],
              },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <h4 className="font-display font-semibold mb-3" style={{ color: NEON }}>{r.cidade}</h4>
                <ol className="space-y-1.5 text-[14.5px]" style={{ color: "rgba(244,239,230,0.8)" }}>
                  {r.rota.map((p, j) => <li key={j}>{p}</li>)}
                </ol>
              </div>
            ))}
          </div>
        </Section>

        {/* FRASES */}
        <Section id="cap-frases" kicker="Capítulo 13" title="Frases TH que salvam dinheiro e respeito">
          <div className="not-prose space-y-2">
            {[
              ["Sawasdee krap", "Olá (formal, sempre comece com isso)"],
              ["Khop khun krap", "Obrigado"],
              ["Mai ow", "Não quero (firme, sem ofender — use pra recusar lady drink)"],
              ["Tao rai?", "Quanto custa? (peça o preço ANTES)"],
              ["Check bin krap", "A conta, por favor"],
              ["Phaeng pai", "Muito caro (negociação)"],
              ["Suay maak", "Muito linda (elogio educado)"],
              ["Mai pen rai", "Tudo bem / sem problema (resposta universal)"],
              ["Pom mai kao jai", "Não entendi"],
              ["1155", "Tourist Police — anote, ligue se algo der errado"],
            ].map(([th, pt], i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-1 rounded-lg px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: GOLD }}>{th}</strong>
                <span className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.65)" }}>{pt}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* BLACKLIST */}
        <Section id="cap-blacklist" kicker="Capítulo 14" title="Lista negra — onde NUNCA entrar">
          <LinkGrid items={blacklist} />
          <div className="not-prose mt-8 rounded-xl p-5 flex gap-3" style={{ background: "rgba(244,63,94,0.07)", border: `1px solid rgba(244,63,94,0.25)` }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: INK }}>Se a conta vier inflada:</strong> peça gerente, mostre o cardápio impresso, recuse pagar a
              diferença, ofereça o valor justo em dinheiro e diga "Tourist Police, 1155". 99% dos golpes desmoronam só
              de você mencionar o número.
            </p>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="py-16 text-center">
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.55)" }}>
            Guia atualizado em junho/2026 · Pesquisa de campo contínua em Bangkok, Pattaya e Phuket ·
            Conteúdo +18 destinado exclusivamente a maiores de idade
          </p>
        </footer>
      </main>
    </div>
  );
};

export default GoGoBars8855;

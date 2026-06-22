import { SEO } from "@/components/SEO";
import { Sparkles, ArrowUpRight, Check, AlertTriangle, ShieldCheck, PawPrint } from "lucide-react";
import { useEffect, useRef } from "react";

/* ============================================================
   PREMIUM PALETTE — midnight teal/sky (pets)
   ============================================================ */
const INK = "#F4EFE6";
const BONE = "#06090E";
const NEON = "#2DD4BF";       // teal neon
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
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(45,212,191,0.35), 0 8px 20px -10px rgba(0,0,0,0.5)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.4)")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ background: "rgba(45,212,191,0.12)", color: NEON }}>
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
   DATA
   ============================================================ */

const vetsBangkok: LinkRef[] = [
  { label: "Thonglor Pet Hospital (24h)", url: "https://www.google.com/maps/search/Thonglor+Pet+Hospital+Bangkok", note: "principal hospital pet de Bangkok. UTI, cirurgia, oncologia. Inglês fluente. Consulta ฿800–1.500." },
  { label: "iPet Hospital (Ekkamai, 24h)", url: "https://www.google.com/maps/search/iPet+Hospital+Bangkok", note: "alternativa ao Thonglor, mais barato (consulta ฿600). Boa pra exames de rotina e emergência leve." },
  { label: "Animal Space Hospital (Phra Khanong, 24h)", url: "https://www.google.com/maps/search/Animal+Space+Hospital+Bangkok", note: "UTI 24h, especialidade em cardiologia. Aceita cartão internacional." },
  { label: "Kasetsart University Vet Hospital", url: "https://www.google.com/maps/search/Kasetsart+Veterinary+Teaching+Hospital", note: "universitário público — preço 60% menor, mas fila grande. Pra casos complexos vale a espera." },
];

const vetsOutros: LinkRef[] = [
  { label: "iVet Chiang Mai (24h)", url: "https://www.google.com/maps/search/iVet+Animal+Hospital+Chiang+Mai", note: "melhor de Chiang Mai. Emergência sempre atendida. Consulta ฿500." },
  { label: "Small Animal Hospital CMU", url: "https://www.google.com/maps/search/Chiang+Mai+University+Veterinary+Hospital", note: "universitário CMU. Cirurgia de qualidade por ฿2.000–5.000." },
  { label: "Bangkok Phuket Animal Hospital (Phuket Town)", url: "https://www.google.com/maps/search/Bangkok+Phuket+Animal+Hospital", note: "referência em Phuket. 24h, UTI, internação. Inglês fluente." },
  { label: "iVet Phuket (Chalong)", url: "https://www.google.com/maps/search/iVet+Hospital+Phuket", note: "filial nova, próxima a Rawai/Chalong. Preço médio ฿600 consulta." },
  { label: "Animal Hospital Koh Samui (Bophut)", url: "https://www.google.com/maps/search/Animal+Hospital+Koh+Samui+Bophut", note: "único 24h da ilha. Sempre confirme por WhatsApp +66 77 962 555." },
  { label: "Krabi Animal Hospital (Ao Nang)", url: "https://www.google.com/maps/search/Krabi+Animal+Hospital", note: "atendimento limitado à noite — ligue antes. Casos graves: encaminhar pra Phuket." },
];

const hoteisBKK: LinkRef[] = [
  { label: "Akyra Manor Chiang Mai (pet-friendly real)", url: "https://www.google.com/maps/search/Akyra+Manor+Chiang+Mai", note: "aceita pets até 15kg, sem taxa. Quartos térreos com saída pro jardim. Reserve por e-mail confirmando porte." },
  { label: "Mandarin Oriental Bangkok (cães pequenos)", url: "https://www.google.com/maps/search/Mandarin+Oriental+Bangkok", note: "aceita cães <8kg, taxa ฿1.500/noite, cama + tigela inclusas. Pedir 'pet amenity' na reserva." },
  { label: "137 Pillars Suites Bangkok (Sukhumvit)", url: "https://www.google.com/maps/search/137+Pillars+Suites+Bangkok", note: "suítes amplas, aceita até 10kg sem taxa. Próximo de Thonglor Pet Hospital." },
  { label: "U Sathorn Bangkok (jardim privado)", url: "https://www.google.com/maps/search/U+Sathorn+Bangkok", note: "jardim interno enorme. Taxa ฿2.000/estadia, kit pet incluso." },
];

const hoteisIlhas: LinkRef[] = [
  { label: "The Slate Phuket (Nai Yang)", url: "https://www.google.com/maps/search/The+Slate+Phuket", note: "vilas com jardim privado. Aceita até 20kg, taxa ฿2.500/estadia. Nai Yang Beach é pet-friendly." },
  { label: "Six Senses Yao Noi (cães pequenos)", url: "https://www.google.com/maps/search/Six+Senses+Yao+Noi", note: "vilas isoladas, política pet sob consulta. Pedir confirmação por escrito antes do voo doméstico." },
  { label: "Anantara Bophut Koh Samui", url: "https://www.google.com/maps/search/Anantara+Bophut+Koh+Samui", note: "aceita até 12kg, taxa ฿1.800/noite. Praia privativa de Bophut permite pet com coleira." },
  { label: "Pimalai Resort Koh Lanta", url: "https://www.google.com/maps/search/Pimalai+Resort+Koh+Lanta", note: "Koh Lanta é a ilha mais pet-friendly da Tailândia. Pimalai aceita até 15kg sem taxa." },
];

const praias: LinkRef[] = [
  { label: "Nai Yang Beach (Phuket norte)", url: "https://www.google.com/maps/search/Nai+Yang+Beach+Phuket", note: "praia de parque nacional, mas autoridades toleram pets com coleira fora do horário de pico (antes 9h, depois 17h)." },
  { label: "Mai Khao Beach (Phuket norte)", url: "https://www.google.com/maps/search/Mai+Khao+Beach+Phuket", note: "praia mais longa de Phuket, quase deserta. Pet livre ao norte da pista do aeroporto." },
  { label: "Bang Tao Beach (trecho norte, Phuket)", url: "https://www.google.com/maps/search/Bang+Tao+Beach+Phuket", note: "trecho perto do Laguna é tolerado. Evite o sul (Catch Beach Club proíbe)." },
  { label: "Klong Dao Beach (Koh Lanta)", url: "https://www.google.com/maps/search/Klong+Dao+Beach+Koh+Lanta", note: "praia pet-friendly oficial. Cães correndo soltos são parte da paisagem local." },
  { label: "Long Beach (Koh Lanta)", url: "https://www.google.com/maps/search/Long+Beach+Koh+Lanta", note: "outra opção em Lanta. Restaurantes da praia aceitam pet na mesa." },
  { label: "Bophut Beach (Koh Samui)", url: "https://www.google.com/maps/search/Bophut+Beach+Koh+Samui", note: "Fisherman's Village tolera pets com coleira. Bares da areia aceitam." },
  { label: "Lipa Noi Beach (Koh Samui oeste)", url: "https://www.google.com/maps/search/Lipa+Noi+Beach+Koh+Samui", note: "praia tranquila, pet livre. Pôr-do-sol perfeito." },
  { label: "Haad Yao (Koh Phangan)", url: "https://www.google.com/maps/search/Haad+Yao+Koh+Phangan", note: "pet aceito fora do horário de Full Moon. Evite Haad Rin." },
  { label: "Klong Khong Beach (Koh Lanta)", url: "https://www.google.com/maps/search/Klong+Khong+Beach+Koh+Lanta", note: "bares reggae, pet integrado à cena. Ideal pra ficar a tarde toda." },
  { label: "Naithon Beach (Phuket)", url: "https://www.google.com/maps/search/Naithon+Beach+Phuket", note: "praia entre Bang Tao e Nai Yang, menos turistas, tolerância alta." },
  { label: "Khao Lak — Bang Niang Beach", url: "https://www.google.com/maps/search/Bang+Niang+Beach+Khao+Lak", note: "Khao Lak inteiro é pet-friendly. Bang Niang tem restaurantes que aceitam pet." },
  { label: "Hua Hin — Suan Son Pradiphat", url: "https://www.google.com/maps/search/Suan+Son+Pradiphat+Hua+Hin", note: "praia oficialmente pet-friendly, com chuveiros pra cachorro. Única do tipo na Tailândia." },
];

const parquesCafes: LinkRef[] = [
  { label: "Lumphini Park (Bangkok)", url: "https://www.google.com/maps/search/Lumphini+Park+Bangkok", note: "permite pet com coleira. Domingo de manhã = encontrão informal de tutores brasileiros e expats." },
  { label: "Benjasiri Park (Sukhumvit 24)", url: "https://www.google.com/maps/search/Benjasiri+Park+Bangkok", note: "menor que Lumphini, mais calmo. Pet livre na grama central." },
  { label: "Rod Fai Park (Chatuchak)", url: "https://www.google.com/maps/search/Rod+Fai+Park+Bangkok", note: "área pet oficial cercada. Cães correm soltos. Fim de tarde ฿0 entrada." },
  { label: "Hush Puppy Café (Sukhumvit 39)", url: "https://www.google.com/maps/search/Hush+Puppy+Cafe+Bangkok", note: "café com 20+ cães residentes pra brincar. Leve o seu, taxa ฿250 inclui bebida." },
  { label: "Catmosphere Cat Café (Chiang Mai)", url: "https://www.google.com/maps/search/Catmosphere+Cat+Cafe+Chiang+Mai", note: "para tutores de gato curiosos. Tema espacial, gatos residentes." },
  { label: "Nimman Dog Café (Chiang Mai)", url: "https://www.google.com/maps/search/Nimman+Dog+Cafe+Chiang+Mai", note: "leve seu cachorro, área cercada interna. Comida humana + petisco pet no menu." },
];

const blacklist: LinkRef[] = [
  { label: "Praia de Patong (multa ฿20.000)", url: "https://www.google.com/maps/search/Patong+Beach+Phuket", note: "🚨 fiscalização ativa. Cães proibidos 24h, com multa. Vá pra Nai Yang ou Mai Khao." },
  { label: "Parques Nacionais marinhos (Phi Phi, Similan)", url: "https://www.google.com/maps/search/Phi+Phi+National+Park", note: "🚨 pet proibido em qualquer parque nacional marinho, sem exceção. Day trip nessas ilhas = deixe pet no hotel ou pet sitter." },
  { label: "Templos (Wat Pho, Wat Arun, Doi Suthep)", url: "https://www.google.com/maps/search/Wat+Pho+Bangkok", note: "🚨 nenhum templo aceita pet. Mesmo no colo. Respeite — é ofensa cultural grave." },
  { label: "Catch Beach Club / Café del Mar (Phuket)", url: "https://www.google.com/maps/search/Catch+Beach+Club+Phuket", note: "🚨 beach clubs premium proíbem pets. Confirme antes de pagar day pass." },
  { label: "BTS Skytrain / MRT Bangkok", url: "https://www.google.com/maps/search/BTS+Skytrain+Bangkok", note: "🚨 pets proibidos no metrô/BTS, mesmo em bolsa. Use Grab Pet (categoria dedicada no app)." },
];

const chapters: [string, string][] = [
  ["cap-iniciantes", "Antes de tudo"],
  ["cap-cronograma", "Cronograma 6 meses"],
  ["cap-documentos", "Documentação"],
  ["cap-despachantes", "Despachantes"],
  ["cap-kit", "Kit de viagem"],
  ["cap-voos", "Voos pet-friendly"],
  ["cap-chegada", "Chegada em BKK"],
  ["cap-hoteis-bkk", "Hotéis Bangkok/CM"],
  ["cap-hoteis-ilhas", "Hotéis nas ilhas"],
  ["cap-vets-bkk", "Vets Bangkok"],
  ["cap-vets-outros", "Vets outras cidades"],
  ["cap-praias", "Praias liberadas"],
  ["cap-parques", "Parques & cafés"],
  ["cap-trilhas", "Hiking pet-friendly"],
  ["cap-gato", "Específico p/ gato"],
  ["cap-blacklist", "Lista negra"],
  ["cap-emergencia", "Emergências"],
  ["cap-retorno", "Retorno ao Brasil"],
  ["cap-custos", "Custos reais"],
  ["cap-sitters", "Pet sitters"],
];

/* ============================================================ */

const Pets9922 = () => {
  return (
    <div
      className="min-h-screen antialiased selection:bg-teal-200/60 selection:text-teal-950"
      style={{
        background: BONE,
        color: INK,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
      }}
    >
      <SEO
        title="Guia Tailândia para Pets — Conteúdo Completo"
        description="Guia completo de viagem com pet: cronograma de 6 meses, documentação CVI/FAVN, voos, hotéis verificados, veterinários 24h, praias liberadas e retorno ao Brasil."
        canonicalPath="/pets9922"
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="orb" style={{ top: "-10%", left: "-10%", width: 520, height: 520, background: `radial-gradient(circle, ${NEON}55, transparent 70%)`, opacity: 0.6 }} />
        <div className="orb" style={{ top: "20%", right: "-15%", width: 600, height: 600, background: `radial-gradient(circle, ${GOLD}55, transparent 70%)`, opacity: 0.6 }} />

        <div className="relative container mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase mb-8"
              style={{ background: "rgba(45,212,191,0.1)", color: NEON, border: `1px solid rgba(45,212,191,0.2)` }}>
              <PawPrint className="w-3 h-3" /> Guia Premium · Edição Completa
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display tracking-editorial text-balance font-semibold leading-[0.98] text-[clamp(2.6rem,7vw,5.6rem)]" style={{ color: INK }}>
              Seu pet na<br />
              <span className="italic font-normal" style={{ background: `linear-gradient(120deg, ${NEON}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Tailândia
              </span>
              <span style={{ color: GOLD }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-[19px] md:text-[20px] leading-[1.6] text-pretty" style={{ color: "rgba(244,239,230,0.7)" }}>
              Cronograma de 6 meses, documentação dia a dia, voos pet-friendly, hotéis e vets verificados,
              12 praias liberadas, parques e cafés pet, lista negra de lugares que multam — tudo o que
              precisa pra levar cão ou gato sem quarentena e sem perrengue.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm" style={{ color: "rgba(244,239,230,0.55)" }}>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> 6 meses de cronograma</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> 10+ vets 24h mapeados</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> Cães e gatos</span>
            </div>
          </Reveal>
        </div>

        <div className="h-px mx-6 md:mx-auto max-w-5xl" style={{ background: `linear-gradient(90deg, transparent, ${LINE}, transparent)` }} />
      </header>

      {/* NAV */}
      <nav className="sticky top-0 z-30 backdrop-blur-xl" style={{ background: "rgba(6,9,14,0.72)", borderBottom: `1px solid ${LINE}` }}>
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
        <Section id="cap-iniciantes" kicker="Capítulo 01" title="10 verdades que ninguém te conta antes">
          <ol className="not-prose grid sm:grid-cols-2 gap-3 mt-2">
            {[
              ["Comece com 6 meses de antecedência", "A sorologia FAVN sozinha consome 90 dias. Sem isso = quarentena."],
              ["Microchip ANTES da vacina antirrábica", "Se a ordem inverter, o chip não conta — refaça tudo."],
              ["Voo direto não existe BR→TH", "Sempre escala. Doha, Frankfurt e Amsterdã são as melhores conexões pet."],
              ["Cão >8kg vai no porão (cargo)", "Cabine só pra cães e gatos <8kg com caixa. Acima disso, cargo climatizado."],
              ["Tailândia NÃO faz quarentena", "Se documentação 100%, pet sai do aeroporto com você. Se faltar 1 papel = até 30 dias."],
              ["Hotel 'pet-friendly' tem 3 níveis", "Aceita / aceita com taxa / aceita só fora de temporada. Confirme por escrito."],
              ["Templo é proibido sem exceção", "Nem no colo, nem em bolsa. Respeite — é ofensa cultural grave."],
              ["BTS e MRT proíbem pet", "Use Grab Pet (categoria no app). ฿80–150 a corrida."],
              ["Calor é o maior risco", "Cão braquicéfalo (pug, bulldog) sofre muito. Passeie 6h–9h e depois das 18h."],
              ["Comida pet humana é cara", "Royal Canin custa 2x Brasil. Leve 30 dias na mala, depois compre Smartheart (local, boa qualidade)."],
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

        {/* CRONOGRAMA */}
        <Section id="cap-cronograma" kicker="Capítulo 02" title="Cronograma exato de 6 meses (dia a dia)">
          <p>
            Esse é o calendário que precisa ser seguido na ordem. Pular uma etapa = recomeçar do zero. Imprima e cole na geladeira.
          </p>

          <div className="not-prose space-y-3 mt-4">
            {[
              { dia: "D-180 (6 meses antes)", t: "Microchip ISO 11784/11785", d: "Implante no veterinário. Anote número e foto do laudo. Esse é o RG do seu pet pra Tailândia." },
              { dia: "D-179", t: "Vacina antirrábica (após chip)", d: "OBRIGATÓRIO: vacina aplicada DEPOIS do chip. Se aplicar antes, não conta. Reforço a cada ano." },
              { dia: "D-150", t: "Coleta de sangue FAVN", d: "Sorologia anti-rábica em laboratório credenciado. Brasil: Lab. Tecsa (MG) ou IPEC (RJ). Resultado em 60 dias." },
              { dia: "D-90", t: "Resultado FAVN (≥0,5 UI/ml)", d: "Aprovado? Conte 3 meses até a viagem (regra Tailândia). Reprovado? Vacine de novo e refaça FAVN." },
              { dia: "D-60", t: "Autorização DLD Tailândia", d: "Submeta no portal e-movement.dld.go.th: passaporte, microchip, FAVN, vacinas. Resposta em 7 dias úteis." },
              { dia: "D-30", t: "Reserva voo + caixa IATA", d: "Compre passagem do pet junto com a sua (não depois). Caixa IATA-compliant: 10cm acima da cabeça quando em pé." },
              { dia: "D-15", t: "Checkup veterinário + parasitas", d: "Vermífugo (febendazol + praziquantel) 24–120h antes do embarque. Antipulgas tópico." },
              { dia: "D-7", t: "CVI MAPA", d: "Atestado sanitário internacional, válido por 10 dias. Tire em unidade VIGIAGRO do MAPA no seu aeroporto." },
              { dia: "D-2", t: "Health Certificate veterinário", d: "Atestado adicional do vet falando que o pet está apto pra voar. Algumas cias exigem." },
              { dia: "D-0 (embarque)", t: "Chegue 4h antes", d: "Cargo pet exige despacho separado. Banho + xixi imediatamente antes da caixa. Sem sedativo (proibido pela IATA)." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <strong className="font-display text-[16px]" style={{ color: NEON }}>{r.t}</strong>
                  <span className="text-[12px] font-mono tracking-wider" style={{ color: GOLD }}>{r.dia}</span>
                </div>
                <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.78)" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* DOCUMENTOS */}
        <Section id="cap-documentos" kicker="Capítulo 03" title="Documentação completa, sem furo">
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            {[
              { t: "Microchip ISO 11784/11785", d: "Único formato aceito. Anote o número, peça etiqueta adesiva pra colar nos documentos." },
              { t: "Vacina antirrábica (Defensor / Nobivac)", d: "Aplicada DEPOIS do chip, reforço anual. Anotar lote, data, validade no passaporte do pet." },
              { t: "Sorologia FAVN ≥ 0,5 UI/ml", d: "Lab credenciado OIE: Tecsa (BH) ou IPEC (RJ). Coleta vet local + envio. ฿2.500–3.500." },
              { t: "Autorização DLD Tailândia", d: "e-movement.dld.go.th. Gratuito. Resposta em 7 dias úteis. Imprima 2 cópias." },
              { t: "CVI MAPA (BR)", d: "Atestado sanitário internacional. Válido 10 dias. Posto VIGIAGRO no aeroporto, gratuito." },
              { t: "Health Certificate vet", d: "Atestado de aptidão pra voo, 48h antes. Algumas cias (Qatar) exigem em formulário próprio." },
              { t: "Caixa IATA-compliant", d: "Plástica rígida, ventilação 4 lados, tigelas presas, etiqueta 'LIVE ANIMAL'. ฿400–1.500 dependendo do tamanho." },
              { t: "Passaporte do pet (caderneta)", d: "Não é obrigatório, mas todo vet confiável faz. Reúne chip + vacinas + sorologia num só documento." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: GOLD }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-8 rounded-xl p-5 flex gap-3" style={{ background: "rgba(45,212,191,0.07)", border: `1px solid rgba(45,212,191,0.25)` }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: INK }}>Ordem é tudo:</strong> chip → vacina → FAVN. Se inverter qualquer passo,
              a Tailândia rejeita e seu pet vai pra quarentena (até 30 dias, ฿1.500/dia). Sem exceções, sem "jeitinho".
            </p>
          </div>
        </Section>

        {/* VOOS */}
        <Section id="cap-voos" kicker="Capítulo 04" title="Voos pet-friendly comparados">
          <div className="not-prose overflow-x-auto rounded-xl" style={{ border: `1px solid ${LINE}` }}>
            <table className="w-full text-[14px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <thead>
                <tr style={{ background: "rgba(45,212,191,0.08)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Cia</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Cabine (&lt;8kg)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Cargo</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Conexão recomendada</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Qatar Airways", "USD 200", "USD 400–800", "GRU → DOH → BKK (porão climatizado)"],
                  ["Lufthansa", "EUR 60–110", "EUR 350–900", "GRU → FRA → BKK (Animal Lounge em Frankfurt)"],
                  ["KLM", "EUR 75", "EUR 400–900", "GRU → AMS → BKK (cargo Schiphol top)"],
                  ["Singapore Airlines", "Só cargo", "USD 500–1.200", "GRU → SIN → BKK (mais caro mas excelente)"],
                  ["Emirates", "Só cargo", "USD 600–1.500", "GRU → DXB → BKK (rigoroso, mas seguro)"],
                  ["Latam + Qatar (codeshare)", "USD 200", "USD 400–800", "MAIS BARATO. Pode emitir tudo num bilhete só."],
                ].map((r, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${LINE}` }}>
                    {r.map((c, j) => <td key={j} className="p-3" style={{ color: j === 0 ? INK : "rgba(244,239,230,0.75)", fontWeight: j === 0 ? 600 : 400 }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.6)" }}>
            ❌ Evite: American Airlines (não aceita pet pra TH), Air France (rota longa, sem Animal Lounge em todo lugar),
            Turkish (cargo lento em Istambul). ✅ Top 3: Lufthansa, Qatar (codeshare LATAM), KLM.
          </p>
        </Section>

        {/* CHEGADA */}
        <Section id="cap-chegada" kicker="Capítulo 05" title="Chegada em Suvarnabhumi (BKK) — passo a passo">
          <ol className="not-prose space-y-3 mt-2">
            {[
              ["Desembarque normal pela imigração", "Você passa primeiro. Pet aguarda no cargo (se foi pelo porão) ou na sua caixa (cabine)."],
              ["Vá direto ao Animal Quarantine Office", "Térreo de Suvarnabhumi, ao lado do cargo internacional. Aberto 24h, balcão amarelo."],
              ["Apresente o pacote de documentos", "DLD authorization impressa, CVI MAPA, FAVN, vacinas. Funcionário confere em 15–30 min."],
              ["Pague taxa de inspeção", "฿1.000–1.500 em dinheiro (THB, não aceita cartão). Receba o 'Animal Movement Document'."],
              ["Resgate do cargo (se aplicável)", "Vá ao Cargo Terminal (5 min de táxi do terminal de passageiros). Despachante facilita."],
              ["Saia e tome Grab Pet pro hotel", "Use app Grab → categoria 'Pet'. Carro vem com proteção de banco. ฿400–600 pra Sukhumvit."],
            ].map(([t, d], i) => (
              <li key={i} className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0" style={{ background: NEON, color: BONE }}>{i + 1}</span>
                <div>
                  <strong style={{ color: INK }}>{t}</strong>
                  <p className="text-[14px] mt-0.5" style={{ color: "rgba(244,239,230,0.75)" }}>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* HOTÉIS BKK */}
        <Section id="cap-hoteis-bkk" kicker="Capítulo 06" title="Hotéis pet-friendly em Bangkok e Chiang Mai">
          <p>Pet-friendly de verdade: aceita por escrito, sem assustar na recepção, com infra (tigelas, áreas externas, proximidade de vet).</p>
          <LinkGrid items={hoteisBKK} />
        </Section>

        {/* HOTÉIS ILHAS */}
        <Section id="cap-hoteis-ilhas" kicker="Capítulo 07" title="Hotéis pet-friendly nas ilhas">
          <p>
            Koh Lanta é, disparado, a ilha mais pet-friendly. Phuket aceita em hotéis específicos. Samui e Yao Noi
            funcionam com confirmação prévia por escrito.
          </p>
          <LinkGrid items={hoteisIlhas} />
        </Section>

        {/* VETS BKK */}
        <Section id="cap-vets-bkk" kicker="Capítulo 08" title="Veterinários 24h em Bangkok">
          <p>Salve TODOS no celular antes de chegar. Em emergência você não tem tempo de pesquisar.</p>
          <LinkGrid items={vetsBangkok} />
        </Section>

        {/* VETS OUTROS */}
        <Section id="cap-vets-outros" kicker="Capítulo 09" title="Veterinários nas outras cidades">
          <LinkGrid items={vetsOutros} />
          <div className="not-prose mt-6 rounded-xl p-5 flex gap-3" style={{ background: "rgba(45,212,191,0.07)", border: `1px solid rgba(45,212,191,0.25)` }}>
            <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: INK }}>Em ilhas pequenas (Phi Phi, Tao, Lipe):</strong> não há vet 24h. Caso grave →
              barco-ambulância pra Krabi/Phuket/Samui. Custo ฿8.000–15.000. Tenha seguro pet internacional (Petplan, AKC).
            </p>
          </div>
        </Section>

        {/* PRAIAS */}
        <Section id="cap-praias" kicker="Capítulo 10" title="As 12 praias liberadas (com regras locais)">
          <p>
            Regra geral: praia de parque nacional = proibido. Praia turística big-resort = proibido. Praia
            "local + remota" = tolerado com coleira. Cumprimente o vendedor de coco — ele avisa se o fiscal está perto.
          </p>
          <LinkGrid items={praias} />
        </Section>

        {/* PARQUES & CAFÉS */}
        <Section id="cap-parques" kicker="Capítulo 11" title="Parques e cafés pet em Bangkok e Chiang Mai">
          <LinkGrid items={parquesCafes} />
        </Section>

        {/* BLACKLIST */}
        <Section id="cap-blacklist" kicker="Capítulo 12" title="Lista negra — onde NUNCA levar o pet">
          <LinkGrid items={blacklist} />
        </Section>

        {/* EMERGÊNCIA */}
        <Section id="cap-emergencia" kicker="Capítulo 13" title="Emergência — o que fazer nos primeiros 10 minutos">
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            {[
              { t: "Intoxicação alimentar", d: "Carvão ativado oral (฿80, qualquer 7-Eleven tem). Foto do que comeu. Vet em < 1h." },
              { t: "Atropelamento / queda", d: "NÃO mova. Cobertor sob o corpo, transporte em prancha. Ligue vet ANTES de chegar." },
              { t: "Insolação", d: "Sintomas: ofegante, vômito, andar bambo. Água fria no pescoço/virilha. Grab pro vet imediato." },
              { t: "Picada de cobra", d: "Imobilize o membro abaixo do coração. NÃO chupe nem corte. Vet referência: Thonglor Pet (tem antiveneno)." },
              { t: "Engasgo", d: "Heimlich pet (vídeo no guia). Se desmaiar: RCP. Vet em paralelo." },
              { t: "Ferida sangrando", d: "Compressa firme 5 min sem soltar. Se atravessou, NÃO retire o objeto. Vet imediato." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(239,68,68,0.06)", border: `1px solid rgba(239,68,68,0.25)` }}>
                <strong style={{ color: "#fca5a5" }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.78)" }}>{r.d}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-6 rounded-xl p-5" style={{ background: "rgba(201,162,75,0.08)", border: `1px solid rgba(201,162,75,0.3)` }}>
            <strong style={{ color: GOLD }}>Telefones de emergência (salve agora):</strong>
            <ul className="mt-2 space-y-1 text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <li>• <strong>Thonglor Pet Hospital BKK:</strong> +66 2 712 6301</li>
              <li>• <strong>iVet Chiang Mai:</strong> +66 53 247 770</li>
              <li>• <strong>Bangkok Phuket Animal Hospital:</strong> +66 76 254 425</li>
              <li>• <strong>Animal Hospital Koh Samui:</strong> +66 77 962 555</li>
              <li>• <strong>Tourist Police (humano):</strong> 1155</li>
            </ul>
          </div>
        </Section>

        {/* RETORNO */}
        <Section id="cap-retorno" kicker="Capítulo 14" title="Retorno ao Brasil — a burocracia inversa">
          <p>
            Voltar pro Brasil com o pet é <strong style={{ color: INK }}>mais simples</strong> que ir — Brasil aceita pet
            sem FAVN, mas tem suas regras. Comece a preparar 30 dias antes do voo de volta.
          </p>
          <ol className="not-prose space-y-3 mt-4">
            {[
              ["D-30: Reforço antirrábica (se vencendo)", "Mantém certificado válido pro embarque. Vet tailandês emite passport entry."],
              ["D-15: Vermífugo + antipulgas", "Mesmo protocolo da ida. Anote no passport do pet."],
              ["D-10: Health Certificate DLD", "Solicite no DLD Bangkok (Phaya Thai) — documento de saída. ฿500, 1 dia útil."],
              ["D-5: Atestado vet de aptidão pra voo", "Vet tailandês emite em inglês. ฿800–1.200."],
              ["D-1: Confirme cia + caixa", "Mesma caixa IATA da ida serve. Confirme reserva do pet 24h antes."],
              ["Chegada BR: VIGIAGRO no aeroporto", "Passa pela inspeção zoossanitária. Sem quarentena se docs ok. Posto VIGIAGRO 24h em GRU/GIG."],
            ].map(([t, d], i) => (
              <li key={i} className="rounded-xl p-4 flex gap-3" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0" style={{ background: GOLD, color: BONE }}>{i + 1}</span>
                <div>
                  <strong style={{ color: INK }}>{t}</strong>
                  <p className="text-[14px] mt-0.5" style={{ color: "rgba(244,239,230,0.75)" }}>{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* CUSTOS */}
        <Section id="cap-custos" kicker="Capítulo 15" title="Custos reais (cão de 10kg, ida + 30 dias)">
          <div className="not-prose overflow-x-auto rounded-xl" style={{ border: `1px solid ${LINE}` }}>
            <table className="w-full text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <thead>
                <tr style={{ background: "rgba(45,212,191,0.08)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Item</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Custo (R$)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Microchip + implante", "R$ 150"],
                  ["Vacina antirrábica + reforço", "R$ 180"],
                  ["Sorologia FAVN (Tecsa)", "R$ 850"],
                  ["Vermífugo + antipulgas", "R$ 220"],
                  ["CVI MAPA", "Grátis"],
                  ["Caixa IATA tamanho M", "R$ 450"],
                  ["Voo cargo (Qatar GRU→BKK)", "R$ 4.200"],
                  ["Despachante BR (opcional)", "R$ 1.500"],
                  ["Despachante TH (chegada)", "R$ 800"],
                  ["Taxa Animal Quarantine BKK", "R$ 220"],
                  ["Grab Pet aeroporto → hotel", "R$ 80"],
                  ["Hotel pet-friendly 30 dias (média)", "R$ 4.500"],
                  ["Ração local (Smartheart 30 dias)", "R$ 280"],
                  ["Total estimado IDA + 30 dias", "R$ 13.430"],
                ].map((r, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${LINE}`, background: i === 13 ? "rgba(45,212,191,0.06)" : "transparent" }}>
                    {r.map((c, j) => <td key={j} className="p-3" style={{ color: j === 0 ? INK : (i === 13 ? NEON : "rgba(244,239,230,0.75)"), fontWeight: i === 13 || j === 0 ? 600 : 400 }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.6)" }}>
            Cão grande (&gt;25kg): some +R$ 3.500 no voo cargo. Gato: subtraia ~R$ 2.000 (voa em cabine se &lt;8kg).
            Despachante economiza tempo, não dinheiro — só vale se você não tem 1 mês pra correr atrás.
          </p>
        </Section>

        {/* SITTERS */}
        <Section id="cap-sitters" kicker="Capítulo 16" title="Pet sitters confiáveis para dias de day trip">
          <p>
            Pra dias de Phi Phi, Similan, James Bond Island ou templos: deixe o pet com sitter testado em vez de
            sozinho no hotel.
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { t: "PetBacker Tailândia", d: "App tipo Airbnb pra pet sitters. ฿500–1.000/dia, sitter avaliado por reviews. Disponível em BKK, Phuket, CM." },
              { t: "House of Paws (Bangkok)", d: "Daycare premium em Thonglor. ฿800/dia, câmera ao vivo no celular. Reserve 3 dias antes." },
              { t: "Lanta Animal Welfare", d: "ONG em Koh Lanta. Sitters voluntários (doação de ฿500/dia recomendada). Conhecem pet de longa data." },
              { t: "Soi Dog Foundation (Phuket)", d: "Não fazem sitting comercial, mas indicam sitters da rede. Email volunteer@soidog.org." },
              { t: "Hotel próprio (algumas redes)", d: "Akyra, 137 Pillars e Anantara oferecem 'pet concierge' por ฿1.500/dia." },
              { t: "Vet com daycare (Thonglor Pet)", d: "Vet com creche anexa. ฿900/dia. Ideal pra pet com necessidade especial (diabético, idoso)." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: NEON }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="py-16 text-center">
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.55)" }}>
            Guia atualizado regularmente · Baseado em 3 viagens com cão e gato pessoais ·
            Em emergência, ligue 1155 (Tourist Police) — falam inglês.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Pets9922;

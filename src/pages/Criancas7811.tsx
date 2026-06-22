import { SEO } from "@/components/SEO";
import { Sparkles, ArrowUpRight, Check, AlertTriangle, ShieldCheck, Baby } from "lucide-react";
import { useEffect, useRef } from "react";

/* ============================================================
   PREMIUM PALETTE — midnight coral/sky (family)
   ============================================================ */
const INK = "#F4EFE6";
const BONE = "#07090F";
const NEON = "#38BDF8";       // sky neon
const GOLD = "#F59E0B";       // amber
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
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 20px 50px -20px rgba(56,189,248,0.35), 0 8px 20px -10px rgba(0,0,0,0.5)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.4)")}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ background: "rgba(56,189,248,0.12)", color: NEON }}>
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

// hoteisPorCidade definido abaixo (depende do tipo CityBlock)


const atracoesPorIdade: LinkRef[] = [
  // 0-3
  { label: "Dusit Zoo / Khao Kheow Open Zoo (0-3)", url: "https://www.google.com/maps/search/Khao+Kheow+Open+Zoo+Chonburi", note: "Khao Kheow (Pattaya) é o melhor zoo da TH — animais soltos, carrinho fácil, sombra. Bebê dorme no carrinho ok." },
  { label: "Lumphini Park Bangkok (0-3)", url: "https://www.google.com/maps/search/Lumphini+Park+Bangkok", note: "varões, lagos com pedalinho, varanos selvagens (a 5m, seguros). Levar repelente baby. Lanchar na grama." },
  { label: "Praia de Klong Muang Krabi (0-3)", url: "https://www.google.com/maps/search/Klong+Muang+Beach+Krabi", note: "mar de piscina, sem onda, fundo de areia, sombra de casuarinas. A praia mais calma da Tailândia continental." },
  // 4-8
  { label: "SEA LIFE Bangkok Ocean World (4-8)", url: "https://www.google.com/maps/search/SEA+LIFE+Bangkok+Ocean+World", note: "no subsolo do Siam Paragon. Túnel com tubarão, raio que toca, mergulho infantil supervisionado a partir de 8 anos." },
  { label: "Elephant Nature Park (4-8 e mais)", url: "https://www.google.com/maps/search/Elephant+Nature+Park+Chiang+Mai", note: "ético, sem montaria. Crianças dão banho e alimentam. Reservar 2 meses antes. Idade mínima 4 anos." },
  { label: "Phuket FantaSea (4-12)", url: "https://www.google.com/maps/search/Phuket+FantaSea", note: "show + parque temático thai. 'Cirque du Soleil' versão tailandesa. Jantar buffet incluso. 4h de programa." },
  { label: "Splash Jungle Water Park Phuket (4-12)", url: "https://www.google.com/maps/search/Splash+Jungle+Phuket", note: "Mai Khao, parque aquático com toboáguas e área baby. Único do norte de Phuket." },
  { label: "Patara Elephant Farm (4-12)", url: "https://www.google.com/maps/search/Patara+Elephant+Farm+Chiang+Mai", note: "alternativa ética em Chiang Mai — banho de rio, alimentação, sem montaria. 'Be a Mahout' kids version." },
  // 9-14
  { label: "Zip Line Flight of the Gibbon (9-14)", url: "https://www.google.com/maps/search/Flight+of+the+Gibbon+Chiang+Mai", note: "5km de tirolesa pela floresta, idade mínima 8 anos. Pré-adolescente fica obcecado. Almoço incluso." },
  { label: "Snorkel Phi Phi day trip (9-14)", url: "https://www.google.com/maps/search/Phi+Phi+Tour+Krabi", note: "saída de Krabi/Phuket, lancha rápida, peixes coloridos rasos. Mínimo 6 anos. Levar dramin infantil." },
  { label: "Muay Thai for Kids (9-14)", url: "https://www.google.com/maps/search/Tiger+Muay+Thai+Phuket", note: "Tiger Muay Thai aceita criança 7+ em aula trial 1h. Pré-adolescente lembra a vida inteira." },
  { label: "Doi Suthep + Hmong Village (9-14)", url: "https://www.google.com/maps/search/Doi+Suthep+Chiang+Mai", note: "templo no topo + visita a vila de minoria étnica. Diferente do roteiro adulto que cansaria criança." },
];

const restaurantesFamilia: LinkRef[] = [
  { label: "After You Dessert Café (toda Tailândia)", url: "https://www.google.com/maps/search/After+You+Bangkok", note: "rede de sobremesas que toda criança brasileira AMA. Brick toast, kakigori, sundae. Em todo shopping." },
  { label: "MK Restaurants (rede nacional)", url: "https://www.google.com/maps/search/MK+Restaurants+Bangkok", note: "hot pot tailandês. Criança escolhe ingredientes, controla o picante (zero se quiser). Cadeirão e menu infantil." },
  { label: "Cabbages & Condoms Bangkok", url: "https://www.google.com/maps/search/Cabbages+Condoms+Bangkok", note: "nome engraçado, comida thai não picante e jardim arborizado. Lucro vai pra ONG. Adolescente adora a história." },
  { label: "Krua Apsorn (Bangkok)", url: "https://www.google.com/maps/search/Krua+Apsorn+Bangkok", note: "thai tradicional fácil de pedir 'mai phet' (sem picante). Crab omelette é hit infantil." },
  { label: "Dash! Restaurant (Chiang Mai)", url: "https://www.google.com/maps/search/Dash+Restaurant+Chiang+Mai", note: "playground interno + menu pra criança. Pais comem em paz." },
  { label: "Kan Eang@Pier (Phuket Chalong)", url: "https://www.google.com/maps/search/Kan+Eang+Pier+Phuket", note: "frutos do mar à beira-mar, área pra criança correr enquanto adulto come. Macarrão branco no menu kids." },
];

const farmaciaHospital: LinkRef[] = [
  { label: "Samitivej Children's Hospital (BKK)", url: "https://www.google.com/maps/search/Samitivej+Children+Hospital+Bangkok", note: "hospital infantil de referência asiática. Pediatra falando português? Não — inglês ok. Seguro Bradesco/Allianz cobre direto." },
  { label: "Bumrungrad International (BKK)", url: "https://www.google.com/maps/search/Bumrungrad+Hospital+Bangkok", note: "ala pediátrica top, 24h, padrão americano. Caro sem seguro (consulta ฿2.500). Aceita cartão internacional." },
  { label: "Bangkok Hospital Phuket", url: "https://www.google.com/maps/search/Bangkok+Hospital+Phuket", note: "principal hospital de Phuket, pediatria 24h. Suzuki Pediatric Center anexo. Inglês fluente." },
  { label: "Bangkok Hospital Samui", url: "https://www.google.com/maps/search/Bangkok+Hospital+Samui", note: "único hospital padrão internacional da ilha. Helicóptero de emergência pra Bangkok se precisar." },
  { label: "Chiang Mai Ram Hospital", url: "https://www.google.com/maps/search/Chiang+Mai+Ram+Hospital", note: "pediatria 24h, melhor de Chiang Mai. Suzuki Pediatric Center. Atende criança brasileira sem complicação." },
  { label: "Boots Pharmacy (rede nacional)", url: "https://www.google.com/maps/search/Boots+Pharmacy+Bangkok", note: "farmácia britânica, em todo shopping. Vendem Tylenol infantil, soro, repelente baby, fraldas Pampers. Inglês 100%." },
];

const praiasSeguras: LinkRef[] = [
  { label: "Klong Muang (Krabi)", url: "https://www.google.com/maps/search/Klong+Muang+Beach", note: "🥇 a MAIS segura da Tailândia continental. Mar de piscina, fundo de areia 100m. Sombra natural." },
  { label: "Nopparat Thara (Krabi)", url: "https://www.google.com/maps/search/Nopparat+Thara+Beach", note: "ao lado de Ao Nang, mais calma. Boa pra criança 4+ que já sabe brincar na água." },
  { label: "Bophut (Koh Samui)", url: "https://www.google.com/maps/search/Bophut+Beach+Koh+Samui", note: "norte da ilha, sem onda. Fisherman's Village ao lado pra jantar família." },
  { label: "Choeng Mon (Koh Samui)", url: "https://www.google.com/maps/search/Choeng+Mon+Beach+Koh+Samui", note: "enseada protegida, ilhota nadável (criança 7+). Mar raso 50m." },
  { label: "Mai Khao (Phuket norte)", url: "https://www.google.com/maps/search/Mai+Khao+Beach+Phuket", note: "praia de 11km, quase deserta. Onda pequena (cuidado com corrente, leia bandeiras). Vai cedo." },
  { label: "Nai Yang (Phuket)", url: "https://www.google.com/maps/search/Nai+Yang+Beach+Phuket", note: "parque nacional, mar calmíssimo, salva-vidas em high season. Ideal família 3+ filhos." },
  { label: "Hua Hin Beach", url: "https://www.google.com/maps/search/Hua+Hin+Beach", note: "praia urbana, mar raso, calmo. Tem pedalinho pôneis e cavalos passeio (criança AMA)." },
  { label: "Cha-Am (vizinho Hua Hin)", url: "https://www.google.com/maps/search/Cha-Am+Beach", note: "alternativa local + barata a Hua Hin. Família tailandesa vai aí. Sem onda." },
  { label: "Long Beach (Koh Lanta)", url: "https://www.google.com/maps/search/Long+Beach+Koh+Lanta", note: "Lanta inteira é family-friendly. Mar calmo, vibe lenta, restaurantes pé na areia toleram bagunça." },
  { label: "Klong Dao (Koh Lanta)", url: "https://www.google.com/maps/search/Klong+Dao+Beach+Koh+Lanta", note: "principal de Lanta, mar transparente raso. Salva-vidas em high season." },
];

const blacklistFamilia: LinkRef[] = [
  { label: "Patong Beach (Phuket)", url: "https://www.google.com/maps/search/Patong+Beach+Phuket", note: "🚨 NÃO LEVE criança à noite. Bangla Road é zona de bares adultos. Praia de dia ok, mas tem opção melhor." },
  { label: "Full Moon Party — Haad Rin (Koh Phangan)", url: "https://www.google.com/maps/search/Haad+Rin+Koh+Phangan", note: "🚨 ilha em si é tranquila, mas Haad Rin nas semanas de Full Moon = NÃO. Hospede em Thong Nai Pan ou Bophut." },
  { label: "Tiger Temple antigo (Kanchanaburi)", url: "https://www.google.com/maps/search/Tiger+Park+Phuket", note: "🚨 fechado por maus-tratos. Tiger Kingdom (atual) ainda é polêmico — pular." },
  { label: "Maya Bay sem reserva (Phi Phi)", url: "https://www.google.com/maps/search/Maya+Bay+Phi+Phi", note: "🚨 lotada, sem sombra, fila pra desembarcar. Criança <8 anos = stress garantido. Ir só com reserva no Maya Bay Sleepaboard." },
  { label: "Khao San Road de noite (Bangkok)", url: "https://www.google.com/maps/search/Khao+San+Road+Bangkok", note: "🚨 mochileiros alcoolizados, vendedores agressivos. De dia é ok pra passar, à noite não." },
];

const chapters: [string, string][] = [
  ["cap-verdades", "Antes de tudo"],
  ["cap-quando", "Quando ir"],
  ["cap-roteiro-bebe", "Roteiro 0-3"],
  ["cap-roteiro-medio", "Roteiro 4-8"],
  ["cap-roteiro-grande", "Roteiro 9-14"],
  ["cap-voo", "Voo 30h sem chorar"],
  ["cap-mala", "Checklist mala"],
  ["cap-hoteis", "Hotéis por cidade"],

  ["cap-atracoes", "Atrações por idade"],
  ["cap-praias", "Praias seguras"],
  ["cap-comida", "Comida pra criança"],
  ["cap-restaurantes", "Restaurantes família"],
  ["cap-saude", "Saúde e farmácia"],
  ["cap-vacinas", "Vacinas e seguro"],
  ["cap-babas", "Babás verificadas"],
  ["cap-blacklist", "Onde NÃO levar"],
  ["cap-emergencia", "Emergência"],
  ["cap-custos", "Custos reais"],
  ["cap-grupo", "Comunidade BR"],
  ["cap-experiencias-cidades", "Experiências por cidade"],
];

type CityBlock = { city: string; tagline: string; items: LinkRef[] };

const hoteisPorCidade: CityBlock[] = [
  {
    city: "Bangkok",
    tagline: "Capital — base de chegada/saída. Kids club, family rooms e piscina infantil em hotéis urbanos.",
    items: [
      { label: "Anantara Riverside Bangkok Resort", url: "https://www.google.com/maps/search/Anantara+Riverside+Bangkok", note: "kids club 4–12 (9h–18h). Family room 50m². Berço grátis, piscina rasa, shuttle barco até centro." },
      { label: "Shangri-La Bangkok", url: "https://www.google.com/maps/search/Shangri-La+Bangkok", note: "Adventure Zone (4–12), babá por hora (฿400/h, fala inglês). Piscina infantil separada com salva-vidas." },
      { label: "Chatrium Hotel Riverside", url: "https://www.google.com/maps/search/Chatrium+Hotel+Riverside+Bangkok", note: "Family suites 70m² com 2 quartos. Melhor custo-benefício família 4. Kids menu em todos os restaurantes." },
      { label: "Avani+ Riverside Bangkok", url: "https://www.google.com/maps/search/Avani+Riverside+Bangkok", note: "Family rooms até 6 pessoas. Sky pool com área infantil. Boa pra adolescente." },
      { label: "Pullman Bangkok King Power", url: "https://www.google.com/maps/search/Pullman+Bangkok+King+Power", note: "Kids club 3–12, manhã + tarde. Berço grátis. Próximo Victory Monument (ônibus pra praias)." },
      { label: "Centara Grand at CentralWorld", url: "https://www.google.com/maps/search/Centara+Grand+CentralWorld", note: "Dentro do maior shopping. Kids club + cinema/boliche colado. Salva 1 dia de chuva inteiro." },
    ],
  },
  {
    city: "Phuket",
    tagline: "Ilha mais visitada da Tailândia — resorts família em Mai Khao, Surin e Patong.",
    items: [
      { label: "JW Marriott Phuket Resort (Mai Khao)", url: "https://www.google.com/maps/search/JW+Marriott+Phuket+Mai+Khao", note: "Kids Club premiado, 3 piscinas (1 infantil), aula de tartaruga marinha. Berço, monitor de bebê, kit de fraldas." },
      { label: "Renaissance Phuket Resort & Spa", url: "https://www.google.com/maps/search/Renaissance+Phuket+Resort", note: "R Kids Club + R Teen Club separados (adolescente longe da criança de 5). Praia Mai Khao calma." },
      { label: "Holiday Inn Resort Phuket (Patong)", url: "https://www.google.com/maps/search/Holiday+Inn+Resort+Phuket", note: "'Kids Stay & Eat Free' real, não pegadinha. 2 crianças <12 grátis no quarto + buffet." },
      { label: "Outrigger Surin Beach Resort", url: "https://www.google.com/maps/search/Outrigger+Surin+Beach", note: "Family villas 2 quartos, cozinha. Kids club + babá noturna a preço justo (฿300/h)." },
      { label: "Anantara Mai Khao Phuket Villas", url: "https://www.google.com/maps/search/Anantara+Mai+Khao+Phuket", note: "Vilas com piscina privada (paz pros pais), kids club opcional. Aula de cozinha thai pra criança." },
      { label: "Sala Phuket Mai Khao Beach Resort", url: "https://www.google.com/maps/search/Sala+Phuket+Resort", note: "Vilas térreas com piscina, segurança total pra criança que não nada. Praia rasa 100m." },
    ],
  },
  {
    city: "Krabi (Ao Nang / Klong Muang)",
    tagline: "Praias rasas, falésias e tour 4 ilhas — base ideal para 0–8 anos.",
    items: [
      { label: "Centara Grand Beach Resort Krabi", url: "https://www.google.com/maps/search/Centara+Grand+Krabi", note: "Ao Nang, parque aquático interno (escorregadores), kids club, teen club. Praia da própria enseada." },
      { label: "Phulay Bay, Ritz-Carlton Reserve", url: "https://www.google.com/maps/search/Phulay+Bay+Ritz+Carlton+Krabi", note: "Luxo total. Vila privada com mordomo, babá inclusa 4h/dia. Atividades culturais pra criança." },
      { label: "Sofitel Krabi Phokeethra Golf & Spa", url: "https://www.google.com/maps/search/Sofitel+Krabi", note: "Maior piscina-lagoa do sul (toda rasa nas bordas), kids club + mini-zoo no resort. Família grande adora." },
      { label: "Dusit Thani Krabi Beach Resort", url: "https://www.google.com/maps/search/Dusit+Thani+Krabi", note: "Klong Muang, praia mais calma que Ao Nang. Kids club + miniclub bebê 6m–3a." },
    ],
  },
  {
    city: "Koh Samui",
    tagline: "Ilha do golfo — Bophut e Choeng Mon têm mar raso ideal para crianças.",
    items: [
      { label: "Banyan Tree Samui", url: "https://www.google.com/maps/search/Banyan+Tree+Samui", note: "Vilas com piscina privada (essencial família 2+ filhos). Kids club + babá 24h sob demanda." },
      { label: "Anantara Bophut Koh Samui", url: "https://www.google.com/maps/search/Anantara+Bophut+Koh+Samui", note: "Family suites, kids club 4–12, aulas de Muay Thai infantil. Praia Bophut rasa." },
      { label: "Santiburi Koh Samui", url: "https://www.google.com/maps/search/Santiburi+Koh+Samui", note: "Mae Nam, vilas + golfe + kids club. Crianças aprendem a navegar caiaque em águas calmas." },
      { label: "Melati Beach Resort & Spa", url: "https://www.google.com/maps/search/Melati+Beach+Resort+Samui", note: "2 piscinas (1 infantil), kids club + babá. Berço, hidromassagem família, menu infantil." },
    ],
  },
  {
    city: "Koh Phi Phi",
    tagline: "Ilha balada — para criança, escolher resort fora de Tonsai (Laem Tong / Long Beach).",
    items: [
      { label: "Zeavola Resort (Laem Tong)", url: "https://www.google.com/maps/search/Zeavola+Resort+Phi+Phi", note: "Norte da ilha, longe da balada. Vilas teca, praia exclusiva rasa. Kids amenities sob pedido. Transfer de speedboat." },
      { label: "SAii Phi Phi Island Village (Loh Bagao)", url: "https://www.google.com/maps/search/SAii+Phi+Phi+Island+Village", note: "Praia exclusiva, kids club, snorkel infantil supervisionado. Único resort grande pet-friendly da ilha pra família." },
      { label: "Phi Phi Island Cabana Hotel (Tonsai)", url: "https://www.google.com/maps/search/Phi+Phi+Island+Cabana+Hotel", note: "Pé no centro mas com piscina grande pra criança. Boa pra família que NÃO quer transfer extra." },
    ],
  },
  {
    city: "Koh Lanta",
    tagline: "Ilha tranquila — alternativa a Phi Phi para família com criança pequena.",
    items: [
      { label: "Pimalai Resort & Spa (Kantiang Bay)", url: "https://www.google.com/maps/search/Pimalai+Resort+Koh+Lanta", note: "Maior resort da ilha, kids club, 2 piscinas, praia privada de 900m. Tem berço e cardápio infantil." },
      { label: "Layana Resort & Spa", url: "https://www.google.com/maps/search/Layana+Resort+Koh+Lanta", note: "Adults-only oficialmente, mas aceita 13+. Boa pra família de adolescente que quer paz." },
      { label: "Twin Lotus Resort & Spa", url: "https://www.google.com/maps/search/Twin+Lotus+Resort+Koh+Lanta", note: "Boutique família, piscina rasa, praia Klong Dao a 50m. Bom preço pra estrutura." },
    ],
  },
  {
    city: "Khao Lak",
    tagline: "Litoral norte de Phuket — praias enormes e vazias, ideal pra criança correr.",
    items: [
      { label: "JW Marriott Khao Lak Resort & Spa", url: "https://www.google.com/maps/search/JW+Marriott+Khao+Lak", note: "Maior piscina da Tailândia (rios artificiais), kids club premiado, teen club. Praia exclusiva 600m." },
      { label: "The Sands Khao Lak by Katathani", url: "https://www.google.com/maps/search/Sands+Khao+Lak+Katathani", note: "Family suites duplex, 4 piscinas (1 infantil), kids club. Praia rasa direto do resort." },
      { label: "Centara Seaview Resort Khao Lak", url: "https://www.google.com/maps/search/Centara+Seaview+Khao+Lak", note: "Camp Safari kids club temático, piscina com escorrega. Custo-benefício família 4." },
    ],
  },
  {
    city: "Chiang Mai",
    tagline: "Norte cultural — elefantes éticos, templos e clima ameno (Nov–Fev).",
    items: [
      { label: "Four Seasons Resort Chiang Mai", url: "https://www.google.com/maps/search/Four+Seasons+Resort+Chiang+Mai", note: "Mae Rim, búfalo no jardim, arrozal vivo. Kids club com aula de plantio + cozinha thai. Sonho de criança 6+." },
      { label: "Anantara Chiang Mai Resort", url: "https://www.google.com/maps/search/Anantara+Chiang+Mai+Resort", note: "Centro, family rooms vista rio Ping. Kids club + aula de elefante (ética, sem montaria) no parceiro." },
      { label: "Le Méridien Chiang Mai", url: "https://www.google.com/maps/search/Le+Meridien+Chiang+Mai", note: "Night Bazaar ao lado (jantar fácil). Family Plan: 2ª cama + café da manhã grátis pra criança." },
    ],
  },
  {
    city: "Chiang Rai",
    tagline: "Extremo norte — Templo Branco, Triângulo Dourado e natureza calma para 6+.",
    items: [
      { label: "Anantara Golden Triangle Elephant Camp & Resort", url: "https://www.google.com/maps/search/Anantara+Golden+Triangle", note: "Programa ético com elefantes resgatados (criança 4+ acompanha banho). Vista pra Mianmar e Laos. Caro mas inesquecível." },
      { label: "Le Méridien Chiang Rai Resort", url: "https://www.google.com/maps/search/Le+Meridien+Chiang+Rai", note: "Beira do rio Mae Kok, family rooms, piscina rasa, kids menu. Base prática pro Templo Branco." },
    ],
  },
  {
    city: "Hua Hin",
    tagline: "Praia de classe média tailandesa a 3h de Bangkok — mar mais raso e calmo do país.",
    items: [
      { label: "Centara Grand Beach Resort Hua Hin", url: "https://www.google.com/maps/search/Centara+Grand+Hua+Hin", note: "Hotel colonial 1923, lendário em estrutura familiar. 4 piscinas, kids club, mini-trem do resort." },
      { label: "InterContinental Hua Hin Resort", url: "https://www.google.com/maps/search/InterContinental+Hua+Hin", note: "Praia calmíssima (ideal <5 anos), Planet Trekkers kids club premiado mundialmente." },
      { label: "Hyatt Regency Hua Hin", url: "https://www.google.com/maps/search/Hyatt+Regency+Hua+Hin", note: "Lagoa de natação 1.700m², a maior da Tailândia. Família 5+ adora (espaço pra todo mundo)." },
    ],
  },
  {
    city: "Pattaya / Jomtien",
    tagline: "2h de Bangkok, parques temáticos e zoo aberto — destino #1 de família asiática.",
    items: [
      { label: "Centara Grand Mirage Beach Resort Pattaya", url: "https://www.google.com/maps/search/Centara+Grand+Mirage+Pattaya", note: "Parque aquático interno (Lost World), 4 piscinas, kids + teen club. Wong Amat (norte, longe da balada)." },
      { label: "Holiday Inn Pattaya", url: "https://www.google.com/maps/search/Holiday+Inn+Pattaya", note: "'Kids Stay & Eat Free' (até 2 crianças <12). Family Towers com quarto separado pra criança." },
      { label: "Cape Dara Resort Pattaya", url: "https://www.google.com/maps/search/Cape Dara+Resort+Pattaya", note: "Wong Amat, praia exclusiva rasa, piscina infinita, kids club. Boa relação preço/estrutura." },
      { label: "Rabbit Resort Pattaya (Jomtien)", url: "https://www.google.com/maps/search/Rabbit+Resort+Pattaya", note: "Vilas térreas no jardim, 2 piscinas rasas. Pé na praia Dongtan (mais calma que Pattaya central)." },
    ],
  },
  {
    city: "Ayutthaya",
    tagline: "Antiga capital, 1h30 de Bangkok — bate-volta ou 1 noite com criança 6+.",
    items: [
      { label: "Sala Ayutthaya", url: "https://www.google.com/maps/search/Sala+Ayutthaya", note: "Boutique beira-rio com vista pro Wat Phutthaisawan. Piscina pequena mas charmosa. Family room limitada — reservar cedo." },
      { label: "Classic Kameo Hotel Ayutthaya", url: "https://www.google.com/maps/search/Classic+Kameo+Hotel+Ayutthaya", note: "Apart-hotel com cozinha. Family suites 2 quartos. Melhor custo-benefício pra família de 4." },
    ],
  },
];


const experienciasPorCidade: CityBlock[] = [
  {
    city: "Bangkok",
    tagline: "Capital — cultura, aquário, parque e shopping para os dias de chuva.",
    items: [
      { label: "SEA LIFE Bangkok Ocean World (Siam Paragon)", url: "https://www.google.com/maps/search/SEA+LIFE+Bangkok+Ocean+World", note: "túnel de tubarões, raias pra tocar, mergulho infantil (8+). Subsolo do shopping = ar-condicionado o dia todo. ฿990 adulto / ฿790 criança." },
      { label: "KidZania Bangkok", url: "https://www.google.com/maps/search/KidZania+Bangkok", note: "cidade-cenário pra criança 4-14 anos virar bombeiro, piloto, médico. 4-6h de programa. Dentro do Siam Paragon." },
      { label: "Lumphini Park (pedalinho de cisne)", url: "https://www.google.com/maps/search/Lumphini+Park+Bangkok", note: "pedalinho ฿80/30min, varões selvagens (seguros), bicicleta de aluguel. Vai cedo (antes 10h)." },
      { label: "Safari World Bangkok", url: "https://www.google.com/maps/search/Safari+World+Bangkok", note: "safari de carro + Marine Park com shows. Dia inteiro. ฿1.500 adulto / ฿1.400 criança. Reservar online = -20%." },
      { label: "Madame Tussauds Bangkok", url: "https://www.google.com/maps/search/Madame+Tussauds+Bangkok", note: "ótimo pra 8+ (criança tira foto com 'celebridades'). Siam Discovery, 1h30 de programa." },
      { label: "Dream World (Pathum Thani)", url: "https://www.google.com/maps/search/Dream+World+Bangkok", note: "parque de diversões 'Disney tailandesa'. Snow Town (-2°C), montanha-russa light. 1h de Grab do centro." },
      { label: "Asiatique The Riverfront", url: "https://www.google.com/maps/search/Asiatique+The+Riverfront", note: "noite leve em família: roda-gigante, mercado coberto, food court, barco grátis do Saphan Taksin." },
      { label: "Wat Pho (Buda Reclinado, cedo)", url: "https://www.google.com/maps/search/Wat+Pho+Bangkok", note: "vá 8h (abre) — vazio, fresco. Criança vê estátua de 46m. Roupa cobrindo joelho/ombro. ฿300 adulto / criança grátis." },
    ],
  },
  {
    city: "Phuket",
    tagline: "Ilha grande — praias calmas no norte, parques aquáticos e show épico.",
    items: [
      { label: "Splash Jungle Water Park (Mai Khao)", url: "https://www.google.com/maps/search/Splash+Jungle+Phuket", note: "área baby + toboáguas adultos. Único parque aquático sério do norte. ฿1.495 adulto / ฿745 criança." },
      { label: "Phuket FantaSea (Kamala)", url: "https://www.google.com/maps/search/Phuket+FantaSea", note: "show cultural com elefantes (sem montaria), acrobatas, efeitos. Parque temático + jantar buffet. 4h de programa." },
      { label: "Aquaria Phuket (Central Floresta)", url: "https://www.google.com/maps/search/Aquaria+Phuket", note: "aquário moderno, dentro de shopping. Salva 1 dia de chuva. ฿890 adulto / ฿690 criança." },
      { label: "Phuket Trick Eye Museum", url: "https://www.google.com/maps/search/Phuket+Trickeye+Museum", note: "museu de fotos 3D. Criança 5+ surta. Phuket Town, 1h30 de programa." },
      { label: "Big Buddha Phuket", url: "https://www.google.com/maps/search/Big+Buddha+Phuket", note: "subida fácil de táxi, estátua de 45m, vista 360°. Roupa adequada. Entrada gratuita." },
      { label: "Carnival Magic (perto FantaSea)", url: "https://www.google.com/maps/search/Carnival+Magic+Phuket", note: "parque temático novo, vibe carnaval tailandês. Show de luzes à noite. Adolescente curte mais que criança pequena." },
      { label: "Patong Go-Kart Speedway", url: "https://www.google.com/maps/search/Patong+Go-Kart+Speedway", note: "kart pra criança 6+ (kart kids) e adolescente (kart adulto). ฿700–฿1.400 por sessão de 10min." },
      { label: "Khao Phra Thaeo (gibões resgatados)", url: "https://www.google.com/maps/search/Gibbon+Rehabilitation+Phuket", note: "centro ético de reabilitação de gibões. Visita guiada gratuita (doação). Trilha curta na floresta." },
    ],
  },
  {
    city: "Krabi",
    tagline: "Mar de piscina e ilhas de lancha — a região mais family-friendly do continente.",
    items: [
      { label: "4 Islands Tour (saída Ao Nang)", url: "https://www.google.com/maps/search/Ao+Nang+Pier+Krabi", note: "Phra Nang, Tup, Chicken, Poda. Lancha pequena 6h. Mar raso pra snorkel infantil. ฿1.200 com almoço." },
      { label: "Emerald Pool (Sa Morakot)", url: "https://www.google.com/maps/search/Emerald+Pool+Krabi", note: "piscina natural verde, trilha plana 800m. Criança 4+ aguenta. ฿200 adulto / ฿100 criança." },
      { label: "Hot Springs Waterfall (Krabi)", url: "https://www.google.com/maps/search/Hot+Springs+Waterfall+Krabi", note: "piscinas naturais de água quente 35-40°C, criança ama. Vai junto com Emerald Pool no mesmo dia." },
      { label: "Tiger Cave Temple (Wat Tham Sua)", url: "https://www.google.com/maps/search/Tiger+Cave+Temple+Krabi", note: "templo na caverna (plano, ok criança) + opcional 1.260 degraus pro mirante (só 9+ anos com fôlego)." },
      { label: "Ao Nang Krabi Aquarium", url: "https://www.google.com/maps/search/Krabi+Aquarium", note: "pequeno mas curado. Boa pra 3-7 anos. Manhã ou dia chuvoso. ฿200 entrada." },
      { label: "Khao Khanab Nam (passeio de longtail)", url: "https://www.google.com/maps/search/Khao+Khanab+Nam+Krabi", note: "longtail boat pelos pináculos de calcário + caverna com estalactites. 2h, ฿1.500/barco até 6 pessoas." },
      { label: "Nopparat Thara Pier (caiaque)", url: "https://www.google.com/maps/search/Nopparat+Thara+Pier", note: "aluguel de caiaque + standup paddle. Mar de piscina, ideal família com 8+ anos." },
    ],
  },
  {
    city: "Koh Samui",
    tagline: "Ilha grande, calma e estruturada — bom mix de praia + atrações leves.",
    items: [
      { label: "Samui Aquarium & Tiger Zoo", url: "https://www.google.com/maps/search/Samui+Aquarium+Tiger+Zoo", note: "pequeno aquário + área de pássaros e répteis. ฿650 adulto / ฿350 criança. 2-3h." },
      { label: "Coco Splash Adventure Park", url: "https://www.google.com/maps/search/Coco+Splash+Adventure+Park+Samui", note: "parque aquático pequeno mas perfeito pra 3-10 anos. Lamai. ฿650 dia inteiro." },
      { label: "Pink Elephant Water Park", url: "https://www.google.com/maps/search/Pink+Elephant+Water+Park+Samui", note: "alternativa em Chaweng, toboáguas maiores. Bom pra 7+. ฿700 com almoço incluso." },
      { label: "Hin Ta & Hin Yai (Grandpa & Grandma Rocks)", url: "https://www.google.com/maps/search/Hin+Ta+Hin+Yai+Samui", note: "rochas curiosas à beira-mar (formato divertido pra criança rir). Lamai. Gratuito, 30min de passeio." },
      { label: "Na Muang Waterfall 1 & 2", url: "https://www.google.com/maps/search/Na+Muang+Waterfall+Samui", note: "Na Muang 1 é plana (carrinho ok), Na Muang 2 sobe 30min (criança 6+). Banho permitido." },
      { label: "Fisherman's Village (Bophut)", url: "https://www.google.com/maps/search/Fishermans+Village+Bophut", note: "vila pedestre à noite, sexta tem walking street. Comer, comprar, criança correndo na rua sem perigo." },
      { label: "Ang Thong Marine Park (day trip)", url: "https://www.google.com/maps/search/Ang+Thong+National+Marine+Park", note: "42 ilhas, lagoa esmeralda. Speedboat 4-6h, ideal 6+ anos. Crianças menores enjoam." },
    ],
  },
  {
    city: "Koh Lanta",
    tagline: "Ilha lenta e family-friendly de verdade — pouco trânsito, praias rasas.",
    items: [
      { label: "Lanta Animal Welfare (visita)", url: "https://www.google.com/maps/search/Lanta+Animal+Welfare", note: "ONG de animais resgatados. Visita guiada gratuita (doação ฿200), criança 7+ pode passear cachorros. Educativo." },
      { label: "Mu Ko Lanta National Park (farol sul)", url: "https://www.google.com/maps/search/Mu+Ko+Lanta+National+Park", note: "farol + trilha curta + macacos selvagens + praia escondida. ฿200 adulto / ฿100 criança." },
      { label: "Old Town Lanta", url: "https://www.google.com/maps/search/Lanta+Old+Town", note: "vila chinesa-muçulmana à beira-mar, restaurantes sobre palafitas. Manhã. Criança vê barcos e peixes da varanda." },
      { label: "Klong Chak Waterfall + Caverna", url: "https://www.google.com/maps/search/Klong+Chak+Waterfall+Koh+Lanta", note: "trilha curta 30min, caverna ao lado. Guia local ฿300 — vale (ele explica e segura criança nas pedras)." },
      { label: "Khao Mai Kaew Cave", url: "https://www.google.com/maps/search/Khao+Mai+Kaew+Cave+Koh+Lanta", note: "caverna grande com guia obrigatório. Aventura pra 8+ anos. ฿200/pessoa, 1h de espeleologia leve." },
    ],
  },
  {
    city: "Chiang Mai",
    tagline: "Norte cultural + aventura — elefantes éticos e fazendas tematizadas.",
    items: [
      { label: "Elephant Nature Park", url: "https://www.google.com/maps/search/Elephant+Nature+Park+Chiang+Mai", note: "santuário ético, sem montaria. Banho de rio + alimentação. Mínimo 4 anos. Reservar 2 meses antes. ฿2.500 adulto." },
      { label: "Patara Elephant Farm", url: "https://www.google.com/maps/search/Patara+Elephant+Farm+Chiang+Mai", note: "alternativa ética 'Be a Mahout for a Day' versão kids. Aprender a cuidar + banho. Reservar antes." },
      { label: "Flight of the Gibbon (zip line)", url: "https://www.google.com/maps/search/Flight+of+the+Gibbon+Chiang+Mai", note: "5km de tirolesa pela floresta. Mínimo 8 anos / 20kg. ฿3.999 com almoço e transfer. Pré-adolescente sonha." },
      { label: "Sticky Waterfall (Bua Tong)", url: "https://www.google.com/maps/search/Sticky+Waterfall+Chiang+Mai", note: "cachoeira de calcário escalável (pé não escorrega). Criança 5+ sobe segura. Gratuito. Leve sandália aderente." },
      { label: "Mae Sa Elephant Camp Snow Park", url: "https://www.google.com/maps/search/Snow+Park+Mae+Sa+Chiang+Mai", note: "neve artificial pra criança tailandesa — agita brasileira também. Trenó + bonecos. 1h, ฿400 entrada." },
      { label: "Chiang Mai Zoo & Aquarium", url: "https://www.google.com/maps/search/Chiang+Mai+Zoo", note: "zoo grande no Doi Suthep + aquário com túnel. Pandas-gigantes. Carrinho/tram interno. Dia inteiro." },
      { label: "Doi Suthep Temple (cedo)", url: "https://www.google.com/maps/search/Doi+Suthep+Chiang+Mai", note: "vista da cidade do alto. Subir 309 degraus OU usar funicular ฿20. Criança curte sinos pra fazer pedido." },
      { label: "Pongyang Jungle Coaster & Zipline", url: "https://www.google.com/maps/search/Pongyang+Jungle+Coaster+Chiang+Mai", note: "montanha-russa de selva pra 4+ anos. Zip line light pra criança junto com adulto. Mae Rim." },
      { label: "X-Centre Chiang Mai (kart, paintball)", url: "https://www.google.com/maps/search/X-Centre+Chiang+Mai", note: "kart kids 6+, paintball adolescente 12+, bungee adulto. Pacote família funciona." },
    ],
  },
  {
    city: "Hua Hin & Pattaya",
    tagline: "Praia urbana + zoo gigante — destinos subestimados pela família BR.",
    items: [
      { label: "Vana Nava Water Jungle (Hua Hin)", url: "https://www.google.com/maps/search/Vana+Nava+Water+Jungle+Hua+Hin", note: "MAIOR parque aquático de selva da Ásia. Toboáguas + área baby. ฿1.190 adulto / ฿890 criança. Dia inteiro." },
      { label: "Cicada Market (Hua Hin, sexta-domingo)", url: "https://www.google.com/maps/search/Cicada+Market+Hua+Hin", note: "mercado artesanal noturno com palco aberto. Criança come, vê show, compra brinquedo de madeira local. Gratuito." },
      { label: "Plearn Wan Vintage Village", url: "https://www.google.com/maps/search/Plearn+Wan+Hua+Hin", note: "vila cenográfica anos 50, balas antigas, fotos, brinquedos retrô. Adolescente posta no Insta." },
      { label: "Pedalinho-cisne na praia Hua Hin", url: "https://www.google.com/maps/search/Hua+Hin+Beach", note: "passeio de pônei e cavalo na areia (฿200 a volta), pedalinho, paragliding rebocado. Vibe família old-school." },
      { label: "Khao Kheow Open Zoo (Pattaya)", url: "https://www.google.com/maps/search/Khao+Kheow+Open+Zoo+Chonburi", note: "MELHOR zoo da Tailândia, animais soltos, carrinho elétrico ฿250 com mapa. ฿300 adulto / ฿150 criança. 1h30 de BKK." },
      { label: "Nong Nooch Tropical Garden", url: "https://www.google.com/maps/search/Nong Nooch+Garden+Pattaya", note: "jardim botânico gigante + show cultural + parque de dinossauros. Carrinho elétrico essencial. Dia inteiro." },
      { label: "Cartoon Network Amazone Water Park", url: "https://www.google.com/maps/search/Cartoon+Network+Amazone+Pattaya", note: "parque aquático temático CN. Toboáguas Hora de Aventura, Ben 10. Criança 4-12 surta. ฿1.290 adulto / ฿1.090 criança." },
      { label: "Underwater World Pattaya", url: "https://www.google.com/maps/search/Underwater+World+Pattaya", note: "aquário com túnel + tubarões + alimentação ao vivo. ฿500 adulto / ฿350 criança. 2h." },
    ],
  },
  {
    city: "Ayutthaya",
    tagline: "Antiga capital — ruínas, elefantes éticos e bate-volta de Bangkok.",
    items: [
      { label: "Wat Maha That (cabeça de Buda na árvore)", url: "https://www.google.com/maps/search/Wat+Maha+That+Ayutthaya", note: "ícone do parque histórico. Criança adora a foto da raiz envolvendo a cabeça. ฿50 entrada. Vá 7h-9h, ainda fresco." },
      { label: "Wat Chaiwatthanaram (templo às margens)", url: "https://www.google.com/maps/search/Wat+Chaiwatthanaram", note: "ruínas khmer de tirar fôlego. Aluguel de roupas tailandesas pra criança (฿200/h) na entrada — ela vira princesa." },
      { label: "Elephantstay Ayutthaya", url: "https://www.google.com/maps/search/Elephantstay+Ayutthaya", note: "santuário ético de elefantes resgatados. Visita meio dia ฿2.500 — alimentar e dar banho, SEM montaria." },
      { label: "Million Toy Museum", url: "https://www.google.com/maps/search/Million+Toy+Museum+Ayutthaya", note: "coleção privada com brinquedos de 60+ países. Pequeno mas mágico, especialmente pra 5-10 anos. ฿50." },
      { label: "Bang Pa-In Royal Palace (caminho de BKK)", url: "https://www.google.com/maps/search/Bang+Pa-In+Royal+Palace", note: "palácio de verão, jardins amplos pra correr, ponte e carros elétricos de aluguel. ฿100 entrada." },
    ],
  },
  {
    city: "Khao Lak",
    tagline: "Praia calma + parques nacionais — alternativa zero-balada a Phuket.",
    items: [
      { label: "Khao Sok National Park (Cheow Lan Lake)", url: "https://www.google.com/maps/search/Cheow+Lan+Lake+Khao+Sok", note: "lago esmeralda com pináculos. Day trip a partir de Khao Lak. Bangalô flutuante (6+ anos). Macacos selvagens." },
      { label: "Sea Turtle Conservation Center", url: "https://www.google.com/maps/search/Sea+Turtle+Conservation+Center+Khao+Lak", note: "centro da Marinha tailandesa com tartarugas resgatadas. Gratuito (doação ฿100). Educativo, 1h de programa." },
      { label: "Khao Lak-Lam Ru National Park (mirante)", url: "https://www.google.com/maps/search/Khao+Lak+Lam+Ru+National+Park", note: "trilha curta 800m até mirante sobre o mar. Restaurante na entrada. ฿200 adulto / ฿100 criança." },
      { label: "Tsunami Memorial Park (Polícia 813)", url: "https://www.google.com/maps/search/Tsunami+Memorial+Khao+Lak", note: "barco da polícia arrastado 2km terra adentro pelo tsunami de 2004. Memorial educativo pra adolescente (9+). Gratuito." },
      { label: "Bang Niang Market (segunda/quarta/sábado)", url: "https://www.google.com/maps/search/Bang+Niang+Market+Khao+Lak", note: "mercado noturno familiar, sem pegada balada. Comida + brinquedo + roupa. Criança come satay enquanto adulto compra." },
    ],
  },
  {
    city: "Koh Phi Phi & Koh Yao",
    tagline: "Day trips e ilhas vizinhas — só pra criança 6+ que aguenta lancha.",
    items: [
      { label: "Maya Bay (com reserva oficial)", url: "https://www.google.com/maps/search/Maya+Bay+Phi+Phi", note: "reserve via DNP (฿400 + lancha). Vá 7h pela manhã ou último horário. Mínimo 6 anos. Lancha 30min de Phi Phi Don." },
      { label: "Bamboo Island (Koh Mai Phai)", url: "https://www.google.com/maps/search/Bamboo+Island+Phi+Phi", note: "ilhota deserta, mar de piscina, ideal pra criança nadar. Incluída no tour 'Phi Phi early bird'." },
      { label: "Monkey Beach (Phi Phi Don)", url: "https://www.google.com/maps/search/Monkey+Beach+Phi+Phi", note: "macacos selvagens — NÃO alimente, NÃO toque. Foto à distância. Criança fica encantada, mas precisa de regra clara." },
      { label: "Viewpoint 2 Phi Phi (subida)", url: "https://www.google.com/maps/search/Phi+Phi+Viewpoint+2", note: "trilha íngreme 25min, vista da ilha em formato 8. Criança 7+ aguenta. Vá ao pôr-do-sol, leve lanterna pra descer." },
      { label: "Koh Yao Yai Beach (alternativa calma)", url: "https://www.google.com/maps/search/Koh+Yao+Yai", note: "ilha quase sem turista, bicicleta + búfalo nos campos. Hospedar 1-2 noites em vez de day trip. Família ama o silêncio." },
      { label: "Koh Yao Noi — Manoh Pier", url: "https://www.google.com/maps/search/Manoh+Pier+Koh+Yao+Noi", note: "passeio de longtail pelos pináculos. Pescadores locais ensinam criança a pegar lula. Reservar pelo hotel ฿1.500." },
    ],
  },
  {
    city: "Kanchanaburi",
    tagline: "História + natureza acessível — bate-volta de Bangkok pra família com 7+.",
    items: [
      { label: "Erawan National Park (7 cachoeiras)", url: "https://www.google.com/maps/search/Erawan+Waterfall", note: "7 níveis de cachoeira turquesa. Níveis 1-4 são fáceis (criança 5+). Peixinhos fazem 'fish spa' grátis na água. ฿300/฿200." },
      { label: "Death Railway + ponte do rio Kwai", url: "https://www.google.com/maps/search/Bridge+over+River+Kwai", note: "ponte da 2ª Guerra, trem cênico passa em cima. Adolescente (9+) entende a história, criança curte a aventura do trem." },
      { label: "Hellfire Pass Memorial Museum", url: "https://www.google.com/maps/search/Hellfire+Pass+Memorial", note: "museu australiano gratuito + trilha pelo trecho original da Death Railway. Pesado mas marcante pra 10+." },
      { label: "Sai Yok Yai Waterfall", url: "https://www.google.com/maps/search/Sai+Yok+Yai+Waterfall", note: "cachoeira que cai direto no rio Kwai. Tem balsa pra atravessar (criança ama). ฿300/฿200." },
      { label: "ElephantsWorld Sanctuary", url: "https://www.google.com/maps/search/ElephantsWorld+Kanchanaburi", note: "outro santuário ético de elefantes (alternativa a Chiang Mai). Dia inteiro ฿2.500, almoço incluso. Reserve antes." },
    ],
  },
];

/* ============================================================ */

const Criancas7811 = () => {
  return (
    <div
      className="min-h-screen antialiased selection:bg-sky-200/60 selection:text-sky-950"
      style={{
        background: BONE,
        color: INK,
        fontFamily: "'Source Sans 3', system-ui, sans-serif",
      }}
    >
      <SEO
        title="Guia Tailândia para Crianças — Conteúdo Completo"
        description="Guia completo de viagem em família: roteiros por idade (0-3, 4-8, 9-14), 30 hotéis com kids club testados, praias seguras, comida pra criança e saúde."
        canonicalPath="/criancas7811"
      />

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="orb" style={{ top: "-10%", left: "-10%", width: 520, height: 520, background: `radial-gradient(circle, ${NEON}55, transparent 70%)`, opacity: 0.6 }} />
        <div className="orb" style={{ top: "20%", right: "-15%", width: 600, height: 600, background: `radial-gradient(circle, ${GOLD}55, transparent 70%)`, opacity: 0.6 }} />

        <div className="relative container mx-auto max-w-5xl px-6 pt-24 md:pt-32 pb-20 md:pb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase mb-8"
              style={{ background: "rgba(56,189,248,0.1)", color: NEON, border: `1px solid rgba(56,189,248,0.2)` }}>
              <Baby className="w-3 h-3" /> Guia Premium · Edição Família
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display tracking-editorial text-balance font-semibold leading-[0.98] text-[clamp(2.6rem,7vw,5.6rem)]" style={{ color: INK }}>
              Tailândia em<br />
              <span className="italic font-normal" style={{ background: `linear-gradient(120deg, ${NEON}, ${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                família
              </span>
              <span style={{ color: GOLD }}>.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-[19px] md:text-[20px] leading-[1.6] text-pretty" style={{ color: "rgba(244,239,230,0.7)" }}>
              Roteiros por idade (0-3, 4-8, 9-14), 30 hotéis com kids club testados, atrações que valem o ingresso,
              praias seguras, cardápio infantil em tailandês, hospitais pediátricos e babás verificadas — pensado
              pra família brasileira que quer chegar e curtir.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-6 text-sm" style={{ color: "rgba(244,239,230,0.55)" }}>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> 3 roteiros por idade</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> 30+ hotéis kids club</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full" style={{ background: NEON }} /> 0 a 14 anos cobertos</span>
            </div>
          </Reveal>
        </div>

        <div className="h-px mx-6 md:mx-auto max-w-5xl" style={{ background: `linear-gradient(90deg, transparent, ${LINE}, transparent)` }} />
      </header>

      {/* NAV */}
      <nav className="sticky top-0 z-30 backdrop-blur-xl" style={{ background: "rgba(7,9,15,0.72)", borderBottom: `1px solid ${LINE}` }}>
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

        {/* VERDADES */}
        <Section id="cap-verdades" kicker="Capítulo 01" title="10 verdades que ninguém te conta antes">
          <ol className="not-prose grid sm:grid-cols-2 gap-3 mt-2">
            {[
              ["A ilha errada arruína a viagem", "Phangan com bebê de 1 ano = praia agitada e Full Moon. Para 0-3 anos: Krabi (Klong Muang), Hua Hin, Lanta, Samui (Bophut)."],
              ["'Family room' nem sempre é família", "Pode ser só uma cama de casal + sofá. Confirme por e-mail: 'separate bed for child' + berço."],
              ["Templo lotado 38°C derruba criança", "Faça templo cedo (6h-8h) ou pule. Wat Pho até 8h = vazio. Doi Suthep ao pôr-do-sol."],
              ["Picante: 'mai phet' resolve 80%", "Memorize: 'mai phet, mai pet, decoy mai sai pet' (sem picante, criança, não coloca pimenta). Funciona."],
              ["Voo 30h sem estratégia = trauma", "Pegue voo noturno em todas as pernas. Reserve assento junto à bulkhead (parede) — espaço pra perna estendida e bercinho aéreo bebê."],
              ["Kids club VALE cada centavo", "4-6h por dia de paz pros pais + criança fazendo amigos. Hotel sem isso = pais cansam e brigam."],
              ["Cardápio infantil tailandês existe", "Arroz frito com ovo (khao pad khai), macarrão branco com manteiga (sen mee), frango grelhado (gai yang). Toda criança come."],
              ["7-Eleven é seu aliado", "Em toda esquina. Tem leite, água com gás, fralda Pampers, Tylenol infantil, sanduíche, suco de fruta. Salva crise."],
              ["Grab é mais seguro que tuk-tuk", "Com criança pequena: SEMPRE Grab (tem cinto). Tuk-tuk só pra trecho curto, adolescente, foto."],
              ["Janeiro-fevereiro é a melhor janela", "Sem chuva, 28-32°C, mar calmo. Evite abril (Songkran, 40°C) e maio-outubro (chuva forte + monção)."],
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

        {/* QUANDO */}
        <Section id="cap-quando" kicker="Capítulo 02" title="Quando ir com criança (mês a mês)">
          <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { m: "Nov–Fev", t: "🥇 IDEAL", d: "Seca total, 28-32°C, mar calmo, sem mosquito. Reservar hotel 4 meses antes. Natal e Ano Novo = lotado e caro." },
              { m: "Mar–início Abr", t: "✅ Bom", d: "Quente (34°C) mas seco. Mar ótimo. Ainda dá pra reservar bons hotéis. Última janela antes do calor extremo." },
              { m: "Mid Abr (Songkran)", t: "⚠️ Avaliar", d: "40°C + festa de água nas ruas. Criança 6+ AMA, bebê passa mal de calor. Hotel resort = ok; cidade = não." },
              { m: "Mai–Jun", t: "⚠️ Transição", d: "Chuva começa. Manhãs ok, tardes choviscam. Preço cai 30%. Bom pra orçamento apertado." },
              { m: "Jul–Set", t: "❌ Monção", d: "Chuva forte diária, mar agitado (perigo p/ criança), feriado escolar lotando hotel. Pula." },
              { m: "Out", t: "⚠️ Final monção", d: "Phuket/Krabi ainda chove. Koh Samui está seca (lado oposto). Se vai só Samui: ok." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <strong style={{ color: NEON }}>{r.m}</strong>
                  <span className="text-[12px] font-mono" style={{ color: GOLD }}>{r.t}</span>
                </div>
                <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.78)" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ROTEIRO 0-3 */}
        <Section id="cap-roteiro-bebe" kicker="Capítulo 03" title="Roteiro 0-3 anos — 12 dias, sem stress">
          <p>
            Bebê e criança até 3 anos = ritmo lento, máximo 1 atividade por dia, hotel com piscina rasa, distância
            curta entre destinos. Esse roteiro evita voo doméstico em criança pequena (usa só carro/van).
          </p>
          <div className="not-prose space-y-3 mt-4">
            {[
              { d: "D1-2", t: "Bangkok descompressão", info: "Hotel à beira-rio (Anantara Riverside). Só piscina e Lumphini Park. Jet lag = nada de planejar." },
              { d: "D3-4", t: "Bangkok família leve", info: "Sea Life Ocean World (subsolo Siam Paragon) + jantar After You. Templo Wat Pho 6h-8h, antes de esquentar." },
              { d: "D5", t: "Voo BKK → Krabi (1h10)", info: "Voo curto, manhã. Direto pro Centara Grand Krabi ou Sofitel Phokeethra. Não programar atividade." },
              { d: "D6-9", t: "Krabi — Klong Muang", info: "Praia rasa Klong Muang + piscina hotel. Day trip OPCIONAL: 4 Islands meio dia (lancha pequena, máx 4h)." },
              { d: "D10", t: "Van pro aeroporto + voo BKK", info: "Voo curto fim de tarde, chega pra dormir em Bangkok." },
              { d: "D11", t: "Compras e Lumphini", info: "Shopping CentralWorld (criança brinca no Centara), última compra de souvenir." },
              { d: "D12", t: "Voo de volta", info: "Voo noturno pra Brasil. Banho no hotel late check-out + jantar leve antes." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <strong className="font-display text-[16px]" style={{ color: NEON }}>{r.t}</strong>
                  <span className="text-[12px] font-mono tracking-wider" style={{ color: GOLD }}>{r.d}</span>
                </div>
                <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.78)" }}>{r.info}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ROTEIRO 4-8 */}
        <Section id="cap-roteiro-medio" kicker="Capítulo 04" title="Roteiro 4-8 anos — 14 dias, aventura controlada">
          <p>
            Idade de ouro: aguenta atividade, ainda dorme cedo, ainda acha tudo mágico. Combina Krabi + Chiang Mai
            (elefantes + zip line light).
          </p>
          <div className="not-prose space-y-3 mt-4">
            {[
              { d: "D1-3", t: "Bangkok — Sea Life + Wat Pho cedo + Chatuchak (sábado)", info: "Mercado Chatuchak tem ala de animais e brinquedos. Wat Arun no fim do dia (barco). 1 templo por dia, no máximo." },
              { d: "D4", t: "Voo BKK → Krabi", info: "Hotel Centara Grand Krabi com parque aquático interno." },
              { d: "D5-8", t: "Krabi — 4 Islands + Phi Phi day trip", info: "Snorkel raso, monkey beach (com cuidado), Maya Bay com reserva. Aula de cozinha thai infantil no resort." },
              { d: "D9", t: "Voo Krabi → Chiang Mai (via BKK, 4h total)", info: "Anantara Chiang Mai ou Le Méridien. Jantar Night Bazaar." },
              { d: "D10-12", t: "Chiang Mai — Elephant Nature Park + Doi Suthep", info: "Elephant Nature Park (ético, dia inteiro). Aula de cozinha thai pra criança (Asia Scenic). Mae Sa Waterfall." },
              { d: "D13", t: "Voo CM → BKK + descanso", info: "Hotel próximo aeroporto. Última piscina + jantar leve." },
              { d: "D14", t: "Voo de volta", info: "Voo noturno BKK → BR." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <strong className="font-display text-[16px]" style={{ color: NEON }}>{r.t}</strong>
                  <span className="text-[12px] font-mono tracking-wider" style={{ color: GOLD }}>{r.d}</span>
                </div>
                <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.78)" }}>{r.info}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ROTEIRO 9-14 */}
        <Section id="cap-roteiro-grande" kicker="Capítulo 05" title="Roteiro 9-14 anos — 14 dias, aventura real">
          <p>
            Pré-adolescente = quer aventura, quer mostrar foto pros amigos, quer history. Esse roteiro combina
            Bangkok cultural + Chiang Mai aventura + Phuket esportes aquáticos.
          </p>
          <div className="not-prose space-y-3 mt-4">
            {[
              { d: "D1-3", t: "Bangkok cultural + moderna", info: "Grand Palace cedo + Wat Pho + barco Chao Phraya. Shopping Siam Paragon (Sea Life + cinema). Night market Asiatique." },
              { d: "D4-7", t: "Chiang Mai aventura", info: "Flight of the Gibbon zip line (8+). Elephant Nature Park dia inteiro. Aula de Muay Thai infantil (Lanna). Sticky Waterfall (escalar)." },
              { d: "D8", t: "Voo CM → Phuket", info: "JW Marriott Mai Khao ou Renaissance. R Teen Club separado do kids." },
              { d: "D9-12", t: "Phuket esportes + Phi Phi", info: "Snorkel Similan (out-mai), surf school Kata Beach (8+), Phi Phi day trip, Big Buddha de moto-taxi, Phuket FantaSea show." },
              { d: "D13", t: "Voo Phuket → BKK", info: "Shopping last call + jantar especial." },
              { d: "D14", t: "Voo de volta", info: "Voo noturno BKK → BR." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <strong className="font-display text-[16px]" style={{ color: NEON }}>{r.t}</strong>
                  <span className="text-[12px] font-mono tracking-wider" style={{ color: GOLD }}>{r.d}</span>
                </div>
                <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.78)" }}>{r.info}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* VOO 30H */}
        <Section id="cap-voo" kicker="Capítulo 06" title="Voo de 30h sem chorar — estratégia por idade">
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            {[
              { t: "Bebê 0-12 meses", d: "Pedir bercinho aéreo (bulkhead row) na compra — gratuito mas limitado. Amamentar/mamadeira na decolagem e pouso (desentope ouvido). Trocar fralda no banheiro (todos têm trocador)." },
              { t: "1-3 anos", d: "Comprar assento próprio + cinto especial CARES (Amazon, US$ 65). Dramin infantil prescrito vet do voo + tablet com 10 episódios baixados. Lanche conhecido a cada 2h." },
              { t: "4-8 anos", d: "Pedir kids meal na reserva (24h antes). Mochila pequena com 1 livro, 1 brinquedo novo, fone com cordão (sem Bluetooth, perde). Levantar e andar a cada 3h." },
              { t: "9-14 anos", d: "Deixe assumir responsabilidade: passaporte com ele, mochila própria, escolha refeição. Power bank carregado, fones bons, série/filme baixados (Netflix offline 5+ episódios)." },
              { t: "Rota recomendada", d: "GRU → DOH (Qatar) → BKK = 22h total, 2 paradas. Evite escala única longa em LIS ou MAD (cansa mais)." },
              { t: "Hora de embarque", d: "Sempre noturno na ponte longa (GRU → DOH). Bebê dorme 8h, pais descansam. Sair de DOH de tarde pra chegar BKK de manhã (resetando relógio)." },
              { t: "Hidratação", d: "Cabine pressurizada desidrata. Água a cada hora, fruta no lanche, hidratante labial (criança racha lábio em voo)." },
              { t: "Imigração BKK com criança", d: "Fila family lane existe — pergunte. Visto on arrival pra brasileiro é gratuito até 30 dias. Foto na hora pra criança." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: GOLD }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CHECKLIST MALA */}
        <Section id="cap-mala" kicker="Capítulo 07" title="Checklist da mala da criança">
          <div className="not-prose grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-5" style={{ background: "rgba(56,189,248,0.06)", border: `1px solid rgba(56,189,248,0.25)` }}>
              <h4 className="font-display font-semibold mb-3" style={{ color: NEON }}>Leve do Brasil</h4>
              <ul className="space-y-2 text-[14.5px]" style={{ color: "rgba(244,239,230,0.8)" }}>
                <li>• Fralda Pampers 30 dias (lá tem, mais cara e secagem diferente)</li>
                <li>• Leite NAN/Aptamil 30 dias (lá tem outras marcas)</li>
                <li>• Lenço umedecido (lá é mais grosso e raro)</li>
                <li>• Tylenol/Dipirona infantil + termômetro</li>
                <li>• Dramin infantil (com receita)</li>
                <li>• Protetor solar baby FPS 70 (caro lá)</li>
                <li>• Repelente Exposis baby (lá é só DEET 30%)</li>
                <li>• Mamadeira reserva + chupeta reserva</li>
                <li>• Cobertor cheirinho (essencial sono em hotel)</li>
                <li>• Adaptador tomada universal</li>
                <li>• Carrinho leve dobrável (cabe no overhead)</li>
                <li>• Tablet com 20+ vídeos baixados</li>
              </ul>
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(245,158,11,0.06)", border: `1px solid rgba(245,158,11,0.25)` }}>
              <h4 className="font-display font-semibold mb-3" style={{ color: GOLD }}>Compre na Tailândia</h4>
              <ul className="space-y-2 text-[14.5px]" style={{ color: "rgba(244,239,230,0.8)" }}>
                <li>• Água mineral 1.5L (sempre engarrafada, mesmo escovar dente)</li>
                <li>• Frutas seguras (manga, melancia, banana — com casca)</li>
                <li>• Roupa de banho extra (Big C, ฿200)</li>
                <li>• Boia / colete infantil (Tops, ฿400)</li>
                <li>• Bonés e óculos descartáveis (qualquer 7-Eleven)</li>
                <li>• Toalhinha rápida-seca (mercados de praia)</li>
                <li>• Snack local: Pocky, Lay's wasabi (criança ama testar)</li>
                <li>• Caixa de plástico p/ piscina (Daiso, ฿60)</li>
                <li>• Picolé Magnum local (sabores diferentes)</li>
                <li>• Camisetinha Muay Thai souvenir (Chatuchak, ฿100)</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* HOTÉIS POR CIDADE */}
        <Section id="cap-hoteis" kicker="Capítulo 08" title="Hotéis família, cidade por cidade">
          <p>
            Hotéis testados em <strong>12 destinos mais visitados da Tailândia</strong> com criança —
            kids club real, family rooms, piscina rasa e babá sob demanda. Clique no nome pra abrir
            no Google Maps.
          </p>
          <div className="not-prose space-y-10 mt-6">
            {hoteisPorCidade.map((block) => (
              <div key={block.city}>
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-display text-[22px] font-semibold" style={{ color: NEON }}>{block.city}</h3>
                  <span className="text-[12px] uppercase tracking-[0.22em]" style={{ color: GOLD }}>{block.items.length} hotéis</span>
                </div>
                <p className="text-[14.5px] mb-4" style={{ color: "rgba(244,239,230,0.65)" }}>{block.tagline}</p>
                <LinkGrid items={block.items} />
              </div>
            ))}
          </div>
        </Section>


        {/* ATRAÇÕES */}
        <Section id="cap-atracoes" kicker="Capítulo 09" title="Atrações por idade (que valem o ingresso)">
          <p>
            Cada atração marcada com idade ideal. Levar criança fora da faixa = ela não curte e os pais brigam.
            Respeite a faixa.
          </p>
          <LinkGrid items={atracoesPorIdade} />
        </Section>

        {/* PRAIAS */}
        <Section id="cap-praias" kicker="Capítulo 10" title="As 10 praias mais seguras para criança">
          <p>
            Critério: mar raso, sem corrente, fundo de areia (não pedra), sombra natural ou estrutura, salva-vidas
            em high season. Patong/Karon NÃO entram (onda forte, corrente, jet ski sem regra).
          </p>
          <LinkGrid items={praiasSeguras} />
          <div className="not-prose mt-6 rounded-xl p-5 flex gap-3" style={{ background: "rgba(56,189,248,0.07)", border: `1px solid rgba(56,189,248,0.25)` }}>
            <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: NEON }} />
            <p className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: INK }}>Sistema de bandeiras:</strong> verde = ok / amarela = cautela /
              vermelha = NÃO entra (corrente). Tailândia respeita. Em Phuket e Krabi tem em todas as praias
              principais. Ensine a criança antes.
            </p>
          </div>
        </Section>

        {/* COMIDA */}
        <Section id="cap-comida" kicker="Capítulo 11" title="Cardápio infantil tailandês — o que pedir">
          <p>
            Tailandês tem prato pra criança que TODA criança come. Memorize esses nomes e mostre no celular se
            o garçom não entender:
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { t: "ข้าวผัดไข่ (khao pad khai)", d: "Arroz frito com ovo. Sem pimenta natural. 30-60฿. Em qualquer lugar." },
              { t: "ก๋วยเตี๋ยวน้ำ (kuay tiao nam)", d: "Sopa de macarrão de arroz com frango/porco. Pedir 'mai phet' (sem picante). Conforto puro." },
              { t: "ไก่ย่าง (gai yang)", d: "Frango grelhado com molho de mostarda doce. Tipo McDonald's tailandês. Vai bem com arroz branco." },
              { t: "หมูทอด (moo tod)", d: "Porco frito empanado. Igual nugget. Pedir com arroz branco e pepino." },
              { t: "ข้าวมันไก่ (khao man gai)", d: "Frango cozido com arroz aromático. Não picante. Hainan style. Toda criança ama." },
              { t: "ไข่เจียว (kai jiao)", d: "Omelete tailandesa fofinha sobre arroz. Café da manhã ou almoço. 40฿." },
              { t: "ผัดไทยไม่เผ็ด (pad thai mai phet)", d: "Pad thai sem pimenta. Sempre confirme 'mai phet' 2x. Camarão ou frango." },
              { t: "ข้าวเหนียวมะม่วง (khao niao mamuang)", d: "Sticky rice com manga e leite de coco. Sobremesa nacional. Criança AMA." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: NEON }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>
          <div className="not-prose mt-6 rounded-xl p-5 flex gap-3" style={{ background: "rgba(245,158,11,0.08)", border: `1px solid rgba(245,158,11,0.3)` }}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: GOLD }} />
            <p className="text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <strong style={{ color: GOLD }}>Frase salvadora:</strong> "mai phet, sam-rap dek" (sem picante,
              pra criança). Pronúncia: "mai pét, sãm-rap déck". Diga 2x. Se ainda assim vier picante: peça pra
              trocar — eles trocam.
            </p>
          </div>
        </Section>

        {/* RESTAURANTES */}
        <Section id="cap-restaurantes" kicker="Capítulo 12" title="Restaurantes que aceitam criança (e tem cadeirão)">
          <LinkGrid items={restaurantesFamilia} />
        </Section>

        {/* SAÚDE */}
        <Section id="cap-saude" kicker="Capítulo 13" title="Hospitais pediátricos e farmácia">
          <p>
            Tailândia tem hospital padrão americano que custa 1/4 do Brasil. Salve esses telefones no celular
            ANTES de chegar. Aceita seguro internacional (Bradesco, Allianz, IMG) direto.
          </p>
          <LinkGrid items={farmaciaHospital} />
        </Section>

        {/* VACINAS */}
        <Section id="cap-vacinas" kicker="Capítulo 14" title="Vacinas, seguro e medicamentos essenciais">
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            {[
              { t: "Vacina obrigatória", d: "Febre amarela (BR exige no retorno se passa por outro país). Cartão internacional emitido em CIEVS." },
              { t: "Vacinas recomendadas", d: "Hepatite A (todos), Hepatite B (atualizar), Tifoide (se vai comer street food), Raiva (se vai zona rural ou pet)." },
              { t: "Sem vacina contra dengue?", d: "Dengvaxia disponível 6-45 anos COM histórico de dengue. Sem histórico = não. Repelente é a defesa principal." },
              { t: "Seguro internacional", d: "OBRIGATÓRIO. Cobertura mínima USD 60.000. Pediatria 24h + repatriação. Allianz Travel, Bradesco Seguros, IMG Global." },
              { t: "Kit primeiros socorros", d: "Tylenol/Dipirona infantil, soro oral, Pomada Nebacetin, Bepantol, dramin, anti-alérgico (Hixizine), curativos." },
              { t: "Diarreia do viajante", d: "Comum primeira semana. Soro oral + Floratil + arroz branco resolve. Se febre + sangue: hospital." },
              { t: "Insolação", d: "Sintomas: vômito, sonolência, pele vermelha sem suor. Sombra + soro frio + hospital. Comum 1° dia em criança." },
              { t: "Mordida de macaco", d: "Em templos com macacos (Lopburi, Phi Phi). NÃO interaja. Se mordeu: hospital em 24h pra vacina raiva." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: GOLD }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* BABÁS */}
        <Section id="cap-babas" kicker="Capítulo 15" title="Babás verificadas por cidade">
          <p>
            Babás por hora pra jantar à dois ou day trip adulto. Esses serviços são profissionais (treinamento,
            inglês, verificação de antecedentes):
          </p>
          <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
            {[
              { t: "Best Kids Bangkok", d: "Agência premium. Babá com curso de primeiros socorros. ฿400/h, mínimo 4h. WhatsApp +66 2 044 5022. Reservar 48h antes." },
              { t: "Bambino Bangkok", d: "Especialista em bebê 0-2. Babá com diploma de enfermagem. ฿500/h. bambinobangkok.com." },
              { t: "Care.com Phuket", d: "Plataforma internacional, babás independentes avaliadas. ฿300-500/h. Filtros: inglês, idade da criança." },
              { t: "Hotel concierge (qualquer 5★)", d: "Mais caro (฿600-800/h) mas instantâneo e responsabilidade do hotel. Anantara, JW, Centara têm parceria fixa." },
              { t: "Nanny Pro Chiang Mai", d: "Babás bilíngues thai/inglês. ฿350/h. Bom pra famílias morando 1 mês+. nannyprochiangmai.com." },
              { t: "Sitters Samui (rede local)", d: "Recomendado por hotéis Bophut/Chaweng. ฿400/h. WhatsApp via concierge do seu hotel — pedem indicação." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${LINE}` }}>
                <strong style={{ color: NEON }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.75)" }}>{r.d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* BLACKLIST */}
        <Section id="cap-blacklist" kicker="Capítulo 16" title="Onde NÃO levar a criança">
          <LinkGrid items={blacklistFamilia} />
        </Section>

        {/* EMERGÊNCIA */}
        <Section id="cap-emergencia" kicker="Capítulo 17" title="Emergência — o que fazer nos primeiros 10 minutos">
          <div className="not-prose grid sm:grid-cols-2 gap-3">
            {[
              { t: "Febre alta (>38,5°C)", d: "Tylenol infantil dose por peso, banho morno (não frio), líquido. Se >39,5° ou >24h: hospital." },
              { t: "Diarreia + vômito", d: "Soro oral (vende em qualquer 7-Eleven). 100ml a cada vômito. Se >12h sem urinar: hospital." },
              { t: "Insolação", d: "Sombra, água fria no pescoço, líquido em gole pequeno. Se desmaio ou confusão: hospital imediato." },
              { t: "Picada de água-viva", d: "Lavar com VINAGRE (não água doce). Pomada hidrocortisona. Hospital se respiração alterada." },
              { t: "Queimadura solar grave", d: "Compressa fria + Bepantol + ibuprofeno. Bolhas grandes ou febre = hospital." },
              { t: "Engasgo", d: "Heimlich pediátrico (vídeo no guia). Se desmaiar: RCP. Ligar 1669 (ambulância) em paralelo." },
            ].map((r, i) => (
              <div key={i} className="rounded-xl p-4" style={{ background: "rgba(239,68,68,0.06)", border: `1px solid rgba(239,68,68,0.25)` }}>
                <strong style={{ color: "#fca5a5" }}>{r.t}</strong>
                <p className="text-[14px] mt-1" style={{ color: "rgba(244,239,230,0.78)" }}>{r.d}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-6 rounded-xl p-5" style={{ background: "rgba(245,158,11,0.08)", border: `1px solid rgba(245,158,11,0.3)` }}>
            <strong style={{ color: GOLD }}>Telefones de emergência (salve agora):</strong>
            <ul className="mt-2 space-y-1 text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <li>• <strong>Ambulância nacional:</strong> 1669</li>
              <li>• <strong>Tourist Police (inglês):</strong> 1155</li>
              <li>• <strong>Samitivej Children Hospital BKK:</strong> +66 2 022 2222</li>
              <li>• <strong>Bumrungrad BKK:</strong> +66 2 066 8888</li>
              <li>• <strong>Bangkok Hospital Phuket:</strong> +66 76 254 425</li>
              <li>• <strong>Bangkok Hospital Samui:</strong> +66 77 429 500</li>
              <li>• <strong>Embaixada do Brasil BKK:</strong> +66 2 119 6601</li>
            </ul>
          </div>
        </Section>

        {/* CUSTOS */}
        <Section id="cap-custos" kicker="Capítulo 18" title="Custos reais — família 4 pessoas, 14 dias">
          <div className="not-prose overflow-x-auto rounded-xl" style={{ border: `1px solid ${LINE}` }}>
            <table className="w-full text-[14.5px]" style={{ color: "rgba(244,239,230,0.85)" }}>
              <thead>
                <tr style={{ background: "rgba(56,189,248,0.08)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Item</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Econômica</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Conforto</th>
                  <th className="text-left p-3 font-semibold" style={{ color: GOLD }}>Premium</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Voo família 4 (Qatar/Latam)", "R$ 18.000", "R$ 22.000", "R$ 32.000"],
                  ["Hotel 14 noites (family room)", "R$ 5.600", "R$ 11.200", "R$ 25.000"],
                  ["Voos internos (4 trechos família)", "R$ 1.800", "R$ 2.400", "R$ 3.500"],
                  ["Alimentação 14 dias", "R$ 2.800", "R$ 5.000", "R$ 9.000"],
                  ["Atrações + day trips", "R$ 1.500", "R$ 3.000", "R$ 5.500"],
                  ["Transporte local (Grab)", "R$ 600", "R$ 1.200", "R$ 2.500"],
                  ["Babá (10h durante a viagem)", "—", "R$ 700", "R$ 1.400"],
                  ["Seguro internacional família", "R$ 800", "R$ 1.200", "R$ 2.000"],
                  ["Compras/souvenir", "R$ 500", "R$ 1.500", "R$ 3.500"],
                  ["TOTAL FAMÍLIA 4", "R$ 31.600", "R$ 48.200", "R$ 84.400"],
                ].map((r, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${LINE}`, background: i === 9 ? "rgba(56,189,248,0.06)" : "transparent" }}>
                    {r.map((c, j) => <td key={j} className="p-3" style={{ color: j === 0 ? INK : (i === 9 ? NEON : "rgba(244,239,230,0.75)"), fontWeight: i === 9 || j === 0 ? 600 : 400 }}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.6)" }}>
            Família de 3 (1 criança): subtraia ~25% do total. Família de 5: some +15% (3 quartos ou suíte). Bebê
            de colo (&lt;2 anos) paga 10% no voo internacional, gratuito nos voos internos TH.
          </p>
        </Section>

        {/* GRUPO */}
        <Section id="cap-grupo" kicker="Capítulo 19" title="Comunidade BR — famílias na Tailândia">
          <p>
            Grupo de WhatsApp ativo com 200+ famílias brasileiras que já viajaram ou estão viajando com criança
            pra Tailândia. Aqui você:
          </p>
          <ul className="not-prose space-y-2 mt-4 pl-4">
            {[
              "Tira dúvidas de última hora (sobre voo, hotel, vacina) com gente que ACABOU de viajar",
              "Pega indicação de babá testada por outra família BR semana passada",
              "Acha companheiros de viagem nas mesmas datas (rachar van, day trip)",
              "Vende/compra item da viagem (carrinho, boia, fralda excedente)",
              "Lê histórias REAIS (não influencer pago) de cada hotel e atração",
            ].map((t, i) => (
              <li key={i} className="text-[15px] flex gap-3" style={{ color: "rgba(244,239,230,0.82)" }}>
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: NEON }} />
                {t}
              </li>
            ))}
          </ul>
          <div className="not-prose mt-6 rounded-xl p-5" style={{ background: "rgba(56,189,248,0.07)", border: `1px solid rgba(56,189,248,0.25)` }}>
            <strong style={{ color: NEON }}>Como entrar:</strong>
            <p className="text-[14.5px] mt-2" style={{ color: "rgba(244,239,230,0.85)" }}>
              Link do grupo é enviado por e-mail no momento da compra do guia (em até 5 min). Acesso vitalício,
              moderado por mim pessoalmente — sem spam, sem afiliado, só comunidade de viajante.
            </p>
          </div>
        </Section>

        {/* EXPERIÊNCIAS POR CIDADE */}
        <Section id="cap-experiencias-cidades" kicker="Capítulo 20" title="Experiências para crianças, cidade por cidade">
          <p>
            Tudo organizado por destino — clique no link de cada experiência pra abrir direto no Google Maps,
            ver horário e como chegar.
          </p>
          <div className="not-prose space-y-10 mt-6">
            {experienciasPorCidade.map((block) => (
              <div key={block.city}>
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-display text-[22px] font-semibold" style={{ color: NEON }}>{block.city}</h3>
                  <span className="text-[12px] uppercase tracking-[0.22em]" style={{ color: GOLD }}>{block.items.length} experiências</span>
                </div>
                <p className="text-[14.5px] mb-4" style={{ color: "rgba(244,239,230,0.65)" }}>{block.tagline}</p>
                <LinkGrid items={block.items} />
              </div>
            ))}
          </div>
        </Section>



        {/* FOOTER */}
        <footer className="py-16 text-center">
          <p className="text-[14px]" style={{ color: "rgba(244,239,230,0.55)" }}>
            Guia atualizado regularmente · Baseado em 5 viagens com filhos pessoais ·
            Em emergência, ligue 1155 (Tourist Police) — falam inglês.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Criancas7811;

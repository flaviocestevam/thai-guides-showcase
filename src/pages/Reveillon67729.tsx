import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Sparkles, AlertTriangle, Calendar, CheckCircle2, MapPin, Hotel,
  PartyPopper, Wallet, Users, Sun, Cloud, Music, Utensils, Camera,
  Plane, Car, Heart, Star, ListChecks, HelpCircle, Gift, Moon, Clock,
} from "lucide-react";

const VIOLET = "#7C3AED";
const GOLD = "#F59E0B";
const NAVY = "#1E1B4B";
const CREAM = "#FFF8EE";

const Section = ({
  id, icon: Icon, kicker, title, children,
}: { id: string; icon: any; kicker: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 md:py-20 border-t border-slate-200">
    <div className="container mx-auto px-5 max-w-5xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ background: VIOLET, color: "white" }}>
          <Icon className="w-5 h-5" />
        </span>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: VIOLET }}>{kicker}</span>
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
    info: "bg-violet-50 border-violet-300",
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
          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: VIOLET }} />
          <span>{b ? <><strong>{a}</strong> — {b}</> : a}</span>
        </li>
      );
    })}
  </ul>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl md:text-2xl font-bold mt-6 mb-3" style={{ color: NAVY }}>{children}</h3>
);

// ===== DADOS =====
const cidades = [
  { n: "Bangkok", vibe: "Megacidade · rooftops e shows de fogos no Chao Phraya", clima: "Quente e seco", publico: "Casal urbano, grupo de amigos, solo", faixa: "$$ a $$$$" },
  { n: "Phuket", vibe: "Praia + festa intensa em Patong/Bangla", clima: "Sol garantido (Andaman)", publico: "Jovem, casal, grupo", faixa: "$$$ a $$$$" },
  { n: "Krabi (Ao Nang)", vibe: "Romance e família, ceia e fogos em resort", clima: "Sol garantido (Andaman)", publico: "Casal tranquilo, família", faixa: "$$ a $$$" },
  { n: "Koh Samui", vibe: "Praia, beach clubs e jantares pé na areia em Chaweng", clima: "Pode chover (Golfo)", publico: "Casal, família, grupo", faixa: "$$$ a $$$$" },
  { n: "Koh Phangan", vibe: "Half Moon e festa alternativa em Haad Rin", clima: "Pode chover (Golfo)", publico: "Jovem, festa, mochileiro", faixa: "$ a $$" },
  { n: "Koh Lanta", vibe: "Réveillon descalço, com fogos artesanais e luar", clima: "Sol garantido (Andaman)", publico: "Casal, família, quem foge de multidão", faixa: "$$ a $$$" },
  { n: "Koh Tao", vibe: "Festa pequena, sunset bar e mergulho no 01/01", clima: "Pode chover (Golfo)", publico: "Mergulhador, casal jovem", faixa: "$ a $$" },
  { n: "Pattaya", vibe: "Walking Street e festa adulta em massa", clima: "Quente e seco", publico: "Grupo de amigos, festa adulta", faixa: "$$ a $$$" },
  { n: "Hua Hin", vibe: "Réveillon familiar real, fogos na praia", clima: "Quente e seco", publico: "Família, casal tranquilo", faixa: "$$ a $$$" },
  { n: "Chiang Mai", vibe: "Frio do norte, jantar gourmet e lanternas no Ping", clima: "Fresco à noite", publico: "Casal cultural, foto e gastronomia", faixa: "$$ a $$$" },
];

const festas: { categoria: string; itens: [string, string, string][] }[] = [
  { categoria: "🌃 Rooftops em Bangkok", itens: [
    ["Sky Bar (Lebua)", "Sirocco · jantar + virada com Chao Phraya aos pés", "$$$$"],
    ["Vertigo (Banyan Tree)", "Sathorn · 360° sem vidro, vista pra Sukhumvit", "$$$$"],
    ["Octave (Marriott Sukhumvit)", "Soi 57 · clima jovem, música e fogos da Sukhumvit", "$$$"],
    ["Above Eleven", "Sukhumvit 11 · vista de Soi 11 e DJ até de manhã", "$$$"],
    ["Cielo Sky Bar", "Ekkamai · pista, fogos do Bayoke e da torre Mahanakhon", "$$$"],
    ["Tichuca", "Phromphong · pé-direito enorme, drinks autorais", "$$$"],
  ]},
  { categoria: "🎆 Jantares com fogos privados", itens: [
    ["Cape Panwa (Phuket)", "Ceia + show de fogos na praia particular", "$$$$"],
    ["Banyan Tree Krabi", "Jantar à beira-mar com fogos do resort", "$$$$"],
    ["Anantara Hua Hin", "Gala tailandesa, mesa pé na areia", "$$$"],
    ["Six Senses Yao Noi", "Réveillon zero-multidão, jantar privativo", "$$$$"],
    ["Bo.lan (Bangkok)", "Menu degustação tailandês autoral", "$$$"],
    ["The Riverhouse (Chiang Mai)", "Cozinha do norte, vista do Ping", "$$"],
  ]},
  { categoria: "🏖️ Festas pé na areia", itens: [
    ["Half Moon Festival (Koh Phangan)", "Versão Réveillon, floresta de Ban Tai", "$$$"],
    ["Paradise Beach (Phuket)", "Bangla Beach Party", "$$"],
    ["Ark Bar (Chaweng, Samui)", "Festa de praia até o amanhecer", "$"],
    ["Sairee Beach (Koh Tao)", "Vários bares emendam fogos artesanais", "$"],
    ["Ao Nang Beach (Krabi)", "Resorts emendam pista na areia", "$"],
    ["Klong Dao (Koh Lanta)", "Fogos baixinhos, fogueira, clima de família", "$"],
  ]},
  { categoria: "💃 Vida noturna pesada", itens: [
    ["Bangla Road (Phuket)", "Avenida fechada, 200 bares", "$"],
    ["Walking Street (Pattaya)", "Festa adulta gigante, fogos no fim", "$"],
    ["Khao San (Bangkok)", "Festa mochileira clássica, barato", "$"],
    ["RCA / Route 66 (Bangkok)", "Pista local enorme, mais jovem tailandês", "$"],
    ["Soi 11 (Bangkok)", "Concentração de bares e clubs", "$$"],
    ["Haad Rin (Phangan)", "Casas de praia, fogos baixos", "$"],
  ]},
  { categoria: "👨‍👩‍👧 Família e ceia", itens: [
    ["Anantara Riverside (Bangkok)", "Buffet + jardim com fogos do rio", "$$$"],
    ["Centara Grand Hua Hin", "Ceia colonial, fogos na praia", "$$$"],
    ["Sheraton Krabi", "Ceia + brigada infantil + show de fogos", "$$"],
    ["Hyatt Regency Koh Samui", "Buffet familiar e fogos privados", "$$$"],
    ["Le Méridien Chiang Rai", "Jantar tailandês + apresentação cultural", "$$"],
    ["Avani+ Hua Hin", "Gala mais casual, kids club aberto", "$$"],
  ]},
  { categoria: "🎵 Festivais e eventos", itens: [
    ["Wonderfruit (geralmente dez)", "Festival arte+música em Pattaya, datas variam", "$$$"],
    ["S2O (verão tailandês)", "Não no réveillon, mas confirme datas", "—"],
    ["NYE Countdown CentralWorld (Bangkok)", "A maior contagem regressiva do país, gratuita", "Grátis"],
    ["Asiatique Riverfront (Bangkok)", "Roda gigante e fogos no rio, grátis", "Grátis"],
    ["Phuket FantaSea (especial NYE)", "Show + ceia + fogos", "$$$"],
    ["Tribal Gathering (Phangan)", "Som tribal alternativo, semanas após NYE", "$$"],
  ]},
];

const hoteisFogos = [
  { cidade: "Bangkok", lista: [
    "Lebua at State Tower — quartos do alto têm vista do Chao Phraya",
    "Shangri-La Bangkok — sacadas viradas pro rio, show direto na frente",
    "Anantara Riverside — fogos do rio + show privado do hotel",
    "Millennium Hilton — em frente à Asiatique, vista das duas margens",
    "Mandarin Oriental — sacada premium pro rio",
  ]},
  { cidade: "Phuket", lista: [
    "Cape Panwa — fogos privados da praia do hotel",
    "Amari Phuket (Patong) — vista da baía de Patong",
    "The Surin — fogos baixos na enseada de Pansea",
    "Trisara — réveillon zero-multidão, fogos próprios",
    "Anantara Layan — varanda com vista do mar",
  ]},
  { cidade: "Koh Samui", lista: [
    "Anantara Bophut — fogos no front beach",
    "Hansar Samui — varanda direto pra praia, fogos a 100m",
    "Banyan Tree Samui — vila com piscina e show particular",
  ]},
  { cidade: "Krabi e Ao Nang", lista: [
    "Centara Grand Krabi — show de fogos privado",
    "Rayavadee — vila com vista de Phra Nang",
    "Sheraton Krabi — fogos na praia em frente",
  ]},
  { cidade: "Hua Hin", lista: [
    "Centara Grand — ceia + fogos na praia",
    "Anantara Hua Hin — front beach com fogos longos",
    "InterContinental — vista privilegiada",
  ]},
];

const pacotes = [
  { tipo: "Econômico (1 pessoa)", custo: "R$ 8.000 a R$ 11.000", inclui: "Voo + 6 noites em hostel/pousada + 1 festa premium + transporte local", obs: "Phangan, Koh Tao ou Krabi fora do epicentro" },
  { tipo: "Confort (casal)", custo: "R$ 18.000 a R$ 24.000 (2 pessoas)", inclui: "Voo + 7 noites em hotel 4★ + 2 jantares + 1 festa", obs: "Phuket Karon/Kata, Samui Bophut ou Bangkok Sukhumvit" },
  { tipo: "Premium (casal)", custo: "R$ 30.000 a R$ 45.000 (2 pessoas)", inclui: "Voo executivo regional + 7 noites em resort 5★ + gala + transfers privados", obs: "Cape Panwa, Banyan Tree, Six Senses, Anantara" },
  { tipo: "Família 4 pessoas", custo: "R$ 32.000 a R$ 50.000", inclui: "Voo + 7 noites em resort com kids club + ceia + fogos privados", obs: "Hua Hin, Krabi Ao Nang, Samui Chaweng Noi" },
];

const roteiro = [
  { dia: "28/12 (Sáb)", titulo: "Chegada e aclimatação", linhas: [
    "Pouse em Bangkok ou cidade-base. Não tente conexão noturna pra ilha cansado.",
    "Jantar leve, hidrate, durma cedo. Jet lag mata réveillon.",
    "Confirme reservas de 30/12 e 31/12 por e-mail (não confie em booking sem reconfirmação).",
  ]},
  { dia: "29/12 (Dom)", titulo: "Translado ou exploração", linhas: [
    "Voo doméstico cedo (NokAir, Thai Vietjet, Bangkok Airways).",
    "Em Phuket: pegue van/transfer privado, evite táxi de aeroporto.",
    "Tarde livre, primeira refeição local, troque dinheiro em SuperRich.",
  ]},
  { dia: "30/12 (Seg)", titulo: "Pré-réveillon e ensaio", linhas: [
    "Faça o caminho do hotel à festa principal NA HORA que vai voltar dia 31 (ensaio do trânsito).",
    "Compre antecipado ingresso de festas com lotação (Half Moon, Sky Bar).",
    "Massagem leve à tarde. Réveillon descansado começa um dia antes.",
  ]},
  { dia: "31/12 (Ter)", titulo: "A virada", linhas: [
    "Almoço leve, hidrate. Evite buffet pesado.",
    "16h–18h: descanso obrigatório. Sair pra festa às 21h.",
    "Antecipe táxi/Grab: depois das 22h, preços triplicam e ruas fecham.",
    "00:00: brinde. 00:30 já saia se for ir pra outro lugar — fila gigante depois.",
  ]},
  { dia: "01/01 (Qua)", titulo: "Recuperação", linhas: [
    "Café da manhã longo, hidrate com coco verde e suco de melancia.",
    "Tarde de praia/spa. Nada de moto, nada de mergulho com ressaca.",
    "Jantar leve, durma cedo.",
  ]},
  { dia: "02/01 (Qui)", titulo: "Última experiência", linhas: [
    "Day trip leve (Phi Phi, Similan light, templo, mercado).",
    "Compre lembranças hoje, não na véspera do voo.",
    "Confirme online o voo de volta (mudanças são comuns nessa semana).",
  ]},
];

const fullMoonNYE = [
  "Em ano comum a Full Moon Party acontece na lua cheia. No réveillon, Haad Rin faz a edição especial 31/12 — mesmo formato (bola de fogo, balde, pista na areia), com lotação 3x maior.",
  "Half Moon Festival rola em Ban Tai (mesma ilha) entre 27/12 e 02/01 com várias noites. Mais arrumado, mais caro, melhor som.",
  "Chegue em Phangan ATÉ 28/12. Ferries de 30 e 31/12 ficam absurdos e travam.",
  "Hospedagem em Haad Rin tem 4 noites mínimas e preço 5x. Alternativa: ficar em Baan Tai, ir de táxi (200 THB).",
  "Leve roupa que pode molhar com tinta neon, sapato fechado de saída de água, dinheiro em pochete impermeável.",
  "Evite balde de gelo de bar duvidoso. Compre garrafa fechada no 7-Eleven e leve.",
  "Não suba na bola de fogo. Não pule de pedra. Não nade bêbado. Réveillon é só um — não vire estatística.",
];

const logistica = [
  { tema: "Bangkok", linhas: [
    "Rua fechada em frente ao CentralWorld a partir das 18h.",
    "BTS funciona até ~02h no NYE. Estação Siam lota — desça em Chit Lom ou Ratchathewi.",
    "Grab/Bolt cobram 2–3x das 22h às 03h. Reserve antecipado pelo app.",
    "Barco do Chao Phraya: linhas extras até 01h, ótimo se hotel for ribeirinho.",
  ]},
  { tema: "Phuket", linhas: [
    "Bangla Road fecha pra carro às 18h. Estacione em Patong Beach Road.",
    "Tuk-tuk de Patong pra Kata depois das 00h: 600–1.000 THB. Negocie antes.",
    "Volta pra Karon/Kata: combine retorno com motorista privado às 23h.",
  ]},
  { tema: "Koh Phangan (Haad Rin)", linhas: [
    "Estradas viram pista única. Táxi-pickup é a melhor opção.",
    "Última balsa de Samui pra Phangan no NYE costuma ser ~17h. Confirme.",
    "Volte pro hotel antes do amanhecer ou depois das 09h. Entre 06h e 09h vira caos.",
  ]},
  { tema: "Krabi e Samui", linhas: [
    "Ao Nang fecha trecho costeiro às 20h. Estacione em Klong Muang.",
    "Em Chaweng (Samui) a Beach Road fica intransitável depois das 21h.",
  ]},
];

const dicasClima = [
  "Lado Andaman (Phuket, Krabi, Phi Phi, Koh Lanta, Koh Yao): seca total, sol garantido.",
  "Lado Golfo (Koh Samui, Koh Phangan, Koh Tao): pode ter chuva curta no fim de tarde, geralmente para.",
  "Bangkok: 28–32°C, baixa umidade, noite agradável.",
  "Chiang Mai: 13–25°C, leve uma jaqueta leve. Pode ter neblina (queimadas começam só em fevereiro).",
  "Vento de monção nordeste no Golfo pode fechar travessia pra Tao por 1–2 dias. Tenha plano B.",
];

const calendario = [
  { dia: "28/12", evt: "Wonderfruit Festival (Pattaya) costuma encerrar nessa data — confirme programação anual" },
  { dia: "29/12", evt: "Início da Half Moon Festival Week em Phangan (datas variam, confirme)" },
  { dia: "30/12", evt: "Pré-NYE em rooftops de Bangkok — preços mais baixos que 31/12, mesma vista" },
  { dia: "31/12", evt: "Countdown CentralWorld (Bangkok, gratuito) · Fogos no Chao Phraya · Bangla, Walking Street, Haad Rin" },
  { dia: "01/01", evt: "Brunch de réveillon em resorts (incluso na ceia) · Praias vazias até 11h" },
  { dia: "02/01", evt: "Reabertura completa de bancos e correios · Voos domésticos voltam ao preço normal" },
];

const checklist = [
  "Reservar hotel até setembro (alta temporada esgota cedo)",
  "Comprar passagem aérea até outubro (pacotes baratos somem em novembro)",
  "Comprar ingresso de festa principal antecipado (Half Moon, gala, jantar)",
  "Seguro viagem com cobertura para eventos e fogos (alguns excluem)",
  "Avisar banco e cartão de viagem internacional",
  "Trocar parte do dinheiro em real para THB no Brasil (cobertura mínima 3 dias)",
  "Confirmar reserva 7 dias antes por e-mail (no-show alto em alta temporada)",
  "Print de passaporte, voos, hotéis e ingressos em pochete impermeável",
  "Roupa branca opcional (não é tradição local, mas brasileiros gostam)",
  "Sapato fechado pra festa de praia (vidro quebrado é comum)",
];

const erros = [
  "Reservar hotel em novembro/dezembro — preço dobra ou triplica",
  "Ir pra ilha errada na monção (Samui em ano de chuva)",
  "Acreditar em pacote 'open bar premium' sem ler avaliações",
  "Pegar Grab/táxi entre 22h e 02h sem reservar antes",
  "Subestimar fila de balsa nas ilhas no dia 31",
  "Beber balde em bar duvidoso (metanol existe e mata)",
  "Confiar em fogos amadores na praia — queimaduras de 3º grau acontecem todo ano",
  "Tentar ver fogos de dois pontos diferentes na mesma noite",
  "Não confirmar reserva 7 dias antes (overbooking acontece)",
  "Deixar passaporte com locadora de moto em pleno NYE",
];

const Reveillon67729 = () => {
  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <SEO
        title="Guia Réveillon na Tailândia — Festas, Hotéis e Roteiros"
        description="Guia completo do Réveillon na Tailândia: 10 cidades comparadas, 36+ festas, hotéis com vista dos fogos, roteiros 28/12 a 02/01, logística da virada e comparativo de pacotes."
        canonicalPath="/reveillon-tailandia67729"
      />
      <Header />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-16 md:py-24" style={{ background: `linear-gradient(135deg, ${NAVY}, ${VIOLET})` }}>
          <div className="container mx-auto px-5 max-w-5xl text-center text-white">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: GOLD, color: NAVY }}>
              🎆
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-5">
              Guia do Réveillon na Tailândia
            </h1>
            <p className="text-lg md:text-xl text-violet-100 max-w-3xl mx-auto mb-6">
              10 cidades comparadas, 36+ festas avaliadas, hotéis com vista dos fogos,
              roteiros completos de 28/12 a 02/01, logística da virada e comparativo de pacotes.
              Do econômico ao premium — sem inventar, sem prometer o que não entrega.
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {["10 cidades", "36+ festas", "Hotéis com fogos", "Pacotes comparados", "Roteiros 28/12–02/01", "Logística da virada", "Edição Full Moon NYE", "Checklist pré-viagem"].map(t => (
                <span key={t} className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-white">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* AVISO */}
        <section className="py-10" style={{ background: "#FEF3C7" }}>
          <div className="container mx-auto px-5 max-w-5xl flex gap-4 items-start">
            <AlertTriangle className="w-7 h-7 flex-shrink-0 text-amber-700 mt-1" />
            <div className="text-[15px] text-amber-900">
              <strong>Importante:</strong> preços, datas e disponibilidade mudam toda semana entre outubro e dezembro.
              Use este guia como referência e <strong>sempre confirme antes de pagar</strong> — hotel por e-mail,
              festa por site oficial, voo direto na cia aérea. Réveillon não tem reedição.
            </div>
          </div>
        </section>

        {/* 1 - PANORAMA */}
        <Section id="panorama" icon={Sparkles} kicker="Capítulo 1" title="Por que o Réveillon na Tailândia é tão especial">
          <p>Final de dezembro é alta estação seca em quase todo o país, com sol garantido no lado Andaman e clima quente no norte e centro. Hotéis fazem programações próprias, restaurantes fecham mesa exclusiva, praias têm shows de fogos privados e cidades como Bangkok armam contagens regressivas gigantes em ruas inteiras.</p>
          <p>O grande erro do brasileiro é tratar Réveillon na Tailândia como "mais um dia de viagem". Não é. É a maior data turística do ano lá. Tudo lota, tudo encarece, tudo precisa ser planejado com antecedência.</p>
          <Card title="O que esperar de cada região" tone="info">
            <Bul items={[
              ["Andaman (Phuket, Krabi, Phi Phi, Lanta)", "Sol garantido, mar calmo, lotação máxima"],
              ["Golfo (Samui, Phangan, Tao)", "Possível chuva, mas festa intensa e barata"],
              ["Bangkok", "Megafestas urbanas, rooftops, fogos no rio"],
              ["Norte (Chiang Mai, Chiang Rai)", "Noite fresca, gastronomia e cultura"],
              ["Litoral oeste continental (Hua Hin, Cha-Am)", "Família, ceia e fogos na praia"],
            ]} />
          </Card>
        </Section>

        {/* 2 - 10 CIDADES */}
        <Section id="cidades" icon={MapPin} kicker="Capítulo 2" title="10 cidades comparadas para virar o ano">
          <div className="grid md:grid-cols-2 gap-4">
            {cidades.map((c) => (
              <Card key={c.n} title={c.n}>
                <p><strong>Vibe:</strong> {c.vibe}</p>
                <p><strong>Clima:</strong> {c.clima}</p>
                <p><strong>Público ideal:</strong> {c.publico}</p>
                <p><strong>Faixa de preço:</strong> {c.faixa}</p>
              </Card>
            ))}
          </div>
          <Card tone="good" title="Resumo rápido por perfil">
            <Bul items={[
              ["Casal romântico", "Krabi (Rayavadee), Koh Lanta, Six Senses Yao Noi"],
              ["Casal jovem com festa", "Phuket (Patong/Kata), Bangkok Sukhumvit"],
              ["Família com crianças", "Hua Hin, Krabi Ao Nang, Samui Chaweng Noi"],
              ["Grupo de amigos festeiro", "Phuket Bangla, Phangan Haad Rin, Pattaya"],
              ["Solo / mochileiro", "Phangan, Koh Tao, Khao San em Bangkok"],
              ["Quem foge de multidão", "Koh Lanta, Koh Yao Noi, Trisara em Phuket"],
            ]} />
          </Card>
        </Section>

        {/* 3 - 50 FESTAS */}
        <Section id="festas" icon={PartyPopper} kicker="Capítulo 3" title="Top festas avaliadas por categoria">
          <p>Selecionamos por categoria pra você escolher pelo seu estilo — não pelo Instagram. Cada festa tem cidade, vibe e faixa de preço (em ordem crescente: $, $$, $$$, $$$$).</p>
          {festas.map((g) => (
            <div key={g.categoria} className="mt-6">
              <H3>{g.categoria}</H3>
              <div className="grid md:grid-cols-2 gap-3">
                {g.itens.map(([nome, desc, preco]) => (
                  <div key={nome} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-2">
                      <strong className="text-slate-900">{nome}</strong>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: VIOLET, color: "white" }}>{preco}</span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Card tone="warn" title="Antes de comprar ingresso de festa">
            <Bul items={[
              "Confirme se o preço inclui open bar e até que horas",
              "Veja se a virada conta com fogos do próprio evento ou da cidade",
              "Pergunte se é necessário código de vestimenta (rooftops exigem)",
              "Confirme se há transporte de volta organizado",
              "Compre direto no site oficial — revendas terceirizadas inflam 40%",
            ]} />
          </Card>
        </Section>

        {/* 4 - HOTÉIS COM FOGOS */}
        <Section id="hoteis-fogos" icon={Hotel} kicker="Capítulo 4" title="Hotéis com vista dos fogos pela janela">
          <p>Lista de hospedagens onde a queima principal acontece à frente — sem precisar sair pra rua, sem fila, sem fila do banheiro, sem táxi às 02h. Reserve por e-mail direto, mencione "high-floor river/sea view".</p>
          <div className="grid md:grid-cols-2 gap-4">
            {hoteisFogos.map((h) => (
              <Card key={h.cidade} title={h.cidade}>
                <Bul items={h.lista} />
              </Card>
            ))}
          </div>
        </Section>

        {/* 5 - ROTEIROS DIA A DIA */}
        <Section id="roteiros" icon={Calendar} kicker="Capítulo 5" title="Roteiro completo dia a dia (28/12 a 02/01)">
          <p>Estrutura testada para chegar inteiro na virada e sair inteiro da viagem. Adapte cidade, mas mantenha o esqueleto.</p>
          {roteiro.map((r) => (
            <Card key={r.dia} title={`${r.dia} — ${r.titulo}`}>
              <Bul items={r.linhas} />
            </Card>
          ))}
        </Section>

        {/* 6 - LOGÍSTICA */}
        <Section id="logistica" icon={Car} kicker="Capítulo 6" title="Logística da virada — não perca a contagem no trânsito">
          <p>Em todas as cidades, a regra é a mesma: o transporte quebra entre 22h e 03h. Quem não planejou volta a pé.</p>
          {logistica.map((l) => (
            <Card key={l.tema} title={l.tema}>
              <Bul items={l.linhas} />
            </Card>
          ))}
        </Section>

        {/* 7 - CLIMA */}
        <Section id="clima" icon={Sun} kicker="Capítulo 7" title="Clima por região na semana do Réveillon">
          <Bul items={dicasClima} />
        </Section>

        {/* 8 - PACOTES */}
        <Section id="pacotes" icon={Wallet} kicker="Capítulo 8" title="Comparativo de pacotes — econômico ao premium">
          <p>Estimativas reais com base nos últimos 3 anos. Variação cambial e antecedência mudam tudo — use como referência de bolso.</p>
          <div className="grid gap-4">
            {pacotes.map((p) => (
              <Card key={p.tipo} title={p.tipo}>
                <p><strong>Custo total:</strong> {p.custo}</p>
                <p><strong>Inclui:</strong> {p.inclui}</p>
                <p><strong>Onde se aplica:</strong> {p.obs}</p>
              </Card>
            ))}
          </div>
          <Card tone="info" title="Como economizar de verdade">
            <Bul items={[
              "Reservar até setembro corta 30–50% do hotel",
              "Voo doméstico interno comprado com 60+ dias é metade do preço",
              "Hotel a 800m da praia principal cai 40% e a caminhada é a mesma",
              "Jantar fora do hotel na noite 31 é 60% mais barato (e mais autêntico)",
              "Grupo de 4 pessoas em vila com piscina é mais barato que 4 quartos",
            ]} />
          </Card>
        </Section>

        {/* 9 - CALENDÁRIO */}
        <Section id="calendario" icon={Clock} kicker="Capítulo 9" title="Calendário 28/12 a 02/01">
          <div className="grid md:grid-cols-2 gap-3">
            {calendario.map((c) => (
              <div key={c.dia} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: VIOLET }}>{c.dia}</div>
                <p className="text-slate-700">{c.evt}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 10 - FULL MOON NYE */}
        <Section id="full-moon-nye" icon={Moon} kicker="Capítulo 10" title="Edição especial: Full Moon Party no Réveillon">
          <p>Réveillon em Koh Phangan é capítulo à parte. A festa muda de tamanho, ritmo e perigos. Leia tudo antes de embarcar.</p>
          <Bul items={fullMoonNYE} />
          <Card tone="warn" title="Não vire estatística">
            <p>Todo ano há mortes em Haad Rin no NYE — afogamento, queda de pedra, bebida adulterada. Não é exagero. Vá em grupo, combine pontos de encontro, leve câmara fotográfica do celular já configurada pra emergência (ligar 1155 — turist police).</p>
          </Card>
        </Section>

        {/* 11 - GASTRONOMIA */}
        <Section id="gastronomia" icon={Utensils} kicker="Capítulo 11" title="Gastronomia de Réveillon">
          <Card title="Jantares tailandeses autênticos pra noite 30">
            <Bul items={[
              ["Bo.lan (Bangkok)", "Menu degustação autoral, autêntico tailandês"],
              ["Issaya Siamese Club (Bangkok)", "Chef Ian Kittichai, casa colonial"],
              ["Sühring (Bangkok)", "Não é tailandês, mas é experiência única — alemão duas estrelas"],
              ["Mia (Bangkok)", "Casual fine-dining, autoral"],
              ["Khao (Chiang Mai)", "Cozinha do norte em ambiente íntimo"],
              ["Suay (Phuket)", "Cozinha de chef em casa-térrea"],
            ]} />
          </Card>
          <Card title="Ceia 31/12 em resort">
            <p>Quase todo resort 4★/5★ oferece gala buffet com champanhe à meia-noite e show de fogos próprio. Faixa: 3.500 a 12.000 THB por pessoa. Reserve por e-mail direto com 60 dias.</p>
          </Card>
          <Card title="Comida de rua pré-festa">
            <Bul items={[
              "Pad krapow gai (frango com manjericão tailandês e arroz com ovo) — leve, energético",
              "Tom yum gai — caldo com gengibre e capim-limão, ótimo pra digestão",
              "Mangosteen ou rambutan — frutas locais, hidratam",
              "Evite frutos do mar crus na véspera — bactéria de gelo mal manipulado",
            ]} />
          </Card>
        </Section>

        {/* 12 - SEGURANÇA */}
        <Section id="seguranca" icon={Heart} kicker="Capítulo 12" title="Segurança no Réveillon">
          <Card tone="warn" title="O que NÃO fazer">
            <Bul items={[
              "Aceitar bebida aberta de estranho — escopolamina existe na Tailândia",
              "Subir em fogos ou pular bola de fogo (Haad Rin)",
              "Pilotar moto/scooter depois da meia-noite",
              "Nadar à noite — correntes mudam, ninguém vê",
              "Sair sem cópia digital do passaporte no celular",
              "Andar sozinho(a) em ruelas escuras (Soi 11 ao 24 de Sukhumvit)",
              "Confiar em fogo artesanal em praia (Krabi, Phangan)",
            ]} />
          </Card>
          <Card tone="good" title="Faça">
            <Bul items={[
              "Tourist Police: 1155 (em inglês)",
              "Ambulância: 1669",
              "Salve no celular o endereço do hotel em tailandês",
              "Combine ponto de encontro fixo com o grupo (e horário pra parar de procurar)",
              "Pochete impermeável: passaporte, cartão, dinheiro, celular",
              "Carregue um pequeno powerbank — celular descarrega rápido em festa",
            ]} />
          </Card>
        </Section>

        {/* 13 - VOOS */}
        <Section id="voos" icon={Plane} kicker="Capítulo 13" title="Voos — quando comprar e o que evitar">
          <Bul items={[
            ["Comprar com 90+ dias", "É o ponto doce — economia média de R$ 2.500 vs. último mês"],
            ["Conexão em Doha/Dubai/Istambul", "Costuma ser mais barato que Europa"],
            ["Voo doméstico", "Bangkok Airways, Thai Vietjet, NokAir, AirAsia — compare em SkyScanner em incógnito"],
            ["Bagagem", "Tailandesa low-cost cobra cara pelo despacho — embuta no preço total"],
            ["Conexão curta em Bangkok", "Evite menos de 3h. Saída de internacional pra doméstico exige re-check"],
            ["Volta dia 02/01", "Mais barato que 03/01 e 04/01 — confira"],
            ["Não confie em milha alta temporada", "Disponibilidade de prêmio cai 90% no NYE"],
          ]} />
        </Section>

        {/* 14 - CHECKLIST */}
        <Section id="checklist" icon={ListChecks} kicker="Capítulo 14" title="Checklist pré-viagem">
          <Bul items={checklist} />
        </Section>

        {/* 15 - ERROS COMUNS */}
        <Section id="erros" icon={AlertTriangle} kicker="Capítulo 15" title="Erros que arruínam o Réveillon">
          <Bul items={erros} />
        </Section>

        {/* 16 - FOTOGRAFIA */}
        <Section id="fotografia" icon={Camera} kicker="Capítulo 16" title="Como fotografar a virada (sem perder o momento)">
          <Bul items={[
            ["Modo noite no celular", "Estabilize em superfície, não respire no clique"],
            ["Não use flash", "Não ajuda em fogos e estraga a foto de quem está ao lado"],
            ["Modo rajada", "Para fogos — escolhe a melhor depois"],
            ["Combine 5 minutos só de foto, depois guarde", "Senão perde a virada inteira atrás da tela"],
            ["Vídeo curto de 10s vale mais que story de 60s", "Edição depois fica melhor"],
            ["Capa de chuva pro celular", "Champanhe e suor matam aparelho"],
          ]} />
        </Section>

        {/* 17 - QUEM VAI SOZINHO */}
        <Section id="solo" icon={Users} kicker="Capítulo 17" title="Para quem vai sozinho(a)">
          <Bul items={[
            "Phangan, Koh Tao e Khao San em Bangkok são os destinos mais fáceis de fazer amigos",
            "Hostels de festa (Mad Monkey, Slumber Party, Lub d) já organizam grupo pra NYE",
            "Tinder/Bumble funcionam em Bangkok e Phuket — combine encontro em ponto público",
            "Evite confiar 100% em pessoa conhecida na hora — vá em ritmo seu",
            "Combine com hostel de checkout às 11h, não às 07h, no dia 01/01",
            "Fotos de você no espelho não precisam ser tiradas no banheiro do bar",
          ]} />
        </Section>

        {/* 18 - FAQ */}
        <Section id="faq" icon={HelpCircle} kicker="Capítulo 18" title="Perguntas frequentes">
          <Card title="Posso ainda achar hotel bom em novembro?">
            <p>Sim, mas com 30–60% a mais e geralmente longe do epicentro. O guia foi feito pra você reservar até setembro/outubro — depois disso vira sorte.</p>
          </Card>
          <Card title="Vale a pena pacote de agência brasileira?">
            <p>Raramente. Pacotes "tudo incluso" Brasil costumam ter mark-up de 35–50%. Use o guia, reserve direto, vai economizar o equivalente a um Réveillon premium inteiro.</p>
          </Card>
          <Card title="Família com criança pequena?">
            <p>Hua Hin é a melhor — fogos curtos na praia, hotéis com kids club abertos no 01/01. Krabi Ao Nang e Samui Chaweng Noi também funcionam. Evite Phuket Patong (barulho até 06h) e Phangan.</p>
          </Card>
          <Card title="Drogas em festa?">
            <p>Risco enorme. Tailândia tem penas severíssimas pra qualquer porte. Não vale o "só uma vez". Festival no Brasil é uma coisa, prisão tailandesa é outra.</p>
          </Card>
          <Card title="Casamento ou pedido durante a virada?">
            <p>Resorts em Krabi, Yao Noi e Samui montam estrutura específica (jantar, decoração, fotógrafo, fogos). Reserve por e-mail com 90 dias — eles fazem proposta personalizada.</p>
          </Card>
        </Section>

        {/* 19 - CÂMBIO E DINHEIRO */}
        <Section id="cambio" icon={Wallet} kicker="Capítulo 19" title="Câmbio, dinheiro e gorjetas no Réveillon">
          <p>Na semana do Réveillon, casas de câmbio em aeroporto e hotel pioram a cotação em 8–15%. Quem se planeja antes economiza o equivalente a um jantar premium.</p>
          <Card title="Onde trocar (do melhor pro pior)">
            <Bul items={[
              ["SuperRich (laranja e verde)", "Melhor cotação THB do país — unidades em Bangkok, Phuket Patong, Chiang Mai"],
              ["Twelve Victory / Vasu Exchange", "Bangkok Sukhumvit, cotação próxima ao SuperRich"],
              ["ATM de banco (Bangkok Bank, Kasikorn)", "Taxa fixa de 220 THB por saque + IOF — vale pra valor alto"],
              ["Câmbio de hotel", "Última opção — perde 10–15%"],
              ["Aeroporto (chegada)", "Troque só 1.000 THB pra táxi, o resto na cidade"],
            ]} />
          </Card>
          <Card title="Cartões — o que funciona" tone="info">
            <Bul items={[
              ["Wise / Nomad / Avenue", "Melhor câmbio, débito direto no THB, aceito em quase tudo"],
              ["Visa/Mastercard crédito brasileiro", "Funciona, mas cobra IOF 5,38% + spread do banco"],
              ["Amex", "Aceitação baixa fora de hotéis 5★ — não conte"],
              ["Dinheiro vivo", "Indispensável em festa de praia, tuk-tuk, comida de rua, Phangan"],
            ]} />
          </Card>
          <Card title="Gorjeta — quanto e quando" tone="good">
            <Bul items={[
              "Restaurante: 10% se não tiver service charge na conta",
              "Massagem: 50–100 THB por hora de serviço",
              "Tuk-tuk/táxi: arredonde pra cima (10–20 THB)",
              "Carregador de mala em hotel: 20–50 THB por mala",
              "Garçom de gala/ceia de Réveillon: 200–500 THB se atendimento foi excelente",
              "Não dê gorjeta em food court e comida de rua — não é cultura local",
            ]} />
          </Card>
          <Card tone="warn" title="Armadilhas comuns no NYE">
            <Bul items={[
              "ATM de marca desconhecida na rua — golpe de clonagem comum em Bangla e Khao San",
              "Câmbio 'sem comissão' em Patong — escondem spread de 12%",
              "Troco em nota de 1.000 THB falsa — confira marca-d'água sempre",
              "Cartão sumir do garçom por 5 minutos — peça maquininha na mesa",
            ]} />
          </Card>
        </Section>

        {/* 20 - CONCLUSÃO */}
        <Section id="conclusao" icon={Star} kicker="Capítulo 20" title="Encerramento">
          <p>Réveillon na Tailândia é insano quando bem planejado e desastre quando improvisado. Você tem aqui o que precisa: cidades comparadas, festas por categoria, hotéis com vista de fogos, roteiro dia a dia, logística por cidade, comparativo de pacotes, câmbio e checklist completo.</p>
          <p>Comece pela cidade certa pro seu perfil. Reserve hotel agora. Compre ingresso da festa principal. Confirme tudo 7 dias antes. Vá descansado pro dia 31.</p>
          <p>Em janeiro você lembra dessa virada pelo resto da vida.</p>
          <p><strong>Boas festas e boa virada!</strong></p>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Reveillon67729;

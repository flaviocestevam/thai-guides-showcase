// Guia Koh Kood — versão premium (Noir & Gold)
// Rota privada: /kohkood7841
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, CalendarDays, Route, Sunset, Hotel, Bike, Trees,
  Anchor, Wifi, HeartPulse, Eye, Footprints, CalendarCheck,
  Baby, GraduationCap, Fish, Flower, Building2, Factory, ClipboardList, Scale,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Kood, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "praias", label: "7 praias", icon: Home },
  { id: "mapa-scooter", label: "Mapa scooter", icon: Footprints },
  { id: "mes-perfil", label: "Mês ideal", icon: CalendarCheck },
  { id: "clima", label: "Clima mês a mês", icon: CalendarDays },
  { id: "chegar", label: "Como chegar (4h)", icon: Route },
  { id: "booking-timeline", label: "Quando reservar", icon: ClipboardList },
  { id: "trat", label: "Pit-stop Trat", icon: Hotel },
  { id: "hospedagem", label: "12 resorts", icon: Sparkles },
  { id: "soneva", label: "Soneva vs alternativa", icon: Sparkles },
  { id: "scooter", label: "Scooter loop", icon: Bike },
  { id: "snorkel", label: "Snorkel grátis", icon: Waves },
  { id: "visi-pontos", label: "Visi por ponto", icon: Eye },
  { id: "mergulho", label: "Mergulho PADI", icon: GraduationCap },
  { id: "kayak", label: "Kayak Klong Chao", icon: Anchor },
  { id: "pesca", label: "Pesca local", icon: Fish },
  { id: "cachoeira", label: "Cachoeira + trilha", icon: Trees },
  { id: "sunset", label: "Sunset Ao Phrao", icon: Sunset },
  { id: "spa", label: "Spa & wellness", icon: Flower },
  { id: "ao-salat", label: "Vila Ao Salat", icon: Building2 },
  { id: "borracha", label: "Fábrica borracha", icon: Factory },
  { id: "comida", label: "Onde comer", icon: UtensilsCrossed },
  { id: "familia", label: "Família", icon: Baby },
  { id: "combinar", label: "Combinar ilhas", icon: Ship },
  { id: "comparativo", label: "Kood × Mak × Chang", icon: Scale },
  { id: "internet", label: "Internet & dinheiro", icon: Wifi },
  { id: "saude", label: "Saúde & seguro", icon: HeartPulse },
  { id: "naofazer", label: "O que NÃO fazer", icon: XCircle },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "mapa", label: "Mapa offline", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const PRAIAS: { nome: string; veredito: string; tone: Tone; perfil: string; agua: string; estrutura: string; acesso: string }[] = [
  { nome: "Klong Chao", veredito: "CENTRAL — a queridinha", tone: "premium", perfil: "Primeira vez, casal, base ideal.", agua: "Branca, cristalina, mar raso. Rio com cachoeira no fundo.", estrutura: "Resorts médios/boutique, 4-5 restaurantes na areia.", acesso: "Centro-oeste, 25 min do pier de Ao Salat." },
  { nome: "Ao Bang Bao", veredito: "BOUTIQUE — mais bonita", tone: "premium", perfil: "Lua de mel, casal premium, fotografia.", agua: "Água turquesa que vira azul-piscina ao meio-dia. Coral perto da costa.", estrutura: "Resorts boutique (Tinkerbell, Soneva é vizinho).", acesso: "Sul-oeste, scooter 15 min de Klong Chao." },
  { nome: "Klong Yai Kee", veredito: "SNORKEL GRÁTIS", tone: "ok", perfil: "Quem quer snorkel direto da praia sem pagar tour.", agua: "Coral vivo a 30m da areia. Peixe colorido garantido.", estrutura: "1 restaurante pé na areia, sem resort de luxo.", acesso: "Sul-oeste, ao lado de Ao Bang Bao." },
  { nome: "Ngamkho", veredito: "ESTILO MALDIVAS", tone: "premium", perfil: "Pequena, deserta, foto perfeita.", agua: "Curva de areia branca, mar 4 tons de azul.", estrutura: "Mínima — 1-2 bangalôs simples.", acesso: "Sul, scooter 25 min de Klong Chao." },
  { nome: "Tapao", veredito: "DESERTA", tone: "info", perfil: "Quem foge de qualquer movimento.", agua: "Areia grossa, mar bom. Sem coral.", estrutura: "Zero — leve água e snack.", acesso: "Sul extremo, scooter + caminhada 5 min." },
  { nome: "Ao Phrao", veredito: "SUNSET FRONTAL", tone: "premium", perfil: "Sunset bar, casal.", agua: "Boa pra mergulhar antes do sunset. Praia média.", estrutura: "Sunset Bar Ao Phrao + 2-3 boutique.", acesso: "Oeste, 10 min de scooter de Klong Chao." },
  { nome: "Khlong Hin", veredito: "SECRETA", tone: "info", perfil: "Mochileiro mais aventureiro.", agua: "Cristalina, vazia 90% do tempo.", estrutura: "Nenhuma. Só natureza.", acesso: "Norte da ilha, scooter + 200m trilha." },
];

const CLIMA_MES = [
  { mes: "Jan", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "15-20m", lotacao: "Pico", preco: "+60%", veredito: "Janela perfeita. Reserve 3+ meses." },
  { mes: "Fev", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "15-22m", lotacao: "Pico", preco: "+60%", veredito: "Mês rei. Mar 4 tons de azul." },
  { mes: "Mar", chuva: "Mínima", vento: "Leve", mar: "Cristalino", visi: "15-20m", lotacao: "Alta", preco: "+40%", veredito: "Quente, mar perfeito." },
  { mes: "Abr", chuva: "Pré-monção", vento: "Variável", mar: "Bom", visi: "10-15m", lotacao: "Songkran", preco: "+30%", veredito: "Songkran 13-15. Janela fechando fim do mês." },
  { mes: "Mai", chuva: "Início monção", vento: "SO forte", mar: "Mexido", visi: "5-10m", lotacao: "Cai", preco: "Baixo", veredito: "Risco alto. Speedboats irregulares." },
  { mes: "Jun", chuva: "Monção", vento: "SO forte", mar: "Bravo", visi: "5m", lotacao: "Mínima", preco: "Resorts fecham", veredito: "60% dos resorts fechados. Não vá." },
  { mes: "Jul", chuva: "Monção pesada", vento: "SO forte", mar: "Bravo", visi: "—", lotacao: "Fechada", preco: "Fechado", veredito: "Pior junto com ago/set." },
  { mes: "Ago", chuva: "Monção pesada", vento: "SO forte", mar: "Bravo", visi: "—", lotacao: "Fechada", preco: "Fechado", veredito: "Maioria fechada. Speedboat cancela." },
  { mes: "Set", chuva: "Pico monção", vento: "SO muito forte", mar: "Bravo", visi: "—", lotacao: "Fechada", preco: "Fechado", veredito: "Pior mês. Ilha quase deserta." },
  { mes: "Out", chuva: "Fim monção", vento: "Reduzindo", mar: "Acalmando", visi: "8-12m", lotacao: "Mínima", preco: "Baixo", veredito: "Reabertura só fim do mês. Risco." },
  { mes: "Nov", chuva: "Pontual", vento: "Calmo NE volta", mar: "Bom", visi: "12-18m", lotacao: "Subindo", preco: "+20%", veredito: "Janela abre oficialmente. Bom custo-benefício." },
  { mes: "Dez", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "15-20m", lotacao: "Pico (Natal/Ano-Novo)", preco: "+80%", veredito: "Reserve 4+ meses. Picos absurdos." },
];

const TRECHOS = [
  { etapa: "1", origem: "Bangkok (BKK/DMK)", destino: "Trat (TDX)", combo: "Voo direto Bangkok Airways", tempo: "1h", preco: "R$ 380-650", dica: "Voa cedo (08h-10h) pra encaixar o speedboat das 12h ou 14h." },
  { etapa: "2", origem: "Trat aeroporto", destino: "Laem Sok pier", combo: "Mini-van compartilhada (balcão aeroporto)", tempo: "40 min", preco: "R$ 60-90", dica: "Combo voo+van+ferry pela Bangkok Airways economiza coordenação." },
  { etapa: "3", origem: "Laem Sok pier", destino: "Koh Kood", combo: "Speedboat Boonsiri / Seatran / Koh Kood Princess", tempo: "1h15", preco: "R$ 220-300", dica: "Saídas 09h00, 12h00, 14h00 (nov-mai). Confirme janela de chegada do voo." },
  { etapa: "4", origem: "Pier do resort em Kood", destino: "Seu hotel", combo: "Transfer do resort (quase todos oferecem)", tempo: "5-30 min", preco: "Grátis ou R$ 40", dica: "Avise resort do horário do speedboat. Sem transfer, songthaew custa 200-400 baht." },
  { etapa: "Alt", origem: "Bangkok ônibus", destino: "Koh Kood", combo: "Ônibus noturno + ferry lento", tempo: "12-14h", preco: "R$ 180-260", dica: "ROTA ECONÔMICA — só pra mochileiro com tempo. Voo+speedboat compensa." },
];

const HOSPEDAGEM = [
  { faixa: "Mochileiro / médio-baixo", price: "R$ 300 — 600", items: [
    ["Mark House Bungalow", "Klong Chao, bangalô madeira."],
    ["Koh Kood Cabana", "Ngamkho, simples e isolado."],
    ["Away Resort", "Klong Chao, custo-benefício."],
    ["Neverland Beach Resort", "Ao Phrao, mochileiro charmoso."],
  ]},
  { faixa: "Boutique (sweet spot)", price: "R$ 700 — 1.500", items: [
    ["Tinkerbell Privacy Resort", "Klong Chao, pé na areia, romance."],
    ["Shantaa Resort", "Ngamkho, design minimalista, lua de mel."],
    ["Peter Pan Resort", "Klong Chao, bangalô madeira premium."],
    ["High Season Pool Villa", "Klong Chao, piscina privativa."],
  ]},
  { faixa: "Premium / luxo discreto", price: "R$ 1.800 — 4.000+", items: [
    ["Soneva Kiri", "Norte, top mundial — US$ 1.500+/noite."],
    ["The Beach Natural Resort", "Klong Chao, pool villa frontal."],
    ["Cham's House", "Klong Hin, boutique premium isolada."],
    ["To The Sea", "Ngamkho, design moderno frente mar."],
  ]},
];

const SCOOTER = [
  { titulo: "Por que precisa", texto: "Kood são 25 km de costa, sem transporte público. Sem scooter você vê 1 praia (a do resort). Com scooter, vê as 7 e descobre Kood de verdade." },
  { titulo: "Onde alugar", texto: "Klong Chao centro tem 4-5 locadoras. 250-300 baht/dia automática. Pegue com seguro e capacete (use!). Estrada é estreita e tem chuva-súbita." },
  { titulo: "Loop completo (1 dia)", texto: "Klong Chao → Ao Phrao (sunset bar) → Ao Bang Bao → Ngamkho → Tapao → volta. 60 km ida-volta, paradas inclusas: 6-7h." },
  { titulo: "CNH internacional", texto: "Polícia local pede em check-points (raro mas existe). PID emitida no Detran do seu estado é o documento aceito. Sem ela: 500-1.000 baht de multa se parado." },
  { titulo: "Riscos reais", texto: "Estrada molhada após chuva (lama na curva), areia em cruzamento perto das praias, cachorros soltos. Não pilote bêbado — nada de seguro cobre." },
];

const SNORKEL = [
  { nome: "Klong Yai Kee (direto da praia)", tipo: "Grátis", tone: "ok" as Tone, quando: "Maré alta, manhã (8h-11h)", oque: "Coral vivo a 30m da areia, peixe colorido. Leve seu próprio snorkel ou alugue na praia (150 baht/dia). ZERO tour necessário." },
  { nome: "Ao Bang Bao (direto da praia)", tipo: "Grátis", tone: "ok" as Tone, quando: "Manhã com mar calmo", oque: "Coral à esquerda da praia (perto do costão de pedra). Tartarugas frequentes em fev-abr." },
  { nome: "Koh Rang (day-trip)", tipo: "Tour", tone: "warn" as Tone, quando: "Saída 09h (nov-mai)", oque: "Parque marinho a 1h de speedboat. Coral premium, mas tour fica caro (1.500-2.000 baht) e lotado em alta." },
  { nome: "Koh Rad (longtail privado)", tipo: "Premium", tone: "premium" as Tone, quando: "Manhã com longtail próprio", oque: "Ilhota deserta a 20 min de Klong Chao. Longtail 1.800-2.500 baht (até 4 pessoas). Sem outros barcos." },
];

const KAYAK = [
  { titulo: "O que é", texto: "Klong Chao é um rio de água doce que desemboca na praia. Subindo de kayak você atravessa manguezal e selva tropical até a base da cachoeira Klong Chao — 30-45 min de remo." },
  { titulo: "Onde alugar", texto: "Várias locadoras na praia Klong Chao. 200-300 baht/kayak por meio dia. Pegue colete (vem incluso). Vá em 1 ou 2 pessoas no mesmo kayak (mais leve)." },
  { titulo: "Quando ir", texto: "Manhã cedo (07h-09h) ou fim de tarde (16h-18h). Meio-dia é sol direto na cabeça. Ao amanhecer: macacos na margem, garça pescando, zero turista." },
  { titulo: "O combo perfeito", texto: "Subir de kayak → caminhar 10 min até a cachoeira → mergulhar na poça → descer de kayak. Manhã inteira por 250 baht. Uma das experiências top do leste tailandês." },
];

const CACHOEIRA = [
  { titulo: "Klong Chao Waterfall", texto: "A mais famosa de Kood. 3 quedas, poça grande pra mergulhar (gelada). Trilha curta de 10 min do estacionamento OU acesso pelo rio de kayak (mais lindo)." },
  { titulo: "Huang Nam Khieo Waterfall", texto: "Mais escondida, no centro-norte. Scooter + 20 min de trilha leve. Praticamente vazia. Cachoeira menor mas mais selvagem." },
  { titulo: "O que levar", texto: "Tênis aderente (pedras escorregadias), repelente, água. Pode mergulhar — leve maiô por baixo. Sem entrada paga." },
  { titulo: "Quando ir", texto: "Manhã (sol bate na cachoeira), nov-fev (volume de água ideal). Em abril o fluxo cai. Em monção: fechada por enxurrada." },
];

const SUNSETS = [
  { nome: "Ao Phrao Sunset Bar", tone: "premium" as Tone, nota: "10/10", quando: "17h30-18h30 (nov-mar)", oque: "Pé na areia frontal pro sol. Drink, tapas, vibe folk. O melhor sunset bar do leste tailandês." },
  { nome: "Klong Chao final da praia (sul)", tone: "premium" as Tone, nota: "9/10", quando: "17h45-18h30", oque: "Sunset lateral com a curva da praia toda iluminada de dourado. Sem nenhum bar — só natureza." },
  { nome: "Ao Bang Bao (Tinkerbell deck)", tone: "ok" as Tone, nota: "8/10", quando: "17h30", oque: "Deck do Tinkerbell Resort (aberto a hóspedes e visitantes consumindo). Drink premium, vista limpa." },
  { nome: "Topo do Khao Re Sii (mirante)", tone: "ok" as Tone, nota: "8/10", quando: "Trilha às 16h", oque: "Mirante 360° de Kood. Scooter + 15 min trilha íngreme. Foto panorâmica de cair o queixo." },
];

const COMIDA = [
  { lugar: "Fisherman Hut", bairro: "Klong Chao", oque: "Tailandesa pé na areia, peixe do dia fresquíssimo.", preco: "250-600 baht" },
  { lugar: "Tinkerbell Restaurant", bairro: "Klong Chao", oque: "Tailandês premium aberto a não-hóspedes, vista para o rio.", preco: "400-900 baht" },
  { lugar: "Toh Pai Restaurant", bairro: "Klong Chao", oque: "Curry massaman + tom yum lendários, preços honestos.", preco: "150-350 baht" },
  { lugar: "Ao Phrao Sunset Bar", bairro: "Ao Phrao", oque: "Drinks e tapas, sunset frontal. Não é jantar — é experiência.", preco: "180-450 baht" },
  { lugar: "View Point Cafe", bairro: "Centro", oque: "Coffee shop ocidental, sourdough e Wi-Fi pra trabalho remoto.", preco: "120-280 baht" },
  { lugar: "Klong Yai Kee Restaurant", bairro: "Klong Yai Kee", oque: "Pé na areia, peixe na brasa, snorkel grátis ao lado.", preco: "300-700 baht" },
  { lugar: "Shantaa Restaurant", bairro: "Ngamkho", oque: "Mediterrâneo + tailandês, jantar romântico premium.", preco: "500-1.200 baht" },
  { lugar: "Banyan Bar", bairro: "Klong Chao", oque: "Bar com cervejas artesanais e petiscos. Final de noite tranquilo.", preco: "120-300 baht" },
];

const SONEVA = [
  { titulo: "O que o Soneva entrega", texto: "Soneva Kiri é o resort mais caro da Tailândia (US$ 1.500-3.000/noite). Vila com piscina privativa, mordomo 24h, ilha-bar acessível só de barco, observatório astronômico. Comida e bebida grátis (all-in real). Reserva mínima de 3 noites." },
  { titulo: "Quando vale", texto: "Vale se: lua de mel high-end + 5+ dias + você quer sair zero do resort. Não vale se: quer rodar Kood, quer experiência variada, ou pesa preço no orçamento (R$ 80.000+ por 5 noites pra casal)." },
  { titulo: "A alternativa boutique", texto: "Tinkerbell Privacy Resort (Ao Bang Bao) ou Shantaa (Ngamkho): R$ 900-1.500 a diária. Praia tão bonita quanto Soneva (praticamente vizinhos), pool villa, restaurante de qualidade. Você economiza R$ 60.000+ em 5 noites e tem 90% da experiência." },
  { titulo: "O veredito honesto", texto: "Soneva é serviço, não destino. A praia do Soneva é a mesma de Ao Bang Bao. Pague o Soneva se for o que você busca (serviço extremo); senão, boutique vizinho entrega a água, a areia e a paz." },
];

const COMBINAR = [
  { combo: "Kood + Mak (3+3 dias)", como: "Speedboat direto Kood → Mak (30 min, 500 baht). Mak é menor, mais família, mais barata.", quando: "Quem quer 2 ilhas no leste sem voltar a Bangkok." },
  { combo: "Kood + Chang (3+4 dias)", como: "Speedboat Kood → Laem Sok + van pra Laem Ngop + ferry Koh Chang (5h total).", quando: "Casal premium + budget combinado — Kood é luxo, Chang é selvagem." },
  { combo: "Bangkok + Kood (2+5 dias)", como: "Voo Bangkok-Trat ida + voo Trat-Bangkok volta. Mais simples, sem trocar 2 vezes.", quando: "Primeira vez no leste tailandês." },
  { combo: "Kood + Camboja (Koh Rong)", como: "Voo Trat → Bangkok → Sihanoukville (Camboja). Logística cansativa mas viável em 14+ dias.", quando: "Mochileiro que quer cruzar SE Asia." },
];

const INTERNET = [
  { titulo: "SIM card", texto: "AIS e TrueMove H têm cobertura decente em Klong Chao, Ao Bang Bao e centro. Norte (Soneva) e leste (Khlong Hin) ficam fracos. Compre SIM no aeroporto BKK/DMK (R$ 50-70, 30 dias)." },
  { titulo: "Wi-Fi nos resorts", texto: "90% dos resorts boutique têm Wi-Fi (10-30 Mbps em Klong Chao). Soneva tem fibra. Resorts isolados (Ngamkho, norte): inconsistente." },
  { titulo: "Trabalho remoto", texto: "View Point Cafe (centro) é melhor opção. Wi-Fi 50 Mbps, ar-cond, comida. Zoom funciona. Acima disso (streaming pesado): não conte." },
  { titulo: "ATM e dinheiro", texto: "3 ATMs em toda Kood: 2 em Klong Chao (Bangkok Bank, Krungsri) e 1 em Ao Salat (pier). Cobram 220 baht por saque. Saque grande. Sem banco real na ilha." },
  { titulo: "Cartão", texto: "Resorts médios e premium aceitam Visa/Master (3% taxa). Restaurantes pé na areia, scooter, tour, food stalls = só cash. Calcule R$ 600-900/dia em cash pra casal." },
];

const SAUDE = [
  { titulo: "Clínica em Kood", texto: "Posto de saúde básico em Khlong Hin (vila central). Atende emergência leve (pontos, soro, antibiótico). Aceita pagamento direto + recibo pro seguro." },
  { titulo: "Emergência grave", texto: "Speedboat de emergência a Laem Sok + ambulância pra Trat Hospital (3-4h total). Custo: 12.000-25.000 baht só transporte. Soneva tem médico residente — única exceção." },
  { titulo: "Seguro obrigatório", texto: "World Nomads, SafetyWing, IATI Mochileiro. Cobertura mínima: evacuação marítima (US$ 20k) + cobertura motorizado (você VAI alugar scooter). Sem isso = risco financeiro real." },
  { titulo: "Kit básico", texto: "Dipirona, antialérgico, soro de reidratação (em pó nos 7-Eleven de Trat), repelente DEET 30%+, FPS 50, pomada cicatrizante (queimadura). Dengue existe — use repelente ao entardecer." },
];

const NAO_FAZER = [
  { item: "Tour Koh Rang em alta temporada", motivo: "Caro (R$ 350-500), lotado, e os melhores snorkels de Kood (Klong Yai Kee, Ao Bang Bao) são GRÁTIS direto da praia." },
  { item: "Ônibus noturno Bangkok-Trat", motivo: "Salva R$ 200 e custa 10h de sono. Voo Bangkok Airways R$ 380-650 em 1h. Calcule seu tempo de viagem." },
  { item: "Massagem 'pé na areia' de turista", motivo: "Preço inflado (500-800 baht), qualidade baixa. Massagista de casa fixa em Klong Chao centro: 300 baht/hora, ambiente real." },
  { item: "Reservar resort em Booking sem ver Google Maps", motivo: "Kood tem 'Beach Resort' em mapa que fica 800m da praia. Sempre confirme com Google Maps satélite antes." },
  { item: "Bike elétrica em vez de scooter", motivo: "Bateria não cobre o loop completo (25 km de costa). Você fica preso. Scooter automática resolve tudo." },
  { item: "Tour 'jungle trekking' caro", motivo: "Trilhas pra cachoeira são livres e sinalizadas. Tour pago não acrescenta nada — só o preço (1.200 baht)." },
];

const GOLPES = [
  { golpe: "Speedboat 'cancelado' querendo trocar por mais caro", resposta: "Cancelamento real é raro em jan-mar. Exija reembolso ou próxima saída GRATUITA. Tenha email da reserva." },
  { golpe: "Mini-van Trat-Laem Sok 'fura' o speedboat", resposta: "Reserve combo voo+van+speedboat da MESMA operadora (Bangkok Airways ou Boonsiri). Sem combo, conexão é por sua conta." },
  { golpe: "Resort 'boutique' com 3 fileiras de bangalô na frente do mar", resposta: "Booking.com tem fotos antigas. Sempre confira no Google Maps satélite + Instagram do hotel (fotos marcadas)." },
  { golpe: "Scooter com 'arranhão prévio' não documentado", resposta: "Filme 360° + foto da odômetro ANTES de sair. Contrato em inglês. Recuse locadora que não aceita." },
  { golpe: "Tour 'jungle trekking + cachoeira' caro", resposta: "Cachoeira Klong Chao é livre e tem trilha sinalizada. Tour cobra 1.000-1.500 baht pra te levar onde dá pra ir de scooter." },
  { golpe: "Massagem na praia preço dobrado depois", resposta: "Preço escrito ANTES, em papel. Casa fixa no centro de Klong Chao é mais seguro que pé na areia turística." },
  { golpe: "Songthaew do pier cobrando 500 baht pra Klong Chao", resposta: "Tarifa real: 200-300 baht. Avise resort do horário do speedboat e peça transfer (grátis na maioria dos boutique)." },
  { golpe: "Cervejas em bar com 'happy hour' acabando agora", resposta: "Confira cardápio. Happy hour real em Kood é 17h-19h em quase todo bar." },
];

const TRAT_PITSTOP = [
  { titulo: "Quando precisa", texto: "Voo Bangkok-Trat só tem 3 saídas/dia (08h, 12h, 17h). Se você chegou no aeroporto BKK depois das 16h e perdeu o último voo, dorme em Trat pra pegar speedboat do dia seguinte." },
  { titulo: "Onde dormir em Trat", texto: "Trat City Hotel (centro, R$ 120-200), Ban Jaidee Guesthouse (charmoso, R$ 80-150), Naroua Resort (perto aeroporto, R$ 180-280). Reserva fácil de última hora." },
  { titulo: "O que fazer em 1 noite", texto: "Trat Night Market (street food autêntica, halal misturado com tailandês). Não é destino — pit-stop. Não perca tempo planejando." },
  { titulo: "Voltar pro aeroporto", texto: "Trat aeroporto fica 30 min do centro. Songthaew 100 baht, táxi 300 baht. Voo de volta a Bangkok: confirme janela de check-in (45 min antes da partida)." },
];

const ROTEIROS = [
  { dias: "4 dias (express)", foco: "Kood essencial", dia: [
    "D1: Bangkok → Trat → Kood (chegada 16h). Sunset em Klong Chao.",
    "D2: Kayak Klong Chao + cachoeira pela manhã. Tarde de praia.",
    "D3: Scooter loop completo (Ao Phrao sunset bar à noite).",
    "D4: Snorkel Klong Yai Kee + retorno (speedboat 12h).",
  ]},
  { dias: "5 dias (clássico)", foco: "Kood completa", dia: [
    "D1: chegada, Klong Chao instalação.",
    "D2: kayak + cachoeira + sunset Ao Phrao.",
    "D3: scooter loop sul (Ao Bang Bao, Ngamkho, Tapao).",
    "D4: snorkel grátis em 2 praias + mirante Khao Re Sii.",
    "D5: massagem + retorno.",
  ]},
  { dias: "7 dias (slow travel)", foco: "Kood + zero pressa", dia: [
    "D1-D2: Klong Chao base, kayak, cachoeira.",
    "D3: tour Koh Rang OU longtail pra Koh Rad.",
    "D4: trocar pra Ao Bang Bao (boutique premium 2 noites).",
    "D5: scooter loop + Ao Phrao sunset.",
    "D6: relax, spa, snorkel.",
    "D7: retorno.",
  ]},
  { dias: "7 dias (Kood + Mak)", foco: "2 ilhas leste", dia: [
    "D1-D4: Kood (essencial + kayak + scooter loop).",
    "D5: speedboat Kood → Mak (30 min).",
    "D6: Mak — bike pela ilha, snorkel.",
    "D7: retorno Mak → Laem Sok → Bangkok.",
  ]},
];

const VISI_PONTOS = [
  { ponto: "Klong Yai Kee (direto da praia)", nov: "8-12m", dez: "10-15m", jan: "12-18m", fev: "15-22m", mar: "12-18m", abr: "8-12m" },
  { ponto: "Ao Bang Bao (direto da praia)", nov: "8-12m", dez: "12-15m", jan: "12-18m", fev: "15-20m", mar: "12-18m", abr: "8-12m" },
  { ponto: "Koh Rang (tour)", nov: "12-18m", dez: "15-20m", jan: "18-25m", fev: "20-28m", mar: "18-22m", abr: "12-18m" },
  { ponto: "Koh Rad (longtail privado)", nov: "10-15m", dez: "15-20m", jan: "18-22m", fev: "20-25m", mar: "15-20m", abr: "10-15m" },
  { ponto: "Koh Rang Pinnacle (dive)", nov: "15-20m", dez: "18-25m", jan: "22-28m", fev: "25-30m", mar: "20-25m", abr: "15-20m" },
  { ponto: "HTMS Chang (wreck dive)", nov: "12-18m", dez: "15-22m", jan: "18-25m", fev: "20-28m", mar: "18-22m", abr: "12-18m" },
];

const MAPA_SCOOTER = [
  { de: "Pier Ao Salat (chegada)", para: "Klong Chao centro", tempo: "25 min", como: "Estrada asfaltada, sinalizada. Songthaew 200-300 baht." },
  { de: "Klong Chao", para: "Ao Phrao (sunset bar)", tempo: "10 min", como: "Norte da costa oeste. Estrada boa, 1 curva fechada." },
  { de: "Klong Chao", para: "Ao Bang Bao", tempo: "15 min", como: "Sul, asfalto bom. Passa por Klong Yai Kee (pare se for snorkelar)." },
  { de: "Ao Bang Bao", para: "Ngamkho", tempo: "15 min", como: "Sul, asfalto + 500m de terra no final. OK em scooter automática." },
  { de: "Ngamkho", para: "Tapao", tempo: "20 min", como: "Sul extremo. Asfalto + 200m trilha a pé." },
  { de: "Klong Chao", para: "Khlong Hin (norte)", tempo: "35 min", como: "Norte da ilha, estrada subindo. Cuidado em chuva." },
  { de: "Klong Chao", para: "Cachoeira Klong Chao", tempo: "5 min", como: "Acesso pela estrada principal, estacionamento gratuito." },
  { de: "Loop completo (todas as praias)", para: "—", tempo: "6-7h (com paradas)", como: "60 km ida e volta. Saída 09h, volta sunset Ao Phrao 18h." },
];

const MES_PERFIL = [
  { perfil: "Lua de mel / casal premium", mes: "Fev", motivo: "Visibilidade máxima, vento mínimo, sunset Ao Phrao impecável. Soneva/Tinkerbell com preço alto mas vale." },
  { perfil: "Mergulhador (Open Water+)", mes: "Mar", motivo: "Koh Rang Pinnacle e HTMS Chang em pico de visi (25-30m). Operadoras todas abertas." },
  { perfil: "Família com criança", mes: "Jan", motivo: "Mar calmo em Klong Chao raso, sem chuva, restaurante pé na areia aberto." },
  { perfil: "Mochileiro / budget", mes: "Início nov ou fim abr", motivo: "Janela aberta com preços 30-40% abaixo do pico. Resort econômico vale." },
  { perfil: "Slow travel / isolamento", mes: "Nov ou abr", motivo: "Ilha mais vazia, scooter solo sem trânsito, sunset bar sem fila." },
  { perfil: "EVITAR", mes: "Mai-out", motivo: "Monção fecha 60% dos resorts e cancela speedboats." },
  { perfil: "EVITAR (preço/lotação)", mes: "23 dez - 5 jan", motivo: "Preços +80%, mínimo 4-5 noites obrigatório, ilha lotada." },
];

const MERGULHO = [
  { titulo: "Open Water (iniciante)", texto: "PADI Open Water em Kood: R$ 1.500-1.800, 3-4 dias. BB Divers (Klong Chao) e Paradise Divers (Ao Phrao) aceitam zero experiência. Mais barato que Koh Tao? Não — mas a ilha é menos lotada." },
  { titulo: "Advanced Open Water", texto: "2 dias, R$ 1.000-1.300. Em Kood rende: HTMS Chang wreck (28m) só libera com Advanced. Combo Open + Advanced em sequência custa R$ 2.300." },
  { titulo: "Sites para Open Water", texto: "Koh Rang shallow (12-15m, coral colorido), Hin Khao (formação rochosa rasa). Sem corrente forte, ideal pra primeiro dive certificado." },
  { titulo: "Sites para Advanced+", texto: "Koh Rang Pinnacle (24-28m, parede de coral mole, peixe-rei grande), HTMS Chang (28m, navio de guerra afundado em 2012, tartarugas-marinhas dentro)." },
  { titulo: "Escola pra iniciante", texto: "BB Divers (mais didático, turmas pequenas, instrutor brasileiro às vezes) ou Paradise Divers (descontraído). Ambas SSI/PADI." },
  { titulo: "Fun dive avulso", texto: "2 tanks R$ 850-1.100. Inclui equipamento + almoço no barco. Confirme cilindro 12L e instrutor em inglês fluente." },
];

const PESCA = [
  { titulo: "Pescador local longtail", texto: "Combine direto na praia de Klong Chao ou Ao Salat com pescador da vila. Saída 05h30, volta 09h. 1.200-1.800 baht/barco até 4 pessoas. Sem intermediário turístico." },
  { titulo: "O que você pega", texto: "Lula, peixe-rei, garoupa, snapper. Pesca de linha tradicional (sem vara). Pescador ensina o nó e a leitura do mar. Resort cozinha o peixe pra você de volta (50-100 baht)." },
  { titulo: "Etiqueta", texto: "Tire os sapatos no barco. Não jogue lixo no mar (peixe não morde). Negocie em 4 pessoas pra dividir custo. Aceite chá tradicional se oferecido." },
  { titulo: "Charter premium", texto: "Resort boutique organiza charter privado com almoço de bordo: 4.500-6.500 baht / barco / dia. Para casal premium que quer experiência exclusiva." },
];

const SPA = [
  { titulo: "Six Senses Spa @ Soneva Kiri", texto: "Top da Tailândia leste. Massagem tailandesa 90min: 4.500-6.500 baht. Aberto a não-hóspedes mediante reserva. Para experiência única em lua de mel." },
  { titulo: "Shantaa Spa (Ngamkho)", texto: "Spa boutique premium. Massagem tailandesa óleo 60min: 1.500-2.000 baht. Vista pro mar, ambiente zen, aceita não-hóspedes." },
  { titulo: "Tinkerbell Spa (Ao Bang Bao)", texto: "Casa de madeira pé na praia. Tailandesa tradicional 90min: 1.800-2.200 baht. Pacote casal popular." },
  { titulo: "Massagem local em Klong Chao centro", texto: "3-4 casas fixas no centro com cardápio em inglês. Massagem tailandesa 60min: 300-400 baht. Mesma qualidade técnica do spa premium, sem o ambiente de luxo." },
  { titulo: "Massagem 'pé na areia' (cuidado)", texto: "Massagista ambulante: 500-800 baht/hora, qualidade inconsistente, ambiente sem privacidade. EVITE — pague 300 na casa fixa." },
];

const AO_SALAT = [
  { titulo: "O que é", texto: "Vila de pescadores construída sobre palafitas no mar. Única 'cidade' de Kood, fica no leste da ilha (oposto às praias turísticas). Comunidade real de pescadores tailandeses muçulmanos." },
  { titulo: "Como chegar", texto: "Scooter de Klong Chao: 30 min de estrada asfaltada. Estacionamento gratuito na entrada da vila. Caminhe pelos píeres de madeira (com cuidado — alguns são frágeis)." },
  { titulo: "Almoço pé no mar", texto: "2-3 restaurantes locais sobre palafitas. Peixe do dia, lula grelhada, arroz tailandês. R$ 25-50 por refeição completa. Vista do mar enquanto come. Sem cardápio em inglês — aponte pra mesa do lado." },
  { titulo: "Etiqueta cultural", texto: "Cidade muçulmana — vista discreta (sem biquíni andando), não fotografe pessoas sem pedir. Sexta-feira (oração) evite meio-dia (12h-14h). Sem álcool nas barracas locais." },
  { titulo: "Quando ir", texto: "Manhã 09h-11h (mercado de peixe ativo) OU almoço 12h-14h. Final de tarde fica vazio. Combine com cachoeira Klong Chao no mesmo dia." },
];

const BORRACHA = [
  { titulo: "O que é", texto: "70% da ilha era plantação de seringueiras antes do turismo. Mini-fábricas familiares ainda extraem látex e fazem lâminas de borracha bruta — tradição centenária da região." },
  { titulo: "Onde visitar", texto: "2-3 plantações abertas a visita perto de Khlong Hin (norte) e na estrada Klong Chao-Ao Salat. Pergunte ao resort — eles indicam a fazenda da semana (rotação)." },
  { titulo: "O que você vê", texto: "Sangria da árvore ao amanhecer (corte em diagonal pra látex escorrer), filtragem do líquido branco, prensagem das lâminas. Demonstração de 30-45 min. Sem inglês — gestos e tradução pelo Google." },
  { titulo: "Quanto custa", texto: "Gratuito ou doação simbólica (100-200 baht). Compre 1-2 lâminas como souvenir autêntico (50-100 baht) — sustenta a comunidade direto." },
  { titulo: "Quando ir", texto: "Amanhecer (05h-07h) é a sangria — única hora real. Visita à fábrica em si funciona o dia todo. Em monção: produção cai pela chuva." },
];

const FAMILIA = [
  { titulo: "Praia ideal", texto: "Klong Chao (sul, mar raso 50m, sem ondas, rio com kayak). Estrutura completa: restaurante pé na areia, banheiro, salva-vidas em alguns resorts. Ao Bang Bao também serve mas é mais isolada." },
  { titulo: "Hotéis com kids facilities", texto: "Soneva Kiri (kids club premium, baby-sitter incluída), Tinkerbell Privacy (cottages 2 quartos, berço sob pedido), High Season Pool Villa (piscina privativa fechada), The Beach Natural Resort (familiar)." },
  { titulo: "Atividades com criança", texto: "Kayak no rio Klong Chao (calmo, raso — colete sempre), cachoeira Klong Chao (poça gelada — supervisão), snorkel direto da praia Klong Yai Kee (mar raso, sem corrente). EVITE longtail aberto sem cobertura." },
  { titulo: "Comida pra criança seletiva", texto: "Toh Pai (curry simples e arroz), View Point Cafe (sourdough, sanduíche, hambúrguer), Tinkerbell (cardápio kids). 'Mai phet' = sem pimenta. Frutas em qualquer mercado." },
  { titulo: "Saúde infantil", texto: "Posto de saúde básico em Khlong Hin. Hospital sério = Trat (3-4h). Leve farmácia completa (febre, alergia, diarreia, soro). Vacinas em dia (Hepatite A obrigatória). Repelente DEET 30%+ contra dengue." },
  { titulo: "O que NÃO fazer com criança", texto: "Scooter com criança pequena (perigoso, sem capacete infantil sério), tour Koh Rang longo (5h+ no barco), trilha pra cachoeira em chuva (escorregadia), Ao Salat sem proteção solar (palafitas sem sombra)." },
];

const COMPARATIVO = [
  { criterio: "Tamanho / movimento", kood: "Grande, baixa lotação", mak: "Pequena, muito vazia", chang: "Grande, mais movimentada" },
  { criterio: "Perfil", kood: "Luxo discreto, casal, isolamento", mak: "Família, mochileiro maduro, bike", chang: "Família budget, agito moderado" },
  { criterio: "Preço médio (hotel)", kood: "R$ 700-1.500", mak: "R$ 250-700", chang: "R$ 350-1.000" },
  { criterio: "Como chegar (de Bangkok)", kood: "Voo Trat + speedboat (4h)", mak: "Voo Trat + speedboat (3h30)", chang: "Ônibus + ferry (5-6h) ou voo (4h)" },
  { criterio: "Praias destaque", kood: "Klong Chao, Ao Bang Bao, Ngamkho", mak: "Ao Suan Yai, Ao Khao", chang: "White Sand, Lonely Beach, Klong Prao" },
  { criterio: "Snorkel direto da praia", kood: "Sim (2 praias grátis)", mak: "Sim (Koh Kham vizinha)", chang: "Não — tour necessário" },
  { criterio: "Vida noturna", kood: "Quase zero (1 bar)", mak: "Zero", chang: "Lonely Beach (sim, com excesso)" },
  { criterio: "Selva preservada", kood: "70% parque nacional", mak: "Plana, plantações", chang: "70% parque (mais montanhoso)" },
  { criterio: "Veredito", kood: "Premium tranquilo", mak: "Família slow", chang: "Custo-benefício com agito" },
];

const BOOKING_TIMELINE = [
  { quando: "Dez-Jan (Natal/Ano-Novo)", antecedencia: "5-6 meses", motivo: "Demanda absurda, mínimo 4-5 noites obrigatórias, preços +80%. Soneva esgota em outubro pra fim de ano." },
  { quando: "Fev (mês rei lua de mel)", antecedencia: "4 meses", motivo: "Tinkerbell/Shantaa lotam. Resorts pequenos esgotam primeiro. Voos Bangkok Airways também — reserve junto." },
  { quando: "Mar (mergulho)", antecedencia: "3 meses", motivo: "Demanda do circuito de mergulho. BB Divers e Paradise Divers limitam turmas." },
  { quando: "Nov ou Abr (janela aberta)", antecedencia: "2 meses", motivo: "Pico passado/começando. Preços normalizam. Cancelamento flexível ainda funciona." },
  { quando: "Mai (última semana antes da monção)", antecedencia: "1-2 semanas", motivo: "Última chance. Risco real de speedboat cancelar. Reserva refundable é OBRIGATÓRIA." },
  { quando: "Jun-Out (monção)", antecedencia: "—", motivo: "NÃO VÁ. 60% dos resorts fechados. Soneva fecha completamente set-out. Speedboat cancela direto." },
];



const KohKood7841 = () => {
  return (
    <>
      <style>{PK_STYLES}</style>
      <div className="pk-root min-h-screen">
        <header className="pk-hero">
          <div className="pk-orb pk-orb-a" />
          <div className="pk-orb pk-orb-b" />
          <div className="pk-orb pk-orb-c" />
          <div className="pk-hero-grain" />

          <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Kood · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Kood: o luxo discreto que <em className="pk-display-em">ninguém te contou</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                A ilha intocada do leste tailandês — praia deserta, selva preservada e resorts boutique que custam 1/10 do Soneva.
                7 praias decodificadas, kayak no manguezal, cachoeira e a rota inteligente de 4h.
              </p>
            </Reveal>
            <Reveal i={3}>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Atualizações vitalícias", "Mapa Google offline", "Testado in loco"].map((t) => (
                  <span key={t} className="pk-tag">{t}</span>
                ))}
              </div>
            </Reveal>

            <div className="pk-bento mt-16">
              <Reveal i={4} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">A regra única</p>
                <p className="pk-bento-h">Kood só existe de novembro a abril. Fora disso, 60% dos resorts fecham.</p>
                <p className="pk-bento-p">
                  Em mai-out a monção fecha 60% dos resorts e os speedboats cancelam.
                  Janela real: <strong>nov-abr</strong>. Pico: <strong>dez-fev</strong>. <em>Reserve com 3-4 meses.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Praias</p><p className="pk-bento-stat">07</p><p className="pk-bento-cap">decodificadas</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Resorts</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">testados por faixa</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Chegada</p><p className="pk-bento-stat">4h</p><p className="pk-bento-cap">Bangkok → Kood</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve offline antes — Kood tem internet ruim fora de Klong Chao.
                </p>
              </Reveal>
            </div>
          </div>
        </header>

        <nav className="pk-toc">
          <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto no-scrollbar">
            {TOC.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="pk-toc-chip"><t.icon className="w-3.5 h-3.5" /> {t.label}</a>
            ))}
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-20 md:py-28 space-y-28 md:space-y-36">
          <section id="comeco">
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: por que Kood é diferente" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Kood é a 4ª maior ilha da Tailândia</strong> — colada à fronteira com o Camboja,
                  no leste profundo. Selva preservada (70% da ilha é parque nacional), 7 praias mapeadas, zero balada agressiva,
                  zero turistada de Phuket. Resort boutique de verdade — não Booking inflado.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Próximas seções: as 7 praias por perfil, a janela climática (não erre o mês) e os 4 trechos pra chegar em 4h.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="praias">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="7 praias — qual é qual" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRAIAS.map((p, i) => (
                <Reveal key={p.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[p.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="pk-h3"><G q={`${p.nome} Koh Kood Thailand`}>{p.nome}</G></h3>
                      <span className="pk-verdict">{p.veredito}</span>
                    </header>
                    <dl className="pk-dl">
                      <div><dt>Perfil</dt><dd>{p.perfil}</dd></div>
                      <div><dt>Água</dt><dd>{p.agua}</dd></div>
                      <div><dt>Estrutura</dt><dd>{p.estrutura}</dd></div>
                      <div><dt>Acesso</dt><dd>{p.acesso}</dd></div>
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="mapa-scooter">
            <SectionTitle icon={Footprints} kicker="03 — Mobilidade" title="Mapa scooter — tempos reais entre cada praia" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>De</th><th>Para</th><th>Tempo</th><th>Como</th></tr></thead>
                    <tbody>
                      {MAPA_SCOOTER.map((m, i) => (
                        <tr key={i}>
                          <td className="font-medium">{m.de}</td>
                          <td>{m.para}</td>
                          <td className="pk-gold-soft font-medium whitespace-nowrap">{m.tempo}</td>
                          <td className="text-sm">{m.como}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="mes-perfil">
            <SectionTitle icon={CalendarCheck} kicker="04 — Decisão" title="Mês ideal por perfil — cartão único" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {MES_PERFIL.map((m, i) => {
                const isEvitar = m.perfil.startsWith("EVITAR");
                return (
                  <Reveal key={i} i={i}>
                    <article className={`pk-card pk-card-tight h-full ${isEvitar ? "pk-tone-alert" : "pk-tone-ok"}`}>
                      <header className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="pk-h4">{m.perfil}</h3>
                        <span className="pk-verdict">{m.mes}</span>
                      </header>
                      <p className="text-sm text-[hsl(var(--pk-muted))]">{m.motivo}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section id="clima">
            <SectionTitle icon={CalendarDays} kicker="03 — Quando ir" title="Clima mês a mês — janela honesta" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Mês</th><th>Chuva</th><th>Vento</th><th>Mar</th><th>Visi snorkel</th><th>Lotação</th><th>Preço</th><th>Veredito</th></tr></thead>
                    <tbody>
                      {CLIMA_MES.map((m) => (
                        <tr key={m.mes}>
                          <td className="pk-gold-soft font-semibold">{m.mes}</td>
                          <td>{m.chuva}</td>
                          <td>{m.vento}</td>
                          <td>{m.mar}</td>
                          <td>{m.visi}</td>
                          <td>{m.lotacao}</td>
                          <td className="font-medium">{m.preco}</td>
                          <td className="text-sm">{m.veredito}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="pk-callout pk-callout-alert mt-6">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Maio-outubro a ilha quase fecha:</strong> 60% dos resorts fecham, speedboats cancelam, mar fica marrom. Quem reserva nessas datas perde dinheiro. Janela real: <strong>nov-abr</strong>.</p>
              </div>
            </Reveal>
          </section>

          <section id="chegar">
            <SectionTitle icon={Route} kicker="04 — Logística" title="4 trechos Bangkok → Kood em 4h" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">A rota inteligente sai em 4h.</strong> Voo Bangkok-Trat (1h) + mini-van (40 min) + speedboat (1h15) + transfer.
                  A rota errada (ônibus + ferry lento) leva 14h e custa metade — mas você perde 1 dia.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Etapa</th><th>De</th><th>Para</th><th>Como</th><th>Tempo</th><th>R$</th><th>Dica</th></tr></thead>
                    <tbody>
                      {TRECHOS.map((t) => (
                        <tr key={t.etapa}>
                          <td className="pk-gold-soft font-semibold">{t.etapa}</td>
                          <td>{t.origem}</td>
                          <td>{t.destino}</td>
                          <td>{t.combo}</td>
                          <td className="whitespace-nowrap">{t.tempo}</td>
                          <td className="font-medium whitespace-nowrap">{t.preco}</td>
                          <td className="text-sm">{t.dica}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="booking-timeline">
            <SectionTitle icon={ClipboardList} kicker="05 — Reserva" title="Quando reservar — timeline por janela" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Quando</th><th>Antecedência</th><th>Motivo</th></tr></thead>
                    <tbody>
                      {BOOKING_TIMELINE.map((b, i) => (
                        <tr key={i}>
                          <td className="font-medium">{b.quando}</td>
                          <td className="pk-gold-soft font-medium whitespace-nowrap">{b.antecedencia}</td>
                          <td className="text-sm">{b.motivo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="trat">
            <SectionTitle icon={Hotel} kicker="05 — Plano B" title="Trat pit-stop — se perdeu o voo" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Perdeu o último voo Bangkok-Trat?</strong>{" "}
                  Não é fim do mundo. Dormir 1 noite em Trat custa R$ 120-200 e o speedboat do dia seguinte sai 09h.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {TRAT_PITSTOP.map((h, i) => (
                <Reveal key={h.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{h.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{h.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="06 — Onde dormir" title="12 resorts testados por faixa" />
            <div className="grid md:grid-cols-3 gap-6">
              {HOSPEDAGEM.map((col, i) => (
                <Reveal key={col.faixa} i={i}>
                  <article className="pk-card h-full">
                    <p className="pk-kicker">{col.faixa}</p>
                    <p className="pk-h4 mt-1">{col.price}</p>
                    <div className="pk-divider my-4" />
                    <ul className="space-y-3 text-sm">
                      {col.items.map(([name, desc]) => (
                        <li key={name}>
                          <strong className="text-[hsl(var(--pk-fg))]"><G q={`${name} Koh Kood`}>{name}</G></strong>
                          <span className="text-[hsl(var(--pk-muted))]"> — {desc}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="soneva">
            <SectionTitle icon={Sparkles} kicker="07 — Comparativo" title="Soneva Kiri × boutique vizinho — qual vale" />
            <div className="grid md:grid-cols-2 gap-5">
              {SONEVA.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="scooter">
            <SectionTitle icon={Bike} kicker="08 — Mobilidade" title="Scooter loop — Kood inteira em 1 dia" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Sem scooter você vê 1 praia. Com scooter, vê as 7.</strong>{" "}
                  Kood é feita pra rodar — estrada asfaltada conecta todas as praias. 250 baht/dia resolve a viagem inteira.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {SCOOTER.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="snorkel">
            <SectionTitle icon={Waves} kicker="09 — Mar" title="Snorkel — 2 grátis direto da praia" />
            <Reveal>
              <div className="pk-callout pk-callout-info mb-6">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>O segredo de Kood:</strong> os 2 melhores snorkels (Klong Yai Kee e Ao Bang Bao) são acessíveis direto da praia, GRÁTIS. Tour pago é desnecessário e caro. Leve seu snorkel ou alugue na praia (150 baht/dia).</p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {SNORKEL.map((s, i) => (
                <Reveal key={s.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[s.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="pk-h4"><G q={`${s.nome} Koh Kood`}>{s.nome}</G></h3>
                      <span className="pk-verdict">{s.tipo}</span>
                    </header>
                    <p className="pk-kicker">Quando</p>
                    <p className="text-sm mt-1 mb-3">{s.quando}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{s.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="visi-pontos">
            <SectionTitle icon={Eye} kicker="10 — Visibilidade" title="Visibilidade por ponto, mês a mês (em metros)" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Ponto</th><th>Nov</th><th>Dez</th><th>Jan</th><th>Fev</th><th>Mar</th><th>Abr</th></tr></thead>
                    <tbody>
                      {VISI_PONTOS.map((v) => (
                        <tr key={v.ponto}>
                          <td className="font-medium"><G q={`${v.ponto} Koh Kood`}>{v.ponto}</G></td>
                          <td>{v.nov}</td>
                          <td>{v.dez}</td>
                          <td className="pk-gold-soft font-medium">{v.jan}</td>
                          <td className="pk-gold-soft font-medium">{v.fev}</td>
                          <td>{v.mar}</td>
                          <td>{v.abr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="pk-callout pk-callout-info mt-6">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Fev é o mês rei.</strong> Koh Rang Pinnacle chega a 30m de visibilidade. Mai-out fica abaixo de 5m por monção.</p>
              </div>
            </Reveal>
          </section>

          <section id="mergulho">
            <SectionTitle icon={GraduationCap} kicker="11 — Mergulho" title="Mergulho decodificado — Open Water ao Advanced" />
            <div className="grid md:grid-cols-2 gap-5">
              {MERGULHO.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="kayak">
            <SectionTitle icon={Anchor} kicker="10 — Experiência" title="Kayak no Klong Chao — a hora mais zen" />
            <div className="grid md:grid-cols-2 gap-5">
              {KAYAK.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="pesca">
            <SectionTitle icon={Fish} kicker="13 — Autêntico" title="Pesca local com longtail Moken/tailandês" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">A experiência fora do tour:</strong> pescador da vila aceita levar você de longtail tradicional pra pesca matinal.
                  Apoia direto a comunidade, sem intermediário turístico.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {PESCA.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="cachoeira">
            <SectionTitle icon={Trees} kicker="11 — Selva" title="Cachoeiras + trilhas (livres e sinalizadas)" />
            <div className="grid md:grid-cols-2 gap-5">
              {CACHOEIRA.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="sunset">
            <SectionTitle icon={Sunset} kicker="12 — Sunset" title="4 sunset spots ranqueados" />
            <div className="grid md:grid-cols-2 gap-5">
              {SUNSETS.map((s, i) => (
                <Reveal key={s.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[s.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="pk-h4"><G q={`${s.nome} Koh Kood`}>{s.nome}</G></h3>
                      <span className="pk-verdict">{s.nota}</span>
                    </header>
                    <p className="pk-kicker">Quando</p>
                    <p className="text-sm mt-1 mb-3">{s.quando}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{s.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="spa">
            <SectionTitle icon={Flower} kicker="16 — Wellness" title="Spa & massagem — premium e local" />
            <div className="grid md:grid-cols-2 gap-5">
              {SPA.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="ao-salat">
            <SectionTitle icon={Building2} kicker="17 — Cultura" title="Vila Ao Salat — palafitas sobre o mar" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">A única &lsquo;cidade&rsquo; de Kood</strong> — comunidade muçulmana de pescadores sobre palafitas no leste da ilha.
                  Quase nenhum turista vai. Almoço pé no mar por R$ 25.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {AO_SALAT.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="borracha">
            <SectionTitle icon={Factory} kicker="18 — Eco" title="Plantação de seringueira — tradição centenária" />
            <div className="grid md:grid-cols-2 gap-5">
              {BORRACHA.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="comida">
            <SectionTitle icon={UtensilsCrossed} kicker="13 — Mesa" title="Onde comer — 8 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c) => (
                <Reveal key={c.lugar}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Kood`}>{c.lugar}</G></h3>
                      <span className="pk-tag-sm">{c.bairro}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mb-3">{c.oque}</p>
                    <p className="pk-gold-soft text-sm font-medium">{c.preco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="combinar">
            <SectionTitle icon={Ship} kicker="14 — Combos" title="Combinar com outras ilhas / países" />
            <div className="space-y-5">
              {COMBINAR.map((c, i) => (
                <Reveal key={c.combo} i={i}>
                  <article className="pk-card grid md:grid-cols-4 gap-5">
                    <div><h3 className="pk-h4">{c.combo}</h3></div>
                    <div className="md:col-span-2"><p className="pk-kicker">Como</p><p className="text-sm mt-1">{c.como}</p></div>
                    <div><p className="pk-kicker">Quando vale</p><p className="text-sm mt-1">{c.quando}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="internet">
            <SectionTitle icon={Wifi} kicker="15 — Logística" title="Internet, SIM e dinheiro" />
            <div className="grid md:grid-cols-2 gap-5">
              {INTERNET.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="saude">
            <SectionTitle icon={HeartPulse} kicker="16 — Saúde" title="Clínica, emergência e seguro" />
            <Reveal>
              <div className="pk-callout pk-callout-alert mb-6">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Seguro viagem com evacuação marítima + cobertura motorizado é OBRIGATÓRIO em Kood.</strong> Hospital sério fica em Trat (3-4h). Sem seguro, evacuação grave custa R$ 6.000-15.000 do seu bolso.</p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {SAUDE.map((x, i) => (
                <Reveal key={x.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{x.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{x.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="naofazer">
            <SectionTitle icon={XCircle} kicker="17 — Curadoria" title="O que NÃO fazer em Kood" />
            <div className="grid md:grid-cols-2 gap-4">
              {NAO_FAZER.map((n, i) => (
                <Reveal key={i} i={i}>
                  <article className="pk-card pk-card-tight h-full pk-tone-alert">
                    <p className="text-sm font-semibold flex gap-2"><XCircle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" /> {n.item}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{n.motivo}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="roteiros">
            <SectionTitle icon={Sun} kicker="18 — Tempo" title="Roteiros prontos — 4, 5 e 7 dias" />
            <div className="grid md:grid-cols-2 gap-6">
              {ROTEIROS.map((r, i) => (
                <Reveal key={r.dias} i={i}>
                  <article className="pk-card h-full">
                    <p className="pk-kicker">{r.foco}</p>
                    <h3 className="pk-h3 mt-1">{r.dias}</h3>
                    <div className="pk-divider my-4" />
                    <ul className="space-y-2 text-sm">
                      {r.dia.map((d, k) => <li key={k} className="flex gap-3"><span className="pk-bullet">{k + 1}</span><span>{d}</span></li>)}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="antigolpe">
            <SectionTitle icon={ShieldCheck} kicker="19 — Defesa" title="8 golpes — e a resposta exata" />
            <div className="grid md:grid-cols-2 gap-4">
              {GOLPES.map((g, i) => (
                <Reveal key={i} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="text-sm font-semibold flex gap-2"><AlertTriangle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" /> {g.golpe}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2 flex gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--pk-ok))] shrink-0 mt-0.5" /> {g.resposta}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="20 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada praia, restaurante, snorkel e operadora tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado — toque e abre no Google Maps.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Kood no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Kut,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha inteira</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps → menu → "Mapas offline" → enquadre Kood inteira → baixar. Internet fora de Klong Chao é fraca — salve ANTES.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="21 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro / casal econômico", linhas: [["Bangalô", "R$ 350"], ["Comida tailandesa", "R$ 120"], ["Scooter + gasolina", "R$ 60"], ["Kayak/snorkel grátis", "R$ 0"]], total: "R$ 530 / casal / dia" },
                { tipo: "Casal boutique", linhas: [["Tinkerbell/Shantaa", "R$ 1.200 / casal"], ["Comida", "R$ 400"], ["Scooter + tour Koh Rang", "R$ 350"], ["Drinks Ao Phrao", "R$ 200"]], total: "R$ 2.150 / casal / dia" },
                { tipo: "Premium / Soneva", linhas: [["Soneva Kiri (all-in)", "R$ 8.000 / casal"], ["Extras / serviços", "R$ 800"], ["Atividades premium", "R$ 1.500"], ["Bar privativo", "R$ 600"]], total: "R$ 10.900 / casal / dia" },
              ].map((b, i) => (
                <Reveal key={b.tipo} i={i}>
                  <article className="pk-card h-full">
                    <p className="pk-kicker">Faixa</p>
                    <h3 className="pk-h3 mt-1">{b.tipo}</h3>
                    <div className="pk-divider my-4" />
                    <ul className="space-y-2 text-sm">
                      {b.linhas.map(([k, v]) => (
                        <li key={k} className="flex justify-between gap-3">
                          <span className="text-[hsl(var(--pk-muted))]">{k}</span>
                          <span className="font-medium">{v}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pk-divider my-4" />
                    <p className="pk-gold font-semibold text-lg">{b.total}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="pt-16 border-t border-[hsl(var(--pk-line))]">
            <p className="pk-kicker">Continue explorando</p>
            <h2 className="pk-h2 mt-2">Outras ilhas e guias</h2>
            <p className="text-[hsl(var(--pk-muted))] mt-3 mb-8 max-w-2xl">Cada ilha tem o seu guia, mesma profundidade. Compre só o que vai usar.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { nome: "Koh Chang (vizinha — leste)", path: "/koh-chang-tailandia" },
                { nome: "Koh Mak (leste, combinar)", path: "/koh-mak-tailandia" },
                { nome: "Phuket (hub Andaman)", path: "/phuket-tailandia" },
                { nome: "Aluguel de motos", path: "/aluguel-de-motos-tailandia" },
                { nome: "Beach Clubs", path: "/beach-clubs-tailandia" },
                { nome: "Retiros & wellness", path: "/retiros-tailandia" },
                { nome: "Catálogo das ilhas", path: "/ilhas" },
                { nome: "Catálogo geral", path: "/" },
              ].map((g) => (
                <a key={g.path} href={g.path} target="_blank" rel="noreferrer" className="pk-island-link">
                  <span className="font-medium">{g.nome}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform" />
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-[hsl(var(--pk-line))] py-10 text-center text-sm text-[hsl(var(--pk-muted))]">
          Guia Koh Kood — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohKood7841;

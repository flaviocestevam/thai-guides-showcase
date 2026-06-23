// Guia Koh Lipe — versão premium (Noir & Gold)
// Rota privada: /kohlipe2947
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, CalendarDays, Route, Sunset, Mountain, Hotel, Lightbulb,
  Footprints, Anchor, GraduationCap, Eye, Users, Wifi, Banknote, Baby,
  HeartPulse, CalendarCheck,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Lipe, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "praias", label: "3 praias", icon: Home },
  { id: "mapa-andando", label: "Mapa a pé", icon: Footprints },
  { id: "mes-perfil", label: "Mês ideal", icon: CalendarCheck },
  { id: "clima", label: "Clima mês a mês", icon: CalendarDays },
  { id: "chegar", label: "Como chegar", icon: Route },
  { id: "hatyai", label: "Pit-stop Hat Yai", icon: Hotel },
  { id: "ferries-arq", label: "Ferries arquipélago", icon: Anchor },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "snorkel", label: "Snorkel 3+5", icon: Waves },
  { id: "visi-pontos", label: "Visi por ponto", icon: Eye },
  { id: "mergulho", label: "Mergulho", icon: GraduationCap },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "adang", label: "Adang & Rawi", icon: Mountain },
  { id: "moken", label: "Chao Ley (Moken)", icon: Users },
  { id: "comida", label: "Comida", icon: UtensilsCrossed },
  { id: "walking", label: "Walking Street", icon: Lightbulb },
  { id: "sunsets", label: "Sunsets", icon: Sunset },
  { id: "internet", label: "Internet & SIM", icon: Wifi },
  { id: "dinheiro", label: "Dinheiro & ATM", icon: Banknote },
  { id: "familia", label: "Família", icon: Baby },
  { id: "saude", label: "Saúde & emergência", icon: HeartPulse },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const MAPA_ANDANDO = [
  { de: "Pier flutuante (chegada)", para: "Pattaya Beach centro", tempo: "5 min", como: "Saída direta na praia. Longtail-taxi não precisa." },
  { de: "Pattaya Beach", para: "Sunrise Beach (norte)", tempo: "8-10 min", como: "Pela Walking Street até o fim, vira à esquerda. Plano." },
  { de: "Pattaya Beach", para: "Sunset Beach (oeste)", tempo: "12-15 min", como: "Trilha de cimento entre Pattaya norte e Sunset. Algumas escadas." },
  { de: "Sunrise Beach", para: "Sunset Beach", tempo: "20-25 min", como: "Atravessa a ilha pela trilha do norte. Iluminada à noite só até metade." },
  { de: "Pattaya central", para: "Walking Street fim (mercado)", tempo: "10 min", como: "É a própria Walking. 700m de fim a fim." },
  { de: "Sunrise sul", para: "Sunrise norte (Castaway)", tempo: "15 min pela areia", como: "Maré baixa: caminhe pela praia. Maré alta: trilha de trás." },
];

const FERRIES_ARQ = [
  { rota: "Lipe → Lanta", barco: "Speedboat Tigerline / Bundhaya", janela: "Nov-mai (alta)", saida: "09h00", tempo: "4h (com parada em Phi Phi)", preco: "1.800-2.200 baht" },
  { rota: "Lipe → Phi Phi (direto)", barco: "Speedboat Tigerline", janela: "Nov-mai", saida: "09h00", tempo: "2h30", preco: "1.700-2.000 baht" },
  { rota: "Lipe → Phuket (Rassada)", barco: "Speedboat combo (via Lanta ou Phi Phi)", janela: "Nov-mai", saida: "09h00", tempo: "7-8h dia inteiro", preco: "2.500-3.200 baht" },
  { rota: "Lipe → Krabi (Klong Jilad)", barco: "Speedboat combo", janela: "Nov-mai", saida: "09h00", tempo: "5h", preco: "2.200-2.700 baht" },
  { rota: "Lipe → Langkawi (Telaga, Malásia)", barco: "Ferry Telaga Express", janela: "Nov-mai", saida: "10h30 e 16h", tempo: "1h15", preco: "1.200-1.500 baht" },
  { rota: "Lipe → Pakbara (volta)", barco: "Speedboat Bundhaya/Tigerline", janela: "Nov-mai", saida: "09h30 / 11h30 / 13h30", tempo: "1h30", preco: "650-750 baht" },
];

const MES_PERFIL = [
  { perfil: "Lua de mel / casal premium", mes: "Fev", motivo: "Visibilidade Maldivas, vento mínimo, sunset perfeito. Preço alto mas vale." },
  { perfil: "Mergulhador (Open Water+)", mes: "Mar-abr", motivo: "Hin Daeng/Muang em pico de visi (30m+). Stonehenge claro." },
  { perfil: "Família com criança", mes: "Jan ou Mar", motivo: "Mar calmo na Sunrise, sem vento sul, restaurante aberto." },
  { perfil: "Mochileiro / budget", mes: "Início nov ou fim abr", motivo: "Janela aberta com preços 30-40% abaixo do pico." },
  { perfil: "Fotografia / drone", mes: "Fev", motivo: "Visibilidade aérea máxima, mar azul-piscina, golden hour limpo." },
  { perfil: "EVITAR", mes: "Mai-out", motivo: "Monção fecha ilha. 90% dos resorts e tours fecham." },
  { perfil: "EVITAR (preço)", mes: "23 dez - 5 jan", motivo: "Lotação absurda, preços +80%, mínimo 5-7 noites obrigatórias." },
];

const VISI_PONTOS = [
  { ponto: "Hin Ngam", nov: "15-20m", dez: "20-25m", jan: "25-30m", fev: "30-35m", mar: "25-30m", abr: "15-20m" },
  { ponto: "Jabang (coral roxo)", nov: "12-18m", dez: "18-22m", jan: "20-25m", fev: "25-30m", mar: "22-28m", abr: "12-18m" },
  { ponto: "Koh Yang", nov: "15-20m", dez: "20-25m", jan: "20-28m", fev: "25-30m", mar: "20-25m", abr: "15-20m" },
  { ponto: "Stonehenge (dive)", nov: "15-20m", dez: "20-25m", jan: "25-30m", fev: "30m+", mar: "25-30m", abr: "15-20m" },
  { ponto: "8 Mile Rock (dive)", nov: "20-25m", dez: "25-30m", jan: "30m+", fev: "30-40m", mar: "30m+", abr: "20-25m" },
  { ponto: "Hin Sorn (deserto)", nov: "20-25m", dez: "25-30m", jan: "25-30m", fev: "30m+", mar: "25-30m", abr: "20-25m" },
  { ponto: "Direto da praia (Sunrise)", nov: "8-12m", dez: "12-18m", jan: "15-20m", fev: "15-20m", mar: "12-18m", abr: "8-12m" },
];

const MERGULHO = [
  { titulo: "Open Water (iniciante)", texto: "PADI Open Water em Lipe: R$ 1.600-2.000, 3-4 dias. Forra Dive e Davy Jones aceitam zero experiência. Compare: Koh Tao R$ 1.400-1.700 (mais barato), mas Lipe = água mais clara." },
  { titulo: "Advanced Open Water", texto: "2 dias, R$ 1.100-1.400. Em Lipe rende: dive em 8 Mile Rock só é liberado com Advanced. Vale combinar com Open Water em sequência." },
  { titulo: "Sites para Open Water", texto: "Stonehenge (12-18m, coral colorido), Jabang Wall, Koh Yang sul. Sem corrente forte, ideal pra primeiro dive certificado." },
  { titulo: "Sites para Advanced+", texto: "8 Mile Rock (24-30m, manta ray em fev-abr), Hin Daeng/Muang (parede vertical, advanced obrigatório, corrente forte). Tubarões-leopardo possíveis." },
  { titulo: "Escola pra iniciante", texto: "Forra Dive (mais didático, turmas pequenas) ou Davy Jones (descontraído, bom para grupo de amigos). Sabye Sports é mais técnico." },
  { titulo: "Fun dive avulso", texto: "2 tanks R$ 850-1.100. Inclui equipamento. Confirme: cilindro 12L (padrão) e instrutor falando inglês fluente." },
];

const MOKEN = [
  { titulo: "Quem são", texto: "Chao Ley ('povo do mar') — minoria nativa nômade do Andaman. Em Lipe vivem ~700 Moken em comunidade no centro-norte da ilha, principal grupo étnico original (chegaram antes do turismo)." },
  { titulo: "Onde encontrar", texto: "Vila Moken fica entre Pattaya e Sunrise, atrás da Walking Street. Mercado local de peixe ao amanhecer no Sunrise pier (06h-08h). Longtail-taxis e barcos de pesca quase todos são Moken." },
  { titulo: "Etiqueta cultural", texto: "Sem religião budista (animistas) — não levam mal foto, mas peça antes. Cerimônia Loi Reua (lançamento de barco ritual) acontece mai e nov — turistas observam de longe, não participam." },
  { titulo: "Sunrise breakfast em longtail tradicional", texto: "Combine direto na praia Sunrise na noite anterior com um pescador Moken. 1.200-1.800 baht/barco até 4 pessoas, saída 05h30, café da manhã preparado a bordo. Experiência única — apoia direto a comunidade, sem intermediário." },
  { titulo: "O que NÃO fazer", texto: "Não compre 'artesanato Moken' em loja turística — quase sempre é importado da Birmânia. Compre direto na vila ou no mercado pequeno do Sunrise pier de manhã." },
];

const INTERNET = [
  { titulo: "Operadora — só AIS pega", texto: "AIS (Advanced Info Service) é a ÚNICA com sinal decente em Lipe. TrueMove H e DTAC têm cobertura inconsistente, falham fora de Pattaya. Compre SIM AIS em Bangkok aeroporto antes de embarcar." },
  { titulo: "SIM Tourist (recomendado)", texto: "AIS Tourist SIM: 30 dias, 30GB, ligações inclusas — R$ 50-70 no aeroporto BKK/DMK ou em 7-Eleven de Hat Yai. Lipe não vende SIM novo (só recarga)." },
  { titulo: "Wi-Fi em cafés", texto: "Cafe Lipe, Lipe Lobby Bar, Mali Resort Pattaya — Wi-Fi confiável (10-30 Mbps). Bom pra Zoom/upload. Sunrise/Sunset Beach têm Wi-Fi mais fraco." },
  { titulo: "Trabalho remoto", texto: "Funciona em Pattaya com AIS 4G + Wi-Fi do café como backup. Possível chamadas Zoom de 30-60 min em horário não-lotação (06h-09h e 22h+). Não conte com 'fibra' — não existe." },
  { titulo: "Backup essencial", texto: "Em monção (mai-out) torres caem com tempestade. Mesmo na alta, internet some 1-2h em dias de chuva forte. Tenha tudo importante salvo offline." },
];

const DINHEIRO = [
  { titulo: "Lipe NÃO tem banco", texto: "Só 3 ATMs na ilha — todos no Walking Street e em Pattaya. Cobram 220 baht de taxa POR saque (independente do valor). Saque 10.000+ por vez pra diluir taxa." },
  { titulo: "Traga cash de fora", texto: "Saque em Hat Yai aeroporto (Bangkok Bank cobra 220 baht mas câmbio melhor) OU em Pakbara antes de embarcar. Calcule: R$ 250-400/dia em cash pra mochileiro, R$ 600-1.000 pra casal padrão." },
  { titulo: "Cartão funciona onde?", texto: "Resorts médios/premium aceitam Visa/Master (com taxa 3%). Restaurantes em Walking Street: 60% aceitam. Longtails, food stalls, massagens de rua: SÓ cash." },
  { titulo: "Câmbio em Lipe", texto: "2 casas de câmbio em Walking Street com câmbio ruim (-8 a -10% vs. Bangkok). Última opção. Real brasileiro NÃO é aceito — leve dólar ou euro se quiser câmbio na ilha." },
  { titulo: "Quanto trazer em cash", texto: "Mochileiro 5 dias: 12.000-15.000 baht. Casal padrão 6 dias: 30.000-40.000 baht. Premium: cartão resolve 70%, mas leve 15.000 baht backup." },
];

const FAMILIA = [
  { titulo: "Praia ideal", texto: "Sunrise Beach (sul, perto de Castaway/Idyllic). Mar raso 50m, sem ondas, areia branca fina, vista de Adang. Pattaya é mais movimentada com tráfego de barco — risco com criança pequena." },
  { titulo: "Hotéis com kids facilities", texto: "Idyllic Concept Resort (piscina infantil, berço), Bundhaya Resort (família-friendly, frente mar Pattaya), Mali Resort (cottages com 2 quartos), Akira Lipe Resort (premium com baby cot)." },
  { titulo: "Tours com criança", texto: "EVITE longtail sem cobertura (sol direto 4h+). Use speedboat com toldo — Forra Dive Tour 7 ilhas em meio dia (5h). Coletes salva-vidas: confirme tamanho infantil ANTES." },
  { titulo: "Comida pra criança seletiva", texto: "Lipe Lobby Bar (pratos ocidentais), Bombay Indian (naan + arroz simples), Cafe Lipe (sourdough/sanduíche). Tailandês picante: peça 'mai phet' (sem pimenta) — funciona." },
  { titulo: "Farmácia e fralda", texto: "1 farmácia em Walking Street com básico (Dipirona, soro, antialérgico). Fralda Pampers e leite em pó: 7-Eleven em Pattaya. Stock limitado — leve da casa o suficiente pra 7+ dias." },
  { titulo: "O que NÃO fazer com criança", texto: "Trilha Adang (íngreme, macacos), Walking Street depois das 22h (movimento de bar), longtail sem colete infantil, snorkel em Hin Ngam horário de pico (longtails passam perto)." },
];

const SAUDE = [
  { titulo: "Clínica única em Lipe", texto: "Koh Lipe Health Promoting Hospital — em Pattaya, perto do pier flutuante. Atende 08h-18h dias úteis, emergência 24h via telefone. Básico: pontos, soro, antibiótico. Aceita seguro internacional com pré-pagamento + reembolso." },
  { titulo: "Emergência grave = Satun", texto: "Casos sérios (acidente, suspeita de cirurgia) = speedboat de emergência a Pakbara + ambulância a Satun Hospital (4-5h total). Custo: 15.000-30.000 baht só transporte. SEGURO VIAGEM com cobertura de evacuação marítima é OBRIGATÓRIO." },
  { titulo: "Queimadura de sol e medusa", texto: "Sol em Lipe é 8/10 UV mesmo nublado. FPS 50+ a cada 2h. Medusa-caixa rara mas possível em mai-out (mais um motivo pra evitar a janela). Vinagre branco neutraliza — tenha 1L no hotel." },
  { titulo: "Kit básico obrigatório", texto: "Dipirona/Paracetamol, antialérgico, soro de reidratação (vendido em pó nos 7-Eleven), curativo, repelente com DEET 30%+, FPS 50, pomada cicatrizante (queimadura de sol)." },
  { titulo: "Seguro viagem", texto: "OBRIGATÓRIO com: evacuação marítima (mínimo US$ 20k), cobertura mergulho (se for mergulhar), cobertura motorizado (se alugar bike). World Nomads, SafetyWing ou IATI Mochileiro funcionam em Lipe." },
  { titulo: "Vacinas e remédios", texto: "Sem vacina obrigatória pra brasileiro. Recomendadas: Hepatite A, Tifoide, Tétano em dia. Anti-malárico NÃO é necessário em Lipe (sem mosquito vetor). Dengue existe — repelente é defesa." },
];



const PRAIAS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; agua: string; quanto: string; quando: string }[] = [
  { nome: "Pattaya Beach", veredito: "CENTRAL — chegada, vida, walking street", tone: "warn", perfil: "Primeira vez, casal padrão, quem quer tudo a pé.", evite: "Quem busca silêncio total — barcos partem da praia o dia todo.", agua: "Cristalina, mas com tráfego de longtails. Areia branca fina.", quanto: "Hotel R$ 350 / boutique R$ 800 / resort R$ 1.500.", quando: "Você quer rapidez: pier, restaurantes e bares a 5 min." },
  { nome: "Sunrise Beach", veredito: "FAMÍLIA / CALMA — nascer do sol", tone: "ok", perfil: "Família com criança, casal sossego, fotografia ao amanhecer.", evite: "Quem quer vida noturna a pé (10 min de Pattaya).", agua: "Mais cristalina das três, mar raso 50m. Vista de Adang.", quanto: "Bangalô R$ 280 / hotel R$ 550 / resort R$ 1.200.", quando: "Você acorda cedo e quer paz com vista de cartão-postal." },
  { nome: "Sunset Beach", veredito: "MOCHILEIRO / SUNSET", tone: "info", perfil: "Mochileiro, casal jovem, quem prioriza sunset frontal.", evite: "Família com criança (acesso por trilha curta).", agua: "Cristalina, areia mais grossa, menos infraestrutura.", quanto: "Bangalô R$ 180 / hotel R$ 450.", quando: "Você quer pôr do sol frontal sobre Adang e zero turistada." },
];

const CLIMA_MES = [
  { mes: "Jan", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "25-35m", lotacao: "Pico", preco: "+60%", veredito: "Janela perfeita. Reserve 4+ meses." },
  { mes: "Fev", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "30-40m", lotacao: "Pico", preco: "+60%", veredito: "Melhor mês. Visibilidade Maldivas." },
  { mes: "Mar", chuva: "Mínima", vento: "Leve", mar: "Cristalino", visi: "25-35m", lotacao: "Alta", preco: "+40%", veredito: "Quente, mar perfeito." },
  { mes: "Abr", chuva: "Pré-monção", vento: "Variável", mar: "Bom", visi: "15-25m", lotacao: "Songkran", preco: "+30%", veredito: "Songkran 13-15. Janela fechando." },
  { mes: "Mai", chuva: "Início monção", vento: "SO forte", mar: "Mexido", visi: "10-15m", lotacao: "Cai", preco: "Normal", veredito: "Hotéis começam a fechar. Risco." },
  { mes: "Jun", chuva: "Monção", vento: "SO forte", mar: "Bravo", visi: "5-10m", lotacao: "Mínima", preco: "Fechado", veredito: "ILHA FECHA. Ferries cancelam." },
  { mes: "Jul", chuva: "Monção pesada", vento: "SO forte", mar: "Bravo", visi: "—", lotacao: "Fechada", preco: "Fechado", veredito: "Não vá. Parque Nacional fechado." },
  { mes: "Ago", chuva: "Monção pesada", vento: "SO forte", mar: "Bravo", visi: "—", lotacao: "Fechada", preco: "Fechado", veredito: "Não vá. Maioria dos resorts fechada." },
  { mes: "Set", chuva: "Pico monção", vento: "SO muito forte", mar: "Bravo", visi: "—", lotacao: "Fechada", preco: "Fechado", veredito: "Pior mês. Ilha desabitada." },
  { mes: "Out", chuva: "Fim monção", vento: "Reduzindo", mar: "Acalmando", visi: "10-15m", lotacao: "Mínima", preco: "Baixo", veredito: "Risco alto. Reabertura só fim do mês." },
  { mes: "Nov", chuva: "Pontual", vento: "Calmo NE volta", mar: "Bom", visi: "15-25m", lotacao: "Subindo", preco: "+20%", veredito: "Janela abre. Reabertura oficial." },
  { mes: "Dez", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "20-30m", lotacao: "Pico (Natal/Ano-Novo)", preco: "+80%", veredito: "Reserve 5+ meses. Picos absurdos." },
];

const TRECHOS = [
  { etapa: "1", origem: "Bangkok (BKK/DMK)", destino: "Hat Yai (HDY)", combo: "Voo direto AirAsia/Nok/Thai Lion", tempo: "1h30", preco: "R$ 180-450", dica: "Voa cedo (06h-09h) pra pegar mini-van do dia." },
  { etapa: "2", origem: "Hat Yai aeroporto", destino: "Pakbara pier", combo: "Mini-van compartilhada (balcão no aeroporto)", tempo: "2h", preco: "R$ 60-90", dica: "Combo voo+van existe — economiza coordenação. Última saída 14h." },
  { etapa: "3", origem: "Pakbara pier", destino: "Koh Lipe", combo: "Speedboat Bundhaya / Tigerline", tempo: "1h30", preco: "R$ 130-180", dica: "Saídas 11h30 e 13h30 (nov-mai). Em monção: SEM speedboat." },
  { etapa: "4", origem: "Koh Lipe (floating pier)", destino: "Sua praia", combo: "Longtail-taxi do pier (50-100 baht)", tempo: "5-15 min", preco: "R$ 10-20", dica: "Floating pier cobra 200 baht 'entrada do parque' — é real, guarde recibo." },
  { etapa: "Alt", origem: "Langkawi (Malásia)", destino: "Koh Lipe", combo: "Ferry direto Telaga Harbour", tempo: "1h15", preco: "R$ 220-280", dica: "Só nov-abr. Visto on-arrival Tailândia funciona em Lipe." },
];

const SNORKEL = [
  { nome: "Hin Ngam (Pedras Pretas)", tipo: "Clássico", tone: "warn" as Tone, quando: "8h-10h antes dos tours", oque: "Praia de pedras pretas polidas + snorkel raso com corais. Lotado 11h-15h." },
  { nome: "Jabang", tipo: "Clássico", tone: "warn" as Tone, quando: "Início do tour 4 ilhas", oque: "Coral soft roxo único. 30 min é suficiente. Não toque." },
  { nome: "Koh Yang", tipo: "Clássico", tone: "warn" as Tone, quando: "Manhã", oque: "Praia branca, tartarugas frequentes. Tour 4 ilhas inclui." },
  { nome: "Pointe Sul de Sunrise", tipo: "Deserto", tone: "ok" as Tone, quando: "Qualquer hora — direto da praia", oque: "Caminhe 200m sul de Sunrise. Coral house perto da costa. Grátis." },
  { nome: "Pointe Norte de Sunset", tipo: "Deserto", tone: "ok" as Tone, quando: "Manhã com maré alta", oque: "Snorkel direto da praia. Sem barco. Visi 15m+ em jan-fev." },
  { nome: "Koh Hin Sorn", tipo: "Deserto", tone: "ok" as Tone, quando: "Day-trip longtail particular", oque: "Pedra isolada a 20 min de Lipe. Longtail privado 1.500 baht. Sem outros barcos." },
  { nome: "Koh Dong", tipo: "Deserto", tone: "ok" as Tone, quando: "Manhã com longtail", oque: "Ilha pequena 15 min de longtail. Coral preservado, praia vazia." },
  { nome: "Koh Adang baía oeste", tipo: "Deserto", tone: "ok" as Tone, quando: "Tarde via longtail", oque: "Combine com trilha. Snorkel raso com bom coral, quase sempre vazio." },
];

const DAYTRIPS = [
  { tour: "Tour 4 Ilhas (Hin Ngam, Jabang, Yang, Rawi)", barco: "Longtail compartilhado", quando: "Saída 9h30, retorno 16h.", operadora: "Bundhaya Speed Boat, Forra Dive.", preco: "650-900 baht.", armadilha: "Longtail é tradicional mas lento e sem cobertura. Sol = queimadura. Speedboat custa 1.200 baht e cobre tudo em 5h." },
  { tour: "Tour 7 Ilhas premium", barco: "Speedboat pequeno", quando: "Saída 9h, retorno 17h.", operadora: "Forra Dive, Sabye Sports.", preco: "1.500-1.900 baht.", armadilha: "Pacote barato corta Koh Hin Sorn e Koh Dong (os dois melhores). Confirme o roteiro." },
  { tour: "Mergulho 2 tanks (8 Mile Rock, Stonehenge)", barco: "Dive boat", quando: "Saída 8h, retorno 15h.", operadora: "Forra Dive, Sabye Sports, Davy Jones Locker.", preco: "3.500-4.200 baht.", armadilha: "8 Mile Rock é avançado em corrente. Open Water aceita; iniciante deve ir só Stonehenge." },
  { tour: "Day-trip Langkawi (Malásia)", barco: "Ferry Telaga", quando: "Saída 09h30, retorno 16h.", operadora: "Bundhaya Ferry, Telaga Express.", preco: "1.800-2.400 baht ida e volta.", armadilha: "Carimbo de saída + retorno no passaporte. Brasileiros: visto on-arrival Tailândia válido por 30 dias renovado." },
  { tour: "Sunrise breakfast em longtail", barco: "Longtail privado", quando: "Saída 05h30, retorno 08h.", operadora: "Chao Ley (povo Moken) do Sunrise Beach.", preco: "1.200-1.800 baht / barco (até 4).", armadilha: "Não é tour formal — combine direto na praia na noite anterior. Negocie em 4 pessoas pra dividir." },
];

const GOLPES = [
  { golpe: "Taxa do Parque Nacional 'esquecida' no transfer", resposta: "É REAL: 200 baht no floating pier de chegada. Guarde recibo — usar pra Adang/Rawi sem pagar de novo." },
  { golpe: "Mini-van Hat Yai-Pakbara 'fura conexão' do speedboat", resposta: "Reserve van DA mesma operadora do speedboat (Bundhaya ou Tigerline). Sem isso, eles não esperam." },
  { golpe: "Speedboat 'cancelado' em fev-mar com sol forte", resposta: "É raro. Confirme operadora no balcão e exija reembolso ou próxima saída — não aceite 'reagendar pra amanhã' sem hotel." },
  { golpe: "Tour 4 ilhas cortando Koh Yang ou Jabang", resposta: "Confirme em escrito o nome das 4 ilhas ANTES de pagar. Pacote barato = 2 ilhas + 1 snorkel curto." },
  { golpe: "Longtail-taxi do pier cobrando 300 baht pra Sunrise", resposta: "Tabela é 50-100 baht. Pague em moeda fechada. Recuse troco 'não tem'." },
  { golpe: "Bungalow 'frente mar' com 2 fileiras de bangalô na frente", resposta: "Booking.com mostra mapa errado. Veja foto recente no Google Maps street-view + Instagram do hotel marcado." },
  { golpe: "Restaurante na praia cobrando 'taxa de areia'", resposta: "Não existe. Recuse e peça gerente. Em Lipe é golpe de 1-2 lugares, conhecidos." },
  { golpe: "ATM Bundhaya cobrando 220 baht + câmbio ruim", resposta: "Não tem banco em Lipe — só ATMs. Saque 10.000+ de uma vez. Traga dinheiro de Pakbara/Hat Yai." },
  { golpe: "Tour Langkawi 'sem precisar carimbar passaporte'", resposta: "MENTIRA. Imigração é obrigatória. Quem entra sem carimbar paga multa de overstay na volta." },
  { golpe: "Aluguel de bike elétrica com 'arranhão prévio'", resposta: "Lipe é PEQUENA (2x3 km) — não precisa de bike. Walk-only. Se alugar: filme 360° e contrato em inglês." },
  { golpe: "Massagem na praia 'preço amigo' que dobra", resposta: "Preço escrito ANTES. Casa fixa com cardápio (Walking Street tem várias) sempre mais seguro." },
  { golpe: "Cervejas em bar com 'happy hour' acabando agora", resposta: "Confira cardápio. Happy hour real em Lipe é 17h-19h em quase todo bar — não é manipulação." },
];

const BLACKLIST = [
  "Tour com âncora em recife (qualquer operadora que aceita)",
  "Snorkel tocando coral 'pra foto'",
  "Comprar concha, coral seco ou tartaruga em loja de souvenir (ilegal)",
  "Ferry pirata 'mais barato' que não tem registro Marine Police",
  "Bucket de Lao Whisky no Walking Street (origem dúbia, ressaca pesada)",
  "Banana boat / parasailing (operadores sem seguro)",
];

const APROVADAS = [
  { nome: "Forra Dive", oque: "Mergulho 5★ PADI, top operadora, Stonehenge/8 Mile Rock." },
  { nome: "Sabye Sports", oque: "Diving + snorkel premium, eco-conscious." },
  { nome: "Davy Jones Locker", oque: "Diving descontraído, ótimo pra Open Water." },
  { nome: "Bundhaya Speed Boat", oque: "Transfer Pakbara-Lipe confiável, combo voo+van." },
  { nome: "Tigerline Travel", oque: "Speedboats que conectam Lipe ↔ Lanta ↔ Phi Phi (nov-mai)." },
  { nome: "Chao Ley (Moken)", oque: "Longtails tradicionais da praia Sunrise — sunrise breakfast." },
];

const ROTEIROS = [
  { dias: "4 dias (mínimo)", foco: "Lipe essencial", dia: [
    "D1: chegada Bangkok→Lipe (manhã cedo). Sunset em Sunset Beach.",
    "D2: tour 4 ilhas + Walking Street à noite.",
    "D3: snorkel direto da praia + day spa.",
    "D4: sunrise em Sunrise Beach + retorno (saída 11h30).",
  ]},
  { dias: "6 dias", foco: "Lipe completa", dia: [
    "D1: chegada, Pattaya Beach instalação.",
    "D2: tour 7 ilhas premium (Koh Hin Sorn).",
    "D3: trilha Adang ao nascer do sol + tarde de praia.",
    "D4: mergulho 2 tanks Stonehenge.",
    "D5: longtail privado Koh Dong + Sunset Beach.",
    "D6: retorno.",
  ]},
  { dias: "8 dias (Lipe + Langkawi)", foco: "Tailândia + Malásia", dia: [
    "D1-D4: Lipe (tour 4 ilhas, Adang, mergulho).",
    "D5: ferry Lipe → Langkawi (1h15).",
    "D6-D7: Langkawi (Cable Car, Pantai Cenang).",
    "D8: voo Langkawi → KL ou retorno.",
  ]},
  { dias: "10 dias (Andaman south)", foco: "Lipe + Lanta + Phi Phi", dia: [
    "D1-D4: Lipe (essencial + mergulho).",
    "D5: speedboat Lipe → Lanta (4h via Lanta Pier).",
    "D6-D7: Lanta (scooter loop).",
    "D8: ferry Lanta → Phi Phi.",
    "D9-D10: Phi Phi + retorno Phuket.",
  ]},
];

const COMIDA = [
  { lugar: "Elephant Restaurant", bairro: "Pattaya Beach", oque: "Tailandesa familiar, massaman e curry de caranguejo lendários.", preco: "180-400 baht" },
  { lugar: "Pooh's Bar & Restaurant", bairro: "Walking Street", oque: "Veterano da ilha, mix tailandês-ocidental, vibe descontraída.", preco: "200-500 baht" },
  { lugar: "Daya Restaurant", bairro: "Sunrise Beach", oque: "Pé na areia, seafood na brasa, sunset traseiro.", preco: "300-700 baht" },
  { lugar: "Nee Papaya", bairro: "Walking Street", oque: "Som tam autêntico, melhor papaya salad da ilha.", preco: "80-180 baht" },
  { lugar: "Lipe Lobby Bar", bairro: "Pattaya Beach", oque: "Café da manhã ocidental decente, croissant e ovo Benedict.", preco: "180-350 baht" },
  { lugar: "Cafe Lipe", bairro: "Pattaya central", oque: "Coffee shop com sourdough, bom pra trabalho remoto.", preco: "150-280 baht" },
  { lugar: "Bombay Indian Restaurant", bairro: "Walking Street", oque: "Curry e naan reais. Boa alternativa quando enjoa de tailandês.", preco: "200-450 baht" },
  { lugar: "Mango Tree", bairro: "Sunset Beach", oque: "Pé na areia frontal pro sunset. Drinks e tapas tailandeses.", preco: "200-500 baht" },
  { lugar: "Rak Talay Seafood", bairro: "Sunrise sul", oque: "Local de verdade, peixe do dia escolhido na pedra.", preco: "350-800 baht" },
  { lugar: "Sunrise Beach Restaurant", bairro: "Sunrise", oque: "Café da manhã com vista de Adang ao amanhecer.", preco: "150-300 baht" },
];

const SUNSETS = [
  { nome: "Sunset Beach (a praia inteira)", tone: "premium" as Tone, nota: "10/10", quando: "17h45-18h30 (nov-mar)", oque: "Sol mergulha entre Adang e Rawi. A melhor da ilha, sem competição." },
  { nome: "Mango Tree (Sunset Beach)", tone: "premium" as Tone, nota: "10/10", quando: "17h30 chega cedo", oque: "Pé na areia frontal, drinks e tapas. Pequeno, lota — chegue antes." },
  { nome: "Sunrise Beach norte (vista oeste de Adang)", tone: "ok" as Tone, nota: "8/10", quando: "Sunset lateral, foto de Adang", oque: "Não é sunset frontal, mas a luz dourada sobre Adang é fotografia." },
  { nome: "Pattaya Beach oeste (Bundhaya)", tone: "info" as Tone, nota: "7/10", quando: "17h em diante", oque: "Acessível e movimentado. Bom drink, vista boa, sem ser épica." },
  { nome: "Topo de Adang ao pôr do sol", tone: "premium" as Tone, nota: "10/10", quando: "Trilha às 15h, descida com lanterna", oque: "Para experientes. Vista panorâmica de Lipe ao entardecer. Leve frontal." },
];

const ADANG = [
  { titulo: "Como ir", texto: "Longtail do Sunrise Beach até a base de Adang: 15 min, 200-300 baht/pessoa ida e volta. Combine retorno antes." },
  { titulo: "Trilha (Chado Cliff Viewpoint)", texto: "2,5 km só ida, íngreme. 1h30-2h subida, 1h descida. Tênis fechado, 2L água, repelente. Sem placa: pergunte ao guarda do parque na base." },
  { titulo: "Quando ir", texto: "Nascer do sol (saída 04h30 do Sunrise) OU pôr do sol (saída 15h, descida com lanterna). Meio-dia é desumano." },
  { titulo: "O que esperar", texto: "Vista panorâmica de Lipe inteira, Rawi atrás, mar azul-piscina. Macacos no caminho. Você usou o ingresso de 200 baht da chegada." },
  { titulo: "Rawi (praia deserta)", texto: "Ilha vizinha de Adang, sem trilha, só praia branca de 1,5 km quase sempre vazia. Longtail combinado com Adang (full day) 1.500-2.000 baht / barco até 4 pessoas. Sem restaurante — leve água e snack." },
  { titulo: "Tarutao histórica (avançado)", texto: "Ilha-prisão dos anos 30-40, hoje sede do Parque Nacional. Longtail/speedboat charter de Lipe: 2h, 4.500+ baht/barco. Trilhas a Talo Wow, Lo Po, mirante do farol. Vá só se tiver 6+ dias em Lipe." },
];

const WALKING_STREET = [
  { titulo: "O que é", texto: "Rua de pedestres ligando Pattaya Beach ao Sunrise Beach. 700m de barracas, restaurantes, bares e lojas — único 'centro' da ilha." },
  { titulo: "Quando ir", texto: "Vida noturna começa 19h, pico 21h-23h. Antes das 18h é só comércio diurno meio parado." },
  { titulo: "Onde comer", texto: "Pooh's Bar (clássico veterano), Nee Papaya (som tam autêntico), Bombay Indian (quando enjoa de tailandês). Cardápio em inglês na maioria." },
  { titulo: "Vibe", texto: "Lounge bars com fogo na areia, fire show 21h em vários pontos, reggae em 2-3 lugares. SEM balada eletrônica — quem quer techno vai pra Phangan." },
];

const HAT_YAI_PITSTOP = [
  { titulo: "Quando precisa", texto: "Voo de Bangkok chegou DEPOIS das 14h em Hat Yai (HDY). Última mini-van pra Pakbara sai 14h-14h30. Sem ela, durma e siga 7h da manhã seguinte." },
  { titulo: "Onde dormir", texto: "Centro a 12 km do aeroporto. Hotéis de R$ 120-280: Centara Hat Yai (perto rodoviária), Lee Gardens Plaza (centro), Buri Sriphu Boutique. Reserva fácil de última hora." },
  { titulo: "Aeroporto direto", texto: "Se voo chegou após 21h: hotel no aeroporto (Sleep Box Hat Yai, cápsulas R$ 80) e parta 6h. Não pegue táxi pra centro à noite — golpe de tabela inflada." },
  { titulo: "O que fazer", texto: "Hat Yai NÃO é destino turístico. Use só como pit-stop. Se sobrou tarde: night market Kim Yong (street food halal — Hat Yai é cidade muçulmana mista)." },
];



const HOSPEDAGEM = [
  { faixa: "Mochileiro", price: "R$ 180 — 450", items: [
    ["Castaway Beach Resort", "Sunrise, bangalô madeira."],
    ["Forra Dive Resort", "Pattaya, mergulhador-friendly."],
    ["Salisa Resort", "Pattaya, hostel-style."],
    ["Lipe Beach Resort", "Sunrise, custo-benefício."],
  ]},
  { faixa: "Médio", price: "R$ 550 — 1.300", items: [
    ["Mali Resort Pattaya", "Pattaya, boutique."],
    ["Idyllic Concept Resort", "Sunrise, design moderno."],
    ["Sita Beach Resort", "Pattaya, padrão sólido."],
    ["Bundhaya Resort", "Pattaya, frente mar central."],
  ]},
  { faixa: "Premium", price: "R$ 1.500 — 4.000+", items: [
    ["Serendipity Beach Resort", "Sunrise, vista Adang."],
    ["Akira Lipe Resort", "Pattaya, lua de mel."],
    ["Ten Moons Lipe Resort", "Sunrise sul, isolamento."],
    ["The Reef Lipe", "Pattaya, top da ilha."],
  ]},
];

const KohLipe2947 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Lipe · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Lipe sem desistir no <em className="pk-display-em">meio do caminho</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                As Maldivas da Tailândia pela metade do preço — mas chegar é o filtro. 4 trechos sem perrengue,
                3 praias decodificadas, 5 snorkels desertos, Adang ao nascer do sol e a janela climática real.
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
                <p className="pk-bento-h">Lipe só existe de novembro a abril. Fora disso, é ilha-fantasma.</p>
                <p className="pk-bento-p">
                  Em mai-out a monção fecha Parque Tarutao, cancela ferries e fecha 90% dos resorts.
                  Janela real: <strong>nov-abr</strong>. Pico: <strong>dez-fev</strong>. <em>Reserve com 3-5 meses.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Praias</p><p className="pk-bento-stat">03</p><p className="pk-bento-cap">decodificadas</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Snorkels</p><p className="pk-bento-stat">08</p><p className="pk-bento-cap">3 clássicos + 5 desertos</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">com resposta</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve offline antes — Lipe tem internet ruim.
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
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: por que Lipe é o filtro" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Lipe é a ilha mais ao sul da Tailândia</strong> — colada à fronteira da Malásia,
                  dentro do Parque Nacional Tarutao. Água da cor de Maldivas, areia branca de farinha, 2x3 km caminháveis.
                  Sem carros, sem aeroporto, sem balada agressiva. Só praia, snorkel e silêncio.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Próximas seções: as 3 praias (escolha a sua), a janela climática (não erre o mês) e os 4 trechos pra chegar sem perrengue.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="praias">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="3 praias — escolha a sua" />
            <div className="grid md:grid-cols-3 gap-6">
              {PRAIAS.map((p, i) => (
                <Reveal key={p.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[p.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="pk-h3"><G>{p.nome}</G></h3>
                      <span className="pk-verdict">{p.veredito}</span>
                    </header>
                    <dl className="pk-dl">
                      <div><dt>Perfil</dt><dd>{p.perfil}</dd></div>
                      <div><dt>Evite se</dt><dd>{p.evite}</dd></div>
                      <div><dt>Água</dt><dd>{p.agua}</dd></div>
                      <div><dt>Quanto</dt><dd>{p.quanto}</dd></div>
                    </dl>
                    <p className="mt-4 pk-italic">{p.quando}</p>
                  </article>
                </Reveal>
              ))}
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
                <p><strong>Maio-outubro a ilha FECHA:</strong> Parque Nacional Tarutao fecha por decreto, ferries cancelam, 90% dos resorts fecham. Quem reserva nessas datas perde dinheiro. Janela real: <strong>nov-abr</strong>.</p>
              </div>
            </Reveal>
          </section>

          <section id="chegar">
            <SectionTitle icon={Route} kicker="04 — Logística" title="4 trechos Bangkok → Lipe (sem perrengue)" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">A rota é longa, mas previsível.</strong> Sai 06h de Bangkok, chega 15h em Lipe.
                  Pegar voo cedo é a diferença entre conseguir tudo no dia OU dormir em Hat Yai.
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
            <Reveal>
              <div className="pk-callout pk-callout-info mt-6">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Floating pier de chegada cobra 200 baht 'taxa do Parque Nacional'</strong> — é REAL e legítima. Guarde o recibo: usa pra entrar em Adang/Rawi sem pagar de novo.</p>
              </div>
            </Reveal>
          </section>

          <section id="hatyai">
            <SectionTitle icon={Hotel} kicker="05 — Plano B" title="Hat Yai pit-stop — se você chegou tarde" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Voo de Bangkok depois das 14h?</strong>{" "}
                  Perdeu a última van pra Pakbara. Vai dormir em Hat Yai e seguir 7h da manhã.
                  <em> Não é fim do mundo — basta saber onde dormir e onde NÃO se meter.</em>
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {HAT_YAI_PITSTOP.map((h, i) => (
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
            <SectionTitle icon={Sparkles} kicker="05 — Onde dormir" title="Hospedagem por faixa real" />
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
                          <strong className="text-[hsl(var(--pk-fg))]"><G>{name}</G></strong>
                          <span className="text-[hsl(var(--pk-muted))]"> — {desc}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="snorkel">
            <SectionTitle icon={Waves} kicker="06 — Mar" title="Snorkel: 3 clássicos + 5 desertos" />
            <div className="grid md:grid-cols-2 gap-5">
              {SNORKEL.map((s, i) => (
                <Reveal key={s.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[s.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="pk-h4"><G q={s.nome + " Koh Lipe Thailand"}>{s.nome}</G></h3>
                      <span className="pk-verdict">{s.tipo}</span>
                    </header>
                    <p className="pk-kicker">Quando ir</p>
                    <p className="text-sm mt-1 mb-3">{s.quando}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{s.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="07 — Day-trips" title="Tours — operadora certa" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Koh Lipe Thailand"}>{d.tour}</G></h3>
                      <p className="pk-gold-soft text-xs mt-2 uppercase tracking-[0.18em]">{d.barco}</p>
                    </div>
                    <div><p className="pk-kicker">Quando</p><p className="text-sm mt-1">{d.quando}</p></div>
                    <div><p className="pk-kicker">Operadora</p><p className="text-sm mt-1">{d.operadora}</p></div>
                    <div>
                      <p className="pk-kicker">Preço</p>
                      <p className="pk-gold-soft font-medium text-sm mt-1">{d.preco}</p>
                      <p className="text-xs text-[hsl(var(--pk-alert))] mt-2 flex gap-1.5"><AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" /> {d.armadilha}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="adang">
            <SectionTitle icon={Mountain} kicker="08 — Trilha" title="Adang — a vista que vale a subida" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Adang é a montanha verde a 15 min de Lipe.</strong>{" "}
                  Trilha íngreme de 2,5 km até o Chado Cliff Viewpoint — e a foto de Lipe vista de cima vira papel de parede pra sempre.
                  <em> Quase ninguém faz. Faça você.</em>
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {ADANG.map((a, i) => (
                <Reveal key={a.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{a.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{a.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="comida">
            <SectionTitle icon={UtensilsCrossed} kicker="09 — Mesa" title="Onde comer — 10 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Lipe`}>{c.lugar}</G></h3>
                      <span className="pk-tag-sm">{c.bairro}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mb-3">{c.oque}</p>
                    <p className="pk-gold-soft text-sm font-medium">{c.preco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="walking">
            <SectionTitle icon={Lightbulb} kicker="10 — Noite" title="Walking Street — único 'centro' de Lipe" />
            <div className="grid md:grid-cols-2 gap-5">
              {WALKING_STREET.map((w, i) => (
                <Reveal key={w.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{w.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{w.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="sunsets">
            <SectionTitle icon={Sunset} kicker="10 — Sunset" title="5 sunset spots ranqueados" />
            <div className="grid md:grid-cols-2 gap-5">
              {SUNSETS.map((s, i) => (
                <Reveal key={s.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[s.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="pk-h4"><G q={s.nome + " Koh Lipe Thailand"}>{s.nome}</G></h3>
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

          <section id="roteiros">
            <SectionTitle icon={Sun} kicker="11 — Tempo" title="Roteiros prontos — 4, 6, 8 e 10 dias" />
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
            <SectionTitle icon={ShieldCheck} kicker="12 — Defesa" title="12 golpes — e a resposta exata" />
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

          <section id="blacklist">
            <SectionTitle icon={XCircle} kicker="13 — Curadoria" title="Lista negra + operadoras que valem" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <article className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker text-[hsl(var(--pk-alert))]">Evitar</p>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {BLACKLIST.map((b, i) => (
                      <li key={i} className="flex gap-2.5">
                        <XCircle className="w-4 h-4 text-[hsl(var(--pk-alert))] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
              <Reveal i={1}>
                <article className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker pk-gold">Operadoras que valem</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {APROVADAS.map((a) => (
                      <li key={a.nome}>
                        <strong className="pk-gold"><G q={a.nome + " Koh Lipe Thailand"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="14 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada praia, restaurante, snorkel e operadora tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado — toque e abre no Google Maps.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Lipe no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Lipe,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha inteira</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps → menu → "Mapas offline" → enquadre Lipe + Adang + Rawi → baixar. Internet em Lipe é ruim — salve ANTES.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="15 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Bangalô", "R$ 180"], ["Comida street", "R$ 80"], ["Tour 4 ilhas (rateio)", "R$ 130"], ["Cerveja/água", "R$ 50"]], total: "R$ 440 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel boutique", "R$ 650 / casal"], ["Comida", "R$ 280"], ["Tour 7 ilhas speedboat", "R$ 720 / casal"], ["Drinks/spa", "R$ 250"]], total: "R$ 1.900 / casal / dia (médio)" },
                { tipo: "Premium", linhas: [["Serendipity/Akira", "R$ 2.200 / casal"], ["Comida + drinks", "R$ 700"], ["Longtail privado", "R$ 750"], ["Diving 2 tanks", "R$ 1.600"]], total: "R$ 5.250 / casal / dia" },
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
                { nome: "Koh Lanta (vizinha — Andaman)", path: "/koh-lanta-tailandia" },
                { nome: "Koh Phi Phi (Andaman)", path: "/koh-phi-phi-tailandia" },
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
          Guia Koh Lipe — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohLipe2947;

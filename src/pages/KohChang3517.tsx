// Guia Koh Chang — versão premium (Noir & Gold)
// Rota privada: /kohchang3517
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Chang, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "Praias-bairro", icon: Home },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "selva", label: "Selva", icon: Sun },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Chegada", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "cachoeiras", label: "Cachoeira mês a mês", icon: Sun },
  { id: "ferries", label: "Ferries", icon: Ship },
  { id: "checklist", label: "Checklist viagem", icon: ShieldCheck },
  { id: "conectividade", label: "SIM & Wi-Fi", icon: MapPin },
  { id: "dinheiro", label: "ATM & câmbio", icon: Wallet },
  { id: "erros", label: "Erros caros", icon: AlertTriangle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const CACHOEIRAS_MES: { mes: string; status: string; oque: string; tone: Tone }[] = [
  { mes: "Janeiro", status: "Fraca", oque: "Fio d'água. Klong Plu vira piscina rasa. Pule a entrada de 200 baht.", tone: "warn" },
  { mes: "Fevereiro", status: "Seca", oque: "Klong Plu e Khlong Nonsi praticamente secas. Than Mayom ainda escorre.", tone: "alert" },
  { mes: "Março", status: "Seca", oque: "Pior mês. Foque em praia e snorkel.", tone: "alert" },
  { mes: "Abril", status: "Fraca", oque: "Começam chuvas pontuais. Volume ainda baixo.", tone: "warn" },
  { mes: "Maio", status: "Boa", oque: "Klong Plu volta a ter queda. Vale a entrada.", tone: "ok" },
  { mes: "Junho", status: "Cheia", oque: "Volume forte. Cuidado com pedra escorregadia.", tone: "ok" },
  { mes: "Julho", status: "Cheia", oque: "Pico de volume. Janela de ouro pra cachoeira.", tone: "premium" },
  { mes: "Agosto", status: "Cheia", oque: "Forte mesmo. Algumas trilhas alagam — Than Mayom ainda OK.", tone: "premium" },
  { mes: "Setembro", status: "Cheia", oque: "Última grande janela. Chuva forte intercalada.", tone: "premium" },
  { mes: "Outubro", status: "Cheia + perigosa", oque: "Volume máximo, mas correnteza pode ser perigosa. Não nade na base.", tone: "warn" },
  { mes: "Novembro", status: "Boa", oque: "Volume cai, mar volta a ficar bom. Combo cachoeira+praia.", tone: "ok" },
  { mes: "Dezembro", status: "Média", oque: "Klong Plu ainda escorre. Volume diminuindo.", tone: "info" },
];

const FERRIES = [
  { rota: "Bangkok (Ekamai) → Trat", op: "999 / Cherdchai bus", saidas: "05h-23h (10/dia)", duracao: "5h-6h", preco: "250-300 baht" },
  { rota: "Bangkok (Suvarnabhumi) → Trat (voo)", op: "Bangkok Airways", saidas: "06h45 / 10h45 / 14h25", duracao: "1h", preco: "2.500-4.000 baht" },
  { rota: "Trat (Centerpoint) → Koh Chang (Dan Kao)", op: "Centerpoint Ferry", saidas: "06h-19h (cada hora)", duracao: "45 min", preco: "80 baht" },
  { rota: "Trat (Ao Thammachat) → Koh Chang (Sapparot)", op: "Ferry Koh Chang", saidas: "06h30-19h (cada 45 min)", duracao: "30 min", preco: "80 baht" },
  { rota: "Koh Chang → Koh Mak (alta temporada)", op: "Bang Bao Boat", saidas: "09h / 13h (out-mai)", duracao: "1h", preco: "450 baht" },
  { rota: "Koh Chang → Koh Kood (alta temporada)", op: "Boonsiri / Bang Bao", saidas: "10h30 / 13h30 (nov-mai)", duracao: "1h30-2h", preco: "650-800 baht" },
  { rota: "Koh Chang → Koh Wai", op: "Bang Bao Boat", saidas: "09h (nov-mai)", duracao: "45 min", preco: "400 baht" },
  { rota: "Koh Chang → Cambodia (Koh Kong border)", op: "Minivan + ferry", saidas: "07h30 (1/dia)", duracao: "4h", preco: "900 baht" },
];

const CHECKLIST = [
  { item: "Seguro viagem com cobertura para scooter", quando: "Antes de embarcar. Maioria dos sinistros em Chang é moto. Sem PID brasileira não cobre.", critico: true },
  { item: "PID — Permissão Internacional para Dirigir", quando: "Tira no Detran do seu estado, 90 dias antes. Polícia em White Sand abre blitz semanal.", critico: true },
  { item: "Bloqueador reef-safe (sem oxybenzone)", quando: "Obrigatório no Koh Rang National Park. Compre antes — em Chang sai 3x.", critico: false },
  { item: "Repelente forte (DEET 30%+)", quando: "Selva, cachoeira e Salakphet têm mosquito sério. Icaridina também serve.", critico: false },
  { item: "Sapato fechado para trilha", quando: "Trilha pra Long Beach (Hat Yao) e Klong Plu pedem solado. Havaiana não dá.", critico: false },
  { item: "Cópia digital do passaporte + visto", quando: "Foto no celular + e-mail pra você mesmo. Resort guarda original; cópia resolve check-ins.", critico: false },
  { item: "Vacina febre amarela (se vier do Brasil)", quando: "Tailândia não exige, mas se você fizer escala em país endêmico, sim.", critico: false },
  { item: "Dinheiro em baht antes de chegar à ilha", quando: "Saque grande em Bangkok ou aeroporto. ATMs em Chang cobram 220 baht/saque.", critico: false },
];

const CONECTIVIDADE = [
  { onde: "White Sand / Klong Prao / Kai Bae", sinal: "5G AIS/True ótimo", obs: "Wi-Fi em todo café. 15 Palms, Toh Pho Bakery, Magic Garden funcionam para trabalho remoto." },
  { onde: "Lonely Beach / Bailan", sinal: "4G estável", obs: "Sinal cai à noite quando lota. Wi-Fi de hostel é lento — pague café." },
  { onde: "Bang Bao / Klong Kloi", sinal: "4G médio", obs: "Pier tem cobertura; resort isolado ao sul varia." },
  { onde: "Salakphet / Long Beach / interior", sinal: "3G fraco a nulo", obs: "Trilha pra Hat Yao perde sinal. Baixe Maps offline antes." },
  { onde: "Cachoeiras (Klong Plu, Than Mayom)", sinal: "Sem sinal", obs: "Combine ponto de encontro antes de entrar na trilha." },
];

const ESIM_DICAS = [
  { o_que: "eSIM Airalo / Holafly (recomendado)", como: "Plano Tailândia 10GB / 30 dias ~ US$ 18. Ativa no avião. Funciona em Chang inteiro." },
  { o_que: "Chip físico AIS Traveller", como: "7-Eleven de Trat ou aeroporto. 299 baht / 8 dias ilimitado. Precisa passaporte." },
  { o_que: "True Tourist SIM", como: "Mesma faixa. Em Chang, AIS pega melhor no leste (Salakphet)." },
  { o_que: "Roaming brasileiro", como: "Vivo/Claro/Tim R$ 35-60/dia. Só vale 1-2 dias." },
];

const DINHEIRO = [
  { topico: "ATM padrão tailandês", detalhe: "220 baht de taxa fixa por saque, qualquer valor. Saque 20.000 baht de uma vez em Bangkok antes de chegar." },
  { topico: "Aeon Bank (White Sand)", detalhe: "Cobra 150 baht (vs 220). Único Aeon na ilha, perto do 7-Eleven principal." },
  { topico: "Casas de câmbio", detalhe: "Em Chang taxa é 3-5% pior que Bangkok. Traga baht do continente quando puder." },
  { topico: "Cartão Wise / Nomad", detalhe: "Câmbio próximo do oficial, IOF zero. Paga taxa do ATM ainda, mas spread vale." },
  { topico: "Dinheiro em todo lugar", detalhe: "Songthaew, night market, massagem de praia, scooter: só cash. Cartão só em resort e supermercado grande." },
  { topico: "Caução do scooter", detalhe: "Pague em DINHEIRO, nunca passaporte. Sem exceção. Filme entrega e devolução." },
];

const NIGHT_MARKETS = [
  { nome: "Night Market de White Sand", quando: "Diário, 17h-23h", oque: "Pad thai 60 baht, mango sticky rice 50, espetinho 20.", endereco: "Final norte da rua principal de White Sand" },
  { nome: "Night Market de Klong Prao", quando: "Diário, 18h-22h", oque: "Curry massaman 80 baht, peixe grelhado 150, suco fresco 40.", endereco: "Ao lado do Tesco Lotus de Klong Prao" },
  { nome: "Bang Bao Pier (jantar local)", quando: "Diário, 18h-22h", oque: "Frutos do mar 120-200, garoupa fresca 250, papaya salad 60.", endereco: "Final do pier de Bang Bao, lado esquerdo" },
  { nome: "Salakphet vila", quando: "Diário, 17h-21h", oque: "Pesca do dia 100-180, sopa tom yum 80, congee 40.", endereco: "Rua principal da vila de Salakphet" },
];

const ERROS_CAROS = [
  { erro: "Reservou White Sand achando que era selvagem", custo: "Viagem inteira", licao: "White Sand é o lado turístico. Lonely é mochileiro, Klong Prao é família, Salakphet é autêntico. Escolha pelo perfil." },
  { erro: "Perdeu o último ferry às 19h em Trat", custo: "+R$ 80 + dia perdido", licao: "Último ferry varia por temporada. Tem que estar no Centerpoint até 18h30 com folga." },
  { erro: "Pagou 'santuário' com banho em elefante", custo: "Tortura financiada", licao: "Único ético em Chang é Ban Kwan Chang. Qualquer banho/montaria/foto em cima = exploração." },
  { erro: "Foi a Klong Plu em fevereiro", custo: "R$ 60 + tempo", licao: "Janela boa = jul-out. Em fev-mar a cachoeira está seca. Cheque a tabela mensal antes." },
  { erro: "Alugou scooter sem filmar 360°", custo: "+R$ 2.000-3.500", licao: "Arranhão prévio vira 5-12k baht na devolução. Filme tudo, contrato em inglês, caução em dinheiro." },
  { erro: "Comeu em restaurante de praia turístico", custo: "+R$ 60/refeição", licao: "Cardápio com foto = preço x3. Night market a 50m serve melhor por R$ 12." },
  { erro: "Ficou só no norte e voltou", custo: "70% da ilha perdido", licao: "Bang Bao, Long Beach e Salakphet têm o melhor sunset e a melhor comida. Reserve mín. 2 noites no sul." },
  { erro: "Sacou 4× no ATM em vez de 1×", custo: "+R$ 50", licao: "4 × 220 baht = 880 baht jogados fora. Saque uma vez grande em Trat ou use Aeon em White Sand." },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "White Sand Beach (Hat Sai Khao)", veredito: "PRINCIPAL — agito + areia branca", tone: "warn", perfil: "Primeira vez, casal jovem, quem quer bar e restaurante a pé.", evite: "Quem quer sossego (parte norte tem música até 1h).", praia: "White Sand Beach (3 km) — a mais conhecida da ilha.", quanto: "Hostel R$ 60 / hotel R$ 200 / boutique R$ 500.", quando: "Quer praia bonita + comércio sem precisar de scooter." },
  { nome: "Klong Prao", veredito: "EQUILIBRADO — família, casal", tone: "ok", perfil: "Família, casal padrão, quem alterna praia e cachoeira.", evite: "Mochileiro sem grana (poucos dorms decentes).", praia: "Klong Prao Beach (4,5 km) — longa, mar calmo, sunset frontal.", quanto: "Hotel R$ 180 / resort R$ 500 / villa R$ 1.200.", quando: "Resorts pé-na-areia e cachoeira Klong Plu a 10 min." },
  { nome: "Kai Bae", veredito: "SOFT — pôr do sol, casal", tone: "ok", perfil: "Casal, lua de mel acessível, jantar com vista.", evite: "Quem precisa de balada (silêncio às 23h).", praia: "Kai Bae Beach — areia média, mar raso, ilhotas no sunset.", quanto: "Hotel R$ 220 / resort R$ 600.", quando: "Foto do sunset com Koh Yuak ao fundo." },
  { nome: "Lonely Beach", veredito: "MOCHILEIRO — festa econômica", tone: "info", perfil: "Mochileiro jovem, viajante longo, festa barata.", evite: "Casal sossego, família, lua de mel.", praia: "Lonely Beach — bonita, mais selvagem; sul tem corrente.", quanto: "Hostel R$ 40 / bangalô R$ 120 / hotel R$ 240.", quando: "Bar Stoner e Ting Tong por madrugadas inteiras." },
  { nome: "Bang Bao", veredito: "PIER — boat trips + sunset", tone: "info", perfil: "Day-tripper, quem sai cedo de barco, fotógrafo.", evite: "Quem quer dormir longe de turismo concentrado.", praia: "Não tem praia — vá para Bang Bao Beach ao lado.", quanto: "Boutique no pier R$ 350 / homestay R$ 180.", quando: "Última noite antes de tour de 4 ilhas." },
  { nome: "Lonely Beach Sul (Bailan)", veredito: "ESCONDIDO — small resorts", tone: "premium", perfil: "Casal slow travel, quem ama cove privativa.", evite: "Sem scooter, vira ilha sem mundo.", praia: "Bailan Beach — pequena, calma, alguns resorts privados.", quanto: "Resort R$ 600 / villa R$ 1.500.", quando: "Quer paz total e ainda assim chegar a Lonely à noite." },
  { nome: "Salakphet (sul-leste)", veredito: "AUTÊNTICO — vila de pescador", tone: "info", perfil: "Quem quer ver Tailândia rural, mergulho com a comunidade.", evite: "Quem quer praia (lado é manguezal).", praia: "Não tem praia urbana. Use Long Beach por trilha.", quanto: "Homestay R$ 120 / resort R$ 350.", quando: "Para uma noite só, sentir a ilha de verdade." },
];

const PRAIAS = [
  { nome: "White Sand Beach", perfil: "Principal, areia branca", como: "Norte é mais sossego; sul tem música." },
  { nome: "Klong Prao", perfil: "Longa, família, sunset", como: "Acesso por vários resorts; livre depois das 17h." },
  { nome: "Kai Bae", perfil: "Sunset com ilhotas, casal", como: "Maré baixa abre caminho de areia até Koh Man Nai." },
  { nome: "Lonely Beach", perfil: "Festa + areia", como: "Sul tem corrente forte; nade no norte." },
  { nome: "Bailan", perfil: "Pequena, calma", como: "Acesso por resort; pague consumação." },
  { nome: "Bang Bao Beach", perfil: "Quase deserta", como: "5 min de scooter do pier; quase só hóspedes." },
  { nome: "Long Beach (Hat Yao)", perfil: "Selvagem, sem ninguém", como: "Trilha de 20 min após Salakphet. Leve água." },
  { nome: "Khlong Kloi", perfil: "Final do oeste, sunset", como: "Última praia da costa. Restaurante pé-na-areia." },
];

const SELVA = [
  { nome: "Klong Plu Waterfall", oque: "Cachoeira mais famosa, com piscina grande para nado.", taxa: "200 baht entrada (estrangeiro)" },
  { nome: "Than Mayom Waterfall", oque: "Quatro quedas em série, do mirador do rei.", taxa: "200 baht" },
  { nome: "Klong Nonsi", oque: "Caminhada leve, piscinas naturais menores.", taxa: "Grátis" },
  { nome: "Kai Bae Viewpoint", oque: "Mirante para ilhotas do oeste no sunset.", taxa: "Grátis" },
  { nome: "Salakphet Mangrove", oque: "Caiaque no manguezal com guia local.", taxa: "500-800 baht" },
  { nome: "Trek a Hat Yao (Long Beach)", oque: "Trilha 1h por mata, praia recompensa.", taxa: "Grátis" },
];

const DAYTRIPS = [
  { tour: "4 Islands Snorkel (Koh Wai + Koh Yuak + Koh Mannok + Koh Rang)", barco: "Speedboat", quando: "Saída 8h30 do pier de Bang Bao.", operadora: "BB Divers, Bang Bao Boat (direto no pier).", preco: "1.000-1.400 baht.", armadilha: "Speedboat tem 30+ pessoas em pico; pague 200 a mais por barco menor." },
  { tour: "Koh Rang National Park (snorkel premium)", barco: "Speedboat dia inteiro", quando: "Saída 8h, retorno 17h.", operadora: "BB Divers, Koh Chang Diving.", preco: "1.500-2.200 baht + 400 baht entrada parque.", armadilha: "Entrada do parque não vem inclusa. Mergulho aqui é melhor que snorkel." },
  { tour: "Elefante ético — Klong Plu (sem montaria)", barco: "—", quando: "Manhã ou tarde, 3-4h.", operadora: "Ban Kwan Chang (única ética que sobrou).", preco: "1.500 baht.", armadilha: "Todo lugar que oferece 'elephant trekking' é exploração. Recuse." },
  { tour: "Day-trip Koh Mak", barco: "Speedboat", quando: "Saída 9h, retorno 16h.", operadora: "Bang Bao Boat.", preco: "900 baht + 200 baht uso de praia.", armadilha: "Em alta temporada, vá para Koh Kood (mais bonita); Mak fica para low season." },
  { tour: "Mergulho 2 tanques", barco: "Speedboat dive boat", quando: "Saída 8h, retorno 15h.", operadora: "BB Divers, Koh Chang Divers.", preco: "3.200-3.900 baht (2 dives + almoço + equipamento).", armadilha: "Visibilidade baixa em out-jan (monção). Vá entre fev-mai." },
];

const GOLPES = [
  { golpe: "Scooter: arranhão prévio vira 5.000-12.000 baht no devolver", resposta: "Filme 360° com áudio. 8 fotos com data. Contrato em inglês. Caução em dinheiro, NUNCA passaporte." },
  { golpe: "Carro alugado com 'rastreador' que cobra 'corrida fora de área'", resposta: "Não alugue carro em Koh Chang. Scooter resolve, taxi-truck para grupos." },
  { golpe: "Taxi-truck (songthaew) cobra 300 baht para 5 min", resposta: "Tabela é 60-100 baht/pessoa em rota fixa. Pergunte ANTES, divida com outros." },
  { golpe: "Tour de elefante 'santuário' que ainda monta", resposta: "Único ético é Ban Kwan Chang. Demais ainda exploram. Sem cima do animal, ponto." },
  { golpe: "ATM 'sem taxa' que cobra 220 baht", resposta: "Aeon Bank em White Sand cobra 50 baht. Saque 10.000+ de uma vez." },
  { golpe: "Bar tab com 'cortesia' aparecendo na conta", resposta: "Peça conta a cada rodada. Recuse o que não pediu." },
  { golpe: "Massagem na praia 'preço amigo' dobra na hora", resposta: "Preço escrito ANTES. Casa fixa com cardápio (Spa de hotel é seguro)." },
  { golpe: "Cardápio sem preço em restaurante praia", resposta: "Não sente. Procure cardápio escrito e tailandês comendo dentro." },
  { golpe: "Day-trip 'all inclusive' a Koh Rang sem entrada do parque", resposta: "Entrada de 400 baht NUNCA está no pacote. Considere no preço final." },
  { golpe: "Vendedor de tour na rua promete 'preço de hotel' e some", resposta: "Reserve no hotel grande, BB Divers ou no próprio pier. Vendedor de calçada some com seu dinheiro." },
  { golpe: "Aluguel de jet-ski com mesma máfia do resto do país", resposta: "Não alugue jet-ski na Tailândia. Esquema sistêmico, mesmo modus operandi." },
  { golpe: "Polícia 'multa de cortesia' sem recibo", resposta: "Multa real tem recibo na delegacia. Sem recibo = propina; recuse e peça delegacia." },
];

const BLACKLIST = [
  "Elephant trekking (qualquer passeio em cima do animal)",
  "Crocodile farm Koh Chang",
  "Snake Show de calçada",
  "Tiger pose (não existe ético em Koh Chang; recuse)",
  "Tour de banana boat com mesma quadrilha de jet-ski",
  "Bucket de Lao Whisky em Lonely Beach (origem dúbia, intoxicações reportadas)",
];

const APROVADAS = [
  { nome: "BB Divers Koh Chang", oque: "Mergulho 5★ PADI + day-trip a Koh Rang." },
  { nome: "Bang Bao Boat", oque: "Cooperativa local — 4 islands honesto." },
  { nome: "Ban Kwan Chang Elephant Camp", oque: "Único ético; observação e caminhada na floresta SEM montaria, SEM banho, SEM foto em cima." },
  { nome: "Salakphet Mangrove Tour", oque: "Caiaque com comunidade local, baixo impacto." },
];

const ROTEIROS = [
  { dias: "3 dias", foco: "Highlights", dia: [
    "D1: chegada Klong Prao ou Kai Bae, sunset Kai Bae viewpoint.",
    "D2: 4 islands snorkel (Bang Bao).",
    "D3: cachoeira Klong Plu de manhã + praia, voo/ferry à tarde.",
  ]},
  { dias: "5 dias", foco: "Sem corrida", dia: [
    "D1: chegada Klong Prao.",
    "D2: 4 islands snorkel.",
    "D3: cachoeira Than Mayom + Kai Bae viewpoint sunset.",
    "D4: Koh Mak day-trip OU 2-tank dive Koh Rang.",
    "D5: descanso praia + jantar Bang Bao pier.",
  ]},
  { dias: "7 dias", foco: "Chang + sul", dia: [
    "D1-D3: Chang oeste (4 islands + cachoeira).",
    "D4-D5: Koh Mak (2 noites, slow travel).",
    "D6-D7: Koh Kood (Cape Kuad, Klong Chao waterfall).",
  ]},
  { dias: "10 dias", foco: "Trat archipelago full", dia: [
    "D1-D3: Koh Chang (oeste + Lonely).",
    "D4-D6: Koh Kood (3 noites — praia mais bonita do arquipélago).",
    "D7-D8: Koh Mak (slow).",
    "D9: Koh Wai (sem energia, super selvagem).",
    "D10: volta a Trat + voo.",
  ]},
];

const TRANSFER = [
  { destino: "Bangkok → Trat (avião Bangkok Airways) + ferry", combo: "Voo 2.500-4.000 baht + minivan+ferry 350 baht", tempo: "4h porta a porta" },
  { destino: "Bangkok → Trat (ônibus Ekamai) + ferry", combo: "Ônibus 250-300 baht + ferry 80 baht", tempo: "6-7h" },
  { destino: "Trat ferry pier (Centerpoint) → Koh Chang (Dan Kao)", combo: "Ferry 80 baht + minivan 80 baht até White Sand", tempo: "45 min + 30 min" },
  { destino: "Pier Dan Kao → White Sand", combo: "Songthaew 100 baht/pessoa", tempo: "30 min" },
  { destino: "Pier Dan Kao → Klong Prao", combo: "Songthaew 120 baht/pessoa", tempo: "40 min" },
  { destino: "Pier Dan Kao → Lonely Beach", combo: "Songthaew 150 baht/pessoa", tempo: "55 min" },
  { destino: "Pier Dan Kao → Bang Bao", combo: "Songthaew 180 baht/pessoa", tempo: "1h" },
];

const COMIDA = [
  { lugar: "Magic Garden", bairro: "Klong Prao", oque: "Tailandesa de jardim, vegetariano forte, vibe acústica.", preco: "150-300 baht" },
  { lugar: "Iyara Seafood", bairro: "Salakphet", oque: "Frutos do mar sob palafita; preço local.", preco: "200-500 baht" },
  { lugar: "Ruan Thai", bairro: "Kai Bae", oque: "Curry massaman e laksa que tailandês recomenda.", preco: "120-250 baht" },
  { lugar: "Saffron on the Sea", bairro: "Klong Prao", oque: "Tailandesa fine dining pé na areia.", preco: "350-800 baht" },
  { lugar: "Phu-Talay", bairro: "Klong Prao", oque: "Casa de seafood com pier próprio.", preco: "200-450 baht" },
  { lugar: "Buddha View Restaurant", bairro: "White Sand", oque: "Sunset deck, preço justo, drink decente.", preco: "200-400 baht" },
  { lugar: "Nong Bua Roti Shop", bairro: "White Sand", oque: "Roti banana + leite condensado, clássico noturno.", preco: "40-80 baht" },
  { lugar: "Salakphet Seafood Restaurant", bairro: "Salakphet", oque: "Garoupa fresca, vista de manguezal.", preco: "250-600 baht" },
  { lugar: "15 Palms Beach Bar", bairro: "Klong Prao", oque: "Café da manhã + sunset, vista frontal.", preco: "200-380 baht" },
  { lugar: "Toh Pho Bakery", bairro: "Klong Prao", oque: "Pão sourdough + sanduíches sérios.", preco: "120-280 baht" },
];

const KohChang3517 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Chang · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Chang sem cair no <em className="pk-display-em">tour errado</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Sete praias-bairro decodificadas, cachoeiras com taxa real, 4-islands sem furada, elefante ético de verdade,
                roteiros 3 a 10 dias e doze golpes com resposta pronta.
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
                <p className="pk-bento-h">Chang é montanha + selva com praia — não Caribe.</p>
                <p className="pk-bento-p">
                  É a segunda maior ilha da Tailândia, 70% parque nacional. Quem vem por areia de cartão postal sai
                  decepcionado; quem vem por selva, sunset e cachoeira sai apaixonado. <em>Combine com Koh Mak ou Koh Kood</em> para o melhor do arquipélago.
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Praias-bairro</p><p className="pk-bento-stat">07</p><p className="pk-bento-cap">decodificadas</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Cachoeiras</p><p className="pk-bento-stat">04</p><p className="pk-bento-cap">testadas</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">com resposta</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve offline antes de embarcar (4G é ruim no leste).
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
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Chang" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Costa oeste é onde tudo acontece.</strong>{" "}
                  Hotel, praia, restaurante e tour saem dali. Costa leste é selvagem, vila de pescador, pra quem busca
                  Tailândia rural. Decidir o lado errado custa dias de scooter sem motivo.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Próxima seção decide qual praia-bairro do oeste é a sua: White Sand (agito), Klong Prao (equilíbrio), Kai Bae (sunset) ou Lonely (festa barata).
                </p>
              </div>
            </Reveal>
          </section>

          <section id="bairros">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="7 praias-bairro decodificadas" />
            <div className="grid md:grid-cols-2 gap-6">
              {BAIRROS.map((b, i) => (
                <Reveal key={b.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[b.tone]}`}>
                    <header className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="pk-h3"><G>{b.nome}</G></h3>
                      <span className="pk-verdict">{b.veredito}</span>
                    </header>
                    <dl className="pk-dl">
                      <div><dt>Perfil</dt><dd>{b.perfil}</dd></div>
                      <div><dt>Evite se</dt><dd>{b.evite}</dd></div>
                      <div><dt>Praia</dt><dd>{b.praia}</dd></div>
                      <div><dt>Quanto</dt><dd>{b.quanto}</dd></div>
                    </dl>
                    <p className="mt-4 pk-italic">{b.quando}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="praias">
            <SectionTitle icon={Waves} kicker="03 — Costa" title="8 praias por perfil" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRAIAS.map((p, i) => (
                <Reveal key={p.nome} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <h3 className="pk-h4"><G>{p.nome}</G></h3>
                    <p className="pk-gold-soft text-sm mt-1">{p.perfil}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{p.como}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="selva">
            <SectionTitle icon={Sun} kicker="04 — Interior" title="Selva e cachoeiras" />
            <div className="grid md:grid-cols-2 gap-5">
              {SELVA.map((s, i) => (
                <Reveal key={s.nome} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G>{s.nome}</G></h3>
                      <span className="pk-tag-sm">{s.taxa}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{s.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="05 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 40 — 140", items: [
                  ["Oasis Bungalows Lonely Beach", "festa, jovem."],
                  ["Independent Bo's", "clássico hippie."],
                  ["Pajamas Koh Chang Hostel", "design, White Sand."],
                  ["Penny's Bungalows", "Klong Prao, custo-benefício."],
                ]},
                { faixa: "Médio", price: "R$ 200 — 600", items: [
                  ["Koh Chang Paradise Resort", "Klong Prao, piscina top."],
                  ["Kacha Resort", "White Sand, pé na areia."],
                  ["Awa Resort", "Klong Prao, design moderno."],
                  ["Centara Koh Chang Tropicana", "padrão internacional."],
                ]},
                { faixa: "Premium", price: "R$ 800 — 3.000+", items: [
                  ["Soneva Kiri (Koh Kood)", "world-class, leva combinado."],
                  ["Emerald Cove Koh Chang", "Klong Prao 5★."],
                  ["The Spa Resort", "yoga + retreat, Klong Prao."],
                  ["Aana Resort", "Klong Prao villa privativa."],
                ]},
              ].map((col, i) => (
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

          <section id="transfer">
            <SectionTitle icon={MapPin} kicker="06 — Chegada" title="Combos que funcionam" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Trajeto</th><th>Combo</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td>{r.destino}</td>
                          <td className="pk-gold-soft font-medium">{r.combo}</td>
                          <td>{r.tempo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="pk-callout pk-callout-warn mt-6">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Bolt/Grab não opera dentro de Koh Chang.</strong> Só songthaew (caminhãozinho) ou scooter. Combine taxi com hotel para a volta — ele liga para o songthaew certo.</p>
              </div>
            </Reveal>
          </section>

          <section id="moto">
            <SectionTitle icon={Bike} kicker="07 — Scooter" title="Scooter sem perder caução" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Koh Chang Bike Rental</G></strong> (White Sand) — contrato em inglês.</li>
                    <li><strong><G>Kai Bae Hut Bike Rental</G></strong> — local honesto.</li>
                    <li><strong><G>Klong Prao Bike Rent</G></strong> — frota nova.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht (Honda Click 125). Cuidado com PCX no morro de Lonely.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Protocolo anti-golpe</p>
                  <ol className="pk-ol text-sm">
                    <li>Filme 360° narrando arranhão por arranhão.</li>
                    <li>8-12 fotos com data ativada.</li>
                    <li>Contrato em inglês com cláusulas legíveis.</li>
                    <li>Caução em dinheiro (2.000-5.000 baht) — NUNCA passaporte original.</li>
                    <li>Morro de Bang Bao → Lonely é íngreme; sem PID, nem tente.</li>
                    <li>Capacete sempre. Polícia para turista sem capacete para propina (50-500 baht).</li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="08 — Mar" title="Day-trips — operadora certa e horário esperto" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Koh Chang Thailand"}>{d.tour}</G></h3>
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

          <section id="comida">
            <SectionTitle icon={UtensilsCrossed} kicker="09 — Mesa" title="Onde o tailandês come — 10 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Chang`}>{c.lugar}</G></h3>
                      <span className="pk-tag-sm">{c.bairro}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mb-3">{c.oque}</p>
                    <p className="pk-gold-soft text-sm font-medium">{c.preco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="roteiros">
            <SectionTitle icon={Sun} kicker="10 — Tempo" title="Roteiros prontos — 3, 5, 7 e 10 dias" />
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
            <SectionTitle icon={ShieldCheck} kicker="11 — Defesa" title="12 golpes — e a resposta exata" />
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
            <SectionTitle icon={XCircle} kicker="12 — Curadoria" title="Lista negra + operadoras que valem" />
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
                        <strong className="pk-gold"><G q={a.nome + " Koh Chang Thailand"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="cachoeiras">
            <SectionTitle icon={Sun} kicker="13 — Janela da selva" title="Cachoeira mês a mês — para não pagar ingresso à toa" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CACHOEIRAS_MES.map((c, i) => (
                <Reveal key={c.mes} i={i}>
                  <article className={`pk-card pk-card-tight ${TONE_CLASS[c.tone]} h-full`}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="pk-h4">{c.mes}</h3>
                      <span className="pk-tag-sm">{c.status}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{c.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-info mt-8">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Resumo:</strong> jul-set é janela de ouro. Out cheia mas perigosa pra nadar. Fev-mar = pule cachoeira, foque em praia.</p>
              </div>
            </Reveal>
          </section>

          <section id="ferries">
            <SectionTitle icon={Ship} kicker="14 — Logística" title="Tabela completa de ferries e transporte" />
            <Reveal>
              <div className="pk-card pk-card-tight overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-[hsl(var(--pk-muted))] border-b border-[hsl(var(--pk-line))]">
                      <th className="py-3 pr-4">Rota</th>
                      <th className="py-3 pr-4">Operadora</th>
                      <th className="py-3 pr-4">Saídas</th>
                      <th className="py-3 pr-4">Duração</th>
                      <th className="py-3">Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FERRIES.map((f) => (
                      <tr key={f.rota + f.op} className="border-b border-[hsl(var(--pk-line))]/40 align-top">
                        <td className="py-3 pr-4 font-semibold text-[hsl(var(--pk-fg))]">{f.rota}</td>
                        <td className="py-3 pr-4">{f.op}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">{f.saidas}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">{f.duracao}</td>
                        <td className="py-3 whitespace-nowrap">{f.preco}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
            <Reveal>
              <div className="pk-callout pk-callout-warn mt-6">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Atenção sazonal:</strong> ferries para Koh Mak, Kood e Wai só rodam de <strong>nov-mai</strong>. Em jun-out (low season), use ferry público diário Bang Bao → Mak/Kood, mais lento e cancelável por mar agitado.</p>
              </div>
            </Reveal>
          </section>

          <section id="checklist">
            <SectionTitle icon={ShieldCheck} kicker="15 — Antes de embarcar" title="Checklist do viajante em Chang" />
            <div className="grid md:grid-cols-2 gap-4">
              {CHECKLIST.map((c, i) => (
                <Reveal key={c.item} i={i}>
                  <article className={`pk-card pk-card-tight ${c.critico ? TONE_CLASS.alert : TONE_CLASS.ok} h-full`}>
                    <h4 className="pk-h4 flex items-start gap-2">
                      {c.critico ? <AlertTriangle className="w-4 h-4 mt-1 shrink-0" /> : <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />}
                      {c.item}
                    </h4>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{c.quando}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="conectividade">
            <SectionTitle icon={MapPin} kicker="16 — Sinal" title="SIM, eSIM e Wi-Fi por região" />
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3 space-y-3">
                {CONECTIVIDADE.map((c, i) => (
                  <Reveal key={c.onde} i={i}>
                    <article className="pk-card pk-card-tight">
                      <div className="flex justify-between items-baseline gap-3">
                        <h4 className="pk-h4">{c.onde}</h4>
                        <span className="pk-tag-sm">{c.sinal}</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{c.obs}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
              <Reveal i={1} className="md:col-span-2">
                <article className="pk-card pk-tone-premium h-full">
                  <p className="pk-kicker">Como conectar</p>
                  <ul className="mt-3 space-y-3 text-sm">
                    {ESIM_DICAS.map((e) => (
                      <li key={e.o_que}>
                        <strong className="text-[hsl(var(--pk-fg))]">{e.o_que}</strong>
                        <p className="text-[hsl(var(--pk-muted))] mt-0.5">{e.como}</p>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="dinheiro">
            <SectionTitle icon={Wallet} kicker="17 — Bolso" title="ATM, câmbio e onde tailandês come (night markets)" />
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {DINHEIRO.map((d, i) => (
                <Reveal key={d.topico} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <h4 className="pk-h4">{d.topico}</h4>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{d.detalhe}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="pk-kicker mb-4">Night markets — comer por R$ 12, não R$ 80</p>
            <div className="grid md:grid-cols-2 gap-4">
              {NIGHT_MARKETS.map((n, i) => (
                <Reveal key={n.nome} i={i}>
                  <article className="pk-card pk-card-tight pk-tone-ok h-full">
                    <div className="flex justify-between items-baseline gap-3">
                      <h4 className="pk-h4"><G q={n.nome}>{n.nome}</G></h4>
                      <span className="pk-tag-sm">{n.quando}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{n.oque}</p>
                    <p className="text-xs text-[hsl(var(--pk-muted))] mt-1 italic">{n.endereco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="erros">
            <SectionTitle icon={AlertTriangle} kicker="18 — Aprenda com o erro alheio" title="Erros que custaram caro de verdade" />
            <div className="grid md:grid-cols-2 gap-4">
              {ERROS_CAROS.map((e, i) => (
                <Reveal key={e.erro} i={i}>
                  <article className={`pk-card pk-card-tight ${TONE_CLASS.alert} h-full`}>
                    <div className="flex justify-between items-start gap-3">
                      <h4 className="pk-h4">{e.erro}</h4>
                      <span className="pk-tag-sm whitespace-nowrap">{e.custo}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2"><strong className="pk-gold">Lição:</strong> {e.licao}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="19 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada bairro, praia, cachoeira, restaurante e locadora tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado — toque e abre no Google Maps.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://www.google.com/maps/place/Ko+Chang,+Thailand" target="_blank" rel="noreferrer" className="pk-tag inline-flex items-center gap-2"><MapIcon className="w-4 h-4" /> Abrir Koh Chang no Maps</a>
                  <a href="https://www.google.com/maps/search/beach+Koh+Chang+Thailand" target="_blank" rel="noreferrer" className="pk-tag inline-flex items-center gap-2"><Waves className="w-4 h-4" /> Ver todas as praias</a>
                  <a href="https://www.google.com/maps/search/waterfall+Koh+Chang+Thailand" target="_blank" rel="noreferrer" className="pk-tag inline-flex items-center gap-2"><Sun className="w-4 h-4" /> Ver cachoeiras</a>
                </div>
                <div className="pk-divider my-2" />
                <p><strong className="pk-gold">Salvar lista no seu celular (3 passos):</strong></p>
                <ol className="list-decimal pl-5 space-y-1 text-[hsl(var(--pk-muted))]">
                  <li>Toque em qualquer chip 📍 <strong>Mapa</strong> deste guia → abre no Google Maps.</li>
                  <li>No app, toque em <strong>"Salvar"</strong> → escolha lista <strong>"Quero ir"</strong> ou crie <strong>"Koh Chang 2026"</strong>.</li>
                  <li>Repita para cada lugar. Abra a lista uma vez em Wi-Fi para cachear offline.</li>
                </ol>
                <p><strong>Mapa offline:</strong> Google Maps → menu → "Mapas offline" → enquadre Chang + Mak + Kood → baixar. 4G é fraco no leste.</p>
              </div>
            </Reveal>
          </section>


          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="14 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Hostel/bangalô", "R$ 50"], ["Comida street", "R$ 55"], ["Scooter", "R$ 30"], ["Day-trip (média)", "R$ 50"]], total: "R$ 185 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel/resort", "R$ 280 / casal"], ["Comida", "R$ 220"], ["Scooter", "R$ 50"], ["Day-trip 4-islands", "R$ 460 / casal"]], total: "R$ 870 / casal / dia (médio)" },
                { tipo: "Premium", linhas: [["Resort 5★", "R$ 1.200"], ["Comida + drinks", "R$ 550"], ["Transfer privado", "R$ 300"], ["Diving 2 tanks privado", "R$ 1.400"]], total: "R$ 2.900 / casal / dia" },
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
                { nome: "Koh Tao", path: "/kohtao6294" },
                { nome: "Koh Lanta", path: "/kohlanta4831" },
                { nome: "Koh Phangan", path: "/kohphangan8463" },
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
          Guia Koh Chang — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohChang3517;

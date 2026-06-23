// Guia Koh Tao — versão premium (Noir & Gold)
// Rota privada: /kohtao6294
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, Footprints, Fish, Baby, Scale, Leaf, CalendarClock, Anchor, Flower2,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Tao, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "Bairros", icon: Home },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "mergulho", label: "Mergulho", icon: Waves },
  { id: "carreira", label: "Carreira PADI", icon: Sparkles },
  { id: "clima", label: "Janela do mar", icon: Sun },
  { id: "sunrise", label: "John-Suwan", icon: Sun },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Chegada", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida", icon: UtensilsCrossed },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "checklist", label: "Checklist mergulho", icon: ShieldCheck },
  { id: "glossario", label: "Glossário PADI", icon: Sparkles },
  { id: "ferries", label: "Ferries", icon: Ship },
  { id: "conectividade", label: "SIM & Wi-Fi", icon: MapPin },
  { id: "dinheiro", label: "ATM & câmbio", icon: Wallet },
  { id: "erros", label: "Erros caros", icon: AlertTriangle },
  { id: "visi-pontos", label: "Visi por ponto", icon: Waves },
  { id: "mapa-scooter", label: "Loop scooter", icon: Footprints },
  { id: "mes-perfil", label: "Mês × perfil", icon: CalendarClock },
  { id: "comparativo", label: "Tao×Phangan×Samui", icon: Scale },
  { id: "liveaboard", label: "Liveaboard", icon: Anchor },
  { id: "pesca", label: "Lula noturna", icon: Fish },
  { id: "spa", label: "Spa pós-dive", icon: Flower2 },
  { id: "vilarejo", label: "Tanote remoto", icon: Home },
  { id: "familia", label: "Família/kids", icon: Baby },
  { id: "conservacao", label: "Save Koh Tao", icon: Leaf },
  { id: "booking", label: "Quando reservar", icon: CalendarClock },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const CHECKLIST_MERGULHO = [
  { item: "Seguro DAN World (Dive Accident Network)", quando: "Antes de embarcar — US$ 45/ano. Seguro de viagem comum NÃO cobre câmara hiperbárica.", critico: true },
  { item: "Atestado médico PADI (form completo)", quando: "Obrigatório se >45 anos OU marcar 'sim' em qualquer condição. Resolva no Brasil — clínica em Tao cobra 1.500 baht.", critico: true },
  { item: "Sem álcool 12h antes de mergulhar", quando: "Mesmo 2 cervejas no jantar afetam o nitrogênio residual. Festa em Sairee = dia perdido.", critico: true },
  { item: "18 horas sem voar após o último mergulho", quando: "Regra do PADI/DAN. Calcule o voo de saída antes do último dive.", critico: true },
  { item: "Hidratação dobrada no dia anterior", quando: "Desidratação aumenta risco de bends. Beba 3L de água/dia.", critico: false },
  { item: "Refeição leve 2h antes (sem fritura)", quando: "Mar agitado + estômago cheio = vomitar dentro da máscara.", critico: false },
  { item: "Protetor solar reef-safe (sem oxybenzone)", quando: "Tao multa quem usa químico em barco de mergulho. Compre Stream2Sea ou Thinksport antes.", critico: false },
  { item: "Sapatilha de neoprene leve", quando: "Para subir na escada do barco com corais — corte é comum.", critico: false },
  { item: "Cópia digital da certificação PADI/SSI", quando: "Foto no celular + e-mail para você mesmo. Escolas pedem antes do fun dive.", critico: false },
];

const GLOSSARIO = [
  { termo: "Buoyancy (flutuabilidade)", oque: "Controle de subir/descer com respiração e BCD. É a habilidade #1 — define se você vai 'voar' embaixo d'água ou se debater." },
  { termo: "BCD", oque: "Buoyancy Control Device — o colete inflável. Você infla pra subir, esvazia pra descer." },
  { termo: "Surface interval", oque: "Tempo de descanso entre 2 mergulhos. Mínimo 1h. Serve pra liberar nitrogênio." },
  { termo: "Safety stop", oque: "Parada obrigatória de 3 min a 5m no final do mergulho. Não pule — é segurança real, não burocracia." },
  { termo: "NDL (No-Decompression Limit)", oque: "Tempo máximo numa profundidade sem precisar de parada descompressiva. Computador de mergulho calcula." },
  { termo: "Equalizar", oque: "Soltar pressão do ouvido apertando o nariz e soprando suave. Se doer, suba 1m e tente de novo." },
  { termo: "Octopus", oque: "Segundo regulador (amarelo). Pra emergência ou parceiro sem ar." },
  { termo: "DSMB", oque: "Boia inflável de superfície. Você lança no fim do mergulho pra avisar o barco onde você vai subir." },
  { termo: "Nitrox", oque: "Mistura com mais oxigênio (até 32%). Permite mergulho mais longo. Curso à parte." },
  { termo: "Bends (DCS)", oque: "Doença descompressiva. Nitrogênio formando bolha no sangue. Por isso safety stop e 18h sem voar." },
  { termo: "Briefing", oque: "Reunião antes do dive: mapa do site, profundidade, fauna esperada, sinais. Preste atenção." },
  { termo: "Buddy", oque: "Parceiro de mergulho. Vocês cuidam um do outro. Nunca mergulhe sozinho recreativo." },
];

const FERRIES = [
  { rota: "Chumphon → Koh Tao", op: "Lomprayah", saidas: "07h / 13h", duracao: "1h45 (catamarã)", preco: "600 baht" },
  { rota: "Chumphon → Koh Tao", op: "Songserm", saidas: "07h", duracao: "3h (slow boat)", preco: "400 baht" },
  { rota: "Surat Thani → Koh Tao", op: "Lomprayah (via Samui)", saidas: "08h", duracao: "5h-6h", preco: "1.100 baht" },
  { rota: "Koh Samui (Bangrak) → Koh Tao", op: "Lomprayah", saidas: "08h / 12h30", duracao: "1h45", preco: "650 baht" },
  { rota: "Koh Samui (Maenam) → Koh Tao", op: "Seatran Discovery", saidas: "08h / 13h", duracao: "2h", preco: "600 baht" },
  { rota: "Koh Phangan (Thong Sala) → Koh Tao", op: "Lomprayah", saidas: "08h30 / 13h", duracao: "1h", preco: "500 baht" },
  { rota: "Koh Phangan → Koh Tao", op: "Seatran Discovery", saidas: "08h30 / 13h30", duracao: "1h15", preco: "450 baht" },
  { rota: "Koh Tao → Chumphon (volta)", op: "Lomprayah", saidas: "10h15 / 14h45", duracao: "1h45", preco: "600 baht" },
  { rota: "Koh Tao → Koh Samui", op: "Lomprayah", saidas: "06h / 09h30 / 15h", duracao: "1h45", preco: "650 baht" },
];

const CONECTIVIDADE = [
  { onde: "Sairee / Mae Haad", sinal: "5G AIS/True ótimo", obs: "Wi-Fi rápido em todo café. Coffee Boat e Cafe del Sol confiáveis para trabalho remoto." },
  { onde: "Chalok Baan Kao", sinal: "4G estável", obs: "Wi-Fi médio nos resorts. Suficiente para WhatsApp e e-mail." },
  { onde: "Tanote Bay / Aow Leuk", sinal: "3G fraco / sem sinal em pontos", obs: "Baixe Maps offline antes. Resorts oferecem Wi-Fi via satélite (lento)." },
  { onde: "Hin Wong / Leste em geral", sinal: "Quase nada", obs: "Pegue na boa: zona de desconectar. Avise família antes." },
  { onde: "Dentro d'água nos dive sites", sinal: "—", obs: "Óbvio mas alguém pergunta: sem sinal. Use Garmin inReach se precisar emergência." },
];

const ESIM_DICAS = [
  { o_que: "eSIM antes de embarcar (recomendado)", como: "Airalo, Holafly ou Nomad — plano Tailândia 10GB / 30 dias ~ US$ 18. Ativa no avião." },
  { o_que: "Chip físico AIS Traveller", como: "Comprado no 7-Eleven de Mae Haad ou aeroporto. 299 baht / 8 dias ilimitado. Precisa passaporte." },
  { o_que: "Chip True Tourist", como: "Mesma faixa de preço. Sinal levemente pior em Tao do que AIS." },
  { o_que: "Roaming brasileiro", como: "Vivo/Claro/Tim cobram R$ 35-60/dia. Só vale se ficar 1-2 dias." },
];

const DINHEIRO = [
  { topico: "Caixa eletrônico (ATM)", detalhe: "Toda ATM tailandesa cobra 220 baht de taxa fixa por saque, independente do valor. Saque uma única vez 20.000 baht no aeroporto/Bangkok antes de chegar." },
  { topico: "Aeon Bank (a exceção)", detalhe: "Cobra 150 baht (vs 220 dos outros). Em Tao tem um caixa em Mae Haad — sempre cheio, mas economiza." },
  { topico: "Câmbio em casa", detalhe: "Casas de câmbio em Tao têm taxa 3-5% pior que Bangkok. Traga baht do continente se possível." },
  { topico: "Cartão Wise / Nomad", detalhe: "Câmbio próximo do oficial + R$ 0 de IOF. Ainda paga a taxa do ATM, mas o spread vale." },
  { topico: "Dólar em espécie", detalhe: "Aceito em troca, mas note de US$ 100 nova pega câmbio melhor. Notas antigas/marcadas viram desconto." },
  { topico: "Cartão de crédito", detalhe: "Resorts premium, dive shops grandes e supermercados aceitam. Restaurante local e taxi: só dinheiro." },
  { topico: "Travel hack", detalhe: "Pague a escola de mergulho no cartão sem juros (parcela em real). Saque o dinheiro só para comida/scooter." },
];

const ERROS_CAROS = [
  { erro: "Comprou Open Water online por R$ 1.800", custo: "+R$ 1.200", licao: "Mesma escola cobra R$ 600 no pier. Sempre reserve só a noite 1 e feche na ilha." },
  { erro: "Confundiu Sairee com Mae Haad ao desembarcar", custo: "+R$ 80", licao: "Taxi-truck cobra 300 baht extra se você não souber que é tabelado em 100/pessoa." },
  { erro: "Ignorou seguro DAN e teve barotrauma leve", custo: "+R$ 3.500", licao: "Câmara hiperbárica em Koh Samui sai R$ 8.000-12.000. DAN cobre 100%. US$ 45/ano." },
  { erro: "Reservou em outubro porque era barato", custo: "Viagem perdida", licao: "Monção NE = mar fechado dias seguidos. Pacote 30% mais barato vira 100% perdido." },
  { erro: "Alugou scooter sem filmar 360°", custo: "+R$ 4.000", licao: "Arranhão prévio vira 8-25k baht na devolução. Filme tudo + use só Oishi/Adventure/Mr Bee." },
  { erro: "Voou 8h depois do último dive", custo: "Ida ao hospital em Bangkok", licao: "Regra é 18h. Pulmão expande no avião e bolha de nitrogênio mata. Não é folclore." },
  { erro: "Pagou Nang Yuan day-trip 'all inclusive'", custo: "+R$ 50", licao: "Entrada de 250 baht NUNCA está inclusa. Reserve esse troco no bolso." },
  { erro: "Sacou 5 vezes no ATM em vez de 1", custo: "+R$ 50", licao: "5 × 220 baht de taxa fixa = 1.100 baht jogados fora. Saque grande, divida com parceiro." },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Sairee Beach", veredito: "PRINCIPAL — vida + praia + mergulho", tone: "warn", perfil: "Mergulhador iniciante, primeira vez na ilha, mochileiro social.", evite: "Quem quer silêncio absoluto (música até 2h em alguns trechos).", praia: "Sairee Beach (1,7 km) — a maior praia da ilha, sunset frontal.", quanto: "Hostel R$ 50 / hotel R$ 180 / boutique R$ 450.", quando: "Quer dive shop, restaurante e bar tudo a pé." },
  { nome: "Mae Haad", veredito: "PRÁTICO — pier + serviços", tone: "info", perfil: "Quem chega/sai com bagagem, primeira noite, quem trabalha remoto.", evite: "Quem quer praia bonita (é zona de pier).", praia: "Pequeno trecho usável ao sul do pier; vá para Sairee.", quanto: "Hotel R$ 160 / boutique R$ 380.", quando: "Base curta antes de mergulho ou ferry." },
  { nome: "Chalok Baan Kao", veredito: "TRANQUILO — casal, expat", tone: "ok", perfil: "Casal, mergulhador veterano, slow travel, family-style.", evite: "Quem quer balada (é silêncio depois das 23h).", praia: "Chalok Beach — calma, mar raso, bom pôr do sol lateral.", quanto: "Hotel R$ 200 / resort R$ 550.", quando: "Quer alternar mergulho com sossego real." },
  { nome: "Tanote Bay", veredito: "REMOTO — snorkel premium", tone: "premium", perfil: "Lua de mel discreta, fotógrafo, quem aluga scooter.", evite: "Quem não anda de scooter (estrada íngreme, táxi caro).", praia: "Tanote Bay — corais a 10 m da areia, peixes a granel.", quanto: "Bangalô R$ 230 / resort R$ 700.", quando: "Você quer acordar e nadar com peixe-papagaio." },
  { nome: "Aow Leuk", veredito: "ESCONDIDO — snorkel + sunrise", tone: "ok", perfil: "Mergulhador, casal sossego, quem topa estrada ruim.", evite: "Quem chega de táxi (descida brava, sair caro).", praia: "Aow Leuk — uma das melhores águas da ilha.", quanto: "Bangalô R$ 200 / resort R$ 600.", quando: "Para fugir totalmente da multidão." },
  { nome: "Jansom Bay / South", veredito: "PREMIUM — boutique no penhasco", tone: "premium", perfil: "Casal premium, lua de mel, fotos no penhasco.", evite: "Mochileiro (sem nada por perto a pé).", praia: "Jansom Bay — pequena, pedrosa, snorkel ótimo.", quanto: "Boutique R$ 600 / Charm Churee Villa R$ 900.", quando: "Quer privacidade total e infinity-pool." },
];

const PRAIAS = [
  { nome: "Sairee Beach", perfil: "Praia principal, sunset", como: "Setor norte é mais calmo; sul tem bares pé na areia." },
  { nome: "Sai Nuan", perfil: "Escondida a 15 min a pé de Mae Haad", como: "Trilha pela mata depois do Sensi Paradise. Vá com tênis." },
  { nome: "Freedom Beach", perfil: "Pequena, corais", como: "Acesso por trilha ou taxa de 50 baht no resort." },
  { nome: "Chalok Baan Kao", perfil: "Calma, família", como: "Mar raso até 50 m. Bom para criança." },
  { nome: "Tanote Bay", perfil: "Snorkel top, pedra de salto", como: "Scooter até lá. Bois Bar serve almoço pé na areia." },
  { nome: "Aow Leuk", perfil: "Snorkel + sunrise (leste)", como: "Estrada íngreme. Vá de scooter pela manhã." },
  { nome: "Hin Wong Bay", perfil: "Snorkel selvagem, leste", como: "Estrada de terra. Mochileiro adora; turista comum, não." },
  { nome: "Mango Bay", perfil: "Só por barco — snorkel/diving", como: "Inclusa em todo tour de snorkel da ilha." },
  { nome: "Shark Bay", perfil: "Tubarões de recife, snorkel", como: "Saída pela Thian Og Bay (Shark Bay Lounge cobra 50 baht)." },
  { nome: "Koh Nang Yuan", perfil: "Postal — 3 ilhotas ligadas por areia", como: "Day-trip 250 baht entrada. Não leve plástico. Mirante obrigatório." },
];

const MERGULHO = [
  { ponto: "Chumphon Pinnacle", nivel: "Advanced", oque: "Pináculo profundo (14-36m), grupos de barracuda, melhor mergulho da ilha." },
  { ponto: "Sail Rock", nivel: "Open Water+", oque: "Pináculo no canal Tao-Phangan, whale shark season (mar-abr/set-out)." },
  { ponto: "Twins / White Rock", nivel: "Open Water iniciante", oque: "Padrão de check-dive e Open Water. Tartarugas frequentes." },
  { ponto: "Japanese Gardens", nivel: "Snorkel + Open Water", oque: "Corais rasos em frente a Koh Nang Yuan. Perfeito iniciante." },
  { ponto: "HTMS Sattakut", nivel: "Advanced/Wreck", oque: "Naufrágio militar a 30m, entre Mae Haad e Hin Pee Wee." },
  { ponto: "Shark Island", nivel: "Advanced", oque: "Correntes, tubarões-de-recife, grandes cardumes." },
];

const ESCOLAS: { nome: string; oque: string; site?: string; ig?: string }[] = [
  { nome: "Big Blue Diving", oque: "Maior e mais social. Open Water + hospedagem em pacote.", site: "https://www.bigbluediving.com", ig: "https://instagram.com/bigbluediving" },
  { nome: "Crystal Dive", oque: "5★ PADI Career Development. Inglês cristalino para iniciante.", site: "https://www.crystaldive.com", ig: "https://instagram.com/crystaldivekohtao" },
  { nome: "Master Divers", oque: "Boutique, turmas pequenas, ótima para tímido.", site: "https://www.master-divers.com", ig: "https://instagram.com/masterdivers" },
  { nome: "Roctopus Dive", oque: "Vibe relax, instrutores experientes.", site: "https://www.roctopusdive.com", ig: "https://instagram.com/roctopusdive" },
  { nome: "New Heaven Reef Conservation", oque: "Ecoconsciente, conservação de coral + mergulho.", site: "https://www.newheavendiveschool.com", ig: "https://instagram.com/newheavenreefconservation" },
  { nome: "Ban's Diving Resort", oque: "Grande, eficiente, resort próprio em Sairee.", site: "https://www.bansdivingresort.com", ig: "https://instagram.com/bansdivingresort" },
  { nome: "Davy Jones' Locker", oque: "Inglês claro, turma média, bom para Advanced.", site: "https://www.davyjoneslockerkohtao.com", ig: "https://instagram.com/davyjoneslockerkohtao" },
  { nome: "Sairee Cottage Diving", oque: "Família, turmas reduzidas, ótimo para iniciante ansioso.", site: "https://www.saireecottagediving.com", ig: "https://instagram.com/saireecottagediving" },
  { nome: "Phoenix Divers", oque: "Boutique em Sairee, vibe acolhedora, foco em Advanced/Rescue.", site: "https://www.phoenix-divers.com", ig: "https://instagram.com/phoenixdiverskohtao" },
  { nome: "Black Turtle Dive", oque: "Pequena, instrutor sênior por aluno, ideal para perfeccionista.", site: "https://www.blackturtledive.com", ig: "https://instagram.com/blackturtledive" },
];

const INSTRUTORES_BR = [
  { nome: "Rafael (PT)", base: "Big Blue Diving · Sairee", oque: "Open Water completo em PT, especialista em iniciante com medo de água profunda." },
  { nome: "Camila (PT)", base: "Crystal Dive · Mae Haad", oque: "Advanced + Rescue em PT. Tem turma exclusiva BR mês a mês." },
  { nome: "Diego (PT/ES)", base: "Master Divers · Mae Haad", oque: "Divemaster + instrutor — atende casal e família em PT." },
  { nome: "Bruna (PT)", base: "Roctopus Dive · Sairee", oque: "Open Water em 3 dias, vibe relax. Bom para quem quer hospedagem inclusa." },
  { nome: "Felipe (PT)", base: "New Heaven Reef · Chalok", oque: "Foco em conservação de coral. Para quem quer dive com propósito." },
  { nome: "Larissa (PT)", base: "Davy Jones' Locker · Sairee", oque: "Especialista em mulher viajando sozinha. Turmas reduzidas." },
];

const NEGOCIAR = [
  { fase: "Antes de chegar", o_que_dizer: "NUNCA pague online um Open Water completo. Reserve só a noite 1 em Mae Haad. Decide na ilha." },
  { fase: "No pier de Mae Haad", o_que_dizer: "Visite 3 escolas a pé. Peça o preço em baht escrito. Frase: 'I want to compare 3 schools before signing.'" },
  { fase: "Mostrando concorrência", o_que_dizer: "'Crystal me ofereceu 9.500 baht com 3 noites. Você cobre?' — quase sempre cobrem ou jogam noite extra." },
  { fase: "Fechando", o_que_dizer: "Peça: turma até 4 alunos + instrutor em PT/EN claro + material novo + 1 fun dive grátis no fim. Tudo escrito no recibo." },
  { fase: "Faixa-alvo", o_que_dizer: "Open Water justo: 9.000-11.000 baht com hospedagem 3 noites. Acima disso = está pagando comissão de revendedor." },
];

const CARREIRA = [
  { nivel: "Open Water", prazo: "3-4 dias", preco: "9.500-11.000 baht", oque: "Habilita até 18 m. Pré-requisito para tudo. Inclui pool + 4 mergulhos." },
  { nivel: "Advanced Open Water", prazo: "+2 dias", preco: "8.500-10.500 baht", oque: "Habilita até 30 m. 5 mergulhos com especialidades (profundidade, navegação)." },
  { nivel: "EFR + Rescue Diver", prazo: "+3-4 dias", preco: "12.000-14.500 baht", oque: "Primeiros socorros + cenários de resgate. Mudança real de mentalidade." },
  { nivel: "Divemaster (DMT)", prazo: "6-8 semanas", preco: "32.000-45.000 baht", oque: "Profissional. Hospedagem normalmente inclusa na escola. Pode trabalhar como guia." },
  { nivel: "Instrutor (IDC)", prazo: "+3-4 semanas", preco: "80.000-110.000 baht (com IE)", oque: "Career path completo. Tao é o lugar mais barato do mundo para fechar." },
];

const VISIBILIDADE = [
  { mes: "Janeiro", vis: "20-30 m", dica: "Janela de ouro. Mar liso, sem chuva.", tone: "ok" as Tone },
  { mes: "Fevereiro", vis: "25-35 m", dica: "Melhor mês — tubarão-baleia em Sail Rock.", tone: "premium" as Tone },
  { mes: "Março", vis: "20-30 m", dica: "Whale shark season pico. Cheio mas vale.", tone: "premium" as Tone },
  { mes: "Abril", vis: "15-25 m", dica: "Calor extremo. Mergulho ótimo, terra escaldante.", tone: "ok" as Tone },
  { mes: "Maio", vis: "15-20 m", dica: "Última janela boa antes da monção SW.", tone: "ok" as Tone },
  { mes: "Junho", vis: "10-18 m", dica: "Monção SW começa. Aceitável.", tone: "info" as Tone },
  { mes: "Julho", vis: "10-15 m", dica: "Chuva intermitente. Pacotes baratos.", tone: "info" as Tone },
  { mes: "Agosto", vis: "10-15 m", dica: "Visibilidade média. Sail Rock ainda rende.", tone: "info" as Tone },
  { mes: "Setembro", vis: "15-25 m", dica: "Whale shark season 2. Janela boa retorna.", tone: "premium" as Tone },
  { mes: "Outubro", vis: "5-12 m", dica: "Monção NE chega. Cancelamentos frequentes.", tone: "warn" as Tone },
  { mes: "Novembro", vis: "3-10 m", dica: "Pior mês. Mar fechado dias seguidos. Evite.", tone: "alert" as Tone },
  { mes: "Dezembro", vis: "10-20 m", dica: "Mar volta. Natal/Réveillon = preços altos.", tone: "info" as Tone },
];

const DAYTRIPS = [
  { tour: "Koh Nang Yuan + 4 pontos snorkel", barco: "Speedboat (volta às 16h)", quando: "Saída 9h-9h30 do pier de Mae Haad.", operadora: "Direto no pier (Lomprayah, John Suwan tours).", preco: "650-1.000 baht + 250 baht entrada Nang Yuan.", armadilha: "Última parada é Nang Yuan sob sol forte. Leve protetor reef-safe (cobrado se trouxer químico)." },
  { tour: "Sunset booze cruise", barco: "Veleiro ou barco grande", quando: "Saída 16h, retorno 19h.", operadora: "Aow Leuk Sunset, Sailing Catamaran Tao.", preco: "900-1.500 baht (open bar moderado).", armadilha: "Open bar nem sempre vale; alguns só dão 2 drinks. Pergunte antes." },
  { tour: "Try Dive — primeiro mergulho", barco: "Longtail / speedboat curto", quando: "Manhã, 9h às 13h.", operadora: "Big Blue, Crystal, Master Divers.", preco: "1.800-2.500 baht (2 mergulhos rasos).", armadilha: "Tem que dormir bem, sem álcool 12h antes — senão fica mal no barco." },
  { tour: "Open Water Course (3-4 dias)", barco: "Diário, Mae Haad", quando: "Início diário, manhã.", operadora: "Crystal, Big Blue, Roctopus.", preco: "9.500-11.000 baht (com material + hospedagem 3 noites).", armadilha: "Curso barato sem instrutor falando seu idioma estressa; pague +500 baht por turma menor." },
  { tour: "Volta de ilha de scooter", barco: "—", quando: "Manhã 9h-15h.", operadora: "Faça por conta com mapa offline.", preco: "Scooter 200 baht + gasolina 80 baht.", armadilha: "Estrada para Aow Leuk e Tanote é íngreme; sem PID = sem seguro." },
];

const GOLPES = [
  { golpe: "Scooter: arranhão prévio vira 8.000-25.000 baht (epidemia em Tao)", resposta: "Filme 360° narrando, 12 fotos com data, contrato em inglês. Use só Oishi, Adventure ou Mr Bee." },
  { golpe: "'Polícia' parando turista por capacete na Sairee road", resposta: "Multa real é 200-500 baht com recibo na delegacia. Tem propina embutida; peça recibo." },
  { golpe: "Taxi-truck Mae Haad → Sairee cobra 300 baht", resposta: "Tabela oficial 100 baht/pessoa, 200 com bagagem grande. Some passageiros e divida." },
  { golpe: "Bar tab em Sairee com 'cortesias' cobradas", resposta: "Peça a conta a cada rodada. Recuse drinks que não pediu." },
  { golpe: "Curso de mergulho com material 'novo' que é genérico", resposta: "Pergunte marca da máscara/regulador. Crystal, Big Blue e Master Divers são confiáveis." },
  { golpe: "Day-trip 'all inclusive' a Nang Yuan: entrada não inclusa", resposta: "Entrada de 250 baht NUNCA está no pacote. Considere no orçamento." },
  { golpe: "Loja de massagem na Sairee 'preço amigo', cobra dobro", resposta: "Acerte preço por escrito. Healing Hands e Jamahkiri spa são honestos." },
  { golpe: "ATM com taxa de 220 baht 'sem aviso'", resposta: "Aeon Bank em Mae Haad cobra 50 baht. Saque uma vez por viagem (10.000+)." },
  { golpe: "Sunset cruise 'open bar' = 2 drinks só", resposta: "Pergunte por escrito o que open bar significa. Pague 200 baht a mais por um real." },
  { golpe: "Bicicleta alugada com cadeado quebrado vira cobrança de roubo", resposta: "Teste o cadeado antes. Fotografe. Recuse pagar sem nota fiscal." },
  { golpe: "Tour de barco 'volta a ilha' some com sua bolsa na praia", resposta: "Não deixe nada na areia. Use dry-bag e leve junto no snorkel." },
  { golpe: "Visa run da rua que some com passaporte 8h", resposta: "Faça no Lomprayah ou Big Blue. Caixinha confiável." },
];

const BLACKLIST = [
  "Quad bike tour com 'instrutor' menor de 18 anos",
  "Aluguel de jet-ski (mesma quadrilha de Phuket/Samui)",
  "Curso de mergulho com escola sem certificado PADI/SSI visível",
  "Tour de pesca com âncora em recife (mata coral vivo)",
  "Tatuagem de bambu sem autoclave (epidemia de infecção em Sairee)",
  "Bar do mochileiro que serve 'bucket' com Lao Whisky local não-rotulado",
];

const APROVADAS = [
  { nome: "Crystal Dive Koh Tao", oque: "Curso PADI iniciante padrão-ouro." },
  { nome: "Big Blue Diving Koh Tao", oque: "Pacote curso+dorm, vida social." },
  { nome: "Master Divers", oque: "Boutique, turma pequena, ideal para tímido." },
  { nome: "Lomprayah", oque: "Ferries Tao ↔ Phangan ↔ Samui + Surat Thani." },
  { nome: "Oishi Bike", oque: "Scooter honesto em Sairee, sem golpe de caução." },
];

const ROTEIROS = [
  { dias: "3 dias", foco: "Snorkel + 1 dive", dia: [
    "D1: chegada Mae Haad, hotel em Sairee, sunset na praia.",
    "D2: day-trip Koh Nang Yuan + snorkel pontos clássicos.",
    "D3: try-dive Twins ou Japanese Gardens; voo/ferry à tarde.",
  ]},
  { dias: "5 dias", foco: "Open Water Course", dia: [
    "D1: chegada, assinatura na escola, vídeo + pool.",
    "D2-D4: confined + 4 mergulhos abertos (cert. emitida no D4).",
    "D5: fun dive em Sail Rock ou Chumphon Pinnacle, descanso, ferry.",
  ]},
  { dias: "7 dias", foco: "Tao + Phangan", dia: [
    "D1-D4: Open Water em Tao (Crystal ou Big Blue).",
    "D5: ferry Lomprayah para Koh Phangan (Sri Thanu).",
    "D6: Bottle Beach + Thong Nai Pan.",
    "D7: ferry de volta + voo.",
  ]},
  { dias: "10 dias", foco: "Tao + Phangan + Samui", dia: [
    "D1-D4: Open Water Tao.",
    "D5: 1 fun dive + ferry para Phangan.",
    "D6-D7: oeste de Phangan (sunset Sri Thanu).",
    "D8: ferry para Samui (Bangrak).",
    "D9: Ang Thong speedboat.",
    "D10: voo USM.",
  ]},
];

const TRANSFER = [
  { destino: "Bangkok → Koh Tao (avião+ferry, via Chumphon)", bolt: "—", taxi: "Lomprayah combo 1.300-1.500 baht", tempo: "10h porta a porta" },
  { destino: "Bangkok → Koh Tao (avião USM + ferry)", bolt: "—", taxi: "Voo 1.500-2.500 + ferry Lomprayah 650 baht", tempo: "6-7h" },
  { destino: "Koh Samui (Bangrak) → Koh Tao", bolt: "—", taxi: "Lomprayah 650 baht / Seatran 600 baht", tempo: "1h45 - 2h30" },
  { destino: "Koh Phangan (Thong Sala) → Koh Tao", bolt: "—", taxi: "Lomprayah 500 baht", tempo: "1h - 1h15" },
  { destino: "Mae Haad pier → Sairee Beach", bolt: "—", taxi: "Taxi-truck 100 baht/pessoa", tempo: "5 min" },
  { destino: "Mae Haad → Chalok Baan Kao", bolt: "—", taxi: "Taxi-truck 150 baht/pessoa", tempo: "10 min" },
  { destino: "Mae Haad → Tanote Bay", bolt: "—", taxi: "Taxi privado 400-600 baht", tempo: "15 min" },
];

const COMIDA = [
  { lugar: "995 Roasted Duck", bairro: "Mae Haad", oque: "Pato chinês lendário. Senta com tailandês.", preco: "120-200 baht/prato" },
  { lugar: "Su Chili", bairro: "Sairee", oque: "Tailandesa familiar, lotado por motivo.", preco: "80-180 baht" },
  { lugar: "Whitening Restaurant & Bar", bairro: "Mae Haad", oque: "Pé na areia, jantar pôr do sol.", preco: "300-700 baht" },
  { lugar: "Barracuda Restaurant", bairro: "Sairee", oque: "Fusion fine dining; carta de vinho.", preco: "500-1.200 baht" },
  { lugar: "The Gallery Restaurant", bairro: "Sairee", oque: "Tailandesa moderna, arte nas paredes.", preco: "250-550 baht" },
  { lugar: "Pranee's Kitchen", bairro: "Mae Haad", oque: "Curry massaman do livro.", preco: "100-220 baht" },
  { lugar: "Coffee Boat", bairro: "Sairee", oque: "Café de especialidade ao amanhecer.", preco: "80-150 baht" },
  { lugar: "Banyan Tree Mountain View", bairro: "Sairee Hill", oque: "Sunset 360° + jantar romântico.", preco: "400-800 baht" },
  { lugar: "Taste of Home", bairro: "Sairee", oque: "Café da manhã ocidental de verdade.", preco: "180-320 baht" },
  { lugar: "New Heaven Bakery", bairro: "Chalok", oque: "Pão fresco, sanduíches honestos.", preco: "70-180 baht" },
];

// === EXPANSÃO PADRÃO KOOD/LIPE ===

const VISI_PONTOS = [
  { ponto: "Chumphon Pinnacle", prof: "14-36 m", melhor: "Fev-Abr / Set", evitar: "Out-Nov", nota: "Barracuda gigante, grouper. Cuidado com corrente forte." },
  { ponto: "Sail Rock", prof: "10-40 m", melhor: "Fev-Mar (whale shark)", evitar: "Nov", nota: "Chaminé vertical lendária. Mergulhe cedo, 7h saída." },
  { ponto: "Southwest Pinnacle", prof: "10-30 m", melhor: "Fev-Maio", evitar: "Out-Dez", nota: "Pelágicos. Avançado, corrente imprevisível." },
  { ponto: "Twins / Japanese Gardens", prof: "5-18 m", melhor: "Ano todo", evitar: "Nov pico", nota: "Open Water clássico. Tartarugas residentes." },
  { ponto: "White Rock", prof: "5-22 m", melhor: "Ano todo", evitar: "—", nota: "Night dive top. Polvo, lula e siri agressivo." },
  { ponto: "Shark Bay (snorkel)", prof: "1-5 m", melhor: "Out-Mar", evitar: "Maré baixa", nota: "Black tip reef shark filhote. Calmo, kids OK." },
  { ponto: "HTMS Sattakut (naufrágio)", prof: "18-30 m", melhor: "Jan-Maio", evitar: "Monção SW", nota: "Wreck dive Advanced. Exige certificação Wreck." },
  { ponto: "Aow Leuk reef", prof: "3-12 m", melhor: "Ano todo", evitar: "Ventos N", nota: "Snorkel da praia, sem barco. Levou bóia." },
];

const MAPA_SCOOTER = [
  { de: "Mae Haad pier", para: "Sairee Beach centro", km: "2,1 km", min: "6 min", piso: "Asfalto bom", risco: "Movimento; pedestres saindo de bar à noite." },
  { de: "Sairee", para: "Chalok Baan Kao", km: "4,8 km", min: "12 min", piso: "Asfalto + 1 subida íngreme", risco: "Curva cega no topo do morro. Reduza." },
  { de: "Chalok", para: "Sai Nuan (praia escondida)", km: "1,5 km", min: "5 min + 8 min a pé", piso: "Trilha após estacionar", risco: "Trilha lamacenta na chuva." },
  { de: "Mae Haad", para: "Tanote Bay", km: "5,2 km", min: "18 min", piso: "Asfalto + 3 subidas pesadas", risco: "Mata de scooter iniciante. Considere táxi 400 baht." },
  { de: "Tanote", para: "Aow Leuk", km: "2,8 km", min: "10 min", piso: "Asfalto recente", risco: "OK; trecho mais tranquilo da ilha." },
  { de: "Sairee", para: "John-Suwan viewpoint (base)", km: "5,5 km", min: "16 min + 25 min trekking", piso: "Asfalto + trilha", risco: "Pedra escorregadia. Tênis, nunca chinelo." },
  { de: "Mae Haad", para: "Sairee Hill (Banyan Tree view)", km: "3,4 km", min: "11 min", piso: "Asfalto íngreme", risco: "Subida 18%. Scooter 110cc com 2 pessoas pode falhar." },
];

const MES_PERFIL = [
  { perfil: "Open Water iniciante (1ª vez)", mes: "Mar-Mai / Set-Out início", porque: "Mar liso, visibilidade 15-25 m, escolas com vaga, preço médio." },
  { perfil: "Advanced / Wreck", mes: "Jan-Abr", porque: "Sattakut com visi 20m+. Resto do ano vira aposta." },
  { perfil: "Caçador de whale shark", mes: "Fev-Mar e Set", porque: "Sail Rock recebe tubarões-baleia. Reserve fun dive 2 semanas antes." },
  { perfil: "Fun diver experiente", mes: "Fev / Set", porque: "Visi pico, sem multidão de curso, preço de fun dive cai 10%." },
  { perfil: "Festa + Half/Full Moon Phangan", mes: "Lua cheia qualquer mês exceto nov", porque: "Ferry 1h para Phangan. Mergulhe Tao de dia, festa Phangan à noite." },
  { perfil: "Casal sem mergulho", mes: "Jan-Mar", porque: "Snorkel Nang Yuan, Shark Bay, John-Suwan no clima seco." },
  { perfil: "Família com kids 6-12", mes: "Fev-Abr", porque: "Mar calmo pra snorkel. Bubblemaker PADI (8+) disponível." },
  { perfil: "Mochileiro orçamento mínimo", mes: "Jun-Ago", porque: "Curso Open Water cai pra R$ 1.500. Aceita visi 10-15m? Vale." },
];

const COMPARATIVO_ILHAS = [
  { dim: "Mergulho/certificação", tao: "Capital mundial — escola a cada 50 m", phangan: "1 boa escola (Chaloklum)", samui: "Caro, foco em fun dive de luxo" },
  { dim: "Vida noturna", tao: "Sairee tem bar/festa, sem rave", phangan: "Half/Full Moon mensal", samui: "Chaweng = clubes grandes" },
  { dim: "Praias", tao: "Pequenas, ótimas para snorkel", phangan: "Bottle Beach, Thong Nai Pan = top 5 Tailândia", samui: "Lamai e Maenam decentes" },
  { dim: "Preço médio/dia casal", tao: "R$ 900-1.200", phangan: "R$ 800-1.100", samui: "R$ 1.400-2.500" },
  { dim: "Acesso", tao: "Ferry 1h45 de Samui / 1h de Phangan", phangan: "Ferry 30 min de Samui", samui: "Voo direto BKK 1h" },
  { dim: "Para quem é", tao: "Mergulhador / quer certificar barato", phangan: "Festeiro + praias paradisíacas", samui: "Família, conforto, voo direto" },
  { dim: "Evite se", tao: "Não curte barco, enjoa fácil", phangan: "Vai em data de Full Moon e quer paz", samui: "Procura ilha 'rústica'" },
];

const LIVEABOARD = [
  { tipo: "Day-trip Sail Rock + Chumphon", duracao: "1 dia (3 dives)", quando: "Saída 7h, retorno 17h", preco: "3.500-4.200 baht", inclui: "3 cilindros, almoço, fruta", obs: "Melhor custo×benefício pra Advanced." },
  { tipo: "Night dive White Rock", duracao: "1 noite (1 dive)", quando: "Saída 18h30, retorno 21h", preco: "1.800-2.200 baht", inclui: "Lanterna + cilindro", obs: "Reservar 24h antes. Mar tem que estar limpo." },
  { tipo: "Liveaboard 3 dias Similan style (raro em Tao)", duracao: "3 dias / 8 dives", quando: "Apenas alta temporada Fev-Abr", preco: "18.000-24.000 baht", inclui: "Cabine, refeições, todos os dives", obs: "Só Master Divers e Crystal operam. Reservar 1 mês antes." },
];

const PESCA = [
  { tipo: "Squid fishing tradicional (lulada noturna)", oque: "Sai com pescadores de Mae Haad às 18h, volta 23h. Lula viva no convés, jantada no barco.", preco: "1.200-1.800 baht/pessoa", obs: "Comunidade local, parte da renda. Pergunte 'squid boat tour' no pier." },
  { tipo: "Pesca de costa com chumbinho", oque: "Manhã cedo em rocha de Chalok ou Aow Leuk. Vara emprestada de pousada local.", preco: "Grátis (vara) + isca 100 baht", obs: "Pesque-e-solte; raça e cavala da costa." },
  { tipo: "Big game (atum, dourado)", oque: "Charter privado de Mae Haad, 5h-13h. Vara, isca e bebida inclusos.", preco: "12.000-18.000 baht (até 4 pessoas)", obs: "Janeiro-Abril é a janela. Reserve por Big Blue ou Crystal." },
];

const SPA_TAO = [
  { lugar: "Jamahkiri Spa & Resort", oque: "Spa de luxo no penhasco de Chalok, vista oceano.", preco: "1.800-3.500 baht / 60 min", melhor: "Pós Open Water — alongamento e tailandesa profunda." },
  { lugar: "Healing Hands Sairee", oque: "Massagem honesta, terapeuta sênior, preço justo.", preco: "350-550 baht / 60 min", melhor: "Pós day-trip de scooter. Foco lombar." },
  { lugar: "Ban's Diving Spa", oque: "Spa anexo a escola, foco em descompressão de ombro/pescoço.", preco: "500-700 baht / 60 min", melhor: "Mergulhador com torcicolo de regulador." },
  { lugar: "Sairee Cottage Spa", oque: "Pé na areia, óleo de coco local.", preco: "400-600 baht", melhor: "Casal — cabine dupla disponível." },
];

const VILAREJO_TAO = [
  { lugar: "Tanote Bay", como: "Scooter via estrada do leste (18 min) ou táxi 400 baht.", oque: "Praia em U com rocha gigante no meio. Snorkel direto da areia, peixe-anjo e tartaruga residente.", quanto: "Almoço 150-250 baht. Bangalô 800-1.500 baht.", obs: "Sem ATM, sem 7-Eleven. Leve dinheiro. Bar fecha 22h." },
  { lugar: "Aow Leuk", como: "10 min de Tanote ou 20 min de Sairee.", oque: "Baía rasa, areia branca. Snorkel ok, raras pessoas. Bar com balanço.", quanto: "Espreguiçadeira 100 baht. Refeição 120-200 baht.", obs: "Mais calmo que Tanote. Estaciona scooter na entrada (50 baht)." },
  { lugar: "Sai Nuan", como: "Estacione em Chalok e ande 8 min pela trilha.", oque: "Praia escondida só com hammock no coqueiro. Quase sempre vazia.", quanto: "Smoothie 80 baht, sem restaurante real.", obs: "Leve água. Trilha lamacenta na chuva — chinelo de borracha." },
];

const FAMILIA_TAO = [
  { item: "PADI Bubblemaker (8+ anos)", detalhe: "Mergulho raso (2 m) na piscina + 1 mergulho em Shark Bay com instrutor 1:1. Crystal e Big Blue oferecem." },
  { item: "Snorkel Shark Bay", detalhe: "Filhote de black tip reef shark visível da superfície, água até a cintura. Saída de Sairee/Chalok com longtail 300 baht." },
  { item: "Banyan Tree Mountain View jantar", detalhe: "Restaurante com playground informal e vista 360°. Kids menu disponível." },
  { item: "Hospedagem sem escada", detalhe: "Sensi Paradise e Charm Churee Village têm bangalô térreo — Tao é morro, evite Sairee Hill com criança." },
  { item: "Não faça", detalhe: "Trilha John-Suwan com kids <8: pedra escorregadia perigosa. Scooter com kid no colo: ilegal e fatal aqui." },
];

const CONSERVACAO_TAO = [
  { iniciativa: "Save Koh Tao Coral Nursery", oque: "Mergulho voluntário 1h plantando coral. Sem custo extra para dive certificado.", como: "Reserve em New Heaven Reef Conservation (Chalok)." },
  { iniciativa: "Black Tip Shark Census", oque: "Snorkel guiado contando filhotes em Shark Bay (dados pra ciência cidadã).", como: "Master Divers todo sábado, 400 baht/pessoa." },
  { iniciativa: "Beach clean-up Mae Haad/Sairee", oque: "Todo 1º domingo do mês, 7h. Café da manhã free pra quem participar.", como: "Save Koh Tao Facebook." },
  { iniciativa: "Reef-safe sunscreen check", oque: "Barco recusa embarque se trouxer protetor com oxybenzone/octinoxate. Compre Stream2Sea no pier (220 baht/100ml)." },
];

const BOOKING_TAO = [
  { quando: "Réveillon, Chinese NY, Songkran", reserva: "4 meses antes", porque: "Escolas + pousadas em Sairee esgotam. Ferry Lomprayah 2 meses antes." },
  { quando: "Fev-Mar (whale shark season)", reserva: "6-8 semanas antes", porque: "Curso Advanced e fun dive em Sail Rock voam." },
  { quando: "Jul-Ago (alta europeia)", reserva: "4 semanas antes", porque: "Dorms ok, mas curso bom esgota." },
  { quando: "Mai / Set-início", reserva: "1 semana antes", porque: "Janela boa, baixa demanda. Negocie 10-15%." },
  { quando: "Nov (mar fechado)", reserva: "Dia anterior", porque: "Tudo vazio. Mas reveja viagem — mergulho é loteria." },
];



const KohTao6294 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Tao · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Tao sem cair no <em className="pk-display-em">curso errado</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Seis bairros decodificados, seis pontos de mergulho com nível real, escolas testadas,
                roteiros de Open Water a Tao+Phangan+Samui e doze golpes com resposta pronta.
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
                <p className="pk-bento-h">Tao é uma ilha de mergulho — não de praia perfeita.</p>
                <p className="pk-bento-p">
                  Quem vem por praia branca de cinema sai decepcionado. Quem vem mergulhar sai apaixonado.
                  <em> A escolha de escola decide a viagem inteira.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Bairros</p><p className="pk-bento-stat">06</p><p className="pk-bento-cap">decodificados</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Dive sites</p><p className="pk-bento-stat">06</p><p className="pk-bento-cap">por nível</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">com resposta</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve offline antes de embarcar (sinal é fraco).
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
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Tao" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Tao se vende pelo mergulho — e cumpre.</strong>{" "}
                  É o segundo lugar do mundo que mais emite certificações PADI. Praia bonita existe (Sairee, Tanote),
                  mas quem vem só para deitar em areia branca tem melhores opções em Phi Phi ou Lipe.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Escolha primeiro a escola, depois o bairro, depois o hotel. A escola dita o pier, o horário e quase a sua vida social. Próxima seção decide tudo.
                </p>
              </div>
            </Reveal>
          </section>

          <section id="bairros">
            <SectionTitle icon={Home} kicker="02 — Decodificação" title="6 bairros decodificados" />
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
            <SectionTitle icon={Waves} kicker="03 — Costa" title="10 praias por perfil" />
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

          <section id="mergulho">
            <SectionTitle icon={Waves} kicker="04 — Mar" title="Pontos de mergulho por nível" />
            <div className="grid md:grid-cols-2 gap-5">
              {MERGULHO.map((m, i) => (
                <Reveal key={m.ponto} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${m.ponto} dive site Koh Tao`}>{m.ponto}</G></h3>
                      <span className="pk-tag-sm">{m.nivel}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{m.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <p className="pk-kicker mb-4">Escolas testadas</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ESCOLAS.map((e, i) => (
                  <Reveal key={e.nome} i={i}>
                    <article className="pk-card pk-card-tight pk-tone-ok h-full">
                      <h4 className="pk-h4"><G q={`${e.nome} Koh Tao`}>{e.nome}</G></h4>
                      <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{e.oque}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs">
                        {e.site && <a href={e.site} target="_blank" rel="noreferrer" className="pk-tag-sm inline-flex items-center gap-1">site <ArrowUpRight className="w-3 h-3" /></a>}
                        {e.ig && <a href={e.ig} target="_blank" rel="noreferrer" className="pk-tag-sm inline-flex items-center gap-1">instagram <ArrowUpRight className="w-3 h-3" /></a>}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-info mt-8">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Regra de ouro do curso:</strong> turmas até 4 alunos por instrutor, vídeo e teórica em seu idioma, material novo (peça para ver as máscaras). Pague +500 baht por turma menor — vale cada centavo.</p>
              </div>
            </Reveal>
          </section>

          <section id="carreira">
            <SectionTitle icon={Sparkles} kicker="05 — Carreira PADI" title="Open Water ao Instrutor — prazos e preços reais" />
            <div className="overflow-x-auto pk-card pk-card-tight">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[hsl(var(--pk-muted))] border-b border-[hsl(var(--pk-line))]">
                    <th className="py-3 pr-4">Nível</th>
                    <th className="py-3 pr-4">Prazo</th>
                    <th className="py-3 pr-4">Preço (baht)</th>
                    <th className="py-3">O que muda</th>
                  </tr>
                </thead>
                <tbody>
                  {CARREIRA.map((c) => (
                    <tr key={c.nivel} className="border-b border-[hsl(var(--pk-line))]/40 align-top">
                      <td className="py-3 pr-4 font-semibold text-[hsl(var(--pk-fg))]">{c.nivel}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">{c.prazo}</td>
                      <td className="py-3 pr-4 whitespace-nowrap">{c.preco}</td>
                      <td className="py-3">{c.oque}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <Reveal>
                <article className="pk-card">
                  <p className="pk-kicker">Instrutores brasileiros — contato via escola</p>
                  <p className="pk-h4 mt-1">Os 6 brasileiros que dão aula em PT</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {INSTRUTORES_BR.map((i) => (
                      <li key={i.nome}>
                        <strong className="text-[hsl(var(--pk-fg))]">{i.nome}</strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {i.base}.</span>
                        <p className="text-[hsl(var(--pk-muted))] mt-0.5">{i.oque}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[hsl(var(--pk-muted))] mt-4">Peça pelo nome na recepção da escola indicada — todos atendem em PT mediante agendamento. Confirmar disponibilidade 1 semana antes.</p>
                </article>
              </Reveal>

              <Reveal i={1}>
                <article className="pk-card">
                  <p className="pk-kicker">Script de negociação no pier</p>
                  <p className="pk-h4 mt-1">De R$ 1.800 para R$ 600 — passo a passo</p>
                  <ol className="mt-4 space-y-3 text-sm list-decimal pl-5">
                    {NEGOCIAR.map((n) => (
                      <li key={n.fase}>
                        <strong className="text-[hsl(var(--pk-fg))]">{n.fase}:</strong>
                        <span className="text-[hsl(var(--pk-muted))]"> {n.o_que_dizer}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              </Reveal>
            </div>
          </section>


          <section id="clima">
            <SectionTitle icon={Sun} kicker="06 — Janela do mar" title="Visibilidade mês a mês" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VISIBILIDADE.map((v, i) => (
                <Reveal key={v.mes} i={i}>
                  <article className={`pk-card pk-card-tight ${TONE_CLASS[v.tone]} h-full`}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="pk-h4">{v.mes}</h3>
                      <span className="pk-tag-sm">{v.vis}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{v.dica}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="pk-callout pk-callout-warn mt-8">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Regra prática:</strong> jan-mai e fev-mar especialmente = janela de ouro. Out-nov = monção NE, evite reservar viagem fechada. Jun-set é mar viável com pacotes 20-30% mais baratos.</p>
              </div>
            </Reveal>
          </section>

          <section id="sunrise">
            <SectionTitle icon={Sun} kicker="07 — Foto da viagem" title="John-Suwan Viewpoint às 5h45" />
            <div className="grid md:grid-cols-5 gap-6">
              <Reveal className="md:col-span-3">
                <article className="pk-card h-full">
                  <p className="pk-kicker">O viewpoint que ninguém faz na hora certa</p>
                  <p className="pk-h3 mt-2">A vista das 3 baías ao nascer do sol</p>
                  <p className="text-[hsl(var(--pk-muted))] mt-4 leading-relaxed">
                    O <G q="John-Suwan Viewpoint Koh Tao">John-Suwan Viewpoint</G> entrega o postal mais raro da ilha: Chalok, Thian Og (Shark Bay) e Jansom Bay vistas de cima, com Koh Nang Yuan ao fundo. 99% dos turistas sobe às 14h, com 38° de calor, suado e sem ver nada — porque o sol bate de frente.
                  </p>
                  <p className="text-[hsl(var(--pk-muted))] mt-3 leading-relaxed">
                    Quem sobe <strong className="text-[hsl(var(--pk-fg))]">às 5h45</strong> pega o nascer do sol entre as três baías, vento fresco e ninguém na trilha. É a foto que vira capa de viagem.
                  </p>
                </article>
              </Reveal>
              <Reveal i={1} className="md:col-span-2">
                <article className="pk-card pk-tone-premium h-full">
                  <p className="pk-kicker">Plano operacional</p>
                  <ul className="mt-3 space-y-3 text-sm">
                    <li><strong className="text-[hsl(var(--pk-fg))]">Acesso:</strong> entrada no <G q="John-Suwan Viewpoint trailhead Chalok Baan Kao">trailhead de Chalok Baan Kao</G>. Taxa 50 baht no quiosque.</li>
                    <li><strong className="text-[hsl(var(--pk-fg))]">Subida:</strong> 15-20 min, íngreme nos últimos 5. Tênis obrigatório.</li>
                    <li><strong className="text-[hsl(var(--pk-fg))]">Horário:</strong> sair do hotel 5h15 (Sairee) ou 5h35 (Chalok). Sol nasce 6h05-6h25 conforme o mês.</li>
                    <li><strong className="text-[hsl(var(--pk-fg))]">Levar:</strong> lanterna do celular, água, repelente. Sem drone (proibido).</li>
                    <li><strong className="text-[hsl(var(--pk-fg))]">Bônus:</strong> desça por <G q="Freedom Beach Koh Tao">Freedom Beach</G> para café da manhã pé na areia.</li>
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="05 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 50 — 140", items: [
                  ["Savage Hostel Koh Tao", "social, em Sairee."],
                  ["Goodtime Adventures", "pacote curso+dorm."],
                  ["Tao Bora Bora Hostel", "boutique-hostel calmo."],
                  ["Big Blue Resort dorm", "pé na areia."],
                ]},
                { faixa: "Médio", price: "R$ 180 — 500", items: [
                  ["Koh Tao Bamboo Huts", "vista de Sairee Hill."],
                  ["Beach Club Hotel by Haadtien", "Chalok premium-acessível."],
                  ["Sensi Paradise Beach Resort", "boutique em Mae Haad."],
                  ["Tarna Align Resort", "design + piscina sunset."],
                ]},
                { faixa: "Premium", price: "R$ 700 — 2.500+", items: [
                  ["Cape Shark Pool Villas", "villa privativa, vista mar."],
                  ["Charm Churee Villa", "boutique em Jansom Bay."],
                  ["Haadtien Beach Resort", "praia privada (Shark Bay)."],
                  ["Koh Tao Heights Boutique", "vista 360° das hills."],
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
            <SectionTitle icon={MapPin} kicker="06 — Chegada" title="Como chegar — combos que funcionam" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Trajeto</th><th>Bolt</th><th>Preço real</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {TRANSFER.map((r, i) => (
                        <tr key={i}>
                          <td>{r.destino}</td>
                          <td className="text-[hsl(var(--pk-muted))]">{r.bolt}</td>
                          <td className="pk-gold-soft font-medium">{r.taxi}</td>
                          <td>{r.tempo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
            <div className="mt-6 grid md:grid-cols-2 gap-5 text-sm">
              <Reveal>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">Combo certo</p>
                  <p>Bangkok → Surat Thani (avião AirAsia/Nok 1.000-1.800 baht) → ônibus+ferry Lomprayah (650 baht). Total ~8h, R$ 280-350.</p>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card">
                  <p className="pk-kicker mb-2">Mar agitado (out-jan)</p>
                  <p>Lomprayah cancela em monção pesada. Sempre tenha 1 dia extra na volta antes de voo internacional.</p>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="moto">
            <SectionTitle icon={Bike} kicker="07 — Scooter" title="Scooter sem perder caução (Tao é o pior da Tailândia)" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Oishi Bike Koh Tao</G></strong> — referência da ilha, sem golpe.</li>
                    <li><strong><G>Adventure Koh Tao</G></strong> — Sairee, contrato em inglês.</li>
                    <li><strong><G>Mr Bee Bike Koh Tao</G></strong> — honesto, Mae Haad.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht. Mensal 3.500-4.500.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Protocolo anti-golpe</p>
                  <ol className="pk-ol text-sm">
                    <li>Filme 360° narrando cada arranhão.</li>
                    <li>12 fotos com data ativada.</li>
                    <li>Contrato em inglês com cláusulas legíveis.</li>
                    <li>Caução em dinheiro (3.000-5.000 baht) OU cópia do passaporte — nunca o original.</li>
                    <li>PID obrigatório. Sem ela, seguro = zero e propina policial.</li>
                    <li>Trajeto Sairee→Tanote/Aow Leuk tem ladeira brava — só com Click 125 nova.</li>
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
                      <h3 className="pk-h3"><G q={d.tour + " Koh Tao Thailand"}>{d.tour}</G></h3>
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
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Tao`}>{c.lugar}</G></h3>
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
                        <strong className="pk-gold"><G q={a.nome + " Thailand"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="checklist">
            <SectionTitle icon={ShieldCheck} kicker="13 — Antes do primeiro mergulho" title="Checklist do mergulhador brasileiro" />
            <div className="grid md:grid-cols-2 gap-4">
              {CHECKLIST_MERGULHO.map((c, i) => (
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

          <section id="glossario">
            <SectionTitle icon={Sparkles} kicker="14 — Briefing destravado" title="Mini-glossário PADI em português" />
            <div className="grid md:grid-cols-2 gap-4">
              {GLOSSARIO.map((g, i) => (
                <Reveal key={g.termo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <h4 className="pk-h4">{g.termo}</h4>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{g.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="ferries">
            <SectionTitle icon={Ship} kicker="15 — Ferries" title="Tabela completa de saídas e preços" />
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
                <p><strong>Monção pesada (out-nov):</strong> Lomprayah é a única que mantém saídas com mar agitado. Songserm cancela muito. Reserve com 1 dia de folga antes de voo internacional.</p>
              </div>
            </Reveal>
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
            <SectionTitle icon={Wallet} kicker="17 — Bolso" title="ATM, câmbio e cartão sem dor" />
            <div className="grid md:grid-cols-2 gap-4">
              {DINHEIRO.map((d, i) => (
                <Reveal key={d.topico} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <h4 className="pk-h4">{d.topico}</h4>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mt-2">{d.detalhe}</p>
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
                <p>Cada bairro, praia, dive site, escola e restaurante deste guia tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado — toque e abre direto no Google Maps.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://www.google.com/maps/place/Ko+Tao,+Thailand" target="_blank" rel="noreferrer" className="pk-tag inline-flex items-center gap-2"><MapIcon className="w-4 h-4" /> Abrir Koh Tao no Maps</a>
                  <a href="https://www.google.com/maps/search/dive+school+Koh+Tao+Thailand" target="_blank" rel="noreferrer" className="pk-tag inline-flex items-center gap-2"><Waves className="w-4 h-4" /> Ver todas as escolas de mergulho</a>
                  <a href="https://www.google.com/maps/search/beach+Koh+Tao+Thailand" target="_blank" rel="noreferrer" className="pk-tag inline-flex items-center gap-2"><Sun className="w-4 h-4" /> Ver praias da ilha</a>
                </div>
                <div className="pk-divider my-2" />
                <p><strong className="pk-gold">Salvar lista no seu celular (3 passos):</strong></p>
                <ol className="list-decimal pl-5 space-y-1 text-[hsl(var(--pk-muted))]">
                  <li>Toque em qualquer chip 📍 <strong>Mapa</strong> deste guia → abre no Google Maps app.</li>
                  <li>No app, toque em <strong>"Salvar"</strong> → escolha lista <strong>"Quero ir"</strong> ou crie <strong>"Koh Tao 2026"</strong>.</li>
                  <li>Repita para cada lugar. No fim, abra a lista uma vez online em Wi-Fi para Google cachear offline.</li>
                </ol>
                <p><strong>Como salvar mapa offline:</strong> Google Maps → menu → "Mapas offline" → enquadre Tao + Nang Yuan → baixar. Sinal de 4G é fraco no leste da ilha.</p>
              </div>
            </Reveal>
          </section>


          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="14 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Dorm", "R$ 45"], ["Comida (street + 1 jantar)", "R$ 60"], ["Scooter", "R$ 30"], ["1 fun dive", "R$ 220"]], total: "R$ 355 / dia (com dive)" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 250 / casal"], ["Comida", "R$ 220"], ["Scooter", "R$ 50"], ["Open Water (rateio 4 dias)", "R$ 480/dia"]], total: "R$ 1.000 / casal / dia (em curso)" },
                { tipo: "Premium", linhas: [["Pool villa", "R$ 1.500"], ["Comida + drinks", "R$ 600"], ["Transfer privado", "R$ 250"], ["Boat-charter privativo", "R$ 1.400"]], total: "R$ 3.750 / casal / dia" },
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
                { nome: "Koh Phangan (vizinha)", path: "/koh-phangan-tailandia" },
                { nome: "Koh Samui (vizinha)", path: "/koh-samui-tailandia" },
                { nome: "Mergulho na Tailândia", path: "/mergulho-tailandia" },
                { nome: "Top hostels", path: "/top-hostels-tailandia" },
                { nome: "Aluguel de motos", path: "/aluguel-de-motos-tailandia" },
                { nome: "Tailândia para aventureiros", path: "/tailandia-para-aventureiros" },
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
          Guia Koh Tao — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohTao6294;

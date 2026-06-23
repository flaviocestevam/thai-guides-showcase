// Guia Koh Lanta — versão premium (Noir & Gold)
// Rota privada: /kohlanta4831
import {
  MapPin, AlertTriangle, CheckCircle2, XCircle, Bike, Ship, UtensilsCrossed,
  Compass, Wallet, ShieldCheck, Map as MapIcon, Sun, Waves, Sparkles, Home,
  ArrowUpRight, CalendarDays, Route, Sunset, Building2,
} from "lucide-react";
import { PK_STYLES, Reveal, SectionTitle, TONE_CLASS, makeMapChip, type Tone } from "@/components/guides/premiumShell";

const G = makeMapChip("Koh Lanta, Thailand");

const TOC = [
  { id: "comeco", label: "Antes de tudo", icon: Compass },
  { id: "bairros", label: "Praias-bairro", icon: Home },
  { id: "praias", label: "Praias", icon: Waves },
  { id: "clima", label: "Clima mês a mês", icon: CalendarDays },
  { id: "hospedagem", label: "Hospedagem", icon: Sparkles },
  { id: "transfer", label: "Chegada", icon: MapPin },
  { id: "moto", label: "Scooter", icon: Bike },
  { id: "loop", label: "Scooter loop", icon: Route },
  { id: "daytrips", label: "Day-trips", icon: Ship },
  { id: "comida", label: "Comida", icon: UtensilsCrossed },
  { id: "sunsets", label: "Sunsets", icon: Sunset },
  { id: "oldtown", label: "Old Town", icon: Building2 },
  { id: "roteiros", label: "Roteiros", icon: Sun },
  { id: "antigolpe", label: "Anti-golpe", icon: ShieldCheck },
  { id: "blacklist", label: "Lista negra", icon: XCircle },
  { id: "mapa", label: "Mapa", icon: MapIcon },
  { id: "orcamento", label: "Orçamento", icon: Wallet },
];

const BAIRROS: { nome: string; veredito: string; tone: Tone; perfil: string; evite: string; praia: string; quanto: string; quando: string; }[] = [
  { nome: "Klong Dao", veredito: "FAMÍLIA — mar raso, sunset", tone: "ok", perfil: "Família com criança, casal sossego, primeira vez na ilha.", evite: "Quem quer balada a pé (silêncio às 23h).", praia: "Klong Dao (3 km) — areia branca larga, mar raso 100m.", quanto: "Hotel R$ 200 / resort R$ 500 / villa R$ 1.000.", quando: "Família, casal padrão, lua de mel acessível." },
  { nome: "Phra Ae (Long Beach)", veredito: "EQUILIBRADO — vida + praia", tone: "warn", perfil: "Casal jovem, mochileiro com grana, quem alterna praia e bar.", evite: "Família com criança pequena (algumas ondas, areia funda).", praia: "Phra Ae (5 km) — mais longa da ilha, vibe internacional.", quanto: "Hostel R$ 60 / hotel R$ 250 / resort R$ 600.", quando: "Quer bar, restaurante, surf-school a pé." },
  { nome: "Klong Khong", veredito: "MOCHILEIRO — beach bar, vibe hippie", tone: "info", perfil: "Mochileiro, casal jovem, festa relax (não balada).", evite: "Família, casal sossego, lua de mel.", praia: "Klong Khong — beach bars com fogo, sunset social.", quanto: "Bangalô R$ 100 / hotel R$ 200.", quando: "Quer vibe rasta sem techno alto." },
  { nome: "Klong Nin", veredito: "DOCE — casal, slow", tone: "ok", perfil: "Casal padrão, slow travel, fotografia.", evite: "Quem precisa de balada (zero).", praia: "Klong Nin — calma, areia dourada, restaurantes pé na areia.", quanto: "Hotel R$ 220 / resort R$ 480.", quando: "Equilíbrio quase perfeito de Lanta." },
  { nome: "Kantiang Bay", veredito: "PREMIUM — sunset penhasco", tone: "premium", perfil: "Lua de mel, casal premium, jantar com vista.", evite: "Mochileiro (poucos preços acessíveis).", praia: "Kantiang Bay — meia-lua entre morros, sunset frontal.", quanto: "Boutique R$ 500 / Pimalai Resort R$ 2.500+.", quando: "Você quer sunset de capa de revista." },
  { nome: "Bamboo Bay / Klong Jark", veredito: "REMOTO — fim da ilha", tone: "info", perfil: "Slow travel, longa estadia, fugir do mundo.", evite: "Sem scooter (50 min do pier).", praia: "Bamboo Bay — pequena, calma. Klong Jark — vazia.", quanto: "Resort R$ 350 / boutique R$ 700.", quando: "Você fica 10+ dias e quer paz total." },
  { nome: "Old Town (Lanta Yai)", veredito: "AUTÊNTICO — vila chinesa", tone: "info", perfil: "Quem busca cultura, restaurante local, fotografia.", evite: "Quem quer dormir perto da praia (não tem).", praia: "Não tem praia. Use Klong Nin (20 min de scooter).", quanto: "Boutique R$ 250 / homestay R$ 150.", quando: "Uma noite no centro histórico vale muito." },
];

const PRAIAS = [
  { nome: "Klong Dao", perfil: "Família, mar raso, sunset", como: "Acesso público em vários pontos. Norte mais calmo." },
  { nome: "Phra Ae (Long Beach)", perfil: "Longa, vida noturna leve", como: "Sul tem mais beach clubs; norte tem mais hostels." },
  { nome: "Klong Khong", perfil: "Beach bar, fogo, hippie", como: "Acesso público; vai escurecendo e vira ponto social." },
  { nome: "Klong Nin", perfil: "Casal, sunset com restaurante", como: "Sunsets premiados; chegue 17h." },
  { nome: "Kantiang Bay", perfil: "Premium, penhasco", como: "Mirador do Pimalai (mesmo sem hospedar): consumir bar." },
  { nome: "Bamboo Bay", perfil: "Pequena, calma", como: "Quase só hóspedes de Lanta Marine Park View." },
  { nome: "Mai Pai", perfil: "Selvagem, sul extremo", como: "Última praia antes do parque nacional. Cuidado correnteza." },
  { nome: "Nui Bay", perfil: "Escondida, snorkel", como: "Acesso por trilha curta na Klong Khong sul." },
  { nome: "Mu Ko Lanta National Park (Tanod)", perfil: "Farol + trilha", como: "Entrada 200 baht. Trilha 2,7 km com macacos." },
];

const DAYTRIPS = [
  { tour: "4 Islands (Koh Chuek, Koh Ngai, Koh Mook, Emerald Cave)", barco: "Speedboat", quando: "Saída 8h30 do pier de Saladan.", operadora: "Freedom Tour, Lanta Sea Quest (direto).", preco: "1.200-1.800 baht.", armadilha: "Pacote barato vai com barco grande e fica pouco tempo na Emerald Cave; pague +300 por speedboat pequeno." },
  { tour: "Koh Rok + Koh Haa snorkel", barco: "Speedboat dia inteiro", quando: "Saída 8h, retorno 17h.", operadora: "Lanta Diver, Scubafish.", preco: "1.800-2.500 baht + 400 entrada parque.", armadilha: "Entrada do parque não inclusa. Visibilidade é top fev-abr." },
  { tour: "Koh Phi Phi day-trip", barco: "Speedboat", quando: "Saída 8h, retorno 17h.", operadora: "Lanta Sea Quest.", preco: "1.500-2.000 baht.", armadilha: "Maya Bay lota 9h-13h. Quem vai só por Phi Phi, durma lá 1 noite." },
  { tour: "Diving 2 tanks (Koh Haa, Hin Daeng, Hin Muang)", barco: "Speedboat dive boat", quando: "Saída 7h, retorno 16h.", operadora: "Blue Planet Divers, Lanta Diver, Scubafish.", preco: "3.500-4.500 baht.", armadilha: "Hin Daeng/Muang é avançado e em corrente. Fora de fev-abr, visibilidade cai." },
  { tour: "Old Town + Lanta National Park + 4 mirantes", barco: "—", quando: "Manhã ou tarde, 4-5h.", operadora: "Faça por conta com scooter + mapa offline.", preco: "Scooter 250 baht + 200 entrada parque.", armadilha: "Macacos na entrada do parque roubam sacolas; sem comida na mão." },
];

const GOLPES = [
  { golpe: "Scooter: arranhão prévio vira 5.000-12.000 baht", resposta: "Filme 360°, 8 fotos com data, contrato em inglês. Caução em dinheiro, NUNCA passaporte." },
  { golpe: "Taxi do pier Saladan a Phra Ae cobra 400 baht para 4 km", resposta: "Tabela é 150-200 baht. Pegue songthaew (50 baht) ou Bolt (não opera muito)." },
  { golpe: "Tour vendido na rua promete 'preço de hotel' e some", resposta: "Reserve em agência fixa (Lanta Sea Quest, Freedom Tour) ou diretamente em escola de mergulho." },
  { golpe: "Massagem na praia 'preço amigo' dobra na hora", resposta: "Preço escrito ANTES. Casa fixa com cardápio sempre mais seguro." },
  { golpe: "Bar tab com 'cortesia' aparecendo na conta", resposta: "Peça conta a cada rodada. Recuse o que não pediu." },
  { golpe: "Cardápio sem preço em restaurante praia", resposta: "Não sente. Procure cardápio escrito e tailandês comendo dentro." },
  { golpe: "ATM 'sem taxa' que cobra 220 baht", resposta: "Aeon Bank em Saladan cobra 50 baht. Saque 10.000+ de uma vez." },
  { golpe: "Tour 4 islands 'all inclusive' com Emerald Cave fora", resposta: "Confirme que Koh Mook Emerald Cave está no roteiro. Sem isso, não é o tour real." },
  { golpe: "Jet-ski em Phra Ae com mesma quadrilha nacional", resposta: "Não alugue jet-ski na Tailândia. Esquema sistêmico." },
  { golpe: "Tuk-tuk noturno cobrando 'preço de balada'", resposta: "Combine valor antes de subir. Recuse 'preço de farra'." },
  { golpe: "Hotel barato em Klong Dao com 'taxa de cidade' surpresa", resposta: "Tax de Lanta é 30 baht/noite — qualquer mais é golpe. Pague em recibo carimbado." },
  { golpe: "Polícia 'multa de cortesia' por capacete", resposta: "Multa real tem recibo na delegacia. Senão é propina; peça recibo ou delegacia." },
];

const BLACKLIST = [
  "Elephant trekking (qualquer com passeio em cima)",
  "Crocodile farm Lanta",
  "Tour com âncora em recife (Hin Daeng/Muang)",
  "Snake show de rua",
  "Bucket de Lao Whisky em Klong Khong (origem dúbia)",
  "Show de macaco em mercado da Old Town",
];

const APROVADAS = [
  { nome: "Lanta Diver", oque: "Mergulho 5★ PADI, Koh Haa especialidade." },
  { nome: "Blue Planet Divers Koh Lanta", oque: "Confiável para Hin Daeng/Muang." },
  { nome: "Scubafish Koh Lanta", oque: "Eco-conscious, turmas pequenas." },
  { nome: "Freedom Adventures Koh Lanta", oque: "4-islands e Koh Rok honestos." },
  { nome: "Lanta Sea Quest", oque: "Day-trips com speedboat pequeno." },
];

const ROTEIROS = [
  { dias: "3 dias", foco: "Highlights", dia: [
    "D1: chegada Phra Ae ou Klong Nin, sunset na praia.",
    "D2: 4 islands snorkel (Emerald Cave imperdível).",
    "D3: scooter Old Town + Lanta National Park, voo/ferry à tarde.",
  ]},
  { dias: "5 dias", foco: "Sem corrida", dia: [
    "D1: chegada Klong Nin.",
    "D2: 4 islands snorkel.",
    "D3: descanso + Kantiang sunset.",
    "D4: Koh Rok ou diving Koh Haa.",
    "D5: Old Town + National Park.",
  ]},
  { dias: "7 dias", foco: "Lanta + Phi Phi", dia: [
    "D1-D4: Lanta (4-islands + dive + Old Town).",
    "D5: ferry a Phi Phi (2 noites).",
    "D6: Phi Phi tour 7 ilhas.",
    "D7: ferry direto a Phuket + voo.",
  ]},
  { dias: "10 dias", foco: "Andaman south", dia: [
    "D1-D3: Lanta oeste (Phra Ae, Klong Nin).",
    "D4-D5: Lanta sul (Kantiang Bay, Bamboo Bay).",
    "D6-D7: ferry a Koh Mook ou Koh Ngai (slow).",
    "D8-D10: Koh Lipe (último paraíso do sul).",
  ]},
];

const TRANSFER = [
  { destino: "Aeroporto Krabi (KBV) → Lanta (Phra Ae)", combo: "Minivan compartilhada 350-450 baht / privado 1.800 baht", tempo: "2h30 (com 2 ferries curtos)" },
  { destino: "Aeroporto Phuket (HKT) → Lanta", combo: "Speedboat combo 1.200-1.800 baht (via Phi Phi)", tempo: "5-6h" },
  { destino: "Krabi pier (Klong Jilad) → Lanta (Saladan)", combo: "Ferry 350 baht (alta) / 250 baht (baixa)", tempo: "2h" },
  { destino: "Phi Phi → Lanta", combo: "Ferry 350-450 baht", tempo: "1h30" },
  { destino: "Pier Saladan → Phra Ae", combo: "Songthaew 50-80 baht / taxi 200 baht", tempo: "15 min" },
  { destino: "Pier Saladan → Klong Nin", combo: "Songthaew 100 baht / taxi 350 baht", tempo: "30 min" },
  { destino: "Pier Saladan → Kantiang Bay", combo: "Taxi 500-700 baht", tempo: "50 min" },
];

const COMIDA = [
  { lugar: "Krua Kanda", bairro: "Old Town", oque: "Tailandesa familiar pé na palafita, vista mar.", preco: "120-280 baht" },
  { lugar: "Caoutchouc", bairro: "Old Town", oque: "Fine dining em casa colonial; menu francês-tailandês.", preco: "600-1.200 baht" },
  { lugar: "Pinto Restaurant", bairro: "Klong Nin", oque: "Tailandesa autêntica, pad krapow lendário.", preco: "80-180 baht" },
  { lugar: "May & Mark's House", bairro: "Saladan", oque: "Sourdough + brunch europeu de verdade.", preco: "180-350 baht" },
  { lugar: "Same Same But Different", bairro: "Kantiang Bay", oque: "Pé na areia, sunset frontal, ótimo seafood.", preco: "350-700 baht" },
  { lugar: "Beautiful Restaurant", bairro: "Old Town", oque: "Em palafita; massaman e seafood honestos.", preco: "180-400 baht" },
  { lugar: "Funky Fish", bairro: "Klong Nin", oque: "Beach bar com fogo, sunset, vibe local.", preco: "200-400 baht" },
  { lugar: "Where Else?", bairro: "Klong Khong", oque: "Beach bar hippie, melhor lugar para sunset social.", preco: "150-380 baht" },
  { lugar: "Time for Lime", bairro: "Klong Dao", oque: "Cooking class lendária + restaurante experimental.", preco: "1.800 baht aula / 350-700 jantar" },
  { lugar: "Cook Kai", bairro: "Phra Ae", oque: "Casa familiar com tom chinês-tailandês, preço justo.", preco: "100-240 baht" },
];

const CLIMA_MES = [
  { mes: "Jan", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "20-30m", lotacao: "Pico", preco: "+40%", veredito: "Janela perfeita." },
  { mes: "Fev", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "25-35m", lotacao: "Pico", preco: "+40%", veredito: "Top pra mergulho Hin Daeng/Muang." },
  { mes: "Mar", chuva: "Baixa", vento: "Leve", mar: "Cristalino", visi: "25-35m", lotacao: "Alta", preco: "+30%", veredito: "Quente, mar ainda perfeito." },
  { mes: "Abr", chuva: "Pré-monção", vento: "Variável", mar: "Bom", visi: "15-25m", lotacao: "Songkran (alta)", preco: "+25%", veredito: "Songkran 13-15. Aceitável até dia 20." },
  { mes: "Mai", chuva: "Início monção", vento: "Sul forte começa", mar: "Mexido oeste", visi: "10-15m", lotacao: "Cai", preco: "-20%", veredito: "Janela ruim — restaurantes começam a fechar." },
  { mes: "Jun", chuva: "Monção", vento: "Sul forte", mar: "Bravo", visi: "5-10m", lotacao: "Baixa", preco: "-40%", veredito: "Metade da ilha fecha. Ferries reduzem." },
  { mes: "Jul", chuva: "Monção pesada", vento: "Sul forte", mar: "Bravo", visi: "5-10m", lotacao: "Baixa", preco: "-40%", veredito: "Evite. Day-trips cancelam." },
  { mes: "Ago", chuva: "Monção pesada", vento: "Sul forte", mar: "Bravo", visi: "5-10m", lotacao: "Baixa", preco: "-40%", veredito: "Evite. Parque Nacional fechado." },
  { mes: "Set", chuva: "Pico monção", vento: "Sul muito forte", mar: "Bravo", visi: "<5m", lotacao: "Mínima", preco: "-50%", veredito: "Pior mês. Não vá." },
  { mes: "Out", chuva: "Fim monção", vento: "Reduzindo", mar: "Acalmando", visi: "10-15m", lotacao: "Subindo", preco: "Normal", veredito: "Risco. Segunda metade do mês melhora." },
  { mes: "Nov", chuva: "Pontual", vento: "Calmo NE volta", mar: "Bom", visi: "15-25m", lotacao: "Alta", preco: "+20%", veredito: "Janela abre. Reabertura dos hotéis." },
  { mes: "Dez", chuva: "Mínima", vento: "Calmo NE", mar: "Cristalino", visi: "20-30m", lotacao: "Pico (Natal)", preco: "+50%", veredito: "Reserve com 3+ meses." },
];

const LOOP_PARADAS: { hora: string; parada: string; oque: string; tempo: string }[] = [
  { hora: "08h30", parada: "Saída Saladan / Klong Dao", oque: "Café no May & Mark's House antes de pegar a estrada. Tanque cheio (posto PTT Saladan).", tempo: "30 min" },
  { hora: "09h30", parada: "Phra Ae (Long Beach)", oque: "Parada de foto na praia mais longa. Olha o sul (mais beach club).", tempo: "20 min" },
  { hora: "10h15", parada: "Klong Khong beach bars", oque: "Praia de bares hippies. Foto rápida nos balanços do Where Else?.", tempo: "20 min" },
  { hora: "11h00", parada: "Klong Nin", oque: "Almoço cedo no Pinto Restaurant (pad krapow). Banho rápido na praia.", tempo: "1h15" },
  { hora: "12h45", parada: "Mirador Pimalai / Kantiang Bay", oque: "Subida de scooter — vista panorâmica da meia-lua. Curvas: atenção redobrada.", tempo: "30 min" },
  { hora: "13h30", parada: "Bamboo Bay (Lanta Marine Park View)", oque: "Sunset bar 'Why Not Bar' — anota pra voltar às 17h30. Banho na Bamboo.", tempo: "1h" },
  { hora: "14h45", parada: "Mu Ko Lanta National Park (Tanod)", oque: "Entrada 200 baht. Farol, trilha 2,7 km com macacos (sem sacola na mão).", tempo: "2h" },
  { hora: "17h00", parada: "Retorno por dentro (Old Town)", oque: "Estrada da costa leste é mais reta — passe pela Old Town pra dar oi.", tempo: "30 min" },
  { hora: "17h30", parada: "Sunset final — escolha 1", oque: "Same Same Kantiang OU volta a Bamboo (Why Not). Combine antes pra não correr no escuro.", tempo: "1h" },
  { hora: "19h00", parada: "Jantar em Klong Nin", oque: "Funky Fish (beach bar com fogo) ou volta direto a Saladan/Phra Ae.", tempo: "—" },
];

const SUNSETS = [
  { nome: "Same Same But Different (Kantiang Bay)", tone: "premium" as Tone, nota: "10/10", quando: "17h45-18h30 (nov-mar)", oque: "Sunset frontal entre dois morros, pé na areia. Reserva nos fins de semana." },
  { nome: "Why Not Bar — Lanta Marine Park View (Bamboo Bay)", tone: "premium" as Tone, nota: "10/10", quando: "17h30 chega cedo", oque: "Sunset 360° de cima do penhasco. Bebida cara, vista impagável." },
  { nome: "Funky Fish (Klong Nin)", tone: "ok" as Tone, nota: "9/10", quando: "Toda noite após 17h", oque: "Beach bar com fogo na areia, vibe local. Sem pretensão." },
  { nome: "Where Else? (Klong Khong)", tone: "info" as Tone, nota: "8/10", quando: "17h em diante", oque: "Vibe rasta, balanços de corda no mar. Sunset social, não fotografia." },
  { nome: "Mirador Pimalai (Kantiang)", tone: "info" as Tone, nota: "8/10", quando: "17h30, consumir no bar", oque: "Penhasco do Pimalai Resort — entre como cliente do bar (200-400 baht)." },
];

const OLD_TOWN = [
  { titulo: "Quando ir", texto: "Das 17h às 21h. Antes disso, parece vila morta. À noite, vira centro vivo — lanternas vermelhas chinesas, palafitas iluminadas, restaurantes na água." },
  { titulo: "Night Market — Terças", texto: "Único dia da semana com Walking Street: barracas de comida, artesanato local, lanterna no rio Khao Mai Kaew. Chegue 18h30." },
  { titulo: "O que comer", texto: "Krua Kanda (palafita familiar), Beautiful Restaurant (massaman), Caoutchouc (fine dining francês-tailandês em casa colonial)." },
  { titulo: "Como chegar", texto: "Scooter da Klong Nin = 20 min pela costa leste. De Phra Ae = 35 min. Estrada calma, sem curvas pesadas — boa pra iniciante." },
  { titulo: "Onde dormir", texto: "Old Town tem 3 homestays boutique em palafita (R$ 150-250). Vale 1 noite pra ver a vila acordar e dormir." },
];

const KohLanta4831 = () => {
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
            <Reveal><span className="pk-eyebrow"><span className="pk-eyebrow-dot" /> Guia Koh Lanta · Edição Definitiva</span></Reveal>
            <Reveal i={1}>
              <h1 className="pk-display mt-7">
                Lanta sem cair na <em className="pk-display-em">praia errada</em>
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="pk-lede mt-6 max-w-2xl">
                Sete praias-bairro decodificadas (norte para família, sul para premium),
                4 islands com Emerald Cave, mergulho Koh Haa, roteiros e doze golpes com resposta pronta.
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
                <p className="pk-bento-h">Lanta é uma régua: norte é família, sul é lua de mel.</p>
                <p className="pk-bento-p">
                  Klong Dao (norte) tem mar raso para criança. Phra Ae é o meio, vibrante. Klong Nin é o sweet spot do casal.
                  Kantiang Bay (sul) é o sunset premium. <em>Decida o ponto e o resto se ajusta.</em>
                </p>
              </Reveal>
              <Reveal i={5} className="pk-bento-item"><p className="pk-kicker">Praias</p><p className="pk-bento-stat">07</p><p className="pk-bento-cap">decodificadas</p></Reveal>
              <Reveal i={6} className="pk-bento-item"><p className="pk-kicker">Day-trips</p><p className="pk-bento-stat">05</p><p className="pk-bento-cap">com operadora</p></Reveal>
              <Reveal i={7} className="pk-bento-item"><p className="pk-kicker">Golpes</p><p className="pk-bento-stat">12</p><p className="pk-bento-cap">com resposta</p></Reveal>
              <Reveal i={8} className="pk-bento-item pk-bento-wide">
                <p className="pk-kicker">Como ler</p>
                <p className="pk-bento-p">
                  Toda menção de lugar tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> —
                  toque e abre direto no Google Maps. Salve offline antes de embarcar.
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
            <SectionTitle icon={Compass} kicker="01 — Fundamento" title="Antes de tudo: a regra única de Lanta" />
            <Reveal>
              <div className="pk-card pk-card-feature">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Lanta é uma régua norte-sul.</strong>{" "}
                  Norte = preços, comércio, família. Sul = silêncio, sunset, premium. Quanto mais ao sul, mais bonita
                  e mais cara a corrida de táxi para qualquer coisa. Escolher errado é dia perdido no scooter.
                </p>
                <p className="mt-4 text-[hsl(var(--pk-muted))]">
                  Próxima seção decide: Klong Dao (família), Phra Ae (equilíbrio), Klong Nin (sweet spot) ou Kantiang (premium).
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
            <SectionTitle icon={Waves} kicker="03 — Costa" title="9 praias por perfil" />
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

          <section id="clima">
            <SectionTitle icon={CalendarDays} kicker="04 — Quando ir" title="Clima mês a mês — janela honesta" />
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Mês</th><th>Chuva</th><th>Vento</th><th>Mar (oeste)</th><th>Visi mergulho</th><th>Lotação</th><th>Preço</th><th>Veredito</th></tr></thead>
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
                <p><strong>Maio-outubro fecha metade da ilha:</strong> beach bars de Klong Khong, sunset bars de Bamboo, vários restaurantes em Kantiang. Ferry Phi Phi-Lanta reduz. Janela ideal é <strong>nov-mar</strong>.</p>
              </div>
            </Reveal>
          </section>

          <section id="hospedagem">
            <SectionTitle icon={Sparkles} kicker="04 — Onde dormir" title="Hospedagem por faixa real" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { faixa: "Mochileiro", price: "R$ 50 — 150", items: [
                  ["Hub of Joys Hostel Lanta", "social, Saladan."],
                  ["Chill Out House Klong Khong", "vibe hippie."],
                  ["Funky Monkey Hostel Phra Ae", "festa leve."],
                  ["Lanta Family House", "homestay econômico."],
                ]},
                { faixa: "Médio", price: "R$ 200 — 600", items: [
                  ["Lanta Sand Resort & Spa", "Phra Ae, padrão."],
                  ["Costa Lanta", "design boutique, Klong Dao."],
                  ["Lanta Sunny House", "Klong Nin, custo-benefício."],
                  ["Twin Lotus Resort", "Klong Dao, adultos only."],
                ]},
                { faixa: "Premium", price: "R$ 900 — 4.000+", items: [
                  ["Pimalai Resort & Spa", "Kantiang Bay, top da Tailândia."],
                  ["Layana Resort", "Phra Ae adultos, lua de mel."],
                  ["Rawi Warin Resort", "Klong Nin, family-friendly luxo."],
                  ["Lanta Marine Park View", "Bamboo Bay, sunset 360°."],
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
            <SectionTitle icon={MapPin} kicker="05 — Chegada" title="Combos que funcionam" />
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
              <div className="pk-callout pk-callout-info mt-6">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <p><strong>Bolt funciona em Krabi cidade</strong>, mas dentro de Lanta só songthaew e taxi de hotel. Em maio-out alguns ferries reduzem (monção); voe para Krabi e pegue minivan.</p>
              </div>
            </Reveal>
          </section>

          <section id="moto">
            <SectionTitle icon={Bike} kicker="06 — Scooter" title="Scooter sem perder caução" />
            <div className="grid md:grid-cols-2 gap-6">
              <Reveal>
                <div className="pk-card h-full pk-tone-ok">
                  <p className="pk-kicker mb-2">Locadoras testadas</p>
                  <ul className="space-y-2.5 text-sm">
                    <li><strong><G>Lanta Bike Rental</G></strong> (Saladan) — contrato em inglês, frota nova.</li>
                    <li><strong><G>Cat Motors Koh Lanta</G></strong> — top da Tailândia, sem golpe.</li>
                    <li><strong><G>Mr. P Bike Rent</G></strong> — Phra Ae, local honesto.</li>
                    <li className="text-[hsl(var(--pk-muted))]">Diária 200-300 baht (Click 125). Long-term 3.500-4.500 / mês.</li>
                  </ul>
                </div>
              </Reveal>
              <Reveal i={1}>
                <div className="pk-card h-full pk-tone-alert">
                  <p className="pk-kicker mb-2">Protocolo anti-golpe</p>
                  <ol className="pk-ol text-sm">
                    <li>Filme 360° narrando cada arranhão.</li>
                    <li>8-12 fotos com data ativada.</li>
                    <li>Contrato em inglês com cláusulas legíveis.</li>
                    <li>Caução em dinheiro (2.000-5.000 baht) — NUNCA passaporte original.</li>
                    <li>PID (Permissão Internacional) obrigatória. Sem ela = sem seguro.</li>
                    <li>Estrada Klong Nin → Kantiang tem curvas; só com Click 125 nova.</li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </section>

          <section id="loop">
            <SectionTitle icon={Route} kicker="07 — Roteiro 1 dia" title="Scooter loop completo — norte → sul → norte" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">~80 km, 9 paradas, 1 dia.</strong> Saída cedo, sunset final em Kantiang ou Bamboo,
                  jantar de volta em Klong Nin. Tanque cheio antes (PTT Saladan). Só faça em <strong>nov-abr</strong> — em monção a estrada do sul é perigosa.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="pk-card p-0 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="pk-table">
                    <thead><tr><th>Hora</th><th>Parada</th><th>O que fazer</th><th>Tempo</th></tr></thead>
                    <tbody>
                      {LOOP_PARADAS.map((p, i) => (
                        <tr key={i}>
                          <td className="pk-gold-soft font-semibold whitespace-nowrap">{p.hora}</td>
                          <td className="font-medium"><G>{p.parada}</G></td>
                          <td className="text-sm">{p.oque}</td>
                          <td className="whitespace-nowrap">{p.tempo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </section>

          <section id="daytrips">
            <SectionTitle icon={Ship} kicker="07 — Mar" title="Day-trips — operadora certa" />
            <div className="space-y-5">
              {DAYTRIPS.map((d, i) => (
                <Reveal key={d.tour} i={i}>
                  <article className="pk-card grid md:grid-cols-5 gap-5">
                    <div className="md:col-span-2">
                      <h3 className="pk-h3"><G q={d.tour + " Koh Lanta Thailand"}>{d.tour}</G></h3>
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
            <SectionTitle icon={UtensilsCrossed} kicker="08 — Mesa" title="Onde o tailandês come — 10 testados" />
            <div className="grid md:grid-cols-2 gap-5">
              {COMIDA.map((c, i) => (
                <Reveal key={c.lugar} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="pk-h4"><G q={`${c.lugar} ${c.bairro} Koh Lanta`}>{c.lugar}</G></h3>
                      <span className="pk-tag-sm">{c.bairro}</span>
                    </div>
                    <p className="text-sm text-[hsl(var(--pk-muted))] mb-3">{c.oque}</p>
                    <p className="pk-gold-soft text-sm font-medium">{c.preco}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="sunsets">
            <SectionTitle icon={Sunset} kicker="10 — Sunset" title="5 sunset bars ranqueados — sul vence" />
            <div className="grid md:grid-cols-2 gap-5">
              {SUNSETS.map((s, i) => (
                <Reveal key={s.nome} i={i}>
                  <article className={`pk-card ${TONE_CLASS[s.tone]} h-full`}>
                    <header className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="pk-h4"><G q={s.nome + " Koh Lanta Thailand"}>{s.nome}</G></h3>
                      <span className="pk-verdict">{s.nota}</span>
                    </header>
                    <p className="pk-kicker">Quando ir</p>
                    <p className="text-sm mt-1 mb-3">{s.quando}</p>
                    <p className="text-sm text-[hsl(var(--pk-muted))]">{s.oque}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="oldtown">
            <SectionTitle icon={Building2} kicker="11 — Cultura" title="Old Town (Lanta Yai) — vila chinesa em palafita" />
            <Reveal>
              <div className="pk-card pk-card-feature mb-6">
                <p className="text-lg leading-relaxed">
                  <strong className="pk-gold">Antes das 17h:</strong> parece vila morta.{" "}
                  <strong className="pk-gold">Depois das 17h:</strong> lanternas vermelhas chinesas, palafitas iluminadas,
                  restaurantes na água. <em>É outra cidade.</em>
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {OLD_TOWN.map((o, i) => (
                <Reveal key={o.titulo} i={i}>
                  <article className="pk-card pk-card-tight h-full">
                    <p className="pk-kicker">{o.titulo}</p>
                    <p className="text-sm mt-2 text-[hsl(var(--pk-muted))]">{o.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="roteiros">
            <SectionTitle icon={Sun} kicker="09 — Tempo" title="Roteiros prontos — 3, 5, 7 e 10 dias" />
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
            <SectionTitle icon={ShieldCheck} kicker="10 — Defesa" title="12 golpes — e a resposta exata" />
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
            <SectionTitle icon={XCircle} kicker="11 — Curadoria" title="Lista negra + operadoras que valem" />
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
                        <strong className="pk-gold"><G q={a.nome + " Koh Lanta Thailand"}>{a.nome}</G></strong>
                        <span className="text-[hsl(var(--pk-muted))]"> — {a.oque}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </section>

          <section id="mapa">
            <SectionTitle icon={MapIcon} kicker="12 — Mapa" title="Mapa Google interativo (offline)" />
            <Reveal>
              <div className="pk-card space-y-4 text-sm leading-relaxed">
                <p>Cada bairro, praia, restaurante e locadora tem o chip <span className="pk-map-chip pk-map-chip-inline"><MapPin className="w-3 h-3" /> Mapa</span> ao lado — toque e abre no Google Maps.</p>
                <p>
                  <strong className="pk-gold">Abrir Koh Lanta no Google Maps:</strong>{" "}
                  <a href="https://www.google.com/maps/place/Ko+Lanta,+Thailand" target="_blank" rel="noreferrer" className="pk-link">ver ilha inteira</a>.
                </p>
                <p><strong>Como salvar offline:</strong> Google Maps → menu → "Mapas offline" → enquadre Lanta + Koh Mook + Koh Ngai → baixar.</p>
              </div>
            </Reveal>
          </section>

          <section id="orcamento">
            <SectionTitle icon={Wallet} kicker="13 — Bolso" title="Orçamento honesto por dia (em real)" />
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tipo: "Mochileiro", linhas: [["Hostel/bangalô", "R$ 55"], ["Comida street", "R$ 55"], ["Scooter", "R$ 30"], ["Day-trip (média)", "R$ 60"]], total: "R$ 200 / dia" },
                { tipo: "Casal padrão", linhas: [["Hotel", "R$ 280 / casal"], ["Comida", "R$ 240"], ["Scooter", "R$ 50"], ["4-islands", "R$ 520 / casal"]], total: "R$ 880 / casal / dia (médio)" },
                { tipo: "Premium", linhas: [["Pimalai", "R$ 1.800 / casal"], ["Comida + drinks", "R$ 600"], ["Transfer privado", "R$ 350"], ["Diving privado Koh Haa", "R$ 1.600"]], total: "R$ 3.700 / casal / dia" },
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
                { nome: "Koh Phi Phi (vizinha)", path: "/koh-phi-phi-tailandia" },
                { nome: "Koh Yao (vizinha — slow)", path: "/koh-yao-tailandia" },
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
          Guia Koh Lanta — Guias Tailândia. Atualizado conforme as ruas mudam.{" "}
          Reporte qualquer dado defasado em <a href="mailto:contato@guiastailandia.com.br" className="pk-link">contato@guiastailandia.com.br</a>.
        </footer>
      </div>
    </>
  );
};

export default KohLanta4831;

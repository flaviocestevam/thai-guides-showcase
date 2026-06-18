import { SEO } from "@/components/SEO";
import {
  Rainbow, MapPin, Hotel, Calendar, Shield, Heart, AlertTriangle, Sparkles,
  CheckCircle2, Wine, Camera, Stethoscope, Languages, MessageCircle, Gift, Users, Globe2
} from "lucide-react";

const Section = ({ n, title, icon: Icon, children, id }: { n: string; title: string; icon?: any; children: React.ReactNode; id?: string }) => (
  <section id={id} className="py-14 px-6 border-b border-border/40">
    <div className="max-w-3xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-primary/80 mb-3 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />} Capítulo {n}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">{title}</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

const Bul = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-disc pl-6">{items.map((i) => <li key={i}>{i}</li>)}</ul>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card border border-border rounded-lg p-5 ${className}`}>{children}</div>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-xl text-foreground mt-6 mb-2">{children}</h3>
);

const cities = [
  {
    name: "Bangkok", tag: "A capital da cena gay tailandesa",
    perfil: ["Maior variedade de bares e clubes LGBTQIA+", "Drag shows e cabarés sofisticados", "Rooftops gay-friendly", "Hotéis internacionais que tratam casal com naturalidade", "Clínicas de saúde sexual e atendimento profissional", "Pride com programação concentrada"],
    regioes: [["Silom", "Coração da cena gay clássica — Soi 2 (clube/dança) e Soi 4 (bar/conversa)."], ["Sathorn", "Confortável, elegante, perto de Silom."], ["Riverside", "Romântico, melhor para casal e lua de mel."], ["Siam / Chidlom", "Shopping, BTS, hotéis bons."]],
  },
  {
    name: "Chiang Mai", tag: "A bolha calma e alternativa do norte",
    perfil: ["Cafés inclusivos, hotéis boutique", "Bares discretos, sem balada intensa", "Comunidade internacional e digital nomads", "Retiros, templos e natureza", "Ritmo lento e acolhedor"],
    regioes: [["Nimman", "Jovem, moderno, cafés e galerias."], ["Old City", "Prática para turismo e templos."], ["Riverside", "Casal, charme."], ["Santitham", "Estadias longas, perfil mais local."]],
  },
  {
    name: "Phuket / Patong", tag: "Praia + festa + turismo LGBTQIA+",
    perfil: ["Paradise Complex em Patong é o hub LGBTQIA+", "Cabarés clássicos e festa concentrada", "Praia de dia, bar e show de noite", "Exige atenção redobrada com golpe de conta inflada"],
    regioes: [["Patong", "Para quem prioriza vida noturna gay."], ["Kata / Karon / Kamala / Surin", "Casal, praia bonita, menos barulho."], ["Nai Harn / Panwa / Mai Khao / Natai", "Luxo, descanso, romance."]],
  },
  {
    name: "Koh Samui", tag: "A ilha do casal gay",
    perfil: ["Resorts pé na areia e beach clubs", "Spa, jantar à beira-mar, descanso", "Hotéis que recebem casal sem fricção", "Ideal para lua de mel e viagem romântica"],
    regioes: [["Choeng Mon", "Calma, ótima para casal."], ["Bophut / Fisherman's Village", "Charmosa, gastronomia."], ["Chaweng Noi / Lamai", "Resorts com boa estrutura."]],
  },
  {
    name: "Pattaya", tag: "Cena adulta forte, comercial e intensa",
    perfil: ["Vida LGBTQIA+ visível mas muito turística", "Cabarés grandes e espetaculares", "Maior atenção com golpe, abordagem e conta inflada", "Não é o destino mais romântico do país"],
    regioes: [["Boyztown / Sunee Plaza", "Áreas LGBTQIA+ mais ativas — exigem postura."], ["Jomtien", "Mais calma, com praia gay tradicional (Dongtan Beach)."]],
  },
  {
    name: "Hua Hin", tag: "A surpresa discreta para casal",
    perfil: ["Fim de semana clássico de Bangkok", "Sem cena gay vibrante, mas hotéis bons", "Tranquilidade, praia, restaurantes", "Boa opção para casal que quer fugir da bagunça"],
    regioes: [["Centro / praia principal", "Hotéis internacionais e restaurantes."], ["Resorts ao sul", "Descanso e privacidade."]],
  },
];

const silomGuide = [
  { name: "Silom Soi 2", perfil: "Clubes, dança, música alta. Vai bem depois da meia-noite.", como: "Comece em Soi 4, jante, depois siga para Soi 2 quando estiver no clima de pista." },
  { name: "Silom Soi 4", perfil: "Bares com mesas na calçada, conversa, observação. Bom para chegar cedo, casal, viajante sozinho.", como: "Ponto de partida da noite — fácil de ler o movimento antes de decidir o resto." },
  { name: "Sala Daeng / MRT Silom", perfil: "Estações BTS e MRT mais próximas da cena.", como: "Hospede-se a no máximo 10 min a pé para reduzir stress de táxi tarde da noite." },
  { name: "DJ Station, Telephone Pub, Stranger Bar, Maggie Choo's", perfil: "Casas históricas e atuais com público misto de tailandeses, expats e turistas.", como: "Confirme se há entrada/consumo mínimo antes de entrar; cardápio com preço sempre." },
];

const cabares = [
  { city: "Bangkok", text: "Drag sofisticada e criativa. Casas e bares com shows que valem por si — bom inclusive para quem não quer balada." },
  { city: "Phuket / Patong", text: "Cabarés voltados ao público turístico, com figurino, coreografia e impacto visual. Bom para casal e primeira viagem." },
  { city: "Pattaya", text: "Casas grandes e clássicas (Tiffany's, Alcazar). Espetáculo turístico de grande escala — vá com expectativa realista." },
];

const hotels = [
  { region: "Bangkok — econômico e prático", list: [
    ["ibis Styles Bangkok Silom", "Custo-benefício no coração da cena."],
    ["Silom Serene", "Tradicional, perto de Soi 4."],
    ["The Quarter Silom", "Boutique pequeno, bem avaliado."],
    ["Holiday Inn Express Bangkok Sathorn", "Confortável, marca internacional."],
    ["Kokotel Bangkok Surawong", "Moderno e prático."],
  ]},
  { region: "Bangkok — médio e confortável", list: [
    ["Amara Bangkok", "Em Surawong, piscina infinita, gay-friendly clássico."],
    ["Pullman Bangkok Hotel G", "Design e localização."],
    ["Le Méridien Bangkok", "Conexão BTS, marca internacional."],
    ["Bangkok Marriott The Surawongse", "Confortável, perto da cena."],
    ["SO/ Bangkok", "Design, rooftop, vista do parque."],
  ]},
  { region: "Bangkok — luxo", list: [
    ["The Standard Bangkok Mahanakhon", "Cool, jovem, vista."],
    ["W Bangkok", "Design forte, vida social."],
    ["The Sukhothai Bangkok", "Clássico discreto."],
    ["Capella Bangkok", "Riverside premium."],
    ["Four Seasons Hotel Bangkok at Chao Phraya", "Vista do rio, serviço top."],
    ["Mandarin Oriental Bangkok", "Ícone, tradição."],
  ]},
  { region: "Chiang Mai — boutique e luxo", list: [
    ["Tamarind Village", "Boutique na Old City."],
    ["Ping Nakara Boutique Hotel", "Charme à beira-rio."],
    ["Na Nirand Romantic Boutique Resort", "Pensado para casal."],
    ["Rachamankha Hotel", "Histórico e discreto."],
    ["137 Pillars House", "Suítes históricas, alto padrão."],
    ["Anantara Chiang Mai Resort", "Confortável e bem localizado."],
    ["Raya Heritage", "Sofisticado, calmo."],
    ["Four Seasons Resort Chiang Mai", "Vista de arrozais, alto luxo."],
  ]},
  { region: "Phuket", list: [
    ["The Kee Resort & Spa", "Patong, prático para vida noturna."],
    ["Hotel Clover Patong", "Bem avaliado, moderno."],
    ["The Nai Harn", "Praia bonita, casal."],
    ["The Surin Phuket", "Romance, sem ostentação."],
    ["Rosewood Phuket", "Luxo discreto."],
    ["Keemala", "Visual único, villas na mata."],
    ["InterContinental Phuket Resort", "Conforto previsível."],
    ["COMO Point Yamu", "Vista para Phang Nga."],
  ]},
  { region: "Koh Samui", list: [
    ["SALA Samui Chaweng Beach Resort", "Design claro, pé na areia."],
    ["SALA Samui Choengmon Beach Resort", "Praia mais tranquila."],
    ["Kimpton Kitalay Samui", "Moderno, boa energia."],
    ["Garrya Tongsai Bay Samui", "Natural, elegante."],
    ["Banyan Tree Samui", "Villas com piscina, romance."],
    ["Four Seasons Resort Koh Samui", "Ícone do luxo na ilha."],
    ["Conrad Koh Samui", "Villas com pôr do sol."],
  ]},
  { region: "Pattaya", list: [
    ["Hilton Pattaya", "Vista, conforto internacional."],
    ["Avani Pattaya Resort", "Praia, estrutura."],
    ["Wave Hotel Pattaya", "Design, bom custo-benefício."],
    ["Holiday Inn Pattaya", "Família e casal, central."],
    ["Mera Mare Pattaya", "Moderno, à beira-mar."],
  ]},
];

const golpes = [
  { t: "App + extorsão", h: "Interesse rápido demais, pedido de foto íntima, convite para local isolado.", c: ["Não envie nudes com rosto", "Primeiro encontro em local público e movimentado", "Avise um amigo, compartilhe localização", "Use seu próprio transporte", "Nunca pague chantagem — procure a Tourist Police (1155)"] },
  { t: "Conta inflada em bar", h: "Você entra sem ver preço, pede uma bebida, conta vem absurda.", c: ["Sempre peça cardápio com preço", "Pergunte por entrada e consumo mínimo", "Pague por rodada", "Confira itens antes de pagar", "Recuse bebida que não pediu"] },
  { t: "'Amigo local' que leva para lugar caro", h: "Pessoa simpática chama tuk-tuk ou bar 'melhor'; conta vem alta.", c: ["Você escolhe o lugar", "Confira no Google Maps e avaliações recentes", "Saia se ficar estranho"] },
  { t: "Táxi sem taxímetro", h: "Comum depois da noite, especialmente em zona turística.", c: ["Use Grab ou Bolt", "Combine preço antes se for táxi de rua", "Evite táxi parado em porta de bar muito turístico", "Compartilhe a corrida"] },
  { t: "Falsa emergência", h: "Pessoa recém-conhecida pede dinheiro por problema urgente.", c: ["Não envie dinheiro", "Não empreste cartão", "Não pague conta de desconhecido", "Não desbloqueie celular para terceiros"] },
];

const itinerary = [
  { d: "Dia 1", t: "Chegada em Bangkok", b: ["Check-in, banho, descanso", "Noite leve em Silom Soi 4 para entender o movimento"] },
  { d: "Dia 2", t: "Bangkok clássica", b: ["Grand Palace, Wat Pho, Wat Arun", "Jantar com vista do rio"] },
  { d: "Dia 3", t: "Bangkok LGBTQIA+", b: ["Cafés em Silom, shopping em Siam", "Soi 4 → drag show → Soi 2 (se quiser pista)"] },
  { d: "Dia 4", t: "Bangkok moderna", b: ["Siam, Chidlom, rooftop", "Jantar especial + drag ou cabaré"] },
  { d: "Dia 5", t: "Voo para Chiang Mai", b: ["Old City a pé", "Noite leve, massagem"] },
  { d: "Dia 6", t: "Chiang Mai cultural", b: ["Templos, cafés, Doi Suthep ao pôr do sol", "Mercado noturno"] },
  { d: "Dia 7", t: "Chiang Mai alternativa", b: ["Nimman, galerias, cafés", "Bate-volta de natureza se quiser"] },
  { d: "Dia 8", t: "Voo para a ilha", b: ["Nov–abr: Phuket ou Krabi", "Mai–ago: Koh Samui", "Sem passeio no dia do transfer"] },
  { d: "Dia 9", t: "Praia e descanso", b: ["Hotel, praia, spa, jantar"] },
  { d: "Dia 10", t: "Passeio de barco", b: ["Phang Nga / Phi Phi em horário cedo", "Ang Thong se Samui"] },
  { d: "Dia 11", t: "Noite LGBTQIA+ ou romântica", b: ["Patong para festa", "Samui para jantar tranquilo + bar à beira-mar"] },
  { d: "Dia 12", t: "Dia livre", b: ["Repetir o que mais gostou"] },
  { d: "Dia 13", t: "Retorno para Bangkok", b: ["Voltar com margem", "Última noite em rooftop"] },
  { d: "Dia 14", t: "Volta ao Brasil", b: ["Nunca marcar ilha no mesmo dia do voo internacional"] },
];

const frases = [
  ["Para o hotel", "We are a couple. Could you please confirm one king-size bed?", "Somos um casal. Pode confirmar uma cama king?"],
  ["Para táxi", "Please take me to Silom Soi 4.", "Pai Silom Soi See, khrap/kha."],
  ["Pedir ajuda", "Can you help me, please?", "Chuay dai mai, khrap/kha?"],
  ["Polícia turística", "I need the Tourist Police.", "Tong kan tamruat thong thiao. (Telefone: 1155)"],
  ["Recusar com educação", "No, thank you.", "Mai ao, khop khun khrap/kha."],
  ["Perguntar preço", "How much is it?", "Thao rai?"],
  ["Conferir taxa extra", "Is there any extra charge or minimum spend?", "Tem alguma taxa extra ou consumo mínimo?"],
  ["Sair sem comprar briga", "I'll think about it and come back later.", "Vou pensar e volto depois."],
];

const TailandiaParaGays0325257 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Guia Tailândia para Gays e LGBTQIA+ — Roteiro Completo" description="Onde ficar, circular, evitar e viver a Tailândia LGBTQIA+ com liberdade, respeito e segurança. Bangkok, Chiang Mai, Phuket, Koh Samui, Pattaya e mais." />

      <header className="py-20 px-6 text-center border-b border-border/40">
        <div className="max-w-3xl mx-auto">
          <Rainbow className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">Guia Tailândia para Gays e LGBTQIA+</h1>
          <p className="text-lg text-muted-foreground">Onde ficar, onde circular, o que evitar e como viver a Tailândia com liberdade, respeito e segurança.</p>
          <p className="text-sm text-primary/80 mt-6 uppercase tracking-widest">22 capítulos · 40+ hotéis · roteiro 14 dias</p>
        </div>
      </header>

      <Section n="1" title="A Tailândia é gay-friendly, mas não é tudo igual" icon={Rainbow}>
        <p>A Tailândia é um dos destinos mais acolhedores da Ásia para viajantes LGBTQIA+. <strong className="text-foreground">Bangkok</strong> tem uma das cenas gays mais conhecidas do continente. <strong className="text-foreground">Phuket</strong> tem uma área LGBTQIA+ forte em Patong. <strong className="text-foreground">Chiang Mai</strong> é mais calma, alternativa e acolhedora. <strong className="text-foreground">Koh Samui</strong> funciona muito bem para casais. <strong className="text-foreground">Pattaya</strong> tem cena adulta mais explícita e turística.</p>
        <p>Mas não significa que todo lugar funciona do mesmo jeito. A Tailândia é acolhedora e, ao mesmo tempo, uma sociedade onde discrição, educação e respeito ao espaço público importam muito. Você pode viver a viagem com liberdade — desde que entenda o contexto local.</p>
        <Card className="bg-primary/5 border-primary/20">
          <p className="text-foreground font-medium mb-2">O que vocês vão encontrar neste guia</p>
          <Bul items={["Onde a cena LGBTQIA+ realmente acontece", "Qual cidade combina com cada perfil", "Onde se hospedar sem constrangimento", "Como evitar golpe em bar, app e táxi", "Como se comportar em templos", "Como entender kathoey/trans com respeito", "Roteiro LGBTQIA+ de 14 dias", "Pride, cabarés e ilhas sem cair em armadilha"]} />
        </Card>
      </Section>

      <Section n="2" title="Casamento igualitário e contexto LGBTQIA+" icon={Heart}>
        <p>A Tailândia entrou para a história ao legalizar o <strong className="text-foreground">casamento igualitário</strong> em 2025, reforçando a imagem como um dos destinos mais LGBTQIA+ friendly da Ásia.</p>
        <H3>Na prática para o brasileiro</H3>
        <Bul items={["Casais gays circulam com tranquilidade em áreas turísticas", "Hotéis de padrão internacional lidam bem com casais do mesmo sexo", "Bangkok, Phuket, Pattaya e Chiang Mai têm cena LGBTQIA+ visível", "Cultura drag e cabaré muito forte", "Pessoas trans e kathoey fazem parte da paisagem social há séculos"]} />
        <H3>Atenção</H3>
        <Bul items={["Aceitação turística não é ausência total de preconceito", "Cidades pequenas são mais conservadoras", "Templos exigem postura respeitosa de todos", "Demonstrações íntimas em público causam desconforto, hétero ou não", "Turistas LGBTQIA+ ainda caem em golpes específicos em apps e zonas noturnas"]} />
        <p className="italic">Liberdade aqui combina melhor com bom senso.</p>
      </Section>

      <Section n="3" title="O mapa LGBTQIA+ da Tailândia" icon={MapPin}>
        {cities.map((c) => (
          <Card key={c.name} className="space-y-3">
            <div>
              <h3 className="font-display text-2xl text-foreground">{c.name}</h3>
              <p className="text-sm">{c.tag}</p>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">Perfil</p>
              <Bul items={c.perfil} />
            </div>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">Melhores regiões</p>
              <div className="space-y-2">
                {c.regioes.map(([r, d]) => (
                  <div key={r} className="text-sm"><span className="text-foreground font-medium">{r}:</span> {d}</div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <Section n="4" title="Bangkok LGBTQIA+: como entender Silom" icon={Sparkles}>
        <p>Silom é a região mais importante da vida gay de Bangkok — mas tem subáreas muito diferentes. Entender isso evita perder a noite no lugar errado.</p>
        {silomGuide.map((s) => (
          <Card key={s.name}>
            <p className="font-display text-lg text-foreground">{s.name}</p>
            <p className="text-sm mt-1">{s.perfil}</p>
            <p className="text-sm mt-2 italic border-l-2 border-primary/40 pl-3">{s.como}</p>
          </Card>
        ))}
        <H3>Cuidados em Silom</H3>
        <Bul items={["Confirme preço antes de pedir", "Cuidado com promoter insistente", "Não entre em lugar sem ver cardápio", "Não deixe bebida sem atenção", "Recuse 'show especial' sem entender preço", "Volte com Grab/Bolt ou táxi oficial", "Leve foto digital do passaporte", "Celular sempre carregado"]} />
      </Section>

      <Section n="5" title="Locais adultos: como avaliar sem cair em cilada" icon={AlertTriangle}>
        <p>A regra para qualquer local adulto é: <strong className="text-foreground">não entre sem entender o que está comprando</strong>.</p>
        <H3>Confirme antes de entrar</H3>
        <Bul items={["Há entrada? Inclui bebida?", "Qual o valor da bebida?", "Aceita cartão?", "Tem consumo mínimo?", "O preço está escrito no cardápio?", "É bar, show, clube ou espaço adulto?", "Pode fotografar?", "Avaliações recentes (Google Maps, Reddit r/Bangkok)?"]} />
        <H3>Sinais vermelhos</H3>
        <Bul items={["Ninguém mostra cardápio", "Preço só aparece depois", "Promoter promete algo exagerado", "Pressionam você a pedir bebida cara", "Local vazio e insistem demais", "Não consegue sair com facilidade", "Item que você não pediu aparece na conta"]} />
        <Card className="bg-muted/30">
          <p className="text-xs uppercase tracking-wider text-primary/80 mb-1">Frases que salvam a noite</p>
          <p className="text-sm italic">"Can I see the menu with prices first?" — Posso ver o cardápio com preços antes?</p>
          <p className="text-sm italic mt-1">"Is there any entrance fee or minimum spend?" — Tem entrada ou consumo mínimo?</p>
        </Card>
      </Section>

      <Section n="6" title="Cabarés, drag e shows LGBTQIA+" icon={Wine}>
        {cabares.map((c) => (
          <Card key={c.city}>
            <p className="font-display text-lg text-foreground">{c.city}</p>
            <p className="text-sm mt-1">{c.text}</p>
          </Card>
        ))}
        <H3>Etiqueta em shows</H3>
        <Bul items={["Respeite artistas", "Não toque sem permissão", "Pergunte antes de tirar foto", "Dê gorjeta quando for culturalmente esperado", "Não faça piada com corpo, voz ou gênero", "Não trate artista trans como atração exótica", "Lembre que é trabalho artístico"]} />
      </Section>

      <Section n="7" title="Ladyboys, kathoey e mulheres trans" icon={Users}>
        <p>Muitos brasileiros chegam ouvindo a palavra "ladyboy". Ela é muito usada no turismo, mas pode ser limitada e, em vários contextos, desrespeitosa.</p>
        <p>O termo local mais conhecido é <strong className="text-foreground">kathoey</strong> — pode se referir a pessoas transfemininas, mulheres trans ou expressões femininas que fogem do padrão masculino. Mas nem toda mulher trans tailandesa se identifica como kathoey. Muitas preferem simplesmente ser chamadas de mulher.</p>
        <Card className="bg-primary/5 border-primary/20">
          <p className="text-foreground font-medium">Regra única e segura</p>
          <p className="text-sm mt-1">Trate a pessoa pelo gênero que ela apresenta e pelo nome que ela usa.</p>
        </Card>
        <H3>Como falar com respeito</H3>
        <Bul items={["Mulher trans", "Artista trans / performer", "Kathoey, se o contexto local usar", "Pelo nome da pessoa"]} />
        <H3>Evite</H3>
        <Bul items={["Termo ofensivo em português", "Piadas e perguntas íntimas", "Comentários sobre aparência ou corpo", "Tratar como fetiche", "Chamar de ladyboy sem saber se ela aceita", "Fotos escondidas"]} />
        <H3>Em apps ou encontros</H3>
        <Bul items={["Respeito, clareza, consentimento", "Combine em local público", "Não envie dinheiro nem documentos", "Não aceite chantagem", "Não vá para lugar isolado sem confiança"]} />
      </Section>

      <Section n="8" title="Demonstrações de afeto em público" icon={Heart}>
        <H3>Mais tranquilo</H3>
        <Bul items={["Silom (Bangkok)", "Hotéis internacionais", "Áreas turísticas de Phuket", "Resorts de Koh Samui", "Bairros jovens de Chiang Mai (Nimman)", "Eventos Pride", "Bares LGBTQIA+", "Rooftops e restaurantes cosmopolitas"]} />
        <H3>Melhor ser discreto</H3>
        <Bul items={["Templos", "Áreas rurais e cidades pequenas", "Mercados muito locais", "Transporte público lotado", "Locais familiares e perto de escolas", "Vilarejos e cerimônias religiosas"]} />
        <p className="italic">Regra: mão dada passa bem; beijo intenso chama atenção independentemente da orientação.</p>
      </Section>

      <Section n="9" title="Templos e etiqueta local" icon={Sparkles}>
        <Bul items={["Cubra ombros e joelhos", "Tire sapatos quando indicado", "Não toque em monges (mulheres entregam objetos via marido ou tecido)", "Não aponte os pés para imagens de Buda", "Fale baixo", "Sem abraço ou beijo dentro do templo", "Nada de pose sensual ou roupa transparente", "Selfie 'engraçada' com Buda é crime cultural sério"]} />
      </Section>

      <Section n="10" title="Os 5 golpes mais comuns" icon={AlertTriangle}>
        {golpes.map((g, i) => (
          <Card key={g.t}>
            <p className="text-primary/80 text-xs uppercase tracking-wider">Golpe {i + 1}</p>
            <p className="font-display text-lg text-foreground mb-2">{g.t}</p>
            <p className="text-sm mb-3">{g.h}</p>
            <p className="text-foreground font-medium text-sm mb-1">Como evitar</p>
            <Bul items={g.c} />
          </Card>
        ))}
      </Section>

      <Section n="11" title="Saúde, segurança e prevenção" icon={Stethoscope}>
        <H3>Antes da viagem</H3>
        <Bul items={["Seguro viagem com cobertura mínima USD 60.000", "Remédios de uso contínuo + receita em inglês", "Contatos de emergência salvos offline", "Clínicas internacionais identificadas por região"]} />
        <H3>Em Bangkok (saúde sexual)</H3>
        <Bul items={["Pulse Clinic (Silom) — testagem rápida, PrEP, PEP, atendimento LGBTQIA+", "Silom Pulse — referência em saúde sexual", "Bumrungrad e Samitivej — hospitais internacionais de alto padrão", "PrEP, PEP, testagem rápida e tratamento de IST são acessíveis e profissionais"]} />
        <H3>Segurança pessoal</H3>
        <Bul items={["Celular carregado e eSIM ativo (Airalo/Holafly)", "Compartilhe localização com alguém de confiança", "Não aceite bebida aberta de desconhecido", "Use Grab/Bolt para voltar", "Tourist Police: 1155 (atendimento em inglês)", "Embaixada do Brasil em Bangkok: +66 2 119 4500"]} />
      </Section>

      <Section n="12" title="Onde se hospedar sem constrangimento" icon={Hotel}>
        <p>O melhor hotel gay-friendly não é necessariamente "hotel gay" — é o hotel que trata casal LGBTQIA+ com naturalidade.</p>
        <H3>O que procurar</H3>
        <Bul items={["Hotéis internacionais ou boutique bem avaliados", "Comentários de casais nas reviews", "Cama de casal garantida por escrito", "Recepção profissional e política clara", "Localização boa para voltar à noite"]} />
        <Card className="bg-muted/30">
          <p className="text-xs uppercase tracking-wider text-primary/80 mb-1">E-mail para confirmar cama de casal</p>
          <p className="text-sm italic">Hello. We are a couple traveling together and would like to confirm one king-size bed (or one double bed) for our stay. Could you please confirm this is set in our reservation? Thank you.</p>
        </Card>
      </Section>

      <Section n="13" title="40+ hotéis recomendados por perfil" icon={Hotel}>
        {hotels.map((g) => (
          <div key={g.region} className="space-y-2">
            <H3>{g.region}</H3>
            <div className="grid sm:grid-cols-2 gap-3">
              {g.list.map(([n, d]) => (
                <Card key={n}><p className="text-foreground font-medium">{n}</p><p className="text-sm mt-1">{d}</p></Card>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section n="14" title="Roteiro LGBTQIA+ de 14 dias" icon={Calendar}>
        <p>Equilibra cidade, cultura, vida noturna gay, praia e descanso. Funciona para casal ou viagem solo.</p>
        <div className="space-y-3">
          {itinerary.map((d) => (
            <Card key={d.d}>
              <p className="text-primary/80 text-xs uppercase tracking-wider">{d.d}</p>
              <p className="font-display text-lg text-foreground mb-2">{d.t}</p>
              <Bul items={d.b} />
            </Card>
          ))}
        </div>
      </Section>

      <Section n="15" title="Eventos, Pride e quando ir" icon={Calendar}>
        <H3>Bangkok Pride</H3>
        <p>Maior evento Pride do país, geralmente em <strong className="text-foreground">fim de maio / início de junho</strong>. Programação ao longo do Pride Month. Hospede-se em Silom/Sathorn — toda a parada passa por ali. Reservas com 2 a 3 meses de antecedência.</p>
        <H3>Phuket Pride</H3>
        <p>Concentrado em Patong, normalmente em abril. Programação muda por ano — confirme antes de fechar passagem.</p>
        <H3>Chiang Mai</H3>
        <p>Cena menor, comunitária, alternativa. Eventos menos intensos, cidade acolhedora o ano todo.</p>
        <H3>Songkran (abril)</H3>
        <Bul items={["Ano Novo tailandês, festa de água gigante no país inteiro", "Bangkok (Silom) e Chiang Mai são os epicentros", "Para gays, Silom vira parada gigante de água + festa", "Hospedagem reservada com meses de antecedência"]} />
      </Section>

      <Section n="16" title="Bônus: sobrevivendo ao Songkran" icon={Gift}>
        <H3>O que levar</H3>
        <Bul items={["Pochete impermeável (vital)", "Capa de chuva para celular", "Sandália firme (chão escorregadio)", "Roupa leve que seca rápido", "Dinheiro em saco plástico", "Cópia do passaporte (deixe o original no hotel)", "Protetor solar, óculos simples, paciência"]} />
        <H3>O que evitar</H3>
        <Bul items={["Levar passaporte original para a rua", "Roupa transparente em templo", "Jogar água em monge", "Jogar água em quem não quer brincar", "Água suja, gelo na cara", "Bebida em excesso", "Moto durante festa", "Celular solto no bolso"]} />
      </Section>

      <Section n="17" title="Frases úteis em inglês e tailandês" icon={Languages}>
        <div className="space-y-2">
          {frases.map(([cat, en, pt]) => (
            <Card key={cat}>
              <p className="text-primary/80 text-xs uppercase tracking-wider">{cat}</p>
              <p className="text-sm text-foreground mt-1">EN: <span className="italic">{en}</span></p>
              <p className="text-sm mt-1">PT/TH: {pt}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section n="18" title="Lista preta: sinais de cilada" icon={AlertTriangle}>
        <Bul items={[
          "Preço não aparece em lugar nenhum",
          "Funcionário insiste demais",
          "Ninguém responde claramente sobre valor",
          "Pedem passaporte como garantia para coisa simples",
          "App chama para lugar isolado",
          "Pessoa pede dinheiro rápido",
          "Bar não entrega cardápio",
          "Conta vem sem descrição",
          "Táxi recusa taxímetro e cobra absurdo",
          "Alguém tenta te separar do grupo",
          "Prometem algo bom demais",
          "Querem que você pague antes de ver",
          "Não deixam você sair com calma",
        ]} />
        <Card className="bg-primary/5 border-primary/20">
          <p className="text-foreground font-medium">Frase mais útil da viagem</p>
          <p className="text-sm italic mt-1">"I'll think about it and come back later." — Vou pensar e volto depois.</p>
          <p className="text-sm mt-2">Você não precisa bater boca. Você só precisa sair.</p>
        </Card>
      </Section>

      <Section n="19" title="Qual destino combina com você" icon={Globe2}>
        {[
          ["Festa gay forte", "Bangkok + Phuket/Patong"],
          ["Romance gay", "Bangkok + Koh Samui ou Bangkok + Koh Yao/Krabi"],
          ["Viagem mais calma", "Chiang Mai + Koh Samui"],
          ["Primeira vez segura", "Bangkok + Chiang Mai + uma ilha"],
          ["Pride", "Bangkok no Pride Month (maio/junho)"],
          ["Praia com pouca exposição", "Koh Samui, Koh Lanta, Koh Yao ou Krabi fora da muvuca"],
          ["Cena adulta", "Pattaya e Patong (com muito mais cuidado)"],
        ].map(([k, v]) => (
          <Card key={k}>
            <p className="text-foreground font-medium">{k}</p>
            <p className="text-sm mt-1">{v}</p>
          </Card>
        ))}
      </Section>

      <Section n="20" title="O que não fazer" icon={AlertTriangle}>
        <Bul items={[
          "Tratar pessoa trans como atração turística",
          "Tirar foto de artista sem permissão",
          "Usar palavra ofensiva em português achando que ninguém entende",
          "Beijar ou abraçar intensamente em templo",
          "Entrar em bar sem ver preço",
          "Mandar nude com rosto para desconhecido",
          "Compartilhar hotel com pessoa recém-conhecida",
          "Sair sem bateria no celular",
          "Beber e perder o controle",
          "Discutir com segurança, polícia ou funcionário",
          "Achar que toda cidade é igual a Silom",
          "Copiar roteiro hétero genérico achando que serve igual",
        ]} />
      </Section>

      <Section n="21" title="Checklist final" icon={CheckCircle2}>
        {[
          ["Documentos", ["Passaporte com 6 meses de validade", "Seguro viagem (mín. USD 60k)", "Comprovantes de hotel + voos internos", "Cópia digital salva offline", "Cartão internacional + dinheiro em baht"]],
          ["Segurança", ["Tourist Police: 1155", "Embaixada do Brasil em Bangkok: +66 2 119 4500", "Localização compartilhada com alguém de confiança", "Grab e Bolt instalados", "Bateria externa", "Plano para voltar à noite"]],
          ["LGBTQIA+", ["Hotel confirmado por escrito com cama de casal", "Mapa de Silom e Patong salvos offline", "Pride conferido (se for objetivo)", "Cabaré reservado com antecedência", "Bares pré-escolhidos com preço claro", "Regras de etiqueta local entendidas"]],
          ["Saúde", ["Seguro conferido para emergência médica", "Remédios pessoais + receita em inglês", "Clínica internacional salva (Bumrungrad / Pulse Clinic)", "PrEP/PEP/testagem planejados se aplicável", "Atenção com bebida e consentimento"]],
        ].map(([t, items]) => (
          <Card key={t as string}>
            <p className="font-display text-lg text-foreground mb-2">{t}</p>
            <Bul items={items as string[]} />
          </Card>
        ))}
      </Section>

      <Section n="22" title="Conclusão" icon={Rainbow}>
        <p>A Tailândia é um dos melhores países da Ásia para viajantes gays e LGBTQIA+. Mas a melhor viagem não acontece porque o país é "liberado" — ela acontece quando você sabe <strong className="text-foreground">onde ir, onde não ir, como se comportar, como se proteger e como escolher os lugares certos</strong> para o seu estilo.</p>
        <Card className="bg-primary/5 border-primary/20">
          <Bul items={["Bangkok é a capital da cena", "Chiang Mai é a bolha calma", "Phuket é praia com festa", "Koh Samui é romance", "Pattaya é adulta e exige cuidado", "Hua Hin é a surpresa discreta"]} />
        </Card>
        <p>Pessoas LGBTQIA+ na Tailândia não são atração. São parte viva da cultura, da noite, da arte, dos hotéis, das ruas e da história contemporânea do país.</p>
        <p className="text-center text-lg text-foreground italic mt-6">Viaje com liberdade.<br/>Mas viaje com respeito.</p>
      </Section>

      <footer className="py-10 px-6 text-center text-sm text-muted-foreground">
        <Rainbow className="w-6 h-6 text-primary mx-auto mb-3" />
        <p>Guia Tailândia para Gays e LGBTQIA+ · guiastailandia.com.br</p>
      </footer>
    </div>
  );
};

export default TailandiaParaGays0325257;

import { SEO } from "@/components/SEO";
import { Bike, ShieldAlert, FileText, Camera, Wrench, MapPin, Phone, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const Section = ({ n, title, children, id }: { n: string; title: string; children: React.ReactNode; id?: string }) => (
  <section id={id} className="py-14 px-6 border-b border-border/40">
    <div className="max-w-3xl mx-auto">
      <p className="text-sm uppercase tracking-widest text-primary/80 mb-3">Capítulo {n}</p>
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">{title}</h2>
      <div className="space-y-5 text-muted-foreground leading-relaxed">{children}</div>
    </div>
  </section>
);

const Bul = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 list-disc pl-6">
    {items.map((i) => <li key={i}>{i}</li>)}
  </ul>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-card border border-border rounded-lg p-5 ${className}`}>{children}</div>
);

type Shop = { name: string; area: string; note: string; price?: string; maps?: string };

const cities: { city: string; intro: string; shops: Shop[] }[] = [
  {
    city: "Chiang Mai",
    intro: "Cidade com a maior concentração de locadoras sérias do país. Procure no entorno do Old City e Nimman.",
    shops: [
      { name: "Cat Motors", area: "Nimmanhaemin, Soi 17", note: "Referência absoluta. Não exige passaporte original, contrato em inglês, seguro real, frota nova. Centenas de reviews 4.8+. Ideal para Mae Hong Son Loop.", price: "200–600 THB/dia", maps: "https://maps.google.com/?q=Cat+Motors+Chiang+Mai" },
      { name: "Mr. Mechanic", area: "Moon Muang Rd, Old City", note: "Operando desde os anos 90, frota grande, aceita cópia do passaporte. Bom para diárias e mensais.", price: "150–400 THB/dia", maps: "https://maps.google.com/?q=Mr+Mechanic+Chiang+Mai" },
      { name: "Bamboo Bikes Chiang Mai", area: "Old City", note: "Pequena, atendimento pessoal, contrato claro, sem golpe de caução.", price: "180–350 THB/dia", maps: "https://maps.google.com/?q=Bamboo+Bikes+Chiang+Mai" },
      { name: "Mango Bikes Rent", area: "Santitham", note: "Boa para mensal, motos revisadas, aceita caução em dinheiro.", price: "150–500 THB/dia", maps: "https://maps.google.com/?q=Mango+Bikes+Rent+Chiang+Mai" },
    ],
  },
  {
    city: "Pai",
    intro: "Pequena, mas com armadilhas. Evite locadoras de calçada sem placa.",
    shops: [
      { name: "Aya Service Pai", area: "Walking Street", note: "Maior operadora do norte, contrato padronizado, seguro disponível. Aceita devolução em Chiang Mai (one-way).", price: "150–300 THB/dia", maps: "https://maps.google.com/?q=Aya+Service+Pai" },
      { name: "North Wheels Pai", area: "Centro", note: "Filial da rede de Chiang Mai. Manutenção decente, sem reter passaporte.", price: "180–350 THB/dia", maps: "https://maps.google.com/?q=North+Wheels+Pai" },
    ],
  },
  {
    city: "Phuket",
    intro: "Onde mais ocorrem golpes da Tailândia. Fuja de barracas de calçada em Patong e Karon.",
    shops: [
      { name: "Phuket Garage", area: "Chalong / entrega no hotel", note: "Especialista em adventure bikes (CRF, Versys). Sem passaporte como caução, seguro estendido, permite cruzar fronteiras. Excelentes reviews.", price: "1.200–2.500 THB/dia", maps: "https://maps.google.com/?q=Phuket+Garage" },
      { name: "PMR – Phuket Motorbike Rental", area: "Múltiplos pontos", note: "Pagamento seguro online, entrega em qualquer praia, contrato em inglês. Boa para scooter.", price: "200–500 THB/dia", maps: "https://maps.google.com/?q=Phuket+Motorbike+Rental+PMR" },
      { name: "Phuket And You", area: "Rawai / entrega ilha toda", note: "Sem caução em passaporte, seguro incluso, atendimento em inglês/francês.", price: "250–550 THB/dia", maps: "https://maps.google.com/?q=Phuket+And+You+Scooter+Rental" },
    ],
  },
  {
    city: "Koh Samui",
    intro: "Ilha grande, trechos com curva e areia. Capacete e seguro são inegociáveis.",
    shops: [
      { name: "TOH Motorbike Rental", area: "Chaweng", note: "Sem passaporte como caução, entrega gratuita, motos novas. Top reviews em Chaweng.", price: "200–400 THB/dia", maps: "https://maps.google.com/?q=TOH+Motorbike+Rental+Koh+Samui" },
      { name: "Mr. Ung's Magical Safari Rentals", area: "Bophut", note: "Tradicional, contrato claro, aceita cópia + caução em dinheiro.", price: "180–350 THB/dia", maps: "https://maps.google.com/?q=Mr+Ung+Magical+Safari+Koh+Samui" },
    ],
  },
  {
    city: "Krabi / Ao Nang",
    intro: "Use para deslocamentos curtos. Evite estrada à noite por causa de macacos e elefantes.",
    shops: [
      { name: "MotoKrabi", area: "Ao Nang", note: "Frota grande, desconto semanal, contrato em inglês, sem reter passaporte.", price: "150–300 THB/dia", maps: "https://maps.google.com/?q=MotoKrabi+Ao+Nang" },
      { name: "Krabi Bike Rent", area: "Centro de Krabi Town", note: "Boa para mensal, manutenção em dia.", price: "150–250 THB/dia", maps: "https://maps.google.com/?q=Krabi+Bike+Rent" },
    ],
  },
  {
    city: "Bangkok",
    intro: "Não recomendado para turista comum. Use BTS/MRT/Grab. Se ainda quiser, alugue só para sair da cidade.",
    shops: [
      { name: "BigBikeBangkok", area: "Sukhumvit", note: "Especializada em motos grandes para quem vai sair da capital. Contrato profissional.", price: "1.000–3.000 THB/dia", maps: "https://maps.google.com/?q=BigBikeBangkok" },
      { name: "Bangkok Motorbike Rental", area: "Asok / Phrom Phong", note: "Scooter para deslocamento, aceita cópia do passaporte.", price: "250–500 THB/dia", maps: "https://maps.google.com/?q=Bangkok+Motorbike+Rental" },
    ],
  },
];

const AluguelDeMotos827252 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Guia: Aluguel de Motos na Tailândia"
        description="Guia prático e completo para alugar moto na Tailândia sem golpes: documentação, PID, caução, locadoras testadas, vistoria, contrato e segurança."
        canonicalPath="/aluguel-de-motos-tailandia827252"
      />

      {/* HERO */}
      <header className="relative py-20 px-6 bg-gradient-to-br from-red-950 via-background to-orange-950 border-b border-border/40">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm mb-6">
            <Bike className="w-4 h-4" /> Guia Completo · Atualizado
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            Aluguel de Motos na Tailândia
          </h1>
          <p className="text-lg text-muted-foreground">
            O guia que te protege de golpes, multa, caução abusiva e perrengue na estrada — com a lista das locadoras mais bem avaliadas do país, protocolo anti-golpe e checklists prontos.
          </p>
        </div>
      </header>

      {/* AVISO INICIAL */}
      <section className="py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="border-destructive/40 bg-destructive/5">
            <div className="flex gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Antes de tudo: moto na Tailândia não é passeio para improvisar</h3>
                <p className="text-muted-foreground">
                  Mão inglesa, ruas estreitas, chuvas que mudam a pista em minutos, curvas de montanha e muitas locadoras que vivem de turista distraído. Este guia é para quem quer entender o processo <strong className="text-foreground">antes</strong> de decidir se vale a pena alugar. Se você não está habilitado, experiente e preparado, <strong className="text-foreground">não alugue</strong>.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Section n="1" title="Quem deve (e quem não deve) alugar moto">
        <p><strong className="text-foreground">Alugue só se você:</strong></p>
        <Bul items={[
          "Tem CNH válida para moto",
          "Tem experiência real pilotando no Brasil",
          "Vai levar PID válida",
          "Usa capacete sempre",
          "Não bebe antes de pilotar",
          "Tem seguro viagem que cobre moto",
          "Está confortável com mão inglesa",
          "Aceita gastar 20–30 min na vistoria",
          "Sabe dizer 'não' para locadora ruim",
        ]} />
        <p className="pt-2"><strong className="text-foreground">Não alugue se:</strong> você nunca pilotou, não tem CNH de moto, não tem PID, não tem seguro adequado, está cansado, vai dirigir à noite, está com criança pequena ou pretende beber. Use Grab, Bolt, táxi, tuk-tuk negociado, songthaew, BTS/MRT em Bangkok.</p>
      </Section>

      <Section n="2" title="Documentos obrigatórios">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card><h4 className="text-foreground font-semibold mb-2">Passaporte</h4><p className="text-sm">Leve sempre, mas <strong>nunca</strong> deixe o original com a locadora.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">CNH brasileira</h4><p className="text-sm">Válida e com categoria A (moto). CNH só de carro não resolve.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">PID</h4><p className="text-sm">Permissão Internacional para Dirigir. Funciona como tradução oficial da CNH. Não substitui — anda junto.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Seguro viagem</h4><p className="text-sm">Leia a apólice. Muitos excluem moto, scooter ou exigem PID. Confirme antes de alugar.</p></Card>
        </div>
      </Section>

      <Section n="3" title="Como tirar a PID antes da viagem">
        <p>A PID é emitida pelo Detran do seu estado. Passo a passo:</p>
        <Bul items={[
          "Entre no site do Detran do seu estado",
          "Procure 'Permissão Internacional para Dirigir' ou 'PID'",
          "Confira validade e categoria da CNH",
          "Solicite a emissão e pague a taxa",
          "Aguarde entrega ou retire pessoalmente",
          "Leve a PID física na viagem (cópia digital não basta)",
        ]} />
        <p>Peça com <strong className="text-foreground">15 a 30 dias de antecedência</strong>. Sem PID, você arrisca multa, problema em blitz e negativa de seguro.</p>
      </Section>

      <Section n="4" title="O maior erro: entregar passaporte como caução">
        <p>O golpe clássico:</p>
        <Bul items={[
          "Você entrega o passaporte",
          "Sai com a moto, anda tranquilo",
          "Na devolução, a locadora aponta arranhão antigo",
          "Cobra valor abusivo",
          "Você quer ir embora — mas eles estão com seu passaporte",
        ]} />
        <Card className="border-primary/40 bg-primary/5">
          <p className="text-foreground"><strong>Regra de ouro:</strong> passaporte original nunca fica com locadora. Aceite só: mostrar, deixar cópia impressa, caução em dinheiro com recibo e contrato claro. Se insistirem no original, agradeça e vá embora.</p>
        </Card>
      </Section>

      <Section n="5" title="Como funciona a caução">
        <p>Antes de aceitar, confirme: valor exato, moeda, forma de pagamento, quando será devolvida, o que pode ser descontado e se há recibo formal.</p>
        <p><strong className="text-foreground">O recibo deve mostrar:</strong> nome da locadora, data, valor, placa/modelo, seu nome, assinatura/carimbo e condição de devolução. "Não precisa recibo" é sinal vermelho — precisa sim.</p>
      </Section>

      <Section n="6" title="Protocolo anti-golpe da 'moto arranhada'">
        <ol className="space-y-4 list-decimal pl-6">
          <li><strong className="text-foreground">Chegue sem pressa.</strong> Quem tem pressa aceita qualquer coisa.</li>
          <li><strong className="text-foreground">Combine tudo antes:</strong> preço, caução, documentos, seguro, horário de devolução, política de combustível, multa por atraso, regra de dano.</li>
          <li><strong className="text-foreground">Recuse passaporte original.</strong> Frase pronta: <em>"I don't leave my original passport as deposit. I can leave a passport copy and a cash deposit."</em></li>
          <li><strong className="text-foreground">Peça contrato</strong> com valor, caução, placa, modelo, combustível e contato da locadora.</li>
          <li><strong className="text-foreground">Grave vídeo contínuo</strong> da moto inteira antes de ligar. Fale em voz alta: <em>"Rental inspection before leaving. Existing scratches here."</em> e aponte cada marca com o dedo.</li>
          <li><strong className="text-foreground">Grave o funcionário confirmando</strong> os arranhões antigos: <em>"This scratch was already here, correct?"</em></li>
          <li><strong className="text-foreground">Tire fotos</strong> do contrato, placa, painel, combustível, capacete, pneus e do dinheiro da caução antes de entregar.</li>
          <li><strong className="text-foreground">Suba tudo para a nuvem</strong> imediatamente: WhatsApp, Google Drive, iCloud, e-mail.</li>
        </ol>
      </Section>

      <Section n="7" title="Checklist de vistoria — 12 pontos">
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ["Freio dianteiro", "Firme. Se estiver mole, peça outra moto."],
            ["Freio traseiro", "Teste devagar antes de sair."],
            ["Pneus", "Sem rachadura, sem careca, calibrados."],
            ["Farol", "Luz baixa e alta funcionando."],
            ["Lanterna traseira", "Acendendo — essencial à noite/chuva."],
            ["Piscas", "Direita e esquerda."],
            ["Buzina", "Útil em curvas e ultrapassagens."],
            ["Retrovisores", "Firmes, ajustáveis, não rachados."],
            ["Acelerador", "Volta sozinho ao soltar."],
            ["Painel", "Velocímetro, combustível e luzes."],
            ["Capacete", "Fecha bem, trava funciona, sem rachadura."],
            ["Placa e documentos", "Moto com placa visível e doc da locadora."],
          ].map(([t, d]) => (
            <Card key={t}><h4 className="text-foreground font-semibold mb-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{t}</h4><p>{d}</p></Card>
          ))}
        </div>
      </Section>

      <Section n="8" title="Quanto custa alugar">
        <Bul items={[
          "Scooter básica: 150–350 THB/dia",
          "Scooter nova/confortável: 250–500 THB/dia",
          "Scooter premium ou maior cilindrada: 500–1.200 THB/dia",
          "Aluguel semanal: geralmente com desconto",
          "Aluguel mensal: muito mais barato por dia",
        ]} />
        <p>O mais barato pode vir com pneu ruim, freio gasto, capacete quebrado e golpe na devolução. <strong className="text-foreground">A melhor locadora não é a mais barata — é a que combina preço justo, moto boa, contrato claro e caução segura.</strong></p>
      </Section>

      {/* LOCADORAS */}
      <section className="py-14 px-6 border-b border-border/40 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-primary/80 mb-3">Capítulo 9</p>
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">Onde alugar — locadoras testadas por cidade</h2>
          <p className="text-muted-foreground mb-8">Selecionadas pela combinação de <strong className="text-foreground">volume de reviews 4.5+ no Google Maps</strong>, política <strong className="text-foreground">sem reter passaporte</strong> e contrato em inglês. Confirme sempre no momento — políticas mudam.</p>

          <div className="space-y-10">
            {cities.map((c) => (
              <div key={c.city}>
                <h3 className="font-display text-2xl text-foreground mb-2 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" />{c.city}</h3>
                <p className="text-muted-foreground text-sm mb-4">{c.intro}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {c.shops.map((s) => (
                    <Card key={s.name}>
                      <h4 className="text-foreground font-semibold mb-1">{s.name}</h4>
                      <p className="text-xs text-primary/80 mb-2">{s.area}{s.price ? ` · ${s.price}` : ""}</p>
                      <p className="text-sm mb-3">{s.note}</p>
                      {s.maps && <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1"><MapPin className="w-3 h-3" />Ver no Google Maps</a>}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section n="10" title="Rotas famosas — o que saber antes">
        <div className="space-y-4">
          <Card><h4 className="text-foreground font-semibold mb-2">Mae Hong Son Loop</h4><p className="text-sm">Mais de 1.800 curvas. Não é rota para iniciante. Exige documentação, seguro, moto adequada, retorno antes da noite e plano B para chuva.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Chiang Mai → Pai</h4><p className="text-sm">762 curvas em ~135 km. Bonita, mas muito subestimada. Não faça cansado nem na chuva forte.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Phuket → Phang Nga</h4><p className="text-sm">Estradas maiores, caminhões pesados. Saia cedo, volte antes do anoitecer.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Interior de Koh Samui</h4><p className="text-sm">Subidas íngremes e areia nas curvas. Só se já estiver confortável na ilha.</p></Card>
        </div>
      </Section>

      <Section n="11" title="Segurança real na pilotagem">
        <Bul items={[
          "Capacete sempre — mesmo no trecho curto",
          "Zero álcool antes de pilotar",
          "Pare se a chuva apertar — pista lisa derruba",
          "Reduza perto de praia (areia derruba em curva)",
          "Cuidado com cachorro em vilarejos",
          "Mantenha distância de outros turistas de scooter",
          "Não pilote à noite — buracos, animais, alcoolizados",
        ]} />
      </Section>

      <Section n="12" title="Blitz: o que fazer">
        <Bul items={[
          "Pare com calma, sem discutir",
          "Tire o capacete se pedirem",
          "Mostre passaporte (ou cópia), CNH, PID e contrato",
          "Seja educado, não tente fugir",
          "Não ofereça propina",
          "Peça recibo se houver multa",
          "Chame a Polícia Turística (1155) se sentir abuso",
        ]} />
        <p className="text-sm">Frase útil: <em>"Here are my passport copy, Brazilian driving license, International Driving Permit and rental contract."</em></p>
      </Section>

      <Section n="13" title="Acidente: o que fazer">
        <Bul items={[
          "Cuide das pessoas primeiro — moto e caução depois",
          "Se for seguro, tire a moto da via. Ferido grave: NÃO mova",
          "Polícia Turística: 1155 · Emergência policial: 191 · Médica: 1669 · Bombeiros: 199",
          "Avise a locadora com localização e fotos",
          "Acione o seguro com apólice, documentos e fotos",
          "Documente tudo: local, danos, recibos, contato de testemunhas",
        ]} />
      </Section>

      <Section n="14" title="Scripts prontos">
        <div className="space-y-3 text-sm">
          <Card><p className="text-foreground font-semibold mb-1">Na locadora</p><p><em>"I don't leave my original passport as deposit. I can leave a passport copy and a cash deposit."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Vistoria</p><p><em>"This scratch was already here before rental, correct?"</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Devolução</p><p><em>"Can you check the motorbike and confirm everything is okay? Please return my deposit."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Posto</p><p><em>"100 baht gasoline, please."</em> · <em>"Full tank, please."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Tailandês básico</p><p>Obrigado: <em>khop khun khrap</em> (homem) / <em>khop khun kha</em> (mulher) · Freio ruim: <em>brek mai dee</em> · Moto não liga: <em>rot motosai start mai tit</em></p></Card>
        </div>
      </Section>

      <Section n="15" title="Checklist final antes de sair">
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-primary" />Documentos</h4><Bul items={["CNH válida", "PID válida", "Passaporte", "Seguro conferido", "Contrato e contato da locadora"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-primary" />Locadora</h4><Bul items={["Não retém passaporte original", "Aceita cópia + caução em dinheiro", "Entrega recibo e contrato", "Não pressiona"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><Wrench className="w-4 h-4 text-primary" />Moto</h4><Bul items={["Freios firmes", "Pneus bons", "Farol/lanterna/piscas/buzina ok", "Capacete decente", "Painel funcionando"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><Camera className="w-4 h-4 text-primary" />Provas</h4><Bul items={["Vídeo completo gravado", "Fotos dos danos antigos", "Foto do contrato e caução", "Tudo na nuvem"]} /></Card>
        </div>
      </Section>

      <Section n="16" title="Como decidir se vale a pena">
        <p>Se você respondeu <strong className="text-foreground">não</strong> a qualquer pergunta abaixo, não alugue:</p>
        <Bul items={[
          "Pilotaria essa rota com segurança no Brasil?",
          "Estou confortável com mão inglesa?",
          "Tenho CNH de moto e PID?",
          "Meu seguro cobre moto?",
          "A locadora não exige passaporte original?",
          "A moto está em bom estado?",
          "Vou voltar antes da noite, descansado, sem chuva forte?",
        ]} />
        <Card className="border-primary/40 bg-primary/5 mt-4">
          <p className="text-foreground"><strong>Resumo final:</strong> moto na Tailândia é liberdade — mas só quando você está preparado. A melhor viagem não é a mais barata: é a que você termina inteiro, sem golpe, sem multa e sem transformar férias em problema.</p>
        </Card>
      </Section>

      <footer className="py-10 px-6 text-center text-sm text-muted-foreground">
        <p>Guia Tailândia · Conteúdo prático testado em campo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default AluguelDeMotos827252;

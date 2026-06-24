import { SEO } from "@/components/SEO";
import { Bike, ShieldAlert, FileText, Camera, Wrench, MapPin, AlertTriangle, CheckCircle2, Gift, Fuel, ParkingCircle, Ship, Smartphone, HeartPulse, Sparkles, Cloud, Languages, Calculator, Users } from "lucide-react";

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
    intro: "Cidade com a maior concentração de locadoras sérias do país. Procure no entorno do Old City e Nimman. Evite as barracas sem placa perto do Tha Phae Gate à noite.",
    shops: [
      { name: "Cat Motors", area: "Nimmanhaemin, Soi 17", note: "Referência absoluta. Não exige passaporte original, contrato em inglês, seguro real, frota nova. Centenas de reviews 4.8+. Ideal para Mae Hong Son Loop. Aluguel mínimo 24h, devolução flexível.", price: "200–600 THB/dia", maps: "https://maps.google.com/?q=Cat+Motors+Chiang+Mai" },
      { name: "Mr. Mechanic", area: "Moon Muang Rd, Old City", note: "Operando desde os anos 90, frota grande, aceita cópia do passaporte + caução em dinheiro. Bom para diárias e mensais. Mecânica própria 24h.", price: "150–400 THB/dia", maps: "https://maps.google.com/?q=Mr+Mechanic+Chiang+Mai" },
      { name: "Bamboo Bikes Chiang Mai", area: "Old City", note: "Pequena, atendimento pessoal, contrato claro, sem golpe de caução. Famoso pelo pós-venda — atende WhatsApp em viagem.", price: "180–350 THB/dia", maps: "https://maps.google.com/?q=Bamboo+Bikes+Chiang+Mai" },
      { name: "Mango Bikes Rent", area: "Santitham", note: "Boa para mensal, motos revisadas, aceita caução em dinheiro. Desconto progressivo a partir de 7 dias.", price: "150–500 THB/dia", maps: "https://maps.google.com/?q=Mango+Bikes+Rent+Chiang+Mai" },
    ],
  },
  {
    city: "Pai",
    intro: "Pequena, mas com armadilhas. Evite locadoras de calçada sem placa — são as que mais inventam danos na devolução. Estradas até Pai matam turistas todo ano: respeite as 762 curvas.",
    shops: [
      { name: "Aya Service Pai", area: "Walking Street", note: "Maior operadora do norte, contrato padronizado, seguro disponível. Aceita devolução em Chiang Mai (one-way) por taxa adicional. Frota homogênea (Honda Click/Scoopy).", price: "150–300 THB/dia", maps: "https://maps.google.com/?q=Aya+Service+Pai" },
      { name: "North Wheels Pai", area: "Centro", note: "Filial da rede de Chiang Mai. Manutenção decente, sem reter passaporte. Boa opção para escapar do bottleneck da Aya em alta temporada.", price: "180–350 THB/dia", maps: "https://maps.google.com/?q=North+Wheels+Pai" },
    ],
  },
  {
    city: "Phuket",
    intro: "Onde mais ocorrem golpes da Tailândia. Fuja das barracas de calçada em Patong e Karon — preço baixo, caução em passaporte, dano forjado garantido. Prefira locadoras que entregam no hotel.",
    shops: [
      { name: "Phuket Garage", area: "Chalong / entrega no hotel", note: "Especialista em adventure bikes (CRF, Versys, X-ADV). Sem passaporte como caução, seguro estendido, permite cruzar fronteira para Malásia. Ótimo para road trips de várias semanas.", price: "1.200–2.500 THB/dia", maps: "https://maps.google.com/?q=Phuket+Garage" },
      { name: "PMR – Phuket Motorbike Rental", area: "Múltiplos pontos", note: "Pagamento seguro online (cartão internacional), entrega em qualquer praia, contrato em inglês. Boa para scooter. Tem app de rastreio da moto.", price: "200–500 THB/dia", maps: "https://maps.google.com/?q=Phuket+Motorbike+Rental+PMR" },
      { name: "Phuket And You", area: "Rawai / entrega ilha toda", note: "Sem caução em passaporte, seguro incluso, atendimento em inglês/francês. Suporte estrada 24h — chamam guincho se quebrar.", price: "250–550 THB/dia", maps: "https://maps.google.com/?q=Phuket+And+You+Scooter+Rental" },
    ],
  },
  {
    city: "Koh Samui",
    intro: "Ilha grande, trechos com curva e areia. Capacete e seguro são inegociáveis. A descida do Lamai e a subida do Lad Koh derrubam turista todo dia.",
    shops: [
      { name: "TOH Motorbike Rental", area: "Chaweng", note: "Sem passaporte como caução, entrega gratuita no hotel da ilha, motos novas. Top reviews em Chaweng. Fornece dois capacetes por moto sem cobrar.", price: "200–400 THB/dia", maps: "https://maps.google.com/?q=TOH+Motorbike+Rental+Koh+Samui" },
      { name: "Mr. Ung's Magical Safari Rentals", area: "Bophut", note: "Tradicional, contrato claro, aceita cópia + caução em dinheiro. Combo moto + tour para o interior se quiser guia.", price: "180–350 THB/dia", maps: "https://maps.google.com/?q=Mr+Ung+Magical+Safari+Koh+Samui" },
    ],
  },
  {
    city: "Krabi / Ao Nang",
    intro: "Use para deslocamentos curtos entre praias. Evite estrada à noite por causa de macacos e elefantes que cruzam, principalmente na estrada para Tiger Cave Temple.",
    shops: [
      { name: "MotoKrabi", area: "Ao Nang", note: "Frota grande, desconto semanal, contrato em inglês, sem reter passaporte. Têm scooters automáticas pequenas (110cc) ideais para iniciantes.", price: "150–300 THB/dia", maps: "https://maps.google.com/?q=MotoKrabi+Ao+Nang" },
      { name: "Krabi Bike Rent", area: "Centro de Krabi Town", note: "Boa para mensal, manutenção em dia. Aceita reserva online com pagamento na retirada.", price: "150–250 THB/dia", maps: "https://maps.google.com/?q=Krabi+Bike+Rent" },
    ],
  },
  {
    city: "Bangkok",
    intro: "Não recomendado para turista comum. Trânsito agressivo, mão inglesa, sem espaço para erro. Use BTS/MRT/Grab. Se ainda quiser, alugue só para sair da cidade.",
    shops: [
      { name: "BigBikeBangkok", area: "Sukhumvit", note: "Especializada em motos grandes para quem vai sair da capital rumo a Khao Yai, Pattaya ou Hua Hin. Contrato profissional, seguro internacional.", price: "1.000–3.000 THB/dia", maps: "https://maps.google.com/?q=BigBikeBangkok" },
      { name: "Bangkok Motorbike Rental", area: "Asok / Phrom Phong", note: "Scooter para deslocamento, aceita cópia do passaporte. Entrega em hotel da região central sem cobrar.", price: "250–500 THB/dia", maps: "https://maps.google.com/?q=Bangkok+Motorbike+Rental" },
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
            O guia que te protege de golpes, multa, caução abusiva e perrengue na estrada — com a lista das locadoras mais bem avaliadas do país, protocolo anti-golpe, checklists e os 5 bônus prometidos.
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
          "Tem CNH válida categoria A (moto) — não vale CNH só de carro",
          "Já pilotou regularmente nos últimos 12 meses no Brasil",
          "Vai levar PID (Permissão Internacional para Dirigir) válida",
          "Usa capacete sempre, inclusive no trecho de 500 m",
          "Não bebe nem uma cerveja antes de pilotar",
          "Tem seguro viagem que cobre moto explicitamente",
          "Está confortável (ou disposto a aprender devagar) com mão inglesa",
          "Aceita gastar 20–30 min na vistoria e gravar vídeo da entrega",
          "Sabe dizer 'não' para locadora ruim e ir embora",
        ]} />
        <p className="pt-2"><strong className="text-foreground">Não alugue se:</strong> você nunca pilotou, não tem CNH de moto, não tem PID, não tem seguro adequado, está cansado de voo longo, vai dirigir à noite, está com criança pequena, pretende beber, ou está com pressa para resolver tudo no mesmo dia da chegada. Use Grab, Bolt, táxi medidor, tuk-tuk negociado por foto do preço, songthaew (caminhonete coletiva) ou BTS/MRT em Bangkok.</p>
        <Card className="border-primary/30 bg-primary/5">
          <p className="text-foreground text-sm"><strong>Regra dos 3 dias:</strong> nunca alugue moto no primeiro dia da viagem. Use transporte público, observe o trânsito, entenda a mão inglesa de carona, e só depois decida.</p>
        </Card>
      </Section>

      <Section n="2" title="Documentos obrigatórios">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card><h4 className="text-foreground font-semibold mb-2">Passaporte</h4><p className="text-sm">Leve sempre, mas <strong>nunca</strong> deixe o original com a locadora. Tenha 2 cópias impressas separadas da mochila.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">CNH brasileira</h4><p className="text-sm">Válida e com categoria A (moto). CNH só de carro não resolve, mesmo para scooter automática.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">PID</h4><p className="text-sm">Permissão Internacional para Dirigir. Funciona como tradução oficial da CNH. Não substitui — anda junto. Validade 1 ano.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Seguro viagem</h4><p className="text-sm">Leia a apólice. Muitos excluem moto, scooter acima de 125cc, ou exigem PID. Confirme antes de alugar.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Contrato de aluguel</h4><p className="text-sm">Sempre em inglês, com placa, modelo, valor, caução, nível de combustível e horário de devolução. Sem contrato, não saia.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Recibo da caução</h4><p className="text-sm">Com data, valor, nome, assinatura e carimbo. "Não precisa recibo" é o início do golpe.</p></Card>
        </div>
      </Section>

      <Section n="3" title="Como tirar a PID antes da viagem">
        <p>A PID é emitida pelo Detran do seu estado. Passo a passo:</p>
        <Bul items={[
          "Entre no site do Detran do seu estado",
          "Procure 'Permissão Internacional para Dirigir' ou 'PID'",
          "Confira validade da CNH (deve estar dentro do prazo) e categoria A",
          "Solicite a emissão e pague a taxa (entre R$ 200 e R$ 300, varia por estado)",
          "Aguarde entrega (5 a 15 dias úteis) ou retire pessoalmente",
          "Leve a PID física na viagem — cópia digital não basta em blitz",
        ]} />
        <p>Peça com <strong className="text-foreground">15 a 30 dias de antecedência</strong>. Sem PID, você arrisca multa de 500–2.000 THB, problema em blitz e negativa de seguro em caso de acidente.</p>
        <Card>
          <h4 className="text-foreground font-semibold mb-2">Diferença CNH x PID</h4>
          <p className="text-sm">A CNH brasileira é o documento de habilitação. A PID é a tradução oficial dela para 9 idiomas, baseada na Convenção de Viena. A Tailândia aceita PID emitida no Brasil sem necessidade de tradução juramentada ou apostila.</p>
        </Card>
      </Section>

      <Section n="4" title="O maior erro: entregar passaporte como caução">
        <p>O golpe clássico:</p>
        <Bul items={[
          "Você entrega o passaporte",
          "Sai com a moto, anda tranquilo",
          "Na devolução, a locadora aponta arranhão antigo",
          "Cobra valor abusivo (5.000–25.000 THB)",
          "Você quer ir embora — mas eles estão com seu passaporte",
          "Sem passaporte, sem voo, sem hotel, sem hospital. Você paga.",
        ]} />
        <Card className="border-primary/40 bg-primary/5">
          <p className="text-foreground"><strong>Regra de ouro:</strong> passaporte original nunca fica com locadora. Aceite só: mostrar, deixar cópia impressa, caução em dinheiro com recibo e contrato claro. Se insistirem no original, agradeça e vá embora. Existem 5 locadoras boas em cada cidade — você nunca depende de uma só.</p>
        </Card>
        <p className="text-sm">Em caso extremo, se for retido com seu passaporte por suposto dano: ligue imediatamente para a <strong className="text-foreground">Polícia Turística — 1155</strong> (atendem em inglês) e para a <strong className="text-foreground">Embaixada do Brasil em Bangkok</strong>: +66 2 256 6023. Documentar o golpe e chamar a polícia geralmente faz a locadora recuar.</p>
      </Section>

      <Section n="5" title="Como funciona a caução">
        <p>Antes de aceitar, confirme: valor exato, moeda, forma de pagamento, quando será devolvida, o que pode ser descontado e se há recibo formal.</p>
        <p><strong className="text-foreground">Valores típicos de caução em dinheiro:</strong></p>
        <Bul items={[
          "Scooter pequena (110–125cc): 2.000–4.000 THB",
          "Scooter maior (155cc): 4.000–6.000 THB",
          "Moto manual / adventure: 8.000–20.000 THB",
        ]} />
        <p><strong className="text-foreground">O recibo deve mostrar:</strong> nome da locadora, data, valor, placa/modelo, seu nome, assinatura/carimbo e condição de devolução. "Não precisa recibo" é sinal vermelho — precisa sim. Fotografe o recibo na frente do balconista.</p>
        <Card>
          <h4 className="text-foreground font-semibold mb-2">Pode pagar caução em cartão?</h4>
          <p className="text-sm">Algumas locadoras profissionais (Phuket Garage, PMR) fazem pré-autorização em cartão internacional — é o método mais seguro porque a disputa pode ser contestada com o banco. Evite ATM/transferência local: irrecuperável.</p>
        </Card>
      </Section>

      <Section n="6" title="Protocolo anti-golpe da 'moto arranhada'">
        <ol className="space-y-4 list-decimal pl-6">
          <li><strong className="text-foreground">Chegue sem pressa.</strong> Quem tem pressa aceita qualquer coisa. Reserve uma manhã inteira só para alugar.</li>
          <li><strong className="text-foreground">Combine tudo antes:</strong> preço/dia, caução, documentos exigidos, seguro incluso, horário exato de devolução, política de combustível (devolve com tanque cheio ou no nível que pegou), multa por atraso, regra de dano e o que conta como dano cobrável.</li>
          <li><strong className="text-foreground">Recuse passaporte original.</strong> Frase pronta: <em>"I don't leave my original passport as deposit. I can leave a passport copy and a cash deposit."</em></li>
          <li><strong className="text-foreground">Peça contrato</strong> com valor, caução, placa, modelo, combustível e contato da locadora. Sem contrato, sem aluguel.</li>
          <li><strong className="text-foreground">Grave vídeo contínuo</strong> da moto inteira antes de ligar (mínimo 3 minutos). Fale em voz alta a data e o local: <em>"Today is [date], rental inspection at [shop name] before leaving. Existing scratches here."</em> e aponte cada marca com o dedo.</li>
          <li><strong className="text-foreground">Grave o funcionário confirmando</strong> os arranhões antigos: <em>"This scratch was already here, correct?"</em> com a pessoa visível no vídeo.</li>
          <li><strong className="text-foreground">Tire fotos</strong> em alta resolução de: contrato (todas as páginas), placa, painel ligado, nível de combustível, capacete por dentro, pneus (perfil + sulco), assento, espelhos e do dinheiro da caução antes de entregar.</li>
          <li><strong className="text-foreground">Suba tudo para a nuvem</strong> imediatamente: WhatsApp para você mesmo, Google Drive, iCloud, e-mail. Conte com perder o celular.</li>
          <li><strong className="text-foreground">Na devolução,</strong> grave novo vídeo nas mesmas condições, peça o balconista para confirmar em vídeo que a moto está nas mesmas condições e só então peça a caução de volta.</li>
        </ol>
      </Section>

      <Section n="7" title="Checklist de vistoria — 12 pontos">
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            ["Freio dianteiro", "Firme. Se afundar mais de 1/3 do curso, peça outra moto."],
            ["Freio traseiro", "Teste devagar antes de sair, deve travar com pressão moderada."],
            ["Pneus", "Sem rachadura, sulco visível (>2mm), calibrados (32 PSI dianteiro / 36 PSI traseiro típico)."],
            ["Farol", "Luz baixa e alta funcionando, lente sem trinca."],
            ["Lanterna traseira e freio", "Acendendo — essencial à noite/chuva."],
            ["Piscas", "Direita e esquerda, dianteiros e traseiros."],
            ["Buzina", "Útil em curvas, ultrapassagens e para espantar cachorro."],
            ["Retrovisores", "Firmes, ajustáveis, não rachados, ambos os lados."],
            ["Acelerador", "Volta sozinho ao soltar, sem ranger."],
            ["Painel", "Velocímetro, combustível, hodômetro e luzes de aviso."],
            ["Capacete", "Fecha bem, trava funciona, sem rachadura, forro limpo."],
            ["Placa e documentos", "Moto com placa visível e documento (livret) da locadora dentro do baú."],
          ].map(([t, d]) => (
            <Card key={t}><h4 className="text-foreground font-semibold mb-1 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" />{t}</h4><p>{d}</p></Card>
          ))}
        </div>
      </Section>

      <Section n="8" title="Quanto custa alugar">
        <Bul items={[
          "Scooter básica (Honda Click 125, Yamaha Mio): 150–350 THB/dia",
          "Scooter nova/confortável (Yamaha NMAX, Honda PCX 160): 250–500 THB/dia",
          "Scooter premium ou maior cilindrada (X-ADV, Forza 350): 500–1.200 THB/dia",
          "Moto manual (Honda CB300, Kawasaki Versys 300): 800–1.800 THB/dia",
          "Adventure (Honda CRF300L, CB500X): 1.200–2.500 THB/dia",
          "Aluguel semanal: ~15% de desconto sobre o diário",
          "Aluguel mensal: 30–50% de desconto sobre o diário (vale muito a pena se ficar 20+ dias)",
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
          <Card><h4 className="text-foreground font-semibold mb-2">Mae Hong Son Loop (5–7 dias)</h4><p className="text-sm">Mais de 1.864 curvas em ~600 km. Não é rota para iniciante. Trajeto sugerido: Chiang Mai → Pai (1 noite) → Mae Hong Son (2 noites) → Khun Yuam → Mae Sariang → Doi Inthanon → Chiang Mai. Abasteça em toda cidade, leve garrafa de gasolina extra entre Khun Yuam e Mae Sariang. Não rode após 17h.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Chiang Mai → Pai (1 dia, ida)</h4><p className="text-sm">762 curvas em ~135 km, 3h30 sem parar. Bonita, mas muito subestimada. Pare em Mok Fa Waterfall (km 50) e Tha Pai Hot Springs. Não faça cansado nem na chuva forte.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Phuket → Phang Nga / Khao Sok (1–2 dias)</h4><p className="text-sm">Estradas maiores, caminhões pesados. Saia cedo (06h–07h), volte antes do anoitecer. Pare em Sarasin Bridge e Bang Pae Waterfall.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Interior de Koh Samui (meio dia)</h4><p className="text-sm">Subidas íngremes (Lad Koh viewpoint) e areia nas curvas. Só se já estiver confortável na ilha — recomendado a partir do 3º dia.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Samui Ring Road (1 dia)</h4><p className="text-sm">~52 km dando a volta na ilha pela 4169. Iniciante consegue, com cautela em Lamai e Maenam.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-2">Krabi → Ao Nang → Tiger Cave → Krabi (meio dia)</h4><p className="text-sm">Loop curto, estrada boa. Atenção aos macacos em Tiger Cave e à curva fechada de Ao Nang ao anoitecer.</p></Card>
        </div>
      </Section>

      <Section n="11" title="Segurança real na pilotagem">
        <Bul items={[
          "Capacete sempre — mesmo no trecho de 200 m até o 7-Eleven",
          "Zero álcool antes de pilotar (lei tailandesa: 0,5 g/L; seguro: zero)",
          "Pare se a chuva apertar — pista lisa derruba em segundos",
          "Reduza perto de praia (areia no asfalto derruba em curva)",
          "Cuidado com cachorro em vilarejos — buzine de longe",
          "Mantenha distância de 4s de outros turistas de scooter",
          "Não pilote à noite — buracos, animais, motoristas alcoolizados, falta de iluminação",
          "Use roupa fechada — short e chinelo viram crônica de pele em queda banal",
          "Tenha sempre 50% de bateria no celular (GPS, emergência)",
          "Saiba reconhecer o som do motor — qualquer ruído novo, pare e cheque",
        ]} />
      </Section>

      <Section n="12" title="Combustível, postos e autonomia">
        <p className="flex items-start gap-2"><Fuel className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Scooters tailandesas usam <strong className="text-foreground">Gasohol 91</strong> ou <strong className="text-foreground">Gasohol 95</strong> (etanol misturado). Motos importadas grandes pedem <strong className="text-foreground">Benzine 95</strong> (mais cara). Confirme com o locador.</p>
        <Bul items={[
          "Preço típico: 38–42 THB/litro Gasohol 91; 42–46 THB/litro Gasohol 95",
          "Autonomia média scooter 125cc: 40–45 km/litro = ~250 km com tanque cheio (5,5 L)",
          "PTT, Bangchak, Shell e Esso são as redes confiáveis — preço fixo na bomba",
          "Tem postos pequenos de garrafa em estrada rural (gasolina em garrafa de Coca, 50 THB/garrafa) — use só em emergência",
          "Em Mae Hong Son, abasteça em toda cidade — pode rodar 80+ km sem posto",
        ]} />
        <Card>
          <p className="text-foreground font-semibold mb-1 flex items-center gap-2"><Calculator className="w-4 h-4 text-primary" />Calculadora rápida de gasolina</p>
          <p className="text-sm">Distância (km) ÷ 42 km/L × 40 THB ≈ custo total. Exemplo: Mae Hong Son Loop completo (~600 km) = 600 ÷ 42 × 40 ≈ <strong className="text-foreground">570 THB ≈ R$ 100</strong> de gasolina para 5 dias.</p>
        </Card>
      </Section>

      <Section n="13" title="Estacionamento — onde deixar a moto">
        <p className="flex items-start gap-2"><ParkingCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Estacionar errado em Tailândia é multa rápida (e às vezes guincho).</p>
        <Bul items={[
          "Linha amarela contínua no meio-fio: proibido (multa 500–1.000 THB)",
          "Linha branca: permitido",
          "Linha vermelha/branca: parada apenas para embarque/desembarque",
          "Templos: estacionamento gratuito, mas guarde o ticket",
          "Shopping (Central, Terminal 21, Big C): grátis nas primeiras 2–3h, depois 20 THB/h",
          "Hotel: sempre pergunte se o estacionamento é coberto e tem câmera",
          "Trave a moto com cadeado U-lock + corrente — furto de scooter existe em Patong e Pattaya",
          "Tire o painel de chave e leve com você se sair por horas",
        ]} />
      </Section>

      <Section n="14" title="Levando a moto em ferry (entre ilhas)">
        <p className="flex items-start gap-2"><Ship className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> A maioria das locadoras <strong className="text-foreground">proíbe</strong> levar a moto para outra ilha sem aviso prévio. Quando permitem, há sobretaxa de seguro.</p>
        <Bul items={[
          "Phuket → Koh Yao Noi/Yai: car ferry sai de Bang Rong (~200 THB com moto)",
          "Krabi → Koh Lanta: car ferry de Hua Hin Pier (~150 THB com moto)",
          "Surat Thani → Koh Samui: Raja Ferry e Seatran aceitam motos (~250–400 THB)",
          "Koh Samui → Koh Phangan: Lomprayah e Raja com moto (~200 THB), travessia 30min",
          "Confirme por escrito com a locadora ANTES — sair sem autorização anula o seguro",
          "Amarre bem a moto no convés; em ressaca elas caem e o dano é seu",
        ]} />
      </Section>

      <Section n="15" title="Blitz: o que fazer">
        <Bul items={[
          "Pare com calma, sem discutir",
          "Tire o capacete se pedirem, mantenha as mãos visíveis",
          "Mostre passaporte (ou cópia), CNH, PID e contrato",
          "Seja educado, sorria, não tente fugir",
          "Não ofereça propina — pode virar caso criminal",
          "Se houver multa, peça recibo oficial (não pague em mão sem papel)",
          "Multas comuns: sem capacete (500 THB), sem PID (1.000 THB), farol apagado de dia (500 THB)",
          "Chame a Polícia Turística (1155, atende inglês) se sentir abuso",
        ]} />
        <p className="text-sm">Frase útil: <em>"Here are my passport copy, Brazilian driving license, International Driving Permit and rental contract."</em></p>
      </Section>

      <Section n="16" title="Acidente: o que fazer">
        <Bul items={[
          "Cuide das pessoas primeiro — moto e caução depois",
          "Se for seguro, tire a moto da via. Ferido grave: NÃO mova",
          "Ligue imediatamente: Polícia Turística 1155 · Emergência policial 191 · Ambulância 1669 · Bombeiros 199",
          "Avise a locadora com localização (mande pin do Google Maps) e fotos",
          "Acione o seguro com apólice, documentos e fotos no mesmo dia",
          "Documente tudo: local, danos, recibos, contato de testemunhas, dados da outra parte se houver",
          "NUNCA assuma culpa no local — espere o boletim policial",
          "Hospitais privados recomendados para turistas: Bangkok Hospital (várias cidades), Bumrungrad (Bangkok), Bangkok Hospital Phuket, Samui International Hospital",
        ]} />
      </Section>

      <Section n="17" title="Apps indispensáveis na estrada">
        <p className="flex items-start gap-2"><Smartphone className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Antes de retirar a moto, instale:</p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Card><h4 className="text-foreground font-semibold mb-1">Google Maps</h4><p>Baixe o mapa offline da região inteira antes de sair.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Maps.me ou Organic Maps</h4><p>Funciona 100% offline, mostra trilhas que o Google omite.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Grab / Bolt</h4><p>Plano B se a moto quebrar.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Windy / Meteo</h4><p>Previsão de chuva hora a hora — vital no Norte.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Google Translate</h4><p>Baixe pacote de tailandês offline + modo câmera.</p></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Airalo / eSIM</h4><p>Internet móvel desde o aeroporto — não dependa do WiFi do hostel.</p></Card>
        </div>
      </Section>

      <Section n="18" title="Seguro viagem — o que checar antes de comprar">
        <p className="flex items-start gap-2"><HeartPulse className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> Seguros comuns NÃO cobrem moto. Antes de comprar, exija que a apólice tenha:</p>
        <Bul items={[
          "Cobertura explícita para condução de motocicleta (motorcycle/moped coverage)",
          "Sem limite de cilindrada (ou no mínimo até 250cc)",
          "Exigência de PID — quase todas exigem; sem PID, sem cobertura",
          "Cobertura médica mínima de USD 100.000 (acidente de moto custa caro)",
          "Repatriação médica e traslado de corpo (USD 50.000+)",
          "Telefone 24h em português ou inglês",
        ]} />
        <p className="text-sm">Seguradoras que historicamente cobrem moto com PID: <strong className="text-foreground">World Nomads (Explorer plan), SafetyWings (Nomad Insurance), Heymondo (cobertura adicional)</strong>. Sempre releia a apólice — políticas mudam.</p>
      </Section>

      <Section n="19" title="O que levar na moto todos os dias">
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <Card><h4 className="text-foreground font-semibold mb-1">Documentos</h4><Bul items={["Cópia do passaporte", "CNH + PID", "Contrato da locadora", "Cartão do seguro"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Roupa/proteção</h4><Bul items={["Capa de chuva", "Óculos escuros (vento + sol)", "Luvas finas (queda)", "Bandana para boca/nariz"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Tecnologia</h4><Bul items={["Suporte de celular na moto", "Power bank carregado", "Carregador USB de moto (se a moto tiver tomada)", "eSIM ativo"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-1">Emergência</h4><Bul items={["Mini kit de primeiros socorros", "Água 500ml", "Lanche (banana, snack)", "Garrafa pequena de gasolina (estrada rural)"]} /></Card>
        </div>
      </Section>

      <Section n="20" title="Scripts prontos (português → inglês → tailandês)">
        <div className="space-y-3 text-sm">
          <Card><p className="text-foreground font-semibold mb-1">Na locadora — recusar passaporte</p><p><em>"I don't leave my original passport as deposit. I can leave a passport copy and a cash deposit."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Vistoria — confirmar dano antigo</p><p><em>"This scratch was already here before rental, correct? Please confirm on camera."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Devolução</p><p><em>"Can you check the motorbike and confirm everything is okay? Please return my deposit now."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Posto</p><p><em>"100 baht gasoline, please."</em> · <em>"Full tank Gasohol 95, please."</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Pedindo direção</p><p><em>"Excuse me, how to go to [place]?"</em> · Mostre o nome no Google Maps em tailandês.</p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Mecânico</p><p>Freio ruim: <em>brek mai dee</em> · Moto não liga: <em>rot motosai start mai tit</em> · Pneu furado: <em>yang taek</em></p></Card>
          <Card><p className="text-foreground font-semibold mb-1">Cortesia</p><p>Obrigado: <em>khop khun khrap</em> (homem) / <em>khop khun kha</em> (mulher) · Desculpe: <em>khor toht</em> · Sim/Não: <em>chai / mai chai</em></p></Card>
        </div>
      </Section>

      <Section n="21" title="Mecânicos confiáveis (caso quebre na estrada)">
        <Bul items={[
          "Chiang Mai — Joe's Bike Team (Old City): mecânico que atende turista, fala inglês",
          "Pai — Aya Service tem oficina própria (chame primeiro a locadora se foi com eles)",
          "Phuket — Phuket Garage: oficina e suporte estrada para clientes",
          "Koh Samui — Mr. Ung's: trocam pneu e fazem reparo simples para clientes",
          "Em vilarejo sem oficina: procure por 'รถจักรยานยนต์' (rot motosai) — geralmente há um mecânico em cada vila",
          "Sempre ligue para a locadora primeiro — quebra mecânica costuma ser responsabilidade dela",
        ]} />
      </Section>

      <Section n="22" title="Tempo, monção e quando NÃO andar">
        <p className="flex items-start gap-2"><Cloud className="w-5 h-5 text-primary mt-1 flex-shrink-0" /> A Tailândia tem duas estações de chuva, dependendo da costa:</p>
        <Bul items={[
          "Norte (Chiang Mai, Pai, Mae Hong Son): chuva forte de jun–out, melhor janela nov–fev",
          "Costa Andamã (Phuket, Krabi, Phi Phi): chuva mai–out, melhor janela dez–mar",
          "Golfo (Koh Samui, Phangan, Tao): chuva out–dez, melhor janela fev–set",
          "Estação queimada do Norte (mar–abr): visibilidade baixa por fogo agrícola, ar péssimo",
          "Songkran (13–15 abr): NÃO ande de moto, ruas viram guerra de água",
        ]} />
        <p className="text-sm">Regra simples: se está chovendo forte, pare em qualquer cafeteria 7-Eleven e espere 30 min. Chuva tropical passa rápido.</p>
      </Section>

      <Section n="23" title="Checklist final antes de sair">
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-primary" />Documentos</h4><Bul items={["CNH válida", "PID válida", "Passaporte", "Seguro conferido", "Contrato e contato da locadora"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-primary" />Locadora</h4><Bul items={["Não retém passaporte original", "Aceita cópia + caução em dinheiro", "Entrega recibo e contrato", "Não pressiona"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><Wrench className="w-4 h-4 text-primary" />Moto</h4><Bul items={["Freios firmes", "Pneus bons", "Farol/lanterna/piscas/buzina ok", "Capacete decente", "Painel funcionando"]} /></Card>
          <Card><h4 className="text-foreground font-semibold mb-2 flex items-center gap-2"><Camera className="w-4 h-4 text-primary" />Provas</h4><Bul items={["Vídeo completo gravado", "Fotos dos danos antigos", "Foto do contrato e caução", "Tudo na nuvem"]} /></Card>
        </div>
      </Section>

      <Section n="24" title="Como decidir se vale a pena">
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

      {/* BÔNUS */}
      <section className="py-16 px-6 bg-gradient-to-b from-background via-primary/5 to-background border-b border-border/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 text-primary text-sm mb-4"><Gift className="w-4 h-4" /> Bônus incluídos</span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">Seus bônus do guia</h2>
            <p className="text-muted-foreground">Conteúdo extra que acompanha sua compra.</p>
          </div>

          <div className="space-y-5">
            <Card>
              <h3 className="font-display text-xl text-foreground mb-2 flex items-center gap-2"><Languages className="w-5 h-5 text-primary" />Bônus 1 — Scripts em tailandês</h3>
              <p className="text-sm">Frases prontas para gasolineiro, polícia, mecânico, locadora e emergência — já incluídas no Capítulo 20 deste guia. Salve a página offline ou imprima.</p>
            </Card>

            <Card>
              <h3 className="font-display text-xl text-foreground mb-2 flex items-center gap-2"><Calculator className="w-5 h-5 text-primary" />Bônus 2 — Calculadora de combustível</h3>
              <p className="text-sm mb-2">Fórmula rápida: <strong className="text-foreground">km da rota ÷ 42 km/L × 40 THB ≈ custo em baht</strong>. Para reais, multiplique por ~0,18.</p>
              <p className="text-sm">Exemplos reais já calculados:</p>
              <Bul items={[
                "Mae Hong Son Loop (600 km): ~570 THB ≈ R$ 105",
                "Chiang Mai → Pai ida e volta (270 km): ~260 THB ≈ R$ 47",
                "Samui Ring Road (52 km): ~50 THB ≈ R$ 9",
                "Phuket → Phang Nga ida e volta (180 km): ~170 THB ≈ R$ 31",
              ]} />
            </Card>

            <Card>
              <h3 className="font-display text-xl text-foreground mb-2 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" />Bônus 3 — Checklist de vistoria 12 pontos</h3>
              <p className="text-sm">Passo a passo que torna o golpe da "moto arranhada" impossível — completo no <strong className="text-foreground">Capítulo 7</strong>. Use na hora da retirada e grave em vídeo cada item.</p>
            </Card>

            <Card>
              <h3 className="font-display text-xl text-foreground mb-2 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-primary" />Bônus 4 — Protocolo anti-golpe da caução</h3>
              <p className="text-sm">Vídeo de entrega, o que assinar, o que NÃO entregar e o que fotografar — combinado nos <strong className="text-foreground">Capítulos 4, 5 e 6</strong>. Caução em dinheiro com recibo, passaporte nunca fica.</p>
            </Card>

            <Card>
              <h3 className="font-display text-xl text-foreground mb-2 flex items-center gap-2"><Smartphone className="w-5 h-5 text-primary" />Bônus 5 — Lista de apps offline indispensáveis</h3>
              <p className="text-sm">Navegação (Google Maps + Maps.me/Organic), tradução (Google Translate offline), postos (PTT/Bangchak) e emergência — lista completa no <strong className="text-foreground">Capítulo 17</strong>. Baixe antes de pegar a estrada.</p>
            </Card>
          </div>

          <Card className="mt-8 border-primary/40 bg-primary/5">
            <p className="text-sm text-foreground flex items-start gap-2"><Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span><strong>Atualizações vitalícias:</strong> esta página recebe revisões sempre que mudarem políticas de locadora, leis de trânsito ou houver nova rota testada. Volte aqui antes de cada viagem.</span></p>
          </Card>
        </div>
      </section>

      <footer className="py-10 px-6 text-center text-sm text-muted-foreground">
        <p>Guia Tailândia · Conteúdo prático testado em campo · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default AluguelDeMotos827252;

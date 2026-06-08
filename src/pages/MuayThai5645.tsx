import Navbar from "@/components/muaythai5645/Navbar";
import HeroSection from "@/components/muaythai5645/HeroSection";
import GymCard from "@/components/muaythai5645/GymCard";
import { citiesData, stadiumImage } from "@/data/gyms";
import { SEO } from "@/components/SEO";

const MuayThai5645 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Onde treinar Muay Thai na Tailândia — Guia Completo"
        description="Descubra os melhores camps de Muay Thai na Tailândia: Bangkok, Phuket, Chiang Mai e mais. Custos, dicas e roteiros."
        canonicalPath="/muaythai5645"
      />
      <Navbar />
      <HeroSection />

      {/* Chapter 1 - Por que este guia */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 1</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Por que este guia existe</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Vou ser direto: <strong className="text-foreground">a Tailândia tem mais de 3.000 academias de Muay Thai</strong> e a maioria dos turistas acaba em uma que cobra caro, 
              não ensina bem, ou simplesmente não combina com o perfil deles. Eu já treinei em mais de 20 camps em diferentes regiões. Vi de tudo — desde 
              mega-resorts de fitness até galpões suados com campeões do Lumpinee.
            </p>
            <p>
              🎯 <strong className="text-foreground">A promessa deste guia:</strong> Vou te mostrar exatamente onde treinar, quanto vai custar, como chegar, 
              o que esperar e como evitar armadilhas. Sem enrolação, sem marketing. Apenas a verdade de quem já viveu isso.
            </p>
            <p>
              Se você está pensando em treinar Muay Thai na Tailândia — seja por 1 semana, 1 mês ou 1 ano — este guia vai te economizar 
              <strong className="text-foreground"> horas de pesquisa, centenas de dólares e muita frustração</strong>.
            </p>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 2 - Como funciona */}
      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 2</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Como funciona treinar Muay Thai na Tailândia</h2>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-3">A rotina de um camp</h3>
              <p>A maioria dos camps segue uma rotina parecida. <strong className="text-foreground">Dois treinos por dia, 6 dias por semana.</strong> O treino da manhã geralmente começa entre 6h30 e 8h, e o da tarde entre 15h30 e 17h30. Cada sessão dura 1h30 a 2h.</p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-display text-xl text-foreground mb-4">🥊 Rotina típica de treino</h4>
              <div className="space-y-3 text-sm">
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">6h30</span><span>Corrida (3-5km) ou pular corda (15-20min)</span></div>
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">7h00</span><span>Shadow boxing e aquecimento</span></div>
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">7h15</span><span>Pad work com treinador (3-5 rounds)</span></div>
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">7h45</span><span>Bag work (saco de pancada — 3-5 rounds)</span></div>
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">8h15</span><span>Clinch (agarramento — 3-5 rounds)</span></div>
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">8h45</span><span>Abdominais, flexões e alongamento</span></div>
                <div className="flex gap-4"><span className="text-gold font-semibold w-20 flex-shrink-0">15h30</span><span>Sessão da tarde: mesma estrutura</span></div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-3">Tipos de academia</h3>
              <div className="space-y-4">
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="text-foreground font-semibold mb-2">🏟️ Mega-camps (Tiger, Fairtex)</h4>
                  <p className="text-sm">Infraestrutura de resort — piscina, gym, restaurante. Ótimos para iniciantes e quem quer conforto. Turmas grandes, ambiente internacional.</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="text-foreground font-semibold mb-2">🥊 Camps tradicionais (Petchyindee, Sitsongpeenong)</h4>
                  <p className="text-sm">Galpões simples onde lutadores profissionais treinam. Infraestrutura básica, treino intenso, experiência autêntica. Para quem quer o "real deal".</p>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="text-foreground font-semibold mb-2">🏠 Camps médios (Sinbi, Lanna, Yokkao)</h4>
                  <p className="text-sm">Equilíbrio entre qualidade e autenticidade. Turmas menores, atenção individual, preço justo. Geralmente a melhor escolha para estadias de 2-8 semanas.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-display text-xl text-foreground mb-3">⚠️ NÃO precisa ter experiência</h4>
              <p className="text-sm">A grande maioria dos camps aceita iniciantes absolutos. Você não precisa saber nada de Muay Thai para começar. Os treinadores estão acostumados a ensinar do zero. <strong className="text-foreground">Só precisa de disposição e uma condição física razoável.</strong></p>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-3">O que levar para o treino</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="text-foreground font-semibold mb-2">🎒 Essencial</h4>
                  <ul className="text-sm space-y-1.5">
                    <li>• Shorts de Muay Thai ou esportivos</li>
                    <li>• Camiseta leve (ou sem camiseta)</li>
                    <li>• Bandagens para as mãos (hand wraps)</li>
                    <li>• Luvas de boxe (14-16oz)</li>
                    <li>• Caneleiras</li>
                    <li>• Protetor bucal</li>
                    <li>• Garrafa d'água grande (1L+)</li>
                    <li>• Toalha</li>
                  </ul>
                </div>
                <div className="bg-card rounded-lg p-5 border border-border">
                  <h4 className="text-foreground font-semibold mb-2">💡 Dicas</h4>
                  <ul className="text-sm space-y-1.5">
                    <li>• <strong className="text-foreground">Compre equipamento na Tailândia</strong> — é 50-70% mais barato</li>
                    <li>• Na Soi Ta-iad (Phuket) tem dezenas de lojas</li>
                    <li>• Em Bangkok: Yokkao, Fairtex e MBK Center</li>
                    <li>• Luvas boas: Fairtex, Twins, Yokkao (~1.500-2.500 THB)</li>
                    <li>• Shorts autênticos: 300-600 THB</li>
                    <li>• Caneleiras: 800-1.500 THB</li>
                    <li>• <strong className="text-foreground">Leve protetor solar e repelente!</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 3 - Como escolher */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 3</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Como escolher a academia certa</h2>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-display text-xl text-foreground mb-4">✅ Sinais de um bom camp</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Treinadores tailandeses com experiência em estádios (Lumpinee, Rajadamnern)</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Pad work individualizado (treinador segura pads pra você)</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Pelo menos 2 sessões por dia, 6x/semana</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Reviews positivos recentes no Google e YouTube</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Separação de níveis (iniciante / intermediário / avançado)</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Ring de tamanho regulamentar</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Equipamentos em bom estado</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-display text-xl text-foreground mb-4">🚩 Red Flags — FUJA desses lugares</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> Treinadores que não falam nome de golpes em tailandês</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> Sem pad work individual — só aulas em grupo com saco</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> Preço muito baixo (menos de 200 THB/sessão = desconfie)</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> Nenhum lutador tailandês treinando no local</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> "Muay Thai + jet ski + elephant tour" em pacote combo</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> Sem ring ou com ring improvisado</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">•</span> Contratos longos com pagamento antecipado obrigatório</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 4 - Academias */}
      <section id="academias" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 4</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">As Melhores Academias por Cidade</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            27 academias em 9 cidades, avaliadas com base em qualidade dos treinadores, infraestrutura, custo-benefício e experiência para estrangeiros. 3 opções por cidade com preços, detalhes e reviews reais.
          </p>

          {citiesData.map((cityGroup) => (
            <div key={cityGroup.city} className="mb-16" id={`city-${cityGroup.city.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="mb-8 pb-4 border-b border-border">
                <h3 className="font-display text-3xl sm:text-4xl text-foreground flex items-center gap-3">
                  <span className="text-4xl">{cityGroup.emoji}</span>
                  {cityGroup.city}
                </h3>
                <p className="text-muted-foreground mt-2 max-w-2xl text-sm">{cityGroup.description}</p>
              </div>
              <div className="space-y-12">
                {cityGroup.gyms.map((gym) => (
                  <GymCard key={`${cityGroup.city}-${gym.rank}`} gym={gym} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 5 - Estádios */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 5</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Assista a lutas ao vivo</h2>
          
          <img src={stadiumImage} alt="Luta de Muay Thai em estádio na Tailândia" className="w-full rounded-lg mb-8 object-cover h-64" loading="lazy" width={800} height={600} />

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Assistir Muay Thai ao vivo é obrigatório.</strong> A energia dos estádios é incomparável — a música ao vivo (Pi mandal), as apostas, 
              os gritos da torcida. É uma experiência cultural que vai muito além do esporte.
            </p>

            <div className="space-y-4">
              {[
                { name: "🏟️ Rajadamnern Stadium — Bangkok", desc: "O estádio mais antigo e prestigiado da Tailândia. Recentemente renovado com ar-condicionado e assentos confortáveis.", days: "Qui e Dom (principais)", price: "1.000–2.000 THB (~R$ 160–320)", time: "18h30 às 23h", how: "BTS Ratchadamri + 10min a pé" },
                { name: "🏟️ Lumpinee Stadium — Bangkok", desc: "O outro templo sagrado do Muay Thai. Localizado em Ram Intra. Lutas de nível altíssimo.", days: "Ter e Sex (principais)", price: "1.500–3.000 THB (~R$ 240–480)", time: "18h às 23h", how: "Grab ~200 THB do centro" },
                { name: "🏟️ Bangla Boxing Stadium — Phuket", desc: "O principal estádio de Phuket, no coração de Patong. Lutas toda semana com lutadores locais e internacionais.", days: "Qua e Sex", price: "1.500–1.800 THB (~R$ 240–288)", time: "21h às 00h", how: "Na Bangla Road, Patong" },
              ].map((stadium, i) => (
                <div key={i} className="bg-card rounded-lg p-6 border border-border">
                  <h4 className="font-display text-xl text-foreground mb-2">{stadium.name}</h4>
                  <p className="text-sm mb-3">{stadium.desc}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="guide-info-label">Dias</span><div className="guide-info-value">{stadium.days}</div></div>
                    <div><span className="guide-info-label">Preço</span><div className="guide-info-value">{stadium.price}</div></div>
                    <div><span className="guide-info-label">Horário</span><div className="guide-info-value">{stadium.time}</div></div>
                    <div><span className="guide-info-label">Como chegar</span><div className="guide-info-value">{stadium.how}</div></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h4 className="font-display text-xl text-foreground mb-3">💡 Dicas para assistir lutas</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Compre ingresso online</strong> — filas no local podem ser longas e preço mais caro</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Chegue cedo para pegar bons lugares (as melhores lutas são no final)</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Ringside (1ª fileira) é mais caro mas vale a experiência pelo menos 1x</li>
                <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> Sexta e sábado geralmente têm os melhores cards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 6 - Roteiros */}
      <section id="roteiros" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 6</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-4">Roteiros Prontos</h2>
          <p className="text-muted-foreground mb-12">Roteiros dia a dia, testados e aprovados. Com hospedagem, restaurantes, transporte e preços atualizados.</p>

          {/* Roteiro Phuket */}
          <div className="guide-itinerary-card mb-12">
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-3xl text-foreground mb-2">🥊 Phuket — 2 Semanas de Treino</h3>
              <p className="text-muted-foreground text-sm mb-6">O roteiro mais popular: Tiger ou Sinbi + praias + lutas ao vivo</p>

              <div className="bg-muted rounded-lg p-5 mb-8">
                <h4 className="font-display text-lg text-foreground mb-3">Orçamento Estimado (2 semanas)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div><span className="text-gold font-semibold">💰 Econômico:</span><br/>25.000–35.000 THB<br/>(~R$ 4.000–5.600)</div>
                  <div><span className="text-gold font-semibold">🏨 Moderado:</span><br/>40.000–60.000 THB<br/>(~R$ 6.400–9.600)</div>
                  <div><span className="text-gold font-semibold">✨ Conforto:</span><br/>70.000–120.000 THB<br/>(~R$ 11.200–19.200)</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-display text-xl text-foreground">Onde Se Hospedar</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>💰 <strong className="text-foreground">Econômico:</strong> Airbnb/hostel na Soi Ta-iad — 5.000–10.000 THB/mês (MELHOR OPÇÃO para treino)</li>
                  <li>🏨 <strong className="text-foreground">Moderado:</strong> Hotel/condo em Chalong — 12.000–25.000 THB/mês</li>
                  <li>✨ <strong className="text-foreground">Conforto:</strong> Villa com piscina em Rawai — 25.000–50.000 THB/mês</li>
                </ul>
              </div>

              <h4 className="font-display text-xl text-foreground mb-4">Semana 1</h4>
              <div className="space-y-4 text-sm">
                {[
                  { day: "DIA 1", title: "Chegada + Primeiro Treino", items: [
                    "09:00 — Chegada no aeroporto HKT. Grab até Soi Ta-iad (~500 THB, 30min)",
                    "11:00 — Check-in. Almoço no Clean Eatz ou Phuket Fit Café na Soi Ta-iad (~120 THB)",
                    "13:00 — Comprar equipamento: visitar as lojas da Soi Ta-iad. Luvas, bandagens, shorts (~3.000 THB total)",
                    "15:30 — PRIMEIRO TREINO na Tiger ou Sinbi. Avise que é iniciante — eles vão te guiar",
                    "18:00 — Jantar na Soi Ta-iad: Pad Thai ou Khao Pad (~80 THB)",
                    "20:00 — Descanso. Você vai precisar — amanhã dói TUDO 😅",
                  ]},
                  { day: "DIAS 2-6", title: "Rotina de Treino", items: [
                    "7:00 — Treino da manhã (Muay Thai). 1h30–2h de puro sofrimento prazeroso",
                    "9:30 — Café da manhã no Clean Eatz ou Bliss Café (~100–150 THB)",
                    "10:00–15:00 — DESCANSO (FUNDAMENTAL). Piscina, praia, massagem tailandesa (~300 THB/h), netflix",
                    "15:30 — Treino da tarde. Pad work + clinch + bag work",
                    "18:00 — Jantar + socializar com a galera do camp",
                    "💡 Domingo é dia de folga — aproveite para visitar praias (Kata, Nai Harn, Freedom Beach)",
                  ]},
                  { day: "DIA 7", title: "Dia de Descanso + Explorar", items: [
                    "09:00 — Praia de Kata ou Nai Harn (~20min de scooter de Chalong)",
                    "12:00 — Almoço em Kata: Mom Tri's Kitchen ou The Boathouse (~400 THB)",
                    "14:00 — Big Buddha viewpoint (gratuito, vista incrível)",
                    "17:00 — Promthep Cape para pôr do sol",
                    "19:00 — Jantar em Rawai: frutos do mar no mercado de peixes (~300 THB)",
                  ]},
                ].map((day, i) => (
                  <div key={i} className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="guide-gym-badge text-xs">{day.day}</span>
                      <h5 className="font-display text-lg text-foreground">{day.title}</h5>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {day.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h4 className="font-display text-xl text-foreground mt-8 mb-4">Semana 2</h4>
              <div className="space-y-4 text-sm">
                {[
                  { day: "DIAS 8-12", title: "Treino Avançado", items: [
                    "Mesma rotina, mas agora você já sabe o ritmo. O corpo adaptou (ou quase)",
                    "Experimente aulas de clinch separadas ou aulas particulares (~1.500 THB/h no Tiger)",
                    "Se tiver experiência, peça para fazer sparring (leve, controlado)",
                    "💡 Quarta à noite: assistir lutas no Bangla Boxing Stadium em Patong (~1.500 THB)",
                  ]},
                  { day: "DIA 13", title: "Phi Phi Islands", items: [
                    "06:30 — Speed boat para Phi Phi Islands (~1.500–2.500 THB o tour)",
                    "08:00 — Maya Bay + Pileh Lagoon (snorkeling incrível)",
                    "12:00 — Almoço em Phi Phi Don",
                    "16:00 — Retorno a Phuket",
                    "💡 Reserve no dia anterior na Soi Ta-iad — tem agências em todo lugar",
                  ]},
                  { day: "DIA 14", title: "Último Treino + Despedida", items: [
                    "7:00 — Último treino da manhã — dê tudo de si!",
                    "9:30 — Café da manhã de despedida com a galera",
                    "12:00 — Massagem tailandesa de despedida (~300 THB)",
                    "14:00 — Compras de equipamento e souvenirs",
                    "16:00 — Grab para o aeroporto (~500 THB)",
                  ]},
                ].map((day, i) => (
                  <div key={i} className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="guide-gym-badge text-xs">{day.day}</span>
                      <h5 className="font-display text-lg text-foreground">{day.title}</h5>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {day.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Roteiro Bangkok */}
          <div className="guide-itinerary-card mb-12">
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-3xl text-foreground mb-2">🏙️ Bangkok — 1 Semana Intensiva</h3>
              <p className="text-muted-foreground text-sm mb-6">Treino na capital + estádios + cultura + compras</p>

              <div className="bg-muted rounded-lg p-5 mb-8">
                <h4 className="font-display text-lg text-foreground mb-3">Orçamento Estimado (1 semana)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div><span className="text-gold font-semibold">💰 Econômico:</span><br/>12.000–18.000 THB<br/>(~R$ 1.920–2.880)</div>
                  <div><span className="text-gold font-semibold">🏨 Moderado:</span><br/>20.000–35.000 THB<br/>(~R$ 3.200–5.600)</div>
                  <div><span className="text-gold font-semibold">✨ Conforto:</span><br/>40.000–70.000 THB<br/>(~R$ 6.400–11.200)</div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {[
                  { day: "DIA 1", title: "Chegada + Yokkao", items: ["10:00 — Chegada BKK. Grab para hotel em Sukhumvit (~300 THB)", "12:00 — Check-in. Almoço: street food na Sukhumvit Soi 38 (~60 THB)", "15:30 — Primeiro treino no Yokkao Training Center (BTS On Nut)", "18:00 — Jantar no Terminal 21 food court (~100 THB — melhor custo-benefício de Bangkok!)"] },
                  { day: "DIA 2", title: "Treino + Grand Palace", items: ["7:00 — Treino matinal no Yokkao", "10:00 — Grand Palace + Wat Phra Kaew (500 THB entrada)", "12:00 — Almoço no Tha Tien (perto do Grand Palace) — Pad Thai famoso (~50 THB)", "14:00 — Wat Pho (Buda Deitado) — entrada 200 THB", "16:00 — Treino da tarde"] },
                  { day: "DIA 3-5", title: "Rotina de Treino + Explorar", items: ["Treino 2x/dia no Yokkao ou Petchyindee", "Entre os treinos: Chatuchak Market (sábado/domingo), Chinatown, templos", "💡 Comprar equipamento de Muay Thai: Yokkao Store, MBK Center 5º andar, ou Fairtex Store", "Massagem tailandesa: Wat Pho Traditional Massage (~300 THB/h) ou Health Land (~500 THB/2h)"] },
                  { day: "DIA 6", title: "⭐ Noite no Rajadamnern Stadium", items: ["7:00 — Treino matinal (último treino pesado)", "10:00-16:00 — Descanso e explorar bairros (Ari, Thonglor)", "18:00 — Jantar cedo: Som Tam Nua (melhor som tam de Bangkok, ~100 THB)", "19:00 — RAJADAMNERN STADIUM — lutas ao vivo (~1.500 THB)", "23:00 — Tuk-tuk de volta ao hotel — noite épica!"] },
                  { day: "DIA 7", title: "Último dia + Floating Market", items: ["7:00 — Treino leve de despedida", "10:00 — Damnoen Saduak Floating Market (tour ~800 THB) ou Amphawa (mais autêntico)", "15:00 — Últimas compras: MBK, Siam Paragon ou Chatuchak", "18:00 — Jantar de despedida: Thipsamai (melhor Pad Thai de Bangkok, ~80 THB)", "20:00 — Grab para aeroporto (~300 THB)"] },
                ].map((day, i) => (
                  <div key={i} className="bg-card rounded-lg p-5 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="guide-gym-badge text-xs">{day.day}</span>
                      <h5 className="font-display text-lg text-foreground">{day.title}</h5>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      {day.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Roteiro Chiang Mai */}
          <div className="guide-itinerary-card">
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-3xl text-foreground mb-2">🏔️ Chiang Mai — 1 Mês de Imersão</h3>
              <p className="text-muted-foreground text-sm mb-6">O melhor custo-benefício da Tailândia. Treino + montanhas + cultura Lanna</p>

              <div className="bg-muted rounded-lg p-5 mb-8">
                <h4 className="font-display text-lg text-foreground mb-3">Orçamento Estimado (1 mês)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div><span className="text-gold font-semibold">💰 Econômico:</span><br/>25.000–35.000 THB<br/>(~R$ 4.000–5.600)</div>
                  <div><span className="text-gold font-semibold">🏨 Moderado:</span><br/>40.000–60.000 THB<br/>(~R$ 6.400–9.600)</div>
                  <div><span className="text-gold font-semibold">✨ Conforto:</span><br/>60.000–100.000 THB<br/>(~R$ 9.600–16.000)</div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {[
                  { title: "Rotina Semanal Sugerida", items: ["Seg-Sáb: Treino 2x/dia no Lanna Muay Thai (7:30 e 16:00)", "Entre os treinos: Café no Ristr8to (melhor latte art do mundo!), almoço no Khao Soi Mae Sai (~60 THB), descanso", "Domingo: Explorar Chiang Mai — templos, mercados, montanhas"] },
                  { title: "O que fazer nos domingos", items: ["🏔️ Doi Suthep — templo no topo da montanha (vista 360°)", "🛕 Old City — dezenas de templos históricos a pé", "🛒 Sunday Walking Street — maior feira noturna de Chiang Mai", "🌿 Doi Inthanon — ponto mais alto da Tailândia (day trip)", "🍳 Curso de culinária tailandesa (~1.000 THB com mercado incluso)", "🧖 Massagem + spa day (~500 THB por horas de relaxamento)"] },
                  { title: "Onde Se Hospedar", items: ["💰 Econômico: Quartos no camp (3.500 THB/mês) ou hostel na Old City (5.000 THB/mês)", "🏨 Moderado: Condo em Nimmanhaemin — 8.000–15.000 THB/mês (área moderna e cool)", "✨ Conforto: Serviced apartment — 15.000–25.000 THB/mês"] },
                  { title: "Onde Comer em Chiang Mai", items: ["🍜 Khao Soi Mae Sai — melhor Khao Soi (~60 THB)", "🍗 SP Chicken — frango grelhado lendário (~80 THB)", "🥘 Huen Phen — comida Lanna autêntica (~150 THB)", "☕ Ristr8to — melhor café da cidade", "🥗 Salad Concept — opção saudável pós-treino (~150 THB)"] },
                ].map((section, i) => (
                  <div key={i} className="bg-card rounded-lg p-5 border border-border">
                    <h4 className="font-display text-lg text-foreground mb-3">{section.title}</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {section.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 7 - Custos */}
      <section id="custos" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 7</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Quanto custa (transparência total)</h2>

          <div className="overflow-x-auto mb-8">
            <table className="guide-cost-table">
              <thead>
                <tr>
                  <th>Academia</th>
                  <th>Drop-in</th>
                  <th>Mensal</th>
                  <th>Acomodação</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr><td className="text-foreground font-medium">Tiger Muay Thai <span className="text-gold text-xs">(Phuket)</span></td><td>500–700 THB</td><td>12.000–16.000 THB</td><td>6.000–15.000 THB/mês</td></tr>
                <tr><td className="text-foreground font-medium">Sinbi Muay Thai <span className="text-gold text-xs">(Phuket)</span></td><td>400–500 THB</td><td>9.000–12.000 THB</td><td>8.000–18.000 THB (região)</td></tr>
                <tr><td className="text-foreground font-medium">Sumalee Boxing Gym <span className="text-gold text-xs">(Phuket)</span></td><td>500–600 THB</td><td>10.000–14.000 THB</td><td>8.000–15.000 THB/mês</td></tr>
                <tr><td className="text-foreground font-medium">Yokkao Training Center <span className="text-gold text-xs">(Bangkok)</span></td><td>500–600 THB</td><td>10.000–14.000 THB</td><td>6.000–20.000 THB (região)</td></tr>
                <tr><td className="text-foreground font-medium">Petchyindee Academy <span className="text-gold text-xs">(Bangkok)</span></td><td>400–500 THB</td><td>8.000–12.000 THB</td><td>3.000–6.000 THB/mês</td></tr>
                <tr><td className="text-foreground font-medium">Sitsongpeenong <span className="text-gold text-xs">(Bangkok)</span></td><td>350–450 THB</td><td>7.000–10.000 THB</td><td>3.000–5.000 THB/mês</td></tr>
                <tr><td className="text-foreground font-medium">Fairtex Training Center <span className="text-gold text-xs">(Pattaya)</span></td><td>600–800 THB</td><td>15.000–20.000 THB</td><td>12.000–30.000 THB/mês</td></tr>
                <tr><td className="text-foreground font-medium">Lanna Muay Thai <span className="text-gold text-xs">(Chiang Mai)</span></td><td>350–450 THB</td><td>7.000–9.000 THB</td><td>3.500–7.000 THB/mês</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border mb-8">
            <h4 className="font-display text-xl text-foreground mb-4">💰 Custo total estimado por mês (tudo incluso)</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex justify-between border-b border-border pb-2"><span>Treino (mensal)</span><span className="text-foreground font-medium">7.000–20.000 THB</span></div>
              <div className="flex justify-between border-b border-border pb-2"><span>Acomodação</span><span className="text-foreground font-medium">5.000–25.000 THB</span></div>
              <div className="flex justify-between border-b border-border pb-2"><span>Alimentação</span><span className="text-foreground font-medium">6.000–15.000 THB</span></div>
              <div className="flex justify-between border-b border-border pb-2"><span>Transporte</span><span className="text-foreground font-medium">2.000–5.000 THB</span></div>
              <div className="flex justify-between border-b border-border pb-2"><span>Extras (massagens, passeios, equipamento)</span><span className="text-foreground font-medium">3.000–10.000 THB</span></div>
              <div className="flex justify-between pt-2 font-semibold"><span className="text-gold">TOTAL MENSAL</span><span className="text-gold">23.000–75.000 THB (~R$ 3.700–12.000)</span></div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border">
            <h4 className="font-display text-xl text-foreground mb-3">💡 Como economizar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Pacotes mensais</strong> são sempre mais baratos que drop-in</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Chiang Mai</strong> é a cidade mais barata — treino + vida custa metade de Phuket</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Coma como local</strong> — street food custa 40–80 THB/refeição</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Alugue scooter</strong> em vez de Grab (200–300 THB/dia vs 100+ THB por corrida)</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Negocie acomodação</strong> para estadias longas — descontos de 20–40% são comuns</li>
              <li className="flex items-start gap-2"><span className="text-gold mt-0.5">•</span> <strong className="text-foreground">Compre equipamento na Tailândia</strong> — NÃO traga do Brasil (muito mais caro)</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 8 - Erros */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 8</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Erros que todo mundo comete</h2>

          <div className="space-y-6">
            {[
              { error: '"Escolhi a academia pelo Instagram"', desc: "Instagram bonito ≠ bom treino. Muitos camps investem mais em marketing do que em treinadores. Verifique reviews de alunos reais no YouTube e Google." },
              { error: '"Treinei na primeira semana como se fosse morrer"', desc: "O maior erro dos iniciantes. O corpo precisa de 3–5 dias para adaptar ao calor e à intensidade. Nos primeiros dias, faça 1 treino/dia e aumente gradualmente." },
              { error: '"Não trouxe protetor bucal"', desc: "Mesmo que você não vá fazer sparring, acidentes acontecem no treino. Compre um antes de começar (farmácias ou lojas de luta: ~200 THB)." },
              { error: '"Reservei hotel longe do camp"', desc: "Depois de 2h de treino às 7h da manhã, a última coisa que você quer é uma viagem de 40min no trânsito. Fique o mais perto possível — de preferência a pé ou 5min de scooter." },
              { error: '"Não descansei o suficiente"', desc: "Muay Thai 2x/dia, 6 dias/semana é BRUTAL. Descanse entre os treinos. Massagem, piscina, sono — são parte do treino, não luxo." },
              { error: '"Comprei equipamento no Brasil antes de ir"', desc: "Luvas Twins no Brasil: R$ 600. Na Tailândia: R$ 250. Shorts de Muay Thai no Brasil: R$ 150. Na Tailândia: R$ 50. Compre TUDO lá." },
              { error: '"Ignorei o visto"', desc: "Brasileiros têm 90 dias de isenção de visto. Para estadias mais longas, considere o ED Visa (visto de educação) oferecido por alguns camps, que permite ficar até 1 ano." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-display text-xl text-destructive mb-2">❌ Erro: {item.error}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 9 - Dicas avançadas */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 9</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Dicas avançadas (nível expert)</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">🌤️ Melhor época para treinar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Nov–Fev (IDEAL)", desc: "Estação 'fria' (25–30°C). Menos umidade, mais suportável para treinar. Alta temporada turística." },
                  { title: "Mar–Mai (QUENTE)", desc: "35–40°C brutal. Treinar é sofrido mas camps ficam mais vazios. Preços mais baixos." },
                  { title: "Jun–Out (CHUVA)", desc: "Monção — chove forte à tarde. Treino de manhã funciona bem. Melhor preço do ano." },
                ].map((s, i) => (
                  <div key={i} className="bg-card rounded-lg p-5 border border-border">
                    <h4 className="text-foreground font-semibold mb-2">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">📱 Apps essenciais</h3>
              <div className="bg-card rounded-lg p-5 border border-border">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Grab</strong> — Uber da Tailândia. Essencial para transporte (e delivery de comida)</li>
                  <li><strong className="text-foreground">Google Maps</strong> — funciona perfeitamente na Tailândia</li>
                  <li><strong className="text-foreground">LINE</strong> — WhatsApp da Tailândia. Muitos tailandeses usam apenas LINE</li>
                  <li><strong className="text-foreground">Google Translate</strong> — câmera traduz placas em tailandês em tempo real</li>
                  <li><strong className="text-foreground">Agoda</strong> — melhor app para hotéis baratos na Ásia</li>
                  <li><strong className="text-foreground">Bolt</strong> — alternativa ao Grab, às vezes mais barato</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">🩺 Saúde e segurança</h3>
              <div className="bg-card rounded-lg p-5 border border-border">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><strong className="text-foreground">Seguro viagem é OBRIGATÓRIO</strong> — lesões acontecem. Escolha um que cubra esportes de contato (World Nomads, SafetyWing)</li>
                  <li><strong className="text-foreground">Hidratação</strong> — beba 3-4 litros de água por dia. Sério. O calor + treino desidrata MUITO</li>
                  <li><strong className="text-foreground">Eletrólitos</strong> — compre sachês de ORS na farmácia (5 THB cada). Tome 1-2 por dia</li>
                  <li><strong className="text-foreground">Farmácias</strong> — 7-Eleven e Boots têm medicamentos básicos. Para algo mais sério: hospital Bangkok Hospital (todas as cidades)</li>
                  <li><strong className="text-foreground">Lesões comuns</strong> — caneladas, bolhas nos pés, dor muscular intensa nos primeiros dias. Tudo normal</li>
                  <li><strong className="text-foreground">Tiger Balm</strong> — compre o creme vermelho (~60 THB). Milagre para dores musculares</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">🧳 Visto e documentação</h3>
              <div className="bg-card rounded-lg p-5 border border-border space-y-4">
                <div>
                  <h4 className="text-foreground font-semibold mb-2">🇧🇷 Brasileiros: 90 dias sem visto</h4>
                  <p className="text-sm text-muted-foreground">Cidadãos brasileiros têm isenção de visto para a Tailândia por até <strong className="text-foreground">90 dias</strong>. Basta chegar com passaporte válido (mínimo 6 meses de validade) e passagem de volta.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">📚 ED Visa (Education Visa) — para estadias longas</h4>
                  <p className="text-sm text-muted-foreground">O visto de educação permite ficar até <strong className="text-foreground">1 ano</strong> na Tailândia. Ideal para quem quer treinar a sério.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="guide-section-divider" />

      {/* Chapter 10 - Passo a passo final */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="guide-section-label mb-4">Capítulo 10</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-8">Passo a passo para começar</h2>

          <div className="space-y-6">
            {[
              { step: 1, title: "Escolha sua cidade base", desc: "Phuket (mais popular, praias), Bangkok (estádios, cidade grande), Chiang Mai (mais barato, montanhas), Pattaya (Fairtex)" },
              { step: 2, title: "Escolha a academia", desc: "Use os critérios do capítulo 3 e as reviews do capítulo 4. Na dúvida: Tiger (iniciantes), Fairtex (avançados), Lanna (custo-benefício)" },
              { step: 3, title: "Reserve acomodação", desc: "Priorize ficar perto do camp. Airbnb e Agoda são os melhores apps. Para estadias longas, negocie desconto direto." },
              { step: 4, title: "Compre a passagem", desc: "Voos BKK ou HKT. Compare no Google Flights e Skyscanner. Terça e quarta geralmente são mais baratos." },
              { step: 5, title: "Faça seguro viagem", desc: "OBRIGATÓRIO. World Nomads ou SafetyWing. Certifique-se que cobre esportes de contato / martial arts." },
              { step: 6, title: "Chegue e compre equipamento lá", desc: "NÃO traga do Brasil. Compre tudo na Tailândia (50-70% mais barato). Luvas, bandagens, shorts, protetor bucal, caneleiras." },
              { step: 7, title: "Comece devagar", desc: "1 treino/dia nos primeiros 3 dias. Depois aumente para 2. Hidrate-se absurdamente. Descanse entre os treinos." },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 items-start">
                <div className="guide-step-number">{item.step}</div>
                <div>
                  <h4 className="font-display text-xl text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-2xl text-foreground mb-2">🥊 Guia Muay Thai Tailândia</p>
          <p className="text-sm text-muted-foreground mb-6">O guia definitivo para treinar na terra do Muay Thai. Feito com 🔥 por quem já viveu isso.</p>
          <p className="text-xs text-muted-foreground">Todos os direitos reservados. Preços e informações sujeitos a alterações.</p>
        </div>
      </footer>
    </div>
  );
};

export default MuayThai5645;

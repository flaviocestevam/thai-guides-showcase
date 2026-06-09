import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHomeFooter } from "@/components/NavigationButtons";
import { CTAButton } from "@/components/festival/CTAButton";
import { Shield, Zap, RotateCcw, Check, X, MapPin, Hotel, Heart, Clock, CheckCircle2, ShieldCheck, Sun, Palmtree, Utensils, Sparkles, Plane, Camera } from "lucide-react";
import heroImg from "@/assets/trilhas/koh-phangan-bottle-beach.jpg"; // Romantic/Nature placeholder
import imageAfterPain from "@/assets/trilhas/koh-phi-phi.jpg";
import imageBeforePrice from "@/assets/trilhas/krabi-railay-lagoon.jpg";
import imageFinalCTA from "@/assets/trilhas/phi-phi-bamboo.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LINK_PAGAMENTO = "[LINK_DE_PAGAMENTO_LUA_DE_MEL]";

const GuiaLuaDeMel = () => {
  const faqs = [
    { q: "Qual melhor ilha da Tailândia para lua de mel?", a: "Depende do perfil do casal! Koh Lipe é perfeita para romance pé na areia e isolamento. Koh Samui oferece luxo e resorts incríveis. Phi Phi tem cenários icônicos mas pode ser barulhenta se você ficar no lugar errado. No guia, ajudamos você a escolher a ilha ideal." },
    { q: "Quantos dias ficar?", a: "Para uma lua de mel inesquecível e sem correria, recomendamos pelo menos 15 dias. No guia, montamos roteiros de 10, 15 e 20 dias, equilibrando descanso e exploração." },
    { q: "Melhor época para lua de mel?", a: "De novembro a abril é a estação seca na maior parte das ilhas do Mar de Andaman (Phuket, Krabi). No guia, detalhamos o clima mês a mês para você não escolher a época das monções por engano." },
    { q: "Dá para fazer lua de mel econômica?", a: "Sim! A Tailândia oferece um custo-benefício imbatível. Você pode ter experiências de luxo pagando o que pagaria em um hotel médio no Brasil. No guia, mostramos como economizar sem perder o glamour da ocasião." },
    { q: "Onde ficar: Phuket, Krabi, Phi Phi, Koh Samui ou Koh Lipe?", a: "Essa é a decisão mais difícil. O guia traz um comparativo 'frente a frente' de cada destino, focando no clima romântico, facilidade de acesso e qualidade dos hotéis." },
    { q: "Como evitar roteiro cansativo?", a: "O erro comum é tentar ver tudo e passar metade da lua de mel em barcos e aviões. O guia ensina como otimizar os deslocamentos para que vocês foquem no que importa: o tempo a dois." },
    { q: "O guia ajuda a escolher hotel?", a: "Selecionamos os hotéis que realmente entregam a experiência de lua de mel: privacidade, vista, serviço impecável e aquele 'clima' especial que fotos de site nem sempre mostram." },
    { q: "O guia serve para casais que querem luxo e para casais com orçamento menor?", a: "Sim. Temos recomendações que vão desde bangalôs charmosos e econômicos até resorts de ultra-luxo, sempre focando no melhor custo-benefício para a ocasião." }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <SEO 
        title="Guia Lua de Mel na Tailândia | Guias Tailândia"
        description="Planeje sua lua de mel inesquecível na Tailândia. Escolha as melhores ilhas, hotéis e experiências românticas com o guia em português."
        canonicalPath="/lua-de-mel-tailandia"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />

        {/* 1. HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <img src={heroImg} alt="Lua de mel paradisíaca na Tailândia" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <span className="inline-block bg-primary/20 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
              💍 Inesquecível e Sem Estresse
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
              Sua <span className="text-gradient-gold">Lua de Mel</span> na Tailândia
            </h1>
            <p className="text-xl md:text-2xl font-display font-semibold text-primary">
              O planejamento perfeito para o casal
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
              Planeje uma lua de mel memorável com menos erro, menos estresse e mais experiências românticas que realmente valem a viagem. O guia em português que economiza seu tempo e dinheiro.
            </p>
            <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO MEU GUIA POR R$ 97</CTAButton>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body pt-2">
               <span className="flex items-center gap-1">✅ +7.000 Viajantes pelo Mundo</span>
               <span className="flex items-center gap-1">✅ Guia em PDF Imediato</span>
            </div>
          </div>
        </section>

        {/* 2. FAIXA DE BENEFÍCIOS RÁPIDOS */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Heart, text: "Romance Garantido" },
              { icon: ShieldCheck, text: "Zero Ciladas" },
              { icon: Palmtree, text: "Ilhas Perfeitas" },
              { icon: Sparkles, text: "Momentos Únicos" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 text-center space-y-2">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="font-bold text-sm uppercase tracking-tighter">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SEÇÃO DE DOR */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              O Erro que Pode <span className="text-gradient-gold">Custar a Viagem</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed text-left">
              <p>Muitos casais tentam montar o roteiro da lua de mel sozinhos, baseados em fotos de Instagram. O resultado? Acabam em hotéis "lindos" mas em <strong className="text-destructive">ilhas barulhentas e lotadas</strong>, onde a privacidade é inexistente.</p>
              <p>O maior vilão da lua de mel na Tailândia é o <strong className="text-foreground">excesso de deslocamento</strong>. Tentar ver 5 ilhas em 10 dias transforma a viagem em uma maratona exaustiva de malas, barcos e aeroportos, sobrando pouco tempo para o que realmente importa: vocês dois.</p>
              <p>Além disso, escolher a ilha errada para a época do ano pode significar dias de <strong className="text-primary">chuva e mar agitado</strong>. Um erro de planejamento que custa caro e não pode ser desfeito.</p>
            </div>
          </div>
        </section>

        {/* 4. IMAGEM ESTRATÉGICA APÓS A DOR */}
        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={imageAfterPain} alt="Cenário romântico na Tailândia" className="w-full h-[400px] object-cover" />
          </div>
        </section>

        {/* 5. SEÇÃO “O QUE ESTE GUIA RESOLVE” */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">O Atalho para o Paraíso</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Este guia elimina as discussões sobre o roteiro e as dúvidas cruéis sobre quais hotéis escolher. Nós selecionamos o que há de melhor em cada destino, otimizamos a logística e mostramos as experiências que transformarão sua lua de mel em uma história inesquecível.
            </p>
          </div>
        </section>

        {/* 6. COMPARATIVO OBRIGATÓRIO */}
        <section className="py-20 md:py-28 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">
              Fazer sozinho vs <span className="text-gradient-gold">Com o Guia</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 border border-destructive/20 rounded-2xl p-7">
                <div className="text-center mb-6">
                  <span className="inline-block bg-destructive/10 text-destructive font-body font-bold text-sm px-4 py-2 rounded-full">❌ FAZER SOZINHO</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Montar roteiro cansativo e corrido",
                    "Escolher ilha errada para o perfil do casal",
                    "Reservar hotel bonito mas mal localizado",
                    "Perder dias preciosos em deslocamentos lentos",
                    "Gastar com passeios lotados e turísticos demais",
                    "Discussões sobre logística e onde ir em seguida"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-body text-muted-foreground">
                      <X className="w-5 h-5 text-destructive/70 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border-2 border-primary/40 rounded-2xl p-7 glow-gold">
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary/20 text-primary font-body font-bold text-sm px-4 py-2 rounded-full">✅ COM O GUIA</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Escolha da ilha perfeita para o seu perfil",
                    "Roteiros leves e focados no romance",
                    "Seleção de hotéis com 'clima' de lua de mel",
                    "Logística de transporte otimizada e testada",
                    "Experiências exclusivas e românticas",
                    "Tranquilidade para curtir o momento a dois"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-body">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. O QUE VOCÊ VAI ENCONTRAR DENTRO DO GUIA */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">Planejamento <span className="text-gradient-gold">Completo</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Palmtree, title: "Curadoria de Ilhas", desc: "Qual combina melhor com vocês? Koh Lipe, Samui ou Phi Phi?" },
                { icon: Hotel, title: "Hotéis Românticos", desc: "Nossa seleção de hospedagens inesquecíveis." },
                { icon: Plane, title: "Logística Inteligente", desc: "Como se deslocar entre ilhas sem perder o dia todo." },
                { icon: Utensils, title: "Jantares Especiais", desc: "Onde ter aquela noite memorável pé na areia." },
                { icon: Sun, title: "Guia do Clima", desc: "Qual época ir para garantir céu azul e mar calmo." },
                { icon: Camera, title: "Momentos Foto", desc: "Os lugares mais instagramáveis e românticos." }
              ].map((m, i) => (
                <div key={i} className="bg-card border-glow rounded-xl p-7 group hover:glow-orange transition-all">
                  <m.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-bold text-lg mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SEÇÃO SUBSTITUTA DA CONTAGEM REGRESSIVA */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">As escolhas que <span className="text-gradient-gold">definem seu sonho</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Escolher a ilha certa", desc: "O perfil de Koh Lipe é muito diferente de Phuket. Saiba qual é a de vocês." },
                { title: "Evitar roteiro corrido", desc: "Dicas para equilibrar aventura e descanso sem estresse." },
                { title: "Escolher hotel com clima", desc: "Nem todo hotel 5 estrelas é romântico. Mostramos os que são." },
                { title: "Reduzir deslocamentos", desc: "Aprenda a conectar os destinos da forma mais rápida e confortável." },
                { title: "Planejar experiências", desc: "De spa para casais a passeios de barco privados ao pôr do sol." },
                { title: "Escolher a melhor época", desc: "O mapa das chuvas para você não errar o mês da viagem." }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-display font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. IMAGEM ESTRATÉGICA ANTES DO PREÇO */}
        <section className="px-4 py-20">
          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative group">
            <img src={imageBeforePrice} alt="Pôr do sol romântico na Tailândia" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white font-display font-black text-3xl md:text-5xl text-center px-4 uppercase tracking-tighter">A viagem da vida de vocês</p>
            </div>
          </div>
        </section>

        {/* 15. BLOCO DE PREÇO */}
        <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card border-glow rounded-[2.5rem] p-8 md:p-12 glow-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">OFERTA DE LANÇAMENTO</div>
              <p className="text-muted-foreground font-body text-lg line-through mb-1">R$ 197</p>
              <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-2">R$ 97</p>
              <p className="text-primary font-body font-semibold text-sm mb-8">Pagamento único · Acesso vitalício 🔥</p>
              <CTAButton href={LINK_PAGAMENTO} size="lg" className="w-full max-w-md">QUERO MEU GUIA POR R$ 97</CTAButton>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-muted-foreground font-body">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> Compra Segura</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-primary" /> Entrega Imediata</span>
                <span className="flex items-center gap-1"><RotateCcw className="w-4 h-4 text-primary" /> 7 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </section>

        {/* 16. GARANTIA */}
        <section className="py-20 px-4 text-center bg-background">
          <div className="max-w-4xl mx-auto p-10 bg-card border border-border rounded-3xl">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-4">Sua Tranquilidade em Primeiro Lugar</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Compre o guia, planeje sua lua de mel e, se em 7 dias você sentir que as dicas não valeram o investimento, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
          </div>
        </section>

        {/* 17. FAQ */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">Dúvidas <span className="text-gradient-gold">Frequentes</span></h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border-glow rounded-xl px-6 border-b-0">
                  <AccordionTrigger className="font-display font-semibold text-left text-base hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 18. CTA FINAL COM IMAGEM */}
        <section className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
             <h2 className="text-3xl md:text-5xl font-display font-bold">O paraíso <span className="text-gradient-gold">começa aqui</span></h2>
             <p className="text-xl text-muted-foreground">Não deixe sua lua de mel virar logística e estresse. Garanta seu guia e foquem apenas no amor.</p>
             <CTAButton href={LINK_PAGAMENTO} size="lg">GARANTIR MEU GUIA AGORA</CTAButton>
             <div className="pt-10">
               <img src={imageFinalCTA} alt="Tailândia romântica" className="rounded-3xl shadow-2xl mx-auto max-h-[400px] w-full object-cover" />
             </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <BackToHomeFooter />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaLuaDeMel;
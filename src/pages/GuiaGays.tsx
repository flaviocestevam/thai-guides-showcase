import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection } from "@/components/ConversionSections";
import { CTAButton } from "@/components/festival/CTAButton";
import { Shield, Zap, RotateCcw, Check, X, MapPin, Hotel, Plane, Star, Clock, CheckCircle2, Heart, Smile, ShieldCheck, Globe, Navigation, MessageSquare } from "lucide-react";
import heroImg from "@/assets/festas/bangkok-nightlife.jpg";
import imageAfterPain from "@/assets/trilhas/koh-lipe-sunrise.jpg";
import imageBeforePrice from "@/assets/hero-elephants.jpg";
import imageFinalCTA from "@/assets/trilhas/phi-phi-bamboo.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LINK_PAGAMENTO = "[LINK_DE_PAGAMENTO_GAYS]";

const GuiaGays = () => {
  const faqs = [
    { q: "A Tailândia é segura para gays?", a: "Sim, a Tailândia é um dos países mais receptivos do mundo para viajantes LGBTQIA+. No entanto, existem códigos culturais e regiões que oferecem uma experiência muito melhor. No guia, detalhamos onde você se sentirá mais à vontade." },
    { q: "Bangkok é LGBTQIA+ friendly?", a: "Extremamente! É considerada a capital gay da Ásia. O guia foca muito em Bangkok, mostrando as melhores áreas de Silom, rooftops, baladas validadas e como evitar ciladas turísticas na vida noturna." },
    { q: "Quais regiões são melhores para se hospedar?", a: "Para viajantes gays, ficar perto de Silom Soi 2 e Soi 4 em Bangkok é estratégico. Mas nas ilhas, a escolha depende do seu perfil. No guia, damos o mapa exato de onde ficar em cada destino." },
    { q: "O guia serve para casal gay?", a: "Com certeza. Foi pensado tanto para casais que buscam romance e hotéis boutique incríveis quanto para quem quer aproveitar a vida noturna com segurança e liberdade." },
    { q: "O guia serve para viajante solo?", a: "Sim! Incluímos dicas de como se conectar com outros viajantes, locais seguros para sair sozinho e como aproveitar a viagem com total independência." },
    { q: "Tem dicas de vida noturna?", a: "Muitas. Não apenas nomes de lugares, mas o 'vibe' de cada um, horários, códigos de vestimenta e como evitar pagar mais caro em lugares puramente turísticos." },
    { q: "Tem dicas de ilhas?", a: "Sim. Selecionamos as ilhas que possuem o melhor balanço entre belezas naturais e ambiente inclusivo, como Koh Samet, Phuket e as ilhas do Mar de Andaman." },
    { q: "O guia ajuda a evitar ciladas turísticas?", a: "Este é um dos pilares do guia. Ensinamos a identificar preços abusivos, transportes caros e experiências que parecem inclusivas mas são apenas armadilhas para turistas." }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <SEO 
        title="Guia Tailândia para Gays | Guias Tailândia"
        description="Guia em português para viajantes gays que querem conhecer a Tailândia com mais segurança, liberdade e confiança. Dicas de onde ficar, onde ir, o que evitar e como aproveitar melhor."
        canonicalPath="/tailandia-para-gays"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />

        {/* 1. HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <img src={heroImg} alt="Vida noturna de Bangkok, Tailândia" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <span className="inline-block bg-primary/20 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
              🏳️‍🌈 Liberdade, Segurança e Confiança
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
              Tailândia para <span className="text-gradient-gold">Viajantes Gays</span>
            </h1>
            <p className="text-xl md:text-2xl font-display font-semibold text-primary">
              O guia definitivo em português
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
              Viaje pela Tailândia com mais liberdade, sabendo exatamente onde ir, onde ficar, o que evitar e como aproveitar experiências realmente LGBTQIA+ friendly.
            </p>
            <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO MEU GUIA POR R$ 97</CTAButton>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body pt-2">
               <span className="flex items-center gap-1">✅ +7.000 Viajantes pelo Mundo</span>
               <span className="flex items-center gap-1">✅ Entrega Imediata</span>
            </div>
          </div>
        </section>

        {/* 2. FAIXA DE BENEFÍCIOS RÁPIDOS */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Clock, text: "Economize Tempo" },
              { icon: ShieldCheck, text: "Evite Erros Caros" },
              { icon: Hotel, text: "Escolha Melhor" },
              { icon: Heart, text: "Viagem sem Estresse" }
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
              A Incerteza de Planejar <span className="text-gradient-gold">Tudo Sozinho</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed text-left">
              <p>Imagina gastar milhares de reais em passagens e hospedagem, só para chegar na Tailândia e descobrir que o hotel "lindo" das fotos fica em uma região <strong className="text-destructive">conservadora ou mal localizada</strong>, longe de tudo que você queria viver.</p>
              <p>Você passa horas em blogs genéricos e vídeos de "influenciadores" que passaram 2 dias no país e dão dicas rasas. O resultado? Você acaba perdendo tempo em <strong className="text-foreground">baladas turísticas sem graça</strong> e cai em ciladas que custam o triplo do preço real.</p>
              <p>A verdade é que <strong className="text-primary">informação errada custa caro</strong>. Não saber quais áreas de Bangkok são realmente inclusivas ou quais ilhas combinam com seu perfil pode transformar o sonho da Tailândia em uma sequência de logísticas cansativas e frustrações.</p>
            </div>
          </div>
        </section>

        {/* 4. IMAGEM ESTRATÉGICA APÓS A DOR */}
        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={imageAfterPain} alt="Experiência bem planejada na Tailândia" className="w-full h-[400px] object-cover" />
          </div>
        </section>

        {/* 5. SEÇÃO “O QUE ESTE GUIA RESOLVE” */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">O Guia Que Organiza Sua Viagem</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Esqueça as pesquisas confusas em inglês ou blogs desatualizados. Este guia em português reúne o que realmente importa para o viajante gay: onde ficar, onde sair, como se locomover e como evitar ciladas turísticas. É o seu atalho para uma viagem épica.
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
                    "Pesquisar em blogs genéricos e desatualizados",
                    "Escolher hotel mal localizado por falta de mapa estratégico",
                    "Cair em baladas turísticas ruins e caras",
                    "Perder tempo procurando lugares LGBTQIA+ friendly",
                    "Não saber como evitar ciladas de transporte",
                    "Gastar mais dinheiro por falta de dicas de quem vive lá"
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
                    "Mapas exatos das melhores regiões de Bangkok e ilhas",
                    "Seleção de hotéis validados e bem localizados",
                    "Dicas de vida noturna sem ciladas",
                    "Itinerários otimizados para economizar tempo",
                    "Como viajar com total liberdade e segurança",
                    "Economia real em transporte e alimentação"
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">O Que Você Vai <span className="text-gradient-gold">Dominar</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "Zonas LGBTQIA+", desc: "Mapas detalhados das melhores áreas em Bangkok e ilhas." },
                { icon: Hotel, title: "Onde Ficar", desc: "Recomendações de hotéis friendly por faixa de preço." },
                { icon: Zap, title: "Vida Noturna", desc: "Baladas, rooftops e shows validados e seguros." },
                { icon: ShieldCheck, title: "Anti-Golpes", desc: "Como evitar ciladas turísticas comuns no país." },
                { icon: Globe, title: "Dicas Culturais", desc: "Etiqueta e comportamento para viajar com respeito." },
                { icon: Plane, title: "Logística", desc: "Melhores apps e transportes para se locomover." }
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">Planeje sua viagem com mais liberdade, <span className="text-gradient-gold">segurança e confiança</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Melhores regiões para ficar", desc: "Evite reservar longe de tudo. Mostramos os bairros estratégicos." },
                { title: "Experiências LGBTQIA+ friendly", desc: "Lugares onde você pode ser você mesmo com total conforto." },
                { title: "Vida noturna sem cilada", desc: "Saiba exatamente onde a vibe é boa e os preços são justos." },
                { title: "Hotéis bem localizados", desc: "Seleção de hospedagens que facilitam seu deslocamento diário." },
                { title: "Ilhas com o perfil certo", desc: "Descubra quais ilhas combinam melhor com viajantes gays." },
                { title: "Mais conforto e segurança", desc: "Dicas práticas para evitar estresse logístico e focar no prazer." }
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
            <img src={imageBeforePrice} alt="Tailândia aspiracional" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white font-display font-black text-3xl md:text-5xl text-center px-4 uppercase tracking-tighter shadow-text">O sonho está a um passo</p>
            </div>
          </div>
        </section>

        {/* 15. BLOCO DE PREÇO */}
        <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card border-glow rounded-[2.5rem] p-8 md:p-12 glow-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">OFERTA ESPECIAL</div>
              <p className="text-muted-foreground font-body text-lg line-through mb-1">R$ 197</p>
              <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-2">R$ 97</p>
              <p className="text-primary font-body font-semibold text-sm mb-8">Pagamento único · Acesso vitalício 🔥</p>
              <CTAButton href={LINK_PAGAMENTO} size="lg" className="w-full max-w-md">QUERO MEU GUIA AGORA!</CTAButton>
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
            <h2 className="text-3xl font-display font-bold mb-4">Risco Zero: Garantia de 7 Dias</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Se você comprar o guia, acessar o conteúdo e sentir que ele não te ajuda a economizar tempo, evitar erros e planejar melhor sua experiência na Tailândia, basta pedir reembolso em até 7 dias corridos. Devolvemos 100% do seu dinheiro.
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
             <h2 className="text-3xl md:text-5xl font-display font-bold">A Tailândia te espera com <span className="text-gradient-gold">orgulho</span></h2>
             <p className="text-xl text-muted-foreground">Não deixe sua viagem ao acaso. Garanta o guia agora e planeje com total segurança.</p>
             <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO GARANTIR MINHA VAGA AGORA</CTAButton>
             <div className="pt-10">
               <img src={imageFinalCTA} alt="Praia paradisíaca na Tailândia" className="rounded-3xl shadow-2xl mx-auto max-h-[400px] w-full object-cover" />
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

export default GuiaGays;
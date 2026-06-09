import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHomeFooter } from "@/components/NavigationButtons";
import { CTAButton } from "@/components/festival/CTAButton";
import { Shield, Zap, RotateCcw, Check, X, MapPin, Hotel, Calendar, Clock, CheckCircle2, ShieldCheck, Droplets, PartyPopper, Waves, Utensils, MessageSquare } from "lucide-react";
import heroImg from "@/assets/festas/chiangmai-nightlife.jpg"; // Placeholder for Songkran (high energy)
import imageAfterPain from "@/assets/festas/bangkok-nightlife.jpg";
import imageBeforePrice from "@/assets/hero-thailand.jpg";
import imageFinalCTA from "@/assets/trilhas/phi-phi-bamboo.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LINK_PAGAMENTO = "[LINK_DE_PAGAMENTO_SONGKRAN]";

const GuiaSongkran = () => {
  const faqs = [
    { q: "Quando acontece o Songkran?", a: "O Songkran oficial acontece todos os anos de 13 a 15 de abril, marcando o Ano Novo Tailandês. No entanto, em algumas cidades as celebrações podem se estender. No guia, damos o calendário exato cidade por cidade." },
    { q: "Qual melhor cidade para viver o Songkran?", a: "Depende do que você busca! Chiang Mai é famosa pelas celebrações mais tradicionais e intensas, enquanto Bangkok oferece festas massivas em lugares como Silom e Khao San Road. No guia, ajudamos você a escolher a cidade ideal para o seu perfil." },
    { q: "Bangkok ou Chiang Mai?", a: "Essa é a dúvida de 9 entre 10 viajantes. Chiang Mai tem o fosso da cidade antiga como palco principal. Bangkok tem grandes eventos organizados. O guia faz um comparativo detalhado para você não errar na escolha." },
    { q: "Precisa reservar hotel antes?", a: "Sim, e com muita antecedência! As melhores localizações esgotam meses antes e os preços triplicam na semana do festival. No guia, mostramos as áreas estratégicas para você ficar no centro da festa sem sofrer com a logística." },
    { q: "O Songkran é seguro?", a: "Em geral, sim, mas é um festival com multidões e muita água. Existem regras de segurança e etiqueta cultural que precisam ser seguidas para evitar problemas. No guia, detalhamos como se proteger e aproveitar sem riscos." },
    { q: "O que levar para o Songkran?", a: "Desde capas impermeáveis para celular até o tipo de roupa que seca rápido. No guia, fornecemos um checklist completo para você não ter prejuízo com documentos ou eletrônicos molhados." },
    { q: "Dá para participar sem gostar de muita multidão?", a: "Sim! Existem formas de vivenciar a parte cultural e espiritual do Songkran em templos mais tranquilos. No guia, mostramos o lado B do festival para quem quer fugir do caos das guerras de água." },
    { q: "O guia ajuda a economizar dinheiro?", a: "Muito. Ao saber onde ficar e como se locomover durante o festival (quando o transporte fica caótico), você evita pagar as taxas abusivas de 'turista perdido'." }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <SEO 
        title="Guia Songkran — Ano Novo Tailandês | Guias Tailândia"
        description="Guia completo em português para viver o Songkran na Tailândia. Saiba onde ir, quando chegar, onde ficar, o que levar e como evitar erros caros."
        canonicalPath="/songkran-ano-novo-tailandes"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />

        {/* 1. HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <img src={heroImg} alt="Festival Songkran na Tailândia" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <span className="inline-block bg-primary/20 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
              💦 A Maior Festa da Tailândia
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
              Guia <span className="text-gradient-gold">Songkran</span> 2026
            </h1>
            <p className="text-xl md:text-2xl font-display font-semibold text-primary">
              O Ano Novo Tailandês do jeito certo
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
              Viva a experiência mais intensa da Tailândia sabendo exatamente onde ir, quando chegar, onde ficar e como evitar os erros que fazem muitos turistas se arrependerem.
            </p>
            <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO MEU GUIA POR R$ 97</CTAButton>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body pt-2">
               <span className="flex items-center gap-1">✅ +7.000 Viajantes pelo Mundo</span>
               <span className="flex items-center gap-1">✅ Acesso Imediato</span>
            </div>
          </div>
        </section>

        {/* 2. FAIXA DE BENEFÍCIOS RÁPIDOS */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Droplets, text: "Curta sem Estresse" },
              { icon: ShieldCheck, text: "Proteja seus Bens" },
              { icon: MapPin, text: "Localização VIP" },
              { icon: PartyPopper, text: "Vibe Garantida" }
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
              O Caos de <span className="text-gradient-gold">Chegar sem Plano</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed text-left">
              <p>O Songkran é maravilhoso, mas pode ser um pesadelo logístico. Imagina chegar em Chiang Mai e descobrir que o seu hotel fica a <strong className="text-destructive">40 minutos de caminhada</strong> do centro da festa, e nenhum transporte (Grab ou táxi) consegue passar pelas ruas bloqueadas.</p>
              <p>Muitos turistas chegam no dia errado, perdem os rituais nos templos e acabam ficando apenas na "guerra de água" turística, sem viver a alma do festival. Pior ainda: perdem celulares e documentos porque não sabiam como se <strong className="text-foreground">proteger adequadamente</strong>.</p>
              <p>A verdade é que no Songkran <strong className="text-primary">tempo é dinheiro</strong>. Sem saber as datas certas de cada cidade e as regras de etiqueta, você gasta mais, se estressa com multidões ruins e volta para casa achando que foi apenas "uma bagunça molhada".</p>
            </div>
          </div>
        </section>

        {/* 4. IMAGEM ESTRATÉGICA APÓS A DOR */}
        <section className="px-4 py-10">
          <div className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={imageAfterPain} alt="Celebração do Songkran bem planejada" className="w-full h-[400px] object-cover" />
          </div>
        </section>

        {/* 5. SEÇÃO “O QUE ESTE GUIA RESOLVE” */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Seu Passo a Passo para o Festival</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Este guia resolve a confusão. Explicamos o calendário oficial, as diferenças entre as cidades, onde reservar seu hotel estrategicamente e como equilibrar a diversão das ruas com o respeito às tradições milenares do Ano Novo Tailandês.
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
                    "Chegar no dia errado por confusão no calendário",
                    "Reservar hotel longe das zonas de festa",
                    "Gastar 3x mais com transporte travado",
                    "Perder as cerimônias tradicionais nos templos",
                    "Ter eletrônicos danificados por falta de preparo",
                    "Ficar perdido em multidões sem saber onde ir"
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
                    "Calendário exato cidade por cidade",
                    "Zonas estratégicas de hospedagem (vagas VIP)",
                    "Checklist de sobrevivência e proteção",
                    "Roteiro de templos e tradições escondidas",
                    "Dicas de transporte para evitar o caos",
                    "Onde estão as melhores festas e 'guerras' de água"
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">Conteúdo <span className="text-gradient-gold">Exclusivo</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: "Datas Oficiais", desc: "Calendário atualizado cidade por cidade." },
                { icon: MapPin, title: "Zonas de Guerra", desc: "Os melhores pontos para participar da festa." },
                { icon: Hotel, title: "Logística de Hotel", desc: "Onde ficar para não ficar isolado pelos bloqueios." },
                { icon: ShieldCheck, title: "Guia de Proteção", desc: "Como manter celular e documentos secos e seguros." },
                { icon: Waves, title: "Cultura & Tradição", desc: "O significado espiritual e como participar com respeito." },
                { icon: Utensils, title: "Comida e Sobrevivência", desc: "Onde comer quando tudo está lotado e molhado." }
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">O que você precisa <span className="text-gradient-gold">organizar antes</span> do Songkran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Escolher a cidade certa", desc: "Bangkok, Chiang Mai ou Phuket? Cada uma tem uma energia diferente." },
                { title: "Entender as datas", desc: "As datas variam conforme a região. Não chegue quando a festa já acabou." },
                { title: "Reservar hospedagem no lugar certo", desc: "Ficar na rua errada pode significar horas parado no trânsito." },
                { title: "Proteger celular e documentos", desc: "Mostramos os melhores acessórios para evitar prejuízos." },
                { title: "Preparar transporte", desc: "Como se locomover quando o Grab e os Táxis param de funcionar." },
                { title: "Equilibrar festa e cultura", desc: "Dicas para viver os rituais sagrados sem perder a diversão das ruas." }
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
            <img src={imageBeforePrice} alt="Tailândia festiva" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white font-display font-black text-3xl md:text-5xl text-center px-4 uppercase tracking-tighter">O Ano Novo mais louco da sua vida</p>
            </div>
          </div>
        </section>

        {/* 15. BLOCO DE PREÇO */}
        <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card border-glow rounded-[2.5rem] p-8 md:p-12 glow-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">OFERTA LIMITADA</div>
              <p className="text-muted-foreground font-body text-lg line-through mb-1">R$ 197</p>
              <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-2">R$ 97</p>
              <p className="text-primary font-body font-semibold text-sm mb-8">Pagamento único · Acesso vitalício 🔥</p>
              <CTAButton href={LINK_PAGAMENTO} size="lg" className="w-full max-w-md">QUERO MEU GUIA POR R$ 97</CTAButton>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-muted-foreground font-body">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> Compra Segura</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-primary" /> Entrega Imediata</span>
                <span className="flex items-center gap-1"><RotateCcw className="w-4 h-4 text-primary" /> Garantia Blindada</span>
              </div>
            </div>
          </div>
        </section>

        {/* 16. GARANTIA */}
        <section className="py-20 px-4 text-center bg-background">
          <div className="max-w-4xl mx-auto p-10 bg-card border border-border rounded-3xl">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-4">Garantia de 7 Dias</h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              Você tem 7 dias para explorar o guia. Se sentir que não agregou valor ou não vai te ajudar na viagem, devolvemos seu dinheiro sem burocracia. O risco é nosso.
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
             <h2 className="text-3xl md:text-5xl font-display font-bold">Viva o Songkran <span className="text-gradient-gold">Inesquecível</span></h2>
             <p className="text-xl text-muted-foreground">Não arrisque sua viagem em um dos períodos mais lotados da Tailândia. Planeje-se agora.</p>
             <CTAButton href={LINK_PAGAMENTO} size="lg">GARANTIR MEU GUIA AGORA</CTAButton>
             <div className="pt-10">
               <img src={imageFinalCTA} alt="Tailândia" className="rounded-3xl shadow-2xl mx-auto max-h-[400px] w-full object-cover" />
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

export default GuiaSongkran;
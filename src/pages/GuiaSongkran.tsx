import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, MessageSquare, Map, Calendar, Camera, BookOpen, Clock, TrendingUp } from "lucide-react";

const GuiaSongkran = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SEO 
        title="Guia Songkran 2026 — O Ano Novo Tailandês"
        description="Viva a maior guerra de água do mundo sem perrengue. Roteiros, mapas, checklist de proteção e dicas de quem mora na Tailândia."
        canonicalPath="/songkran-ano-novo-tailandes"
      />
      <Header />
      
      <main id="songkran-sales" className="pt-20">
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              <Calendar className="w-4 h-4" /> Versão 2026 Confirmada
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-tight text-foreground">
              Songkran 2026: <span className="text-primary">Sobreviva</span> à Maior Guerra de Água do Mundo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              O guia definitivo em português para você curtir o Ano Novo Tailandês sem perder o passaporte ou pagar 3x mais em hotéis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="w-full sm:w-auto text-xl py-8 px-10 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-black shadow-xl transition-transform hover:scale-105">
                BAIXAR GUIA SONGKRAN 2026
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg py-8 px-8 border-primary text-primary hover:bg-primary/10 font-bold">
                <MessageSquare className="w-5 h-5 mr-2" /> TIRAR DÚVIDAS
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-muted-foreground pt-4 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00A8A8]" /> 100% Em Português</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00A8A8]" /> Acesso Imediato</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00A8A8]" /> Roteiro 2026</span>
            </div>
          </div>
        </section>

        {/* POR QUE VOCÊ PRECISA DISSO */}
        <section className="py-24 px-4 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-black">Por que <span className="text-[#FF6B35]">90% dos brasileiros</span> erram no Songkran?</h2>
              <p className="text-muted-foreground text-lg">Não seja mais um turista perdido na multidão.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-2xl border border-primary/10 space-y-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Hospedagem de Última Hora</h3>
                <p className="text-muted-foreground">Chegar em Bangkok sem reserva no dia 13 é garantia de pagar o triplo ou ficar em lugares insalubres.</p>
              </div>
              <div className="bg-background p-8 rounded-2xl border border-primary/10 space-y-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Equipamento Estragado</h3>
                <p className="text-muted-foreground">Milhares de celulares e passaportes são destruídos por água em menos de 5 minutos de festa.</p>
              </div>
              <div className="bg-background p-8 rounded-2xl border border-primary/10 space-y-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Logística de Guerra</h3>
                <p className="text-muted-foreground">Tentar atravessar a cidade de táxi ou Tuk-tuk durante a festa é impossível e estressante.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE TEM NO GUIA */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-display font-black leading-tight">
                Tudo o que você precisa em <span className="text-[#D4A017]">42 páginas</span> detalhadas
              </h2>
              <p className="text-lg text-muted-foreground">
                Esqueça dicas genéricas de internet. Este guia foi escrito por quem vive na Tailândia e enfrenta o Songkran todos os anos.
              </p>
              <ul className="space-y-4">
                {[
                  "Calendário completo 2026 (Bangkok, Phuket e Chiang Mai)",
                  "Onde comprar as melhores pistolas de água",
                  "Como proteger seus eletrônicos de forma infalível",
                  "Os 'Safe Points' para descansar da loucura",
                  "Etiqueta e frases essenciais em Tailandês",
                  "Roteiro de transporte seguro pós-festa"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <Check className="w-5 h-5 text-[#00A8A8] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-primary/20 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-primary opacity-50" />
                <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-2xl shadow-2xl space-y-1">
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Investimento</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl line-through opacity-50 font-bold">R$197</span>
                    <span className="text-4xl font-black text-[#FF6B35]">R$97</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS RÁPIDOS */}
        <section className="py-24 px-4 bg-[#00A8A8]/5">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl md:text-4xl font-display font-black">Por que este guia se paga em <span className="text-[#00A8A8]">menos de 1 hora?</span></h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl flex items-start gap-4 text-left border border-[#00A8A8]/20">
                <TrendingUp className="w-8 h-8 text-[#00A8A8] flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">Economia Real</p>
                  <p className="text-muted-foreground text-sm">Economize até R$1.500 evitando hotéis superfaturados e golpes de transporte.</p>
                </div>
              </div>
              <div className="bg-background p-6 rounded-xl flex items-start gap-4 text-left border border-[#00A8A8]/20">
                <Shield className="w-8 h-8 text-[#00A8A8] flex-shrink-0" />
                <div>
                  <p className="font-bold text-lg">Segurança Total</p>
                  <p className="text-muted-foreground text-sm">Checklist de segurança para seus documentos e equipamentos eletrônicos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUEM SOU EU */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-16 border border-border flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full bg-primary/20 flex-shrink-0 overflow-hidden border-4 border-primary/30">
              <div className="w-full h-full bg-gradient-to-tr from-primary to-orange-400 opacity-80" />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-display font-black">"Eu moro em Phuket e já vi de tudo no Songkran."</h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Todo ano vejo brasileiros desesperados com celulares molhados ou sem saber para onde ir. Eu criei este guia para que você aproveite a festa mais incrível da sua vida com a mesma segurança que eu tenho morando aqui."
              </p>
              <p className="font-bold text-primary">— Flavio Estevam, Guias Tailândia</p>
            </div>
          </div>
        </section>

        {/* OFERTA FINAL */}
        <section className="py-24 px-4 relative">
          <div className="max-w-3xl mx-auto bg-[#FF6B35] rounded-[2rem] p-8 md:p-16 text-white text-center space-y-8 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-display font-black">Oferta Songkran 2026</h2>
              <p className="text-white/80 text-lg md:text-xl font-medium">Guia Completo + Checklist de Segurança + Mapas Offline</p>
            </div>
            <div className="space-y-1">
              <p className="text-white/60 line-through text-xl font-bold">De R$197</p>
              <p className="text-5xl md:text-7xl font-black">Por R$97</p>
              <p className="text-white/80 text-sm font-bold uppercase tracking-widest pt-2">Acesso imediato por e-mail</p>
            </div>
            <Button size="lg" className="w-full text-2xl py-10 bg-white text-[#FF6B35] hover:bg-white/90 font-black rounded-2xl shadow-xl transition-transform hover:scale-105">
              QUERO O GUIA AGORA
            </Button>
            <div className="flex flex-wrap justify-center gap-6 pt-4 text-xs font-bold uppercase tracking-widest opacity-80">
              <span>💳 Cartão de Crédito</span>
              <span>📱 PIX</span>
              <span>🔒 Compra 100% Segura</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black">Dúvidas Comuns</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-xl px-6 bg-card/50">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">O guia serve para todas as cidades?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Sim! Focamos em Bangkok, Chiang Mai e Phuket, as três cidades onde a festa é mais intensa e onde a logística é mais complexa para o turista.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-border rounded-xl px-6 bg-card/50">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">Como recebo o guia?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Imediatamente após a confirmação do pagamento, você recebe um link para download no seu e-mail. É um PDF otimizado para ler no celular.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-border rounded-xl px-6 bg-card/50">
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">O guia é atualizado para 2026?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Sim! As datas do Songkran são fixas (13 a 15 de abril), mas as festas paralelas e eventos especiais mudam. Este guia contém o calendário atualizado para 2026.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 text-center px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">
              Pronto para entrar na briga de água mais louca do planeta?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Não deixe para a última hora. Garanta seu planejamento agora e curta o festival sem estresse.
            </p>
            <Button size="lg" className="text-xl px-12 py-8 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-black rounded-2xl shadow-2xl transition-all hover:scale-105">
              BAIXAR GUIA SONGKRAN 2026
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaSongkran;

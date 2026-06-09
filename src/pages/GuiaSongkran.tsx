import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, Zap, RotateCcw, MessageSquare, Map, Calendar, Camera, BookOpen, AlertTriangle, X } from "lucide-react";

const GuiaSongkran = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Guia Songkran 2026 — O Ano Novo Tailandês"
        description="Viva a maior guerra de água do mundo sem perrengue. Roteiros, mapas, checklist de proteção e dicas de quem mora na Tailândia."
        canonicalPath="/songkran-ano-novo-tailandes"
      />
      <Header />
      
      <main id="songkran-sales">
        {/* 1. HERO */}
        <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Songkran 2026: Viva a Maior Guerra de Água do Mundo Sem Passar Perrengue
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              13-15 abril é oficial. De 11 a 17 abril a Tailândia inteira vira festa. Tenha o roteiro, mapas e checklist que eu uso morando em Phuket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg bg-orange-600 hover:bg-orange-700">QUERO O GUIA COMPLETO</Button>
              <Button size="lg" variant="outline" className="text-lg">
                <MessageSquare className="w-5 h-5 mr-2" /> FALAR NO WHATSAPP
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-muted-foreground pt-4">
              <span>✅ Atualizado 2026</span>
              <span>✅ 100% em Português</span>
              <span>✅ Acesso Imediato</span>
            </div>
          </div>
        </section>

        {/* 2. DOR */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Por que 90% dos brasileiros erram no Songkran?</h2>
            <ul className="grid md:grid-cols-3 gap-6 text-left">
              <li className="bg-background p-6 rounded-xl border">Chegam em Bangkok no dia 13 sem hotel e pagam 3x mais.</li>
              <li className="bg-background p-6 rounded-xl border">Molham celular e passaporte porque não levaram proteção.</li>
              <li className="bg-background p-6 rounded-xl border">Caem no golpe do tuk-tuk na Khao San e perdem a festa.</li>
            </ul>
          </div>
        </section>

        {/* 3. SOLUÇÃO */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">O Guia feito NA Tailândia, não no Google</h2>
            <p className="text-lg text-muted-foreground">
              Não é blog. São 42 páginas com onde ficar em cada cidade, que roupa usar, como proteger documentos, transporte seguro, e os 3 melhores pontos para curtir em Bangkok, Phuket e Chiang Mai.
            </p>
          </div>
        </section>

        {/* 4. O QUE VOCÊ RECEBE */}
        <section className="py-20 bg-muted/30 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Roteiro dia-a-dia" },
              { icon: BookOpen, title: "Checklist documentos" },
              { icon: Camera, title: "Kit Songkran" },
              { icon: Map, title: "Mapas offline" },
              { icon: Check, title: "Transporte seguro" },
              { icon: Check, title: "Guia ético" }
            ].map((item, i) => (
              <div key={i} className="bg-background p-6 rounded-xl flex items-center gap-4 border">
                <item.icon className="w-8 h-8 text-primary" />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. BENEFÍCIOS */}
        <section className="py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Benefícios Rápidos</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p>💰 Economize até R$1.800 em hotel reservando na data certa</p>
            <p>✈️ Não perca voo por passaporte molhado</p>
            <p>🤫 Saiba onde os locais fogem da multidão</p>
          </div>
        </section>

        {/* 6. AUTORIDADE */}
        <section className="py-20 bg-primary text-primary-foreground px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 rounded-full bg-white mx-auto mb-6"></div>
            <p className="text-lg">"Eu sou Flavio Estevam, do @guiadeposesfotos. Moro em Patong, Phuket. Todo abril eu ajudo brasileiros no Songkran. Esse guia é o que eu mando para meus amigos."</p>
          </div>
        </section>

        {/* 8. BÔNUS */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Bônus Exclusivos</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-xl">Planilha de gastos em baht</div>
              <div className="bg-background p-6 rounded-xl">Frases em tailandês (áudio)</div>
              <div className="bg-background p-6 rounded-xl">Suporte no WhatsApp</div>
            </div>
          </div>
        </section>

        {/* 9. OFERTA */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-xl mx-auto border-4 border-orange-500 p-8 rounded-2xl">
            <p className="text-xl mb-2">Guia Songkran 2026 + 3 Bônus</p>
            <p className="text-4xl font-black mb-4">De R$97 por R$47</p>
            <Button size="lg" className="w-full text-xl py-8">GARANTIR ACESSO AGORA</Button>
            <p className="mt-4 text-sm">Pix • Cartão • Acesso imediato por e-mail</p>
          </div>
        </section>

        {/* 10. GARANTIA */}
        <section className="py-10 bg-muted text-center">
          <p className="font-bold">7 dias. Leu, não curtiu? Eu devolvo no Pix. Simples.</p>
        </section>

        {/* 11. FAQ */}
        <section className="py-20 px-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Preciso de visto?</AccordionTrigger>
              <AccordionContent>Não, até 90 dias.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quando comprar passagem?</AccordionTrigger>
              <AccordionContent>Até janeiro, antes da alta.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* 12. CTA FINAL */}
        <section className="py-20 text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Pronto para entrar na briga de água mais louca do planeta?</h2>
          <Button size="lg" className="text-xl px-10 py-8">BAIXAR GUIA SONGKRAN 2026</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaSongkran;
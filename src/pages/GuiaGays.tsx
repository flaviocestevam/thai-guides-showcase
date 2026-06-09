import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection } from "@/components/ConversionSections";
import { CTAButton } from "@/components/festival/CTAButton";
import { Shield, Zap, RotateCcw, Check, X, MapPin, Hotel, Plane, Star } from "lucide-react";
import heroImg from "@/assets/festas/bangkok-nightlife.jpg";

const LINK_PAGAMENTO = "[LINK_DE_PAGAMENTO_GAYS]";

const GuiaGays = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Guia Tailândia para Gays | Guias Tailândia"
        description="Guia em português para viajantes gays que querem conhecer a Tailândia com mais segurança, liberdade e confiança. Dicas de onde ficar, onde ir e o que evitar."
        canonicalPath="/tailandia-para-gays"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <img src={heroImg} alt="Tailândia" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <span className="inline-block bg-primary/20 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">Liberdade e Segurança</span>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-tight">Tailândia para <span className="text-gradient-gold">Viajantes Gays</span></h1>
            <p className="text-xl text-muted-foreground">O guia essencial para viajar com confiança, conforto e viver experiências incríveis.</p>
            <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO MEU GUIA POR R$ 97</CTAButton>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {["Liberdade Total", "Dicas de Segurança", "Hotéis Friendly"].map(item => (
              <div key={item} className="bg-card p-6 border-glow rounded-xl font-bold">{item}</div>
            ))}
          </div>
        </section>

        {/* COMPARATIVO */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Fazer sozinho vs Com o Guia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-xl border border-destructive/20">
                <h3 className="font-bold text-destructive mb-4">❌ Sem o guia</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Escolher hotéis fora das zonas LGBTQIA+</li>
                  <li>Perder tempo com baladas genéricas</li>
                  <li>Incerteza sobre segurança</li>
                </ul>
              </div>
              <div className="p-6 bg-card rounded-xl border border-primary/20">
                <h3 className="font-bold text-primary mb-4">✅ Com o Guia</h3>
                <ul className="space-y-2 text-sm">
                  <li>Regiões selecionadas e seguras</li>
                  <li>Vida noturna validada</li>
                  <li>Confiança total no planejamento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRECO */}
        <section className="py-20 text-center">
          <p className="text-xl line-through">De R$ 197</p>
          <p className="text-6xl font-black text-primary my-4">R$ 97</p>
          <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO GARANTIR MEU GUIA</CTAButton>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaGays;
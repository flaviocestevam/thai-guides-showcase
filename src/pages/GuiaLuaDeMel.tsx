import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { CTAButton } from "@/components/festival/CTAButton";
import heroImg from "@/assets/trilhas/koh-phangan-bottle-beach.jpg";

const LINK_PAGAMENTO = "[LINK_DE_PAGAMENTO_LUA_DE_MEL]";

const GuiaLuaDeMel = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Guia Lua de Mel na Tailândia | Guias Tailândia"
        description="Planeje sua lua de mel inesquecível na Tailândia. Escolha as melhores ilhas, hotéis e experiências românticas."
        canonicalPath="/lua-de-mel-tailandia"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <img src={heroImg} alt="Lua de mel Tailândia" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-7xl font-display font-black leading-tight">Sua <span className="text-gradient-gold">Lua de Mel</span> na Tailândia</h1>
            <p className="text-xl text-muted-foreground">O roteiro romântico que transforma sua viagem em uma experiência inesquecível e sem estresse.</p>
            <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO MEU GUIA POR R$ 97</CTAButton>
          </div>
        </section>

        {/* DECISOES */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Escolhas que definem uma viagem inesquecível</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["A Ilha Certa", "Hotéis Românticos", "Experiências Especiais"].map(item => (
                <div key={item} className="bg-card border-glow p-8 rounded-2xl font-bold">{item}</div>
              ))}
            </div>
          </div>
        </section>

        {/* PRECO */}
        <section className="py-20 text-center">
          <p className="text-6xl font-black text-primary my-4">R$ 97</p>
          <CTAButton href={LINK_PAGAMENTO} size="lg">QUERO MEU GUIA AGORA</CTAButton>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaLuaDeMel;
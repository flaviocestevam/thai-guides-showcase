import heroImg from "@/assets/generated/lanternas-hero.png.asset.json";
import { CTAButton } from "@/components/festival/CTAButton";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg.url}
      alt="Milhares de lanternas flutuando no céu de Chiang Mai durante o Festival Yi Peng"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
      <span className="inline-block bg-primary/20 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
        🏮 Experiência Única na Tailândia
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
        Festival das Lanternas em{" "}
        <span className="text-gradient-gold">Chiang Mai</span>
      </h1>

      <p className="text-xl md:text-2xl font-display font-semibold text-primary">
        Edição Oficial
      </p>

      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
        Um guia completo para brasileiros: de Bangkok a Chiang Mai, onde
        assistir, quanto custa e como viver a melhor experiência durante o Yi
        Peng & Loy Krathong, uma das celebrações mais mágicas da Tailândia.
      </p>

      <div className="bg-card/60 backdrop-blur-sm border-glow rounded-xl px-6 py-4 max-w-2xl mx-auto">
        <p className="text-sm md:text-base font-body text-foreground leading-relaxed">
          ⚠️ <strong>Leia esta página até o final</strong> — existe um erro que 90% dos brasileiros cometem ao planejar essa viagem e que custa <strong className="text-destructive">mais de R$ 2.000</strong>. Mais abaixo, revelamos qual é e como evitá-lo.
        </p>
      </div>

      <CTAButton href={HOTMART_LINK} size="lg">
        🎫 QUERO MEU GUIA AGORA!
      </CTAButton>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body pt-2">
        <span className="flex items-center gap-1">✅ Pagamento 100% Seguro</span>
        <span className="flex items-center gap-1">✅ Entrega Imediata</span>
        <span className="flex items-center gap-1">✅ Suporte Dedicado</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
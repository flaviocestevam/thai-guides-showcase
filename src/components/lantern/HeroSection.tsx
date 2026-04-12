import heroImg from "@/assets/hero-lanterns.jpg";
import { LanternCTAButton } from "@/components/lantern/CTAButton";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Lantern Festival in Chiang Mai"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
      <span className="inline-block bg-primary/20 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
        🏮 A Unique Thailand Experience
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
        Lantern Festival in{" "}
        <span className="text-gradient-gold">Chiang Mai</span>
      </h1>

      <p className="text-xl md:text-2xl font-display font-semibold text-primary">
        Official Edition
      </p>

      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
        A complete guide for travelers: from Bangkok to Chiang Mai, where
        to watch, how much it costs, and how to have the best experience during Yi
        Peng & Loy Krathong, one of Thailand's most magical celebrations.
      </p>

      <div className="bg-card/60 backdrop-blur-sm border-glow rounded-xl px-6 py-4 max-w-2xl mx-auto">
        <p className="text-sm md:text-base font-body text-foreground leading-relaxed">
          ⚠️ <strong>Read this page to the end</strong> — there's a mistake that 90% of travelers make when planning this trip that costs <strong className="text-destructive">over $400</strong>. Below, we reveal what it is and how to avoid it.
        </p>
      </div>

      <LanternCTAButton href={HOTMART_LINK} size="lg">
        🎫 I WANT MY GUIDE NOW!
      </LanternCTAButton>

      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body pt-2">
        <span className="flex items-center gap-1">✅ 100% Secure Payment</span>
        <span className="flex items-center gap-1">✅ Instant Delivery</span>
        <span className="flex items-center gap-1">✅ Dedicated Support</span>
      </div>
    </div>
  </section>
);

export default HeroSection;

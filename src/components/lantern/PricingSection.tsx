import { LanternCTAButton } from "@/components/lantern/CTAButton";
import { Shield, Zap, RotateCcw } from "lucide-react";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const PricingSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        Turn Your Dream Into{" "}
        <span className="text-gradient-gold">Reality!</span>
      </h2>
      <p className="text-muted-foreground font-body text-base md:text-lg mb-12 max-w-2xl mx-auto">
        Don't miss the opportunity to experience the Lantern Festival in a way you never imagined. Our guide is the investment you were missing for your trip to be truly unforgettable.
      </p>

      <div className="bg-card border-glow rounded-3xl p-8 md:p-12 glow-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">
          ⏰ LIMITED OFFER
        </div>

        <p className="text-muted-foreground font-body text-lg line-through mb-1">$97</p>
        <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-2">
          $47
        </p>
        <p className="text-primary font-body font-semibold text-sm mb-8">
          Special offer for a limited time! 🔥
        </p>

        <LanternCTAButton href={HOTMART_LINK} size="lg" className="w-full max-w-md">
          🎫 GET MY GUIDE NOW!
        </LanternCTAButton>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground font-body">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" /> 100% Secure Payment
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" /> Instant Delivery
          </span>
          <span className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-primary" /> 7-Day Guarantee
          </span>
        </div>
      </div>

      <div className="mt-8 bg-primary/10 border-glow rounded-xl p-5">
        <p className="font-body text-sm text-foreground">
          ⚡ <strong>Attention:</strong> Hotels and VIP tickets sell out months before the festival. Get your guide now and plan ahead!
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;

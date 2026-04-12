import { LanternCTAButton } from "@/components/lantern/CTAButton";
import { Shield, Zap, RotateCcw, Clock, CheckCircle2 } from "lucide-react";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const urgencyPoints = [
  "Hotels in Chiang Mai sell out MONTHS before the festival",
  "VIP tickets for CAD Kom Loi sell out in days",
  "Without planning, you pay up to 3x more for everything",
  "Every day without the guide is one less day to prepare",
];

const FinalCTASection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block bg-destructive/10 text-destructive font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
        🔥 LAST CHANCE — DON'T WAIT
      </span>

      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
        In 5 Minutes You Could Be{" "}
        <span className="text-gradient-gold">Planning the Trip of Your Life</span>
      </h2>

      <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
        Or you can close this page, keep researching for hours on outdated blogs and videos from influencers who were never really there. The choice is yours. But remember: <strong className="text-foreground">those who don't prepare pay the price — literally.</strong>
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
        {urgencyPoints.map((point) => (
          <div key={point} className="flex items-start gap-3 bg-card/50 border-glow rounded-lg p-4">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-body text-sm">{point}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border-glow rounded-3xl p-8 md:p-12 glow-gold relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">
          ⏰ MAY GO OFFLINE AT ANY MOMENT
        </div>

        <p className="text-muted-foreground font-body text-sm mb-1">From <span className="line-through">$97</span> for only</p>
        <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-1">
          $47
        </p>
        <p className="text-muted-foreground font-body text-xs mb-1">or 12x of $4.56</p>
        <p className="text-primary font-body font-semibold text-sm mb-8">
          Less than a dinner in Chiang Mai. But it can save your entire trip. 🔥
        </p>

        <LanternCTAButton href={HOTMART_LINK} size="lg" className="w-full max-w-md">
          🎫 I WANT MY GUIDE NOW — ZERO RISK!
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

      <div className="bg-card border-glow rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-xl mb-4">🛡️ Ironclad 7-Day Guarantee</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          Buy now, read the entire guide, and if within 7 days you think it's not worth the investment, we refund <strong className="text-foreground">100% of your money</strong>. No questions asked, no hassle, no fine print.
        </p>
        <p className="text-primary font-body font-semibold text-sm">
          The only risk you take is missing this opportunity.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {[
          "Over 4,000 travelers have used our guides",
          "19 years of real experience in Thailand",
          "Content tested and updated by those who lived the festival",
        ].map((item) => (
          <div key={item} className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTASection;

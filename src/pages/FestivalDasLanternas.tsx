import HeroSection from "@/components/festival/HeroSection";
import SocialProofPopup from "@/components/festival/SocialProofPopup";
import VideoSection from "@/components/festival/VideoSection";
import CountdownTimer from "@/components/festival/CountdownTimer";
import FeaturesSection from "@/components/festival/FeaturesSection";
import PainSection from "@/components/festival/PainSection";
import RiskSection from "@/components/festival/RiskSection";
import ComparisonSection from "@/components/festival/ComparisonSection";
import AuthoritySection from "@/components/festival/AuthoritySection";
import ContentSection from "@/components/festival/ContentSection";
import BonusSection from "@/components/festival/BonusSection";
import TestimonialsSection from "@/components/festival/TestimonialsSection";
import PricingSection from "@/components/festival/PricingSection";
import FAQSection from "@/components/festival/FAQSection";
import FinalCTASection from "@/components/festival/FinalCTASection";
import TargetAudienceSection from "@/components/festival/TargetAudienceSection";
import FloatingCTA from "@/components/festival/FloatingCTA";

const FestivalDasLanternas = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <CountdownTimer />
      <VideoSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <PainSection />
      <RiskSection />
      <ComparisonSection />
      <AuthoritySection />
      <ContentSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />

      <footer className="py-8 text-center text-muted-foreground text-xs font-body border-t border-border pb-20">
        <p>© Guias da Tailândia. Todos os direitos reservados.</p>
      </footer>
      <SocialProofPopup />
      <FloatingCTA />
    </div>
  );
};

export default FestivalDasLanternas;
import HeroSection from "@/components/lantern/HeroSection";
import SocialProofPopup from "@/components/lantern/SocialProofPopup";
import VideoSection from "@/components/lantern/VideoSection";
import CountdownTimer from "@/components/lantern/CountdownTimer";
import FeaturesSection from "@/components/lantern/FeaturesSection";
import PainSection from "@/components/lantern/PainSection";
import RiskSection from "@/components/lantern/RiskSection";
import ComparisonSection from "@/components/lantern/ComparisonSection";
import AuthoritySection from "@/components/lantern/AuthoritySection";
import ContentSection from "@/components/lantern/ContentSection";
import BonusSection from "@/components/lantern/BonusSection";
import TestimonialsSection from "@/components/lantern/TestimonialsSection";
import PricingSection from "@/components/lantern/PricingSection";
import FAQSection from "@/components/lantern/FAQSection";
import FinalCTASection from "@/components/lantern/FinalCTASection";
import TargetAudienceSection from "@/components/lantern/TargetAudienceSection";
import FloatingCTA from "@/components/lantern/FloatingCTA";
import { SEO } from "@/components/SEO";

const LanternFestival = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Lantern Festival Chiang Mai Guide — Yi Peng & Loy Krathong"
        description="Complete guide to the Lantern Festival in Chiang Mai: tickets, locations, and itineraries for Yi Peng and Loy Krathong."
        canonicalPath="/lanternfestival"
      />
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
        <p>© Thailand Guides. All rights reserved.</p>
      </footer>
      <SocialProofPopup />
      <FloatingCTA />
    </div>
  );
};

export default LanternFestival;

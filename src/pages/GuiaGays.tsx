import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import HeroSection from "@/components/festival/HeroSection";
import SocialProofPopup from "@/components/festival/SocialProofPopup";
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

const GuiaGays = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Guia Tailândia para Gays | Guias Tailandia"
        description="Guia em português para viajantes gays que querem conhecer a Tailândia com mais segurança, liberdade e confiança. Dicas de onde ficar, onde ir, o que evitar e como aproveitar melhor."
        canonicalPath="/tailandia-para-gays"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        <HeroSection />
        <FeaturesSection />
        <TargetAudienceSection />
        <PainSection />
        <RiskSection />
        <ComparisonSection />
        <AuthoritySection />
        <ContentSection />
        <BonusSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <InternalLinksSection currentPath="/tailandia-para-gays" />
        <BackToHomeFooter />
      </main>
      <Footer />
      <SocialProofPopup />
      <FloatingCTA />
    </div>
  );
};

export default GuiaGays;
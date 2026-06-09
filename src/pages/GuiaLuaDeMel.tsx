import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import HeroSection from "@/components/festival/HeroSection";
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
import SocialProofPopup from "@/components/festival/SocialProofPopup";

const GuiaLuaDeMel = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <SEO 
        title="Guia Lua de Mel na Tailândia | Guias Tailândia"
        description="Planeje sua lua de mel inesquecível na Tailândia. Escolha as melhores ilhas, hotéis e experiências românticas com o guia em português."
        canonicalPath="/lua-de-mel-tailandia"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />

        <HeroSection />

        <ConversionBlock 
          title="A viagem da vida de vocês merece perfeição" 
          subtitle="Não arrisque o momento mais importante a dois com um roteiro cansativo ou ilhas erradas."
        />

        <FeaturesSection />
        
        <TargetAudienceSection />

        <PainSection />

        <RiskSection />

        <ComparisonSection />

        <AuthoritySection />

        <ConversionBlock 
          title="O paraíso planejado para o casal"
          subtitle="Seleção de hotéis boutique, jantares pé na areia e as ilhas mais românticas da Tailândia."
        />

        <ContentSection />

        <BonusSection />

        <TestimonialsSection />

        <PricingSection />

        <FAQSection />

        <FinalCTASection />

        <InternalLinksSection currentPath="/lua-de-mel-tailandia" />
        
        <div className="max-w-7xl mx-auto px-4 py-20">
          <BackToHomeFooter />
        </div>
      </main>
      <Footer />
      <SocialProofPopup />
      <FloatingCTA />
    </div>
  );
};

export default GuiaLuaDeMel;
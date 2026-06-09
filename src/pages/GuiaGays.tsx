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

const GuiaGays = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <SEO 
        title="Guia Tailândia para Gays | Guias Tailândia"
        description="Guia em português para viajantes gays que querem conhecer a Tailândia com mais segurança, liberdade e confiança. Dicas de onde ficar, onde ir, o que evitar e como aproveitar melhor."
        canonicalPath="/tailandia-para-gays"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />

        <HeroSection />

        <ConversionBlock 
          title="Viaje com total liberdade e orgulho" 
          subtitle="Descubra os lugares realmente inclusivos e evite ciladas turísticas na vida noturna de Bangkok."
        />

        <FeaturesSection />
        
        <TargetAudienceSection />

        <PainSection />

        <RiskSection />

        <ComparisonSection />

        <AuthoritySection />

        <ConversionBlock 
          title="Seu guia seguro na Terra do Sorriso"
          subtitle="Mapas detalhados de Silom, hotéis boutique e as melhores ilhas para o público LGBTQIA+."
        />

        <ContentSection />

        <BonusSection />

        <TestimonialsSection />

        <PricingSection />

        <FAQSection />

        <FinalCTASection />

        <InternalLinksSection currentPath="/tailandia-para-gays" />
        
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

export default GuiaGays;
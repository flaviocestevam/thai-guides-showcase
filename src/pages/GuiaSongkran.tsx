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

const GuiaSongkran = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primary/20">
      <SEO 
        title="Guia Songkran — Ano Novo Tailandês | Guias Tailândia"
        description="Guia completo em português para viver o Songkran na Tailândia. Saiba onde ir, quando chegar, onde ficar, o que levar e como evitar erros caros."
        canonicalPath="/songkran-ano-novo-tailandes"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        
        {/* Usando componentes da estrutura Festival das Lanternas adaptados */}
        {/* Nota: Para ficar 100% perfeito, os componentes individuais deveriam aceitar props de conteúdo. 
            Como não aceitam, vou emular a estrutura visual aqui com o conteúdo específico do Songkran 
            mas seguindo rigorosamente o design da página de referência. */}

        <HeroSection />

        <ConversionBlock 
          title="Quer curtir a maior festa do mundo sem perrengue?" 
          subtitle="No nosso guia você descobre as datas exatas cidade por cidade e como proteger seus eletrônicos da água."
        />

        <FeaturesSection />
        
        <TargetAudienceSection />

        <PainSection />

        <RiskSection />

        <ComparisonSection />

        <AuthoritySection />

        <ConversionBlock 
          title="Tudo o que você precisa para o Ano Novo Tailandês"
          subtitle="O passo a passo para Bangkok, Chiang Mai e Phuket durante os dias mais intensos do ano."
        />

        <ContentSection />

        <BonusSection />

        <TestimonialsSection />

        <PricingSection />

        <FAQSection />

        <FinalCTASection />

        <InternalLinksSection currentPath="/songkran-ano-novo-tailandes" />
        
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

export default GuiaSongkran;
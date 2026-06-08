import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
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
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Guia do Festival das Lanternas",
    "brand": { "@type": "Brand", "name": "Guia Tailândia" },
    "offers": { "@type": "Offer", "price": "47.00", "priceCurrency": "BRL" }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Guia do Festival das Lanternas Chiang Mai"
        description="Guia completo para o Festival das Lanternas Yi Peng e Loy Krathong em Chiang Mai: ingressos, onde assistir e roteiro."
        canonicalPath="/festivaldaslanternas"
      />
      <StructuredData data={productSchema} />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-4">
          <BackToHome />
        </div>
        <HeroSection />
        <ConversionBlock 
          title="Quer economizar até R$ 800?" 
          subtitle="No nosso guia você descobre como comprar ingressos oficiais e evitar armadilhas que custam caro."
        />
        <CountdownTimer />
        <VideoSection />
        <FeaturesSection />
        <TargetAudienceSection />
        <PainSection />
        <RiskSection />
        <ComparisonSection />
        <AuthoritySection />
        <ConversionBlock 
          title="Tudo o que você precisa em um só lugar"
          subtitle="O passo a passo completo de Bangkok a Chiang Mai, onde se hospedar e como se locomover."
        />
        <ContentSection />
        <BonusSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <InternalLinksSection currentPath="/festivaldaslanternas" />
        <BackToHomeFooter />
      </main>
      <Footer />
      <SocialProofPopup />
      <FloatingCTA />

    </div>
  );
};

export default FestivalDasLanternas;
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import TopBar from "@/components/muaythai/TopBar";
import HeroSection from "@/components/muaythai/HeroSection";
import ProblemSection from "@/components/muaythai/ProblemSection";
import DreamSection from "@/components/muaythai/DreamSection";
import ComparisonSection from "@/components/muaythai/ComparisonSection";
import WhatYouGet from "@/components/muaythai/WhatYouGet";
import TestimonialsSection from "@/components/muaythai/TestimonialsSection";
import PricingSection from "@/components/muaythai/PricingSection";
import PerspectiveSection from "@/components/muaythai/PerspectiveSection";
import GuaranteeSection from "@/components/muaythai/GuaranteeSection";
import ForYouSection from "@/components/muaythai/ForYouSection";
import FAQSection from "@/components/muaythai/FAQSection";
import FinalCTA from "@/components/muaythai/FinalCTA";


const MuayThai = () => {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Guia Muay Thai na Tailândia",
    "brand": { "@type": "Brand", "name": "Guia Tailândia" },
    "offers": { "@type": "Offer", "price": "97.00", "priceCurrency": "BRL" }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Guia Muay Thai na Tailândia — Treine no Lugar Certo"
        description="Onde treinar Muay Thai na Tailândia? Guia com os melhores camps, custos reais e roteiros para lutadores iniciantes e avançados."
        canonicalPath="/muaythai"
      />
      <StructuredData data={productSchema} />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-4">
          <BackToHome />
        </div>
        <TopBar />
        <HeroSection />
        <ConversionBlock 
          title="Treine no lugar certo"
          subtitle="Evite academias turísticas que cobram o dobro. Saiba onde os profissionais treinam."
        />
        <ProblemSection />
        <DreamSection />
        <ComparisonSection />
        <WhatYouGet />
        <ConversionBlock 
          title="Economize tempo e dinheiro"
          subtitle="Saiba exatamente quanto custa, como chegar e o que levar para o seu camp na Tailândia."
        />
        <TestimonialsSection />
        <PricingSection />
        <PerspectiveSection />
        <GuaranteeSection />
        <ForYouSection />
        <FAQSection />
        <FinalCTA />
        <InternalLinksSection currentPath="/muaythai" />
        <BackToHomeFooter />
      </main>
      <Footer />
    </div>
  );
};


export default MuayThai;

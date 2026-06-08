import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import { Check, Shield, Clock, Star, MapPin, AlertTriangle, ChevronDown, Users, BookOpen, Zap, Heart, ArrowRight, X, Quote, Sparkles, Ban, CircleCheck, Mountain, Compass, Camera, Footprints, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const CAKTO_LINK = "[LINK_DE_PAGAMENTO]";

const CTAButton = ({ large = false }: { large?: boolean }) => (
  <a
    href={CAKTO_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl animate-pulse-subtle ${
      large ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg"
    }`}
  >
    QUERO O GUIA AGORA <ArrowRight className="w-5 h-5" />
  </a>
);

const TestimonialCard = ({ name, text, location }: { name: string; text: string; location: string }) => (
  <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-muted-foreground italic mb-4 font-body">"{text}"</p>
    <div>
      <p className="font-semibold text-foreground text-sm">{name}</p>
      <p className="text-muted-foreground text-xs">{location}</p>
    </div>
  </div>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-foreground font-body"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-muted-foreground font-body">{a}</p>}
    </div>
  );
};

const GuiaVoluntariado = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SEO 
        title="Guia de Voluntariado na Tailândia | Guias Tailândia"
        description="Guia completo em português para brasileiros que querem fazer voluntariado na Tailândia. Com elefantes, crianças, meio ambiente e comunidades. Por R$ 67."
        canonicalPath="/guia-voluntariado-tailandia"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        
        {/* HERO */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary mb-4 block uppercase tracking-wider">🌿 O único guia em português sobre voluntariado na Tailândia</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Viva a Tailândia por dentro.<br/>Faça voluntariado e mude sua história.</h1>
            <p className="text-xl text-muted-foreground mb-8">Um guia completo e em português para você encontrar, se inscrever e chegar preparado no seu voluntariado na Tailândia — com elefantes, crianças, meio ambiente ou comunidades rurais.</p>
            <CTAButton large />
            <div className="flex justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>🔒 Compra 100% segura</span>
              <span>📲 Acesso imediato</span>
              <span>✅ Para brasileiros</span>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Você quer fazer voluntariado na Tailândia, mas não sabe por onde começar?</h2>
            <div className="grid gap-4">
              {[
                "Pesquisou no Google e encontrou apenas sites em inglês, com informações confusas.",
                "Ficou em dúvida se precisa de visto especial, vacinas ou certificações.",
                "Não sabe se os programas são confiáveis ou se são armadilhas.",
                "Medo de chegar lá e não saber como funciona a rotina ou custos.",
                "Não encontrou conteúdo completo em português para brasileiros."
              ].map(item => (
                <div key={item} className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-lg text-red-900">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Escolha o tipo de voluntariado que combina com você</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { i: "🐘", t: "Elefantes", d: "Santuários éticos com elefantes resgatados." },
                { i: "👦", t: "Crianças", d: "Apoio pedagógico e inglês em comunidades." },
                { i: "🌱", t: "Ambiente", d: "Reflorestamento e proteção de tartarugas." },
                { i: "🏘️", t: "Comunidades", d: "Vida local e apoio social em áreas rurais." }
              ].map(card => (
                <div key={card.t} className="bg-card p-6 rounded-xl border">
                  <span className="text-4xl mb-4 block">{card.i}</span>
                  <h3 className="font-bold mb-2">{card.t}</h3>
                  <p className="text-muted-foreground">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INCLUSIONS */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Tudo que você vai encontrar dentro do guia</h2>
            <div className="grid gap-4">
              {[
                "Como funciona o voluntariado",
                "Tipos de voluntariado disponíveis",
                "Visto para voluntários",
                "Vacinas obrigatórias",
                "Melhores plataformas de busca",
                "Como avaliar se é confiável",
                "Custos reais e simulações",
                "Como se inscrever passo a passo",
                "Modelo de carta em inglês",
                "O que levar na mochila",
                "Dicas culturais essenciais"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-xl mx-auto text-center bg-white p-12 rounded-2xl border shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Guia de Voluntariado</h2>
            <p className="text-5xl font-black text-primary mb-6">R$ 67,00</p>
            <CTAButton />
            <p className="mt-4 text-sm text-muted-foreground">Acesso imediato · Pagamento único</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Dúvidas frequentes</h2>
            <FAQItem q="Como recebo o guia?" a="Recebe por e-mail imediatamente após a compra." />
            <FAQItem q="Precisa falar inglês fluente?" a="Não é obrigatório, mas recomendado ter inglês básico." />
            <FAQItem q="Tem garantia?" a="Sim, 7 dias de garantia total." />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <BackToHome />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaVoluntariado;

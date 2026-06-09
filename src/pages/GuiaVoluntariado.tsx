import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import { 
  Check, Shield, Clock, Star, MapPin, AlertTriangle, ChevronDown, 
  Users, BookOpen, Zap, Heart, ArrowRight, X, Quote, Sparkles, 
  Ban, CircleCheck, Mountain, Compass, Camera, Footprints, 
  Calendar, Globe, GraduationCap, PawPrint, Leaf, Home, 
  Smile, Coffee, Map
} from "lucide-react";
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
      {open && <p className="pb-5 text-muted-foreground font-body leading-relaxed">{a}</p>}
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
        <section className="py-20 px-4 bg-muted/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <Globe className="w-64 h-64" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> O único guia em português sobre voluntariado na Tailândia
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
              Viaje com <span className="text-primary">Propósito.</span><br/>
              Impacte o mundo enquanto explora.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              O caminho mais seguro para brasileiros que querem transformar sua viagem à Tailândia em uma experiência de vida inesquecível através do voluntariado ético.
            </p>
            <CTAButton large />
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground font-semibold">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> Compra 100% segura</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Acesso imediato</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="w-4 h-4 text-primary" /> 100% em Português</span>
            </div>
          </div>
        </section>

        {/* LEARN SECTION - SURPRISE ELEMENT */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">O que você vai <span className="text-primary">aprender</span> com este guia?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto font-body">
                Não é apenas uma lista de lugares, é um manual estratégico para sua jornada.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Compass className="w-8 h-8" />, 
                  title: "Planejamento Estratégico", 
                  desc: "Desde a escolha do projeto até a compra da passagem e o que levar na mochila específica para cada clima." 
                },
                { 
                  icon: <GraduationCap className="w-8 h-8" />, 
                  title: "Inscrição de Alto Impacto", 
                  desc: "Como escrever uma carta de motivação que garanta sua vaga nos projetos mais disputados." 
                },
                { 
                  icon: <BookOpen className="w-8 h-8" />, 
                  title: "Segurança e Ética", 
                  desc: "Aprenda a identificar projetos reais e fugir do 'volunturismo' que prejudica comunidades locais." 
                },
                { 
                  icon: <Map className="w-8 h-8" />, 
                  title: "Logística Local", 
                  desc: "Como se locomover no interior da Tailândia, chips de internet e aplicativos essenciais." 
                },
                { 
                  icon: <Smile className="w-8 h-8" />, 
                  title: "Cultura e Etiqueta", 
                  desc: "O que não fazer em templos e como se comportar com a equipe local para ser respeitado." 
                },
                { 
                  icon: <Coffee className="w-8 h-8" />, 
                  title: "Rotina e Adaptação", 
                  desc: "Como lidar com a comida, o calor e a convivência em alojamentos compartilhados." 
                }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORIES SECTION - IMPROVED CATEGORIZATION */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Categorias de Voluntariado que <span className="text-primary">exploramos</span></h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Existem dezenas de formas de ajudar. Veja quais os pilares principais que cobrimos em detalhes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-3xl overflow-hidden group">
                <div className="h-4 bg-primary group-hover:bg-primary/80 transition-colors"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <PawPrint className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-display font-bold">Cuidado Animal</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Focado principalmente em Santuários de Elefantes Éticos, mas também cobrimos abrigos de cães resgatados em ilhas como Koh Lanta e centros de reabilitação de vida selvagem.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Como identificar santuários éticos</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Requisitos físicos para voluntários</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Cuidados de saúde (raiva, tétano, etc)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl overflow-hidden group">
                <div className="h-4 bg-blue-500 group-hover:bg-blue-400 transition-colors"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <h3 className="text-2xl font-display font-bold">Educação e Crianças</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Apoio em escolas rurais no norte da Tailândia ou centros comunitários em áreas urbanas de Bangkok. Ensino de inglês básico, esportes e atividades recreativas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-blue-500" /> Nível de inglês necessário</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-blue-500" /> Código de conduta com menores</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-blue-500" /> Preparação de materiais didáticos</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl overflow-hidden group">
                <div className="h-4 bg-green-600 group-hover:bg-green-500 transition-colors"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="w-6 h-6 text-green-600" />
                    <h3 className="text-2xl font-display font-bold">Preservação Ambiental</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Projetos de reflorestamento em Chiang Mai, conservação marinha em Koh Tao e proteção de manguezais. Ideal para quem ama natureza e trabalho braçal.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-600" /> Projetos de limpeza marinha</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-600" /> Reflorestamento e agricultura orgânica</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-600" /> Trabalho com manguezais e biodiversidade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border border-border rounded-3xl overflow-hidden group">
                <div className="h-4 bg-orange-500 group-hover:bg-orange-400 transition-colors"></div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-6 h-6 text-orange-500" />
                    <h3 className="text-2xl font-display font-bold">Apoio Comunitário</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Vivência profunda em aldeias Hill Tribe no norte. Ajuda em construções sustentáveis, saneamento e empoderamento de mulheres artesãs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-orange-500" /> Adaptação a condições rurais</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-orange-500" /> Troca cultural e impacto social</li>
                    <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-orange-500" /> Apoio a ONGs locais de base</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING BLOCK - STANDARDIZED WITH SITE */}
        <section className="py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-[2rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-10 py-2 font-bold text-sm rotate-0 translate-x-0">OFERTA DE LANÇAMENTO</div>
            <div className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Guia Completo de Voluntariado</h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-muted-foreground line-through text-xl">R$ 197</span>
                <span className="text-5xl md:text-7xl font-black text-primary">R$ 67</span>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-body">
                Economize dezenas de horas de pesquisa e evite taxas desnecessárias de agências intermediárias.
              </p>
              <CTAButton large />
              <p className="mt-8 text-sm text-muted-foreground font-semibold flex items-center justify-center gap-2 uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Pagamento Único · Acesso Vitalício
              </p>
            </div>
          </div>
        </section>

        {/* FAQ - EXTENDED */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Dúvidas <span className="text-primary">Comuns</span></h2>
            <div className="space-y-2">
              <FAQItem 
                q="Como vou receber o guia?" 
                a="Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de download do guia em PDF. Você poderá ler no celular, tablet ou computador." 
              />
              <FAQItem 
                q="Precisa falar inglês fluente?" 
                a="Para a maioria dos projetos de animais e ambiente, o inglês básico/intermediário é suficiente para seguir instruções. No guia, fornecemos modelos de carta em inglês para te ajudar na inscrição." 
              />
              <FAQItem 
                q="Vou ter que pagar para ser voluntário?" 
                a="Na Tailândia, projetos que oferecem alojamento e comida geralmente cobram uma taxa simbólica para cobrir seus custos operacionais. O guia explica como encontrar os projetos com as melhores taxas e como fugir de agências que cobram fortunas." 
              />
              <FAQItem 
                q="O guia inclui as vacinas?" 
                a="Sim! Temos um checklist completo de vacinas obrigatórias (como Febre Amarela) e recomendadas para brasileiros que viajam para áreas rurais da Tailândia." 
              />
              <FAQItem 
                q="Tem suporte se eu tiver dúvidas?" 
                a="Sim! Ao adquirir o guia, você terá acesso ao nosso canal de suporte por e-mail para tirar dúvidas pontuais sobre sua viagem e planejamento." 
              />
            </div>
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

import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome } from "@/components/NavigationButtons";
import { 
  Check, Shield, Clock, ChevronDown, 
  BookOpen, Zap, ArrowRight, Sparkles, 
  CircleCheck, GraduationCap, PawPrint, Leaf, Home, 
  Smile, Globe, Compass, AlertTriangle, X, Quote,
  Calendar, DollarSign, MapPin, Heart
} from "lucide-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const CAKTO_LINK = "[LINK_DE_PAGAMENTO]";

const CTAButton = ({ large = false, text = "QUERO O GUIA POR R$ 97" }: { large?: boolean; text?: string }) => (
  <a
    href={CAKTO_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] animate-pulse-subtle ${
      large ? "px-10 py-6 text-xl" : "px-8 py-4 text-lg"
    }`}
  >
    {text} <ArrowRight className="w-5 h-5" />
  </a>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-6 text-left font-semibold text-foreground font-body group"
      >
        <span className="group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
        <p className="text-muted-foreground font-body leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const GuiaVoluntariado = () => {
  useEffect(() => {
    console.log("VOLUNTARIADO_TAILANDIA_R97_NOVA_VERSAO");
  }, []);

  return (
    <div className="min-h-screen bg-background font-body selection:bg-primary/20">
      <Helmet>
        <meta name="audit-version" content="VOLUNTARIADO_TAILANDIA_R97_NOVA_VERSAO" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
      <SEO 
        title="Guia de Voluntariado na Tailândia | Guias Tailandia"
        description="O guia definitivo para fazer voluntariado na Tailândia. Tudo sobre elefantes, crianças e projetos ambientais por R$ 97."
        canonicalPath="/voluntariado-tailandia"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        
        {/* HERO */}
        <section className="py-20 md:py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8 uppercase tracking-widest border border-primary/20">
              <Leaf className="w-4 h-4" /> O único guia em português sobre voluntariado na Tailândia
            </span>
            <h1 className="text-4xl md:text-7xl font-display font-black mb-8 leading-[1.1] tracking-tight">
              Viva a Tailândia por dentro.<br/>
              <span className="text-primary">Faça voluntariado e mude sua história.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Um guia passo a passo em português para você encontrar, se inscrever e viver um voluntariado ético com elefantes, crianças ou projetos ambientais.
            </p>
            <div className="space-y-6">
              <CTAButton large text="QUERO O GUIA POR R$ 97" />
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-bold uppercase tracking-wider">
                <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Compra Segura</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Acesso Imediato</span>
                <span className="flex items-center gap-2"><CircleCheck className="w-4 h-4 text-primary" /> Sem experiência</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">
              Perdido entre sites em inglês e informações confusas?
            </h2>
            <div className="grid gap-4 mb-16">
              {[
                "Você só encontra sites em inglês com termos técnicos e preços em dólar.",
                "Não sabe se precisa de visto de voluntário ou se pode ir como turista.",
                "Tem medo de pagar taxas caras e o projeto não ser ético ou seguro.",
                "Não sabe quais vacinas são obrigatórias para quem vai ser voluntário.",
                "Não encontrou um roteiro claro de como organizar tudo sozinho, sem agências caras."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <div className="bg-destructive/10 p-2 rounded-lg">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground/90 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <div className="text-center p-10 bg-primary/10 rounded-[2.5rem] border border-primary/20 shadow-inner">
              <p className="text-xl text-foreground font-bold leading-relaxed italic">
                “Este guia foi criado para que qualquer brasileiro consiga planejar seu voluntariado do zero, em português, economizando tempo e dinheiro.”
              </p>
            </div>
          </div>
        </section>

        {/* O QUE É O GUIA */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 text-left">
              <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                O que você vai encontrar no Guia de Voluntariado?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Esqueça as agências que cobram fortunas. Aprenda a encontrar projetos diretamente e a se preparar para a experiência mais intensa da sua vida.
              </p>
              <ul className="space-y-4">
                {[
                  "Passo a passo da inscrição direta",
                  "Vistos e Documentação para brasileiros",
                  "Análise de ética em santuários de elefantes",
                  "Simulação detalhada de custos (reais)",
                  "Modelo de carta de motivação pronta",
                  "Checklist do que levar na mochila"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-semibold">
                    <div className="bg-primary/20 p-1 rounded-full">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-md bg-gradient-to-br from-primary/20 to-primary/5 rounded-[3rem] aspect-[3/4] flex items-center justify-center border-2 border-primary/20 shadow-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
               <div className="text-center p-8 space-y-4">
                 <BookOpen className="w-20 h-20 text-primary mx-auto opacity-50" />
                 <p className="font-display font-black text-3xl uppercase tracking-tighter">Guia<br/>Voluntariado<br/>Tailândia</p>
                 <p className="text-xs font-bold opacity-40">CAPA ILUSTRATIVA</p>
               </div>
            </div>
          </div>
        </section>

        {/* CATEGORIAS */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Escolha seu propósito</h2>
              <p className="text-xl text-muted-foreground">Mostramos os caminhos para as 4 principais categorias de voluntariado.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <PawPrint className="w-10 h-10" />, title: "Elefantes", desc: "Aprenda a identificar santuários realmente éticos e como ajudar no cuidado diário desses gigantes." },
                { icon: <GraduationCap className="w-10 h-10" />, title: "Educação", desc: "Como ensinar inglês básico e apoiar crianças em escolas rurais ou comunidades carentes." },
                { icon: <Leaf className="w-10 h-10" />, title: "Natureza", desc: "Projetos de conservação marinha, reflorestamento e proteção de espécies nativas." },
                { icon: <Home className="w-10 h-10" />, title: "Comunidade", desc: "Imersão total vivendo em vilas tradicionais e ajudando em construções e agricultura local." }
              ].map((card, i) => (
                <div key={i} className="p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all hover:-translate-y-2 group">
                  <div className="text-primary mb-6 transition-transform group-hover:scale-110">{card.icon}</div>
                  <h3 className="text-2xl font-display font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-4xl mx-auto bg-card border-2 border-primary/20 rounded-[3rem] p-8 md:p-16 text-center shadow-xl">
            <div className="inline-flex items-center justify-center p-5 bg-primary/10 rounded-full mb-8">
              <Shield className="w-14 h-14 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Risco Zero para você</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Você tem 7 dias para ler o guia. Se sentir que as informações não são úteis ou não superaram suas expectativas, devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
            <div className="p-6 bg-muted/50 rounded-2xl font-bold text-lg text-primary tracking-widest uppercase">
              Garantia Incondicional de 7 Dias
            </div>
          </div>
        </section>

        {/* PREÇO */}
        <section id="pricing" className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card border border-primary/20 rounded-[3.5rem] overflow-hidden shadow-2xl relative">
              <div className="bg-primary py-3 font-black text-primary-foreground tracking-[0.2em] text-sm">OFERTA DE LANÇAMENTO</div>
              <div className="p-8 md:p-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-10">Guia de Voluntariado na Tailândia</h2>
                
                <div className="flex flex-col items-center gap-2 mb-12">
                  <span className="text-muted-foreground line-through text-xl">De R$ 197</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">Por apenas</span>
                    <span className="text-6xl md:text-8xl font-black text-primary">R$ 97</span>
                  </div>
                  <span className="text-muted-foreground font-bold tracking-widest uppercase text-xs">Pagamento único · Acesso vitalício</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16 max-w-2xl mx-auto">
                  {[
                    "Lista de Plataformas Éticas",
                    "Guia de Vistos atualizado",
                    "Simulador de Custos Reais",
                    "Dicas de Etiqueta Cultural",
                    "Checklist de Mochila",
                    "Modelo de Inscrição em Inglês"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CircleCheck className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-bold text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <CTAButton large text="QUERO GARANTIR MINHA VAGA AGORA" />
                  <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                    <div className="flex items-center gap-2 text-sm font-bold"><Shield className="w-4 h-4" /> SEGURO</div>
                    <div className="flex items-center gap-2 text-sm font-bold"><Zap className="w-4 h-4" /> IMEDIATO</div>
                    <div className="flex items-center gap-2 text-sm font-bold"><DollarSign className="w-4 h-4" /> PIX/CARTÃO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">Dúvidas Frequentes</h2>
            <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 shadow-lg">
              <FAQItem 
                q="Precisa falar inglês fluente?" 
                a="Não é obrigatório ser fluente. Muitos projetos aceitam inglês básico ou intermediário. O guia ensina como se comunicar e fornece modelos de texto prontos para a inscrição." 
              />
              <FAQItem 
                q="Qual a idade mínima para participar?" 
                a="A maioria dos programas exige 18 anos completos. Existem opções para menores acompanhados, mas o foco do guia são projetos para adultos e jovens independentes." 
              />
              <FAQItem 
                q="O guia inclui as vagas de trabalho?" 
                a="O guia não é uma agência de empregos, mas te ensina as MELHORES plataformas e contatos diretos onde as vagas são publicadas diariamente, para que você não precise pagar intermediários." 
              />
              <FAQItem 
                q="O acesso é por quanto tempo?" 
                a="O acesso é vitalício. Você pode baixar o PDF e as atualizações futuras e consultar sempre que estiver planejando sua viagem." 
              />
              <FAQItem 
                q="O pagamento é seguro?" 
                a="Sim, utilizamos uma das plataformas de pagamentos mais seguras do Brasil, com criptografia de ponta e proteção total dos seus dados." 
              />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <BackToHome />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaVoluntariado;
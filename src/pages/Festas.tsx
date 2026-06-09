import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import { ArrowDown, Flame, ShieldAlert, Sparkles, Gem, Clock, Ban, CheckCircle, Wallet, PartyPopper } from "lucide-react";

import { cities, survivalTips } from "@/data/festas";
import CityCard from "@/components/festas/CityCard";
import TipCard from "@/components/festas/TipCard";


const Festas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Guia de Festas na Tailândia — Baladas e Noite"
        description="Onde sair na Tailândia? Guia completo com as melhores festas, baladas e dicas de sobrevivência em 9 cidades incríveis."
        canonicalPath="/festas"
      />
      {/* Header */}
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-4">
          <BackToHome />
        </div>
        {/* Hero */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/assets/festas/hero-thailand.jpg"
          alt="Festa na praia na Tailândia durante a noite"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Guia Definitivo 2025
          </p>
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-violet-500">
              Festas na Tailândia
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Tudo que você precisa saber sobre as melhores festas, baladas e experiências noturnas em 7 cidades incríveis
          </p>
          <a
            href="#cities"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            Explorar Cidades <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </section>
        {/* Dor e Problema */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Cansado de cair em ciladas e perder as melhores festas?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-card p-6 rounded-2xl border border-destructive/20">
                <div className="flex items-center gap-3 mb-4 text-destructive">
                  <ShieldAlert className="w-6 h-6" />
                  <h3 className="text-xl font-bold">O Problema Real</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A Tailândia é famosa pelas festas, mas também por golpes comuns: taxistas que cobram fortunas, baldes de bebida de qualidade duvidosa e bares "pega-turista" que estragam sua noite e seu bolso.
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-primary/20">
                <div className="flex items-center gap-3 mb-4 text-primary">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-xl font-bold">A Solução Ideal</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Com o nosso Guia de Festas, você vai direto aos lugares que valem a pena. Economize tempo e dinheiro sabendo exatamente onde ir, o que pedir e como evitar os erros clássicos de quem viaja pela primeira vez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experiências Únicas e Secretas */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4 text-pink-500">
              <Gem className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase">Segredos Revelados</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-16">
              Experiências Únicas e Secretas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Clock className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">After Hours em Bangkok</h3>
                <p className="text-muted-foreground">Onde a festa continua depois que as luzes se apagam em Sukhumvit. Os locais que os guias comuns não mostram.</p>
              </div>
              <div className="relative group overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Flame className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Festas Secretas em Koh Phangan</h3>
                <p className="text-muted-foreground">Muito além da Full Moon Party. Descubra as festas na selva e praias escondidas que acontecem o ano todo.</p>
              </div>
              <div className="relative group overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <PartyPopper className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Rooftops Escondidos</h3>
                <p className="text-muted-foreground">A vista mais incrível da cidade sem precisar pagar fortunas ou enfrentar filas imensas de turistas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gatilhos Mentais / Economia */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-pink-500/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Não jogue seu dinheiro fora com ciladas turísticas
                </h2>
                <p className="text-lg text-muted-foreground">
                  Viajar para a Tailândia é um investimento. O Guia de Festas se paga sozinho na primeira noite ao te ensinar a economizar com transporte e bebidas, sem perder a qualidade da experiência.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-medium">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    Economia real de até 50% em transporte
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    Lista de preços justos para não ser enganado
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    Dicas de bares locais com preços de "thai"
                  </li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <Wallet className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Economia Garantida</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Cerveja em Bar de Luxo</span>
                    <span className="text-destructive font-bold">350+ THB</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Cerveja em Local Recomendado</span>
                    <span className="text-green-500 font-bold">80-120 THB</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Taxi Turístico (Golpe)</span>
                    <span className="text-destructive font-bold">500+ THB</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>App Grab (Preço Justo)</span>
                    <span className="text-green-500 font-bold">120-180 THB</span>
                  </div>
                </div>
                <p className="mt-6 text-sm text-center text-muted-foreground italic">
                  * Valores médios baseados em 2024/2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Erros e Acertos */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
              Erros Comuns vs. Acertos de Mestre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/10 text-left">
                <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
                  <Ban className="w-5 h-5" /> O que NÃO fazer
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Andar com passaporte original no bolso</li>
                  <li>• Beber água da torneira (mesmo em drinks)</li>
                  <li>• Aceitar carona de estranhos na saída de clubes</li>
                  <li>• Não negociar o preço do balde (bucket) antes</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-green-500/5 border border-green-500/10 text-left">
                <h3 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> O que FAZER
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Usar o app Grab para todo deslocamento</li>
                  <li>• Ter o endereço do hotel em tailandês no celular</li>
                  <li>• Carregar apenas o dinheiro necessário em espécie</li>
                  <li>• Seguir as recomendações de segurança do guia</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section id="cities" className="py-20 md:py-28 px-4 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-3">
              9 Cidades, Infinitas Noites
            </h2>
            <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
              Clique em uma cidade para descobrir os melhores bares, clubes e dicas exclusivas
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>
          </div>
        </section>

        {/* Survival Tips */}
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-3">
              Dicas de Sobrevivência
            </h2>
            <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
              O que todo turista precisa saber antes de cair na noite tailandesa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {survivalTips.map((tip) => (
                <TipCard key={tip.title} tip={tip} />
              ))}
            </div>
          </div>
        </section>
      

      <ConversionBlock 
        title="Quer aproveitar a noite sem perrengues?"
        subtitle="Nosso guia te ensina a evitar ciladas comuns e aproveitar o melhor de 9 cidades."
        ctaText="Garantir Meu Guia de Festas"
        ctaLink="https://pay.kiwify.com.br/xxxxx" // Placeholder for actual sales link if different
      />
      <InternalLinksSection currentPath="/festas" />
      <BackToHomeFooter />
      <Footer />
    </div>
  );
};


export default Festas;

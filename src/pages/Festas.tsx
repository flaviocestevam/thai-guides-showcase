import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { InternalLinksSection, ConversionBlock } from "@/components/ConversionSections";
import { ArrowDown, Flame, ShieldAlert, Sparkles, Gem, Clock, Ban, CheckCircle, Wallet, PartyPopper, AlertTriangle, Beer, Smartphone, Ghost, EyeOff, MapPinOff, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/festas/hero-thailand.jpg";
import { cities, survivalTips } from "@/data/festas";
import CityCard from "@/components/festas/CityCard";
import TipCard from "@/components/festas/TipCard";


const Festas = () => {
  const [activeTab, setActiveTab] = useState<'cities' | 'survival' | 'golpes'>('cities');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Guias Tailandia de Festas na Tailândia — Baladas e Noite"
        description="Onde sair na Tailândia? Guia completo com as melhores festas, baladas e dicas de sobrevivência em 9 cidades incríveis."
        canonicalPath="/festas"
      />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Guias Tailandia de Festas na Tailândia",
        "description": "Guia completo com as melhores festas, baladas e dicas de sobrevivência em 9 cidades incríveis da Tailândia.",
        "breadcrumb": {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://guiastailandia.com.br/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Festas",
              "item": "https://guiastailandia.com.br/festas"
            }
          ]
        }
      }} />
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
          src={heroImg}
          alt="Festa na praia na Tailândia durante a noite"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-primary mb-4">
            🌙 Guia da Noite Tailandesa — Edição 2025
          </p>
          <h1 className="text-4xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-violet-500">
              Onde sair à noite em cada uma das 9 cidades da Tailândia
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Sem cair em cilada, sem pagar preço de turista e sem perder a melhor festa da semana — o mapa pronto pra você usar desde a primeira noite.
          </p>
          <div className="bg-card/60 backdrop-blur-sm border border-primary/30 rounded-xl px-6 py-4 max-w-2xl mx-auto mb-8">
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              ⚠️ <strong>Leia até o fim</strong> — existe um erro que quase todo brasileiro comete na primeira noite em Bangkok e que custa, em média, <strong className="text-destructive">R$ 400 em uma única saída</strong>. Te conto qual é mais abaixo.
            </p>
          </div>
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            🌃 QUERO MEU GUIA DA NOITE AGORA <ArrowDown className="w-5 h-5" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground mt-6">
            <span>✅ Pagamento 100% Seguro</span>
            <span>✅ Entrega Imediata</span>
            <span>✅ Garantia de 7 dias</span>
          </div>
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
                  Com o nosso Guias Tailandia de Festas, você vai direto aos lugares que valem a pena. Economize tempo e dinheiro sabendo exatamente onde ir, o que pedir e como evitar os erros clássicos de quem viaja pela primeira vez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Latina - Especial para Brasileiros */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="flex gap-2 mb-4">
                <span className="text-2xl">🇧🇷</span>
                <span className="text-2xl">💃</span>
                <span className="text-2xl">🇲🇽</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Saudade de um Reggaeton?</h2>
              <p className="text-muted-foreground max-w-2xl">
                Sabemos que depois de algumas semanas ouvindo música tailandesa e EDM, o brasileiro sente falta de um tempero latino. Listamos os melhores picos de Salsa, Bachata e Reggaeton.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-primary/20 p-8 rounded-3xl flex gap-6 items-start hover:shadow-lg transition-all">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary font-black text-2xl">01</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Havana Social (Bangkok)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    O segredo mais bem guardado de Bangkok. Você entra por uma cabine telefônica antiga usando um código secreto e cai direto em Cuba nos anos 40. Salsa e drinks de primeira.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-primary/20 p-8 rounded-3xl flex gap-6 items-start hover:shadow-lg transition-all">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary font-black text-2xl">02</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Revolucion Cocktail (BKK & Phuket)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Vibe latina raiz com bartenders que fazem shows com fogo e música que vai do Reggaeton clássico aos hits atuais. O ponto de encontro oficial dos latinos na ilha.
                  </p>
                </div>
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
              <div className="relative group overflow-hidden rounded-3xl bg-card border border-border p-8 hover:border-primary/50 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Festas de Lua Nova (Black Moon)</h3>
                <p className="text-muted-foreground">O lado B de Koh Phangan. Enquanto a Full Moon é comercial, a Black Moon é underground, no meio da selva e com uma vibe muito mais autêntica.</p>
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
                  Viajar para a Tailândia é um investimento. O Guias Tailandia de Festas se paga sozinho na primeira noite ao te ensinar a economizar com transporte e bebidas, sem perder a qualidade da experiência.
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

        {/* Navigation Tabs for better UX */}
        <section className="sticky top-20 z-50 bg-background/80 backdrop-blur-xl border-y border-border py-4">
          <div className="max-w-4xl mx-auto px-4 flex gap-4">
            <button 
              onClick={() => {
                setActiveTab('cities');
                document.getElementById('cities')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'cities' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted hover:bg-muted/80'}`}
            >
              <PartyPopper className="w-4 h-4" /> 9 Cidades
            </button>
            <button 
              onClick={() => {
                setActiveTab('survival');
                document.getElementById('survival')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'survival' ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-muted hover:bg-muted/80'}`}
            >
              <ShieldAlert className="w-4 h-4" /> Sobrevivência
            </button>
            <button 
              onClick={() => {
                setActiveTab('golpes');
                document.getElementById('golpes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'golpes' ? 'bg-destructive text-destructive-foreground shadow-lg' : 'bg-muted hover:bg-muted/80'}`}
            >
              <Flame className="w-4 h-4" /> Noite +18 & Golpes
            </button>
            <button 
              onClick={() => {
                setActiveTab('golpes');
                document.getElementById('golpes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'golpes' ? 'bg-destructive text-destructive-foreground shadow-lg' : 'bg-muted hover:bg-muted/80'}`}
            >
              <AlertTriangle className="w-4 h-4" /> Alerta de Golpes
            </button>
          </div>
        </section>

        {/* Módulo de Golpes e +18 */}
        <section id="golpes" className="py-20 md:py-28 px-4 bg-destructive/5 border-t border-destructive/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="bg-destructive/10 p-3 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Guia Noite +18: Distritos e Segurança
              </h2>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Se você busca a famosa "Adult Nightlife" da Tailândia, precisa saber onde estão os distritos oficiais e como não ser extorquido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Distrito 1 */}
              <div className="bg-card border border-primary/20 p-8 rounded-3xl relative overflow-hidden group">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Nana Plaza & Soi Cowboy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Os dois maiores distritos de Bangkok. Nana é um complexo fechado de 3 andares, enquanto Cowboy é uma rua neon icônica. 
                </p>
                <span className="text-xs font-bold text-primary">Melhor para: Gogo Bars e Shows</span>
              </div>

              {/* Distrito 2 */}
              <div className="bg-card border border-primary/20 p-8 rounded-3xl relative overflow-hidden group">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Walking Street (Pattaya)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A capital mundial da noite adulta. Centenas de clubes de strip e bares de gogo concentrados em 1km de pura luz neon.
                </p>
                <span className="text-xs font-bold text-primary">Melhor para: Festas Intensas</span>
              </div>

              {/* Distrito 3 */}
              <div className="bg-card border border-primary/20 p-8 rounded-3xl relative overflow-hidden group">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Bangla Road (Phuket)
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Onde a noite de Patong acontece. Os becos (Sois) escondem dezenas de bares com pole dance e shows variados.
                </p>
                <span className="text-xs font-bold text-primary">Melhor para: Mix de Praia e Balada</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-center mb-10">
              <h3 className="text-2xl font-bold mb-2">Alerta de Golpes Comuns</h3>
              <p className="text-muted-foreground">O que acontece se você não seguir o guia</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Golpe 1 */}
              <div className="bg-card border border-destructive/20 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Beer className="w-20 h-20 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Ghost className="w-5 h-5 text-destructive" /> O Golpe do "Menu Amigo"
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Em Gogo Bars e casas de strip, garçons podem te oferecer um drink com preço fixo, mas na hora da conta, taxas "escondidas" e "drinks para as moças" triplicam o valor.
                </p>
                <div className="mt-6 p-3 bg-destructive/10 rounded-xl text-destructive text-xs font-bold uppercase tracking-wider text-center">
                  Como fugir: Pague cada drink na hora
                </div>
              </div>

              {/* Golpe 2 */}
              <div className="bg-card border border-destructive/20 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <EyeOff className="w-20 h-20 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MapPinOff className="w-5 h-5 text-destructive" /> Ping Pong Shows
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Promessas de shows "gratuitos" ou baratos em ruas secundárias. Ao entrar, seguranças bloqueiam a saída e exigem pagamentos exorbitantes por uma única cerveja.
                </p>
                <div className="mt-6 p-3 bg-destructive/10 rounded-xl text-destructive text-xs font-bold uppercase tracking-wider text-center">
                  Como fugir: Nunca siga "promoters" de rua
                </div>
              </div>

              {/* Golpe 3 */}
              <div className="bg-card border border-destructive/20 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Smartphone className="w-20 h-20 text-destructive" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" /> Ladyboys e Furtos
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Infelizmente, em áreas como Sukhumvit e Bangla Road, grupos podem se aproximar de forma carinhosa para furtar correntes, relógios e celulares de turistas distraídos.
                </p>
                <div className="mt-6 p-3 bg-destructive/10 rounded-xl text-destructive text-xs font-bold uppercase tracking-wider text-center">
                  Como fugir: Mantenha distância e evite contato físico
                </div>
              </div>
            </div>

            <div className="mt-12 bg-destructive/10 border border-destructive/20 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">A Regra de Ouro para Gogo Bars e Strip</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Se você decidir visitar distritos como Nana Plaza, Soi Cowboy (Bangkok) ou Walking Street (Pattaya), lembre-se: <strong>Estabelecimentos oficiais raramente usam pessoas na rua para te puxar.</strong> Se alguém te abordar com "show grátis", é cilada. Vá apenas em locais conhecidos e pague cada rodada conforme ela chegar.
              </p>
            </div>
          </div>
        </section>

        {/* Cities */}
        <section id="cities" className="py-20 md:py-28 px-4 bg-muted/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-3">
              Onde a Noite Acontece
            </h2>
            <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
              Clique nas imagens para abrir os detalhes de cada cidade sem sair da página
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>
          </div>
        </section>

        {/* Survival Tips */}
        <section id="survival" className="py-20 md:py-28 px-4 border-t border-border">
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

        {/* Countdown */}
        <CountdownSection />

        {/* Bônus */}
        <section className="py-20 md:py-28 px-4 border-t border-border bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Bônus exclusivos
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
                Vai muito além do guia
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Tudo que você precisa para curtir a noite tailandesa sem dor de cabeça
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: "Mapa interativo das baladas", desc: "Localização exata, horários de pico e como chegar de táxi/Grab por cidade." },
                { icon: Wallet, title: "Tabela de preços real", desc: "Quanto custa cada cerveja, drink, entrada e couvert em Bangkok, Phuket e Pattaya." },
                { icon: ShieldAlert, title: "Lista negra de golpes", desc: "Os 17 golpes mais comuns na noite tailandesa e como identificar antes de cair." },
                { icon: Smartphone, title: "Apps essenciais", desc: "Grab, Bolt, Google Translate e os apps de delivery 24h que salvam sua noite." },
                { icon: Beer, title: "Glossário de drinks tailandeses", desc: "O que pedir, o que evitar e os drinks que só existem aqui." },
                { icon: PartyPopper, title: "Calendário de eventos", desc: "Festivais, full moon parties e datas que não podem ficar de fora do seu roteiro." },
              ].map((b) => (
                <div key={b.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <b.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 md:py-28 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Quem já curtiu
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
                Brasileiros que economizaram (e curtiram muito)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Rafael M.", city: "São Paulo", text: "Economizei mais de R$ 800 só não caindo nos golpes de táxi em Bangkok. O guia se pagou na primeira noite.", stars: 5 },
                { name: "Juliana T.", city: "Rio de Janeiro", text: "Fui sozinha pra Phuket e me senti segura porque sabia exatamente onde ir e o que evitar. Recomendo demais.", stars: 5 },
                { name: "Diego F.", city: "Florianópolis", text: "A lista de baladas em Pattaya é cirúrgica. Acertei todas as escolhas e não perdi tempo em lugar ruim.", stars: 5 },
                { name: "Camila R.", city: "Belo Horizonte", text: "As dicas de sobrevivência salvaram minha viagem. Eu não fazia ideia de metade das coisas que tem aqui.", stars: 5 },
                { name: "Thiago L.", city: "Curitiba", text: "Achei que ia ser mais um guia genérico, mas é detalhado de verdade. Preços, endereços, tudo bate.", stars: 5 },
                { name: "Larissa S.", city: "Recife", text: "Full moon party em Koh Phangan com o roteiro pronto foi outro nível. Sem stress, sem perrengue.", stars: 5 },
              ].map((t) => (
                <div key={t.name} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed mb-4">"{t.text}"</p>
                  <div className="text-xs text-muted-foreground">
                    <strong className="text-foreground">{t.name}</strong> — {t.city}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 px-4 border-t border-border bg-card/30">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Dúvidas frequentes
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                Perguntas que todo mundo faz
              </h2>
            </div>
            <div className="space-y-3">
              {[
                { q: "O guia serve para quem nunca foi à Tailândia?", a: "Sim. Ele foi escrito pensando especificamente em brasileiros indo pela primeira vez. Tudo é explicado do zero, sem assumir nenhum conhecimento prévio." },
                { q: "Preciso falar inglês ou tailandês?", a: "Não. O guia traz frases prontas em tailandês com pronúncia e dicas de comunicação em locais onde nem inglês funciona." },
                { q: "É seguro sair à noite na Tailândia?", a: "Em geral sim, mas existem áreas e situações específicas para evitar. A seção de sobrevivência cobre tudo isso com mapas e exemplos reais." },
                { q: "Funciona para viagem em grupo, casal ou solo?", a: "Sim para os três perfis. Cada cidade tem indicações específicas: melhores lugares para casais, para grupos de amigos e para quem viaja sozinho(a)." },
                { q: "Os preços ficam desatualizados?", a: "O guia é atualizado periodicamente e quem compra recebe as atualizações gratuitas. Os valores são uma referência realista da média atual." },
                { q: "Quanto tempo demora para ler tudo?", a: "Você não precisa ler tudo. É um guia de consulta: vai direto na cidade que vai visitar e nas dicas que precisa naquele momento." },
              ].map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>


      

      <ConversionBlock 
        title="Chega de perder tempo (e dinheiro) na noite!"
        subtitle="Acesse agora o guia que já ajudou centenas de brasileiros a curtirem o melhor da Tailândia com segurança e economia real."
        ctaText="QUERO O GUIA DE FESTAS COMPLETO"
        ctaLink="https://pay.kiwify.com.br/xxxxx" 
      />
      <InternalLinksSection currentPath="/festas" />
      <BackToHomeFooter />
      </main>
      <Footer />
    </div>
  );
};

const CountdownSection = () => {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 3);
    target.setHours(23, 59, 59, 0);
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const Box = ({ v, l }: { v: number; l: string }) => (
    <div className="bg-card border border-primary/30 rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[72px] md:min-w-[96px]">
      <div className="text-3xl md:text-5xl font-display font-bold text-primary tabular-nums">
        {String(v).padStart(2, "0")}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
    </div>
  );

  return (
    <section className="py-16 px-4 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          <Clock className="w-4 h-4" /> Atualização em breve
        </span>
        <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
          Próxima revisão do guia em
        </h2>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <Box v={t.d} l="Dias" />
          <Box v={t.h} l="Horas" />
          <Box v={t.m} l="Min" />
          <Box v={t.s} l="Seg" />
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-card/70 transition-colors"
      >
        <span className="font-display font-semibold text-base md:text-lg">{q}</span>
        <ArrowDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
};

export default Festas;


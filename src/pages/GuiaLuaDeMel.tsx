import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Check, X, Shield, Heart, Sparkles, Palmtree, Hotel, Utensils, Plane, Camera,
  Info, Star, BookOpen, MessageCircle, Gift, Award, Calendar, Map, DollarSign, Sun
} from "lucide-react";

const ROSE = "#E11D74";
const GOLD = "#D4A017";
const TEAL = "#00A8A8";

const GuiaLuaDeMel = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Poppins',sans-serif]">
      <SEO
        title="Guia Lua de Mel na Tailândia 2026 | Roteiro Romântico Completo"
        description="O guia em português para casar e viajar na Tailândia: melhores ilhas, resorts pé na areia, jantares românticos e roteiros prontos de 10 a 21 dias."
        canonicalPath="/lua-de-mel-tailandia"
      />
      <Header />

      <main id="lua-mel-sales">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=1920"
              alt="Casal em praia paradisíaca na Tailândia"
              className="w-full h-full object-cover brightness-[0.5]"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white py-12">
            <div className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase" style={{ backgroundColor: ROSE }}>
              💍 Edição 2026
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
              A Lua de Mel <span style={{ color: GOLD }}>dos Sonhos</span> na <span style={{ color: ROSE }}>Tailândia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
              Ilhas paradisíacas, resorts pé na areia, jantares à luz de velas e roteiros prontos para vocês viverem a viagem mais romântica da vida — sem dor de cabeça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-white font-bold py-8 px-10 text-xl rounded-xl shadow-2xl transition-all hover:scale-105 border-none" style={{ backgroundColor: ROSE }}>
                <a href="#oferta">Quero o Guia por R$97</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2">✓ 100% em português</span>
              <span className="flex items-center gap-2">✓ Acesso imediato</span>
              <span className="flex items-center gap-2">✓ Roteiros 10/14/21 dias</span>
              <span className="flex items-center gap-2">✓ Garantia de 7 dias</span>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <section className="bg-[#1A1A2E] text-white py-6 px-6 border-y border-white/10">
          <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-around gap-6 text-center">
            <div><div className="text-2xl font-black" style={{ color: ROSE }}>1.800+</div><div className="text-xs text-gray-400 uppercase tracking-wider">Casais em 2025</div></div>
            <div><div className="text-2xl font-black" style={{ color: GOLD }}>4,9 ★</div><div className="text-xs text-gray-400 uppercase tracking-wider">Avaliação média</div></div>
            <div><div className="text-2xl font-black" style={{ color: TEAL }}>40+</div><div className="text-xs text-gray-400 uppercase tracking-wider">Resorts testados</div></div>
            <div><div className="text-2xl font-black text-white">7 dias</div><div className="text-xs text-gray-400 uppercase tracking-wider">Garantia incondicional</div></div>
          </div>
        </section>

        {/* SEÇÃO 1: POR QUE */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Por que a Tailândia é <br /><span style={{ color: ROSE }}>o destino perfeito</span> para a lua de mel
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>Praias de cinema, jantares Michelin a US$40, spas premiados, templos dourados e ilhas onde o resort é praticamente seu.</p>
                  <p>Por <strong>menos da metade do preço de Maldivas ou Bora Bora</strong>, vocês têm luxo de verdade, gastronomia única e cenários inesquecíveis.</p>
                  <p className="font-semibold text-[#1A1A1A]">O segredo está em escolher as ilhas e estações certas. Esse guia entrega isso pronto.</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800"
                  alt="Bangalô sobre a água na Tailândia"
                  className="rounded-3xl shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 blur-2xl" style={{ backgroundColor: `${ROSE}33` }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: DOR */}
        <section className="py-24 px-6 bg-[#FFF7F9]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Lua de mel é <span style={{ color: ROSE }}>uma vez na vida</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">E é exatamente nessa viagem que ninguém quer errar. Veja o que o guia evita pra vocês:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Escolher Phi Phi em pleno pico turístico e dividir a praia com 800 pessoas",
                "Reservar resort 'romântico' que na verdade é cheio de família com criança",
                "Ir pra Koh Samui em outubro e pegar a temporada de chuva",
                "Gastar R$ 60 mil em um pacote que vocês conseguiriam por R$ 25 mil sozinhos",
                "Marcar transfer errado entre ilhas e perder um dia inteiro de barco",
                "Descobrir tarde que o jantar à beira-mar precisa ser reservado com 30 dias",
              ].map((dor, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                  <X className="flex-shrink-0 mt-1" style={{ color: ROSE }} size={24} />
                  <p className="text-gray-700 leading-relaxed">{dor}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-lg font-semibold">
              O guia foi escrito para que vocês <span style={{ color: ROSE }}>só guardem boas memórias</span>.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: ILHAS — teaser visual */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              As Ilhas Mais <span style={{ color: ROSE }}>Românticas</span> da Tailândia
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              São mais de 1.400 ilhas. Vocês não vão precisar pesquisar uma por uma — entregamos as 6 perfeitas para casais, com prós, contras e melhor época de cada uma.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800",
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
                "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800",
                "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=800",
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
                "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800",
              ].map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl group">
                  <img src={img} alt="Ilha paradisíaca na Tailândia" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white font-bold text-sm uppercase tracking-wider" style={{ color: ROSE }}>
                    Revelada no guia
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: ROTEIROS — teaser */}
        <section className="py-24 px-6 bg-[#FFF7F9]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              3 Roteiros <span style={{ color: GOLD }}>Prontos</span> para Casais
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Vocês escolhem o tempo de viagem, abrem o PDF e seguem. Dia a dia, com hospedagem indicada, transfer e tempo livre planejado.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { dias: "10 DIAS", title: "Essencial Romântico", color: TEAL, desc: "Para férias mais curtas. Mix de cultura + uma ilha selecionada a dedo." },
                { dias: "14 DIAS", title: "Clássico Apaixonado", color: ROSE, desc: "O roteiro mais pedido. Cidade, montanha e praia em ritmo de lua de mel." },
                { dias: "21 DIAS", title: "Lua de Mel Completa", color: GOLD, desc: "Para quem quer viver tudo sem correria. Duas ilhas e tempo de respirar." },
              ].map((r, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border-t-8 transition-transform hover:-translate-y-2" style={{ borderTopColor: r.color }}>
                  <div className="text-sm font-black mb-2 tracking-widest" style={{ color: r.color }}>{r.dias}</div>
                  <h3 className="text-2xl font-bold mb-3">{r.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: EXPERIÊNCIAS — teaser */}
        <section className="py-24 px-6 bg-[#1A1A2E] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Experiências para <span style={{ color: ROSE }}>Inesquecer</span>
            </h2>
            <p className="text-center text-gray-400 mb-16">As experiências românticas que entregamos prontas — onde reservar, quanto custa, o que evitar.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Utensils, title: "Jantar Pé na Areia", desc: "Os melhores endereços à beira-mar, com mesa privativa e velas." },
                { icon: Sparkles, title: "Spa Tradicional Thai", desc: "Spas premiados que cabem no bolso — e os que valem o luxo." },
                { icon: Camera, title: "Ensaio Fotográfico", desc: "Fotógrafos brasileiros e tailandeses para registrar a viagem." },
                { icon: Palmtree, title: "Ilha Privativa", desc: "Como ter uma praia inteira só para vocês dois por algumas horas." },
                { icon: Heart, title: "Renovação de Votos", desc: "Cerimônia simbólica em templos e resorts — passo a passo." },
                { icon: Sun, title: "Passeio em James Bond", desc: "A baía mais cinematográfica do país, sem cair em tour cheio." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-[#E11D74]/50 transition-colors">
                  <item.icon className="mb-4" size={36} style={{ color: ROSE }} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: FAIXAS DE ORÇAMENTO — sem entregar a planilha */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Quanto <span style={{ color: ROSE }}>Custa</span> de Verdade
            </h2>
            <p className="text-center text-gray-500 mb-16">
              Três faixas reais para 14 dias, o casal — passagens, hospedagem e passeios. A planilha detalhada por dia vem dentro do guia.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { tier: "Econômico", price: "A partir de R$ 18 mil", color: TEAL, line: "Para casais que querem charme sem extravagância." },
                { tier: "Romântico", price: "A partir de R$ 28 mil", color: ROSE, line: "Hotéis pé na areia, transfers privativos, jantares especiais." },
                { tier: "Luxo", price: "A partir de R$ 45 mil", color: GOLD, line: "Resorts 5★, lanchas privativas e concierge dedicado." },
              ].map((p, i) => (
                <div key={i} className="bg-[#FFF7F9] p-10 rounded-3xl border-t-8 shadow-md text-center" style={{ borderTopColor: p.color }}>
                  <div className="text-sm font-black mb-2 tracking-widest" style={{ color: p.color }}>{p.tier.toUpperCase()}</div>
                  <div className="text-2xl font-black mb-4">{p.price}</div>
                  <p className="text-gray-600 leading-relaxed">{p.line}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-8 text-sm flex items-center justify-center gap-2">
              <DollarSign className="w-4 h-4" /> Planilha Excel editável dentro do guia, para vocês ajustarem ao seu orçamento.
            </p>
          </div>
        </section>

        {/* SEÇÃO 7: COMPARAÇÃO */}
        <section className="py-24 px-6 bg-[#FFF7F9]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Com Agência <span style={{ color: ROSE }}>vs.</span> Com o Guia
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl border-2 border-rose-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-400">Pacote de Agência</h3>
                <ul className="space-y-4">
                  {[
                    "Roteiro engessado em 7 dias, sem alma",
                    "Hotéis genéricos que pagam mais comissão",
                    "Custa de R$ 45k a R$ 80k o casal",
                    "Ônibus em grupo e jantares cliché",
                    "Difícil mudar de planos depois de pago",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <X className="flex-shrink-0 mt-1 text-gray-400" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-3xl border-2 shadow-2xl text-white" style={{ background: `linear-gradient(135deg, #E11D74, #1A1A2E)`, borderColor: ROSE }}>
                <h3 className="text-2xl font-bold mb-6">Vocês com o guia</h3>
                <ul className="space-y-4">
                  {[
                    "Roteiro vivo, com alternativas para cada dia",
                    "Hotéis testados, com o melhor custo-benefício real",
                    "A mesma viagem por R$ 18k a R$ 28k o casal",
                    "Liberdade total para improvisar",
                    "Atualizações constantes para 2026",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: AUTORIDADE */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                  alt="Especialistas do guia"
                  className="rounded-3xl shadow-2xl aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg" style={{ backgroundColor: ROSE }}>
                  <Award className="inline w-4 h-4 mr-1" /> Especialistas locais
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Quem está <span style={{ color: ROSE }}>do outro lado</span> desse guia
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Somos uma equipe de brasileiros apaixonados e especialistas na Tailândia. Unimos nossa experiência prática de quem vive no país e conhece cada detalhe do cotidiano e da cultura local para criar o material mais completo em português.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Esse guia é o resultado de cada erro que vimos viajantes cometerem — e cada acerto que custou caro descobrir. Sem enrolação, direto ao ponto e com foco no que realmente importa para que você planeje sua viagem com segurança.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["4 anos morando", "12 países visitados", "300+ leitores"].map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: ROSE }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 9: SUMÁRIO */}
        <section className="py-24 px-6 bg-[#FFF7F9]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              O Que <span style={{ color: ROSE }}>Vem no Guia</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">PDF de 120+ páginas com mapas, links clicáveis, planilha de orçamento e atualizações grátis durante 2026.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Hotel, title: "40+ Resorts", desc: "Selecionados para casais" },
                { icon: Palmtree, title: "Mapa das Ilhas", desc: "Qual encaixa no seu estilo" },
                { icon: Utensils, title: "Restaurantes top", desc: "Romance garantido" },
                { icon: Plane, title: "3 Roteiros Prontos", desc: "10, 14 e 21 dias" },
                { icon: Heart, title: "Surpresas para o par", desc: "Pedidos, decoração, jantares" },
                { icon: DollarSign, title: "Orçamento real", desc: "Em R$ e ฿ — planilha inclusa" },
                { icon: Calendar, title: "Quando ir", desc: "Mês a mês, ilha a ilha" },
                { icon: Map, title: "Transfers entre ilhas", desc: "Lancha, ferry e voo doméstico" },
                { icon: Camera, title: "Spots de foto", desc: "Para o ensaio dos sonhos" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white hover:shadow-lg transition border border-pink-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${ROSE}1A`, color: ROSE }}>
                    <item.icon size={36} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10: BÔNUS */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Bônus <span style={{ color: GOLD }}>Inclusos</span>
            </h2>
            <p className="text-center text-gray-500 mb-16">Sem custo extra. Já vêm junto com o PDF.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Planilha de Orçamento (Excel)", value: "R$57" },
                { icon: MessageCircle, title: "Grupo VIP no Telegram com a autora", value: "R$97" },
                { icon: Gift, title: "Templates de surpresa para o(a) cônjuge", value: "R$47" },
              ].map((b, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-[#FFF7F9] p-8 rounded-3xl shadow-lg border-2 border-pink-100 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${GOLD}1A`, color: GOLD }}>
                    <b.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{b.title}</h3>
                  <div className="text-sm text-gray-400 line-through">Valor avulso: {b.value}</div>
                  <div className="text-sm font-bold mt-1" style={{ color: ROSE }}>GRÁTIS com o guia</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 11: DEPOIMENTOS */}
        <section className="py-24 px-6 bg-[#FFF7F9]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Casais que <span style={{ color: ROSE }}>já amaram</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Bianca & Marcos", city: "Curitiba", text: "Economizamos R$ 22 mil no orçamento e ainda tivemos a viagem dos sonhos. As dicas de jantar pé na areia em Koh Yao foram um sonho." },
                { name: "Ana & Renato", city: "Rio de Janeiro", text: "Estávamos quase fechando com agência por R$ 60k. Compramos o guia, montamos sozinhos por R$ 30k e foi PERFEITO." },
                { name: "Letícia & Caio", city: "Recife", text: "Roteiro de 14 dias inteiro foi cumprido sem nenhum perrengue. O suporte no Telegram salvou a gente num imprevisto em Krabi." },
              ].map((d, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="flex gap-1 mb-4" style={{ color: GOLD }}>
                    {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6 leading-relaxed">"{d.text}"</p>
                  <div>
                    <div className="font-bold">{d.name}</div>
                    <div className="text-sm text-gray-400">{d.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 12: OFERTA */}
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#E11D74] via-[#C2185B] to-[#1A1A2E]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ backgroundColor: `${GOLD}1A` }}></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">PDF completo, mapas, planilha e roteiros prontos para vocês.</p>

              <div className="bg-[#FFF7F9] p-6 rounded-2xl mb-8 text-left text-sm space-y-2">
                <div className="flex justify-between"><span>Guia Lua de Mel (120+ páginas)</span><span className="font-bold">R$197</span></div>
                <div className="flex justify-between text-gray-500"><span>+ Planilha de orçamento</span><span>R$57</span></div>
                <div className="flex justify-between text-gray-500"><span>+ Grupo VIP Telegram</span><span>R$97</span></div>
                <div className="flex justify-between text-gray-500"><span>+ Templates de surpresa</span><span>R$47</span></div>
                <div className="border-t border-pink-200 pt-2 flex justify-between font-bold"><span>Valor real</span><span className="line-through">R$398</span></div>
              </div>

              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$398</span>
                <div className="text-6xl md:text-8xl font-black" style={{ color: ROSE }}>R$97</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único</span>
              </div>

              <Button asChild size="lg" className="text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none" style={{ backgroundColor: ROSE }}>
                <a href="#checkout">QUERO O GUIA LUA DE MEL</a>
              </Button>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Pagamento Seguro</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Garantia 7 Dias</span>
                <span className="flex items-center gap-1">📱 Acesso imediato</span>
              </div>
            </div>

            {/* GARANTIA */}
            <div className="mt-12 bg-white/10 backdrop-blur p-8 rounded-3xl text-white text-center">
              <Shield className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Garantia incondicional de 7 dias</h3>
              <p className="text-white/90 leading-relaxed max-w-xl mx-auto">
                Receberam o guia e não amaram? Manda um e-mail dentro de 7 dias e devolvemos 100% do valor. Sem pergunta, sem burocracia.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Dúvidas <span style={{ color: GOLD }}>Comuns</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Qual a melhor época para lua de mel na Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Novembro a março é a estação seca — clima perfeito. Maio a outubro é a chuvosa, mas a costa do Golfo (Koh Samui) fica boa de junho a setembro. O guia traz o calendário ideal para cada ilha.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Quanto custa, em média, uma lua de mel na Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                A partir de R$18.000 o casal para 14 dias (passagens + hotéis 4★ + passeios), e a partir de R$35.000 para versão luxo em resorts 5★. O guia traz três orçamentos detalhados, com planilha em Excel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Dá para casar na Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Sim, e é uma tendência crescente. O guia explica como funciona a cerimônia simbólica em resorts e o processo legal (que envolve a embaixada brasileira), além de pacotes de renovação de votos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Preciso de visto?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Brasileiros têm isenção de visto para até 90 dias. Só precisa de passaporte com 6 meses de validade e Certificado de Febre Amarela.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">O guia serve se a gente já tem hotel reservado?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Serve sim. Ele vai além de hospedagem: roteiros, passeios, restaurantes, transfers, orçamento e suporte. Várias leitoras compraram com tudo já fechado e usaram pra otimizar o que faltava.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Como recebo o guia depois da compra?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Após o pagamento confirmado, o PDF + a planilha chegam no e-mail em até 5 minutos, junto com o convite para o grupo VIP no Telegram.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-gray-400 mt-12 flex items-center justify-center gap-2 text-sm">
            <Info className="w-4 h-4" /> Conteúdo atualizado em 2026.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 px-6 bg-[#1A1A2E] text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A viagem é única. <span style={{ color: ROSE }}>Façam ela do jeito de vocês.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">Não confiem no roteiro do cunhado. Confiem em quem mora aqui, conhece cada resort e atende casais brasileiros toda semana.</p>
            <Button asChild size="lg" className="text-white font-bold py-8 px-12 text-xl rounded-xl shadow-2xl border-none" style={{ backgroundColor: ROSE }}>
              <a href="#oferta">Garantir Nosso Guia por R$97</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaLuaDeMel;

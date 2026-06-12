import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, Heart, Sparkles, Palmtree, Hotel, Utensils, Plane, Camera, Info } from "lucide-react";

const ROSE = "#E11D74";
const GOLD = "#D4A017";
const TEAL = "#00A8A8";
const NAVY = "#1A1A2E";

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
            </div>
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

        {/* SEÇÃO 2: ILHAS */}
        <section className="py-24 px-6 bg-[#FFF7F9]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              As Ilhas Mais <span style={{ color: ROSE }}>Românticas</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { city: "Koh Samui", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800", desc: "Resorts cinco estrelas e vida noturna sofisticada em Chaweng Noi." },
                { city: "Koh Phi Phi", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800", desc: "Cenário do filme A Praia. Maya Bay e mar turquesa irreal." },
                { city: "Krabi (Railay)", img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800", desc: "Falésias gigantes, praias só acessíveis de barco. Pura privacidade." },
                { city: "Koh Lanta", img: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?q=80&w=800", desc: "A ilha tranquila para quem fugir do óbvio. Pôr-do-sol épico." },
                { city: "Koh Yao Noi", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800", desc: "Refúgio entre Phuket e Krabi. Resorts boutique sem aglomeração." },
                { city: "Phuket (Surin/Bangtao)", img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800", desc: "O lado luxuoso de Phuket, longe da agitação de Patong." },
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
                  <img src={item.img} alt={item.city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end text-left text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.city}</h3>
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: ROTEIROS */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Roteiros <span style={{ color: GOLD }}>Prontos</span> para Casais
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { dias: "10 DIAS", title: "Essencial Romântico", cidades: "Bangkok → Krabi → Koh Phi Phi", color: TEAL, desc: "Cultura + praia. Perfeito para quem tem férias curtas." },
                { dias: "14 DIAS", title: "Clássico Apaixonado", cidades: "Bangkok → Chiang Mai → Koh Samui", color: ROSE, desc: "O roteiro mais pedido. Templos, montanha e praia." },
                { dias: "21 DIAS", title: "Lua de Mel Completa", cidades: "Bangkok → Norte → 2 ilhas", color: GOLD, desc: "Para quem quer viver tudo sem correria. Inclui Koh Yao Noi." },
              ].map((r, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border-t-8 transition-transform hover:-translate-y-2" style={{ borderTopColor: r.color }}>
                  <div className="text-sm font-black mb-2 tracking-widest" style={{ color: r.color }}>{r.dias}</div>
                  <h3 className="text-2xl font-bold mb-3">{r.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 font-semibold">{r.cidades}</p>
                  <p className="text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: EXPERIÊNCIAS */}
        <section className="py-24 px-6 bg-[#1A1A2E] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Experiências para <span style={{ color: ROSE }}>Inesquecer</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Utensils, title: "Jantar Pé na Areia", desc: "Os 7 melhores restaurantes à beira-mar, com mesa privativa e velas." },
                { icon: Sparkles, title: "Spa Tradicional Thai", desc: "Massagens a 4 mãos em spas premiados — alguns a partir de 2.500฿ (R$390)." },
                { icon: Camera, title: "Ensaio Fotográfico", desc: "Lista de fotógrafos brasileiros e tailandeses para registrar a viagem." },
                { icon: Palmtree, title: "Ilha Privativa", desc: "Como alugar uma lancha e ter uma praia inteira só para vocês dois." },
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

        {/* SEÇÃO 5: O QUE VEM */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              O Que <span style={{ color: ROSE }}>Vem no Guia</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Hotel, title: "40+ Resorts", desc: "Selecionados para casais" },
                { icon: Palmtree, title: "Mapa das Ilhas", desc: "Qual encaixa no seu estilo" },
                { icon: Utensils, title: "Restaurantes top", desc: "Romance garantido" },
                { icon: Plane, title: "3 Roteiros Prontos", desc: "10, 14 e 21 dias" },
                { icon: Heart, title: "Surpresas para o par", desc: "Pedidos, decoração e jantares" },
                { icon: Shield, title: "Orçamento real", desc: "Quanto custa, em R$ e ฿" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-3xl hover:bg-[#FFF7F9] transition-colors border border-transparent hover:border-pink-100">
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

        {/* SEÇÃO 6: OFERTA */}
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#E11D74] via-[#C2185B] to-[#1A1A2E]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ backgroundColor: `${GOLD}1A` }}></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">PDF completo, mapas e roteiros prontos para vocês.</p>

              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$197</span>
                <div className="text-6xl md:text-8xl font-black" style={{ color: ROSE }}>R$97</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único</span>
              </div>

              <Button asChild size="lg" className="text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none" style={{ backgroundColor: ROSE }}>
                <a href="#checkout">QUERO O GUIA LUA DE MEL</a>
              </Button>

              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Pagamento Seguro</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Garantia 7 Dias</span>
              </div>
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
                A partir de R$18.000 o casal para 14 dias (passagens + hotéis 4★ + passeios), e a partir de R$35.000 para versão luxo em resorts 5★. O guia traz três orçamentos detalhados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Dá para casar na Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Sim, e é uma tendência crescente. O guia explica como funciona a cerimônia simbólica em resorts e o processo legal (que envolve a embaixada brasileira).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Preciso de visto?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Brasileiros têm isenção de visto para até 90 dias. Só precisa de passaporte com 6 meses de validade e Certificado de Febre Amarela.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-gray-400 mt-12 flex items-center justify-center gap-2 text-sm">
            <Info className="w-4 h-4" /> Conteúdo atualizado em 2026.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaLuaDeMel;

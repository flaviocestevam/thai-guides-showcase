import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Shield, MapPin, Heart, Sparkles, Users, Hotel, Martini, Plane, Info } from "lucide-react";

const PURPLE = "#7C3AED";
const PINK = "#EC4899";
const TEAL = "#00A8A8";
const GOLD = "#D4A017";

const GuiaGays = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Poppins',sans-serif]">
      <SEO
        title="Guia Tailândia para Gays 2026 | LGBTQIA+ na Terra do Sorriso"
        description="O guia em português para viajantes LGBTQIA+ que querem viver a Tailândia com liberdade: Silom, Chiang Mai, ilhas gay-friendly, hotéis, festas e segurança."
        canonicalPath="/tailandia-para-gays"
      />
      <Header />

      <main id="gays-sales">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1561409037-c7be81613c1f?q=80&w=1920"
              alt="Bangkok à noite — vida LGBTQIA+ na Tailândia"
              className="w-full h-full object-cover brightness-[0.45]"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white py-12">
            <div className="inline-block bg-gradient-to-r from-[#EC4899] to-[#7C3AED] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              🏳️‍🌈 Edição 2026 • Atualizado
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
              Viva a Tailândia <span style={{ color: PINK }}>Sem Filtro</span> e com <span style={{ color: TEAL }}>Total Liberdade</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
              O guia em português feito para o público LGBTQIA+: onde se hospedar, onde curtir, o que evitar e os bares, saunas e ilhas mais inclusivos do país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] hover:opacity-90 text-white font-bold py-8 px-10 text-xl rounded-xl shadow-2xl transition-all hover:scale-105 border-none">
                <a href="#oferta">Quero o Guia por R$97</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2">✓ 100% em português</span>
              <span className="flex items-center gap-2">✓ Acesso imediato</span>
              <span className="flex items-center gap-2">✓ Feito por quem mora aqui</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 1: A REAL */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  A Tailândia é <br /><span style={{ color: PURPLE }}>um dos países mais</span> <span style={{ color: PINK }}>gay-friendly</span> da Ásia
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>Em janeiro de 2025 o país se tornou o <strong>primeiro do sudeste asiático a legalizar o casamento igualitário</strong>. A cultura é acolhedora, a comunidade é forte e visível.</p>
                  <p>Mas nem tudo é igual em todo lugar: Bangkok e Chiang Mai são bolhas vibrantes; algumas ilhas e cidades menores pedem mais discrição.</p>
                  <p className="font-semibold text-[#1A1A1A]">Este guia te mostra onde curtir solto — e onde respirar com tranquilidade.</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=800"
                  alt="Bandeira LGBTQIA+ na Tailândia"
                  className="rounded-3xl shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 blur-2xl" style={{ backgroundColor: `${PINK}33` }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: BAIRROS */}
        <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Os Bairros <span style={{ color: PURPLE }}>Gay</span> que Você Precisa Conhecer
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { area: "Silom Soi 4 (Bangkok)", title: "O coração da cena", desc: "Bares, drag shows e baladas até de manhã. DJ Station, Telephone Pub, G.O.D.", color: PINK },
                { area: "Silom Soi 2 (Bangkok)", title: "Mais clubber", desc: "Casas como DJ Station e ICK Bangkok. Pista lotada de quinta a domingo.", color: PURPLE },
                { area: "Chiang Mai (Nimman)", title: "Vibe relax", desc: "Cafés gay-owned, Adam's Apple Club, bares pé-no-chão. Cidade mais tranquila.", color: TEAL },
                { area: "Phuket (Paradise Complex)", title: "Praia + festa", desc: "O complexo gay de Patong: cabarés, bares e shows todas as noites.", color: GOLD },
                { area: "Koh Samui (Chaweng)", title: "Ilha gay-friendly", desc: "Bares e hotéis acolhedores na praia mais movimentada da ilha.", color: PINK },
                { area: "Pattaya (Boyztown)", title: "Cena adulta", desc: "Concentração de bares gay 18+, cabarés e shows. Atitude liberal.", color: PURPLE },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border-t-8 transition-transform hover:-translate-y-2" style={{ borderTopColor: item.color }}>
                  <div className="text-sm font-black mb-2 uppercase tracking-wider" style={{ color: item.color }}>{item.area}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: HOTÉIS */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Hotéis <span style={{ color: PINK }}>Gay-Friendly</span> Recomendados
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">Endereços testados, sem julgamento na recepção, perto da cena.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { city: "Bangkok", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800", name: "Babylon Bangkok", note: "Lendário hotel/sauna gay em Sathorn." },
                { city: "Bangkok", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800", name: "W Bangkok", note: "Luxo no coração de Silom, equipe inclusiva." },
                { city: "Chiang Mai", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800", name: "Adam's Apple Resort", note: "Boutique 100% gay em Nimman." },
                { city: "Phuket", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800", name: "Connect Guesthouse", note: "Pequeno, gay-owned, dentro do Paradise Complex." },
                { city: "Koh Samui", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800", name: "The Sea Koh Samui", note: "Boutique adults-only com praia privativa." },
                { city: "Pattaya", img: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800", name: "Lone Star Boutique", note: "Coração de Boyztown, ótimo custo." },
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8 flex flex-col justify-end text-left text-white">
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: PINK }}>{item.city}</span>
                    <h3 className="text-2xl font-bold mb-2 mt-1">{item.name}</h3>
                    <p className="text-sm text-gray-300">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: SEGURANÇA */}
        <section className="py-24 px-6 bg-[#1A1A1A] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Segurança & <span style={{ color: PINK }}>Etiqueta Local</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "PDA com bom senso", desc: "Casamento é legal, mas demonstrações intensas em público fora dos bairros gay ainda chamam atenção." },
                { icon: MapPin, title: "Cuidado nos templos", desc: "Ombros cobertos e silêncio. Sem PDA dentro de templos budistas, é uma questão de respeito." },
                { icon: Martini, title: "Bebidas em bares", desc: "Em alguns bares de 'show' a conta surpreende. Lista de casas honestas no guia." },
                { icon: Users, title: "Apps de paquera", desc: "Grindr, Hornet e Blued bombam. Cuidado com perfis pedindo Pin/transferência adiantada." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-[#EC4899]/50 transition-colors">
                  <item.icon className="mb-4" size={36} style={{ color: PINK }} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: O QUE VEM NO GUIA */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              O Que <span style={{ color: PURPLE }}>Vem no Guia</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Hotel, title: "Hotéis testados", desc: "30+ endereços gay-friendly" },
                { icon: Martini, title: "Mapa da night", desc: "Bares, baladas e cabarés" },
                { icon: Heart, title: "Saunas & spas", desc: "Os 10 melhores do país" },
                { icon: Plane, title: "Roteiro 14 dias", desc: "Bangkok → Chiang Mai → ilhas" },
                { icon: Sparkles, title: "Eventos & Prides", desc: "Calendário 2026 completo" },
                { icon: Shield, title: "Frases em tailandês", desc: "Para flertar e se virar" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-3xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-gray-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${PURPLE}1A`, color: PURPLE }}>
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
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#EC4899]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ backgroundColor: `${GOLD}1A` }}></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">Acesso imediato ao PDF, mapas e atualizações de 2026.</p>

              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$197</span>
                <div className="text-6xl md:text-8xl font-black" style={{ color: PINK }}>R$97</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único</span>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] hover:opacity-90 text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none">
                <a href="#checkout">QUERO O GUIA GAY 2026</a>
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
              <AccordionTrigger className="text-lg font-bold hover:no-underline">A Tailândia é segura para gays?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Sim, é uma das mais seguras da Ásia. Desde 2025 o casamento igualitário é legal. Crimes de ódio são raros, mas como em qualquer lugar, bom senso e discrição em áreas mais conservadoras são bem-vindos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Posso me hospedar em quarto de casal sem problema?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Sim, sem nenhum constrangimento. Listo no guia hotéis que sabidamente recebem casais do mesmo sexo sem perguntas estranhas na recepção.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Quando é a Parada de Bangkok?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                A Bangkok Pride acontece em junho. O guia traz o calendário 2026 completo com Prides em Bangkok, Chiang Mai, Phuket e Pattaya.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Apps de paquera funcionam por lá?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Funcionam muito bem (Grindr, Hornet, Blued). O guia traz as boas práticas de segurança e como evitar os principais golpes.
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

export default GuiaGays;

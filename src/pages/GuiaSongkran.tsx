import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Calendar, MapPin, Droplets, Shield, Smartphone, Glasses, Shirt, Footprints, Package2, Info } from "lucide-react";

const GuiaSongkran = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Poppins',sans-serif]">
      <SEO 
        title="Guia Songkran 2026 — O Ano Novo Tailandês"
        description="Viva a maior guerra de água do mundo sem perrengue. Roteiros, mapas, checklist de proteção e dicas de quem mora na Tailândia."
        canonicalPath="/songkran-ano-novo-tailandes"
      />
      <Header />
      
      <main id="songkran-sales">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1920" 
              alt="Songkran Water Festival" 
              className="w-full h-full object-cover brightness-[0.45]"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white py-12">
            <div className="inline-block bg-[#FF6B35] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              Atualizado para 2026
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
              Songkran 2026: Viva a Maior Guerra de Água do Mundo <span className="text-[#00A8A8]">Sem Passar Perrengue</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
              13-15 de abril é oficial. Eu moro em Phuket e montei o roteiro completo: onde ficar, como proteger seu passaporte e os segredos que só quem vive aqui conhece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold py-8 px-10 text-xl rounded-xl shadow-2xl transition-all hover:scale-105 border-none">
                <a href="#oferta">Quero o Guia por R$97</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2">✓ 100% em português</span>
              <span className="flex items-center gap-2">✓ Acesso imediato</span>
              <span className="flex items-center gap-2">✓ Feito na Tailândia</span>
            </div>
          </div>
        </section>

        {/* SEÇÃO 1: O QUE É */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                  Songkran não é <br/><span className="text-[#00A8A8]">só jogar água</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#D4A017] rounded-full"></div>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>A palavra vem do sânscrito "saṃkrānti" - passagem astrológica. Por séculos, tailandeses visitam templos pela manhã para o <strong>Song Nam Phra</strong> (banho das imagens de Buda).</p>
                  <p>Eles derramam água nas mãos dos mais velhos pedindo bênção. A guerra de água da tarde é a purificação - lavar o ano velho.</p>
                  <p className="font-semibold text-[#1A1A1A]">Turista só vê a bagunça. Quem entende a cultura vive duas festas em uma.</p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800" 
                  alt="Templo Tailandês" 
                  className="rounded-3xl shadow-2xl z-10 relative"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A017]/10 rounded-full z-0 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: DATAS OFICIAIS */}
        <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Datas Oficiais <span className="text-[#D4A017]">2026</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { date: "13 ABR", title: "Maha Songkran", desc: "Dia principal. Guerra total em Khao San, Silom e Chiang Mai.", color: "#00A8A8" },
                { date: "14 ABR", title: "Wan Nao", desc: "Dia da família. Manhã nos templos, tarde de celebração mais leve.", color: "#D4A017" },
                { date: "15 ABR", title: "Wan Thaloeng Sok", desc: "Ano novo oficial começa. A última grande briga de água.", color: "#FF6B35" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-10 rounded-3xl shadow-lg border-t-8 transition-transform hover:-translate-y-2" style={{ borderTopColor: item.color }}>
                  <div className="text-2xl font-black mb-4" style={{ color: item.color }}>{item.date}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-gray-500 flex items-center justify-center gap-2">
              <Info className="w-5 h-5" /> ⚠️ Bangkok e Phuket estendem até 17/04. Pattaya faz o Wan Lai em 19/04.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: MELHORES LUGARES */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Os 5 <span className="text-[#FF6B35]">Melhores Lugares</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { city: "Bangkok (Silom)", img: "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800", desc: "5km de caos organizado com DJs e mangueiras de bombeiro." },
                { city: "Chiang Mai (Fosso)", img: "https://images.unsplash.com/photo-1559592413-7cea732639f5?q=80&w=800", desc: "A maior briga de água do mundo ao redor da cidade antiga." },
                { city: "Phuket (Patong)", img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800", desc: "Songkran na praia. A Bangla Road vira um rio humano." },
                { city: "Pattaya (Wan Lai)", img: "https://images.unsplash.com/photo-1541480601022-2305c9f02487?q=80&w=800", desc: "A festa aqui acontece mais tarde (19/04) e dura a semana toda." },
                { city: "Ayutthaya", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579367?q=80&w=800", desc: "Guerra de água contra elefantes. Uma experiência única e histórica." }
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl">
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

        {/* SEÇÃO 4: ARMAS DE ÁGUA */}
        <section className="py-24 px-6 bg-[#1A1A1A] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Onde Comprar <span className="text-[#00A8A8]">Sua Arma de Água</span></h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-[#00A8A8]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <MapPin className="text-[#00A8A8]" /> Bangkok
                </h3>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-lg">Shopping MBK Center</span>
                    <span className="font-bold text-[#00A8A8]">150 - 350฿</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-lg">Mercado de Sampeng</span>
                    <span className="font-bold text-[#00A8A8]">80 - 250฿</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-lg">Lojas 7-Eleven</span>
                    <span className="font-bold text-[#00A8A8]">99฿</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-[#FF6B35]/50 transition-colors">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <MapPin className="text-[#FF6B35]" /> Chiang Mai / Phuket
                </h3>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-lg">Mercado Warorot (CM)</span>
                    <span className="font-bold text-[#FF6B35]">80 - 200฿</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-4">
                    <span className="text-lg">Beira Mar de Patong (PK)</span>
                    <span className="font-bold text-[#FF6B35]">200 - 500฿</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="text-lg">Vendedores de Rua</span>
                    <span className="font-bold text-[#FF6B35]">100 - 300฿</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-12 text-gray-400 italic">Preços aproximados para modelos médios. No dia 13 os preços costumam subir!</p>
          </div>
        </section>

        {/* SEÇÃO 5: KIT SOBREVIVÊNCIA */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Kit <span className="text-[#00A8A8]">Sobrevivência</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Smartphone, title: "Capa Estanque", desc: "Fundamental para o celular" },
                { icon: Package2, title: "Pochete Impermeável", desc: "Para dinheiro e cartões" },
                { icon: Glasses, title: "Óculos de Proteção", desc: "Água nos olhos não é legal" },
                { icon: Shirt, title: "Camiseta Leve", desc: "Que seque rápido no corpo" },
                { icon: Footprints, title: "Chinelo Antiderrapante", desc: "O chão fica muito liso" },
                { icon: Shield, title: "Ziplock", desc: "Proteção extra para passaporte" }
              ].map((item, index) => (
                <div key={index} className="text-center p-8 rounded-3xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-gray-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#00A8A8]/10 text-[#00A8A8] rounded-full mb-6">
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
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#00A8A8] via-[#008A8A] to-[#007070]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A017]/10 rounded-full -mr-16 -mt-16"></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">Receba acesso imediato ao PDF completo com mapas e roteiros.</p>
              
              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$197</span>
                <div className="text-6xl md:text-8xl font-black text-[#FF6B35]">R$97</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único</span>
              </div>

              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none">
                <a href="#checkout">QUERO O GUIA SONGKRAN 2026</a>
              </Button>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Pagamento Seguro</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4" /> Garantia 7 Dias</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7: FAQ */}
        <section className="py-24 px-6 bg-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Dúvidas <span className="text-[#D4A017]">Comuns</span></h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Preciso de visto para a Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Brasileiros não precisam de visto para turismo na Tailândia por até 90 dias. Apenas passaporte com 6 meses de validade e Certificado de Febre Amarela.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Posso levar minha arma de água no avião?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Apenas na mala despachada e completamente vazia. Na bagagem de mão, elas costumam ser confiscadas por parecerem simulacros de armas reais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Como é o clima em abril na Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                É o mês mais quente do ano, com temperaturas passando dos 40°C. Por isso a guerra de água é tão celebrada - é a única forma de aguentar o calor!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaSongkran;


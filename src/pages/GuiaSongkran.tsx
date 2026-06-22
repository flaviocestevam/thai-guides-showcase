import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Check, X, Shield, MapPin, Droplets, Sparkles, Calendar, Map,
  Plane, Info, Star, BookOpen, Award, Smartphone, Hotel
} from "lucide-react";
import heroImg from "@/assets/generated/songkran-hero.png.asset.json";

const ORANGE = "#FF6B35";
const TEAL = "#00A8A8";
const GOLD = "#D4A017";
const NAVY = "#1A1A2E";

const GuiaSongkran = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Poppins',sans-serif]">
      <SEO
        title="Guia Songkran — Ano Novo Tailandês Sem Perrengue"
        description="O guia em português para viver Songkran sem perrengue: melhores cidades, hospedagem, proteção de documentos e roteiro completo."
        canonicalPath="/songkran-ano-novo-tailandes"
      />

      <Header />

      <main id="songkran-sales">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg.url}
              alt="Songkran — Ano Novo Tailandês"
              className="w-full h-full object-cover brightness-[0.45]"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white py-12">
            <div className="inline-block bg-[#FF6B35] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              💦 Atualizado
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
              Viva Songkran <span style={{ color: TEAL }}>Sem Perrengue</span> e Sem <span style={{ color: ORANGE }}>Susto no Bolso</span>

            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
              O guia em português para a maior guerra de água do mundo: onde ficar, como proteger documentos, em que cidade entrar de cabeça e o que evitar a qualquer custo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold py-8 px-10 text-xl rounded-xl shadow-2xl transition-all hover:scale-105 border-none">
                <a href="#oferta">Quero o Guia por R$67</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2">✓ 100% em português</span>
              <span className="flex items-center gap-2">✓ Acesso imediato</span>
              <span className="flex items-center gap-2">✓ Feito por quem mora aqui</span>
              <span className="flex items-center gap-2">✓ Garantia de 7 dias</span>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <section className="bg-[#0F0F1A] text-white py-6 px-6 border-y border-white/10">
          <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-around gap-6 text-center">
            <div><div className="text-2xl font-black" style={{ color: ORANGE }}>2.500+</div><div className="text-xs text-gray-400 uppercase tracking-wider">Leitores</div></div>
            <div><div className="text-2xl font-black" style={{ color: TEAL }}>4,9 ★</div><div className="text-xs text-gray-400 uppercase tracking-wider">Avaliação média</div></div>
            <div><div className="text-2xl font-black" style={{ color: GOLD }}>5 cidades</div><div className="text-xs text-gray-400 uppercase tracking-wider">Comparadas no guia</div></div>
            <div><div className="text-2xl font-black text-white">7 dias</div><div className="text-xs text-gray-400 uppercase tracking-wider">Garantia incondicional</div></div>
          </div>
        </section>

        {/* SEÇÃO 1: O QUE É */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Songkran não é só <br /><span style={{ color: TEAL }}>jogar água</span>
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>É o Ano Novo Tailandês — feriado nacional de três dias com origem budista, cerimônias em templos e uma das maiores celebrações de rua do planeta.</p>
                  <p>Turista cai de paraquedas, encharca celular, perde passaporte e volta jurando que "foi caótico demais". Quem entende a cultura vive duas festas: a espiritual da manhã e a guerra de água da tarde.</p>
                  <p className="font-semibold text-[#1A1A1A]">O guia te coloca dentro do segundo grupo.</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800"
                  alt="Templo na Tailândia em Songkran"
                  className="rounded-3xl shadow-2xl z-10 relative aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 blur-2xl" style={{ backgroundColor: `${ORANGE}33` }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: DOR */}
        <section className="py-24 px-6 bg-[#FFF7F2]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Os erros que <span style={{ color: ORANGE }}>arruinam Songkran</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">A festa é uma vez ao ano. Não dá pra perder tempo aprendendo na pancada:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Reservar hotel na rua errada e ficar 3 dias preso pela guerra de água do lado de fora",
                "Carregar passaporte no bolso e descobrir, encharcado, que precisa de novo na embaixada",
                "Ir pra cidade errada no dia errado e pegar a festa morta (ou perigosa demais)",
                "Pagar 3x mais caro em armas de água compradas em hora de pico turístico",
                "Acabar com celular morto no primeiro dia por confiar em capinha 'à prova d'água' qualquer",
                "Perder o lado cultural por não saber onde acontece a parte sagrada do feriado",
              ].map((dor, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                  <X className="flex-shrink-0 mt-1" style={{ color: ORANGE }} size={24} />
                  <p className="text-gray-700 leading-relaxed">{dor}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-lg font-semibold">
              O guia foi escrito para que você <span style={{ color: ORANGE }}>chegue pronto e curta cada minuto</span>.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: CIDADES — teaser visual */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Em <span style={{ color: TEAL }}>Que Cidade</span> Viver Songkran?
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Cada cidade tem um estilo, uma intensidade e um público diferente. Comparamos as 5 principais lado a lado dentro do guia — para você escolher a sua.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=800",
                "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=800",
                "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=800",
                "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800",
                "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800",
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800",
              ].map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl group">
                  <img src={img} alt="Cidade da Tailândia em Songkran" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white font-bold text-sm uppercase tracking-wider" style={{ color: ORANGE }}>
                    Comparada no guia
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: ROTEIROS — teaser */}
        <section className="py-24 px-6 bg-[#FFF7F2]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              3 Roteiros <span style={{ color: GOLD }}>Prontos</span> para Você
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Você escolhe os dias disponíveis, abre o PDF e segue. Hospedagem indicada, deslocamento entre cidades, tempo livre — tudo pensado.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { dias: "5 DIAS", title: "Modo Imersão", color: TEAL, desc: "Direto na cidade certa, no auge da festa. Para quem tem feriado curto." },
                { dias: "10 DIAS", title: "Cultura + Festa", color: ORANGE, desc: "Templos pela manhã, guerra de água à tarde e descanso na praia depois." },
                { dias: "15 DIAS", title: "Songkran Completo", color: GOLD, desc: "Pega as três principais celebrações em cidades diferentes, com pausas." },
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

        {/* SEÇÃO 5: O QUE VOCÊ DESCOBRE */}
        <section className="py-24 px-6 bg-[#0F0F1A] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              O Que Você Vai <span style={{ color: ORANGE }}>Descobrir</span>
            </h2>
            <p className="text-center text-gray-400 mb-16">Os capítulos que viram a chave entre "passei perrengue" e "foi a melhor viagem da vida":</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: MapPin, title: "Em qual cidade entrar", desc: "Comparativo cara a cara das 5 capitais de Songkran, com prós e contras." },
                { icon: Hotel, title: "Onde se hospedar", desc: "As ruas que viram zona de guerra — e os bairros para dormir em paz." },
                { icon: Smartphone, title: "Como blindar eletrônicos", desc: "O que funciona de verdade (e o que vai estragar seu celular)." },
                { icon: Shield, title: "Proteção de documentos", desc: "O passo a passo de quem mora aqui para não perder passaporte e dinheiro." },
                { icon: Droplets, title: "Armas de água & estratégia", desc: "Onde comprar barato, qual escolher e onde NUNCA atacar locais." },
                { icon: Sparkles, title: "O lado sagrado", desc: "Templos, horários das cerimônias e como participar sem ofender." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-[#FF6B35]/50 transition-colors">
                  <item.icon className="mb-4" size={36} style={{ color: ORANGE }} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: COMPARAÇÃO */}
        <section className="py-24 px-6 bg-[#FFF7F2]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Sem Guia <span style={{ color: ORANGE }}>vs.</span> Com o Guia
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl border-2 border-orange-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-400">Sem o guia</h3>
                <ul className="space-y-4">
                  {[
                    "Vídeos no YouTube em inglês, fragmentados",
                    "Hotel reservado no escuro, sem saber se cai na zona de guerra",
                    "Celular molhado e passaporte em risco no primeiro dia",
                    "Acaba ficando só no clichê — sem o lado cultural",
                    "Gasta mais comprando errado e remarcando coisa",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <X className="flex-shrink-0 mt-1 text-gray-400" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-3xl border-2 shadow-2xl text-white" style={{ background: `linear-gradient(135deg, ${ORANGE}, ${NAVY})`, borderColor: ORANGE }}>
                <h3 className="text-2xl font-bold mb-6">Você com o guia</h3>
                <ul className="space-y-4">
                  {[
                    "PDF único em português, organizado por dia e cidade",
                    "Hospedagem indicada na zona certa para cada perfil",
                    "Checklist de proteção que funciona de verdade",
                    "Festa cultural + festa de rua, sem perder nenhuma",
                    "Economia real e zero retrabalho na viagem",
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

        {/* SEÇÃO 7: AUTORIDADE */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=600"
                  alt="Templo Wat Arun em Bangkok — expertise local"
                  className="rounded-3xl shadow-2xl aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg" style={{ backgroundColor: ORANGE }}>
                  <Award className="inline w-4 h-4 mr-1" /> Especialistas locais
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Quem está <span style={{ color: ORANGE }}>do outro lado</span> desse guia
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Somos uma equipe de brasileiros apaixonados e especialistas na Tailândia. Unimos a experiência prática de quem vive no país e já passou por vários Songkrans para criar o material mais completo em português sobre o feriado.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cada erro que vimos viajante cometer virou um capítulo. Sem enrolação, direto ao ponto, com foco em o que importa: você curtir a festa sem voltar com história ruim pra contar.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["4 anos morando", "12 países visitados", "300+ leitores"].map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: ORANGE }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: SUMÁRIO */}
        <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              O Que <span style={{ color: TEAL }}>Vem no Guia</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">PDF de 80+ páginas com mapas e links clicáveis.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Map, title: "Mapas por cidade", desc: "Zonas quentes e zonas seguras" },
                { icon: Hotel, title: "Hotéis testados", desc: "Em qual rua dormir em paz" },
                { icon: Calendar, title: "Calendário do feriado", desc: "Dia a dia, cidade a cidade" },

                { icon: Shield, title: "Kit sobrevivência", desc: "O que levar na mala" },
                { icon: Droplets, title: "Armas de água", desc: "Onde comprar e quanto pagar" },
                { icon: Sparkles, title: "Templos e cerimônias", desc: "Horários e etiqueta" },
                { icon: Plane, title: "Roteiros 5/10/15 dias", desc: "Pronto, dia a dia" },
                { icon: MapPin, title: "Comparativo de cidades", desc: "Onde Songkran é mais sua cara" },
                { icon: Info, title: "Glossário de bolso", desc: "Frases tailandesas úteis" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white hover:shadow-lg transition border border-gray-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${TEAL}1A`, color: TEAL }}>
                    <item.icon size={36} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* SEÇÃO 10: DEPOIMENTOS */}
        <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              O Que Dizem os <span style={{ color: TEAL }}>Leitores</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Pedro M.", city: "São Paulo", text: "Cheguei em Chiang Mai sabendo exatamente em que rua ficar. Dia 14, enquanto galera perdia celular, o meu tava intacto. Valeu cada centavo." },
                { name: "Camila & João", city: "Florianópolis", text: "Pegamos os 10 dias culturais + festa. Foi a melhor viagem de feriado da nossa vida. O capítulo de templos abriu nossa cabeça." },
                { name: "Diego S.", city: "Belo Horizonte", text: "Já fui em Songkran uma vez sem preparo e voltei perdendo tudo. Da segunda vez fui com o guia e parece que era outra viagem. Recomendo de olhos fechados." },
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

        {/* SEÇÃO 11: OFERTA */}
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#FF6B35] via-[#E55A2B] to-[#1A1A2E]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ backgroundColor: `${GOLD}1A` }}></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">Acesso imediato ao PDF e aos mapas.</p>

              <div className="bg-[#FFF7F2] p-6 rounded-2xl mb-8 text-left text-sm space-y-2">
                <div className="flex justify-between"><span>Guia Songkran (80+ páginas)</span><span className="font-bold">R$197</span></div>
                <div className="border-t border-orange-200 pt-2 flex justify-between font-bold"><span>Valor real</span><span className="line-through">R$197</span></div>
              </div>

              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$197</span>
                <div className="text-6xl md:text-8xl font-black" style={{ color: ORANGE }}>R$67</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único · 12x de R$ 6,71</span>
              </div>

              <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none">
                <a href="#checkout">QUERO O GUIA SONGKRAN</a>
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
                Leu o guia e não curtiu? Manda um e-mail dentro de 7 dias e devolvemos 100% do valor. Sem pergunta, sem burocracia.
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
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Brasileiro precisa de visto para a Tailândia?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Não. Brasileiros têm isenção de visto para até 90 dias. Só passaporte com 6 meses de validade e Certificado de Febre Amarela.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Quando exatamente acontece Songkran?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                O feriado oficial é em meados de abril, mas a duração e o pico variam de cidade pra cidade — algumas estendem por uma semana inteira. O calendário completo está dentro do guia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Vou sozinho — vale a pena?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Vale (e muito). É uma das festas mais sociáveis do mundo. O guia traz capítulo específico para quem vai solo, incluindo onde se hospedar para conhecer gente sem cair em armadilha.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Posso levar criança?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Pode, mas tem cidade certa, hora certa e bairro certo. O guia indica as zonas family-friendly da festa em cada cidade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Como recebo o guia depois da compra?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Após o pagamento confirmado, o PDF chega no seu e-mail em até 5 minutos. Acesso vitalício.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">E se eu já tiver passagem comprada?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Melhor ainda. O guia vai além do "para onde ir": entra fundo em hospedagem, roteiro dia a dia, proteção e cultura. Muitos leitores compram com passagem já fechada.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-gray-400 mt-12 flex items-center justify-center gap-2 text-sm">
            <Info className="w-4 h-4" /> Conteúdo revisado regularmente.
          </p>

        </section>

        {/* CTA FINAL */}
        <section className="py-20 px-6 bg-[#0F0F1A] text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A festa é em abril. <span style={{ color: ORANGE }}>O preparo é agora.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">Não desperdice a viagem aprendendo na pancada. Vai com quem já passou por isso — e te entrega tudo mastigado.</p>
            <Button asChild size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-bold py-8 px-12 text-xl rounded-xl shadow-2xl border-none">
              <a href="#oferta">Garantir Meu Guia por R$67</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaSongkran;

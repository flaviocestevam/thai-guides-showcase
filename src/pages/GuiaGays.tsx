import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Check, X, Shield, MapPin, Heart, Sparkles, Users, Hotel, Martini,
  Plane, Info, Star, BookOpen, MessageCircle, Gift, Award, Calendar, Map, Languages
} from "lucide-react";

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
              <span className="flex items-center gap-2">✓ Garantia de 7 dias</span>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <section className="bg-[#0F0F1A] text-white py-6 px-6 border-y border-white/10">
          <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-around gap-6 text-center">
            <div><div className="text-2xl font-black" style={{ color: PINK }}>2.300+</div><div className="text-xs text-gray-400 uppercase tracking-wider">Leitores em 2025</div></div>
            <div><div className="text-2xl font-black" style={{ color: PURPLE }}>4,9 ★</div><div className="text-xs text-gray-400 uppercase tracking-wider">Avaliação média</div></div>
            <div><div className="text-2xl font-black" style={{ color: TEAL }}>30+</div><div className="text-xs text-gray-400 uppercase tracking-wider">Hotéis testados</div></div>
            <div><div className="text-2xl font-black" style={{ color: GOLD }}>7 dias</div><div className="text-xs text-gray-400 uppercase tracking-wider">Garantia incondicional</div></div>
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
                  src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800"
                  alt="Bandeira do orgulho LGBTQIA+ em parada"
                  className="rounded-3xl shadow-2xl z-10 relative aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 blur-2xl" style={{ backgroundColor: `${PINK}33` }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: DOR */}
        <section className="py-24 px-6 bg-[#FFF5F8]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Já passou por <span style={{ color: PINK }}>alguma dessas</span>?
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">A internet é cheia de guia genérico hétero. Esse aqui resolve o que ninguém te conta:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Reservar um hotel romântico e ouvir 'só temos camas separadas' na recepção",
                "Acabar num 'gay bar' que era armadilha para turista pagar 5x o preço",
                "Cair num app e perceber tarde demais que era golpe de pegadinha + extorsão",
                "Ir pra ilha errada e descobrir que ninguém é LGBTQ+ por ali",
                "Perder a Pride por uma semana porque o site da prefeitura só tem em tailandês",
                "Não saber a diferença entre Silom Soi 2 e Soi 4 e gastar a noite no lugar errado",
              ].map((dor, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                  <X className="flex-shrink-0 mt-1" style={{ color: PINK }} size={24} />
                  <p className="text-gray-700 leading-relaxed">{dor}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-lg font-semibold">
              Esse guia foi feito <span style={{ color: PURPLE }}>exatamente</span> para você não passar por nada disso.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: TEASER CIDADES */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Por Onde Você Vai <span style={{ color: PURPLE }}>Realmente</span> Curtir
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Cada cidade tem uma cena. Te mostramos onde ela acontece de verdade — sem cair em "bar gay para turista" disfarçado.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { area: "Bangkok", title: "A capital da night gay asiática", desc: "Te entregamos os 2 bairros certos, a diferença entre eles e em que dia da semana cada um bomba.", color: PINK },
                { area: "Chiang Mai", title: "A bolha calma do Norte", desc: "Cidade pequena, cena descolada e segura. Mostramos os endereços queridos da comunidade local.", color: TEAL },
                { area: "Phuket / Patong", title: "Praia + festa sem parar", desc: "O complexo gay mais conhecido do país — e o que evitar dentro dele. Mapa de bolso incluído.", color: GOLD },
                { area: "Koh Samui", title: "Ilha romântica gay-friendly", desc: "Onde casais conseguem hospedagem boutique sem cara feia na recepção.", color: PURPLE },
                { area: "Pattaya", title: "Cena adulta 18+", desc: "Honesto sobre o que rola: o que vale ir, o que é cilada turística e como se proteger.", color: PINK },
                { area: "Surpresa do guia", title: "A cidade que ninguém comenta", desc: "Um destino fora do óbvio com vida LGBTQ+ vibrante. Revelado dentro do material.", color: TEAL },
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

        {/* SEÇÃO 4: TEASER HOTÉIS */}
        <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Hospedagem Sem <span style={{ color: PINK }}>Constrangimento</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              30+ endereços pré-aprovados pela comunidade — do hostel descolado ao 5★. Recepção que não te olha de cima quando você pede cama de casal.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { num: "30+", label: "Hotéis testados pessoalmente" },
                { num: "6", label: "Cidades cobertas" },
                { num: "3", label: "Faixas de preço (econômico, médio, luxo)" },
              ].map((s, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl text-center shadow-md">
                  <div className="text-5xl font-black mb-2" style={{ color: PINK }}>{s.num}</div>
                  <div className="text-gray-600 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-12 text-sm italic">
              A lista completa, com fotos, preços e link de reserva, está dentro do guia.
            </p>
          </div>
        </section>

        {/* SEÇÃO 5: COMPARAÇÃO */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Com o Guia <span style={{ color: PURPLE }}>vs.</span> Sem o Guia
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FFF5F8] p-10 rounded-3xl border-2 border-pink-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-400">Sem o guia</h3>
                <ul className="space-y-4">
                  {[
                    "Horas pesquisando em fórum gringo desatualizado",
                    "Hotel onde a recepção te trata com estranheza",
                    "Pagar 800฿ num bar que cobra 200฿ pra local",
                    "Sair do hotel sem saber se aquela região é segura",
                    "Cair em golpe clássico de app/saída do bar",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <X className="flex-shrink-0 mt-1 text-gray-400" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-3xl border-2 shadow-2xl text-white" style={{ background: `linear-gradient(135deg, ${PURPLE}, ${PINK})`, borderColor: PINK }}>
                <h3 className="text-2xl font-bold mb-6">Com o guia</h3>
                <ul className="space-y-4">
                  {[
                    "Tudo mastigado, em português, atualizado em 2026",
                    "Hotel pré-aprovado por gente da comunidade",
                    "Lista de bares com preço justo e código de conduta",
                    "Mapas de bolso por bairro com nível de 'liberdade'",
                    "Lista preta de golpes e como reagir em tailandês",
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

        {/* SEÇÃO 6: SEGURANÇA — teaser */}
        <section className="py-24 px-6 bg-[#1A1A1A] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Segurança & <span style={{ color: PINK }}>Etiqueta Local</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Um capítulo inteiro só sobre o que ninguém te conta em fórum de viagem.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "Demonstrações de afeto", desc: "Onde rola tranquilo, onde é melhor segurar a mão dentro do hotel — mapeado por região." },
                { icon: MapPin, title: "Templos e locais sagrados", desc: "As regras que parecem óbvias mas custam multa pesada para quem ignora." },
                { icon: Martini, title: "Bares com conta inflada", desc: "A lista negra dos lugares que cobram 4x do gringo — e como reconhecer um na entrada." },
                { icon: Users, title: "Golpes em apps de paquera", desc: "Os 5 padrões de golpe mais aplicados em brasileiros. Como sair sem prejuízo." },
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

        {/* SEÇÃO 7: AUTORIDADE */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=600"
                  alt="Templo Wat Arun em Bangkok — expertise local na Tailândia"
                  className="rounded-3xl shadow-2xl aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg" style={{ backgroundColor: PURPLE }}>
                  <Award className="inline w-4 h-4 mr-1" /> Especialistas locais
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Quem está <span style={{ color: PINK }}>do outro lado</span> desse guia
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Somos uma equipe de brasileiros apaixonados e especialistas na Tailândia. Unimos nossa experiência prática de quem vive no país e conhece cada detalhe do cotidiano e da cultura local para criar o material mais completo em português.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Esse guia é o resultado de cada erro que vimos viajantes cometerem — e cada acerto que custou caro descobrir. Sem enrolação, direto ao ponto e com foco no que realmente importa para a sua liberdade e segurança.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["4 anos morando", "12 países visitados", "300+ leitores"].map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: PURPLE }}>{t}</span>
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
              O Que <span style={{ color: PURPLE }}>Vem no Guia</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">PDF de 90+ páginas com mapas, links clicáveis e atualizações grátis durante 2026.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Hotel, title: "Hotéis testados", desc: "30+ endereços gay-friendly" },
                { icon: Martini, title: "Mapa da night", desc: "Bares, baladas e cabarés" },
                { icon: Heart, title: "Saunas & spas", desc: "Os 10 melhores do país" },
                { icon: Plane, title: "Roteiro 14 dias", desc: "Pronto, dia a dia, gay-friendly" },
                { icon: Sparkles, title: "Eventos & Prides", desc: "Calendário 2026 completo" },
                { icon: Languages, title: "Frases em tailandês", desc: "Para flertar e se virar" },
                { icon: Map, title: "Mapas por bairro", desc: "Silom, Nimman, Patong" },
                { icon: Shield, title: "Lista preta de golpes", desc: "Como identificar e reagir" },
                { icon: Calendar, title: "Quando ir", desc: "Calendário de eventos e clima" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white hover:shadow-lg transition border border-gray-100">
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

        {/* SEÇÃO 9: BÔNUS */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Bônus <span style={{ color: GOLD }}>Inclusos</span>
            </h2>
            <p className="text-center text-gray-500 mb-16">Levados juntos com o guia, sem custo extra.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { icon: BookOpen, title: "E-book: 'Sobrevivendo a Songkran'", value: "R$47" },
                { icon: Gift, title: "Atualizações grátis durante 2026", value: "R$57" },
              ].map((b, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-[#FFF5F8] p-8 rounded-3xl shadow-lg border-2 border-pink-100 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${GOLD}1A`, color: GOLD }}>
                    <b.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{b.title}</h3>
                  <div className="text-sm text-gray-400 line-through">Valor avulso: {b.value}</div>
                  <div className="text-sm font-bold mt-1" style={{ color: PINK }}>GRÁTIS com o guia</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10: DEPOIMENTOS */}
        <section className="py-24 px-6 bg-[#F8FAFC]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              O Que Dizem os <span style={{ color: PURPLE }}>Leitores</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Lucas R.", city: "São Paulo", text: "Fui pra Bangkok e Chiang Mai com o guia na mão. Economizei tempo, dinheiro e perrengue. O mapa de Silom valeu o preço inteiro." },
                { name: "Rafael & Diego", city: "Belo Horizonte", text: "Lua de mel gay perfeita. As dicas de hotel boutique em Phuket foram certeiras — equipe atendendo sem nenhuma cara estranha." },
                { name: "Bruno F.", city: "Rio de Janeiro", text: "O capítulo de segurança me salvou de um golpe clássico no Grindr. Só por isso já valia. Recomendo demais." },
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
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#7C3AED] via-[#9333EA] to-[#EC4899]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ backgroundColor: `${GOLD}1A` }}></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">Acesso imediato ao PDF, mapas e atualizações de 2026.</p>

              <div className="bg-[#FFF5F8] p-6 rounded-2xl mb-8 text-left text-sm space-y-2">
                <div className="flex justify-between"><span>Guia completo (90+ páginas)</span><span className="font-bold">R$197</span></div>
                <div className="flex justify-between text-gray-500"><span>+ E-book Songkran</span><span>R$47</span></div>
                <div className="flex justify-between text-gray-500"><span>+ Atualizações 2026</span><span>R$57</span></div>
                <div className="border-t border-pink-200 pt-2 flex justify-between font-bold"><span>Valor real</span><span className="line-through">R$301</span></div>
              </div>

              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$301</span>
                <div className="text-6xl md:text-8xl font-black" style={{ color: PINK }}>R$97</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único</span>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] hover:opacity-90 text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none">
                <a href="#checkout">QUERO O GUIA GAY 2026</a>
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
                A Bangkok Pride acontece em junho. O guia traz o calendário 2026 completo com Prides em Bangkok, Chiang Mai, Phuket e Pattaya, além de festas mensais como Maggie Choo's e gCircuit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Apps de paquera funcionam por lá?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Funcionam muito bem (Grindr, Hornet, Blued). O guia traz as boas práticas de segurança e como evitar os principais golpes (perfis falsos, "money boys" disfarçados, extorsão por foto).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Como recebo o guia depois da compra?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Após o pagamento confirmado, o PDF chega no seu e-mail em até 5 minutos. Acesso vitalício e atualizações grátis durante 2026.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Serve pra quem viaja sozinho?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Foi pensado exatamente pra isso. Tem capítulo específico sobre como conhecer gente na night, em apps e em eventos comunitários, com segurança.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-gray-400 mt-12 flex items-center justify-center gap-2 text-sm">
            <Info className="w-4 h-4" /> Conteúdo atualizado em 2026.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 px-6 bg-[#0F0F1A] text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A viagem é sua. <span style={{ color: PINK }}>O atalho é nosso.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">Não desperdice sua primeira (ou próxima) vez na Tailândia se virando no Google Tradutor.</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#EC4899] to-[#7C3AED] hover:opacity-90 text-white font-bold py-8 px-12 text-xl rounded-xl shadow-2xl border-none">
              <a href="#oferta">Garantir Meu Guia por R$97</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaGays;

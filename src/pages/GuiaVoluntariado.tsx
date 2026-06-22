import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Check, X, Shield, Heart, Sparkles, Award, Star, Leaf, PawPrint,
  GraduationCap, Home, BookOpen, Gift, Info, FileText, Map, DollarSign, Calendar
} from "lucide-react";
import heroImg from "@/assets/generated/voluntariado-hero.png.asset.json";

const GREEN = "#16A34A";
const EMERALD = "#059669";
const GOLD = "#D4A017";
const DEEP = "#064E3B";

const GuiaVoluntariado = () => {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-['Poppins',sans-serif]">
      <SEO
        title="Guia de Voluntariado na Tailândia — Em Português"
        description="O guia em português para fazer voluntariado na Tailândia: como encontrar projetos éticos, vistos, custos reais e roteiros sem agência."
        canonicalPath="/voluntariado-tailandia"
      />
      <Header />

      <main id="voluntariado-sales">
        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImg.url}
              alt="Voluntariado com elefantes na Tailândia"
              className="w-full h-full object-cover brightness-[0.45]"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-white py-12">
            <div className="inline-block bg-gradient-to-r from-[#16A34A] to-[#059669] text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              🌿 Edição 2026 • Atualizado
            </div>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
              Viva a Tailândia <span style={{ color: GOLD }}>Por Dentro</span> — Fazendo <span style={{ color: GREEN }}>Voluntariado</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
              O guia em português para encontrar projetos éticos, se inscrever direto (sem agência caríssima) e viver a experiência mais intensa da sua vida sem ser enganado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#16A34A] to-[#059669] hover:opacity-90 text-white font-bold py-8 px-10 text-xl rounded-xl shadow-2xl transition-all hover:scale-105 border-none">
                <a href="#oferta">Quero o Guia por R$67</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300 font-medium">
              <span className="flex items-center gap-2">✓ 100% em português</span>
              <span className="flex items-center gap-2">✓ Acesso imediato</span>
              <span className="flex items-center gap-2">✓ Inscrição direta (sem agência)</span>
              <span className="flex items-center gap-2">✓ Garantia de 7 dias</span>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF BAR */}
        <section className="bg-[#0F1A14] text-white py-6 px-6 border-y border-white/10">
          <div className="container mx-auto max-w-6xl flex flex-wrap items-center justify-around gap-6 text-center">
            <div><div className="text-2xl font-black" style={{ color: GREEN }}>1.200+</div><div className="text-xs text-gray-400 uppercase tracking-wider">Leitores em 2025</div></div>
            <div><div className="text-2xl font-black" style={{ color: GOLD }}>4,9 ★</div><div className="text-xs text-gray-400 uppercase tracking-wider">Avaliação média</div></div>
            <div><div className="text-2xl font-black" style={{ color: EMERALD }}>4 áreas</div><div className="text-xs text-gray-400 uppercase tracking-wider">De voluntariado</div></div>
            <div><div className="text-2xl font-black text-white">7 dias</div><div className="text-xs text-gray-400 uppercase tracking-wider">Garantia incondicional</div></div>
          </div>
        </section>

        {/* SEÇÃO 1: POR QUE */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Voluntariado na Tailândia <br /><span style={{ color: GREEN }}>muda quem volta</span>
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>Não é uma viagem. É um mês (ou três) vivendo dentro de um santuário, escola de vila ou projeto de conservação — comendo arroz com a família, dormindo perto da floresta, aprendendo tailandês na marra.</p>
                  <p>A maioria dos brasileiros nunca vai porque trava em <strong>site em inglês, preço em dólar e medo de cair em projeto duvidoso</strong>.</p>
                  <p className="font-semibold text-[#1A1A1A]">Esse guia foi feito pra você não travar.</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=800"
                  alt="Santuário ético de elefantes na Tailândia"
                  className="rounded-3xl shadow-2xl z-10 relative aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0 blur-2xl" style={{ backgroundColor: `${GREEN}33` }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: DOR */}
        <section className="py-24 px-6 bg-[#F0FDF4]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Perdido entre <span style={{ color: GREEN }}>sites em inglês</span> e agências caras?
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">O voluntariado é uma vez na vida. Não dá pra arriscar:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Pagar R$ 8 mil para uma agência fazer o que dava pra fazer sozinho",
                "Cair em 'santuário' que na verdade explora os elefantes em shows",
                "Chegar e descobrir que o projeto não existe mais (ou nunca existiu)",
                "Não saber se vai como turista ou se precisa de visto específico",
                "Errar nas vacinas obrigatórias e ficar preso no aeroporto",
                "Mandar a inscrição em inglês mal traduzido e ser ignorado",
              ].map((dor, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                  <X className="flex-shrink-0 mt-1" style={{ color: GREEN }} size={24} />
                  <p className="text-gray-700 leading-relaxed">{dor}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-lg font-semibold">
              O guia foi escrito para você <span style={{ color: GREEN }}>chegar do zero ao avião</span> sem depender de ninguém.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: ÁREAS — teaser */}
        <section className="py-24 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Escolha sua <span style={{ color: EMERALD }}>Causa</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Mapeamos as 4 grandes áreas de voluntariado na Tailândia, com os projetos sérios de cada uma destrinchados no guia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: PawPrint, title: "Elefantes", desc: "Como diferenciar santuário ético de cilada disfarçada de turismo." },
                { icon: GraduationCap, title: "Educação", desc: "Ensino de inglês para crianças em escolas rurais e refugiadas." },
                { icon: Leaf, title: "Natureza", desc: "Conservação marinha, reflorestamento e proteção de espécies." },
                { icon: Home, title: "Comunidade", desc: "Imersão em vilas tradicionais — construção, agricultura e cultura." },
              ].map((card, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-[#16A34A]/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="mb-6" style={{ color: GREEN }}><card.icon className="w-10 h-10" /></div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: DURAÇÕES — teaser */}
        <section className="py-24 px-6 bg-[#F0FDF4]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Quanto <span style={{ color: GOLD }}>Tempo</span> Você Tem?
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
              Existe formato pra cada perfil. O guia mostra qual visto e quais projetos aceitam cada duração.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { dias: "2 SEMANAS", title: "Imersão Curta", color: EMERALD, desc: "Para férias prolongadas. Projetos que aceitam estadia de turista." },
                { dias: "1 MÊS", title: "Experiência Completa", color: GREEN, desc: "O formato mais popular. Tempo de criar vínculo real com o projeto." },
                { dias: "3 MESES+", title: "Vida Local", color: GOLD, desc: "Quem volta sem ser a mesma pessoa. Requer planejamento de visto." },
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
        <section className="py-24 px-6 bg-[#064E3B] text-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              O Que Você Vai <span style={{ color: GOLD }}>Descobrir</span>
            </h2>
            <p className="text-center text-gray-300 mb-16">Os capítulos que viram a chave entre "queria fazer um dia" e "fui e mudei minha vida":</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Shield, title: "Filtro de ética", desc: "Os 7 sinais que separam projeto sério de turismo disfarçado." },
                { icon: FileText, title: "Vistos passo a passo", desc: "Qual usar pra cada duração — e como tirar sem agência." },
                { icon: DollarSign, title: "Custos reais", desc: "Quanto custa o projeto, a estadia, a comida, o transporte por dia." },
                { icon: BookOpen, title: "Modelo de inscrição", desc: "Templates em inglês prontos para responder aos coordenadores." },
                { icon: Map, title: "Plataformas testadas", desc: "Onde achar vagas direto, sem pagar comissão de intermediário." },
                { icon: Heart, title: "Saúde e vacinas", desc: "Calendário oficial e o que ninguém te conta sobre clima rural." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 hover:border-[#16A34A]/50 transition-colors">
                  <item.icon className="mb-4" size={36} style={{ color: GOLD }} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: COMPARAÇÃO */}
        <section className="py-24 px-6 bg-[#F0FDF4]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              Com Agência <span style={{ color: GREEN }}>vs.</span> Com o Guia
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl border-2 border-green-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-400">Pacote de Agência</h3>
                <ul className="space-y-4">
                  {[
                    "Cobra de R$ 6 mil a R$ 12 mil de taxa",
                    "Lista limitada de projetos parceiros",
                    "Você não fala direto com o coordenador",
                    "Roteiro engessado, sem flexibilidade",
                    "Você nunca sabe se o projeto é mesmo ético",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <X className="flex-shrink-0 mt-1 text-gray-400" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-3xl border-2 shadow-2xl text-white" style={{ background: `linear-gradient(135deg, ${GREEN}, ${DEEP})`, borderColor: GREEN }}>
                <h3 className="text-2xl font-bold mb-6">Você com o guia</h3>
                <ul className="space-y-4">
                  {[
                    "Investe R$67 uma vez e fala direto com os projetos",
                    "Acesso à lista filtrada de plataformas sérias",
                    "Templates de e-mail em inglês prontos",
                    "Escolhe seu projeto, sua duração, seu visto",
                    "Critérios claros de ética antes de fechar",
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
                  src="https://images.unsplash.com/photo-1546479904-3eef27e36d6f?q=80&w=600"
                  alt="Elefantes em santuário ético na Tailândia"
                  className="rounded-3xl shadow-2xl aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg" style={{ backgroundColor: GREEN }}>
                  <Award className="inline w-4 h-4 mr-1" /> Especialistas locais
                </div>
              </div>
              <div className="space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Quem está <span style={{ color: GREEN }}>do outro lado</span> desse guia
                </h2>
                <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: GOLD }}></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Somos uma equipe de brasileiros apaixonados e especialistas na Tailândia. Visitamos projetos pessoalmente, conversamos com coordenadores e mapeamos o que realmente acontece dentro de cada santuário, escola e ONG.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cada projeto recomendado aqui foi filtrado pelo mesmo critério que usaríamos pra mandar um irmão. Sem comissão de agência, sem oba-oba — só o que funciona.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["4 anos morando", "12 países visitados", "300+ leitores"].map((t, i) => (
                    <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: GREEN }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: SUMÁRIO */}
        <section className="py-24 px-6 bg-[#F0FDF4]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              O Que <span style={{ color: GREEN }}>Vem no Guia</span>
            </h2>
            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">PDF de 90+ páginas com mapas, links clicáveis e atualizações grátis durante 2026.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { icon: Map, title: "Plataformas testadas", desc: "Onde achar vagas direto" },
                { icon: PawPrint, title: "Filtro ético", desc: "Como avaliar santuários" },
                { icon: FileText, title: "Vistos para brasileiros", desc: "Passo a passo de cada tipo" },
                { icon: DollarSign, title: "Custos reais", desc: "Tabela em R$ e ฿" },
                { icon: BookOpen, title: "Templates de inscrição", desc: "Modelos prontos em inglês" },
                { icon: Heart, title: "Saúde e vacinas", desc: "Checklist oficial" },
                { icon: GraduationCap, title: "Etiqueta cultural", desc: "O que NÃO fazer no projeto" },
                { icon: Sparkles, title: "Pós-projeto", desc: "Roteiro de turismo bônus" },
                { icon: Calendar, title: "Quando ir", desc: "Calendário por área" },
              ].map((item, i) => (
                <div key={i} className="text-center p-8 rounded-3xl bg-white hover:shadow-lg transition border border-green-100">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${GREEN}1A`, color: GREEN }}>
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
            <p className="text-center text-gray-500 mb-16">Sem custo extra. Já vêm junto com o PDF.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { icon: BookOpen, title: "Templates de inscrição em inglês", value: "R$57" },
                { icon: Gift, title: "Atualizações grátis durante 2026", value: "R$47" },
              ].map((b, i) => (
                <div key={i} className="bg-gradient-to-br from-white to-[#F0FDF4] p-8 rounded-3xl shadow-lg border-2 border-green-100 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${GOLD}1A`, color: GOLD }}>
                    <b.icon size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{b.title}</h3>
                  <div className="text-sm text-gray-400 line-through">Valor avulso: {b.value}</div>
                  <div className="text-sm font-bold mt-1" style={{ color: GREEN }}>GRÁTIS com o guia</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 10: DEPOIMENTOS */}
        <section className="py-24 px-6 bg-[#F0FDF4]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              O Que Dizem os <span style={{ color: GREEN }}>Leitores</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Mariana C.", city: "Porto Alegre", text: "Agência me pediu R$ 9 mil para 1 mês com elefantes. Com o guia paguei R$ 1.800 direto no santuário. A experiência foi profunda demais." },
                { name: "Thiago A.", city: "Brasília", text: "Os critérios de ética abriram meu olho. Quase fui pra um lugar que faz show de elefante disfarçado. O guia salvou minha viagem." },
                { name: "Júlia B.", city: "Salvador", text: "Os templates de inscrição em inglês foram um divisor de águas. Recebi resposta em 48h e fechei o projeto sem nenhum intermediário." },
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
        <section id="oferta" className="py-24 px-6 bg-gradient-to-br from-[#16A34A] via-[#059669] to-[#064E3B]">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ backgroundColor: `${GOLD}1A` }}></div>
              <h2 className="text-3xl font-bold mb-4">Garantir Meu Guia Agora</h2>
              <p className="text-gray-600 mb-10 text-lg">Acesso imediato ao PDF, templates e atualizações de 2026.</p>

              <div className="bg-[#F0FDF4] p-6 rounded-2xl mb-8 text-left text-sm space-y-2">
                <div className="flex justify-between"><span>Guia Voluntariado (90+ páginas)</span><span className="font-bold">R$197</span></div>
                <div className="flex justify-between text-gray-500"><span>+ Templates de inscrição</span><span>R$57</span></div>
                <div className="flex justify-between text-gray-500"><span>+ Atualizações 2026</span><span>R$47</span></div>
                <div className="border-t border-green-200 pt-2 flex justify-between font-bold"><span>Valor real</span><span className="line-through">R$301</span></div>
              </div>

              <div className="space-y-2 mb-10">
                <span className="text-xl text-gray-400 line-through font-medium">De R$301</span>
                <div className="text-6xl md:text-8xl font-black" style={{ color: GREEN }}>R$67</div>
                <span className="block text-sm font-bold text-gray-400 tracking-widest uppercase">Pagamento Único</span>
              </div>

              <Button asChild size="lg" className="bg-gradient-to-r from-[#16A34A] to-[#059669] hover:opacity-90 text-white font-bold py-10 px-12 text-2xl rounded-2xl shadow-xl w-full transition-transform hover:scale-[1.02] border-none">
                <a href="#checkout">QUERO O GUIA VOLUNTARIADO</a>
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
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Precisa falar inglês fluente?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Não. A maioria dos projetos aceita inglês básico/intermediário. O guia traz templates de inscrição prontos para você adaptar, mesmo se nunca escreveu em inglês formal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Qual a idade mínima?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                A maior parte dos projetos pede 18 anos completos. Existem opções para menores acompanhados, mas o foco do guia é em adultos viajando sozinhos ou em casal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Quanto custa, no total?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Depende da área e da duração — vai de R$ 1.500 a R$ 6.000 sem contar passagem aérea. Bem menos que agência. O guia traz a tabela completa por projeto e categoria.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Preciso de visto especial?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Depende da duração. Até 90 dias dá pra ir como turista isento. Acima disso ou para projetos que pagam ajuda de custo, precisa de visto específico. O guia explica cada cenário.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Como sei se o projeto é ético?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                O guia traz uma checklist com 7 critérios objetivos (banho com elefante, espetáculos, comida na floresta, etc). Você aplica antes de fechar e elimina 90% das ciladas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border rounded-2xl px-8 py-2">
              <AccordionTrigger className="text-lg font-bold hover:no-underline">Como recebo o guia depois da compra?</AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                Após o pagamento confirmado, o PDF + os templates chegam no e-mail em até 5 minutos. Acesso vitalício e atualizações grátis durante 2026.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="text-center text-gray-400 mt-12 flex items-center justify-center gap-2 text-sm">
            <Info className="w-4 h-4" /> Conteúdo atualizado em 2026.
          </p>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 px-6 bg-[#0F1A14] text-white text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A causa é sua. <span style={{ color: GREEN }}>O caminho é nosso.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10">Não pague R$ 9 mil pra agência fazer o que você consegue fazer sozinho com o guia certo na mão.</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-[#16A34A] to-[#059669] hover:opacity-90 text-white font-bold py-8 px-12 text-xl rounded-xl shadow-2xl border-none">
              <a href="#oferta">Garantir Meu Guia por R$67</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuiaVoluntariado;

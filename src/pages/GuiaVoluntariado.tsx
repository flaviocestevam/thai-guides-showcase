import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome } from "@/components/NavigationButtons";
import { 
  Check, Shield, Clock, ChevronDown, 
  BookOpen, Zap, ArrowRight, Sparkles, 
  CircleCheck, GraduationCap, PawPrint, Leaf, Home, 
  Smile, Globe, Compass, AlertTriangle
} from "lucide-react";
import { useState } from "react";

const CAKTO_LINK = "[LINK_DE_PAGAMENTO]";

const CTAButton = ({ large = false, text = "QUERO O GUIA POR R$ 67" }: { large?: boolean; text?: string }) => (
  <a
    href={CAKTO_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold rounded-lg transition-all hover:scale-105 hover:shadow-xl animate-pulse-subtle ${
      large ? "px-10 py-5 text-xl" : "px-8 py-4 text-lg"
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
        className="flex justify-between items-center w-full py-5 text-left font-semibold text-foreground font-body"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-5 text-muted-foreground font-body leading-relaxed">{a}</p>}
    </div>
  );
};

const GuiaVoluntariado = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <SEO 
        title="Guia de Voluntariado na Tailândia | Guias Tailândia"
        description="Guia completo em português para brasileiros que querem fazer voluntariado na Tailândia. Com elefantes, crianças, meio ambiente e comunidades. Por R$ 67."
        canonicalPath="/voluntariado-tailandia"
      />
      <Header />
      <main className="pt-20">
        <Breadcrumbs />
        
        {/* HERO */}
        <section className="py-20 px-4 bg-muted/20 relative overflow-hidden text-center">
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> 🌿 O único guia em português sobre voluntariado na Tailândia
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
              Viva a Tailândia por dentro.<br/>
              <span className="text-primary">Faça voluntariado e mude sua história.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Um guia completo e em português para você encontrar, se inscrever e chegar preparado no seu voluntariado na Tailândia — com elefantes, crianças, meio ambiente ou comunidades rurais.
            </p>
            <CTAButton large text="Quero o Guia por R$ 67" />
            
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground font-semibold">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> 🔒 Compra 100% segura</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> 📲 Acesso imediato</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="w-4 h-4 text-primary" /> ✅ Funciona para brasileiros sem experiência</span>
            </div>

            <div className="mt-16 bg-muted/30 rounded-2xl aspect-video flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
              <p className="text-muted-foreground italic px-8">
                “Voluntário brasileiro em projeto de voluntariado na Tailândia, natureza, elefantes ou comunidade local.”
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
              Você quer fazer voluntariado na Tailândia, mas não sabe por onde começar?
            </h2>
            <div className="space-y-6 mb-12">
              {[
                "Você pesquisou no Google e encontrou apenas sites em inglês, com informações confusas e preços em dólar.",
                "Ficou em dúvida se precisa de visto especial, vacinas obrigatórias ou alguma certificação.",
                "Não sabe se os programas são confiáveis ou se vão cobrar caro demais.",
                "Tem medo de chegar lá e não saber onde vai dormir, o que vai comer e como será a rotina.",
                "Não encontrou nenhum conteúdo completo em português explicando tudo do zero para brasileiros."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start bg-destructive/5 p-4 rounded-xl border border-destructive/10">
                  <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
                  <p className="text-foreground/90 leading-relaxed font-body">{text}</p>
                </div>
              ))}
            </div>
            <div className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Esse guia foi criado exatamente para resolver isso. Tudo em português, com as informações que você realmente precisa — do planejamento até o primeiro dia no projeto.
              </p>
            </div>
          </div>
        </section>

        {/* O QUE É O GUIA */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              O que é o Guia de Voluntariado na Tailândia?
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-body">
              <p>
                Um guia digital em PDF, completo, escrito em português, criado para ajudar brasileiros a encontrar, escolher, se inscrever e se preparar para fazer voluntariado na Tailândia.
              </p>
              <p>
                Ele mostra os principais tipos de voluntariado disponíveis no país, explica como funcionam os programas, quanto custa na prática, o que normalmente está incluso, o que pode ser cobrado à parte, como se inscrever do Brasil e como chegar preparado.
              </p>
            </div>
          </div>
        </section>

        {/* TIPOS DE VOLUNTARIADO */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
              Escolha o tipo de voluntariado que combina com você
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">🐘</div>
                <h3 className="text-2xl font-display font-bold mb-4">Voluntariado com Elefantes e Animais</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O tipo mais famoso da Tailândia. Você pode atuar em santuários éticos com elefantes resgatados, ajudando em atividades como alimentação, banho, caminhadas supervisionadas e cuidados diários.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O guia mostra como identificar projetos éticos, quais sinais de alerta observar e como evitar lugares que exploram animais usando o nome de voluntariado.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">👦</div>
                <h3 className="text-2xl font-display font-bold mb-4">Voluntariado com Crianças e Ensino</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Uma opção para quem quer contribuir com educação, inglês básico ou apoio pedagógico em escolas e comunidades.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O guia explica quais programas aceitam brasileiros sem formação em pedagogia, qual nível de inglês é recomendado e como se preparar para trabalhar com crianças de forma respeitosa.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">🌱</div>
                <h3 className="text-2xl font-display font-bold mb-4">Voluntariado Ambiental e Reflorestamento</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ideal para quem quer trabalhar em contato com a natureza. Pode envolver reflorestamento, limpeza de praias, preservação de manguezais, conservação marinha e proteção de tartarugas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O guia mostra onde ficam os principais projetos, quais aceitam iniciantes e quais podem exigir experiência ou certificações específicas.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 bg-card border border-border rounded-3xl hover:shadow-xl transition-all">
                <div className="text-4xl mb-6">🏘️</div>
                <h3 className="text-2xl font-display font-bold mb-4">Voluntariado em Comunidades Rurais</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Uma experiência mais imersiva, vivendo perto de comunidades locais e participando de projetos ligados a agricultura, construção, água potável, saúde comunitária e apoio social.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O guia explica como é a adaptação cultural, o nível de conforto das acomodações e o que esperar do dia a dia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE ESTÁ INCLUSO NO GUIA */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
              Tudo que você vai encontrar dentro do guia
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Como funciona o voluntariado na Tailândia para brasileiros", desc: "Explicação completa sobre quem pode participar, o que se espera de você e como funcionam os programas." },
                { title: "Tipos de voluntariado disponíveis", desc: "Animais, elefantes, ensino, crianças, meio ambiente, reflorestamento e comunidades rurais." },
                { title: "Visto para voluntários", desc: "Quando é possível ir como turista, quando pode ser necessário outro tipo de visto e quais cuidados tomar antes de viajar." },
                { title: "Vacinas obrigatórias e recomendadas", desc: "Orientações sobre certificado internacional de vacinação, febre amarela e vacinas recomendadas para brasileiros." },
                { title: "Melhores plataformas para encontrar voluntariado", desc: "Explicação sobre plataformas como Worldpackers, Workaway, Volunteer World, Volunteering Solutions, Projects Abroad e organizações diretas." },
                { title: "Como avaliar se um programa é confiável", desc: "Sinais de alerta, perguntas que você deve fazer, avaliações que precisa verificar e cuidados antes de pagar qualquer taxa." },
                { title: "Quanto custa na realidade", desc: "Simulação de gastos com passagem, taxa do programa, alimentação, acomodação, transporte interno, seguro viagem e despesas extras." },
                { title: "O que normalmente está incluso nos programas", desc: "Acomodação, refeições, orientação local, suporte da equipe e custos que podem ficar por fora." },
                { title: "Como se inscrever do Brasil passo a passo", desc: "Formulários, documentos, carta de motivação, prazo de resposta e o que fazer após ser aceito." },
                { title: "Modelo de carta de motivação em inglês", desc: "Texto pronto para adaptar na sua inscrição." },
                { title: "O que levar na mochila", desc: "Lista prática de roupas, documentos, medicamentos, itens de higiene, equipamentos úteis e o que evitar levar." },
                { title: "Como é a rotina diária", desc: "Horários, tarefas, tempo livre, relação com a equipe local e convivência com outros voluntários internacionais." },
                { title: "Como são as acomodações", desc: "Quartos compartilhados, banheiro, alimentação, Wi-Fi, ventilador, ar-condicionado e nível de conforto esperado." },
                { title: "Dicas culturais essenciais", desc: "Como se vestir, como se comportar em templos, como cumprimentar, o que evitar e como respeitar a cultura tailandesa." },
                { title: "Seguro viagem para voluntários", desc: "O que observar antes de contratar um seguro e por que nem todo seguro comum cobre atividades de voluntariado." },
                { title: "Checklist de preparação", desc: "O que resolver antes da viagem: passaporte, visto, vacinas, seguro, inscrição, passagem, câmbio e comunicação com a família." },
                { title: "Como chegar na Tailândia saindo do Brasil", desc: "Rotas comuns, conexões, aeroportos principais e deslocamento até o projeto." },
                { title: "O que fazer depois do voluntariado", desc: "Como estender a viagem, explorar outras regiões da Tailândia e usar a experiência no currículo ou LinkedIn." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MANTENDO O RESTANTE PARA ETAPA POSTERIOR (PREÇO/FAQ ORIGINAIS) */}
        {/* PRICING BLOCK - STANDARDIZED WITH SITE */}
        <section className="py-24 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-[2rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-10 py-2 font-bold text-sm rotate-0 translate-x-0">OFERTA DE LANÇAMENTO</div>
            <div className="p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Guia Completo de Voluntariado</h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-muted-foreground line-through text-xl">R$ 197</span>
                <span className="text-5xl md:text-7xl font-black text-primary">R$ 67</span>
              </div>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto font-body">
                Economize dezenas de horas de pesquisa e evite taxas desnecessárias de agências intermediárias.
              </p>
              <CTAButton large />
              <p className="mt-8 text-sm text-muted-foreground font-semibold flex items-center justify-center gap-2 uppercase tracking-widest">
                <Shield className="w-4 h-4" /> Pagamento Único · Acesso Vitalício
              </p>
            </div>
          </div>
        </section>

        {/* FAQ - EXTENDED */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Dúvidas <span className="text-primary">Comuns</span></h2>
            <div className="space-y-2">
              <FAQItem 
                q="Como vou receber o guia?" 
                a="Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link de download do guia em PDF. Você poderá ler no celular, tablet ou computador." 
              />
              <FAQItem 
                q="Precisa falar inglês fluente?" 
                a="Para a maioria dos projetos de animais e ambiente, o inglês básico/intermediário é suficiente para seguir instruções. No guia, fornecemos modelos de carta em inglês para te ajudar na inscrição." 
              />
              <FAQItem 
                q="Vou ter que pagar para ser voluntário?" 
                a="Na Tailândia, projetos que oferecem alojamento e comida geralmente cobram uma taxa simbólica para cobrir seus custos operacionais. O guia explica como encontrar os projetos com as melhores taxas e como fugir de agências que cobram fortunas." 
              />
              <FAQItem 
                q="O guia inclui as vacinas?" 
                a="Sim! Temos um checklist completo de vacinas obrigatórias (como Febre Amarela) e recomendadas para brasileiros que viajam para áreas rurais da Tailândia." 
              />
              <FAQItem 
                q="Tem suporte se eu tiver dúvidas?" 
                a="Sim! Ao adquirir o guia, você terá acesso ao nosso canal de suporte por e-mail para tirar dúvidas pontuais sobre sua viagem e planejamento." 
              />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <BackToHome />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GuiaVoluntariado;
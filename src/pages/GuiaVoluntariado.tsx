import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { BackToHome } from "@/components/NavigationButtons";
import { 
  Check, Shield, Clock, ChevronDown, 
  BookOpen, Zap, ArrowRight, Sparkles, 
  CircleCheck, GraduationCap, PawPrint, Leaf, Home, 
  Smile, Globe, Compass, AlertTriangle, X, Quote
} from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
  useEffect(() => {
    // Force audit marker in console for external verification
    console.log("AUDIT_VERSION_VOLUNTARIADO_TAILANDIA_R67");
  }, []);

  return (
    <div className="min-h-screen bg-background font-body">
      <Helmet>
        <meta name="audit-version" content="AUDIT_VERSION_VOLUNTARIADO_TAILANDIA_R67" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
      </Helmet>
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

        {/* 6. PARA QUEM É ESTE GUIA */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
              Este guia é para você se...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "🙋", text: "Você sempre quis fazer algo significativo viajando, mas não sabia como transformar isso em realidade." },
                { icon: "🐘", text: "Sonha em cuidar de elefantes de perto, mas quer ter certeza de que o projeto é ético." },
                { icon: "✈️", text: "Está planejando uma viagem longa para a Tailândia e quer combinar turismo com uma experiência real." },
                { icon: "📚", text: "Quer adicionar uma experiência internacional ao currículo ou portfólio." },
                { icon: "🌍", text: "Está pensando em um ano sabático ou pausa na carreira e quer fazer isso com propósito." },
                { icon: "💸", text: "Tem orçamento limitado e precisa entender exatamente quanto vai gastar antes de decidir." },
                { icon: "🇧🇷", text: "É brasileiro, não fala inglês fluente e quer um conteúdo em português explicando tudo." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-card p-6 rounded-2xl border border-border shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-foreground/90 font-body">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PARA QUEM NÃO É */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Este guia não é para você se...
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Você está buscando emprego remunerado na Tailândia. Voluntariado não é trabalho pago.",
                "Você quer apenas um roteiro turístico genérico de Bangkok, Phuket ou ilhas.",
                "Você não tem interesse em ajudar, respeitar a cultura local ou seguir regras do projeto."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center bg-card p-4 rounded-xl border border-border shadow-sm">
                  <X className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-muted-foreground font-body">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. DEPOIMENTOS */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center">
              Quem já foi conta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-card border border-border rounded-3xl shadow-lg relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                  “Eu tinha muita vontade de fazer voluntariado com elefantes, mas achava que era caro demais e complicado demais para organizar do Brasil. Com o guia entendi que era muito mais acessível do que eu imaginava. Fui por 3 semanas para Chiang Mai e foi a melhor experiência da minha vida.”
                </p>
                <div>
                  <p className="font-bold text-lg">Marina S., São Paulo</p>
                  <p className="text-primary text-sm font-semibold">Voluntária em Chiang Mai</p>
                </div>
              </div>

              <div className="p-8 bg-card border border-border rounded-3xl shadow-lg relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                  “O que mais me travava era o medo de chegar lá e não saber o que fazer. O guia me deu segurança em cada etapa — do visto às vacinas, da inscrição ao primeiro dia no projeto. Não tive nenhuma surpresa negativa.”
                </p>
                <div>
                  <p className="font-bold text-lg">Rodrigo M., Belo Horizonte</p>
                  <p className="text-primary text-sm font-semibold">Voluntário em projeto de ensino</p>
                </div>
              </div>

              <div className="p-8 bg-card border border-border rounded-3xl shadow-lg relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10">
                  “Tentei pesquisar sozinho por meses e só encontrava sites em inglês cheios de taxas escondidas. O guia me mostrou como chegar direto nos projetos sem intermediário e economizei muito. Valeu cada centavo.”
                </p>
                <div>
                  <p className="font-bold text-lg">Camila F., Rio de Janeiro</p>
                  <p className="text-primary text-sm font-semibold">Voluntária em projeto ambiental em Koh Tao</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. GARANTIA */}
        <section className="py-24 px-4 bg-primary/5 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-8">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Garantia de 7 dias</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body mb-8">
              Se você comprar o guia, ler o conteúdo e achar que ele não vale o que pagou, basta enviar um e-mail em até 7 dias corridos após a compra e devolvemos 100% do seu dinheiro.
            </p>
            <p className="text-lg font-bold text-foreground font-body">
              Sem burocracia. Sem perguntas.
            </p>
          </div>
        </section>

        {/* 10. BLOCO DE PREÇO */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Invista R$ 67 para não errar numa experiência que pode custar muito mais
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-body">
              Menos que um jantar fora. Pagamento único. Acesso para sempre.
            </p>

            <div className="bg-card border border-primary/20 rounded-[2rem] overflow-hidden shadow-2xl relative text-left">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-10 py-2 font-bold text-sm">OFERTA ESPECIAL</div>
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-border pb-8">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">Guia Completo de Voluntariado na Tailândia</h3>
                    <p className="text-muted-foreground font-body">Pagamento único, sem mensalidade.</p>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-muted-foreground line-through text-lg">R$ 197</p>
                    <p className="text-5xl md:text-6xl font-black text-primary">R$ 67,00</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {[
                    "Guia digital completo em PDF",
                    "Explicação sobre tipos de voluntariado",
                    "Plataformas e projetos para encontrar vagas",
                    "Custos reais e simulações",
                    "Checklist de documentos, vacinas e preparação",
                    "Modelo de carta de motivação em inglês"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CircleCheck className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-body font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <CTAButton large text="Quero o Guia Agora por R$ 67" />
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-semibold uppercase tracking-widest">
                    <span className="flex items-center gap-2">🔒 Pagamento seguro</span>
                    <span className="flex items-center gap-2">📲 Acesso imediato</span>
                    <span className="flex items-center gap-2">💳 Cartão, Pix ou boleto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="py-24 px-4 bg-muted/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-16">Dúvidas frequentes</h2>
            <div className="space-y-2">
              <FAQItem 
                q="Como recebo o guia após a compra?" 
                a="Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link para download do PDF. O acesso é instantâneo, 24 horas por dia." 
              />
              <FAQItem 
                q="Precisa falar inglês para fazer voluntariado na Tailândia?" 
                a="Não é obrigatório ter inglês fluente, mas é recomendado ter pelo menos inglês básico para se comunicar com a equipe local e outros voluntários internacionais. O guia inclui orientações para quem tem inglês limitado e um modelo de carta de motivação em inglês." 
              />
              <FAQItem 
                q="Quanto tempo preciso ter disponível?" 
                a="A maioria dos programas aceita voluntários a partir de 1 semana. O tempo ideal costuma ser de 2 a 4 semanas para ter uma experiência mais completa sem gastar tanto." 
              />
              <FAQItem 
                q="Precisa ter experiência prévia?" 
                a="Na maioria dos programas, não. Muitos aceitam voluntários sem experiência, desde que a pessoa tenha disposição, respeito, responsabilidade e comprometimento." 
              />
              <FAQItem 
                q="Precisa de visto especial?" 
                a="Depende do tempo de permanência e do tipo de programa. O guia explica quando a entrada como turista pode ser suficiente, quando é necessário verificar outro tipo de visto e quais cuidados tomar antes da viagem." 
              />
              <FAQItem 
                q="O guia funciona para qualquer tipo de voluntariado?" 
                a="Sim. O guia cobre os principais tipos: animais e elefantes, crianças e ensino, meio ambiente e comunidades rurais." 
              />
              <FAQItem 
                q="Tem garantia?" 
                a="Sim. Você tem 7 dias de garantia. Se não ficar satisfeito, pode pedir o reembolso dentro do prazo." 
              />
              <FAQItem 
                q="Posso fazer voluntariado em qualquer época do ano?" 
                a="Muitos programas aceitam voluntários durante o ano inteiro, mas a melhor época pode variar conforme a região e o tipo de projeto. O guia explica esses detalhes." 
              />
            </div>
          </div>
        </section>

        {/* 12. CTA FINAL */}
        <section className="py-24 px-4 bg-background text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Você está a um passo de uma experiência que pode mudar sua forma de viajar.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-body max-w-2xl mx-auto">
              Pare de pesquisar em círculos. Tenha tudo que precisa em português, num único lugar, por R$ 67.
            </p>
            <CTAButton large text="Quero o Guia Agora" />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-semibold uppercase tracking-widest">
              <span className="flex items-center gap-2">🔒 Compra segura</span>
              <span className="flex items-center gap-2">📲 Acesso imediato</span>
              <span className="flex items-center gap-2">💳 Cartão, Pix ou boleto</span>
              <span className="flex items-center gap-2">✅ Garantia de 7 dias</span>
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
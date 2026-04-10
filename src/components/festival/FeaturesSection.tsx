import { Calendar, Map, Eye, Shield, DollarSign, Clock, Heart, Star } from "lucide-react";

const features = [
  { icon: Calendar, title: "Datas Oficiais", desc: "Informações atualizadas das fontes oficiais do Turismo da Tailândia" },
  { icon: Map, title: "Como Chegar", desc: "Guia completo de Bangkok a Chiang Mai: voos, trens, ônibus e transfers particulares" },
  { icon: Eye, title: "Onde Assistir", desc: "Eventos pagos exclusivos e pontos públicos gratuitos — todas as opções detalhadas" },
  { icon: Shield, title: "Segurança & Regras", desc: "Orientações oficiais para uma experiência segura e respeitosa às tradições locais" },
];

const benefits = [
  { icon: DollarSign, title: "Economia Real de Dinheiro", desc: "Evite gastos desnecessários e otimize seu orçamento. Economize mais de R$ 800 com dicas precisas sobre câmbio, alimentação e transporte." },
  { icon: Clock, title: "Economia de Tempo Precioso", desc: "Diga adeus às horas de pesquisa exaustiva. Tudo pronto e testado, liberando seu tempo para aproveitar cada segundo." },
  { icon: Heart, title: "Zero Dor de Cabeça", desc: "Viaje com tranquilidade, sem estresse ou incertezas. Seu 'seguro viagem' contra frustrações." },
  { icon: Star, title: "Experiência Inesquecível", desc: "Memórias que durarão para sempre, sem riscos ou frustrações, apenas pura magia." },
];

const FeaturesSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Por Que Este Guia é{" "}
        <span className="text-gradient-gold">Indispensável?</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 font-body">
        Seu passaporte para uma experiência autêntica e sem preocupações no Festival das Lanternas.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {features.map((f) => (
          <div key={f.title} className="bg-gradient-card border-glow rounded-xl p-6 hover:glow-orange transition-all duration-300 group">
            <f.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Por Que Nosso Guia é a Sua{" "}
        <span className="text-gradient-gold">Solução Definitiva</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 font-body">
        Resultado de anos de experiência e imersão profunda no Festival das Lanternas.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-5 bg-card border-glow rounded-xl p-6 hover:glow-orange transition-all duration-300 group">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
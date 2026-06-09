import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle2, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

interface InternalLinksSectionProps {
  currentPath: string;
}

export const InternalLinksSection = ({ currentPath }: InternalLinksSectionProps) => {
  const links = [
    { label: "Festival das Lanternas", path: "/festivaldaslanternas", icon: "🏮" },
    { label: "Santuários de Elefantes", path: "/santuariosdeelefantes", icon: "🐘" },
    { label: "Muay Thai na Tailândia", path: "/muaythai", icon: "🥊" },
    { label: "Trilhas e Trekkings", path: "/guiatrilhasthai", icon: "🥾" },
    { label: "Guia de Festas", path: "/festas", icon: "🔥" },
    { label: "Voluntariado", path: "/voluntariado-tailandia", icon: "🌿" },
  ];

  const filteredLinks = links.filter(link => link.path !== currentPath);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Continue planejando sua viagem</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Não pare por aqui! Temos guias específicos para cada experiência que você deseja viver na Tailândia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <span className="text-4xl mb-4 block">{link.icon}</span>
              <h4 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{link.label}</h4>
              <span className="text-primary text-sm font-semibold flex items-center gap-2">
                Ver guia <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
          <Link 
            to="/"
            className="bg-primary/10 border border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col justify-center"
          >
            <h4 className="font-display font-bold text-lg mb-2">Página Inicial</h4>
            <p className="text-sm text-muted-foreground font-body mb-4">Voltar para a seleção de todos os guias.</p>
            <span className="text-primary text-sm font-semibold flex items-center gap-2">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export const ConversionBlock = ({ 
  title = "Quer o roteiro completo?", 
  subtitle = "No guia você recebe o passo a passo completo para não cometer erros.",
  ctaText = "Comprar Guia Tailândia",
  ctaLink = "/#guias"
}) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-card border-glow rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShoppingCart className="w-24 h-24" />
        </div>
        
        <div className="relative z-10 space-y-6">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold">{title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto py-6">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-body">Evite erros de planejamento</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-body">Veja onde se hospedar</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-body">Como se locomover com segurança</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-body">Quanto gastar em cada lugar</span>
            </div>
          </div>
          
          <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl font-black shadow-2xl hover:scale-105 transition-transform">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

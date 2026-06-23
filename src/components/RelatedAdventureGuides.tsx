import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const guides = [
  { icon: "🥾", title: "Guia Trilhas Tailândia", subtitle: "30+ Trekkings, Roteiros e Custos Reais", path: "/guiatrilhasthai" },
  { icon: "🤿", title: "Mergulho na Tailândia", subtitle: "Do Open Water ao Instrutor PADI", path: "/mergulho-tailandia" },
  { icon: "🥊", title: "Muay Thai na Tailândia", subtitle: "Treine no lugar certo, pelo preço certo", path: "/muaythai" },
  { icon: "🏍️", title: "Aluguel de Motos", subtitle: "Sem Golpes, Sem Caução Roubada", path: "/aluguel-de-motos-tailandia" },
  { icon: "🐘", title: "Santuários de Elefantes", subtitle: "Experiências éticas na Tailândia", path: "/santuariosdeelefantes" },
  { icon: "🛏️", title: "Top Hostels Tailândia", subtitle: "Os 100 Melhores Avaliados", path: "/top-hostels-tailandia" },
  { icon: "🌿", title: "Voluntariado na Tailândia", subtitle: "Viva a Tailândia por dentro", path: "/voluntariado-tailandia" },
  { icon: "🧘", title: "Retiros na Tailândia", subtitle: "Ioga, Meditação, Detox e Bem-Estar", path: "/retiros-tailandia" },
];

interface Props {
  currentPath?: string;
  title?: string;
  subtitle?: string;
}

export const RelatedAdventureGuides = ({
  currentPath,
  title = "Outros guias para quem busca aventura",
  subtitle = "Combine com o Aventureiros e monte uma viagem completa — trilhas, mergulho, muay thai, moto, hostels e mais. Cada guia é independente, pago à parte.",
}: Props) => {
  const list = guides.filter((g) => g.path !== currentPath);
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="guide-section-label mb-3">Catálogo de aventura</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((g) => (
            <Link
              key={g.path}
              to={g.path}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              <span className="text-4xl mb-4 block">{g.icon}</span>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">{g.title}</h3>
              <p className="text-sm text-muted-foreground font-body mb-4">{g.subtitle}</p>
              <span className="text-primary text-sm font-semibold flex items-center gap-2">
                Ver guia <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
          <Link
            to="/"
            className="bg-primary/10 border border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-lg mb-2">Catálogo completo</h3>
            <p className="text-sm text-muted-foreground font-body mb-4">Ver todos os guias da Tailândia.</p>
            <span className="text-primary text-sm font-semibold flex items-center gap-2">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedAdventureGuides;

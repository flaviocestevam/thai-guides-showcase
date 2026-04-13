import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-lanterns.jpg";

interface GuideCard {
  title: string;
  subtitle: string;
  description: string;
  path: string;
  emoji: string;
  badge?: string;
  image?: string;
}

const guides: GuideCard[] = [
  {
    title: "Festival das Lanternas",
    subtitle: "Yi Peng & Loy Krathong — Chiang Mai",
    description:
      "Guia completo para viver a experiência mais mágica da Tailândia: onde assistir, quanto custa, ingressos oficiais e roteiro dia a dia.",
    path: "/festivaldaslanternas",
    emoji: "🏮",
    badge: "MAIS VENDIDO",
    image: heroImg,
  },
  {
    title: "Santuários de Elefantes",
    subtitle: "Experiências éticas na Tailândia",
    description:
      "Descubra os melhores santuários éticos, como evitar armadilhas turísticas e viver momentos inesquecíveis com os elefantes tailandeses.",
    path: "/santuariosdeelefantes",
    emoji: "🐘",
    badge: "NOVO",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 bg-primary/15 border-glow text-primary font-body font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
            <MapPin className="w-4 h-4" />
            Guias de Viagem — Tailândia
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight">
            Explore a Tailândia{" "}
            <span className="text-gradient-gold">como um local</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-body">
            Guias completos, testados por viajantes reais, para você viver experiências autênticas e inesquecíveis sem desperdiçar tempo nem dinheiro.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="px-4 pb-24 md:pb-36">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            Escolha o seu <span className="text-gradient-gold">guia</span>
          </h2>
          <p className="text-muted-foreground text-center font-body mb-12 max-w-xl mx-auto">
            Cada guia foi criado para resolver problemas reais que viajantes enfrentam. Clique para saber mais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="group bg-card border-glow rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:glow-gold"
              >
                {/* Card Image / Emoji Fallback */}
                <div className="relative h-48 md:h-56 bg-gradient-card flex items-center justify-center overflow-hidden">
                  {guide.image ? (
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  ) : (
                    <span className="text-7xl md:text-8xl opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                      {guide.emoji}
                    </span>
                  )}

                  {guide.badge && (
                    <span className="absolute top-4 right-4 bg-primary text-primary-foreground font-body font-bold text-xs px-3 py-1.5 rounded-full">
                      {guide.badge}
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{guide.emoji}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body">
                        {guide.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {guide.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-body font-semibold text-sm pt-2 group-hover:gap-3 transition-all">
                    Ver guia completo
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon placeholder */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground font-body text-sm">
              🌏 Mais guias em breve — Bangkok, ilhas do sul, norte da Tailândia e muito mais.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-xs font-body border-t border-border">
        <p>© Thailand Guides. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;

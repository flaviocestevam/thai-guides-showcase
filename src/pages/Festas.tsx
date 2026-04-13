import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/festas/hero-thailand.jpg";
import { cities, survivalTips } from "@/data/festas";
import CityCard from "@/components/festas/CityCard";
import TipCard from "@/components/festas/TipCard";

const Festas = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Thailand beach party at night"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-primary mb-4">
            Guia Definitivo 2025
          </p>
          <h1 className="text-5xl md:text-8xl font-display font-black mb-6 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-violet-500">
              Festas na Tailândia
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Tudo que você precisa saber sobre as melhores festas, baladas e experiências noturnas em 7 cidades incríveis
          </p>
          <a
            href="#cities"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            Explorar Cidades <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Cities */}
      <section id="cities" className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-3">
            7 Cidades, Infinitas Noites
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            Clique em uma cidade para descobrir os melhores bares, clubes e dicas exclusivas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* Survival Tips */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-3">
            Dicas de Sobrevivência
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
            O que todo turista precisa saber antes de cair na noite tailandesa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {survivalTips.map((tip) => (
              <TipCard key={tip.title} tip={tip} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-display font-bold mb-2">
            Guia de Festas na Tailândia
          </h3>
          <p className="text-sm text-muted-foreground">
            Feito com 🔥 para quem quer viver a melhor vida noturna do Sudeste Asiático
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Festas;

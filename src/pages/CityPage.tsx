import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, DollarSign } from "lucide-react";
import { cityDetails } from "@/data/cityDetails";
import { SEO } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";

const CityPage = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cityId ? cityDetails[cityId] : undefined;

  if (!city) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Cidade não encontrada</h1>
          <Link to="/festas" className="text-primary hover:underline">Voltar ao guia</Link>
        </div>
      </div>
    );
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://guiastailandia.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guia de Festas",
        "item": "https://guiastailandia.com.br/festas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": `https://guiastailandia.com.br/festas/${cityId}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`Vida Noturna em ${city.name} — Guia de Festas`}
        description={`Descubra a melhor vida noturna em ${city.name}: os melhores bares, clubes, preços e dicas de quem conhece a Tailândia.`}
        canonicalPath={`/festas/${cityId}`}
      />
      <StructuredData data={breadcrumbSchema} />
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <img
          src={city.image}
          alt={`Vida noturna e baladas em ${city.name}, Tailândia`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 w-full px-4 pb-10 md:pb-16">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/festas"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar ao guia
            </Link>
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: city.fireLevel }).map((_, i) => (
                <span key={i} className="text-lg">🔥</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-black mb-2">{city.name}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">{city.tagline}</p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="px-4 -mt-6 relative z-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <MapPin className="w-5 h-5 text-primary" />, label: "Melhor para", value: city.bestFor },
            { icon: <Calendar className="w-5 h-5 text-primary" />, label: "Melhor noite", value: city.bestNight },
            { icon: <DollarSign className="w-5 h-5 text-primary" />, label: "Cerveja média", value: city.avgBeerPrice },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</span>
              </div>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">{city.description}</p>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            Onde Ir 🍹
          </h2>
          <div className="space-y-4">
            {city.venues.map((venue) => (
              <div
                key={venue.name}
                className="bg-card border border-border rounded-xl p-5 transition-all hover:border-primary/30"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-display font-bold text-foreground">{venue.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-foreground">
                      {venue.type}
                    </span>
                    <span className="text-xs font-bold text-primary">{venue.priceRange}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{venue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            Dicas Locais 💡
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {city.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <span className="text-primary font-bold text-lg mt-0.5">{i + 1}</span>
                <p className="text-sm text-muted-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="py-16 px-4 text-center">
        <Link
          to="/festas"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:brightness-110"
        >
          <ArrowLeft className="w-5 h-5" /> Ver Todas as Cidades
        </Link>
      </section>
    </div>
  );
};

export default CityPage;

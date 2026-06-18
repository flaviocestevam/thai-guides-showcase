import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BackToHome, BackToHomeFooter } from "@/components/NavigationButtons";
import { ilhasMeta } from "@/data/sales/ilhas";

const tierLabel: Record<number, string> = {
  1: "🔥 Mais procuradas",
  2: "⭐ Alto volume",
  3: "💎 Niche / premium",
  4: "⛴️ Day-trip / mergulho",
};

const Ilhas = () => {
  const byTier = [1, 2, 3, 4].map((t) => ({
    tier: t,
    ilhas: ilhasMeta.filter((i) => i.tier === t),
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Guias das Ilhas da Tailândia — Phuket, Samui, Phi Phi e mais"
        description="14 guias completos das melhores ilhas da Tailândia. Phuket, Koh Samui, Phi Phi, Phangan, Tao, Lanta, Lipe e mais. Hospedagem, ferries e roteiros testados."
        canonicalPath="/ilhas"
      />
      <Header />

      <main className="pt-28 md:pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
          <BackToHome />

          <div className="text-center mb-16 mt-8">
            <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-semibold text-sm px-5 py-2 rounded-full tracking-wider uppercase">
              <MapPin className="w-4 h-4" />
              Guias das Ilhas
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black mt-6 tracking-tight text-balance">
              As 14 ilhas que importam{" "}
              <span className="text-gradient-gold italic">na Tailândia</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              De Phuket a Koh Kood, da Full Moon de Phangan ao silêncio de Yao Noi. Cada
              ilha decifrada por quem dormiu, errou e voltou.
            </p>
          </div>

          {byTier.map(({ tier, ilhas: list }) => (
            <section key={tier} className="mb-16">
              <h2 className="text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-6">
                {tierLabel[tier]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((ilha) => (
                  <Link
                    key={ilha.slug}
                    to={`/${ilha.slug}`}
                    className="group relative glass-soft rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-premium"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-4xl">{ilha.emoji}</span>
                      <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        {ilha.cardBadge}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-1 tracking-tight">
                      {ilha.nome}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{ilha.regiao}</p>
                    <p className="text-sm font-medium text-foreground/80 mb-3">
                      {ilha.cardSubtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {ilha.cardDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-foreground/5">
                      <div>
                        <span className="text-xs text-muted-foreground line-through">
                          R$ 197
                        </span>{" "}
                        <span className="text-lg font-display font-bold text-primary">
                          R$ 67
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                        Ver guia <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <BackToHomeFooter />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Ilhas;

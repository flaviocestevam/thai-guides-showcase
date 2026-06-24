import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, TrendingUp, Users, Plus } from "lucide-react";
import { getRelatedSalesPages, salesPages, ilhaSalesPages } from "@/data/salesCatalog";

interface RelatedSalesGridProps {
  /** Caminho da página atual — será excluída da grade. */
  currentPath?: string;
  /** Caminhos curados manualmente. Se omitido, usa tags + popularidade. */
  relatedPaths?: string[];
  /** Tamanho do lote inicial e de cada "ver mais" (default 8). */
  batchSize?: number;
  title?: string;
  subtitle?: string;
  /** Variante visual. "muted" usa fundo levemente destacado. */
  variant?: "default" | "muted";
}

/**
 * Grade de páginas de vendas relacionadas — mesmo layout do catálogo da Index,
 * com thumbnail metade do tamanho. As primeiras 8 são relacionadas por tag/curadoria;
 * o botão "Ver mais experiências" revela mais 8 em qualquer ordem.
 */
export const RelatedSalesGrid = ({
  currentPath,
  relatedPaths,
  batchSize = 8,
  title = "Outros guias que combinam com o seu",
  subtitle = "Selecionados por afinidade de experiência. Cada guia é independente — leve só o que faz sentido pra sua viagem.",
  variant = "muted",
}: RelatedSalesGridProps) => {
  const allPages = useMemo(() => {
    // 1) Primeiras N relacionadas
    const related = getRelatedSalesPages(currentPath, batchSize, relatedPaths);
    const taken = new Set(related.map((p) => p.path));
    if (currentPath) taken.add(currentPath);
    // 2) Restante do catálogo principal em qualquer ordem
    const rest = salesPages.filter((p) => !taken.has(p.path));
    rest.forEach((p) => taken.add(p.path));
    // 3) Depois, todas as ilhas individuais (para a pessoa poder ver tudo)
    const ilhas = ilhaSalesPages.filter((p) => !taken.has(p.path));
    return [...related, ...rest, ...ilhas];
  }, [currentPath, relatedPaths, batchSize]);

  const [visible, setVisible] = useState(batchSize);
  const pages = allPages.slice(0, visible);
  const hasMore = visible < allPages.length;

  if (!pages.length) return null;

  return (
    <section
      className={`py-16 md:py-20 px-4 ${variant === "muted" ? "bg-primary/5 border-y border-primary/10" : ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary font-semibold text-[11px] px-4 py-1.5 rounded-full tracking-[0.2em] uppercase mb-4">
            Guias relacionados
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-gold">{title.split(" ").slice(-2).join(" ")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm max-w-xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {pages.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-premium"
            >
              {/* Thumb metade do tamanho do catálogo principal */}
              <div className="relative h-24 md:h-28 bg-gradient-card overflow-hidden">
                {page.image ? (
                  <img
                    src={page.image}
                    alt={`Imagem de ${page.title}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-opacity"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-60">
                    {page.emoji}
                  </div>
                )}
                {page.badge && (
                  <span className="absolute top-2 right-2 bg-primary text-primary-foreground font-body font-bold text-[10px] px-2 py-0.5 rounded-full">
                    {page.badge}
                  </span>
                )}
              </div>

              <div className="p-4 space-y-2 flex-grow flex flex-col">
                <div className="flex items-start gap-2">
                  <span className="text-lg leading-none" aria-hidden>{page.emoji}</span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-display font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {page.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground font-body line-clamp-1">{page.subtitle}</p>
                  </div>
                </div>

                <div className="bg-destructive/10 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-destructive flex-shrink-0" />
                  <p className="text-[10px] font-body text-destructive font-semibold line-clamp-1">
                    {page.urgency}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 bg-primary/10 rounded-md px-2 py-1">
                  <TrendingUp className="w-3 h-3 text-primary flex-shrink-0" />
                  <p className="text-[10px] font-body text-primary font-semibold line-clamp-1">
                    {page.highlight}
                  </p>
                </div>

                <div className="mt-auto pt-2 flex items-end justify-between gap-2 border-t border-border/60">
                  <div className="space-y-0.5">
                    <p className="text-[10px] text-muted-foreground font-body flex items-center gap-1">
                      <Users className="w-2.5 h-2.5" /> {page.socialProof}
                    </p>
                    <p className="font-body text-[11px]">
                      <span className="line-through text-muted-foreground mr-1">{page.originalPrice}</span>
                      <span className="text-sm font-display font-black text-gradient-gold">{page.price}</span>
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-body font-semibold text-[11px] group-hover:gap-2 transition-all whitespace-nowrap">
                    Ver guia <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + batchSize)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-body font-semibold text-sm px-6 py-3 rounded-full shadow-premium"
            >
              <Plus className="w-4 h-4" />
              Ver mais experiências
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedSalesGrid;

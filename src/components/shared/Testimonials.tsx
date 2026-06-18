import type { ReactNode } from "react";

/**
 * Componente compartilhado de depoimentos.
 * Substitui as variantes duplicadas em festival/, lantern/ e muaythai/.
 */

export type Testimonial = {
  name: string;
  city: string;
  quote: string;
  img?: string;
};

type Props = {
  title: ReactNode; // pode incluir <span> com gradiente, etc.
  subtitle?: string;
  items: Testimonial[];
  className?: string;
};

const Testimonials = ({ title, subtitle, items, className = "" }: Props) => (
  <section className={`py-20 md:py-28 px-4 ${className}`}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-center text-muted-foreground mb-12">{subtitle}</p>
      )}

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {items.map((t) => (
          <div
            key={t.name}
            className="bg-gradient-card border-glow rounded-2xl p-7 flex flex-col items-center text-center hover:glow-orange transition-all duration-300"
          >
            {t.img && (
              <img
                src={t.img}
                alt={`Foto de ${t.name}`}
                className="w-20 h-20 rounded-full object-cover border-2 border-primary mb-5"
                loading="lazy"
                decoding="async"
                width={512}
                height={512}
              />
            )}
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 italic">
              "{t.quote}"
            </p>
            <p className="font-display font-bold text-foreground">{t.name}</p>
            <p className="text-primary text-sm font-body">{t.city}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

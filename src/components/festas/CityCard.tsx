import { Link } from "react-router-dom";
import { type City } from "@/data/festas";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  return (
    <Link to={`/festas/${city.id}`} className="group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] block">
      <div className="relative h-52 overflow-hidden">
        <img
          src={city.image}
          alt={`Nightlife in ${city.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-sm ${i < city.fireLevel ? 'opacity-100' : 'opacity-20'}`}>
              🔥
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-display font-bold text-foreground mb-1">
          {city.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{city.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {city.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CityCard;

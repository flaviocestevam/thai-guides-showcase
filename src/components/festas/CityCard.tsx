import { type City } from "@/data/festas";
import { cityDetails } from "@/data/cityDetails";
import { Lock, MapPin } from "lucide-react";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  const details = cityDetails[city.id];
  const venueCount = details?.venues?.length ?? 0;

  return (
    <a
      href="#oferta"
      className="group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-xl block"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={city.image}
          alt={`Vida noturna em ${city.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 text-white text-xs font-bold">
          <Lock className="w-3 h-3" /> No guia
        </div>

        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-xs ${i < city.fireLevel ? "opacity-100" : "opacity-20"}`}>
                🔥
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-display font-bold text-white leading-none">{city.name}</h3>
          <p className="text-xs text-white/80 mt-1 italic">"{city.tagline}"</p>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {city.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        {venueCount > 0 && (
          <p className="text-sm text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <strong className="text-primary">{venueCount}+ lugares</strong> mapeados dentro do guia
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          Endereços, melhores noites, preço justo da cerveja e dicas locais — tudo destravado quando você adquire o guia.
        </p>
      </div>
    </a>
  );
};

export default CityCard;

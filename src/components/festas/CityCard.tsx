import { useState } from "react";
import { type City } from "@/data/festas";
import { cityDetails } from "@/data/cityDetails";
import { ChevronDown, MapPin, Calendar, DollarSign, X } from "lucide-react";

interface CityCardProps {
  city: City;
}

const CityCard = ({ city }: CityCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const details = cityDetails[city.id];

  return (
    <div className={`group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 ${isOpen ? 'ring-2 ring-primary/50' : 'hover:scale-[1.01] hover:border-primary/40 hover:shadow-xl'}`}>
      <div 
        className="relative h-52 overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={city.image}
          alt={`Nightlife in ${city.name}`}
          className={`w-full h-full object-cover transition-transform duration-700 ${isOpen ? 'scale-105' : 'group-hover:scale-110'}`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-5 w-full">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xs ${i < city.fireLevel ? 'opacity-100' : 'opacity-20'}`}>
                    🔥
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-display font-bold text-white leading-none">
                {city.name}
              </h3>
            </div>
            <div className={`bg-white/20 backdrop-blur-md rounded-full p-2 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 space-y-6 bg-card">
          <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-3">
            "{city.tagline}"
          </p>

          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground block leading-none mb-1">Melhor para</span>
                <span className="text-sm font-medium leading-none">{details?.bestFor}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground block leading-none mb-1">Melhor Noite</span>
                <span className="text-sm font-medium leading-none">{details?.bestNight}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border/50">
              <DollarSign className="w-4 h-4 text-primary shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-bold text-muted-foreground block leading-none mb-1">Cerveja Média</span>
                <span className="text-sm font-medium leading-none">{details?.avgBeerPrice}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg flex items-center gap-2">
              Principais Lugares 🍹
            </h4>
            <div className="space-y-3">
              {details?.venues.map((venue, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-border hover:border-primary/30 transition-colors bg-muted/20">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-sm">{venue.name}</span>
                    <span className="text-[10px] font-black text-primary px-2 py-0.5 rounded-full bg-primary/10">{venue.priceRange}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{venue.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <h4 className="font-display font-bold text-sm mb-3">Dicas Locais 💡</h4>
            <ul className="space-y-2">
              {details?.tips.slice(0, 3).map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-primary font-bold">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-t border-border mt-4"
          >
            Fechar Detalhes
          </button>
        </div>
      </div>
      
      {!isOpen && (
        <div className="px-5 py-4 border-t border-border/50 flex flex-wrap gap-1.5">
          {city.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
          {city.tags.length > 2 && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
              +{city.tags.length - 2}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CityCard;
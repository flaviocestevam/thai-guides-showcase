import { MapPin, Clock, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, Compass, Mountain, Signal, Utensils, Bed, Users, Lightbulb, Backpack } from "lucide-react";
import type { Trail } from "@/data/trilhas";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const difficultyColors: Record<Trail["difficulty"], string> = {
  Fácil: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  Moderada: "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30",
  Difícil: "bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30",
};

export const TrailCard = ({ trail }: { trail: Trail }) => {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={trail.image}
          alt={trail.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="backdrop-blur-md bg-background/70 font-serif">
            {trail.location}
          </Badge>
          {trail.badge && (
            <Badge className="bg-primary text-primary-foreground font-semibold">{trail.badge}</Badge>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-foreground">{trail.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{trail.description}</p>
        </div>

        {/* Stats principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="rounded-lg border border-border/60 p-3 bg-background/50">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              Dificuldade
            </div>
            <Badge variant="outline" className={`${difficultyColors[trail.difficulty]} font-semibold`}>
              {trail.difficulty}
            </Badge>
          </div>
          <div className="rounded-lg border border-border/60 p-3 bg-background/50">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <MapPin className="w-3.5 h-3.5" />
              Distância
            </div>
            <p className="text-sm font-semibold">{trail.distance}</p>
          </div>
          <div className="rounded-lg border border-border/60 p-3 bg-background/50">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <Clock className="w-3.5 h-3.5" />
              Duração
            </div>
            <p className="text-sm font-semibold">{trail.duration}</p>
          </div>
          <div className="rounded-lg border border-border/60 p-3 bg-background/50">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
              <DollarSign className="w-3.5 h-3.5" />
              Custo
            </div>
            <p className="text-sm font-semibold">{trail.cost}</p>
          </div>
        </div>

        {/* Stats técnicos extras */}
        {(trail.elevation || trail.trailType || trail.altitude) && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {trail.elevation && (
              <div className="rounded-lg border border-border/60 p-3 bg-background/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Mountain className="w-3.5 h-3.5" />
                  Elevação
                </div>
                <p className="text-sm font-semibold">{trail.elevation}</p>
              </div>
            )}
            {trail.altitude && (
              <div className="rounded-lg border border-border/60 p-3 bg-background/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Altitude
                </div>
                <p className="text-sm font-semibold">{trail.altitude}</p>
              </div>
            )}
            {trail.trailType && (
              <div className="rounded-lg border border-border/60 p-3 bg-background/50">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  Tipo
                </div>
                <p className="text-sm font-semibold">{trail.trailType}</p>
              </div>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg bg-muted/40 p-4">
            <p className="font-semibold mb-1 text-foreground">📅 Melhor Época</p>
            <p className="text-muted-foreground">{trail.bestSeason}</p>
          </div>
          <div className="rounded-lg bg-muted/40 p-4">
            <p className="font-semibold mb-1 text-foreground">🚗 Como Chegar</p>
            <p className="text-muted-foreground">{trail.howToGet}</p>
          </div>
        </div>

        {/* Info prática extra (sinal, banheiros, comida, hospedagem) */}
        {(trail.signal || trail.facilities || trail.food || trail.nearbyStay) && (
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {trail.signal && (
              <div className="rounded-lg border border-border/40 bg-background/30 p-3 flex gap-3">
                <Signal className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Sinal de celular</p>
                  <p className="text-muted-foreground">{trail.signal}</p>
                </div>
              </div>
            )}
            {trail.facilities && (
              <div className="rounded-lg border border-border/40 bg-background/30 p-3 flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Facilidades</p>
                  <p className="text-muted-foreground">{trail.facilities}</p>
                </div>
              </div>
            )}
            {trail.food && (
              <div className="rounded-lg border border-border/40 bg-background/30 p-3 flex gap-3">
                <Utensils className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Comida</p>
                  <p className="text-muted-foreground">{trail.food}</p>
                </div>
              </div>
            )}
            {trail.nearbyStay && (
              <div className="rounded-lg border border-border/40 bg-background/30 p-3 flex gap-3">
                <Bed className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Onde ficar perto</p>
                  <p className="text-muted-foreground">{trail.nearbyStay}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
            <p className="flex items-center gap-2 font-semibold mb-3 text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Destaques
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {trail.highlights.map((h, i) => (
                <li key={i} className="flex gap-2"><span className="text-emerald-600">•</span>{h}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
            <p className="flex items-center gap-2 font-semibold mb-3 text-amber-700 dark:text-amber-400">
              <AlertTriangle className="w-4 h-4" /> Atenção
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {trail.warnings.map((w, i) => (
                <li key={i} className="flex gap-2"><span className="text-amber-600">•</span>{w}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ideal para / Não ideal para */}
        {(trail.idealFor || trail.notIdealFor) && (
          <div className="grid md:grid-cols-2 gap-4">
            {trail.idealFor && (
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                <p className="flex items-center gap-2 font-semibold mb-3 text-blue-700 dark:text-blue-400">
                  <Users className="w-4 h-4" /> Ideal para
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {trail.idealFor.map((p, i) => (
                    <li key={i} className="flex gap-2"><span className="text-blue-600">✓</span>{p}</li>
                  ))}
                </ul>
              </div>
            )}
            {trail.notIdealFor && (
              <div className="rounded-lg border border-rose-500/30 bg-rose-500/5 p-4">
                <p className="flex items-center gap-2 font-semibold mb-3 text-rose-700 dark:text-rose-400">
                  <AlertTriangle className="w-4 h-4" /> Não recomendado para
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {trail.notIdealFor.map((p, i) => (
                    <li key={i} className="flex gap-2"><span className="text-rose-600">✗</span>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* O que levar */}
        {trail.whatToBring && (
          <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
            <p className="flex items-center gap-2 font-semibold mb-3 text-foreground">
              <Backpack className="w-4 h-4 text-primary" /> O que levar
            </p>
            <div className="flex flex-wrap gap-2">
              {trail.whatToBring.map((item, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Pro tips */}
        {trail.proTips && (
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
            <p className="flex items-center gap-2 font-semibold mb-3 text-primary">
              <Lightbulb className="w-4 h-4" /> Dicas de quem já fez
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {trail.proTips.map((tip, i) => (
                <li key={i} className="flex gap-2"><span className="text-primary">→</span>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {trail.guide ? (
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-2">
            <p className="flex items-center gap-2 font-semibold text-primary">
              <Compass className="w-4 h-4" /> Guia Disponível
            </p>
            <p className="text-sm text-muted-foreground">{trail.guide.description}</p>
            <p className="text-sm"><strong className="text-foreground">Preço:</strong> {trail.guide.price}</p>
            <p className="text-sm"><strong className="text-foreground">Onde:</strong> {trail.guide.where}</p>
            {trail.guide.bookUrl && (
              <a
                href={trail.guide.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Reservar guia →
              </a>
            )}
          </div>
        ) : (
          <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
            <p className="font-semibold text-sm">🚶 Autoguiada (sem guia necessário)</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {trail.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-3 border-t border-border/50 pt-5">
          <p className="text-sm font-semibold text-muted-foreground">Reviews</p>
          {trail.reviews.map((review, i) => (
            <blockquote key={i} className="border-l-2 border-primary/40 pl-4 italic text-sm text-muted-foreground">
              "{review}"
            </blockquote>
          ))}
        </div>

        <a
          href={trail.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <MapPin className="w-4 h-4" /> Ver no Google Maps
        </a>
      </div>
    </Card>
  );
};

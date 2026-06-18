import { type SurvivalTip } from "@/data/festas";
import { Lock } from "lucide-react";

interface TipCardProps {
  tip: SurvivalTip;
}

const TipCard = ({ tip }: TipCardProps) => (
  <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 relative">
    <div className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
      <Lock className="w-3 h-3" /> No guia
    </div>
    <div className="text-4xl mb-4">{tip.icon}</div>
    <h3 className="text-xl font-display font-bold text-foreground mb-2">{tip.title}</h3>
    <p className="text-xs text-muted-foreground mb-4">
      Capítulo completo dentro do guia, com {tip.tips.length} regras práticas testadas em campo.
    </p>
    <ul className="space-y-2">
      {tip.tips.slice(0, 2).map((t, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="text-primary mt-0.5">•</span>
          <span className="line-clamp-1">{t.split("—")[0].split("(")[0].trim()}…</span>
        </li>
      ))}
      <li className="flex items-start gap-2 text-sm text-primary font-semibold">
        <span className="mt-0.5">🔒</span>
        +{Math.max(0, tip.tips.length - 2)} regras adicionais no guia completo
      </li>
    </ul>
  </div>
);

export default TipCard;

import { type SurvivalTip } from "@/data/festas";

interface TipCardProps {
  tip: SurvivalTip;
}

const TipCard = ({ tip }: TipCardProps) => (
  <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30">
    <div className="text-4xl mb-4">{tip.icon}</div>
    <h3 className="text-xl font-display font-bold text-foreground mb-4">{tip.title}</h3>
    <ul className="space-y-3">
      {tip.tips.map((t, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="text-primary mt-0.5">•</span>
          {t}
        </li>
      ))}
    </ul>
  </div>
);

export default TipCard;

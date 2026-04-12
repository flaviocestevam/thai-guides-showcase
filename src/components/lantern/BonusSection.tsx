import { Gift, Languages, Camera, Utensils, ShieldCheck, Map } from "lucide-react";

const bonuses = [
  { icon: Map, title: "Interactive Chiang Mai Map", desc: "All key festival spots marked: temples, bridges, markets, accommodations, and lantern release locations.", value: "$39" },
  { icon: Camera, title: "Night Photography Guide", desc: "Exact camera settings (aperture f/1.8-f/4, ISO 800-3200, shutter speed) to capture the lantern magic like a pro.", value: "$39" },
  { icon: Languages, title: "Essential Thai Mini Guide", desc: "Key phrases like Sawadee kráp, Tâo rài? and Aròy! — all with simplified pronunciation.", value: "$29" },
  { icon: Utensils, title: "Complete Travel Checklist", desc: "Detailed list of everything you need to pack: temple-appropriate clothing, eSIM, power bank, adapter, medications, and more.", value: "$19" },
  { icon: ShieldCheck, title: "Safety & Anti-Scam Guide", desc: "How to avoid fake tuk-tuks, fraudulent monks, jewelry scams, and more. Protect yourself like a seasoned traveler.", value: "$29" },
];

const BonusSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/20 text-primary font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
          🎁 EXCLUSIVE BONUSES
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          You Also Get{" "}
          <span className="text-gradient-gold">All These Bonuses</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
          Extra content that alone is already worth more than the guide investment.
        </p>
      </div>

      <div className="space-y-5 mb-10">
        {bonuses.map((b) => (
          <div key={b.title} className="flex items-center gap-5 bg-card border-glow rounded-xl p-6 hover:glow-orange transition-all duration-300 group">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display font-bold text-lg">{b.title}</h3>
                <span className="text-xs bg-primary/20 text-primary font-body font-bold px-2 py-0.5 rounded-full">
                  Value: {b.value}
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.desc}</p>
            </div>
            <Gift className="w-6 h-6 text-primary/40 flex-shrink-0 hidden md:block" />
          </div>
        ))}
      </div>

      <div className="bg-card border-glow rounded-2xl p-8 text-center glow-gold">
        <p className="text-muted-foreground font-body text-sm mb-2">Total bonus value:</p>
        <p className="text-3xl font-display font-black text-foreground line-through opacity-60 mb-1">$155</p>
        <p className="text-xl font-display font-bold text-primary">
          FREE — included with your guide! 🎉
        </p>
      </div>
    </div>
  </section>
);

export default BonusSection;

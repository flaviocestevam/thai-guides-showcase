import { Check, X } from "lucide-react";

const withGuide = [
  "Knows exactly where to watch the coordinated lantern release",
  "Books accommodation in the ideal area months in advance",
  "Purchases official tickets through the correct and secure channels",
  "Saves over $150 with currency exchange, transport, and food tips",
  "Understands cultural etiquette and participates with respect",
  "Has a tested, optimized day-by-day itinerary",
  "Knows how to use Grab, Songthaew, and local transport like a pro",
  "Has a backup plan for rain and unexpected events",
  "Photographs like a professional with ideal camera settings",
  "Lives a deep, transformative spiritual experience",
];

const withoutGuide = [
  "Gets lost without knowing the best locations and times",
  "Arrives to find everything already booked and overpriced",
  "Risks buying fake tickets from dubious vendors",
  "Spends double for not knowing local tricks",
  "Commits cultural faux pas without realizing",
  "Improvises and wastes precious time trying to organize",
  "Overpays for tourist taxis and gets shortchanged",
  "Has no alternative when the weather doesn't cooperate",
  "Takes blurry, dark photos that don't capture the magic",
  "Watches from afar without understanding what they're seeing",
];

const ComparisonSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        The Difference is{" "}
        <span className="text-gradient-gold">Brutal</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 font-body">
        See the difference between those who prepare with our guide and those who go "winging it."
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-primary/40 rounded-2xl p-7 glow-gold">
          <div className="text-center mb-6">
            <span className="inline-block bg-primary/20 text-primary font-body font-bold text-sm px-4 py-2 rounded-full">
              ✅ WITH THE GUIDE
            </span>
            <p className="text-foreground font-display font-bold text-lg mt-3">Prepared Traveler</p>
          </div>
          <ul className="space-y-3">
            {withGuide.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-body">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card/50 border border-destructive/20 rounded-2xl p-7">
          <div className="text-center mb-6">
            <span className="inline-block bg-destructive/10 text-destructive font-body font-bold text-sm px-4 py-2 rounded-full">
              ❌ WITHOUT THE GUIDE
            </span>
            <p className="text-muted-foreground font-display font-bold text-lg mt-3">Unprepared Traveler</p>
          </div>
          <ul className="space-y-3">
            {withoutGuide.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-body">
                <X className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;

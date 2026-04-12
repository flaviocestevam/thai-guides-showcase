import { X } from "lucide-react";

const profiles = [
  { emoji: "🎒", title: "Solo Traveler", desc: "Want to explore Thailand safely, without depending on anyone and without missing any experience." },
  { emoji: "💑", title: "Couples Seeking Romance", desc: "Want to live the most magical moment as a couple under thousands of lanterns in the sky." },
  { emoji: "👨‍👩‍👧‍👦", title: "Adventurous Families", desc: "Need precise planning to enjoy with children without stress or surprises." },
  { emoji: "📸", title: "Photographers & Content Creators", desc: "Want to know exactly where and when to be to capture the best photos and videos." },
  { emoji: "🌍", title: "First International Trip", desc: "Need a step-by-step guide to avoid costly mistakes abroad." },
  { emoji: "✈️", title: "Experienced Traveler", desc: "Want to go beyond the basics and discover secrets only those who've lived the festival know." },
];

const notFor = [
  "Those who think they can plan everything with generic blogs and videos",
  "Those who don't mind paying 3x more for not having the right tips",
  "Those who prefer to wing it and figure everything out on the spot",
];

const TargetAudienceSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Who Is This Guide{" "}
          <span className="text-gradient-gold">For?</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
          If you identify with at least one of these profiles, this guide was tailor-made for you.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {profiles.map((p) => (
          <div key={p.title} className="bg-card border-glow rounded-2xl p-6 hover:glow-gold transition-shadow duration-300">
            <span className="text-3xl mb-3 block">{p.emoji}</span>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-lg text-foreground mb-4 text-center">
          ❌ This guide is <span className="text-destructive">NOT</span> for:
        </h3>
        <div className="space-y-3">
          {notFor.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground font-body text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TargetAudienceSection;

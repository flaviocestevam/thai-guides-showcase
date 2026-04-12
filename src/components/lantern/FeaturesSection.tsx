import { Calendar, Map, Eye, Shield, DollarSign, Clock, Heart, Star } from "lucide-react";

const features = [
  { icon: Calendar, title: "Official Dates", desc: "Updated information from official Tourism Authority of Thailand sources" },
  { icon: Map, title: "How to Get There", desc: "Complete guide from Bangkok to Chiang Mai: flights, trains, buses, and private transfers" },
  { icon: Eye, title: "Where to Watch", desc: "Exclusive paid events and free public spots — all options detailed" },
  { icon: Shield, title: "Safety & Rules", desc: "Official guidelines for a safe experience that respects local traditions" },
];

const benefits = [
  { icon: DollarSign, title: "Real Money Savings", desc: "Avoid unnecessary expenses and optimize your budget. Save over $150 with precise tips on currency exchange, food, and transportation." },
  { icon: Clock, title: "Precious Time Savings", desc: "Say goodbye to hours of exhausting research. Everything is ready and tested, freeing your time to enjoy every second." },
  { icon: Heart, title: "Zero Headaches", desc: "Travel with peace of mind, without stress or uncertainty. Your 'travel insurance' against frustrations." },
  { icon: Star, title: "Unforgettable Experience", desc: "Memories that will last forever, without risks or frustrations, just pure magic." },
];

const FeaturesSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Why This Guide is{" "}
        <span className="text-gradient-gold">Essential?</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 font-body">
        Your passport to an authentic, worry-free experience at the Lantern Festival.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {features.map((f) => (
          <div key={f.title} className="bg-gradient-card border-glow rounded-xl p-6 hover:glow-orange transition-all duration-300 group">
            <f.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Why Our Guide is Your{" "}
        <span className="text-gradient-gold">Ultimate Solution</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 font-body">
        The result of years of experience and deep immersion in the Lantern Festival.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-5 bg-card border-glow rounded-xl p-6 hover:glow-orange transition-all duration-300 group">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

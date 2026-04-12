import { MapPin, Camera, BookOpen, HelpCircle, Plane, Hotel, Utensils, Thermometer } from "lucide-react";

const modules = [
  {
    icon: Plane,
    title: "How to Get There: Bangkok → Chiang Mai",
    items: [
      "Flight (1h15min), overnight train (12-15h), VIP bus, and private transfer",
      "Price comparison, advantages, and disadvantages of each option",
      "Tips to save up to 70% on tickets by booking in advance",
      "Links and apps for direct bookings without intermediaries",
    ],
  },
  {
    icon: Hotel,
    title: "Where to Stay",
    items: [
      "Old City: direct access to temples and free events",
      "Riverside: views of the Ping River and Loy Krathong at your doorstep",
      "Nimmanhaemin: trendy cafés, boutiques, and nightlife",
      "Price range by area: from hostels ($6/night) to 4★ hotels",
    ],
  },
  {
    icon: MapPin,
    title: "Tested Day-by-Day Itineraries",
    items: [
      "3-day / 2-night itinerary: intense and optimized",
      "4-day / 3-night itinerary: complete and relaxed",
      "Backup plan for each day in case of rain",
      "Exact times of events, transports, and meeting points",
    ],
  },
  {
    icon: Camera,
    title: "Professional Photography & Video",
    items: [
      "Camera settings: aperture f/1.8-f/4, ISO 800-3200",
      "Golden hour and blue hour: best moments to photograph",
      "Composition techniques: rule of thirds and leading lines",
      "Slow motion to capture lanterns rising to the sky",
    ],
  },
  {
    icon: BookOpen,
    title: "Deep Spiritual Meaning",
    items: [
      "Yi Peng: releasing negativity and reverence to Buddha",
      "Loy Krathong: offerings to the Water Goddess and purification",
      "Sacred rituals and how to participate with authentic respect",
      "The ancient history of the Lanna Kingdom",
    ],
  },
  {
    icon: Utensils,
    title: "Local Food & Culture",
    items: [
      "Best night markets and street food (meals starting at $1)",
      "Cultural etiquette: temples, monks, the 'Wai', and behavior",
      "Essential Thai phrases with pronunciation guide",
      "Negotiation tips at markets: start at 50-60% of the price",
    ],
  },
  {
    icon: HelpCircle,
    title: "Documentation & Entry",
    items: [
      "Visa exemption details and requirements by country",
      "Required vaccinations — how to get them",
      "Passport: minimum 6 months validity",
      "Travel insurance, proof documents, and immigration checklist",
    ],
  },
  {
    icon: Thermometer,
    title: "Weather & What to Pack",
    items: [
      "November: dry season, hot days and cool nights",
      "Appropriate clothing for temples (shoulders and knees covered)",
      "Complete checklist: eSIM, power bank, adapter, medications",
      "Essential apps: Grab, Google Maps, Google Translate",
    ],
  },
];

const ContentSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Everything You'll{" "}
        <span className="text-gradient-gold">Master With the Guide</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 font-body">
        Practical, tested, and updated content by those who lived the festival. Each chapter was created to eliminate a doubt, prevent a mistake, and multiply your experience.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div key={m.title} className="bg-card border-glow rounded-xl p-7 hover:glow-orange transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg">{m.title}</h3>
            </div>
            <ul className="space-y-3">
              {m.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                  <span className="text-primary mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentSection;

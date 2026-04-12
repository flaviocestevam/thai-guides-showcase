import { useState, useEffect, useCallback } from "react";
import { ShoppingBag } from "lucide-react";

const buyers = [
  { name: "Sarah R.", city: "New York, USA" },
  { name: "James M.", city: "London, UK" },
  { name: "Emma S.", city: "Sydney, AUS" },
  { name: "Michael L.", city: "Toronto, CAN" },
  { name: "Sophie C.", city: "Paris, FRA" },
  { name: "David P.", city: "Berlin, GER" },
  { name: "Olivia A.", city: "Amsterdam, NLD" },
  { name: "William F.", city: "Dublin, IRL" },
  { name: "Isabella T.", city: "Barcelona, ESP" },
  { name: "Daniel H.", city: "Chicago, USA" },
  { name: "Charlotte N.", city: "Melbourne, AUS" },
  { name: "Alexander K.", city: "Stockholm, SWE" },
  { name: "Mia D.", city: "Singapore, SGP" },
  { name: "Lucas V.", city: "Auckland, NZL" },
  { name: "Grace O.", city: "Cape Town, ZAF" },
];

const timeAgo = () => {
  const mins = Math.floor(Math.random() * 25) + 1;
  return mins === 1 ? "1 minute ago" : `${mins} minutes ago`;
};

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({ ...buyers[0], time: timeAgo() });
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    const buyer = buyers[Math.floor(Math.random() * buyers.length)];
    setCurrent({ ...buyer, time: timeAgo() });
    setVisible(true);
    setTimeout(() => setVisible(false), 4000);
  }, [dismissed]);

  useEffect(() => {
    const initialDelay = setTimeout(() => showNext(), 5000);
    const interval = setInterval(() => showNext(), 12000);
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [showNext]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-xs transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-card border-glow rounded-xl p-4 shadow-2xl flex items-center gap-3 relative">
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1 right-2 text-muted-foreground hover:text-foreground text-xs"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-foreground font-body text-sm font-semibold leading-tight">
            {current.name}
          </p>
          <p className="text-muted-foreground font-body text-xs">
            purchased the guide — {current.city}
          </p>
          <p className="text-primary font-body text-[10px] mt-0.5">{current.time}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;

import { useState, useEffect, useCallback } from "react";
import { ShoppingBag } from "lucide-react";

const buyers = [
  { name: "Carolina R.", city: "São Paulo, SP" },
  { name: "Felipe M.", city: "Rio de Janeiro, RJ" },
  { name: "Juliana S.", city: "Belo Horizonte, MG" },
  { name: "Ricardo L.", city: "Curitiba, PR" },
  { name: "Amanda C.", city: "Florianópolis, SC" },
  { name: "Thiago P.", city: "Brasília, DF" },
  { name: "Beatriz A.", city: "Porto Alegre, RS" },
  { name: "Gustavo F.", city: "Salvador, BA" },
  { name: "Mariana T.", city: "Recife, PE" },
  { name: "Pedro H.", city: "Campinas, SP" },
  { name: "Larissa N.", city: "Goiânia, GO" },
  { name: "Bruno K.", city: "Fortaleza, CE" },
  { name: "Isabela D.", city: "Manaus, AM" },
  { name: "Lucas V.", city: "Vitória, ES" },
  { name: "Fernanda O.", city: "Niterói, RJ" },
];

const timeAgo = () => {
  const mins = Math.floor(Math.random() * 25) + 1;
  return mins === 1 ? "1 minuto atrás" : `${mins} minutos atrás`;
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
          aria-label="Fechar"
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
            comprou o guia — {current.city}
          </p>
          <p className="text-primary font-body text-[10px] mt-0.5">{current.time}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;
import { CTAButton } from "@/components/festival/CTAButton";
import { useState, useEffect } from "react";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-primary/20 py-3 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-body text-sm text-muted-foreground">
            <span className="line-through">R$ 497</span>{" "}
            <span className="text-2xl font-display font-black text-gradient-gold">R$ 197</span>{" "}
            <span className="text-xs">ou 12x de R$ 19,21</span>
          </p>
        </div>
        <CTAButton href={HOTMART_LINK} size="default" className="whitespace-nowrap text-sm">
          🎫 GARANTIR MEU GUIA AGORA
        </CTAButton>
      </div>
    </div>
  );
};

export default FloatingCTA;
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const TopBar = () => {
  const [viewers] = useState(Math.floor(Math.random() * 20) + 42);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-fire text-primary-foreground py-2 px-4 text-center text-sm font-semibold flex items-center justify-center gap-4">
      <span>🔥 <strong>51% OFF</strong> — Oferta expira em breve</span>
      <span className="hidden sm:inline">•</span>
      <span className="hidden sm:flex items-center gap-1">
        <strong>{viewers}</strong> pessoas vendo agora
      </span>
      <a href="#comprar" className="ml-2 underline hover:no-underline font-bold flex items-center gap-1">
        GARANTIR MINHA VAGA <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
};

export default TopBar;

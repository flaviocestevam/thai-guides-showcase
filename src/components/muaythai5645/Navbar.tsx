import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="font-display text-xl text-foreground flex items-center gap-2">
          🥊 <span>Guia Muay Thai</span>
        </a>
        <button
          className="sm:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
        <div className={`${open ? "flex" : "hidden"} sm:flex flex-col sm:flex-row absolute sm:relative top-14 sm:top-0 left-0 right-0 bg-background sm:bg-transparent border-b sm:border-0 border-border gap-1 sm:gap-6 p-4 sm:p-0`}>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 sm:py-0" onClick={() => setOpen(false)}>Como Funciona</a>
          <a href="#academias" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 sm:py-0" onClick={() => setOpen(false)}>Academias</a>
          <a href="#roteiros" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 sm:py-0" onClick={() => setOpen(false)}>Roteiros</a>
          <a href="#custos" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 sm:py-0" onClick={() => setOpen(false)}>Custos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

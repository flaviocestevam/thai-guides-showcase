import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Festival", path: "/festivaldaslanternas" },
    { label: "Elefantes", path: "/santuariosdeelefantes" },
    { label: "Muay Thai", path: "/muaythai" },
    { label: "Trilhas", path: "/guiatrilhasthai" },
    { label: "Ilhas", path: "/ilhas" },
    { label: "Mergulho", path: "/mergulho-tailandia" },
    { label: "Massagem", path: "/cursos-de-massagem" },
    { label: "Motos", path: "/aluguel-de-motos-tailandia" },
    { label: "Coworkings", path: "/cafes-e-coworkings-tailandia" },
    { label: "Festas", path: "/festas" },
    { label: "Réveillon", path: "/reveillon-tailandia" },
    { label: "Voluntariado", path: "/voluntariado-tailandia" },
    { label: "Gays", path: "/tailandia-para-gays" },
    { label: "Songkran", path: "/songkran-ano-novo-tailandes" },
    { label: "Lua de Mel", path: "/lua-de-mel-tailandia" },
    { label: "Go-Go Bars", path: "/go-go-bars-tailandia" },
    { label: "Strip Clubs", path: "/clubes-de-strip-tailandia" },
    { label: "FAQ", path: "/#faq" },
  ];


  const solid = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`text-xl md:text-2xl font-display font-black tracking-tighter ${solid ? "" : "text-white drop-shadow-md"}`}>
            GUIAS <span className="text-primary group-hover:text-gradient-gold transition-all duration-300">TAILANDIA</span>
          </span>
        </Link>

        {/* Desktop CTA + Menu */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex rounded-full px-6 font-bold shadow-lg hover:shadow-primary/20">
            <a href="/#guias">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quero o Guia
            </a>
          </Button>
          <button
            aria-label="Abrir menu"
            className={`inline-flex items-center justify-center min-h-11 min-w-11 p-2 rounded-md transition-colors ${
              solid
                ? "text-foreground hover:bg-muted"
                : "text-white drop-shadow-md hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {/* Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="max-w-7xl mx-auto p-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  style={{ color: "hsl(var(--card-foreground))" }}
                  className="text-base font-body font-semibold py-2 px-3 rounded-md hover:bg-muted hover:!text-primary transition-colors border border-border/40 no-underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button asChild className="w-full mt-4 rounded-xl py-6 text-lg font-bold">
              <a href="/#guias" onClick={() => setIsMobileMenuOpen(false)}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Quero o Guia
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

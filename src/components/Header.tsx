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
    { label: "Festas", path: "/festas" },
    { label: "Voluntariado", path: "/voluntariado-tailandia" },
    { label: "FAQ", path: "/#faq" },
  ];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter">
            GUIAS <span className="text-primary group-hover:text-gradient-gold transition-all duration-300">TAILANDIA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-sm font-body font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="rounded-full px-6 font-bold shadow-lg hover:shadow-primary/20">
            <a href="/#guias">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quero o Guia
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-lg font-body font-semibold py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="w-full rounded-xl py-6 text-lg font-bold">
            <a href="/#guias" onClick={() => setIsMobileMenuOpen(false)}>
              Quero o Guia
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

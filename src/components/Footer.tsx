import { Link } from "react-router-dom";
import { MapPin, Mail, Instagram, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <Link to="/" className="text-2xl font-display font-black tracking-tighter">
            GUIAS <span className="text-primary">TAILANDIA</span>
          </Link>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            O guia mais completo em português para viajantes brasileiros que querem explorar a Tailândia com autenticidade, economia e segurança.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="mailto:contato@guiastailandia.com.br" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Páginas</h4>
          <ul className="space-y-4 text-sm font-body text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Página Inicial</Link></li>
            <li><Link to="/festivaldaslanternas" className="hover:text-primary transition-colors">Festival das Lanternas</Link></li>
            <li><Link to="/santuariosdeelefantes" className="hover:text-primary transition-colors">Santuários de Elefantes</Link></li>
            <li><Link to="/muaythai" className="hover:text-primary transition-colors">Muay Thai na Tailândia</Link></li>
            <li><Link to="/guiatrilhasthai" className="hover:text-primary transition-colors">Trilhas e Trekkings</Link></li>
            <li><Link to="/festas" className="hover:text-primary transition-colors">Guia de Festas</Link></li>
            <li><Link to="/voluntariado-tailandia" className="hover:text-primary transition-colors">Voluntariado na Tailândia</Link></li>
            <li><Link to="/tailandia-para-gays" className="hover:text-primary transition-colors">Tailândia para Gays</Link></li>
            <li><Link to="/songkran-ano-novo-tailandes" className="hover:text-primary transition-colors">Songkran — Ano Novo Tailandês</Link></li>
            <li><Link to="/lua-de-mel-tailandia" className="hover:text-primary transition-colors">Lua de Mel na Tailândia</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg mb-6">Links Úteis</h4>
          <ul className="space-y-4 text-sm font-body text-muted-foreground">
            <li><a href="/#faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</a></li>
            <li><a href="/#guias" className="hover:text-primary transition-colors">Comprar o Guia</a></li>
            <li><a href="/#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
            <li><a href="/robots.txt" className="hover:text-primary transition-colors">Robots</a></li>
            <li><a href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</a></li>
          </ul>
        </div>

        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
          <h4 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Destino Seguro
          </h4>
          <p className="text-sm text-muted-foreground font-body mb-4">
            Planeje sua viagem para a Tailândia sem erros e sem perrengues.
          </p>
          <Link to="/#guias" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos os guias <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body text-muted-foreground">
        <p>© 2026 Guias Tailandia para Brasileiros. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ para viajantes autênticos.</p>
      </div>
    </footer>
  );
};

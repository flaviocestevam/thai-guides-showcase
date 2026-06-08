import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  items?: { label: string; path?: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Default breadcrumbs based on path if not provided
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  const getLabel = (path: string) => {
    const labels: Record<string, string> = {
      festivaldaslanternas: "Festival das Lanternas",
      santuariosdeelefantes: "Santuários de Elefantes",
      muaythai: "Muay Thai",
      guiatrilhasthai: "Trilhas na Tailândia",
      festas: "Festas na Tailândia",
    };
    return labels[path] || path;
  };

  const breadcrumbItems = items || pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    return {
      label: getLabel(name),
      path: routeTo,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-4 flex items-center text-sm font-body text-muted-foreground overflow-x-auto whitespace-nowrap">
      <Link to="/" className="flex items-center hover:text-primary transition-colors">
        <Home className="w-4 h-4 mr-1" />
        Início
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          {item.path ? (
            <Link to={item.path} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

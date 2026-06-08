import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export const BackToHome = () => {
  return (
    <div className="w-full flex justify-start mb-4">
      <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary pl-0">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
      </Button>
    </div>
  );
};

export const BackToHomeFooter = () => {
  return (
    <div className="w-full flex justify-center py-12 border-t border-border">
      <Button variant="outline" asChild className="rounded-full px-8">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>
      </Button>
    </div>
  );
};

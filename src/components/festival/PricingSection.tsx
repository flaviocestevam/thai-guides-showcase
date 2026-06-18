import { CTAButton } from "@/components/festival/CTAButton";
import { Shield, Zap, RotateCcw } from "lucide-react";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const PricingSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        Transforme Seu Sonho em{" "}
        <span className="text-gradient-gold">Realidade!</span>
      </h2>
      <p className="text-muted-foreground font-body text-base md:text-lg mb-12 max-w-2xl mx-auto">
        Não perca a oportunidade de vivenciar o Festival das Lanternas de uma forma que você jamais imaginou. Nosso guia é o investimento que faltava para sua viagem ser verdadeiramente inesquecível.
      </p>

      <div className="bg-card border-glow rounded-3xl p-8 md:p-12 glow-gold relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">
          ⏰ OFERTA LIMITADA
        </div>

        <p className="text-muted-foreground font-body text-lg line-through mb-1">R$ 197</p>
        <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-2">
          R$ 67
        </p>
        <p className="text-primary font-body font-semibold text-sm mb-8">
          Oferta especial por tempo limitado! 🔥
        </p>

        <CTAButton href={HOTMART_LINK} size="lg" className="w-full max-w-md">
          🎫 GARANTIR MEU GUIA AGORA!
        </CTAButton>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground font-body">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" /> Pagamento 100% Seguro
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" /> Entrega Imediata
          </span>
          <span className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-primary" /> Garantia de 7 dias
          </span>
        </div>
      </div>

      <div className="mt-8 bg-primary/10 border-glow rounded-xl p-5">
        <p className="font-body text-sm text-foreground">
          ⚡ <strong>Atenção:</strong> Hospedagens e ingressos VIP esgotam meses antes do festival. Garanta seu guia agora e planeje com antecedência!
        </p>
      </div>
    </div>
  </section>
);

export default PricingSection;
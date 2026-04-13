import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Infinity } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const PricingSection = () => {
  return (
    <section id="comprar" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent text-sm font-semibold tracking-widest mb-4"
        >
          Oferta Especial
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display mb-6"
        >
          Quanto Vale Treinar no <span className="text-gradient-fire">Lugar Certo?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-accent rounded-2xl p-8 sm:p-10"
        >
          <p className="text-muted-foreground mb-2">Valor total de todos os bônus: <span className="line-through">R$ 672</span></p>
          
          <div className="inline-block bg-gradient-fire text-primary-foreground text-sm font-bold px-4 py-1 rounded-full mb-4">
            🔥 51% OFF
          </div>

          <p className="text-muted-foreground mb-1">De <span className="line-through">R$ 197</span> por apenas</p>
          <p className="text-6xl font-display text-foreground mb-2">R$97<span className="text-2xl">,00</span></p>
          <p className="text-muted-foreground mb-8">ou 6x de R$ 18,50</p>

          <p className="text-sm text-accent mb-6">127 pessoas compraram nas últimas 24h</p>

          <a
            href="#comprar"
            className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground font-bold text-xl px-12 py-5 rounded-xl shadow-fire hover:scale-105 transition-transform animate-pulse-glow w-full justify-center"
          >
            QUERO MEU GUIA AGORA <ArrowRight className="w-5 h-5" />
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Garantia incondicional de 7 dias</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Acesso imediato após o pagamento</span>
            <span className="flex items-center gap-1"><Infinity className="w-4 h-4" /> Acesso vitalício + atualizações</span>
          </div>

          <div className="mt-6">
            <CountdownTimer />
          </div>

          <p className="mt-4 text-sm text-accent">
            Apenas <strong>23</strong> vagas restantes neste preço
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

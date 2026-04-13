import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display mb-6"
        >
          Cada Lutador Que Treinou no Camp Certo{" "}
          <span className="text-gradient-fire">Começou Com Uma Decisão</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Quando você escolhe a academia certa, você não está apenas treinando — está investindo 
          na experiência mais transformadora da sua vida como lutador.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent font-semibold mb-8"
        >
          Junte-se a <strong>1.847+ lutadores</strong> que já fizeram essa escolha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="#comprar"
            className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground font-bold text-xl px-12 py-5 rounded-xl shadow-fire hover:scale-105 transition-transform animate-pulse-glow"
          >
            QUERO MEU GUIA AGORA <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        <p className="mt-12 text-sm text-muted-foreground">
          © 2024 Guia Muay Thai Tailândia. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;

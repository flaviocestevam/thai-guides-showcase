import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-10"
        >
          <Shield className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-display mb-4">Garantia Incondicional de 7 Dias</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Se por qualquer motivo você sentir que o guia não vale o investimento, basta enviar 
            um e-mail dentro de 7 dias e devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. 
            Sem perguntas, sem burocracia. O risco é todo meu.
          </p>
          <p className="text-accent text-sm font-semibold">
            Na prática? Menos de 1% dos compradores pedem reembolso.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

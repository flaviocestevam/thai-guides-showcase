import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const ForYouSection = () => {
  const items = [
    "Sonha em treinar Muay Thai na Tailândia, mas não sabe por onde começar",
    "Já pesquisou no Google e ficou mais confuso do que antes",
    "Quer ter certeza de que vai treinar na academia certa pro seu nível",
    "Não quer perder tempo nem dinheiro em camps lotados e ruins",
    "Quer viver uma experiência que vai mudar sua vida como lutador",
    "Está planejando uma viagem de 1 semana a 1 ano na Tailândia",
    "Quer roteiros prontos com custos detalhados dia a dia",
    "Quer voltar pra casa um lutador melhor do que quando foi",
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center mb-10"
        >
          Este Guia É Para Você Se...
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-background border border-border rounded-xl p-4"
            >
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#comprar"
            className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground font-bold text-lg px-10 py-5 rounded-xl shadow-fire hover:scale-105 transition-transform"
          >
            QUERO MEU GUIA AGORA <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;

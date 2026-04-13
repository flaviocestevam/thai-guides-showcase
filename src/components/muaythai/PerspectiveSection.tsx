import { motion } from "framer-motion";

const PerspectiveSection = () => {
  const comparisons = [
    { emoji: "🍽️", item: "Um jantar em Bangkok", price: "R$ 150" },
    { emoji: "🥊", item: "Um par de luvas no Brasil", price: "R$ 600" },
    { emoji: "🚕", item: "Transfer do aeroporto", price: "R$ 200" },
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
          Coloque em Perspectiva
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6 text-center"
            >
              <span className="text-3xl mb-3 block">{c.emoji}</span>
              <p className="text-sm text-muted-foreground mb-1">{c.item}</p>
              <p className="font-display text-2xl text-foreground">{c.price}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground">
          Por <strong className="text-accent">R$ 97</strong> você garante que a experiência mais 
          importante da sua viagem seja perfeita.
        </p>
        <p className="text-center text-muted-foreground mt-2">
          Quanto custa treinar 1 mês no camp errado? <strong className="text-foreground">Isso não tem preço.</strong>
        </p>
      </div>
    </section>
  );
};

export default PerspectiveSection;

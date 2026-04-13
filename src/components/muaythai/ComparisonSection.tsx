import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const ComparisonSection = () => {
  const without = [
    "Escolhe a academia pelo Instagram e descobre que é lotada e cara",
    "Paga R$ 2.500/mês por treino genérico em turmas de 40 alunos",
    "Fica longe do camp e perde 1h por dia no trânsito",
    "Compra equipamento no Brasil 3x mais caro",
    "Não sabe que precisa de visto para ficar mais de 90 dias",
    "Perde horas pesquisando e fica mais confuso",
  ];

  const withGuide = [
    "Vai direto na academia certa pro seu nível e orçamento",
    "Paga o preço justo com pad work individual e atenção real",
    "Fica a 5 minutos do camp — rotina perfeita",
    "Compra tudo na Tailândia pela metade do preço",
    "Sabe exatamente o que fazer com visto, seguro e documentos",
    "Tem roteiros prontos dia a dia com custos detalhados",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center mb-12"
        >
          Dois Caminhos. Duas Experiências Completamente Diferentes.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display text-muted-foreground mb-6">Sem o Guia</h3>
            <ul className="space-y-4">
              {without.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-accent rounded-2xl p-8 relative"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
              RECOMENDADO
            </span>
            <h3 className="text-2xl font-display text-accent mb-6">Com o Guia</h3>
            <ul className="space-y-4">
              {withGuide.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
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

export default ComparisonSection;

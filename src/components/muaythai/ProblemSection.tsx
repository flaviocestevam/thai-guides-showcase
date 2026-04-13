import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Academias que cobram caro e não ensinam bem — só porque têm Instagram bonito",
    "Mega-camps lotados onde você é só mais um número em turmas de 30+ alunos",
    "Horas pesquisando no Google sem saber quem é confiável de verdade",
    "Gastar R$ 10.000+ na viagem e treinar em um lugar que não combina com seu nível",
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center mb-12"
        >
          Você sabia que pode estar{" "}
          <span className="text-gradient-fire">jogando dinheiro fora</span> sem perceber?
        </motion.h2>

        <div className="space-y-4">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-xl p-5"
            >
              <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 text-lg text-muted-foreground"
        >
          A diferença entre uma experiência transformadora e desperdiçar sua viagem é{" "}
          <strong className="text-foreground">uma única decisão: ter a informação certa.</strong>
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 border-l-4 border-accent pl-6 italic text-muted-foreground"
        >
          "Eu estava prestes a reservar um mês no camp mais famoso de Phuket. Parecia perfeito: 
          fotos incríveis, milhares de seguidores. Foi então que descobri que as turmas tinham 40 alunos, 
          o pad work durava 3 minutos por pessoa e custava R$ 2.500/mês."
        </motion.blockquote>

        <p className="text-center mt-6 text-muted-foreground text-sm">
          Esse é o momento que separa dois tipos de lutador: o que joga dinheiro fora sem saber — 
          e o que <strong className="text-foreground">escolhe fazer diferente</strong>.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;

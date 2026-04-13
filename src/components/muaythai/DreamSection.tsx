import { motion } from "framer-motion";

const DreamSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display mb-8"
        >
          Imagine Este Momento...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground leading-relaxed space-y-6"
        >
          <p>
            Você acorda às 6h30 em Phuket. O ar quente da manhã tropical mistura com o cheiro 
            de incenso do templo ao lado. Você caminha até o camp — são 5 minutos a pé.
          </p>
          <p>
            O treinador te conhece pelo nome. Ele segura os pads só pra você e corrige cada 
            movimento. O suor escorre, seus golpes ficam mais afiados a cada round. Ao redor, 
            lutadores do mundo inteiro treinam no mesmo ritmo.
          </p>
          <p>
            Depois do treino, piscina. Açaí na Soi Ta-iad. Praia à tarde. Massagem tailandesa por R$ 50. 
            À noite, você assiste lutas ao vivo no estádio e pensa:{" "}
            <strong className="text-foreground">"isso é a melhor coisa que já fiz na vida."</strong>
          </p>
          <p className="text-accent font-semibold text-xl">
            Esse momento existe. E este guia te leva até ele.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DreamSection;

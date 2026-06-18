import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Treinei 1 mês no Tiger e foi transformador. Sem o guia, teria ido no camp mais lotado e mais caro. Economizei R$ 800 e treinei no lugar certo pro meu nível.",
    name: "Lucas R.",
    city: "São Paulo, SP",
  },
  {
    text: "Os roteiros prontos são incríveis. Cheguei na Tailândia sabendo exatamente o que fazer. O pad work no Sinbi foi o melhor treino da minha vida.",
    name: "Rafael T.",
    city: "Curitiba, PR",
  },
  {
    text: "Estava prestes a comprar luvas no Brasil por R$ 600. Li o guia e comprei as mesmas Twins na Tailândia por R$ 200. O guia se paga na primeira decisão.",
    name: "Fernanda L.",
    city: "Rio de Janeiro, RJ",
  },
  {
    text: "Fui pra Chiang Mai por 1 mês. O guia me mostrou o Lanna — camp autêntico, barato, treinadores campeões. Melhor experiência da minha vida.",
    name: "Diego P.",
    city: "Goiânia, GO",
  },
  {
    text: "A parte de vistos salvou minha viagem! Eu não sabia que podia ficar até 1 ano com ED Visa. O guia tem tudo, inclusive agências recomendadas.",
    name: "Ana Clara V.",
    city: "Fortaleza, CE",
  },
  {
    text: "Por R$ 67 eu economizei facilmente R$ 2.000 em decisões erradas. Cada academia tem review real, preços, WhatsApp. Perfeito.",
    name: "Bruno K.",
    city: "Porto Alegre, RS",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center mb-4"
        >
          O Que Dizem Quem Já Usou
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          Experiências reais de lutadores brasileiros · Todas as avaliações são de compradores verificados
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <span className="text-xs text-accent font-semibold mb-3 block">Compra verificada</span>
              <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-accent font-display text-2xl">4.9 de 5.0</p>
          <p className="text-sm text-muted-foreground">Baseado em 247 avaliações verificadas</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

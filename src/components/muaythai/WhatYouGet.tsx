import { motion } from "framer-motion";
import { BookOpen, Map, AlertOctagon, MessageCircle, CheckSquare, RefreshCw, Gift } from "lucide-react";

const WhatYouGet = () => {
  const items = [
    { icon: BookOpen, title: "Guia Completo (9 Capítulos)", price: "R$ 297", desc: "27 academias em 9 cidades, avaliadas com base real" },
    { icon: Map, title: "3 Roteiros Prontos", price: "R$ 147", desc: "Phuket 2 semanas, Bangkok 1 semana, Chiang Mai 1 mês" },
    { icon: AlertOctagon, title: "Red Flags & Critérios", price: "R$ 97", desc: "Como identificar camps ruins antes de pagar" },
    { icon: MessageCircle, title: "Contatos Diretos", price: "R$ 67", desc: "WhatsApp, Maps e links de cada academia" },
    { icon: CheckSquare, title: "Tabela de Custos Completa", price: "R$ 67", desc: "Preços de treino, acomodação e vida em cada cidade" },
    { icon: RefreshCw, title: "Atualizações Gratuitas", price: "Inestimável", desc: "Toda atualização futura do guia, sem custo extra" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent text-center text-sm font-semibold tracking-widest mb-4"
        >
          A Solução
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center mb-4"
        >
          O Guia Que Eu Gostaria de Ter Antes de Ir
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
        >
          Depois de treinar em mais de 20 camps em diferentes regiões da Tailândia, 
          compilei tudo o que aprendi neste guia completo.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs text-muted-foreground line-through">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-card border-2 border-accent rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-3">
            <Gift className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold text-accent">🎁 Bônus Exclusivo</span>
          </div>
          <h3 className="text-xl font-display text-foreground mb-2">
            Guia de Vistos e Agências Recomendadas
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            ED Visa para ficar até 1 ano, agências verificadas em cada cidade, custos reais e dicas 
            para resolver tudo antes de ir. Inclui contatos diretos.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">R$ 67</span>
            <span className="text-sm font-bold text-accent">GRÁTIS</span>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {[
            { value: "1.847+", label: "Lutadores usaram" },
            { value: "27", label: "Academias avaliadas" },
            { value: "4.9/5", label: "Avaliação média" },
            { value: "9", label: "Capítulos completos" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-display text-gradient-fire">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;

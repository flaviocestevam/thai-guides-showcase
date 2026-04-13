import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/muay-thai-hero.jpg";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Treino de Muay Thai na Tailândia"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-6"
        >
          <span className="flex items-center gap-2 bg-muted/60 backdrop-blur px-4 py-2 rounded-full text-sm">
            👥 1.847+ lutadores já compraram
          </span>
          <span className="flex items-center gap-2 bg-muted/60 backdrop-blur px-4 py-2 rounded-full text-sm">
            ⭐ 4.9/5 avaliação
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block bg-muted/40 backdrop-blur border border-accent/30 rounded-full px-6 py-2 mb-8"
        >
          <span className="text-accent font-semibold text-sm">⚡ ÚLTIMAS HORAS — 51% DE DESCONTO</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display leading-none mb-6"
        >
          Pare de Escolher a{" "}
          <span className="text-gradient-fire">Academia Errada</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A Tailândia tem mais de 3.000 academias de Muay Thai e a maioria dos turistas acaba na errada. 
          Este guia te mostra exatamente <strong className="text-foreground">onde treinar, quanto custa, como chegar</strong> e 
          roteiros prontos para cada nível.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#comprar"
            className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground font-bold text-lg px-10 py-5 rounded-xl shadow-fire hover:scale-105 transition-transform animate-pulse-glow"
          >
            QUERO MEU GUIA AGORA <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            🔒 Pagamento seguro · Acesso imediato · Garantia de 7 dias
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <strong className="text-foreground">42</strong> pessoas vendo agora
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6"
        >
          <CountdownTimer />
        </motion.div>
      </div>

      {/* Social proof ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-muted/80 backdrop-blur py-3 overflow-hidden">
        <div className="animate-ticker flex whitespace-nowrap">
          {[
            { name: "Lucas R.", city: "São Paulo", time: "3 min" },
            { name: "Pedro H.", city: "Belo Horizonte", time: "7 min" },
            { name: "Camila R.", city: "Florianópolis", time: "12 min" },
            { name: "Diego P.", city: "Porto Alegre", time: "18 min" },
            { name: "Fernanda S.", city: "Brasília", time: "23 min" },
            { name: "Thiago M.", city: "Recife", time: "31 min" },
            { name: "André M.", city: "Curitiba", time: "45 min" },
            { name: "Rafael T.", city: "Salvador", time: "52 min" },
            { name: "Lucas R.", city: "São Paulo", time: "3 min" },
            { name: "Pedro H.", city: "Belo Horizonte", time: "7 min" },
            { name: "Camila R.", city: "Florianópolis", time: "12 min" },
            { name: "Diego P.", city: "Porto Alegre", time: "18 min" },
            { name: "Fernanda S.", city: "Brasília", time: "23 min" },
            { name: "Thiago M.", city: "Recife", time: "31 min" },
            { name: "André M.", city: "Curitiba", time: "45 min" },
            { name: "Rafael T.", city: "Salvador", time: "52 min" },
          ].map((person, i) => (
            <span key={i} className="mx-6 text-sm text-muted-foreground">
              <strong className="text-foreground">{person.name}</strong> comprou há {person.time} — {person.city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

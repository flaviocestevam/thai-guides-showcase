import { Gift, Languages, Camera, Utensils, ShieldCheck, Map } from "lucide-react";

const bonuses = [
  { icon: Map, title: "Mapa Interativo de Chiang Mai", desc: "Todos os pontos-chave do festival marcados: templos, pontes, mercados, hospedagens e locais de soltura de lanternas.", value: "R$ 197" },
  { icon: Camera, title: "Guia de Fotografia Noturna", desc: "Configurações exatas de câmera (abertura f/1.8-f/4, ISO 800-3200, velocidade do obturador) para capturar a magia das lanternas como um profissional.", value: "R$ 197" },
  { icon: Languages, title: "Mini Guia de Tailandês Essencial", desc: "Frases-chave como Sawadee kráp, Tâo rài? e Aròy! — tudo com pronúncia simplificada para brasileiros.", value: "R$ 147" },
  { icon: Utensils, title: "Checklist Completo de Viagem", desc: "Lista detalhada de tudo que você precisa levar: roupas para templos, eSIM, power bank, adaptador de tomada, medicamentos e mais.", value: "R$ 97" },
  { icon: ShieldCheck, title: "Guia de Segurança e Anti-Golpes", desc: "Como evitar tuk-tuks falsos, monges fraudulentos, golpes de joias e mais. Proteja-se como quem já conhece todos os truques.", value: "R$ 152" },
];

const BonusSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-primary/20 text-primary font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
          🎁 BÔNUS EXCLUSIVOS
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Você Ainda Leva{" "}
          <span className="text-gradient-gold">Tudo Isso de Bônus</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
          Conteúdos extras que sozinhos já valem mais que o investimento no guia.
        </p>
      </div>

      <div className="space-y-5 mb-10">
        {bonuses.map((b) => (
          <div key={b.title} className="flex items-center gap-5 bg-card border-glow rounded-xl p-6 hover:glow-orange transition-all duration-300 group">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <b.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-display font-bold text-lg">{b.title}</h3>
                <span className="text-xs bg-primary/20 text-primary font-body font-bold px-2 py-0.5 rounded-full">
                  Valor: {b.value}
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.desc}</p>
            </div>
            <Gift className="w-6 h-6 text-primary/40 flex-shrink-0 hidden md:block" />
          </div>
        ))}
      </div>

      <div className="bg-card border-glow rounded-2xl p-8 text-center glow-gold">
        <p className="text-muted-foreground font-body text-sm mb-2">Valor total dos bônus:</p>
        <p className="text-3xl font-display font-black text-foreground line-through opacity-60 mb-1">R$ 790</p>
        <p className="text-xl font-display font-bold text-primary">
          GRÁTIS — incluído no seu guia! 🎉
        </p>
      </div>
    </div>
  </section>
);

export default BonusSection;
import { X } from "lucide-react";

const profiles = [
  { emoji: "🎒", title: "Viajante Solo", desc: "Quer explorar a Tailândia com segurança, sem depender de ninguém e sem perder nenhuma experiência." },
  { emoji: "💑", title: "Casais em Busca de Romance", desc: "Querem viver o momento mais mágico da vida a dois sob milhares de lanternas no céu." },
  { emoji: "👨‍👩‍👧‍👦", title: "Famílias Aventureiras", desc: "Precisam de planejamento certeiro para aproveitar com crianças sem estresse nem imprevistos." },
  { emoji: "📸", title: "Fotógrafos e Criadores de Conteúdo", desc: "Querem saber exatamente onde e quando estar para capturar as melhores fotos e vídeos." },
  { emoji: "🌍", title: "Primeira Viagem Internacional", desc: "Precisam de um guia passo a passo para não cometer erros que custam caro no exterior." },
  { emoji: "✈️", title: "Viajante Experiente", desc: "Quer ir além do básico e descobrir os segredos que só quem viveu o festival conhece." },
];

const notFor = [
  "Quem acha que consegue planejar tudo só com blogs e vídeos genéricos",
  "Quem não se importa em pagar 3x mais por não ter as dicas certas",
  "Quem prefere arriscar e resolver tudo na hora",
];

const TargetAudienceSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Para Quem é{" "}
          <span className="text-gradient-gold">Este Guia?</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto">
          Se você se identifica com pelo menos um desses perfis, este guia foi feito sob medida para você.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {profiles.map((p) => (
          <div key={p.title} className="bg-card border-glow rounded-2xl p-6 hover:glow-gold transition-shadow duration-300">
            <span className="text-3xl mb-3 block">{p.emoji}</span>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-lg text-foreground mb-4 text-center">
          ❌ Este guia <span className="text-destructive">NÃO</span> é para quem:
        </h3>
        <div className="space-y-3">
          {notFor.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground font-body text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TargetAudienceSection;
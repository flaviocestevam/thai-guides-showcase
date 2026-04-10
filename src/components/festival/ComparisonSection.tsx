import { Check, X } from "lucide-react";

const withGuide = [
  "Sabe exatamente onde assistir a soltura coordenada de lanternas",
  "Reserva hospedagem na área ideal com meses de antecedência",
  "Compra ingressos oficiais pelos canais corretos e seguros",
  "Economiza mais de R$ 800 com dicas de câmbio, transporte e alimentação",
  "Conhece a etiqueta cultural e participa com respeito",
  "Tem roteiro dia a dia testado e otimizado",
  "Sabe usar Grab, Songthaew e transporte local como um expert",
  "Tem plano B para chuva e imprevistos",
  "Fotografa como profissional com configurações de câmera ideais",
  "Vive uma experiência espiritual profunda e transformadora",
];

const withoutGuide = [
  "Fica perdido sem saber os melhores locais e horários",
  "Chega e descobre que tudo já está lotado e caríssimo",
  "Arrisca comprar ingressos falsos ou de vendedores duvidosos",
  "Gasta o dobro por não conhecer os truques locais",
  "Comete gafes culturais sem perceber",
  "Improvisa e perde tempo precioso tentando se organizar",
  "Paga caro em táxis turísticos e é enganado no troco",
  "Fica sem alternativa quando o clima não colabora",
  "Tira fotos tremidas e escuras que não capturam a magia",
  "Assiste de longe sem entender o significado do que está vendo",
];

const ComparisonSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        A Diferença é{" "}
        <span className="text-gradient-gold">Brutal</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 font-body">
        Veja a diferença entre quem se prepara com nosso guia e quem vai "na sorte".
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border-2 border-primary/40 rounded-2xl p-7 glow-gold">
          <div className="text-center mb-6">
            <span className="inline-block bg-primary/20 text-primary font-body font-bold text-sm px-4 py-2 rounded-full">
              ✅ COM O GUIA
            </span>
            <p className="text-foreground font-display font-bold text-lg mt-3">Viajante Preparado</p>
          </div>
          <ul className="space-y-3">
            {withGuide.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-body">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card/50 border border-destructive/20 rounded-2xl p-7">
          <div className="text-center mb-6">
            <span className="inline-block bg-destructive/10 text-destructive font-body font-bold text-sm px-4 py-2 rounded-full">
              ❌ SEM O GUIA
            </span>
            <p className="text-muted-foreground font-display font-bold text-lg mt-3">Viajante Despreparado</p>
          </div>
          <ul className="space-y-3">
            {withoutGuide.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-body">
                <X className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
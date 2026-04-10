import { XCircle, AlertTriangle } from "lucide-react";

const risks = [
  "Comprar ingressos falsos de vendedores não autorizados e perder centenas de reais",
  "Soltar lanternas em áreas proibidas e ser multado pela polícia tailandesa",
  "Ficar sem hospedagem porque não reservou com antecedência — tudo lota meses antes",
  "Gastar o dobro em transporte, câmbio e alimentação por falta de informação",
  "Perder o momento mágico da soltura coordenada por estar no lugar errado, na hora errada",
  "Desrespeitar tradições sagradas sem saber e causar constrangimento",
  "Cair em golpes comuns como tuk-tuks falsos, monges falsos e lojas de joias armadas",
  "Ficar sem plano B quando chover e desperdiçar um dia inteiro da viagem",
];

const RiskSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-destructive/5 to-background">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-destructive/10 text-destructive font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
          ⚠️ ATENÇÃO: LEIA ANTES DE VIAJAR
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          O Que Acontece Com Quem Vai{" "}
          <span className="text-destructive">Sem Preparo</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto">
          Todos os anos, centenas de brasileiros chegam em Chiang Mai achando que "dá pra resolver na hora". O resultado é sempre o mesmo: frustração, prejuízo e arrependimento.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {risks.map((risk) => (
          <div key={risk} className="flex items-start gap-4 bg-card/50 border border-destructive/20 rounded-xl p-5 hover:border-destructive/40 transition-colors">
            <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-body text-sm md:text-base">{risk}</p>
          </div>
        ))}
      </div>

      <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-8 text-center">
        <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
        <p className="text-lg md:text-xl font-display font-bold text-foreground mb-2">
          Você realmente quer arriscar a viagem dos seus sonhos?
        </p>
        <p className="text-muted-foreground font-body text-sm md:text-base">
          Cada erro desses custa tempo, dinheiro e memórias que você nunca vai recuperar. A diferença entre uma viagem inesquecível e um pesadelo está na <strong className="text-primary">preparação</strong>.
        </p>
      </div>
    </div>
  </section>
);

export default RiskSection;
import { CTAButton } from "@/components/festival/CTAButton";
import { Shield, Zap, RotateCcw, Clock, CheckCircle2 } from "lucide-react";

const HOTMART_LINK = "https://pay.cakto.com.br/3drcnfk_835346";

const urgencyPoints = [
  "Hospedagens em Chiang Mai esgotam MESES antes do festival",
  "Ingressos VIP para o CAD Kom Loi acabam em dias",
  "Sem planejamento, você paga até 3x mais em tudo",
  "Cada dia sem o guia é um dia a menos para se preparar",
];

const FinalCTASection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-block bg-destructive/10 text-destructive font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
        🔥 ÚLTIMA CHANCE — NÃO DEIXE PARA DEPOIS
      </span>

      <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
        Daqui a 5 Minutos Você Pode Estar{" "}
        <span className="text-gradient-gold">Planejando a Viagem da Sua Vida</span>
      </h2>

      <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
        Ou pode fechar essa página, continuar pesquisando por horas em blogs desatualizados e vídeos de influenciadores que nunca estiveram lá de verdade. A escolha é sua. Mas lembre-se: <strong className="text-foreground">quem não se prepara, paga o preço — literalmente.</strong>
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
        {urgencyPoints.map((point) => (
          <div key={point} className="flex items-start gap-3 bg-card/50 border-glow rounded-lg p-4">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-body text-sm">{point}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border-glow rounded-3xl p-8 md:p-12 glow-gold relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground font-body font-bold text-xs px-4 py-2 rounded-bl-xl">
          ⏰ PODE SAIR DO AR A QUALQUER MOMENTO
        </div>

        <p className="text-muted-foreground font-body text-sm mb-1">De <span className="line-through">R$ 67</span> por apenas</p>
        <p className="text-5xl md:text-7xl font-display font-black text-gradient-gold mb-1">
          R$ 67
        </p>
        <p className="text-muted-foreground font-body text-xs mb-1">ou 12x de R$ 6,71</p>
        <p className="text-primary font-body font-semibold text-sm mb-8">
          Menos que um jantar em Chiang Mai. Mas pode salvar toda a sua viagem. 🔥
        </p>

        <CTAButton href={HOTMART_LINK} size="lg" className="w-full max-w-md">
          🎫 QUERO MEU GUIA AGORA — RISCO ZERO!
        </CTAButton>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground font-body">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" /> Pagamento 100% Seguro
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" /> Entrega Imediata
          </span>
          <span className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-primary" /> Garantia de 7 dias
          </span>
        </div>
      </div>

      <div className="bg-card border-glow rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="font-display font-bold text-xl mb-4">🛡️ Garantia Blindada de 7 Dias</h3>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          Compre agora, leia o guia inteiro, e se em 7 dias você achar que não vale o investimento, devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia, sem letras miúdas.
        </p>
        <p className="text-primary font-body font-semibold text-sm">
          O único risco que você corre é perder essa oportunidade.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {[
          "Mais de 4.000 viajantes já usaram nossos guias",
          "19 anos de experiência real na Tailândia",
          "Conteúdo testado e atualizado por quem viveu o festival",
        ].map((item) => (
          <div key={item} className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTASection;
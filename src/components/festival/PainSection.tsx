const PainSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
        A Armadilha do Planejamento Solo e a{" "}
        <span className="text-gradient-gold">Ilusão dos "Influenciadores"</span>
      </h2>

      <div className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed text-left">
        <p>
          Imagina gastar <strong className="text-foreground">milhares de reais</strong> em passagens, hospedagem e ingressos... só para descobrir na hora que o lugar que você escolheu para ver as lanternas é <strong className="text-destructive">proibido</strong>. Que o ingresso que você comprou é <strong className="text-destructive">falso</strong>. Que a hospedagem que parecia boa fica a <strong className="text-destructive">1 hora do festival</strong>.
        </p>
        <p>
          Isso acontece <strong className="text-foreground">todos os anos</strong> com dezenas de brasileiros. Eles chegam em Chiang Mai baseados em dicas de vídeos do YouTube, posts desatualizados e "influenciadores" que passaram <strong className="text-foreground">2 dias</strong> na cidade e já se acham especialistas.
        </p>
        <p>
          A verdade é cruel: <strong className="text-primary">informação errada custa caro</strong>. Custa dinheiro, custa tempo, custa as memórias que você nunca vai ter. Soltar lanternas em áreas proibidas pode gerar multa. Comprar ingressos de vendedores ambulantes é jogar dinheiro fora. Não entender a etiqueta cultural é passar vergonha em um templo sagrado.
        </p>
        <p>
          E o pior: <strong className="text-foreground">você não vai saber o que perdeu</strong>. Não vai saber que existia um ângulo perfeito para fotografar. Que existia um mercado com comida incrível por R$ 5 a refeição. Que existia uma forma de economizar R$ 800 na viagem inteira. Você simplesmente vai voltar para casa achando que "foi legal", sem saber que poderia ter sido <strong className="text-primary">extraordinário</strong>.
        </p>
      </div>

      <div className="mt-12 bg-card border-glow rounded-2xl p-8 glow-orange">
        <p className="text-lg md:text-xl font-display font-semibold text-foreground">
          ⚠️ A diferença entre uma viagem "ok" e uma viagem <span className="text-primary">inesquecível</span> não é sorte — é <span className="text-primary">preparo</span>. E esse preparo está a um clique de distância.
        </p>
      </div>
    </div>
  </section>
);

export default PainSection;
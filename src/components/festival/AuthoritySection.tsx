const stats = [
  { value: "19 Anos", label: "de experiência na Tailândia" },
  { value: "4.000+", label: "Viajantes Orientados" },
  { value: "30+", label: "Países Atendidos" },
];

const AuthoritySection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Mais de 4.000 Viajantes{" "}
        <span className="text-gradient-gold">Satisfeitos</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 font-body text-base md:text-lg leading-relaxed">
        Somos a referência para quem busca uma experiência autêntica e inesquecível. Nossa autoridade é construída em anos de experiência e na confiança de milhares de viajantes.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="bg-gradient-card border-glow rounded-2xl p-8 text-center glow-gold">
            <p className="text-4xl md:text-5xl font-display font-black text-gradient-gold mb-2">{s.value}</p>
            <p className="text-muted-foreground font-body">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border-glow rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-display font-bold mb-4 text-center">Quem Somos</h3>
        <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-center">
          Somos um time de brasileiros apaixonados pela Tailândia que decidiu compartilhar todas as experiências vivendo e explorando este país mágico desde 2006. Durante quase duas décadas, participamos de festivais únicos, visitamos templos sagrados, desbravamos trilhas secretas e descobrimos ilhas paradisíacas.
        </p>
        <p className="text-center mt-6 font-display text-lg italic text-primary">
          "Transformamos sonhos em realidade através de experiências autênticas e inesquecíveis na Terra do Sorriso."
        </p>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
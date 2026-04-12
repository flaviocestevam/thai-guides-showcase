const stats = [
  { value: "19 Years", label: "of experience in Thailand" },
  { value: "4,000+", label: "Travelers Guided" },
  { value: "30+", label: "Countries Served" },
];

const AuthoritySection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Over 4,000 Satisfied{" "}
        <span className="text-gradient-gold">Travelers</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 font-body text-base md:text-lg leading-relaxed">
        We are the go-to reference for those seeking an authentic and unforgettable experience. Our authority is built on years of experience and the trust of thousands of travelers.
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
        <h3 className="text-2xl font-display font-bold mb-4 text-center">Who We Are</h3>
        <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-center">
          We are a team of passionate travelers who decided to share all the experiences of living and exploring this magical country since 2006. For nearly two decades, we've attended unique festivals, visited sacred temples, hiked secret trails, and discovered paradise islands.
        </p>
        <p className="text-center mt-6 font-display text-lg italic text-primary">
          "We turn dreams into reality through authentic and unforgettable experiences in the Land of Smiles."
        </p>
      </div>
    </div>
  </section>
);

export default AuthoritySection;

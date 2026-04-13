import heroImage from "@/assets/muay-thai-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <img
        src={heroImage}
        alt="Treino de Muay Thai em academia tradicional na Tailândia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="guide-hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="guide-section-label mb-4">Guia Completo</p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.9] mb-2 text-foreground">
          Academias de Muay Thai
          <span className="block text-gold">na Tailândia</span>
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mt-6 font-body leading-relaxed">
          O guia definitivo para treinar na terra do Muay Thai. Onde treinar, quanto custa, como chegar e roteiros prontos para cada nível.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="#academias" className="guide-cta-button">Ver Academias</a>
          <a href="#como-funciona" className="guide-cta-button-outline">Como Funciona</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

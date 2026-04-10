const testimonial1 = "https://festlantern-qhappp.manus.space/assets/testimonial_person1.webp";
const testimonial2 = "https://festlantern-qhappp.manus.space/assets/testimonial_person2.webp";
const testimonial3 = "https://festlantern-qhappp.manus.space/assets/testimonial_person3.webp";

const testimonials = [
  {
    img: testimonial1,
    quote: "Seguindo o guia, consegui os melhores lugares para assistir o festival e economizei mais de R$ 800 na viagem. Experiência inesquecível!",
    name: "Maria S.",
    city: "Rio de Janeiro",
  },
  {
    img: testimonial2,
    quote: "As informações sobre ingressos VIP e transporte foram fundamentais para uma experiência confortável e segura. Valeu cada centavo investido!",
    name: "Lucas M.",
    city: "São Paulo",
  },
  {
    img: testimonial3,
    quote: "O e-book me ajudou a entender o significado das lanternas e a respeitar as tradições locais. Uma experiência transformadora.",
    name: "Ana P.",
    city: "Florianópolis",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-14">
        O Que Nossos Clientes{" "}
        <span className="text-gradient-gold">Dizem</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-gradient-card border-glow rounded-2xl p-7 flex flex-col items-center text-center hover:glow-orange transition-all duration-300">
            <img
              src={t.img}
              alt={`Foto de ${t.name}`}
              className="w-20 h-20 rounded-full object-cover border-2 border-primary mb-5"
              loading="lazy"
              width={512}
              height={512}
            />
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5 italic">
              "{t.quote}"
            </p>
            <p className="font-display font-bold text-foreground">{t.name}</p>
            <p className="text-primary text-sm font-body">{t.city}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
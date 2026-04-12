import { useState, useEffect } from "react";

const FESTIVAL_DATE = new Date("2026-11-05T18:00:00+07:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = FESTIVAL_DATE.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-background via-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-destructive/10 text-destructive font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
          ⏰ THE FESTIVAL IS COMING
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold mb-3">
          Countdown to the{" "}
          <span className="text-gradient-gold">Lantern Festival</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Every second that passes is one less second to prepare. Hotels, tickets, and flights sell out fast. Don't be left behind.
        </p>

        <div className="flex justify-center gap-3 md:gap-6 mb-10">
          {blocks.map((b) => (
            <div
              key={b.label}
              className="bg-card border-glow rounded-2xl p-4 md:p-8 min-w-[80px] md:min-w-[130px] glow-gold"
            >
              <span className="block text-4xl md:text-7xl font-display font-black text-gradient-gold leading-none">
                {String(b.value).padStart(2, "0")}
              </span>
              <span className="block text-muted-foreground font-body text-xs md:text-sm mt-2 uppercase tracking-widest">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-foreground font-body text-sm md:text-base font-semibold">
          🔥 Those who prepare early <span className="text-primary">save up to 60%</span> and secure the best experiences.
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;

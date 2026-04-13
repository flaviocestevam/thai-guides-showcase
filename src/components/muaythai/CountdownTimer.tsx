import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 5, minutes: 47, seconds: 29 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
      <span>Preço promocional acaba em:</span>
      <div className="flex gap-2 ml-2">
        {[
          { value: time.hours, label: "Horas" },
          { value: time.minutes, label: "Min" },
          { value: time.seconds, label: "Seg" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="bg-primary/20 text-primary font-bold text-lg px-3 py-1 rounded-lg font-display">
              {pad(item.value)}
            </span>
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

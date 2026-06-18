import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    const end = Date.now() + 15 * 60000;
    const tick = () => {
      const d = Math.max(0, end - Date.now());
      setTime({
        minutes: Math.floor(d / 60000),
        seconds: Math.floor((d / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
      <span>Preço promocional acaba em:</span>
      <div className="flex gap-2 ml-2">
        {[
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

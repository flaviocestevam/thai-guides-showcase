import { XCircle, AlertTriangle } from "lucide-react";

const risks = [
  "Buying fake tickets from unauthorized vendors and losing hundreds of dollars",
  "Releasing lanterns in prohibited areas and being fined by Thai police",
  "Running out of accommodation because you didn't book in advance — everything sells out months before",
  "Spending double on transport, currency exchange, and food due to lack of information",
  "Missing the magical moment of the coordinated lantern release by being in the wrong place at the wrong time",
  "Disrespecting sacred traditions unknowingly and causing embarrassment",
  "Falling for common scams like fake tuk-tuks, fake monks, and rigged jewelry shops",
  "Having no backup plan when it rains and wasting an entire day of your trip",
];

const RiskSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-destructive/5 to-background">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block bg-destructive/10 text-destructive font-body font-semibold text-sm px-5 py-2 rounded-full mb-6">
          ⚠️ WARNING: READ BEFORE YOU TRAVEL
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          What Happens to Those Who Go{" "}
          <span className="text-destructive">Unprepared</span>
        </h2>
        <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto">
          Every year, hundreds of travelers arrive in Chiang Mai thinking they can "figure it out on the spot." The result is always the same: frustration, financial loss, and regret.
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
          Do you really want to risk the trip of your dreams?
        </p>
        <p className="text-muted-foreground font-body text-sm md:text-base">
          Each of these mistakes costs time, money, and memories you'll never get back. The difference between an unforgettable trip and a nightmare lies in <strong className="text-primary">preparation</strong>.
        </p>
      </div>
    </div>
  </section>
);

export default RiskSection;

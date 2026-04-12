import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need a visa to go to Thailand?", a: "Many countries have visa exemption for stays of up to 30-90 days. You just need a passport valid for at least 6 months. In the guide, we explain all required documents, including vaccination certificates that may be required depending on your country of origin." },
  { q: "Are the paid lantern events worth it?", a: "If your goal is to experience the iconic coordinated release of thousands of lanterns at the same time — yes, it's ABSOLUTELY worth it. Paid events (like CAD Kom Loi) include transport, lanterns, krathong, buffet, and reserved seating. In the guide, we show exactly where to buy official tickets and how to avoid scams with fake tickets." },
  { q: "How much will the entire trip cost?", a: "It depends on your style! In the guide, we detail two plans: Budget (starting at ~$50 for 3 nights in Chiang Mai, excluding flights) and Comfort (starting at ~$220). With our tips on currency exchange, street food markets (meals starting at $1!), and local transport, you can easily save over $150." },
  { q: "What if it rains during the festival?", a: "November is the start of the dry season, but light rain can occur. In the guide, we include a complete backup plan: illuminated temples, covered restaurants, dance shows, and indoor markets. You won't waste a single day of your trip!" },
  { q: "Can I release lanterns anywhere?", a: "NO! This is one of the biggest traps. Launching in the city center is PROHIBITED due to the airport and fire risk. Those who do it can be fined. In the guide, we show exactly where it's allowed and safe — only at organized events and designated locations." },
  { q: "Is the guide suitable for solo travelers?", a: "Absolutely! We have a dedicated section for solo travelers with safety tips, ideal accommodation, and how to join groups at events. Many of our customers travel alone and say the guide was like having a local friend by their side." },
  { q: "Do I receive the guide instantly?", a: "Yes! After payment confirmation, you get immediate access to the complete guide in digital format. You can access it from your phone, tablet, or computer — ideal for consulting during your trip." },
  { q: "What if I don't like the guide?", a: "You have a 7-day unconditional guarantee. If for any reason you're not satisfied, we refund 100% of your money. No questions asked, no hassle. The risk is ZERO." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Frequently Asked{" "}
        <span className="text-gradient-gold">Questions</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">
        Clear all your doubts before getting your guide.
      </p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border-glow rounded-xl px-6 border-b-0"
          >
            <AccordionTrigger className="font-display font-semibold text-left text-base hover:no-underline hover:text-primary transition-colors">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

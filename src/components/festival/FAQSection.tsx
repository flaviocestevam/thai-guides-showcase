import { StructuredData } from "@/components/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso de visto para ir à Tailândia?", a: "Não! Cidadãos brasileiros têm isenção de visto para estadias de até 90 dias. Basta ter o passaporte válido por pelo menos 6 meses. No guia, explicamos todos os documentos necessários, incluindo o Certificado de Vacinação contra Febre Amarela que é OBRIGATÓRIO para brasileiros." },
  { q: "Vale a pena pagar pelos eventos pagos de lanternas?", a: "Se seu objetivo é vivenciar a icônica soltura coordenada de milhares de lanternas ao mesmo tempo — sim, vale MUITO a pena. Os eventos pagos (como o CAD Kom Loi) incluem transporte, lanternas, krathong, buffet e assento reservado. No guia, mostramos exatamente onde comprar ingressos oficiais e como evitar golpes com ingressos falsos." },
  { q: "Quanto vou gastar na viagem toda?", a: "Depende do seu estilo! No guia detalhamos dois planos: o Econômico (a partir de ~R$ 200 para 3 noites em Chiang Mai, sem contar voos) e o Conforto (a partir de ~R$ 1.100). Com nossas dicas de câmbio, alimentação em mercados de rua (refeições a partir de R$ 5!) e transporte local, você economiza facilmente mais de R$ 800." },
  { q: "E se chover durante o festival?", a: "Novembro é início da estação seca, mas chuvas leves podem ocorrer. No guia incluímos um plano B completo: templos iluminados, restaurantes cobertos, espetáculos de dança e mercados internos. Você não perde nenhum dia da viagem!" },
  { q: "Posso soltar lanternas em qualquer lugar?", a: "NÃO! Essa é uma das maiores armadilhas. O lançamento no centro da cidade é PROIBIDO por causa do aeroporto e risco de incêndio. Quem faz isso pode ser multado. No guia mostramos exatamente onde é permitido e seguro — apenas em eventos organizados e locais designados." },
  { q: "O guia serve para quem viaja sozinho(a)?", a: "Absolutamente! Temos uma seção dedicada a viajantes solo com dicas de segurança, hospedagem ideal, e como se juntar a grupos nos eventos. Muitos dos nossos clientes viajam sozinhos e dizem que o guia foi como ter um amigo local ao lado." },
  { q: "Recebo o guia na hora?", a: "Sim! Após a confirmação do pagamento, você recebe acesso imediato ao guia completo em formato digital. Pode acessar do celular, tablet ou computador — ideal para consultar durante a viagem." },
  { q: "E se eu não gostar do guia?", a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é ZERO." },
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-20 md:py-28 px-4">
      <StructuredData data={faqSchema} />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
          Perguntas{" "}
          <span className="text-gradient-gold">Frequentes</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">
          Tire todas as suas dúvidas antes de garantir o seu guia.
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
};

export default FAQSection;
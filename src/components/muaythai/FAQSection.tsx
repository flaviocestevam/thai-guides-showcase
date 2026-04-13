import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "O guia é digital ou físico?",
    a: "100% digital. Você recebe acesso imediato após o pagamento e pode ler no celular, tablet ou computador. Perfeito para levar na viagem.",
  },
  {
    q: "Preciso ter experiência em Muay Thai?",
    a: "Não! O guia cobre academias para todos os níveis — do iniciante absoluto ao lutador avançado. Cada academia tem indicação de perfil ideal.",
  },
  {
    q: "Preciso estar planejando uma viagem agora?",
    a: "Não. O guia tem acesso vitalício com atualizações gratuitas. Compre agora no preço promocional e use quando quiser.",
  },
  {
    q: "Como sei que as academias são realmente boas?",
    a: "Todas foram visitadas pessoalmente. O guia inclui reviews reais de alunos, preços atualizados, fotos e contatos diretos.",
  },
  {
    q: "E se eu não gostar?",
    a: "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.",
  },
  {
    q: "O guia serve para quem vai em grupo/casal?",
    a: "Sim! Os roteiros funcionam para solo, casal, grupo ou família. E você pode compartilhar com quem viaja com você.",
  },
  {
    q: "Quanto custa treinar Muay Thai na Tailândia?",
    a: "Depende da cidade e do camp. O guia detalha: R$ 3.700 a R$ 12.000/mês tudo incluso (treino, acomodação, comida, transporte). Chiang Mai é a mais barata.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-display text-center mb-10"
        >
          Perguntas Frequentes
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
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

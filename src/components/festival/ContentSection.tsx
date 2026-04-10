import { MapPin, Camera, BookOpen, HelpCircle, Plane, Hotel, Utensils, Thermometer } from "lucide-react";

const modules = [
  {
    icon: Plane,
    title: "Como Chegar: Bangkok → Chiang Mai",
    items: [
      "Avião (1h15min), trem noturno (12-15h), ônibus VIP e transfer privado",
      "Comparativo de preços, vantagens e desvantagens de cada opção",
      "Dicas para economizar até 70% nas passagens reservando com antecedência",
      "Links e apps para reservas diretas sem intermediários",
    ],
  },
  {
    icon: Hotel,
    title: "Onde Se Hospedar",
    items: [
      "Cidade Antiga: acesso direto a templos e eventos gratuitos",
      "Riverside: vista para o rio Ping e Loy Krathong na sua porta",
      "Nimmanhaemin: cafeterias trendy, butiques e vida noturna",
      "Faixa de preço por área: de hostels (R$ 30/noite) a hotéis 4★",
    ],
  },
  {
    icon: MapPin,
    title: "Roteiros Dia a Dia Testados",
    items: [
      "Roteiro 3 dias / 2 noites: intenso e otimizado",
      "Roteiro 4 dias / 3 noites: completo e relaxado",
      "Plano B para cada dia em caso de chuva",
      "Horários exatos de eventos, transportes e pontos de encontro",
    ],
  },
  {
    icon: Camera,
    title: "Fotografia e Vídeo Profissional",
    items: [
      "Configurações de câmera: abertura f/1.8-f/4, ISO 800-3200",
      "Hora dourada e hora azul: melhores momentos para fotografar",
      "Técnicas de composição: regra dos terços e linhas guia",
      "Câmera lenta para capturar lanternas subindo ao céu",
    ],
  },
  {
    icon: BookOpen,
    title: "Significado Espiritual Profundo",
    items: [
      "Yi Peng: liberação de negatividade e reverência a Buda",
      "Loy Krathong: oferendas à Deusa da Água e purificação",
      "Rituais sagrados e como participar com respeito autêntico",
      "A história milenar do Reino de Lanna",
    ],
  },
  {
    icon: Utensils,
    title: "Gastronomia e Cultura Local",
    items: [
      "Melhores mercados noturnos e comida de rua (refeições a partir de R$ 5)",
      "Etiqueta cultural: templos, monges, o 'Wai' e comportamento",
      "Frases essenciais em tailandês com pronúncia para brasileiros",
      "Dicas de negociação nos mercados: comece por 50-60% do preço",
    ],
  },
  {
    icon: HelpCircle,
    title: "Documentação e Entrada",
    items: [
      "Isenção de visto de 90 dias para brasileiros",
      "Certificado de Febre Amarela OBRIGATÓRIO — como tirar",
      "Passaporte: validade mínima de 6 meses",
      "Seguro viagem, comprovantes e checklist de imigração",
    ],
  },
  {
    icon: Thermometer,
    title: "Clima e O Que Levar",
    items: [
      "Novembro: estação seca, dias quentes e noites frescas",
      "Roupas adequadas para templos (ombros e joelhos cobertos)",
      "Checklist completo: eSIM, power bank, adaptador, medicamentos",
      "Apps indispensáveis: Grab, Google Maps, Google Translate",
    ],
  },
];

const ContentSection = () => (
  <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
        Tudo Que Você Vai{" "}
        <span className="text-gradient-gold">Dominar Com o Guia</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-14 font-body">
        Conteúdo prático, testado e atualizado por quem viveu o festival. Cada capítulo foi criado para eliminar uma dúvida, evitar um erro e multiplicar sua experiência.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((m) => (
          <div key={m.title} className="bg-card border-glow rounded-xl p-7 hover:glow-orange transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg">{m.title}</h3>
            </div>
            <ul className="space-y-3">
              {m.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                  <span className="text-primary mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentSection;
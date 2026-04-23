import { useEffect } from "react";
import { Mountain, Compass, Map, Sparkles, Calendar, Lightbulb } from "lucide-react";
import heroTrekking from "@/assets/trilhas/hero-trekking.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TrailCard } from "@/components/trilhas/TrailCard";
import {
  cities,
  secretTrails,
  itineraries,
  costTable,
  apps,
  commonMistakes,
  respectNature,
  equipment,
} from "@/data/trilhas";

const GuiaTrilhasThai44 = () => {
  useEffect(() => {
    document.title = "Guia Trilhas Tailândia — Trekking, Roteiros e Custos";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Guia completo de trilhas e trekking na Tailândia: 30+ rotas, roteiros prontos, custos e dicas práticas para cada nível.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  const tips = [
    { title: "Melhor época", text: "Novembro a Fevereiro: seca, fresca e céu limpo. Março-Maio: muito quente (35-40°C). Junho-Outubro: chuvas intensas — muitas trilhas fecham." },
    { title: "Clima e altitude", text: "No norte (Chiang Mai/Chiang Rai) as noites podem chegar a 5°C em dezembro. No sul, sempre quente e úmido. Trilhas em altitude são mais frescas." },
    { title: "O que levar", text: "Tênis com aderência (NUNCA chinelo), garrafa d'água 1L+, repelente forte, protetor solar, capa de chuva leve, lanterna de cabeça, meias altas." },
    { title: "Sanguessugas e insetos", text: "Sanguessugas são comuns na estação chuvosa em trilhas do norte e Khao Sok. Inofensivas mas desagradáveis. Use meias compridas e repelente com DEET." },
    { title: "Água e hidratação", text: "Beba pelo menos 2L por trilha. NUNCA beba água de rio/cachoeira. Leve pastilhas purificadoras ou compre água antes. Desidratação é o risco #1." },
    { title: "Segurança", text: "Sempre avise alguém do seu roteiro. Use AllTrails ou Maps.me offline. Cobra e escorpião existem — olhe onde pisa. Seguro viagem é OBRIGATÓRIO." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-serif text-lg md:text-xl font-bold text-primary">
            <Mountain className="w-5 h-5" /> Guia Trekking Tailândia
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:text-primary transition">Como Funciona</a>
            <a href="#trilhas" className="hover:text-primary transition">Trilhas</a>
            <a href="#roteiros" className="hover:text-primary transition">Roteiros</a>
            <a href="#dicas" className="hover:text-primary transition">Dicas</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroTrekking} alt="Trilha de trekking na selva tailandesa" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-primary uppercase mb-6">Guia Completo</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
            Trilhas e Trekking <span className="block text-primary italic">na Tailândia</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            O guia definitivo para explorar as melhores trilhas da Tailândia. Onde ir, quanto custa, como chegar e roteiros prontos para cada nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              <a href="#trilhas">Ver Trilhas</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-semibold px-8">
              <a href="#como-funciona">Como Funciona</a>
            </Button>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-3">📍 Navegação Rápida</h2>
          <p className="text-center text-muted-foreground mb-8">Clique para ir direto ao que você procura</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { href: "#por-que", label: "Por que a Tailândia?" },
              { href: "#como-funciona", label: "Como Funciona" },
              { href: "#trilhas", label: "Todas as Trilhas" },
              { href: "#trilhas-secretas", label: "Trilhas Secretas" },
              { href: "#roteiros", label: "Roteiros Prontos" },
              { href: "#dicas", label: "Dicas & Custos" },
            ].map((l) => (
              <Button key={l.href} variant="outline" size="sm" asChild>
                <a href={l.href}>{l.label}</a>
              </Button>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mb-4">Ir direto para a cidade</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <Button key={c.id} variant="secondary" size="sm" asChild>
                <a href={`#${c.id}`}>
                  {c.emoji} {c.name.split(" ")[0]}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 1 */}
      <section id="por-que" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <Badge variant="outline" className="mb-4">Capítulo 1</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Por que este guia existe</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Vou ser direto: <strong className="text-foreground">a Tailândia tem mais de 100 parques nacionais</strong> com trilhas incríveis, mas a maioria dos turistas nunca sai das praias e templos. Eu passei 6 meses explorando trilhas em todas as regiões — desde florestas nubladas a 2.500m até cânions de arenito e selvas tropicais mais antigas que a Amazônia.
            </p>
            <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
              <p className="text-foreground">
                🎯 <strong>A promessa deste guia:</strong> Vou te mostrar exatamente onde trilhar, quanto vai custar, como chegar, o que esperar e como evitar armadilhas. Sem enrolação, sem marketing. Apenas a verdade de quem já caminhou cada metro dessas trilhas.
              </p>
            </div>
            <p>
              Se você está pensando em fazer trekking na Tailândia — seja uma trilha de 2 horas ou uma expedição de 3 dias — este guia vai te economizar <strong className="text-foreground">horas de pesquisa, centenas de dólares e muita frustração</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* CHAPTER 2 - HOW IT WORKS */}
      <section id="como-funciona" className="py-20 md:py-28 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Badge variant="outline" className="mb-4">Capítulo 2</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">Como funciona trekking na Tailândia</h2>
          <p className="text-lg text-muted-foreground mb-12">Tudo que você precisa saber antes de colocar as botas e cair na trilha.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((t) => (
              <Card key={t.title} className="p-6 border-border/50 bg-card/50">
                <h4 className="font-serif text-xl font-bold mb-3 text-primary">{t.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
              </Card>
            ))}
          </div>

          <Card className="mt-10 p-8 border-border/50 bg-card/50">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              🎒 Lista de Equipamentos Essenciais
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {equipment.map((e, i) => (
                <p key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary">•</span> {e}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CHAPTER 3 - TRAILS */}
      <section id="trilhas" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <Badge variant="outline" className="mb-4">Capítulo 3</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">As Melhores Trilhas por Cidade</h2>
          <p className="text-lg text-muted-foreground mb-16 max-w-3xl">
            30+ trilhas em 10 regiões, incluindo ilhas paradisíacas e parques nacionais. Avaliadas com base em beleza, acessibilidade, custo-benefício e experiência para estrangeiros.
          </p>

          {cities.map((city) => (
            <div key={city.id} id={city.id} className="mb-20 scroll-mt-24">
              <div className="mb-10">
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">
                  {city.emoji} {city.name}
                </h3>
                <p className="text-muted-foreground max-w-3xl">{city.description}</p>
              </div>
              <div className="space-y-8">
                {city.trails.map((t) => (
                  <TrailCard key={t.id} trail={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECRET TRAILS */}
      <section id="trilhas-secretas" className="py-20 md:py-28 bg-gradient-to-b from-muted/20 to-background border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Badge className="mb-4 bg-primary text-primary-foreground"><Sparkles className="w-3 h-3 mr-1" />Exclusivo deste guia</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">🤫 Trilhas Secretas</h2>
          <p className="text-xl text-primary font-semibold mb-3">Que poucos conhecem</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Praias escondidas, jardins místicos, cavernas com praias secretas e trilhas que nem 1% dos turistas conhece. Esses são os tesouros que só quem pesquisa de verdade encontra.
          </p>
          <div className="space-y-8">
            {secretTrails.map((t) => (
              <TrailCard key={t.id} trail={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 4 - ITINERARIES */}
      <section id="roteiros" className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <Badge variant="outline" className="mb-4"><Calendar className="w-3 h-3 mr-1" />Capítulo 4</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">Roteiros Prontos</h2>
          <p className="text-lg text-muted-foreground mb-12">3 roteiros testados e aprovados. Só copiar e colar no seu planejamento.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {itineraries.map((it) => (
              <Card key={it.title} className="p-6 border-border/50 bg-card/50 flex flex-col">
                <Badge variant="secondary" className="mb-3 self-start">{it.level}</Badge>
                <h3 className="font-serif text-2xl font-bold mb-2">{it.title}</h3>
                <p className="text-sm text-primary font-semibold mb-6">{it.route}</p>
                <div className="space-y-4">
                  {it.days.map((d) => (
                    <div key={d.day}>
                      <p className="text-xs uppercase tracking-wider font-bold text-primary mb-1">{d.day}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 5 - TIPS & COSTS */}
      <section id="dicas" className="py-20 md:py-28 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <Badge variant="outline" className="mb-4"><Lightbulb className="w-3 h-3 mr-1" />Capítulo 5</Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">Dicas Essenciais e Custos</h2>
          <p className="text-lg text-muted-foreground mb-12">O que ninguém te conta sobre trekking na Tailândia.</p>

          <Card className="p-6 md:p-8 mb-10 border-border/50 bg-card/50 overflow-hidden">
            <h3 className="font-serif text-2xl font-bold mb-6">💰 Tabela de Custos</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-2 font-semibold">Item</th>
                    <th className="text-left py-3 px-2 font-semibold">Custo (THB)</th>
                    <th className="text-left py-3 px-2 font-semibold">Custo (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {costTable.map((c) => (
                    <tr key={c.item} className="border-b border-border/30">
                      <td className="py-3 px-2 text-muted-foreground">{c.item}</td>
                      <td className="py-3 px-2 font-semibold">{c.thb}</td>
                      <td className="py-3 px-2 font-semibold text-primary">{c.brl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Card className="p-6 border-border/50 bg-card/50">
              <h3 className="font-serif text-xl font-bold mb-4">📱 Apps Essenciais</h3>
              <ul className="space-y-3">
                {apps.map((a) => (
                  <li key={a.name} className="text-sm">
                    <a href={a.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                      {a.name}
                    </a>
                    <span className="text-muted-foreground"> — {a.desc}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-border/50 bg-card/50">
              <h3 className="font-serif text-xl font-bold mb-4">🚩 Erros Comuns</h3>
              <ul className="space-y-2">
                {commonMistakes.map((m, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: "• " + m.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>') }}
                  />
                ))}
              </ul>
            </Card>
          </div>

          <Card className="p-6 md:p-8 border-border/50 bg-gradient-to-br from-emerald-500/5 to-primary/5">
            <h3 className="font-serif text-xl font-bold mb-4">🌍 Respeite a Natureza e as Comunidades</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {respectNature.map((r, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: "• " + r.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>') }}
                />
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-primary mb-3">
            <Mountain className="w-5 h-5" />
            <span className="font-serif font-bold text-lg">Guia Trekking Tailândia</span>
          </div>
          <p className="text-sm text-muted-foreground">Trilhas, roteiros e dicas reais para sua aventura na Tailândia.</p>
        </div>
      </footer>
    </div>
  );
};

export default GuiaTrilhasThai44;

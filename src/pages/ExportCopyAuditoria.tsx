import { useMemo, useRef, useState } from "react";
import type { SalesContent } from "@/components/sales/SalesPage";

import { aluguelDeMotos } from "@/data/sales/aluguelDeMotos";
import { aventureiros } from "@/data/sales/aventureiros";
import { beachClubs } from "@/data/sales/beachClubs";
import { cafesCoworkings } from "@/data/sales/cafesCoworkings";
import { casasDeMassagem } from "@/data/sales/casasDeMassagem";
import { clubesStrip } from "@/data/sales/clubesStrip";
import { criancas } from "@/data/sales/criancas";
import { cursosDeMassagem } from "@/data/sales/cursosDeMassagem";
import { goGoBars } from "@/data/sales/goGoBars";
import { mergulho } from "@/data/sales/mergulho";
import { pets } from "@/data/sales/pets";
import { retiros } from "@/data/sales/retiros";
import { reveillon } from "@/data/sales/reveillon";
import { topHostels } from "@/data/sales/topHostels";
import { ilhas, ilhasMeta } from "@/data/sales/ilhas";

type Entry = { categoria: string; nome: string; data: SalesContent };

const tematicos: Entry[] = [
  { categoria: "Temáticos", nome: "Aluguel de Motos", data: aluguelDeMotos },
  { categoria: "Temáticos", nome: "Aventureiros", data: aventureiros },
  { categoria: "Temáticos", nome: "Beach Clubs", data: beachClubs },
  { categoria: "Temáticos", nome: "Cafés e Coworkings", data: cafesCoworkings },
  { categoria: "Temáticos", nome: "Casas de Massagem", data: casasDeMassagem },
  { categoria: "Temáticos", nome: "Clubes de Strip", data: clubesStrip },
  { categoria: "Temáticos", nome: "Tailândia para Crianças", data: criancas },
  { categoria: "Temáticos", nome: "Cursos de Massagem", data: cursosDeMassagem },
  { categoria: "Temáticos", nome: "Go-Go Bars", data: goGoBars },
  { categoria: "Temáticos", nome: "Mergulho", data: mergulho },
  { categoria: "Temáticos", nome: "Tailândia para Pets", data: pets },
  { categoria: "Temáticos", nome: "Retiros", data: retiros },
  { categoria: "Temáticos", nome: "Réveillon", data: reveillon },
  { categoria: "Temáticos", nome: "Top Hostels", data: topHostels },
];

const ilhasEntries: Entry[] = ilhasMeta
  .filter((m) => ilhas[m.slug])
  .map((m) => ({ categoria: "Ilhas", nome: m.nome, data: ilhas[m.slug] }));

const allEntries: Entry[] = [...tematicos, ...ilhasEntries];

function dump(e: Entry): string {
  const d = e.data;
  const L: string[] = [];
  L.push("================================================================");
  L.push(`CATEGORIA: ${e.categoria}`);
  L.push(`PÁGINA: ${e.nome}`);
  L.push(`SLUG: /${d.slug}`);
  L.push("================================================================");
  L.push("");
  L.push("[SEO]");
  L.push(`Title: ${d.seoTitle}`);
  L.push(`Description: ${d.seoDescription}`);
  L.push("");
  L.push("[HERO]");
  L.push(`Badge: ${d.heroBadge}`);
  L.push(`Title: ${d.heroTitle}`);
  L.push(`Highlight: ${d.heroHighlight}`);
  L.push(`Subtitle: ${d.heroSubtitle}`);
  L.push(`Warning: ${d.heroWarning}`);
  L.push(`Emoji: ${d.heroEmoji}`);
  L.push(`CTA Text: ${d.ctaText}`);
  L.push(`CTA Link: ${d.ctaLink}`);
  L.push("");
  L.push("[DORES / PAINS]");
  d.pains.forEach((p, i) => {
    L.push(`${i + 1}. ${p.title}`);
    L.push(`   ${p.desc}`);
  });
  L.push("");
  L.push("[FEATURES]");
  d.features.forEach((f, i) => {
    L.push(`${i + 1}. ${f.title}`);
    L.push(`   ${f.desc}`);
  });
  L.push("");
  L.push("[COMPARAÇÃO - SEM O GUIA]");
  d.comparison.theirs.forEach((t) => L.push(`- ${t}`));
  L.push("");
  L.push("[COMPARAÇÃO - COM O GUIA]");
  d.comparison.ours.forEach((t) => L.push(`- ${t}`));
  L.push("");
  L.push("[AUTORIDADE]");
  L.push(`Título: ${d.authority.title}`);
  d.authority.paragraphs.forEach((p) => {
    L.push("");
    L.push(p);
  });
  L.push("");
  L.push("Bullets:");
  d.authority.bullets.forEach((b) => L.push(`- ${b}`));
  L.push("");
  L.push("[MÓDULOS / CONTEÚDO DO GUIA]");
  d.modules.forEach((m, i) => {
    L.push(`Módulo ${i + 1}: ${m.title}`);
    L.push(`Descrição: ${m.desc}`);
    m.bullets.forEach((b) => L.push(`  • ${b}`));
    L.push("");
  });
  L.push("[BÔNUS]");
  d.bonuses.forEach((b, i) => {
    L.push(`${i + 1}. ${b.title} (${b.value})`);
    L.push(`   ${b.desc}`);
  });
  L.push("");
  L.push("[DEPOIMENTOS]");
  d.testimonials.forEach((t, i) => {
    L.push(`${i + 1}. ${t.name} — ${t.city}`);
    L.push(`   "${t.text}"`);
  });
  L.push("");
  L.push("[PRICING]");
  L.push(`Badge: ${d.pricing.badge}`);
  L.push(`De: ${d.pricing.oldPrice}`);
  L.push(`Por: R$ ${d.pricing.price},${d.pricing.priceCents}`);
  L.push(`Parcelamento: ${d.pricing.installments}`);
  L.push("Inclui:");
  d.pricing.includes.forEach((i) => L.push(`- ${i}`));
  L.push("");
  L.push("[GARANTIA]");
  L.push(`Dias: ${d.guarantee.days}`);
  L.push(`Título: ${d.guarantee.title}`);
  L.push(`Texto: ${d.guarantee.text}`);
  L.push("");
  L.push("[FAQ]");
  d.faqs.forEach((f, i) => {
    L.push(`P${i + 1}: ${f.q}`);
    L.push(`R${i + 1}: ${f.a}`);
  });
  L.push("");
  L.push("[CTA FINAL]");
  L.push(`Título: ${d.finalCTA.title}`);
  L.push(`Subtítulo: ${d.finalCTA.subtitle}`);
  L.push("");
  L.push("");
  return L.join("\n");
}

const PILARES_NOTE = `================================================================
CATEGORIA: Pilares
================================================================
As 6 páginas-pilar (Festival das Lanternas, Lantern Festival, Santuários
de Elefantes, Muay Thai, Muay Thai 5645, Guia de Trilhas, Festas) têm o
conteúdo escrito diretamente nos componentes JSX (src/components/lantern/*,
src/components/festival/*, src/components/muaythai/*, src/components/trilhas/*
e src/pages/Festas.tsx) e não em arquivos de dados estruturados.

Para auditar a copy dessas páginas, abra cada URL diretamente:
- /festivaldaslanternas
- /lanternfestival
- /santuariosdeelefantes
- /muaythai
- /festas
- /guiatrilhasthai

(As rotas /muaythai5645 e /guiatrilhasthai44 são GUIAS PAGOS — não auditar.)

`;

export default function ExportCopyAuditoria() {
  const fullText = useMemo(() => {
    const header = `EXPORT DE COPY — AUDITORIA\nTotal de páginas estruturadas: ${allEntries.length}\nGerado em: ${new Date().toISOString()}\n\n`;
    return header + PILARES_NOTE + allEntries.map(dump).join("\n");
  }, []);

  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      if (preRef.current) {
        const range = document.createRange();
        range.selectNodeContents(preRef.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  const download = () => {
    const blob = new Blob([fullText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `copy-auditoria-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e5e5e5", padding: "24px" }}>
      <div style={{ position: "sticky", top: 0, background: "#0a0a0a", padding: "12px 0", borderBottom: "1px solid #333", marginBottom: 16, display: "flex", gap: 12, flexWrap: "wrap", zIndex: 10 }}>
        <button
          onClick={copyAll}
          style={{ padding: "10px 18px", background: copied ? "#22c55e" : "#facc15", color: "#000", fontWeight: 700, border: 0, borderRadius: 6, cursor: "pointer" }}
        >
          {copied ? "✓ Copiado!" : "📋 Copiar todo o conteúdo"}
        </button>
        <button
          onClick={download}
          style={{ padding: "10px 18px", background: "#3b82f6", color: "#fff", fontWeight: 700, border: 0, borderRadius: 6, cursor: "pointer" }}
        >
          ⬇️ Baixar .txt
        </button>
        <span style={{ alignSelf: "center", fontSize: 13, opacity: 0.7 }}>
          {allEntries.length} páginas estruturadas • {fullText.length.toLocaleString()} caracteres
        </span>
      </div>
      <pre
        ref={preRef}
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 13,
          lineHeight: 1.55,
          margin: 0,
        }}
      >
        {fullText}
      </pre>
    </div>
  );
}

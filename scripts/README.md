# Scripts utilitários

## `check-trail-links.mjs`

Verifica todos os links e imagens do guia de trilhas (`src/data/trilhas.ts`).

### Uso

```bash
# Relatório colorido no terminal
node scripts/check-trail-links.mjs

# Saída JSON (para CI ou processamento)
node scripts/check-trail-links.mjs --json
```

### O que ele faz

1. **Faz parse** de `src/data/trilhas.ts` extraindo todas as trilhas (id, título, local, mapsUrl, bookUrl, imagem).
2. **Verifica imagens locais** — confere se cada `import` aponta para um arquivo em `src/assets/trilhas/` que exista e não esteja vazio.
3. **Verifica URLs HTTP** — faz requisições HEAD (com fallback para GET) em paralelo:
   - `mapsUrl` → links do Google Maps de cada trilha
   - `bookUrl` → links de reserva de guia (quando existem)
4. **Imprime um relatório** agrupado por trilha, mostrando apenas as que têm problemas.
5. Sai com **código 1** se houver qualquer link quebrado ou imagem faltando (útil para CI).

### Notas

- Sites como Klook e Booking frequentemente retornam **HTTP 403** para bots, mesmo que funcionem no navegador real. Confira manualmente esses casos antes de remover/trocar o link.
- Timeout por requisição: 12s. Concorrência: 8 requisições simultâneas.

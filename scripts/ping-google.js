// Reenvia o sitemap ao Google Search Console no postbuild.
// Usa o connector gateway do Lovable (Google Search Console).
// Pula sem erro se as variáveis não estiverem disponíveis (ex.: build local).

const HOST = "guiastailandia.com.br";
const SITE = `https://${HOST}/`;
const SITEMAP = `${SITE}sitemap.xml`;
const TIMEOUT_MS = 10_000;

async function main() {
  const lovableKey = process.env.LOVABLE_API_KEY;
  const gscKey = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;

  if (!lovableKey || !gscKey) {
    console.log("Google ping pulado: credenciais do connector indisponíveis.");
    return;
  }

  const url = `https://connector-gateway.lovable.dev/google_search_console/webmasters/v3/sites/${encodeURIComponent(
    SITE,
  )}/sitemaps/${encodeURIComponent(SITEMAP)}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: "PUT",
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gscKey,
      },
    });

    if (res.ok || res.status === 204) {
      console.log(`✓ Google: sitemap reenviado (HTTP ${res.status})`);
    } else {
      console.warn(`⚠ Google falhou (HTTP ${res.status}): ${await res.text()}`);
    }
  } catch (error) {
    console.warn("⚠ Google ping pulado:", error?.message ?? error);
  } finally {
    clearTimeout(timeout);
  }
}

main().catch((e) => {
  console.warn("⚠ Google erro:", e?.message ?? e);
});

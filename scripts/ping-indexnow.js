// Notifica Bing/Yandex/DuckDuckGo via IndexNow após o build.
// Roda no `postbuild`. Google NÃO suporta IndexNow — para o Google,
// confiamos no <lastmod> do sitemap (descoberta automática) e
// "Solicitar indexação" manual no Search Console quando necessário.

import { readFileSync } from "fs";
import { resolve } from "path";

const HOST = "guiastailandia.com.br";
const KEY = "7e407e63e8ec192d7a599cec71166ce9";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const TIMEOUT_MS = 10_000;

async function main() {
  let urls;
  try {
    urls = JSON.parse(
      readFileSync(resolve(".indexnow-urls.json"), "utf8"),
    );
  } catch {
    console.log("IndexNow: nenhum arquivo de URLs encontrado, pulando.");
    return;
  }

  if (!Array.isArray(urls) || urls.length === 0) {
    console.log("IndexNow: lista de URLs vazia ou inválida, pulando.");
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });

    if (res.ok || res.status === 202) {
      console.log(`✓ IndexNow: ${urls.length} URLs notificadas (HTTP ${res.status})`);
    } else {
      console.warn(`⚠ IndexNow falhou (HTTP ${res.status}): ${await res.text()}`);
    }
  } catch (error) {
    console.warn("⚠ IndexNow pulado:", error?.message ?? error);
  } finally {
    clearTimeout(timeout);
  }
}

main().catch((e) => {
  console.warn("⚠ IndexNow erro:", e?.message ?? e);
});

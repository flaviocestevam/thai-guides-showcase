import { useEffect, useState } from "react";

const APP_ID = "1578474360745868";
const AD_ACCOUNT_ID = "1644852740094318";
const PIXEL_ID = "1543028960501772";
const API_VERSION = "v26.0";
const TOKEN_KEY = "meta_access_token";
const ATTEMPT_KEY = "meta_oauth_attempted";

type Audience = { id?: string; name?: string; retention_days?: number };

const specs = [
  {
    name: "RMK - Festival - Visitou Pagina 7D",
    description: "Visitou /festivaldaslanternas nos ultimos 7 dias.",
    retention_days: 7,
    filters: [{ field: "url", operator: "i_contains", value: "festivaldaslanternas" }],
  },
  {
    name: "RMK - Festival - InitiateCheckout 7D",
    description: "Iniciou checkout nos ultimos 7 dias.",
    retention_days: 7,
    filters: [{ field: "event", operator: "eq", value: "InitiateCheckout" }],
  },
  {
    name: "RMK - Compradores Festival 180D",
    description: "Compradores Purchase nos ultimos 180 dias.",
    retention_days: 180,
    filters: [{ field: "event", operator: "eq", value: "Purchase" }],
  },
];

function rule(filters: Array<Record<string, unknown>>, days: number) {
  return {
    inclusions: {
      operator: "or",
      rules: [
        {
          event_sources: [{ id: PIXEL_ID, type: "pixel" }],
          retention_seconds: days * 86400,
          filter: { operator: "and", filters },
        },
      ],
    },
  };
}

async function graph(path: string, token: string, method = "GET", body?: Record<string, unknown>) {
  let url = `https://graph.facebook.com/${API_VERSION}/${path}`;
  const init: RequestInit = { method };

  if (method === "GET") {
    url += (url.includes("?") ? "&" : "?") + "access_token=" + encodeURIComponent(token);
  } else {
    const form = new URLSearchParams();
    form.set("access_token", token);
    Object.entries(body || {}).forEach(([k, v]) => {
      form.set(k, typeof v === "string" ? v : JSON.stringify(v));
    });
    init.body = form;
  }

  const response = await fetch(url, init);
  const json = await response.json();
  if (!response.ok || json?.error) {
    throw new Error(json?.error?.error_user_msg || json?.error?.message || `HTTP ${response.status}`);
  }
  return json;
}

async function listAudiences(token: string): Promise<Audience[]> {
  const res = await graph(
    `act_${AD_ACCOUNT_ID}/customaudiences?fields=id,name,retention_days&limit=200`,
    token
  );
  return res.data || [];
}

async function createAudience(token: string, spec: (typeof specs)[number]) {
  return graph(`act_${AD_ACCOUNT_ID}/customaudiences`, token, "POST", {
    name: spec.name,
    description: spec.description,
    pixel_id: PIXEL_ID,
    retention_days: spec.retention_days,
    prefill: true,
    rule: rule(spec.filters, spec.retention_days),
  });
}

export default function MetaRemarketing() {
  const [status, setStatus] = useState("Preparando conexão com a Meta...");
  const [details, setDetails] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const redirectUri = typeof window !== "undefined"
    ? `${window.location.origin}/meta-remarketing`
    : "https://guiastailandia.com.br/meta-remarketing";

  const connect = () => {
    sessionStorage.setItem(ATTEMPT_KEY, "1");
    const params = new URLSearchParams({
      client_id: APP_ID,
      redirect_uri: redirectUri,
      response_type: "token",
      scope: "ads_management,business_management",
      state: "guias-tailandia-rmk",
    });
    window.location.href = `https://www.facebook.com/${API_VERSION}/dialog/oauth?${params.toString()}`;
  };

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const fromHash = hash.get("access_token");
    if (fromHash) {
      sessionStorage.setItem(TOKEN_KEY, fromHash);
      sessionStorage.removeItem(ATTEMPT_KEY);
      history.replaceState(null, "", "/meta-remarketing");
      setToken(fromHash);
      return;
    }

    const stored = sessionStorage.getItem(TOKEN_KEY);
    if (stored) {
      setToken(stored);
      return;
    }

    setStatus("Redirecionando para autorização da Meta...");
    const timer = window.setTimeout(connect, 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!token) return;

    (async () => {
      try {
        setError("");
        setStatus("Validando GT1 e Pixel...");
        await Promise.all([
          graph("me?fields=id,name", token),
          graph(`act_${AD_ACCOUNT_ID}?fields=id,name,account_status,currency`, token),
          graph(`${PIXEL_ID}?fields=id,name,last_fired_time`, token),
        ]);

        setStatus("Verificando públicos existentes...");
        let existing = await listAudiences(token);
        const names = new Set(existing.map((a) => a.name));
        const created: string[] = [];

        for (const spec of specs) {
          if (names.has(spec.name)) continue;
          setStatus(`Criando: ${spec.name}`);
          const result = await createAudience(token, spec);
          created.push(`${spec.name} — ID ${result.id}`);
          names.add(spec.name);
        }

        existing = await listAudiences(token);
        const wanted = existing.filter((a) => specs.some((s) => s.name === a.name));
        setDetails(wanted.map((a) => `${a.name} — ID ${a.id}`));
        setStatus(created.length ? `Configuração concluída. ${created.length} público(s) criado(s).` : "Configuração concluída. Nenhum duplicado criado.");
      } catch (e) {
        setError(e instanceof Error ? e.message : String(e));
        setStatus("A Meta devolveu um erro.");
      }
    })();
  }, [token]);

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">Meta Remarketing — Guias Tailândia</h1>
        <p className="mt-2 text-slate-600">GT1 • Pixel {PIXEL_ID}</p>

        <section className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Status</h2>
          <p className="mt-3">{status}</p>

          {error && (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          {details.length > 0 && (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
              <strong>Configuração concluída</strong>
              <ul className="mt-2 space-y-1">
                {details.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}

          {!token && (
            <button
              onClick={connect}
              className="mt-5 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
            >
              Conectar Facebook/Meta
            </button>
          )}
        </section>
      </div>
    </main>
  );
}

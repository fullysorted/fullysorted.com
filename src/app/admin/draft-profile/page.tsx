"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Sparkles } from "lucide-react";
import { CATEGORY_OPTIONS } from "@/lib/service-categories";

// Phone-friendly front end for POST /api/admin/providers/draft.
// Paste shops one per line, draft them, edit, then hand the kept rows to
// /admin/seed-providers, which does the dry run and the staging. Nothing on
// this page writes to the database.

type Draft = {
  businessName: string;
  category: string;
  location: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  yearsInBusiness: string | null;
  description: string;
  specialties: string;
  marques: string[];
  workSettings: string[];
  sources: { url: string; used_for: string }[];
  confidence: string;
  gaps: string[];
  claimQuestions: string[];
  outreachHook: string;
};
type Row = {
  key: string;
  line: string;
  state: "queued" | "drafting" | "done" | "error";
  draft?: Draft;
  warnings?: string[];
  usd?: number;
  error?: string;
  keep: boolean;
};

const SEED_HANDOFF_KEY = "fs_seed_payload";

function parseLine(line: string) {
  const [businessName = "", website = "", location = "", category = "", ...rest] = line.split("|").map((s) => s.trim());
  return { businessName, website, location, category, notes: rest.join(" | ") };
}

export default function DraftProfilePage() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [best, setBest] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState("");

  const update = (key: string, patch: Partial<Row>) =>
    setRows((rs) => rs.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  const updateDraft = (key: string, patch: Partial<Draft>) =>
    setRows((rs) => rs.map((r) => (r.key === key && r.draft ? { ...r, draft: { ...r.draft, ...patch } } : r)));

  async function draftOne(row: Row) {
    update(row.key, { state: "drafting" });
    try {
      const res = await fetch("/api/admin/providers/draft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parseLine(row.line), quality: best ? "best" : "standard" }),
      });
      const d = await res.json().catch(() => ({}));
      if (res.status === 401) throw new Error("Not signed in. Sign in at /admin first.");
      if (!res.ok) throw new Error(d.error || `Failed (${res.status})`);
      update(row.key, { state: "done", draft: d.draft, warnings: d.warnings, usd: d.usd, keep: true });
    } catch (e) {
      update(row.key, { state: "error", error: (e as Error).message });
    }
  }

  async function run() {
    setError("");
    const lines = text.split("\n").map((l) => l.trim()).filter((l) => l && parseLine(l).businessName);
    if (!lines.length) { setError("Paste at least one line: Name | website | City, ST"); return; }
    if (lines.length > 25) { setError(`That is ${lines.length} shops. Draft 25 at a time so a phone screen stays usable.`); return; }
    const fresh: Row[] = lines.map((line, i) => ({ key: `${Date.now()}-${i}`, line, state: "queued", keep: false }));
    setRows(fresh);
    setRunning(true);
    // Two at a time: quick enough, and gentle on the rate limit.
    const queue = [...fresh];
    await Promise.all([0, 1].map(async () => {
      for (let r = queue.shift(); r; r = queue.shift()) await draftOne(r);
    }));
    setRunning(false);
  }

  function seedPayload() {
    return {
      providers: rows.filter((r) => r.keep && r.draft).map((r) => {
        const d = r.draft!;
        return {
          businessName: d.businessName, category: d.category, location: d.location,
          website: d.website || undefined, phone: d.phone || undefined, email: d.email || undefined,
          yearsInBusiness: d.yearsInBusiness || undefined, description: d.description, specialties: d.specialties,
          marques: d.marques, workSettings: d.workSettings,
        };
      }),
    };
  }

  function sendToSeeder() {
    const payload = seedPayload();
    if (!payload.providers.length) { setError("Tick at least one draft to keep."); return; }
    try { sessionStorage.setItem(SEED_HANDOFF_KEY, JSON.stringify(payload, null, 2)); } catch { /* fall through to copy */ }
    router.push("/admin/seed-providers");
  }

  const done = rows.filter((r) => r.state === "done");
  const spent = done.reduce((s, r) => s + (r.usd ?? 0), 0);
  const input = "w-full px-3 py-3 bg-white border border-border rounded-lg text-base text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";
  const label = "block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5";

  return (
    <div className="max-w-xl mx-auto py-6">
      <div className="flex items-center gap-2 mb-1">
        <Sparkles className="w-5 h-5" style={{ color: "#1E6091" }} />
        <h1 className="text-2xl font-display font-semibold tracking-tight text-foreground">Draft profiles</h1>
      </div>
      <p className="text-sm text-text-secondary mb-6">
        One shop per line. Claude reads the shop&apos;s own site and drafts the claim-model profile. Edit, keep the good ones, then send them to Seed Providers for the dry run.
      </p>

      <label className={label}>Shops</label>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder={"Name | website | City, ST | category | notes\nAlfa Works | alfaworks.com | Pasadena, CA | mechanical | owner Mike, Webers"}
        className={input + " font-mono text-xs resize-y"}
      />
      <p className="text-xs text-text-tertiary mt-1.5">Category and notes are optional. Notes are treated as fact.</p>

      <label className="flex items-center gap-2 mt-4 text-sm text-foreground">
        <input type="checkbox" checked={best} onChange={(e) => setBest(e.target.checked)} />
        Best quality (Sonnet, about ten cents each). Default is Haiku, about a cent.
      </label>

      <button
        onClick={run}
        disabled={running || !text.trim()}
        className="w-full mt-5 inline-flex items-center justify-center gap-2 h-12 text-base font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60"
      >
        {running && <Loader2 className="w-4 h-4 animate-spin" />} Draft
      </button>
      {error && <p className="text-sm mt-4" style={{ color: "#DC2626" }}>{error}</p>}

      {rows.length > 0 && (
        <p className="text-xs text-text-secondary mt-4">
          {done.length} of {rows.length} drafted · est. ${spent.toFixed(2)}
        </p>
      )}

      <div className="mt-4 space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="rounded-xl border border-border bg-white p-4 text-sm">
            {r.state !== "done" && (
              <p className="text-text-secondary break-words">
                {r.state === "drafting" && <Loader2 className="inline w-3.5 h-3.5 animate-spin mr-1.5" />}
                <span className="font-medium text-foreground">{parseLine(r.line).businessName}</span>{" "}
                {r.state === "queued" && "waiting"}
                {r.state === "drafting" && "reading the site"}
                {r.state === "error" && <span style={{ color: "#DC2626" }}>{r.error}</span>}
              </p>
            )}
            {r.state === "done" && r.draft && (
              <div className="space-y-3">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" checked={r.keep} onChange={(e) => update(r.key, { keep: e.target.checked })} />
                  <span>
                    <span className="font-semibold text-foreground">{r.draft.businessName}</span>
                    <span className="text-text-secondary"> · {r.draft.location} · confidence {r.draft.confidence}</span>
                  </span>
                </label>

                {!!r.warnings?.length && (
                  <ul className="text-xs rounded-lg p-2" style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}>
                    {r.warnings.map((w, i) => <li key={i}>{w}</li>)}
                  </ul>
                )}

                <div>
                  <label className={label}>Category</label>
                  <select value={r.draft.category} onChange={(e) => updateDraft(r.key, { category: e.target.value })} className={input}>
                    {CATEGORY_OPTIONS.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label}>Description</label>
                  <textarea rows={6} value={r.draft.description} onChange={(e) => updateDraft(r.key, { description: e.target.value })} className={input + " resize-y"} />
                </div>
                <div>
                  <label className={label}>Specialties</label>
                  <input value={r.draft.specialties} onChange={(e) => updateDraft(r.key, { specialties: e.target.value })} className={input} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={label}>Years</label>
                    <input value={r.draft.yearsInBusiness ?? ""} onChange={(e) => updateDraft(r.key, { yearsInBusiness: e.target.value || null })} className={input} placeholder="not stated" />
                  </div>
                  <div>
                    <label className={label}>Location</label>
                    <input value={r.draft.location} onChange={(e) => updateDraft(r.key, { location: e.target.value })} className={input} />
                  </div>
                </div>
                <p className="text-xs text-text-secondary">
                  Marques: {r.draft.marques.length ? r.draft.marques.join(", ") : "not stated"} · Works: {r.draft.workSettings.length ? r.draft.workSettings.join(", ") : "not stated"}
                  {r.draft.phone && <> · {r.draft.phone}</>}{r.draft.email && <> · {r.draft.email}</>}
                </p>
                {r.draft.outreachHook && (
                  <p className="text-xs text-foreground"><span className="font-bold uppercase tracking-wider text-text-secondary">Email opener </span>{r.draft.outreachHook}</p>
                )}
                {!!r.draft.claimQuestions.length && (
                  <div className="text-xs text-text-secondary">
                    <span className="font-bold uppercase tracking-wider">Ask the shop </span>
                    {r.draft.claimQuestions.join(" ")}
                  </div>
                )}
                <details className="text-xs text-text-secondary">
                  <summary className="cursor-pointer">Sources and gaps</summary>
                  <ul className="mt-2 space-y-1 break-all">
                    {r.draft.sources.map((s, i) => <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer" className="text-accent underline">{s.url}</a> {s.used_for}</li>)}
                    {r.draft.gaps.map((g, i) => <li key={`g${i}`}>Gap: {g}</li>)}
                  </ul>
                </details>
              </div>
            )}
          </div>
        ))}
      </div>

      {done.length > 0 && !running && (
        <div className="flex flex-col gap-3 mt-6">
          <button
            onClick={sendToSeeder}
            className="w-full h-12 text-base font-semibold rounded-lg border-2"
            style={{ borderColor: "#1E6091", color: "#1E6091", backgroundColor: "#fff" }}
          >
            Send kept drafts to Seed Providers ({rows.filter((r) => r.keep && r.draft).length})
          </button>
          <button
            onClick={() => navigator.clipboard?.writeText(JSON.stringify(seedPayload(), null, 2))}
            className="text-sm text-text-secondary underline"
          >
            Copy as seed JSON
          </button>
        </div>
      )}
    </div>
  );
}

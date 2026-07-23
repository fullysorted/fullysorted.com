"use client";

import { useEffect, useState, useCallback } from "react";
import { Loader2, CheckCircle2, XCircle, ExternalLink, Inbox } from "lucide-react";

interface Sub {
  id: number; make: string; model: string; year: number | null; trim: string | null;
  sale_price: number | null; sale_date: string | null; venue: string | null; mileage: number | null;
  exterior_color: string | null; vin: string | null; location: string | null; source_url: string | null;
  notes: string | null; submitter_name: string | null; submitter_email: string | null; created_at: string | null;
}
const money = (c: number | null) => (c == null ? "—" : `$${c.toLocaleString()}`);
const fmtDate = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—");

export default function AdminSubmissionsPage() {
  const [subs, setSubs] = useState<Sub[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string>("");
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/submissions?status=pending");
      const d = await res.json();
      if (res.ok) setSubs(d.submissions || []); else setErr(d.error || "Failed to load");
    } catch { setErr("Failed to load"); }
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function act(id: number, action: "approve" | "reject") {
    setBusy(`${action}-${id}`); setErr("");
    try {
      const res = await fetch("/api/admin/submissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, action }) });
      if (res.ok) setSubs((p) => p.filter((s) => s.id !== id));
      else { const d = await res.json(); setErr(d.error || "Action failed"); }
    } catch { setErr("Action failed"); }
    setBusy("");
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 mb-1"><Inbox className="w-5 h-5" style={{ color: "#1E6091" }} /><h1 className="text-3xl font-display font-semibold tracking-tight text-foreground">Sale submissions</h1></div>
      <p className="text-sm text-text-secondary mb-8">User-reported sales awaiting review. Approving adds the factual result to the market database (de-duped automatically).</p>

      {err && <p className="text-sm mb-3" style={{ color: "#DC2626" }}>{err}</p>}
      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin" style={{ color: "#1E6091" }} /></div>
      ) : subs.length === 0 ? (
        <div className="rounded-2xl bg-white border border-border p-12 text-center"><Inbox className="w-9 h-9 mx-auto mb-3" style={{ color: "#cfcabb" }} /><p className="font-semibold text-foreground">Nothing pending</p><p className="text-sm text-text-secondary">New submissions will show up here for review.</p></div>
      ) : (
        <div className="space-y-3">
          {subs.map((s) => (
            <div key={s.id} className="rounded-2xl bg-white border border-border p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">{[s.year, s.make, s.model, s.trim].filter(Boolean).join(" ")}</p>
                  <p className="text-sm text-text-secondary mt-0.5">{money(s.sale_price)} · {s.venue || "—"} · {fmtDate(s.sale_date)}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-text-tertiary mt-1.5">
                    {s.mileage != null && <span>{s.mileage.toLocaleString()} mi</span>}
                    {s.exterior_color && <span>{s.exterior_color}</span>}
                    {s.vin && <span>VIN {s.vin}</span>}
                    {s.location && <span>{s.location}</span>}
                    <span>from {s.submitter_name || "anonymous"}{s.submitter_email ? ` (${s.submitter_email})` : ""}</span>
                    <span>· {fmtDate(s.created_at)}</span>
                  </div>
                  {s.notes && <p className="text-xs text-text-secondary mt-2 italic">“{s.notes}”</p>}
                  {s.source_url && <a href={s.source_url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold inline-flex items-center gap-1 mt-2" style={{ color: "#1E6091" }}>View proof <ExternalLink className="w-3 h-3" /></a>}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => act(s.id, "approve")} disabled={busy === `approve-${s.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60">
                    {busy === `approve-${s.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />} Approve
                  </button>
                  <button onClick={() => act(s.id, "reject")} disabled={busy === `reject-${s.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border disabled:opacity-60" style={{ borderColor: "rgba(0,0,0,0.15)", color: "#9a3f2f" }}>
                    {busy === `reject-${s.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <XCircle className="w-3.5 h-3.5" />} Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

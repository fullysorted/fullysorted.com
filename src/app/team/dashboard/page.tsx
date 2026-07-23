"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  UserPlus, Search, Loader2, Copy, Check, Mail, Phone, MapPin,
  Send, BellRing, XCircle, LogOut, ChevronDown, ChevronUp, ExternalLink,
  StickyNote, Pencil,
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
interface PipelineProvider {
  id: number;
  business_name: string;
  owner_name: string | null;
  email: string;
  phone: string | null;
  category: string;
  location: string;
  website: string | null;
  status: string;
  outreach_status: string | null;
  outreach_sent_at: string | null;
  outreach_responded_at: string | null;
  outreach_notes: string | null;
  outreach_added_by: string | null;
  claim_token: string | null;
  slug: string;
  created_at: string;
}

const CATEGORIES = [
  { value: "detailing", label: "Detailing & Paint Correction" },
  { value: "mechanical", label: "Mechanical & Repair" },
  { value: "restoration", label: "Restoration" },
  { value: "transport", label: "Transport & Shipping" },
  { value: "inspection", label: "Pre-Purchase Inspection" },
  { value: "bodywork", label: "Body Work & Paint" },
  { value: "storage", label: "Storage" },
  { value: "photography", label: "Automotive Photography" },
  { value: "finance", label: "Financing & Insurance" },
  { value: "other", label: "Other" },
];

const STAGES: Array<{ key: string; label: string; color: string; bg: string }> = [
  { key: "staged", label: "To invite", color: "#d97706", bg: "#fef3c7" },
  { key: "sent", label: "Invited", color: "#1E6091", bg: "#E8F0F8" },
  { key: "claimed", label: "Approved — managing", color: "#16a34a", bg: "#dcfce7" },
  { key: "list_only", label: "Listed as-is", color: "#0f766e", bg: "#ccfbf1" },
];

function stageInfo(s: string | null) {
  return STAGES.find((x) => x.key === s) || { key: s || "?", label: s || "—", color: "#6b7280", bg: "#f3f4f6" };
}

function timeAgo(dateStr: string | null): string {
  if (!dateStr) return "—";
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

const EMPTY_FORM = {
  businessName: "", ownerName: "", email: "", phone: "", category: "detailing",
  location: "", website: "", instagram: "", specialties: "", yearsInBusiness: "",
  notes: "",
};

/* ─── Page ──────────────────────────────────────────────── */
export default function TeamDashboard() {
  const router = useRouter();
  const [providers, setProviders] = useState<PipelineProvider[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState("all");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ ...EMPTY_FORM });
  const [addedBy, setAddedBy] = useState("");
  const [submitting, setSubmitting] = useState<"invite" | "only" | null>(null);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [busyId, setBusyId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [rowMsg, setRowMsg] = useState<{ id: number; msg: string; err?: boolean } | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("fs_team_name");
      if (saved) setAddedBy(saved);
    } catch { /* ignore */ }
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (stage !== "all") params.set("stage", stage);
    if (search) params.set("q", search);
    const res = await fetch(`/api/team/providers?${params}`);
    if (res.status === 401) {
      router.push("/team");
      return;
    }
    const data = await res.json();
    setProviders(data.providers || []);
    const c: Record<string, number> = {};
    for (const row of data.counts || []) c[row.outreach_status] = row.count;
    setCounts(c);
    setLoading(false);
  }, [stage, search, router]);

  useEffect(() => {
    load();
  }, [load]);

  function setField(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function addProvider(sendInvite: boolean) {
    setSubmitting(sendInvite ? "invite" : "only");
    setFormError("");
    setFormSuccess("");
    try {
      if (addedBy) {
        try { window.localStorage.setItem("fs_team_name", addedBy); } catch { /* ignore */ }
      }
      const res = await fetch("/api/team/providers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, addedBy, sendInvite }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setFormSuccess(
        sendInvite
          ? data.inviteSent
            ? `${form.businessName} added — invite emailed to ${form.email}.`
            : `${form.businessName} added, but the invite email failed — use "Send invite" on the row below.`
          : `${form.businessName} added. Send the invite when they're ready.`,
      );
      setForm({ ...EMPTY_FORM });
      load();
    } catch (e) {
      setFormError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(null);
    }
  }

  async function sendInvite(p: PipelineProvider, reminder: boolean) {
    setBusyId(p.id);
    setRowMsg(null);
    try {
      const res = await fetch("/api/team/invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, reminder }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setRowMsg({ id: p.id, msg: `${reminder ? "Reminder" : "Invite"} sent to ${data.sentTo}` });
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to send", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function copyLink(p: PipelineProvider) {
    if (!p.claim_token) return;
    const url = `https://www.fullysorted.com/services/claim/${p.claim_token}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(p.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setRowMsg({ id: p.id, msg: url });
    }
  }

  async function optOut(p: PipelineProvider) {
    if (!confirm(`Mark ${p.business_name} as "not interested"? This removes their listing and we'll never contact them again.`)) return;
    setBusyId(p.id);
    try {
      const res = await fetch("/api/team/providers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, action: "opt_out" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function saveNotes(p: PipelineProvider) {
    setBusyId(p.id);
    try {
      const res = await fetch("/api/team/providers", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: p.id, notes: noteDraft }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      setRowMsg({ id: p.id, msg: "Notes saved" });
      load();
    } catch (e) {
      setRowMsg({ id: p.id, msg: e instanceof Error ? e.message : "Failed to save", err: true });
    } finally {
      setBusyId(null);
    }
  }

  async function handleLogout() {
    await fetch("/api/team/auth", { method: "DELETE" });
    router.push("/team");
  }

  const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const liveCount = (counts["claimed"] || 0) + (counts["list_only"] || 0);

  const inputCls =
    "w-full h-10 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f4f0" }}>
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: "#1E6091" }}
            >
              FS
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-tight">Onboarding Console</p>
              <p className="text-xs text-text-secondary">Fully Sorted — Provider Team</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-foreground"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign out
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STAGES.map((s) => (
            <button
              key={s.key}
              onClick={() => setStage(stage === s.key ? "all" : s.key)}
              className={`bg-white rounded-xl border p-4 text-left transition-shadow hover:shadow-sm ${
                stage === s.key ? "border-accent ring-2 ring-accent/20" : "border-border"
              }`}
            >
              <p className="text-2xl font-bold text-foreground">{counts[s.key] || 0}</p>
              <p className="text-xs font-medium mt-0.5" style={{ color: s.color }}>{s.label}</p>
            </button>
          ))}
        </div>
        <p className="text-xs text-text-secondary -mt-3">
          {totalCount} in pipeline · {liveCount} live in the directory
        </p>

        {/* Add provider */}
        <div className="bg-white rounded-2xl border border-border">
          <button
            onClick={() => setShowForm(!showForm)}
            className="w-full flex items-center justify-between px-5 py-4"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <UserPlus className="w-4 h-4" style={{ color: "#1E6091" }} />
              Add a provider from a call
            </span>
            {showForm ? <ChevronUp className="w-4 h-4 text-text-secondary" /> : <ChevronDown className="w-4 h-4 text-text-secondary" />}
          </button>

          {showForm && (
            <div className="px-5 pb-5 border-t border-border pt-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Business name *</label>
                  <input className={inputCls} value={form.businessName} onChange={(e) => setField("businessName", e.target.value)} placeholder="Coastal Classics Detailing" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Owner name *</label>
                  <input className={inputCls} value={form.ownerName} onChange={(e) => setField("ownerName", e.target.value)} placeholder="Mike Rivera" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Email *</label>
                  <input className={inputCls} type="email" value={form.email} onChange={(e) => setField("email", e.target.value)} placeholder="mike@coastalclassics.com" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Phone</label>
                  <input className={inputCls} value={form.phone} onChange={(e) => setField("phone", e.target.value)} placeholder="(619) 555-0132" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Category *</label>
                  <select className={inputCls} value={form.category} onChange={(e) => setField("category", e.target.value)}>
                    {CATEGORIES.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Location (city, state) *</label>
                  <input className={inputCls} value={form.location} onChange={(e) => setField("location", e.target.value)} placeholder="San Diego, CA" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Website</label>
                  <input className={inputCls} value={form.website} onChange={(e) => setField("website", e.target.value)} placeholder="https://…" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Instagram</label>
                  <input className={inputCls} value={form.instagram} onChange={(e) => setField("instagram", e.target.value)} placeholder="@handle" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Years in business</label>
                  <input className={inputCls} value={form.yearsInBusiness} onChange={(e) => setField("yearsInBusiness", e.target.value)} placeholder="12" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-text-secondary block mb-1">Specialties (comma-separated)</label>
                  <input className={inputCls} value={form.specialties} onChange={(e) => setField("specialties", e.target.value)} placeholder="Ceramic coating, paint correction, concours prep" />
                </div>
                <div>
                  <label className="text-xs font-medium text-text-secondary block mb-1">Your name (for the record)</label>
                  <input className={inputCls} value={addedBy} onChange={(e) => setAddedBy(e.target.value)} placeholder="e.g. Dave" />
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="text-xs font-medium text-text-secondary block mb-1">Call notes (internal only)</label>
                  <textarea
                    className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    rows={2}
                    value={form.notes}
                    onChange={(e) => setField("notes", e.target.value)}
                    placeholder="Spoke 7/23 — interested, prefers email. Busy until August."
                  />
                </div>
              </div>

              {formError && <p className="text-sm text-red-600 font-medium mt-3">{formError}</p>}
              {formSuccess && <p className="text-sm text-green-700 font-medium mt-3">{formSuccess}</p>}

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => addProvider(true)}
                  disabled={submitting !== null}
                  className="inline-flex items-center gap-2 px-5 h-11 text-sm font-semibold text-white rounded-lg disabled:opacity-60"
                  style={{ backgroundColor: "#1E6091" }}
                >
                  {submitting === "invite" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Add &amp; email invite now
                </button>
                <button
                  onClick={() => addProvider(false)}
                  disabled={submitting !== null}
                  className="inline-flex items-center gap-2 px-5 h-11 text-sm font-semibold rounded-lg border border-border text-foreground bg-white hover:bg-gray-50 disabled:opacity-60"
                >
                  {submitting === "only" ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
                  Add without emailing
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search + filter */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" />
            <input
              className="w-full h-10 pl-9 pr-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              placeholder="Search business, owner, email, city…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {stage !== "all" && (
            <button onClick={() => setStage("all")} className="text-xs font-medium text-accent underline">
              Clear filter ({stageInfo(stage).label})
            </button>
          )}
        </div>

        {/* Pipeline */}
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          {loading ? (
            <div className="p-10 text-center">
              <Loader2 className="w-5 h-5 animate-spin mx-auto text-text-tertiary" />
            </div>
          ) : providers.length === 0 ? (
            <div className="p-10 text-center text-sm text-text-secondary">
              No providers here yet. Add your first one from a call above.
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {providers.map((p) => {
                const s = stageInfo(p.outreach_status);
                const expanded = expandedId === p.id;
                const canInvite = !!p.claim_token && !["claimed", "list_only"].includes(p.outreach_status || "");
                const invited = p.outreach_status === "sent";
                return (
                  <li key={p.id} className="px-5 py-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-semibold text-foreground truncate">{p.business_name}</p>
                          <span
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold"
                            style={{ color: s.color, backgroundColor: s.bg }}
                          >
                            {s.label}
                          </span>
                          {invited && p.outreach_sent_at && (
                            <span className="text-[11px] text-text-tertiary">invited {timeAgo(p.outreach_sent_at)}</span>
                          )}
                        </div>
                        <p className="text-xs text-text-secondary mt-0.5 flex items-center gap-3 flex-wrap">
                          {p.owner_name && <span>{p.owner_name}</span>}
                          <span className="inline-flex items-center gap-1"><Mail className="w-3 h-3" />{p.email}</span>
                          {p.phone && <span className="inline-flex items-center gap-1"><Phone className="w-3 h-3" />{p.phone}</span>}
                          <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" />{p.location}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        {canInvite && (
                          <button
                            onClick={() => sendInvite(p, invited)}
                            disabled={busyId === p.id}
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                            style={{ backgroundColor: invited ? "#B08D3F" : "#1E6091" }}
                            title={invited ? "Send a gentle reminder email" : "Email the approval link"}
                          >
                            {busyId === p.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : invited ? <BellRing className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                            {invited ? "Reminder" : "Send invite"}
                          </button>
                        )}
                        {p.claim_token && (
                          <button
                            onClick={() => copyLink(p)}
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-medium rounded-lg border border-border text-foreground bg-white hover:bg-gray-50"
                            title="Copy the approval link (for texting it, or reading over the phone)"
                          >
                            {copiedId === p.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedId === p.id ? "Copied" : "Copy link"}
                          </button>
                        )}
                        {["claimed", "list_only"].includes(p.outreach_status || "") && (
                          <a
                            href={`/services/${p.slug}`}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-medium rounded-lg border border-border text-foreground bg-white hover:bg-gray-50"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> View live
                          </a>
                        )}
                        <button
                          onClick={() => {
                            setExpandedId(expanded ? null : p.id);
                            setNoteDraft(p.outreach_notes || "");
                            setRowMsg(null);
                          }}
                          className="inline-flex items-center gap-1.5 px-2.5 h-8 text-xs font-medium rounded-lg border border-border text-text-secondary bg-white hover:bg-gray-50"
                          title="Notes & details"
                        >
                          <StickyNote className="w-3.5 h-3.5" />
                          {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>

                    {rowMsg?.id === p.id && (
                      <p className={`text-xs font-medium mt-2 ${rowMsg.err ? "text-red-600" : "text-green-700"}`}>{rowMsg.msg}</p>
                    )}

                    {expanded && (
                      <div className="mt-3 rounded-xl border border-border bg-[#fafaf7] p-4 space-y-3">
                        <div>
                          <label className="text-xs font-semibold text-text-secondary block mb-1">
                            Call notes (internal — never shown to the provider)
                          </label>
                          <textarea
                            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
                            rows={3}
                            value={noteDraft}
                            onChange={(e) => setNoteDraft(e.target.value)}
                          />
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => saveNotes(p)}
                              disabled={busyId === p.id}
                              className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                              style={{ backgroundColor: "#1E6091" }}
                            >
                              <Pencil className="w-3 h-3" /> Save notes
                            </button>
                            {p.outreach_added_by && (
                              <span className="text-[11px] text-text-tertiary">Added by {p.outreach_added_by} · {timeAgo(p.created_at)}</span>
                            )}
                          </div>
                        </div>
                        <div className="pt-2 border-t border-border">
                          <button
                            onClick={() => optOut(p)}
                            disabled={busyId === p.id}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 hover:text-red-700"
                          >
                            <XCircle className="w-3.5 h-3.5" /> Owner said no — remove &amp; never contact again
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <p className="text-[11px] text-text-tertiary text-center pb-8">
          This console can add providers and send approval invites. Site admin (listings, orders) lives at /admin.
        </p>
      </main>
    </div>
  );
}

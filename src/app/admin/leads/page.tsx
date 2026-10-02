"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, Mail, Phone, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { STAGE_LABEL, LEAD_OVERDUE_HOURS, type LeadStage } from "@/lib/lead-stages";
import { LEAD_CHECKINS_ENABLED } from "@/lib/features";

/**
 * Leads: every directory enquiry, where it got to, and which shops answer.
 *
 * Built for a phone first (Chris runs admin from his). Data comes from three
 * self-reported sources, none observed: the shop's "I replied / junk" links in
 * the lead email, the owner's one-time check-in email, and whatever gets set
 * here after a phone call. Nothing on this page is public.
 */

interface Lead {
  id: number;
  created_at: string;
  sender_name: string;
  sender_email: string;
  sender_phone: string | null;
  message_text: string;
  provider_id: number;
  business_name: string | null;
  slug: string | null;
  location: string | null;
  replied_at: string | null;
  junk: boolean | null;
  junk_reason: string | null;
  job_status: string | null;
  owner_asked_at: string | null;
  owner_answered_at: string | null;
  admin_notes: string | null;
  stage: LeadStage;
  hours_to_reply: number | null;
}

const STAGE_STYLE: Record<LeadStage, string> = {
  booked: "bg-emerald-100 text-emerald-800",
  replied: "bg-sky-100 text-sky-800",
  new: "bg-gray-100 text-gray-700",
  waiting: "bg-amber-100 text-amber-800",
  no_reply: "bg-red-100 text-red-800",
  not_going_ahead: "bg-gray-100 text-gray-500",
  junk: "bg-gray-100 text-gray-400 line-through",
};

const FILTERS: { key: string; label: string; match: (l: Lead) => boolean }[] = [
  { key: "nudge", label: "Needs a nudge", match: (l) => l.stage === "waiting" || l.stage === "no_reply" },
  { key: "open", label: "Open", match: (l) => ["new", "waiting", "replied"].includes(l.stage) },
  { key: "booked", label: "Went ahead", match: (l) => l.stage === "booked" },
  { key: "all", label: "All", match: (l) => l.stage !== "junk" },
  { key: "junk", label: "Junk", match: (l) => l.stage === "junk" },
];

const OUTCOME_OPTIONS = [
  { v: "", l: "No answer yet" },
  { v: "booked", l: "Work went ahead" },
  { v: "talking", l: "Still talking" },
  { v: "not_going_ahead", l: "Did not go ahead" },
  { v: "no_reply", l: "Owner never heard back" },
];

function ago(iso: string) {
  const h = (Date.now() - new Date(iso).getTime()) / 3_600_000;
  if (h < 1) return "just now";
  if (h < 24) return `${Math.round(h)}h ago`;
  const d = Math.round(h / 24);
  return d < 60 ? `${d}d ago` : `${Math.round(d / 30)}mo ago`;
}

function fmtHours(h: number | null) {
  if (h === null) return "";
  return h < 24 ? `${h}h` : `${Math.round((h / 24) * 10) / 10}d`;
}

function median(xs: number[]) {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round(((s[m - 1] + s[m]) / 2) * 10) / 10;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [clicks, setClicks] = useState<{ provider_id: number; business_name: string | null; kind: string; n: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [filter, setFilter] = useState("nudge");
  const [open, setOpen] = useState<number | null>(null);
  const [saving, setSaving] = useState<number | null>(null);
  const [notes, setNotes] = useState<Record<number, string>>({});

  const load = useCallback(async () => {
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("/api/admin/leads");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setLeads(data.leads || []);
      setClicks(data.clicks || []);
    } catch {
      // An outage must never look like "no leads".
      setFailed(true);
    }
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  const patch = async (id: number, body: Record<string, unknown>) => {
    setSaving(id);
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...body }),
    });
    await load();
    setSaving(null);
  };

  const last30 = useMemo(() => {
    const cutoff = Date.now() - 30 * 86_400_000;
    const ls = leads.filter((l) => !l.junk && new Date(l.created_at).getTime() > cutoff);
    const replied = ls.filter((l) => l.replied_at || ["booked", "talking", "not_going_ahead"].includes(l.job_status || ""));
    return {
      total: ls.length,
      repliedPct: ls.length ? Math.round((replied.length / ls.length) * 100) : null,
      medianReply: median(ls.map((l) => l.hours_to_reply).filter((h): h is number => h !== null)),
      booked: ls.filter((l) => l.stage === "booked").length,
    };
  }, [leads]);

  const byShop = useMemo(() => {
    type Row = { name: string; slug: string | null; total: number; replied: number; booked: number; waiting: number; hours: number[]; phone: number; web: number };
    const m = new Map<number, Row>();
    for (const l of leads) {
      if (l.junk) continue;
      const s = m.get(l.provider_id) || { name: l.business_name || `#${l.provider_id}`, slug: l.slug, total: 0, replied: 0, booked: 0, waiting: 0, hours: [], phone: 0, web: 0 };
      s.total++;
      if (l.replied_at || ["booked", "talking", "not_going_ahead"].includes(l.job_status || "")) s.replied++;
      if (l.stage === "booked") s.booked++;
      if (l.stage === "waiting" || l.stage === "no_reply") s.waiting++;
      if (l.hours_to_reply !== null) s.hours.push(l.hours_to_reply);
      m.set(l.provider_id, s);
    }
    // A shop can get phone taps and no written inquiries, so taps add rows too.
    for (const c of clicks) {
      const s = m.get(c.provider_id) || { name: c.business_name || `#${c.provider_id}`, slug: null, total: 0, replied: 0, booked: 0, waiting: 0, hours: [], phone: 0, web: 0 };
      if (c.kind === 'phone') s.phone += c.n; else s.web += c.n;
      m.set(c.provider_id, s);
    }
    return [...m.values()].sort((a, b) => b.waiting - a.waiting || (b.total + b.phone) - (a.total + a.phone));
  }, [leads, clicks]);

  const shown = leads.filter(FILTERS.find((f) => f.key === filter)!.match);

  if (loading && !leads.length) {
    return <div className="p-8 flex items-center gap-2 text-gray-500"><Loader2 className="w-4 h-4 animate-spin" /> Loading leads…</div>;
  }
  if (failed) {
    return (
      <div className="p-6">
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-4 text-sm">
          Could not load leads. That is the database, not an empty inbox. <button onClick={load} className="underline">Try again</button>
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-5xl">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Leads</h1>
      <p className="text-sm text-gray-500 mb-5">
        Directory inquiries and what happened to them. Self-reported by shops and owners.
        {!LEAD_CHECKINS_ENABLED && " Owner check-in emails are off (LEAD_CHECKINS_ENABLED)."}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { k: "Leads, last 30 days", v: last30.total },
          { k: "Shop replied", v: last30.total >= 3 && last30.repliedPct !== null ? `${last30.repliedPct}%` : "n<3" },
          { k: "Median reply", v: last30.medianReply !== null ? fmtHours(last30.medianReply) : "none yet" },
          { k: "Work went ahead", v: last30.booked },
        ].map((t) => (
          <div key={t.k} className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-500">{t.k}</p>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{t.v}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 -mx-1 px-1">
        {FILTERS.map((f) => {
          const n = leads.filter(f.match).length;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-sm border ${
                filter === f.key ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              {f.label} <span className="opacity-60">{n}</span>
            </button>
          );
        })}
      </div>

      {shown.length === 0 ? (
        <p className="text-sm text-gray-500 bg-white border border-gray-200 rounded-xl p-6 mb-8">
          {filter === "nudge" ? `Nothing waiting. Every lead older than ${LEAD_OVERDUE_HOURS} hours has an answer.` : "Nothing here."}
        </p>
      ) : (
        <ul className="space-y-2 mb-10">
          {shown.map((l) => {
            const isOpen = open === l.id;
            return (
              <li key={l.id} className="bg-white border border-gray-200 rounded-xl">
                <button onClick={() => setOpen(isOpen ? null : l.id)} className="w-full text-left p-4 flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 truncate">{l.business_name || "Unknown shop"}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${STAGE_STYLE[l.stage]}`}>{STAGE_LABEL[l.stage]}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {l.sender_name} · {ago(l.created_at)}
                      {l.hours_to_reply !== null && ` · replied in ${fmtHours(l.hours_to_reply)}`}
                      {l.owner_asked_at && !l.owner_answered_at && " · owner asked"}
                    </p>
                  </div>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400 mt-1" /> : <ChevronDown className="w-4 h-4 text-gray-400 mt-1" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3">
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{l.message_text}</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <a href={`mailto:${l.sender_email}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200"><Mail className="w-3.5 h-3.5" /> Owner</a>
                      {l.sender_phone && <a href={`tel:${l.sender_phone}`} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200"><Phone className="w-3.5 h-3.5" /> Call owner</a>}
                      {l.slug && <a href={`/services/${l.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200"><ExternalLink className="w-3.5 h-3.5" /> Shop</a>}
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="text-xs text-gray-500">
                        What happened
                        <select
                          value={l.job_status || ""}
                          disabled={saving === l.id}
                          onChange={(e) => patch(l.id, { job_status: e.target.value || null })}
                          className="mt-1 w-full border border-gray-200 rounded-lg px-2 py-2 text-sm text-gray-900 bg-white"
                        >
                          {OUTCOME_OPTIONS.map((o) => <option key={o.v} value={o.v}>{o.l}</option>)}
                        </select>
                      </label>
                      <label className="text-xs text-gray-500">
                        Note
                        <div className="mt-1 flex gap-2">
                          <input
                            value={notes[l.id] ?? l.admin_notes ?? ""}
                            onChange={(e) => setNotes((n) => ({ ...n, [l.id]: e.target.value }))}
                            className="flex-1 border border-gray-200 rounded-lg px-2 py-2 text-sm text-gray-900"
                            placeholder="Called shop, booked for the 14th"
                          />
                          <button
                            onClick={() => patch(l.id, { admin_notes: notes[l.id] ?? "" })}
                            disabled={saving === l.id || notes[l.id] === undefined}
                            className="px-3 rounded-lg bg-gray-900 text-white text-sm disabled:opacity-40"
                          >
                            Save
                          </button>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{l.junk_reason ? `Shop marked junk: ${l.junk_reason}` : ""}</span>
                      <button onClick={() => patch(l.id, { junk: !l.junk })} className="underline">
                        {l.junk ? "Not junk" : "Mark junk"}
                      </button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}

      <h2 className="text-lg font-semibold text-gray-900 mb-1">By shop</h2>
      <p className="text-xs text-gray-500 mb-3">Taps count people pressing a phone number or website link, not calls that connected. Last 180 days.</p>
      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-gray-500 text-left">
            <tr>
              <th className="p-3 font-medium">Shop</th>
              <th className="p-3 font-medium text-right">Leads</th>
              <th className="p-3 font-medium text-right">Replied</th>
              <th className="p-3 font-medium text-right">Median reply</th>
              <th className="p-3 font-medium text-right">Went ahead</th>
              <th className="p-3 font-medium text-right">Waiting</th>
              <th className="p-3 font-medium text-right">Phone taps</th>
              <th className="p-3 font-medium text-right">Web taps</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {byShop.map((s) => {
              const med = median(s.hours);
              return (
                <tr key={s.name}>
                  <td className="p-3 text-gray-900">{s.name}</td>
                  <td className="p-3 text-right">{s.total}</td>
                  <td className="p-3 text-right">{s.total >= 3 ? `${Math.round((s.replied / s.total) * 100)}%` : `${s.replied}/${s.total}`}</td>
                  <td className="p-3 text-right">{med !== null ? fmtHours(med) : ""}</td>
                  <td className="p-3 text-right">{s.booked}</td>
                  <td className={`p-3 text-right ${s.waiting ? "text-amber-700 font-semibold" : ""}`}>{s.waiting}</td>
                  <td className="p-3 text-right">{s.phone || ""}</td>
                  <td className="p-3 text-right">{s.web || ""}</td>
                </tr>
              );
            })}
            {!byShop.length && <tr><td colSpan={8} className="p-4 text-gray-500">No inquiries or taps in the last 180 days.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

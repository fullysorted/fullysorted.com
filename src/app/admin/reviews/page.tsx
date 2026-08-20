"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Check, X, ExternalLink, Loader2, Star, MessageSquare, Trash2 } from "lucide-react";

type Review = {
  id: number;
  provider_id: number;
  source: string;
  rating: number | null;
  body: string;
  author_name: string;
  author_email: string | null;
  vehicle: string | null;
  work_type: string | null;
  work_date: string | null;
  status: string;
  moderation_note: string | null;
  provider_reply: string | null;
  submitted_by: string | null;
  invited_at: string | null;
  created_at: string;
  business_name: string;
  provider_slug: string;
};

const TABS = ["pending", "published", "invited", "rejected", "all"] as const;

function Stars({ n }: { n: number | null }) {
  if (!n) return <span className="text-xs text-stone-400">no rating</span>;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${n} of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          style={{ fill: i <= n ? "#B08D3F" : "transparent", color: i <= n ? "#B08D3F" : "#d8d4cb" }}
        />
      ))}
    </span>
  );
}

export default function AdminReviewsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("pending");
  const [rows, setRows] = useState<Review[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [replyDraft, setReplyDraft] = useState<{ id: number; text: string } | null>(null);

  const load = useCallback(async (status: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/reviews?status=${status}`);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const d = await res.json();
      setRows(d.reviews || []);
      setCounts(d.counts || {});
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't load reviews.");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load(tab);
  }, [tab, load]);

  async function act(id: number, action: string, extra: Record<string, unknown> = {}) {
    setBusyId(id);
    setError("");
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action, ...extra }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || "Failed");
      }
      await load(tab);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed.");
    } finally {
      setBusyId(null);
    }
  }

  // A rejection needs a reason typed in. There is no one-click reject on
  // purpose — the friction is the point.
  async function reject(id: number) {
    const reason = window.prompt(
      "Why is this being rejected? Abuse, spam, off-topic or clearly fake only.\n\n" +
        "An unfavourable review that describes real work gets published. The reason is kept on the record.",
    );
    if (!reason || !reason.trim()) return;
    await act(id, "reject", { reason: reason.trim() });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-2xl font-semibold tracking-tight mb-1">Reviews — moderation</h1>
      <p className="text-sm text-stone-500 mb-2">
        Verified reviews come from clients who followed a one-time link we emailed them; they are the only ones that
        move a provider&rsquo;s star average. Testimonials are supplied by the shop, published with a label, and count
        towards nothing.
      </p>
      <p className="text-sm mb-6 rounded-lg px-3 py-2 bg-amber-50 text-amber-900">
        <strong>Moderate for abuse, spam and off-topic noise — never for sentiment.</strong> A one-star review that
        describes real work gets published. Suppressing unfavourable reviews is what the FTC&rsquo;s consumer-review
        rule prohibits, and it is the one thing that would make this directory worthless to a buyer.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-3 h-9 text-sm font-medium rounded-lg border transition-colors ${
              tab === t ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-600 border-stone-200"
            }`}
          >
            {t}
            {counts[t] != null && <span className="ml-1.5 opacity-70">{counts[t]}</span>}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-stone-500 py-12">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading…
        </div>
      ) : rows.length === 0 ? (
        <p className="text-sm text-stone-500 py-12">Nothing here.</p>
      ) : (
        <ul className="space-y-4">
          {rows.map((r) => (
            <li key={r.id} className="rounded-xl border border-stone-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                <Stars n={r.rating} />
                <span className="text-sm font-semibold text-stone-900">{r.author_name}</span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    r.source === "verified" ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {r.source}
                </span>
                <span className="text-xs text-stone-400">{r.status}</span>
                <Link
                  href={`/services/${r.provider_slug}`}
                  target="_blank"
                  className="text-xs text-accent inline-flex items-center gap-1 underline"
                >
                  {r.business_name} <ExternalLink className="w-3 h-3" />
                </Link>
              </div>

              <p className="text-xs text-stone-400 mb-2">
                {[r.vehicle, r.work_type, r.work_date].filter(Boolean).join(" · ") || "—"}
                {r.author_email ? ` · ${r.author_email}` : ""}
                {r.submitted_by ? ` · entered by ${r.submitted_by}` : ""}
              </p>

              {r.status === "invited" ? (
                <p className="text-sm italic text-stone-500">
                  Invited {r.invited_at ? new Date(r.invited_at).toLocaleDateString() : ""} — not written yet.
                </p>
              ) : (
                <p className="text-sm text-stone-800 whitespace-pre-line leading-relaxed">{r.body}</p>
              )}

              {r.provider_reply && (
                <div className="mt-3 rounded-lg bg-stone-50 border-l-2 border-accent px-3 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-0.5">Shop reply</p>
                  <p className="text-sm text-stone-700 whitespace-pre-line">{r.provider_reply}</p>
                </div>
              )}

              {r.moderation_note && (
                <p className="mt-2 text-xs text-red-700">Rejected: {r.moderation_note}</p>
              )}

              {replyDraft?.id === r.id ? (
                <div className="mt-3">
                  <textarea
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200"
                    rows={3}
                    placeholder="Post the shop's reply on their behalf — most have no account yet."
                    value={replyDraft.text}
                    onChange={(e) => setReplyDraft({ id: r.id, text: e.target.value })}
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={async () => {
                        await act(r.id, "reply", { reply: replyDraft.text });
                        setReplyDraft(null);
                      }}
                      disabled={busyId === r.id}
                      className="px-3 h-8 text-xs font-semibold text-white rounded-lg bg-stone-900 disabled:opacity-60"
                    >
                      Save reply
                    </button>
                    <button onClick={() => setReplyDraft(null)} className="px-3 h-8 text-xs text-stone-500">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-stone-100">
                  {r.status !== "published" && r.status !== "invited" && (
                    <button
                      onClick={() => act(r.id, "publish")}
                      disabled={busyId === r.id}
                      className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold text-white rounded-lg bg-emerald-600 disabled:opacity-60"
                    >
                      <Check className="w-3 h-3" /> Publish
                    </button>
                  )}
                  {r.status !== "rejected" && r.status !== "invited" && (
                    <button
                      onClick={() => reject(r.id)}
                      disabled={busyId === r.id}
                      className="inline-flex items-center gap-1.5 px-3 h-8 text-xs font-semibold rounded-lg border border-stone-200 text-stone-600 disabled:opacity-60"
                    >
                      <X className="w-3 h-3" /> Reject (needs a reason)
                    </button>
                  )}
                  {r.status !== "invited" && (
                    <button
                      onClick={() => setReplyDraft({ id: r.id, text: r.provider_reply || "" })}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> {r.provider_reply ? "Edit" : "Add"} shop reply
                    </button>
                  )}
                  {r.status === "invited" && (
                    <button
                      onClick={() => act(r.id, "delete_invite")}
                      disabled={busyId === r.id}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-red-600 disabled:opacity-60"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete this unredeemed invite
                    </button>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

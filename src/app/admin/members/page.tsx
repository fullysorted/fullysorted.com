"use client";

/**
 * Who has joined, newest first, and everything one person has done.
 * Built for a phone first: one column, big tap targets, detail opens in place.
 * The Stable page keeps its own members tab for car work; this is the people view.
 */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw, Search, Users, Ban, ChevronDown, ChevronUp, Mail } from "lucide-react";

type Summary = { total: number; active: number; shadow: number; suspended: number; with_handle: number; joined_week: number; seen_week: number };
type MemberRow = {
  id: number; email: string; name: string | null; handle: string | null; status: string; role: string;
  location: string | null; created_at: string; last_seen_at: string | null; signed_in: boolean;
  vehicles: number; listings: number; messages: number; reviews: number;
};
type Item = Record<string, string | number | boolean | null>;
type Detail = {
  member: Item;
  vehicles: Item[]; listings: Item[]; messages: Item[]; reviews: Item[]; registry: Item[];
  contributions: Item[]; applications: Item[]; orders: Item[]; shops: Item[];
};

const STATUSES = [
  { key: "all", label: "Everyone" },
  { key: "active", label: "Signed in" },
  { key: "shadow", label: "Not signed in yet" },
  { key: "suspended", label: "Suspended" },
] as const;

const day = (s: string | null | undefined) =>
  s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "never";

const STATUS_LABEL: Record<string, string> = { active: "signed in", shadow: "not signed in", suspended: "suspended" };

function StatusPill({ status }: { status: string }) {
  const style = status === "suspended"
    ? { background: "#fee2e2", color: "#b91c1c" }
    : status === "active"
      ? { background: "rgba(28,140,135,0.12)", color: "#16716D" }
      : { background: "#f5f5f4", color: "#78716c" };
  return (
    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded" style={style}>
      {STATUS_LABEL[status] ?? status}
    </span>
  );
}

export default function AdminMembersPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [status, setStatus] = useState<(typeof STATUSES)[number]["key"]>("all");
  const [sort, setSort] = useState<"joined" | "seen">("joined");
  const [q, setQ] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [busyId, setBusyId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/members?status=${status}&sort=${sort}&q=${encodeURIComponent(query)}`);
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Could not load members.");
      setSummary(d.summary ?? null);
      setMembers(d.members || []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load members.");
    } finally {
      setLoading(false);
    }
  }, [status, sort, query]);

  useEffect(() => { load(); }, [load]);

  async function toggle(id: number) {
    if (openId === id) { setOpenId(null); setDetail(null); return; }
    setOpenId(id);
    setDetail(null);
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/admin/members?id=${id}`);
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Could not load this member.");
      setDetail(d);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load this member.");
    } finally {
      setDetailLoading(false);
    }
  }

  async function act(id: number, action: "suspend" | "unsuspend") {
    setBusyId(id);
    setError(null);
    try {
      const res = await fetch("/api/admin/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, id }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Action failed.");
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed.");
    } finally {
      setBusyId(null);
    }
  }

  const tiles = summary ? [
    { label: "Signed in", value: summary.active, sub: `${summary.joined_week} joined this week` },
    { label: "Seen this week", value: summary.seen_week, sub: "signed-in members who came back" },
    { label: "Usernames", value: summary.with_handle, sub: "members who picked one" },
    { label: "Not signed in yet", value: summary.shadow, sub: `emails the site has seen${summary.suspended ? ` · ${summary.suspended} suspended` : ""}` },
  ] : [];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight">Members</h1>
        <button onClick={load} aria-label="Refresh"
          className="p-2.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50">
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>
      <p className="text-sm text-stone-500 mb-5">
        Everyone with an account, plus every email that has sent an inquiry, a review or a correction without signing in.
        Being on this list is not permission to email anyone.
      </p>

      {tiles.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-5">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-2xl font-bold text-stone-900">{t.value}</p>
              <p className="text-xs font-semibold text-stone-700 mt-0.5">{t.label}</p>
              <p className="text-xs text-stone-500 mt-0.5">{t.sub}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); setQuery(q.trim()); }} className="relative mb-3">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
        <input
          type="search" value={q} onChange={(e) => setQ(e.target.value)} enterKeyHint="search"
          placeholder="Name, username, email or city"
          aria-label="Search members"
          className="w-full pl-10 pr-4 h-12 bg-white rounded-xl border border-stone-200 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </form>

      <div className="flex flex-wrap gap-2 mb-3">
        {STATUSES.map((s) => (
          <button key={s.key} onClick={() => setStatus(s.key)} aria-pressed={status === s.key}
            className={`px-3.5 py-2 rounded-full text-sm font-medium ${status === s.key ? "bg-stone-900 text-white" : "bg-white text-stone-600 border border-stone-200"}`}>
            {s.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 mb-5 text-sm text-stone-500">
        Sort by
        {(["joined", "seen"] as const).map((s) => (
          <button key={s} onClick={() => setSort(s)} aria-pressed={sort === s}
            className={`underline-offset-4 ${sort === s ? "font-semibold text-stone-900 underline" : "hover:underline"}`}>
            {s === "joined" ? "newest" : "last seen"}
          </button>
        ))}
      </div>

      {error && (
        <div className="rounded-xl border p-4 mb-5 text-sm" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)", color: "#9a3f2f" }}>
          {error}
        </div>
      )}

      {loading && members.length === 0 ? (
        <p className="text-sm text-stone-500">Loading members...</p>
      ) : !error && members.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-12 text-center">
          <Users className="w-8 h-8 mx-auto mb-3 text-stone-300" />
          <p className="text-sm text-stone-500">{query || status !== "all" ? "Nobody fits that." : "No members yet."}</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {members.map((m) => {
            const open = openId === m.id;
            const did = [
              m.vehicles && `${m.vehicles} ${m.vehicles === 1 ? "car" : "cars"}`,
              m.listings && `${m.listings} ${m.listings === 1 ? "listing" : "listings"}`,
              m.messages && `${m.messages} ${m.messages === 1 ? "inquiry" : "inquiries"}`,
              m.reviews && `${m.reviews} ${m.reviews === 1 ? "review" : "reviews"}`,
            ].filter(Boolean).join(" · ");
            return (
              <li key={m.id} className="rounded-2xl border border-stone-200 bg-white">
                <button onClick={() => toggle(m.id)} aria-expanded={open} className="w-full text-left p-4 sm:p-5 flex items-start gap-3">
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-[15px] font-semibold text-stone-900 break-all">
                        {m.handle ? `@${m.handle}` : m.name || m.email}
                      </span>
                      <StatusPill status={m.status} />
                      {m.role !== "user" && <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">{m.role}</span>}
                    </span>
                    <span className="block mt-1 text-xs text-stone-500 break-all">
                      {[m.handle && m.name, m.handle || m.name ? m.email : null, m.location].filter(Boolean).join(" · ")}
                    </span>
                    <span className="block mt-1 text-xs text-stone-500">
                      {m.signed_in ? "Joined" : "First seen"} {day(m.created_at)}
                      {m.signed_in ? ` · last seen ${day(m.last_seen_at)}` : ""}
                      {did ? ` · ${did}` : ""}
                    </span>
                  </span>
                  {open ? <ChevronUp className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />}
                </button>

                {open && (
                  <div className="border-t border-stone-100 p-4 sm:p-5">
                    {detailLoading || !detail ? (
                      <p className="text-sm text-stone-500">Loading...</p>
                    ) : (
                      <MemberDetail d={detail} />
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a href={`mailto:${m.email}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50">
                        <Mail className="w-4 h-4" /> Email
                      </a>
                      {m.status === "suspended" ? (
                        <button onClick={() => act(m.id, "unsuspend")} disabled={busyId === m.id}
                          className="px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 disabled:opacity-60">
                          Restore
                        </button>
                      ) : !["admin", "chris"].includes(m.role) && (
                        <button
                          onClick={() => { if (window.confirm(`Suspend ${m.email}? They will be treated as signed out until restored.`)) act(m.id, "suspend"); }}
                          disabled={busyId === m.id}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-red-600 hover:bg-red-50 disabled:opacity-60">
                          <Ban className="w-4 h-4" /> Suspend
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {members.length === 200 && <p className="mt-4 text-xs text-stone-500">Showing the first 200. Search to narrow it down.</p>}
    </div>
  );
}

function Section({ title, items, render }: { title: string; items: Item[]; render: (i: Item) => React.ReactNode }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mb-4">
      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">{title} ({items.length})</p>
      <ul className="space-y-1.5">
        {items.map((i) => (
          <li key={String(i.id)} className="text-sm text-stone-700 leading-snug">{render(i)}</li>
        ))}
      </ul>
    </div>
  );
}

const Meta = ({ children }: { children: React.ReactNode }) => <span className="text-xs text-stone-500"> · {children}</span>;

function MemberDetail({ d }: { d: Detail }) {
  const m = d.member;
  const nothing = [d.vehicles, d.listings, d.messages, d.reviews, d.registry, d.contributions, d.applications, d.orders, d.shops]
    .every((x) => !x || x.length === 0);
  return (
    <div>
      {(m.bio || m.phone) && (
        <p className="text-sm text-stone-600 mb-4">
          {m.bio}{m.bio && m.phone ? " · " : ""}{m.phone && <a href={`tel:${m.phone}`} className="underline">{String(m.phone)}</a>}
        </p>
      )}
      {nothing && <p className="text-sm text-stone-500">Nothing on record yet beyond the account itself.</p>}

      <Section title="Shops they run" items={d.shops} render={(i) => (
        <Link href={`/services/${i.slug}`} className="font-semibold underline underline-offset-2">{String(i.business_name)}</Link>
      )} />
      <Section title="Cars in The Stable" items={d.vehicles} render={(i) => (
        <>
          {[i.year, i.make, i.model].filter(Boolean).join(" ")}{i.nickname ? ` "${i.nickname}"` : ""}
          <Meta>{String(i.visibility)}</Meta><Meta>added {day(String(i.created_at))}</Meta>
        </>
      )} />
      <Section title="Listings" items={d.listings} render={(i) => (
        <>
          <Link href={`/listings/${i.slug}`} className="underline underline-offset-2">{[i.year, i.make, i.model].filter(Boolean).join(" ")}</Link>
          <Meta>{String(i.status)}</Meta><Meta>{day(String(i.created_at))}</Meta>
        </>
      )} />
      <Section title="Inquiries sent" items={d.messages} render={(i) => (
        <>
          <span className="font-medium">{String(i.provider_name || i.listing_title || i.type || "Message")}</span>
          <Meta>{day(String(i.created_at))}</Meta>{i.junk ? <Meta>junk</Meta> : null}
          <span className="block text-xs text-stone-500">{String(i.excerpt ?? "")}</span>
        </>
      )} />
      <Section title="Reviews written" items={d.reviews} render={(i) => (
        <>
          <span className="font-medium">{String(i.provider_name ?? "Provider")}</span>
          <Meta>{String(i.rating)} of 5</Meta><Meta>{String(i.status)}</Meta><Meta>{day(String(i.created_at))}</Meta>
          <span className="block text-xs text-stone-500">{String(i.excerpt ?? "")}</span>
        </>
      )} />
      <Section title="Register submissions" items={d.registry} render={(i) => (
        <>
          <span className="font-medium">{String(i.model_slug)}{i.chassis ? ` #${i.chassis}` : ""}</span>
          <Meta>{String(i.kind)}</Meta><Meta>{String(i.status)}</Meta><Meta>{day(String(i.created_at))}</Meta>
          <span className="block text-xs text-stone-500">{String(i.excerpt ?? "")}</span>
        </>
      )} />
      <Section title="Corrections and stories" items={d.contributions} render={(i) => (
        <>
          <span className="font-medium">{String(i.kind)}</span><Meta>{String(i.status)}</Meta><Meta>{day(String(i.created_at))}</Meta>
          <span className="block text-xs text-stone-500">{String(i.excerpt ?? "")}</span>
        </>
      )} />
      <Section title="Provider applications" items={d.applications} render={(i) => (
        <>{String(i.business_name)}<Meta>{String(i.category)}</Meta><Meta>{String(i.status)}</Meta><Meta>{day(String(i.created_at))}</Meta></>
      )} />
      <Section title="Orders" items={d.orders} render={(i) => (
        <>Order {String(i.id)}<Meta>{String(i.status)}</Meta><Meta>{day(String(i.created_at))}</Meta></>
      )} />
    </div>
  );
}

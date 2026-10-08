"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, RefreshCw, LogOut, ArrowLeft } from "lucide-react";

// /team/board
//
// The live board: every number the business is being run on, in one screen,
// refreshed from the database every five minutes. Phone first, because that
// is where it gets looked at. No names on this page, only counts, so it is
// safe to glance at in company.

interface Stats {
  generated_at: string;
  providers: { live: number; linked: number; applications_pending: number };
  pipeline: { staged: number; sent: number; claimed: number; list_only: number; declined: number; sent_7d: number };
  leads: { total: number; last_7d: number; last_30d: number; car_enquiries_7d: number; contact_clicks_7d: number };
  marketplace: {
    cars_active: number; cars_in_progress: number; cars_sold: number; cars_new_7d: number;
    parts_live: number; parts_pending: number; wanted_open: number; wanted_pending: number;
  };
  research: { models_published: number; models_draft: number; models_published_30d: number; registry_chassis: number };
  community: { reviews_published: number; reviews_pending: number; users_total: number; users_new_7d: number; stable_vehicles: number };
}

const REFRESH_MS = 5 * 60 * 1000;

function ago(iso: string | null): string {
  if (!iso) return "";
  const s = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 60) return "just now";
  const m = Math.round(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.round(m / 60);
  return `${h} hr ago`;
}

function Tile({
  value, label, note, tone,
}: { value: number; label: string; note?: string; tone?: "accent" | "warn" | "muted" }) {
  const color = tone === "accent" ? "#1E6091" : tone === "warn" ? "#b45309" : tone === "muted" ? "#6b7280" : undefined;
  return (
    <div className="bg-white rounded-xl border border-border p-4 min-w-0">
      <p className="text-3xl font-bold text-foreground tabular-nums leading-none" style={{ color }}>
        {value.toLocaleString()}
      </p>
      <p className="text-xs font-medium text-foreground mt-2">{label}</p>
      {note && <p className="text-[11px] text-text-secondary mt-0.5">{note}</p>}
    </div>
  );
}

function Section({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        {hint && <p className="text-[11px] text-text-secondary text-right">{hint}</p>}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{children}</div>
    </section>
  );
}

export default function TeamBoard() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tick, setTick] = useState(0);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stats", { cache: "no-store" });
      if (res.status === 401) {
        router.push("/team");
        return;
      }
      if (!res.ok) {
        setError("The database did not answer. The numbers below are the last ones it gave.");
        return;
      }
      setStats((await res.json()) as Stats);
      setError(null);
    } catch {
      setError("Could not reach the site. The numbers below are the last ones it gave.");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    load();
    const refresh = setInterval(load, REFRESH_MS);
    // Re-render the "x min ago" line without refetching.
    const clock = setInterval(() => setTick((t) => t + 1), 30_000);
    const onVisible = () => { if (document.visibilityState === "visible") load(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(refresh);
      clearInterval(clock);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [load]);

  async function handleLogout() {
    await fetch("/api/team/auth", { method: "DELETE" });
    router.push("/team");
  }

  const pipelineTotal = stats
    ? stats.pipeline.staged + stats.pipeline.sent + stats.pipeline.claimed + stats.pipeline.list_only
    : 0;
  const claimRate = stats && stats.pipeline.sent + stats.pipeline.claimed + stats.pipeline.list_only > 0
    ? Math.round(
        ((stats.pipeline.claimed + stats.pipeline.list_only) /
          (stats.pipeline.sent + stats.pipeline.claimed + stats.pipeline.list_only + stats.pipeline.declined)) * 100,
      )
    : null;

  void tick;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f4f0" }}>
      <header className="border-b border-border bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: "#1E6091" }}
            >
              FS
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground leading-tight">Live board</p>
              <p className="text-xs text-text-secondary truncate">
                {stats ? `Updated ${ago(stats.generated_at)}` : "Loading"}
                {loading && stats ? " · refreshing" : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={load}
              disabled={loading}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-foreground disabled:opacity-60"
              aria-label="Refresh"
            >
              {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <Link
              href="/team/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-foreground"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Console</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-foreground"
            >
              <LogOut className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {error && (
          <p className="text-xs rounded-lg border px-3 py-2" style={{ color: "#b45309", background: "#fef3c7", borderColor: "#fcd34d" }}>
            {error}
          </p>
        )}

        {!stats && !error && (
          <div className="flex items-center gap-2 text-sm text-text-secondary py-12 justify-center">
            <Loader2 className="w-4 h-4 animate-spin" /> Counting
          </div>
        )}

        {stats && (
          <>
            <Section title="Supply" hint="Supply is the bottleneck. This section is the business.">
              <Tile value={stats.providers.live} label="Providers live" note="Showing in the directory" tone="accent" />
              <Tile value={stats.providers.linked} label="Managing their own page" note="Have a login" />
              <Tile value={pipelineTotal} label="In the pipeline" note="Staged, invited, approved" />
              <Tile value={stats.providers.applications_pending} label="Applications waiting" note="Public form, not yet reviewed" tone={stats.providers.applications_pending > 0 ? "warn" : undefined} />
            </Section>

            <Section
              title="Outreach pipeline"
              hint={claimRate !== null ? `${claimRate}% of invited shops have said yes` : "No invites answered yet"}
            >
              <Tile value={stats.pipeline.staged} label="To invite" note="Profile built, not yet sent" />
              <Tile value={stats.pipeline.sent} label="Invited" note={`${stats.pipeline.sent_7d} sent in the last 7 days`} />
              <Tile value={stats.pipeline.claimed + stats.pipeline.list_only} label="Said yes" note={`${stats.pipeline.claimed} managing, ${stats.pipeline.list_only} list only`} tone="accent" />
              <Tile value={stats.pipeline.declined} label="Declined" tone="muted" />
            </Section>

            <Section title="Demand" hint="Enquiries sent to shops through the site">
              <Tile value={stats.leads.last_7d} label="Leads, 7 days" tone="accent" />
              <Tile value={stats.leads.last_30d} label="Leads, 30 days" />
              <Tile value={stats.leads.total} label="Leads, all time" />
              <Tile value={stats.leads.contact_clicks_7d} label="Phone and web clicks, 7 days" note="Signed-in visitors revealing contact details" />
            </Section>

            <Section title="For sale">
              <Tile value={stats.marketplace.cars_active} label="Cars listed" note={`${stats.marketplace.cars_new_7d} new in 7 days, ${stats.marketplace.cars_sold} sold`} tone="accent" />
              <Tile value={stats.marketplace.cars_in_progress} label="Listings in progress" note="Started, not yet live" />
              <Tile value={stats.marketplace.parts_live} label="Parts and memorabilia" note={stats.marketplace.parts_pending > 0 ? `${stats.marketplace.parts_pending} waiting for approval` : "Nothing waiting"} tone={stats.marketplace.parts_pending > 0 ? "warn" : undefined} />
              <Tile value={stats.marketplace.wanted_open} label="Open Asks" note={stats.marketplace.wanted_pending > 0 ? `${stats.marketplace.wanted_pending} waiting for approval` : "Wanted board"} tone={stats.marketplace.wanted_pending > 0 ? "warn" : undefined} />
            </Section>

            <Section title="Research" hint="The SEO engine">
              <Tile value={stats.research.models_published} label="Model histories live" note={`${stats.research.models_published_30d} published in 30 days`} tone="accent" />
              <Tile value={stats.research.models_draft} label="In draft" />
              <Tile value={stats.research.registry_chassis} label="Chassis on the register" />
              <Tile value={stats.leads.car_enquiries_7d} label="Car enquiries, 7 days" note="Messages on listings" />
            </Section>

            <Section title="Community">
              <Tile value={stats.community.reviews_published} label="Reviews published" note={stats.community.reviews_pending > 0 ? `${stats.community.reviews_pending} waiting` : "Rated by real owners"} tone={stats.community.reviews_pending > 0 ? "warn" : undefined} />
              <Tile value={stats.community.users_total} label="Accounts" note={`${stats.community.users_new_7d} new in 7 days`} />
              <Tile value={stats.community.stable_vehicles} label="Cars in Stables" note="Owners keeping a record" />
            </Section>

            <p className="text-[11px] text-text-secondary">
              Refreshes every five minutes and whenever you come back to this tab. Counts come straight from the database; nothing here is cached.
            </p>
          </>
        )}
      </main>
    </div>
  );
}

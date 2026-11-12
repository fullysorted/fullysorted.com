import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Model histories on the homepage. Replaced MarketMovers on 2026-09-16: the
 * market movement feed is sample data until a licensed comps feed lands, and
 * the model histories are the one part of Research that is alive today.
 *
 * Server component, no client state. The page passes in published models
 * that have a photo; this only lays them out.
 */

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

export type ResearchPick = {
  slug: string;
  make: string;
  model: string;
  yearStart: number | null;
  yearEnd: number | null;
  heroPhoto: string;
  summary: string | null;
};

function years(p: ResearchPick): string | null {
  if (!p.yearStart) return null;
  if (!p.yearEnd || p.yearEnd === p.yearStart) return String(p.yearStart);
  return `${p.yearStart}-${p.yearEnd}`;
}

function clip(text: string | null, max = 120): string | null {
  if (!text) return null;
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")) + "...";
}

export function ResearchPicks({ picks, total }: { picks: ResearchPick[]; total: number }) {
  if (picks.length === 0) return null;

  return (
    <section className="py-16 sm:py-20" style={{ background: "var(--bg-primary)", borderTop: `1px solid ${RULE}` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
              Research
            </p>
            <h2 className="font-display text-3xl sm:text-[2.4rem] leading-[1.1] tracking-tight" style={{ color: INK }}>
              Know the car before you buy it.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: MUTED }}>
              Model histories with sources: what was built, what changed year to year,
              what to look for and what goes wrong. A Beetle gets the same
              research as a 250 GT Lusso.
            </p>
          </div>
          <Link
            href="/research/models"
            className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline underline-offset-4"
            style={{ color: TEAL }}
          >
            All {total} model histories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2026-11-11: one history of the day, large, with the next few as
            a list. Replaces the six equal cards. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Link href={`/research/models/${picks[0].slug}`} className="group block lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden" style={{ background: INK }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={picks[0].heroPhoto}
                alt={`${picks[0].make} ${picks[0].model}`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Link>
          <div className="lg:col-span-5">
            <p className="text-sm font-bold" style={{ color: INK }}>Today&apos;s history</p>
            <Link href={`/research/models/${picks[0].slug}`} className="group block mt-2">
              <span className="font-display text-3xl sm:text-[2.4rem] leading-[1.05] group-hover:underline underline-offset-4" style={{ color: INK }}>
                {picks[0].make} {picks[0].model}
              </span>
              {years(picks[0]) && (
                <span className="block mt-2 text-[12px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: MUTED }}>
                  {years(picks[0])}
                </span>
              )}
              {clip(picks[0].summary, 200) && (
                <span className="block mt-3 text-base leading-relaxed" style={{ color: MUTED }}>
                  {clip(picks[0].summary, 200)}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold" style={{ color: TEAL }}>
                Read the history <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            {picks.length > 1 && (
              <ul className="mt-8" style={{ borderTop: `1px solid ${RULE}` }}>
                {picks.slice(1).map((p) => (
                  <li key={p.slug} style={{ borderBottom: `1px solid ${RULE}` }}>
                    <Link href={`/research/models/${p.slug}`} className="group flex items-baseline justify-between gap-4 py-3">
                      <span className="font-semibold group-hover:underline underline-offset-4" style={{ color: INK }}>
                        {p.make} {p.model}
                      </span>
                      {years(p) && (
                        <span className="text-[11px] uppercase shrink-0" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: MUTED }}>
                          {years(p)}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

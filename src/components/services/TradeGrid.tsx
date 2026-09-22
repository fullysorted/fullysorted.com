import Link from "next/link";
import { tradeHref } from "@/lib/category-slugs";
import { ArrowRight } from "lucide-react";
import { TRADE_CATEGORIES } from "@/lib/service-categories";

/**
 * The ownership-year trade grid, in the two registers the site uses.
 *
 * Swapped 2026-09-14 on Chris's call: the PHOTO cards (the strongest thing on
 * the site, and the founder's own photography) moved from /about to the
 * homepage, and the TYPOGRAPHIC cards moved the other way. About is where the
 * dry explanation belongs; the homepage is where the pictures earn their keep.
 *
 * Server-safe on purpose. No "use client" and no framer-motion, so /about
 * stays a server component. The homepage animates its own section header.
 *
 * Only eight of the ten trades have a photo (upholstery and title &
 * registration do not). Those fall back to the category tint rather than
 * shipping an empty navy box.
 */

const INK = "#1a1a18";
const MUTED = "#6b6b5e";
const BLUE = "#1E6091";
const NAVY = "#0F2032";
const RULE = "rgba(26,26,24,0.12)";

const CATEGORY_PHOTOS = new Set([
  "inspection",
  "transport",
  "mechanical",
  "bodywork",
  "restoration",
  "detailing",
  "storage",
  "photography",
]);

/** The verb rail: ten dated ticks across a hairline, desktop only. */
export function OwnershipYearRail() {
  return (
    <div
      className="hidden lg:grid mb-6"
      style={{ gridTemplateColumns: `repeat(${TRADE_CATEGORIES.length}, minmax(0, 1fr))` }}
      aria-hidden
    >
      {TRADE_CATEGORIES.map((c, i) => (
        <div key={c.key} className="relative pt-4">
          <span className="absolute top-0 left-0 right-0 h-px" style={{ background: RULE }} />
          <span
            className="absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full"
            style={{ background: i === 0 ? "#B08D3F" : INK }}
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: MUTED }}>
            {c.verb}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Photo cards. Four across on desktop, two on tablet, one on a phone. */
export function TradeGridPhoto() {
  return (
    <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {TRADE_CATEGORIES.map((c, i) => (
        <li key={c.key}>
          <Link
            href={tradeHref(c.key)}
            className="group block h-full overflow-hidden rounded-xl bg-white transition-transform hover:-translate-y-0.5"
            style={{ border: `1px solid ${RULE}` }}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden"
              style={{ background: CATEGORY_PHOTOS.has(c.key) ? NAVY : c.tint }}
            >
              {CATEGORY_PHOTOS.has(c.key) && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={`/images/services/${c.key}.jpg`}
                  alt=""
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,32,50,0.7) 0%, rgba(15,32,50,0) 55%)" }}
                aria-hidden
              />
              <span className="absolute left-3 bottom-2.5 price-display text-xs text-white/85">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                {c.verb}
              </span>
              <h3
                className="font-display text-base sm:text-lg font-semibold tracking-tight leading-snug mt-1"
                style={{ color: INK }}
              >
                {c.longLabel}
              </h3>
              <p className="mt-1 font-display text-sm italic" style={{ color: MUTED }}>
                &ldquo;{c.askedFor}&rdquo;
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** Typographic cards. One ink, a 2px rule on top, no photography. */
export function TradeGridType() {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {TRADE_CATEGORIES.map((c, i) => (
        <li key={c.key}>
          <Link
            href={tradeHref(c.key)}
            className="group flex h-full flex-col pt-4"
            style={{ borderTop: `2px solid ${INK}` }}
          >
            <div className="flex items-baseline justify-between">
              <span className="price-display text-xs tabular-nums" style={{ color: MUTED }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                {c.verb}
              </span>
            </div>
            <h3
              className="font-display text-[1.35rem] font-semibold tracking-tight leading-snug mt-3"
              style={{ color: INK }}
            >
              {c.longLabel}
            </h3>
            <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: MUTED }}>
              {c.blurb}
            </p>
            <p className="mt-4 font-display text-sm italic" style={{ color: MUTED }}>
              &ldquo;{c.askedFor}&rdquo;
            </p>
            <span
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-0.5"
              style={{ color: BLUE }}
            >
              Find one near you <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

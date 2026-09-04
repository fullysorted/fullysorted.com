import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  ExternalLink,
  Gavel,
  Globe,
  Landmark,
  Receipt,
  Store,
} from "lucide-react";
import {
  MARKETPLACES,
  MARKETPLACE_DATA_RETRIEVED,
  type Marketplace,
  type MarketplaceFee,
} from "@/lib/data/marketplaces";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";

const PAGE_URL = "https://fullysorted.com/research/where-to-buy";

export const metadata: Metadata = {
  title: "Where to Buy a Collector Car",
  description:
    "Buyer's premiums, seller costs and reserve rules at every major collector car auction house and marketplace. Fees retrieved " +
    `${MARKETPLACE_DATA_RETRIEVED} from each venue's own terms.`,
  alternates: { canonical: "/research/where-to-buy" },
};

/* ── Derivation helpers ────────────────────────────────────────────────────
   Every figure on this page comes out of src/lib/data/marketplaces.ts. Nothing
   here restates a fee in prose: the helpers pick rows out of each venue's fee
   list by label, and the worked example parses its numbers out of the Bring a
   Trailer row rather than repeating them. If the data file changes, the page
   changes with it — including the arithmetic.                              */

const KIND_LABEL: Record<Marketplace["kind"], string> = {
  "online-auction": "Online auction",
  "live-auction": "Live auction",
  classifieds: "Classifieds",
  aggregator: "Aggregator",
};

const KIND_GROUPS: {
  kind: Marketplace["kind"];
  title: string;
  blurb: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}[] = [
  {
    kind: "online-auction",
    title: "Online auctions",
    blurb:
      "Timed listings that close on a clock, with the fee taken from the buyer and a flat cost to the seller.",
    icon: Gavel,
  },
  {
    kind: "live-auction",
    title: "Live auctions",
    blurb:
      "Catalog sales with a rostrum, pre-sale estimates and a tiered premium that varies by sale location.",
    icon: Landmark,
  },
  {
    kind: "classifieds",
    title: "Classifieds",
    blurb: "Fixed-price advertising, where the sale is negotiated directly between the parties.",
    icon: Store,
  },
  {
    kind: "aggregator",
    title: "Aggregators and price databases",
    blurb: "Search and comparable-sale data rather than a transaction. The sale happens elsewhere.",
    icon: Globe,
  },
];

const NOT_CHARGED = /^(none|not published|not applicable)/i;

function buyerFees(m: Marketplace): MarketplaceFee[] {
  return m.fees.filter((f) => /buyer/i.test(f.label));
}

function sellerFees(m: Marketplace): MarketplaceFee[] {
  return m.fees.filter((f) => /seller|consignor|commission|listing fee|final value/i.test(f.label));
}

/** First sentence of a paragraph, for the summary column of the table. */
function firstSentence(text: string): string {
  const i = text.indexOf(". ");
  return i === -1 ? text : text.slice(0, i + 1);
}

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Pull the percentage, floor and ceiling out of a fee string such as
 *  "5% of the winning bid, minimum $250, maximum $7,500". Returns null if the
 *  string is not in that shape, in which case the page shows the text alone
 *  and skips the arithmetic rather than inventing numbers. */
function parseCappedPercentFee(value: string) {
  const pct = value.match(/([\d.]+)\s*%/);
  const min = value.match(/minimum\s*\$([\d,]+)/i);
  const max = value.match(/maximum\s*\$([\d,]+)/i);
  if (!pct || !min || !max) return null;
  const toNumber = (s: string) => Number(s.replace(/,/g, ""));
  return {
    pct: Number(pct[1]),
    min: toNumber(min[1]),
    max: toNumber(max[1]),
  };
}

/* ── Small presentational pieces ──────────────────────────────────────── */

function KindBadge({ kind }: { kind: Marketplace["kind"] }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
      style={{ background: "rgba(30,96,145,0.08)", color: "#1E6091" }}
    >
      {KIND_LABEL[kind]}
    </span>
  );
}

function FeeCell({ fees }: { fees: MarketplaceFee[] }) {
  if (fees.length === 0) return <span style={{ color: "#9a9a8a" }}>–</span>;
  const [first, ...rest] = fees;
  return (
    <div>
      <span className="block text-[11px] uppercase tracking-wider" style={{ color: "#9a9a8a" }}>
        {first.label}
      </span>
      <span style={{ color: "#1a1a18" }}>{first.value}</span>
      {rest.length > 0 && (
        <span className="block text-xs mt-0.5" style={{ color: "#9a9a8a" }}>
          +{rest.length} more below
        </span>
      )}
    </div>
  );
}

export default function WhereToBuyPage() {
  const groups = KIND_GROUPS.map((g) => ({
    ...g,
    venues: MARKETPLACES.filter((m) => m.kind === g.kind),
  })).filter((g) => g.venues.length > 0);

  // Which venues add a charge to the buyer's side, and which do not.
  const buyerFeeVenues = MARKETPLACES.filter((m) =>
    buyerFees(m).some((f) => !NOT_CHARGED.test(f.value.trim())),
  );
  const noBuyerFeeVenues = MARKETPLACES.filter(
    (m) => buyerFees(m).length > 0 && buyerFees(m).every((f) => /^none/i.test(f.value.trim())),
  );

  // The worked example, built from the Bring a Trailer row in the data file.
  const bat = MARKETPLACES.find((m) => m.slug === "bring-a-trailer");
  const batFee = bat?.fees.find((f) => f.label === "Buyer's fee");
  const parsed = batFee ? parseCappedPercentFee(batFee.value) : null;
  const exampleBids = [4_000, 25_000, 100_000, 250_000];
  const exampleRows = parsed
    ? exampleBids.map((bid) => {
        const raw = (bid * parsed.pct) / 100;
        const fee = Math.min(Math.max(raw, parsed.min), parsed.max);
        return { bid, fee, total: bid + fee, floored: raw < parsed.min, capped: raw > parsed.max };
      })
    : [];
  const capBindsAt = parsed ? (parsed.max * 100) / parsed.pct : null;
  const floorBindsBelow = parsed ? (parsed.min * 100) / parsed.pct : null;

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Collector car auction houses and marketplaces",
    description:
      "Major collector car auction houses and marketplaces with their published buyer fees, seller costs and reserve terms.",
    url: PAGE_URL,
    numberOfItems: MARKETPLACES.length,
    itemListElement: MARKETPLACES.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${PAGE_URL}#${m.slug}`,
      item: {
        "@type": "Organization",
        name: m.name,
        description: m.summary,
        ...(m.sources[0]?.url ? { sameAs: m.sources[0].url } : {}),
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
      { "@type": "ListItem", position: 2, name: "Research", item: "https://fullysorted.com/research" },
      { "@type": "ListItem", position: 3, name: "Where to Buy", item: PAGE_URL },
    ],
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="marketplaces" />
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="relative overflow-hidden text-white">
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 80% -10%, rgba(30,96,145,0.38) 0%, rgba(14,33,54,0) 60%), linear-gradient(160deg, #10233b 0%, #0b1a2e 55%, #0a1626 100%)",
          }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 text-stone-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Research
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1" aria-hidden="true">
              {["#1E6091", "#1E6091", "#B08D3F"].map((c) => (
                <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
              ))}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Marketplaces
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4">
            Where to buy a collector car
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-stone-200">
            A reference table of {MARKETPLACES.length}{' '}major collector car auction houses and
            marketplaces, and what each one charges. Every figure below was taken from the venue&apos;s own
            published terms on {MARKETPLACE_DATA_RETRIEVED} and links back to the page it came from.
            Where a venue publishes no number, that is what this page says.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* ── The mechanic buyers misread ───────────────────────────────── */}
        <section
          className="rounded-2xl p-5 sm:p-7"
          style={{ background: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.28)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-4 h-4" style={{ color: "#8a6d2f" }} />
            <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#8a6d2f" }}>
              The &ldquo;Sold for&rdquo; figure is not what the car costs
            </h2>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "#1a1a18" }}>
            At most of the venues below, the buyer&apos;s fee is charged{" "}
            <strong>on top of</strong> the winning bid rather than taken out of what the seller
            receives. The headline result quoted in a listing, a results table or a price index is
            therefore the bid alone. The buyer pays that number plus the fee, before tax, title and
            transport.
          </p>

          {bat && batFee && (
            <div className="mt-5">
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                Worked through {bat.name}, which publishes a fee of{" "}
                <span style={{ color: "#1a1a18" }}>{batFee.value}</span>:
              </p>

              {parsed ? (
                <>
                  <div
                    className="mt-3 overflow-x-auto rounded-xl"
                    style={{ background: "#ffffff", border: "1px solid #e5e5dc" }}
                  >
                    <table className="w-full text-sm" style={{ minWidth: "34rem" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid #e5e5dc" }}>
                          <th
                            className="text-left font-bold uppercase tracking-wider text-[11px] px-4 py-2.5"
                            style={{ color: "#9a9a8a" }}
                          >
                            Winning bid
                          </th>
                          <th
                            className="text-left font-bold uppercase tracking-wider text-[11px] px-4 py-2.5"
                            style={{ color: "#9a9a8a" }}
                          >
                            Buyer&apos;s fee
                          </th>
                          <th
                            className="text-left font-bold uppercase tracking-wider text-[11px] px-4 py-2.5"
                            style={{ color: "#9a9a8a" }}
                          >
                            Buyer pays
                          </th>
                          <th
                            className="text-left font-bold uppercase tracking-wider text-[11px] px-4 py-2.5"
                            style={{ color: "#9a9a8a" }}
                          >
                            Effective rate
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {exampleRows.map((r) => (
                          <tr key={r.bid} style={{ borderTop: "1px solid #f0efe8" }}>
                            <td className="px-4 py-2.5 tabular-nums" style={{ color: "#1a1a18" }}>
                              {usd(r.bid)}
                            </td>
                            <td className="px-4 py-2.5 tabular-nums" style={{ color: "#1a1a18" }}>
                              {usd(r.fee)}
                              {r.floored && (
                                <span className="text-xs" style={{ color: "#9a9a8a" }}>
                                  {" "}
                                  (minimum)
                                </span>
                              )}
                              {r.capped && (
                                <span className="text-xs" style={{ color: "#9a9a8a" }}>
                                  {" "}
                                  (capped)
                                </span>
                              )}
                            </td>
                            <td
                              className="px-4 py-2.5 font-bold tabular-nums"
                              style={{ color: "#1E6091" }}
                            >
                              {usd(r.total)}
                            </td>
                            <td className="px-4 py-2.5 tabular-nums" style={{ color: "#6b6b5e" }}>
                              {((r.fee / r.bid) * 100).toFixed(1)}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: "#6b6b5e" }}>
                    The stated {parsed.pct}% only applies between the two limits. Below a bid of{" "}
                    {floorBindsBelow !== null && usd(floorBindsBelow)} the {usd(parsed.min)} minimum
                    takes over and the effective rate climbs; above{" "}
                    {capBindsAt !== null && usd(capBindsAt)} the {usd(parsed.max)} maximum takes over
                    and the effective rate falls away. A seven-figure result carries the same{" "}
                    {usd(parsed.max)} as a {capBindsAt !== null && usd(capBindsAt)} one.
                  </p>
                </>
              ) : (
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "#6b6b5e" }}>
                  {batFee.note}
                </p>
              )}
            </div>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-wider mb-1"
                style={{ color: "#8a6d2f" }}
              >
                Charge a published buyer-side fee
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                {buyerFeeVenues.map((m) => m.name).join(", ")}. Read every result from these venues
                as bid plus fee.
              </p>
            </div>
            <div>
              <p
                className="text-[11px] font-bold uppercase tracking-wider mb-1"
                style={{ color: "#8a6d2f" }}
              >
                Publish no buyer-side fee
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                {noBuyerFeeVenues.map((m) => m.name).join(", ")}. Results from these venues and
                hammer-plus-premium results are not directly comparable until the fee is added to
                one side.
              </p>
            </div>
          </div>

          <p className="text-sm mt-5 leading-relaxed" style={{ color: "#6b6b5e" }}>
            Buyer&apos;s premium, reserve and hammer price are defined in the{" "}
            <Link href="/research/glossary" className="font-semibold hover:underline" style={{ color: "#1E6091" }}>
              glossary
            </Link>
            .
          </p>
        </section>

        {/* ── Comparison table ──────────────────────────────────────────── */}
        <section className="mt-12">
          <div className="flex items-center gap-2 mb-3">
            <Receipt className="w-4 h-4" style={{ color: "#6b6b5e" }} />
            <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>
              What each venue charges
            </h2>
          </div>
          <p className="text-sm mb-4 leading-relaxed max-w-3xl" style={{ color: "#6b6b5e" }}>
            Fees retrieved {MARKETPLACE_DATA_RETRIEVED}. Venues change their terms, and several
            state different figures for different categories, sale locations or currencies. The
            venue&apos;s own fee page is the authoritative source; each one is linked in full below.
            Where a figure is recorded as not published, the venue does not state it publicly.
          </p>

          <div
            className="overflow-x-auto rounded-2xl"
            style={{ background: "#ffffff", border: "1px solid #e5e5dc" }}
          >
            <table className="w-full text-sm" style={{ minWidth: "56rem" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e5dc" }}>
                  {["Venue", "Type", "Buyer's fee", "Seller cost", "Reserve"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="text-left align-bottom font-bold uppercase tracking-wider text-[11px] px-4 py-3"
                      style={{ color: "#9a9a8a" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MARKETPLACES.map((m) => (
                  <tr key={m.slug} style={{ borderTop: "1px solid #f0efe8" }}>
                    <th scope="row" className="text-left align-top px-4 py-3.5 font-semibold">
                      <a
                        href={`#${m.slug}`}
                        className="hover:underline"
                        style={{ color: "#1E6091" }}
                      >
                        {m.name}
                      </a>
                    </th>
                    <td className="align-top px-4 py-3.5">
                      <KindBadge kind={m.kind} />
                    </td>
                    <td className="align-top px-4 py-3.5" style={{ minWidth: "14rem" }}>
                      <FeeCell fees={buyerFees(m)} />
                    </td>
                    <td className="align-top px-4 py-3.5" style={{ minWidth: "14rem" }}>
                      <FeeCell fees={sellerFees(m)} />
                    </td>
                    <td
                      className="align-top px-4 py-3.5"
                      style={{ color: "#6b6b5e", minWidth: "16rem" }}
                    >
                      {firstSentence(m.reserveModel)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-3" style={{ color: "#9a9a8a" }}>
            Percentages are of the winning bid or hammer price unless the venue states otherwise.
            Taxes, title, registration, storage and transport sit on top of everything shown here.
          </p>
        </section>

        {/* ── Venue detail, grouped by kind ─────────────────────────────── */}
        {groups.map((g) => (
          <section key={g.kind} className="mt-14">
            <div className="flex items-center gap-2 mb-1.5">
              <g.icon className="w-4 h-4" style={{ color: "#6b6b5e" }} />
              <h2
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#6b6b5e" }}
              >
                {g.title}
              </h2>
              <span className="text-xs" style={{ color: "#9a9a8a" }}>
                {g.venues.length}
              </span>
            </div>
            <p className="text-sm mb-5 max-w-3xl leading-relaxed" style={{ color: "#9a9a8a" }}>
              {g.blurb}
            </p>

            <div className="space-y-5">
              {g.venues.map((m) => (
                <article
                  key={m.slug}
                  id={m.slug}
                  className="rounded-2xl p-5 sm:p-7 scroll-mt-6"
                  style={{ background: "#ffffff", border: "1px solid #e5e5dc" }}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3
                      className="font-display font-semibold text-xl sm:text-2xl tracking-tight"
                      style={{ color: "#1a1a18" }}
                    >
                      {m.name}
                    </h3>
                    <KindBadge kind={m.kind} />
                    {m.founded && (
                      <span className="text-xs" style={{ color: "#9a9a8a" }}>
                        Founded {m.founded}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: "#3f3f36" }}>
                    {m.summary}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                    <span className="font-semibold" style={{ color: "#1a1a18" }}>
                      Best for:
                    </span>{" "}
                    {m.bestFor}
                  </p>

                  {/* Fees */}
                  <h4
                    className="mt-6 mb-2 text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: "#9a9a8a" }}
                  >
                    Published fees
                  </h4>
                  <dl className="space-y-3">
                    {m.fees.map((f) => (
                      <div
                        key={f.label}
                        className="grid gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] pt-3"
                        style={{ borderTop: "1px solid #f0efe8" }}
                      >
                        <dt className="text-sm font-semibold" style={{ color: "#1a1a18" }}>
                          {f.label}
                        </dt>
                        <dd className="text-sm" style={{ color: "#1a1a18" }}>
                          {f.value}
                          {f.note && (
                            <span className="block mt-1 leading-relaxed" style={{ color: "#6b6b5e" }}>
                              {f.note}
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Reserve */}
                  <h4
                    className="mt-6 mb-1.5 text-[11px] font-bold uppercase tracking-widest"
                    style={{ color: "#9a9a8a" }}
                  >
                    Reserve model
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#3f3f36" }}>
                    {m.reserveModel}
                  </p>

                  {/* Notes */}
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4
                        className="mb-2 text-[11px] font-bold uppercase tracking-widest"
                        style={{ color: "#9a9a8a" }}
                      >
                        Notes for buyers
                      </h4>
                      <ul className="space-y-2">
                        {m.buyerNotes.map((n) => (
                          <li key={n} className="text-sm leading-relaxed flex gap-2" style={{ color: "#3f3f36" }}>
                            <span aria-hidden="true" style={{ color: "#1E6091" }}>
                              ·
                            </span>
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4
                        className="mb-2 text-[11px] font-bold uppercase tracking-widest"
                        style={{ color: "#9a9a8a" }}
                      >
                        Notes for sellers
                      </h4>
                      <ul className="space-y-2">
                        {m.sellerNotes.map((n) => (
                          <li key={n} className="text-sm leading-relaxed flex gap-2" style={{ color: "#3f3f36" }}>
                            <span aria-hidden="true" style={{ color: "#B08D3F" }}>
                              ·
                            </span>
                            <span>{n}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sources */}
                  <h4
                    className="mt-6 mb-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5"
                    style={{ color: "#9a9a8a" }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Sources
                  </h4>
                  <ol className="space-y-1.5 list-decimal list-inside">
                    {m.sources.map((s) => (
                      <li key={s.url} className="text-sm" style={{ color: "#6b6b5e" }}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="font-medium hover:underline break-words"
                          style={{ color: "#1a1a18" }}
                        >
                          {s.title}
                        </a>
                        <span> · {s.publisher}</span>
                        <span style={{ color: "#9a9a8a" }}> · retrieved {s.retrieved}</span>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* ── Cross-links ───────────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#6b6b5e" }}>
            Next
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/research/glossary",
                title: "Glossary",
                blurb:
                  "Buyer's premium, reserve, hammer price and the rest of the language a listing assumes you already speak.",
              },
              {
                href: "/research/importing",
                title: "Importing",
                blurb:
                  "What a car bought at an overseas sale costs to land, and the agencies that have to agree before it does.",
              },
              {
                href: "/research/models",
                title: "Model histories",
                blurb: "Production numbers, specs and market context for the car before the venue.",
              },
              {
                href: "/browse",
                title: "Browse cars for sale",
                blurb: "Private and dealer listings on this site, each marked as which, with the flat listing fee stated up front.",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-2xl p-5 transition-colors hover:bg-white"
                style={{ background: "#ffffff", border: "1px solid #e5e5dc" }}
              >
                <span
                  className="flex items-center gap-1.5 font-semibold"
                  style={{ color: "#1E6091" }}
                >
                  {c.title} <ArrowRight className="w-4 h-4" />
                </span>
                <span className="block text-sm mt-1 leading-relaxed" style={{ color: "#6b6b5e" }}>
                  {c.blurb}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-xs mt-6 leading-relaxed" style={{ color: "#9a9a8a" }}>
            Fees retrieved {MARKETPLACE_DATA_RETRIEVED} from the sources cited against each venue.
            Terms change without notice and vary by sale, category and country; confirm the current
            figure with the venue before bidding or consigning.
          </p>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, Warehouse, Camera, BarChart3, ExternalLink, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Collector Car Insurance — what agreed value actually means",
  description:
    "A standard auto policy pays what a car is worth after depreciation. A collector policy pays the number you agreed up front. What agreed value means, what carriers usually require, and what to have ready before you call.",
  alternates: { canonical: "/insurance" },
};

/**
 * Editorial page, not a product.
 *
 * Insurance deliberately is NOT a directory category: there are no local
 * providers to list, review or book, so making it a filter would send people
 * to an empty result — which is exactly what the old homepage links did. This
 * page explains the one thing that actually costs owners money when they get
 * it wrong (agreed value vs actual cash value) and points at a specialist
 * carrier.
 *
 * The outbound link is env-driven so a referral URL can be swapped in without
 * a code change. Default is Hagerty's plain homepage, so nothing is broken or
 * misattributed before any programme is joined.
 */
const HAGERTY_URL =
  process.env.NEXT_PUBLIC_HAGERTY_URL || "https://www.hagerty.com/";

const VALUE_TYPES = [
  {
    term: "Agreed value",
    good: true,
    body:
      "You and the insurer settle on a figure before the policy starts, usually backed by photos, receipts and a valuation. If the car is a total loss, that is the figure the claim is settled against. This is what collector policies are for, and it is the only one of the three where you know the number in advance.",
  },
  {
    term: "Actual cash value",
    good: false,
    body:
      "What a standard auto policy uses. The car's replacement cost, less depreciation, decided after the loss by the insurer. For a car that has appreciated since you bought it, this is the gap that ruins people — the adjuster is valuing a used vehicle, not a collector one.",
  },
  {
    term: "Stated value",
    good: false,
    body:
      "Sounds like agreed value and often is not. Many stated-value policies pay the lesser of the stated figure or actual cash value, which means the number you wrote down is a ceiling rather than a promise. If a policy uses this phrase, ask which of the two gets paid on a total loss, and get the answer in writing.",
  },
];

const REQUIREMENTS = [
  "Another vehicle for daily driving — collector policies generally assume this is not your commuter",
  "Secured, enclosed storage, and carriers often ask what the building is like",
  "Limited or declared annual mileage, though flexible and higher-mileage options have become common",
  "Pleasure use: shows, club events, weekend driving — not commuting or business use",
  "A driving record and, frequently, a minimum age",
];

const PREP = [
  {
    icon: BarChart3,
    title: "A defensible number",
    body: "Agreed value is a negotiation, and the person with comparable sales in hand does better. Our Value Guide leads with the median of real sold prices rather than the record one.",
    href: "/value-guide",
    cta: "Check the Value Guide",
  },
  {
    icon: Camera,
    title: "Photographs that show the car honestly",
    body: "Insurers want condition documented at the start, and so do you. Wide shots, interior, engine bay, underside, and the flaws as well as the good bits.",
    href: "/services?type=photography",
    cta: "Find a photographer",
  },
  {
    icon: Warehouse,
    title: "Where it lives",
    body: "Storage comes up on almost every collector application. If the car is kept somewhere secure and climate-managed, that is worth saying — and worth arranging if it is not.",
    href: "/services?type=storage",
    cta: "Find storage",
  },
  {
    icon: FileText,
    title: "The paper trail",
    body: "Restoration invoices, service records, provenance and production history all support the number you are asking for. Our model histories are cited, so they can be shown to somebody.",
    href: "/research/models",
    cta: "Read the model histories",
  },
];

export default function InsurancePage() {
  return (
    <div style={{ background: "#faf9f7" }}>
      {/* Hero */}
      <section style={{ background: "#0F2032" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px" style={{ background: "#B08D3F" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#D9BC72" }}>
              Insurance
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-[1.08] tracking-tight" style={{ color: "#fff" }}>
            A normal policy pays what your car depreciated to.
            <span style={{ color: "#8FBBDF" }}> A collector policy pays the number you agreed.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-3xl" style={{ color: "#C9D4E2" }}>
            It is the single most expensive detail in collector car ownership to get wrong, and it
            is decided by three words buried in a document nobody reads until the worst day. Here
            is what those words mean.
          </p>
        </div>
      </section>

      {/* The three value terms */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-2" style={{ color: "#1a1a18" }}>
          Three phrases, and only one of them is a promise
        </h2>
        <p className="text-base mb-8 max-w-3xl leading-relaxed" style={{ color: "#6b6b5e" }}>
          Ask any carrier which of these your policy uses. If the answer takes more than one
          sentence, ask again.
        </p>

        <div className="space-y-4">
          {VALUE_TYPES.map((v) => (
            <div
              key={v.term}
              className="rounded-2xl bg-white p-6"
              style={{
                border: "1px solid rgba(0,0,0,0.09)",
                borderLeft: `4px solid ${v.good ? "#4b8b2e" : "#B4462F"}`,
              }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <h3 className="font-display text-xl font-semibold tracking-tight" style={{ color: "#1a1a18" }}>
                  {v.term}
                </h3>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{
                    background: v.good ? "rgba(75,139,46,0.12)" : "rgba(180,70,47,0.10)",
                    color: v.good ? "#3d7326" : "#96371f",
                  }}
                >
                  {v.good ? "What you want" : "Read carefully"}
                </span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#55554a" }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What carriers ask for */}
      <section style={{ background: "#F5EFE6" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-2" style={{ color: "#1a1a18" }}>
            What a collector carrier usually wants to see
          </h2>
          <p className="text-base mb-7 max-w-3xl leading-relaxed" style={{ color: "#6b6b5e" }}>
            Specialist policies are cheaper than standard ones largely because the car is driven
            less and kept better. That trade shows up as conditions. These are the common ones —
            they vary by carrier and by state, so confirm the specifics with whoever writes it.
          </p>
          <ul className="space-y-3">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#1E6091" }} />
                <span className="text-sm sm:text-base leading-relaxed" style={{ color: "#55554a" }}>
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prep — internal links that are genuinely useful here */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-2" style={{ color: "#1a1a18" }}>
          What to have ready before you call
        </h2>
        <p className="text-base mb-8 max-w-3xl leading-relaxed" style={{ color: "#6b6b5e" }}>
          Agreed value is agreed, which means it is argued. Turn up with evidence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PREP.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-6 flex flex-col"
              style={{ border: "1px solid rgba(0,0,0,0.09)" }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                style={{ background: "#E8F0F8", color: "#1E6091" }}
              >
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold tracking-tight mb-2" style={{ color: "#1a1a18" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#6b6b5e" }}>
                {p.body}
              </p>
              <Link
                href={p.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
                style={{ color: "#1E6091" }}
              >
                {p.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Referral */}
      <section style={{ background: "#0F2032" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px" style={{ background: "#B08D3F" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#D9BC72" }}>
              Who we point people to
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-4" style={{ color: "#fff" }}>
            Hagerty
          </h2>
          <p className="text-base leading-relaxed max-w-3xl mb-6" style={{ color: "#C9D4E2" }}>
            A specialist collector car insurer, writing agreed-value policies for exactly this kind
            of car. We are not an agent and we do not sell policies — we point you at them because
            it is who we would call, and because a specialist underwriter is the difference between
            an adjuster who understands your car and one who looks it up in a used-car guide. Get
            your own quotes and compare.
          </p>
          <a
            href={HAGERTY_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: "#B08D3F", color: "#17202b" }}
          >
            Get a quote from Hagerty <ExternalLink className="w-4 h-4" />
          </a>

          <div
            className="mt-8 rounded-2xl p-5 flex items-start gap-3"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#8FBBDF" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#9fb5cd" }}>
              <strong style={{ color: "#C9D4E2" }}>Disclosure.</strong> Fully Sorted is not an
              insurance agent, broker or carrier, and nothing on this page is insurance advice or a
              recommendation about your particular situation. We may earn a referral fee if you take
              out a policy through this link. It costs you nothing, and it does not change what is
              written above. Coverage, conditions and availability vary by carrier and by state —
              read the policy and confirm the details with the insurer before you rely on any of it.
            </p>
          </div>
        </div>
      </section>

      {/* Back to services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <p className="text-base" style={{ color: "#6b6b5e" }}>
          Insured, and now it needs everything else.{" "}
          <Link href="/services" className="font-bold" style={{ color: "#1E6091" }}>
            Find a specialist near you
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

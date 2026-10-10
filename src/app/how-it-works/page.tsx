import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { TradeGridType } from "@/components/services/TradeGrid";
import { ListingCard } from "@/components/listings/ListingCard";
import { ModelCard } from "@/components/research/ModelCard";
import { StepReveal } from "@/components/how-it-works/StepReveal";
import { BriefMock, ReviewMock, ClaimMock, SellMock, PackageMock, ProviderCards, WantedMock } from "@/components/how-it-works/Mocks";
import { getRecentProviders } from "@/lib/data/providers";
import { getActiveVehicles } from "@/lib/data/listings";
import { getPublishedModelsWithMetaResult } from "@/lib/data/models";
import { tradeHref } from "@/lib/category-slugs";
import { FREE_LISTINGS_THRESHOLD } from "@/lib/listing-tiers";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Fully Sorted works for owners, shops, sellers and buyers: find a specialist, read the owner record, send a brief, list a car, read the model history.",
  alternates: { canonical: "/how-it-works" },
};

export const revalidate = 300;

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

/**
 * 2026-10-09: rebuilt as a walkthrough. Four audiences, a few steps each, and
 * every step shows the real piece of the site it describes (or a faithful
 * mock of one), so the page is a demo rather than a description. The old
 * page restated /about, /pricing and the FAQ and described two features that
 * are flagged off; none of that survives here.
 */

const SECTIONS = [
  { id: "owners", label: "Owners" },
  { id: "shops", label: "Shops" },
  { id: "selling", label: "Selling a car" },
  { id: "buying", label: "Buying a car" },
];

function SectionHead({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-10 sm:mb-14">
      <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-2" style={{ color: INK }}>{title}</h2>
    </div>
  );
}

function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white hover:opacity-90 transition-opacity" style={{ background: INK }}>
      {children} <ArrowRight className="w-4 h-4" aria-hidden />
    </Link>
  );
}

export default async function HowItWorksPage() {
  const [{ providers }, vehicles, modelsResult] = await Promise.all([
    getRecentProviders(3),
    getActiveVehicles().catch(() => []),
    getPublishedModelsWithMetaResult(),
  ]);
  const vehicle = vehicles[0] ?? null;
  const modelRow = modelsResult.rows.find((m) => m.hero_photo) ?? modelsResult.rows[0] ?? null;
  const model = modelRow
    ? {
        id: modelRow.id, slug: modelRow.slug, make: modelRow.make, model: modelRow.model, generation: modelRow.generation,
        year_start: modelRow.year_start, year_end: modelRow.year_end, production_total: modelRow.production_total,
        summary: modelRow.summary, overall_confidence: modelRow.overall_confidence,
        source_count: modelRow.source_count, claim_count: modelRow.claim_count, disputed_count: modelRow.disputed_count,
        hero_photo: modelRow.hero_photo ?? null,
      }
    : null;

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to find and hire a collector car specialist on Fully Sorted",
    step: [
      { "@type": "HowToStep", name: "Search by the job", text: "Pick the trade the car needs: inspection, transport, mechanical, body and paint, restoration, upholstery, detailing, storage, title and registration, photography." },
      { "@type": "HowToStep", name: "Read the owner record", text: "Every profile carries reviews from owners who used the shop. A shop can answer a review but never remove one." },
      { "@type": "HowToStep", name: "Send a brief", text: "Describe the car and the job once. The shop gets it by email and replies to you directly." },
      { "@type": "HowToStep", name: "Review the work", text: "When the job is done, your review becomes part of the record the next owner reads." },
    ],
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={[howTo]} />

      {/* Header, in the sitewide language */}
      <section style={{ background: "#FFFFFF", borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase mb-3" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>How it works</p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05]" style={{ color: INK }}>
            The record is the product.
          </h1>
          <p className="mt-4 text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Who worked on a car, what they did, and what the owner said afterwards. Everything on the site either adds to that record or reads from it.
          </p>
          <nav aria-label="Sections" className="flex flex-wrap gap-2 mt-8">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-white hover:bg-[#F4F6F5] transition-colors" style={{ border: `1px solid ${RULE}`, color: INK }}>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-24 sm:space-y-32">

        {/* Owners */}
        <section>
          <SectionHead id="owners" eyebrow="For owners" title="Find the person who knows your car." />
          <ol className="space-y-14 sm:space-y-20">
            <StepReveal
              n={1}
              title="Search by the job."
              body="Ten trades, in the order a car usually needs them across a year. Pick one, then narrow by marque, by city, or by whether the shop comes to you."
              demo={<TradeGridType />}
              caption="Live: the ten trades in the directory."
            />
            <StepReveal
              n={2}
              title="Read the owner record."
              body="Every profile carries reviews from the owners who used the shop. No average is shown until there are three. A shop can answer a review but never remove one."
              demo={providers.length > 0 ? <ProviderCards providers={providers} /> : <ReviewMock />}
              caption={providers.length > 0 ? "Live: the newest shops in the directory." : undefined}
              flip
            />
            <StepReveal
              n={3}
              title="Send a brief."
              body="Describe the car and the job once. The shop gets it by email with everything it needs to quote, and replies to you directly. You talk to the person doing the work."
              demo={<BriefMock />}
              caption="What the shop receives."
            />
            <StepReveal
              n={4}
              title="Review the work."
              body="When the job is done, your review goes on the shop's record for the next owner to read. That is the whole mechanism, and it is why the record is worth something."
              demo={<ReviewMock />}
              flip
            />
          </ol>
          <div className="mt-12"><Cta href="/services">Find a Pro</Cta></div>
        </section>

        {/* Shops */}
        <section>
          <SectionHead id="shops" eyebrow="For shops and specialists" title="Your page may already be built." />
          <ol className="space-y-14 sm:space-y-20">
            <StepReveal
              n={1}
              title="Approve the draft, or fix it first."
              body="For many shops we build a profile from public information and email the owner a link. It is not live until you approve it. If you never answer, it stays unpublished. If you want it down, it comes down the same day."
              demo={<ClaimMock />}
            />
            <StepReveal
              n={2}
              title="Enquiries arrive with the job described."
              body="An owner fills in the car, where it is and what it needs. You get an email, you quote, you invoice them yourself. Fully Sorted is never in the middle of the money."
              demo={<BriefMock />}
              flip
            />
            <StepReveal
              n={3}
              title="Answer every review in public."
              body="You can reply to any review. You cannot edit, hide or remove one, and nobody can pay to rank above you. Listing is free; founding members stay free for life."
              demo={<ReviewMock />}
            />
          </ol>
          <div className="mt-12"><Cta href="/services/apply">Get listed</Cta></div>
        </section>

        {/* Selling */}
        <section>
          <SectionHead id="selling" eyebrow="Selling a car" title="One fee, paid once. No clock." />
          <ol className="space-y-14 sm:space-y-20">
            <StepReveal
              n={1}
              title="Four fields and the photos."
              body="Year, make, model, asking price, then the pictures. The description comes after, and a line on what needs attention is encouraged. Buyers trust a listing that admits something."
              demo={<SellMock />}
            />
            <StepReveal
              n={2}
              title="Pick a package."
              body={`Three packages, prices shown at this step and paid once, up front. The first ${FREE_LISTINGS_THRESHOLD} cars on the site list free. No auction, no bidding, no buyer's premium.`}
              demo={<PackageMock />}
              flip
            />
            <StepReveal
              n={3}
              title="Buyers come to you."
              body="Your card shows the car, the city and the price, and whether a private owner or a dealer is selling. Buyers write through the site; you decide when to share a number. Mark it sold when it sells and nothing more is owed."
              demo={vehicle ? <div className="max-w-sm"><ListingCard vehicle={vehicle} /></div> : <SellMock />}
              caption={vehicle ? "Live: a car listed on the site right now." : undefined}
            />
          </ol>
          <div className="mt-12"><Cta href="/sell">Sell a Car</Cta></div>
        </section>

        {/* Buying */}
        <section>
          <SectionHead id="buying" eyebrow="Buying a car" title="Know the car before the wire goes." />
          <ol className="space-y-14 sm:space-y-20">
            <StepReveal
              n={1}
              title="Read the model history."
              body="What was built, what changed year to year, what goes wrong and what it costs to put right. Cited, with disputed figures flagged rather than smoothed over."
              demo={model ? <div className="max-w-sm"><ModelCard m={model} /></div> : <WantedMock />}
              caption={model ? "Live: one of the published model histories." : undefined}
            />
            <StepReveal
              n={2}
              title="Get it inspected where it sits."
              body="Find an inspector near the car, not near you, and have the report before you send money. Then find enclosed transport to bring it home, quoted door to door."
              demo={
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link href={tradeHref("inspection")} className="rounded-xl bg-white p-4 hover:shadow-md transition-shadow" style={{ border: `1px solid ${RULE}` }}>
                    <p className="font-semibold" style={{ color: INK }}>Find an inspector</p>
                    <p className="mt-1 text-sm" style={{ color: MUTED }}>Search by the car&apos;s city.</p>
                  </Link>
                  <Link href={tradeHref("transport")} className="rounded-xl bg-white p-4 hover:shadow-md transition-shadow" style={{ border: `1px solid ${RULE}` }}>
                    <p className="font-semibold" style={{ color: INK }}>Find transport</p>
                    <p className="mt-1 text-sm" style={{ color: MUTED }}>Enclosed, door to door.</p>
                  </Link>
                </div>
              }
              flip
            />
            <StepReveal
              n={3}
              title="Not listed yet? Post what you want."
              body="The Wanted board is where buyers describe the car they are after. Sellers and shops who have one write to you. Add a finder's fee if you want more people looking."
              demo={<WantedMock />}
            />
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">
            <Cta href="/cars">Cars for sale</Cta>
            <Link href="/wanted/new" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white hover:bg-[#F4F6F5] transition-colors" style={{ border: `1px solid ${RULE}`, color: INK }}>
              Post a wanted ad
            </Link>
          </div>
        </section>

        {/* Where it ends */}
        <section className="rounded-2xl bg-white p-8 sm:p-10" style={{ border: `1px solid ${RULE}` }}>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: INK }}>What we do not do.</h2>
          <p className="mt-3 text-base leading-relaxed max-w-2xl" style={{ color: MUTED }}>
            We do not hold the money, inspect the car, or guarantee either side. Shops never pay for position. How we make money is written down on the trust page before it starts.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/trust" className="font-semibold underline underline-offset-4" style={{ color: TEAL }}>Trust and safety</Link>
            <Link href="/pricing" className="font-semibold underline underline-offset-4" style={{ color: TEAL }}>How fees work</Link>
            <Link href="/faq" className="font-semibold underline underline-offset-4" style={{ color: TEAL }}>FAQ</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

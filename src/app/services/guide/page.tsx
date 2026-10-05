import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOUNDING_PROVIDER_THRESHOLD } from "@/lib/listing-tiers";
import { MIN_REVIEWS_FOR_AVG } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "The Provider Playbook: How the Directory Works for Shops",
  description:
    "How collector car shops get found on Fully Sorted: claim or add a profile, the one photo that matters, how reviews work, and what it costs.",
  alternates: { canonical: "/services/guide" },
};

/**
 * 2026-10-05: rewritten from scratch. The old playbook was a nine-step Fiverr
 * walkthrough (choose your path, add credentials, create a listing, set three
 * pricing tiers, pass review) that described a product this is not: gigs are
 * flagged off, there are no tiers, nothing is gated on credentials, and since
 * the claim model the shop usually does not fill in a form at all. The eight
 * per-trade guides were built on the same model and now redirect here.
 *
 * This is one short page in the sitewide white hero, saying only what is true
 * today. "Running the business" (tax, insurance, W-9s) survives as its own
 * page because it is useful whatever the product does.
 */

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

type Section = { n: string; title: string; body: React.ReactNode };

const SECTIONS: Section[] = [
  {
    n: "01",
    title: "How owners find you",
    body: (
      <>
        <p>
          Owners search the directory by trade, marque and place. Your profile is one page: your photo, what you do, where you are, and the reviews owners have left. There is no feed to keep up with and nothing to post.
        </p>
        <p>
          An owner who picks you writes to you through the profile. The message lands in your inbox with the car and the job described, and we keep a copy so nothing gets lost. Your phone number and website show to signed-in members; everyone else reaches you through that form.
        </p>
      </>
    ),
  },
  {
    n: "02",
    title: "Claim it, or add it",
    body: (
      <>
        <p>
          We build profiles for shops we know, so yours may already be here. Search for it on the{" "}
          <Link href="/services/apply" className="font-semibold underline underline-offset-4" style={{ color: INK }}>apply page</Link>{" "}
          and send yourself the login link. It goes to the email address on the listing, and only there.
        </p>
        <p>
          Not here yet? Add it. Seven fields: the business name, your name, your main trade, where you are, an email, a sentence or two about the work, and one photo. A person reads it, then it goes live, usually within a few days.
        </p>
        <p>
          Everything else is done from your dashboard once you are in: other trades you cover, where the work happens (your shop, their driveway, remote), specialties, phone, website, Instagram, a logo or a portrait. None of it is required and none of it is held against you if it is blank.
        </p>
      </>
    ),
  },
  {
    n: "03",
    title: "The one photo that matters",
    body: (
      <>
        <p>
          A main photo is the only thing on the profile we insist on. It is the first thing an owner sees, on the card and at the top of your page. Your work or your space, in decent light: a finished car, the shop floor, you mid-job. A real garage reads as a business. A flyer reads as an ad.
        </p>
        <p>
          You can set where the crop sits so the car, not the ceiling, is what shows. A second image, your logo or a portrait, is optional and goes in the small square.
        </p>
      </>
    ),
  },
  {
    n: "04",
    title: "How reviews work",
    body: (
      <>
        <p>
          We ask, not you. Give us the names of owners you have done work for and we email each one a single-use link. Their review lands on your profile with a reply box underneath it. You can answer in public. You cannot remove it, which is exactly why the next owner reading it will believe it.
        </p>
        <p>
          No star rating appears until you have {MIN_REVIEWS_FOR_AVG} reviews, so one early review does not define you either way. We do not hand out badges, and nobody checks your licenses for you. Your standing here is built from owners who hired you, and nothing else.
        </p>
      </>
    ),
  },
  {
    n: "05",
    title: "What it costs",
    body: (
      <>
        <p>
          The directory listing is free for the first {FOUNDING_PROVIDER_THRESHOLD} shops, and it stays free for them whatever we add later. Owners contact you directly and you bill them the way you already do.
        </p>
        <p>
          Paid tools for shops will come (an inbox, a job record for each car). When they do, the price is posted on{" "}
          <Link href="/pricing" className="font-semibold underline underline-offset-4" style={{ color: INK }}>the pricing page</Link>{" "}
          before it starts, and nothing is charged for something you already have.
        </p>
      </>
    ),
  },
];

export default function ProviderPlaybookPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
            The provider playbook
          </p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[18ch]" style={{ color: INK }}>
            How the directory works for shops.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Five minutes. What a shop needs to know before it is listed, and nothing it does not.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-bold text-white"
              style={{ background: TEAL }}
            >
              Claim or add your shop <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="text-[15px] font-semibold underline underline-offset-4 px-2" style={{ color: TEAL }}>
              See the directory
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <ol className="grid gap-10">
          {SECTIONS.map((s) => (
            <li key={s.n} className="grid sm:grid-cols-[3.5rem_1fr] gap-x-6 gap-y-2">
              <span className="text-sm tabular-nums pt-1.5" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: TEAL }}>
                {s.n}
              </span>
              <div>
                <h2 className="font-display text-2xl tracking-tight mb-3" style={{ color: INK }}>{s.title}</h2>
                <div className="grid gap-3 text-[15px] leading-relaxed" style={{ color: "#3f3f3a" }}>{s.body}</div>
              </div>
            </li>
          ))}
        </ol>

        {/* The part that is not the craft. Useful whatever the product does. */}
        <Link
          href="/services/guide/business"
          className="group mt-14 block rounded-2xl bg-white p-6 sm:p-7 transition-colors hover:bg-[#F4F6F5]"
          style={{ border: `1px solid ${RULE}` }}
        >
          <p className="text-[11px] uppercase mb-2" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>
            The part that is not the craft
          </p>
          <h2 className="font-display text-2xl tracking-tight mb-2 group-hover:underline underline-offset-4" style={{ color: INK }}>
            Running the business
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: MUTED }}>
            Sole proprietor or LLC. What self-employment tax actually costs and when it is due. Why everyone wants a W-9. Which insurance covers a customer&apos;s car, and which one you probably have instead. Written for people who fix cars, not accountants.
          </p>
        </Link>

        <p className="mt-10 text-sm" style={{ color: MUTED }}>
          Something this page did not answer? Email chris@fullysorted.com and a person will.
        </p>
      </div>
    </div>
  );
}

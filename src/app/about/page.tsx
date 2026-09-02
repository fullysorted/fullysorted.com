import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/service-categories";

/**
 * /about
 *
 * Rewritten 2026-09-01. The previous page opened with a stat row quoting the
 * listing fee, had three icon-tile "pillars" (one of them about pricing), and
 * read like a mission statement. This one is built around the two things that
 * are actually true and durable: what the name means, and the ownership year
 * that the directory is organised around. No prices anywhere on this page;
 * /pricing is the one place fees are stated. Founder stays unnamed.
 */

const INK = "#1a1a18";
const MUTED = "#6b6b5e";
const BLUE = "#1E6091";
const GOLD = "#B08D3F";
const RULE = "rgba(26,26,24,0.12)";
const PAPER = "#F5EFE6";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Fully Sorted",
  description:
    "What \"fully sorted\" means, and why we named a company after it. Fully Sorted is the collector car services hub: the inspectors, mechanics, body shops, restorers, detailers, transporters, storage and photographers a car needs across an ownership year, ranked by the owners who used them.",
};

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p
    className="text-[11px] font-semibold tracking-[0.18em] uppercase"
    style={{ color: light ? "rgba(255,255,255,0.65)" : MUTED }}
  >
    {children}
  </p>
);

export default function AboutPage() {
  const verbs = SERVICE_CATEGORIES.map((c) => c.verb.toLowerCase());
  const verbLine = verbs.slice(0, -1).join(", ") + " and " + verbs[verbs.length - 1];

  return (
    <main className="min-h-screen" style={{ background: "#ffffff" }}>

      {/* Opening */}
      <section style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
          <Eyebrow>About Fully Sorted</Eyebrow>
          <h1
            className="font-display font-semibold tracking-tight text-[2.5rem] sm:text-5xl lg:text-[3.6rem] leading-[1.05] mt-5 max-w-4xl"
            style={{ color: INK }}
          >
            We are the part between you and the people who get your car{" "}
            <span style={{ color: BLUE }}>fully sorted<span style={{ color: GOLD }}>.</span></span>
          </h1>
          <p className="text-lg sm:text-xl mt-6 max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            A directory of the specialists a collector car needs across an ownership
            year, ranked by the owners who used them. Built from inside the hobby,
            by people who have spent their lives around these cars.
          </p>
        </div>
      </section>

      {/* Photograph, from the founder's own archive */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        <div className="relative rounded-xl overflow-hidden" style={{ border: `1px solid ${RULE}` }}>
          <Image
            src="/images/archive/pebble-concours.jpg"
            alt="A Ferrari Testa Rossa on the concours lawn at Pebble Beach, ocean beyond"
            width={1600}
            height={700}
            priority
            className="w-full h-72 sm:h-[26rem] object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {[
            { src: "/images/archive/porsche-906-retna.jpg", alt: "Porsche 906 in front of a large pink RETNA canvas" },
            { src: "/images/archive/alfa-8c.jpg", alt: "Pre-war Alfa Romeo 8C, head on" },
            { src: "/images/archive/mille-miglia-722.jpg", alt: "Mercedes 300 SLR wearing number 722" },
          ].map((p) => (
            <div key={p.src} className="relative rounded-lg overflow-hidden h-28 sm:h-44" style={{ border: `1px solid ${RULE}` }}>
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 33vw, 380px" className="object-cover" />
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: MUTED }}>
          Twenty-five years on lawns, in paddocks and around auction tents. Photographs from our founder&apos;s archive.
        </p>
      </section>

      {/* What the name means */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>The name</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-4" style={{ color: INK }}>
              What &ldquo;fully sorted&rdquo; actually means
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 text-base sm:text-lg leading-relaxed space-y-5" style={{ color: "#3a3a30" }}>
            <p>
              It&apos;s British. In the UK, <em>sorted</em> means handled: dealt with, in
              order, nothing left hanging. Tell someone in London a job is sorted and
              they know you have finished it.
            </p>
            <p>
              Car people took the word somewhere more specific. A <strong style={{ color: INK }}>sorted</strong>{" "}
              car is one whose faults have been chased down and fixed properly rather
              than bodged or ignored. It starts on the button. The temperature gauge
              sits where it should. Nothing weeps onto the garage floor. It isn&apos;t
              necessarily restored and it certainly isn&apos;t concours. It is just{" "}
              <em>right</em>, and you can get in and drive it without running a
              checklist in your head.
            </p>
            <p>
              Getting there is the hard part, because a sorted car is rarely the work of
              one person. It takes a good inspector before you buy, a mechanic who knows
              the model, someone who will do the paint properly, a transporter who
              understands what they are carrying, and somewhere dry to keep it between
              drives.
            </p>
            <p style={{ color: INK }}>
              That is the whole company, really.
            </p>
          </div>
        </div>
      </section>

      {/* The ownership year */}
      <section style={{ background: PAPER, borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <Eyebrow>How the directory is organised</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-4" style={{ color: INK }}>
                The ownership year
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-base sm:text-lg leading-relaxed" style={{ color: "#3a3a30" }}>
              <p>
                Eight trades, in the order a car usually meets them. {verbLine.charAt(0).toUpperCase() + verbLine.slice(1)}.
                Buy it, get it home, keep it right, keep it clean, put it away, and one
                day sell it well. Every specialist on the platform is listed under one
                of these, so you search for the job, not the jargon.
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {SERVICE_CATEGORIES.map((c, i) => (
              <li key={c.key} className="pt-4" style={{ borderTop: `2px solid ${INK}` }}>
                <div className="flex items-baseline justify-between">
                  <span className="price-display text-xs tabular-nums" style={{ color: MUTED }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>
                    {c.verb}
                  </span>
                </div>
                <Link
                  href={`/services?type=${c.key}`}
                  className="block font-display text-xl font-semibold tracking-tight mt-3 hover:underline underline-offset-4"
                  style={{ color: INK }}
                >
                  {c.longLabel}
                </Link>
                <p className="mt-1.5 font-display text-sm italic" style={{ color: MUTED }}>
                  &ldquo;{c.askedFor}&rdquo;
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* How it works, plainly */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-4" style={{ color: INK }}>
              The review record is the ranking
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="text-base sm:text-lg leading-relaxed space-y-5" style={{ color: "#3a3a30" }}>
              <p>
                Owners leave a review after the work is done, and only after the work
                is done. A shop&apos;s place in the directory comes from that record and
                nothing else. Nobody pays to appear higher, and no average is shown
                until there are enough reviews to mean something.
              </p>
              <p>
                We do not take a cut of the work. The job is between you and the
                specialist, priced by them, paid to them. Browsing the directory is
                free, being listed in it is free, and listing a car in the marketplace
                is free. When we charge for something, it will be for something we
                made, not for access to the people who do the work.
              </p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
              {[
                { t: "For owners", d: "Search by the job. Read what other owners said. Send a brief. Review the work afterwards." },
                { t: "For specialists", d: "One application, one profile, your reviews under your name. Leads arrive with the job already described." },
                { t: "For buyers and sellers", d: "A direct owner-to-owner marketplace. No auction clock, no buyer's premium, and a research hub of model histories and market data." },
              ].map((x) => (
                <div key={x.t}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>{x.t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed" style={{ color: MUTED }}>{x.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Why */}
      <section style={{ background: "#0F2032" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <Eyebrow light>Why this exists</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-4 text-white">
                Preservation is the point
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 text-base sm:text-lg leading-relaxed space-y-5" style={{ color: "rgba(255,255,255,0.82)" }}>
              <p>
                The collector car world has a problem that isn&apos;t about cars. Great
                mechanics, detailers, restorers and inspectors exist everywhere, and
                most of them are invisible outside their own network. Finding one still
                means knowing someone who knows someone.
              </p>
              <p>
                That matters more than it sounds. When help is hard to find, cars sit,
                get bodged, get parted out, or disappear into permanent storage. And the
                people who know how to prep paint for a concours lawn, or who grew up
                rebuilding air-cooled engines, are not being replaced at the rate they
                are retiring. A platform that makes ownership easier keeps more cars on
                the road. One that keeps those specialists busy keeps the knowledge alive.
              </p>
              <blockquote
                className="font-display text-xl sm:text-2xl italic leading-snug pl-5 mt-8"
                style={{ borderLeft: `2px solid ${GOLD}`, color: "#ffffff" }}
              >
                Every specialist in this world built their reputation one referral at a
                time. We want to give them something better than word of mouth.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight" style={{ color: INK }}>
          Let&apos;s get it sorted<span style={{ color: GOLD }}>.</span>
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5" style={{ background: PAPER, border: `1px solid ${RULE}` }}>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight" style={{ color: INK }}>Work on cars?</h3>
              <p className="text-sm mt-1.5 leading-relaxed" style={{ color: MUTED }}>
                Join the directory, build your review record, and get in front of owners who value the work.
              </p>
            </div>
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-colors hover:bg-[#174B72] self-start"
              style={{ background: BLUE }}
            >
              Get listed free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-5" style={{ background: "#ffffff", border: `1px solid ${RULE}` }}>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight" style={{ color: INK }}>Own one?</h3>
              <p className="text-sm mt-1.5 leading-relaxed" style={{ color: MUTED }}>
                Tell us what the car needs, or tell us who should be on here. We read everything.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors hover:bg-stone-50"
                style={{ color: INK, border: `1px solid ${RULE}` }}
              >
                Find a specialist <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-70"
                style={{ color: BLUE }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

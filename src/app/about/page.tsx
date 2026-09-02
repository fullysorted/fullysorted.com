import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/service-categories";

/**
 * /about
 *
 * Rewritten 2026-09-01. The previous page opened with a stat row quoting the
 * listing fee, had three icon-tile "pillars" (one of them about pricing), and
 * read like a mission statement. This one is built around the two things that
 * are actually true and durable: what the name means, and the ownership year
 * that the directory is organized around. No prices anywhere on this page;
 * /pricing is the one place fees are stated. Founder stays unnamed.
 *
 * Design elements are drawn from the content, not added on top of it: the
 * "sorted" definition becomes an inspection-card checklist, the ownership year
 * is a rail of the same eight photographs the homepage uses, and the facts
 * strip only carries numbers that are true.
 */

const INK = "#1a1a18";
const MUTED = "#6b6b5e";
const BLUE = "#1E6091";
const GOLD = "#B08D3F";
const NAVY = "#0F2032";
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

const FACTS = [
  { n: "08", label: "trades in the directory, in the order a car meets them" },
  { n: "25", label: "years on lawns, in paddocks and around auction tents" },
  { n: "00", label: "dollars anyone can pay to rank higher" },
];

const SORTED_CHECKLIST = [
  "Starts on the button",
  "Temperature gauge sits where it should",
  "Nothing weeps onto the garage floor",
  "You drive it without a checklist in your head",
];

const ARCHIVE = [
  { src: "/images/archive/pebble-concours.jpg", alt: "A Ferrari Testa Rossa on the concours lawn at Pebble Beach, ocean beyond", caption: "Pebble Beach" },
  { src: "/images/archive/porsche-906-retna.jpg", alt: "Porsche 906 in front of a large pink RETNA canvas", caption: "Porsche 906" },
  { src: "/images/archive/mille-miglia-722.jpg", alt: "Mercedes 300 SLR wearing number 722", caption: "300 SLR, number 722" },
  { src: "/images/archive/alfa-8c.jpg", alt: "Pre-war Alfa Romeo 8C, head on", caption: "Alfa Romeo 8C" },
];

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="absolute left-3 bottom-3 px-2 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase rounded"
      style={{ background: "rgba(15,32,50,0.72)", color: "rgba(255,255,255,0.9)" }}
    >
      {children}
    </span>
  );
}

export default function AboutPage() {
  const verbs = SERVICE_CATEGORIES.map((c) => c.verb.toLowerCase());
  const verbLine = verbs.slice(0, -1).join(", ") + " and " + verbs[verbs.length - 1];

  return (
    <main className="min-h-screen" style={{ background: "#ffffff" }}>

      {/* Opening */}
      <section style={{ background: PAPER, borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-12 sm:pt-20 sm:pb-16">
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

          {/* Facts strip: only numbers that are true */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 mt-12 pt-8" style={{ borderTop: `1px solid ${RULE}` }}>
            {FACTS.map((f) => (
              <div key={f.n + f.label} className="flex items-start gap-4">
                <dt className="font-display text-5xl sm:text-6xl font-semibold leading-none tabular-nums" style={{ color: INK }}>
                  {f.n}<span style={{ color: GOLD }}>.</span>
                </dt>
                <dd className="text-sm leading-snug pt-1.5 max-w-[16rem]" style={{ color: MUTED }}>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Archive mosaic */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4">
          <div className="relative col-span-2 lg:col-span-8 rounded-xl overflow-hidden h-72 sm:h-[26rem]" style={{ border: `1px solid ${RULE}` }}>
            <Image src={ARCHIVE[0].src} alt={ARCHIVE[0].alt} fill priority sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" />
            <Caption>{ARCHIVE[0].caption}</Caption>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 col-span-2 gap-3 sm:gap-4">
            {ARCHIVE.slice(1, 3).map((p) => (
              <div key={p.src} className="relative rounded-xl overflow-hidden h-36 sm:h-[12.5rem]" style={{ border: `1px solid ${RULE}` }}>
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 50vw, 380px" className="object-cover" />
                <Caption>{p.caption}</Caption>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs mt-3" style={{ color: MUTED }}>
          Photographs from our founder&apos;s archive.
        </p>
      </section>

      {/* What the name means */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>The name</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-4" style={{ color: INK }}>
              What &ldquo;fully sorted&rdquo; actually means
            </h2>

            {/* The definition as an inspection card */}
            <div className="mt-8 rounded-xl overflow-hidden" style={{ border: `1px solid ${RULE}`, background: PAPER }}>
              <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: `1px solid ${RULE}` }}>
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: MUTED }}>A sorted car</span>
                <span className="price-display text-xs" style={{ color: MUTED }}>4 / 4</span>
              </div>
              <ul className="px-5 py-2">
                {SORTED_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-3 text-[15px]" style={{ color: INK, borderBottom: `1px dashed ${RULE}` }}>
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full" style={{ background: BLUE }}>
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="px-5 py-3 flex items-center justify-between">
                <span className="font-display italic text-sm" style={{ color: MUTED }}>Not restored. Not concours. Just right.</span>
                <span className="font-display font-semibold text-sm" style={{ color: BLUE }}>Sorted<span style={{ color: GOLD }}>.</span></span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 text-base sm:text-lg leading-relaxed space-y-5 lg:pt-12" style={{ color: "#3a3a30" }}>
            <p>
              It&apos;s British. In the UK, <em>sorted</em> means handled: dealt with, in
              order, nothing left hanging. Tell someone in London a job is sorted and
              they know you have finished it.
            </p>
            <p>
              Car people took the word somewhere more specific. A <strong style={{ color: INK }}>sorted</strong>{" "}
              car is one whose faults have been chased down and fixed properly rather
              than bodged or ignored. It isn&apos;t necessarily restored and it certainly
              isn&apos;t concours. It is just <em>right</em>, and you can get in and drive
              it without thinking about it.
            </p>
            <p>
              Getting there is the hard part, because a sorted car is rarely the work of
              one person. It takes a good inspector before you buy, a mechanic who knows
              the model, someone who will do the paint properly, a transporter who
              understands what they are carrying, and somewhere dry to keep it between
              drives.
            </p>
            <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: INK }}>
              That is the whole company, really<span style={{ color: GOLD }}>.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The ownership year: a rail of the eight trades */}
      <section style={{ background: PAPER, borderTop: `1px solid ${RULE}`, borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
            <div className="lg:col-span-4">
              <Eyebrow>How the directory is organized</Eyebrow>
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

          {/* Timeline rule */}
          <div className="hidden lg:grid mb-6" style={{ gridTemplateColumns: `repeat(${SERVICE_CATEGORIES.length}, minmax(0, 1fr))` }}>
            {SERVICE_CATEGORIES.map((c, i) => (
              <div key={c.key} className="relative pt-4">
                <span className="absolute top-0 left-0 right-0 h-px" style={{ background: RULE }} aria-hidden />
                <span className="absolute -top-[3px] left-0 h-[7px] w-[7px] rounded-full" style={{ background: i === 0 ? GOLD : INK }} aria-hidden />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: MUTED }}>{c.verb}</span>
              </div>
            ))}
          </div>

          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {SERVICE_CATEGORIES.map((c, i) => (
              <li key={c.key}>
                <Link
                  href={`/services?type=${c.key}`}
                  className="group block overflow-hidden rounded-xl bg-white transition-transform hover:-translate-y-0.5"
                  style={{ border: `1px solid ${RULE}` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ background: NAVY }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/services/${c.key}.jpg`}
                      alt=""
                      width={640}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,32,50,0.7) 0%, rgba(15,32,50,0) 55%)" }} aria-hidden />
                    <span className="absolute left-3 bottom-2.5 price-display text-xs text-white/85">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>{c.verb}</span>
                    <h3 className="font-display text-base sm:text-lg font-semibold tracking-tight leading-snug mt-1" style={{ color: INK }}>
                      {c.longLabel}
                    </h3>
                    <p className="mt-1 font-display text-sm italic" style={{ color: MUTED }}>&ldquo;{c.askedFor}&rdquo;</p>
                  </div>
                </Link>
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
          <div className="lg:col-span-7 lg:col-start-6 text-base sm:text-lg leading-relaxed space-y-5" style={{ color: "#3a3a30" }}>
            <p>
              Owners leave a review after the work is done, and only after the work
              is done. A shop&apos;s place in the directory comes from that record and
              nothing else. Nobody pays to appear higher, and no average is shown
              until there are enough reviews to mean something.
            </p>
            <p>
              We do not take a cut of the work. The job is between you and the
              specialist, priced by them, paid to them. Browsing the directory is
              free and being listed in it is free. Selling a car in the marketplace
              is a flat, one-time listing fee, stated up front, with no commission
              and no buyer&apos;s premium when it sells.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {[
            { t: "For owners", d: "Search by the job. Read what other owners said. Send a brief. Review the work afterwards." },
            { t: "For specialists", d: "One application, one profile, your reviews under your name. Leads arrive with the job already described." },
            { t: "For buyers and sellers", d: "A direct owner-to-owner marketplace. No auction clock, no buyer's premium, and a research hub of model histories and market data." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl p-6" style={{ background: PAPER, border: `1px solid ${RULE}`, borderTop: `3px solid ${INK}` }}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE }}>{x.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#3a3a30" }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section style={{ background: NAVY }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <Eyebrow light>Why this exists</Eyebrow>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mt-4 text-white">
                Preservation is the point
              </h2>
              <div className="relative mt-8 rounded-xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(255,255,255,0.14)" }}>
                <Image src="/images/archive/restoration-shop.jpg" alt="A silver Porsche 356 among cars in a restoration workshop" fill sizes="(max-width: 1024px) 100vw, 480px" className="object-cover" />
                <Caption>In the shop</Caption>
              </div>
            </div>
            <div className="lg:col-span-7 text-base sm:text-lg leading-relaxed space-y-5 lg:pt-12" style={{ color: "rgba(255,255,255,0.82)" }}>
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
                className="font-display text-2xl sm:text-3xl italic leading-snug pl-6 mt-10"
                style={{ borderLeft: `3px solid ${GOLD}`, color: "#ffffff" }}
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

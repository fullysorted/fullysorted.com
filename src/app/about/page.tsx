import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Wrench, TrendingUp, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Fully Sorted",
  description:
    "Fully Sorted is on a mission to make collector car ownership easier — and to keep the skilled specialists who make it possible thriving in the process.",
};

const PILLARS = [
  {
    icon: Wrench,
    title: "Supporting the people who do the work",
    body: "Detailers, mechanics, restorers, inspectors — these are skilled trades that can't be automated. We're building the platform that helps them find the clients who value their work.",
  },
  {
    icon: TrendingUp,
    title: "Real data, not guesswork",
    body: "Collector car ownership starts with knowing what things are worth. We surface real auction results so buyers and sellers make decisions based on facts, not folklore.",
  },
  {
    icon: ShieldCheck,
    title: "No middlemen extracting value",
    body: "We charge $3.99 to list a car. No commission. No percentage of sale. The money stays between the buyer and the seller, where it belongs.",
  },
];

const STATS = [
  { value: "0%", label: "Commission on sales" },
  { value: "$3.99", label: "Flat listing fee" },
  { value: "8+", label: "Service categories" },
  { value: "25 yrs", label: "Industry experience" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>

      {/* Dark header */}
      <section style={{ background: "#0f0e08" }} className="text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#E8722A" }}>
            Our Mission
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            Make collector car ownership easier.
            <br />
            <span style={{ color: "#E8722A" }}>Keep the people who make it possible thriving.</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            We're building the resource that connects serious collectors with the
            specialists, data, and tools they need — and gives the skilled
            tradespeople in this world a platform to grow their business.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl p-6 border" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(232,114,42,0.1)" }}>
                <Icon className="w-5 h-5" style={{ color: "#E8722A" }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1a1a18" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Long-form copy */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <div
          className="rounded-2xl p-8 sm:p-10 border space-y-8 text-base leading-relaxed"
          style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)", color: "#3a3a30" }}
        >
          <div>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#1a1a18" }}>
              Why this exists
            </h2>
            <p>
              The collector car world has a problem that isn't about cars. It's about
              friction — the fees, the opacity, the absence of trustworthy market data,
              and the difficulty of finding specialists who actually know what they're
              doing. Great mechanics, detailers, restorers, and inspectors exist
              everywhere. Most of them are invisible outside their immediate network.
            </p>
            <p className="mt-4">
              At the same time, automation is changing what work looks like. Entire
              categories of jobs are shifting. But the skilled trades that keep
              collector cars alive — a craftsman who knows how to prep paint for
              concours, a mechanic who grew up rebuilding air-cooled engines, a
              transporter who understands that your car isn't freight — these aren't
              going anywhere. They deserve a platform built for them.
            </p>
          </div>

          <div
            className="border-l-4 pl-5 py-1 italic"
            style={{ borderColor: "#E8722A", color: "#6b6b5e" }}
          >
            &ldquo;Every specialist in this world built their reputation one referral at a time.
            We want to give them something better than word of mouth.&rdquo;
          </div>

          <div>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#1a1a18" }}>
              What we're building
            </h2>
            <p>
              Fully Sorted is a collector car marketplace and services directory.
              A place where buyers can find real pricing data — not ask prices, real
              auction comps — before they make a move. Where sellers can list a car
              for $3.99 and keep every dollar of the sale. And where the mechanics,
              detailers, inspectors, and restorers who make this hobby possible can
              be found by the collectors who need them.
            </p>
            <p className="mt-4">
              The services directory is the part we care about most. Every listing
              is personally vetted — not algorithmic, not pay-to-play. The providers
              in it are there because they do exceptional work and deserve to be
              found by people who will appreciate it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black mb-3" style={{ color: "#1a1a18" }}>
              Preservation is the point
            </h2>
            <p>
              Collector cars are cultural artifacts. When the economics around them
              get distorted — by inflated commissions, inaccessible pricing data,
              or the inability to find trustworthy help — cars get parted out, go
              into permanent storage, or disappear entirely. That's a loss that
              doesn't show up on anyone's balance sheet, but it's real.
            </p>
            <p className="mt-4">
              A platform that makes ownership easier keeps more cars alive. One that
              supports the specialists who maintain them keeps a generation of
              irreplaceable knowledge from disappearing. Both things matter to us.
            </p>
          </div>

          <div className="flex items-start gap-3 p-5 rounded-xl" style={{ background: "rgba(232,114,42,0.06)", border: "1px solid rgba(232,114,42,0.15)" }}>
            <Heart className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#E8722A" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#3a3a30" }}>
              <strong style={{ color: "#1a1a18" }}>Built by enthusiasts, for enthusiasts.</strong>{" "}
              We're a small team with deep roots in the collector car world. We drive
              the cars we talk about. We use the specialists we list. We care about
              getting this right — not cashing out.
            </p>
          </div>

          <p className="font-bold text-lg" style={{ color: "#1a1a18" }}>
            Let&apos;s get it sorted.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 flex flex-col justify-between gap-4" style={{ background: "#0f0e08" }}>
            <div>
              <h3 className="font-bold text-white mb-1">Are you a specialist?</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Join the vetted directory and get in front of serious collectors.
              </p>
            </div>
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-80 self-start"
              style={{ background: "#E8722A", color: "#fff" }}
            >
              Apply to be Listed <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl p-6 flex flex-col justify-between gap-4" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <div>
              <h3 className="font-bold mb-1" style={{ color: "#1a1a18" }}>Have a question?</h3>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#6b6b5e" }}>
                <Mail className="w-4 h-4" style={{ color: "#E8722A" }} />
                chris@fullysorted.com
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-80 self-start"
              style={{ background: "#faf9f7", color: "#1a1a18", border: "1.5px solid rgba(0,0,0,0.12)" }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

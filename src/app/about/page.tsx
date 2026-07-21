import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
    body: "We charge a simple one-time listing fee — from $9.99 depending on your package, with the first 100 listings free. Straightforward pricing, no dealer games.",
  },
];

const STATS = [
  { value: "0%", label: "Commission on sales" },
  { value: "From $9.99", label: "Listing fee" },
  { value: "8+", label: "Service categories" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>

      {/* Light header */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1E6091" }}>
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            Our Mission
          </p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] mb-6" style={{ color: "#1a1a18" }}>
            Make collector car ownership easier.
            <br />
            <span style={{ color: "#1E6091" }}>Keep the people who make it possible thriving.</span>
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "#6b6b5e" }}>
            We're building the resource that connects serious collectors with the
            specialists, data, and tools they need — and gives the skilled
            tradespeople in this world a platform to grow their business.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-10 pt-8" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black" style={{ color: "#1a1a18" }}>{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "#9a9a8a" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo moment */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(26,26,24,0.35)]">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80"
            alt="A vintage workshop where collector cars are kept alive"
            width={1600}
            height={700}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0" aria-hidden="true" style={{ background: "linear-gradient(rgba(15,32,50,0.15), rgba(15,32,50,0.72))" }} />
          <p className="absolute bottom-5 left-6 right-6 text-sm sm:text-base font-semibold text-white">
            Wrenches you can trust — the specialists who keep these cars on the road are why this platform exists.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, body }, i) => {
            const tone = ["#1E6091", "#1E6091", "#B08D3F"][i % 3];
            return (
            <div key={title} className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${tone}1A` }}>
                <Icon className="w-5 h-5" style={{ color: tone }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1a1a18" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>{body}</p>
            </div>
            );
          })}
        </div>
      </section>

      {/* Long-form copy */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <div
          className="rounded-2xl p-8 sm:p-10 border space-y-8 text-base leading-relaxed"
          style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)", color: "#3a3a30" }}
        >
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a18" }}>
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
            style={{ borderColor: "#1E6091", color: "#6b6b5e" }}
          >
            &ldquo;Every specialist in this world built their reputation one referral at a time.
            We want to give them something better than word of mouth.&rdquo;
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a18" }}>
              What we're building
            </h2>
            <p>
              Fully Sorted is a collector car marketplace and services directory.
              A place where buyers can find real pricing data — not ask prices, real
              auction comps — before they make a move. Where sellers can list a car
              for as little as $9.99 and keep every dollar of the sale. And where the mechanics,
              detailers, inspectors, and restorers who make this hobby possible can
              be found by the collectors who need them.
            </p>
            <p className="mt-4">
              The services directory is the part we care about most — a place where
              specialists who know collector cars can be found by the collectors who
              need them. No pay-to-play. No sponsored slots. Just people who are
              genuinely good at what they do.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight mb-3" style={{ color: "#1a1a18" }}>
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

          <div className="flex items-start gap-3 p-5 rounded-xl" style={{ background: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.22)" }}>
            <Heart className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#B08D3F" }} />
            <p className="text-sm leading-relaxed" style={{ color: "#3a3a30" }}>
              <strong style={{ color: "#1a1a18" }}>Built by enthusiasts, for enthusiasts.</strong>{" "}
              This started because the tools didn&apos;t exist. The right marketplace,
              the right directory, the right data — none of it was built for people
              who actually care about these cars. So we built it.
            </p>
          </div>

          <p className="font-bold text-lg" style={{ color: "#1a1a18" }}>
            Let&apos;s get it sorted.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 flex flex-col justify-between gap-4 speed-lines" style={{ background: "#14301F" }}>
            <div>
              <h3 className="font-bold text-white mb-1">Are you a specialist?</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                Join the directory, build your review record, and get in front of serious collectors.
              </p>
            </div>
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition-colors self-start shine hover:bg-accent-light"
              style={{ background: "#fff", color: "#1E6091" }}
            >
              Apply to be Listed <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl p-6 flex flex-col justify-between gap-4" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <div>
              <h3 className="font-bold mb-1" style={{ color: "#1a1a18" }}>Have a question?</h3>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#6b6b5e" }}>
                <Mail className="w-4 h-4" style={{ color: "#1E6091" }} />
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

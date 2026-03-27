import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, DollarSign, BookOpen, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Fully Sorted",
  description:
    "Fully Sorted exists to keep collector cars affordable and preserve automotive history — without dealers, commissions, or middlemen taking a cut.",
};

const PILLARS = [
  {
    icon: DollarSign,
    title: "$3.99 to list",
    body: "No commission. No percentage of sale. No hidden fees. We don't sit between buyer and seller and extract value from a transaction we had nothing to do with.",
  },
  {
    icon: BookOpen,
    title: "Real market data",
    body: "Know what a car is worth before you buy or sell it. Powered by auction results, not dealer ask prices.",
  },
  {
    icon: Users,
    title: "Vetted specialists",
    body: "Every serious collector has a mental Rolodex of trusted inspectors, shippers, and restorers. We put that Rolodex online — for everyone.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>

      {/* Dark header banner */}
      <section style={{ background: "#0f0e08" }} className="text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#E8722A" }}
          >
            Our Mission
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
            Keep collector cars affordable.
            <br />
            <span style={{ color: "#E8722A" }}>Preserve the history.</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            There is no good reason to pay 5% — or $7,500 — to sell your car
            online. That money doesn&apos;t protect the buyer. It doesn&apos;t
            preserve the car&apos;s history. It just disappears into a platform
            that treats your car like inventory.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl p-6 border"
              style={{ background: "#fff", borderColor: "rgba(0,0,0,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(232,114,42,0.1)" }}
              >
                <Icon className="w-5 h-5" style={{ color: "#E8722A" }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1a1a18" }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Long-form copy */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <div
          className="rounded-2xl p-8 sm:p-10 border space-y-6 text-base leading-relaxed"
          style={{
            background: "#fff",
            borderColor: "rgba(0,0,0,0.08)",
            color: "#3a3a30",
          }}
        >
          <div>
            <h2
              className="text-2xl font-black mb-3"
              style={{ color: "#1a1a18" }}
            >
              Why We Built This
            </h2>
            <p>
              Fully Sorted was built by someone with 25 years in the collector
              car world — evaluating, buying, selling, and advising on vehicles
              from barn-find projects to seven-figure concours cars. In that
              time, it became clear that the biggest problem wasn&apos;t finding
              cars. It was the friction: the fees, the lack of transparency, the
              absence of trustworthy market data, and the shortage of vetted
              specialists who actually know what they&apos;re looking at.
            </p>
          </div>

          <div
            className="border-l-4 pl-5 py-1 italic"
            style={{ borderColor: "#E8722A", color: "#6b6b5e" }}
          >
            &ldquo;Every serious collector has a mental Rolodex. We put that
            Rolodex online — for everyone.&rdquo;
          </div>

          <div>
            <h2
              className="text-2xl font-black mb-3"
              style={{ color: "#1a1a18" }}
            >
              Preserving History, Not Just Cars
            </h2>
            <p>
              Collector cars aren&apos;t inventory. They&apos;re pieces of
              history — engineering milestones, cultural artifacts, and for a
              lot of us, a connection to something real in a world that&apos;s
              moved almost entirely digital.
            </p>
            <p className="mt-4">
              A collector car that changes hands fairly, with accurate
              documentation and proper provenance, is a car that survives. When
              the economics get distorted — by commissions, inflated reserves,
              and dealer spreads — cars disappear into storage, get stripped for
              parts, or get crushed. That&apos;s not a business problem.
              That&apos;s a cultural loss.
            </p>
            <p className="mt-4">
              Fully Sorted is built around the belief that accessibility and
              preservation go hand in hand. If more people can afford to
              participate in this world, more cars survive. Simple as that.
            </p>
          </div>

          <p className="font-bold text-lg" style={{ color: "#1a1a18" }}>
            Let&apos;s get it sorted.
          </p>
        </div>

        {/* Contact card */}
        <div
          className="mt-6 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: "#0f0e08" }}
        >
          <div>
            <h3 className="font-bold text-white mb-1">Get in Touch</h3>
            <div
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <Mail className="w-4 h-4" style={{ color: "#E8722A" }} />
              chris@fullysorted.com
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg transition-opacity hover:opacity-80 shrink-0"
            style={{ background: "#E8722A", color: "#fff" }}
          >
            Send a Message <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

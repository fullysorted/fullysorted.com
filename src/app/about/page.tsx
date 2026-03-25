import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Fully Sorted",
  description:
    "Fully Sorted exists to keep collector cars affordable and preserve automotive history — without dealers, commissions, or middlemen taking a cut.",
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <header className="mb-12">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
          Our Mission
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Keep collector cars affordable.
          <br />
          <span className="text-text-secondary">Preserve the history.</span>
        </h1>
      </header>

      <div className="prose prose-lg max-w-none space-y-6 text-text-secondary leading-relaxed">

        <p className="text-xl text-foreground leading-relaxed">
          There is no good reason to pay 5% — or $7,500 — to sell your car online.
          That money doesn&apos;t go to a better experience. It doesn&apos;t protect the buyer.
          It doesn&apos;t preserve the car&apos;s history. It just disappears into a platform
          that treats your car like inventory.
        </p>

        <p>
          Collector cars aren&apos;t inventory. They&apos;re pieces of history — engineering
          milestones, cultural artifacts, and for a lot of us, a connection to
          something real in a world that&apos;s moved almost entirely digital. Every car
          that gets priced out of reach because of inflated fees and dealer markups
          is a car that ends up neglected, parted out, or lost.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Why We Built This
        </h2>

        <p>
          Fully Sorted was built by someone with 25 years in the collector car
          world — evaluating, buying, selling, and advising on vehicles from
          barn-find projects to seven-figure concours cars. In that time, it
          became clear that the biggest problem wasn&apos;t finding cars. It was
          the friction: the fees, the lack of transparency, the absence of
          trustworthy market data, and the shortage of vetted specialists who
          actually know what they&apos;re looking at.
        </p>

        <p>
          Every serious collector has a mental Rolodex of trusted inspectors,
          shippers, restorers, and dealers. Fully Sorted puts that Rolodex
          online — for everyone.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          What Makes Us Different
        </h2>

        <p>
          We charge $3.99 to list a car. That&apos;s it. No commission. No percentage
          of sale. No hidden fees. We don&apos;t sit between buyer and seller and
          extract value from a transaction we had nothing to do with.
        </p>

        <p>
          Instead, we focus on what actually helps: real market data so you know
          what a car is worth before you buy or sell it, a curated directory of
          vetted specialists so you know who to trust, and a community built by
          enthusiasts who care about getting it right — not cashing out.
        </p>

        <h2 className="text-2xl font-bold text-foreground pt-4">
          Preserving History, Not Just Cars
        </h2>

        <p>
          A collector car that changes hands fairly, with accurate documentation
          and proper provenance, is a car that survives. When the economics get
          distorted — by commissions, inflated reserves, and dealer spreads — cars
          disappear into storage, get stripped for parts, or get crushed. That&apos;s
          not a business problem. It&apos;s a cultural loss.
        </p>

        <p>
          Fully Sorted is built around the belief that accessibility and
          preservation go hand in hand. If more people can afford to participate
          in this world, more cars survive. Simple as that.
        </p>

        <p className="text-foreground font-medium">
          Let&apos;s get it sorted.
        </p>
      </div>

      {/* Contact Card */}
      <div className="mt-14 p-6 bg-surface rounded-xl border border-border">
        <h3 className="font-semibold text-foreground mb-1">Get in Touch</h3>
        <p className="text-sm text-text-secondary mb-4">Questions, feedback, or want to get involved? We&apos;d love to hear from you.</p>
        <div className="flex items-center gap-3 text-sm text-text-secondary mb-5">
          <Mail className="w-4 h-4 text-accent" />
          chris@fullysorted.com
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
        >
          Send a Message <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}

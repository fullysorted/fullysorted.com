import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Star, Clock, Search, Wallet, HandCoins } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "How Fully Sorted keeps buyers, sellers and service providers safe: what we check, what we don't, how we make money, and where our responsibility ends.",
  alternates: { canonical: "/trust" },
};

const PILLARS = [
  {
    icon: Star,
    title: "Rated by real owners",
    body:
      "Providers earn their reputation through reviews from the owners who hired them. A shop can answer a review but never remove one, and we show no average until a shop has three. You always see the record before you get in touch.",
  },
  {
    icon: Search,
    title: "Fraud protection",
    body:
      "A person reads every listing before it goes live and every report after. For any vehicle purchase, get a professional pre-purchase inspection and use a licensed escrow company for significant sums. Fully Sorted is the introduction, not a party to the sale.",
  },
  {
    icon: Wallet,
    id: "how-we-make-money",
    title: "How we make money",
    body:
      "Car sellers pay a one-time listing fee. Parts, memorabilia and artwork listings cost a small fee each once the board's first 100 free listings are gone. Some links in the Shop are affiliate links. That is it today. Anything new is posted here before it starts and never applies to something already paid for. Shops never pay for position.",
  },
  {
    icon: HandCoins,
    title: "Where our responsibility ends",
    body:
      "On a car sale we do not hold the money, inspect the car, or guarantee either side. On service work, the contract is between you and the specialist; ask for their certificate of insurance, and specifically for garage-keepers cover, before anyone takes your keys. What we do own is who we let list, what the public record says about them, and acting on it when someone lets an owner down.",
  },
  {
    icon: Clock,
    title: "We respond",
    body:
      "Real people read every message. Support and trust reports get a reply within one business day; provider applications are read within a few days.",
  },
];

const POLICIES = [
  {
    heading: "Listing fee refunds",
    body:
      "Listing fees are one-time, up-front charges. If we remove your listing for a policy reason before it goes live, or you contact us within 48 hours of a duplicate or mistaken charge, we make it right. Write to chris@fullysorted.com.",
  },
  {
    heading: "Your privacy",
    body:
      "We don't sell your personal information. We share data only with the processors that run the site (payments, authentication, email, hosting, analytics) and as required by law. You can ask for access to or deletion of your data, and California residents have additional rights under the CCPA/CPRA.",
  },
  {
    heading: "Vehicle transactions",
    body:
      "Listings are owner-provided. Fully Sorted does not take title to, inspect, or guarantee any vehicle. Inspect a car in person or hire a professional inspector, and check a provider's licensing and insurance before hiring.",
  },
];

export default function TrustPage() {
  return (
    <main className="min-h-screen" style={{ background: "#faf9f7" }}>
      {/* Hero */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1E6091" }}>
            <ShieldCheck size={15} />
            Trust &amp; Safety
          </p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] mb-4" style={{ color: "#1a1a18" }}>
            What we check, what we don&apos;t, and how we get paid
          </h1>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                id={"id" in p ? p.id : undefined}
                className="rounded-2xl p-6 sm:p-7 scroll-mt-24"
                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
                  style={{ background: "#E8F0F8", color: "#1E6091" }}
                >
                  <Icon size={22} />
                </div>
                <h2 className="font-display font-semibold text-xl mb-2 tracking-tight" style={{ color: "#1a1a18" }}>
                  {p.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5a52" }}>
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Policies */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl p-7 sm:p-9" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
          <h2 className="font-display font-semibold text-2xl mb-6 tracking-tight" style={{ color: "#1a1a18" }}>
            Our policies, in plain English
          </h2>
          <div className="space-y-6">
            {POLICIES.map((p) => (
              <div key={p.heading}>
                <h3 className="font-semibold text-base mb-1.5" style={{ color: "#1a1a18" }}>
                  {p.heading}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5a52" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            <Link href="/privacy" className="font-medium hover:underline" style={{ color: "#1E6091" }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-medium hover:underline" style={{ color: "#1E6091" }}>
              Terms of Service
            </Link>
            <Link href="/contact" className="font-medium hover:underline" style={{ color: "#1E6091" }}>
              Contact us
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}

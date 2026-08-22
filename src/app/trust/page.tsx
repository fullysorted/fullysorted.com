import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, CreditCard, Star, RefreshCw, Clock, Search, Eye, Wallet, HandCoins } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "How Fully Sorted keeps buyers, sellers and service providers safe — what we check, what we don't, how we make money, and where our responsibility ends.",
  alternates: { canonical: "/trust" },
};

const PILLARS = [
  {
    icon: CreditCard,
    title: "Secure payments, powered by Stripe",
    body:
      "This applies to fixed-price service gigs, and only to those. Card payments are processed by Stripe, a PCI-DSS Level 1 provider; card details go straight to Stripe and are never stored on our servers. Where a provider has card payment switched on, your payment is held and only released once the work is delivered. Card payment is still rolling out provider by provider. A car sale is different and always will be: the money never passes through Fully Sorted at all — see below.",
  },
  {
    icon: Lock,
    title: "Your data is encrypted",
    body:
      "The entire site runs over 256-bit SSL/TLS encryption. Accounts are managed through Clerk, a dedicated authentication provider, so your login credentials are protected by industry-standard security. We collect only what we need to run the platform and never sell your personal information.",
  },
  {
    icon: Star,
    title: "Rated by real owners",
    body:
      "Our services directory runs on the open record. Providers earn their reputation through reviews from the actual owners who hired them and through engagement levels earned by real activity on the platform. You always see the open review record before you book.",
  },
  {
    icon: RefreshCw,
    title: "Clear refunds & dispute handling",
    body:
      "On a fixed-price gig paid through the site, held funds stay paused until the problem is resolved, and refunds go back to your original payment method. On quoted work we never held your money, so your recourse is the agreement you made with the specialist — plus the review you leave, which we do act on. Listing fees are covered by a good-faith review window; policy details below.",
  },
  {
    icon: Search,
    title: "Fraud protection",
    body:
      "We use automated checks and human review to watch for suspicious listings and activity. For any vehicle purchase, we strongly recommend a professional pre-purchase inspection and a licensed escrow company for significant transactions — Fully Sorted is the introduction, not a party to the sale.",
  },
  {
    icon: Wallet,
    title: "How we make money",
    body:
      "Two ways, and you should know both. Sellers pay a one-time listing fee — $9.99 standard, $29.99 featured, $49.99 premium. Providers pay a 10% platform fee on fixed-price gigs booked through the site. That is the entire list — the listing fee is the only charge on a car sale however much it sells for, there is no buyer's premium, we take nothing out of a quote you agree directly with a specialist, and nothing in the directory is sold to advertisers. Nobody pays us to rank higher; if that ever changes, promoted placement will be labelled as such on the page. How a marketplace earns tells you whose side it is on, so we would rather you read it here than work it out later.",
  },
  {
    icon: HandCoins,
    title: "Where our responsibility ends",
    body:
      "Being straight about this is part of being trustworthy. On a car sale we are the introduction, not a party to it — we do not hold the money, inspect the car, or guarantee either side. On service work, the contract is between you and the specialist; ask for their certificate of insurance, and specifically for garage-keepers cover, before anyone takes your keys. What we do own is who we let list, what the public record says about them, and acting on it when someone lets an owner down.",
  },
  {
    icon: Clock,
    title: "We respond",
    body:
      "Real people read every message. We aim to respond to support and trust-and-safety reports within one business day, and provider applications are reviewed within 3–5 business days.",
  },
];

const POLICIES = [
  {
    heading: "Listing fee refunds",
    body:
      "Listing fees are one-time, up-front charges. If your listing is removed by us for a policy reason before it goes live, or you contact us within 48 hours of a duplicate or mistaken charge, we'll make it right. Reach out any time at chris@fullysorted.com.",
  },
  {
    heading: "Service payment protection",
    body:
      "Funds for a booked gig are held after payment and only released to the provider when you accept the completed work. If you report a problem, auto-release is paused while we help both sides resolve it. If the work isn't delivered, you're refunded.",
  },
  {
    heading: "Your privacy",
    body:
      "We don't sell your personal information. We share data only with the processors that run the platform (payments, authentication, email, hosting, analytics) and as required by law. You can request access to or deletion of your data, and California residents have additional rights under the CCPA/CPRA.",
  },
  {
    heading: "Vehicle transactions",
    body:
      "Listings are owner-provided. Fully Sorted does not take title to, inspect, or guarantee any vehicle. Always inspect a car in person or hire a professional inspector, and verify a provider's licensing and insurance before hiring.",
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
            Built to be safe, sound, and fully sorted
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#5a5a52" }}>
            Buying, selling, and hiring around collector cars involves real money and real trust. Here&apos;s exactly how we protect every side of a transaction — and what you should do on your end, too.
          </p>
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
                className="rounded-2xl p-6 sm:p-7"
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

        <p className="flex items-start gap-2 text-xs mt-6 leading-relaxed" style={{ color: "#9a9a8a" }}>
          <Eye size={14} className="mt-0.5 shrink-0" />
          Fully Sorted is a neutral platform that connects owners, buyers, and independent service providers. We are not a party to transactions between users and do not act as an auction house, broker, or appraiser. Value Guide figures are informational estimates, not formal appraisals.
        </p>
      </section>
    </main>
  );
}

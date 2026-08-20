import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardList,
  BarChart3,
  BookOpen,
  Star,
  Upload,
  Sparkles,
  Eye,
  Handshake,
  DollarSign,
  Wrench,
  ShieldCheck,
  Search,
  CheckCircle2,
  Camera,
  MessageSquare,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { VALUE_GUIDE_PUBLIC } from "@/lib/features";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Fully Sorted is a collector car services hub with a peer-to-peer marketplace and a research center. Here's exactly how hiring a specialist, buying and selling, and using the Value Guide work.",
  alternates: { canonical: "/how-it-works" },
};

// 1. SERVICES — the hub is the front door and the lead product.
const HIRE_STEPS = [
  {
    icon: Search,
    title: "Tell us what the car needs",
    body: "Search by what you need — pre-purchase inspection, ceramic coating, enclosed transport, a marque specialist — or browse fixed-price gigs with upfront pricing.",
  },
  {
    icon: Star,
    title: "Read the owner record",
    body: "Every provider profile carries reviews and comments from the owners who actually hired them, plus an engagement level earned through real work on the platform.",
  },
  {
    icon: MessageSquare,
    title: "Request a quote or book a gig",
    body: "Message a shop or specialist directly for custom work, or book a fixed-price gig when you already know what you need. You talk to the person doing the work.",
  },
  {
    icon: CheckCircle2,
    title: "Leave your own review",
    body: "When the job's done, your review becomes part of the record the next owner reads. That's how the directory gets better — collectively, in the open.",
  },
];

const SELLER_STEPS = [
  {
    icon: Upload,
    title: "List your car",
    body: "Upload photos, fill in the basics (year, make, model, mileage, VIN), and tell the story of your car. It takes about 10 minutes.",
  },
  {
    icon: Sparkles,
    title: "We polish the listing",
    body: "Our AI drafts a clean description in a tone collectors actually read. You review, edit, and publish — or Chris can write a personal take for featured listings.",
  },
  {
    icon: Eye,
    title: "Real buyers see it",
    body: "Your listing goes live on the Fully Sorted marketplace, the daily browse feed, and is indexed for search. What you pay is what you saw before you clicked.",
  },
  {
    icon: Handshake,
    title: "You own the deal",
    body: "Buyers message and make offers directly. You decide who to respond to and how to structure the sale, and you close it on your own terms.",
  },
];

const BUYER_STEPS = [
  {
    icon: Search,
    title: "Browse honest listings",
    body: "Filter by era, category, price, and location. Every listing shows real photos, VIN, mileage, and — where available — comparable recent sale prices.",
  },
  {
    icon: CheckCircle2,
    title: "Check the comps",
    body: VALUE_GUIDE_PUBLIC
      ? "Our Value Guide pulls real auction data so you know what a car actually trades for — not what someone hopes to get."
      : "Work from real sold prices, not ask prices. Our model histories carry a market snapshot wherever we have enough recorded sales to say something honest.",
  },
  {
    icon: MessageSquare,
    title: "Message the seller",
    body: "Ask questions, request more photos, set up an inspection. All communication happens directly between you and the owner.",
  },
  {
    icon: Handshake,
    title: "Close the deal your way",
    body: "Bank transfer, escrow service, cashier's check — whatever you agree on. Fully Sorted is the introduction; you run the transaction.",
  },
];

const PROVIDER_STEPS = [
  {
    icon: Wrench,
    title: "Apply to be listed",
    body: "Tell us about your shop or practice, specialties, and the kind of work you do best. Applications are reviewed by a human — no bots, no algorithms.",
  },
  {
    icon: ShieldCheck,
    title: "Get your profile live",
    body: "Applications are reviewed by a human before a profile goes live. From there your reputation is built in the open — by the owners you work for.",
  },
  {
    icon: Camera,
    title: "Build your profile",
    body: "Photos of your work, your specialties, your pricing tier. The profile is yours to keep current.",
  },
  {
    icon: DollarSign,
    title: "Get found by owners who care",
    body: "Collectors searching for detailers, inspectors, mechanics, restorers, and transporters find you — ranked by the work you've done and the owners who vouch for it.",
  },
];

// 3. RESEARCH — the data layer behind both.
const RESEARCH_STEPS = [
  ...(VALUE_GUIDE_PUBLIC
    ? [
        {
          icon: BarChart3,
          title: "Check the Value Guide",
          body: "Real sold-price comps from auction results and reported private sales — so you know what a car actually trades for, not what someone hopes to get.",
        },
      ]
    : []),
  {
    icon: BookOpen,
    title: "Read the model histories",
    body: "History, specs, production numbers and known trouble spots, model by model, with sources cited so you can check the work yourself.",
  },
  {
    icon: ClipboardList,
    title: "Decode a VIN, compare two cars",
    body: "Decode any 1981-or-newer VIN for factory specs and open recalls, or put two models head to head on rarity, value and running costs.",
  },
];

function StepCard({
  icon: Icon,
  title,
  body,
  index,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  index: number;
}) {
  const tone = ["#1E6091", "#1E6091", "#B08D3F"][index % 3];
  return (
    <div className="bg-white border border-border rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div
        className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: "#1E6091" }}
      >
        {index + 1}
      </div>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${tone}14` }}
      >
        <Icon className="w-5 h-5" style={{ color: tone }} />
      </div>
      <h3 className="text-base font-bold text-foreground mb-1.5">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
    </div>
  );
}

const howToHireSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://fullysorted.com/how-it-works#howto-hire",
  name: "How to hire a collector car specialist on Fully Sorted",
  description:
    "Step-by-step guide to finding and booking an owner-reviewed specialist for your collector car — inspection, detailing, transport, mechanical, restoration and body work.",
  totalTime: "PT10M",
  step: HIRE_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://fullysorted.com/how-it-works#howto-sell",
  name: "How to sell a collector car on Fully Sorted",
  description:
    "Step-by-step guide to listing a collector car for sale on Fully Sorted. Flat listing fee, direct buyer contact.",
  totalTime: "PT15M",
  estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "9.99" },
  step: SELLER_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://fullysorted.com/how-it-works" },
  ],
};

export default function HowItWorksPage() {
  return (
    <div style={{ backgroundColor: "#f5f4f0" }} className="min-h-screen">
      <JsonLd data={[howToHireSchema, howToSchema, breadcrumbSchema]} />
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: "#1E6091", backgroundColor: "rgba(30,96,145,0.07)", border: "1px solid rgba(30,96,145,0.28)" }}
          >
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            How Fully Sorted Works
          </p>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl text-foreground leading-[1.08] mb-4">
            Find the specialists who keep your car running — then buy, sell and research it in one place.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Fully Sorted is a collector car services hub first: an owner-reviewed
            directory of the people who do the work. Alongside it sits a
            direct owner-to-owner marketplace with flat listing fees, and a
            research center built on real sold prices.
          </p>

          {/* Photo moment */}
          <div className="relative mt-10 rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(26,26,24,0.35)]">
            <Image
              src="/images/archive/auction-preview.jpg"
              alt="A competition Ferrari on the block at a major auction preview"
              width={1600}
              height={640}
              className="w-full h-56 sm:h-72 object-cover"
              preload
            />
            <div className="absolute inset-0" aria-hidden="true" style={{ background: "linear-gradient(rgba(15,32,50,0.1), rgba(15,32,50,0.65))" }} />
            <p className="absolute bottom-4 left-5 right-5 text-sm sm:text-base font-semibold text-white text-left">
              Know before the wire goes — real comps, owner-reviewed specialists, and a deal you own end to end.
            </p>
          </div>
        </div>
      </section>

      {/* 1. SERVICES — hiring a pro. The hub is the front door. */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1E6091" }}
            >
              For Owners
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">Getting work done on your car</h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              Inspection, detailing, transport, mechanical, restoration, body and
              paint — the specialists collectors actually use, rated by the owners
              who hired them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HIRE_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Find a Pro <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* 1b. SERVICES — the supply side. */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1E6091" }}
            >
              For Service Providers
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">Joining the Fully Sorted directory</h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              Detailers, inspectors, mechanics, restorers, transporters — the skilled specialists who make collector car ownership possible.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROVIDER_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Apply to be listed <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* 2. MARKETPLACE — selling. */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1E6091" }}
            >
              For Sellers
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">Selling a car on Fully Sorted</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SELLER_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              List Your Car <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* 2b. MARKETPLACE — buying. */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1E6091" }}
            >
              For Buyers
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">Finding your next car</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUYER_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Browse Listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* 3. RESEARCH — the data layer under both. */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1E6091" }}
            >
              {VALUE_GUIDE_PUBLIC ? <>Research &amp; Value Guide</> : <>Research</>}
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              {VALUE_GUIDE_PUBLIC ? "Knowing what a car is really worth" : "Knowing the car before you buy it"}
            </h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              The same data sits under every listing and every quote — so nobody
              in the transaction is guessing.
            </p>
          </div>
          <div className={`grid grid-cols-1 gap-5 ${RESEARCH_STEPS.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
            {RESEARCH_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={VALUE_GUIDE_PUBLIC ? "/value-guide" : "/research/models"}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              {VALUE_GUIDE_PUBLIC ? "Open the Value Guide" : "Browse the model histories"} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Pricing summary */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "#1E6091" }}
          >
            Simple Pricing
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-3">
            One-time listing fee. Straightforward pricing.
          </h2>
          <p className="text-base text-text-secondary">
            Standard $9.99, Featured $29.99, Premium $49.99 — all one-time, paid up front. The first 100 sellers list free as founding members.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground border-2 border-foreground rounded-xl hover:bg-foreground hover:text-white transition-colors"
            >
              See Pricing Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1E6091" }}
            >
              Frequently Asked
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">Questions worth answering up front</h2>
          </div>
          <div className="bg-white border border-border rounded-2xl p-8 text-center">
            <p className="text-sm text-text-secondary leading-relaxed max-w-xl mx-auto">
              What things cost, how trust works, where our valuation numbers come from,
              and what we deliberately don&apos;t do — answered in full, in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
              >
                Read the FAQ <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-stone-50 transition-colors"
              >
                Ask us directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

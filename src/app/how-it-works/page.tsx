import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
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

export const metadata: Metadata = {
  title: "How It Works — Fully Sorted",
  description:
    "Fully Sorted is a peer-to-peer collector car marketplace with a flat listing fee and zero commission. Here's exactly how selling, buying, and finding trusted service providers works.",
};

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
    body: "Your listing goes live on the Fully Sorted marketplace, the daily browse feed, and is indexed for search. No surprise fees, no bumped-to-the-back-page games.",
  },
  {
    icon: Handshake,
    title: "You own the deal",
    body: "Buyers message and make offers directly. You decide who to respond to and how to structure the sale. We never take a cut of the transaction.",
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
    body: "Our Value Guide pulls real auction data so you know what a car actually trades for — not what someone hopes to get.",
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
    body: "Tell us about your shop, specialties, and the kind of work you do best. Applications are reviewed by a human — no bots, no algorithms.",
  },
  {
    icon: ShieldCheck,
    title: "Get verified",
    body: "We check references and confirm you're the real deal. Approved providers get a verified badge and a spot in our curated directory.",
  },
  {
    icon: Camera,
    title: "Build your profile",
    body: "Photos of your work, your specialties, your pricing tier. The profile is yours to keep current.",
  },
  {
    icon: DollarSign,
    title: "Get found by owners who care",
    body: "Collectors searching for detailers, inspectors, mechanics, restorers, and transporters find you. No lead fees, no pay-to-play ranking.",
  },
];

const FAQS = [
  {
    q: "What does it cost to list a car?",
    a: "Three tiers, all one-time: Standard $9.99, Featured $29.99, Premium $49.99. The first 100 listings are free for founding members. There are no commissions, no percentages, and no back-end fees when your car sells.",
  },
  {
    q: "How is this different from Bring a Trailer, Hemmings, or Cars & Bids?",
    a: "Those are auction houses — they take a cut (usually 4.5–5%) from the buyer and the listing is time-limited. Fully Sorted is a flat-fee peer-to-peer marketplace: you pay once to list, you keep 100% of the sale price, and the listing stays up until the car sells.",
  },
  {
    q: "Do you handle payment or escrow?",
    a: "No. We're a listing platform, not a financial intermediary. Buyers and sellers agree on their preferred payment method — bank wire, escrow service, cashier's check. We recommend using a licensed escrow company for transactions over $25,000.",
  },
  {
    q: "How are service providers vetted?",
    a: "Every application is reviewed manually. We check references, confirm the business is real, and look for a track record with collector cars specifically. If you've been approved, it's because we believe in your work.",
  },
  {
    q: "Can I edit or remove my listing?",
    a: "Yes — log into your dashboard any time. You can update photos, change the price, mark the car as sold, or pull the listing entirely.",
  },
  {
    q: "What kinds of cars belong on Fully Sorted?",
    a: "Anything with collector interest — muscle cars, European classics, JDM, vintage, modern classics, barn finds, and project cars. If it has a story, it belongs here.",
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
  return (
    <div className="bg-white border border-border rounded-2xl p-6 relative">
      <div
        className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: "#C1440E" }}
      >
        {index + 1}
      </div>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: "#fef2ee" }}
      >
        <Icon className="w-5 h-5" style={{ color: "#C1440E" }} />
      </div>
      <h3 className="text-base font-bold text-foreground mb-1.5">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div style={{ backgroundColor: "#f5f4f0" }} className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="inline-block text-xs font-bold uppercase tracking-wider mb-4 px-3 py-1 rounded-full"
            style={{ color: "#C1440E", backgroundColor: "#fef2ee" }}
          >
            How Fully Sorted Works
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
            Sell your car, buy your next one, and find the specialists who keep it running.
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A peer-to-peer marketplace built for collectors — flat listing fee, zero commission, and a curated directory of vetted service providers.
          </p>
        </div>
      </section>

      {/* Sellers */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: "#C1440E" }}
            >
              For Sellers
            </p>
            <h2 className="text-3xl font-bold text-foreground">Selling a car on Fully Sorted</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SELLER_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-colors"
              style={{ backgroundColor: "#C1440E" }}
            >
              List Your Car <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Buyers */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: "#C1440E" }}
            >
              For Buyers
            </p>
            <h2 className="text-3xl font-bold text-foreground">Finding your next car</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUYER_STEPS.map((s, i) => (
              <StepCard key={i} index={i} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/browse"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-colors"
              style={{ backgroundColor: "#C1440E" }}
            >
              Browse Listings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: "#C1440E" }}
            >
              For Service Providers
            </p>
            <h2 className="text-3xl font-bold text-foreground">Joining the Fully Sorted directory</h2>
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
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-colors"
              style={{ backgroundColor: "#C1440E" }}
            >
              Apply to List Your Business <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="py-16 px-4 sm:px-6 bg-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-wider mb-2"
            style={{ color: "#C1440E" }}
          >
            Simple Pricing
          </p>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            One-time listing fee. Zero commission. Ever.
          </h2>
          <p className="text-base text-text-secondary">
            Standard $9.99, Featured $29.99, Premium $49.99 — all one-time. The first 100 sellers list free as founding members. When your car sells, you keep 100% of what the buyer pays.
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
              className="text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: "#C1440E" }}
            >
              Frequently Asked
            </p>
            <h2 className="text-3xl font-bold text-foreground">Questions we hear a lot</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="text-base font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-text-secondary mb-4">
              Still have questions? We read every message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-colors"
              style={{ backgroundColor: "#C1440E" }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Wrench, Car, LineChart, ShieldCheck, HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { FREE_LISTINGS_THRESHOLD, FOUNDING_PROVIDER_THRESHOLD } from "@/lib/listing-tiers";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about hiring a collector car specialist, listing a car, what it costs and how reviews work.",
  alternates: { canonical: "/faq" },
};

/**
 * The single source of truth for questions people actually ask.
 *
 * Every answer here has to survive contact with the product as it exists
 * today, not as it is planned. Where something is partly built, the answer
 * says so — an FAQ that oversells is worse than no FAQ, because this is the
 * page people come to when they already suspect something.
 *
 * `/how-it-works` also ships FAQPage schema. Only ONE page should carry the
 * canonical FAQ graph, so that one was narrowed to its HowTo steps and this
 * page owns the Q&A.
 */
interface Faq {
  q: string;
  a: string;
  /** Rendered under the answer as a "read more" affordance. */
  link?: { href: string; label: string };
}

interface FaqSection {
  key: string;
  title: string;
  blurb: string;
  icon: React.ElementType;
  tint: string;
  items: Faq[];
}


const SECTIONS: FaqSection[] = [
  {
    key: "hiring",
    title: "Hiring a specialist",
    blurb: "Finding someone to work on your car.",
    icon: Wrench,
    tint: "#1E6091",
    items: [
      {
        q: "What does it cost to find and hire someone?",
        a: "Nothing. Browsing the directory and asking for a quote is free. You agree the price with the specialist and we add nothing on top.",
      },
      {
        q: "Is the specialist insured? What happens if my car is damaged?",
        a: "Ask, every time, and ask for the certificate. What you want is garage-keepers legal liability cover, which protects a customer's car while it is in a shop's care; ordinary general liability often does not. The work is contracted between you and the shop. Fully Sorted is the introduction, not a party to it. Agree a value in writing before you hand over the keys on anything unusual.",
        link: { href: "/insurance", label: "About agreed-value cover" },
      },
      {
        q: "What if the work isn't right?",
        a: "Raise it with the specialist first. Most good shops fix their own mistakes. Then tell us, because a complaint goes on the directory record and affects whether they stay listed. We never hold your money, so your recourse is the contract you have with them and the review you leave.",
      },
      {
        q: "Can a specialist delete a bad review?",
        a: "No. A shop can reply to any review, in public, and that is all it can do. It cannot edit one, hide one or take one down. We step in only for things that are not reviews (abuse, spam, someone who was never a customer), and when we remove something we record why. A review section a business can curate is an advertisement.",
      },
      {
        q: "Why does a profile show reviews but no star rating?",
        a: "Because one five-star review is not a 5.0 rating. We do not show an average until a shop has at least three reviews from owners. Below that you get the reviews themselves and no number.",
      },
      {
        q: "What trades can I find?",
        a: "Ten: pre-purchase inspection, enclosed transport, title and registration, service and mechanical work, body and paint, restoration, upholstery, detailing and paint correction, storage, and photography. Dealers and consignment shops have their own section.",
        link: { href: "/services", label: "Browse the directory" },
      },
      {
        q: "Where do you have coverage?",
        a: "Transport, inspection and photography work anywhere in the country. The trades that need someone standing next to your car we deepen city by city. If nobody is listed near you yet, tell us who should be and we will go and ask them.",
        link: { href: "/contact", label: "Recommend a specialist" },
      },
      {
        q: "Can someone inspect a car that isn't near me?",
        a: "That is what a pre-purchase inspection is for. Find an inspector near the car, not near you, and tell them up front you are remote so they photograph accordingly.",
        link: { href: "/services?type=inspection", label: "Find an inspector" },
      },
    ],
  },
  {
    key: "providers",
    title: "Listing your business",
    blurb: "For shops, independents and anyone who works on cars.",
    icon: ShieldCheck,
    tint: "#4b8b2e",
    items: [
      {
        q: "What does it cost to be listed?",
        a: `Nothing. The first ${FOUNDING_PROVIDER_THRESHOLD} to join are founding members and the listing stays free for life. We may one day sell shops tools; nobody will ever pay for a better position in the directory.`,
        link: { href: "/services/apply", label: "Get listed" },
      },
      {
        q: "We may have already built your page.",
        a: "For many shops we build a draft profile from public information and email the owner a link. It is not live until you approve it, and if you never answer it stays unpublished. If you would rather it came down, say so and it comes down the same day.",
      },
      {
        q: "Do I need to be a registered business?",
        a: "No. Shops, independents and mobile specialists all apply the same way and sit in the same directory. Where you work (workshop, mobile, remote) is a filter owners can use, not a category.",
      },
      {
        q: "How do I get paid?",
        a: "Directly by the customer. An enquiry reaches you by email with the car and the job described, and you quote and invoice the owner yourself. We are never in the middle.",
      },
      {
        q: "Can I choose which jobs I take?",
        a: "Always. An enquiry is a lead, not an obligation. The one thing we ask is that you reply, because an unanswered enquiry makes the whole site look dead to the owner on the other end.",
      },
    ],
  },
  {
    key: "marketplace",
    title: "Buying and selling",
    blurb: "The marketplace: private sellers and dealers.",
    icon: Car,
    tint: "#B08D3F",
    items: [
      {
        q: "What does it cost to list a car?",
        a: `One fee, paid once, up front. You see the packages and prices at the last step of listing. The first ${FREE_LISTINGS_THRESHOLD} cars listed on the site are free. There is no auction clock, no bidding and no buyer's premium: you set an asking price and buyers contact you directly.`,
        link: { href: "/pricing", label: "How fees work" },
      },
      {
        q: "Do dealers list here?",
        a: "Yes. A dealer pays the same listing fee as a private owner, and every dealer listing is marked as one, with the dealership name and a note that documentation fees, tax and registration are set by the dealer. Dealers listing several cars can ask us about a package.",
        link: { href: "/contact", label: "Ask about a dealer package" },
      },
      {
        q: "Can I get a car inspected before I buy it?",
        a: "Yes, and it is the reason the two halves of this site sit together. Find an inspector near the car and have the report before you wire anything.",
        link: { href: "/services?type=inspection", label: "Find an inspector" },
      },
      {
        q: "Do you handle the money or provide escrow?",
        a: "No. Buyer and seller agree their own payment method and the money never passes through us. For anything significant, use a licensed escrow company. Anyone who tells you Fully Sorted is holding funds for a car sale is not us.",
      },
      {
        q: "How do I avoid getting scammed?",
        a: "The patterns repeat. Be wary of a buyer who agrees your price without negotiating, wants to overpay and have you refund the difference, insists on a shipping agent of their own, sends a cashier's check, or moves the conversation off-site immediately. Buying: never wire a deposit for a car nobody has seen, be suspicious of a price well under the market, and treat reluctance to get on a video call with the car as the answer. If it feels rushed, that is the pressure doing its job.",
        link: { href: "/trust", label: "Trust and safety" },
      },
      {
        q: "Will my phone number and address be public?",
        a: "No. Buyers reach you through the site and you decide when to hand over a number. Your listing shows a city and state, never a street address.",
      },
      {
        q: "How long does my listing run, and can I edit it?",
        a: "Standard runs 30 days, Featured 60, Premium until the car sells. Edit anything from your dashboard, or pull it. The fee is one-time, so changing your mind never costs you again. When it sells, mark it sold; nothing further is owed.",
      },
      {
        q: "Who reviews listings before they go live?",
        a: "A person does. Listings are checked for obvious misrepresentation before they appear. It is not an inspection and not a guarantee; it is a filter against the worst of what a marketplace attracts.",
      },
    ],
  },
  {
    key: "research",
    title: "Research",
    blurb: "The model histories, and what they are not.",
    icon: LineChart,
    tint: "#2C4A63",
    items: [
      {
        q: "Where do the model histories come from?",
        a: "Published sources, cited inline, with disputed figures flagged rather than smoothed over. Owners send corrections and we make them. If you find a wrong production number, tell us.",
        link: { href: "/research/models", label: "Model histories" },
      },
      {
        q: "Is any of this financial advice?",
        a: "No. Collector cars are not an investment product and nothing here is a recommendation. Buy the car because you want the car.",
      },
      {
        q: "Can I report a sale?",
        a: "Please do. Private sales that never hit a public auction are some of the most useful information we get.",
        link: { href: "/submit-sale", label: "Report a sale" },
      },
    ],
  },
  {
    key: "company",
    title: "About Fully Sorted",
    blurb: "Who we are and how this works as a business.",
    icon: HelpCircle,
    tint: "#6B4E71",
    items: [
      {
        q: "What does \"fully sorted\" mean?",
        a: "It is British. A sorted car is one whose faults have been chased down and fixed properly rather than bodged or ignored. It starts on the button, the gauge sits where it should, nothing weeps onto the garage floor. Not restored, not concours: just right. Getting a car there usually takes several different specialists, which is what this site is for.",
        link: { href: "/about", label: "The longer version" },
      },
      {
        q: "How does Fully Sorted make money?",
        a: "Car sellers pay a one-time listing fee. Parts, memorabilia and artwork listings cost a small fee each once the board's first 100 free listings are gone. Some links in the Shop are affiliate links. That is it today. Anything new is posted on the trust page before it starts, and shops never pay for position.",
        link: { href: "/trust", label: "Trust and safety" },
      },
      {
        q: "You're brand new. Why should I trust you?",
        a: "You shouldn't, entirely. What we can offer is that the person behind this has spent twenty-five years in the collector car business, that we say plainly where the product is thin, and that everything on this page is checkable. Start with something small and decide from there.",
        link: { href: "/about", label: "Who's behind this" },
      },
      {
        q: "What do you do with my data?",
        a: "We use it to run the service and nothing else. We don't sell personal information, and we don't hand your contact details to anyone you haven't chosen to contact.",
        link: { href: "/privacy", label: "Privacy policy" },
      },
    ],
  },
];

const ALL: Faq[] = SECTIONS.flatMap((s) => s.items);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://fullysorted.com/faq#faq",
  mainEntity: ALL.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://fullysorted.com/faq" },
  ],
};

export default function FaqPage() {
  return (
    <div style={{ background: "var(--bg-primary)" }} className="min-h-screen">
      <JsonLd data={[faqSchema, breadcrumbSchema]} />

      {/* Header, in the sitewide language: white, deep green type, teal eyebrow */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid rgba(18,53,42,0.14)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase mb-3" style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: "0.12em", color: "#1C8C87" }}>
            Questions and answers
          </p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05]" style={{ color: "#12352A" }}>
            The straight answers.
          </h1>
          <nav aria-label="FAQ sections" className="flex flex-wrap gap-2 mt-8">
            {SECTIONS.map((s) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors bg-white hover:bg-[#F4F6F5]"
                style={{ border: "1px solid rgba(18,53,42,0.14)", color: "#12352A" }}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-14">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.key} id={section.key} className="scroll-mt-24">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: section.tint, color: "#fff" }}
                >
                  <Icon className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h2
                    className="font-display text-2xl sm:text-3xl font-semibold tracking-tight"
                    style={{ color: "#1a1a18" }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "#6b6b5e" }}>
                    {section.blurb}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white" style={{ border: "1px solid rgba(0,0,0,0.09)" }}>
                {section.items.map((item, i) => (
                  <details
                    key={item.q}
                    className="group"
                    style={{ borderTop: i === 0 ? undefined : "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <summary
                      className="flex items-start justify-between gap-4 cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 transition-colors hover:bg-stone-50"
                    >
                      <h3 className="text-[15px] sm:text-base font-bold leading-snug" style={{ color: "#1a1a18" }}>
                        {item.q}
                      </h3>
                      <span
                        className="mt-0.5 shrink-0 text-xl leading-none font-light transition-transform duration-200 group-open:rotate-45"
                        style={{ color: section.tint }}
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5">
                      <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                        {item.a}
                      </p>
                      {item.link && (
                        <Link
                          href={item.link.href}
                          className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold transition-transform hover:translate-x-0.5"
                          style={{ color: section.tint }}
                        >
                          {item.link.label}
                          <ArrowRight className="w-4 h-4" aria-hidden />
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          );
        })}

        <section className="rounded-2xl p-8 sm:p-10 bg-white" style={{ border: "1px solid rgba(18,53,42,0.14)" }}>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#12352A" }}>
            Still not answered?
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-xl" style={{ color: "#6b6b5e" }}>
            A real person reads these, and awkward questions are welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-white transition-colors"
              style={{ background: "#12352A" }}
            >
              Get in touch
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl transition-colors hover:bg-[#F4F6F5]"
              style={{ border: "1px solid rgba(18,53,42,0.14)", color: "#12352A" }}
            >
              How Fully Sorted works
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

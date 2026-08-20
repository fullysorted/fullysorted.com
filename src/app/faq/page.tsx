import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Wrench, Car, LineChart, ShieldCheck, HelpCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { LISTING_TIERS, FREE_LISTINGS_THRESHOLD } from "@/lib/listing-tiers";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about hiring a collector car specialist, listing a car, what it costs, how reviews work, and where our valuation data comes from.",
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

const std = (LISTING_TIERS.standard.price / 100).toFixed(2);
const feat = (LISTING_TIERS.featured.price / 100).toFixed(2);
const prem = (LISTING_TIERS.premium.price / 100).toFixed(2);

const SECTIONS: FaqSection[] = [
  {
    key: "hiring",
    title: "Hiring a specialist",
    blurb: "The services hub — finding someone to work on your car.",
    icon: Wrench,
    tint: "#1E6091",
    items: [
      {
        q: "What does it cost to find and hire someone?",
        a: "Browsing the directory and requesting a quote is free, and always will be. Fixed-price gigs show the provider's price before you book, so nothing is added to a quote you have already been given. For quoted work you agree the price directly with the specialist.",
        link: { href: "/pricing", label: "See full pricing" },
      },
      {
        q: "What should the work itself actually cost?",
        a: "Nobody publishes this, so here are honest ballparks for the US market — the specialist quotes the real number once they know the car. Pre-purchase inspection: $150–$500 for a solid general inspection, $500–$1,500 for a marque specialist on a lift with compression and leak-down numbers and a full photo report. Detailing: $300–$800 for a thorough detail, $1,500–$4,000+ for multi-stage paint correction with a ceramic coating. Enclosed transport: roughly $1.50–$3.00 a mile on short runs, $2,000–$3,500 coast to coast. Climate-controlled storage: $150–$500 a month depending on region and how much hands-on care is included. Marque-specialist labour: $120–$225 an hour. If a quote sits far outside these, it is worth asking why — the answer is sometimes very good.",
      },
      {
        q: "Is the specialist insured? What happens if my car is damaged?",
        a: "Ask, every time, and ask for the certificate — this is the single most important question on this page and we would rather you hear it from us. What you want is garage-keepers legal liability cover, which is what protects a customer's car while it is in a shop's care; ordinary general liability often does not. Providers state their cover when they apply and we ask for it, but be clear about the shape of this: the work is contracted between you and them, and Fully Sorted is the introduction, not a party to it. Confirm the cover, and agree an agreed value in writing before you hand over the keys on anything unusual.",
        link: { href: "/insurance", label: "About agreed-value cover" },
      },
      {
        q: "What if the work isn't right?",
        a: "Raise it with the specialist first — most good shops fix their own mistakes, and the ones that don't are exactly what the public record is for. Then tell us, because a complaint is data: it goes on the directory record and it affects whether they stay listed. On a fixed-price gig paid through the site there is a formal revision and dispute path before funds are released. On quoted work there is not, because we never held your money — your recourse is the contract you have with them, and the review you leave.",
      },
      {
        q: "Do specialists pay you to rank higher?",
        a: "No. Nothing on the directory is for sale today — no promoted slots, no pay-to-rank, no sponsored results. If we ever do introduce paid placement, it will be labelled as such on the page itself, every time. The point of this site is that you can tell what you are looking at, and a directory you cannot trust the order of is worth nothing.",
      },
      {
        q: "Can a specialist delete a bad review?",
        a: "No. A provider can reply to any review, in public, and that is the only thing they can do to it. They cannot edit one, hide one, or take one down, and there is no button anywhere in their account that would. We step in only for the things that are not reviews — abuse, spam, or a review from someone who was never a customer — and when we remove something we record why. A review section a business can curate is an advertisement.",
      },
      {
        q: "What does a verified review mean, and why do some profiles show quotes instead?",
        a: "A verified review comes from a client we emailed directly, using a one-time link tied to that shop and that person. Those are the only reviews that carry stars and the only ones behind a profile's rating. Separately, a shop can supply praise it already has — the letter, the line from an email — and we publish it with the client's name in a block that says plainly it came from the shop and has not been verified by us. Those quotes count towards nothing: not the average, not the Top-rated badge, not the rating Google sees. The directory is new, so early on you will see more of the second kind than the first. We would rather show you which is which than pretend.",
      },
      {
        q: "Why does a profile show reviews but no star rating?",
        a: "Because one five-star review is not a 5.0 rating. We do not show an average until a shop has at least three verified reviews — below that you get the reviews themselves and no number, which is more information, not less. It is the same rule the Value Guide uses on sales data: say what the evidence supports and nothing beyond it.",
      },
      {
        q: "What trades can I find right now?",
        a: "Six: automotive photography, pre-purchase inspection, detailing and paint correction, climate-controlled storage, enclosed transport, and service and mechanical work. Between them they cover the whole ownership year. Restoration and body-and-paint are deliberately not live yet — both are month-long project jobs bought on long referral cycles, and neither is a sensible thing to ask a young directory for.",
        link: { href: "/services", label: "Browse the directory" },
      },
      {
        q: "Where do you have coverage?",
        a: "It depends on the service. Enclosed transport, pre-purchase inspection and photography work anywhere in the country — with an inspection you are looking for someone near the car, not near you. The marketplace is national as well, because cars ship. The trades that need somebody physically standing next to your car — detailing, storage, mechanical — we deepen city by city rather than claim coverage we do not have. If nobody is listed near you yet, tell us who should be and we will go and ask them.",
      },
      {
        q: "Can someone inspect a car that isn't near me?",
        a: "That is most of what a pre-purchase inspection is for. You find an inspector near the car, not near you, and they go and look at it on your behalf — which is exactly the situation where buying at distance goes wrong without one. Search by the car's location, and tell the inspector up front that you are remote so they photograph accordingly.",
        link: { href: "/services?type=inspection", label: "Find an inspector" },
      },
      {
        q: "Do you take a cut of what I pay the specialist?",
        a: "Not on quoted work — you pay them directly and we are not in the middle. On fixed-price gigs booked and paid through the site, the provider pays a platform fee out of the booking. Either way the price you are quoted is the price you pay; we never add anything on top of it.",
      },
      {
        q: "The trade I need isn't listed. Can you find someone?",
        a: "Tell us who should be on here and we will go and sign them. Recommendations from owners are how most of the directory gets built — if you have a mechanic or a detailer you trust, they are exactly who we want.",
        link: { href: "/contact", label: "Recommend a specialist" },
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
        a: "Founding specialists list free while we are building out the directory. There are two ways to be on here: a directory profile, where owners find you and request quotes, and fixed-price gigs, where you package what you do at a set price and owners book it directly.",
        link: { href: "/services/apply", label: "Get listed" },
      },
      {
        q: "Do I need to be a registered business?",
        a: "No. There are two application routes — one for established shops and companies, one for independent specialists working on their own. Both sit in the same directory, in separate sections, so owners can tell which they are dealing with.",
      },
      {
        q: "How do I get paid?",
        a: "For quoted work, directly by the customer — we never touch it. For fixed-price gigs, card payment runs through Stripe: the money is held and released to you once the work is delivered. Card payment is rolling out provider by provider, and until yours is switched on a booking reaches you as an enquiry and you invoice the owner yourself.",
      },
      {
        q: "Can I choose which jobs I take?",
        a: "Always. A quote request is a lead, not an obligation, and you can decline anything. The one thing we will ask is that you reply — an unanswered enquiry is the fastest way to lose your place here, because the owner on the other end is sitting there thinking the whole site is dead.",
      },
      {
        q: "What makes a profile get booked?",
        a: "Specifics. The marques you actually know, real photographs of your own work, honest turnaround times, and a clear description of what a job with you involves. Owners on this site are researching before they commit — a profile that reads like it was written by someone who does the work outperforms one that reads like an advert.",
        link: { href: "/services/guide", label: "Read the provider playbook" },
      },
    ],
  },
  {
    key: "marketplace",
    title: "Buying and selling",
    blurb: "The peer-to-peer marketplace.",
    icon: Car,
    tint: "#B08D3F",
    items: [
      {
        q: "What does it cost to list a car?",
        a: `Three tiers, all charged once, up front: Standard $${std}, Featured $${feat}, and Premium $${prem}. The first ${FREE_LISTINGS_THRESHOLD} cars listed on the platform are free while we are getting started. There is no buyer's premium and no auction clock.`,
        link: { href: "/pricing", label: "Compare the tiers" },
      },
      {
        q: "How is this different from an auction site?",
        a: `Curated online auction sites are time-limited and take a percentage of the sale — usually four to five per cent, as a buyer's premium or a seller's fee. Classifieds sites typically charge $50–$99 to list. Fully Sorted is flat-fee and peer-to-peer: one payment up front from $${std}, no clock, and the buyer talks to the owner rather than to a middleman.`,
      },
      {
        q: "Can I get a car inspected before I buy it here?",
        a: "Yes, and it is the reason the two halves of this site sit together. Find an inspector near the car, book them, and have the report in hand before you wire anything — on a car you are buying at distance from someone you have never met, a few hundred dollars against a five- or six-figure decision is the easiest money you will ever spend. We do not require it and we do not get in the way of it; we just think you would be daft not to.",
        link: { href: "/services?type=inspection", label: "Find an inspector" },
      },
      {
        q: "Do you handle the money or provide escrow?",
        a: "No. On car sales we are the introduction, not a party to the transaction — buyer and seller agree their own payment method and the money never passes through us. For anything significant, use a licensed escrow company; on the Premium tier we will make that introduction for you. Anyone who tells you Fully Sorted is holding funds for a car sale is not us.",
      },
      {
        q: "How do I avoid getting scammed?",
        a: "The patterns are boring and they repeat. Be wary of a buyer who agrees your price without negotiating, wants to overpay and have you refund the difference, insists on a shipping agent of their own, sends a cashier's cheque, or moves the conversation off-site immediately. On the buying side: never wire a deposit for a car nobody has seen, be suspicious of a price well under the market, and treat reluctance to get on a video call with the car as the answer. Speak to the person. Get an inspection. If it feels rushed, that is the pressure doing its job.",
        link: { href: "/trust", label: "Trust & safety" },
      },
      {
        q: "Will my phone number and address be public?",
        a: "No. Buyers reach you through the site and you decide when to hand over a number. Your listing shows a city and state so buyers know where the car is, never a street address.",
      },
      {
        q: "What happens when it sells?",
        a: "Mark it sold in your dashboard, which closes the listing and stops the enquiries. That is it — no commission is due, no success fee, nothing to reconcile. Telling us also improves the comp database for the next person, and if you are willing to share what it actually sold for, that is genuinely useful to everyone.",
        link: { href: "/submit-sale", label: "Report a sale price" },
      },
      {
        q: "How long does my listing run, and can I edit it?",
        a: "Standard runs 30 days, Featured 60, Premium until the car sells. You can edit anything at any time from your dashboard — photos, price, description — or pull it entirely. The fee is one-time, so changing your mind never costs you again.",
      },
      {
        q: "Who reviews listings before they go live?",
        a: "A person does. Listings are checked for accuracy and obvious misrepresentation before they appear. It is not an inspection and it is not a guarantee — it is a filter against the worst of what a marketplace attracts.",
      },
      {
        q: "What kinds of cars belong here?",
        a: "Anything with collector interest: muscle, European classics, JDM, pre-war, modern classics, barn finds and honest project cars. Condition is not the bar — a car with a story and a straight description belongs here more than a perfect car with a vague one.",
        link: { href: "/browse", label: "Browse what's listed" },
      },
    ],
  },
  {
    key: "research",
    title: "Values and research",
    blurb: "Where the numbers come from — and what they are not.",
    icon: LineChart,
    tint: "#2C4A63",
    items: [
      {
        q: "Where does your valuation data come from?",
        a: "Publicly available sale results — auction results and reported private sales — aggregated into comps for a given year, make and model. We work from what cars actually sold for rather than what sellers were asking, because asking prices tell you about optimism, not about the market.",
      },
      {
        q: "How complete is the comp database?",
        a: "Early, and we would rather say so than imply otherwise. It is deep on some segments and thin on others, it is not yet a licensed real-time feed, and we are adding to it continuously. Where we have too few comparable sales for a figure to mean anything, we say so instead of producing a confident number out of nothing.",
      },
      {
        q: "How many sales do you need before you'll give me a number?",
        a: "We publish the rule, which as far as we know nobody else does. One or two sales: no estimate at all, just the sales themselves. Three to five: a range, no midpoint — too few results to put a single number on a car honestly. Six to eight: a median worth using, framed as a reasonable read rather than a precise one. Nine or more: a median we will stand behind. Twenty or more before we will show you a trend. If you ever see a confident number on this site, it is because it earned it.",
      },
      {
        q: "Why do you lead with a median instead of an average?",
        a: "Because one exceptional car wrecks an average. A single concours-winning or numbers-matching rarity inside a small comp set drags the mean far above anything a normal example changes hands for — a four-sale set containing one seven-figure car will happily report a seven-figure 'average' for a car that trades at a fraction of it. The median is what a typical car in that set actually sold for. Where we detect that skew, we hide the average rather than print it.",
      },
      {
        q: "Why is your number different from Hagerty's or a price guide's?",
        a: "Because they are answering a different question. A price guide publishes an editor's considered estimate of what a car in a given condition grade is worth — an expert opinion, informed by sales but not identical to them. We publish what specific cars actually sold for, on specific dates, and let you see the sales. Ours moves faster and is blunter about thin data; theirs is smoother and covers cars we have no results for. Use both. Where they disagree sharply, that gap is usually telling you something about condition or provenance that neither number captures.",
      },
      {
        q: "Can I use a valuation for insurance or a bank?",
        a: "No — it is not a formal appraisal and should not be presented as one. It is research: a well-sourced view of what comparable cars have sold for, to inform what you offer or accept. For agreed-value insurance or financing you need a licensed appraiser.",
        link: { href: "/insurance", label: "About collector car insurance" },
      },
      {
        q: "Is any of this financial advice?",
        a: "No. Collector cars are not an investment product, market commentary here is observation rather than recommendation, and past results do not indicate future values. Buy the car because you want the car.",
      },
      {
        q: "Can I submit a sale you've missed?",
        a: "Please do. Owner-submitted sale results — especially private sales that never hit a public auction — are some of the most useful data we get, because they are the half of the market nobody else records.",
        link: { href: "/submit-sale", label: "Submit a sale result" },
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
        a: "It is British. In the UK, 'sorted' means handled — dealt with, in order, nothing left hanging. Car people narrowed it further: a sorted car is one whose faults have been chased down and fixed properly rather than bodged or ignored. It starts on the button, the temperature gauge sits where it should, nothing weeps onto the garage floor. Not restored, not concours — just right, so you can get in and drive without running a checklist in your head. Getting a car there usually takes several different specialists, which is what this site is for.",
        link: { href: "/about", label: "The longer version" },
      },
      {
        q: "How does Fully Sorted make money?",
        a: "Two ways today. Sellers pay a one-time flat fee to list a car. Providers pay a platform fee on fixed-price gigs booked through the site. That is the whole list — no commission on a car sale, no buyer's premium, no cut of a quote you agree directly with a specialist, and nothing sold to advertisers in the directory. We would rather you knew this than guessed at it, because how a marketplace earns tells you whose side it is on.",
      },
      {
        q: "You're brand new. Why should I trust you?",
        a: "You shouldn't, entirely, and we would be wary of a new site that told you otherwise. What we can offer is that the person behind this has spent twenty-five years in the collector car business, that we say plainly where the product is thin rather than dressing it up, and that everything on this page is checkable. Start with something small — read a model history, run a valuation, ask a specialist for a quote — and decide from there.",
        link: { href: "/about", label: "Who's behind this" },
      },
      {
        q: "What do you do with my data?",
        a: "We use it to run the service and nothing else. We don't sell personal information, and we don't hand your contact details to anyone you haven't chosen to contact. The full detail is in the privacy policy, which is written to be read rather than to be survived.",
        link: { href: "/privacy", label: "Privacy policy" },
      },
      {
        q: "Something on the site is wrong. Will you fix it?",
        a: "Yes, and telling us is a favour. A wrong production number on a model page, a comp attached to the wrong car, a specialist listed under the wrong trade — send it over and we will correct it. Model histories carry owner corrections and notes for exactly this reason: the people who own these cars know things we don't.",
        link: { href: "/contact", label: "Tell us what's wrong" },
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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#0F2032" }}>
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }}
        />
        <div className="absolute inset-0 speed-lines opacity-[0.06] pointer-events-none" aria-hidden />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" aria-hidden />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div
            className="inline-flex items-center gap-2 mb-5 px-3.5 py-2 rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.22)", background: "rgba(255,255,255,0.06)" }}
          >
            <HelpCircle className="w-3.5 h-3.5" style={{ color: "#8FBBDF" }} aria-hidden />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#C9D4E2" }}>
              Questions & answers
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.06] text-white">
            The straight answers.
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "#9fb5cd" }}>
            What things cost, how trust works, where our numbers come from, and what
            we don&apos;t do. Where something is half-built, it says so.
          </p>

          {/* Jump links */}
          <nav aria-label="FAQ sections" className="flex flex-wrap gap-2 mt-8">
            {SECTIONS.map((s) => (
              <a
                key={s.key}
                href={`#${s.key}`}
                className="px-3.5 py-1.5 text-xs font-bold rounded-full transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.22)", color: "#C9D4E2" }}
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

        {/* ── Still stuck ────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden rounded-2xl p-8 sm:p-10"
          style={{ background: "#0F2032" }}
        >
          <div className="absolute inset-0 speed-lines opacity-20 pointer-events-none" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Still not answered?
            </h2>
            <p className="mt-3 text-sm leading-relaxed max-w-xl" style={{ color: "#9fb5cd" }}>
              Ask directly — a real person reads these, and awkward questions are
              welcome. If something on the site is wrong or unclear, we want to know.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-white transition-colors hover:bg-stone-100"
                style={{ color: "#0F2032" }}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl border-2 text-white transition-colors hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                How Fully Sorted works
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

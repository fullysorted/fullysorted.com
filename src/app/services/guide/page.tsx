import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Route,
  ShieldCheck,
  UserCircle,
  Images,
  ListChecks,
  Layers,
  ClipboardList,
  BadgeCheck,
  TrendingUp,
  Search,
  PencilLine,
  MessageSquare,
  CreditCard,
  Star,
  Sparkles,
  Wrench,
  Building2,
  User,
  ClipboardCheck,
  Truck,
  Camera,
  Hammer,
  PaintBucket,
  Warehouse,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { PROVIDER_TRACKS } from "@/lib/data/providerTracks";

export const metadata: Metadata = {
  title: "The Provider Playbook — How to Get Booked on Fully Sorted",
  description:
    "A step-by-step onboarding guide for collector-car specialists: build a profile that wins trust, price your services in tiers, and grow your bookings. Plus a buyer's guide to hiring the right pro.",
  alternates: { canonical: "/services/guide" },
};

/* ————————————————————————————————————————————————
   The two ways to sell your services
———————————————————————————————————————————————— */
const PATHS = [
  {
    icon: Layers,
    tag: "Fixed-price gig",
    title: "Book-me-now gigs",
    body:
      "Package a service at an upfront price — a paint-correction detail, a pre-purchase inspection, an enclosed transport lane. Buyers see the price, pick a tier, and book in a couple of clicks. Best for repeatable, well-scoped work you can quote without a conversation.",
    cta: { href: "/services/apply/freelancer", label: "Offer a fixed-price gig" },
  },
  {
    icon: Building2,
    tag: "Directory business",
    title: "Get-a-quote listing",
    body:
      "List your shop or business in the specialist directory. Owners find you by marque, service, and location, then send an inquiry for a custom quote. Best for bespoke, high-value work — a full restoration, a bare-metal respray, an engine rebuild — that needs a conversation before a number.",
    cta: { href: "/services/apply/business", label: "List your business" },
  },
];

/* ————————————————————————————————————————————————
   Provider playbook — 9 deep steps
———————————————————————————————————————————————— */
type Step = {
  icon: React.ElementType;
  title: string;
  body: string;
  checklist?: string[];
  tip?: string;
};

const PROVIDER_STEPS: Step[] = [
  {
    icon: Route,
    title: "Choose your path",
    body:
      "Decide how you want to sell before you build anything. Fixed-price gigs win fast, repeatable bookings; a directory listing wins bespoke, high-ticket jobs. Plenty of pros run both — a set of productized gigs for bread-and-butter work, plus a directory profile for full projects.",
    checklist: [
      "Repeatable and easy to price up front → fixed-price gig",
      "Bespoke, high-value, needs a scoping call → directory business",
      "A mix of both → set up a gig and claim a directory listing",
    ],
    tip: "Not sure? Start with one clean fixed-price gig. It is the fastest way to your first review, and reviews are what unlock everything else.",
  },
  {
    icon: ShieldCheck,
    title: "Create your account & get verified",
    body:
      "Sign up, then verify your email and phone. Verification is what earns your profile the trust badge buyers look for, and it protects your account. Add your business credentials — licenses, insurance, workshop accreditations — so we can confirm you are the real deal before you go live.",
    checklist: [
      "Verify email and phone",
      "Add business license / registration number",
      "Upload proof of insurance and any workshop accreditations",
    ],
    tip: "A verified, insured profile converts far better than an anonymous one. Collectors are handing over six-figure cars — signal that you are safe to trust.",
  },
  {
    icon: UserCircle,
    title: "Build a profile that wins trust",
    body:
      "Your profile is your storefront. Lead with a sharp, specific tagline, a professional photo or clean logo, and a bio that makes your specialism obvious in the first line. Collectors hire experts, not generalists — so say exactly which marques, eras, and services you are the specialist in.",
    checklist: [
      "Professional headshot or high-resolution logo",
      "One-line tagline naming your specialism (e.g. 'Air-cooled Porsche paint correction, Los Angeles')",
      "Bio: years of experience, marque expertise, notable work, service area",
      "Certifications, insurance, and languages spoken",
    ],
    tip: "Name your marques. 'Classic car detailing' is invisible; 'Ferrari and Lamborghini concours detailing' is a search magnet and a credibility signal at once.",
  },
  {
    icon: Images,
    title: "Add your portfolio — this is non-negotiable",
    body:
      "Nothing sells specialist work like proof of specialist work. Upload high-resolution before/after photos and, wherever you can, short video of completed cars. This is the single most powerful thing on your profile — treat a thin portfolio as an unfinished profile.",
    checklist: [
      "Before/after pairs for your best jobs",
      "Detail shots: paint, panel gaps, engine bay, interior, badges",
      "Short video walkarounds where possible",
      "Only your own work, only your own photos",
    ],
    tip: "Ten strong, well-lit before/afters beat fifty phone snaps. Curate for quality — buyers judge your standards by the worst photo you post.",
  },
  {
    icon: ListChecks,
    title: "Create your first listing",
    body:
      "Give the service a clear, descriptive title, put it in the right category, and tag it with the keywords owners actually search — marque, service, location. A precise title and correct category are how buyers and search engines find you.",
    checklist: [
      "Descriptive title ('Multi-stage paint correction & ceramic coating')",
      "Correct category: detailing, mechanical, transport, inspection, restoration, photography",
      "Tags/keywords: marques, services, city/region",
    ],
    tip: "Write the title a buyer would type into search, not the one that sounds clever. Clarity outranks cleverness every time.",
  },
  {
    icon: Layers,
    title: "Set your scope & pricing",
    body:
      "For fixed-price gigs, offer up to three tiers so buyers can self-select by budget and ambition — for example Standard, Enhanced, and Concours — each with a price, a turnaround time, and what is included. Add optional extras for the upsells. For a directory business, publish a clear service list and explain how your quote and lead process works.",
    checklist: [
      "Three tiers, each with price, turnaround, and revisions",
      "Concrete deliverables per tier — no vague 'premium service'",
      "Add-ons for common upsells (paint sealant, extra detail time, expedited slot)",
      "Directory listings: publish a service menu and typical price ranges",
    ],
    tip: "Anchor with three tiers. Most buyers pick the middle — so make the middle tier the one you most want to sell, and let Concours make it look reasonable.",
  },
  {
    icon: ClipboardList,
    title: "Set your client requirements",
    body:
      "Tell buyers exactly what you need from them before you can start, so jobs land ready to go instead of stalling in back-and-forth. The more precisely you ask, the cleaner every booking arrives.",
    checklist: [
      "Vehicle year, make, model, and VIN/chassis",
      "Location or collection/drop-off details",
      "Current condition and any known issues",
      "Photos of the car and the specific areas of concern",
    ],
    tip: "A good requirements list is a filter. It weeds out mismatched jobs before they become refunds and protects your review score.",
  },
  {
    icon: BadgeCheck,
    title: "Publish & pass review",
    body:
      "Before your listing goes live, it gets a quick quality check for completeness and professionalism. A verified profile, a real portfolio, and clear pricing sail through. Once approved, you are live and discoverable.",
    checklist: [
      "Profile complete and verified",
      "Portfolio populated with real work",
      "At least one listing with tiered pricing and requirements",
    ],
    tip: "Complete profiles get approved faster and rank higher. Finish everything before you submit — a half-built profile reads as a half-serious business.",
  },
  {
    icon: TrendingUp,
    title: "Grow — reviews, response time, and provider tiers",
    body:
      "Once you are live, momentum compounds. Reply fast, deliver on time, and ask happy owners to leave a review. Response time and on-time delivery feed the provider tiers and badges that push you up the rankings and win you more leads.",
    checklist: [
      "Reply to inquiries within hours, not days",
      "Deliver on or ahead of the promised turnaround",
      "Ask every satisfied owner for a review",
      "Refine your tiers and add-ons as you learn what sells",
    ],
    tip: "Your first five reviews are the hardest and the most valuable. Overdeliver on your first jobs — you are not just doing the work, you are buying your reputation.",
  },
];

/* ————————————————————————————————————————————————
   Buyer's guide — 8 steps
———————————————————————————————————————————————— */
const BUYER_STEPS: Step[] = [
  {
    icon: Sparkles,
    title: "Two ways to hire",
    body:
      "Book a fixed-price gig instantly when the job is well-defined — a detail, an inspection, a transport run. Or contact an owner-reviewed business for a custom quote when the work is bespoke — a restoration, a respray, a rebuild. Fast and fixed, or custom and quoted.",
  },
  {
    icon: UserCircle,
    title: "Get started",
    body:
      "Creating an account takes a minute, and you never need to pay to browse. Save and shortlist the specialists that catch your eye so you can compare them side by side before you commit.",
  },
  {
    icon: Search,
    title: "Find the right specialist",
    body:
      "Filter by category, marque, and location, then read the profile properly. Look past the star average to the number of reviews behind it, study the portfolio for cars like yours, and check response times before you reach out.",
  },
  {
    icon: PencilLine,
    title: "Write a good brief",
    body:
      "A specialist can only deliver what you describe. Be specific: the vehicle and its condition, the exact outcome you want, your timeline and budget, and your must-haves and must-avoids. A precise brief gets a precise quote — and a better result.",
  },
  {
    icon: MessageSquare,
    title: "Message before you book",
    body:
      "For higher-value or bespoke jobs, message first. Confirm scope, timeline, and that the specialist is genuinely the right fit for your car before you commit a deposit or a booking.",
  },
  {
    icon: CreditCard,
    title: "Place an order or request a quote",
    body:
      "For a fixed-price gig, pick the tier that fits and you will see a transparent total including fees before you confirm. For bespoke work, send your brief to the business as a lead and they will come back with a custom quote.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & protection",
    body:
      "Every provider is rated and reviewed by the owners who hire them, and the open review record tells you who consistently delivers. Revisions and dispute handling are there to protect you if a job does not land the way it should.",
  },
  {
    icon: Star,
    title: "After the job",
    body:
      "Leave an honest review — it is how the whole community stays trustworthy. Re-book the specialists you trust, and reach out to support any time you need a hand.",
  },
];

/* ————————————————————————————————————————————————
   Provider FAQ
———————————————————————————————————————————————— */
const FAQS = [
  {
    q: "Do I need a registered business to list?",
    a: "You can list as an independent specialist offering fixed-price gigs, or as a registered business in the directory. Either way, verifying your identity, insurance, and any relevant credentials is what earns the trust badge that wins bookings.",
  },
  {
    q: "How should I price my services?",
    a: "For fixed-price gigs, offer up to three tiers — for example Standard, Enhanced, and Concours — each with a clear price, turnaround, and list of what is included, plus optional add-ons for upsells. Most buyers choose the middle tier, so make it the one you most want to sell. For bespoke work, list your services in the directory and quote each job individually.",
  },
  {
    q: "Why does my portfolio matter so much?",
    a: "It is the single most powerful thing on your profile. Collectors are trusting you with valuable, often irreplaceable cars, and high-resolution before/after photos and video of your completed work are the proof that you can be trusted with theirs. Treat a thin portfolio as an unfinished profile.",
  },
  {
    q: "How do I get found by the right owners?",
    a: "Name your specialism precisely — the marques, eras, and services you are the expert in — in your title, tagline, and tags. Specific beats generic: 'air-cooled Porsche paint correction' gets found where 'car detailing' disappears.",
  },
  {
    q: "How do I earn a higher ranking and more leads?",
    a: "Respond quickly, deliver on time, and collect reviews from satisfied owners. Response time, on-time delivery, and your review record feed the provider tiers and badges that push you up the rankings and send more leads your way.",
  },
  {
    q: "What information should I ask buyers for before starting?",
    a: "Set clear client requirements: the vehicle's year, make, model and VIN/chassis, its location, its current condition and any known issues, and photos of the areas of concern. A precise requirements list keeps jobs from stalling and protects your review score.",
  },
];

/* ————————————————————————————————————————————————
   Structured data (AI-native / GEO)
———————————————————————————————————————————————— */
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": "https://fullysorted.com/services/guide#howto",
  name: "How to become a collector-car service provider on Fully Sorted",
  description:
    "A step-by-step onboarding guide for collector-car specialists to build a trusted profile, price services in tiers, and grow bookings on Fully Sorted.",
  step: PROVIDER_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
    ...(s.checklist
      ? {
          itemListElement: s.checklist.map((c, j) => ({
            "@type": "HowToDirection",
            position: j + 1,
            text: c,
          })),
        }
      : {}),
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://fullysorted.com/services/guide#faq",
  mainEntity: FAQS.map((f) => ({
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
    { "@type": "ListItem", position: 2, name: "Services", item: "https://fullysorted.com/services" },
    { "@type": "ListItem", position: 3, name: "Provider Guide", item: "https://fullysorted.com/services/guide" },
  ],
};

/* ————————————————————————————————————————————————
   Presentation
———————————————————————————————————————————————— */
function StepRow({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
  const tone = ["#1E6091", "#B08D3F", "#1E6091"][index % 3];
  return (
    <div className="relative bg-white border border-border rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-5">
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${tone}14` }}
          >
            <Icon className="w-5 h-5" style={{ color: tone }} />
          </div>
          <span
            className="text-xs font-bold tabular-nums"
            style={{ color: tone }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-foreground mb-1.5">{step.title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>

          {step.checklist && (
            <ul className="mt-4 space-y-2">
              {step.checklist.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-sm shrink-0"
                    style={{ backgroundColor: tone }}
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          )}

          {step.tip && (
            <div
              className="mt-4 rounded-xl px-4 py-3 text-sm leading-relaxed"
              style={{ backgroundColor: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.25)" }}
            >
              <span className="font-bold" style={{ color: "#8a6d2f" }}>
                Pro tip ·{" "}
              </span>
              <span className="text-foreground">{step.tip}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BuyerCard({ step, index }: { step: Step; index: number }) {
  const Icon = step.icon;
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
      <h3 className="text-base font-bold text-foreground mb-1.5">{step.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
    </div>
  );
}

const TRACK_ICONS: Record<string, React.ElementType> = {
  Sparkles,
  ClipboardCheck,
  Truck,
  Camera,
  Wrench,
  Hammer,
  PaintBucket,
  Warehouse,
};

export default function ProviderGuidePage() {
  return (
    <div style={{ backgroundColor: "#f5f4f0" }} className="min-h-screen">
      <JsonLd data={[howToSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <Image
          src="/images/archive/porsche-904-engine-detail.jpg"
          alt="Porsche 904 with its engine exposed, mid-service"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(15,32,50,0.68), rgba(15,32,50,0.86))" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2.5 border border-white/30 bg-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="flex gap-1" aria-hidden="true">
              <span className="w-1.5 h-1.5" style={{ background: "#6ab04c" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#29ABE2" }} />
              <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
            </span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">The Provider Playbook</span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] mb-4">
            Turn your craft into a <span style={{ color: "#D9C08A" }}>fully booked</span> business.
          </h1>
          <p className="text-lg text-stone-200 max-w-2xl mx-auto">
            Everything a collector-car specialist needs to build a profile owners trust, price work that sells, and turn first jobs into a steady stream of bookings.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Get listed <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#playbook"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl border border-white/40 hover:bg-white/10 transition-colors"
            >
              Read the playbook
            </a>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1E6091" }}>
              Start here
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Two ways to sell your services
            </h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              Pick the model that fits the work. Many specialists run both — productized gigs for repeatable jobs, a directory listing for bespoke projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PATHS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white border border-border rounded-2xl p-7 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "rgba(30,96,145,0.09)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#1E6091" }} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ color: "#8a6d2f", backgroundColor: "rgba(176,141,63,0.12)" }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">{p.body}</p>
                  <Link
                    href={p.cta.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#1E6091" }}
                  >
                    {p.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tailored tracks by trade */}
      <section className="pb-4 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1E6091" }}>
              Tailored by trade
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Guides built for your specialism
            </h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              A detailer, an inspector, and a photographer need different gigs, pricing, and portfolios. Pick your trade for a guide tuned to exactly what wins bookings in it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROVIDER_TRACKS.map((t) => {
              const TIcon = TRACK_ICONS[t.icon] ?? Wrench;
              return (
                <Link
                  key={t.slug}
                  href={`/services/guide/${t.slug}`}
                  className="group bg-white border border-border rounded-2xl p-5 flex items-start gap-4 hover:border-accent hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,96,145,0.09)" }}>
                    <TIcon className="w-5 h-5" style={{ color: "#1E6091" }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-0.5 flex items-center gap-1.5">
                      {t.label}
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" style={{ color: "#1E6091" }} />
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{t.hiredFor}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Provider playbook */}
      <section id="playbook" className="py-16 px-4 sm:px-6 bg-white border-y border-border scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1E6091" }}>
              <Wrench className="w-3.5 h-3.5" /> For Providers
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              The nine-step playbook
            </h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              From empty profile to first booking. Work through it in order — each step builds the trust that makes the next one pay off.
            </p>
          </div>
          <div className="space-y-4">
            {PROVIDER_STEPS.map((s, i) => (
              <StepRow key={i} step={s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Start your profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Buyer's guide */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1E6091" }}>
              <User className="w-3.5 h-3.5" /> For Owners Hiring a Pro
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              How to hire the right specialist
            </h2>
            <p className="text-sm text-text-secondary mt-2 max-w-2xl mx-auto">
              A short guide to finding, briefing, and booking a collector-car pro you can trust with your car.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BUYER_STEPS.map((s, i) => (
              <BuyerCard key={i} step={s} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Find a specialist <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1E6091" }}>
              Provider FAQ
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Questions specialists ask
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <div key={i} className="border border-border rounded-2xl p-6" style={{ backgroundColor: "#faf9f7" }}>
                <h3 className="text-base font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-text-secondary mb-4">Ready to turn your craft into bookings?</p>
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors"
            >
              Get listed on Fully Sorted <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

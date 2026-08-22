import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  FileText,
  Library,
  ScanLine,
  Ship,
  Store,
  Wrench,
} from "lucide-react";
import { getPublishedModelsWithMeta } from "@/lib/data/models";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchNav } from "@/components/research/ResearchNav";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Collector Car Buying Guides",
  description:
    "A pre-purchase checklist for collector cars: title and lien status, chassis numbers, rust, cold start, independent inspection and how the money moves.",
  alternates: { canonical: "/research/buying-guides" },
};

/* ————————————————————————————————————————————————
   The checklist — this page's own editorial content.
   Model-specific faults belong on the model histories; everything here
   applies to any collector car regardless of badge. `body` is plain text
   so it can be reused verbatim as HowToStep text in the JSON-LD; anything
   that needs a link is expressed as `link` and rendered after the points.
———————————————————————————————————————————————— */
type ChecklistLink = { href: string; label: string; lead: string };

interface ChecklistStep {
  title: string;
  body: string;
  points: string[];
  link?: ChecklistLink;
}

interface ChecklistStage {
  key: string;
  kicker: string;
  title: string;
  standfirst: string;
  icon: React.ReactNode;
  steps: ChecklistStep[];
}

const STAGES: ChecklistStage[] = [
  {
    key: "before-you-travel",
    kicker: "Stage one",
    title: "Before you travel",
    standfirst:
      "Most bad cars can be ruled out from a desk. Do this before booking a flight or a trailer.",
    icon: <FileText className="w-4 h-4" />,
    steps: [
      {
        title: "Read the title before you read the advert",
        body:
          "Ask for a photograph of the title, logbook or export certificate with the chassis number legible, and confirm the registered keeper is the person selling the car. Branded, salvage, bonded and lien-encumbered cars all sell legitimately — they are simply worth less, and an outstanding lien has to be paid off through the closing, not on assurance.",
        points: [
          "Registered owner name matches the seller's ID, or there is a signed power of attorney explaining why it does not.",
          "Title status read in full: clean, salvage, rebuilt, bonded, flood, odometer-discrepant, or in transit from a lender.",
          "For a car outside its home market: the export document, the de-registration certificate, and whatever the destination country needs on arrival.",
          "No title at all on a pre-1970s car is common in some states and fatal in others. Establish what your DMV or licensing authority will register before you make an offer.",
        ],
      },
      {
        title: "Verify the chassis number yourself",
        body:
          "Decode the VIN or chassis number independently and check it against the model's build years, engine family, body style and assembly plant. Then order the title history and, where the marque runs an archive, the factory build record.",
        points: [
          "1981-and-newer VINs are 17 digits and decode free; earlier chassis numbers need a marque registry, a club archive or the factory.",
          "Factory records exist for many marques — build sheets, certificates of authenticity, heritage certificates — and are the only way to confirm original colour, engine and options.",
          "A title-history report will show branding, mileage readings and past registrations across states. It will not show unreported accident damage.",
        ],
        link: {
          href: "/vin",
          label: "Decode a VIN",
          lead: "Any 1981-or-newer VIN, free:",
        },
      },
      {
        title: "Establish what the car has sold for, not what it is listed at",
        body:
          "Price the car against completed sales of the same generation, specification and condition tier within the last eighteen months. Asking prices are an opening position; auction results are a record.",
        points: [
          "Compare like for like: a matching-numbers car, a correct-colour car and a restored shell are three different markets.",
          "Note the fees that sat on top of each comparable — buyer's premium at auction, sales tax and registration at home.",
          "Watch for a car that has been through several sales in quick succession. That pattern usually has a reason behind it.",
        ],
      },
      {
        title: "Ask for the awkward documents up front",
        body:
          "Request the service invoices with mileage printed on them, the inspection or roadworthiness records, receipts for the expensive scheduled work, and a walk-around video shot to your instructions rather than the seller's showreel.",
        points: [
          "Invoices for the big scheduled items — cambelt, valve clearances, fuel system, brake overhaul — with dates and mileage.",
          "A cold start filmed from behind the car, the underside on a lift or ramps, the shut lines, and the areas the model is known to rot.",
          "A gap of several years with no paperwork is not proof of neglect, but it is the part of the story you should price.",
        ],
      },
      {
        title: "Price the transaction, not the car",
        body:
          "Add transport, sales tax and registration, agreed-value insurance, any auction premium, and the deferred maintenance visible in the invoices. Importing adds duty, compliance work and a customs broker on top of that.",
        points: [
          "Enclosed transport costs multiples of open transport and is the cheaper option on anything with fresh paint or low ground clearance.",
          "Deferred maintenance is part of the purchase price. A due cambelt or a tired clutch is money you are spending whether or not you negotiate it.",
        ],
        link: {
          href: "/research/importing",
          label: "What importing actually costs",
          lead: "Buying from another market:",
        },
      },
    ],
  },
  {
    key: "at-the-car",
    kicker: "Stage two",
    title: "At the car",
    standfirst:
      "Work in this order. Numbers and structure decide whether the car is the one advertised; paint and trim only decide what it costs to finish.",
    icon: <Wrench className="w-4 h-4" />,
    steps: [
      {
        title: "Numbers first, paint second",
        body:
          "Find and photograph every identifying number on the car: chassis plate, chassis stamping, engine number, gearbox number, body tag and any option or colour code. Confirm they agree with each other and with the title.",
        points: [
          "Compare the stamping style, depth and spacing with a known-original example. Restamped and re-plated numbers are a documented practice on valuable models.",
          "A replacement engine is not automatically a problem. An undisclosed one is, because matching-numbers cars are priced differently.",
          "Photograph the numbers on the day. They are the evidence if the car is later described differently.",
        ],
        link: {
          href: "/research/glossary",
          label: "What the listing words mean",
          lead: "Matching numbers, numbers-matching, correct: ",
        },
      },
      {
        title: "Structure before cosmetics",
        body:
          "Rust in a structural member is bodyshop work measured in months; rust in a bolt-on panel is a panel. Get under the car and check the places the model corrodes rather than the places that are easy to reach.",
        points: [
          "Floors, sills and rockers, jacking points, inner wings and strut towers, spring hangers, chassis rails and box sections.",
          "Water traps: screen surrounds, sunroof and scuttle drains, battery tray, bulkhead seams, boot floor and spare wheel well.",
          "A paint-depth gauge and a magnet are inexpensive. Readings several times the factory figure indicate filler or a repaint, both of which are worth understanding before you agree a price.",
          "Ripples in the roof and misaligned shut lines are structural news, not cosmetic news.",
        ],
      },
      {
        title: "Insist on a cold start, and be there for it",
        body:
          "Ask the seller not to run the car before you arrive, and arrive early enough to confirm the engine is stone cold. A pre-warmed engine hides hard starting, smoke, a weak battery and top-end noise.",
        points: [
          "Watch the exhaust for the first thirty seconds: blue on start suggests valve stem seals, blue under load suggests bores, white that does not clear suggests coolant.",
          "Listen to the top end before oil pressure comes up, and listen again once warm.",
          "Note whether it starts on the key or on a trick. A car with a starting procedure has a fault someone has learned to live with.",
        ],
      },
      {
        title: "Drive it further than the end of the road",
        body:
          "Twenty minutes minimum, including a sustained high-speed run, so the coolant and transmission reach operating temperature and stay there. Most faults only appear once everything is hot.",
        points: [
          "Temperature under load, oil pressure when hot at idle, and charging voltage.",
          "Gearbox synchromesh on a second-gear downshift, clutch bite point, and whether the car pulls out of gear on the overrun.",
          "Braking in a straight line, steering that self-centres, and no vibration that arrives at a particular speed.",
          "Drive it on a poor surface as well as a smooth one. Suspension and body noises need something to react to.",
        ],
      },
      {
        title: "Then check the faults specific to this model",
        body:
          "Every model has a small number of expensive, well-documented weak points, and they are the ones worth a torch and ten minutes. Read the model history for the car you are looking at before you go.",
        points: [
          "Know the one or two failures that are worth more than the car's margin before you travel.",
          "Know which parts are unobtainable rather than merely expensive. Availability sets the real repair cost.",
        ],
      },
    ],
  },
  {
    key: "before-you-pay",
    kicker: "Stage three",
    title: "Before you pay",
    standfirst:
      "The car has passed your own inspection. Everything from here protects the money and the title.",
    icon: <ClipboardCheck className="w-4 h-4" />,
    steps: [
      {
        title: "Commission an independent pre-purchase inspection",
        body:
          "Have the car inspected by someone who works on that model, who is paid by you rather than the seller, and who will put a written report with photographs and a costed defect list in your hands. On a five- or six-figure car the fee is a rounding error against what it finds.",
        points: [
          "Brief the inspector on what you want checked: compression or leak-down, a lift inspection, paint readings, and the model's known failure points.",
          "Ask for the raw photographs as well as the report.",
          "If a seller will not allow an inspection by an inspector of your choosing, that is itself a finding.",
        ],
        link: {
          href: "/services?type=inspection",
          label: "Find an inspection specialist",
          lead: "Directory of inspection specialists by location:",
        },
      },
      {
        title: "Settle the paperwork before the money moves",
        body:
          "Agree in writing what is being sold, by whom, and how the title is released. Any outstanding finance is cleared through the payment, not after it.",
        points: [
          "A lien payoff letter with a per-diem figure, and payment made directly to the lender for that portion.",
          "A bill of sale carrying the chassis number, the date, the odometer reading and both parties' details, signed by the registered owner exactly as the title prints their name.",
          "Payment to an account in the name on the title, through escrow or a bank transfer you have confirmed by telephone on a number you looked up yourself.",
          "No payment to a third-party shipping agent, and no deposit before you or your inspector has seen the car.",
        ],
      },
      {
        title: "Insure and move it as your own car",
        body:
          "Cover has to be bound before the car is driven or loaded, not on arrival. Collector policies are written on an agreed value, which is settled at the outset rather than argued about after a loss.",
        points: [
          "Agreed value, supported by the inspection report, the sale price and photographs taken on the day.",
          "Confirm the transporter's cargo cover limit in writing, and that it covers the car at your figure rather than a default.",
          "Photograph the car at loading and at delivery, including the underside and all four corners.",
          "Enclosed transport for low ground clearance, fresh paint, open bodywork or a value where a stone chip is expensive.",
        ],
      },
    ],
  },
];

/* ————————————————————————————————————————————————
   Model excerpts — a pointer into each model history, never the whole field.
———————————————————————————————————————————————— */
const EXCERPT_MAX = 190;

function excerpt(raw: unknown, max = EXCERPT_MAX): string | null {
  if (typeof raw !== "string") return null;
  const clean = raw.replace(/\s+/g, " ").trim();
  if (!clean) return null;
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = (lastSpace > max * 0.5 ? cut.slice(0, lastSpace) : cut).replace(
    /[\s,;:.–—-]+$/,
    ""
  );
  return `${trimmed}…`;
}

function modelName(m: { make: string; model: string; generation: string | null }): string {
  return [m.make, m.model, m.generation ? `(${m.generation})` : null].filter(Boolean).join(" ");
}

function yearRange(m: { year_start: number | null; year_end: number | null }): string | null {
  if (!m.year_start && !m.year_end) return null;
  if (m.year_start && m.year_end) {
    return m.year_start === m.year_end ? `${m.year_start}` : `${m.year_start}–${m.year_end}`;
  }
  return `${m.year_start ?? m.year_end}`;
}

export default async function BuyingGuidesPage() {
  const models = await getPublishedModelsWithMeta();

  const cards = models.map((m) => ({
    slug: m.slug,
    name: modelName(m),
    years: yearRange(m),
    lookFor: excerpt(m.what_to_look_for),
    fallback: excerpt(m.summary, 150),
  }));

  const hasChecklist = STAGES.some((s) => s.steps.length > 0);

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://fullysorted.com/research/buying-guides#howto",
    name: "How to inspect a collector car before you buy it",
    description:
      "A three-stage pre-purchase checklist for collector cars: what to establish from a desk, what to check at the car, and what to settle before the money moves.",
    totalTime: "P14D",
    step: STAGES.map((stage, i) => ({
      "@type": "HowToSection",
      position: i + 1,
      name: stage.title,
      description: stage.standfirst,
      itemListElement: stage.steps.map((step, j) => ({
        "@type": "HowToStep",
        position: j + 1,
        name: step.title,
        text: step.body,
        url: `https://fullysorted.com/research/buying-guides#${stage.key}`,
        ...(step.points.length
          ? {
              itemListElement: step.points.map((p, k) => ({
                "@type": "HowToDirection",
                position: k + 1,
                text: p,
              })),
            }
          : {}),
      })),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fullysorted.com" },
      { "@type": "ListItem", position: 2, name: "Research", item: "https://fullysorted.com/research" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Buying Guides",
        item: "https://fullysorted.com/research/buying-guides",
      },
    ],
  };

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <ResearchNav active="guides" />
      {hasChecklist && <JsonLd data={howToSchema} />}
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <div className="relative overflow-hidden text-white">
        <div
          className="absolute top-0 left-0 right-0 h-px z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #1E6091 35%, #B08D3F 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 600px at 80% -10%, rgba(30,96,145,0.38) 0%, rgba(14,33,54,0) 60%), linear-gradient(160deg, #10233b 0%, #0b1a2e 55%, #0a1626 100%)",
          }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 text-stone-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Research
          </Link>
          <div className="flex items-center gap-2.5">
            <span className="flex gap-1" aria-hidden="true">
              {["#1E6091", "#1E6091", "#B08D3F"].map((c, i) => (
                <span key={i} className="w-2 h-2 rounded-sm" style={{ background: c }} />
              ))}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-200">
              Pre-purchase checklist
            </span>
          </div>
          <h1 className="font-display font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4">
            What to check before you hand over money
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-stone-200">
            A collector car is bought on its paperwork, its structure and its numbers, in that
            order. The checklist below applies to any car of any age; the model histories then
            cover the faults specific to the one you are looking at.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Stage index */}
        <div className="grid gap-3 sm:grid-cols-3 mb-12">
          {STAGES.map((stage) => (
            <a
              key={stage.key}
              href={`#${stage.key}`}
              className="block rounded-2xl bg-white p-5 transition-colors hover:border-transparent"
              style={{ border: "1px solid #e5e5dc" }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: "#1E6091" }}
              >
                {stage.icon}
                {stage.kicker}
              </span>
              <span className="block font-bold mt-2" style={{ color: "#1a1a18" }}>
                {stage.title}
              </span>
              <span className="block text-sm mt-1 leading-relaxed" style={{ color: "#6b6b5e" }}>
                {stage.standfirst}
              </span>
            </a>
          ))}
        </div>

        {/* The checklist */}
        {STAGES.map((stage) => (
          <section key={stage.key} id={stage.key} className="scroll-mt-8 mb-14 sm:mb-16">
            <div
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pb-3 mb-6"
              style={{ borderBottom: "1px solid #e5e5dc" }}
            >
              <h2
                className="font-display font-semibold tracking-tight text-2xl sm:text-3xl"
                style={{ color: "#1a1a18" }}
              >
                {stage.title}
              </h2>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#9a9a8a" }}
              >
                {stage.kicker}
              </span>
            </div>

            <ol className="space-y-4">
              {stage.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl bg-white p-5 sm:p-6"
                  style={{ border: "1px solid #e5e5dc" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold tabular-nums"
                      style={{ background: "rgba(30,96,145,0.10)", color: "#1E6091" }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-base sm:text-lg" style={{ color: "#1a1a18" }}>
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base mt-2 leading-relaxed" style={{ color: "#3f3f38" }}>
                        {step.body}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {step.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed">
                            <span
                              className="mt-[0.5em] w-1.5 h-1.5 rounded-sm shrink-0"
                              style={{ background: "#B08D3F" }}
                              aria-hidden="true"
                            />
                            <span className="min-w-0" style={{ color: "#6b6b5e" }}>
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {step.link && (
                        <p className="mt-4 text-sm flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span style={{ color: "#9a9a8a" }}>{step.link.lead}</span>
                          <Link
                            href={step.link.href}
                            className="inline-flex items-center gap-1.5 font-semibold hover:underline"
                            style={{ color: "#1E6091" }}
                          >
                            {step.link.label}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}

        {/* Model-specific notes */}
        <section id="by-model" className="scroll-mt-8">
          <div
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pb-3 mb-3"
            style={{ borderBottom: "1px solid #e5e5dc" }}
          >
            <h2
              className="font-display font-semibold tracking-tight text-2xl sm:text-3xl"
              style={{ color: "#1a1a18" }}
            >
              By model
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#9a9a8a" }}>
              Stage two, in detail
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mb-6" style={{ color: "#6b6b5e" }}>
            The general checklist stops where a model&apos;s own weak points begin. Each history
            below carries a full list of what to look for and the problems that model is known
            for, with sources.
          </p>

          {cards.length === 0 ? (
            <div className="rounded-2xl bg-white px-6 py-12 sm:py-14" style={{ border: "1px solid #e5e5dc" }}>
              <BookOpen className="w-7 h-7 mb-4" style={{ color: "#cfcabb" }} />
              <p className="font-bold mb-2" style={{ color: "#1a1a18" }}>
                Model-specific notes are not being shown here right now
              </p>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: "#6b6b5e" }}>
                The checklist above stands on its own and applies to any collector car. Where a
                model history exists, its own list of what to look for lives on that model&apos;s
                page in the research database.
              </p>
              <Link
                href="/research/models"
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 hover:underline"
                style={{ color: "#1E6091" }}
              >
                Open the model database <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2">
              {cards.map((c) => (
                <li key={c.slug} className="rounded-2xl bg-white p-5" style={{ border: "1px solid #e5e5dc" }}>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="font-bold min-w-0 break-words" style={{ color: "#1a1a18" }}>
                      {c.name}
                    </h3>
                    {c.years && (
                      <span className="text-xs tabular-nums" style={{ color: "#9a9a8a" }}>
                        {c.years}
                      </span>
                    )}
                  </div>
                  {c.lookFor ? (
                    <>
                      <p
                        className="text-xs font-bold uppercase tracking-widest mt-3 mb-1.5"
                        style={{ color: "#9a9a8a" }}
                      >
                        What to look for
                      </p>
                      <p className="text-sm leading-relaxed break-words" style={{ color: "#6b6b5e" }}>
                        {c.lookFor}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed mt-3 break-words" style={{ color: "#6b6b5e" }}>
                      {c.fallback ??
                        "Specification, production history and the model's own inspection notes are on the model page."}
                    </p>
                  )}
                  <Link
                    href={`/research/models/${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4 hover:underline"
                    style={{ color: "#1E6091" }}
                  >
                    {c.lookFor ? "Read the rest, and the common problems" : "Read the model history"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Where to go next */}
        <section className="mt-14 sm:mt-16">
          <h2
            className="font-display font-semibold tracking-tight text-2xl pb-3 mb-6"
            style={{ color: "#1a1a18", borderBottom: "1px solid #e5e5dc" }}
          >
            Alongside this
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/research/glossary",
                label: "Glossary",
                icon: <Library className="w-4 h-4" />,
                blurb:
                  "Matching numbers, bonded title, concours, survivor — what the terms in this checklist and in a listing actually mean.",
              },
              {
                href: "/research/models",
                label: "Model histories",
                icon: <BookOpen className="w-4 h-4" />,
                blurb:
                  "Production numbers, specification, market context and the faults specific to each generation, with sources.",
              },
              {
                href: "/research/importing",
                label: "Importing",
                icon: <Ship className="w-4 h-4" />,
                blurb:
                  "The 25-year rule, the agencies involved, and the duty and compliance costs that sit on top of a foreign purchase.",
              },
              {
                href: "/browse",
                label: "Cars for sale",
                icon: <Store className="w-4 h-4" />,
                blurb: "Work the checklist against a car that is actually on the market.",
              },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block h-full rounded-2xl bg-white p-5 transition-shadow hover:shadow-md"
                  style={{ border: "1px solid #e5e5dc" }}
                >
                  <span
                    className="inline-flex items-center gap-2 font-bold"
                    style={{ color: "#1E6091" }}
                  >
                    {l.icon}
                    {l.label}
                  </span>
                  <span className="block text-sm mt-1.5 leading-relaxed" style={{ color: "#6b6b5e" }}>
                    {l.blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-8 leading-relaxed" style={{ color: "#9a9a8a" }}>
            <ScanLine className="w-4 h-4 inline-block mr-1.5 align-[-2px]" aria-hidden="true" />
            This checklist is general guidance for buyers. It is not a substitute for an
            independent pre-purchase inspection of the specific car, or for advice from a
            registration or customs authority.
          </p>
        </section>
      </div>
    </div>
  );
}

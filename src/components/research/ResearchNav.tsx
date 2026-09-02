import Link from "next/link";
import {
  BookOpen,
  BarChart3,
  GitCompare,
  ScanLine,
  Newspaper,
  ClipboardCheck,
  Gavel,
  Ship,
  Library,
} from "lucide-react";
import { VALUE_GUIDE_PUBLIC } from "@/lib/features";

/**
 * One shared sub-navigation for the whole Research area.
 *
 * Research spans genuinely different surfaces — cited model histories, buyer's
 * guides, a comps-driven Value Guide, a VIN decoder, the market-analysis desk,
 * and the three reference pages that explain how the market itself works.
 * Before this band existed they were reachable only from a top-nav dropdown, so
 * landing on any one of them gave no signal that the others existed, and the
 * nav's "Model Encyclopedia" entry actually pointed at the editorial desk
 * rather than the model histories. This band renders on every research surface
 * so the area explains itself wherever you arrive.
 *
 * The list is split into two groups because they answer two different
 * questions. "The car" surfaces are about one vehicle: what it is, what to
 * check, what it's worth. "The market" surfaces are about the transaction:
 * where to buy, what it costs to import, and what the words in the listing
 * actually mean. A divider marks the seam rather than a second row, so the
 * whole band stays one scrollable line on a phone.
 *
 * Pass `active` to mark the current surface.
 */
export type ResearchSection =
  | "models"
  | "guides"
  | "value"
  | "compare"
  | "vin"
  | "market"
  | "marketplaces"
  | "importing"
  | "glossary";

type Item = {
  key: ResearchSection;
  href: string;
  label: string;
  blurb: string;
  group: "car" | "market";
  icon: React.ReactNode;
};

const ITEMS: Item[] = [
  {
    key: "models",
    href: "/research/models",
    label: "Model Histories",
    blurb: "Cited history, specs and production, model by model",
    group: "car",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    key: "guides",
    href: "/research/buying-guides",
    label: "Buying Guides",
    blurb: "What to check before you hand over money",
    group: "car",
    icon: <ClipboardCheck className="w-4 h-4" />,
  },
  {
    key: "compare",
    href: "/research/compare",
    label: "Compare",
    blurb: "Two models head to head",
    group: "car",
    icon: <GitCompare className="w-4 h-4" />,
  },
  ...(VALUE_GUIDE_PUBLIC
    ? [
        {
          key: "value" as const,
          href: "/value-guide",
          label: "Value Guide",
          blurb: "What one is worth: from real sold prices",
          group: "car" as const,
          icon: <BarChart3 className="w-4 h-4" />,
        },
      ]
    : []),
  {
    key: "vin",
    href: "/vin",
    label: "VIN Decoder",
    blurb: "Decode any 1981-or-newer VIN, free",
    group: "car",
    icon: <ScanLine className="w-4 h-4" />,
  },
  {
    key: "market",
    href: "/research",
    label: "Market Analysis",
    blurb: "Segment prices and written analysis",
    group: "market",
    icon: <Newspaper className="w-4 h-4" />,
  },
  {
    key: "marketplaces",
    href: "/research/where-to-buy",
    label: "Where to Buy",
    blurb: "Every auction house and marketplace, and what each one charges",
    group: "market",
    icon: <Gavel className="w-4 h-4" />,
  },
  {
    key: "importing",
    href: "/research/importing",
    label: "Importing",
    blurb: "The 25-year rule, and the four agencies that don't agree on it",
    group: "market",
    icon: <Ship className="w-4 h-4" />,
  },
  {
    key: "glossary",
    href: "/research/glossary",
    label: "Glossary",
    blurb: "What the words in a listing actually mean",
    group: "market",
    icon: <Library className="w-4 h-4" />,
  },
];

export function ResearchNav({ active }: { active: ResearchSection }) {
  // With VALUE_GUIDE_PUBLIC off, `active="value"` refers to an entry that isn't
  // in ITEMS. Falling back to the blurb-less state used to render a nav with no
  // active tab and no description at all, so fall back to a sensible default
  // rather than silently rendering a headless band.
  const current = ITEMS.find((i) => i.key === active) ?? ITEMS[0];

  return (
    <nav
      aria-label="Research sections"
      className="border-b border-border"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#1E6091" }}
          >
            Research
          </span>
          {current && (
            <span className="text-xs" style={{ color: "#9a9a8a" }}>
              {current.blurb}
            </span>
          )}
        </div>
        <p className="mt-1.5 mb-4 text-sm max-w-3xl" style={{ color: "#6b6b5e" }}>
          Know the car before anyone asks you for money: what it is, what it&apos;s
          worth, and what the market is doing.
        </p>

        <ul className="flex gap-1 overflow-x-auto -mx-1 px-1">
          {ITEMS.map((it, i) => {
            const isActive = it.key === active;
            const startsMarketGroup =
              it.group === "market" && ITEMS[i - 1]?.group === "car";
            return (
              <li key={it.key} className="shrink-0 flex items-stretch">
                {startsMarketGroup && (
                  <span
                    aria-hidden="true"
                    className="self-center mx-2 h-5 w-px shrink-0"
                    style={{ background: "#e5e5dc" }}
                  />
                )}
                <Link
                  href={it.href}
                  aria-current={isActive ? "page" : undefined}
                  className="flex items-center gap-2 px-3.5 py-3 text-sm font-semibold transition-colors hover:text-foreground"
                  style={{
                    color: isActive ? "#1E6091" : "#6b6b5e",
                    borderBottom: isActive ? "2px solid #1E6091" : "2px solid transparent",
                  }}
                >
                  <span style={{ color: isActive ? "#1E6091" : "#9a9a8a" }}>{it.icon}</span>
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

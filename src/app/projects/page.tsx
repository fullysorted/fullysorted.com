import Link from "next/link";
import type { Metadata } from "next";
import { getActiveVehicles } from "@/lib/data/listings";
import { isProjectCategory } from "@/lib/listing-categories";
import { ListingCard } from "@/components/listings/ListingCard";
import { ForSaleNav } from "@/components/marketplace/ForSaleNav";
import { tradeHref } from "@/lib/category-slugs";
import { ALL_CATEGORIES } from "@/lib/service-categories";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Project Cars and Barn Finds for Sale",
  description:
    "Collector project cars and barn finds for sale from private owners and dealers, with the shops, parts and paperwork help it takes to finish one.",
  alternates: { canonical: "/projects" },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

// Before the wire goes on a project. Each one points at the place on the site
// that helps with it.
const CHECKS = [
  { t: "Inspect it anyway", d: "A non-runner still has rust, frame damage and missing pieces to find. An inspector finds them before you own them.", href: tradeHref("inspection"), cta: "Find an inspector" },
  { t: "Price the paperwork", d: "A missing or out-of-state title can cost more time than the car. Ask what comes with it.", href: tradeHref("titling"), cta: "Title and registration help" },
  { t: "Plan the move", d: "A car that does not roll needs a winch and a carrier that will take it. That changes the quote.", href: tradeHref("transport"), cta: "Find transport" },
  { t: "Count what is missing", d: "Trim, glass, badges and the tool kit are where a budget goes. Some of them are already on the board.", href: "/parts", cta: "Browse parts" },
];

// The trades that finish a project, roughly in the order it meets them.
const FINISHERS = ["restoration", "bodywork", "mechanical", "upholstery", "storage"] as const;

export default async function ProjectsPage() {
  const all = await getActiveVehicles();
  const projects = all.filter((v) => isProjectCategory(v.category));
  const label = (k: string) => ALL_CATEGORIES.find((c) => c.key === k)?.label ?? k;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <ForSaleNav current="projects" counts={{ cars: all.length, projects: projects.length }} />
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-6 mb-4 max-w-[18ch]" style={{ color: INK }}>
            Unfinished business.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Project cars and barn finds, sold as they sit, for someone with the time, the space and the right shop.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link href="/sell?category=Project" className="inline-block px-6 py-3 rounded-full text-[15px] font-bold text-white" style={{ background: TEAL }}>
              Sell a project
            </Link>
            <Link href="/cars" className="text-[15px] font-semibold underline underline-offset-4 px-2" style={{ color: TEAL }}>
              All cars for sale
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {projects.length > 0 ? (
          <section aria-label="Projects for sale" className="mb-16">
            <p className="text-sm mb-6" style={{ color: MUTED }}>
              {projects.length} {projects.length === 1 ? "project" : "projects"} listed
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((v, i) => (
                <ListingCard key={v.id} vehicle={v} index={i} />
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-16 rounded-2xl bg-white p-8 sm:p-10" style={{ border: `1px solid ${RULE}` }}>
            <p className="font-display text-2xl" style={{ color: INK }}>No projects listed right now.</p>
            <p className="text-base mt-2 max-w-xl leading-relaxed" style={{ color: MUTED }}>
              Have one in the garage? List it as a project and it shows here. Hunting for one? Say so on the Wanted
              board and sellers write to you.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/sell?category=Project" className="inline-block px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>
                Sell a project
              </Link>
              <Link href="/wanted/new" className="inline-block px-5 py-3 rounded-full text-sm font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>
                Post a wanted ad
              </Link>
            </div>
          </section>
        )}

        <section aria-labelledby="before" className="mb-16">
          <h2 id="before" className="font-display text-2xl sm:text-3xl mb-6" style={{ color: INK }}>Before you buy one</h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map((c, i) => (
              <li key={c.t}>
                <Link href={c.href} className="group block h-full rounded-2xl p-5 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
                  <span className="text-xs tabular-nums" style={{ fontFamily: MONO, color: TEAL }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="block font-semibold mt-2" style={{ color: INK }}>{c.t}</span>
                  <span className="block text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>{c.d}</span>
                  <span className="inline-block text-sm font-semibold mt-3 group-hover:underline underline-offset-4" style={{ color: TEAL }}>{c.cta}</span>
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="finish" className="mb-16">
          <h2 id="finish" className="font-display text-2xl sm:text-3xl mb-2" style={{ color: INK }}>The people who finish them</h2>
          <p className="text-sm mb-5" style={{ color: MUTED }}>Rated by the owners who used them.</p>
          <div className="flex flex-wrap gap-2">
            {FINISHERS.map((k) => (
              <Link key={k} href={tradeHref(k)} className="px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-[#F4F6F5] transition-colors" style={{ color: INK, border: `1px solid ${RULE}` }}>
                {label(k)}
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Link href="/research/models" className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
            <span className="block font-display text-xl" style={{ color: INK }}>Know what it should be</span>
            <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
              Cited model histories: what the factory built, what changed year to year, and what goes wrong.
            </span>
            <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>Read the histories</span>
          </Link>
          <Link href="/memorabilia" className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
            <span className="block font-display text-xl" style={{ color: INK }}>Find the paperwork</span>
            <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
              Workshop manuals, owner manuals and sales brochures, listed by members.
            </span>
            <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>Browse memorabilia</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

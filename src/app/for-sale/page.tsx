import Link from "next/link";
import type { Metadata } from "next";
import { getActiveVehicles } from "@/lib/data/listings";
import { getOpenPartsPosts } from "@/lib/parts";
import type { PartsPost } from "@/lib/parts-shared";
import { isProjectCategory } from "@/lib/listing-categories";
import { FOR_SALE_SECTIONS, type ForSaleKey } from "@/lib/for-sale";
import { ListingCard } from "@/components/listings/ListingCard";
import { PartsCard } from "@/components/parts/PartsCard";
import { ForSaleNav } from "@/components/marketplace/ForSaleNav";
import { tradeHref } from "@/lib/category-slugs";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "For Sale: Collector Cars, Parts, Projects, Memorabilia and Art",
  description:
    "Collector cars, parts, project cars, memorabilia and automotive art for sale on Fully Sorted, from private owners, dealers, members and artists.",
  alternates: { canonical: "/for-sale" },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

export default async function ForSalePage() {
  const cars = await getActiveVehicles();
  let posts: PartsPost[] = [];
  try {
    posts = await getOpenPartsPosts();
  } catch (e) {
    console.error("[for-sale] parts read failed:", e);
  }
  const parts = posts.filter((p) => p.kind === "part");
  const memorabilia = posts.filter((p) => p.kind === "memorabilia");
  const artwork = posts.filter((p) => p.kind === "art");
  const projects = cars.filter((v) => isProjectCategory(v.category));
  const counts: Record<ForSaleKey, number> = {
    cars: cars.length,
    parts: parts.length,
    memorabilia: memorabilia.length,
    projects: projects.length,
    artwork: artwork.length,
  };
  const latestBits = posts.slice(0, 4);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <ForSaleNav current="all" counts={counts} />
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-6 mb-4 max-w-[20ch]" style={{ color: INK }}>
            Cars, parts and the things that go with them.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Listed by owners, dealers, members and artists.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <section aria-label="Sections" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {FOR_SALE_SECTIONS.map((s) => (
            <div key={s.key} className="rounded-2xl bg-white p-6 flex flex-col" style={{ border: `1px solid ${RULE}`, borderTop: `3px solid ${INK}` }}>
              <div className="flex items-baseline justify-between gap-4">
                <Link href={s.href} className="font-display text-2xl hover:underline underline-offset-4" style={{ color: INK }}>
                  {s.label}
                </Link>
                <span className="text-xs uppercase tabular-nums" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: MUTED }}>
                  {counts[s.key] > 0 ? `${counts[s.key]} listed` : "None listed yet"}
                </span>
              </div>
              <p className="text-sm mt-2 leading-relaxed flex-1" style={{ color: MUTED }}>{s.blurb}</p>
              <div className="flex flex-wrap items-center gap-4 mt-5">
                <Link href={s.href} className="text-sm font-semibold" style={{ color: TEAL }}>
                  {counts[s.key] > 0 ? `See all ${s.label.toLowerCase()}` : `Go to ${s.label.toLowerCase()}`}
                </Link>
                <Link href={s.sellHref} className="text-sm font-semibold underline underline-offset-4" style={{ color: INK }}>
                  {s.sellLabel}
                </Link>
              </div>
            </div>
          ))}
        </section>

        {cars.length > 0 && (
          <section aria-labelledby="latest-cars" className="mb-16">
            <div className="flex items-baseline justify-between mb-6">
              <h2 id="latest-cars" className="font-display text-2xl sm:text-3xl" style={{ color: INK }}>Latest cars</h2>
              <Link href="/browse" className="text-sm font-semibold" style={{ color: TEAL }}>All cars</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cars.slice(0, 3).map((v, i) => (
                <ListingCard key={v.id} vehicle={v} index={i} />
              ))}
            </div>
          </section>
        )}

        {latestBits.length > 0 && (
          <section aria-labelledby="latest-bits" className="mb-16">
            <div className="flex items-baseline justify-between mb-6">
              <h2 id="latest-bits" className="font-display text-2xl sm:text-3xl" style={{ color: INK }}>Latest parts, memorabilia and artwork</h2>
              <Link href="/parts" className="text-sm font-semibold" style={{ color: TEAL }}>All parts</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestBits.map((p) => (
                <PartsCard key={p.id} p={p} />
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/wanted" className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
            <span className="block font-display text-xl" style={{ color: INK }}>Not here?</span>
            <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
              Post what you are hunting for on the Wanted board. Some posts pay a finder&apos;s fee.
            </span>
            <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>See the Wanted board</span>
          </Link>
          <Link href={tradeHref("inspection")} className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
            <span className="block font-display text-xl" style={{ color: INK }}>Before the wire goes</span>
            <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
              A pre-purchase inspection from someone who knows the model, rated by real owners.
            </span>
            <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>Find an inspector</span>
          </Link>
          <Link href="/pricing" className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
            <span className="block font-display text-xl" style={{ color: INK }}>What selling costs</span>
            <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
              Cars are one fee, paid once. Parts, memorabilia and artwork are a small fee each or a monthly plan, and the first 100 on the board are free.
            </span>
            <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>How fees work</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

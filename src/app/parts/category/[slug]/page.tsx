import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOpenPartsPosts } from "@/lib/parts";
import { PARTS_CATEGORIES, PARTS_KINDS, partsCategoryBySlug, type PartsPost, type PartsCategoryKey } from "@/lib/parts-shared";
import { tradeHref } from "@/lib/category-slugs";
import { PartsBoard } from "@/components/parts/PartsBoard";
import { PartsShelves } from "@/components/parts/PartsShelves";

// Same five-minute cache as the main board. One read serves every shelf.
export const revalidate = 300;

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

const TRADE_LABEL: Record<string, string> = {
  mechanical: "a mechanic",
  bodywork: "a body shop",
  upholstery: "a trimmer",
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PARTS_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = partsCategoryBySlug((await params).slug);
  if (!c) return { title: "Parts and memorabilia" };
  const noun = c.kind === "part" ? "parts" : "memorabilia";
  return {
    title: `Collector Car ${c.label} for Sale`,
    description: `${c.blurb} Collector car ${noun} listed by Fully Sorted members. Free to list, no fee on the sale.`,
    alternates: { canonical: `/parts/category/${c.slug}` },
  };
}

export default async function PartsShelfPage({ params }: Props) {
  const c = partsCategoryBySlug((await params).slug);
  if (!c) notFound();

  let all: PartsPost[] = [];
  let failed = false;
  try {
    all = await getOpenPartsPosts();
  } catch (e) {
    console.error("[parts] shelf read failed:", e);
    failed = true;
  }
  const posts = all.filter((p) => p.category === c.key);
  const counts: Partial<Record<PartsCategoryKey, number>> = {};
  for (const p of all) if (p.category) counts[p.category] = (counts[p.category] ?? 0) + 1;
  const kindLabel = PARTS_KINDS.find((k) => k.key === c.kind)?.label ?? "Parts";

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTED }}>
            <Link href="/parts" className="hover:underline" style={{ color: TEAL }}>Parts and memorabilia</Link>
            <span className="mx-2">/</span>
            <Link href={`/parts?kind=${c.kind}#board`} className="hover:underline" style={{ color: TEAL }}>{kindLabel}</Link>
          </nav>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4" style={{ color: INK }}>
            {c.label}
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>{c.blurb}</p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link href={`/parts/new?shelf=${c.key}`} className="inline-block px-6 py-3 rounded-full text-[15px] font-bold text-white" style={{ background: TEAL }}>
              List one here
            </Link>
            <Link href="/wanted" className="text-[15px] font-semibold underline underline-offset-4 px-2" style={{ color: TEAL }}>
              Looking for one instead?
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid gap-12 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          {failed ? (
            <div className="rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)" }}>
              <p className="font-semibold text-sm" style={{ color: "#9a3f2f" }}>This shelf did not load just now</p>
              <p className="text-sm mt-1" style={{ color: MUTED }}>This is a problem at our end, not an empty shelf. Please refresh in a moment.</p>
            </div>
          ) : (
            <PartsBoard posts={posts} lockCategory={c.key} />
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl p-5" style={{ background: "var(--bg-surface)" }}>
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>Before you buy</p>
            <ul className="mt-3 space-y-3">
              {c.tips.map((t) => (
                <li key={t} className="text-sm leading-relaxed" style={{ color: INK }}>{t}</li>
              ))}
              <li className="text-sm leading-relaxed" style={{ color: INK }}>Pay in a way you can dispute. Fully Sorted is not a party to the sale.</li>
            </ul>
          </div>
          {c.trade && (
            <Link href={tradeHref(c.trade)} className="group block rounded-2xl p-5 bg-white" style={{ border: `1px solid ${RULE}` }}>
              <span className="block font-display text-lg" style={{ color: INK }}>Need it fitted?</span>
              <span className="block text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>
                Find {TRADE_LABEL[c.trade] ?? "a specialist"} who knows the car, rated by real owners.
              </span>
              <span className="inline-block text-sm font-semibold mt-3 group-hover:underline underline-offset-4" style={{ color: TEAL }}>Find a pro</span>
            </Link>
          )}
        </aside>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <PartsShelves counts={counts} only={c.kind} current={c.key} />
      </div>
    </div>
  );
}

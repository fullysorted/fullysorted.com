import Link from "next/link";
import type { Metadata } from "next";
import { getOpenPartsPosts } from "@/lib/parts";
import { PARTS_CATEGORIES, type PartsPost, type PartsCategoryKey } from "@/lib/parts-shared";
import { PartsBoard } from "@/components/parts/PartsBoard";
import { PartsShelves } from "@/components/parts/PartsShelves";
import { tradeHref } from "@/lib/category-slugs";

// One cached read every five minutes, however many people look at the board.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Collector Car Parts and Memorabilia for Sale",
  description:
    "Engine and drivetrain, body and trim, interior, wheels, literature, signs, posters and models for collector cars, listed by Fully Sorted members. Free to list, no fee on the sale.",
  alternates: { canonical: "/parts" },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

const STEPS = [
  { t: "List it with photos", d: "A part, a badge, a brochure, a sign. Photos of the actual item, a price or an open door to offers." },
  { t: "It gets a quick read", d: "Every listing is checked before it goes up. Your email is never shown." },
  { t: "Buyers write to you", d: "Questions and offers come to your inbox through the site. You take it from there." },
  { t: "Mark it sold", d: "Listings stay up for 90 days, or until you close them. No fee on the sale." },
];

export default async function PartsPage() {
  let posts: PartsPost[] = [];
  let failed = false;
  try {
    posts = await getOpenPartsPosts();
  } catch (e) {
    console.error("[parts] board read failed:", e);
    failed = true;
  }

  const counts: Partial<Record<PartsCategoryKey, number>> = {};
  for (const p of posts) if (p.category) counts[p.category] = (counts[p.category] ?? 0) + 1;

  // Top makes on the board, by count. Spelling is whatever most sellers used.
  const makeMap = new Map<string, { label: string; n: number }>();
  for (const p of posts) {
    const k = p.make?.trim().toLowerCase();
    if (!k) continue;
    const cur = makeMap.get(k);
    makeMap.set(k, { label: cur?.label ?? p.make!.trim(), n: (cur?.n ?? 0) + 1 });
  }
  const topMakes = [...makeMap.entries()].sort((a, b) => b[1].n - a[1].n).slice(0, 16);

  const ASIDES = [
    { t: "Cannot find it?", d: "Post what you are hunting for on the Wanted board. Sellers who have it write to you.", href: "/wanted", cta: "Post a wanted ad" },
    { t: "Need it fitted?", d: "Find a mechanic, body shop or trimmer who knows the car, rated by real owners.", href: tradeHref("mechanical"), cta: "Find a pro" },
    { t: "Selling the whole car?", d: "The parts board is for the bits. The car goes on the marketplace.", href: "/sell", cta: "Sell a car" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>Parts and memorabilia</p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[18ch]" style={{ color: INK }}>
            The shelf in the back of the garage.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Spares, take-offs, literature, badges, signs and the odd thing nobody can name. Listed by members, free, with
            no fee on the sale. Ask the seller anything through the site.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link href="/parts/new" className="inline-block px-6 py-3 rounded-full text-[15px] font-bold text-white" style={{ background: TEAL }}>
              List a part
            </Link>
            <Link href="/parts/new?kind=memorabilia" className="inline-block px-6 py-3 rounded-full text-[15px] font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>
              List memorabilia
            </Link>
            <Link href="/wanted" className="text-[15px] font-semibold underline underline-offset-4 px-2" style={{ color: TEAL }}>
              Looking for one instead?
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-8 text-xs uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: MUTED }}>
            {posts.length > 0 && <span>{posts.length} on the board</span>}
            <span>{PARTS_CATEGORIES.length} shelves</span>
            <span>Free to list</span>
            <span>No fee on the sale</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <section aria-labelledby="shelves" className="mb-14">
          <h2 id="shelves" className="font-display text-2xl sm:text-3xl mb-6" style={{ color: INK }}>Browse the shelves</h2>
          <PartsShelves counts={counts} />
        </section>

        {topMakes.length > 0 && (
          <section aria-labelledby="makes" className="mb-14">
            <h2 id="makes" className="font-display text-2xl sm:text-3xl mb-4" style={{ color: INK }}>By make</h2>
            <div className="flex flex-wrap gap-2">
              {topMakes.map(([key, m]) => (
                <Link key={key} href={`/parts?make=${encodeURIComponent(key)}#board`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-[#F4F6F5] transition-colors"
                  style={{ color: INK, border: `1px solid ${RULE}` }}>
                  {m.label}<span className="ml-1.5 tabular-nums opacity-60">{m.n}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <h2 id="board" className="font-display text-2xl sm:text-3xl mb-6 scroll-mt-24" style={{ color: INK }}>Everything on the board</h2>
        {failed ? (
          <div className="rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)" }}>
            <p className="font-semibold text-sm" style={{ color: "#9a3f2f" }}>The board did not load just now</p>
            <p className="text-sm mt-1" style={{ color: MUTED }}>This is a problem at our end, not an empty board. Please refresh in a moment.</p>
          </div>
        ) : (
          <PartsBoard posts={posts} />
        )}

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {ASIDES.map((a) => (
            <Link key={a.t} href={a.href} className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
              <span className="block font-display text-xl" style={{ color: INK }}>{a.t}</span>
              <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>{a.d}</span>
              <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>{a.cta}</span>
            </Link>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl sm:text-3xl mb-6" style={{ color: INK }}>How the board works</h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.t} className="rounded-2xl p-5" style={{ background: "var(--bg-surface)" }}>
                <span className="text-xs tabular-nums" style={{ fontFamily: MONO, color: TEAL }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="block font-semibold mt-2" style={{ color: INK }}>{s.t}</span>
                <span className="block text-sm mt-1 leading-relaxed" style={{ color: MUTED }}>{s.d}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-2xl p-6 sm:p-8" style={{ border: `1px solid ${RULE}` }}>
          <h2 className="font-display text-xl mb-3" style={{ color: INK }}>The small print, kept small</h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: MUTED }}>
            Fully Sorted is the notice board. Every description, fitment claim and word about authenticity is the seller&apos;s,
            not ours, and we are not a party to the sale. Memorabilia in particular attracts reproductions, so ask for the
            back of the sign as well as the front. Pay in a way you can dispute, and see the part before money moves when
            you can. See the <Link href="/terms#parts" className="underline" style={{ color: TEAL }}>Terms</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}

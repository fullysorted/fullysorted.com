import Link from "next/link";
import { getOpenPartsPosts } from "@/lib/parts";
import { categoriesFor, kindHref, type PartsPost, type PartsCategoryKey, type PartsKind } from "@/lib/parts-shared";
import type { ForSaleKey } from "@/lib/for-sale";
import { PartsBoard } from "@/components/parts/PartsBoard";
import { PartsShelves } from "@/components/parts/PartsShelves";
import { ForSaleNav } from "@/components/marketplace/ForSaleNav";
import { tradeHref } from "@/lib/category-slugs";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

type Aside = { t: string; d: string; href: string; cta: string };

// What changes between /parts and /memorabilia. Everything else (the board,
// the shelves, the steps, the small print) is the same page.
const COPY: Record<PartsKind, {
  eyebrow: string;
  h1: string;
  sub: string;
  listHref: string;
  listLabel: string;
  noun: string;
  asides: Aside[];
  smallPrint: string;
}> = {
  part: {
    eyebrow: "Parts",
    h1: "The shelf in the back of the garage.",
    sub: "Spares, take-offs, wheels, trim and the odd thing nobody can name. Listed by members, with no fee on the sale. Ask the seller anything through the site.",
    listHref: "/parts/new",
    listLabel: "List a part",
    noun: "parts",
    asides: [
      { t: "Cannot find it?", d: "Post what you are hunting for on the Wanted board. Sellers who have it write to you.", href: "/wanted/new", cta: "Post a wanted ad" },
      { t: "Need it fitted?", d: "Find a mechanic, body shop or trimmer who knows the car, rated by real owners.", href: tradeHref("mechanical"), cta: "Find a pro" },
      { t: "Building one?", d: "Project cars and barn finds, for whoever needs the whole car to hang the parts on.", href: "/projects", cta: "See projects" },
    ],
    smallPrint: "Fully Sorted is the notice board. Every description and fitment claim is the seller's, not ours, and we are not a party to the sale. Check part numbers against the car before money moves, and pay in a way you can dispute.",
  },
  memorabilia: {
    eyebrow: "Memorabilia",
    h1: "The things that came with the car.",
    sub: "Brochures, manuals, window stickers, signs, models and race gear. Listed by members, with no fee on the sale. Ask the seller anything through the site.",
    listHref: "/parts/new?kind=memorabilia",
    listLabel: "List memorabilia",
    noun: "memorabilia",
    asides: [
      { t: "Cannot find it?", d: "Post the brochure, the sign or the model you are after on the Wanted board.", href: "/wanted/new", cta: "Post a wanted ad" },
      { t: "Know the car behind it?", d: "Cited model histories: what was built, when, and what the brochure left out.", href: "/research/models", cta: "Read the histories" },
      { t: "Want the car itself?", d: "Collector cars for sale from private owners and dealers.", href: "/browse", cta: "See cars for sale" },
    ],
    smallPrint: "Fully Sorted is the notice board. Every word about age and authenticity is the seller's, not ours, and we are not a party to the sale. Memorabilia attracts reproductions, so ask for the back of the sign as well as the front, and pay in a way you can dispute.",
  },
  art: {
    eyebrow: "Artwork",
    h1: "For the wall of the garage.",
    sub: "Original paintings, race posters, prints and photographs of the cars and the races. Listed by members and artists, with no fee on the sale. Ask the seller anything through the site.",
    listHref: "/parts/new?kind=art",
    listLabel: "List artwork",
    noun: "artwork",
    asides: [
      { t: "Cannot find it?", d: "Post the poster, the print or the artist you are after on the Wanted board.", href: "/wanted/new", cta: "Post a wanted ad" },
      { t: "Want your own car on the wall?", d: "Photographers who shoot collector cars properly, rated by the owners who hired them.", href: tradeHref("photography"), cta: "Find a photographer" },
      { t: "Know the car in the picture?", d: "Cited model histories: what was built, when, and how it raced.", href: "/research/models", cta: "Read the histories" },
    ],
    smallPrint: "Fully Sorted is the notice board. Every word about an artist, an edition or a signature is the seller's, not ours, and we are not a party to the sale. Prints get passed off as originals, so ask for the edition, the paper and a photo of the back, and pay in a way you can dispute.",
  },
};

const NAV_KEY: Record<PartsKind, ForSaleKey> = { part: "parts", memorabilia: "memorabilia", art: "artwork" };

const STEPS = [
  { t: "List it with photos", d: "Photos of the actual item, a price or an open door to offers." },
  { t: "It gets a quick read", d: "Every listing is checked before it goes up. Your email is never shown." },
  { t: "Buyers write to you", d: "Questions and offers come to your inbox through the site. You take it from there." },
  { t: "Mark it sold", d: "Listings stay up for 90 days, or until you close them. No fee on the sale." },
];

/** The /parts and /memorabilia pages: one board per kind, linked to the rest of For Sale. */
export async function PartsKindPage({ kind }: { kind: PartsKind }) {
  const c = COPY[kind];
  const base = kindHref(kind);
  let all: PartsPost[] = [];
  let failed = false;
  try {
    all = await getOpenPartsPosts();
  } catch (e) {
    console.error(`[${kind}] board read failed:`, e);
    failed = true;
  }
  const posts = all.filter((p) => p.kind === kind);
  const count = (k: PartsKind) => all.filter((p) => p.kind === k).length;

  const counts: Partial<Record<PartsCategoryKey, number>> = {};
  for (const p of posts) if (p.category) counts[p.category] = (counts[p.category] ?? 0) + 1;

  // Top makes on this board, by count. Spelling is whatever most sellers used.
  const makeMap = new Map<string, { label: string; n: number }>();
  for (const p of posts) {
    const k = p.make?.trim().toLowerCase();
    if (!k) continue;
    const cur = makeMap.get(k);
    makeMap.set(k, { label: cur?.label ?? p.make!.trim(), n: (cur?.n ?? 0) + 1 });
  }
  const topMakes = [...makeMap.entries()].sort((a, b) => b[1].n - a[1].n).slice(0, 16);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ background: "#FFFFFF", borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>{c.eyebrow}</p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[18ch]" style={{ color: INK }}>
            {c.h1}
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>{c.sub}</p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link href={c.listHref} className="inline-block px-6 py-3 rounded-full text-[15px] font-bold text-white" style={{ background: TEAL }}>
              {c.listLabel}
            </Link>
            <Link href="/wanted" className="text-[15px] font-semibold underline underline-offset-4 px-2" style={{ color: TEAL }}>
              Looking for one instead?
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-8 text-xs uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: MUTED }}>
            {posts.length > 0 && <span>{posts.length} listed</span>}
            <span>{categoriesFor(kind).length} shelves</span>
            <span>No fee on the sale</span>
          </div>
          <ForSaleNav
            current={NAV_KEY[kind]}
            counts={{ parts: count("part"), memorabilia: count("memorabilia"), artwork: count("art") }}
            className="mt-8"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <section aria-labelledby="shelves" className="mb-14">
          <h2 id="shelves" className="font-display text-2xl sm:text-3xl mb-6" style={{ color: INK }}>Browse the shelves</h2>
          <PartsShelves counts={counts} only={kind} />
        </section>

        {topMakes.length > 0 && (
          <section aria-labelledby="makes" className="mb-14">
            <h2 id="makes" className="font-display text-2xl sm:text-3xl mb-4" style={{ color: INK }}>By make</h2>
            <div className="flex flex-wrap gap-2">
              {topMakes.map(([key, m]) => (
                <Link key={key} href={`${base}?make=${encodeURIComponent(key)}#board`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white hover:bg-[#F4F6F5] transition-colors"
                  style={{ color: INK, border: `1px solid ${RULE}` }}>
                  {m.label}<span className="ml-1.5 tabular-nums opacity-60">{m.n}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <h2 id="board" className="font-display text-2xl sm:text-3xl mb-6 scroll-mt-24" style={{ color: INK }}>
          All {c.noun}
        </h2>
        {failed ? (
          <div className="rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)" }}>
            <p className="font-semibold text-sm" style={{ color: "#9a3f2f" }}>The board did not load just now</p>
            <p className="text-sm mt-1" style={{ color: MUTED }}>This is a problem at our end, not an empty board. Please refresh in a moment.</p>
          </div>
        ) : (
          <PartsBoard posts={posts} lockKind={kind} />
        )}

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {c.asides.map((a) => (
            <Link key={a.t} href={a.href} className="group block rounded-2xl p-6 bg-white transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
              <span className="block font-display text-xl" style={{ color: INK }}>{a.t}</span>
              <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>{a.d}</span>
              <span className="inline-block text-sm font-semibold mt-4 group-hover:underline underline-offset-4" style={{ color: TEAL }}>{a.cta}</span>
            </Link>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl sm:text-3xl mb-6" style={{ color: INK }}>How it works</h2>
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
            {c.smallPrint} See the <Link href="/terms#parts" className="underline" style={{ color: TEAL }}>Terms</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}

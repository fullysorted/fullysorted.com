import Link from "next/link";
import type { Metadata } from "next";
import { getOpenPartsPosts } from "@/lib/parts";
import type { PartsPost } from "@/lib/parts-shared";
import { PartsBoard } from "@/components/parts/PartsBoard";

// One cached read every five minutes, however many people look at the board.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Collector Car Parts and Memorabilia for Sale",
  description:
    "Parts, spares, literature and memorabilia for collector cars, listed by Fully Sorted members. Free to list, no fees on the sale, and buyers write to the seller through the site.",
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
            <Link href="/wanted" className="inline-block px-6 py-3 rounded-full text-[15px] font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>
              Looking for one instead?
            </Link>
            {posts.length > 0 && (
              <span className="text-sm" style={{ color: MUTED }}>{posts.length} on the board</span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {failed ? (
          <div className="rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)" }}>
            <p className="font-semibold text-sm" style={{ color: "#9a3f2f" }}>The board did not load just now</p>
            <p className="text-sm mt-1" style={{ color: MUTED }}>This is a problem at our end, not an empty board. Please refresh in a moment.</p>
          </div>
        ) : (
          <PartsBoard posts={posts} />
        )}

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

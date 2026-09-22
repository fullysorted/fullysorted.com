import Link from "next/link";
import type { Metadata } from "next";
import { getOpenWantedPosts } from "@/lib/wanted";
import type { WantedPost } from "@/lib/wanted-shared";
import { WantedBoard } from "@/components/wanted/WantedBoard";

// One cached read every five minutes, however many people look at the board.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Wanted: Collector Cars, Parts and Services",
  description:
    "The Fully Sorted wanted board. Collector cars, parts and specialists that members are looking for, some with a finder's fee for whoever turns them up.",
  alternates: { canonical: "/wanted" },
};

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

const STEPS = [
  { t: "Say what you are after", d: "A car, a part or a specialist. Add a finder's fee if you want more people looking." },
  { t: "It gets a quick read", d: "Every post is checked before it goes up. Your email is never shown." },
  { t: "Replies come to your inbox", d: "Anyone who can help writes to you through the site. You take it from there." },
  { t: "Mark it found", d: "Posts stay up for 60 days, or until you close them." },
];

export default async function WantedPage() {
  let posts: WantedPost[] = [];
  let failed = false;
  try {
    posts = await getOpenWantedPosts();
  } catch (e) {
    console.error("[wanted] board read failed:", e);
    failed = true;
  }
  const withFee = posts.filter((p) => p.feeText).length;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div style={{ borderBottom: `1px solid ${RULE}` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>Wanted</p>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-4 max-w-[18ch]" style={{ color: INK }}>
            Looking for something? Say so.
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: MUTED }}>
            Cars, parts and specialists that members are trying to find. Some posts pay a finder&apos;s fee to whoever
            turns the thing up, so it is worth a look if you know where things are.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-7">
            <Link href="/wanted/new" className="inline-block px-6 py-3 rounded-full text-[15px] font-bold text-white" style={{ background: TEAL }}>
              Post a wanted
            </Link>
            {posts.length > 0 && (
              <span className="text-sm" style={{ color: MUTED }}>
                {posts.length} on the board{withFee ? `, ${withFee} with a finder's fee` : ""}
              </span>
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
          <WantedBoard posts={posts} />
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
          <h2 className="font-display text-xl mb-3" style={{ color: INK }}>About finder&apos;s fees</h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: MUTED }}>
            A finder&apos;s fee is offered by the person who posted, and paid by them, directly to whoever earns it. Fully Sorted
            is the notice board: it does not hold, take a share of, or guarantee any fee, and it is not a party to any deal made
            here. Agree the terms in writing before you start looking. Rules on being paid for arranging a vehicle sale differ
            by state, and following them is up to the two of you. See the{" "}
            <Link href="/terms#wanted" className="underline" style={{ color: TEAL }}>Terms</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}

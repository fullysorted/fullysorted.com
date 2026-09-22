import Link from "next/link";
import type { WantedPost } from "@/lib/wanted-shared";
import { WantedCard } from "@/components/wanted/WantedBoard";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

/** The newest few wanted posts. With an empty board it shrinks to one line and an invitation. */
export function WantedStrip({ posts }: { posts: WantedPost[] }) {
  return (
    <section className="py-14 sm:py-20" style={{ background: "var(--bg-primary)", borderTop: "1px solid rgba(18,53,42,0.14)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight" style={{ color: INK }}>Wanted</h2>
            <p className="text-base mt-2 max-w-xl" style={{ color: MUTED }}>
              Cars, parts and specialists that members are trying to find. Some pay a finder&apos;s fee to whoever turns them up.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {posts.length > 0 && (
              <Link href="/wanted" className="text-sm font-bold hover:underline underline-offset-4" style={{ color: TEAL }}>See the board &rarr;</Link>
            )}
            <Link href="/wanted/new" className="px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>Post a wanted</Link>
          </div>
        </div>
        {posts.length > 0 && (
          <ul className="grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((p) => <li key={p.id}><WantedCard p={p} /></li>)}
          </ul>
        )}
      </div>
    </section>
  );
}

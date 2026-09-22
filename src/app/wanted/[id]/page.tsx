import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resolveCurrentUser } from "@/lib/identity";
import { getWantedPost } from "@/lib/wanted";
import { WANTED_KINDS } from "@/lib/wanted-shared";
import { categoryLabel } from "@/lib/service-categories";
import { WantedActions } from "./WantedActions";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ posted?: string }> };

async function load(idRaw: string) {
  const id = Number(idRaw);
  if (!Number.isInteger(id) || id <= 0) return null;
  const viewer = await resolveCurrentUser();
  try {
    return await getWantedPost(id, viewer?.id ?? null);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await load((await params).id);
  if (!post) return { title: "Wanted" };
  return {
    title: `Wanted: ${post.title}`,
    description: post.body.slice(0, 155),
    alternates: { canonical: `/wanted/${post.id}` },
    robots: post.status === "open" ? undefined : { index: false },
  };
}

const day = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "");

export default async function WantedPostPage({ params, searchParams }: Props) {
  const post = await load((await params).id);
  if (!post) notFound();
  const justPosted = (await searchParams).posted === "1";
  const kind = WANTED_KINDS.find((k) => k.key === post.kind)?.singular ?? post.kind;
  const open = post.status === "open";

  const facts: [string, string][] = [];
  if (post.kind === "service" && post.category) facts.push(["Trade", categoryLabel(post.category)]);
  if (post.make) facts.push(["Make", post.make]);
  if (post.location) facts.push(["Where", post.location]);
  if (post.budget) facts.push(["Budget", post.budget]);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/wanted" className="text-sm font-semibold" style={{ color: TEAL }}>&larr; The wanted board</Link>

        {post.mine && post.status === "pending" && (
          <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "var(--bg-surface)", color: INK }}>
            {justPosted ? "Got it. " : ""}This post is waiting for a quick read before it goes up. Only you can see it for now. You will get an email when it is live.
          </div>
        )}
        {post.mine && (post.status === "rejected" || post.status === "removed") && (
          <div className="mt-5 rounded-xl p-4 text-sm" style={{ background: "rgba(176,85,63,0.06)", color: "#9a3f2f" }}>
            This post is not on the board. Only you can see this page.
          </div>
        )}
        {post.status === "found" && (
          <div className="mt-5 rounded-xl p-4 text-sm font-semibold" style={{ background: "var(--bg-surface)", color: INK }}>Found. This one is closed.</div>
        )}

        <p className="text-[11px] uppercase mt-6" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: TEAL }}>{kind} wanted</p>
        <h1 className="font-display tracking-tight text-3xl sm:text-4xl leading-tight mt-2" style={{ color: INK }}>{post.title}</h1>
        <p className="text-sm mt-2" style={{ color: MUTED }}>
          {post.handle ? `@${post.handle}` : "A member"} · posted {day(post.createdAt)}
          {open && post.expiresAt ? ` · on the board until ${day(post.expiresAt)}` : ""}
        </p>

        {post.feeText && (
          <div className="mt-6 rounded-2xl p-5" style={{ background: INK, color: "#fff" }}>
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", opacity: 0.8 }}>Finder&apos;s fee</p>
            <p className="font-display text-2xl mt-1">{post.feeText}</p>
            {post.feeTerms && <p className="text-sm mt-1" style={{ opacity: 0.9 }}>Paid: {post.feeTerms}</p>}
            <p className="text-xs mt-3 leading-relaxed" style={{ opacity: 0.8 }}>
              Offered and paid by the poster, directly to the finder. Fully Sorted does not hold, take a share of, or guarantee it. Agree the terms in writing before you start.
            </p>
          </div>
        )}

        <p className="mt-6 text-base sm:text-lg leading-relaxed whitespace-pre-line" style={{ color: INK }}>{post.body}</p>

        {facts.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 rounded-2xl p-5" style={{ border: `1px solid ${RULE}` }}>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>{k}</dt>
                <dd className="font-medium mt-0.5" style={{ color: INK }}>{v}</dd>
              </div>
            ))}
          </dl>
        )}

        <WantedActions id={post.id} mine={post.mine} open={open} pending={post.status === "pending"} handle={post.handle} replyCount={post.replyCount} />

        {open && !post.mine && (
          <p className="text-xs mt-6 leading-relaxed" style={{ color: MUTED }}>
            Take the usual care. See the car, the part or the work before money moves, and be wary of anyone who wants a deposit to prove they are serious.
          </p>
        )}
      </div>
    </div>
  );
}

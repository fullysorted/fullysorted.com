"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const field =
  "w-full px-4 py-3 bg-white rounded-xl border border-stone-200 text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent";

export function PartsActions({ id, mine, open, pending, handle, replyCount }: {
  id: number; mine: boolean; open: boolean; pending: boolean; handle: string | null; replyCount: number;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [error, setError] = useState<string | null>(null);
  const [mailto, setMailto] = useState<string | null>(null);

  async function close(action: "sold" | "remove") {
    if (action === "remove" && !window.confirm("Take this listing down?")) return;
    setState("sending");
    const res = await fetch(`/api/parts/${id}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action }) });
    setState("idle");
    if (res.ok) router.refresh();
    else setError("That did not save. Please try again.");
  }

  if (mine) {
    if (!open && !pending) return null;
    return (
      <div className="mt-8 rounded-2xl p-5" style={{ background: "var(--bg-surface)" }}>
        <p className="font-semibold" style={{ color: INK }}>Your listing{open ? ` · ${replyCount} ${replyCount === 1 ? "reply" : "replies"} so far` : ""}</p>
        <p className="text-sm mt-1" style={{ color: MUTED }}>Questions and offers arrive in your email. Mark it sold when it goes so people stop asking.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {open && (
            <button onClick={() => close("sold")} disabled={state === "sending"} className="px-5 py-3 rounded-full text-sm font-bold text-white disabled:opacity-60" style={{ background: TEAL }}>
              Sold it
            </button>
          )}
          <button onClick={() => close("remove")} disabled={state === "sending"} className="px-5 py-3 rounded-full text-sm font-semibold disabled:opacity-60" style={{ color: INK, border: `1px solid ${INK}` }}>
            Take it down
          </button>
        </div>
        {error && <p className="text-sm mt-3" style={{ color: "#9a3f2f" }}>{error}</p>}
      </div>
    );
  }

  if (!open) return null;

  if (state === "sent") {
    return (
      <div className="mt-8 rounded-2xl p-6" style={{ background: "var(--bg-surface)" }}>
        <p className="font-semibold" style={{ color: INK }}>Sent.</p>
        <p className="text-sm mt-1" style={{ color: MUTED }}>{handle ? `@${handle}` : "The seller"} has your message and your email, and will write back.</p>
      </div>
    );
  }

  return (
    <form
      className="mt-8 rounded-2xl p-5 sm:p-6 grid gap-3"
      style={{ background: "var(--bg-surface)" }}
      onSubmit={async (e) => {
        e.preventDefault();
        setState("sending");
        setError(null);
        try {
          const res = await fetch(`/api/parts/${id}/reply`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message, website }),
          });
          const d = await res.json().catch(() => ({}));
          if (res.ok && d.success) setState("sent");
          else { setMailto(typeof d.mailto === "string" ? d.mailto : null); setError(d.error || "That did not send."); setState("failed"); }
        } catch { setError("That did not send."); setState("failed"); }
      }}
    >
      <p className="font-display text-xl" style={{ color: INK }}>Ask the seller</p>
      <p className="text-sm -mt-1" style={{ color: MUTED }}>Your message and email go to {handle ? `@${handle}` : "the seller"} only. Nothing is posted publicly.</p>
      <textarea required minLength={10} maxLength={3000} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} aria-label="Your message" placeholder="A question, an offer, or where to send it" className={field} />
      <div className="grid sm:grid-cols-2 gap-3">
        <input required maxLength={120} value={name} onChange={(e) => setName(e.target.value)} aria-label="Your name" placeholder="Your name" autoComplete="name" className={field} />
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Your email" placeholder="Your email" autoComplete="email" className={field} />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} className="absolute -left-[9999px] w-px h-px opacity-0" aria-hidden />
      <button type="submit" disabled={state === "sending"} className="h-12 rounded-full text-[15px] font-bold text-white disabled:opacity-60" style={{ background: TEAL }}>
        {state === "sending" ? "Sending..." : "Send to the seller"}
      </button>
      {error && (
        <p className="text-sm" style={{ color: "#9a3f2f" }}>
          {error}{" "}{mailto && <a href={mailto} className="underline font-semibold">Email it to us instead</a>}
        </p>
      )}
    </form>
  );
}

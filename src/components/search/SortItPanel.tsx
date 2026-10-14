"use client";

/**
 * The answer card for "Sort it". Opens under the search box when a question
 * is asked. Streams progress from /api/sort-it (NDJSON) so the member sees
 * each search as it happens, then shows the answer, its sources, one next
 * step, follow-up questions and the disclaimer.
 *
 * Signed-out visitors get the sign-in prompt instead of a spinner. The gate
 * is enforced on the server too; this is only the friendly version of it.
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { ArrowRight, Loader2, Sparkles, X, Telescope } from "lucide-react";
import { renderMarkdownLite } from "@/lib/markdown-lite";
import {
  SORT_IT_NAME,
  SORT_IT_DISCLAIMER,
  SORT_IT_WIDE_COST,
  POWERED_BY_AI,
  type SortItAnswer,
  type SortItEvent,
} from "@/lib/sort-it-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.12)";

type State =
  | { kind: "idle" }
  | { kind: "working"; steps: string[] }
  | { kind: "done"; answer: SortItAnswer; remaining: number }
  | { kind: "error"; message: string; code?: string };

export function SortItPanel({
  question,
  onClose,
  onAsk,
}: {
  question: string;
  onClose: () => void;
  /** Ask a follow-up: the parent updates the box and re-opens the panel. */
  onAsk: (q: string) => void;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  const [state, setState] = useState<State>({ kind: "idle" });
  // A wide search is the same question with a bigger budget, briefed with the
  // first answer. Keyed per question so a new question starts normal again.
  const [wide, setWide] = useState<{ question: string; prior: SortItAnswer } | null>(null);
  const asked = useRef<string>("");
  const mode = wide && wide.question === question ? "wide" : "normal";

  useEffect(() => {
    const key = `${mode}:${question}`;
    if (!isLoaded || !isSignedIn || !question || asked.current === key) return;
    asked.current = key;
    const ctrl = new AbortController();
    const prior = mode === "wide" ? wide?.prior : undefined;

    (async () => {
      setState({ kind: "working", steps: [] });
      try {
        const res = await fetch("/api/sort-it", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, mode, prior }),
          signal: ctrl.signal,
        });
        if (!res.body || !(res.headers.get("content-type") ?? "").includes("ndjson")) {
          const d = (await res.json().catch(() => null)) as SortItEvent | null;
          setState({
            kind: "error",
            message: d && d.type === "error" ? d.message : res.status === 429 ? "Slow down a little and try again in a minute." : "Something went wrong. Try again.",
            code: d && d.type === "error" ? d.code : undefined,
          });
          return;
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          let nl: number;
          while ((nl = buf.indexOf("\n")) >= 0) {
            const line = buf.slice(0, nl).trim();
            buf = buf.slice(nl + 1);
            if (!line) continue;
            const ev = JSON.parse(line) as SortItEvent;
            if (ev.type === "step") setState((s) => (s.kind === "working" ? { kind: "working", steps: [...s.steps, ev.label].slice(-6) } : s));
            else if (ev.type === "answer") setState({ kind: "done", answer: ev.answer, remaining: ev.remaining });
            else if (ev.type === "error") setState({ kind: "error", message: ev.message, code: ev.code });
          }
        }
      } catch (e) {
        if ((e as Error).name !== "AbortError") setState({ kind: "error", message: "Lost the connection. Try again." });
      }
    })();

    return () => ctrl.abort();
  }, [question, isLoaded, isSignedIn, mode, wide]);

  return (
    <div
      className="mt-3 rounded-2xl p-5 sm:p-6 text-left"
      style={{ background: "#FFFFFF", color: INK, border: `1px solid ${RULE}`, boxShadow: "0 24px 50px -20px rgba(18,53,42,0.4)" }}
      role="region"
      aria-live="polite"
      aria-label={`${SORT_IT_NAME} answer`}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[15px] font-semibold leading-snug min-w-0 break-words">{question}</p>
        <button onClick={onClose} aria-label="Close" className="shrink-0 p-1 -m-1 rounded-full hover:opacity-70">
          <X className="w-4 h-4" style={{ color: MUTED }} />
        </button>
      </div>

      {isLoaded && !isSignedIn && (
        <div className="mt-4">
          <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
            {SORT_IT_NAME} reads our model histories, the directory and the web, then answers with its sources and who to see next. Members get 20 questions a day. Membership is free.
          </p>
          <SignInButton mode="modal">
            <button className="mt-4 h-11 px-6 rounded-full text-[15px] font-bold text-white hover:opacity-90" style={{ background: TEAL }}>
              Sign in to ask
            </button>
          </SignInButton>
        </div>
      )}

      {(!isLoaded || state.kind === "working" || (isSignedIn && state.kind === "idle")) && (
        <ul className="mt-4 space-y-1.5 text-sm" style={{ color: MUTED }}>
          <li className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" style={{ color: TEAL }} /> Working on it. Usually under a minute.
          </li>
          {state.kind === "working" &&
            state.steps.map((s, i) => (
              <li key={i} className="pl-6 truncate">{s}</li>
            ))}
        </ul>
      )}

      {state.kind === "error" && (
        <p className="mt-4 text-sm" style={{ color: state.code === "failed" ? "#B42318" : MUTED }}>
          {state.message}
          {(state.code === "resting" || state.code === "off" || state.code === "limit") && (
            <> <Link href={`/services?q=${encodeURIComponent(question)}`} className="font-semibold underline" style={{ color: TEAL }}>Search the directory</Link></>
          )}
        </p>
      )}

      {state.kind === "done" && (
        <div className="mt-4">
          <div
            className="text-[15px] leading-relaxed [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3"
            dangerouslySetInnerHTML={{ __html: renderMarkdownLite(state.answer.answer) }}
          />

          {state.answer.relaxed.length > 0 && (
            <p className="text-[11px] mb-3" style={{ color: MUTED }}>
              Widened: {state.answer.relaxed.join("; ")}.
            </p>
          )}

          {state.answer.next && (
            <Link
              href={state.answer.next.href}
              className="mt-1 inline-flex items-center gap-2 h-11 px-5 rounded-full text-[15px] font-bold text-white hover:opacity-90"
              style={{ background: TEAL }}
            >
              {state.answer.next.label} <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          {state.answer.found !== "yes" && state.answer.mode === "normal" && state.remaining >= SORT_IT_WIDE_COST && (
            <div className="mt-4 rounded-xl p-4" style={{ background: "rgba(28,140,135,0.06)" }}>
              <p className="text-sm" style={{ color: INK }}>
                {state.answer.found === "no" ? "Not found on the first pass." : "Close, but not exactly it."} A wide search tries other names and codes, nearby years, the whole country and abroad, and specialist dealers, clubs and auction catalogs.
              </p>
              <button
                onClick={() => setWide({ question, prior: state.answer })}
                className="mt-3 inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm font-bold hover:opacity-90"
                style={{ color: TEAL, border: `1.5px solid ${TEAL}`, background: "#FFFFFF" }}
              >
                <Telescope className="w-4 h-4" /> Search wider
              </button>
              <span className="ml-3 text-[10.5px]" style={{ color: MUTED, opacity: 0.8 }}>Uses {SORT_IT_WIDE_COST} of your questions. Up to two minutes.</span>
            </div>
          )}

          {state.answer.found === "no" && state.answer.mode === "wide" && (
            <p className="mt-4 text-sm" style={{ color: MUTED }}>
              The wide search came up empty too. A Wanted post puts it in front of the dealers, shops and owners on Fully Sorted, who often know of cars that are not advertised.
            </p>
          )}

          {state.answer.sources.length > 0 && (
            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: MUTED }}>Sources</p>
              <ol className="mt-1.5 space-y-1 text-sm list-decimal pl-5">
                {state.answer.sources.map((s, i) => (
                  <li key={i} className="break-words">
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="underline underline-offset-2" style={{ color: TEAL }}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {state.answer.followUps.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {state.answer.followUps.map((f) => (
                <button
                  key={f}
                  onClick={() => onAsk(f)}
                  className="px-3 py-1.5 rounded-full text-[13px] font-medium text-left hover:opacity-80"
                  style={{ color: INK, border: `1px solid ${RULE}` }}
                >
                  {f}
                </button>
              ))}
            </div>
          )}

          {/* Fine print: small and quiet, but still legible. Disclaimers that
              cannot be read do not count, so not below 10.5px or 60 percent. */}
          <p className="mt-5 pt-3 text-[10.5px] leading-snug" style={{ color: MUTED, opacity: 0.8, borderTop: `1px solid ${RULE}` }}>
            {SORT_IT_DISCLAIMER}
            {state.answer.searched.length > 0 && <> Checked: {state.answer.searched.join(", ")}.</>}
            {state.answer.confidence === "low" && <> Treat this one as a lead, not a fact.</>}
          </p>
          <p className="mt-1.5 text-[10.5px] flex items-center gap-1" style={{ color: MUTED, opacity: 0.8 }}>
            <Sparkles className="w-3 h-3" style={{ color: TEAL }} /> {POWERED_BY_AI} {state.remaining} questions left today.
          </p>
        </div>
      )}
    </div>
  );
}

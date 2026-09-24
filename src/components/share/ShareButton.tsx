"use client";

/**
 * The Share button. On a phone it opens the system share sheet with the
 * branded card attached as an image; on a desktop it offers the link and the
 * image separately, because there is no sheet to hand them to.
 *
 * `image` is the /api/og URL for this page (see lib/share.ts). The card is
 * fetched lazily on first use, never on page load.
 */
import { useEffect, useRef, useState } from "react";
import { Share2, Link as LinkIcon, ImageDown, Check } from "lucide-react";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";

type Props = {
  title: string;
  /** Absolute page URL. Falls back to window.location.href. */
  url?: string;
  /** Absolute URL of the share card image. */
  image: string;
  /** Short text to travel with the link on the share sheet. */
  text?: string;
  /** Filename for the downloaded card, without extension. */
  filename?: string;
  /** 'pill' is the default; 'quiet' is a small bordered button for tight header rows. */
  variant?: "pill" | "quiet";
  className?: string;
};

async function fetchCard(image: string, filename: string): Promise<File | null> {
  try {
    const res = await fetch(image, { cache: "force-cache" });
    if (!res.ok) return null;
    const blob = await res.blob();
    return new File([blob], `${filename}.png`, { type: "image/png" });
  } catch {
    return null;
  }
}

export function ShareButton({ title, url, image, text, filename = "fully-sorted", variant = "pill", className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<"link" | "image" | null>(null);
  const [canSheet, setCanSheet] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only a real share sheet counts. Desktop Chrome exposes navigator.share
    // too, but hands you a bare dialog with nowhere useful to send a file.
    const coarse = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches;
    setCanSheet(!!(coarse && typeof navigator !== "undefined" && typeof navigator.share === "function"));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const pageUrl = () => url || window.location.href;

  function flash(kind: "link" | "image") {
    setDone(kind);
    setTimeout(() => setDone(null), 1800);
  }

  async function sheet() {
    setBusy(true);
    try {
      const file = await fetchCard(image, filename);
      const withFile = file && navigator.canShare?.({ files: [file] });
      await navigator.share(withFile
        ? { title, text: text ?? title, url: pageUrl(), files: [file] }
        : { title, text: text ?? title, url: pageUrl() });
    } catch {
      // Cancelled, or the sheet refused the file. Either way nothing to say.
    } finally {
      setBusy(false);
    }
  }

  async function copyLink() {
    try { await navigator.clipboard.writeText(pageUrl()); flash("link"); } catch { window.prompt("Copy this link", pageUrl()); }
    setOpen(false);
  }

  async function download() {
    setBusy(true);
    const file = await fetchCard(image, filename);
    setBusy(false);
    if (!file) { window.open(image, "_blank", "noopener"); setOpen(false); return; }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    flash("image");
    setOpen(false);
  }

  const label = done === "link" ? "Link copied" : done === "image" ? "Saved" : busy ? "One moment" : "Share";
  const Icon = done ? Check : Share2;

  const base = variant === "pill"
    ? "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold bg-white transition-colors hover:bg-[#F4F6F5]"
    : "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white transition-colors hover:bg-[#F4F6F5]";

  return (
    <div ref={wrap} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => (canSheet ? sheet() : setOpen((v) => !v))}
        disabled={busy}
        aria-haspopup={canSheet ? undefined : "menu"}
        aria-expanded={canSheet ? undefined : open}
        className={`${base} disabled:opacity-60`}
        style={{ color: INK, border: `1px solid ${RULE}` }}
      >
        <Icon className={variant === "pill" ? "w-4 h-4" : "w-3.5 h-3.5"} style={done ? { color: TEAL } : undefined} />
        {label}
      </button>

      {open && !canSheet && (
        <div
          role="menu"
          className="absolute right-0 z-30 mt-2 w-60 rounded-2xl bg-white p-2 shadow-lg"
          style={{ border: `1px solid ${RULE}` }}
        >
          <button role="menuitem" type="button" onClick={copyLink}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm hover:bg-[#F4F6F5]" style={{ color: INK }}>
            <LinkIcon className="w-4 h-4" style={{ color: TEAL }} />
            <span>Copy link</span>
          </button>
          <button role="menuitem" type="button" onClick={download} disabled={busy}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm hover:bg-[#F4F6F5] disabled:opacity-60" style={{ color: INK }}>
            <ImageDown className="w-4 h-4" style={{ color: TEAL }} />
            <span className="flex flex-col">
              <span>Save the share card</span>
              <span className="text-xs" style={{ color: MUTED }}>A 1200x630 image for Instagram, forums, anywhere</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

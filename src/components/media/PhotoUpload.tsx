'use client';

import { useState } from "react";
import Image from "next/image";
import { Loader2, ImageIcon, Upload } from "lucide-react";

/* ─── Photo uploader ────────────────────────────────────
   Grab the shop's logo or a workshop photo from their website or Instagram,
   save it locally, and upload it here. Required — a listing without a photo
   is a listing nobody clicks. */
/* Big phone photos are shrunk in the browser before they leave it: faster on
   a shop's cell signal, and no image work on our servers. PNGs stay PNG so a
   logo keeps its transparent background. */
const MAX_EDGE = 2000;
async function prepare(file: File): Promise<{ file: File; width: number; height: number } | null> {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type) || typeof createImageBitmap !== "function") return null;
  try {
    const bmp = await createImageBitmap(file);
    const { width, height } = bmp;
    const scale = Math.min(1, MAX_EDGE / Math.max(width, height));
    if (scale === 1 && file.size < 4_000_000) { bmp.close(); return { file, width, height }; }
    const w = Math.round(width * scale), h = Math.round(height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    canvas.getContext("2d")!.drawImage(bmp, 0, 0, w, h);
    bmp.close();
    const type = file.type === "image/png" ? "image/png" : "image/jpeg";
    const blob: Blob | null = await new Promise((r) => canvas.toBlob(r, type, 0.85));
    if (!blob) return { file, width, height };
    const name = file.name.replace(/\.[^.]+$/, "") + (type === "image/png" ? ".png" : ".jpg");
    return { file: new File([blob], name, { type }), width: w, height: h };
  } catch {
    return null;
  }
}

export default function PhotoUpload({
  value, onChange, invalid, hint, label, shape = "square", minWidth, onDimensions,
}: {
  value: string;
  onChange: (url: string) => void;
  invalid?: boolean;
  /** Overrides the help line. The rep and the shop owner are looking at
   *  different screens and need different instructions. */
  hint?: React.ReactNode;
  /** Overrides the button label. */
  label?: string;
  /** Preview frame: a square mark or a wide banner. */
  shape?: "square" | "wide";
  /** Below this width the uploader says the photo may look soft. Not a block. */
  minWidth?: number;
  onDimensions?: (w: number, h: number) => void;
}) {
  const [soft, setSoft] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [link, setLink] = useState("");

  async function send(body: FormData) {
    setError("");
    setUploading(true);
    try {
      body.append("folder", "providers");
      const res = await fetch("/api/upload", { method: "POST", body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Upload failed. Try again.");
      onChange(data.url);
      setLink("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file after an error
    if (!file) return;
    if (/heic|heif/i.test(file.type) || /\.hei[cf]$/i.test(file.name)) {
      // Most iPhones convert on the way out; this one did not, and most
      // browsers cannot show HEIC at all.
      setError("That is an iPhone HEIC file. Choose it again from Photos, or export it as a JPEG first.");
      return;
    }
    const ready = await prepare(file);
    setSoft(Boolean(ready && minWidth && ready.width < minWidth));
    if (ready) onDimensions?.(ready.width, ready.height);
    const fd = new FormData();
    fd.append("file", ready?.file ?? file);
    await send(fd);
  }

  // The rep is looking at the shop's website while they talk to the owner.
  // Right-click → save → find the download → upload is four steps too many on
  // a call, so a pasted image link is fetched server-side instead.
  async function handleLink() {
    const raw = link.trim();
    if (!raw) return;
    const u = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    const fd = new FormData();
    fd.append("url", u);
    await send(fd);
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        {value ? (
          <Image
            src={value}
            alt="Preview"
            width={shape === "wide" ? 128 : 72}
            height={72}
            className={`rounded-lg border border-border bg-white shrink-0 ${shape === "wide" ? "object-cover" : "object-contain"}`}
            style={{ width: shape === "wide" ? 128 : 72, height: 72 }}
            unoptimized
          />
        ) : (
          <div
            className="rounded-lg border-2 border-dashed bg-white flex items-center justify-center shrink-0"
            style={{
              width: shape === "wide" ? 128 : 72,
              height: 72,
              borderColor: invalid ? "#dc2626" : "rgba(0,0,0,0.18)",
            }}
          >
            <ImageIcon className="w-6 h-6" style={{ color: invalid ? "#dc2626" : "#9a9a8a" }} />
          </div>
        )}
        <div className="flex-1">
          <label
            className={`inline-flex items-center gap-1.5 px-3 h-9 text-xs font-semibold rounded-lg border cursor-pointer transition-colors ${
              uploading
                ? "border-border text-text-tertiary bg-gray-50"
                : "border-border text-foreground bg-white hover:bg-gray-50"
            }`}
          >
            {uploading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
            {uploading ? "Uploading…" : value ? "Replace photo" : label || "Upload photo"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic"
              className="hidden"
              disabled={uploading}
              onChange={handleFile}
            />
          </label>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              inputMode="url"
              autoCapitalize="none"
              autoCorrect="off"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleLink(); } }}
              disabled={uploading}
              placeholder="…or paste a link to a photo and we'll fetch it"
              className="flex-1 min-w-0 px-3 h-9 text-xs border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
            <button
              type="button"
              onClick={handleLink}
              disabled={uploading || !link.trim()}
              className="px-3 h-9 text-xs font-semibold rounded-lg border border-border bg-white hover:bg-gray-50 disabled:opacity-50 shrink-0"
            >
              Fetch
            </button>
          </div>
          <p className="text-[11px] text-text-tertiary mt-1.5">
            {hint || (
              <>
                JPEG/PNG/WebP, max 10MB. Right-click their logo on the shop&rsquo;s website and choose
                &ldquo;Copy image address&rdquo;, then paste it above.
              </>
            )}
          </p>
        </div>
      </div>
      {soft && !error && (
        <p className="text-xs text-amber-700 mt-2">
          This one is on the small side and may look soft on a large screen. A bigger original is better if you have it.
        </p>
      )}
      {error && <p className="text-xs text-red-600 font-medium mt-2">{error}</p>}
    </div>
  );
}

'use client';

import { useState } from "react";
import Image from "next/image";
import { Loader2, ImageIcon, Upload } from "lucide-react";

/* ─── Photo uploader ────────────────────────────────────
   Grab the shop's logo or a workshop photo from their website or Instagram,
   save it locally, and upload it here. Required — a listing without a photo
   is a listing nobody clicks. */
export default function PhotoUpload({
  value, onChange, invalid, hint, label,
}: {
  value: string;
  onChange: (url: string) => void;
  invalid?: boolean;
  /** Overrides the help line. The rep and the shop owner are looking at
   *  different screens and need different instructions. */
  hint?: React.ReactNode;
  /** Overrides the button label. */
  label?: string;
}) {
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
      if (!res.ok) throw new Error(data.error || "Upload failed — try again.");
      onChange(data.url);
      setLink("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed — try again.");
    } finally {
      setUploading(false);
    }
  }

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file after an error
    if (!file) return;
    const fd = new FormData();
    fd.append("file", file);
    await send(fd);
  }

  // The rep is looking at the shop's website while they talk to the owner.
  // Right-click → save → find the download → upload is four steps too many on
  // a call, so a pasted image link is fetched server-side instead.
  async function handleLink() {
    const u = link.trim();
    if (!u) return;
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
            alt="Shop photo preview"
            width={72}
            height={72}
            className="w-18 h-18 rounded-lg object-cover border border-border bg-white"
            style={{ width: 72, height: 72 }}
            unoptimized
          />
        ) : (
          <div
            className="rounded-lg border-2 border-dashed bg-white flex items-center justify-center shrink-0"
            style={{
              width: 72,
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
              type="url"
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
      {error && <p className="text-xs text-red-600 font-medium mt-2">{error}</p>}
    </div>
  );
}

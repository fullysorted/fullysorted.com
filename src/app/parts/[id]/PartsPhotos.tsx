"use client";

import { useState } from "react";

const RULE = "rgba(18,53,42,0.14)";

/** One big photo and a strip of the rest. No lightbox: a tap on the big one opens the file itself. */
export function PartsPhotos({ photos, title }: { photos: string[]; title: string }) {
  const [i, setI] = useState(0);
  if (!photos.length) {
    return <div className="w-full aspect-[4/3] rounded-2xl" style={{ background: "#F4F6F5" }} />;
  }
  const main = photos[Math.min(i, photos.length - 1)];
  return (
    <div>
      <a href={main} target="_blank" rel="noopener" className="block rounded-2xl overflow-hidden" style={{ background: "#F4F6F5", border: `1px solid ${RULE}` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={main} alt={title} className="w-full aspect-[4/3] object-contain" />
      </a>
      {photos.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {photos.map((p, n) => (
            <button
              key={p}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Photo ${n + 1} of ${photos.length}`}
              aria-pressed={n === i}
              className="shrink-0 w-20 h-16 rounded-lg overflow-hidden"
              style={{ border: `2px solid ${n === i ? "#1C8C87" : "transparent"}`, background: "#F4F6F5" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

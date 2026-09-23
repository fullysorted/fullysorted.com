'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryPhoto } from '@/lib/gallery';

/* ─── The shop's work, on their profile ──────────────────
   A grid that opens into a full-size view. Client-side because of the
   lightbox; the grid itself renders in the first paint either way, so a
   visitor with no JS still sees every photo, just without the overlay. */
export default function ProviderGallery({
  photos,
  businessName,
}: {
  photos: GalleryPhoto[];
  businessName: string;
}) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? null : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    // The page behind a full-screen overlay must not scroll under it.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  if (photos.length === 0) return null;
  const active = open === null ? null : photos[open];

  return (
    <section className="mb-8">
      <h2
        className="text-xs font-bold uppercase tracking-widest mb-3"
        style={{ color: 'var(--text-tertiary)' }}
      >
        Their work
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <li key={photo.url}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ background: 'var(--bg-surface)' }}
              aria-label={photo.caption || `View photo ${i + 1} of ${photos.length}`}
            >
              <Image
                src={photo.url}
                alt={photo.caption || `${businessName} work photo ${i + 1}`}
                fill
                sizes="(min-width: 640px) 280px, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              {photo.caption && (
                <span
                  className="absolute inset-x-0 bottom-0 px-2.5 py-2 text-[11px] leading-snug text-left text-white"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72), transparent)' }}
                >
                  {photo.caption}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(12,12,12,0.94)' }}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center text-white"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <X className="w-5 h-5" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-6 w-11 h-11 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                aria-label="Next photo"
                className="absolute right-2 sm:right-6 w-11 h-11 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Stop the click on the photo itself from closing the overlay. */}
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full" style={{ height: '72vh' }}>
              <Image
                src={active.url}
                alt={active.caption || `${businessName} work photo`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="text-center text-sm mt-4" style={{ color: 'rgba(245,239,230,0.82)' }}>
              {active.caption ? <span>{active.caption} · </span> : null}
              {open! + 1} of {photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

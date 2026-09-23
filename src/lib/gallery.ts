import { isBlobImageUrl } from '@/lib/images';

/**
 * A provider's work gallery.
 *
 * Stored as a JSONB column on service_providers rather than its own table, on
 * purpose. The profile page already does exactly one query for the provider
 * row; a gallery table would add a join or a second round trip to every
 * profile view, and Neon is billed on compute time. Twelve rows of
 * {url, caption} is a few hundred bytes riding along in a read we already make.
 *
 * The cap is a real limit, not a hint: this renders on a public page, and an
 * unbounded array is an unbounded page.
 */
export const GALLERY_MAX = 12;
export const CAPTION_MAX = 120;

export interface GalleryPhoto {
  url: string;
  caption?: string;
}

/**
 * Trust nothing that arrives from a client.
 *
 * URLs must be ones WE host — same rule as avatarUrl, and for the same reason:
 * next/image throws at render for a host that is not whitelisted in
 * next.config, so one hand-posted URL would 500 the public profile rather than
 * just look wrong. See lib/images.ts.
 *
 * Duplicates are dropped because the uploader lets someone add the same file
 * twice without noticing, and a gallery that shows one photo three times reads
 * as broken.
 */
export function normalizeGallery(value: unknown): GalleryPhoto[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const out: GalleryPhoto[] = [];

  for (const raw of value) {
    if (out.length >= GALLERY_MAX) break;

    // Accept a bare string too: the simplest client sends an array of URLs,
    // and rejecting that shape would be a trap for whoever writes the next one.
    const url = typeof raw === 'string' ? raw.trim() : typeof raw?.url === 'string' ? raw.url.trim() : '';
    if (!isBlobImageUrl(url) || seen.has(url)) continue;
    seen.add(url);

    const captionRaw = typeof raw?.caption === 'string' ? raw.caption.trim() : '';
    const caption = captionRaw.slice(0, CAPTION_MAX);
    out.push(caption ? { url, caption } : { url });
  }

  return out;
}

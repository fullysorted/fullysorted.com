/**
 * A provider photo must be one WE host (Vercel Blob).
 *
 * Stricter than "any https URL" on purpose: next/image throws at render time
 * for hosts that are not whitelisted in next.config, so accepting an arbitrary
 * URL here would let one bad row 500 the public profile page and the whole
 * directory listing it appears on.
 *
 * Every uploader on the site — the /team console, both public apply wizards —
 * posts to /api/upload and gets a Blob URL back, so this costs nothing in
 * practice and closes the hole for anything hand-posted to the API.
 *
 * This started life as a private copy inside /api/team/providers. It is shared
 * now because /api/freelancers accepted `avatarUrl` with no validation at all.
 */
export function isBlobImageUrl(u: unknown): boolean {
  if (typeof u !== 'string' || !u.trim()) return false;
  try {
    const parsed = new URL(u.trim());
    return (
      parsed.protocol === 'https:' &&
      parsed.hostname.endsWith('.public.blob.vercel-storage.com')
    );
  } catch {
    return false;
  }
}

/** The message every caller shows when a photo is missing or not ours. */
export const PHOTO_REQUIRED_MESSAGE =
  'A photo is required — upload one, or paste a link to a picture on your website and we will fetch it.';

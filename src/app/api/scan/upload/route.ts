import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { SCANNER_ENABLED } from '@/lib/features';

/**
 * POST /api/scan/upload  one photo for the scanner, already shrunk to a JPEG
 * by the browser (see ScanBoard). Separate from /api/upload on purpose: that
 * route is open to signed-out sellers and capped at 60 an hour, which a shelf
 * of models passes in ten minutes. This one needs a signed-in member, so its
 * cap can be high without opening the Blob store to strangers.
 */
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_BYTES = 6 * 1024 * 1024;
const EXT: Record<string, string> = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' };

export async function POST(req: NextRequest) {
  if (!SCANNER_ENABLED) return NextResponse.json({ error: 'The scanner is switched off right now.' }, { status: 503 });
  const limited = rateLimit(req, 'scan-upload', 1500, 60 * 60_000);
  if (limited) return limited;
  if (!process.env.BLOB_READ_WRITE_TOKEN) return NextResponse.json({ error: 'Photo uploads are not configured on this deployment.' }, { status: 503 });

  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in to scan.', code: 'signin' }, { status: 401 });

  try {
    const file = (await req.formData()).get('file');
    if (!(file instanceof File)) return NextResponse.json({ error: 'No photo provided.' }, { status: 400 });
    if (!ALLOWED.includes(file.type)) return NextResponse.json({ error: 'That photo is not a JPEG, PNG or WebP.' }, { status: 400 });
    if (file.size === 0 || file.size > MAX_BYTES) return NextResponse.json({ error: 'That photo is too large.' }, { status: 400 });
    // The name is ours, not the phone's: no user text in a public address.
    const name = `scans/${user.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${EXT[file.type]}`;
    const blob = await put(name, file, { access: 'public', contentType: file.type });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    console.error('[scan] upload failed:', e);
    return NextResponse.json({ error: 'That photo did not upload.' }, { status: 500 });
  }
}

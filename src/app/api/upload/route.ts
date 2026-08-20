import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { rateLimit } from '@/lib/rate-limit';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
const MAX_BYTES = 10 * 1024 * 1024;

const EXT_FOR_TYPE: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic',
};

/**
 * Is this address one we must refuse to fetch?
 *
 * The URL path below fetches a caller-supplied address from our own server, so
 * without this it is a server-side request forgery hole: someone pastes
 * http://169.254.169.254/... and we obligingly fetch cloud metadata for them.
 * Anything loopback, private, link-local, CGNAT, or multicast is refused, and
 * anything we cannot parse is refused by default.
 */
function isPrivateAddress(ip: string): boolean {
  if (ip.includes(':')) {
    const v = ip.toLowerCase();
    if (v === '::1' || v === '::') return true;
    if (v.startsWith('fe80') || v.startsWith('fc') || v.startsWith('fd')) return true;
    const mapped = v.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
    if (mapped) return isPrivateAddress(mapped[1]);
    return false;
  }
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return true;
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 169 && b === 254) return true; // link-local, incl. cloud metadata
  if (a === 100 && b >= 64 && b <= 127) return true; // carrier-grade NAT
  if (a >= 224) return true; // multicast and reserved
  return false;
}

async function assertFetchableUrl(raw: string): Promise<URL> {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    throw new Error('That does not look like a web address.');
  }
  if (u.protocol !== 'http:' && u.protocol !== 'https:') {
    throw new Error('Only http and https links can be fetched.');
  }
  const host = u.hostname.toLowerCase();
  if (host === 'localhost' || host.endsWith('.local') || host.endsWith('.internal')) {
    throw new Error('That address is not reachable from here.');
  }
  const { lookup } = await import('node:dns/promises');
  let addrs: { address: string }[];
  try {
    addrs = await lookup(host, { all: true });
  } catch {
    throw new Error('We could not find that website.');
  }
  if (addrs.some((a) => isPrivateAddress(a.address))) {
    throw new Error('That address is not reachable from here.');
  }
  return u;
}

/**
 * Fetch an image the rep pasted a link to.
 *
 * Redirects are followed manually so that each hop is re-validated — a public
 * hostname that 302s to an internal one would otherwise walk straight past the
 * check above.
 */
async function fetchRemoteImage(
  raw: string,
): Promise<{ bytes: Buffer; type: string; name: string }> {
  let target = raw;
  for (let hop = 0; hop < 4; hop++) {
    const u = await assertFetchableUrl(target);
    const res = await fetch(u, {
      redirect: 'manual',
      headers: {
        'User-Agent': 'FullySorted/1.0 (+https://fullysorted.com)',
        Accept: 'image/*',
      },
      signal: AbortSignal.timeout(10_000),
    });

    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get('location');
      if (!loc) throw new Error('That link redirected to nowhere.');
      target = new URL(loc, u).toString();
      continue;
    }
    if (!res.ok) {
      throw new Error(`That link returned an error (${res.status}). Try saving the image and uploading the file.`);
    }

    const type = (res.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
    if (!ALLOWED_TYPES.includes(type)) {
      throw new Error(
        `That link is not a JPEG, PNG, WebP or HEIC image${type ? ` (it returned ${type})` : ''}. Right-click the picture, save it, and upload the file instead.`,
      );
    }

    const declared = Number(res.headers.get('content-length') || 0);
    if (declared > MAX_BYTES) throw new Error('That image is larger than 10MB.');

    const bytes = Buffer.from(await res.arrayBuffer());
    if (bytes.byteLength > MAX_BYTES) throw new Error('That image is larger than 10MB.');
    if (bytes.byteLength === 0) throw new Error('That link returned an empty file.');

    const base =
      (u.pathname.split('/').pop() || 'photo').replace(/[^a-zA-Z0-9._-]/g, '').slice(0, 60) ||
      'photo';
    const name = /\.[a-z0-9]{2,5}$/i.test(base) ? base : `${base}.${EXT_FOR_TYPE[type] || 'jpg'}`;
    return { bytes, type, name };
  }
  throw new Error('That link redirected too many times.');
}

export async function POST(request: NextRequest) {
  // This endpoint is reachable without a session because the public sell form
  // uses it for listing photos. It cannot be locked down without breaking that,
  // so it is rate limited instead — otherwise it is an open door to our Blob
  // store for anyone who finds the URL.
  const limited = rateLimit(request, 'upload', 60, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      // Previously this returned a placeholder URL pointing at /api/upload/placeholder,
      // a route that does not exist. The uploader treated it as success and those
      // dead URLs were written permanently into listings.photos. Fail visibly instead.
      return NextResponse.json(
        { error: 'Photo uploads are not configured on this deployment.' },
        { status: 503 }
      );
    }

    const formData = await request.formData();

    // Optional folder prefix, allowlisted so callers can't write arbitrary paths.
    const folderRaw = formData.get('folder');
    const folder =
      typeof folderRaw === 'string' && ['listings', 'providers'].includes(folderRaw)
        ? folderRaw
        : 'listings';

    // ─── Mode 1: a pasted link ────────────────────────────────────────────
    // A rep onboarding a shop is looking at that shop's website, not at a
    // folder of files. Making them right-click, save, find the download, and
    // upload it is four steps of friction in the middle of a phone call.
    const urlRaw = formData.get('url');
    if (typeof urlRaw === 'string' && urlRaw.trim()) {
      let remote;
      try {
        remote = await fetchRemoteImage(urlRaw);
      } catch (err) {
        return NextResponse.json(
          { error: err instanceof Error ? err.message : 'Could not fetch that link.' },
          { status: 400 },
        );
      }
      const blob = await put(`${folder}/${Date.now()}-${remote.name}`, remote.bytes, {
        access: 'public',
        contentType: remote.type,
      });
      return NextResponse.json({ url: blob.url, pathname: blob.pathname, size: remote.bytes.byteLength });
    }

    // ─── Mode 2: an uploaded file ─────────────────────────────────────────
    const file = formData.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'No file or link provided' }, { status: 400 });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Accepted: JPEG, PNG, WebP, HEIC' },
        { status: 400 }
      );
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      );
    }

    const blob = await put(`${folder}/${Date.now()}-${file.name}`, file, {
      access: 'public',
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      size: file.size,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

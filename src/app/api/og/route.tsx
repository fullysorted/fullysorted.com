import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { loadShareCard, SHARE_TYPES, SITE_URL, type ShareCard, type ShareType } from '@/lib/share';

/**
 * GET /api/og?type=model|provider|listing|wanted|part&id=...
 *
 * The share card. 1200x630, white, one photo, the wordmark. It is both the
 * link preview for the page and the image behind the Share button, so it has
 * to look right at thumbnail size in a chat and at full size on a feed.
 *
 * Design rules, from the hero-pattern decision of 2026-09-23: white, never a
 * dark photo hero; no colorful circles; the type does the work.
 *
 * Cached at the edge for a day. A record that changes (new hero photo, price
 * drop) shows up within a day, which is fine for a picture.
 */
export const runtime = 'nodejs';

const INK = '#12352A';
const TEAL = '#1C8C87';
const MUTED = '#6B7280';
const RULE = 'rgba(18,53,42,0.14)';

const W = 1200;
const H = 630;

type Font = { name: string; data: ArrayBuffer; weight: 400 | 700; style: 'normal' };

let fontsPromise: Promise<Font[]> | null = null;
/** Read the fonts from /public once per instance. If that fails, fetch them from the site; if that fails, Satori's default face. */
function fonts(): Promise<Font[]> {
  if (fontsPromise) return fontsPromise;
  fontsPromise = (async () => {
    const want: { file: string; name: string; weight: 400 | 700 }[] = [
      { file: 'YoungSerif.ttf', name: 'Young Serif', weight: 400 },
      { file: 'Schibsted400.woff', name: 'Schibsted Grotesk', weight: 400 },
      { file: 'Schibsted700.woff', name: 'Schibsted Grotesk', weight: 700 },
    ];
    const out: Font[] = [];
    for (const f of want) {
      try {
        const buf = await readFile(join(process.cwd(), 'public', 'fonts', f.file));
        out.push({ name: f.name, data: buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength), weight: f.weight, style: 'normal' });
        continue;
      } catch { /* fall through to the network copy */ }
      try {
        const res = await fetch(`${SITE_URL}/fonts/${f.file}`, { cache: 'force-cache' });
        if (res.ok) out.push({ name: f.name, data: await res.arrayBuffer(), weight: f.weight, style: 'normal' });
      } catch { /* leave it out */ }
    }
    return out;
  })();
  return fontsPromise;
}

const DISPLAY = "'Young Serif', Georgia, serif";
const BODY = "'Schibsted Grotesk', Helvetica, Arial, sans-serif";
const MONO = 'Menlo, Consolas, monospace';

/** Title size steps down as the title gets longer so it never wraps past three lines. */
function titleSize(t: string, wide: boolean): number {
  const n = t.length;
  if (wide) return n <= 28 ? 96 : n <= 44 ? 78 : n <= 70 ? 62 : 50;
  return n <= 22 ? 72 : n <= 36 ? 58 : n <= 60 ? 46 : 38;
}

function Card({ card, photo }: { card: ShareCard; photo: string | null }) {
  const wide = !photo;
  const textW = wide ? W - 160 : 560;
  return (
    <div style={{ width: W, height: H, display: 'flex', background: '#FFFFFF', fontFamily: BODY, color: INK }}>
      {/* Text column */}
      <div style={{ width: wide ? W : 640, height: H, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 0 56px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: textW }}>
          <div style={{ fontFamily: MONO, fontSize: 20, letterSpacing: 3, textTransform: 'uppercase', color: TEAL }}>{card.kicker}</div>
          <div style={{ fontFamily: DISPLAY, fontSize: titleSize(card.title, wide), lineHeight: 1.05, marginTop: 22, letterSpacing: -1, display: 'block', lineClamp: 3 }}>
            {card.title}
          </div>
          {card.line && (
            <div style={{ fontSize: wide ? 32 : 26, lineHeight: 1.3, marginTop: 22, color: MUTED, display: 'block', lineClamp: 2 }}>{card.line}</div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: textW }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: DISPLAY, fontSize: 34, color: INK, letterSpacing: -0.5 }}>Fully Sorted</div>
            <div style={{ fontFamily: MONO, fontSize: 16, letterSpacing: 2, color: MUTED, marginTop: 6 }}>FULLYSORTED.COM</div>
          </div>
          <div style={{ width: 56, height: 4, background: TEAL, borderRadius: 2, marginBottom: 12 }} />
        </div>
      </div>
      {/* Photo column */}
      {photo ? (
        <div style={{ width: 560, height: H, display: 'flex', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt="" width={560} height={H} style={{ width: 560, height: H, objectFit: 'cover' }} />
          <div style={{ position: 'absolute', left: 0, top: 0, width: 1, height: H, background: RULE }} />
        </div>
      ) : null}
    </div>
  );
}

/** The card for a page we cannot load: the wordmark on white, never an error image in a chat thread. */
function Fallback() {
  return (
    <div style={{ width: W, height: H, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#FFFFFF', fontFamily: BODY }}>
      <div style={{ fontFamily: DISPLAY, fontSize: 84, color: INK, letterSpacing: -2 }}>Fully Sorted</div>
      <div style={{ fontSize: 26, color: MUTED, marginTop: 16 }}>Know it. Fix it. Buy it. Sell it.</div>
      <div style={{ width: 72, height: 4, background: TEAL, borderRadius: 2, marginTop: 40 }} />
    </div>
  );
}

/**
 * Satori fetches <img> sources itself, and a photo that 404s or is slow kills
 * the whole render. Fetch it here with a short timeout and pass a data URL, so
 * a broken photo degrades to the wordmark-only layout instead of a 500.
 */
async function inlinePhoto(url: string | null): Promise<string | null> {
  if (!url) return null;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(4000), cache: 'force-cache' });
    if (!res.ok) return null;
    const type = (res.headers.get('content-type') || '').split(';')[0].trim();
    if (!/^image\/(jpeg|png|webp)$/.test(type)) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.byteLength > 6 * 1024 * 1024) return null;
    return `data:${type};base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') as ShareType | null;
  const id = (searchParams.get('id') || '').trim().slice(0, 200);
  const headers = { 'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' };

  let card: ShareCard | null = null;
  if (type && SHARE_TYPES.includes(type) && id) {
    try { card = await loadShareCard(type, id); } catch (e) { console.error('[og] load failed:', e); }
  }
  const fontList = await fonts();
  const opts = { width: W, height: H, headers, fonts: fontList.length ? fontList : undefined };

  if (!card) {
    return new ImageResponse(<Fallback />, { ...opts, headers: { 'Cache-Control': 'public, max-age=300, s-maxage=3600' } });
  }
  // Satori needs decoded surface area; a data URL keeps the fetch under our control.
  const photo = await inlinePhoto(card.photo);
  return new ImageResponse(<Card card={{ ...card, photo }} photo={photo} />, opts);
}

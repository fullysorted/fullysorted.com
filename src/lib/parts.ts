/**
 * The Parts board: members list a part or a piece of memorabilia for sale,
 * with photos and a price, and buyers write to them through the site.
 *
 * FOUR RULES, do not relax them:
 * 1. Free to list. No listing fee, no take rate, no featured slot. The only
 *    brake is the cap on live listings per member.
 * 2. Fully Sorted is the notice board and nothing else. It is not a party to
 *    any sale, holds no money, and makes no claim about authenticity or
 *    fitment. Every such claim on a listing is the seller's, and the copy
 *    says so.
 * 3. Nothing goes public until an admin approves it, and nobody's email is
 *    ever shown. Replies are relayed to the seller by email.
 * 4. Listing needs a signed-in member with a username, same as the Wanted
 *    board. A photo is required: a part listing without one is a wanted
 *    post wearing a hat.
 *
 * Raw SQL on purpose, like wanted.ts: nothing here is in schema.ts, so a
 * missed migration can only ever break this board, never another table.
 * Tables are created lazily on first use, once per server instance.
 */
import { neon } from '@neondatabase/serverless';
import { isBlobImageUrl } from '@/lib/images';
import {
  PARTS_KINDS, PARTS_CONDITIONS, PARTS_SHIPPING, PARTS_DAYS, PARTS_MAX_LIVE, PARTS_MAX_PHOTOS,
  type PartsKind, type PartsCondition, type PartsShipping, type PartsPost,
} from '@/lib/parts-shared';

export { PARTS_DAYS, PARTS_MAX_LIVE, PARTS_MAX_PHOTOS, type PartsKind, type PartsPost };

function db() {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
}

let ensured: Promise<void> | null = null;
export function ensurePartsTables(): Promise<void> {
  if (ensured) return ensured;
  const sql = db();
  if (!sql) return Promise.resolve();
  ensured = (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS parts_posts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        kind VARCHAR(12) NOT NULL,
        title VARCHAR(140) NOT NULL,
        body TEXT NOT NULL,
        make VARCHAR(60),
        model VARCHAR(80),
        model_slug VARCHAR(120),
        part_number VARCHAR(60),
        condition VARCHAR(12),
        price INTEGER,
        location VARCHAR(120),
        shipping VARCHAR(12),
        photos JSONB NOT NULL DEFAULT '[]'::jsonb,
        status VARCHAR(12) NOT NULL DEFAULT 'pending',
        admin_note TEXT,
        reply_count INTEGER NOT NULL DEFAULT 0,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        approved_at TIMESTAMP,
        expires_at TIMESTAMP,
        closed_at TIMESTAMP
      )
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS parts_replies (
        id SERIAL PRIMARY KEY,
        post_id INTEGER NOT NULL REFERENCES parts_posts(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id),
        name VARCHAR(120) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        relayed BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS parts_posts_status_idx ON parts_posts (status, expires_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS parts_posts_user_idx ON parts_posts (user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS parts_posts_model_idx ON parts_posts (model_slug) WHERE model_slug IS NOT NULL`;
    await sql`CREATE INDEX IF NOT EXISTS parts_replies_post_idx ON parts_replies (post_id)`;
  })().catch((e) => {
    ensured = null; // try again on the next request rather than staying broken
    throw e;
  });
  return ensured;
}

function toPost(r: Record<string, unknown>): PartsPost {
  const iso = (v: unknown) => (v ? new Date(v as string).toISOString() : null);
  const photos = Array.isArray(r.photos) ? (r.photos as unknown[]).filter((p): p is string => typeof p === 'string') : [];
  return {
    id: Number(r.id),
    kind: r.kind as PartsKind,
    title: String(r.title),
    body: String(r.body),
    make: (r.make as string) ?? null,
    model: (r.model as string) ?? null,
    modelSlug: (r.model_slug as string) ?? null,
    partNumber: (r.part_number as string) ?? null,
    condition: (r.condition as PartsCondition) ?? null,
    price: r.price == null ? null : Number(r.price),
    location: (r.location as string) ?? null,
    shipping: (r.shipping as PartsShipping) ?? null,
    photos,
    status: String(r.status),
    handle: (r.handle as string) ?? null,
    replyCount: Number(r.reply_count ?? 0),
    createdAt: iso(r.created_at) as string,
    expiresAt: iso(r.expires_at),
  };
}

/** Everything on the board right now. Throws on a database error: an outage must not look like an empty board. */
export async function getOpenPartsPosts(limit = 300): Promise<PartsPost[]> {
  const sql = db();
  if (!sql) return [];
  await ensurePartsTables();
  const rows = await sql`
    SELECT p.*, u.handle FROM parts_posts p JOIN users u ON u.id = p.user_id
    WHERE p.status = 'open' AND p.expires_at > NOW() AND u.status <> 'suspended'
    ORDER BY p.approved_at DESC LIMIT ${limit}
  `;
  return rows.map(toPost);
}

/** Live listings tied to one model history, newest first. Quiet on failure: a model page must never 500 over this. */
export async function getOpenPartsForModel(modelSlug: string, limit = 6): Promise<PartsPost[]> {
  const sql = db();
  if (!sql) return [];
  try {
    await ensurePartsTables();
    const rows = await sql`
      SELECT p.*, u.handle FROM parts_posts p JOIN users u ON u.id = p.user_id
      WHERE p.model_slug = ${modelSlug} AND p.status = 'open' AND p.expires_at > NOW() AND u.status <> 'suspended'
      ORDER BY p.approved_at DESC LIMIT ${limit}
    `;
    return rows.map(toPost);
  } catch (e) {
    console.error('[parts] model lookup failed:', e);
    return [];
  }
}

/** One listing. Open listings are public; sold ones stay readable; anything else is visible only to its owner. */
export async function getPartsPost(id: number, viewerUserId: number | null): Promise<(PartsPost & { mine: boolean }) | null> {
  const sql = db();
  if (!sql) return null;
  await ensurePartsTables();
  const rows = await sql`
    SELECT p.*, u.handle FROM parts_posts p JOIN users u ON u.id = p.user_id WHERE p.id = ${id} LIMIT 1
  `;
  if (!rows.length) return null;
  const mine = viewerUserId !== null && Number(rows[0].user_id) === viewerUserId;
  const live = rows[0].status === 'open' && new Date(rows[0].expires_at as string) > new Date();
  const sold = rows[0].status === 'sold';
  if (!mine && !live && !sold) return null;
  return { ...toPost(rows[0]), mine };
}

// ─── Input ───────────────────────────────────────────────────────────────────

const clean = (v: unknown, max: number): string | null => {
  const s = String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
  return s || null;
};

// Contact details belong in the relay, not on a public page where scrapers
// and scammers read them.
const CONTACT = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})|(\+?\d[\d\s().-]{8,}\d)|(https?:\/\/|www\.)/i;

export type PartsInput = {
  kind: PartsKind; title: string; body: string; make: string | null; model: string | null; modelSlug: string | null;
  partNumber: string | null; condition: PartsCondition | null; price: number | null; location: string | null;
  shipping: PartsShipping | null; photos: string[];
};

/** Only photos we host, de-duplicated, capped. Same rule as the provider gallery and for the same reason. */
export function normalizePartsPhotos(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const out: string[] = [];
  for (const raw of value) {
    if (out.length >= PARTS_MAX_PHOTOS) break;
    const url = typeof raw === 'string' ? raw.trim() : typeof raw?.url === 'string' ? raw.url.trim() : '';
    if (isBlobImageUrl(url) && !out.includes(url)) out.push(url);
  }
  return out;
}

export function parsePartsInput(
  raw: Record<string, unknown>,
  knownModelSlugs?: Set<string>,
): { ok: true; input: PartsInput } | { ok: false; reason: string } {
  const kind = PARTS_KINDS.find((k) => k.key === raw.kind)?.key;
  if (!kind) return { ok: false, reason: 'Choose what this is: a part or memorabilia.' };
  const title = clean(raw.title, 140);
  const bodyText = String(raw.body ?? '').trim().slice(0, 3000);
  if (!title || title.length < 8) return { ok: false, reason: 'Give it a headline of at least a few words.' };
  if (bodyText.length < 20) return { ok: false, reason: 'Add a sentence or two so a buyer knows what they are looking at.' };
  if (CONTACT.test(title) || CONTACT.test(bodyText)) {
    return { ok: false, reason: 'Leave phone numbers, emails and links out of the listing. Buyers reach you by email, and yours stays private.' };
  }
  const photos = normalizePartsPhotos(raw.photos);
  if (!photos.length) return { ok: false, reason: 'Add at least one photo of the actual item.' };

  let price: number | null = null;
  const priceRaw = String(raw.price ?? '').replace(/[$,\s]/g, '');
  if (priceRaw) {
    const n = Math.round(Number(priceRaw));
    if (!Number.isFinite(n) || n < 1 || n > 5_000_000) return { ok: false, reason: 'Enter a whole-dollar price, or leave it blank for "make an offer".' };
    price = n;
  }

  const condition = PARTS_CONDITIONS.find((c) => c.key === raw.condition)?.key ?? null;
  const shipping = PARTS_SHIPPING.find((s) => s.key === raw.shipping)?.key ?? null;
  const modelSlugRaw = clean(raw.modelSlug, 120)?.toLowerCase() ?? null;
  const modelSlug = modelSlugRaw && (!knownModelSlugs || knownModelSlugs.has(modelSlugRaw)) ? modelSlugRaw : null;

  return {
    ok: true,
    input: {
      kind, title, body: bodyText, photos, price, condition, shipping, modelSlug,
      make: clean(raw.make, 60),
      model: clean(raw.model, 80),
      partNumber: clean(raw.partNumber, 60),
      location: clean(raw.location, 120),
    },
  };
}

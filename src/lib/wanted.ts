/**
 * The Wanted board: people say what they are looking for (a car, a part, a
 * service) and, if they choose, what they will pay whoever finds it.
 *
 * THREE RULES, do not relax them:
 * 1. Fully Sorted is the bulletin board and nothing else. A finder's fee is
 *    offered by the poster and paid by the poster, directly to the finder. The
 *    site never holds, takes or guarantees any of it. No take rate, ever.
 * 2. Nothing goes public until an admin approves it, and nobody's email is
 *    ever shown. Replies are relayed to the poster by email.
 * 3. Posting needs a signed-in member with a username. Public posts that
 *    offer money are the one place an account is the turnstile.
 *
 * Raw SQL on purpose, like identity.ts: nothing here is in schema.ts, so a
 * missed migration can only ever break this board, never another table.
 * Tables are created lazily on first use, once per server instance, so this
 * adds nothing to boot.
 */
import { neon } from '@neondatabase/serverless';
import { isServiceCategory } from '@/lib/service-categories';
import { WANTED_KINDS, WANTED_DAYS, type WantedKind, type WantedPost } from '@/lib/wanted-shared';

export { WANTED_KINDS, WANTED_DAYS, type WantedKind, type WantedPost };

function db() {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
}

let ensured: Promise<void> | null = null;
export function ensureWantedTables(): Promise<void> {
  if (ensured) return ensured;
  const sql = db();
  if (!sql) return Promise.resolve();
  ensured = (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS wanted_posts (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        kind VARCHAR(12) NOT NULL,
        title VARCHAR(140) NOT NULL,
        body TEXT NOT NULL,
        make VARCHAR(60),
        category VARCHAR(40),
        location VARCHAR(120),
        budget VARCHAR(80),
        fee_text VARCHAR(80),
        fee_terms VARCHAR(200),
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
      CREATE TABLE IF NOT EXISTS wanted_replies (
        id SERIAL PRIMARY KEY,
        post_id INTEGER NOT NULL REFERENCES wanted_posts(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id),
        name VARCHAR(120) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        relayed BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS wanted_posts_status_idx ON wanted_posts (status, expires_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS wanted_posts_user_idx ON wanted_posts (user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS wanted_replies_post_idx ON wanted_replies (post_id)`;
  })().catch((e) => {
    ensured = null; // try again on the next request rather than staying broken
    throw e;
  });
  return ensured;
}

function toPost(r: Record<string, unknown>): WantedPost {
  const iso = (v: unknown) => (v ? new Date(v as string).toISOString() : null);
  return {
    id: Number(r.id),
    kind: r.kind as WantedKind,
    title: String(r.title),
    body: String(r.body),
    make: (r.make as string) ?? null,
    category: (r.category as string) ?? null,
    location: (r.location as string) ?? null,
    budget: (r.budget as string) ?? null,
    feeText: (r.fee_text as string) ?? null,
    feeTerms: (r.fee_terms as string) ?? null,
    status: String(r.status),
    handle: (r.handle as string) ?? null,
    replyCount: Number(r.reply_count ?? 0),
    createdAt: iso(r.created_at) as string,
    expiresAt: iso(r.expires_at),
  };
}

/** Everything on the board right now. Throws on a database error: an outage must not look like an empty board. */
export async function getOpenWantedPosts(limit = 200): Promise<WantedPost[]> {
  const sql = db();
  if (!sql) return [];
  await ensureWantedTables();
  const rows = await sql`
    SELECT p.*, u.handle FROM wanted_posts p JOIN users u ON u.id = p.user_id
    WHERE p.status = 'open' AND p.expires_at > NOW() AND u.status <> 'suspended'
    ORDER BY p.approved_at DESC LIMIT ${limit}
  `;
  return rows.map(toPost);
}

/** One post. Open posts are public; anything else is visible only to its owner. */
export async function getWantedPost(id: number, viewerUserId: number | null): Promise<(WantedPost & { mine: boolean }) | null> {
  const sql = db();
  if (!sql) return null;
  await ensureWantedTables();
  const rows = await sql`
    SELECT p.*, u.handle FROM wanted_posts p JOIN users u ON u.id = p.user_id WHERE p.id = ${id} LIMIT 1
  `;
  if (!rows.length) return null;
  const mine = viewerUserId !== null && Number(rows[0].user_id) === viewerUserId;
  const live = rows[0].status === 'open' && new Date(rows[0].expires_at as string) > new Date();
  const found = rows[0].status === 'found';
  if (!mine && !live && !found) return null;
  return { ...toPost(rows[0]), mine };
}

// ─── Usernames ───────────────────────────────────────────────────────────────

const RESERVED = new Set([
  'admin', 'administrator', 'root', 'support', 'help', 'staff', 'team', 'moderator', 'mod', 'official', 'system',
  'fullysorted', 'fully_sorted', 'fully-sorted', 'sorted', 'chris', 'chrispeterson', 'founder', 'owner',
  'wanted', 'stable', 'account', 'services', 'research', 'browse', 'sell', 'shop', 'about', 'api', 'null', 'undefined',
  'me', 'you', 'anonymous', 'everyone', 'nobody',
  'porsche', 'ferrari', 'lamborghini', 'mercedes', 'mercedesbenz', 'bmw', 'jaguar', 'astonmartin', 'maserati',
  'alfaromeo', 'bentley', 'rollsroyce', 'bugatti', 'mclaren', 'lotus', 'ford', 'chevrolet', 'shelby', 'toyota',
  'nissan', 'datsun', 'honda', 'acura', 'mazda', 'volkswagen', 'audi', 'lancia', 'hagerty', 'bringatrailer', 'bat',
  'rmsothebys', 'goodingandcompany', 'bonhams', 'carsandbids', 'hemmings',
]);

/** Returns the cleaned handle, or a plain-English reason it cannot be used. */
export function checkHandle(raw: string): { ok: true; handle: string } | { ok: false; reason: string } {
  const handle = String(raw ?? '').trim().replace(/^@/, '');
  if (handle.length < 3) return { ok: false, reason: 'Usernames need at least 3 characters.' };
  if (handle.length > 24) return { ok: false, reason: 'Usernames can be 24 characters at most.' };
  if (!/^[A-Za-z0-9][A-Za-z0-9_-]*[A-Za-z0-9]$/.test(handle)) {
    return { ok: false, reason: 'Use letters, numbers, dashes and underscores, starting and ending with a letter or number.' };
  }
  if (RESERVED.has(handle.toLowerCase().replace(/[-_]/g, '')) || RESERVED.has(handle.toLowerCase())) {
    return { ok: false, reason: 'That one is reserved. Try another.' };
  }
  return { ok: true, handle };
}

/** Sets the member's username. Uniqueness is case-insensitive and enforced by the index from 2026-09-06. */
export async function setHandle(userId: number, raw: string): Promise<{ ok: true; handle: string } | { ok: false; reason: string }> {
  const checked = checkHandle(raw);
  if (!checked.ok) return checked;
  const sql = db();
  if (!sql) return { ok: false, reason: 'Usernames are unavailable right now.' };
  try {
    const taken = await sql`SELECT 1 FROM users WHERE LOWER(handle) = LOWER(${checked.handle}) AND id <> ${userId} LIMIT 1`;
    if (taken.length) return { ok: false, reason: 'Somebody already has that one.' };
    await sql`UPDATE users SET handle = ${checked.handle}, updated_at = NOW() WHERE id = ${userId}`;
    return { ok: true, handle: checked.handle };
  } catch {
    // Two people racing for the same name: the unique index settles it.
    return { ok: false, reason: 'Somebody already has that one.' };
  }
}

// ─── Input ───────────────────────────────────────────────────────────────────

const clean = (v: unknown, max: number): string | null => {
  const s = String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
  return s || null;
};

// Contact details belong in the relay, not on a public page where scrapers
// and scammers read them.
const CONTACT = /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})|(\+?\d[\d\s().-]{8,}\d)|(https?:\/\/|www\.)/i;

export type WantedInput = {
  kind: WantedKind; title: string; body: string; make: string | null; category: string | null;
  location: string | null; budget: string | null; feeText: string | null; feeTerms: string | null;
};

export function parseWantedInput(raw: Record<string, unknown>): { ok: true; input: WantedInput } | { ok: false; reason: string } {
  const kind = WANTED_KINDS.find((k) => k.key === raw.kind)?.key;
  if (!kind) return { ok: false, reason: 'Choose what you are looking for: a car, a part or a service.' };
  const title = clean(raw.title, 140);
  const bodyText = String(raw.body ?? '').trim().slice(0, 2000);
  if (!title || title.length < 8) return { ok: false, reason: 'Give it a headline of at least a few words.' };
  if (bodyText.length < 20) return { ok: false, reason: 'Add a sentence or two of detail so people know what counts.' };
  if (CONTACT.test(title) || CONTACT.test(bodyText)) {
    return { ok: false, reason: 'Leave phone numbers, emails and links out of the post. Replies reach you by email, and yours stays private.' };
  }
  const category = kind === 'service' && isServiceCategory(raw.category) ? String(raw.category) : null;
  const feeText = clean(raw.feeText, 80);
  return {
    ok: true,
    input: {
      kind, title, body: bodyText,
      make: clean(raw.make, 60),
      category,
      location: clean(raw.location, 120),
      budget: clean(raw.budget, 80),
      feeText,
      feeTerms: feeText ? clean(raw.feeTerms, 200) : null,
    },
  };
}

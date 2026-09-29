/**
 * Newsletter and alert signups: new cars for sale, new shops near you, research.
 *
 * RULES, do not relax them:
 * 1. Double opt-in. A row is 'pending' until the owner of the address clicks
 *    the confirmation link. Nothing goes to a pending address except that one
 *    confirmation (resent at most every 10 minutes).
 * 2. An unauthenticated POST can never change an ACTIVE subscriber's settings
 *    or learn their token. Settings change only through the token link in an
 *    email we sent to that address.
 * 3. Every email to a subscriber carries the unsubscribe link, the postal
 *    address and List-Unsubscribe headers (see sendNewsletterConfirm).
 *
 * Raw SQL on purpose, like wanted.ts: nothing here is in schema.ts, so a
 * missed migration can only break signups, never another table. The table is
 * created lazily on first use, so this adds nothing to boot. One small table,
 * written once per signup, read only by /admin/subscribers: Neon cost is
 * negligible.
 */
import { neon } from '@neondatabase/serverless';
import { randomBytes } from 'crypto';
import { isEmailAddress } from '@/lib/leads';
import {
  isZip,
  NEWSLETTER_MARQUES_MAX,
  NEWSLETTER_RADII,
  NEWSLETTER_SOURCES,
  type NewsletterInterest,
  type NewsletterSource,
} from '@/lib/newsletter-shared';

function db() {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
}

let ensured: Promise<void> | null = null;
export function ensureNewsletterTable(): Promise<void> {
  if (ensured) return ensured;
  const sql = db();
  if (!sql) return Promise.resolve();
  ensured = (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        status VARCHAR(12) NOT NULL DEFAULT 'pending',
        want_cars BOOLEAN NOT NULL DEFAULT TRUE,
        want_shops BOOLEAN NOT NULL DEFAULT TRUE,
        want_research BOOLEAN NOT NULL DEFAULT FALSE,
        zip VARCHAR(5),
        radius_mi INTEGER NOT NULL DEFAULT 100,
        marques TEXT,
        source VARCHAR(20),
        source_path VARCHAR(200),
        token VARCHAR(64) NOT NULL UNIQUE,
        confirm_sent_at TIMESTAMP,
        confirmed_at TIMESTAMP,
        unsubscribed_at TIMESTAMP,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS newsletter_status_idx ON newsletter_subscribers (status, created_at DESC)`;
  })().catch((e) => {
    ensured = null;
    throw e;
  });
  return ensured;
}

export type Subscriber = {
  id: number;
  email: string;
  status: 'pending' | 'active' | 'unsubscribed';
  wantCars: boolean;
  wantShops: boolean;
  wantResearch: boolean;
  zip: string | null;
  radiusMi: number;
  marques: string[];
  token: string;
};

function toSub(r: Record<string, unknown>): Subscriber {
  return {
    id: r.id as number,
    email: r.email as string,
    status: r.status as Subscriber['status'],
    wantCars: !!r.want_cars,
    wantShops: !!r.want_shops,
    wantResearch: !!r.want_research,
    zip: (r.zip as string) || null,
    radiusMi: (r.radius_mi as number) ?? 100,
    marques: r.marques ? String(r.marques).split('|').filter(Boolean) : [],
    token: r.token as string,
  };
}

const newToken = () => randomBytes(24).toString('hex');

// ─── Input cleaning ──────────────────────────────────────────────────────────

export type Prefs = {
  interests?: NewsletterInterest[];
  zip?: string | null;
  radiusMi?: number;
  marques?: string[];
};

export function cleanEmail(v: unknown): string | null {
  if (!isEmailAddress(v)) return null;
  const e = v.trim().toLowerCase();
  return e.length <= 254 ? e : null;
}

export function cleanPrefs(body: Record<string, unknown>): Prefs {
  const out: Prefs = {};
  if (Array.isArray(body.interests)) {
    out.interests = body.interests.filter((i): i is NewsletterInterest =>
      i === 'cars' || i === 'shops' || i === 'research');
  }
  if (body.zip === '' || body.zip === null) out.zip = null;
  else if (isZip(body.zip)) out.zip = (body.zip as string).trim();
  const r = Number(body.radiusMi);
  if ((NEWSLETTER_RADII as readonly number[]).includes(r)) out.radiusMi = r;
  if (Array.isArray(body.marques)) {
    const seen = new Set<string>();
    out.marques = body.marques
      .map((m) => (typeof m === 'string' ? m.replace(/[|<>]/g, '').trim().slice(0, 40) : ''))
      .filter((m) => m && !seen.has(m.toLowerCase()) && seen.add(m.toLowerCase()))
      .slice(0, NEWSLETTER_MARQUES_MAX);
  }
  return out;
}

export function cleanSource(v: unknown): NewsletterSource {
  return (NEWSLETTER_SOURCES as readonly string[]).includes(v as string) ? (v as NewsletterSource) : 'page';
}

// ─── Operations ──────────────────────────────────────────────────────────────

export type SubscribeOutcome =
  /** New or still-pending row; a confirmation should be sent. token lets the form save extras. */
  | { kind: 'pending'; sub: Subscriber; sendConfirm: boolean }
  /** Already confirmed. Nothing changes, nothing is revealed. */
  | { kind: 'active' };

export async function subscribe(
  email: string,
  prefs: Prefs,
  source: NewsletterSource,
  sourcePath: string | null,
): Promise<SubscribeOutcome> {
  const sql = db();
  if (!sql) throw new Error('No database');
  await ensureNewsletterTable();

  const i = prefs.interests && prefs.interests.length ? prefs.interests : (['cars', 'shops'] as NewsletterInterest[]);
  const cars = i.includes('cars');
  const shops = i.includes('shops');
  const research = i.includes('research');
  const zip = prefs.zip ?? null;
  const marques = prefs.marques && prefs.marques.length ? prefs.marques.join('|') : null;
  const path = sourcePath ? sourcePath.slice(0, 200) : null;

  const [existing] = await sql`SELECT * FROM newsletter_subscribers WHERE email = ${email}`;

  if (existing && existing.status === 'active') return { kind: 'active' };

  if (existing) {
    // Pending, or unsubscribed and signing up again: both need a fresh confirm.
    const reopt = existing.status === 'unsubscribed';
    const token = reopt ? newToken() : (existing.token as string);
    const last = existing.confirm_sent_at ? new Date(existing.confirm_sent_at as string).getTime() : 0;
    const sendConfirm = reopt || Date.now() - last > 10 * 60 * 1000;
    const [row] = await sql`
      UPDATE newsletter_subscribers SET
        status = 'pending',
        want_cars = ${cars}, want_shops = ${shops}, want_research = ${research},
        zip = COALESCE(${zip}, zip),
        marques = COALESCE(${marques}, marques),
        token = ${token},
        unsubscribed_at = NULL,
        updated_at = NOW()
      WHERE id = ${existing.id}
      RETURNING *
    `;
    return { kind: 'pending', sub: toSub(row), sendConfirm };
  }

  const [row] = await sql`
    INSERT INTO newsletter_subscribers
      (email, want_cars, want_shops, want_research, zip, marques, source, source_path, token)
    VALUES (${email}, ${cars}, ${shops}, ${research}, ${zip}, ${marques}, ${source}, ${path}, ${newToken()})
    ON CONFLICT (email) DO NOTHING
    RETURNING *
  `;
  if (!row) return { kind: 'active' }; // lost a race with a parallel submit; say nothing more
  return { kind: 'pending', sub: toSub(row), sendConfirm: true };
}

export async function markConfirmSent(id: number) {
  const sql = db();
  if (!sql) return;
  await sql`UPDATE newsletter_subscribers SET confirm_sent_at = NOW() WHERE id = ${id}`;
}

export async function getByToken(token: unknown): Promise<Subscriber | null> {
  if (typeof token !== 'string' || !/^[a-f0-9]{48}$/.test(token)) return null;
  const sql = db();
  if (!sql) return null;
  await ensureNewsletterTable();
  const [row] = await sql`SELECT * FROM newsletter_subscribers WHERE token = ${token}`;
  return row ? toSub(row) : null;
}

export async function confirmByToken(token: unknown): Promise<Subscriber | null> {
  const sub = await getByToken(token);
  if (!sub || sub.status === 'unsubscribed') return sub;
  if (sub.status === 'active') return sub;
  const sql = db()!;
  const [row] = await sql`
    UPDATE newsletter_subscribers SET status = 'active', confirmed_at = NOW(), updated_at = NOW()
    WHERE id = ${sub.id} RETURNING *
  `;
  return toSub(row);
}

export async function unsubscribeByToken(token: unknown): Promise<Subscriber | null> {
  const sub = await getByToken(token);
  if (!sub) return null;
  const sql = db()!;
  const [row] = await sql`
    UPDATE newsletter_subscribers SET status = 'unsubscribed', unsubscribed_at = NOW(), updated_at = NOW()
    WHERE id = ${sub.id} RETURNING *
  `;
  return toSub(row);
}

export async function updatePrefsByToken(token: unknown, prefs: Prefs): Promise<Subscriber | null> {
  const sub = await getByToken(token);
  if (!sub || sub.status === 'unsubscribed') return null;
  const sql = db()!;
  const i = prefs.interests;
  const cars = i ? i.includes('cars') : sub.wantCars;
  const shops = i ? i.includes('shops') : sub.wantShops;
  const research = i ? i.includes('research') : sub.wantResearch;
  if (!cars && !shops && !research) return null; // use unsubscribe for that
  const zip = prefs.zip === undefined ? sub.zip : prefs.zip;
  const radius = prefs.radiusMi ?? sub.radiusMi;
  const marques = prefs.marques === undefined ? sub.marques.join('|') || null : prefs.marques.join('|') || null;
  const [row] = await sql`
    UPDATE newsletter_subscribers SET
      want_cars = ${cars}, want_shops = ${shops}, want_research = ${research},
      zip = ${zip}, radius_mi = ${radius}, marques = ${marques}, updated_at = NOW()
    WHERE id = ${sub.id} RETURNING *
  `;
  return toSub(row);
}

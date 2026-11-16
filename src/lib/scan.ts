/**
 * The scanner: a member photographs an item, the site reads the photos and
 * drafts the listing fields, and the result is kept as a private inventory
 * row until the member lists it through the ordinary /parts/new form.
 *
 * FOUR RULES, do not relax them:
 * 1. A scan is private. Nothing here is ever shown to anyone but its owner,
 *    and nothing is published from here. Listing goes through /api/parts, so
 *    the fees, the caps, the "I own this" tick and the admin read all still
 *    apply. The scanner fills in a form; it does not skip one.
 * 2. The read is a draft, not a claim. It says what is legible in the photos
 *    and names what is still open. The member edits it and the listing is
 *    theirs (Parts board rule 2: Fully Sorted makes no claim of authenticity).
 * 3. No invented prices. Comps are staff-only for now and each one must carry
 *    an address the search tool actually returned (see lib/ai/scan-comps.ts).
 * 4. Spend is capped three ways: per member per day, a higher staff figure,
 *    and a site-wide daily dollar ceiling (env SCAN_DAILY_USD, default 15).
 *
 * Raw SQL on purpose, like parts.ts: nothing here is in schema.ts, so a
 * missed migration can only ever break the scanner, never another table.
 */
import { neon } from '@neondatabase/serverless';
import { isBlobImageUrl } from '@/lib/images';
import { PARTS_KINDS, PARTS_CATEGORIES, PARTS_CONDITIONS, type PartsKind, type PartsCategoryKey, type PartsCondition } from '@/lib/parts-shared';
import { SCAN_MAX_PHOTOS, SCAN_DAILY_LIMIT, SCAN_STAFF_DAILY_LIMIT, type ScanItem, type ScanComp, type ScanConfidence, type ScanUsage } from '@/lib/scan-shared';

function db() {
  if (!process.env.DATABASE_URL) return null;
  return neon(process.env.DATABASE_URL);
}

let ensured: Promise<void> | null = null;
export function ensureScanTables(): Promise<void> {
  if (ensured) return ensured;
  const sql = db();
  if (!sql) return Promise.resolve();
  ensured = (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS scan_items (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id),
        kind VARCHAR(12) NOT NULL,
        category VARCHAR(16),
        title VARCHAR(140) NOT NULL,
        body TEXT NOT NULL DEFAULT '',
        make VARCHAR(60),
        model VARCHAR(80),
        part_number VARCHAR(60),
        condition VARCHAR(12),
        maker VARCHAR(60),
        scale VARCHAR(12),
        reference VARCHAR(60),
        era VARCHAR(40),
        confidence VARCHAR(8) NOT NULL DEFAULT 'low',
        seen JSONB NOT NULL DEFAULT '[]'::jsonb,
        missing JSONB NOT NULL DEFAULT '[]'::jsonb,
        photos JSONB NOT NULL DEFAULT '[]'::jsonb,
        price INTEGER,
        location VARCHAR(120),
        note VARCHAR(200),
        comps JSONB NOT NULL DEFAULT '[]'::jsonb,
        comps_note TEXT,
        comps_at TIMESTAMP,
        usd NUMERIC(8,4) NOT NULL DEFAULT 0,
        status VARCHAR(8) NOT NULL DEFAULT 'draft',
        post_id INTEGER,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS scan_items_user_idx ON scan_items (user_id, id DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS scan_items_created_idx ON scan_items (created_at)`;
    // Spend that must still count after its row is deleted, and reads that
    // failed after the model was paid. One row per paid call.
    await sql`
      CREATE TABLE IF NOT EXISTS scan_spend (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        feature VARCHAR(12) NOT NULL,
        usd NUMERIC(8,4) NOT NULL DEFAULT 0,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS scan_spend_created_idx ON scan_spend (created_at)`;
  })().catch((e) => {
    ensured = null; // try again on the next request rather than staying broken
    throw e;
  });
  return ensured;
}

const strings = (v: unknown, max: number, each: number): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string' && !!x.trim()).slice(0, max).map((x) => x.trim().slice(0, each)) : [];

function toItem(r: Record<string, unknown>): ScanItem {
  const iso = (v: unknown) => (v ? new Date(v as string).toISOString() : null);
  return {
    id: Number(r.id),
    kind: (PARTS_KINDS.find((k) => k.key === r.kind)?.key ?? 'memorabilia') as PartsKind,
    category: PARTS_CATEGORIES.some((c) => c.key === r.category) ? (r.category as PartsCategoryKey) : null,
    title: String(r.title),
    body: String(r.body ?? ''),
    make: (r.make as string) ?? null,
    model: (r.model as string) ?? null,
    partNumber: (r.part_number as string) ?? null,
    condition: PARTS_CONDITIONS.some((c) => c.key === r.condition) ? (r.condition as PartsCondition) : null,
    maker: (r.maker as string) ?? null,
    scale: (r.scale as string) ?? null,
    reference: (r.reference as string) ?? null,
    era: (r.era as string) ?? null,
    confidence: (['high', 'medium', 'low'].includes(String(r.confidence)) ? r.confidence : 'low') as ScanConfidence,
    seen: strings(r.seen, 8, 200),
    missing: strings(r.missing, 6, 200),
    photos: strings(r.photos, SCAN_MAX_PHOTOS, 600),
    price: r.price == null ? null : Number(r.price),
    location: (r.location as string) ?? null,
    note: (r.note as string) ?? null,
    comps: Array.isArray(r.comps) ? (r.comps as ScanComp[]) : [],
    compsNote: (r.comps_note as string) ?? null,
    compsAt: iso(r.comps_at),
    status: r.status === 'listed' ? 'listed' : 'draft',
    postId: r.post_id == null ? null : Number(r.post_id),
    createdAt: iso(r.created_at) as string,
  };
}

// ─── Input ───────────────────────────────────────────────────────────────────

const clean = (v: unknown, max: number): string | null => {
  const s = String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
  return s || null;
};

/** Only photos we host, de-duplicated, capped. */
export function normalizeScanPhotos(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const out: string[] = [];
  for (const raw of value) {
    if (out.length >= SCAN_MAX_PHOTOS) break;
    const url = typeof raw === 'string' ? raw.trim() : '';
    if (isBlobImageUrl(url) && !out.includes(url)) out.push(url);
  }
  return out;
}

/** The fields an owner (or the first read) may set. */
export type ScanFields = {
  kind: PartsKind; category: PartsCategoryKey | null; title: string; body: string;
  make: string | null; model: string | null; partNumber: string | null; condition: PartsCondition | null;
  maker: string | null; scale: string | null; reference: string | null; era: string | null;
  price: number | null; location: string | null; note: string | null;
};

/**
 * Validate a full set of fields. Looser than parsePartsInput on purpose: an
 * inventory row may be half-finished. The listing form applies the real rules
 * when the item is listed.
 */
export function parseScanFields(raw: Record<string, unknown>): { ok: true; fields: ScanFields } | { ok: false; reason: string } {
  const kind = PARTS_KINDS.find((k) => k.key === raw.kind)?.key;
  if (!kind) return { ok: false, reason: 'Choose what this is: a part, memorabilia or artwork.' };
  let category: PartsCategoryKey | null = null;
  if (raw.category) {
    const c = PARTS_CATEGORIES.find((x) => x.key === raw.category);
    if (!c || c.kind !== kind) return { ok: false, reason: 'Pick a shelf that matches what this is.' };
    category = c.key;
  }
  const title = clean(raw.title, 140);
  if (!title) return { ok: false, reason: 'Give it a headline.' };
  let price: number | null = null;
  const priceRaw = String(raw.price ?? '').replace(/[$,\s]/g, '');
  if (priceRaw) {
    const n = Math.round(Number(priceRaw));
    if (!Number.isFinite(n) || n < 1 || n > 5_000_000) return { ok: false, reason: 'Enter a whole-dollar price, or leave it blank.' };
    price = n;
  }
  return {
    ok: true,
    fields: {
      kind, category, title, price,
      body: String(raw.body ?? '').trim().slice(0, 3000),
      make: clean(raw.make, 60),
      model: clean(raw.model, 80),
      partNumber: clean(raw.partNumber, 60),
      condition: PARTS_CONDITIONS.find((c) => c.key === raw.condition)?.key ?? null,
      maker: clean(raw.maker, 60),
      scale: clean(raw.scale, 12),
      reference: clean(raw.reference, 60),
      era: clean(raw.era, 40),
      location: clean(raw.location, 120),
      note: clean(raw.note, 200),
    },
  };
}

// ─── Limits ──────────────────────────────────────────────────────────────────

export function scanDailyLimit(staff: boolean): number {
  return staff ? SCAN_STAFF_DAILY_LIMIT : SCAN_DAILY_LIMIT;
}

/** Scans this member has run in the last 24 hours, and whether the site-wide ceiling is reached. */
export async function scanBudget(userId: number, staff: boolean): Promise<ScanUsage & { resting: boolean }> {
  const sql = db();
  const limit = scanDailyLimit(staff);
  if (!sql) return { used: 0, limit, staff, resting: false };
  await ensureScanTables();
  const [mine, spend] = await Promise.all([
    sql`SELECT COUNT(*)::int AS n FROM scan_spend WHERE user_id = ${userId} AND feature = 'read' AND created_at > NOW() - INTERVAL '24 hours'`,
    sql`SELECT COALESCE(SUM(usd), 0)::float AS usd FROM scan_spend WHERE created_at > date_trunc('day', NOW())`,
  ]);
  const ceiling = Number(process.env.SCAN_DAILY_USD ?? 15);
  return { used: Number(mine[0].n), limit, staff, resting: Number(spend[0].usd) >= ceiling };
}

export async function logScanSpend(userId: number, feature: 'read' | 'comps', usd: number): Promise<void> {
  const sql = db();
  if (!sql) return;
  await sql`INSERT INTO scan_spend (user_id, feature, usd) VALUES (${userId}, ${feature}, ${usd})`;
}

// ─── Rows ────────────────────────────────────────────────────────────────────

export async function createScanItem(userId: number, f: ScanFields, extra: { photos: string[]; confidence: ScanConfidence; seen: string[]; missing: string[]; usd: number }): Promise<ScanItem> {
  const sql = db();
  if (!sql) throw new Error('No database');
  await ensureScanTables();
  const rows = await sql`
    INSERT INTO scan_items (user_id, kind, category, title, body, make, model, part_number, condition, maker, scale, reference, era, price, location, note, confidence, seen, missing, photos, usd)
    VALUES (${userId}, ${f.kind}, ${f.category}, ${f.title}, ${f.body}, ${f.make}, ${f.model}, ${f.partNumber}, ${f.condition}, ${f.maker}, ${f.scale}, ${f.reference}, ${f.era}, ${f.price}, ${f.location}, ${f.note},
            ${extra.confidence}, ${JSON.stringify(extra.seen)}::jsonb, ${JSON.stringify(extra.missing)}::jsonb, ${JSON.stringify(extra.photos)}::jsonb, ${extra.usd})
    RETURNING *
  `;
  return toItem(rows[0]);
}

/** A member's inventory, newest first. `before` is the id to page from. */
export async function listScanItems(userId: number, opts: { before?: number; limit?: number } = {}): Promise<ScanItem[]> {
  const sql = db();
  if (!sql) return [];
  await ensureScanTables();
  const limit = Math.min(Math.max(opts.limit ?? 60, 1), 5000);
  const before = opts.before && opts.before > 0 ? opts.before : 2_147_483_647;
  const rows = await sql`
    SELECT * FROM scan_items WHERE user_id = ${userId} AND id < ${before} ORDER BY id DESC LIMIT ${limit}
  `;
  return rows.map(toItem);
}

export async function countScanItems(userId: number): Promise<number> {
  const sql = db();
  if (!sql) return 0;
  await ensureScanTables();
  const r = await sql`SELECT COUNT(*)::int AS n FROM scan_items WHERE user_id = ${userId}`;
  return Number(r[0].n);
}

export async function getScanItem(id: number, userId: number): Promise<ScanItem | null> {
  const sql = db();
  if (!sql) return null;
  await ensureScanTables();
  const rows = await sql`SELECT * FROM scan_items WHERE id = ${id} AND user_id = ${userId} LIMIT 1`;
  return rows.length ? toItem(rows[0]) : null;
}

export async function updateScanItem(id: number, userId: number, f: ScanFields): Promise<ScanItem | null> {
  const sql = db();
  if (!sql) return null;
  await ensureScanTables();
  const rows = await sql`
    UPDATE scan_items SET kind = ${f.kind}, category = ${f.category}, title = ${f.title}, body = ${f.body}, make = ${f.make}, model = ${f.model},
      part_number = ${f.partNumber}, condition = ${f.condition}, maker = ${f.maker}, scale = ${f.scale}, reference = ${f.reference}, era = ${f.era},
      price = ${f.price}, location = ${f.location}, note = ${f.note}, updated_at = NOW()
    WHERE id = ${id} AND user_id = ${userId} RETURNING *
  `;
  return rows.length ? toItem(rows[0]) : null;
}

export async function deleteScanItem(id: number, userId: number): Promise<boolean> {
  const sql = db();
  if (!sql) return false;
  await ensureScanTables();
  const rows = await sql`DELETE FROM scan_items WHERE id = ${id} AND user_id = ${userId} RETURNING id`;
  return rows.length > 0;
}

export async function saveScanComps(id: number, userId: number, comps: ScanComp[], note: string): Promise<ScanItem | null> {
  const sql = db();
  if (!sql) return null;
  const rows = await sql`
    UPDATE scan_items SET comps = ${JSON.stringify(comps)}::jsonb, comps_note = ${note}, comps_at = NOW(), updated_at = NOW()
    WHERE id = ${id} AND user_id = ${userId} RETURNING *
  `;
  return rows.length ? toItem(rows[0]) : null;
}

/** Called by POST /api/parts once a listing made from a scan is saved. Quiet on failure: the listing is the record that matters. */
export async function markScanListed(scanId: number, userId: number, postId: number): Promise<void> {
  const sql = db();
  if (!sql) return;
  try {
    await ensureScanTables();
    await sql`UPDATE scan_items SET status = 'listed', post_id = ${postId}, updated_at = NOW() WHERE id = ${scanId} AND user_id = ${userId}`;
  } catch (e) {
    console.error('[scan] mark listed failed:', e);
  }
}

// Shared ingestion core for auction/sale results — used by the admin importer
// and the programmatic ingest API. Normalizes loosely-shaped rows, computes a
// stable dedupe key, and bulk-upserts in ONE query via jsonb_to_recordset.

export interface RawResult {
  [k: string]: unknown;
}

interface NormalRow {
  dedupe_key: string;
  source: string;
  source_url: string | null;
  external_id: string | null;
  lot_title: string | null;
  year: number | null;
  make: string;
  model: string;
  trim: string | null;
  vin: string | null;
  sale_price: number | null;
  currency: string;
  sold: boolean;
  auction_date: string | null; // ISO
  auction_house: string | null;
  mileage: number | null;
  transmission: string | null;
  exterior_color: string | null;
  location: string | null;
  thumbnail_url: string | null;
  segment: string | null;
  category: string | null;
  notes: string | null;
}

function pick(r: RawResult, ...keys: string[]): unknown {
  for (const k of keys) {
    if (r[k] != null && r[k] !== '') return r[k];
    // tolerate snake/camel/space variants
    const alt = Object.keys(r).find((rk) => rk.toLowerCase().replace(/[^a-z0-9]/g, '') === k.toLowerCase().replace(/[^a-z0-9]/g, ''));
    if (alt && r[alt] != null && r[alt] !== '') return r[alt];
  }
  return undefined;
}
function str(v: unknown): string | null {
  if (v == null) return null;
  const s = String(v).trim();
  return s ? s.slice(0, 500) : null;
}
function int(v: unknown): number | null {
  if (v == null || v === '') return null;
  const n = parseInt(String(v).replace(/[^0-9.-]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
}
function bool(v: unknown, dflt = true): boolean {
  if (v == null || v === '') return dflt;
  const s = String(v).toLowerCase();
  if (['false', 'no', '0', 'unsold', 'rno', 'not sold'].includes(s)) return false;
  return true;
}
function isoDate(v: unknown): string | null {
  if (v == null || v === '') return null;
  const d = new Date(String(v));
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

export function normalizeRow(r: RawResult, defaultSource: string): NormalRow | null {
  const make = str(pick(r, 'make'));
  const model = str(pick(r, 'model'));
  const year = int(pick(r, 'year'));
  const sale_price = int(pick(r, 'sale_price', 'saleprice', 'price', 'sold_price', 'hammer'));
  // Minimum viable comp: needs make + model and at least a year or a price.
  if (!make || !model || (year == null && sale_price == null)) return null;

  const source = str(pick(r, 'source')) || defaultSource;
  const external_id = str(pick(r, 'external_id', 'externalid', 'lot_id', 'id'));
  const vin = str(pick(r, 'vin'));
  const auction_date = isoDate(pick(r, 'auction_date', 'auctiondate', 'date', 'sale_date'));

  const keyBasis = external_id
    ? `${source}|${external_id}`
    : `${source}|${make}|${model}|${year ?? ''}|${sale_price ?? ''}|${auction_date ?? ''}|${vin ?? ''}`;
  const dedupe_key = keyBasis.toLowerCase().slice(0, 400);

  return {
    dedupe_key,
    source: source.slice(0, 80),
    source_url: str(pick(r, 'source_url', 'sourceurl', 'url', 'link')),
    external_id,
    lot_title: str(pick(r, 'lot_title', 'lottitle', 'title')) || `${year ?? ''} ${make} ${model}`.trim(),
    year,
    make,
    model,
    trim: str(pick(r, 'trim')),
    vin: vin ? vin.slice(0, 32) : null,
    sale_price,
    currency: (str(pick(r, 'currency')) || 'usd').toLowerCase().slice(0, 10),
    sold: bool(pick(r, 'sold'), true),
    auction_date,
    auction_house: str(pick(r, 'auction_house', 'auctionhouse', 'house', 'venue')),
    mileage: int(pick(r, 'mileage', 'miles', 'odometer')),
    transmission: str(pick(r, 'transmission', 'gearbox')),
    exterior_color: str(pick(r, 'exterior_color', 'exteriorcolor', 'color', 'colour')),
    location: str(pick(r, 'location', 'city', 'region')),
    thumbnail_url: str(pick(r, 'thumbnail_url', 'thumbnailurl', 'image', 'photo')),
    segment: str(pick(r, 'segment')),
    category: str(pick(r, 'category')),
    notes: str(pick(r, 'notes')),
  };
}

// Minimal quote-aware CSV parser → array of row objects keyed by header.
export function parseCsv(text: string): RawResult[] {
  const rows: string[][] = [];
  let field = '', row: string[] = [], inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inQ) {
      if (c === '"' && n === '"') { field += '"'; i++; }
      else if (c === '"') inQ = false;
      else field += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (c === '\r') { /* skip */ }
      else field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim());
  return rows.slice(1).filter((r) => r.some((c) => c.trim() !== '')).map((r) => {
    const o: RawResult = {};
    headers.forEach((h, idx) => { o[h] = r[idx] ?? ''; });
    return o;
  });
}

export interface IngestResult { received: number; valid: number; inserted: number; updated: number; skipped: number; }

export async function upsertResults(raw: RawResult[], defaultSource: string): Promise<IngestResult> {
  const norm = raw.map((r) => normalizeRow(r, defaultSource)).filter((r): r is NormalRow => r !== null);
  // De-dupe within the batch itself (last one wins) so ON CONFLICT doesn't fire twice on the same key.
  const byKey = new Map<string, NormalRow>();
  for (const r of norm) byKey.set(r.dedupe_key, r);
  const rows = [...byKey.values()];

  const base: IngestResult = { received: raw.length, valid: rows.length, inserted: 0, updated: 0, skipped: raw.length - norm.length };
  if (rows.length === 0) return base;

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL!);

  const res = await sql`
    INSERT INTO auction_results (
      dedupe_key, source, source_url, external_id, lot_title, year, make, model, trim, vin,
      sale_price, currency, sold, auction_date, auction_house, mileage, transmission,
      exterior_color, location, thumbnail_url, segment, category, notes, updated_at
    )
    SELECT dedupe_key, source, source_url, external_id, lot_title, year, make, model, trim, vin,
      sale_price, currency, sold, auction_date, auction_house, mileage, transmission,
      exterior_color, location, thumbnail_url, segment, category, notes, NOW()
    FROM jsonb_to_recordset(${JSON.stringify(rows)}::jsonb) AS x(
      dedupe_key text, source text, source_url text, external_id text, lot_title text,
      year int, make text, model text, trim text, vin text, sale_price int, currency text,
      sold boolean, auction_date timestamp, auction_house text, mileage int, transmission text,
      exterior_color text, location text, thumbnail_url text, segment text, category text, notes text
    )
    ON CONFLICT (dedupe_key) DO UPDATE SET
      sale_price = EXCLUDED.sale_price, sold = EXCLUDED.sold, source_url = EXCLUDED.source_url,
      auction_date = EXCLUDED.auction_date, auction_house = EXCLUDED.auction_house,
      mileage = EXCLUDED.mileage, transmission = EXCLUDED.transmission,
      exterior_color = EXCLUDED.exterior_color, location = EXCLUDED.location,
      thumbnail_url = EXCLUDED.thumbnail_url, notes = EXCLUDED.notes, updated_at = NOW()
    RETURNING (xmax = 0) AS inserted
  ` as { inserted: boolean }[];

  base.inserted = res.filter((r) => r.inserted).length;
  base.updated = res.length - base.inserted;
  return base;
}

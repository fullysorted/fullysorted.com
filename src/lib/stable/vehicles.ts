/**
 * Reading and writing cars in a member's Stable.
 *
 * Raw SQL with explicit columns, the same discipline as lib/identity.ts and
 * for the same reason: a column declared in schema.ts that the database lacks
 * breaks every Drizzle read of the table. Naming them here keeps a missed
 * migration contained.
 *
 * OWNERSHIP IS CHECKED IN THE QUERY, never in the component. Every read and
 * every write below takes a userId and puts it in the WHERE clause. There is
 * no "fetch then check" path in this file, because that is how somebody ends
 * up seeing another member's garage.
 */

export type Vehicle = {
  id: number;
  userId: number;
  year: number | null;
  make: string | null;
  model: string | null;
  trim: string | null;
  vin: string | null;
  chassis: string | null;
  modelSlug: string | null;
  chassisId: number | null;
  mileage: number | null;
  nickname: string | null;
  story: string | null;
  heroPhoto: string | null;
  photos: string[];
  visibility: string;
  status: string;
  createdAt: string | null;
};

type Row = Record<string, unknown>;

async function db() {
  if (!process.env.DATABASE_URL) return null;
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL);
}

function map(r: Row): Vehicle {
  return {
    id: Number(r.id),
    userId: Number(r.user_id),
    year: r.year == null ? null : Number(r.year),
    make: (r.make as string) ?? null,
    model: (r.model as string) ?? null,
    trim: (r.trim as string) ?? null,
    vin: (r.vin as string) ?? null,
    chassis: (r.chassis as string) ?? null,
    modelSlug: (r.model_slug as string) ?? null,
    chassisId: r.chassis_id == null ? null : Number(r.chassis_id),
    mileage: r.mileage == null ? null : Number(r.mileage),
    nickname: (r.nickname as string) ?? null,
    story: (r.story as string) ?? null,
    heroPhoto: (r.hero_photo as string) ?? null,
    photos: Array.isArray(r.photos) ? (r.photos as string[]) : [],
    visibility: String(r.visibility ?? 'private'),
    status: String(r.status ?? 'owned'),
    createdAt: r.created_at ? String(r.created_at) : null,
  };
}

/** A member's own cars, newest first. */
export async function listVehicles(userId: number): Promise<Vehicle[]> {
  const sql = await db();
  if (!sql) return [];
  try {
    const rows = (await sql`
      SELECT id, user_id, year, make, model, trim, vin, chassis, model_slug,
             chassis_id, mileage, nickname, story, hero_photo, photos,
             visibility, status, created_at
      FROM vehicles WHERE user_id = ${userId}
      ORDER BY created_at DESC LIMIT 200
    `) as Row[];
    return rows.map(map);
  } catch (err) {
    console.error('[stable] listVehicles failed:', err);
    return [];
  }
}

/** One car, but only if it belongs to this member. */
export async function getVehicle(userId: number, id: number): Promise<Vehicle | null> {
  const sql = await db();
  if (!sql) return null;
  try {
    const rows = (await sql`
      SELECT id, user_id, year, make, model, trim, vin, chassis, model_slug,
             chassis_id, mileage, nickname, story, hero_photo, photos,
             visibility, status, created_at
      FROM vehicles WHERE id = ${id} AND user_id = ${userId} LIMIT 1
    `) as Row[];
    return rows[0] ? map(rows[0]) : null;
  } catch (err) {
    console.error('[stable] getVehicle failed:', err);
    return null;
  }
}

/**
 * Add a car.
 *
 * Everything except the owner is optional. A member who knows only "it's a
 * 240Z" must be able to save it and fill the rest in later; a form that
 * insists on a VIN loses the older owner who cannot find one, which is a
 * standing rule here.
 *
 * The chassis register link is looked up but never asserted as ownership. A
 * match means "we have published history for this chassis", nothing more.
 */
export async function createVehicle(input: {
  userId: number;
  year?: number | null;
  make?: string | null;
  model?: string | null;
  trim?: string | null;
  vin?: string | null;
  chassis?: string | null;
  modelSlug?: string | null;
  nickname?: string | null;
  mileage?: number | null;
}): Promise<Vehicle | null> {
  const sql = await db();
  if (!sql) return null;

  const cap = (v: unknown, n: number) =>
    v == null ? null : String(v).trim().slice(0, n) || null;

  const vin = cap(input.vin, 32)?.toUpperCase() ?? null;
  const chassis = cap(input.chassis, 64) ?? null;

  // Does the register already know this car? Purely additive: a failure here
  // costs the history panel, never the save.
  let chassisId: number | null = null;
  if (vin || chassis) {
    try {
      const hit = (await sql`
        SELECT id FROM registry_chassis
        WHERE status = 'published'
          AND (
            (${vin}::text IS NOT NULL AND UPPER(vin) = ${vin})
            OR (${chassis}::text IS NOT NULL AND UPPER(chassis) = UPPER(${chassis}))
          )
        LIMIT 1
      `) as Row[];
      if (hit[0]) chassisId = Number(hit[0].id);
    } catch (err) {
      console.error('[stable] register lookup failed:', err);
    }
  }

  try {
    const rows = (await sql`
      INSERT INTO vehicles
        (user_id, year, make, model, trim, vin, chassis, model_slug, chassis_id,
         nickname, mileage, visibility, status)
      VALUES
        (${input.userId}, ${input.year ?? null}, ${cap(input.make, 100)},
         ${cap(input.model, 200)}, ${cap(input.trim, 200)}, ${vin}, ${chassis},
         ${cap(input.modelSlug, 300)}, ${chassisId},
         ${cap(input.nickname, 120)}, ${input.mileage ?? null},
         'private', 'owned')
      RETURNING id, user_id, year, make, model, trim, vin, chassis, model_slug,
                chassis_id, mileage, nickname, story, hero_photo, photos,
                visibility, status, created_at
    `) as Row[];
    return rows[0] ? map(rows[0]) : null;
  } catch (err) {
    console.error('[stable] createVehicle failed:', err);
    return null;
  }
}

/** Remove a car, but only the member's own. */
export async function deleteVehicle(userId: number, id: number): Promise<boolean> {
  const sql = await db();
  if (!sql) return false;
  try {
    const rows = (await sql`
      DELETE FROM vehicles WHERE id = ${id} AND user_id = ${userId} RETURNING id
    `) as Row[];
    return rows.length > 0;
  } catch (err) {
    console.error('[stable] deleteVehicle failed:', err);
    return false;
  }
}

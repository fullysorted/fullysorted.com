import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { listVehicles, createVehicle, deleteVehicle } from '@/lib/stable/vehicles';

/**
 * The member's own cars. Every handler resolves the signed-in member first and
 * passes their id into the query, so ownership is enforced in SQL rather than
 * trusted from the request.
 */

export async function GET() {
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });
  return NextResponse.json({ vehicles: await listVehicles(user.id) });
}

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'stable-vehicles', 20, 60_000);
  if (limited) return limited;

  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const num = (v: unknown) => {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
  };
  const str = (v: unknown) => (v == null ? null : String(v));

  // A car needs to be SOMETHING, but not much. "240Z" on its own is a car.
  if (!str(body.make) && !str(body.model) && !str(body.vin)) {
    return NextResponse.json(
      { error: 'Tell us at least what it is, or give us a VIN.' },
      { status: 400 },
    );
  }

  const vehicle = await createVehicle({
    userId: user.id,
    year: num(body.year),
    make: str(body.make),
    model: str(body.model),
    trim: str(body.trim),
    vin: str(body.vin),
    chassis: str(body.chassis),
    modelSlug: str(body.modelSlug),
    nickname: str(body.nickname),
    mileage: num(body.mileage),
  });

  if (!vehicle) {
    return NextResponse.json({ error: 'Could not save that just now.' }, { status: 500 });
  }
  return NextResponse.json({ vehicle }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });

  const id = Number(new URL(request.url).searchParams.get('id'));
  if (!Number.isFinite(id) || id <= 0) {
    return NextResponse.json({ error: 'Which car?' }, { status: 400 });
  }
  const ok = await deleteVehicle(user.id, id);
  return NextResponse.json({ success: ok }, { status: ok ? 200 : 404 });
}

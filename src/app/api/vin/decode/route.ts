import { NextRequest, NextResponse } from 'next/server';
import { decodeVin, getRecalls, isPlausibleVin } from '@/lib/vin/nhtsa';

// GET /api/vin/decode?vin=XXXXXXXXXXXXXXXXX
// Free NHTSA vPIC decode + open-recall lookup. No key, public government data.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const vin = (searchParams.get('vin') || '').trim();

  if (!vin) {
    return NextResponse.json({ error: 'Provide a vin query param' }, { status: 400 });
  }
  if (!isPlausibleVin(vin)) {
    return NextResponse.json(
      { error: 'That doesn’t look like a 17-character VIN. Pre-1981 cars often have shorter VINs the NHTSA decoder can’t read.' },
      { status: 422 }
    );
  }

  try {
    const decoded = await decodeVin(vin);
    const recalls = await getRecalls(decoded.modelYear, decoded.make, decoded.model);
    return NextResponse.json({
      decoded,
      recalls,
      source: 'NHTSA vPIC (public domain). Decode is informational; not a title/history check.',
    });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error)?.message || 'VIN decode failed' },
      { status: 502 }
    );
  }
}

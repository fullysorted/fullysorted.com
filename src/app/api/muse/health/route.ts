import { NextRequest, NextResponse } from 'next/server';
import { isMuse } from '@/lib/muse-auth';

// GET /api/muse/health — lets the Muse skill verify its API key without
// performing a write. Mirrors the /api/ingest/auction-results health echo.
export async function GET(req: NextRequest) {
  if (!isMuse(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({
    ok: true,
    endpoint: '/api/muse/health',
    keyedWrites: [
      'POST /api/listings',
      'POST /api/sales/submit',
      'POST /api/models/contribute',
      'POST /api/register/submit',
      'POST /api/messages',
      'POST /api/providers',
    ],
  });
}

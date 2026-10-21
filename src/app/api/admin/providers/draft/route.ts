import { NextRequest, NextResponse } from 'next/server';
import { generateProviderProfile } from '@/lib/ai/generate-provider-profile';
import { AI_ADMIN_DRAFTS_ENABLED } from '@/lib/features';
import { isAdminRequest } from '@/lib/session-token';

// A profile draft reads three pages at most: usually 15 to 60 seconds.
export const maxDuration = 120;

const isAdmin = isAdminRequest;

// POST /api/admin/providers/draft
// Body: { businessName, website?, location?, category?, notes?, quality?: 'standard' | 'best' }
// Returns a draft row for /api/admin/seed-providers. Writes nothing.
export async function POST(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!AI_ADMIN_DRAFTS_ENABLED) {
    return NextResponse.json({ error: 'AI drafting is turned off (AI_ADMIN_DRAFTS_ENABLED).' }, { status: 503 });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const str = (k: string, max: number) => (typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, max) : '');
  const businessName = str('businessName', 200);
  if (!businessName) return NextResponse.json({ error: 'businessName is required' }, { status: 400 });

  try {
    const { draft, warnings, usage, model } = await generateProviderProfile({
      businessName,
      website: str('website', 300) || null,
      location: str('location', 120) || null,
      category: str('category', 60) || null,
      notes: str('notes', 1000) || null,
      quality: body.quality === 'best' ? 'best' : 'standard',
    });
    return NextResponse.json({ draft, warnings, model, usd: Number(usage.usd.toFixed(4)) });
  } catch (e) {
    console.error('[ai] provider-profile failed:', (e as Error).message);
    return NextResponse.json({ error: (e as Error).message || 'Draft failed' }, { status: 500 });
  }
}

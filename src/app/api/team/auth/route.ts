import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { rateLimit } from '@/lib/rate-limit';

const TEAM_COOKIE = 'fs_team';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: NextRequest) {
  // Brute-force guard on the login endpoint
  const limited = rateLimit(request, 'team-auth', 10, 15 * 60 * 1000);
  if (limited) return limited;

  const { secret } = await request.json();
  const teamSecret = process.env.TEAM_SECRET?.trim();

  // Server-side misconfiguration is not the same as a wrong code. Saying so
  // saves a support call — the rep otherwise retries until the rate limit
  // locks him out of a login that was never going to work.
  if (!teamSecret) {
    return NextResponse.json(
      { error: 'Team access is not configured yet. Contact Chris.' },
      { status: 503 },
    );
  }

  // Codes are pasted out of email; a trailing space or newline comes along for
  // the ride and reads to the user as "the code is wrong".
  const supplied = typeof secret === 'string' ? secret.trim() : '';

  if (supplied !== teamSecret) {
    return NextResponse.json({ error: 'Invalid access code' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(TEAM_COOKIE, teamSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  });

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(TEAM_COOKIE);
  return NextResponse.json({ success: true });
}

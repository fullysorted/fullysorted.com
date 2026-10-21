import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { rateLimit } from '@/lib/rate-limit';
import { ADMIN_COOKIE, SESSION_MAX_AGE, makeSessionToken, safeEqual } from '@/lib/session-token';

export async function POST(request: NextRequest) {
  // The admin key is a single shared password on a live site and this endpoint
  // had no brute-force guard at all — the /team login next door has had one for
  // months. Generous limit: it must stop a script, not Chris mistyping.
  const limited = rateLimit(request, 'admin-auth', 20, 15 * 60 * 1000);
  if (limited) return limited;

  const { secret } = await request.json();

  // Trimmed on BOTH sides, matching lib/team-auth.ts.
  //
  // Without this, an ADMIN_SECRET pasted into Vercel with a trailing newline —
  // which is what happens when you copy it out of a password manager or a
  // terminal — can never be typed correctly again: the value in the env has a
  // character the login box cannot produce, so every attempt reads as "wrong
  // key" and the console locks its owner out. The team login already learned
  // this lesson; the admin login had not.
  const adminSecret = process.env.ADMIN_SECRET?.trim();

  // A server misconfiguration is not a wrong password. Say which it is, or the
  // next fifteen minutes go into retyping a key that was never going to work.
  if (!adminSecret) {
    return NextResponse.json(
      { error: 'ADMIN_SECRET is not set on this deployment.' },
      { status: 503 },
    );
  }

  const supplied = typeof secret === 'string' ? secret.trim() : '';
  if (!safeEqual(supplied, adminSecret)) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  const cookieStore = await cookies();
  // The cookie carries a signed, expiring session token (never the secret),
  // keyed by the TRIMMED secret, which is what middleware and the API route
  // helpers in lib/session-token.ts verify against.
  cookieStore.set(ADMIN_COOKIE, makeSessionToken('admin', adminSecret), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    // 'lax' so an /admin link opened from email or a text keeps the session.
    sameSite: 'lax',
    maxAge: SESSION_MAX_AGE,
    path: '/',
  });

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE);
  return NextResponse.json({ success: true });
}

import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { undeliverableResponse } from '@/lib/submissions';
import { sendNewsletterConfirm, notifyNewsletterFallback } from '@/lib/email';
import { NEWSLETTER_INTERESTS } from '@/lib/newsletter-shared';
import {
  cleanEmail, cleanPrefs, cleanSource, subscribe, markConfirmSent, updatePrefsByToken, getByToken,
} from '@/lib/newsletter';

/**
 * POST  { email, interests?, zip?, marques?, source?, path?, website? }
 *   Signs an address up (double opt-in). `website` is a honeypot.
 *   Responses:
 *     { status: 'pending', token, emailed }  confirmation sent (or queued); token saves extras
 *     { status: 'check' }                    already confirmed; nothing changed, nothing revealed
 *     { status: 'manual' }                   DB down, Chris got it by email
 *     503 { undelivered, mailto }            nothing worked; per the deliver() contract
 * PATCH { token, interests?, zip?, radiusMi?, marques? }  save settings (token from email or POST)
 * GET   ?t=token                                          read settings for the manage page
 */
const labels = (i: string[]) => NEWSLETTER_INTERESTS.filter((x) => i.includes(x.key)).map((x) => x.label);

export async function POST(req: NextRequest) {
  const limited = rateLimit(req, 'newsletter', 6, 10 * 60 * 1000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Bad request' }, { status: 400 }); }

  // Bots fill every field. Say yes and do nothing.
  if (typeof body.website === 'string' && body.website.trim()) {
    return NextResponse.json({ status: 'pending', token: null, emailed: true });
  }

  const email = cleanEmail(body.email);
  if (!email) return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 });

  const prefs = cleanPrefs(body);
  if (prefs.interests && prefs.interests.length === 0) {
    return NextResponse.json({ error: 'Pick at least one thing to hear about.' }, { status: 400 });
  }
  const source = cleanSource(body.source);
  const path = typeof body.path === 'string' && body.path.startsWith('/') ? body.path : null;
  const interests = prefs.interests && prefs.interests.length ? prefs.interests : ['cars', 'shops'];

  try {
    const out = await subscribe(email, prefs, source, path);
    if (out.kind === 'active') return NextResponse.json({ status: 'check' });
    let emailed = !out.sendConfirm; // throttled resend counts as already sent
    if (out.sendConfirm) {
      emailed = await sendNewsletterConfirm({
        to: email, token: out.sub.token, interests: labels(interests), zip: out.sub.zip, marques: out.sub.marques,
      });
      if (emailed) await markConfirmSent(out.sub.id).catch(() => null);
    }
    return NextResponse.json({ status: 'pending', token: out.sub.token, emailed });
  } catch (err) {
    console.error('[newsletter] save failed', err);
    const fallback = await notifyNewsletterFallback({
      email, interests: labels(interests), zip: prefs.zip ?? null, marques: prefs.marques ?? [], source,
    }).catch(() => false);
    if (fallback) return NextResponse.json({ status: 'manual' });
    console.error(`[submission] UNDELIVERED newsletter signup ${email}`);
    return undeliverableResponse('Add me to the Fully Sorted list', {
      Email: email, Interests: labels(interests).join(', '), ZIP: prefs.zip ?? '', Marques: (prefs.marques ?? []).join(', '),
    });
  }
}

export async function PATCH(req: NextRequest) {
  const limited = rateLimit(req, 'newsletter-prefs', 30, 10 * 60 * 1000);
  if (limited) return limited;
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Bad request' }, { status: 400 }); }
  try {
    const sub = await updatePrefsByToken(body.token, cleanPrefs(body));
    if (!sub) return NextResponse.json({ error: 'That link has expired or the settings were empty.' }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] prefs failed', err);
    return NextResponse.json({ error: 'Could not save just now. Try again in a minute.' }, { status: 503 });
  }
}

export async function GET(req: NextRequest) {
  const limited = rateLimit(req, 'newsletter-prefs', 30, 10 * 60 * 1000);
  if (limited) return limited;
  const sub = await getByToken(new URL(req.url).searchParams.get('t')).catch(() => null);
  if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({
    email: sub.email, status: sub.status, wantCars: sub.wantCars, wantShops: sub.wantShops,
    wantResearch: sub.wantResearch, zip: sub.zip, radiusMi: sub.radiusMi, marques: sub.marques,
  });
}

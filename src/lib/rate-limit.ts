import { NextRequest, NextResponse } from 'next/server';

/**
 * Lightweight in-memory rate limiter for abuse control on public endpoints
 * (form spam, AI cost abuse). Best-effort only: on serverless each instance
 * keeps its own map, so this throttles per-warm-instance rather than globally.
 * For hard global limits, move to a shared store (Upstash/Redis) — see
 * STRIPE-GO-LIVE / SECURITY notes. This still stops trivial single-source floods.
 */
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

// Opportunistic cleanup so the map can't grow unbounded.
function sweep(now: number) {
  if (buckets.size < 5000) return;
  for (const [k, b] of buckets) if (b.resetAt < now) buckets.delete(k);
}

export function clientKey(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  const ip = fwd ? fwd.split(',')[0].trim() : (req.headers.get('x-real-ip') || 'unknown');
  return ip;
}

/**
 * Returns null if allowed, or a 429 NextResponse if the limit is exceeded.
 * @param scope  logical bucket name (e.g. 'ai', 'contact')
 * @param limit  max requests per window
 * @param windowMs  window length in ms
 */
export function rateLimit(
  req: NextRequest,
  scope: string,
  limit: number,
  windowMs: number,
): NextResponse | null {
  const now = Date.now();
  sweep(now);
  const key = `${scope}:${clientKey(req)}`;
  const b = buckets.get(key);
  if (!b || b.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return null;
  }
  if (b.count >= limit) {
    const retry = Math.ceil((b.resetAt - now) / 1000);
    return NextResponse.json(
      { error: 'Too many requests. Please slow down and try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(retry) } },
    );
  }
  b.count += 1;
  return null;
}

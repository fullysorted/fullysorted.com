import { createHmac, timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';

/**
 * Signed, expiring session tokens for the /admin and /team consoles.
 *
 * Before 2026-10-20 the login cookie held the raw ADMIN_SECRET (or TEAM_SECRET),
 * so a leaked cookie was the master password itself and never expired. The
 * cookie now holds `<scope>.<expiresAtSeconds>.<hmac>`: an HMAC-SHA256 of the
 * scope and expiry, keyed by the secret. A stolen cookie dies on its expiry,
 * and rotating the secret in Vercel signs everyone out at once.
 *
 * Node runtime only (route handlers). Middleware runs on the edge and uses the
 * Web Crypto twin in `session-token-edge.ts`, which produces the same tokens.
 */

export type SessionScope = 'admin' | 'team';

export const ADMIN_COOKIE = 'fs_admin';
export const TEAM_COOKIE = 'fs_team';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function sign(secret: string, payload: string): string {
  return createHmac('sha256', secret).update(payload).digest('hex');
}

/** Constant-time string compare. Unequal lengths return false without leaking which byte differed. */
export function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

export function makeSessionToken(scope: SessionScope, secret: string, maxAgeSec = SESSION_MAX_AGE): string {
  const exp = Math.floor(Date.now() / 1000) + maxAgeSec;
  const payload = `${scope}.${exp}`;
  return `${payload}.${sign(secret, payload)}`;
}

export function verifySessionToken(token: string | undefined, scope: SessionScope, secret: string | undefined): boolean {
  if (!token || !secret) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [s, expStr, sig] = parts;
  if (s !== scope) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return false;
  return safeEqual(sig, sign(secret, `${s}.${expStr}`));
}

const adminSecret = () => process.env.ADMIN_SECRET?.trim() || undefined;
const teamSecret = () => process.env.TEAM_SECRET?.trim() || undefined;

/**
 * Admin access for an API route: a valid signed admin cookie, or the raw
 * secret in the `x-admin-secret` header (scripts and one-off curl calls only;
 * the browser never sends it).
 */
export function isAdminRequest(request: NextRequest | Request): boolean {
  const secret = adminSecret();
  if (!secret) return false;
  const header = request.headers.get('x-admin-secret')?.trim();
  if (header && safeEqual(header, secret)) return true;
  const token = 'cookies' in request ? (request as NextRequest).cookies.get(ADMIN_COOKIE)?.value : undefined;
  return verifySessionToken(token, 'admin', secret);
}

/** Team console access: a valid team session, or an admin session. */
export function isTeamRequest(request: NextRequest): boolean {
  if (verifySessionToken(request.cookies.get(TEAM_COOKIE)?.value, 'team', teamSecret())) return true;
  return verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value, 'admin', adminSecret());
}

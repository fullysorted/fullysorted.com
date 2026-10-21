/**
 * Edge (Web Crypto) verifier for the signed session tokens made by
 * `session-token.ts`. Used by middleware, which cannot import node:crypto.
 * Same format: `<scope>.<expiresAtSeconds>.<hex hmac-sha256(scope.exp)>`.
 */

async function hmacHex(secret: string, payload: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function verifySessionTokenEdge(token: string | undefined, scope: 'admin' | 'team', secret: string | undefined): Promise<boolean> {
  if (!token || !secret) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [s, expStr, sig] = parts;
  if (s !== scope) return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp * 1000 < Date.now()) return false;
  return constantTimeEqual(sig, await hmacHex(secret, `${s}.${expStr}`));
}

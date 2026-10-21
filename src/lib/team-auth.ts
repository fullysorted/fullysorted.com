import { NextRequest } from 'next/server';
import { isTeamRequest } from '@/lib/session-token';

/**
 * Scoped auth for the /team onboarding console.
 *
 * Both cookies are signed, expiring sessions (see session-token.ts), never the
 * raw secret. The team session is signed with a separate secret from ADMIN_SECRET so the onboarding
 * rep can add providers and send claim invites WITHOUT getting admin powers
 * (listings, orders, deletes). Chris's admin cookie is also accepted so he
 * can use the team console without a second login.
 *
 * Env: TEAM_SECRET — set in Vercel. Rotate it to revoke a rep's access
 * without touching ADMIN_SECRET.
 */
export function isTeam(request: NextRequest): boolean {
  return isTeamRequest(request);
}

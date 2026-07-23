import { NextRequest } from 'next/server';

/**
 * Scoped auth for the /team onboarding console.
 *
 * The team cookie is a separate secret from ADMIN_SECRET so the onboarding
 * rep can add providers and send claim invites WITHOUT getting admin powers
 * (listings, orders, deletes). Chris's admin cookie is also accepted so he
 * can use the team console without a second login.
 *
 * Env: TEAM_SECRET — set in Vercel. Rotate it to revoke a rep's access
 * without touching ADMIN_SECRET.
 */
export function isTeam(request: NextRequest): boolean {
  const teamCookie = request.cookies.get('fs_team')?.value;
  if (process.env.TEAM_SECRET && teamCookie === process.env.TEAM_SECRET) return true;
  const adminCookie = request.cookies.get('fs_admin')?.value;
  if (process.env.ADMIN_SECRET && adminCookie === process.env.ADMIN_SECRET) return true;
  return false;
}

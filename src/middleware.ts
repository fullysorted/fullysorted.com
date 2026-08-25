import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_COOKIE = 'fs_admin';

// Only enable Clerk middleware when keys are configured
const clerkEnabled = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.CLERK_SECRET_KEY
);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Admin protection ────────────────────────────────────
  // Protect all /admin/* EXCEPT the login page itself
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const cookie = request.cookies.get(ADMIN_COOKIE);
    // Trimmed, matching /api/admin/auth and lib/team-auth.ts. An ADMIN_SECRET
    // stored with a trailing newline would otherwise never equal the cookie the
    // login route just set, and every admin page would bounce back to /admin.
    const adminSecret = process.env.ADMIN_SECRET?.trim();

    if (!cookie || !adminSecret || cookie.value.trim() !== adminSecret) {
      const loginUrl = new URL('/admin', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ── Clerk (optional, for seller auth) ───────────────────
  if (!clerkEnabled) {
    return NextResponse.next();
  }

  const { clerkMiddleware, createRouteMatcher } = await import('@clerk/nextjs/server');

  // /sell is intentionally PUBLIC: anonymous visitors can browse the
  // landing page and start a listing. The /api/checkout flow captures
  // payment + email at the moment of submission. Protecting /sell at the
  // middleware level breaks paid ad traffic by 404'ing signed-out users.
  const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/account(.*)',
  ]);

  const handler = clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
      await auth.protect();
    }
  });

  return handler(request, {} as any);
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

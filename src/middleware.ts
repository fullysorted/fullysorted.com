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
    const adminSecret = process.env.ADMIN_SECRET;

    if (!cookie || !adminSecret || cookie.value !== adminSecret) {
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

  const isProtectedRoute = createRouteMatcher([
    '/sell(.*)',
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

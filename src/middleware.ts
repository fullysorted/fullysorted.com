import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Only enable Clerk middleware when keys are configured
const clerkEnabled = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.CLERK_SECRET_KEY
);

export default async function middleware(request: NextRequest) {
  // If Clerk is not configured, pass through all requests
  if (!clerkEnabled) {
    return NextResponse.next();
  }

  // Dynamically import Clerk middleware only when configured
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
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

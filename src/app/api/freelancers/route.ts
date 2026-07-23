import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';

function slugify(s: string): string {
  return (
    s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') +
    '-' + Math.random().toString(36).substring(2, 7)
  );
}

// POST /api/freelancers — create a freelancer application + pending profile +
// optional first gig (draft). Mirrors /api/providers but for provider_type='freelancer'.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      ownerName, email, phone, headline, location, serviceArea,
      category, skills, bio, avatarUrl, clerkUserId, gig,
    } = body;

    if (!ownerName || !email || !category || !bio) {
      return NextResponse.json(
        { error: 'Your name, email, category, and a short bio are required.' },
        { status: 400 }
      );
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'The database isn\u2019t connected yet. Please try again shortly.' }, { status: 503 });
    }
    const db = getDb();
    const skillsArr: string[] = Array.isArray(skills) ? skills : [];
    const slug = slugify(ownerName);

    // Application record (shows in the same admin queue, tagged freelancer).
    await db.insert(schema.providerApplications).values({
      businessName: headline || ownerName,
      ownerName,
      category,
      location: location || serviceArea || '—',
      email,
      phone: phone || null,
      specialties: skillsArr.join(', '),
      whyList: null,
      providerType: 'freelancer',
      status: 'pending',
    });

    // Pending freelancer profile.
    const [provider] = await db.insert(schema.serviceProviders).values({
      clerkUserId: clerkUserId || null,
      businessName: headline || ownerName,
      ownerName,
      slug,
      category,
      location: location || serviceArea || '—',
      email,
      phone: phone || null,
      description: bio,
      specialties: skillsArr,
      providerType: 'freelancer',
      headline: headline || null,
      skills: skillsArr,
      serviceArea: serviceArea || location || null,
      avatarUrl: avatarUrl || null,
      onboardingComplete: true,
      status: 'pending',
    }).returning();

    // Optional first gig (draft) + packages — best-effort: never block the
    // application/profile if gig tables have an issue.
    let gigSlug: string | null = null;
    try {
    if (gig && gig.title) {
      gigSlug = slugify(gig.title);
      const [createdGig] = await db.insert(schema.gigs).values({
        providerId: provider.id,
        slug: gigSlug,
        title: gig.title,
        category: gig.category || category,
        description: gig.description || null,
        status: 'draft',
      }).returning();

      const pkgs = Array.isArray(gig.packages) ? gig.packages : [];
      for (const p of pkgs) {
        if (p && typeof p.price === 'number') {
          await db.insert(schema.gigPackages).values({
            gigId: createdGig.id,
            tier: p.tier || 'basic',
            title: p.title || null,
            description: p.description || null,
            price: p.price,
            deliveryDays: p.deliveryDays ?? null,
            revisions: p.revisions ?? null,
            features: Array.isArray(p.features) ? p.features : [],
          });
        }
      }
    }
    } catch (gigErr) {
      console.error('freelancer gig creation failed (application still saved):', gigErr);
    }

    // Notify Chris (best-effort).
    try {
      const { notifyNewProviderApplication } = await import('@/lib/email');
      await notifyNewProviderApplication({
        businessName: `${headline || ownerName} (freelancer)`,
        ownerName, category, location: location || serviceArea || '—', email,
        phone: phone || undefined,
        specialties: skillsArr.join(', '),
      });
    } catch (e) {
      console.error('freelancer notify failed:', e);
    }

    return NextResponse.json(
      { provider, gigSlug, message: 'You’re in! We review every applicant personally — usually within 3–5 business days.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create freelancer error:', error);
    const detail = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: 'Failed to submit. Please try again.', detail }, { status: 500 });
  }
}

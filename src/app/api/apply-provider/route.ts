import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { deliver, undeliverableResponse } from "@/lib/submissions";

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, "apply-provider", 5, 60_000);
  if (limited) return limited;
  try {
    const body = await request.json();
    const {
      businessName,
      ownerName,
      category,
      location,
      email,
      phone,
      website,
      instagram,
      yearsInBusiness,
      specialties,
      idealClient,
      whyList,
      referredBy,
    } = body;

    // Validate required fields
    if (!businessName || !ownerName || !category || !location || !email || !specialties) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Log to console for visibility (useful in Vercel logs)
    console.log("[Provider Application]", {
      businessName,
      ownerName,
      category,
      location,
      email,
      phone,
      website,
      specialties: specialties?.slice(0, 100),
    });

    // Save and notify are independent — either one reaching us means the
    // application is safe. Both used to be swallowed and the route returned
    // success regardless, so an application could vanish behind a green
    // checkmark. Success is now reported only if at least one channel worked.
    const result = await deliver({
      label: `provider application (${businessName})`,
      save: process.env.DATABASE_URL
        ? async () => {
            const { getDb, schema } = await import("@/lib/db");
            const db = getDb();
            await db.insert(schema.providerApplications).values({
              businessName,
              ownerName,
              category,
              location,
              email,
              phone: phone || null,
              website: website || null,
              instagram: instagram || null,
              yearsInBusiness: yearsInBusiness || null,
              specialties,
              idealClient: idealClient || null,
              whyList: whyList || null,
              referredBy: referredBy || null,
              status: "pending",
            });
          }
        : undefined,
      notify: async () => {
        const { notifyNewProviderApplication } = await import("@/lib/email");
        return notifyNewProviderApplication({
          businessName,
          ownerName,
          category,
          location,
          email,
          phone,
          website,
          instagram,
          specialties,
          whyList,
          referredBy,
        });
      },
    });

    if (!result.delivered) {
      return undeliverableResponse(`Provider application: ${businessName}`, {
        Business: businessName,
        Owner: ownerName,
        Category: category,
        Location: location,
        Email: email,
        Phone: phone,
        Website: website,
        Instagram: instagram,
        "Years in business": yearsInBusiness,
        Specialties: specialties,
        "Ideal client": idealClient,
        "Why list": whyList,
        "Referred by": referredBy,
      });
    }

    return NextResponse.json({ success: true, saved: result.saved });
  } catch (err) {
    console.error("apply-provider error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

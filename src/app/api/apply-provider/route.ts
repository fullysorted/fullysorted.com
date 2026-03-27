import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
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

    // Save to DB if available
    if (process.env.DATABASE_URL) {
      try {
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
      } catch (dbErr) {
        console.error("DB insert failed:", dbErr);
        // Don't block the response — log and continue
      }
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("apply-provider error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

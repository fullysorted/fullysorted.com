import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // Send notification email to Chris
    const { notifyContactForm } = await import("@/lib/email");
    await notifyContactForm({ name, email, subject: subject || "General Question", message });

    // Optional: save to DB if available
    if (process.env.DATABASE_URL) {
      try {
        const { neon } = await import("@neondatabase/serverless");
        const sql = neon(process.env.DATABASE_URL);
        await sql`
          INSERT INTO messages (sender_name, sender_email, message_text, type, status)
          VALUES (${name}, ${email}, ${message}, 'contact', 'new')
        `;
      } catch {
        // Non-fatal — email already sent
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, "contact", 5, 60_000);
  if (limited) return limited;
  try {
    let body: { name?: string; email?: string; subject?: string; message?: string };
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    let { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }
    // Cap lengths to prevent DB bloat / oversized payloads.
    name = String(name).slice(0, 200);
    email = String(email).slice(0, 255);
    subject = subject ? String(subject).slice(0, 300) : subject;
    message = String(message).slice(0, 5000);

    // Save first (if a DB is available) so a message is never lost to an email hiccup.
    if (process.env.DATABASE_URL) {
      try {
        const { neon } = await import("@neondatabase/serverless");
        const sql = neon(process.env.DATABASE_URL);
        await sql`
          INSERT INTO messages (sender_name, sender_email, message_text, type, status)
          VALUES (${name}, ${email}, ${message}, 'contact', 'new')
        `;
      } catch (dbErr) {
        console.error("contact DB save failed (email still sent):", dbErr);
      }
    }

    // Notify Chris — best-effort, never blocks the submit.
    try {
      const { notifyContactForm } = await import("@/lib/email");
      await notifyContactForm({ name, email, subject: subject || "General Question", message });
    } catch (emailErr) {
      console.error("contact email failed (message still handled):", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

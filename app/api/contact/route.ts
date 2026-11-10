import { NextResponse } from "next/server";
import { sendInquiryEmail, type InquiryEmailPayload } from "@/lib/mailer";

const VALID_SOURCES = new Set<InquiryEmailPayload["source"]>([
  "contact-page",
  "home-cta",
  "artist-onboarding",
]);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const source = body?.source as InquiryEmailPayload["source"];
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const contact =
      typeof body?.contact === "string" ? body.contact.trim() : "";
    const service =
      typeof body?.service === "string" ? body.service.trim() : "";
    const message =
      typeof body?.message === "string" ? body.message.trim() : "";

    if (!VALID_SOURCES.has(source)) {
      return NextResponse.json(
        { success: false, error: "Invalid inquiry source." },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (source === "contact-page" && (!email || !message)) {
      return NextResponse.json(
        { success: false, error: "Email and project message are required." },
        { status: 400 }
      );
    }

    if (source === "home-cta" && (!contact || !message)) {
      return NextResponse.json(
        { success: false, error: "Contact and message are required." },
        { status: 400 }
      );
    }

    if (source === "artist-onboarding" && !email) {
      return NextResponse.json(
        { success: false, error: "Artist email is required." },
        { status: 400 }
      );
    }

    const details =
      source === "artist-onboarding"
        ? {
            Pseudonym:
              typeof body?.pseudonym === "string" ? body.pseudonym : undefined,
            "Portfolio / Social":
              typeof body?.portfolioUrl === "string"
                ? body.portfolioUrl
                : undefined,
            "IP Consent": body?.consentAgreed ? "Agreed" : "Not provided",
          }
        : undefined;

    await sendInquiryEmail({
      source,
      name,
      email: email || undefined,
      contact: contact || undefined,
      service: service || undefined,
      message: message || undefined,
      details,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API /api/contact] Failed to send email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to send your message right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}


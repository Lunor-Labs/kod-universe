import { NextResponse } from "next/server";
import { generateAssistantResponse } from "@/lib/ai-assistant";
import { sendInquiryEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, actionType, formData } = body;

    if (formData) {
      await sendInquiryEmail({
        source: "ai-chat",
        name: String(formData.name || "Website Visitor"),
        email: typeof formData.email === "string" ? formData.email : undefined,
        contact: typeof formData.phone === "string" ? formData.phone : undefined,
        service: typeof formData.service === "string" ? formData.service : undefined,
        message: typeof formData.notes === "string" ? formData.notes : undefined,
      });

      return NextResponse.json({
        success: true,
        replyText: `Thank you, **${formData.name || "friend"}**! We have received your inquiry for **${formData.service || "our services"}**.\n\nOur team will reach out to you shortly at ${formData.phone || formData.email || "your provided contact"}.`,
        options: [
          {
            id: "opt-another-quote",
            label: "Submit another request",
            actionType: "quote_form",
          },
          {
            id: "opt-whatsapp-direct",
            label: "Continue on WhatsApp",
            payload: "WHATSAPP_REDIRECT",
          },
        ],
      });
    }

    const response = generateAssistantResponse(message || "", actionType);
    return NextResponse.json({
      success: true,
      ...response,
    });
  } catch (error) {
    console.error("API Chat Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal chat server error" },
      { status: 500 },
    );
  }
}

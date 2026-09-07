import { NextResponse } from "next/server";
import { generateAssistantResponse } from "@/lib/ai-assistant";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, actionType, formData } = body;

    if (formData) {
      console.log("KOD Chat Form Lead Submission:", formData);
      return NextResponse.json({
        success: true,
        replyText: `Thank you, ${formData.name || "friend"}! We have received your inquiry for ${formData.service || "our services"}. Our team will call or email you shortly at ${formData.phone || formData.email || "your provided contact"}.`,
        options: [
          {
            id: "opt-another-quote",
            label: "⚡ Submit Another Request",
            actionType: "quote_form",
          },
          {
            id: "opt-whatsapp-direct",
            label: "💬 Continue on WhatsApp",
            actionType: "contact_info",
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
      { status: 500 }
    );
  }
}

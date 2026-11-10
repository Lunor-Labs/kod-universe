import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

export interface SendMailOptions {
  to?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}

export interface InquiryEmailPayload {
  source: "contact-page" | "home-cta" | "artist-onboarding" | "ai-chat";
  name: string;
  email?: string;
  contact?: string;
  service?: string;
  message?: string;
  details?: Record<string, string | undefined>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransporter() {
  const user = process.env.SMTP_USER;
  const rawPass = process.env.SMTP_PASS;

  if (!user || !rawPass) {
    throw new Error(
      "Missing SMTP_USER or SMTP_PASS environment variables for mail delivery."
    );
  }

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 465);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass: rawPass.replace(/\s+/g, ""),
    },
  });
}

export async function sendMail({
  to,
  replyTo,
  subject,
  text,
  html,
}: SendMailOptions): Promise<void> {
  const transporter = getTransporter();
  const from =
    process.env.SMTP_FROM || `KOD Universe <${process.env.SMTP_USER}>`;
  const recipient = to || process.env.SMTP_TO || siteConfig.contact.email;

  await transporter.sendMail({
    from,
    to: recipient,
    replyTo: replyTo && EMAIL_REGEX.test(replyTo) ? replyTo : undefined,
    subject,
    text,
    html,
  });
}

const SOURCE_LABELS: Record<InquiryEmailPayload["source"], string> = {
  "contact-page": "Contact Page Enquiry",
  "home-cta": "Home Quick Inquiry",
  "artist-onboarding": "KOD Gallery Artist Onboarding",
  "ai-chat": "AI Chat Assistant Lead",
};

export async function sendInquiryEmail(
  payload: InquiryEmailPayload
): Promise<void> {
  const sourceLabel = SOURCE_LABELS[payload.source];
  const replyToEmail =
    payload.email && EMAIL_REGEX.test(payload.email)
      ? payload.email
      : payload.contact && EMAIL_REGEX.test(payload.contact)
      ? payload.contact
      : undefined;

  const rows: Array<[string, string]> = [
    ["Source", sourceLabel],
    ["Name", payload.name],
  ];

  if (payload.email) rows.push(["Email", payload.email]);
  if (payload.contact) rows.push(["Contact", payload.contact]);
  if (payload.service) rows.push(["Service / Discipline", payload.service]);

  if (payload.details) {
    for (const [key, value] of Object.entries(payload.details)) {
      if (value && value.trim()) {
        rows.push([key, value.trim()]);
      }
    }
  }

  if (payload.message) rows.push(["Message", payload.message]);

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const htmlRows = rows
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e7dfd8;font-weight:600;color:#2c2520;width:180px;vertical-align:top;">${escapeHtml(k)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e7dfd8;color:#4a3f37;white-space:pre-wrap;">${escapeHtml(v)}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#faf7f4;border:1px solid #e7dfd8;border-radius:12px;overflow:hidden;">
      <div style="background:#1c1916;color:#f7f3f1;padding:20px 24px;">
        <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#e54c2a;">KOD Universe Website</p>
        <h2 style="margin:6px 0 0;font-size:20px;font-weight:700;">${escapeHtml(sourceLabel)}</h2>
      </div>
      <table style="width:100%;border-collapse:collapse;background:#ffffff;">
        ${htmlRows}
      </table>
      <div style="padding:14px 24px;font-size:12px;color:#7a6d63;background:#faf7f4;">
        Sent from kod.lk · Reply directly to respond to ${escapeHtml(payload.name)}.
      </div>
    </div>
  `;

  await sendMail({
    subject: `[KOD Universe] ${sourceLabel} — ${payload.name}`,
    replyTo: replyToEmail,
    text,
    html,
  });
}


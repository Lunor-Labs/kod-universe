import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LAUNCH_TIMESTAMP } from "@/lib/launch";

const CRAWLER_UA_PATTERN =
  /facebookexternalhit|facebot|whatsapp|twitterbot|linkedinbot|discordbot|slackbot|telegrambot|applebot|pinterest|embedly|skypeuripreview|vkshare/i;

export function middleware(request: NextRequest) {
  // Launch time: 2026-11-11 11:11:11 AM Sri Lankan Time (IST/SLST is UTC+5:30)
  const now = Date.now();

  if (now >= LAUNCH_TIMESTAMP) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname.startsWith("/coming-soon")) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") || "";
  if (CRAWLER_UA_PATTERN.test(userAgent)) {
    return NextResponse.rewrite(new URL("/coming-soon", request.url));
  }

  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

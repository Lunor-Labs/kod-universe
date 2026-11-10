import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LAUNCH_TIMESTAMP } from "@/lib/launch";

export function middleware(request: NextRequest) {
  // Launch time: 2026-11-11 11:11:11 AM Sri Lankan Time (IST/SLST is UTC+5:30)
  const now = Date.now();

  if (now >= LAUNCH_TIMESTAMP) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/coming-soon") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

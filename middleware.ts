import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Launch time: 2026-09-09 7:00 PM Sri Lankan Time (IST/SLST is UTC+5:30)
  const launchTime = new Date("2026-09-11T19:00:00+05:30").getTime();
  const now = new Date().getTime();

  if (now >= launchTime) {
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

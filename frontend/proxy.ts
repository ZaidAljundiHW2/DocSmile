// proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const isThankYouPage = segments[segments.length - 1] === "thank-you";

  if (isThankYouPage) {
    const referer = request.headers.get("referer");
    let blocked = true;

    if (referer) {
      try {
        if (new URL(referer).origin === request.nextUrl.origin) {
          blocked = false;
        }
      } catch {
        blocked = true;
      }
    }

    if (blocked) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
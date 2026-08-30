// proxy.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = { matcher: '/thank-you' };

export function proxy(request: NextRequest) {
  const referer = request.headers.get("referer");
  console.log("referer:", referer, "| url:", request.url);

  try {
    const requestURL = new URL(request.url);
    if (!referer) throw new Error("no referer");
    const refererURL = new URL(referer);

    if (refererURL.origin !== requestURL.origin) {
      throw new Error("origin mismatch");
    }
  } catch (err) {
    console.log("redirecting because:", err);
    return NextResponse.redirect(new URL('/', request.url));
  }

  console.log("passed referer check, letting it through");
  return NextResponse.next();
}
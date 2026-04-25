import { NextResponse, type NextRequest, userAgent } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

// Paths (relative to the locale prefix) that should be rewritten to a mobile
// variant when the request comes from a mobile/tablet device.
const MOBILE_REWRITE_PATHS = new Set(["/", "/team"]);

/**
 * Strips any supported locale prefix from the start of a pathname and returns
 * both the locale (or the default) and the remaining path (always leading "/").
 */
function splitLocaleFromPathname(pathname: string): {
  locale: string;
  rest: string;
} {
  for (const locale of routing.locales) {
    if (pathname === `/${locale}`) {
      return { locale, rest: "/" };
    }
    if (pathname.startsWith(`/${locale}/`)) {
      return { locale, rest: pathname.slice(`/${locale}`.length) };
    }
  }

  return { locale: routing.defaultLocale, rest: pathname };
}

export function middleware(req: NextRequest): NextResponse {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  const ua = userAgent(req);
  const deviceType = ua.device.type ?? "desktop";
  const isMobile = deviceType === "mobile" || deviceType === "tablet";

  const { locale, rest } = splitLocaleFromPathname(pathname);

  if (isMobile && MOBILE_REWRITE_PATHS.has(rest)) {
    const mobilePath = rest === "/" ? "/mobile" : `${rest}/mobile`;
    // Rewrite directly to the internal `/[locale]/mobile` route so the App
    // Router resolves the page regardless of next-intl's `localePrefix`
    // configuration. Using `buildLocalizedPath` would omit the prefix for the
    // default locale and bypass next-intl, producing a 404.
    const url = nextUrl.clone();
    url.pathname = `/${locale}${mobilePath}`;
    return NextResponse.rewrite(url);
  }

  return intlMiddleware(req);
}

export const config = {
  // Match everything except Next.js internals, static assets, and API routes.
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};

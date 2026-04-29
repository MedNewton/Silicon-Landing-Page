import { NextResponse, type NextRequest, userAgent } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const ua = userAgent(req);
    const deviceType = ua.device.type ?? "desktop";
    const isMobile = deviceType === "mobile" || deviceType === "tablet";

    const mobileHomepagePaths = new Set(["/", "/en"]);

    if (isMobile && mobileHomepagePaths.has(pathname)) {
        const url = req.nextUrl.clone();
        url.pathname =
            pathname === "/"
                ? `/${routing.defaultLocale}/mobile`
                : `${pathname}/mobile`;
        return NextResponse.rewrite(url);
    }

    return intlMiddleware(req);
}

export const config = {
    matcher: [
        "/((?!api|_next|_vercel|privacy-policy|terms-and-conditions|.*\\..*).*)",
    ],
};

# Responsiveness fix-and-polish — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the broken mobile header on inner pages and apply five focused polish items (reduced-motion handling, locale-aware mobile drawer, tap-friendly dropdowns, hero width tuning).

**Architecture:** Mirror the homepage's existing two-component header pattern (`Header` for ≥md, `MobileHeader` for xs). Lift the languages list into a shared module so both header components can render a locale toggle. Use CSS `@media (prefers-reduced-motion: reduce)` inside `sx` for declarative animations, `useMediaQuery` for JS timers, and `useMediaQuery("(hover: hover) and (pointer: fine)")` for the hover-vs-tap dropdown gate.

**Tech Stack:** Next.js 15 App Router · React 19 · MUI 7 (`sx` props, `useMediaQuery`) · `next-intl` · TypeScript strict.

**Spec:** `docs/superpowers/specs/2026-04-28-responsiveness-design.md`

**Verification convention:** the project has no automated test framework. After every code-changing step, run:
```bash
npm run typecheck
npm run lint
```
Then perform the manual viewport check called out in the task and commit.

---

## Task 1: Extract LANGUAGES into a shared module

Foundation for §2. Pure refactor — no behavior change. Validates the import path that `mobileHeader.tsx` will reuse in Task 3.

**Files:**
- Create: `src/components/layout/locales.ts`
- Modify: `src/components/layout/languageSwitcher.tsx` (lines ~15–26 — remove the inline `LANGUAGES`, `LocaleCode`, `Language` declarations and import from new file)

- [ ] **Step 1: Create `locales.ts`**

```typescript
import type { ComponentType } from "react";
import USFlag from "@/components/icons/USFlag";
import ITFlag from "@/components/icons/ITFlag";

export type LocaleCode = "en" | "it";

export type Language = {
    code: LocaleCode;
    label: string;
    Flag: ComponentType<{ size?: number }>;
};

export const LANGUAGES: Language[] = [
    { code: "en", label: "EN", Flag: USFlag },
    { code: "it", label: "IT", Flag: ITFlag },
];
```

- [ ] **Step 2: Update `languageSwitcher.tsx` to import from `locales.ts`**

Change the imports near the top of the file:

```typescript
"use client";

import { useRef, useState, useTransition } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import theme from "@/theme/theme";
import { LANGUAGES, type LocaleCode } from "@/components/layout/locales";
```

Delete the now-redundant inline declarations (the `type LocaleCode = "en" | "it";`, the `type Language = { ... };`, the `const LANGUAGES: Language[] = [...]` block, and the `import USFlag from ".../USFlag"` / `import ITFlag from ".../ITFlag"` and the `type ComponentType` import if it becomes unused).

The rest of the file stays identical.

- [ ] **Step 3: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass with no errors.

- [ ] **Step 4: Manual smoke test**

```bash
npm run dev
```

Visit `http://localhost:3000/`, click the language switcher in the desktop header, switch to EN, verify the route changes to `/en` and the page is in English. Switch back to IT.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/locales.ts src/components/layout/languageSwitcher.tsx
git commit -m "refactor(layout): extract LANGUAGES to shared module"
```

---

## Task 2: Show mobile header on inner pages

Combines the desktop-Header `display` gate with rendering `MobileHeader` on the 5 inner pages. Done in a single commit so the intermediate state never has both headers visible at once on a phone.

**Files:**
- Modify: `src/components/layout/header.tsx` (the root `<Stack component="header">` — line 78–95 area)
- Modify: `src/app/[locale]/consultants/page.tsx`
- Modify: `src/app/[locale]/about/who-are-we/page.tsx`
- Modify: `src/app/[locale]/about/mission/page.tsx`
- Modify: `src/app/[locale]/about/vision/page.tsx`
- Modify: `src/app/[locale]/about/values/page.tsx`

- [ ] **Step 1: Gate the desktop Header to ≥md**

In `src/components/layout/header.tsx`, the root `<Stack component="header">`. Add `display: { xs: "none", md: "flex" }` to its prop list (Stack's default is `flex`; adding it explicitly through the responsive object overrides at `xs`):

```tsx
<Stack
    component="header"
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    px={1}
    py={1}
    borderRadius={20}
    width="92vw"
    maxWidth="1400px"
    marginX="auto"
    gap={3}
    marginTop={1.5}
    display={{ xs: "none", md: "flex" }}
    sx={{
        background: theme.palette.headerGradient,
        backdropFilter: "blur(10px)",
    }}
>
```

(Only the `display={{ xs: "none", md: "flex" }}` line is new; the rest is unchanged.)

- [ ] **Step 2: Render `MobileHeader` on `/consultants`**

In `src/app/[locale]/consultants/page.tsx`, add the import and render `<MobileHeader />` immediately above `<Header />`:

```tsx
import { Stack } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";

import Header from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile/mobileHeader";
import Footer from "@/components/layout/footer";
import ConsultantsHero from "@/components/consultantsPage/consultantsHero";
import ConsultantsCategories from "@/components/consultantsPage/consultantsCategories";
import ConsultantsMarquee from "@/components/consultantsPage/consultantsMarquee";

export default async function ConsultantsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <MobileHeader />
                <Header />
                <ConsultantsHero />
                <ConsultantsCategories />
                <ConsultantsMarquee />
            </Stack>
            <Footer />
        </Stack>
    );
}
```

- [ ] **Step 3: Render `MobileHeader` on `/about/who-are-we`**

In `src/app/[locale]/about/who-are-we/page.tsx`, add the same import and render `<MobileHeader />` above `<Header />`:

```tsx
import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Header from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile/mobileHeader";
import Footer from "@/components/layout/footer";
import WhoAreWeHero from "@/components/whoAreWe/whoAreWeHero";
import WhoAreWeCapabilities from "@/components/whoAreWe/whoAreWeCapabilities";

export default async function WhoAreWePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <MobileHeader />
                <Header />
                <WhoAreWeHero />
                <WhoAreWeCapabilities />
            </Stack>
            <Footer />
        </Stack>
    );
}
```

- [ ] **Step 4: Render `MobileHeader` on `/about/mission`**

In `src/app/[locale]/about/mission/page.tsx`, apply the same change:

```tsx
import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Header from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile/mobileHeader";
import Footer from "@/components/layout/footer";
import MissionHero from "@/components/mission/missionHero";
import MissionCapabilities from "@/components/mission/missionCapabilities";

export default async function MissionPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <MobileHeader />
                <Header />
                <MissionHero />
                <MissionCapabilities />
            </Stack>
            <Footer />
        </Stack>
    );
}
```

- [ ] **Step 5: Render `MobileHeader` on `/about/vision`**

In `src/app/[locale]/about/vision/page.tsx`:

```tsx
import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Header from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile/mobileHeader";
import Footer from "@/components/layout/footer";
import VisionHero from "@/components/vision/visionHero";
import VisionCapabilities from "@/components/vision/visionCapabilities";

export default async function VisionPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <MobileHeader />
                <Header />
                <VisionHero />
                <VisionCapabilities />
            </Stack>
            <Footer />
        </Stack>
    );
}
```

- [ ] **Step 6: Render `MobileHeader` on `/about/values`**

In `src/app/[locale]/about/values/page.tsx`:

```tsx
import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Header from "@/components/layout/header";
import MobileHeader from "@/components/layout/mobile/mobileHeader";
import Footer from "@/components/layout/footer";
import ValuesHero from "@/components/values/valuesHero";
import ValuesCards from "@/components/values/valuesCards";

export default async function ValuesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <MobileHeader />
                <Header />
                <ValuesHero />
                <ValuesCards />
            </Stack>
            <Footer />
        </Stack>
    );
}
```

- [ ] **Step 7: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 8: Manual viewport check**

In a browser with DevTools open and device toolbar enabled, set viewport to 390 × 844 (iPhone). Visit each of the 5 inner pages:

- `/consultants`
- `/about/who-are-we`
- `/about/mission`
- `/about/vision`
- `/about/values`

Expected: each shows the rounded mobile header pill with the menu icon — no desktop nav bar. Tap the menu icon, drawer opens.

Then resize the viewport to 1280 × 800. Reload each page. Expected: each shows the desktop pill nav, no mobile header.

Finally, visit `/` and `/mobile` at both viewports. Expected: identical to before this task — the homepage uses `Hero` / `MobileHero` which embed the right header internally; the new gate on `Header` only hides it at `xs`, which the desktop Hero is itself never shown at (because the middleware rewrites mobile to `/mobile`).

- [ ] **Step 9: Commit**

```bash
git add src/components/layout/header.tsx \
        src/app/[locale]/consultants/page.tsx \
        src/app/[locale]/about/who-are-we/page.tsx \
        src/app/[locale]/about/mission/page.tsx \
        src/app/[locale]/about/vision/page.tsx \
        src/app/[locale]/about/values/page.tsx
git commit -m "fix(layout): render mobile header on inner pages"
```

---

## Task 3: Locale toggle inside the mobile drawer

Replaces the hardcoded `<USFlag />` + `"EN"` block in the drawer's bottom section with a real two-pill locale toggle. Reads the active locale, switches via `next-intl`'s typed `useRouter`/`usePathname`. Depends on Task 1 for `LANGUAGES`.

**Files:**
- Modify: `src/components/layout/mobile/mobileHeader.tsx`

- [ ] **Step 1: Update imports and grab locale + router**

At the top of `src/components/layout/mobile/mobileHeader.tsx`, replace the existing imports of `USFlag` and add the new ones:

```tsx
"use client";

import { useState, useTransition } from "react";
import {
    Box,
    Button,
    Drawer,
    IconButton,
    Link,
    Stack,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import theme from "@/theme/theme";

import logo from "@/assets/logo/logo.png";
import MobileNavAccordion from "@/components/layout/mobile/mobileNavAccordion";
import { LANGUAGES, type LocaleCode } from "@/components/layout/locales";
import { useNavItems } from "@/components/layout/navItems";
import { Link as IntlLink, useRouter, usePathname } from "@/i18n/navigation";
```

(Removed: `USFlag` import. Added: `useTransition`, `useLocale`, `LANGUAGES`/`LocaleCode`, `useRouter`, `usePathname`.)

- [ ] **Step 2: Wire locale state inside the component**

Inside the `MobileHeader` component body, just below the existing `useState` calls and `useTranslations`/`useNavItems` lines, add:

```tsx
    const locale = useLocale() as LocaleCode;
    const router = useRouter();
    const pathname = usePathname();
    const [, startTransition] = useTransition();

    const handleSelectLocale = (code: LocaleCode) => {
        if (code === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: code });
        });
        handleClose();
    };
```

(`handleClose` is the existing function that already closes the drawer and resets `openSection`.)

- [ ] **Step 3: Replace the hardcoded flag block with the two-pill toggle**

Locate the block currently rendering `<USFlag size={24} />` + `<Typography>EN</Typography>` (around lines 244–263, inside the `<Box sx={{ mt: 4, pt: 3, borderTop: ... }}>` near the bottom of the drawer). Replace the entire `<Stack direction="row" alignItems="center" gap={0.75} sx={{ mb: 2.5 }}>` containing the US flag + EN with this:

```tsx
                    <Stack direction="row" gap={1} sx={{ mb: 2.5 }}>
                        {LANGUAGES.map(({ code, label, Flag }) => {
                            const active = code === locale;
                            return (
                                <Button
                                    key={code}
                                    name={`locale-${code}`}
                                    onClick={() => handleSelectLocale(code)}
                                    disableRipple
                                    sx={{
                                        flex: 1,
                                        py: 1.25,
                                        px: 2,
                                        borderRadius: 20,
                                        textTransform: "none",
                                        background: active
                                            ? theme.palette.titleGradient
                                            : "#FFFFFF",
                                        border: active
                                            ? "none"
                                            : "1px solid rgba(30, 43, 66, 0.12)",
                                        color: active ? "#FFFFFF" : "#1E2B42",
                                        boxShadow: active
                                            ? "0px 4px 12px rgba(88, 124, 255, 0.30)"
                                            : "0px 4px 12px rgba(15, 27, 60, 0.04)",
                                        "&:hover": {
                                            background: active
                                                ? theme.palette.titleGradient
                                                : "#FFFFFF",
                                            filter: "brightness(1.02)",
                                        },
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <Flag size={20} />
                                        <Typography
                                            sx={{
                                                fontSize: 15,
                                                fontWeight: 500,
                                                color: active
                                                    ? "#FFFFFF"
                                                    : "#1E2B42",
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                    </Stack>
                                </Button>
                            );
                        })}
                    </Stack>
```

The two pill `Button`s replace the old `Stack` that held the flag + label. The wrapping `<Box sx={{ mt: 4, pt: 3, borderTop: ... }}>` and the two app-link buttons (`Our Experts`, `Login / Sign Up`) below stay as they are.

- [ ] **Step 4: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass. If lint complains about an unused `useTransition` return (we destructure as `[, startTransition]`), the existing rule `argsIgnorePattern: "^_"` does not cover destructure positions, but an empty position `[, x]` is silently allowed. If it does flag it, replace with `const [_isPending, startTransition] = useTransition();`.

- [ ] **Step 5: Manual viewport check**

```bash
npm run dev
```

At a 390×844 viewport, visit `http://localhost:3000/`. Open the drawer. Verify near the bottom you see two pills: **🇮🇹 IT** (filled gradient — the default locale is `it`) and **🇺🇸 EN** (outlined). Tap **EN** — the drawer closes, the URL becomes `/en`, the page reloads in English.

Open the drawer again on `/en`. Verify **EN** is now the filled pill and **IT** is outlined. Tap **IT** — drawer closes, URL goes back to `/`.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/mobile/mobileHeader.tsx
git commit -m "feat(header): add locale toggle to mobile drawer"
```

---

## Task 4: Reduced motion — pulse dots

Adds the `@media (prefers-reduced-motion: reduce)` rule to all three pulse dot `sx` blocks. CSS-only — no client-component conversion needed.

**Files:**
- Modify: `src/components/hero/hero.tsx`
- Modify: `src/components/hero/mobile/mobileHero.tsx`
- Modify: `src/components/consultants/consultantsSection.tsx`

- [ ] **Step 1: Update `hero.tsx` pulse dot**

In `src/components/hero/hero.tsx`, locate the `<Stack width={8} height={8}>` block (~lines 51–71). Inside its `sx={{ ... }}`, add the media query rule **before** the `@keyframes pulse` block:

```tsx
                    <Stack
                        width={8}
                        height={8}
                        borderRadius={"50%"}
                        sx={{
                            background: theme.palette.success.main,
                            boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                            animation: "pulse 2s infinite",
                            "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                            },
                            "@keyframes pulse": {
                                "0%": {
                                    boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                },
                                "50%": {
                                    boxShadow: `0 0 20px 1px ${theme.palette.success.main}`,
                                },
                                "100%": {
                                    boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                },
                            },
                        }}
                    />
```

- [ ] **Step 2: Update `mobileHero.tsx` pulse dot**

In `src/components/hero/mobile/mobileHero.tsx`, find the same shape (around lines 52–72) and add the same `@media` rule before the `@keyframes pulse`:

```tsx
                    <Stack
                        width={8}
                        height={8}
                        borderRadius={"50%"}
                        sx={{
                            background: theme.palette.success.main,
                            boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                            animation: "pulse 2s infinite",
                            "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                            },
                            "@keyframes pulse": {
                                "0%": {
                                    boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                },
                                "50%": {
                                    boxShadow: `0 0 20px 1px ${theme.palette.success.main}`,
                                },
                                "100%": {
                                    boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                },
                            },
                        }}
                    />
```

- [ ] **Step 3: Update `consultantsSection.tsx` pulse dot**

In `src/components/consultants/consultantsSection.tsx`, find the equivalent dot block (~lines 86–106) and apply the same change:

```tsx
                        <Stack
                            width={8}
                            height={8}
                            borderRadius={"50%"}
                            sx={{
                                background: theme.palette.success.main,
                                boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                animation: "pulse 2s infinite",
                                "@media (prefers-reduced-motion: reduce)": {
                                    animation: "none",
                                },
                                "@keyframes pulse": {
                                    "0%": {
                                        boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                    },
                                    "50%": {
                                        boxShadow: `0 0 20px 1px ${theme.palette.success.main}`,
                                    },
                                    "100%": {
                                        boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                    },
                                },
                            }}
                        />
```

- [ ] **Step 4: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 5: Manual reduced-motion check**

```bash
npm run dev
```

Open `http://localhost:3000/` in Chrome DevTools. Open the command palette (Cmd/Ctrl+Shift+P), type "reduced motion", select **Emulate CSS prefers-reduced-motion: reduce**.

Expected: the green dot in the hero badge stops glowing/pulsing (it stays solid). Scroll to the consultants banner section — its green dot is also static. Visit `/mobile` (or use a phone viewport): the mobile hero's green dot is static.

Toggle reduced-motion off — pulses resume.

- [ ] **Step 6: Commit**

```bash
git add src/components/hero/hero.tsx \
        src/components/hero/mobile/mobileHero.tsx \
        src/components/consultants/consultantsSection.tsx
git commit -m "feat(motion): respect prefers-reduced-motion on pulse dots"
```

---

## Task 5: Reduced motion — shimmer gradient buttons

Adds the same media query to the three shimmer-button `sx` blocks.

**Files:**
- Modify: `src/components/layout/header.tsx` (`gradientButtonSx`)
- Modify: `src/components/layout/mobile/mobileHeader.tsx` (`gradientPillSx`)
- Modify: `src/components/consultantsPage/consultantsHero.tsx` (the inline `Button` for "Find a Consultant")

- [ ] **Step 1: Update `header.tsx` `gradientButtonSx`**

In `src/components/layout/header.tsx`, locate the `gradientButtonSx` constant (~lines 14–33). Add the media query before the `@keyframes bgShimmer`:

```tsx
const gradientButtonSx = {
    height: "fit-content",
    paddingX: 2.5,
    paddingY: 1,
    borderRadius: 20,
    background: "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
    backgroundSize: "200% 200%",
    animation: "bgShimmer 3s ease infinite",
    textTransform: "none",
    transition: "transform 0.25s ease, filter 0.25s ease",
    "&:hover": {
        transform: "scale(1.05)",
        filter: "brightness(1.2)",
    },
    "@media (prefers-reduced-motion: reduce)": {
        animation: "none",
    },
    "@keyframes bgShimmer": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};
```

- [ ] **Step 2: Update `mobileHeader.tsx` `gradientPillSx`**

In `src/components/layout/mobile/mobileHeader.tsx`, locate `gradientPillSx` (~lines 25–43). Add the media query before `@keyframes bgShimmer`:

```tsx
const gradientPillSx = {
    width: "100%",
    paddingX: 3,
    paddingY: 1.25,
    borderRadius: 20,
    background: "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
    backgroundSize: "200% 200%",
    animation: "bgShimmer 3s ease infinite",
    textTransform: "none",
    "&:hover": {
        background: "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
        filter: "brightness(1.05)",
    },
    "@media (prefers-reduced-motion: reduce)": {
        animation: "none",
    },
    "@keyframes bgShimmer": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};
```

- [ ] **Step 3: Update `consultantsHero.tsx` "Find a Consultant" button**

In `src/components/consultantsPage/consultantsHero.tsx`, locate the inline `Button sx={...}` (around lines 96–125 — the one with `animation: "bgShimmer 3s ease infinite"`). Add the media query right after the `&:hover` block and before `@keyframes bgShimmer`:

```tsx
                        <Button
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 20,
                                py: 1.25,
                                px: 4,
                                fontWeight: 500,
                                fontSize: 15,
                                color: "#FFFFFF",
                                background:
                                    "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                                backgroundSize: "200% 200%",
                                animation: "bgShimmer 3s ease infinite",
                                boxShadow:
                                    "0px 12px 28px rgba(91, 58, 158, 0.35)",
                                transition:
                                    "transform 0.25s ease, filter 0.25s ease",
                                "&:hover": {
                                    transform: "scale(1.04)",
                                    filter: "brightness(1.1)",
                                    background:
                                        "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                                },
                                "@media (prefers-reduced-motion: reduce)": {
                                    animation: "none",
                                },
                                "@keyframes bgShimmer": {
                                    "0%": { backgroundPosition: "0% 50%" },
                                    "50%": { backgroundPosition: "100% 50%" },
                                    "100%": { backgroundPosition: "0% 50%" },
                                },
                            }}
                        >
                            {t("findConsultantCta")}
                        </Button>
```

- [ ] **Step 4: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 5: Manual reduced-motion check**

With reduced-motion emulation on, visit `/` and observe the desktop "Log in / Sign up" button — it shows a gradient but no longer animates. Open the mobile drawer (resize to phone viewport) and confirm the same on the "Log in / Sign up" pill at the bottom. Visit `/consultants`, find the "Find a Consultant" button — gradient is static.

Toggle reduced-motion off — animations resume.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/header.tsx \
        src/components/layout/mobile/mobileHeader.tsx \
        src/components/consultantsPage/consultantsHero.tsx
git commit -m "feat(motion): respect prefers-reduced-motion on shimmer buttons"
```

---

## Task 6: Reduced motion — marquees

Freeze both marquees when reduced motion is requested.

**Files:**
- Modify: `src/components/testimonials/testimonialsSection.tsx`
- Modify: `src/components/consultantsPage/consultantsMarquee.tsx`

- [ ] **Step 1: Update `testimonialsSection.tsx` marquee**

In `src/components/testimonials/testimonialsSection.tsx`, locate the inner `<Box>` of `Marquee` (~lines 76–98) which has `animation: direction === "left" ? "marqueeLeft 90s linear infinite" : "marqueeRight 90s linear infinite"`. Add the media query right after the animation declaration and before the keyframes:

```tsx
        <Box
            sx={{
                display: "flex",
                width: "fit-content",
                animation:
                    direction === "left"
                        ? "marqueeLeft 90s linear infinite"
                        : "marqueeRight 90s linear infinite",
                "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                },
                "@keyframes marqueeLeft": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-33.3333%)" },
                },
                "@keyframes marqueeRight": {
                    "0%": { transform: "translateX(-33.3333%)" },
                    "100%": { transform: "translateX(0)" },
                },
            }}
        >
```

- [ ] **Step 2: Update `consultantsMarquee.tsx`**

In `src/components/consultantsPage/consultantsMarquee.tsx`, locate the marquee `<Box>` (~lines 187–203):

```tsx
const Marquee = ({ items }: { items: Consultant[] }) => (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
        <Box
            sx={{
                display: "flex",
                width: "fit-content",
                animation: "consultantsMarquee 90s linear infinite",
                "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                },
                "@keyframes consultantsMarquee": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-33.3333%)" },
                },
            }}
        >
            {[...items, ...items, ...items].map((c, i) => (
                <ConsultantCard key={`${c.name}-${i}`} consultant={c} />
            ))}
        </Box>
    </Box>
);
```

- [ ] **Step 3: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Manual reduced-motion check**

With reduced-motion emulation on, visit `/` and scroll to the testimonials section — both rows of cards are stationary. Visit `/consultants`, scroll to the consultant card marquee — it's stationary. Toggle reduced-motion off, animations resume.

- [ ] **Step 5: Commit**

```bash
git add src/components/testimonials/testimonialsSection.tsx \
        src/components/consultantsPage/consultantsMarquee.tsx
git commit -m "feat(motion): respect prefers-reduced-motion on marquees"
```

---

## Task 7: Reduced motion — pause autoplay sliders

JS-driven autoplay timers gated by `useMediaQuery`. Touch swipe and dot navigation continue to work.

**Files:**
- Modify: `src/components/bento/mobileBusinessPlanSlider.tsx`
- Modify: `src/components/consultantsPage/consultantsHero.tsx`

- [ ] **Step 1: Gate `mobileBusinessPlanSlider.tsx` autoplay**

In `src/components/bento/mobileBusinessPlanSlider.tsx`, add the `useMediaQuery` import to the existing MUI import:

```tsx
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
```

Inside the component body, just below `const SLIDES = t.raw("slider.slides") as Slide[];`, add the hook call:

```tsx
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
```

Then update the autoplay `useEffect` to check it:

```tsx
  useEffect(() => {
    if (SLIDES.length <= 1 || prefersReducedMotion) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(id);
  }, [SLIDES.length, prefersReducedMotion]);
```

(Also add `SLIDES.length` to the deps to satisfy `react-hooks/exhaustive-deps` once we touch the array.)

- [ ] **Step 2: Gate `consultantsHero.tsx` screenshot rotation**

In `src/components/consultantsPage/consultantsHero.tsx`, add the `useMediaQuery` import to the existing MUI import:

```tsx
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
```

Inside the component, just below the existing `const [active, setActive] = useState(0);`, add:

```tsx
    const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
```

Then update the rotation `useEffect`:

```tsx
    useEffect(() => {
        if (prefersReducedMotion) return;
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % SCREENSHOTS.length);
        }, SLIDE_MS);
        return () => clearInterval(id);
    }, [prefersReducedMotion]);
```

- [ ] **Step 3: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Manual reduced-motion check**

With reduced-motion emulation on, at a phone viewport visit `/` (which redirects to `/mobile`). Scroll to the bento slider — it stays on the first slide indefinitely. Tap a dot — slide changes. Swipe — slide changes.

Visit `/consultants` at any viewport. The hero shows the first screenshot only. Tap the second dot — that screenshot appears. The auto-rotation does not resume.

Toggle reduced-motion off — autoplay resumes on both.

- [ ] **Step 5: Commit**

```bash
git add src/components/bento/mobileBusinessPlanSlider.tsx \
        src/components/consultantsPage/consultantsHero.tsx
git commit -m "feat(motion): pause autoplay sliders when prefers-reduced-motion"
```

---

## Task 8: Tap-friendly dropdowns

Disable the hover-open behavior on touch devices. Click-to-toggle is preserved.

**Files:**
- Modify: `src/components/layout/headerDropdown.tsx`
- Modify: `src/components/layout/languageSwitcher.tsx`

- [ ] **Step 1: Gate hover handlers in `headerDropdown.tsx`**

In `src/components/layout/headerDropdown.tsx`, add `useMediaQuery` to the MUI import:

```tsx
import { Box, Link, Stack, Typography, useMediaQuery } from "@mui/material";
```

Inside the component body, just below the existing timer refs (after `const closeTimer = useRef...`), add:

```tsx
    const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
```

Then change the trigger `<Box>` to use the gated handlers:

```tsx
        <Box
            onMouseEnter={canHover ? handleEnter : undefined}
            onMouseLeave={canHover ? handleLeave : undefined}
            sx={{ position: "relative" }}
        >
```

- [ ] **Step 2: Gate hover handlers in `languageSwitcher.tsx`**

In `src/components/layout/languageSwitcher.tsx`, add `useMediaQuery` to the MUI import:

```tsx
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
```

Inside the component body, just below the existing `closeTimer` ref, add:

```tsx
    const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");
```

Update the outer `<Box>` similarly:

```tsx
        <Box
            onMouseEnter={canHover ? handleEnter : undefined}
            onMouseLeave={canHover ? handleLeave : undefined}
            sx={{ position: "relative", opacity: isPending ? 0.6 : 1 }}
        >
```

- [ ] **Step 3: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Manual touch check**

In Chrome DevTools, enable device emulation with a touch profile (e.g., iPad Pro landscape, ~1366×1024). Visit `/`. Tap **Product**, **Resources**, **About us**, the language switcher — each should open on tap and close on second tap or tap-elsewhere. Confirm there is no "open then immediately close" behavior from emulated hover.

Now switch to a mouse profile / disable touch. Hover over **Product** — opens after the existing 150ms delay. Move away — closes after the 200ms delay.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/headerDropdown.tsx \
        src/components/layout/languageSwitcher.tsx
git commit -m "fix(layout): tap-only dropdowns on touch screens"
```

---

## Task 9: Hero title and subtitle width

Replaces percentage widths with `maxWidth` so the desktop hero text uses sensible measure on all viewports ≥ md.

**Files:**
- Modify: `src/components/hero/hero.tsx`

- [ ] **Step 1: Update title width**

In `src/components/hero/hero.tsx`, locate the title `<Typography variant="h2">` (~lines 89–101). Change `width: "60%"` to use a maxWidth pattern:

```tsx
                <Typography
                    variant="h2"
                    sx={{
                        color: "#3F4DCC",
                        width: "100%",
                        maxWidth: 720,
                        px: { md: 2 },
                        textAlign: "center",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        whiteSpace: "pre-line",
                    }}
                >
                    {t("title")}
                </Typography>
```

- [ ] **Step 2: Update subtitle width**

In the same file, the subtitle `<Typography variant="subtitle1">` immediately below (~lines 103–112). Change `width: "40%"` to:

```tsx
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: theme.palette.secondary.main,
                        width: "100%",
                        maxWidth: 480,
                        px: { md: 2 },
                        textAlign: "center",
                    }}
                >
                    {t("subtitle")}
                </Typography>
```

- [ ] **Step 3: Run typecheck and lint**

```bash
npm run typecheck
npm run lint
```

Expected: both pass.

- [ ] **Step 4: Manual viewport check**

Visit `/` at viewports of 900, 1024, 1280, and 1440 px wide. At each, the hero title and subtitle remain centered, line-break naturally, and don't get squashed into a narrow column. At ≥1280 px the title should be capped at 720 px and centered; the subtitle capped at 480 px. Visit `/mobile` (or phone viewport) — mobile hero is unchanged.

- [ ] **Step 5: Commit**

```bash
git add src/components/hero/hero.tsx
git commit -m "style(hero): use maxWidth for desktop hero title/subtitle"
```

---

## Done

All 9 tasks land 9 commits. After Task 9, the spec's verification table should pass end-to-end. Re-read `docs/superpowers/specs/2026-04-28-responsiveness-design.md` § "Verification" and confirm each item.

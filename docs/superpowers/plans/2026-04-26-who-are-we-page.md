# "Who we are" Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new `/about/who-are-we` marketing page (responsive desktop + mobile, server components) and wire it to the existing "Who we are" entry inside the `About us` header dropdown.

**Architecture:** One page entry at `src/app/about/who-are-we/page.tsx` composes `<Header />`, two new section components (`WhoAreWeHero`, `WhoAreWeCapabilities`), and `<Footer />`. Both new sections are stateless server components — no hooks, no client-side state. The layout mirrors the homepage's composition pattern (`src/app/page.tsx`) for consistency. The portrait image is relocated from `assets/whoarewe/img.png` (project-root) to `src/assets/whoarewe/img.png` to enable static-import and Next.js automatic optimization, matching every other section's asset convention.

**Tech Stack:** Next.js 15 App Router · React 19 · TypeScript · MUI 7 (Emotion) · iconsax-reactjs · `next/image`.

**Verification model:** No unit tests — codebase has no test framework configured. Verification is `npm run check` (lint + typecheck) plus visual confirmation in `npm run dev` at desktop and mobile widths.

**Spec:** `docs/superpowers/specs/2026-04-26-who-are-we-page-design.md`

---

## File map

**New files**
- `src/assets/whoarewe/img.png` — relocated portrait (binary, ~1.8 MB)
- `src/components/whoAreWe/whoAreWeHero.tsx` — hero section (~110 lines)
- `src/components/whoAreWe/whoAreWeCapabilities.tsx` — capabilities heading + 5-card grid (~140 lines)
- `src/app/about/who-are-we/page.tsx` — page entry composing chrome + sections (~25 lines)

**Modify**
- `src/components/layout/navItems.tsx` line 46 — change the "Who we are" entry's `href` from `"#"` to `"/about/who-are-we"`

**Delete**
- `assets/whoarewe/img.png` (project-root copy — moved into `src/assets/`)

---

## Task 1: Relocate the portrait image into `src/assets/`

**Files:**
- Create: `src/assets/whoarewe/img.png`
- Delete: `assets/whoarewe/img.png`

The project's static-import convention puts all section assets under `src/assets/<section>/`. The image was supplied at the project-root `assets/whoarewe/img.png`; move it into the conventional location so the components below can `import portrait from "@/assets/whoarewe/img.png"`.

- [ ] **Step 1: Create the destination directory**

Run:
```bash
mkdir -p src/assets/whoarewe
```

Expected: no output. Directory now exists.

- [ ] **Step 2: Move the file**

Run:
```bash
git mv assets/whoarewe/img.png src/assets/whoarewe/img.png
```

Expected: no output. `git status` should show one rename.

- [ ] **Step 3: Remove the now-empty project-root `assets/` directory if it has nothing else**

Run:
```bash
rmdir assets/whoarewe assets 2>/dev/null || true
```

Expected: `assets/whoarewe` and `assets` are removed if empty; otherwise the command silently no-ops.

- [ ] **Step 4: Verify**

Run:
```bash
ls -la src/assets/whoarewe/
```

Expected: shows `img.png` with the original size (~1.8 MB).

- [ ] **Step 5: Commit**

```bash
git add src/assets/whoarewe/img.png
# `assets/whoarewe/img.png` deletion is already staged from `git mv`
git status   # confirm: 1 renamed file, no other changes
git commit -m "chore: relocate Who-we-are portrait into src/assets/

Move assets/whoarewe/img.png → src/assets/whoarewe/img.png to match the
project-wide static-import convention used by every other section.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Build `WhoAreWeHero`

**Files:**
- Create: `src/components/whoAreWe/whoAreWeHero.tsx`

**Layout:** Two-column on `md`+ (text left, image right), single column on `xs`/`sm` with image **above** text. Title uses the existing `titleGradient` purple. Two bullet items use a small purple dot (`#3F6DDD`) + two-line copy.

- [ ] **Step 1: Create the component file**

Create `src/components/whoAreWe/whoAreWeHero.tsx` with this content:

```tsx
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import portrait from "@/assets/whoarewe/img.png";

const BULLET_COLOR = "#3F6DDD";

const BULLETS = [
    "Today, doing business requires multidisciplinary skills, diverse tools, and often high costs.",
    "SiliconPlan combines all of this in a single, accessible, and guided platform.",
];

const WhoAreWeHero = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 14 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Box
                    sx={{
                        order: { xs: 1, md: 2 },
                        flex: 1,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src={portrait}
                        alt="Woman holding a laptop, looking up"
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: 600,
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </Box>

                <Stack
                    spacing={{ xs: 2.5, md: 3 }}
                    flex={1}
                    sx={{
                        order: { xs: 2, md: 1 },
                        width: "100%",
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 36, md: 56 },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Who we are
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: { xs: 16, md: 20 },
                            lineHeight: 1.5,
                            maxWidth: 520,
                        }}
                    >
                        SiliconPlan is a digital platform that helps aspiring
                        entrepreneurs, professionals, and organizations
                        transform an idea into a structured, presentable, and
                        financeable project.
                    </Typography>

                    <Stack spacing={{ xs: 1.5, md: 2 }} sx={{ pt: 1 }}>
                        {BULLETS.map((text) => (
                            <Stack
                                key={text}
                                direction="row"
                                alignItems="flex-start"
                                spacing={1.5}
                            >
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        bgcolor: BULLET_COLOR,
                                        mt: { xs: "8px", md: "10px" },
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontSize: { xs: 14, md: 16 },
                                        lineHeight: 1.5,
                                        maxWidth: 480,
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default WhoAreWeHero;
```

**Notes for the engineer:**
- `order: { xs: 2, md: 1 }` on the text column and `order: { xs: 1, md: 2 }` on the image column flip the visual order on mobile so the image renders **above** the text without restructuring the markup.
- `priority` on the image is correct because this image is above-the-fold on initial load.
- `BULLET_COLOR = "#3F6DDD"` is the indigo stop from `theme.palette.titleGradient`. We don't use `theme.palette.primary.main` because that's dark navy (`rgba(30, 43, 66, 1)`), not the design's purple.
- Imports follow the same pattern as `aiDocumentGenerationSection.tsx` — local `@/` alias, MUI named imports first, then `next/image`, then theme, then assets.

- [ ] **Step 2: Run typecheck**

Run:
```bash
npm run typecheck
```

Expected: exits 0. No errors. (If you get "Cannot find module '@/assets/whoarewe/img.png'", confirm Task 1's image relocation completed and the file exists at the path.)

- [ ] **Step 3: Run lint**

Run:
```bash
npm run lint
```

Expected: exits 0 (warnings okay, errors not).

- [ ] **Step 4: Commit**

```bash
git add src/components/whoAreWe/whoAreWeHero.tsx
git commit -m "feat: add WhoAreWeHero component

Hero section for the new /about/who-are-we page — two-column layout
(text left, portrait right) on desktop, stacked with image above text
on mobile. Uses titleGradient on the title and an indigo bullet dot
matching the design.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Build `WhoAreWeCapabilities`

**Files:**
- Create: `src/components/whoAreWe/whoAreWeCapabilities.tsx`

**Layout:** Heading text above a responsive grid (`1fr` on `xs`, two columns on `sm`, three columns on `md`+). 5 cards in DOM order; the last row's third cell stays empty on `md`+.

- [ ] **Step 1: Create the component file**

Create `src/components/whoAreWe/whoAreWeCapabilities.tsx` with this content:

```tsx
import { Box, Stack, Typography } from "@mui/material";
import {
    Element4,
    Note1,
    PresentionChart,
    Chart2,
    Chart,
} from "iconsax-reactjs";
import type { ComponentType } from "react";
import theme from "@/theme/theme";

import type { IconProps } from "@/components/layout/navItems";

const ICON_COLOR = "#3F6DDD";
const ICON_TINT_BG = "rgba(63, 109, 221, 0.08)";
const CARD_BORDER = "#E5E7EB";

const PLACEHOLDER =
    "Access Business Plans, Canvas models, and Pitch Decks directly inside the platform.";

type CapabilityCard = {
    Icon: ComponentType<IconProps>;
    title: string;
    description: string;
};

const CARDS: CapabilityCard[] = [
    { Icon: Element4, title: "Business Model", description: PLACEHOLDER },
    { Icon: Note1, title: "Business Plan", description: PLACEHOLDER },
    {
        Icon: PresentionChart,
        title: "Pitch Deck",
        description: PLACEHOLDER,
    },
    {
        Icon: Chart2,
        title: "Financial Analysis",
        description: PLACEHOLDER,
    },
    {
        Icon: Chart,
        title: "Pre-Money Valuations",
        description: PLACEHOLDER,
    },
];

const WhoAreWeCapabilities = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 12 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                spacing={{ xs: 4, md: 6 }}
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Typography
                    component="h2"
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: { xs: 22, md: 28 },
                        fontWeight: 500,
                        lineHeight: 1.4,
                        maxWidth: 880,
                    }}
                >
                    Through an approach based on artificial intelligence, a
                    structured methodology, and human support, we enable users
                    to develop
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: 3,
                    }}
                >
                    {CARDS.map(({ Icon, title, description }) => (
                        <Stack
                            key={title}
                            spacing={2.5}
                            sx={{
                                p: 3,
                                bgcolor: "#FFFFFF",
                                borderRadius: 4,
                                border: `1px solid ${CARD_BORDER}`,
                                transition:
                                    "box-shadow 0.2s ease, transform 0.2s ease",
                                "&:hover": {
                                    boxShadow:
                                        "0px 12px 24px rgba(15, 27, 60, 0.06)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 3,
                                    bgcolor: ICON_TINT_BG,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    size={28}
                                    color={ICON_COLOR}
                                    variant="Bold"
                                />
                            </Box>

                            <Typography
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontSize: 18,
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                }}
                            >
                                {title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontSize: 14,
                                    lineHeight: 1.5,
                                }}
                            >
                                {description}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
};

export default WhoAreWeCapabilities;
```

**Notes for the engineer:**
- Reuses `IconProps` from `@/components/layout/navItems` (already exported on line 18). Don't redefine it.
- `Element4`, `Note1`, `PresentionChart`, `Chart` are the same iconsax exports already used by `navItems.tsx`. `Chart2` is the new one for "Financial Analysis".
- Variant `"Bold"` on the iconsax icons gives the filled look that matches the design's solid icon style. If the icons look too heavy when viewed in browser, `"Bulk"` is the closest alternative — change once after visual review.
- `gridTemplateColumns: "repeat(3, 1fr)"` on `md` naturally leaves the third column of the second row empty (5 cards in 3 cols = 2 rows with one empty cell), matching the design.
- The hover lift (`translateY(-2px)`) is a small affordance — the design isn't explicit about hover, but every other card surface in this codebase has one, so this stays consistent.

- [ ] **Step 2: Run typecheck**

Run:
```bash
npm run typecheck
```

Expected: exits 0.

- [ ] **Step 3: Run lint**

Run:
```bash
npm run lint
```

Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/whoAreWe/whoAreWeCapabilities.tsx
git commit -m "feat: add WhoAreWeCapabilities component

5-card grid (Business Model, Business Plan, Pitch Deck, Financial
Analysis, Pre-Money Valuations) under a 'Through an approach based on
artificial intelligence...' heading, for the /about/who-are-we page.
Card descriptions are placeholder copy for now.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Build the page entry

**Files:**
- Create: `src/app/about/who-are-we/page.tsx`

**Layout:** Mirrors `src/app/page.tsx` exactly — outer `<Stack component="main">` with `background.default`, inner `<Stack>` wrapping header + sections with `py={1.5} px={2}`, `<Footer />` outside the inner stack.

- [ ] **Step 1: Create the page directory and file**

Run:
```bash
mkdir -p src/app/about/who-are-we
```

Then create `src/app/about/who-are-we/page.tsx` with this content:

```tsx
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhoAreWeHero from "@/components/whoAreWe/whoAreWeHero";
import WhoAreWeCapabilities from "@/components/whoAreWe/whoAreWeCapabilities";

export default function WhoAreWePage() {
    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <Header />
                <WhoAreWeHero />
                <WhoAreWeCapabilities />
            </Stack>
            <Footer />
        </Stack>
    );
}
```

**Notes for the engineer:**
- The header is rendered as a normal flow child here, **not** absolutely positioned inside a hero section like the homepage. The `Header` component is self-centering (`marginX="auto"`, `width="92vw"`) so it works fine in normal flow.
- No metadata block, no `generateStaticParams`, no `revalidate` — matches `src/app/page.tsx` which has none either.
- Both inner sections are server components, so this page stays a server component — no `"use client"` directive.

- [ ] **Step 2: Run typecheck**

Run:
```bash
npm run typecheck
```

Expected: exits 0.

- [ ] **Step 3: Run lint**

Run:
```bash
npm run lint
```

Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/app/about/who-are-we/page.tsx
git commit -m "feat: add /about/who-are-we page entry

Composes Header + WhoAreWeHero + WhoAreWeCapabilities + Footer for the
new Who-we-are page. Mirrors the homepage's page composition pattern.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Wire the header dropdown link

**Files:**
- Modify: `src/components/layout/navItems.tsx` line 46

The "Who we are" entry in `ABOUT_ITEMS` already exists with `href: "#"`. Swap it to point to the new page.

- [ ] **Step 1: Edit the file**

In `src/components/layout/navItems.tsx`, change line 46 from:

```ts
    { Icon: Profile, label: "Who we are", href: "#" },
```

to:

```ts
    { Icon: Profile, label: "Who we are", href: "/about/who-are-we" },
```

The other three entries (`Mission`, `Vision`, `Values`) stay with `href: "#"`.

- [ ] **Step 2: Run typecheck**

Run:
```bash
npm run typecheck
```

Expected: exits 0.

- [ ] **Step 3: Run lint**

Run:
```bash
npm run lint
```

Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/navItems.tsx
git commit -m "feat: wire 'Who we are' header dropdown to /about/who-are-we

The dropdown entry was a placeholder; now navigates to the new page.

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Final verification

**Files:** none.

This task is a manual / visual smoke check. No code changes, no commit.

- [ ] **Step 1: Run the full check script**

Run:
```bash
npm run check
```

Expected: exits 0 (next lint + tsc --noEmit both clean).

- [ ] **Step 2: Run a production build**

Run:
```bash
npm run build
```

Expected: exits 0. Confirm `/about/who-are-we` appears in the route list printed by Next.js (something like `○ /about/who-are-we`). If it's missing, the page file is in the wrong location.

- [ ] **Step 3: Start the dev server**

Run:
```bash
npm run dev
```

Expected: server boots on `http://localhost:3000`.

- [ ] **Step 4: Visual check — desktop**

In a desktop-width browser (≥1200px wide):

1. Navigate to `http://localhost:3000`.
2. Hover the **About us** entry in the header. The dropdown opens; "Who we are" should be the first item.
3. Click "Who we are". URL changes to `/about/who-are-we` and the page loads.
4. Confirm the header is at the top, hero section has the title "Who we are" in purple gradient, body paragraph below it, two bullet points below that, portrait on the right.
5. Scroll down. The "Through an approach based on artificial intelligence..." heading appears, with 5 cards arranged 3-on-top-row, 2-on-bottom-row.
6. Confirm the footer renders below the cards (Smartool Srl info, social icons).
7. Hover any of the 5 cards — should lift slightly with a soft shadow.

- [ ] **Step 5: Visual check — mobile**

Open dev-tools and switch to a mobile viewport (375×812 / iPhone preset is fine):

1. Navigate to `http://localhost:3000/about/who-are-we` directly (the middleware mobile-rewrite only applies to `/`, so this URL stays as-is).
2. Confirm the layout single-columns: image **above** the text and bullet points in the hero, then the heading, then the cards stacked one-per-row.
3. Open the mobile drawer (hamburger icon if mobile header has one), expand "About us", tap "Who we are" — should still navigate to `/about/who-are-we`.

- [ ] **Step 6: Stop the dev server**

`Ctrl+C` in the terminal running `npm run dev`.

- [ ] **Step 7: Confirm the git log is clean**

Run:
```bash
git log --oneline -10
```

Expected: 5 new commits on top of the spec commit (image relocation + 4 feature commits + 1 link wiring commit). Working tree is clean (`git status` shows nothing).

If everything passes, the page is ready.

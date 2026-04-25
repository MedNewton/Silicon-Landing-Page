# Header Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the desktop and mobile headers with a richer navigation that adds three hover-triggered dropdowns (Product, Resources, About us), additional plain links, a decorative language switcher, and an updated CTA pill — all driven by a shared nav-items module so desktop and mobile stay in lock-step.

**Architecture:** One reusable `HeaderDropdown` component renders all three desktop menus from props; one reusable `MobileNavAccordion` does the same inside the existing mobile drawer. A shared `navItems.tsx` module exports the three nav-item arrays with their iconsax-reactjs icons and `href="#"` placeholders, consumed by both surfaces. Hover-state on desktop is debounced with `setTimeout` (150ms open, 200ms close) so the cursor can travel from trigger to card.

**Tech Stack:** Next.js 15 App Router · React 19 · TypeScript · MUI 7 (Emotion) · iconsax-reactjs (new dependency).

**Verification model:** No unit tests — codebase has no test framework configured. Verification is: `npm run check` (lint + typecheck) plus visual confirmation in `npm run dev` at desktop and mobile widths.

**Spec:** `docs/superpowers/specs/2026-04-25-header-redesign-design.md`

---

## File map

**New files**
- `src/components/icons/USFlag.tsx` — circular US-flag SVG (~25 lines)
- `src/components/layout/navItems.tsx` — exported nav-item arrays with iconsax icons (~60 lines)
- `src/components/layout/headerDropdown.tsx` — desktop hover dropdown (~110 lines)
- `src/components/layout/mobile/mobileNavAccordion.tsx` — mobile accordion section (~90 lines)

**Rewrites**
- `src/components/layout/header.tsx`
- `src/components/layout/mobile/mobileHeader.tsx`

**Dependency**
- `iconsax-reactjs` added to `package.json`

---

## Task 1: Install `iconsax-reactjs`

**Files:**
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Install the package**

Run from project root:

```bash
npm install iconsax-reactjs
```

Expected: dependency added under `"dependencies"` in `package.json` with a version like `^X.Y.Z`. `package-lock.json` updated.

- [ ] **Step 2: Verify install**

Run:

```bash
node -e "const { Book1, ArrowDown2 } = require('iconsax-reactjs'); console.log(typeof Book1, typeof ArrowDown2);"
```

Expected output: `function function`. If either logs `undefined`, the icon name is wrong — see Task 3 for the fallback list.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add iconsax-reactjs for header icons"
```

---

## Task 2: Create `USFlag` icon component

**Files:**
- Create: `src/components/icons/USFlag.tsx`

- [ ] **Step 1: Create the file**

```tsx
import * as React from "react";

type USFlagProps = {
  size?: number;
};

const USFlag = ({ size = 22 }: USFlagProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="United States flag"
    >
      <defs>
        <clipPath id="us-flag-clip">
          <circle cx="12" cy="12" r="11" />
        </clipPath>
      </defs>
      <g clipPath="url(#us-flag-clip)">
        <rect width="24" height="24" fill="#FFFFFF" />
        {[0, 2, 4, 6, 8, 10, 12].map((y) => (
          <rect key={y} x="0" y={y * (24 / 13)} width="24" height={24 / 13} fill="#B22234" />
        ))}
        <rect x="0" y="0" width="11" height={24 * 7 / 13} fill="#3C3B6E" />
      </g>
      <circle cx="12" cy="12" r="11" fill="none" stroke="rgba(15, 27, 60, 0.12)" strokeWidth="1" />
    </svg>
  );
};

export default USFlag;
```

- [ ] **Step 2: Verify it compiles**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors mentioning `USFlag.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/icons/USFlag.tsx
git commit -m "feat: add circular US flag SVG component"
```

---

## Task 3: Create shared `navItems.tsx` module

**Files:**
- Create: `src/components/layout/navItems.tsx`

This module exports three `NavItem[]` arrays consumed by both desktop and mobile. Icon names below are the spec's first-pick list. If any name fails to import (`undefined`), substitute the noted fallback and update this file.

- [ ] **Step 1: Create the file**

```tsx
import {
    Book1,
    Hierarchy,
    Note1,
    PresentionChart,
    Element4,
    Chart,
    Magicpen,
    Edit2,
    MessageQuestion,
    Profile,
    Sun1,
    TickSquare,
    Star1,
} from "iconsax-reactjs";
import type { ComponentType } from "react";

export type IconProps = {
    size?: string | number;
    color?: string;
    variant?: "Linear" | "Outline" | "Bold" | "Bulk";
};

export type NavItem = {
    Icon: ComponentType<IconProps>;
    label: string;
    href: string;
};

export const PRODUCT_ITEMS: NavItem[] = [
    { Icon: Book1, label: "Overview", href: "#" },
    { Icon: Hierarchy, label: "How it works", href: "#" },
    { Icon: Note1, label: "Business Plan", href: "#" },
    { Icon: PresentionChart, label: "Pitch Deck", href: "#" },
    { Icon: Element4, label: "Business Model Canvas", href: "#" },
    { Icon: Chart, label: "Pre-Money Valuation", href: "#" },
];

export const RESOURCES_ITEMS: NavItem[] = [
    { Icon: Magicpen, label: "Contact Us", href: "#" },
    { Icon: Edit2, label: "Blog", href: "#" },
    { Icon: MessageQuestion, label: "FAQ", href: "#" },
];

export const ABOUT_ITEMS: NavItem[] = [
    { Icon: Profile, label: "Who we are", href: "#" },
    { Icon: Sun1, label: "Mission", href: "#" },
    { Icon: TickSquare, label: "Vision", href: "#" },
    { Icon: Star1, label: "Values", href: "#" },
];
```

**Fallback names if any import is undefined:**
- `Hierarchy` → try `Diagram`
- `Note1` → try `NoteText` or `Note`
- `Element4` → try `Element3`
- `Chart` → try `Chart1` or `ChartSquare`
- `Edit2` → try `Edit`
- `Profile` → try `ProfileCircle` or `User`
- `Sun1` → try `Sun`
- `Star1` → try `Star`

- [ ] **Step 2: Verify it compiles**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors. If you see `Module '"iconsax-reactjs"' has no exported member 'X'` for any icon, swap to the noted fallback above and re-run.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/navItems.tsx
git commit -m "feat: add shared nav-items module with iconsax icons"
```

---

## Task 4: Create `HeaderDropdown` component

**Files:**
- Create: `src/components/layout/headerDropdown.tsx`

Hover-triggered dropdown used by desktop Product / Resources / About us menus. Uses debounced timers so the cursor can travel from trigger to card without snapping shut.

- [ ] **Step 1: Create the file**

```tsx
"use client";

import { useRef, useState } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import theme from "@/theme/theme";
import type { NavItem } from "./navItems";

const OPEN_DELAY_MS = 150;
const CLOSE_DELAY_MS = 200;

type HeaderDropdownProps = {
    label: string;
    items: NavItem[];
};

const HeaderDropdown = ({ label, items }: HeaderDropdownProps) => {
    const [open, setOpen] = useState(false);
    const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimers = () => {
        if (openTimer.current) {
            clearTimeout(openTimer.current);
            openTimer.current = null;
        }
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const handleEnter = () => {
        clearTimers();
        openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    };

    const handleLeave = () => {
        clearTimers();
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
    };

    const handleTriggerClick = () => {
        clearTimers();
        setOpen((prev) => !prev);
    };

    return (
        <Box
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            sx={{ position: "relative" }}
        >
            <Stack
                direction="row"
                alignItems="center"
                gap={0.5}
                onClick={handleTriggerClick}
                sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "text.primary" },
                    userSelect: "none",
                }}
            >
                <Typography variant="body2">{label}</Typography>
                <ArrowDown2
                    size={14}
                    color={theme.palette.text.secondary}
                    variant="Linear"
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                    }}
                />
            </Stack>
            {open && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "calc(100% + 12px)",
                        left: 0,
                        minWidth: 240,
                        bgcolor: "#FFFFFF",
                        borderRadius: 4,
                        boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                        p: 1.5,
                        zIndex: 20,
                    }}
                >
                    <Stack gap={0.25}>
                        {items.map(({ Icon, label: itemLabel, href }) => (
                            <Link
                                key={itemLabel}
                                href={href}
                                underline="none"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    py: 1.25,
                                    px: 2,
                                    borderRadius: 3,
                                    color: "#1E2B42",
                                    transition: "background 0.15s ease",
                                    "&:hover": {
                                        backgroundColor: "rgba(63, 109, 221, 0.06)",
                                    },
                                }}
                            >
                                <Icon size={22} color="#3D537B" variant="Linear" />
                                <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                                    {itemLabel}
                                </Typography>
                            </Link>
                        ))}
                    </Stack>
                </Box>
            )}
        </Box>
    );
};

export default HeaderDropdown;
```

- [ ] **Step 2: Verify it compiles**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors mentioning `headerDropdown.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/headerDropdown.tsx
git commit -m "feat: add HeaderDropdown for hover-triggered menus"
```

---

## Task 5: Rewrite desktop `Header`

**Files:**
- Rewrite: `src/components/layout/header.tsx`

New layout: Logo · Product▾ · Consultants · Pricing · Resources▾ · About us▾ · Become a consultant · 🇺🇸 EN · Our Experts · Log In / Sign Up.

- [ ] **Step 1: Replace file contents**

```tsx
import { Button, Stack, Typography, Link } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";
import HeaderDropdown from "@/components/layout/headerDropdown";
import USFlag from "@/components/icons/USFlag";
import {
    PRODUCT_ITEMS,
    RESOURCES_ITEMS,
    ABOUT_ITEMS,
} from "@/components/layout/navItems";

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
    "@keyframes bgShimmer": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};

const whitePillSx = {
    height: "fit-content",
    paddingX: 2.5,
    paddingY: 1,
    borderRadius: 20,
    background: "#FFFFFF",
    textTransform: "none",
    transition: "transform 0.25s ease, filter 0.25s ease",
    boxShadow: "0px 4px 12px rgba(15, 27, 60, 0.06)",
    "&:hover": {
        background: "#FFFFFF",
        transform: "scale(1.04)",
    },
};

const buttonTextWhiteSx = {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#FFFFFF",
    whiteSpace: "nowrap",
};

const buttonTextDarkSx = {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#1E2B42",
    whiteSpace: "nowrap",
};

const plainLinkSx = {
    color: "text.secondary",
    transition: "color 0.2s ease",
    whiteSpace: "nowrap",
    "&:hover": {
        color: "text.primary",
    },
};

const Header = () => {
    return (
        <Stack
            component="header"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            px={1}
            py={1}
            borderRadius={20}
            width="fit-content"
            maxWidth="95vw"
            marginX="auto"
            gap={3}
            marginTop={1.5}
            sx={{
                background: theme.palette.headerGradient,
                backdropFilter: "blur(10px)",
            }}
        >
            <Stack sx={{ height: "fit-content" }}>
                <Image src={logo} alt="logo" width={40} height={40} />
            </Stack>

            <Stack direction="row" alignItems="center" gap={3}>
                <HeaderDropdown label="Product" items={PRODUCT_ITEMS} />
                <Link href="#" underline="none" variant="body2" sx={plainLinkSx}>
                    Consultants
                </Link>
                <Link href="#" underline="none" variant="body2" sx={plainLinkSx}>
                    Pricing
                </Link>
                <HeaderDropdown label="Resources" items={RESOURCES_ITEMS} />
                <HeaderDropdown label="About us" items={ABOUT_ITEMS} />
                <Link href="#" underline="none" variant="body2" sx={plainLinkSx}>
                    Become a consultant
                </Link>
            </Stack>

            <Stack direction="row" alignItems="center" gap={1.5}>
                <Stack
                    direction="row"
                    alignItems="center"
                    gap={0.75}
                    sx={{ cursor: "default", userSelect: "none" }}
                >
                    <USFlag size={22} />
                    <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 500 }}>
                        EN
                    </Typography>
                </Stack>
                <Link href="https://app.silicon-plan.live/?nav=consultants" target="_blank">
                    <Button name="our-experts" sx={whitePillSx} disableRipple>
                        <Typography sx={buttonTextDarkSx}>Our Experts</Typography>
                    </Button>
                </Link>
                <Link href="https://app.silicon-plan.live" target="_blank">
                    <Button name="login-signup" sx={gradientButtonSx} disableRipple>
                        <Typography sx={buttonTextWhiteSx}>Log In / Sign Up</Typography>
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Header;
```

- [ ] **Step 2: Verify lint + typecheck**

Run:

```bash
npm run check
```

Expected: passes. If a lint rule complains about unused imports or `any`, fix inline.

- [ ] **Step 3: Visual verify desktop**

Run:

```bash
npm run dev
```

Open `http://localhost:3000` in a desktop-width window. Confirm:
- All nav items render in the order Logo · Product▾ · Consultants · Pricing · Resources▾ · About us▾ · Become a consultant · 🇺🇸 EN · Our Experts · Log In / Sign Up
- Hovering Product, Resources, or About us shows the white card with icon+label rows after a brief delay
- Moving the cursor from trigger down into the card does NOT close it
- Moving the cursor away closes it after a brief delay
- Clicking the trigger toggles open/closed (keyboard/touch fallback)
- Chevron rotates 180° when open
- "Log In / Sign Up" still has the shimmer gradient
- "Our Experts" is a white pill

Stop the dev server with Ctrl+C when done.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/header.tsx
git commit -m "feat: redesign desktop header with dropdowns and language switcher"
```

---

## Task 6: Create `MobileNavAccordion` component

**Files:**
- Create: `src/components/layout/mobile/mobileNavAccordion.tsx`

Accordion section for the mobile drawer. Receives `openId` / `onToggle` from the parent so only one section is open at a time across the drawer.

- [ ] **Step 1: Create the file**

```tsx
"use client";

import { Box, Collapse, Link, Stack, Typography } from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import theme from "@/theme/theme";
import type { NavItem } from "@/components/layout/navItems";

type MobileNavAccordionProps = {
    id: string;
    label: string;
    items: NavItem[];
    openId: string | null;
    onToggle: (id: string) => void;
    onItemClick: () => void;
};

const MobileNavAccordion = ({
    id,
    label,
    items,
    openId,
    onToggle,
    onItemClick,
}: MobileNavAccordionProps) => {
    const isOpen = openId === id;

    return (
        <Box sx={{ width: "100%" }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                onClick={() => onToggle(id)}
                sx={{
                    cursor: "pointer",
                    width: "100%",
                    py: 0.5,
                    userSelect: "none",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#1E2B42",
                    }}
                >
                    {label}
                </Typography>
                <ArrowDown2
                    size={20}
                    color={theme.palette.text.secondary}
                    variant="Linear"
                    style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                    }}
                />
            </Stack>
            <Collapse in={isOpen} unmountOnExit>
                <Stack gap={1.5} pt={2} pl={1}>
                    {items.map(({ Icon, label: itemLabel, href }) => (
                        <Link
                            key={itemLabel}
                            href={href}
                            underline="none"
                            onClick={onItemClick}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                color: "#1E2B42",
                            }}
                        >
                            <Icon size={22} color="#3D537B" variant="Linear" />
                            <Typography sx={{ fontSize: 17, fontWeight: 400 }}>
                                {itemLabel}
                            </Typography>
                        </Link>
                    ))}
                </Stack>
            </Collapse>
        </Box>
    );
};

export default MobileNavAccordion;
```

- [ ] **Step 2: Verify it compiles**

Run:

```bash
npx tsc --noEmit
```

Expected: no errors mentioning `mobileNavAccordion.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/mobile/mobileNavAccordion.tsx
git commit -m "feat: add MobileNavAccordion for collapsible drawer sections"
```

---

## Task 7: Rewrite `MobileHeader`

**Files:**
- Rewrite: `src/components/layout/mobile/mobileHeader.tsx`

Top bar stays the same. Drawer body gets accordions for Product / Resources / About us, plus the new flat links and the two action pills.

- [ ] **Step 1: Replace file contents**

```tsx
"use client";

import { useState } from "react";
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
import theme from "@/theme/theme";

import logo from "@/assets/logo/logo.png";
import MobileNavAccordion from "@/components/layout/mobile/mobileNavAccordion";
import USFlag from "@/components/icons/USFlag";
import {
    PRODUCT_ITEMS,
    RESOURCES_ITEMS,
    ABOUT_ITEMS,
} from "@/components/layout/navItems";

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
    "@keyframes bgShimmer": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};

const whitePillSx = {
    width: "100%",
    paddingX: 3,
    paddingY: 1.25,
    borderRadius: 20,
    background: "#FFFFFF",
    textTransform: "none",
    boxShadow: "0px 4px 12px rgba(15, 27, 60, 0.06)",
    "&:hover": {
        background: "#FFFFFF",
        filter: "brightness(0.98)",
    },
};

const flatLinkSx = {
    fontSize: 20,
    fontWeight: 400,
    color: "#1E2B42",
    py: 0.5,
};

const MobileHeader = () => {
    const [open, setOpen] = useState(false);
    const [openSection, setOpenSection] = useState<string | null>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setOpenSection(null);
    };

    const handleToggleSection = (id: string) => {
        setOpenSection((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <Stack
                component="header"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                px={0.5}
                py={0.5}
                borderRadius={20}
                width="95%"
                marginX="auto"
                marginTop={1.5}
                sx={{
                    background: theme.palette.headerGradient,
                    backdropFilter: "blur(10px)",
                    display: { xs: "flex", md: "none" },
                }}
            >
                <Image src={logo} alt="logo" width={60} height={60} />
                <Typography variant="h6" fontWeight={400} color="#1E2B42">
                    Silicon Plan
                </Typography>
                <Button
                    name="open-menu"
                    size="small"
                    onClick={handleOpen}
                    sx={{
                        minWidth: 0,
                        width: 50,
                        height: 50,
                        padding: 0.5,
                        borderRadius: "50%",
                        background: "rgba(255, 255, 255, 0.68)",
                        textTransform: "none",
                        "&:hover": {
                            background: "rgba(255, 255, 255, 0.9)",
                        },
                    }}
                >
                    <MenuIcon fontSize="medium" sx={{ color: "#1E2B42" }} />
                </Button>
            </Stack>

            <Drawer
                anchor="right"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: "100vw",
                        background:
                            "linear-gradient(273deg, rgba(101, 71, 165, 0.10) -6.55%, rgba(63, 109, 221, 0.10) 106.12%)",
                        backdropFilter: "blur(28px)",
                        boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.35)",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
                        px: 2.5,
                        pt: 1.5,
                        pb: 4,
                    },
                }}
                slotProps={{
                    backdrop: {
                        sx: {
                            backgroundColor: "rgba(6, 10, 24, 0.25)",
                            backdropFilter: "blur(20px)",
                        },
                    },
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Image src={logo} alt="logo" width={60} height={60} />
                    <IconButton
                        name="close-menu"
                        onClick={handleClose}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.9)",
                            borderRadius: "50%",
                            p: 2,
                            "&:hover": {
                                backgroundColor: "#FFFFFF",
                            },
                        }}
                    >
                        <CloseIcon fontSize="medium" sx={{ color: "#1E2B42" }} />
                    </IconButton>
                </Stack>

                <Stack spacing={2} sx={{ mt: 5, width: "100%" }}>
                    <MobileNavAccordion
                        id="product"
                        label="Product"
                        items={PRODUCT_ITEMS}
                        openId={openSection}
                        onToggle={handleToggleSection}
                        onItemClick={handleClose}
                    />
                    <Link
                        href="#"
                        underline="none"
                        onClick={handleClose}
                        sx={flatLinkSx}
                    >
                        Consultants
                    </Link>
                    <Link
                        href="#"
                        underline="none"
                        onClick={handleClose}
                        sx={flatLinkSx}
                    >
                        Pricing
                    </Link>
                    <MobileNavAccordion
                        id="resources"
                        label="Resources"
                        items={RESOURCES_ITEMS}
                        openId={openSection}
                        onToggle={handleToggleSection}
                        onItemClick={handleClose}
                    />
                    <MobileNavAccordion
                        id="about"
                        label="About us"
                        items={ABOUT_ITEMS}
                        openId={openSection}
                        onToggle={handleToggleSection}
                        onItemClick={handleClose}
                    />
                    <Link
                        href="#"
                        underline="none"
                        onClick={handleClose}
                        sx={flatLinkSx}
                    >
                        Become a consultant
                    </Link>
                </Stack>

                <Box
                    sx={{
                        mt: 4,
                        pt: 3,
                        borderTop: "1px solid rgba(30, 43, 66, 0.1)",
                    }}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={0.75}
                        sx={{ mb: 2.5 }}
                    >
                        <USFlag size={24} />
                        <Typography
                            sx={{ fontSize: 16, color: "text.secondary", fontWeight: 500 }}
                        >
                            EN
                        </Typography>
                    </Stack>
                    <Stack spacing={1.5}>
                        <Link
                            href="https://app.silicon-plan.live/?nav=consultants"
                            target="_blank"
                            onClick={handleClose}
                        >
                            <Button name="our-experts" sx={whitePillSx} disableRipple>
                                <Typography
                                    sx={{ fontSize: 15, fontWeight: 500, color: "#1E2B42" }}
                                >
                                    Our Experts
                                </Typography>
                            </Button>
                        </Link>
                        <Link
                            href="https://app.silicon-plan.live"
                            target="_blank"
                            onClick={handleClose}
                        >
                            <Button name="login-signup" sx={gradientPillSx} disableRipple>
                                <Typography
                                    sx={{ fontSize: 15, fontWeight: 500, color: "#FFFFFF" }}
                                >
                                    Log In / Sign Up
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
};

export default MobileHeader;
```

- [ ] **Step 2: Verify lint + typecheck**

Run:

```bash
npm run check
```

Expected: passes.

- [ ] **Step 3: Visual verify mobile**

Run:

```bash
npm run dev
```

Open `http://localhost:3000/mobile` directly (the middleware rewrite is UA-based; visiting `/mobile` directly avoids needing to spoof a UA). Confirm:
- Top bar shows logo, "Silicon Plan" text, hamburger button (unchanged)
- Tapping the hamburger opens the right-side drawer with the new content
- The flat links (Consultants, Pricing, Become a consultant) render in the right order
- Tapping Product expands the 6-item list with iconsax icons
- Tapping Resources while Product is open closes Product and opens Resources
- Tapping About us while Resources is open closes Resources and opens About us
- Tapping any sub-item closes the entire drawer
- The bottom section shows 🇺🇸 EN, then a white "Our Experts" pill, then a gradient "Log In / Sign Up" pill
- Both pills are full-width

Stop the dev server with Ctrl+C when done.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/mobile/mobileHeader.tsx
git commit -m "feat: redesign mobile drawer with accordion nav sections"
```

---

## Task 8: Final lint + typecheck

**Files:** None (verification only)

- [ ] **Step 1: Run check**

```bash
npm run check
```

Expected: passes with zero errors and zero warnings related to the new files.

- [ ] **Step 2: If anything fails**

Fix inline. Common things to watch for:
- Unused imports → remove the import
- `any` types → narrow to the right shape (use `NavItem`, `IconProps`, etc.)
- Missing dependency in `useEffect` (none expected here, but watch for it)

- [ ] **Step 3: If fixes were needed, commit**

```bash
git add -A
git commit -m "fix: resolve lint/typecheck issues in header refactor"
```

If `npm run check` passed cleanly the first time, skip this step — no commit needed.

---

## Task 9: Cross-surface visual smoke check

**Files:** None (verification only)

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Verify desktop at `http://localhost:3000`**

Quick run-through:
- All three dropdowns open on hover, close on leave with the travel-bridge intact
- Hover-to-card travel does not close the menu
- "Log In / Sign Up" gradient still shimmers
- Layout does not overflow at 1280px width

- [ ] **Step 3: Verify mobile at `http://localhost:3000/mobile`**

Quick run-through:
- Drawer opens, all three accordions work, only one is open at a time
- Tapping a sub-item closes the drawer
- Bottom action pills are full-width and styled correctly

- [ ] **Step 4: Stop dev server**

Ctrl+C.

No commit for this task — it is verification only. If any issue is found, return to the corresponding earlier task to fix and re-commit.

---

## Self-Review

**Spec coverage check:**
- Desktop header layout (Logo + 6 nav + 🇺🇸 EN + 2 pills) → Task 5 ✓
- Three desktop dropdowns with hover behavior → Tasks 3, 4, 5 ✓
- Mobile header drawer with accordion sections → Tasks 6, 7 ✓
- Decorative US flag + EN → Task 2 (USFlag), Tasks 5 + 7 (rendering) ✓
- iconsax-reactjs dependency → Task 1 ✓
- Shared nav-items module → Task 3 ✓
- Reusable HeaderDropdown component → Task 4 ✓
- Reusable MobileNavAccordion component → Task 6 ✓
- All new menu items use `href="#"` → Task 3 (every item), Tasks 5 + 7 (top-level flat links) ✓
- "Log In / Sign Up" label change + preserved app URL → Task 5 ✓
- "Our Experts" preserved app URL → Task 5 ✓
- One-section-open-at-a-time on mobile → Task 7 (state lives in `mobileHeader.tsx`) ✓

**Placeholder scan:** No "TBD", "TODO", or "implement later" in any task body. Fallback icon names in Task 3 are explicit alternatives, not placeholders.

**Type consistency:** `NavItem` is defined once in Task 3 and imported by Tasks 4, 6, 7. `IconProps` is defined alongside it. `MobileNavAccordionProps` defines `openId: string | null` and `onToggle: (id: string) => void`; the parent in Task 7 uses `useState<string | null>(null)` and a handler with the matching signature. Consistent.

**Out-of-spec scope:** None. The plan does not touch Hero, Bento, Pricing, Footer, Theme, or any non-header file.

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

const fullWidthLinkSx = {
    display: "block",
    width: "100%",
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
    const t = useTranslations("header");
    const { productItems, resourcesItems, aboutItems } = useNavItems();
    const locale = useLocale() as LocaleCode;
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setOpenSection(null);
    };

    const handleSelectLocale = (code: LocaleCode) => {
        if (code === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: code });
        });
        handleClose();
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
                    display: { xs: "flex", lg: "none" },
                }}
            >
                <IntlLink
                    href="/"
                    aria-label="Go to homepage"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        textDecoration: "none",
                    }}
                >
                    <Image src={logo} alt="Silicon Plan logo" width={60} height={60} />
                    <Typography variant="h6" fontWeight={400} color="#1E2B42">
                        Silicon Plan
                    </Typography>
                </IntlLink>
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
                        label={t("product")}
                        items={productItems}
                        openId={openSection}
                        onToggle={handleToggleSection}
                        onItemClick={handleClose}
                    />
                    <Link
                        component={IntlLink}
                        href="/consultants"
                        underline="none"
                        onClick={handleClose}
                        sx={flatLinkSx}
                    >
                        {t("consultants")}
                    </Link>
                    <Link
                        component={IntlLink}
                        href="/#pricing"
                        underline="none"
                        onClick={handleClose}
                        sx={flatLinkSx}
                    >
                        {t("pricing")}
                    </Link>
                    <MobileNavAccordion
                        id="resources"
                        label={t("resources")}
                        items={resourcesItems}
                        openId={openSection}
                        onToggle={handleToggleSection}
                        onItemClick={handleClose}
                    />
                    <MobileNavAccordion
                        id="about"
                        label={t("aboutUs")}
                        items={aboutItems}
                        openId={openSection}
                        onToggle={handleToggleSection}
                        onItemClick={handleClose}
                    />
                    <Link
                        component={IntlLink}
                        href="#"
                        underline="none"
                        onClick={handleClose}
                        sx={flatLinkSx}
                    >
                        {t("becomeConsultant")}
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
                        gap={1}
                        sx={{
                            mb: 2.5,
                            opacity: isPending ? 0.6 : 1,
                            pointerEvents: isPending ? "none" : "auto",
                            transition: "opacity 0.2s ease",
                        }}
                    >
                        {LANGUAGES.map(({ code, label, Flag }) => {
                            const active = code === locale;
                            return (
                                <Button
                                    key={code}
                                    name={`locale-${code}`}
                                    aria-pressed={active}
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
                    <Stack spacing={1.5}>
                        <Link
                            href="https://app.silicon-plan.live/?nav=consultants"
                            target="_blank"
                            onClick={handleClose}
                            sx={fullWidthLinkSx}
                        >
                            <Button name="our-experts" sx={whitePillSx} disableRipple>
                                <Typography
                                    sx={{ fontSize: 15, fontWeight: 500, color: "#1E2B42" }}
                                >
                                    {t("ourExperts")}
                                </Typography>
                            </Button>
                        </Link>
                        <Link
                            href="https://app.silicon-plan.live"
                            target="_blank"
                            onClick={handleClose}
                            sx={fullWidthLinkSx}
                        >
                            <Button name="login-signup" sx={gradientPillSx} disableRipple>
                                <Typography
                                    sx={{ fontSize: 15, fontWeight: 500, color: "#FFFFFF" }}
                                >
                                    {t("loginSignup")}
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

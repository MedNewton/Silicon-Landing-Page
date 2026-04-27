"use client";

import { Button, Stack, Typography, Link } from "@mui/material";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";
import HeaderDropdown from "@/components/layout/headerDropdown";
import LanguageSwitcher from "@/components/layout/languageSwitcher";
import { useNavItems } from "@/components/layout/navItems";
import { Link as IntlLink } from "@/i18n/navigation";

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
    const t = useTranslations("header");
    const { productItems, resourcesItems, aboutItems } = useNavItems();

    return (
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
            sx={{
                background: theme.palette.headerGradient,
                backdropFilter: "blur(10px)",
            }}
        >
            <IntlLink
                href="/"
                aria-label="Go to homepage"
                style={{
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Image src={logo} alt="Silicon Plan logo" width={40} height={40} />
            </IntlLink>

            <Stack direction="row" alignItems="center" gap={3}>
                <HeaderDropdown label={t("product")} items={productItems} />
                <IntlLink href="#" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={plainLinkSx}>{t("consultants")}</Typography>
                </IntlLink>
                <IntlLink href="#" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={plainLinkSx}>{t("pricing")}</Typography>
                </IntlLink>
                <HeaderDropdown label={t("resources")} items={resourcesItems} />
                <HeaderDropdown label={t("aboutUs")} items={aboutItems} />
                <IntlLink href="#" style={{ textDecoration: "none" }}>
                    <Typography variant="body2" sx={plainLinkSx}>{t("becomeConsultant")}</Typography>
                </IntlLink>
            </Stack>

            <Stack direction="row" alignItems="center" gap={1.5}>
                <LanguageSwitcher />
                <Link href="https://app.silicon-plan.live/?nav=consultants" target="_blank">
                    <Button name="our-experts" sx={whitePillSx} disableRipple>
                        <Typography sx={buttonTextDarkSx}>{t("ourExperts")}</Typography>
                    </Button>
                </Link>
                <Link href="https://app.silicon-plan.live" target="_blank">
                    <Button name="login-signup" sx={gradientButtonSx} disableRipple>
                        <Typography sx={buttonTextWhiteSx}>{t("loginSignup")}</Typography>
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Header;

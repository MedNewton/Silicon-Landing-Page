"use client";

import { useEffect, useMemo, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

import logo from "@/assets/logo/logo.png";
import HeaderDropdown, {
  type DropdownItem,
} from "@/components/layout/HeaderDropdown";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export const HEADER_HEIGHT = 72;

// TODO(stage-later): Rewire Accedi + Inizia gratis once dedicated
// login / signup flows exist. For now both point to the app root in a new tab.
const APP_URL = "https://app.silicon-plan.live";

const accediSx = {
  height: 40,
  px: 2.5,
  borderRadius: 999,
  textTransform: "none",
  color: "#1E2B42",
  borderColor: "rgba(30, 43, 66, 0.35)",
  background: "rgba(255, 255, 255, 0.35)",
  backdropFilter: "blur(6px)",
  fontSize: "0.9rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: "#1E2B42",
    background: "rgba(255, 255, 255, 0.6)",
  },
};

const iniziaGratisSx = {
  height: 40,
  px: 3,
  borderRadius: 999,
  textTransform: "none",
  color: "#FFFFFF",
  fontSize: "0.9rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  background:
    "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
  backgroundSize: "200% 200%",
  animation: "bgShimmer 3s ease infinite",
  boxShadow: "0 8px 20px rgba(88, 124, 255, 0.35)",
  transition: "transform 0.25s ease, filter 0.25s ease",
  "&:hover": {
    transform: "translateY(-1px)",
    filter: "brightness(1.08)",
  },
  "@keyframes bgShimmer": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

const prezziLinkSx = {
  px: 1.25,
  py: 0.75,
  borderRadius: 2,
  color: "#3D537B",
  fontSize: "0.95rem",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.2s ease, background 0.2s ease",
  "&:hover": {
    color: "#1E2B42",
    background: "rgba(255, 255, 255, 0.4)",
  },
};

const Header = () => {
  const t = useTranslations("HeaderNav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const prodottoItems = useMemo<DropdownItem[]>(
    () => [
      { label: t("prodottoItems.panoramica"), href: "#prodotto" },
      { label: t("prodottoItems.comeFunziona"), href: "#come-funziona" },
      { label: t("prodottoItems.businessPlan"), href: "#ai-documents" },
      { label: t("prodottoItems.pitchDeck"), href: "#ai-documents" },
      { label: t("prodottoItems.bmc"), href: "#ai-documents" },
      { label: t("prodottoItems.valutazione"), href: "#ai-documents" },
    ],
    [t],
  );

  const consulentiItems = useMemo<DropdownItem[]>(
    () => [
      { label: t("consulentiItems.marketplace"), href: "#consulenti" },
    ],
    [t],
  );

  const risorseItems = useMemo<DropdownItem[]>(
    () => [
      { label: t("risorseItems.contattaci"), href: "#contatti" },
      { label: t("risorseItems.blog"), href: "/blog", localeAware: true },
      { label: t("risorseItems.faq"), href: "#faq" },
    ],
    [t],
  );

  const aboutItems = useMemo<DropdownItem[]>(
    () => [
      { label: t("aboutItems.chiSiamo"), href: "#about" },
      { label: t("aboutItems.target"), href: "#about-target" },
      { label: t("aboutItems.mission"), href: "#about-mission" },
      { label: t("aboutItems.values"), href: "#about-values" },
    ],
    [t],
  );

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: (th) => th.zIndex.appBar + 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        px: 2,
        pt: 1.5,
        pointerEvents: "none",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        py={1}
        borderRadius={999}
        sx={{
          pointerEvents: "auto",
          width: "min(1200px, 92vw)",
          height: HEADER_HEIGHT - 16,
          background: scrolled
            ? "linear-gradient(273.13deg, rgba(101, 71, 165, 0.18) -6.55%, rgba(63, 109, 221, 0.18) 106.12%)"
            : theme.palette.headerGradient,
          backdropFilter: scrolled ? "blur(18px)" : "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.35)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(15, 27, 60, 0.18)"
            : "0 4px 14px rgba(15, 27, 60, 0.08)",
          transition:
            "background 0.25s ease, backdrop-filter 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        <NextLink
          href="/"
          aria-label={t("brand")}
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <Image src={logo} alt={t("brand")} width={40} height={40} />
        </NextLink>

        <Stack direction="row" alignItems="center" gap={0.5}>
          <HeaderDropdown label={t("prodotto")} items={prodottoItems} />
          <HeaderDropdown label={t("consulenti")} items={consulentiItems} />
          <Box
            component="a"
            href="#prezzi"
            sx={prezziLinkSx}
          >
            {t("prezzi")}
          </Box>
          <HeaderDropdown label={t("risorse")} items={risorseItems} />
          <HeaderDropdown label={t("about")} items={aboutItems} />
        </Stack>

        <Stack direction="row" alignItems="center" gap={1.25}>
          <LanguageSwitcher />
          <Button
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={accediSx}
          >
            <Typography component="span" sx={{ fontWeight: 500, fontSize: "0.9rem" }}>
              {t("accedi")}
            </Typography>
          </Button>
          <Button
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={iniziaGratisSx}
          >
            <Typography
              component="span"
              sx={{ fontWeight: 600, fontSize: "0.9rem", whiteSpace: "nowrap" }}
            >
              {t("iniziaGratis")}
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;

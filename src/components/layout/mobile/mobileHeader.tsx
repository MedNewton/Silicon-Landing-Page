"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

import logo from "@/assets/logo/logo.png";
import { Link as LocaleLink } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export const MOBILE_HEADER_HEIGHT = 72;

// TODO(stage-later): Rewire Accedi + Inizia gratis once dedicated
// login / signup flows exist. For now both point to the app root in a new tab.
const APP_URL = "https://app.silicon-plan.live";

type DropdownChild = {
  label: string;
  href: string;
  localeAware?: boolean;
};

type ParentGroup = {
  key: string;
  label: string;
  children: DropdownChild[];
};

const parentRowSx = {
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  px: 1.5,
  py: 1.5,
  borderRadius: 2,
  textTransform: "none",
  fontSize: 18,
  fontWeight: 500,
  color: "#1E2B42",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.35)",
  },
};

const childLinkSx = {
  display: "block",
  width: "100%",
  px: 3,
  py: 1.25,
  borderRadius: 2,
  fontSize: 16,
  fontWeight: 400,
  color: "#3D537B",
  textDecoration: "none",
  transition: "background 0.2s ease, color 0.2s ease",
  "&:hover": {
    color: "#1E2B42",
    background: "rgba(255, 255, 255, 0.35)",
  },
};

const simpleRowSx = {
  ...parentRowSx,
  justifyContent: "flex-start",
  textDecoration: "none",
  display: "flex",
};

const accediSx = {
  flex: 1,
  height: 48,
  borderRadius: 999,
  textTransform: "none",
  color: "#1E2B42",
  borderColor: "rgba(30, 43, 66, 0.35)",
  background: "rgba(255, 255, 255, 0.35)",
  fontSize: "1rem",
  fontWeight: 500,
  whiteSpace: "nowrap",
  "&:hover": {
    borderColor: "#1E2B42",
    background: "rgba(255, 255, 255, 0.6)",
  },
};

const iniziaGratisSx = {
  flex: 1,
  height: 48,
  borderRadius: 999,
  textTransform: "none",
  color: "#FFFFFF",
  fontSize: "1rem",
  fontWeight: 600,
  whiteSpace: "nowrap",
  background:
    "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
  backgroundSize: "200% 200%",
  animation: "bgShimmer 3s ease infinite",
  boxShadow: "0 8px 20px rgba(88, 124, 255, 0.35)",
  "&:hover": {
    filter: "brightness(1.08)",
  },
  "@keyframes bgShimmer": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

const MobileHeader = () => {
  const t = useTranslations("HeaderNav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setExpanded(null);
  };
  const toggle = (key: string) =>
    setExpanded((prev) => (prev === key ? null : key));

  const parents = useMemo<ParentGroup[]>(
    () => [
      {
        key: "prodotto",
        label: t("prodotto"),
        children: [
          { label: t("prodottoItems.panoramica"), href: "#prodotto" },
          { label: t("prodottoItems.comeFunziona"), href: "#come-funziona" },
          { label: t("prodottoItems.businessPlan"), href: "#ai-documents" },
          { label: t("prodottoItems.pitchDeck"), href: "#ai-documents" },
          { label: t("prodottoItems.bmc"), href: "#ai-documents" },
          { label: t("prodottoItems.valutazione"), href: "#ai-documents" },
        ],
      },
      {
        key: "consulenti",
        label: t("consulenti"),
        children: [
          { label: t("consulentiItems.marketplace"), href: "#consulenti" },
        ],
      },
      {
        key: "risorse",
        label: t("risorse"),
        children: [
          { label: t("risorseItems.contattaci"), href: "#contatti" },
          { label: t("risorseItems.blog"), href: "/blog", localeAware: true },
          { label: t("risorseItems.faq"), href: "#faq" },
        ],
      },
      {
        key: "about",
        label: t("about"),
        children: [
          { label: t("aboutItems.chiSiamo"), href: "#about" },
          { label: t("aboutItems.target"), href: "#about-target" },
          { label: t("aboutItems.mission"), href: "#about-mission" },
          { label: t("aboutItems.values"), href: "#about-values" },
        ],
      },
    ],
    [t],
  );

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: (th) => th.zIndex.appBar + 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          px: 1,
          pt: 1,
          pointerEvents: "none",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          px={1}
          py={0.5}
          borderRadius={999}
          sx={{
            pointerEvents: "auto",
            width: "100%",
            height: MOBILE_HEADER_HEIGHT - 8,
            background: scrolled
              ? "linear-gradient(273.13deg, rgba(101, 71, 165, 0.18) -6.55%, rgba(63, 109, 221, 0.18) 106.12%)"
              : theme.palette.headerGradient,
            backdropFilter: scrolled ? "blur(18px)" : "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.35)",
            boxShadow: scrolled
              ? "0 10px 30px rgba(15, 27, 60, 0.2)"
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
            <Image src={logo} alt={t("brand")} width={48} height={48} />
          </NextLink>
          <Typography variant="h6" fontWeight={400} color="#1E2B42">
            {t("brand")}
          </Typography>
          <Stack direction="row" alignItems="center" gap={0.5}>
            <LanguageSwitcher />
            <IconButton
              name="open-menu"
              onClick={handleOpen}
              aria-label={t("openMenu")}
              sx={{
                width: 44,
                height: 44,
                padding: 0.5,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.68)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.9)",
                },
              }}
            >
              <MenuIcon fontSize="medium" sx={{ color: "#1E2B42" }} />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
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
            px: 2,
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
          <Image src={logo} alt={t("brand")} width={60} height={60} />
          <IconButton
            name="close-menu"
            onClick={handleClose}
            aria-label={t("closeMenu")}
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
        <Stack alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
          <LanguageSwitcher />
        </Stack>
        <Stack spacing={0.5} sx={{ mt: 3, flexGrow: 1 }}>
          {parents.map((p) => {
            const isOpen = expanded === p.key;
            return (
              <Box key={p.key}>
                <Button
                  onClick={() => toggle(p.key)}
                  aria-expanded={isOpen}
                  aria-label={`${p.label} — ${isOpen ? t("collapse") : t("expand")}`}
                  sx={parentRowSx}
                  fullWidth
                  endIcon={
                    <KeyboardArrowDownIcon
                      fontSize="medium"
                      sx={{
                        transition: "transform 0.2s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  }
                >
                  <Box sx={{ flexGrow: 1, textAlign: "left" }}>{p.label}</Box>
                </Button>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <Stack spacing={0.25} sx={{ pt: 0.5, pb: 1 }}>
                    {p.children.map((child) => {
                      if (child.localeAware) {
                        return (
                          <LocaleLink
                            key={`${p.key}-${child.label}`}
                            href={child.href}
                            onClick={handleClose}
                            style={{ textDecoration: "none" }}
                          >
                            <Box component="span" sx={childLinkSx}>
                              {child.label}
                            </Box>
                          </LocaleLink>
                        );
                      }
                      return (
                        <Box
                          component="a"
                          key={`${p.key}-${child.label}`}
                          href={child.href}
                          onClick={handleClose}
                          sx={childLinkSx}
                        >
                          {child.label}
                        </Box>
                      );
                    })}
                  </Stack>
                </Collapse>
              </Box>
            );
          })}
          <Box
            component="a"
            href="#prezzi"
            onClick={handleClose}
            sx={simpleRowSx}
          >
            {t("prezzi")}
          </Box>
        </Stack>
        <Stack direction="row" gap={1.25} sx={{ mt: 3 }}>
          <Button
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={accediSx}
          >
            {t("accedi")}
          </Button>
          <Button
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={iniziaGratisSx}
          >
            {t("iniziaGratis")}
          </Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default MobileHeader;

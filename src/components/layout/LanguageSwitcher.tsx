"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Box, Button, Stack } from "@mui/material";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

const switcherContainerSx = {
  display: "flex",
  alignItems: "center",
  p: 0.5,
  borderRadius: 999,
  background:
    "linear-gradient(273deg, rgba(91, 58, 158, 0.15) 0%, rgba(59, 122, 240, 0.15) 100%)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.25)",
};

const chipBaseSx = {
  minWidth: 0,
  px: 1.5,
  py: 0.3,
  borderRadius: 999,
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: 0.4,
  textTransform: "none",
  transition: "all 0.2s ease",
};

const activeChipSx = {
  ...chipBaseSx,
  color: "#FFFFFF",
  background:
    "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
  backgroundSize: "200% 200%",
  animation: "bgShimmer 3s ease infinite",
  boxShadow: "0 4px 14px rgba(88, 124, 255, 0.35)",
  "&:hover": {
    background:
      "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
    filter: "brightness(1.05)",
  },
  "@keyframes bgShimmer": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
};

const inactiveChipSx = {
  ...chipBaseSx,
  color: "#1E2B42",
  background: "transparent",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.35)",
  },
};

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const activeLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: Locale) => {
    if (nextLocale === activeLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Box role="group" aria-label={t("label")} sx={switcherContainerSx}>
      <Stack direction="row" spacing={0.25}>
        {routing.locales.map((locale) => {
          const isActive = locale === activeLocale;
          return (
            <Button
              key={locale}
              name={`switch-locale-${locale}`}
              disableRipple
              disabled={isPending}
              aria-pressed={isActive}
              onClick={() => handleSwitch(locale)}
              sx={isActive ? activeChipSx : inactiveChipSx}
            >
              {locale === "it" ? t("italian") : t("english")}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
}

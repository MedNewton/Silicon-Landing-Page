"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTranslations } from "next-intl";
import logo from "@/assets/logo/logo.png";
import { Link as LocaleLink } from "@/i18n/navigation";

// TODO: confirm onboarding URL
const BECOME_CONSULTANT_URL =
  "https://app.silicon-plan.live/?nav=consultants";

type ColumnLink = {
  label: string;
  href: string;
  external?: boolean;
  localeAware?: boolean;
};

const columnLinkSx = {
  fontSize: 14,
  color: "#C3CCE5",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#FFFFFF",
  },
};

const FooterColumnLink = ({ link }: { link: ColumnLink }) => {
  if (link.localeAware) {
    return (
      <LocaleLink
        href={link.href}
        style={{ textDecoration: "none" }}
      >
        <Typography sx={columnLinkSx}>{link.label}</Typography>
      </LocaleLink>
    );
  }
  return (
    <Typography
      component="a"
      href={link.href}
      {...(link.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      sx={columnLinkSx}
    >
      {link.label}
    </Typography>
  );
};

const MobileFooter = () => {
  const t = useTranslations("Footer");

  const columns: { title: string; links: ColumnLink[] }[] = [
    {
      title: t("columns.prodotto.title"),
      links: [
        {
          label: t("columns.prodotto.links.panoramica"),
          href: "#prodotto",
        },
        {
          label: t("columns.prodotto.links.comeFunziona"),
          href: "#come-funziona",
        },
        {
          label: t("columns.prodotto.links.aiDocuments"),
          href: "#ai-documents",
        },
        {
          label: t("columns.prodotto.links.percorsoGuidato"),
          href: "#percorso-guidato",
        },
      ],
    },
    {
      title: t("columns.consulenti.title"),
      links: [
        {
          label: t("columns.consulenti.links.marketplace"),
          href: "#consulenti",
        },
        {
          label: t("columns.consulenti.links.diventaConsulente"),
          href: BECOME_CONSULTANT_URL,
          external: true,
        },
      ],
    },
    {
      title: t("columns.risorse.title"),
      links: [
        {
          label: t("columns.risorse.links.contattaci"),
          href: "#contatti",
        },
        {
          label: t("columns.risorse.links.blog"),
          href: "/blog",
          localeAware: true,
        },
        {
          label: t("columns.risorse.links.faq"),
          href: "#faq",
        },
      ],
    },
    {
      title: t("columns.azienda.title"),
      links: [
        {
          label: t("columns.azienda.links.chiSiamo"),
          href: "#about",
        },
        {
          label: t("columns.azienda.links.mission"),
          href: "#about-mission",
        },
        {
          label: t("columns.azienda.links.valori"),
          href: "#about-values",
        },
        {
          label: t("columns.azienda.links.prezzi"),
          href: "#prezzi",
        },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 4,
      }}
    >
      <Box
        sx={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
          width: "100%",
          mx: "auto",
          bgcolor: "#1E2B42",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            px: 3,
            py: 4,
          }}
        >
          <Stack spacing={2}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={logo}
                  alt={t("logoAlt")}
                  width={40}
                  height={40}
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#FFFFFF",
                }}
              >
                {t("brand")}
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: "#C3CCE5",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              {t("description")}
              <br />
              {t("address")}
              <br />
              {t("vat")}
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 4,
            }}
          >
            {columns.map((col) => (
              <Stack key={col.title} spacing={1.5} minWidth={0}>
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  {col.title}
                </Typography>
                {col.links.map((link) => (
                  <FooterColumnLink key={link.label} link={link} />
                ))}
              </Stack>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: "#0A1324",
            px: 3,
            py: 2.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
            sx={{ color: "#FFFFFF" }}
            width="100%"
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "#C3CCE5",
              }}
            >
              {t("phone")}
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{ color: "#FFFFFF" }}
                aria-label="Instagram"
                href="https://www.instagram.com/siliconplan/"
                target="_blank"
                component="a"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "#FFFFFF" }}
                aria-label="LinkedIn"
                href="https://www.linkedin.com/company/silicon-plan/"
                target="_blank"
                component="a"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "#FFFFFF" }}
                aria-label="Facebook"
                href="https://www.facebook.com/siliconplan"
                target="_blank"
                component="a"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          <Typography
            component="a"
            href="#"
            sx={{
              fontSize: 13,
              color: "#B6BED8",
              textAlign: "center",
              width: "100%",
              textDecoration: "none",
              transition: "color 0.2s ease",
              "&:hover": { color: "#FFFFFF" },
            }}
          >
            {t("privacyTerms")}
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "#B6BED8",
              textAlign: "center",
              width: "100%",
            }}
          >
            {t("copyright", { year: new Date().getFullYear() })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileFooter;

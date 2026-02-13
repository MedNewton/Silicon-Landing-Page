"use client";

import { Box, Stack, Typography, IconButton, Link } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "@/assets/logo/logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 10,
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
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 10 },
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 6 },
          }}
        >
          <Stack spacing={2} maxWidth={{ xs: "100%", md: 420 }}>
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
                  alt="SiliconPlan logo"
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
                SiliconPlan
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: "#C3CCE5",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Silicon Plan is a Smartool Srl product - Innovative Start-up
              <br />
              Via Eleuterio Ruggiero 123, Caserta (CE)
              <br />
              P.IVA 04738960618
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={{ xs: 6, md: 10 }}
            justifyContent="flex-end"
          >
            <Stack spacing={1.5} minWidth={140}>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Products
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Product Demo Tour
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                For consultant
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Help center
              </Typography>
            </Stack>

            <Stack spacing={1.5} minWidth={160}>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Company
              </Typography>
              <Link href="mailto:info@siliconplan.com" underline="none">
                <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                  Contact us
                </Typography>
              </Link>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Privacy &amp; Terms of Service
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Help center
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            bgcolor: "#0A1324",
            px: { xs: 3, md: 6 },
            py: { xs: 2, md: 2.5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: "#B6BED8",
            }}
          >
            © {new Date().getFullYear()} SiliconPlan. All rights reserved.
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={3}
            sx={{ color: "#FFFFFF" }}
          >
            <Typography
              sx={{
                fontSize: 14,
                color: "#C3CCE5",
              }}
            >
              +39 0823 21 04 74
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
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

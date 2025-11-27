"use client";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "@/assets/logo/logo.png";

const MobileFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: 10,
      }}
    >
      {/* Rounded main panel */}
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
        {/* Top content row */}
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
          {/* Logo + text */}
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
              Empowering businesses worldwide with AI-driven tools for business
              planning, financial forecasting, and investor-ready insights.
            </Typography>
          </Stack>

          {/* Links columns */}
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
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Contact us
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Privacy &amp; Terms of Service
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#C3CCE5" }}>
                Help center
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Bottom bar */}
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
              +00 000 000 000
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{ color: "#FFFFFF" }}
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "#FFFFFF" }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{ color: "#FFFFFF" }}
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
          <Typography
            sx={{
              fontSize: 13,
              color: "#B6BED8",
              textAlign: "center",
              width: "100%",
            }}
          >
            © 2025 SiliconPlan. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileFooter;

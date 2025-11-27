"use client";

import { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import theme from "@/theme/theme";

import logo from "@/assets/logo/logo.png";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* HEADER */}
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
          display: { xs: "flex", md: "none" }, // mobile-only
        }}
      >
        <Image src={logo} alt="logo" width={60} height={60} />
        <Typography variant="h6" fontWeight={400} color="#1E2B42">
          Silicon Plan
        </Typography>
        <Button
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

      {/* MOBILE MENU DRAWER */}
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
        {/* Top row: logo + close */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image src={logo} alt="logo" width={60} height={60} />
          <IconButton
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

        {/* Menu items */}
        <Stack
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            mt: 8,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              color: "#1E2B42",
            }}
          >
            Features
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              color: "#1E2B42",
            }}
          >
            Testimonials
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: 400,
              color: "#1E2B42",
            }}
          >
            Subscribe
          </Typography>
        </Stack>
      </Drawer>
    </>
  );
};

export default MobileHeader;

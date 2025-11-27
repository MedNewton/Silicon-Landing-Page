"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import slide from "@/assets/bento/mobile/slide.png";

type Slide = {
  title: string;
};

const SLIDES: Slide[] = [
  { title: "Business plan creation" },
  { title: "Financial forecasts" },
  { title: "Collaborate with your team" },
  { title: "Investor-ready insights" },
];

const AUTOPLAY_INTERVAL = 4000; // ms

const MobileBusinessPlanSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    const total = SLIDES.length;
    const normalized = (index + total) % total;
    setActiveIndex(normalized);
  };

  const goNext = () => goToSlide(activeIndex + 1);
  const goPrev = () => goToSlide(activeIndex - 1);

  // autoplay
  useEffect(() => {
    if (SLIDES.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(id);
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX || 0;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;

    const endX = e.changedTouches[0]?.clientX || 0;
    const diff = endX - touchStartX.current;
    const threshold = 40; // px

    if (diff > threshold) {
      // swipe right -> previous
      goPrev();
    } else if (diff < -threshold) {
      // swipe left -> next
      goNext();
    }

    touchStartX.current = null;
  };

  const activeSlide = SLIDES[activeIndex];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: 6,
        px: 2,
        backgroundColor: theme.palette.background.default,
        display: { xs: "block", md: "none" }, // mobile-only
      }}
    >
      <Stack spacing={3} alignItems="center" maxWidth="480px" mx="auto">
        {/* Title */}
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.3,
            backgroundImage: theme.palette.titleGradient,
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Everything You Need to Build
          <br />a Winning Business Plan
        </Typography>

        {/* Slide card */}
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            bgcolor: "#FFFFFF",
            boxShadow: "0px 20px 50px rgba(15, 27, 60, 0.18)",
            borderRadius: 3,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              touchAction: "pan-y", // allow vertical scroll while swiping horizontally
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={slide}
              alt={activeSlide?.title || "Business plan creation"}
              style={{ width: "100%", height: "auto", display: "block" }}
              sizes="(max-width: 600px) 100vw, 480px"
            />
          </Box>
        </Box>

        {/* Slide title */}
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 600,
            textAlign: "center",
            color: "#1D2340",
          }}
        >
          {activeSlide?.title || "Business plan creation"}
        </Typography>

        {/* Pagination dots */}
        <Stack direction="row" spacing={1} justifyContent="center">
          {SLIDES.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <Box
                key={index}
                onClick={() => setActiveIndex(index)}
                sx={{
                  cursor: "pointer",
                  width: isActive ? 22 : 8,
                  height: 8,
                  borderRadius: 999,
                  transition: "all 0.2s ease",
                  background: isActive
                    ? theme.palette.titleGradient
                    : "rgba(130, 144, 200, 0.35)",
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileBusinessPlanSlider;

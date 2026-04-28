"use client";

import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

import s1 from "@/assets/consultants/screenshots/1.png";
import s2 from "@/assets/consultants/screenshots/2.png";
import s3 from "@/assets/consultants/screenshots/3.png";
import s4 from "@/assets/consultants/screenshots/4.png";

const SCREENSHOTS = [s1, s2, s3, s4];
const SLIDE_MS = 3500;

const ConsultantsHero = () => {
    const t = useTranslations("consultantsPage");
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % SCREENSHOTS.length);
        }, SLIDE_MS);
        return () => clearInterval(id);
    }, []);

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 14 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Stack
                    spacing={{ xs: 2.5, md: 3 }}
                    flex={1}
                    sx={{
                        order: { xs: 2, md: 1 },
                        width: "100%",
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 36, md: 56 },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("heroTitle")}
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: { xs: 16, md: 20 },
                            lineHeight: 1.5,
                            maxWidth: 520,
                        }}
                    >
                        {t("heroDescription")}
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: { xs: 16, md: 20 },
                            lineHeight: 1.5,
                            maxWidth: 520,
                        }}
                    >
                        {t.rich("heroFilterText", {
                            bold: (chunks) => (
                                <span style={{ fontWeight: 700 }}>{chunks}</span>
                            ),
                        })}
                    </Typography>

                    <Box sx={{ pt: 1 }}>
                        <Button
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 20,
                                py: 1.25,
                                px: 4,
                                fontWeight: 500,
                                fontSize: 15,
                                color: "#FFFFFF",
                                background:
                                    "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                                backgroundSize: "200% 200%",
                                animation: "bgShimmer 3s ease infinite",
                                boxShadow:
                                    "0px 12px 28px rgba(91, 58, 158, 0.35)",
                                transition:
                                    "transform 0.25s ease, filter 0.25s ease",
                                "&:hover": {
                                    transform: "scale(1.04)",
                                    filter: "brightness(1.1)",
                                    background:
                                        "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                                },
                                "@media (prefers-reduced-motion: reduce)": {
                                    animation: "none",
                                },
                                "@keyframes bgShimmer": {
                                    "0%": { backgroundPosition: "0% 50%" },
                                    "50%": { backgroundPosition: "100% 50%" },
                                    "100%": { backgroundPosition: "0% 50%" },
                                },
                            }}
                        >
                            {t("findConsultantCta")}
                        </Button>
                    </Box>
                </Stack>

                <Box
                    sx={{
                        order: { xs: 1, md: 2 },
                        flex: 1,
                        width: "100%",
                        position: "relative",
                        aspectRatio: "16 / 10",
                        maxWidth: 640,
                    }}
                >
                    {SCREENSHOTS.map((src, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: "absolute",
                                inset: 0,
                                opacity: i === active ? 1 : 0,
                                transition: "opacity 0.6s ease",
                                pointerEvents: i === active ? "auto" : "none",
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Consultants screenshot ${i + 1}`}
                                priority={i === 0}
                                sizes="(max-width: 900px) 100vw, 50vw"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    display: "block",
                                }}
                            />
                        </Box>
                    ))}

                    <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{
                            position: "absolute",
                            bottom: -18,
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        {SCREENSHOTS.map((_, i) => (
                            <Box
                                key={i}
                                onClick={() => setActive(i)}
                                sx={{
                                    cursor: "pointer",
                                    width: i === active ? 22 : 6,
                                    height: 6,
                                    borderRadius: 4,
                                    bgcolor:
                                        i === active
                                            ? "#3F6DDD"
                                            : "rgba(63, 109, 221, 0.3)",
                                    transition:
                                        "width 0.3s ease, background 0.3s ease",
                                }}
                            />
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default ConsultantsHero;

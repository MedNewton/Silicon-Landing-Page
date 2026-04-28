"use client";

import { Avatar, Box, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import theme from "@/theme/theme";
import { useTranslations } from "next-intl";

type Testimonial = {
    name: string;
    role: string;
    avatarSeed: number;
    quote: string;
};

const TOP_ROW_SEEDS = [5, 12, 23, 33, 45];
const BOTTOM_ROW_SEEDS = [8, 15, 47, 36, 60];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
    <Box
        sx={{
            flexShrink: 0,
            width: { xs: 300, md: 460 },
            bgcolor: "#FFFFFF",
            borderRadius: 4,
            p: { xs: 2.5, md: 3 },
            mx: 1.5,
            boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.14)",
        }}
    >
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ mb: 1.75 }}
        >
            <Avatar
                src={`https://i.pravatar.cc/150?img=${t.avatarSeed}`}
                alt={t.name}
                sx={{ width: 48, height: 48, flexShrink: 0 }}
            />
            <Stack flex={1} sx={{ minWidth: 0 }}>
                <Typography
                    sx={{ fontWeight: 700, fontSize: 15, color: "#1E2B42" }}
                >
                    {t.name}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#7A8098" }}>
                    {t.role}
                </Typography>
            </Stack>
            <Stack direction="row" spacing={0.25} sx={{ flexShrink: 0 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                        key={i}
                        sx={{ color: "#FFB800", fontSize: 16 }}
                    />
                ))}
            </Stack>
        </Stack>
        <Typography
            sx={{ fontSize: 13.5, color: "#1E2B42", lineHeight: 1.6 }}
        >
            {t.quote}
        </Typography>
    </Box>
);

const Marquee = ({
    items,
    direction,
}: {
    items: Testimonial[];
    direction: "left" | "right";
}) => (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
        <Box
            sx={{
                display: "flex",
                width: "fit-content",
                animation:
                    direction === "left"
                        ? "marqueeLeft 90s linear infinite"
                        : "marqueeRight 90s linear infinite",
                "@media (prefers-reduced-motion: reduce)": {
                    animation: "none",
                },
                "@keyframes marqueeLeft": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-33.3333%)" },
                },
                "@keyframes marqueeRight": {
                    "0%": { transform: "translateX(-33.3333%)" },
                    "100%": { transform: "translateX(0)" },
                },
            }}
        >
            {[...items, ...items, ...items].map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
        </Box>
    </Box>
);

const TestimonialsSection = () => {
    const t = useTranslations("testimonials");
    const topRow: Testimonial[] = (
        t.raw("topRow") as Array<{ name: string; role: string; quote: string }>
    ).map((item, i) => ({ ...item, avatarSeed: TOP_ROW_SEEDS[i]! }));
    const bottomRow: Testimonial[] = (
        t.raw("bottomRow") as Array<{ name: string; role: string; quote: string }>
    ).map((item, i) => ({ ...item, avatarSeed: BOTTOM_ROW_SEEDS[i]! }));
    return (
        <Box
            component="section"
            sx={{
                width: "auto",
                mx: { xs: -1, md: -2 },
                py: { xs: 6, md: 10 },
                overflow: "hidden",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Stack spacing={{ xs: 4, md: 5 }} alignItems="center">
                <Stack
                    spacing={{ xs: 1.5, md: 2 }}
                    alignItems="center"
                    sx={{ px: 2 }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: 24, md: 32 },
                            fontWeight: 700,
                            textAlign: "center",
                            lineHeight: 1.2,
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: 14, md: 16 },
                            textAlign: "center",
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                </Stack>

                <Stack spacing={{ xs: 2, md: 3 }} sx={{ width: "100%" }}>
                    <Marquee items={topRow} direction="left" />
                    <Marquee items={bottomRow} direction="right" />
                </Stack>
            </Stack>
        </Box>
    );
};

export default TestimonialsSection;

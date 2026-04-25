"use client";

import { Avatar, Box, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import theme from "@/theme/theme";

type Testimonial = {
    name: string;
    role: string;
    avatarSeed: number;
    quote: string;
};

const TOP_ROW: Testimonial[] = [
    {
        name: "Sofia Martinez",
        role: "Startup Founder",
        avatarSeed: 5,
        quote:
            "I found exactly the expert I needed. The session was structured, practical, and directly applicable to our startup.",
    },
    {
        name: "Liam Turner",
        role: "Co-Founder",
        avatarSeed: 12,
        quote:
            "Working inside the platform made everything easier — from planning to refining our pitch deck. Highly recommend.",
    },
    {
        name: "Olivia Bennett",
        role: "Startup Enthusiast",
        avatarSeed: 23,
        quote:
            "Great experience. Clear feedback, fast iteration, and real impact on our fundraising process.",
    },
    {
        name: "Marcus Reed",
        role: "Tech Founder",
        avatarSeed: 33,
        quote:
            "After two sessions we had a clear roadmap and could completely rethink our go-to-market materials.",
    },
    {
        name: "Aria Chen",
        role: "SaaS Founder",
        avatarSeed: 45,
        quote:
            "The advice was sharp and practical. I shipped a much stronger pitch deck the same week.",
    },
];

const BOTTOM_ROW: Testimonial[] = [
    {
        name: "Daniel Turner",
        role: "Strategy Consultant",
        avatarSeed: 8,
        quote:
            "Silicon Plan makes it easy to work with motivated founders. Sessions are well-structured, and having documents inside saves a lot of time.",
    },
    {
        name: "James Walker",
        role: "Financial Consultant",
        avatarSeed: 15,
        quote:
            "The structured approach to sessions and document collaboration really improves the quality of consulting.",
    },
    {
        name: "Emma Collins",
        role: "Product Consultant",
        avatarSeed: 47,
        quote:
            "I appreciate how structured the sessions are. It helps both me and the founder stay focused and get results faster.",
    },
    {
        name: "Ava Thompson",
        role: "Venture Consultant",
        avatarSeed: 36,
        quote:
            "Great tool for collaborating on living documents. It removes a lot of friction between consultants and founders.",
    },
    {
        name: "Hugo Laurent",
        role: "Growth Consultant",
        avatarSeed: 60,
        quote:
            "Easy onboarding, clear handoffs, and the founders show up prepared. Best workflow I've used.",
    },
];

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
                        ? "marqueeLeft 60s linear infinite"
                        : "marqueeRight 60s linear infinite",
                "@keyframes marqueeLeft": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "@keyframes marqueeRight": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0)" },
                },
            }}
        >
            {[...items, ...items].map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} t={t} />
            ))}
        </Box>
    </Box>
);

const TestimonialsSection = () => {
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
                        Trusted by founders and consultants worldwide
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: 14, md: 16 },
                            textAlign: "center",
                        }}
                    >
                        Real results from real collaborations
                    </Typography>
                </Stack>

                <Stack spacing={{ xs: 2, md: 3 }} sx={{ width: "100%" }}>
                    <Marquee items={TOP_ROW} direction="left" />
                    <Marquee items={BOTTOM_ROW} direction="right" />
                </Stack>
            </Stack>
        </Box>
    );
};

export default TestimonialsSection;

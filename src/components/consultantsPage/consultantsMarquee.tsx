"use client";

import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

type Consultant = {
    name: string;
    avatarSeed: number;
    price: number;
    rating: number;
    reviews: number;
    sessions: number;
};

const CONSULTANTS: Consultant[] = [
    { name: "Angelo Corleone", avatarSeed: 11, price: 100, rating: 0, reviews: 0, sessions: 2 },
    { name: "Maria Rossi", avatarSeed: 5, price: 120, rating: 0, reviews: 0, sessions: 2 },
    { name: "James Carter", avatarSeed: 12, price: 95, rating: 0, reviews: 0, sessions: 2 },
    { name: "Sofia Bianchi", avatarSeed: 23, price: 110, rating: 0, reviews: 0, sessions: 2 },
    { name: "Marcus Reed", avatarSeed: 33, price: 130, rating: 0, reviews: 0, sessions: 2 },
    { name: "Aria Chen", avatarSeed: 45, price: 100, rating: 0, reviews: 0, sessions: 2 },
    { name: "Daniel Turner", avatarSeed: 8, price: 115, rating: 0, reviews: 0, sessions: 2 },
    { name: "Hannah Morris", avatarSeed: 47, price: 105, rating: 0, reviews: 0, sessions: 2 },
];

type CardProps = { consultant: Consultant };

const ConsultantCard = ({ consultant }: CardProps) => {
    const t = useTranslations("consultantsPage.card");

    return (
        <Box
            sx={{
                flexShrink: 0,
                width: { xs: 280, md: 320 },
                bgcolor: "#FFFFFF",
                borderRadius: 4,
                p: 0,
                mx: 1.5,
                overflow: "hidden",
                border: "1px solid #E5E7EB",
                boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.10)",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box sx={{ p: 2.5, pb: 2 }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 1.5 }}
                >
                    <Avatar
                        src={`https://i.pravatar.cc/150?img=${consultant.avatarSeed}`}
                        alt={consultant.name}
                        sx={{ width: 48, height: 48, flexShrink: 0 }}
                    />
                    <Stack flex={1} sx={{ minWidth: 0 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 15,
                                color: "#1E2B42",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {consultant.name}
                        </Typography>
                        <Typography sx={{ fontSize: 12, color: "#7A8098" }}>
                            {t("role")}
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.75}
                        sx={{ flexShrink: 0 }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 16,
                                color: "#1E2B42",
                            }}
                        >
                            ${consultant.price}
                        </Typography>
                        <FavoriteBorderIcon
                            sx={{ fontSize: 18, color: "#7A8098" }}
                        />
                    </Stack>
                </Stack>

                <Typography
                    sx={{
                        fontSize: 13,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.5,
                        mb: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {t("description")}
                </Typography>

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                >
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <StarIcon sx={{ fontSize: 16, color: "#FFB800" }} />
                        <Typography
                            sx={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: "#1E2B42",
                            }}
                        >
                            {consultant.rating} ({consultant.reviews})
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <ChatBubbleOutlineIcon
                            sx={{ fontSize: 14, color: "#7A8098" }}
                        />
                        <Typography
                            sx={{
                                fontSize: 13,
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {t("sessions", { count: consultant.sessions })}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>

            <Stack sx={{ mt: "auto" }}>
                <Button
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: 0,
                        py: 1.25,
                        fontWeight: 500,
                        fontSize: 14,
                        color: "#1E2B42",
                        bgcolor: "#F5F6FA",
                        "&:hover": { bgcolor: "#EDEFF5" },
                    }}
                >
                    {t("messageCta")}
                </Button>
                <Button
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: 0,
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#FFFFFF",
                        bgcolor: "#3F4DCC",
                        "&:hover": { bgcolor: "#3640B5" },
                    }}
                >
                    {t("bookCta")}
                </Button>
            </Stack>
        </Box>
    );
};

const Marquee = ({ items }: { items: Consultant[] }) => (
    <Box sx={{ overflow: "hidden", width: "100%" }}>
        <Box
            sx={{
                display: "flex",
                width: "fit-content",
                animation: "consultantsMarquee 90s linear infinite",
                "@keyframes consultantsMarquee": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-33.3333%)" },
                },
            }}
        >
            {[...items, ...items, ...items].map((c, i) => (
                <ConsultantCard key={`${c.name}-${i}`} consultant={c} />
            ))}
        </Box>
    </Box>
);

const ConsultantsMarquee = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "auto",
                mx: { xs: -1, md: -2 },
                py: { xs: 4, md: 6 },
                overflow: "hidden",
            }}
        >
            <Marquee items={CONSULTANTS} />
        </Box>
    );
};

export default ConsultantsMarquee;

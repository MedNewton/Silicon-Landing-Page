import { Avatar, Box, Button, Link, Stack, Typography } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type ConsultantCard = {
    name: string;
    role: string;
    specialty: string;
    badge: string;
};

const getInitials = (name: string) =>
    name
        .split(" ")
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase();

const Consultants = async () => {
    const t = await getTranslations("Consultants");
    const cards = t.raw("cards") as ConsultantCard[];

    return (
        <Box
            sx={{
                width: "100%",
                py: { md: 10 },
                px: { md: 4 },
            }}
        >
            <Stack spacing={5} alignItems="center" maxWidth="1180px" mx="auto">
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                        sx={{
                            px: 1.75,
                            py: 0.5,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.25)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: 1.2,
                                backgroundImage: theme.palette.titleGradient,
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {t("eyebrow")}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 34,
                            fontWeight: 700,
                            lineHeight: 1.25,
                            maxWidth: 820,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            color: theme.palette.secondary.main,
                            maxWidth: 720,
                            lineHeight: 1.55,
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                            mt: 0.5,
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.2)",
                        }}
                    >
                        <FilterAltOutlinedIcon
                            sx={{ fontSize: 16, color: "#6547A5" }}
                        />
                        <Typography
                            sx={{
                                fontSize: 13,
                                color: theme.palette.secondary.main,
                            }}
                        >
                            {t("filterHint")}
                        </Typography>
                    </Stack>
                </Stack>

                {/* TODO: replace with actual marketplace demo video asset */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 720,
                        borderRadius: 4,
                        p: "1px",
                        background: theme.palette.heroFakeBorderGradient,
                    }}
                >
                    <Stack
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            position: "relative",
                            borderRadius: 4,
                            py: 6,
                            px: 3,
                            bgcolor: "#FFFFFF",
                            backgroundImage:
                                "linear-gradient(145deg, #F7F8FF 0%, #EEF1FF 40%, #F9F8FF 100%)",
                            boxShadow: "0px 18px 40px rgba(30, 43, 66, 0.08)",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                width: 72,
                                height: 72,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: theme.palette.titleGradient,
                                color: "#FFFFFF",
                                boxShadow:
                                    "0 18px 40px rgba(88, 124, 255, 0.45)",
                            }}
                        >
                            <PlayArrowRoundedIcon sx={{ fontSize: 44, ml: 0.5 }} />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontWeight: 600,
                                color: theme.palette.secondary.main,
                                textAlign: "center",
                            }}
                        >
                            {t("demoLabel")}
                        </Typography>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: {
                            md: "repeat(3, minmax(0, 1fr))",
                        },
                    }}
                >
                    {cards.map((card, i) => (
                        <Box
                            key={i}
                            sx={{
                                borderRadius: 4,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                spacing={2}
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    p: 3,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow:
                                        "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Avatar
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: "#FFFFFF",
                                            background:
                                                theme.palette.titleGradient,
                                            boxShadow:
                                                "0 12px 28px rgba(88, 124, 255, 0.35)",
                                        }}
                                    >
                                        {getInitials(card.name)}
                                    </Avatar>
                                    <Stack spacing={0.25} flex={1}>
                                        <Typography
                                            sx={{
                                                fontSize: 16,
                                                fontWeight: 700,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {card.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 13,
                                                color: theme.palette.secondary
                                                    .main,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {card.role}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: theme.palette.secondary.main,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {card.specialty}
                                </Typography>
                                <Box sx={{ mt: "auto", pt: 1 }}>
                                    <Box
                                        sx={{
                                            display: "inline-block",
                                            px: 1.25,
                                            py: 0.35,
                                            borderRadius: 999,
                                            border: "1px solid rgba(101, 71, 165, 0.25)",
                                            background:
                                                "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 11,
                                                fontWeight: 600,
                                                letterSpacing: 0.4,
                                                backgroundImage:
                                                    theme.palette.titleGradient,
                                                WebkitBackgroundClip: "text",
                                                color: "transparent",
                                            }}
                                        >
                                            {card.badge}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Box>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Link
                        href="https://app.silicon-plan.live/?nav=consultants"
                        target="_blank"
                        underline="none"
                    >
                        <Button
                            name="find-consultant"
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 3,
                                px: 3.5,
                                py: 1.4,
                                fontWeight: 500,
                                fontSize: 15,
                                background: theme.palette.titleGradient,
                                color: "#FFFFFF",
                                border: "none",
                                boxShadow: `
                                0 0 0 1px rgba(96, 126, 255, 0.95),
                                0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                                0 18px 32px rgba(88, 124, 255, 0.4)
                                `,
                                "&:hover": {
                                    background: theme.palette.titleGradient,
                                },
                            }}
                        >
                            {t("ctaFind")}
                        </Button>
                    </Link>
                    {/* TODO: confirm onboarding-consultant URL with owner */}
                    <Link
                        href="https://app.silicon-plan.live/?nav=consultants"
                        target="_blank"
                        underline="none"
                    >
                        <Button
                            name="become-consultant"
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 3,
                                px: 3.5,
                                py: 1.4,
                                fontWeight: 500,
                                fontSize: 15,
                                color: "#6547A5",
                                background: "#FFFFFF",
                                border: "1px solid rgba(101, 71, 165, 0.35)",
                                "&:hover": {
                                    background:
                                        "linear-gradient(273deg, rgba(101, 71, 165, 0.06) 0%, rgba(63, 109, 221, 0.06) 100%)",
                                },
                            }}
                        >
                            {t("ctaBecome")}
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Consultants;

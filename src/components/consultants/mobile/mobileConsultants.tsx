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

const MobileConsultants = async () => {
    const t = await getTranslations("Consultants");
    const cards = t.raw("cards") as ConsultantCard[];

    return (
        <Box sx={{ width: "100%", py: 6, px: 2 }}>
            <Stack spacing={4} alignItems="center">
                <Stack spacing={1.5} alignItems="center" textAlign="center">
                    <Box
                        sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.25)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 11,
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
                            fontSize: 24,
                            fontWeight: 700,
                            lineHeight: 1.3,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: theme.palette.secondary.main,
                            lineHeight: 1.5,
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={0.75}
                        alignItems="center"
                        sx={{
                            mt: 0.5,
                            px: 1.25,
                            py: 0.4,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.2)",
                        }}
                    >
                        <FilterAltOutlinedIcon
                            sx={{ fontSize: 14, color: "#6547A5" }}
                        />
                        <Typography
                            sx={{
                                fontSize: 11.5,
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
                        borderRadius: 3,
                        p: "1px",
                        background: theme.palette.heroFakeBorderGradient,
                    }}
                >
                    <Stack
                        spacing={1.25}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            borderRadius: 3,
                            py: 4,
                            px: 2,
                            bgcolor: "#FFFFFF",
                            backgroundImage:
                                "linear-gradient(145deg, #F7F8FF 0%, #EEF1FF 40%, #F9F8FF 100%)",
                            boxShadow: "0px 12px 28px rgba(30, 43, 66, 0.08)",
                        }}
                    >
                        <Box
                            sx={{
                                width: 56,
                                height: 56,
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: theme.palette.titleGradient,
                                color: "#FFFFFF",
                                boxShadow:
                                    "0 12px 28px rgba(88, 124, 255, 0.45)",
                            }}
                        >
                            <PlayArrowRoundedIcon sx={{ fontSize: 34, ml: 0.4 }} />
                        </Box>
                        <Typography
                            sx={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: theme.palette.secondary.main,
                                textAlign: "center",
                            }}
                        >
                            {t("demoLabel")}
                        </Typography>
                    </Stack>
                </Box>

                <Stack spacing={2} width="100%">
                    {cards.map((card, i) => (
                        <Box
                            key={i}
                            sx={{
                                borderRadius: 3,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                spacing={1.25}
                                sx={{
                                    borderRadius: 3,
                                    p: 2,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow:
                                        "0px 12px 28px rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                >
                                    <Avatar
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: "#FFFFFF",
                                            background:
                                                theme.palette.titleGradient,
                                            boxShadow:
                                                "0 8px 20px rgba(88, 124, 255, 0.35)",
                                        }}
                                    >
                                        {getInitials(card.name)}
                                    </Avatar>
                                    <Stack spacing={0.25} flex={1}>
                                        <Typography
                                            sx={{
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {card.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 12,
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
                                        fontSize: 13,
                                        color: theme.palette.secondary.main,
                                        lineHeight: 1.45,
                                    }}
                                >
                                    {card.specialty}
                                </Typography>
                                <Box>
                                    <Box
                                        sx={{
                                            display: "inline-block",
                                            px: 1,
                                            py: 0.3,
                                            borderRadius: 999,
                                            border: "1px solid rgba(101, 71, 165, 0.25)",
                                            background:
                                                "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 10,
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
                </Stack>

                <Stack spacing={1.25} width="100%">
                    <Link
                        href="https://app.silicon-plan.live/?nav=consultants"
                        target="_blank"
                        underline="none"
                    >
                        <Button
                            name="find-consultant"
                            fullWidth
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 3,
                                py: 1.25,
                                fontWeight: 500,
                                fontSize: 14,
                                background: theme.palette.titleGradient,
                                color: "#FFFFFF",
                                border: "none",
                                boxShadow: `
                                0 0 0 1px rgba(96, 126, 255, 0.95),
                                0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                                0 12px 24px rgba(88, 124, 255, 0.4)
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
                            fullWidth
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 3,
                                py: 1.25,
                                fontWeight: 500,
                                fontSize: 14,
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

export default MobileConsultants;

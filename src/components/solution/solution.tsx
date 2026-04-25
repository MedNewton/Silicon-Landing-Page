import { Box, Stack, Typography } from "@mui/material";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type BenefitKey = "onboarding" | "documents" | "structure";

const BENEFITS: { key: BenefitKey; Icon: typeof RouteOutlinedIcon }[] = [
    { key: "onboarding", Icon: RouteOutlinedIcon },
    { key: "documents", Icon: AutoAwesomeOutlinedIcon },
    { key: "structure", Icon: AccountTreeOutlinedIcon },
];

type ComparisonRow = { without: string; with: string };

const Solution = async () => {
    const t = await getTranslations("Solution");
    const rows = t.raw("comparison.rows") as ComparisonRow[];

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
                            maxWidth: 760,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("intro")}
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    }}
                >
                    {BENEFITS.map(({ key, Icon }) => (
                        <Box
                            key={key}
                            sx={{
                                borderRadius: 4,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                spacing={2}
                                alignItems="flex-start"
                                sx={{
                                    height: "100%",
                                    borderRadius: 4,
                                    p: 3.5,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow: "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        boxShadow: "0 10px 24px rgba(88, 124, 255, 0.35)",
                                    }}
                                >
                                    <Icon fontSize="medium" />
                                </Box>
                                <Typography
                                    sx={{ fontSize: 18, fontWeight: 600, color: "#1D2340" }}
                                >
                                    {t(`benefits.${key}`)}
                                </Typography>
                            </Stack>
                        </Box>
                    ))}
                </Box>

                <Typography
                    sx={{
                        fontSize: 16,
                        textAlign: "center",
                        color: theme.palette.secondary.main,
                    }}
                >
                    {t("closing")}
                </Typography>

                {/* Comparison Table */}
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 920,
                        borderRadius: 4,
                        p: "1px",
                        background: theme.palette.heroFakeBorderGradient,
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: 4,
                            overflow: "hidden",
                            bgcolor: "#FFFFFF",
                        }}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                            }}
                        >
                            <Box
                                sx={{
                                    px: 3,
                                    py: 2.25,
                                    bgcolor: "rgba(30, 43, 66, 0.04)",
                                    borderRight: "1px solid rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        letterSpacing: 0.8,
                                        textTransform: "uppercase",
                                        color: theme.palette.secondary.main,
                                    }}
                                >
                                    {t("comparison.without")}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    px: 3,
                                    py: 2.25,
                                    background:
                                        "linear-gradient(273deg, rgba(101, 71, 165, 0.1) 0%, rgba(63, 109, 221, 0.1) 100%)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        letterSpacing: 0.8,
                                        textTransform: "uppercase",
                                        backgroundImage: theme.palette.titleGradient,
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    {t("comparison.with")}
                                </Typography>
                            </Box>
                        </Box>
                        {rows.map((row, i) => (
                            <Box
                                key={i}
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    borderTop: "1px solid rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                    sx={{
                                        px: 3,
                                        py: 2,
                                        borderRight: "1px solid rgba(30, 43, 66, 0.08)",
                                        color: theme.palette.secondary.main,
                                    }}
                                >
                                    <CloseRoundedIcon sx={{ color: "#B33A3A", fontSize: 20 }} />
                                    <Typography sx={{ fontSize: 15 }}>{row.without}</Typography>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                    sx={{ px: 3, py: 2 }}
                                >
                                    <CheckRoundedIcon
                                        sx={{ color: "rgba(76, 175, 80, 1)", fontSize: 20 }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: "#1D2340",
                                        }}
                                    >
                                        {row.with}
                                    </Typography>
                                </Stack>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Solution;

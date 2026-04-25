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

const MobileSolution = async () => {
    const t = await getTranslations("Solution");
    const rows = t.raw("comparison.rows") as ComparisonRow[];

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
                        {t("intro")}
                    </Typography>
                </Stack>

                <Stack spacing={2} width="100%">
                    {BENEFITS.map(({ key, Icon }) => (
                        <Box
                            key={key}
                            sx={{
                                borderRadius: 3,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                sx={{
                                    borderRadius: 3,
                                    p: 2,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow: "0px 12px 28px rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 40,
                                        height: 40,
                                        borderRadius: 1.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        boxShadow: "0 8px 18px rgba(88, 124, 255, 0.3)",
                                    }}
                                >
                                    <Icon fontSize="small" />
                                </Box>
                                <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#1D2340" }}>
                                    {t(`benefits.${key}`)}
                                </Typography>
                            </Stack>
                        </Box>
                    ))}
                </Stack>

                <Typography
                    sx={{
                        fontSize: 14,
                        textAlign: "center",
                        color: theme.palette.secondary.main,
                    }}
                >
                    {t("closing")}
                </Typography>

                {/* Comparison */}
                <Box
                    sx={{
                        width: "100%",
                        borderRadius: 3,
                        p: "1px",
                        background: theme.palette.heroFakeBorderGradient,
                    }}
                >
                    <Stack
                        spacing={0}
                        sx={{
                            borderRadius: 3,
                            overflow: "hidden",
                            bgcolor: "#FFFFFF",
                        }}
                    >
                        {rows.map((row, i) => (
                            <Stack
                                key={i}
                                spacing={1.25}
                                sx={{
                                    px: 2,
                                    py: 2,
                                    borderTop:
                                        i === 0 ? "none" : "1px solid rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <CloseRoundedIcon sx={{ color: "#B33A3A", fontSize: 18 }} />
                                    <Typography
                                        sx={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            letterSpacing: 0.8,
                                            textTransform: "uppercase",
                                            color: theme.palette.secondary.main,
                                        }}
                                    >
                                        {t("comparison.without")}
                                    </Typography>
                                </Stack>
                                <Typography
                                    sx={{ fontSize: 14, color: theme.palette.secondary.main, pl: 3.5 }}
                                >
                                    {row.without}
                                </Typography>
                                <Stack direction="row" spacing={1.25} alignItems="center">
                                    <CheckRoundedIcon
                                        sx={{ color: "rgba(76, 175, 80, 1)", fontSize: 18 }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: 11,
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
                                </Stack>
                                <Typography
                                    sx={{ fontSize: 14, fontWeight: 600, color: "#1D2340", pl: 3.5 }}
                                >
                                    {row.with}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default MobileSolution;

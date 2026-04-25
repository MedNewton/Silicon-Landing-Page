import { Box, Stack, Typography } from "@mui/material";
import ScatterPlotOutlinedIcon from "@mui/icons-material/ScatterPlotOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type PointKey = "scattered" | "documents" | "processes";

const POINTS: { key: PointKey; Icon: typeof ScatterPlotOutlinedIcon }[] = [
    { key: "scattered", Icon: ScatterPlotOutlinedIcon },
    { key: "documents", Icon: DescriptionOutlinedIcon },
    { key: "processes", Icon: HelpOutlineIcon },
];

const MobileProblem = async () => {
    const t = await getTranslations("Problem");

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
                                "linear-gradient(273deg, rgba(211, 47, 47, 0.12) 0%, rgba(101, 71, 165, 0.12) 100%)",
                            border: "1px solid rgba(211, 47, 47, 0.18)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: 1.2,
                                color: "#B33A3A",
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
                </Stack>

                <Stack spacing={2} width="100%">
                    {POINTS.map(({ key, Icon }) => (
                        <Box
                            key={key}
                            sx={{
                                borderRadius: 3,
                                p: "1px",
                                background:
                                    "linear-gradient(180deg, rgba(211, 47, 47, 0.35) 0%, rgba(93, 77, 169, 0.08) 100%)",
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
                                        "linear-gradient(145deg, #FFF5F5 0%, #FDF7F9 40%, #FFFFFF 100%)",
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
                                        background:
                                            "linear-gradient(135deg, rgba(211, 47, 47, 0.14) 0%, rgba(101, 71, 165, 0.14) 100%)",
                                        color: "#B33A3A",
                                    }}
                                >
                                    <Icon fontSize="small" />
                                </Box>
                                <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#1D2340" }}>
                                    {t(`points.${key}`)}
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
            </Stack>
        </Box>
    );
};

export default MobileProblem;

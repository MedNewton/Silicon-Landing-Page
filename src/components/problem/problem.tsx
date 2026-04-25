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

const Problem = async () => {
    const t = await getTranslations("Problem");

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
                                "linear-gradient(273deg, rgba(211, 47, 47, 0.12) 0%, rgba(101, 71, 165, 0.12) 100%)",
                            border: "1px solid rgba(211, 47, 47, 0.18)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
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
                            fontSize: 34,
                            fontWeight: 700,
                            lineHeight: 1.25,
                            maxWidth: 720,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
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
                    {POINTS.map(({ key, Icon }) => (
                        <Box
                            key={key}
                            sx={{
                                position: "relative",
                                borderRadius: 4,
                                p: "1px",
                                background:
                                    "linear-gradient(180deg, rgba(211, 47, 47, 0.35) 0%, rgba(93, 77, 169, 0.08) 100%)",
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
                                        "linear-gradient(145deg, #FFF5F5 0%, #FDF7F9 40%, #FFFFFF 100%)",
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
                                        background:
                                            "linear-gradient(135deg, rgba(211, 47, 47, 0.14) 0%, rgba(101, 71, 165, 0.14) 100%)",
                                        color: "#B33A3A",
                                    }}
                                >
                                    <Icon fontSize="medium" />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 18,
                                        fontWeight: 600,
                                        color: "#1D2340",
                                    }}
                                >
                                    {t(`points.${key}`)}
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
                        maxWidth: 640,
                    }}
                >
                    {t("closing")}
                </Typography>
            </Stack>
        </Box>
    );
};

export default Problem;

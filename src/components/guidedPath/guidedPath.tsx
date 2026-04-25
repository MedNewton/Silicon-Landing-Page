import { Box, Stack, Typography } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type StepDef = { Icon: typeof LightbulbOutlinedIcon };

const STEPS: StepDef[] = [
    { Icon: LightbulbOutlinedIcon },
    { Icon: DashboardOutlinedIcon },
    { Icon: DescriptionOutlinedIcon },
    { Icon: SlideshowOutlinedIcon },
];

const GuidedPath = async () => {
    const t = await getTranslations("GuidedPath");
    const steps = t.raw("steps") as string[];

    return (
        <Box
            sx={{
                width: "100%",
                py: { md: 10 },
                px: { md: 4 },
            }}
        >
            <Stack spacing={6} alignItems="center" maxWidth="1180px" mx="auto">
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
                            maxWidth: 780,
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
                        position: "relative",
                        px: 2,
                        py: 2,
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            display: "grid",
                            gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
                            alignItems: "start",
                            columnGap: 0,
                        }}
                    >
                        {/* Connector track */}
                        <Box
                            aria-hidden
                            sx={{
                                position: "absolute",
                                top: 36,
                                left: `calc(100% / ${STEPS.length * 2})`,
                                right: `calc(100% / ${STEPS.length * 2})`,
                                height: 6,
                                borderRadius: 999,
                                background:
                                    "linear-gradient(90deg, rgba(101, 71, 165, 0.15) 0%, rgba(63, 109, 221, 0.15) 100%)",
                                overflow: "hidden",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    height: "100%",
                                    width: "40%",
                                    background:
                                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
                                    filter: "blur(2px)",
                                    animation: "guidedPathShimmer 3.6s linear infinite",
                                },
                                "@keyframes guidedPathShimmer": {
                                    "0%": { transform: "translateX(-40%)" },
                                    "100%": { transform: "translateX(260%)" },
                                },
                            }}
                        />
                        {/* Solid gradient underlay */}
                        <Box
                            aria-hidden
                            sx={{
                                position: "absolute",
                                top: 36,
                                left: `calc(100% / ${STEPS.length * 2})`,
                                right: `calc(100% / ${STEPS.length * 2})`,
                                height: 6,
                                borderRadius: 999,
                                background: theme.palette.titleGradient,
                                opacity: 0.7,
                                zIndex: 0,
                            }}
                        />

                        {STEPS.map(({ Icon }, i) => (
                            <Stack
                                key={i}
                                spacing={2}
                                alignItems="center"
                                sx={{ position: "relative", zIndex: 1, px: 1 }}
                            >
                                <Box
                                    sx={{
                                        width: 72,
                                        height: 72,
                                        borderRadius: "50%",
                                        p: "2px",
                                        background: theme.palette.titleGradient,
                                        boxShadow: "0 14px 34px rgba(88, 124, 255, 0.3)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            bgcolor: "#FFFFFF",
                                            backgroundImage:
                                                "linear-gradient(145deg, #F7F8FF 0%, #FFFFFF 100%)",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "transparent",
                                                backgroundImage: theme.palette.titleGradient,
                                                WebkitBackgroundClip: "text",
                                            }}
                                        >
                                            <Icon
                                                sx={{
                                                    fontSize: 32,
                                                    color: "#6547A5",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: "#1D2340",
                                        textAlign: "center",
                                    }}
                                >
                                    {steps[i]}
                                </Typography>
                            </Stack>
                        ))}
                    </Box>
                </Box>

                <Stack spacing={0.75} alignItems="center" textAlign="center">
                    <Typography
                        sx={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: "#1D2340",
                        }}
                    >
                        {t("closingLine1")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            color: theme.palette.secondary.main,
                        }}
                    >
                        {t("closingLine2")}
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default GuidedPath;

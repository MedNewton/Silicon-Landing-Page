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

const MobileGuidedPath = async () => {
    const t = await getTranslations("GuidedPath");
    const steps = t.raw("steps") as string[];

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
                </Stack>

                <Box sx={{ position: "relative", width: "100%", pl: 1 }}>
                    {/* Vertical connector */}
                    <Box
                        aria-hidden
                        sx={{
                            position: "absolute",
                            top: 32,
                            bottom: 32,
                            left: 35,
                            width: 5,
                            borderRadius: 999,
                            background: theme.palette.titleGradient,
                            opacity: 0.7,
                            overflow: "hidden",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "40%",
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 100%)",
                                filter: "blur(2px)",
                                animation: "mobileGuidedPathShimmer 3.6s linear infinite",
                            },
                            "@keyframes mobileGuidedPathShimmer": {
                                "0%": { transform: "translateY(-40%)" },
                                "100%": { transform: "translateY(260%)" },
                            },
                        }}
                    />
                    <Stack spacing={3} sx={{ position: "relative", zIndex: 1 }}>
                        {STEPS.map(({ Icon }, i) => (
                            <Stack
                                key={i}
                                direction="row"
                                spacing={2}
                                alignItems="center"
                            >
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        p: "2px",
                                        background: theme.palette.titleGradient,
                                        boxShadow: "0 10px 24px rgba(88, 124, 255, 0.3)",
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
                                        <Icon sx={{ fontSize: 26, color: "#6547A5" }} />
                                    </Box>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: "#1D2340",
                                    }}
                                >
                                    {steps[i]}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Box>

                <Stack spacing={0.5} alignItems="center" textAlign="center">
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 600,
                            color: "#1D2340",
                        }}
                    >
                        {t("closingLine1")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
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

export default MobileGuidedPath;

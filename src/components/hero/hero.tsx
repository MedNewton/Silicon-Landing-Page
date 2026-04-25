import theme from "@/theme/theme";
import { Box, Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";

const Hero = async () => {
    const t = await getTranslations("Hero");

    return (
        <Stack
            component="section"
            width="100%"
            alignItems="center"
            justifyContent="center"
            position="relative"
            sx={{
                background: theme.palette.heroFakeBorderGradient,
                borderRadius: 4,
                pl: "1px",
                pr: "0.75px",
                py: "1px",
            }}
        >
            <Stack component="div" width="100%" height="100%" alignItems="center" justifyContent="center"
                sx={{
                    background: theme.palette.heroGradientBg,
                    borderRadius: 4,
                    overflow: "hidden",
                    pt: 16,
                    pb: 0,
                    gap: 4,
                }}>
                <Stack direction="row" alignItems="center" justifyContent="center" py={1} px={2} borderRadius={20} gap={1.25} sx={{
                    background: theme.palette.background.default,
                }}>
                    <Stack width={8} height={8} borderRadius={"50%"} sx={{
                        background: theme.palette.success.main,
                        boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                        animation: "pulse 2s infinite",
                        "@keyframes pulse": {
                            "0%": {
                                boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                            },
                            "50%": {
                                boxShadow: `0 0 20px 1px ${theme.palette.success.main}`,
                            },
                            "100%": {
                                boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                            },
                        },
                    }}>

                    </Stack>
                    <Typography variant="body2" sx={{
                        background: theme.palette.titleGradient,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        <span style={{ fontWeight: 700 }}>{t("badgeBold")}</span> {t("badgeText")}
                    </Typography>
                </Stack>
                <Typography variant="h3" sx={{
                    background: "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                    backgroundSize: "200% 200%",
                    animation: "bgShimmer 3s ease infinite",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "55%",
                    textAlign: "center",
                    fontWeight: 600,
                    "@keyframes bgShimmer": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" },
                    },
                }}>
                    {t("title")}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: theme.palette.secondary.main,
                    width: "42%",
                    textAlign: "center",
                }}>
                    {t("subtitle")}
                </Typography>

                {/* AI Preview Video */}
                <Box
                    sx={{
                        position: "relative",
                        width: "82%",
                        maxWidth: 980,
                        mt: 2,
                        mb: -8,
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: `
                            0 0 0 1px rgba(101, 71, 165, 0.1),
                            0 4px 16px rgba(63, 109, 221, 0.08),
                            0 20px 60px rgba(63, 109, 221, 0.16),
                            0 40px 100px rgba(101, 71, 165, 0.1)
                        `,
                        animation: "heroVideoIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
                        "@keyframes heroVideoIn": {
                            from: {
                                opacity: 0,
                                transform: "translateY(40px) scale(0.97)",
                            },
                            to: {
                                opacity: 1,
                                transform: "translateY(0) scale(1)",
                            },
                        },
                    }}
                >
                    {/* Subtle border highlight */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            borderRadius: "20px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            pointerEvents: "none",
                            zIndex: 2,
                        }}
                    />

                    {/* Browser Chrome */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            bgcolor: "#1A1F2E",
                            px: 2,
                            py: 1.2,
                            gap: 0.8,
                        }}
                    >
                        <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#FF5F57" }} />
                        <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#FEBC2E" }} />
                        <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#28C840" }} />
                        <Box
                            sx={{
                                ml: 2,
                                flex: 1,
                                maxWidth: 300,
                                bgcolor: "rgba(255, 255, 255, 0.06)",
                                borderRadius: 1.5,
                                px: 1.5,
                                py: 0.4,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    color: "rgba(255, 255, 255, 0.35)",
                                    fontFamily: "monospace",
                                    letterSpacing: 0.3,
                                }}
                            >
                                {t("browserUrl")}
                            </Typography>
                        </Box>
                    </Stack>

                    {/* Video */}
                    <Box sx={{ position: "relative", lineHeight: 0 }}>
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                                width: "100%",
                                display: "block",
                            }}
                        >
                            <source src="/aipreview.webm" type="video/webm" />
                            <source src="/aipreview.mp4" type="video/mp4" />
                        </video>

                        {/* Bottom fade overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: 80,
                                background:
                                    "linear-gradient(to top, rgba(203, 211, 233, 0.6) 0%, transparent 100%)",
                                pointerEvents: "none",
                            }}
                        />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default Hero;

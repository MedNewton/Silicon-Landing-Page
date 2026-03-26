import theme from "@/theme/theme";
import { Box, Stack, Typography } from "@mui/material";
import MobileHeader from "@/components/layout/mobile/mobileHeader";

const MobileHero = () => {
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
            <Stack position="absolute" top={0} left={0} right={0}>
                <MobileHeader />
            </Stack>
            <Stack component="div" width="100%" height="100%" alignItems="center" justifyContent="center"
                sx={{
                    background: "linear-gradient(180deg, rgba(249, 249, 249, 0) 66.96%, #F9F9F9 100%), linear-gradient(90deg, rgba(211, 219, 239, 0.5) 0%, rgba(215, 211, 239, 0.5) 100%)",
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
                        <span style={{ fontWeight: 700 }}>800</span> SMEs creates documents daily
                    </Typography>
                </Stack>
                <Typography variant="h5" sx={{
                    background: "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                    backgroundSize: "200% 200%",
                    animation: "bgShimmer 3s ease infinite",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "85%",
                    textAlign: "center",
                    fontWeight: 600,
                    "@keyframes bgShimmer": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                        "100%": { backgroundPosition: "0% 50%" },
                    },
                }}>
                    Turn Ideas into Investments.
                    <br />
                    AI-powered plans, pitches, and forecasts.
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: theme.palette.secondary.main,
                    width: "85%",
                    textAlign: "center",
                }}>
                    Your AI-Powered Platform for Business Plans, Pitches & Financial Forecasts.
                </Typography>

                {/* AI Preview Video */}
                <Box
                    sx={{
                        position: "relative",
                        width: "94%",
                        mt: 1,
                        mb: -6,
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: `
                            0 0 0 1px rgba(101, 71, 165, 0.1),
                            0 4px 12px rgba(63, 109, 221, 0.08),
                            0 16px 48px rgba(63, 109, 221, 0.14),
                            0 32px 80px rgba(101, 71, 165, 0.08)
                        `,
                        animation: "heroVideoIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both",
                        "@keyframes heroVideoIn": {
                            from: {
                                opacity: 0,
                                transform: "translateY(30px) scale(0.98)",
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
                            borderRadius: "14px",
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
                            px: 1.5,
                            py: 1,
                            gap: 0.6,
                        }}
                    >
                        <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#FF5F57" }} />
                        <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#FEBC2E" }} />
                        <Box sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: "#28C840" }} />
                        <Box
                            sx={{
                                ml: 1.5,
                                flex: 1,
                                bgcolor: "rgba(255, 255, 255, 0.06)",
                                borderRadius: 1,
                                px: 1.2,
                                py: 0.3,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 10,
                                    color: "rgba(255, 255, 255, 0.35)",
                                    fontFamily: "monospace",
                                    letterSpacing: 0.2,
                                }}
                            >
                                app.silicon-plan.live
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
                                height: 60,
                                background:
                                    "linear-gradient(to top, rgba(235, 237, 245, 0.7) 0%, transparent 100%)",
                                pointerEvents: "none",
                            }}
                        />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default MobileHero;

import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";
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
                    pt: 16,
                    pb: 8,
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
                    background: theme.palette.titleGradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "85%",
                    textAlign: "center",
                    fontWeight: 600,
                }}>
                    Empower Your Business from Idea to Investment with AI & Expert Guidance.
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: theme.palette.secondary.main,
                    width: "85%",
                    textAlign: "center",
                }}>
                    Your AI-Powered Platform for Business Plans, Pitches & Financial Forecasts.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default MobileHero;
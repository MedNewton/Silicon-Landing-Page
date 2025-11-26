import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";
import Header from "@/components/layout/header";

const Hero = () => {
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
                <Header />
            </Stack>
            <Stack component="div" width="100%" height="100%" alignItems="center" justifyContent="center"
                sx={{
                    background: theme.palette.heroGradientBg,
                    borderRadius: 4,
                    pt: 16,
                    pb: 8,
                    gap: 4,
                }}>
                <Stack direction="row" alignItems="center" justifyContent="center" py={1} px={2} borderRadius={20} sx={{
                    background: theme.palette.background.default,
                }}>
                    <Typography variant="body2" sx={{
                        background: theme.palette.titleGradient,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                        <span style={{ fontWeight: 700 }}>800</span> SMEs creates documents daily
                    </Typography>
                </Stack>
                <Typography variant="h3" sx={{
                    background: theme.palette.titleGradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "45%",
                    textAlign: "center",
                    fontWeight: 600,
                }}>
                    Empower Your Business from Idea to Investment with AI & Expert Guidance.
                </Typography>
                <Typography variant="subtitle1" sx={{
                    color: theme.palette.secondary.main,
                    width: "25%",
                    textAlign: "center",
                }}>
                    Your AI-Powered Platform for Business Plans, Pitches & Financial Forecasts.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Hero;
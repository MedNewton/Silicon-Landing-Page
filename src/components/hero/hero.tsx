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
            <Stack
                component="div"
                width="100%"
                height="100%"
                alignItems="center"
                justifyContent="center"
                sx={{
                    background: theme.palette.heroGradientBg,
                    borderRadius: 4,
                    overflow: "hidden",
                    pt: 18,
                    pb: 12,
                    gap: 4,
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    py={1}
                    px={2}
                    borderRadius={20}
                    gap={1.25}
                    sx={{ background: theme.palette.background.default }}
                >
                    <Stack
                        width={8}
                        height={8}
                        borderRadius={"50%"}
                        sx={{
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
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            background: theme.palette.titleGradient,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        <span style={{ fontWeight: 700 }}>800</span> SMEs creates
                        documents daily
                    </Typography>
                </Stack>

                <Typography
                    variant="h2"
                    sx={{
                        color: "#3F4DCC",
                        width: "60%",
                        textAlign: "center",
                        fontWeight: 700,
                        lineHeight: 1.1,
                    }}
                >
                    Turn your idea into
                    <br />
                    a strategic plan
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: theme.palette.secondary.main,
                        width: "40%",
                        textAlign: "center",
                    }}
                >
                    Silicon Plan guides you through creating business plans, pitches,
                    and business models with AI tools and professional support.
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Hero;

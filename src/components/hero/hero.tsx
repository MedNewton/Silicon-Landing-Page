import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";
import Header from "@/components/layout/header";
import { getTranslations } from "next-intl/server";

const Hero = async () => {
    const t = await getTranslations("hero");
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
                            "@media (prefers-reduced-motion: reduce)": {
                                animation: "none",
                            },
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
                        {t.rich("badge", {
                            bold: (chunks) => (
                                <span style={{ fontWeight: 700 }}>{chunks}</span>
                            ),
                        })}
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
                        whiteSpace: "pre-line",
                    }}
                >
                    {t("title")}
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: theme.palette.secondary.main,
                        width: "40%",
                        textAlign: "center",
                    }}
                >
                    {t("subtitle")}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Hero;

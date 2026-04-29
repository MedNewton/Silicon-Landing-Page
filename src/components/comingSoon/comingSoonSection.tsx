import { Box, Button, Stack, Typography } from "@mui/material";
import { Clock } from "iconsax-reactjs";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";
import { Link as IntlLink } from "@/i18n/navigation";

const ComingSoonSection = async () => {
    const t = await getTranslations("comingSoon");

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 8, md: 16 },
                px: { xs: 2, md: 10 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Stack
                spacing={{ xs: 3, md: 4 }}
                alignItems="center"
                textAlign="center"
                width="100%"
                maxWidth="780px"
            >
                <Box
                    sx={{
                        width: { xs: 80, md: 110 },
                        height: { xs: 80, md: 110 },
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                            "linear-gradient(180deg, rgba(211, 219, 239, 1) 0%, rgba(215, 211, 239, 0.5) 100%)",
                        boxShadow: "0px 16px 40px rgba(91, 58, 158, 0.18)",
                    }}
                >
                    <Clock
                        size={48}
                        color="#5B3A9E"
                        variant="Bulk"
                    />
                </Box>

                <Typography
                    sx={{
                        fontSize: { xs: 14, md: 15 },
                        fontWeight: 600,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#3F6DDD",
                    }}
                >
                    {t("eyebrow")}
                </Typography>

                <Typography
                    component="h1"
                    sx={{
                        fontSize: { xs: 44, md: 72 },
                        fontWeight: 700,
                        lineHeight: 1.05,
                        background: theme.palette.titleGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    {t("title")}
                </Typography>

                <Typography
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: { xs: 16, md: 20 },
                        lineHeight: 1.6,
                        maxWidth: 600,
                    }}
                >
                    {t("description")}
                </Typography>

                <Box sx={{ pt: 2 }}>
                    <IntlLink href="/" style={{ textDecoration: "none" }}>
                        <Button
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: 20,
                                py: 1.25,
                                px: 4,
                                fontWeight: 500,
                                fontSize: 15,
                                color: "#FFFFFF",
                                background:
                                    "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                                backgroundSize: "200% 200%",
                                animation: "bgShimmer 3s ease infinite",
                                boxShadow:
                                    "0px 12px 28px rgba(91, 58, 158, 0.35)",
                                transition:
                                    "transform 0.25s ease, filter 0.25s ease",
                                "&:hover": {
                                    transform: "scale(1.04)",
                                    filter: "brightness(1.1)",
                                    background:
                                        "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
                                },
                                "@media (prefers-reduced-motion: reduce)": {
                                    animation: "none",
                                },
                                "@keyframes bgShimmer": {
                                    "0%": { backgroundPosition: "0% 50%" },
                                    "50%": { backgroundPosition: "100% 50%" },
                                    "100%": { backgroundPosition: "0% 50%" },
                                },
                            }}
                        >
                            {t("backHome")}
                        </Button>
                    </IntlLink>
                </Box>
            </Stack>
        </Box>
    );
};

export default ComingSoonSection;

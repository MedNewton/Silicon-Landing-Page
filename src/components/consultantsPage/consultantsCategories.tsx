import { Box, Stack, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

const ConsultantsCategories = async () => {
    const t = await getTranslations("consultantsPage");
    const chips = t.raw("categoryChips") as Array<{ label: string }>;

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 4, md: 8 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                spacing={{ xs: 3, md: 4 }}
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Typography
                    component="h2"
                    sx={{
                        fontSize: { xs: 24, md: 36 },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        background: theme.palette.titleGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    {t("categoriesHeading")}
                </Typography>

                <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1.5}
                    sx={{ width: "100%" }}
                >
                    {chips.map(({ label }) => (
                        <Box
                            key={label}
                            sx={{
                                px: 2.5,
                                py: 1.25,
                                borderRadius: 20,
                                bgcolor: "#FFFFFF",
                                border: "1px solid #E5E7EB",
                                cursor: "pointer",
                                transition:
                                    "border-color 0.2s ease, transform 0.2s ease",
                                "&:hover": {
                                    borderColor: "#3F6DDD",
                                    transform: "translateY(-1px)",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: theme.palette.text.primary,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {label}
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default ConsultantsCategories;

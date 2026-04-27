import { Box, Stack, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import theme from "@/theme/theme";
import { getTranslations } from "next-intl/server";

import createIcon from "@/assets/howitworks/create.png";
import infoIcon from "@/assets/howitworks/info.png";
import generateIcon from "@/assets/howitworks/generate.png";
import improveIcon from "@/assets/howitworks/improve.png";

const ICONS: StaticImageData[] = [createIcon, infoIcon, generateIcon, improveIcon];

const SECTION_BG =
    "linear-gradient(90deg, rgba(211, 219, 239, 0.5) 0%, rgba(215, 211, 239, 0.5) 100%)";

const HowItWorksSection = async () => {
    const t = await getTranslations("howItWorks");
    const steps = (t.raw("steps") as Array<{ title: string; description: string }>).map(
        (s, i) => ({ ...s, icon: ICONS[i]! })
    );
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 10 },
                background: SECTION_BG,
                borderRadius: 4,
            }}
        >
            <Stack
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                maxWidth="1280px"
                mx="auto"
            >
                <Typography
                    sx={{
                        fontSize: { xs: 24, md: 32 },
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 1.2,
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
                        color: theme.palette.text.secondary,
                        fontSize: { xs: 14, md: 16 },
                        textAlign: "center",
                        maxWidth: 640,
                        lineHeight: 1.6,
                    }}
                >
                    {t("subtitle")}
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {steps.map((step) => (
                        <Box
                            key={step.title}
                            sx={{
                                bgcolor: "#FFFFFF",
                                borderRadius: 4,
                                p: { xs: 2.25, md: 2.5 },
                                boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.10)",
                                display: "flex",
                                flexDirection: "column",
                                gap: 1.75,
                            }}
                        >
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={36}
                                height={36}
                                style={{ objectFit: "contain" }}
                            />
                            <Stack spacing={1}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 15, md: 16 },
                                        fontWeight: 700,
                                        color: "#1E2B42",
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 12, md: 13 },
                                        color: "#7A8098",
                                        lineHeight: 1.55,
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
};

export default HowItWorksSection;

import { Box, Stack, Typography } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import theme from "@/theme/theme";

import createIcon from "@/assets/howitworks/create.png";
import infoIcon from "@/assets/howitworks/info.png";
import generateIcon from "@/assets/howitworks/generate.png";
import improveIcon from "@/assets/howitworks/improve.png";

type Step = {
    title: string;
    description: string;
    icon: StaticImageData;
};

const STEPS: Step[] = [
    {
        title: "Create your project",
        description: "Start by giving your idea a name and defining the basic scope.",
        icon: createIcon,
    },
    {
        title: "Enter information",
        description:
            "Answer guided questions about your market, product, and goals.",
        icon: infoIcon,
    },
    {
        title: "Generate documents",
        description:
            "AI instantly creates structured documents based on your inputs.",
        icon: generateIcon,
    },
    {
        title: "Improve your project",
        description:
            "Refine, edit, and get professional support to perfect your plan.",
        icon: improveIcon,
    },
];

const SECTION_BG =
    "linear-gradient(90deg, rgba(211, 219, 239, 0.5) 0%, rgba(215, 211, 239, 0.5) 100%)";

const HowItWorksSection = () => {
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
                        fontSize: { xs: 28, md: 40 },
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
                    How it works
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
                    In just a few steps you have a complete structure of your project.
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
                    {STEPS.map((step) => (
                        <Box
                            key={step.title}
                            sx={{
                                bgcolor: "#FFFFFF",
                                borderRadius: 4,
                                p: { xs: 3, md: 3.5 },
                                boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.10)",
                                display: "flex",
                                flexDirection: "column",
                                gap: 2.5,
                                minHeight: { xs: "auto", md: 220 },
                            }}
                        >
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={48}
                                height={48}
                                style={{ objectFit: "contain" }}
                            />
                            <Stack spacing={1}>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 17, md: 19 },
                                        fontWeight: 700,
                                        color: "#1E2B42",
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 13, md: 14 },
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

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import portrait from "@/assets/vision/img.png";

const BULLET_COLOR = "#3F6DDD";

const BULLETS = [
    "Build and validate ideas with AI support",
    "Connect with experts to accelerate growth",
    "Accessible tools for every founder",
    "One platform for building and scaling",
];

const VisionHero = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 14 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Box
                    sx={{
                        order: { xs: 1, md: 2 },
                        flex: 1,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src={portrait}
                        alt="Smiling woman in a white blouse"
                        priority
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: 600,
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </Box>

                <Stack
                    spacing={{ xs: 2.5, md: 3 }}
                    flex={1}
                    sx={{
                        order: { xs: 2, md: 1 },
                        width: "100%",
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 36, md: 56 },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Our Vision
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: { xs: 16, md: 20 },
                            lineHeight: 1.5,
                            maxWidth: 520,
                        }}
                    >
                        We envision an ecosystem where every valid business
                        idea can be developed, validated, and funded,
                        regardless of initial resources.
                    </Typography>

                    <Stack spacing={{ xs: 1.5, md: 2 }} sx={{ pt: 1 }}>
                        {BULLETS.map((text) => (
                            <Stack
                                key={text}
                                direction="row"
                                alignItems="flex-start"
                                spacing={1.5}
                            >
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        bgcolor: BULLET_COLOR,
                                        mt: { xs: "8px", md: "10px" },
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontSize: { xs: 14, md: 16 },
                                        lineHeight: 1.5,
                                        maxWidth: 480,
                                    }}
                                >
                                    {text}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default VisionHero;

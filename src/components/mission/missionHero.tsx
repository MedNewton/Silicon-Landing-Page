import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import portrait from "@/assets/mission/img.png";

const PARAGRAPHS = [
    "Our mission is to make business creation and development more accessible, faster, and more effective.",
    "We want to break down the barriers that currently prevent many ideas from becoming solid businesses.",
];

const MissionHero = () => {
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
                        alt="A man and woman in business attire smiling"
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
                        Our Mission
                    </Typography>

                    {PARAGRAPHS.map((text) => (
                        <Typography
                            key={text}
                            sx={{
                                color: theme.palette.text.primary,
                                fontSize: { xs: 16, md: 20 },
                                lineHeight: 1.5,
                                maxWidth: 520,
                            }}
                        >
                            {text}
                        </Typography>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default MissionHero;

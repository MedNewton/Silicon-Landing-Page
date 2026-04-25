import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TickCircle } from "iconsax-reactjs";
import theme from "@/theme/theme";

import previewImg from "@/assets/aiDocumentGeneration/img.png";

const FEATURES = ["Business Plan", "Pitch Decks", "Business Model Canvas"];

const AiDocumentGenerationSection = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 16 }}
                alignItems="center"
                maxWidth="1280px"
                mx="auto"
            >
                <Box
                    sx={{
                        flex: 1,
                        width: "100%",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src={previewImg}
                        alt="AI document generation preview"
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: 620,
                            objectFit: "contain",
                            display: "block",
                        }}
                    />
                </Box>

                <Stack
                    flex={1}
                    spacing={{ xs: 2.5, md: 3 }}
                    sx={{ width: "100%" }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: 24, md: 32 },
                            fontWeight: 700,
                            lineHeight: 1.2,
                            textTransform: "uppercase",
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        AI Document
                        <br />
                        Generation
                    </Typography>

                    <Typography
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: 14, md: 16 },
                            lineHeight: 1.6,
                            maxWidth: 520,
                        }}
                    >
                        Based on your project data, our AI instantly compiles
                        comprehensive materials ready to present to investors,
                        incubators, or partners.
                    </Typography>

                    <Stack spacing={{ xs: 1.5, md: 2 }} sx={{ pt: 1 }}>
                        {FEATURES.map((label) => (
                            <Stack
                                key={label}
                                direction="row"
                                alignItems="center"
                                spacing={1.5}
                            >
                                <TickCircle
                                    size={22}
                                    color="#4D5AE5"
                                    variant="Linear"
                                />
                                <Typography
                                    sx={{
                                        fontSize: { xs: 15, md: 16 },
                                        fontWeight: 700,
                                        color: "#1E2B42",
                                    }}
                                >
                                    {label}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>

                    <Link
                        href="https://app.silicon-plan.live"
                        target="_blank"
                        sx={{ width: "fit-content", pt: 1 }}
                    >
                        <Button
                            name="start-generating"
                            disableRipple
                            sx={{
                                textTransform: "none",
                                borderRadius: "16px",
                                py: 1.5,
                                px: 4,
                                fontWeight: 400,
                                fontSize: 14,
                                background: theme.palette.titleGradient,
                                color: "#FFFFFF",
                                border: "none",
                                boxShadow: `
                                    0 0 0 1px rgba(96, 126, 255, 0.95),
                                    0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                                    0 18px 32px rgba(88, 124, 255, 0.4)
                                `,
                                "&:hover": {
                                    background: theme.palette.titleGradient,
                                },
                            }}
                        >
                            Start generating
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default AiDocumentGenerationSection;

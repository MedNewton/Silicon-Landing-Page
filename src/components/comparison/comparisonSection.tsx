import { Box, Stack, Typography } from "@mui/material";
import { CloseCircle, TickCircle } from "iconsax-reactjs";
import theme from "@/theme/theme";

type Item = {
    title: string;
    description: string;
};

const NEGATIVE_ITEMS: Item[] = [
    {
        title: "Scattered tools",
        description: "Jumping between docs, spreadsheets, and design tools.",
    },
    {
        title: "Manual work",
        description: "Spending hours formatting and writing from scratch.",
    },
    {
        title: "Confusing process",
        description: "No clear step-by-step guidance on what to do next.",
    },
];

const POSITIVE_ITEMS: Item[] = [
    {
        title: "Guided tour",
        description: "A clear path from idea to presentation.",
    },
    {
        title: "Ready documents",
        description: "AI-generated professional documents in minutes.",
    },
    {
        title: "Clear structure",
        description: "Everything organized in one centralized platform.",
    },
];

const WITH_CARD_GRADIENT =
    "linear-gradient(273.13deg, #5D23DA -6.55%, #2E62DF 106.12%)";

const SECTION_BG =
    "linear-gradient(90deg, rgba(211, 219, 239, 0.21) 0%, rgba(215, 211, 239, 0.21) 100%)";

const ComparisonSection = () => {
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
                spacing={{ xs: 4, md: 5 }}
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
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Creating a project today is{" "}
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            color: "#1E2B42",
                            textDecoration: "line-through",
                            textDecorationThickness: "3px",
                        }}
                    >
                        complex
                    </Box>
                </Typography>

                <Typography
                    sx={{
                        color: theme.palette.text.secondary,
                        fontSize: { xs: 14, md: 16 },
                        textAlign: "center",
                        maxWidth: 620,
                        lineHeight: 1.6,
                    }}
                >
                    Dispersed tools, difficult-to-create documents, and unclear
                    processes make it hard to transform an idea into a concrete
                    project. Silicon Plan simplifies everything into one path.
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 3, md: 3 }}
                    width="100%"
                    sx={{ mt: { xs: 2, md: 4 } }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            bgcolor: "#FFFFFF",
                            borderRadius: 4,
                            p: { xs: 3, md: 5 },
                            boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.14)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 18, md: 20 },
                                fontWeight: 600,
                                color: "#1E2B42",
                                mb: { xs: 3, md: 4 },
                            }}
                        >
                            Without Silicon Plan
                        </Typography>
                        <Stack spacing={{ xs: 2.5, md: 3 }}>
                            {NEGATIVE_ITEMS.map((item) => (
                                <Stack
                                    key={item.title}
                                    direction="row"
                                    alignItems="flex-start"
                                    spacing={2}
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            bgcolor: "rgba(241, 107, 107, 0.10)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <CloseCircle
                                            size={22}
                                            color="#F16B6B"
                                            variant="Linear"
                                        />
                                    </Box>
                                    <Stack spacing={0.5}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: 15, md: 16 },
                                                fontWeight: 700,
                                                color: "#1E2B42",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: 13, md: 14 },
                                                color: "#7A8098",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            flex: 1,
                            background: WITH_CARD_GRADIENT,
                            borderRadius: 4,
                            p: { xs: 3, md: 5 },
                            boxShadow: "0px 16px 48px rgba(63, 77, 204, 0.30)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: 18, md: 20 },
                                fontWeight: 600,
                                color: "#FFFFFF",
                                mb: { xs: 3, md: 4 },
                            }}
                        >
                            With Silicon Plan
                        </Typography>
                        <Stack spacing={{ xs: 2.5, md: 3 }}>
                            {POSITIVE_ITEMS.map((item) => (
                                <Stack
                                    key={item.title}
                                    direction="row"
                                    alignItems="flex-start"
                                    spacing={2}
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            bgcolor: "rgba(255, 255, 255, 0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <TickCircle
                                            size={22}
                                            color="#FFFFFF"
                                            variant="Linear"
                                        />
                                    </Box>
                                    <Stack spacing={0.5}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: 15, md: 16 },
                                                fontWeight: 700,
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: 13, md: 14 },
                                                color: "rgba(255, 255, 255, 0.8)",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ComparisonSection;

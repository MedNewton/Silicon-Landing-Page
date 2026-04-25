import { Box, Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";

type Step = {
    title: string;
    description: string;
};

const STEPS: Step[] = [
    { title: "Idea", description: "Capture your vision" },
    { title: "Canvas", description: "Structure the model" },
    { title: "Business Plan", description: "Detail the strategy" },
    { title: "Pitch", description: "Present to investors" },
];

const LINE_GRADIENT =
    "linear-gradient(90deg, rgba(91, 58, 158, 0) 0%, #5B3A9E 12%, #3B7AF0 50%, #5B3A9E 88%, rgba(91, 58, 158, 0) 100%)";

const ICON_PLACEHOLDER_SX = {
    width: 80,
    height: 80,
    borderRadius: 3,
    bgcolor: "#E5E7EB",
    border: "1px solid rgba(63, 77, 204, 0.35)",
};

const NumberCircle = ({ n }: { n: number }) => (
    <Box
        sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "#FFFFFF",
            border: "2px solid #4D5AE5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 600,
            color: "#4D5AE5",
            flexShrink: 0,
        }}
    >
        {n}
    </Box>
);

const RoadmapSection = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 10 },
                backgroundColor: theme.palette.background.default,
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
                    A clear path to build your project
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
                    You don&apos;t have to know where to start. The platform guides
                    you through every step.
                </Typography>

                {/* Desktop: horizontal row + line with numbered circles */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: "100%",
                        mt: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 0,
                        }}
                    >
                        {STEPS.map((step) => (
                            <Stack
                                key={step.title}
                                alignItems="center"
                                spacing={1.5}
                                px={2}
                            >
                                <Box sx={ICON_PLACEHOLDER_SX} />
                                <Typography
                                    sx={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#1E2B42",
                                        textAlign: "center",
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        color: "#1E2B42",
                                        textAlign: "center",
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Stack>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            position: "relative",
                            mt: 4,
                            height: 32,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                right: 0,
                                height: "1px",
                                transform: "translateY(-50%)",
                                background: LINE_GRADIENT,
                            }}
                        />
                        <Box
                            sx={{
                                position: "relative",
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                height: "100%",
                            }}
                        >
                            {STEPS.map((_, idx) => (
                                <Stack
                                    key={idx}
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <NumberCircle n={idx + 1} />
                                </Stack>
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Mobile: vertical stack with inline number badges */}
                <Stack
                    sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
                    spacing={3}
                >
                    {STEPS.map((step, idx) => (
                        <Stack
                            key={step.title}
                            direction="row"
                            alignItems="center"
                            spacing={2}
                        >
                            <NumberCircle n={idx + 1} />
                            <Box
                                sx={{
                                    ...ICON_PLACEHOLDER_SX,
                                    width: 56,
                                    height: 56,
                                }}
                            />
                            <Stack spacing={0.25}>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#1E2B42",
                                    }}
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        color: "#7A8098",
                                    }}
                                >
                                    {step.description}
                                </Typography>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default RoadmapSection;

import { Box, Stack, Typography } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type Testimonial = { quote: string; author: string };

const SocialProof = async () => {
    const t = await getTranslations("SocialProof");
    const testimonials = t.raw("testimonials") as Testimonial[];

    return (
        <Box
            sx={{
                width: "100%",
                py: { md: 10 },
                px: { md: 4 },
            }}
        >
            <Stack spacing={5} alignItems="center" maxWidth="1180px" mx="auto">
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                        sx={{
                            px: 1.75,
                            py: 0.5,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.25)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: 1.2,
                                backgroundImage: theme.palette.titleGradient,
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {t("eyebrow")}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 34,
                            fontWeight: 700,
                            lineHeight: 1.25,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: {
                            md: "repeat(2, minmax(0, 1fr))",
                        },
                    }}
                >
                    {testimonials.map((testimonial, i) => (
                        <Box
                            key={i}
                            sx={{
                                borderRadius: 4,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                spacing={2.5}
                                sx={{
                                    position: "relative",
                                    height: "100%",
                                    borderRadius: 4,
                                    p: 4,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow:
                                        "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                    overflow: "hidden",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        boxShadow:
                                            "0 12px 28px rgba(88, 124, 255, 0.35)",
                                    }}
                                >
                                    <FormatQuoteRoundedIcon
                                        sx={{
                                            fontSize: 28,
                                            transform: "scaleX(-1)",
                                        }}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 18,
                                        lineHeight: 1.55,
                                        fontWeight: 500,
                                        color: "#1D2340",
                                    }}
                                >
                                    {testimonial.quote}
                                </Typography>
                                <Stack spacing={1} sx={{ mt: "auto" }}>
                                    <Stack direction="row" spacing={0.25}>
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <StarRoundedIcon
                                                key={idx}
                                                sx={{
                                                    fontSize: 18,
                                                    color: "#F6B93B",
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            fontWeight: 600,
                                            letterSpacing: 1.1,
                                            textTransform: "uppercase",
                                            color: theme.palette.secondary.main,
                                        }}
                                    >
                                        {testimonial.author}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
};

export default SocialProof;

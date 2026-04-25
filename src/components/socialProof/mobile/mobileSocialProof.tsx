import { Box, Stack, Typography } from "@mui/material";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type Testimonial = { quote: string; author: string };

const MobileSocialProof = async () => {
    const t = await getTranslations("SocialProof");
    const testimonials = t.raw("testimonials") as Testimonial[];

    return (
        <Box sx={{ width: "100%", py: 6, px: 2 }}>
            <Stack spacing={4} alignItems="center">
                <Stack spacing={1.5} alignItems="center" textAlign="center">
                    <Box
                        sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.25)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 11,
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
                            fontSize: 24,
                            fontWeight: 700,
                            lineHeight: 1.3,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                </Stack>

                <Stack spacing={2} width="100%">
                    {testimonials.map((testimonial, i) => (
                        <Box
                            key={i}
                            sx={{
                                borderRadius: 3,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                spacing={1.5}
                                sx={{
                                    borderRadius: 3,
                                    p: 2.5,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow:
                                        "0px 12px 28px rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 1.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        boxShadow:
                                            "0 8px 20px rgba(88, 124, 255, 0.35)",
                                    }}
                                >
                                    <FormatQuoteRoundedIcon
                                        sx={{
                                            fontSize: 22,
                                            transform: "scaleX(-1)",
                                        }}
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        lineHeight: 1.5,
                                        fontWeight: 500,
                                        color: "#1D2340",
                                    }}
                                >
                                    {testimonial.quote}
                                </Typography>
                                <Stack spacing={0.5}>
                                    <Stack direction="row" spacing={0.25}>
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <StarRoundedIcon
                                                key={idx}
                                                sx={{
                                                    fontSize: 14,
                                                    color: "#F6B93B",
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                    <Typography
                                        sx={{
                                            fontSize: 10.5,
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
                </Stack>
            </Stack>
        </Box>
    );
};

export default MobileSocialProof;

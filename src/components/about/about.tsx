import { Box, Divider, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { getTranslations } from "next-intl/server";
import { HEADER_HEIGHT } from "@/components/layout/header";
import theme from "@/theme/theme";

type Audience = { emoji: string; label: string };
type ValueItem = { title: string; body: string };

const anchorSx = { scrollMarginTop: `${HEADER_HEIGHT}px` };

const VALUE_ICONS = [
    ArchitectureOutlinedIcon,
    PsychologyOutlinedIcon,
    Diversity3OutlinedIcon,
    TrendingUpOutlinedIcon,
];

const About = async () => {
    const t = await getTranslations("About");

    const whoParagraphs = t.raw("whoWeAre.paragraphs") as string[];
    const deliverables = t.raw("whoWeAre.deliverables") as string[];
    const audiences = t.raw("target.audiences") as Audience[];
    const barriers = t.raw("mission.barriers") as string[];
    const pillars = t.raw("vision.pillars") as string[];
    const valueItems = t.raw("values.items") as ValueItem[];

    const Eyebrow = ({ text }: { text: string }) => (
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
                {text}
            </Typography>
        </Box>
    );

    const SectionTitle = ({ text }: { text: string }) => (
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
            {text}
        </Typography>
    );

    return (
        <Box
            sx={{
                width: "100%",
                py: { md: 10 },
                px: { md: 4 },
            }}
        >
            <Stack spacing={8} alignItems="center" maxWidth="1180px" mx="auto">
                {/* WHO WE ARE */}
                <Stack
                    spacing={3}
                    alignItems="center"
                    textAlign="center"
                    width="100%"
                >
                    <Eyebrow text={t("whoWeAre.eyebrow")} />
                    <SectionTitle text={t("whoWeAre.title")} />
                    <Stack spacing={2} maxWidth={820}>
                        {whoParagraphs.map((para, i) => (
                            <Typography
                                key={i}
                                sx={{
                                    fontSize: 16,
                                    color: theme.palette.secondary.main,
                                    lineHeight: 1.6,
                                }}
                            >
                                {para}
                            </Typography>
                        ))}
                    </Stack>
                    <Box
                        sx={{
                            display: "grid",
                            gap: 1.5,
                            gridTemplateColumns: {
                                xs: "repeat(2, minmax(0, 1fr))",
                                md: "repeat(5, minmax(0, 1fr))",
                            },
                            width: "100%",
                            maxWidth: 960,
                        }}
                    >
                        {deliverables.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    borderRadius: 3,
                                    p: "1px",
                                    background:
                                        theme.palette.heroFakeBorderGradient,
                                }}
                            >
                                <Box
                                    sx={{
                                        borderRadius: 3,
                                        py: 1.5,
                                        px: 1.5,
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow:
                                            "0px 10px 24px rgba(30, 43, 66, 0.06)",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 13,
                                            fontWeight: 600,
                                            color: "#1D2340",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Stack>

                <Divider
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        borderColor: "rgba(101, 71, 165, 0.2)",
                    }}
                />

                {/* TARGET */}
                <Box
                    component="section"
                    id="about-target"
                    sx={{ ...anchorSx, width: "100%" }}
                >
                    <Stack spacing={3} alignItems="center" textAlign="center">
                        <Eyebrow text={t("target.eyebrow")} />
                        <SectionTitle text={t("target.title")} />
                        <Typography
                            sx={{
                                fontSize: 16,
                                color: theme.palette.secondary.main,
                                lineHeight: 1.6,
                            }}
                        >
                            {t("target.intro")}
                        </Typography>
                        <Stack spacing={1.25} width="100%" maxWidth={720}>
                            {audiences.map((audience, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        borderRadius: 3,
                                        p: "1px",
                                        background:
                                            theme.palette.heroFakeBorderGradient,
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        sx={{
                                            borderRadius: 3,
                                            py: 1.5,
                                            px: 2,
                                            bgcolor: "#FFFFFF",
                                            backgroundImage:
                                                "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                            boxShadow:
                                                "0px 10px 24px rgba(30, 43, 66, 0.06)",
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            sx={{ fontSize: 24 }}
                                        >
                                            {audience.emoji}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 15,
                                                fontWeight: 500,
                                                color: "#1D2340",
                                                textAlign: "left",
                                            }}
                                        >
                                            {audience.label}
                                        </Typography>
                                    </Stack>
                                </Box>
                            ))}
                        </Stack>
                        <Typography
                            sx={{
                                fontSize: 15,
                                fontStyle: "italic",
                                color: theme.palette.secondary.main,
                                mt: 1,
                            }}
                        >
                            {t("target.closing")}
                        </Typography>
                    </Stack>
                </Box>

                <Divider
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        borderColor: "rgba(101, 71, 165, 0.2)",
                    }}
                />

                {/* MISSION & VISION */}
                <Box
                    component="section"
                    id="about-mission"
                    sx={{ ...anchorSx, width: "100%" }}
                >
                    <Stack spacing={4} width="100%">
                        <Box
                            sx={{
                                display: "grid",
                                gap: 3,
                                gridTemplateColumns: {
                                    md: "repeat(2, minmax(0, 1fr))",
                                },
                            }}
                        >
                            {/* Mission */}
                            <Box
                                sx={{
                                    borderRadius: 4,
                                    p: "1px",
                                    background:
                                        theme.palette.heroFakeBorderGradient,
                                }}
                            >
                                <Stack
                                    spacing={2}
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        p: 4,
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow:
                                            "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="center"
                                    >
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background:
                                                    theme.palette.titleGradient,
                                                color: "#FFFFFF",
                                                boxShadow:
                                                    "0 12px 28px rgba(88, 124, 255, 0.35)",
                                            }}
                                        >
                                            <FlagRoundedIcon
                                                sx={{ fontSize: 24 }}
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: 22,
                                                fontWeight: 700,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {t("mission.title")}
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            color: theme.palette.secondary.main,
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {t("mission.body")}
                                    </Typography>
                                    <Stack spacing={1}>
                                        {barriers.map((barrier, i) => (
                                            <Stack
                                                key={i}
                                                direction="row"
                                                spacing={1.25}
                                                alignItems="center"
                                            >
                                                <CheckCircleRoundedIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: "#6547A5",
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        fontSize: 14,
                                                        color: "#1D2340",
                                                    }}
                                                >
                                                    {barrier}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                    <Box
                                        sx={{
                                            mt: "auto",
                                            pt: 1,
                                            px: 2,
                                            py: 1.5,
                                            borderRadius: 2,
                                            background:
                                                "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                            border: "1px solid rgba(101, 71, 165, 0.2)",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                fontWeight: 600,
                                                color: "#1D2340",
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {t("mission.callout")}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            {/* Vision */}
                            <Box
                                sx={{
                                    borderRadius: 4,
                                    p: "1px",
                                    background:
                                        theme.palette.heroFakeBorderGradient,
                                }}
                            >
                                <Stack
                                    spacing={2}
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        p: 4,
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow:
                                            "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="center"
                                    >
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background:
                                                    theme.palette.titleGradient,
                                                color: "#FFFFFF",
                                                boxShadow:
                                                    "0 12px 28px rgba(88, 124, 255, 0.35)",
                                            }}
                                        >
                                            <VisibilityOutlinedIcon
                                                sx={{ fontSize: 24 }}
                                            />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: 22,
                                                fontWeight: 700,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {t("vision.title")}
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            color: theme.palette.secondary.main,
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {t("vision.body")}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        useFlexGap
                                        flexWrap="wrap"
                                    >
                                        {pillars.map((pillar, i) => (
                                            <Box
                                                key={i}
                                                sx={{
                                                    px: 1.5,
                                                    py: 0.75,
                                                    borderRadius: 999,
                                                    border: "1px solid rgba(101, 71, 165, 0.25)",
                                                    background:
                                                        "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 13,
                                                        fontWeight: 600,
                                                        backgroundImage:
                                                            theme.palette
                                                                .titleGradient,
                                                        WebkitBackgroundClip:
                                                            "text",
                                                        color: "transparent",
                                                    }}
                                                >
                                                    {pillar}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Stack>
                </Box>

                <Divider
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        borderColor: "rgba(101, 71, 165, 0.2)",
                    }}
                />

                {/* VALUES */}
                <Box
                    component="section"
                    id="about-values"
                    sx={{ ...anchorSx, width: "100%" }}
                >
                    <Stack spacing={3} alignItems="center">
                        <Stack spacing={2} alignItems="center" textAlign="center">
                            <Eyebrow text={t("values.eyebrow")} />
                            <SectionTitle text={t("values.title")} />
                            <Typography
                                sx={{
                                    fontSize: 16,
                                    color: theme.palette.secondary.main,
                                    lineHeight: 1.6,
                                    maxWidth: 820,
                                }}
                            >
                                {t("values.intro")}
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
                            {valueItems.map((item, i) => {
                                const Icon =
                                    VALUE_ICONS[i % VALUE_ICONS.length] ??
                                    ArchitectureOutlinedIcon;
                                return (
                                    <Box
                                        key={i}
                                        sx={{
                                            borderRadius: 4,
                                            p: "1px",
                                            background:
                                                theme.palette
                                                    .heroFakeBorderGradient,
                                        }}
                                    >
                                        <Stack
                                            spacing={2}
                                            sx={{
                                                height: "100%",
                                                borderRadius: 4,
                                                p: 3.5,
                                                bgcolor: "#FFFFFF",
                                                backgroundImage:
                                                    "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                                boxShadow:
                                                    "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: 2,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    background:
                                                        theme.palette
                                                            .titleGradient,
                                                    color: "#FFFFFF",
                                                    boxShadow:
                                                        "0 12px 28px rgba(88, 124, 255, 0.35)",
                                                }}
                                            >
                                                <Icon sx={{ fontSize: 28 }} />
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontSize: 20,
                                                    fontWeight: 700,
                                                    color: "#1D2340",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    color: theme.palette
                                                        .secondary.main,
                                                    lineHeight: 1.55,
                                                }}
                                            >
                                                {item.body}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default About;

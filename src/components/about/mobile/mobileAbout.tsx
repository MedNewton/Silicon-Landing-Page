import { Box, Divider, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArchitectureOutlinedIcon from "@mui/icons-material/ArchitectureOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { getTranslations } from "next-intl/server";
import { MOBILE_HEADER_HEIGHT } from "@/components/layout/mobile/mobileHeader";
import theme from "@/theme/theme";

type Audience = { emoji: string; label: string };
type ValueItem = { title: string; body: string };

const anchorSx = { scrollMarginTop: `${MOBILE_HEADER_HEIGHT}px` };

const VALUE_ICONS = [
    ArchitectureOutlinedIcon,
    PsychologyOutlinedIcon,
    Diversity3OutlinedIcon,
    TrendingUpOutlinedIcon,
];

const MobileAbout = async () => {
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
                {text}
            </Typography>
        </Box>
    );

    const SectionTitle = ({ text }: { text: string }) => (
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
            {text}
        </Typography>
    );

    return (
        <Box sx={{ width: "100%", py: 6, px: 2 }}>
            <Stack spacing={6} alignItems="stretch">
                {/* WHO WE ARE */}
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Eyebrow text={t("whoWeAre.eyebrow")} />
                    <SectionTitle text={t("whoWeAre.title")} />
                    <Stack spacing={1.5}>
                        {whoParagraphs.map((para, i) => (
                            <Typography
                                key={i}
                                sx={{
                                    fontSize: 14,
                                    color: theme.palette.secondary.main,
                                    lineHeight: 1.55,
                                }}
                            >
                                {para}
                            </Typography>
                        ))}
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                        justifyContent="center"
                    >
                        {deliverables.map((item, i) => (
                            <Box
                                key={i}
                                sx={{
                                    borderRadius: 2,
                                    p: "1px",
                                    background:
                                        theme.palette.heroFakeBorderGradient,
                                }}
                            >
                                <Box
                                    sx={{
                                        borderRadius: 2,
                                        py: 0.75,
                                        px: 1.25,
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: "#1D2340",
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Stack>

                <Divider sx={{ borderColor: "rgba(101, 71, 165, 0.2)" }} />

                {/* TARGET */}
                <Box
                    component="section"
                    id="about-target"
                    sx={{ ...anchorSx, width: "100%" }}
                >
                    <Stack spacing={2} alignItems="center" textAlign="center">
                        <Eyebrow text={t("target.eyebrow")} />
                        <SectionTitle text={t("target.title")} />
                        <Typography
                            sx={{
                                fontSize: 14,
                                color: theme.palette.secondary.main,
                                lineHeight: 1.5,
                            }}
                        >
                            {t("target.intro")}
                        </Typography>
                        <Stack spacing={1} width="100%">
                            {audiences.map((audience, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        borderRadius: 2,
                                        p: "1px",
                                        background:
                                            theme.palette.heroFakeBorderGradient,
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="center"
                                        sx={{
                                            borderRadius: 2,
                                            py: 1.25,
                                            px: 1.5,
                                            bgcolor: "#FFFFFF",
                                            backgroundImage:
                                                "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        }}
                                    >
                                        <Typography
                                            component="span"
                                            sx={{ fontSize: 20 }}
                                        >
                                            {audience.emoji}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 13,
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
                                fontSize: 13,
                                fontStyle: "italic",
                                color: theme.palette.secondary.main,
                            }}
                        >
                            {t("target.closing")}
                        </Typography>
                    </Stack>
                </Box>

                <Divider sx={{ borderColor: "rgba(101, 71, 165, 0.2)" }} />

                {/* MISSION & VISION */}
                <Box
                    component="section"
                    id="about-mission"
                    sx={{ ...anchorSx, width: "100%" }}
                >
                    <Stack spacing={2}>
                        {/* Mission */}
                        <Box
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
                                <Stack
                                    direction="row"
                                    spacing={1.25}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 1.5,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background:
                                                theme.palette.titleGradient,
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        <FlagRoundedIcon
                                            sx={{ fontSize: 20 }}
                                        />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: "#1D2340",
                                        }}
                                    >
                                        {t("mission.title")}
                                    </Typography>
                                </Stack>
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        color: theme.palette.secondary.main,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {t("mission.body")}
                                </Typography>
                                <Stack spacing={0.75}>
                                    {barriers.map((barrier, i) => (
                                        <Stack
                                            key={i}
                                            direction="row"
                                            spacing={1}
                                            alignItems="center"
                                        >
                                            <CheckCircleRoundedIcon
                                                sx={{
                                                    fontSize: 14,
                                                    color: "#6547A5",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: 12.5,
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
                                        px: 1.5,
                                        py: 1.25,
                                        borderRadius: 1.5,
                                        background:
                                            "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                        border: "1px solid rgba(101, 71, 165, 0.2)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 12.5,
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
                                <Stack
                                    direction="row"
                                    spacing={1.25}
                                    alignItems="center"
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: 1.5,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background:
                                                theme.palette.titleGradient,
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        <VisibilityOutlinedIcon
                                            sx={{ fontSize: 20 }}
                                        />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: "#1D2340",
                                        }}
                                    >
                                        {t("vision.title")}
                                    </Typography>
                                </Stack>
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        color: theme.palette.secondary.main,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {t("vision.body")}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={0.75}
                                    useFlexGap
                                    flexWrap="wrap"
                                >
                                    {pillars.map((pillar, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                px: 1.25,
                                                py: 0.5,
                                                borderRadius: 999,
                                                border: "1px solid rgba(101, 71, 165, 0.25)",
                                                background:
                                                    "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: 11.5,
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
                    </Stack>
                </Box>

                <Divider sx={{ borderColor: "rgba(101, 71, 165, 0.2)" }} />

                {/* VALUES */}
                <Box
                    component="section"
                    id="about-values"
                    sx={{ ...anchorSx, width: "100%" }}
                >
                    <Stack spacing={2} alignItems="stretch">
                        <Stack spacing={1.5} alignItems="center" textAlign="center">
                            <Eyebrow text={t("values.eyebrow")} />
                            <SectionTitle text={t("values.title")} />
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    color: theme.palette.secondary.main,
                                    lineHeight: 1.5,
                                }}
                            >
                                {t("values.intro")}
                            </Typography>
                        </Stack>
                        <Stack spacing={1.5}>
                            {valueItems.map((item, i) => {
                                const Icon =
                                    VALUE_ICONS[i % VALUE_ICONS.length] ??
                                    ArchitectureOutlinedIcon;
                                return (
                                    <Box
                                        key={i}
                                        sx={{
                                            borderRadius: 3,
                                            p: "1px",
                                            background:
                                                theme.palette
                                                    .heroFakeBorderGradient,
                                        }}
                                    >
                                        <Stack
                                            spacing={1}
                                            sx={{
                                                borderRadius: 3,
                                                p: 2,
                                                bgcolor: "#FFFFFF",
                                                backgroundImage:
                                                    "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                                boxShadow:
                                                    "0px 12px 28px rgba(30, 43, 66, 0.08)",
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                spacing={1.25}
                                                alignItems="center"
                                            >
                                                <Box
                                                    sx={{
                                                        width: 40,
                                                        height: 40,
                                                        borderRadius: 1.5,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        background:
                                                            theme.palette
                                                                .titleGradient,
                                                        color: "#FFFFFF",
                                                    }}
                                                >
                                                    <Icon
                                                        sx={{ fontSize: 22 }}
                                                    />
                                                </Box>
                                                <Typography
                                                    sx={{
                                                        fontSize: 16,
                                                        fontWeight: 700,
                                                        color: "#1D2340",
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                sx={{
                                                    fontSize: 13,
                                                    color: theme.palette
                                                        .secondary.main,
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {item.body}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                );
                            })}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default MobileAbout;

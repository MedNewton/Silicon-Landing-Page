import type { Metadata } from "next";
import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header, { HEADER_HEIGHT } from "@/components/layout/header";
import MobileHeader, {
    MOBILE_HEADER_HEIGHT,
} from "@/components/layout/mobile/mobileHeader";
import Footer from "@/components/layout/footer";
import theme from "@/theme/theme";

type Article = {
    title: string;
    description: string;
    category: string;
    date: string;
};

type CategoryKey =
    | "businessPlan"
    | "pitch"
    | "fundraising"
    | "strategia"
    | "ai"
    | "casiStudio";

const CATEGORY_GRADIENTS: Record<CategoryKey, string> = {
    businessPlan:
        "linear-gradient(135deg, #6547A5 0%, #3F6DDD 100%)",
    pitch: "linear-gradient(135deg, #3F6DDD 0%, #4FC3F7 100%)",
    fundraising:
        "linear-gradient(135deg, #5B3A9E 0%, #EC6EAD 100%)",
    strategia:
        "linear-gradient(135deg, #3F6DDD 0%, #6547A5 100%)",
    ai: "linear-gradient(135deg, #6547A5 0%, #F6B93B 100%)",
    casiStudio:
        "linear-gradient(135deg, #1E2B42 0%, #6547A5 100%)",
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Blog" });
    return {
        title: t("metadata.title"),
        description: t("metadata.description"),
    };
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations("Blog");

    const articles = t.raw("articles") as Article[];

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Header />
            <MobileHeader />
            <Stack
                width="100%"
                height="100%"
                alignItems="center"
                sx={{
                    py: { xs: 0.75, md: 1.5 },
                    px: { xs: 1, md: 2 },
                    pt: {
                        xs: `${MOBILE_HEADER_HEIGHT + 8}px`,
                        md: `${HEADER_HEIGHT + 12}px`,
                    },
                }}
            >
                {/* Hero */}
                <Box
                    sx={{
                        width: "100%",
                        py: { xs: 6, md: 10 },
                        px: { xs: 2, md: 4 },
                    }}
                >
                    <Stack
                        spacing={{ xs: 1.5, md: 2 }}
                        alignItems="center"
                        textAlign="center"
                        maxWidth="860px"
                        mx="auto"
                    >
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
                                    fontSize: { xs: 11, md: 12 },
                                    fontWeight: 600,
                                    letterSpacing: 1.2,
                                    backgroundImage:
                                        theme.palette.titleGradient,
                                    WebkitBackgroundClip: "text",
                                    color: "transparent",
                                }}
                            >
                                {t("eyebrow")}
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: { xs: 26, md: 40 },
                                fontWeight: 700,
                                lineHeight: 1.2,
                                backgroundImage: theme.palette.titleGradient,
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {t("title")}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: 14, md: 17 },
                                color: theme.palette.secondary.main,
                                lineHeight: 1.6,
                                maxWidth: 720,
                            }}
                        >
                            {t("subtitle")}
                        </Typography>
                    </Stack>
                </Box>

                {/* Article grid */}
                <Box
                    sx={{
                        width: "100%",
                        pb: { xs: 6, md: 10 },
                        px: { xs: 2, md: 4 },
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: "1180px",
                            mx: "auto",
                            display: "grid",
                            gap: { xs: 2.5, md: 3 },
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, minmax(0, 1fr))",
                                md: "repeat(3, minmax(0, 1fr))",
                            },
                        }}
                    >
                        {articles.map((article, i) => {
                            const categoryKey = article.category as CategoryKey;
                            const categoryLabel = t(
                                `categoryLabels.${categoryKey}`,
                            );
                            const gradient =
                                CATEGORY_GRADIENTS[categoryKey] ??
                                theme.palette.titleGradient;

                            return (
                                <Box
                                    key={i}
                                    sx={{
                                        borderRadius: 4,
                                        p: "1px",
                                        background:
                                            theme.palette.heroFakeBorderGradient,
                                        transition:
                                            "transform 0.25s ease, box-shadow 0.25s ease",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                        },
                                    }}
                                >
                                    <Stack
                                        sx={{
                                            height: "100%",
                                            borderRadius: 4,
                                            overflow: "hidden",
                                            bgcolor: "#FFFFFF",
                                            backgroundImage:
                                                "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                            boxShadow:
                                                "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                        }}
                                    >
                                        {/* Placeholder image */}
                                        <Box
                                            sx={{
                                                position: "relative",
                                                width: "100%",
                                                aspectRatio: "16 / 9",
                                                background: gradient,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    background:
                                                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%)",
                                                }}
                                            />
                                            <ArticleOutlinedIcon
                                                sx={{
                                                    fontSize: 56,
                                                    color: "rgba(255, 255, 255, 0.85)",
                                                    position: "relative",
                                                    zIndex: 1,
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 12,
                                                    left: 12,
                                                    px: 1.25,
                                                    py: 0.4,
                                                    borderRadius: 999,
                                                    bgcolor:
                                                        "rgba(255, 255, 255, 0.85)",
                                                    backdropFilter: "blur(6px)",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 11,
                                                        fontWeight: 700,
                                                        letterSpacing: 0.8,
                                                        textTransform: "uppercase",
                                                        color: "#1D2340",
                                                    }}
                                                >
                                                    {categoryLabel}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Stack
                                            spacing={1.5}
                                            sx={{ p: 3, flexGrow: 1 }}
                                        >
                                            <Stack
                                                direction="row"
                                                spacing={0.75}
                                                alignItems="center"
                                            >
                                                <CalendarTodayRoundedIcon
                                                    sx={{
                                                        fontSize: 14,
                                                        color: theme.palette
                                                            .secondary.main,
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        fontSize: 12,
                                                        fontWeight: 500,
                                                        color: theme.palette
                                                            .secondary.main,
                                                    }}
                                                >
                                                    {article.date}
                                                </Typography>
                                            </Stack>
                                            <Typography
                                                sx={{
                                                    fontSize: 18,
                                                    fontWeight: 700,
                                                    lineHeight: 1.35,
                                                    color: "#1D2340",
                                                }}
                                            >
                                                {article.title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    lineHeight: 1.55,
                                                    color: theme.palette
                                                        .secondary.main,
                                                }}
                                            >
                                                {article.description}
                                            </Typography>
                                            <Box sx={{ mt: "auto", pt: 1 }}>
                                                {/* TODO: wire to real article routes */}
                                                <Stack
                                                    component="a"
                                                    href="#"
                                                    direction="row"
                                                    spacing={0.75}
                                                    alignItems="center"
                                                    sx={{
                                                        textDecoration: "none",
                                                        color: "#6547A5",
                                                        fontWeight: 600,
                                                        fontSize: 14,
                                                        transition:
                                                            "color 0.2s ease, transform 0.2s ease",
                                                        "&:hover": {
                                                            color: "#3F6DDD",
                                                            "& .arrow": {
                                                                transform:
                                                                    "translateX(3px)",
                                                            },
                                                        },
                                                    }}
                                                >
                                                    <span>{t("readMore")}</span>
                                                    <ArrowForwardRoundedIcon
                                                        className="arrow"
                                                        sx={{
                                                            fontSize: 16,
                                                            transition:
                                                                "transform 0.2s ease",
                                                        }}
                                                    />
                                                </Stack>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Stack>
            <Footer />
        </Stack>
    );
}

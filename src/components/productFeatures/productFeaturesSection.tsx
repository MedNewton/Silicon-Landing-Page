import { Box, Stack, Typography } from "@mui/material";
import { Play } from "iconsax-reactjs";
import theme from "@/theme/theme";
import { getTranslations } from "next-intl/server";

type FeatureItem = {
    id: string;
    title: string;
    description: string;
};

const VideoPlaceholder = ({ caption }: { caption: string }) => (
    <Box
        sx={{
            width: "100%",
            maxWidth: 560,
            aspectRatio: "16 / 9",
            borderRadius: 4,
            position: "relative",
            background: theme.palette.headerGradient,
            border: "1px solid rgba(63, 109, 221, 0.18)",
            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.10)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
        }}
    >
        <Box
            sx={{
                width: { xs: 56, md: 72 },
                height: { xs: 56, md: 72 },
                borderRadius: "50%",
                background: theme.palette.titleGradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 12px 32px rgba(91, 58, 158, 0.28)",
            }}
        >
            <Play size={28} color="#FFFFFF" variant="Bold" />
        </Box>
        <Typography
            sx={{
                fontSize: { xs: 12, md: 13 },
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#3D537B",
            }}
        >
            {caption}
        </Typography>
    </Box>
);

const FeatureRow = ({
    item,
    reverse,
    caption,
}: {
    item: FeatureItem;
    reverse: boolean;
    caption: string;
}) => (
    <Stack
        id={item.id}
        component="article"
        direction={{
            xs: "column",
            md: reverse ? "row-reverse" : "row",
        }}
        spacing={{ xs: 3, md: 8, lg: 12 }}
        alignItems="center"
        sx={{
            width: "100%",
            scrollMarginTop: { xs: 96, md: 120 },
        }}
    >
        <Stack flex={1} spacing={{ xs: 1.5, md: 2 }} sx={{ width: "100%" }}>
            <Typography
                component="h3"
                sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: "#1E2B42",
                }}
            >
                {item.title}
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: 1.65,
                    maxWidth: 520,
                }}
            >
                {item.description}
            </Typography>
        </Stack>

        <Box
            sx={{
                flex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <VideoPlaceholder caption={caption} />
        </Box>
    </Stack>
);

const ProductFeaturesSection = async () => {
    const t = await getTranslations("productFeatures");
    const items = t.raw("items") as FeatureItem[];
    const caption = t("videoPlaceholder");

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
                spacing={{ xs: 5, md: 8 }}
                alignItems="center"
                maxWidth="1280px"
                mx="auto"
                width="100%"
            >
                <Stack spacing={{ xs: 2, md: 2.5 }} alignItems="center" textAlign="center">
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: 24, md: 32 },
                            fontWeight: 700,
                            lineHeight: 1.2,
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                            maxWidth: 820,
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: 14, md: 16 },
                            lineHeight: 1.6,
                            maxWidth: 640,
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                </Stack>

                <Stack spacing={{ xs: 6, md: 10 }} sx={{ width: "100%" }}>
                    {items.map((item, index) => (
                        <FeatureRow
                            key={item.id}
                            item={item}
                            reverse={index % 2 === 1}
                            caption={caption}
                        />
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default ProductFeaturesSection;

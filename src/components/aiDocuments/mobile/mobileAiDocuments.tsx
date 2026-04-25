import { Box, Stack, Typography } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import EmojiPeopleRoundedIcon from "@mui/icons-material/EmojiPeopleRounded";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type DocDef = { Icon: typeof DescriptionOutlinedIcon };

const DOCS: DocDef[] = [
    { Icon: DescriptionOutlinedIcon },
    { Icon: SlideshowOutlinedIcon },
    { Icon: DashboardOutlinedIcon },
];

type DocContent = { name: string; description: string };

const MobileAiDocuments = async () => {
    const t = await getTranslations("AiDocuments");
    const docs = t.raw("docs") as DocContent[];
    const formats = t.raw("exportFormats") as string[];

    const supportItems: {
        Icon: typeof DataObjectRoundedIcon;
        text: string;
    }[] = [
        { Icon: DataObjectRoundedIcon, text: t("supportLine1") },
        { Icon: IosShareRoundedIcon, text: t("supportLine2") },
        { Icon: EmojiPeopleRoundedIcon, text: t("supportLine3") },
    ];

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
                    {DOCS.map(({ Icon }, i) => {
                        const doc = docs[i];
                        return (
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
                                        p: 2,
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow: "0px 12px 28px rgba(30, 43, 66, 0.08)",
                                    }}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Box
                                            sx={{
                                                flexShrink: 0,
                                                width: 48,
                                                height: 48,
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
                                            <Icon sx={{ fontSize: 24 }} />
                                        </Box>
                                        <Stack spacing={0.25} flex={1}>
                                            <Typography
                                                sx={{
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: "#1D2340",
                                                }}
                                            >
                                                {doc?.name}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: 13,
                                                    color: theme.palette.secondary.main,
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {doc?.description}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={0.75}
                                        useFlexGap
                                        flexWrap="wrap"
                                    >
                                        {formats.map((fmt) => (
                                            <Box
                                                key={fmt}
                                                sx={{
                                                    px: 1,
                                                    py: 0.25,
                                                    borderRadius: 999,
                                                    border: "1px solid rgba(101, 71, 165, 0.25)",
                                                    background:
                                                        "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 10,
                                                        fontWeight: 600,
                                                        letterSpacing: 0.4,
                                                        backgroundImage:
                                                            theme.palette.titleGradient,
                                                        WebkitBackgroundClip: "text",
                                                        color: "transparent",
                                                    }}
                                                >
                                                    {fmt}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Stack>
                            </Box>
                        );
                    })}
                </Stack>

                <Stack spacing={1} alignItems="flex-start" width="100%">
                    {supportItems.map(({ Icon, text }, i) => (
                        <Stack
                            key={i}
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                        >
                            <Box
                                sx={{
                                    flexShrink: 0,
                                    width: 24,
                                    height: 24,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background:
                                        "linear-gradient(135deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                                    color: "#6547A5",
                                }}
                            >
                                <Icon sx={{ fontSize: 14 }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: 13,
                                    color: theme.palette.secondary.main,
                                }}
                            >
                                {text}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default MobileAiDocuments;

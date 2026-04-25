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

const AiDocuments = async () => {
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
                            maxWidth: 820,
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
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    }}
                >
                    {DOCS.map(({ Icon }, i) => {
                        const doc = docs[i];
                        return (
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
                                    alignItems="flex-start"
                                    sx={{
                                        height: "100%",
                                        borderRadius: 4,
                                        p: 3.5,
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow: "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 64,
                                            height: 64,
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
                                        <Icon sx={{ fontSize: 32 }} />
                                    </Box>
                                    <Stack spacing={0.75}>
                                        <Typography
                                            sx={{
                                                fontSize: 20,
                                                fontWeight: 700,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {doc?.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                color: theme.palette.secondary.main,
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {doc?.description}
                                        </Typography>
                                    </Stack>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        useFlexGap
                                        flexWrap="wrap"
                                        sx={{ mt: "auto", pt: 1 }}
                                    >
                                        {formats.map((fmt) => (
                                            <Box
                                                key={fmt}
                                                sx={{
                                                    px: 1.25,
                                                    py: 0.35,
                                                    borderRadius: 999,
                                                    border: "1px solid rgba(101, 71, 165, 0.25)",
                                                    background:
                                                        "linear-gradient(273deg, rgba(101, 71, 165, 0.08) 0%, rgba(63, 109, 221, 0.08) 100%)",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontSize: 11,
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
                </Box>

                <Stack spacing={1.25} alignItems="center" textAlign="center">
                    {supportItems.map(({ Icon, text }, i) => (
                        <Stack
                            key={i}
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                        >
                            <Box
                                sx={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background:
                                        "linear-gradient(135deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                                    color: "#6547A5",
                                }}
                            >
                                <Icon sx={{ fontSize: 16 }} />
                            </Box>
                            <Typography
                                sx={{
                                    fontSize: 15,
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

export default AiDocuments;

import { Box, Stack, Typography } from "@mui/material";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

type StepDef = { Icon: typeof AddCircleOutlineRoundedIcon };

const STEPS: StepDef[] = [
    { Icon: AddCircleOutlineRoundedIcon },
    { Icon: EditNoteRoundedIcon },
    { Icon: AutoAwesomeOutlinedIcon },
    { Icon: TrendingUpRoundedIcon },
];

const MobileHowItWorks = async () => {
    const t = await getTranslations("HowItWorks");
    const steps = t.raw("steps") as string[];

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
                    {STEPS.map(({ Icon }, i) => (
                        <Box
                            key={i}
                            sx={{
                                borderRadius: 3,
                                p: "1px",
                                background: theme.palette.heroFakeBorderGradient,
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                sx={{
                                    borderRadius: 3,
                                    p: 2,
                                    bgcolor: "#FFFFFF",
                                    backgroundImage:
                                        "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                    boxShadow: "0px 12px 28px rgba(30, 43, 66, 0.08)",
                                }}
                            >
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 40,
                                        height: 40,
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        boxShadow:
                                            "0 8px 20px rgba(88, 124, 255, 0.35)",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            fontWeight: 700,
                                            color: "#FFFFFF",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {i + 1}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        flex: 1,
                                        fontSize: 15,
                                        fontWeight: 600,
                                        color: "#1D2340",
                                    }}
                                >
                                    {steps[i]}
                                </Typography>
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: 32,
                                        height: 32,
                                        borderRadius: 1.25,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background:
                                            "linear-gradient(135deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                                        color: "#6547A5",
                                    }}
                                >
                                    <Icon sx={{ fontSize: 18 }} />
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Stack>

                <Typography
                    sx={{
                        fontSize: 14,
                        textAlign: "center",
                        color: theme.palette.secondary.main,
                    }}
                >
                    {t("closing")}
                </Typography>
            </Stack>
        </Box>
    );
};

export default MobileHowItWorks;

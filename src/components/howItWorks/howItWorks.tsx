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

const HowItWorks = async () => {
    const t = await getTranslations("HowItWorks");
    const steps = t.raw("steps") as string[];

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
                            maxWidth: 760,
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
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    }}
                >
                    {STEPS.map(({ Icon }, i) => (
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
                                <Stack
                                    direction="row"
                                    spacing={1.5}
                                    alignItems="center"
                                    sx={{ width: "100%" }}
                                >
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background: theme.palette.titleGradient,
                                            color: "#FFFFFF",
                                            boxShadow:
                                                "0 10px 24px rgba(88, 124, 255, 0.35)",
                                            fontWeight: 700,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 20,
                                                fontWeight: 700,
                                                color: "#FFFFFF",
                                                lineHeight: 1,
                                            }}
                                        >
                                            {i + 1}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 1.5,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            background:
                                                "linear-gradient(135deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                                            color: "#6547A5",
                                            ml: "auto",
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                    </Box>
                                </Stack>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: "#1D2340",
                                        lineHeight: 1.35,
                                    }}
                                >
                                    {steps[i]}
                                </Typography>
                            </Stack>
                        </Box>
                    ))}
                </Box>

                <Typography
                    sx={{
                        fontSize: 16,
                        textAlign: "center",
                        color: theme.palette.secondary.main,
                        maxWidth: 680,
                    }}
                >
                    {t("closing")}
                </Typography>
            </Stack>
        </Box>
    );
};

export default HowItWorks;

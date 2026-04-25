import { Stack, Button, Link } from "@mui/material";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

const MobileCTA = async () => {
    const t = await getTranslations("CTA");

    return (
        <Stack
            width="100%"
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={1.5}
            sx={{
                position: "relative",
                zIndex: 5,
                transform: "translateY(-50%)",
                px: 2,
            }}
        >
            <Link href="https://app.silicon-plan.live" target="_blank" underline="none" sx={{ width: "100%", maxWidth: 340 }}>
                <Button
                    fullWidth
                    name="create-your-project"
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: "16px",
                        py: 1.75,
                        px: 3,
                        fontWeight: 400,
                        fontSize: 15,
                        background: theme.palette.titleGradient,
                        color: "#FFFFFF",
                        border: "none",
                        boxShadow: `
                            0 0 0 1px rgba(96, 126, 255, 0.95),
                            0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                            0 14px 28px rgba(88, 124, 255, 0.35)
                        `,
                        "&:hover": {
                            background: theme.palette.titleGradient,
                        },
                    }}
                >
                    {t("primary")}
                </Button>
            </Link>
            <Link href="#ai-documents" underline="none" sx={{ width: "100%", maxWidth: 340 }}>
                <Button
                    fullWidth
                    name="watch-demo"
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: "16px",
                        py: 1.75,
                        px: 3,
                        fontWeight: 400,
                        fontSize: 15,
                        background: "rgba(255, 255, 255, 0.75)",
                        color: theme.palette.primary.main,
                        border: "1px solid rgba(101, 71, 165, 0.35)",
                        boxShadow: `
                            0 0 0 1px rgba(255, 255, 255, 0.6) inset,
                            0 10px 24px rgba(101, 71, 165, 0.12)
                        `,
                        backdropFilter: "blur(6px)",
                        "&:hover": {
                            background: "rgba(255, 255, 255, 0.95)",
                            borderColor: "rgba(101, 71, 165, 0.55)",
                        },
                    }}
                >
                    {t("secondary")}
                </Button>
            </Link>
        </Stack>
    );
};

export default MobileCTA;

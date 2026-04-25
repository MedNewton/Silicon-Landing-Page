import { Stack, Button, Link } from "@mui/material";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

const CTA = async () => {
    const t = await getTranslations("CTA");

    return (
        <Stack
            width="100%"
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{
                position: "relative",
                zIndex: 5,
                transform: "translateY(-50%)",
            }}
        >
            <Link href="https://app.silicon-plan.live" target="_blank" underline="none">
                <Button
                    name="create-your-project"
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: "16px",
                        py: 2.25,
                        px: 4.5,
                        fontWeight: 400,
                        fontSize: 15,
                        background: theme.palette.titleGradient,
                        color: "#FFFFFF",
                        border: "none",
                        boxShadow: `
                            0 0 0 1px rgba(96, 126, 255, 0.95),
                            0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                            0 18px 32px rgba(88, 124, 255, 0.4)
                        `,
                        "&:hover": {
                            background: theme.palette.titleGradient,
                        },
                    }}
                >
                    {t("primary")}
                </Button>
            </Link>
            <Link href="#ai-documents" underline="none">
                <Button
                    name="watch-demo"
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: "16px",
                        py: 2.25,
                        px: 4.5,
                        fontWeight: 400,
                        fontSize: 15,
                        background: "rgba(255, 255, 255, 0.75)",
                        color: theme.palette.primary.main,
                        border: "1px solid rgba(101, 71, 165, 0.35)",
                        boxShadow: `
                            0 0 0 1px rgba(255, 255, 255, 0.6) inset,
                            0 10px 24px rgba(101, 71, 165, 0.14)
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

export default CTA;

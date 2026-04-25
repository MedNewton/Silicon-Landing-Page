import { Button, Link, Stack } from "@mui/material";
import { PlayCircle } from "iconsax-reactjs";
import theme from "@/theme/theme";

const MobileCTA = () => {
    return (
        <Stack
            width="85%"
            alignItems="center"
            justifyContent="center"
            direction="column"
            gap={1.5}
            sx={{
                position: "relative",
                zIndex: 5,
                transform: "translateY(-50%)",
            }}
        >
            <Link
                href="https://app.silicon-plan.live"
                target="_blank"
                sx={{ display: "block", width: "100%" }}
            >
                <Button
                    name="create-your-project"
                    fullWidth
                    disableRipple
                    sx={{
                        textTransform: "none",
                        borderRadius: "16px",
                        py: 1.75,
                        px: 4,
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
                    Create your project
                </Button>
            </Link>
            <Link href="#" target="_blank" sx={{ display: "block", width: "100%" }}>
                <Button
                    name="watch-demo"
                    fullWidth
                    disableRipple
                    endIcon={
                        <PlayCircle size={20} color="#3F4DCC" variant="Linear" />
                    }
                    sx={{
                        textTransform: "none",
                        borderRadius: "16px",
                        py: 1.75,
                        px: 4,
                        fontWeight: 400,
                        fontSize: 15,
                        background: "#FFFFFF",
                        color: "#1E2B42",
                        border: "1px solid rgba(63, 77, 204, 0.4)",
                        boxShadow: "0 4px 12px rgba(15, 27, 60, 0.06)",
                        "&:hover": {
                            background: "#FFFFFF",
                            borderColor: "rgba(63, 77, 204, 0.6)",
                        },
                    }}
                >
                    Watch demo
                </Button>
            </Link>
        </Stack>
    );
};

export default MobileCTA;

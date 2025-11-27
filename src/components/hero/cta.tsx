import { Stack, Button, Typography } from "@mui/material";
import theme from "@/theme/theme";

const CTA = () => {
    return (
        <Stack width="100%" alignItems="center" justifyContent="center" sx={{
            position: "relative",
            zIndex: 5,
            transform: "translateY(-50%)",
        }}>
            <Button
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
                                    0 0 0 1px rgba(96, 126, 255, 0.95),        /* outer colored ring */
                                    0 0 0 1px rgba(255, 255, 255, 0.95) inset, /* inner white ring   */
                                    0 18px 32px rgba(88, 124, 255, 0.4)        /* drop shadow        */
                                    `,
                    "&:hover": {
                        background: theme.palette.titleGradient,
                    },
                }}
            >
                Create My First Plan
            </Button>
        </Stack>
    );
};

export default CTA;
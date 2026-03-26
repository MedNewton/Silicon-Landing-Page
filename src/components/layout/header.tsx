import { Button, Stack, Typography, Link } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";

const gradientButtonSx = {
    width: "100%",
    height: "fit-content",
    paddingX: 1.5,
    paddingY: 1,
    borderRadius: 20,
    background: "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
    backgroundSize: "200% 200%",
    animation: "bgShimmer 3s ease infinite",
    textTransform: "none",
    transition: "transform 0.25s ease, filter 0.25s ease",
    "&:hover": {
        transform: "scale(1.05)",
        filter: "brightness(1.2)",
    },
    "@keyframes bgShimmer": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
};

const buttonTextSx = {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "#fff",
};

const Header = () => {
    return (
        <Stack
            component="header"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            px={1}
            py={1}
            borderRadius={20}
            width="fit-content"
            minWidth="55vw"
            maxWidth="70vw"
            marginX="auto"
            gap={16}
            marginTop={1.5}
            sx={{
                background: theme.palette.headerGradient,
                backdropFilter: "blur(10px)",
            }}
        >
            <Stack sx={{
                width: "25%",
                height: "fit-content",
                textTransform: "none",
            }}>
                <Image src={logo} alt="logo" width={40} height={40} />
            </Stack>
            <Stack
                minWidth="30%"
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap={5}
            >
                <Link
                    href="#features"
                    underline="none"
                    color="text.secondary"
                    variant="body2"
                    sx={{
                        transition: "color 0.2s ease",
                        "&:hover": {
                            color: "text.primary",
                        },
                    }}
                >
                    Features
                </Link>
                <Link
                    href="#pricing"
                    underline="none"
                    color="text.secondary"
                    variant="body2"
                    sx={{
                        transition: "color 0.2s ease",
                        "&:hover": {
                            color: "text.primary",
                        },
                    }}
                >
                    Subscribe
                </Link>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} sx={{ width: "25%" }}>
                <Link href="https://app.silicon-plan.live/?nav=consultants" target="_blank" sx={{ width: "50%" }}>
                    <Button name="visit-marketplace" sx={gradientButtonSx}>
                        <Typography sx={buttonTextSx}>
                            Consultants
                        </Typography>
                    </Button>
                </Link>
                <Link href="https://app.silicon-plan.live" target="_blank" sx={{ width: "50%" }}>
                    <Button name="login-signup" sx={gradientButtonSx}>
                        <Typography sx={buttonTextSx}>
                            Login
                        </Typography>
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Header;

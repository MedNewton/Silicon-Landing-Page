import { Button, Stack, Typography, Link } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";

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
                    <Button name="visit-marketplace" sx={{
                        width: "100%",
                        height: "fit-content",
                        paddingX: 1,
                        paddingY: 1,
                        borderRadius: 20,
                        background: 'rgba(255, 255, 255, 0.68)',
                        textTransform: "none",
                    }}>
                        <Typography variant="body2" color="text.secondary">
                            Consultants
                        </Typography>
                    </Button>
                </Link>
                <Link href="https://app.silicon-plan.live" target="_blank" sx={{ width: "50%" }}>
                    <Button name="login-signup" sx={{
                        width: "100%",
                        height: "fit-content",
                        paddingX: 1,
                        paddingY: 1,
                        borderRadius: 20,
                        background: 'rgba(255, 255, 255, 0.68)',
                        textTransform: "none",
                    }}>
                        <Typography variant="body2" color="text.secondary">
                            Login
                        </Typography>
                    </Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Header;

import { Button, Stack, Typography } from "@mui/material";
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
                width: "20%",
                height: "fit-content",
                textTransform: "none",
            }}>
                <Image src={logo} alt="logo" width={40} height={40} />
            </Stack>
            <Stack minWidth="40%" direction="row" alignItems="center" justifyContent="center" gap={2}>
                <Typography variant="body2" color="text.secondary">
                    Features
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Testimonials
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Subscribe
                </Typography>
            </Stack>
            <Button sx={{
                width: "20%",
                height: "fit-content",
                paddingX: 1,
                paddingY: 1,
                borderRadius: 20,
                background: theme.palette.background.default,
                textTransform: "none",
            }}>
                <Typography variant="body2" color="text.secondary">
                    Login / Signup
                </Typography>
            </Button>
        </Stack>
    );
};

export default Header;
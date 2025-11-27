import { Button, Stack, Typography } from "@mui/material";
import theme from "@/theme/theme";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";
import MenuIcon from '@mui/icons-material/Menu';

const MobileHeader = () => {
    return (
        <Stack
            component="header"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            px={0.5}  
            py={0.5}
            borderRadius={20}
            width="95%"
            marginX="auto"
            marginTop={1.5}
            sx={{
                background: theme.palette.headerGradient,
                backdropFilter: "blur(10px)",
            }}
        >
            <Image src={logo} alt="logo" width={60} height={60} />
            <Typography variant="h6" fontWeight={400} color="#1E2B42">
                Silicon Plan
            </Typography>
            <Button size="small" sx={{
                width: 50,
                height: "auto",
                aspectRatio: "1/1 !important",
                padding: 0.5,
                borderRadius: "50%",
                background: 'rgba(255, 255, 255, 0.68)',
                textTransform: "none",
            }}>
                <MenuIcon fontSize="medium" />
            </Button>
        </Stack>
    );
};

export default MobileHeader;
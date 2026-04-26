import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import VisionHero from "@/components/vision/visionHero";
import VisionCapabilities from "@/components/vision/visionCapabilities";

export default function VisionPage() {
    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <Header />
                <VisionHero />
                <VisionCapabilities />
            </Stack>
            <Footer />
        </Stack>
    );
}

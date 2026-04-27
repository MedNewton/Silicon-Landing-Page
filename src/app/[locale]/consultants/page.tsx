import { Stack } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ConsultantsHero from "@/components/consultantsPage/consultantsHero";
import ConsultantsCategories from "@/components/consultantsPage/consultantsCategories";
import ConsultantsMarquee from "@/components/consultantsPage/consultantsMarquee";

export default async function ConsultantsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Stack
            component="main"
            width="100%"
            minHeight="100vh"
            sx={{ background: theme.palette.background.default }}
        >
            <Stack width="100%" alignItems="center" py={1.5} px={2}>
                <Header />
                <ConsultantsHero />
                <ConsultantsCategories />
                <ConsultantsMarquee />
            </Stack>
            <Footer />
        </Stack>
    );
}

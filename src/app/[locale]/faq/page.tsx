import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import MobileHeader from "@/components/layout/mobile/mobileHeader";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FaqSection from "@/components/faq/faqSection";

export default async function FaqPage({
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
                <MobileHeader />
                <Header />
                <FaqSection />
            </Stack>
            <Footer />
        </Stack>
    );
}

import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Hero from "@/components/hero/hero";
import CTA from "@/components/hero/cta";
import BentoSection from "@/components/bento/bentoSection";
import Pricing from "@/components/pricing/pricing";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default }}>
      <Stack width="100%" height="100%" alignItems="center" py={1.5} px={2}>
        <Hero />
        <CTA />
        <BentoSection />
        <Pricing />
      </Stack>
      <Footer />
    </Stack>
  );
}

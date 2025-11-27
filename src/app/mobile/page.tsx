import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import MobileHero from "@/components/hero/mobile/mobileHero";
import MobileCTA from "@/components/hero/mobile/mobileCta";
import MobileBusinessPlanSlider from "@/components/bento/mobileBusinessPlanSlider";
import MobilePricing from "@/components/pricing/mobile/mobilePricing";
import MobileFooter from "@/components/layout/mobile/mobileFooter";

export default function Home() {
  return (
    <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default }}>
      <Stack width="100%" height="100%" alignItems="center" py={0.75} px={1}>
        <MobileHero />
        <MobileCTA />
        <MobileBusinessPlanSlider />
        <MobilePricing />
      </Stack>
      <MobileFooter />
    </Stack>
  );
}

import { setRequestLocale } from "next-intl/server";
import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import MobileHero from "@/components/hero/mobile/mobileHero";
import MobileCTA from "@/components/hero/mobile/mobileCta";
import MobileBusinessPlanSlider from "@/components/bento/mobileBusinessPlanSlider";
import ComparisonSection from "@/components/comparison/comparisonSection";
import RoadmapSection from "@/components/roadmap/roadmapSection";
import HowItWorksSection from "@/components/howItWorks/howItWorksSection";
import ProductFeaturesSection from "@/components/productFeatures/productFeaturesSection";
import ConsultantsSection from "@/components/consultants/consultantsSection";
import TestimonialsSection from "@/components/testimonials/testimonialsSection";
import MobilePricing from "@/components/pricing/mobile/mobilePricing";
import AiDocumentGenerationSection from "@/components/aiDocumentGeneration/aiDocumentGenerationSection";
import MobileFooter from "@/components/layout/mobile/mobileFooter";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
    <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default }}>
      <Stack width="100%" height="100%" alignItems="center" py={0.75} px={1}>
        <MobileHero />
        <MobileCTA />
        <MobileBusinessPlanSlider />
        <ComparisonSection />
        <RoadmapSection />
        <HowItWorksSection />
        <ProductFeaturesSection />
        <ConsultantsSection />
        <TestimonialsSection />
        <MobilePricing />
        <AiDocumentGenerationSection />
      </Stack>
      <MobileFooter />
    </Stack>
  );
}

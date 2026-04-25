import theme from "@/theme/theme";
import { Stack } from "@mui/material";

import Hero from "@/components/hero/hero";
import CTA from "@/components/hero/cta";
import BentoSection from "@/components/bento/bentoSection";
import ComparisonSection from "@/components/comparison/comparisonSection";
import RoadmapSection from "@/components/roadmap/roadmapSection";
import HowItWorksSection from "@/components/howItWorks/howItWorksSection";
import ConsultantsSection from "@/components/consultants/consultantsSection";
import TestimonialsSection from "@/components/testimonials/testimonialsSection";
import Pricing from "@/components/pricing/pricing";
import AiDocumentGenerationSection from "@/components/aiDocumentGeneration/aiDocumentGenerationSection";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default }}>
      <Stack width="100%" height="100%" alignItems="center" py={1.5} px={2}>
        <Hero />
        <CTA />
        <BentoSection />
        <ComparisonSection />
        <RoadmapSection />
        <HowItWorksSection />
        <ConsultantsSection />
        <TestimonialsSection />
        <Pricing />
        <AiDocumentGenerationSection />
      </Stack>
      <Footer />
    </Stack>
  );
}

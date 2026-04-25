import theme from "@/theme/theme";
import { Box, Stack } from "@mui/material";

import MobileHeader, { MOBILE_HEADER_HEIGHT } from "@/components/layout/mobile/mobileHeader";
import MobileHero from "@/components/hero/mobile/mobileHero";
import MobileCTA from "@/components/hero/mobile/mobileCta";
import MobileProblem from "@/components/problem/mobile/mobileProblem";
import MobileSolution from "@/components/solution/mobile/mobileSolution";
import MobileGuidedPath from "@/components/guidedPath/mobile/mobileGuidedPath";
import MobileHowItWorks from "@/components/howItWorks/mobile/mobileHowItWorks";
import MobileAiDocuments from "@/components/aiDocuments/mobile/mobileAiDocuments";
import MobileConsultants from "@/components/consultants/mobile/mobileConsultants";
import MobilePricing from "@/components/pricing/mobile/mobilePricing";
import MobileSocialProof from "@/components/socialProof/mobile/mobileSocialProof";
import MobileAbout from "@/components/about/mobile/mobileAbout";
import MobileFaq from "@/components/faq/mobile/mobileFaq";
import MobileContact from "@/components/contact/mobile/mobileContact";
import MobileFooter from "@/components/layout/mobile/mobileFooter";

const anchorSx = { scrollMarginTop: `${MOBILE_HEADER_HEIGHT}px` };

export default function Home() {
  return (
    <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default }}>
      <MobileHeader />
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        py={0.75}
        px={1}
        sx={{ pt: `${MOBILE_HEADER_HEIGHT + 8}px` }}
      >
        <Box component="section" id="prodotto" sx={{ ...anchorSx, width: "100%" }}>
          <MobileHero />
          <MobileCTA />
        </Box>
        <Box component="section" id="problema" sx={{ ...anchorSx, width: "100%" }}>
          <MobileProblem />
        </Box>
        <Box component="section" id="soluzione" sx={{ ...anchorSx, width: "100%" }}>
          <MobileSolution />
        </Box>
        <Box component="section" id="percorso-guidato" sx={{ ...anchorSx, width: "100%" }}>
          <MobileGuidedPath />
        </Box>
        <Box component="section" id="come-funziona" sx={{ ...anchorSx, width: "100%" }}>
          <MobileHowItWorks />
        </Box>
        <Box component="section" id="ai-documents" sx={{ ...anchorSx, width: "100%" }}>
          <MobileAiDocuments />
        </Box>
        <Box component="section" id="consulenti" sx={{ ...anchorSx, width: "100%" }}>
          <MobileConsultants />
        </Box>
        <Box component="section" id="prezzi" sx={{ ...anchorSx, width: "100%" }}>
          <MobilePricing />
        </Box>
        <Box component="section" id="social-proof" sx={{ ...anchorSx, width: "100%" }}>
          <MobileSocialProof />
        </Box>
        <Box component="section" id="about" sx={{ ...anchorSx, width: "100%" }}>
          <MobileAbout />
        </Box>
        <Box component="section" id="faq" sx={{ ...anchorSx, width: "100%" }}>
          <MobileFaq />
        </Box>
        <Box component="section" id="contatti" sx={{ ...anchorSx, width: "100%" }}>
          <MobileContact />
        </Box>
      </Stack>
      <MobileFooter />
    </Stack>
  );
}

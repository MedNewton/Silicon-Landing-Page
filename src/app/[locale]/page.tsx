import theme from "@/theme/theme";
import { Box, Stack } from "@mui/material";

import Header, { HEADER_HEIGHT } from "@/components/layout/header";
import Hero from "@/components/hero/hero";
import CTA from "@/components/hero/cta";
import Problem from "@/components/problem/problem";
import Solution from "@/components/solution/solution";
import GuidedPath from "@/components/guidedPath/guidedPath";
import HowItWorks from "@/components/howItWorks/howItWorks";
import AiDocuments from "@/components/aiDocuments/aiDocuments";
import Consultants from "@/components/consultants/consultants";
import Pricing from "@/components/pricing/pricing";
import SocialProof from "@/components/socialProof/socialProof";
import About from "@/components/about/about";
import Faq from "@/components/faq/faq";
import Contact from "@/components/contact/contact";
import Footer from "@/components/layout/footer";

const anchorSx = { scrollMarginTop: `${HEADER_HEIGHT}px` };

export default function Home() {
  return (
    <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default }}>
      <Header />
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        py={1.5}
        px={2}
        sx={{ pt: `${HEADER_HEIGHT + 12}px` }}
      >
        <Box component="section" id="prodotto" sx={{ ...anchorSx, width: "100%" }}>
          <Hero />
          <CTA />
        </Box>
        <Box component="section" id="problema" sx={{ ...anchorSx, width: "100%" }}>
          <Problem />
        </Box>
        <Box component="section" id="soluzione" sx={{ ...anchorSx, width: "100%" }}>
          <Solution />
        </Box>
        <Box component="section" id="percorso-guidato" sx={{ ...anchorSx, width: "100%" }}>
          <GuidedPath />
        </Box>
        <Box component="section" id="come-funziona" sx={{ ...anchorSx, width: "100%" }}>
          <HowItWorks />
        </Box>
        <Box component="section" id="ai-documents" sx={{ ...anchorSx, width: "100%" }}>
          <AiDocuments />
        </Box>
        <Box component="section" id="consulenti" sx={{ ...anchorSx, width: "100%" }}>
          <Consultants />
        </Box>
        <Box component="section" id="prezzi" sx={{ ...anchorSx, width: "100%" }}>
          <Pricing />
        </Box>
        <Box component="section" id="social-proof" sx={{ ...anchorSx, width: "100%" }}>
          <SocialProof />
        </Box>
        <Box component="section" id="about" sx={{ ...anchorSx, width: "100%" }}>
          <About />
        </Box>
        <Box component="section" id="faq" sx={{ ...anchorSx, width: "100%" }}>
          <Faq />
        </Box>
        <Box component="section" id="contatti" sx={{ ...anchorSx, width: "100%" }}>
          <Contact />
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
}

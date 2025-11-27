import theme from "@/theme/theme";
import { Stack, Typography } from "@mui/material";

import Hero from "@/components/hero/hero";
import Pricing from "@/components/pricing/pricing";

export default function Home() {
  return (
      <Stack component="main" width="100%" minHeight="100vh" sx={{ background: theme.palette.background.default, py: 1.5, px: 2 }}>
        <Hero />
        <Pricing />
      </Stack>
  );
}

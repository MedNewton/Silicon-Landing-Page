import { Box, Stack, Typography } from "@mui/material";
import { Hierarchy, Magicpen, Profile, TickSquare } from "iconsax-reactjs";
import type { ComponentType } from "react";
import { getTranslations } from "next-intl/server";
import theme from "@/theme/theme";

import type { IconProps } from "@/components/layout/navItems";

const ICON_COLOR = "#3F6DDD";
const ICON_TINT_BG = "rgba(63, 109, 221, 0.08)";
const CARD_BORDER = "#E5E7EB";

const ICONS: ComponentType<IconProps>[] = [
    Hierarchy,
    Magicpen,
    Profile,
    TickSquare,
];

const ValuesCards = async () => {
    const t = await getTranslations("values");
    const cards = t.raw("cards") as Array<{ title: string; description: string }>;

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 12 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1280px",
                    mx: "auto",
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        md: "repeat(2, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {cards.map(({ title, description }, index) => {
                    const Icon = ICONS[index]!;
                    return (
                        <Stack
                            key={title}
                            spacing={2.5}
                            sx={{
                                p: 3,
                                bgcolor: "#FFFFFF",
                                borderRadius: 4,
                                border: `1px solid ${CARD_BORDER}`,
                                transition:
                                    "box-shadow 0.2s ease, transform 0.2s ease",
                                "&:hover": {
                                    boxShadow:
                                        "0px 12px 24px rgba(15, 27, 60, 0.06)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 3,
                                    bgcolor: ICON_TINT_BG,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    size={28}
                                    color={ICON_COLOR}
                                    variant="Bold"
                                />
                            </Box>

                            <Typography
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontSize: 18,
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                }}
                            >
                                {title}
                            </Typography>

                            <Typography
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontSize: 14,
                                    lineHeight: 1.5,
                                }}
                            >
                                {description}
                            </Typography>
                        </Stack>
                    );
                })}
            </Box>
        </Box>
    );
};

export default ValuesCards;

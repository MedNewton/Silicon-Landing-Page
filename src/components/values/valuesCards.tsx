import { Box, Stack, Typography } from "@mui/material";
import { Hierarchy, Magicpen, Profile, TickSquare } from "iconsax-reactjs";
import type { ComponentType } from "react";
import theme from "@/theme/theme";

import type { IconProps } from "@/components/layout/navItems";

const ICON_COLOR = "#3F6DDD";
const ICON_TINT_BG = "rgba(63, 109, 221, 0.08)";
const CARD_BORDER = "#E5E7EB";

type ValueCard = {
    Icon: ComponentType<IconProps>;
    title: string;
    description: string;
};

const CARDS: ValueCard[] = [
    {
        Icon: Hierarchy,
        title: "Structure and method",
        description:
            "Doing business isn't just creativity: it's method. We offer a clear, guided process that helps users develop solid projects, step by step.",
    },
    {
        Icon: Magicpen,
        title: "Useful innovation",
        description:
            "We use artificial intelligence to simplify complex processes. Not to replace human thought, but to enhance it.",
    },
    {
        Icon: Profile,
        title: "Collaborazione",
        description:
            "We believe in the value of expertise. That's why we integrate technology and consulting, creating an ecosystem that connects businesses and professionals.",
    },
    {
        Icon: TickSquare,
        title: "Continuous growth",
        description:
            "We're constantly evolving. We improve the platform based on user feedback and market developments. We want to contribute to a stronger entrepreneurial ecosystem, where more ideas can become concrete reality.",
    },
];

const ValuesCards = () => {
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
                {CARDS.map(({ Icon, title, description }) => (
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
                ))}
            </Box>
        </Box>
    );
};

export default ValuesCards;

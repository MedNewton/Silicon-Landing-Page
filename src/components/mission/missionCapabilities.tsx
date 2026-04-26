import { Box, Stack, Typography } from "@mui/material";
import { Element4, Note1, Chart2, Sun1 } from "iconsax-reactjs";
import type { ComponentType } from "react";
import theme from "@/theme/theme";

import type { IconProps } from "@/components/layout/navItems";

const ICON_COLOR = "#3F6DDD";
const ICON_TINT_BG = "rgba(63, 109, 221, 0.08)";
const CARD_BORDER = "#E5E7EB";

type CapabilityCard = {
    Icon: ComponentType<IconProps>;
    title: string;
    description: string;
};

const CARDS: CapabilityCard[] = [
    {
        Icon: Element4,
        title: "Lack of skills",
        description:
            "Access expert guidance and step-by-step AI tools to build with confidence.",
    },
    {
        Icon: Note1,
        title: "High consulting costs",
        description:
            "Work with consultants in a flexible, affordable format.",
    },
    {
        Icon: Chart2,
        title: "Lack of guided tools",
        description:
            "Use structured workflows designed for real startup development.",
    },
    {
        Icon: Sun1,
        title: "Funding challenges",
        description:
            "Prepare your business and connect with funding opportunities.",
    },
];

const MissionCapabilities = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 12 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                spacing={{ xs: 4, md: 6 }}
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Typography
                    component="h2"
                    sx={{
                        color: theme.palette.text.primary,
                        fontSize: { xs: 16, md: 20 },
                        fontWeight: 500,
                        lineHeight: 1.5,
                        maxWidth: 880,
                    }}
                >
                    With SiliconPlan, anyone can build a solid business plan,
                    even starting from scratch.
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
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
            </Stack>
        </Box>
    );
};

export default MissionCapabilities;

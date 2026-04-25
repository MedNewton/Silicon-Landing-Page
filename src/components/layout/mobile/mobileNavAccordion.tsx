"use client";

import { Box, Collapse, Link, Stack, Typography } from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import theme from "@/theme/theme";
import type { NavItem } from "@/components/layout/navItems";

type MobileNavAccordionProps = {
    id: string;
    label: string;
    items: NavItem[];
    openId: string | null;
    onToggle: (id: string) => void;
    onItemClick: () => void;
};

const MobileNavAccordion = ({
    id,
    label,
    items,
    openId,
    onToggle,
    onItemClick,
}: MobileNavAccordionProps) => {
    const isOpen = openId === id;

    return (
        <Box sx={{ width: "100%" }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                onClick={() => onToggle(id)}
                sx={{
                    cursor: "pointer",
                    width: "100%",
                    py: 0.5,
                    userSelect: "none",
                }}
            >
                <Typography
                    sx={{
                        fontSize: 20,
                        fontWeight: 400,
                        color: "#1E2B42",
                    }}
                >
                    {label}
                </Typography>
                <ArrowDown2
                    size={20}
                    color={theme.palette.text.secondary}
                    variant="Linear"
                    style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                    }}
                />
            </Stack>
            <Collapse in={isOpen} unmountOnExit>
                <Stack gap={1.5} pt={2} pl={1}>
                    {items.map(({ Icon, label: itemLabel, href }) => (
                        <Link
                            key={itemLabel}
                            href={href}
                            underline="none"
                            onClick={onItemClick}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.5,
                                color: "#1E2B42",
                            }}
                        >
                            <Icon size={22} color="#3D537B" variant="Linear" />
                            <Typography sx={{ fontSize: 17, fontWeight: 400 }}>
                                {itemLabel}
                            </Typography>
                        </Link>
                    ))}
                </Stack>
            </Collapse>
        </Box>
    );
};

export default MobileNavAccordion;

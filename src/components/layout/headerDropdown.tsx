"use client";

import { useRef, useState } from "react";
import { Box, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import theme from "@/theme/theme";
import type { NavItem } from "./navItems";
import { Link as IntlLink } from "@/i18n/navigation";

const OPEN_DELAY_MS = 150;
const CLOSE_DELAY_MS = 200;

type HeaderDropdownProps = {
    label: string;
    items: NavItem[];
};

const HeaderDropdown = ({ label, items }: HeaderDropdownProps) => {
    const [open, setOpen] = useState(false);
    const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const canHover = useMediaQuery("(hover: hover) and (pointer: fine)");

    const clearTimers = () => {
        if (openTimer.current) {
            clearTimeout(openTimer.current);
            openTimer.current = null;
        }
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };

    const handleEnter = () => {
        clearTimers();
        openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    };

    const handleLeave = () => {
        clearTimers();
        closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
    };

    const handleTriggerClick = () => {
        clearTimers();
        setOpen((prev) => !prev);
    };

    return (
        <Box
            onMouseEnter={canHover ? handleEnter : undefined}
            onMouseLeave={canHover ? handleLeave : undefined}
            sx={{ position: "relative" }}
        >
            <Stack
                direction="row"
                alignItems="center"
                gap={0.5}
                onClick={handleTriggerClick}
                sx={{
                    cursor: "pointer",
                    color: "text.secondary",
                    transition: "color 0.2s ease",
                    "&:hover": { color: "text.primary" },
                    userSelect: "none",
                }}
            >
                <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                    {label}
                </Typography>
                <ArrowDown2
                    size={14}
                    color={theme.palette.text.secondary}
                    variant="Linear"
                    style={{
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                    }}
                />
            </Stack>
            {open && (
                <Box
                    sx={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        pt: 1.5,
                        zIndex: 20,
                    }}
                >
                    <Box
                        sx={{
                            minWidth: 240,
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(6px)",
                            borderRadius: 4,
                            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                            p: 1.5,
                        }}
                    >
                        <Stack gap={0.25}>
                            {items.map(({ Icon, label: itemLabel, href }) => (
                                <Link
                                    key={itemLabel}
                                    component={IntlLink}
                                    href={href}
                                    underline="none"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        py: 1.25,
                                        px: 1.25,
                                        borderRadius: 3,
                                        color: "#1E2B42",
                                        transition: "background 0.15s ease",
                                        "&:hover": {
                                            backgroundColor: "rgba(63, 109, 221, 0.06)",
                                        },
                                    }}
                                >
                                    <Icon size={22} color="#3D537B" variant="Linear" />
                                    <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                                        {itemLabel}
                                    </Typography>
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default HeaderDropdown;

"use client";

import { useRef, useState, useTransition } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import theme from "@/theme/theme";
import { LANGUAGES, type LocaleCode } from "@/components/layout/locales";

const OPEN_DELAY_MS = 150;
const CLOSE_DELAY_MS = 200;

const LanguageSwitcher = () => {
    const locale = useLocale() as LocaleCode;
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const [open, setOpen] = useState(false);
    const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    const handleSelect = (code: LocaleCode) => {
        clearTimers();
        setOpen(false);
        if (code === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: code });
        });
    };

    const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0]!;
    const CurrentFlag = current.Flag;

    return (
        <Box
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            sx={{ position: "relative", opacity: isPending ? 0.6 : 1 }}
        >
            <Stack
                direction="row"
                alignItems="center"
                gap={0.75}
                onClick={() => setOpen((prev) => !prev)}
                sx={{
                    cursor: "pointer",
                    userSelect: "none",
                }}
            >
                <CurrentFlag size={22} />
                <Typography
                    variant="body2"
                    sx={{
                        color: "text.secondary",
                        fontWeight: 500,
                        minWidth: 20,
                        textAlign: "center",
                    }}
                >
                    {current.label}
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
                        right: 0,
                        pt: 1.5,
                        zIndex: 20,
                    }}
                >
                    <Box
                        sx={{
                            minWidth: 110,
                            background: "rgba(255, 255, 255, 0.9)",
                            backdropFilter: "blur(6px)",
                            borderRadius: 4,
                            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                            p: 0.75,
                        }}
                    >
                        <Stack gap={0.25}>
                            {LANGUAGES.map(({ code, label, Flag }) => (
                                <Stack
                                    key={code}
                                    direction="row"
                                    alignItems="center"
                                    gap={1}
                                    onClick={() => handleSelect(code)}
                                    sx={{
                                        cursor: "pointer",
                                        py: 0.75,
                                        px: 1,
                                        borderRadius: 3,
                                        backgroundColor:
                                            code === locale
                                                ? "rgba(63, 109, 221, 0.1)"
                                                : "transparent",
                                        transition: "background 0.15s ease",
                                        "&:hover": {
                                            backgroundColor: "rgba(63, 109, 221, 0.08)",
                                        },
                                    }}
                                >
                                    <Flag size={20} />
                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: "#1E2B42",
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default LanguageSwitcher;

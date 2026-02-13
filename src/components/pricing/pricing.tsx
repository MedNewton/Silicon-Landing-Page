"use client";

import { useState } from "react";
import {
    Box,
    Button,
    Chip,
    Stack,
    Typography,
    Link
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import theme from "@/theme/theme";

type BillingPeriod = "monthly" | "annual";

type Feature = {
    label: string;
    tag?: string;
    free: boolean;
    startup: boolean;
    unicorn: boolean;
};

const FEATURES: Feature[] = [
    { label: "Business Model Canvas generation", free: true, startup: true, unicorn: true },
    { label: "Consultant marketplace", free: true, startup: true, unicorn: true },
    { label: "Technical guides", free: true, startup: true, unicorn: true },
    { label: "Step-by-step instructions", free: true, startup: true, unicorn: true },
    { label: "Business Plan generation", free: false, startup: true, unicorn: true },
    { label: "Access for 3 team members", free: false, startup: true, unicorn: true },
    { label: "1 project creation", free: false, startup: true, unicorn: true },
    {
        label: "Writing assistance",
        tag: "AI Powered",
        free: false,
        startup: true,
        unicorn: true,
    },
    { label: "Pre-money valuation (6 methods)", free: false, startup: false, unicorn: true },
    { label: "Access for 5 team members", free: false, startup: false, unicorn: true },
    { label: "7 project creations", free: false, startup: false, unicorn: true },
    {
        label: "Financial analysis",
        tag: "AI Powered",
        free: false,
        startup: false,
        unicorn: true,
    },
    { label: "Industry research", free: false, startup: false, unicorn: true },
    { label: "Performance dashboards", free: false, startup: false, unicorn: true },
    { label: "Export to Excel", free: false, startup: false, unicorn: true },
];

const STARTUP_MONTHLY = 27.90;
const STARTUP_ANNUAL = 20.93;
const UNICORN_MONTHLY = 49.90;
const UNICORN_ANNUAL = 37.43;

const Pricing = () => {
    const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

    const startupPrice =
        billingPeriod === "monthly" ? STARTUP_MONTHLY : STARTUP_ANNUAL;
    const unicornPrice =
        billingPeriod === "monthly" ? UNICORN_MONTHLY : UNICORN_ANNUAL;

    const formatPrice = (price: number) => {
        if (price === 0) return "0";
        return price % 1 === 0 ? price.toString() : price.toFixed(2).replace(".", ",");
    };

    return (
        <Box
            id="pricing"
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 4 },
                px: { xs: 2, md: 10 },
                backgroundColor: theme.palette.background.default,
                scrollMarginTop: 80,
            }}
        >
            <Stack spacing={4} alignItems="center" maxWidth="1280px" mx="auto">
                <Typography
                    sx={{
                        fontSize: { xs: 26, md: 32 },
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 1.3,
                        backgroundImage: theme.palette.titleGradient,
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Start your plan by picking a package
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        borderRadius: 4,
                        px: 0.75,
                        py: 1,
                        gap: 2,
                        border: "1px solid #D4D7FF",
                        backgroundColor: "#F6F7FF",
                        width: "100%",
                        maxWidth: 460,
                        boxShadow: "0px 8px 24px rgba(120, 134, 255, 0.2)",
                    }}
                >
                    <Button
                        name="monthly"
                        onClick={() => setBillingPeriod("monthly")}
                        disableRipple
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 400,
                            fontSize: 18,
                            py: 2,
                            background:
                                billingPeriod === "monthly"
                                    ? theme.palette.titleGradient
                                    : "transparent",
                            color:
                                billingPeriod === "monthly"
                                    ? "#FFFFFF"
                                    : theme.palette.text.secondary,
                            boxShadow:
                                billingPeriod === "monthly"
                                    ? "0px 10px 26px rgba(88, 124, 255, 0.35)"
                                    : "none",
                            "&:hover": {
                                background:
                                    billingPeriod === "monthly"
                                        ? theme.palette.titleGradient
                                        : "transparent",
                            },
                        }}
                    >
                        Monthly
                    </Button>
                    <Button
                        name="annual"
                        onClick={() => setBillingPeriod("annual")}
                        disableRipple
                        sx={{
                            flex: 1,
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 400,
                            fontSize: 18,
                            py: 1.2,
                            background:
                                billingPeriod === "annual"
                                    ? theme.palette.titleGradient
                                    : "transparent",
                            color:
                                billingPeriod === "annual"
                                    ? "#FFFFFF"
                                    : theme.palette.text.secondary,
                            boxShadow:
                                billingPeriod === "annual"
                                    ? "0px 10px 26px rgba(88, 124, 255, 0.35)"
                                    : "none",
                            "&:hover": {
                                background:
                                    billingPeriod === "annual"
                                        ? theme.palette.titleGradient
                                        : "transparent",
                            },
                        }}
                    >
                        <Box component="span" mr={1}>
                            Annually
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                fontWeight: 700,
                                fontSize: 16,
                                color:
                                    billingPeriod === "annual"
                                        ? "#FFFFFF"
                                        : "#4D5AE5",
                            }}
                        >
                            Save 25%
                        </Box>
                    </Button>
                </Box>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 3, md: 2 }}
                    width="100%"
                    maxWidth="1280px"
                >
                    {/* FREE PLAN */}
                    <Box
                        sx={{
                            flex: 1,
                            borderRadius: 4,
                            border: "1px solid #E2E5F0",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.14)",
                            p: 4,
                        }}
                    >
                        <Stack spacing={2}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <LockOpenOutlinedIcon
                                    sx={{ fontSize: 22, color: "#9AA4C5" }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 18,
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    Free
                                </Typography>
                            </Stack>

                            <Typography
                                variant="body2"
                                sx={{ color: "#7A8098", maxWidth: 320 }}
                            >
                                For anyone who needs a professional business plan.
                            </Typography>
                            <Stack direction="row" alignItems="center" gap={1.5}>
                                <Typography
                                    sx={{
                                        fontSize: 34,
                                        fontWeight: 700,
                                        background: theme.palette.titleGradient,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        textFillColor: "transparent",
                                    }}
                                >
                                    0
                                    <Box
                                        component="span"
                                        sx={{ fontSize: 22, fontWeight: 700, ml: 0.2 }}
                                    >
                                        €
                                    </Box>
                                </Typography>

                                <Stack>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#7A8098", fontWeight: 500 }}
                                    >
                                        per month
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "#A3A8C0" }}>
                                        paid monthly
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Link href="https://app.silicon-plan.live" target="_blank">
                                <Button
                                    name="get-started"
                                    fullWidth
                                    disableRipple
                                    sx={{
                                        mt: 2,
                                        textTransform: "none",
                                        borderRadius: 3,
                                        py: 1.4,
                                        fontWeight: 400,
                                        fontSize: 15,
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        border: "none",
                                        boxShadow: `
                                    0 0 0 1px rgba(96, 126, 255, 0.95),
                                    0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                                    0 18px 32px rgba(88, 124, 255, 0.4)
                                    `,
                                        "&:hover": {
                                            background: theme.palette.titleGradient,
                                        },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Link>
                            <Stack gap={2} pt={3}>
                                {FEATURES.map((feature) => {
                                    const included = feature.free;
                                    return (
                                        <Stack
                                            key={feature.label}
                                            direction="row"
                                            alignItems="center"
                                            spacing={1.2}
                                        >
                                            {included ? (
                                                <CheckCircleIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: theme.palette.success.main,
                                                    }}
                                                />
                                            ) : (
                                                <CancelIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: "#F16B6B",
                                                    }}
                                                />
                                            )}
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#4F5670",
                                                }}
                                            >
                                                {feature.label}
                                            </Typography>
                                            {feature.tag && included && (
                                                <Chip
                                                    label={feature.tag}
                                                    size="small"
                                                    sx={{
                                                        ml: 0.5,
                                                        fontSize: 10,
                                                        height: 20,
                                                        borderRadius: 999,
                                                        backgroundColor: "#EFF2FF",
                                                        color: "#4D5AE5",
                                                    }}
                                                />
                                            )}
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </Stack>
                    </Box>

                    {/* START-UP PLAN */}
                    <Box
                        sx={{
                            flex: 1,
                            borderRadius: 4,
                            border: "1px solid #E2E5F0",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 14px 40px rgba(146, 153, 184, 0.14)",
                            p: 4,
                        }}
                    >
                        <Stack spacing={2}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <RocketLaunchIcon
                                    sx={{ fontSize: 22, color: "#9AA4C5" }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 18,
                                        color: theme.palette.text.secondary,
                                    }}
                                >
                                    Start-up
                                </Typography>
                            </Stack>

                            <Typography
                                variant="body2"
                                sx={{ color: "#7A8098", maxWidth: 320 }}
                            >
                                For anyone who needs a professional business plan.
                            </Typography>
                            <Stack direction="row" alignItems="center" gap={1.5}>
                                {billingPeriod === "annual" && (
                                    <Typography
                                        sx={{
                                            fontSize: 34,
                                            fontWeight: 700,
                                            color: "#C8CBD8",
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        {formatPrice(STARTUP_MONTHLY)}
                                        <Box
                                            component="span"
                                            sx={{ fontSize: 22, fontWeight: 700, ml: 0.2 }}
                                        >
                                            €
                                        </Box>
                                    </Typography>
                                )}

                                <Typography
                                    sx={{
                                        fontSize: 34,
                                        fontWeight: 700,
                                        background: theme.palette.titleGradient,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        textFillColor: "transparent",
                                    }}
                                >
                                    {formatPrice(startupPrice)}
                                    <Box
                                        component="span"
                                        sx={{ fontSize: 22, fontWeight: 700, ml: 0.2 }}
                                    >
                                        €
                                    </Box>
                                </Typography>

                                <Stack>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#7A8098", fontWeight: 500 }}
                                    >
                                        per month
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "#A3A8C0" }}>
                                        paid{" "}
                                        {billingPeriod === "monthly" ? "monthly" : "annually"}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Link href="https://app.silicon-plan.live" target="_blank">
                                <Button
                                    name="get-started"
                                    fullWidth
                                    disableRipple
                                    sx={{
                                        mt: 2,
                                        textTransform: "none",
                                        borderRadius: 3,
                                        py: 1.4,
                                        fontWeight: 400,
                                        fontSize: 15,
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        border: "none",
                                        boxShadow: `
                                    0 0 0 1px rgba(96, 126, 255, 0.95),
                                    0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                                    0 18px 32px rgba(88, 124, 255, 0.4)
                                    `,
                                        "&:hover": {
                                            background: theme.palette.titleGradient,
                                        },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Link>
                            <Stack gap={2} pt={3}>
                                {FEATURES.map((feature) => {
                                    const included = feature.startup;
                                    return (
                                        <Stack
                                            key={feature.label}
                                            direction="row"
                                            alignItems="center"
                                            spacing={1.2}
                                        >
                                            {included ? (
                                                <CheckCircleIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: theme.palette.success.main,
                                                    }}
                                                />
                                            ) : (
                                                <CancelIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: "#F16B6B",
                                                    }}
                                                />
                                            )}
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#4F5670",
                                                }}
                                            >
                                                {feature.label}
                                            </Typography>
                                            {feature.tag && included && (
                                                <Chip
                                                    label={feature.tag}
                                                    size="small"
                                                    sx={{
                                                        ml: 0.5,
                                                        fontSize: 10,
                                                        height: 20,
                                                        borderRadius: 999,
                                                        backgroundColor: "#EFF2FF",
                                                        color: "#4D5AE5",
                                                    }}
                                                />
                                            )}
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </Stack>
                    </Box>

                    {/* UNICORN PLAN */}
                    <Box
                        sx={{
                            flex: 1,
                            borderRadius: 4,
                            border: "1.5px solid #6F5FEF",
                            backgroundColor: "#FFFFFF",
                            boxShadow: "0px 16px 48px rgba(103, 120, 255, 0.3)",
                            p: 4,
                        }}
                    >
                        <Stack spacing={2}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <WorkspacePremiumIcon
                                    sx={{ fontSize: 22, color: "#5C63FF" }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 18,
                                        color: "#5C63FF",
                                    }}
                                >
                                    Unicorn
                                </Typography>
                            </Stack>

                            <Typography
                                variant="body2"
                                sx={{ color: "#7A8098", maxWidth: 320 }}
                            >
                                For businesses that need financial tools to help them operate &
                                grow.
                            </Typography>
                            <Stack direction="row" alignItems="center" gap={1.5}>
                                {billingPeriod === "annual" && (
                                    <Typography
                                        sx={{
                                            fontSize: 34,
                                            fontWeight: 700,
                                            color: "#C8CBD8",
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        {formatPrice(UNICORN_MONTHLY)}
                                        <Box
                                            component="span"
                                            sx={{ fontSize: 22, fontWeight: 700, ml: 0.2 }}
                                        >
                                            €
                                        </Box>
                                    </Typography>
                                )}

                                <Typography
                                    sx={{
                                        fontSize: 34,
                                        fontWeight: 700,
                                        background: theme.palette.titleGradient,
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        textFillColor: "transparent",
                                    }}
                                >
                                    {formatPrice(unicornPrice)}
                                    <Box
                                        component="span"
                                        sx={{ fontSize: 22, fontWeight: 700, ml: 0.2 }}
                                    >
                                        €
                                    </Box>
                                </Typography>

                                <Stack>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#7A8098", fontWeight: 500 }}
                                    >
                                        per month
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: "#A3A8C0" }}>
                                        paid{" "}
                                        {billingPeriod === "monthly" ? "monthly" : "annually"}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Link href="https://app.silicon-plan.live" target="_blank">
                                <Button
                                    name="get-started"
                                    fullWidth
                                    disableRipple
                                    sx={{
                                        mt: 2,
                                        textTransform: "none",
                                        borderRadius: 3,
                                        py: 1.4,
                                        fontWeight: 400,
                                        fontSize: 15,
                                        background: theme.palette.titleGradient,
                                        color: "#FFFFFF",
                                        border: "none",
                                        boxShadow: `
                                    0 0 0 1px rgba(96, 126, 255, 0.95),
                                    0 0 0 1px rgba(255, 255, 255, 0.95) inset,
                                    0 18px 32px rgba(88, 124, 255, 0.4)
                                    `,
                                        "&:hover": {
                                            background: theme.palette.titleGradient,
                                        },
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Link>
                            <Stack gap={2} pt={3}>
                                {FEATURES.map((feature) => {
                                    const included = feature.unicorn;
                                    return (
                                        <Stack
                                            key={feature.label}
                                            direction="row"
                                            alignItems="center"
                                            spacing={1.2}
                                        >
                                            {included ? (
                                                <CheckCircleIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: theme.palette.success.main,
                                                    }}
                                                />
                                            ) : (
                                                <CancelIcon
                                                    sx={{
                                                        fontSize: 18,
                                                        color: "#F16B6B",
                                                    }}
                                                />
                                            )}
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#4F5670",
                                                }}
                                            >
                                                {feature.label}
                                            </Typography>
                                            {feature.tag && included && (
                                                <Chip
                                                    label={feature.tag}
                                                    size="small"
                                                    sx={{
                                                        ml: 0.5,
                                                        fontSize: 10,
                                                        height: 20,
                                                        borderRadius: 999,
                                                        backgroundColor: "#EFF2FF",
                                                        color: "#4D5AE5",
                                                    }}
                                                />
                                            )}
                                        </Stack>
                                    );
                                })}
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Pricing;

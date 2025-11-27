"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import asset1 from "@/assets/bento/asset1.png";
import asset2 from "@/assets/bento/asset2.png";
import asset3 from "@/assets/bento/asset3.png";
import asset4 from "@/assets/bento/asset4.png";

const BentoSection = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 10 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Stack spacing={5} alignItems="center" maxWidth="1180px" mx="auto">
                {/* Title */}
                <Typography
                    sx={{
                        fontSize: { xs: 26, md: 34 },
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 1.3,
                        backgroundImage: theme.palette.titleGradient,
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Everything You Need to Build
                    <br />a Winning Business Plan
                </Typography>

                {/* BENTO GRID */}
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gap: { xs: 3, md: 3.5 },
                        gridTemplateColumns: {
                            xs: "1fr",
                            md: "repeat(3, minmax(0, 1fr))",
                        },
                        gridTemplateAreas: {
                            xs: `"top-left"
                   "top-right"
                   "bottom-left"
                   "bottom-right"`,
                            md: `"top-left top-left top-right"
                   "bottom-left bottom-right bottom-right"`,
                        },
                    }}
                >
                    {/* TOP LEFT – big card (2 cols) */}
                    <Box
                        sx={{
                            gridArea: "top-left",
                            borderRadius: 4,
                            px: { xs: 2.5, md: 3 },
                            pt: { xs: 2.5, md: 3 },
                            bgcolor: "#FFFFFF",
                            backgroundImage:
                                "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                            display: "flex",
                            flexDirection: "column",
                            height: { xs: "auto", md: "100%" }, // match row height
                        }}
                    >
                        <Stack width="100%" spacing={0.5} alignItems="center">
                            <Typography
                                sx={{ fontSize: 24, fontWeight: 400, color: "#1D2340", textAlign: "center" }}
                            >
                                Instant AI-powered
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "#7A8098",
                                    textAlign: "center",
                                }}
                            >
                                document creation
                            </Typography>

                            {/* Pills */}
                            <Stack
                                direction="row"
                                flexWrap="wrap"
                                gap={1}
                                pt={1}
                                pb={2}
                            >
                                {[
                                    "Business Plan",
                                    "Pitch Deck",
                                    "Financial Forecasts",
                                    "Canvas Models",
                                ].map((label) => (
                                    <Box
                                        key={label}
                                        sx={{
                                            px: 1.7,
                                            py: 0.7,
                                            borderRadius: 999,
                                            border: "1px solid rgba(168, 186, 225, 1)",
                                            bgcolor: "rgba(238, 241, 249, 0.63)",
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: theme.palette.primary.main,
                                        }}
                                    >
                                        {label}
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>

                        {/* Image fills remaining space */}
                        <Box
                            sx={{
                                mt: 4,
                                position: "relative",
                                width: "100%",
                                flexGrow: 1,
                                minHeight: 0,
                            }}
                        >
                            <Image
                                src={asset1}
                                alt="Instant AI-powered document creation"
                                fill
                                sizes="(max-width: 900px) 100vw, 66vw"
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    </Box>

                    {/* TOP RIGHT – small SQUARE card */}
                    <Box
                        sx={{
                            gridArea: "top-right",
                            borderRadius: 4,
                            p: { xs: 2.5, md: 3 },
                            bgcolor: "#FFFFFF",
                            overflow: "hidden",
                            backgroundImage:
                                "linear-gradient(150deg, #F8F9FF 0%, #FFFFFF 40%, #F5F7FF 100%)",
                            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            aspectRatio: { xs: "auto", md: "1 / 1" }, // square card on desktop
                        }}
                    >
                        <Stack width="100%" spacing={0.5} alignItems="center">
                            <Typography
                                sx={{ fontSize: 24, fontWeight: 400, color: "#1D2340", textAlign: "center" }}
                            >
                                Expert support
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "#7A8098",
                                    textAlign: "center",
                                }}
                            >
                                Choose consultants
                                <br />
                                from our marketplace.
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                mt: 2,
                                position: "relative",
                                width: "100%",
                                flexGrow: 1,
                                minHeight: 0,
                            }}
                        >
                            <Image
                                src={asset2}
                                alt="Expert support"
                                fill
                                sizes="(max-width: 900px) 100vw, 33vw"
                                style={{ objectFit: "contain", scale: 1.2 }}
                            />
                        </Box>
                    </Box>

                    {/* BOTTOM LEFT – small SQUARE card */}
                    <Box
                        sx={{
                            gridArea: "bottom-left",
                            borderRadius: 4,
                            p: { xs: 2.5, md: 3 },
                            bgcolor: "#FFFFFF",
                            backgroundImage:
                                "linear-gradient(145deg, #F7F8FF 0%, #FFFFFF 40%, #F5F7FF 100%)",
                            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            aspectRatio: { xs: "auto", md: "1 / 1" }, // square card on desktop
                        }}
                    >
                        <Stack width="100%" spacing={0.5} alignItems="center">
                            <Typography
                                sx={{ fontSize: 24, fontWeight: 400, color: "#1D2340", textAlign: "center" }}
                            >
                                Collaborate
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 400,
                                    color: "#7A8098",
                                    textAlign: "center",
                                }}
                            >
                                seamlessly on documents
                                <br />
                                with your team.
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                mt: 2,
                                position: "relative",
                                width: "100%",
                                flexGrow: 1,
                                minHeight: 0,
                            }}
                        >
                            <Image
                                src={asset3}
                                alt="Collaborate"
                                fill
                                sizes="(max-width: 900px) 100vw, 33vw"
                                style={{ objectFit: "contain", scale: 1.15 }}
                            />
                        </Box>
                    </Box>

                    {/* BOTTOM RIGHT – big card (2 cols) */}
                    <Box
                        sx={{
                            gridArea: "bottom-right",
                            borderRadius: 4,
                            px: { xs: 2.5, md: 3 },
                            pt: { xs: 2.5, md: 3 },
                            bgcolor: "#FFFFFF",
                            backgroundImage:
                                "linear-gradient(145deg, #F7F8FF 0%, #FFFFFF 40%, #F5F7FF 100%)",
                            boxShadow: "0px 24px 60px rgba(15, 27, 60, 0.12)",
                            display: "flex",
                            flexDirection: "column",
                            height: { xs: "auto", md: "100%" }, // match row height
                        }}
                    >
                        <Stack width="100%" spacing={2} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack width="50%" spacing={0.5}>
                                <Typography
                                    sx={{ fontSize: 24, fontWeight: 400, color: "#1D2340" }}
                                >
                                    Financial Forecasts
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "#7A8098",
                                        maxWidth: 420,
                                    }}
                                >
                                    Analyze financial performance using AI to deliver more accurate
                                    predictions of profits and expenses.
                                </Typography>
                            </Stack>

                            {/* Toggle chips */}
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    mt: 1,
                                    mb: 1.5,
                                    borderRadius: 999,
                                    border: "1px solid rgba(122, 128, 152, 0.3)",
                                    bgcolor: "rgba(255, 255, 255, 0.9)",
                                    px: 0.5,
                                    py: 0.3,
                                }}
                            >
                                {["Monthly", "Quaterly", "Yearly"].map((label, idx) => (
                                    <Box
                                        key={label}
                                        sx={{
                                            px: 2,
                                            py: 0.5,
                                            borderRadius: 999,
                                            fontSize: 16,
                                            fontWeight: idx === 0 ? 400 : 400,
                                            backgroundColor: idx === 0 ? "#4D5AE5" : "transparent",
                                            color: idx === 0 ? "#FFFFFF" : "#6F76A3",
                                        }}
                                    >
                                        {label}
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>

                        {/* Image fills remaining space */}
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                flexGrow: 1,
                                minHeight: 0,
                            }}
                        >
                            <Image
                                src={asset4}
                                alt="Financial forecasts"
                                fill
                                sizes="(max-width: 900px) 100vw, 66vw"
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* CTA button */}
                <Button
                disableRipple
                sx={{
                    textTransform: "none",
                    borderRadius: "16px",
                    py: 2.25,
                    px: 6.5,
                    fontWeight: 400,
                    fontSize: 15,
                    background: theme.palette.titleGradient,
                    color: "#FFFFFF",
                    border: "none",
                    boxShadow: `
                                    0 0 0 1px rgba(96, 126, 255, 0.95),        /* outer colored ring */
                                    0 0 0 1px rgba(255, 255, 255, 0.95) inset, /* inner white ring   */
                                    0 18px 32px rgba(88, 124, 255, 0.4)        /* drop shadow        */
                                    `,
                    "&:hover": {
                        background: theme.palette.titleGradient,
                    },
                }}
            >
                Create My First Plan
            </Button>
            </Stack>
        </Box>
    );
};

export default BentoSection;

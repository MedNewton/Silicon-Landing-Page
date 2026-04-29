"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Stack,
    Typography,
} from "@mui/material";
import { ArrowDown2 } from "iconsax-reactjs";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

const FaqSection = () => {
    const t = useTranslations("faq");
    const items = t.raw("items") as Array<{ question: string; answer: string }>;
    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange = (index: number) => (_: unknown, isExpanded: boolean) => {
        setExpanded(isExpanded ? index : false);
    };

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 6, md: 14 },
                px: { xs: 2, md: 10 },
            }}
        >
            <Stack
                spacing={{ xs: 4, md: 6 }}
                width="100%"
                maxWidth="900px"
                mx="auto"
            >
                <Stack spacing={{ xs: 2, md: 2.5 }} alignItems="center" textAlign="center">
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: { xs: 36, md: 56 },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            background: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: { xs: 16, md: 20 },
                            lineHeight: 1.5,
                            maxWidth: 640,
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                </Stack>

                <Stack spacing={2} useFlexGap sx={{ width: "100%" }}>
                    {items.map((item, index) => {
                        const isOpen = expanded === index;
                        return (
                            <Accordion
                                key={index}
                                expanded={isOpen}
                                onChange={handleChange(index)}
                                disableGutters
                                elevation={0}
                                square={false}
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    background: "#FFFFFF",
                                    border: "1px solid",
                                    borderColor: isOpen
                                        ? "rgba(63, 109, 221, 0.35)"
                                        : "rgba(30, 43, 66, 0.08)",
                                    boxShadow: isOpen
                                        ? "0px 16px 40px rgba(91, 58, 158, 0.12)"
                                        : "0px 4px 16px rgba(15, 27, 60, 0.04)",
                                    transition:
                                        "border-color 0.25s ease, box-shadow 0.25s ease",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <Box
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: "50%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: isOpen
                                                    ? theme.palette.titleGradient
                                                    : "rgba(63, 109, 221, 0.08)",
                                                transition:
                                                    "background 0.25s ease",
                                            }}
                                        >
                                            <ArrowDown2
                                                size={16}
                                                color={isOpen ? "#FFFFFF" : "#3F6DDD"}
                                                variant="Linear"
                                            />
                                        </Box>
                                    }
                                    sx={{
                                        px: { xs: 2.5, md: 3.5 },
                                        py: { xs: 1, md: 1.5 },
                                        minHeight: { xs: 64, md: 72 },
                                        "& .MuiAccordionSummary-content": {
                                            my: { xs: 1.5, md: 2 },
                                        },
                                        "& .MuiAccordionSummary-expandIconWrapper": {
                                            transition: "transform 0.25s ease",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 16, md: 18 },
                                            fontWeight: 600,
                                            color: isOpen ? "#3F6DDD" : "#1E2B42",
                                            transition: "color 0.25s ease",
                                            pr: 2,
                                        }}
                                    >
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        px: { xs: 2.5, md: 3.5 },
                                        pt: 0,
                                        pb: { xs: 2.5, md: 3 },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            borderTop:
                                                "1px solid rgba(30, 43, 66, 0.08)",
                                            pt: { xs: 2, md: 2.5 },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: { xs: 15, md: 16 },
                                                lineHeight: 1.65,
                                                color: theme.palette.text.secondary,
                                            }}
                                        >
                                            {item.answer}
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
};

export default FaqSection;

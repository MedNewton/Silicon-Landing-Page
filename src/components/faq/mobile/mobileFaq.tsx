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
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

// TODO: confirm FAQ content with owner (namespace `Faq` in messages/{it,en}.json).

type FaqItem = { question: string; answer: string };

const MobileFaq = () => {
    const t = useTranslations("Faq");
    const items = t.raw("items") as FaqItem[];

    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange =
        (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box sx={{ width: "100%", py: 6, px: 2 }}>
            <Stack spacing={4} alignItems="center">
                <Stack spacing={1.5} alignItems="center" textAlign="center">
                    <Box
                        sx={{
                            px: 1.5,
                            py: 0.4,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.25)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 11,
                                fontWeight: 600,
                                letterSpacing: 1.2,
                                backgroundImage: theme.palette.titleGradient,
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {t("eyebrow")}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontWeight: 700,
                            lineHeight: 1.3,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 14,
                            color: theme.palette.secondary.main,
                            lineHeight: 1.55,
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                </Stack>

                <Stack spacing={1.5} width="100%">
                    {items.map((item, i) => {
                        const isOpen = expanded === i;
                        return (
                            <Box
                                key={i}
                                sx={{
                                    borderRadius: 2.5,
                                    p: "1px",
                                    background: isOpen
                                        ? theme.palette.heroFakeBorderGradient
                                        : "rgba(101, 71, 165, 0.18)",
                                    transition: "background 0.3s ease",
                                }}
                            >
                                <Accordion
                                    expanded={isOpen}
                                    onChange={handleChange(i)}
                                    disableGutters
                                    elevation={0}
                                    square
                                    sx={{
                                        borderRadius: 2.5,
                                        overflow: "hidden",
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow:
                                            "0px 8px 20px rgba(30, 43, 66, 0.06)",
                                        "&::before": { display: "none" },
                                        "& .MuiAccordionDetails-root": {
                                            animation: isOpen
                                                ? "faqFadeInMobile 0.3s ease"
                                                : "none",
                                        },
                                        "@keyframes faqFadeInMobile": {
                                            from: {
                                                opacity: 0,
                                                transform: "translateY(-4px)",
                                            },
                                            to: {
                                                opacity: 1,
                                                transform: "translateY(0)",
                                            },
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            <ExpandMoreRoundedIcon
                                                sx={{
                                                    fontSize: 24,
                                                    color: "#6547A5",
                                                }}
                                            />
                                        }
                                        sx={{
                                            px: 2,
                                            py: 0.5,
                                            "& .MuiAccordionSummary-content": {
                                                my: 1.25,
                                            },
                                            "& .MuiAccordionSummary-expandIconWrapper":
                                                {
                                                    transition:
                                                        "transform 0.3s ease",
                                                },
                                            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":
                                                {
                                                    transform: "rotate(180deg)",
                                                },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 14.5,
                                                fontWeight: 600,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {item.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            px: 2,
                                            pb: 2.25,
                                            pt: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 13.5,
                                                lineHeight: 1.55,
                                                color: theme.palette.secondary
                                                    .main,
                                            }}
                                        >
                                            {item.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        );
                    })}
                </Stack>
            </Stack>
        </Box>
    );
};

export default MobileFaq;

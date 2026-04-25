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

const Faq = () => {
    const t = useTranslations("Faq");
    const items = t.raw("items") as FaqItem[];

    const [expanded, setExpanded] = useState<number | false>(0);

    const handleChange =
        (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box
            sx={{
                width: "100%",
                py: { md: 10 },
                px: { md: 4 },
            }}
        >
            <Stack spacing={5} alignItems="center" maxWidth="900px" mx="auto">
                <Stack spacing={2} alignItems="center" textAlign="center">
                    <Box
                        sx={{
                            px: 1.75,
                            py: 0.5,
                            borderRadius: 999,
                            background:
                                "linear-gradient(273deg, rgba(101, 71, 165, 0.12) 0%, rgba(63, 109, 221, 0.12) 100%)",
                            border: "1px solid rgba(101, 71, 165, 0.25)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 12,
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
                            fontSize: 34,
                            fontWeight: 700,
                            lineHeight: 1.25,
                            backgroundImage: theme.palette.titleGradient,
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 16,
                            color: theme.palette.secondary.main,
                            lineHeight: 1.6,
                            maxWidth: 720,
                        }}
                    >
                        {t("subtitle")}
                    </Typography>
                </Stack>

                <Stack spacing={2} width="100%">
                    {items.map((item, i) => {
                        const isOpen = expanded === i;
                        return (
                            <Box
                                key={i}
                                sx={{
                                    borderRadius: 3,
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
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        bgcolor: "#FFFFFF",
                                        backgroundImage:
                                            "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                        boxShadow:
                                            "0px 10px 24px rgba(30, 43, 66, 0.06)",
                                        transition:
                                            "box-shadow 0.25s ease, transform 0.25s ease",
                                        "&:hover": {
                                            boxShadow:
                                                "0px 18px 40px rgba(30, 43, 66, 0.08)",
                                        },
                                        "&::before": { display: "none" },
                                        "& .MuiAccordionDetails-root": {
                                            animation: isOpen
                                                ? "faqFadeIn 0.35s ease"
                                                : "none",
                                        },
                                        "@keyframes faqFadeIn": {
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
                                                    fontSize: 28,
                                                    color: "#6547A5",
                                                }}
                                            />
                                        }
                                        sx={{
                                            px: 3,
                                            py: 1.5,
                                            "& .MuiAccordionSummary-content": {
                                                my: 1.5,
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
                                                fontSize: 17,
                                                fontWeight: 600,
                                                color: "#1D2340",
                                            }}
                                        >
                                            {item.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails
                                        sx={{
                                            px: 3,
                                            pb: 3,
                                            pt: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 15,
                                                lineHeight: 1.6,
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

export default Faq;

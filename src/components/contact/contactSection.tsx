"use client";

import { useMemo, useState } from "react";
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

type Status = "idle" | "submitting" | "success" | "error";

const fieldSx = {
    "& .MuiOutlinedInput-root": {
        borderRadius: 3,
        background: "#FFFFFF",
        boxShadow: "0px 4px 12px rgba(15, 27, 60, 0.04)",
        "& fieldset": {
            borderColor: "rgba(30, 43, 66, 0.12)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(63, 109, 221, 0.5)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#3F6DDD",
            borderWidth: 1.5,
        },
    },
    "& .MuiInputLabel-root": {
        color: "#3D537B",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#3F6DDD",
    },
    "& .MuiOutlinedInput-input": {
        color: "#1E2B42",
        fontSize: 15,
    },
} as const;

const submitButtonSx = {
    textTransform: "none",
    borderRadius: 20,
    py: 1.4,
    px: 4,
    fontWeight: 500,
    fontSize: 15,
    color: "#FFFFFF",
    background:
        "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
    backgroundSize: "200% 200%",
    animation: "bgShimmer 3s ease infinite",
    boxShadow: "0px 12px 28px rgba(91, 58, 158, 0.35)",
    transition: "transform 0.25s ease, filter 0.25s ease",
    "&:hover": {
        transform: "scale(1.04)",
        filter: "brightness(1.1)",
        background:
            "linear-gradient(273deg, #5B3A9E 0%, #3B7AF0 50%, #5B3A9E 100%)",
    },
    "&.Mui-disabled": {
        color: "rgba(255, 255, 255, 0.85)",
        opacity: 0.7,
    },
    "@media (prefers-reduced-motion: reduce)": {
        animation: "none",
    },
    "@keyframes bgShimmer": {
        "0%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
        "100%": { backgroundPosition: "0% 50%" },
    },
} as const;

const ContactSection = () => {
    const t = useTranslations("contact");
    const [status, setStatus] = useState<Status>("idle");
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const isSubmitting = status === "submitting";
    const canSubmit = useMemo(
        () =>
            form.name.trim().length > 0 &&
            form.email.trim().length > 0 &&
            form.subject.trim().length > 0 &&
            form.message.trim().length > 0,
        [form],
    );

    const handleChange =
        (field: keyof typeof form) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [field]: event.target.value }));
        };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!canSubmit || isSubmitting) return;
        setStatus("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!response.ok) throw new Error("send_failed");
            setStatus("success");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
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
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                alignItems={{ xs: "stretch", md: "flex-start" }}
                width="100%"
                maxWidth="1280px"
                mx="auto"
            >
                <Stack
                    spacing={{ xs: 2.5, md: 3 }}
                    flex={1}
                    sx={{ width: "100%" }}
                >
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
                            maxWidth: 520,
                        }}
                    >
                        {t("description")}
                    </Typography>
                </Stack>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        flex: 1,
                        width: "100%",
                        bgcolor: "#FFFFFF",
                        borderRadius: 4,
                        p: { xs: 3, md: 4 },
                        boxShadow: "0px 12px 40px rgba(15, 27, 60, 0.06)",
                        border: "1px solid rgba(30, 43, 66, 0.06)",
                    }}
                >
                    <Stack spacing={2.5}>
                        <TextField
                            required
                            fullWidth
                            label={t("nameField")}
                            value={form.name}
                            onChange={handleChange("name")}
                            disabled={isSubmitting}
                            slotProps={{ htmlInput: { maxLength: 120 } }}
                            sx={fieldSx}
                        />
                        <TextField
                            required
                            fullWidth
                            type="email"
                            label={t("emailField")}
                            value={form.email}
                            onChange={handleChange("email")}
                            disabled={isSubmitting}
                            slotProps={{ htmlInput: { maxLength: 200 } }}
                            sx={fieldSx}
                        />
                        <TextField
                            required
                            fullWidth
                            label={t("subjectField")}
                            value={form.subject}
                            onChange={handleChange("subject")}
                            disabled={isSubmitting}
                            slotProps={{ htmlInput: { maxLength: 200 } }}
                            sx={fieldSx}
                        />
                        <TextField
                            required
                            fullWidth
                            multiline
                            minRows={5}
                            label={t("messageField")}
                            value={form.message}
                            onChange={handleChange("message")}
                            disabled={isSubmitting}
                            slotProps={{ htmlInput: { maxLength: 5000 } }}
                            sx={fieldSx}
                        />

                        {status === "success" && (
                            <Alert severity="success" sx={{ borderRadius: 2 }}>
                                {t("successMessage")}
                            </Alert>
                        )}
                        {status === "error" && (
                            <Alert severity="error" sx={{ borderRadius: 2 }}>
                                {t("errorMessage")}
                            </Alert>
                        )}

                        <Box>
                            <Button
                                type="submit"
                                disableRipple
                                disabled={!canSubmit || isSubmitting}
                                sx={submitButtonSx}
                                startIcon={
                                    isSubmitting ? (
                                        <CircularProgress
                                            size={16}
                                            sx={{ color: "#FFFFFF" }}
                                        />
                                    ) : null
                                }
                            >
                                {isSubmitting ? t("sending") : t("submit")}
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default ContactSection;

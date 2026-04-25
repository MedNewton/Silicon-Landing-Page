"use client";

import { useState, type FormEvent } from "react";
import {
    Alert,
    Box,
    Button,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { useTranslations } from "next-intl";
import theme from "@/theme/theme";

const EMAIL = "info@siliconplan.com";
const PHONE = "+39 0823 21 04 74";
const ADDRESS = "Via Eleuterio Ruggiero 123, Caserta (CE)";

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const inputSx = {
    "& .MuiOutlinedInput-root": {
        borderRadius: 2,
        bgcolor: "#FFFFFF",
        "& fieldset": {
            borderColor: "rgba(101, 71, 165, 0.25)",
        },
        "&:hover fieldset": {
            borderColor: "rgba(101, 71, 165, 0.55)",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#6547A5",
            borderWidth: "1.5px",
        },
    },
    "& .MuiInputLabel-root": {
        color: theme.palette.secondary.main,
        "&.Mui-focused": {
            color: "#6547A5",
        },
    },
    "& .MuiOutlinedInput-input": {
        color: "#1D2340",
    },
};

type InfoRowProps = {
    icon: React.ReactNode;
    label: string;
    value: React.ReactNode;
};

const InfoRow = ({ icon, label, value }: InfoRowProps) => (
    <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box
            sx={{
                width: 44,
                height: 44,
                flexShrink: 0,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: theme.palette.titleGradient,
                color: "#FFFFFF",
                boxShadow: "0 12px 28px rgba(88, 124, 255, 0.35)",
            }}
        >
            {icon}
        </Box>
        <Stack spacing={0.25} sx={{ pt: 0.25 }}>
            <Typography
                sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: 1.1,
                    textTransform: "uppercase",
                    color: theme.palette.secondary.main,
                }}
            >
                {label}
            </Typography>
            <Typography
                sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#1D2340",
                    wordBreak: "break-word",
                }}
            >
                {value}
            </Typography>
        </Stack>
    </Stack>
);

const Contact = () => {
    const t = useTranslations("Contact");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            !name.trim() ||
            !email.trim() ||
            !message.trim() ||
            !isValidEmail(email.trim())
        ) {
            setStatus("error");
            return;
        }
        // TODO: wire to real email/form backend (e.g., Resend, SendGrid, contact endpoint)
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    };

    return (
        <Box
            sx={{
                width: "100%",
                py: { md: 10 },
                px: { md: 4 },
            }}
        >
            <Stack spacing={5} alignItems="center" maxWidth="1180px" mx="auto">
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

                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gap: 3,
                        gridTemplateColumns: {
                            md: "5fr 7fr",
                        },
                    }}
                >
                    {/* Info card */}
                    <Box
                        sx={{
                            borderRadius: 4,
                            p: "1px",
                            background: theme.palette.heroFakeBorderGradient,
                        }}
                    >
                        <Stack
                            spacing={3}
                            sx={{
                                height: "100%",
                                borderRadius: 4,
                                p: 4,
                                bgcolor: "#FFFFFF",
                                backgroundImage:
                                    "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                boxShadow:
                                    "0px 18px 40px rgba(30, 43, 66, 0.08)",
                            }}
                        >
                            <InfoRow
                                icon={<EmailOutlinedIcon sx={{ fontSize: 22 }} />}
                                label={t("info.emailLabel")}
                                value={
                                    <Typography
                                        component="a"
                                        href={`mailto:${EMAIL}`}
                                        sx={{
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "#1D2340",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "#6547A5",
                                            },
                                        }}
                                    >
                                        {EMAIL}
                                    </Typography>
                                }
                            />
                            <InfoRow
                                icon={<PhoneOutlinedIcon sx={{ fontSize: 22 }} />}
                                label={t("info.phoneLabel")}
                                value={
                                    <Typography
                                        component="a"
                                        href={`tel:${PHONE.replace(/\s/g, "")}`}
                                        sx={{
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: "#1D2340",
                                            textDecoration: "none",
                                            "&:hover": {
                                                color: "#6547A5",
                                            },
                                        }}
                                    >
                                        {PHONE}
                                    </Typography>
                                }
                            />
                            <InfoRow
                                icon={
                                    <LocationOnOutlinedIcon sx={{ fontSize: 22 }} />
                                }
                                label={t("info.addressLabel")}
                                value={ADDRESS}
                            />
                            <InfoRow
                                icon={
                                    <ScheduleOutlinedIcon sx={{ fontSize: 22 }} />
                                }
                                label={t("info.hoursLabel")}
                                value={t("info.hoursValue")}
                            />
                        </Stack>
                    </Box>

                    {/* Form card */}
                    <Box
                        sx={{
                            borderRadius: 4,
                            p: "1px",
                            background: theme.palette.heroFakeBorderGradient,
                        }}
                    >
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{
                                height: "100%",
                                borderRadius: 4,
                                p: 4,
                                bgcolor: "#FFFFFF",
                                backgroundImage:
                                    "linear-gradient(145deg, #F7F8FF 0%, #F5F7FF 40%, #FFFFFF 100%)",
                                boxShadow:
                                    "0px 18px 40px rgba(30, 43, 66, 0.08)",
                            }}
                        >
                            <Stack spacing={2.5}>
                                <Box
                                    sx={{
                                        display: "grid",
                                        gap: 2.5,
                                        gridTemplateColumns: {
                                            sm: "repeat(2, minmax(0, 1fr))",
                                        },
                                    }}
                                >
                                    <TextField
                                        label={t("form.name")}
                                        required
                                        fullWidth
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        sx={inputSx}
                                    />
                                    <TextField
                                        label={t("form.email")}
                                        required
                                        type="email"
                                        fullWidth
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={inputSx}
                                    />
                                </Box>
                                <TextField
                                    label={t("form.subject")}
                                    fullWidth
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    sx={inputSx}
                                />
                                <TextField
                                    label={t("form.message")}
                                    required
                                    multiline
                                    rows={5}
                                    fullWidth
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    sx={inputSx}
                                />

                                {status === "success" && (
                                    <Alert
                                        severity="success"
                                        onClose={() => setStatus("idle")}
                                        sx={{ borderRadius: 2 }}
                                    >
                                        {t("form.successMessage")}
                                    </Alert>
                                )}
                                {status === "error" && (
                                    <Alert
                                        severity="error"
                                        onClose={() => setStatus("idle")}
                                        sx={{ borderRadius: 2 }}
                                    >
                                        {t("form.errorMessage")}
                                    </Alert>
                                )}

                                <Box>
                                    <Button
                                        type="submit"
                                        sx={{
                                            height: 48,
                                            px: 4,
                                            borderRadius: 999,
                                            textTransform: "none",
                                            fontSize: "0.95rem",
                                            fontWeight: 600,
                                            color: "#FFFFFF",
                                            background:
                                                theme.palette.ctaGradient,
                                            boxShadow:
                                                "0 12px 28px rgba(88, 124, 255, 0.35)",
                                            transition: "transform 0.2s ease",
                                            "&:hover": {
                                                transform: "translateY(-1px)",
                                                background:
                                                    theme.palette.ctaGradient,
                                            },
                                        }}
                                    >
                                        {t("form.submit")}
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Contact;

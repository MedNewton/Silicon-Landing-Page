import { Box, Button, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import theme from "@/theme/theme";

import bg from "@/assets/consultants/bg.webp";
import womanImg from "@/assets/consultants/img.png";

const ConsultantsSection = () => {
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 4, md: 6 },
                px: { xs: 2, md: 0 },
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1280px",
                    mx: "auto",
                    borderRadius: 4,
                    border: "1px solid rgba(63, 77, 204, 0.25)",
                    overflow: "hidden",
                    minHeight: { xs: "auto", md: 420 },
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    alignItems={{ xs: "stretch", md: "flex-end" }}
                    sx={{ width: "100%", minHeight: "inherit" }}
                >
                    <Stack
                        spacing={{ xs: 2.5, md: 3 }}
                        sx={{
                            flex: 1,
                            px: { xs: 3, md: 6 },
                            py: { xs: 4, md: 6 },
                            zIndex: 2,
                            maxWidth: { xs: "100%", md: "55%" },
                        }}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            py={1}
                            px={2}
                            borderRadius={20}
                            gap={1.25}
                            sx={{
                                background: "rgba(255, 255, 255, 0.55)",
                                backdropFilter: "blur(6px)",
                                width: "fit-content",
                            }}
                        >
                            <Stack
                                width={8}
                                height={8}
                                borderRadius={"50%"}
                                sx={{
                                    background: theme.palette.success.main,
                                    boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                    animation: "pulse 2s infinite",
                                    "@keyframes pulse": {
                                        "0%": {
                                            boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                        },
                                        "50%": {
                                            boxShadow: `0 0 20px 1px ${theme.palette.success.main}`,
                                        },
                                        "100%": {
                                            boxShadow: `0 0 8px 2px ${theme.palette.success.main}`,
                                        },
                                    },
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    background: theme.palette.titleGradient,
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Join consultants supporting{" "}
                                <span style={{ fontWeight: 700 }}>800+</span> SMEs every
                                day
                            </Typography>
                        </Stack>

                        <Typography
                            sx={{
                                fontSize: { xs: 26, md: 38 },
                                fontWeight: 700,
                                lineHeight: 1.15,
                                background: theme.palette.titleGradient,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Work with startups
                            <br />
                            that are ready to build
                        </Typography>

                        <Typography
                            sx={{
                                color: "#1E2B42",
                                fontSize: { xs: 14, md: 16 },
                                lineHeight: 1.6,
                                maxWidth: 520,
                            }}
                        >
                            Join Silicon Plan as a consultant and collaborate with
                            founders who are actively developing their business ideas
                        </Typography>

                        <Link href="#" target="_blank" sx={{ width: "fit-content" }}>
                            <Button
                                name="become-a-consultant"
                                disableRipple
                                sx={{
                                    textTransform: "none",
                                    borderRadius: "16px",
                                    py: 1.75,
                                    px: 4.5,
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
                                Become a Consultant
                            </Button>
                        </Link>
                    </Stack>

                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            position: "relative",
                            flex: 1,
                            alignSelf: "stretch",
                            justifyContent: "flex-end",
                            alignItems: "flex-end",
                            minHeight: 420,
                        }}
                    >
                        <Image
                            src={womanImg}
                            alt="Smiling consultant"
                            style={{
                                height: "100%",
                                width: "auto",
                                maxHeight: 560,
                                objectFit: "contain",
                                objectPosition: "bottom right",
                                display: "block",
                            }}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default ConsultantsSection;

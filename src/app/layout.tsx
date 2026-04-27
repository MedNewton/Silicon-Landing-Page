import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/globals.css";

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "SiliconPlan",
    description:
        "Empowering businesses worldwide with AI-driven tools for business planning, financial forecasting, and investor-ready insights.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="it" className={sora.variable}>
            <body>{children}</body>
        </html>
    );
}

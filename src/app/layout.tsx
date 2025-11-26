import { type Metadata } from "next";
import { Sora } from "next/font/google";

export const metadata: Metadata = {
  title: "SiliconPlan",
  description: "Empowering businesses worldwide with AI-driven tools for business planning, financial forecasting, and investor-ready insights.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}

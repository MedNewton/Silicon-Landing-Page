import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import ThemeRegistry from "@/components/layout/ThemeRegistry";
import { routing } from "@/i18n/routing";

export default async function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = routing.defaultLocale;
    setRequestLocale(locale);
    const messages = await getMessages({ locale });

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeRegistry>{children}</ThemeRegistry>
        </NextIntlClientProvider>
    );
}

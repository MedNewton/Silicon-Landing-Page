import {
    Book1,
    FormatSquare,
    Note1,
    PresentionChart,
    Element3,
    Diagram,
    Magicpen,
    MessageQuestion,
    Profile,
    Sun1,
    TickSquare,
    Star1,
} from "iconsax-reactjs";
import { useTranslations } from "next-intl";
import type { ComponentType } from "react";

export type IconProps = {
    size?: string | number;
    color?: string;
    variant?: "Linear" | "Outline" | "Bold" | "Bulk";
};

export type NavItem = {
    Icon: ComponentType<IconProps>;
    label: string;
    href: string;
};

const PRODUCT_ICONS: ComponentType<IconProps>[] = [Book1, FormatSquare, Note1, PresentionChart, Element3, Diagram];
const PRODUCT_HREFS = ["#", "#", "#", "#", "#", "#"];

const RESOURCES_ICONS: ComponentType<IconProps>[] = [Magicpen, Book1, MessageQuestion];
const RESOURCES_HREFS = ["/contact", "/coming-soon", "/faq"];

const ABOUT_ICONS: ComponentType<IconProps>[] = [Profile, Sun1, TickSquare, Star1];
const ABOUT_HREFS = [
    "/about/who-are-we",
    "/about/mission",
    "/about/vision",
    "/about/values",
];

export const useNavItems = () => {
    const t = useTranslations("header");
    const productLabels = t.raw("productItems") as Array<{ label: string }>;
    const resourcesLabels = t.raw("resourcesItems") as Array<{ label: string }>;
    const aboutLabels = t.raw("aboutItems") as Array<{ label: string }>;

    return {
        productItems: productLabels.map((entry, i): NavItem => ({
            Icon: PRODUCT_ICONS[i]!,
            label: entry.label,
            href: PRODUCT_HREFS[i]!,
        })),
        resourcesItems: resourcesLabels.map((entry, i): NavItem => ({
            Icon: RESOURCES_ICONS[i]!,
            label: entry.label,
            href: RESOURCES_HREFS[i]!,
        })),
        aboutItems: aboutLabels.map((entry, i): NavItem => ({
            Icon: ABOUT_ICONS[i]!,
            label: entry.label,
            href: ABOUT_HREFS[i]!,
        })),
    };
};

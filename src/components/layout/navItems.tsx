import {
    Book1,
    Hierarchy,
    Note1,
    PresentionChart,
    Element4,
    Chart,
    Magicpen,
    Edit2,
    MessageQuestion,
    Profile,
    Sun1,
    TickSquare,
    Star1,
} from "iconsax-reactjs";
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

export const PRODUCT_ITEMS: NavItem[] = [
    { Icon: Book1, label: "Overview", href: "#" },
    { Icon: Hierarchy, label: "How it works", href: "#" },
    { Icon: Note1, label: "Business Plan", href: "#" },
    { Icon: PresentionChart, label: "Pitch Deck", href: "#" },
    { Icon: Element4, label: "Business Model Canvas", href: "#" },
    { Icon: Chart, label: "Pre-Money Valuation", href: "#" },
];

export const RESOURCES_ITEMS: NavItem[] = [
    { Icon: Magicpen, label: "Contact Us", href: "#" },
    { Icon: Edit2, label: "Blog", href: "#" },
    { Icon: MessageQuestion, label: "FAQ", href: "#" },
];

export const ABOUT_ITEMS: NavItem[] = [
    { Icon: Profile, label: "Who we are", href: "/about/who-are-we" },
    { Icon: Sun1, label: "Mission", href: "#" },
    { Icon: TickSquare, label: "Vision", href: "#" },
    { Icon: Star1, label: "Values", href: "#" },
];

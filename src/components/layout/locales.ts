import type { ComponentType } from "react";
import USFlag from "@/components/icons/USFlag";
import ITFlag from "@/components/icons/ITFlag";

export type LocaleCode = "en" | "it";

export type Language = {
    code: LocaleCode;
    label: string;
    Flag: ComponentType<{ size?: number }>;
};

export const LANGUAGES: Language[] = [
    { code: "en", label: "EN", Flag: USFlag },
    { code: "it", label: "IT", Flag: ITFlag },
];

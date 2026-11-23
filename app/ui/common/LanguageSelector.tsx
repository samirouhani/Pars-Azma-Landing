"use client";

import { useEffect, useRef, useState } from "react";
import { PiGlobe } from "react-icons/pi";
import { MdExpandMore } from "react-icons/md";
import { useLanguage } from "@/app/i18n/LanguageContext";

const languages = [
    { code: "FA", triggerLabel: "فا", label: "فارسی" },
    { code: "EN", triggerLabel: "EN", label: "English" },
    { code: "TR", triggerLabel: "TR", label: "Türkçe" },
] as const;

export default function LanguageSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const activeLang = languages.find((lang) => lang.code === language) ?? languages[1];

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className="relative hidden md:inline-block">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                className="flex w-max border border-border-gray border-solid h-8 gap-1.5 pl-2 pr-1.5 py-1 items-center bg-slightly-blue cursor-pointer hover:border-blue-gray "
            >
                <PiGlobe className="text-black-blue size-4.5" />
                <span className="text-black-blue font-medium text-[0.875rem]">{activeLang.triggerLabel}</span>
                <MdExpandMore
                    className={`text-black-blue size-4.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
            </button>

            <ul
                role="listbox"
                aria-label={t.navbar.selectLanguageAria}
                className={`absolute inset-s-0 top-full mt-2 min-w-full border border-border-gray bg-slightly-blue shadow-md z-50 flex flex-col py-1 transition-all duration-150 ease-out origin-top ${
                    isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                }`}
            >
                {languages.map((lang) => {
                    const isSelected = lang.code === language;
                    return (
                        <li key={lang.code} role="presentation">
                            <button
                                type="button"
                                role="option"
                                aria-selected={isSelected}
                                tabIndex={isOpen ? 0 : -1}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-3 py-2 text-center text-sm transition-colors cursor-pointer hover:bg-white hover:text-accent-blue ${
                                    isSelected ? "font-semibold text-accent-blue" : "text-black-blue"
                                }`}
                            >
                                {lang.label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";

type StatementBannerProps = {
    content?: string;
};

export default function StatementBanner({ content }: StatementBannerProps) {
    const { t } = useLanguage();
    const text = content ?? t.statementBanner;

    return (
        <div className="flex justify-center border-b border-t border-border-gray py-8 px-5.5 sm:px-10 md:px-22 bg-slightly-blue">
            <div className="text-uppercase-label text-blue-gray text-center">{text}</div>
        </div>
    )
}
"use client"

import { useState } from "react";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";
import FAQCard from "@/app/ui/common/FAQCard";
import LinkButton from "@/app/ui/common/LinkButton";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function FAQ() {
    const { t } = useLanguage();
    const [openId, setOpenId] = useState<number | null>(null);

    return (
        <section className="bg-white py-16 md:py-24 border-b border-border-gray">
            <div className="mx-auto w-full max-w-7xl px-5.5 sm:px-10 md:px-20">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    
                    {/* Left Column: Title & Contact Card */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                        <RevealOnScroll delay={0}>
                            <h2 className="text-h2 text-black-blue">
                                {t.faq.titleMain}<span className="hidden lg:inline">{t.faq.titleSuffix}</span>
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={150}>
                            <div className="flex flex-col gap-5 border border-border-gray bg-slightly-blue p-5 md:p-6">
                                <h3 className="text-h3 text-black-blue">
                                    {t.faq.moreQuestions}
                                </h3>
                                <LinkButton
                                    href="/contact"
                                    variant="secondary"
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-4 w-4 rtl:rotate-180"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    }
                                >
                                    {t.faq.contactUs}
                                </LinkButton>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Column: Interactive FAQ Cards */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {t.faq.items.map((faq, index) => {
                            const id = index + 1;
                            return (
                                <RevealOnScroll key={id} delay={index * 100}>
                                    <FAQCard
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openId === id}
                                        onToggle={() =>
                                            setOpenId((prev) => (prev === id ? null : id))
                                        }
                                    />
                                </RevealOnScroll>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}

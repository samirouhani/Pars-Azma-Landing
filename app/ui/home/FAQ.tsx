"use client"

import { useState } from "react";
import { Wittgenstein } from "next/font/google";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";
import FAQCard from "@/app/ui/common/FAQCard";

const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein-serif",
    subsets: ["latin"],
});

// Random placeholder data for now
const faqData = [
    {
        id: 1,
        question: "What is the advantage of knowledge-based production of laboratory equipment at ParsAzma?",
        answer: "Knowledge-based production allows ParsAzma to design laboratory equipment in accordance with the application, scientific standards, and actual conditions of laboratories, and provides the ability to optimize and develop the product."
    },
    {
        id: 2,
        question: "Is it possible to design and manufacture custom laboratory equipment?",
        answer: "Yes, due to its knowledge-based approach, ParsAzma has enabled the design and manufacture of customized laboratory equipment based on the needs of research, academic, and industrial centers."
    },
    {
        id: 3,
        question: "In which centers is Pars Azma's knowledge-based laboratory equipment used?",
        answer: "Pars Azma products are used in university laboratories, research centers, pharmaceutical, food, chemical industries, and industrial units."
    },
    {
        id: 4,
        question: "Do Pars Azma's knowledge-based equipment include warranty and technical support?",
        answer: "All Pars Azma laboratory equipment has a warranty and technical support, and after-sales services and parts supply are provided."
    }
];

export default function FAQ() {
    return (
        <section className="bg-white py-16 md:py-24 border-b border-border-gray">
            <div className="mx-auto w-full max-w-7xl px-5.5 sm:px-10 md:px-20">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    
                    {/* Left Column: Title */}
                    <div className="lg:col-span-5">
                        <RevealOnScroll delay={0}>
                            <h2 className={`${wittgenstein.className} font-semibold text-3xl md:text-[2.25rem] text-black-blue leading-tight sticky top-24`}>
                                Frequently Asked Questions about Pars Azma Laboratory Equipment Production
                            </h2>
                        </RevealOnScroll>
                    </div>

                    {/* Right Column: Interactive FAQ Cards */}
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        {faqData.map((faq, index) => (
                            <RevealOnScroll key={faq.id} delay={index * 100}>
                                <FAQCard question={faq.question} answer={faq.answer} />
                            </RevealOnScroll>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

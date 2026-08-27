"use-client"
import { useState } from "react";

interface FAQCardProps {
    question: string;
    answer: string;
}

export default function FAQCard({ question, answer }: FAQCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // The outer container handles the click and the target for the "group/faq" hover states
        <div 
            className="group/faq relative w-full cursor-pointer block"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
        >
            {/* The copy underneath, for the blue shadow hover effect */}
            <span className="pointer-events-none absolute inset-0 bg-accent-blue/30 opacity-0 transition-opacity duration-200 ease-in-out group-hover/faq:opacity-100 z-0"/>

            {/* The moving card container */}
            <div className="relative flex flex-col border border-border-gray bg-slightly-blue w-full duration-250 ease-in-out group-hover/faq:-translate-x-1.5 group-hover/faq:-translate-y-1.5 group-hover/faq:border-accent-blue transition-[transform,background-color,color,border-color,translate] z-10 group-active/faq:translate-x-0 group-active/faq:translate-y-0 p-5 md:p-6">
                
                {/* Question & Chevron Row */}
                <div className="flex flex-row justify-between items-center gap-4">
                    <h3 className="font-semibold text-black-blue text-xs md:text-sm tracking-wider uppercase leading-relaxed">
                        {question}
                    </h3>
                    
                    {/* Chevron Icon (flips based on isOpen state) */}
                    <div className="shrink-0 text-slate-400 group-hover/faq:text-accent-blue transition-colors duration-300">
                        <svg 
                            className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>

                {/* 
                    Answer Container (Animated Height)
                    Uses CSS Grid to smoothly transition from 0 height to auto height. 
                */}
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                        {/* A top border to separate the answer when open */}
                        <div className="border-t border-border-gray pt-4 md:pt-5">
                            <p className="text-[#475569] text-sm md:text-base leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
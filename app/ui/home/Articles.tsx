"use client";

import { useRef } from "react";
import { Wittgenstein } from "next/font/google";
import ArticleCard from "@/app/ui/common/ArticleCard";
import LinkButton from "@/app/ui/common/LinkButton";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";

const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein-serif",
    subsets: ["latin"],
});

// Mock Data
const articlesData = [
    { id: 1, title: "Laboratory scaffolding | Design, standardization and implementation by Pars Azma", date: "25.04.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 2, title: "A deeper understanding of incubator types for specialized laboratory applications", date: "06.04.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 3, title: "Introduction and important explanations about laminar hood", date: "04.04.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 4, title: "Comprehensive Guide to Buying a Laboratory Centrifuge", date: "15.02.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 5, title: "Comprehensive list of general and specialized laboratory equipment | Selection and application guide", date: "10.02.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
];

export default function Articles() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to handle arrow clicks
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            // Scroll by roughly the width of one card + gap
            const scrollAmount = scrollRef.current.clientWidth / 1.5; 
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-slate-50 py-16 md:py-24 border-b border-border-gray overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-5.5 sm:px-10 md:px-20">
                
                {/* Header */}
                <RevealOnScroll delay={0}>
                    <h2 className={`${wittgenstein.className} font-semibold text-[1.8rem] md:text-[2.25rem] text-black-blue leading-tight mb-8 md:mb-12`}>
                        Specialized articles on laboratory equipment
                    </h2>
                </RevealOnScroll>

                {/* Carousel / List Area */}
                <RevealOnScroll delay={150} className="relative group">
                    
                    {/* Desktop Navigation Arrows (Hidden on mobile) */}
                    <button 
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-accent-blue transition-all z-10 opacity-0 group-hover:opacity-100 -translate-x-12 cursor-pointer"
                        aria-label="Scroll left"
                    >
                        <ChevronLeftIcon />
                    </button>
                    
                    <button 
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-accent-blue transition-all z-10 opacity-0 group-hover:opacity-100 translate-x-12 cursor-pointer"
                        aria-label="Scroll right"
                    >
                        <ChevronRightIcon />
                    </button>

                    {/* Cards Container */}
                    {/* FIXED: Replaced py-2 with p-4 -m-4 to create an anti-clipping safe zone for translations */}
                    <div 
                        ref={scrollRef}
                        className="flex flex-col md:flex-row gap-4 md:gap-6 md:overflow-x-auto md:snap-x md:scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden p-4 -m-4"
                    >
                        {articlesData.map((article) => (
                            <div 
                                key={article.id} 
                                className="w-full md:w-[calc(33.333%-1rem)] xl:w-[calc(28%-1rem)] md:shrink-0 md:snap-start"
                            >
                                <ArticleCard 
                                    title={article.title}
                                    date={article.date}
                                    imageSrc={article.imageSrc}
                                    linkTo={article.linkTo}
                                />
                            </div>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* View All Button */}
                <RevealOnScroll delay={300}>
                    <div className="mt-10 md:mt-14 flex justify-center">
                        <LinkButton 
                            href="/articles"
                            variant="secondary"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            }
                        >
                            <div>View All</div>
                        </LinkButton>
                    </div>
                </RevealOnScroll>

            </div>
        </section>
    );
}

// Reusable Arrow Icons
function ChevronLeftIcon() {
    return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    );
}
"use client";

import { useRef } from "react";
import ArticleCard from "@/app/ui/common/ArticleCard";
import LinkButton from "@/app/ui/common/LinkButton";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";
import { useLanguage } from "@/app/i18n/LanguageContext";

const articlesMeta = [
    { id: 1, date: "25.04.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 2, date: "06.04.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 3, date: "04.04.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 4, date: "15.02.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
    { id: 5, date: "10.02.2026", imageSrc: "/images/articles/placeholder.webp", linkTo: "#" },
];

export default function Articles() {
    const { t } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    const articlesData = articlesMeta.map((meta, index) => ({
        ...meta,
        ...t.articles.items[index],
    }));

    // Function to handle arrow clicks
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            // Scroll by roughly 1-2 cards smoothly
            const scrollAmount = Math.min(scrollRef.current.clientWidth * 0.6, 680);
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-slightly-blue py-16 md:py-24 border-b border-border-gray overflow-hidden">
            {/* Header */}
            <div className="mx-auto w-full max-w-7xl px-5.5 sm:px-10 md:px-20">
                <RevealOnScroll delay={0}>
                    <h2 className="text-h2 text-black-blue mb-8 md:mb-12">
                        {t.articles.title}
                    </h2>
                </RevealOnScroll>
            </div>

            {/* Carousel / List Area (Full-bleed width on desktop, aligned with H2 via padding) */}
            <RevealOnScroll delay={150} className="relative group w-full">
                
                {/* Desktop Navigation Arrows with Feathered Fade & Progressive Blur Edges (Hidden on mobile) */}
                <div dir="ltr" className="hidden md:flex pointer-events-none absolute -inset-y-4 left-0 w-[max(5rem,calc((100%-80rem)/2+5rem))] items-center justify-end pr-6 lg:pr-10 z-20 opacity-0 group-hover:opacity-100 has-focus-visible:opacity-100 transition-opacity duration-300">
                    {/* Progressive blur layer */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 "
                        style={{
                            maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
                        }}
                    />
                    {/* Feathered color fade layer */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: "linear-gradient(to right, rgba(249,250,252,1) 0%, rgba(249,250,252,0.85) 25%, rgba(249,250,252,0.45) 55%, rgba(249,250,252,0.12) 80%, rgba(249,250,252,0) 100%)",
                        }}
                    />
                    <button 
                        onClick={() => scroll('left')}
                        className="relative z-10 pointer-events-none group-hover:pointer-events-auto focus-visible:pointer-events-auto p-2 text-blue-gray hover:text-accent-blue transition-colors cursor-pointer"
                        aria-label={t.articles.scrollLeftAria}
                    >
                        <ChevronLeftIcon />
                    </button>
                </div>
                
                <div dir="ltr" className="hidden md:flex pointer-events-none absolute -inset-y-4 right-0 w-[max(5rem,calc((100%-80rem)/2+5rem))] items-center justify-start pl-6 lg:pl-10 z-20 opacity-0 group-hover:opacity-100 has-focus-visible:opacity-100 transition-opacity duration-300">
                    {/* Progressive blur layer */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                            maskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
                        }}
                    />
                    {/* Feathered color fade layer */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: "linear-gradient(to left, rgba(249,250,252,1) 0%, rgba(249,250,252,0.85) 25%, rgba(249,250,252,0.45) 55%, rgba(249,250,252,0.12) 80%, rgba(249,250,252,0) 100%)",
                        }}
                    />
                    <button 
                        onClick={() => scroll('right')}
                        className="relative z-10 pointer-events-none group-hover:pointer-events-auto focus-visible:pointer-events-auto p-2 text-blue-gray hover:text-accent-blue transition-colors cursor-pointer"
                        aria-label={t.articles.scrollRightAria}
                    >
                        <ChevronRightIcon />
                    </button>
                </div>

                {/* Cards Container */}
                <div 
                    ref={scrollRef}
                    className="flex flex-col md:flex-row gap-4 md:gap-6 md:overflow-x-auto md:snap-x md:scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden py-4 -my-4 px-5.5 sm:px-10 md:px-[max(5rem,calc((100%-80rem)/2+5rem))] md:scroll-px-[max(5rem,calc((100%-80rem)/2+5rem))]"
                >
                    {articlesData.map((article) => (
                        <div 
                            key={article.id} 
                            className="w-full md:w-76 lg:w-82 xl:w-86 md:shrink-0 md:snap-start"
                        >
                            <ArticleCard 
                                title={article.title}
                                date={article.date}
                                imageSrc={article.imageSrc}
                                linkTo={article.linkTo}
                                ctaLabel={t.articles.readMore}
                            />
                        </div>
                    ))}
                </div>
            </RevealOnScroll>

            {/* View All Button */}
            <div className="mx-auto w-full max-w-7xl px-5.5 sm:px-10 md:px-20">
                <RevealOnScroll delay={300}>
                    <div className="mt-10 md:mt-14 flex justify-center">
                        <LinkButton 
                            href="/articles"
                            variant="secondary"
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            }
                        >
                            <div>{t.articles.viewAll}</div>
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
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Wittgenstein } from "next/font/google";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll"; // Ensure this path matches your project

const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein-serif",
    subsets: ["latin"],
});

// Mock Data - You can expand this array with more quotes later
const testimonials = [
    {
        id: 1,
        quote: "The laboratory equipment provided by Pars Azma meets the university's laboratory needs in terms of quality of construction and precision of performance, and appropriate technical cooperation has been provided in the design and conversion process.",
        authorName: "Tehran University",
        authorLogo: "/images/testimonials/tehran-university-logo.webp", // Placeholder path
    },
    {
        id: 2,
        quote: "Pars Azma has demonstrated the ability to design and manufacture industrial testing equipment in accordance with working conditions and industrial needs.",
        authorName: "Esfahan's Mobarakeh Steel Company",
        authorLogo: "/images/testimonials/esfahan-msc-logo.webp", // Placeholder path
    },
    {
        id: 3,
        quote: "Pars Arma has provided a specialized approach based on the real needs of university laboratories in designing and producing the laboratory equipment required for this complex.",
        authorName: "Shiraz University of Medical Sciences",
        authorLogo: "/images/testimonials/sums-logo.webp", // Placeholder path
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Navigation functions wrapped in useCallback to prevent unnecessary re-renders
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-play interval setup
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(nextSlide, 4000);
        
        // Cleanup interval on unmount or when paused
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <section className="bg-white py-16 md:py-24 border-b border-border-gray">
            
            {/* Header Area */}
            <div className="mx-auto w-full max-w-500 px-6 md:px-20 text-center mb-12 sm:mb-16">
                <RevealOnScroll delay={0}>
                    <h2 className={`${wittgenstein.className} font-semibold text-[1.6rem] md:text-[2rem] text-black-blue leading-tight mb-4`}>
                        Opinions of customers and scientific and industrial centers about ParsAzma
                    </h2>
                </RevealOnScroll>
                
                <RevealOnScroll delay={100}>
                    <p className="text-[#475569] text-sm sm:text-base">
                        Achieving the satisfaction of our valued customers is <span className="font-semibold text-black-blue">our priority</span>, and their satisfaction is our pride.
                    </p>
                </RevealOnScroll>
            </div>

            {/* Carousel Area */}
            {/* Wrapped the entire interactive container in RevealOnScroll */}
            <RevealOnScroll delay={200}>
                <div 
                    className="relative mx-auto w-full max-w-300 px-12 sm:px-20"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    
                    {/* Navigation Arrows (Absolute positioned to the edges) */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-accent-blue transition-colors z-20 cursor-pointer"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeftIcon />
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-slate-300 hover:text-accent-blue transition-colors z-20 cursor-pointer"
                        aria-label="Next testimonial"
                    >
                        <ChevronRightIcon />
                    </button>

                    {/* Quotes Stacked Grid */}
                    <div className="grid overflow-hidden px-4">
                        {testimonials.map((testimonial, index) => {
                            
                            // 1. Determine the slide's position relative to the current index
                            const isActive = index === currentIndex;
                            const isPrev = index === (currentIndex - 1 + testimonials.length) % testimonials.length;

                            // 2. Assign classes based on that position
                            let positionClasses = "opacity-0 translate-x-130 z-0 pointer-events-none"; // Default: Next slides wait on the right
                            
                            if (isActive) {
                                positionClasses = "opacity-100 translate-x-0 z-10 pointer-events-auto delay-250"; // Active slide is in the center
                            } else if (isPrev) {
                                positionClasses = "opacity-0 -translate-x-130 z-0 pointer-events-none blur-xs delay-0"; // Previous slide exits to the left
                            }

                            return (
                                <div 
                                    key={testimonial.id}
                                    className={`col-start-1 row-start-1 flex flex-col items-center text-center transition-all duration-700 ease-out ${positionClasses}`}
                                >
                                    {/* SVG Quote Icon */}
                                    <div className="mb-6 text-slate-300">
                                        <QuoteIcon />
                                    </div>

                                    {/* Quote Text */}
                                    <blockquote className={`${wittgenstein.className} text-xl sm:text-2xl md:text-[1.75rem] text-black-blue leading-relaxed mb-10 max-w-3xl`}>
                                        “{testimonial.quote}”
                                    </blockquote>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center bg-white shrink-0">
                                            <Image 
                                                src={testimonial.authorLogo} 
                                                alt={`${testimonial.authorName} Logo`}
                                                fill
                                                className="object-contain p-1"
                                                sizes="48px"
                                            />
                                        </div>
                                        <span className="font-semibold text-black-blue text-sm sm:text-base">
                                            {testimonial.authorName}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
}

// Reusable UI Icons
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

function QuoteIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3096 5.97631C24.9348 5.35119 25.7826 5 26.6667 5H31.6667C32.5507 5 33.3986 5.35119 34.0237 5.97631C34.6488 6.60143 35 7.44928 35 8.33333V25C35 27.6522 33.9464 30.1957 32.0711 32.0711C30.1957 33.9464 27.6522 35 25 35C24.558 35 24.134 34.8244 23.8215 34.5118C23.5089 34.1993 23.3333 33.7754 23.3333 33.3333V30C23.3333 29.558 23.5089 29.134 23.8215 28.8215C24.134 28.5089 24.558 28.3333 25 28.3333C25.8841 28.3333 26.7319 27.9821 27.357 27.357C27.9821 26.7319 28.3333 25.8841 28.3333 25V23.3333C28.3333 22.8913 28.1577 22.4674 27.8452 22.1548C27.5326 21.8423 27.1087 21.6667 26.6667 21.6667C25.7826 21.6667 24.9348 21.3155 24.3096 20.6904C23.6845 20.0652 23.3333 19.2174 23.3333 18.3333V8.33333C23.3333 7.44928 23.6845 6.60143 24.3096 5.97631Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5.97631 5.97631C6.60143 5.35119 7.44928 5 8.33333 5H13.3333C14.2174 5 15.0652 5.35119 15.6904 5.97631C16.3155 6.60143 16.6667 7.44928 16.6667 8.33333V25C16.6667 27.6522 15.6131 30.1957 13.7377 32.0711C11.8624 33.9464 9.31883 35 6.66667 35C6.22464 35 5.80072 34.8244 5.48816 34.5118C5.17559 34.1993 5 33.7754 5 33.3333V30C5 29.558 5.17559 29.134 5.48816 28.8215C5.80072 28.5089 6.22464 28.3333 6.66667 28.3333C7.55072 28.3333 8.39857 27.9821 9.02369 27.357C9.64881 26.7319 10 25.8841 10 25V23.3333C10 22.8913 9.8244 22.4674 9.51184 22.1548C9.19928 21.8423 8.77536 21.6667 8.33333 21.6667C7.44928 21.6667 6.60143 21.3155 5.97631 20.6904C5.35119 20.0652 5 19.2174 5 18.3333V8.33333C5 7.44928 5.35119 6.60143 5.97631 5.97631Z" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}
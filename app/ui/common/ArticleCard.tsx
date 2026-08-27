import Image from 'next/image';
import Link from 'next/link';
import { Wittgenstein } from "next/font/google";

const wittgenstein = Wittgenstein({
    variable: "--font-wittgenstein-serif",
    subsets: ["latin"],
});

interface ArticleCardProps {
    title: string;
    date: string;
    imageSrc: string;
    linkTo: string;
}

export default function ArticleCard({ title, date, imageSrc, linkTo }: ArticleCardProps) {
    return (
        <Link 
            href={linkTo} 
            // 1. Changed "group" to "group/card"
            className="group/card relative h-full block"
        >
            {/* The copy underneath, for the hover effect */}
            {/* 2. Changed to group-hover/card: */}
            <span className="pointer-events-none absolute inset-0 bg-accent-blue/30 opacity-0 transition-opacity duration-200 ease-in-out group-hover/card:opacity-100 z-0"/>

            {/* The moving card container */}
            {/* 3. Changed all group-hover and group-active to target /card */}
            <div className="relative flex flex-row md:flex-col border border-border-gray bg-white w-full h-full duration-250 ease-in-out group-hover/card:-translate-x-1.5 group-hover/card:-translate-y-1.5 group-hover/card:border-accent-blue transition-[transform,background-color,color,border-color,translate] z-1 group-active/card:translate-x-0 group-active/card:translate-y-0">
                
                {/* Image Container */}
                <div className="relative w-1/3 min-h-25 md:w-full md:aspect-4/3 shrink-0 bg-slate-200 overflow-hidden">
                    <Image 
                        src={imageSrc} 
                        alt={title} 
                        fill 
                        // 4. Changed to group-hover/card:
                        className="object-cover transition-transform duration-300 group-hover/card:scale-105" 
                        sizes="(max-width: 768px) 33vw, 25vw" 
                    />
                </div>
                
                {/* Content Container */}
                <div className="flex flex-1 flex-col justify-between p-4 md:p-5 bg-white">
                    <h3 className={`${wittgenstein.className} font-semibold text-black-blue text-base md:text-[1.1rem] leading-tight line-clamp-2 md:line-clamp-3`}>
                        {title}
                    </h3>
                    
                    {/* Date */}
                    <span className="text-[0.7rem] md:text-xs font-mono text-[#475569] self-end md:self-start mt-4 md:mt-6">
                        {date}
                    </span>
                </div>
                
            </div>
        </Link>
    );
}
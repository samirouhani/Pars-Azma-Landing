import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
    title: string;
    date: string;
    imageSrc: string;
    linkTo: string;
    ctaLabel?: string;
}

export default function ArticleCard({ title, date, imageSrc, linkTo, ctaLabel = "Read More" }: ArticleCardProps) {
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
                <div className="relative w-1/3 min-h-25 md:w-full md:aspect-4/3 shrink-0 bg-border-gray overflow-hidden">
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
                    <div className="flex flex-col mb-3 md:mb-4">
                        <h3 className="text-h3 text-black-blue line-clamp-2 md:line-clamp-3">
                            {title}
                        </h3>
                        
                        {/* Date */}
                        <span dir="ltr" className="text-mono text-secondary-text self-end md:self-start mt-4 md:mt-6">
                            {date}
                        </span>
                    </div>

                    <div className="mt-auto">
                        <hr className="border-border-gray" />
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue group-hover/card:underline">
                            {ctaLabel}
                            <svg
                                className="h-3.5 w-3.5 rtl:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2.2}
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                </div>
                
            </div>
        </Link>
    );
}
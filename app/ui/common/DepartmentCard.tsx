import Image from 'next/image';
import Link from 'next/link'
import { Wittgenstein } from "next/font/google";

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein-serif",
  subsets: ["latin"],
});

interface DepartmentCardProps {
  title: string;
  description?: string; // Optional: If missing, it renders the smaller version
  imageSrc: string;
  linkTo: string;
}

export default function DepartmentCard({ title, description, imageSrc, linkTo }: DepartmentCardProps) {
  return (
    <Link 
        href={linkTo}
        className='group relative h-full'>
      
        {/* The copy underneath, for the hover effect: */}
        <span className="pointer-events-none absolute inset-0 bg-accent-blue/30 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 z-0"/>

        <div className="group relative flex flex-col border border-border-gray bg-white w-full h-full duration-250 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:border-accent-blue transition-[transform,background-color,color,border-color,translate] z-1 group-active:translate-x-0 group-active:translate-y-0">
            
            {/* Image Container - Aspect ratio changed to [2/1] for a wider, shorter look on big cards */}
            <div className={`relative w-full overflow-hidden bg-slate-200 ${description ? 'aspect-video sm:aspect-[2/1]' : 'aspect-square'}`}>
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes={description ? "(max-width: 768px) 100vw, 50vw" : "250px"}
            />
            </div>

            {/* Content Area */}
            <div className={`flex flex-1 flex-col justify-start bg-white ${description ? 'p-5 sm:p-6' : 'p-3 sm:p-4'}`}>
            <h3 className={`${wittgenstein.className} font-semibold text-black-blue ${description ? 'text-lg sm:text-2xl sm:mb-3' : 'text-sm sm:text-lg'}`}>
                {title}
            </h3>
            {description && (
                <p className="hidden sm:block text-sm leading-relaxed text-[#475569] sm:text-base">
                {description}
                </p>
            )}
            </div>
            
        </div>
    </Link>
  );
}
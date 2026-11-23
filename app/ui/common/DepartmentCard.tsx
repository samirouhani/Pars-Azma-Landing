import Image from 'next/image';
import Link from 'next/link'

interface DepartmentCardProps {
  title: string;
  description?: string; // Optional: If missing, it renders the smaller version
  imageSrc: string;
  linkTo: string;
  ctaLabel?: string;
}

export default function DepartmentCard({ title, description, imageSrc, linkTo, ctaLabel = "View More Details" }: DepartmentCardProps) {
  return (
    <Link 
        href={linkTo}
        className='group relative block h-full'>
      
        {/* The copy underneath, for the hover effect: */}
        <span className="pointer-events-none absolute inset-0 bg-accent-blue/30 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 z-0"/>

        <div className="group relative flex flex-col border border-border-gray bg-white w-full h-full duration-250 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:border-accent-blue transition-[transform,background-color,color,border-color,translate] z-1 group-active:translate-x-0 group-active:translate-y-0">
            
            {/* Image Container - Aspect ratio changed to [2/1] for a wider, shorter look on big cards */}
            <div className={`relative w-full overflow-hidden border-b border-border-gray bg-slightly-blue ${description ? 'aspect-video sm:aspect-2/1' : 'aspect-square'}`}>
            <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes={description ? "(max-width: 768px) 100vw, 50vw" : "250px"}
            />
            </div>

            {/* Content Area */}
            <div className={`flex flex-1 flex-col justify-between bg-white ${description ? 'p-5 sm:p-6' : 'p-3 sm:p-4'}`}>
                <div className={description ? 'mb-4 sm:mb-5' : 'mb-3 sm:mb-4'}>
                    <h3 className={`text-h3 text-black-blue ${description ? 'sm:mb-3' : ''}`}>
                        {title}
                    </h3>
                    {description && (
                        <p className="hidden sm:block text-body text-secondary-text">
                            {description}
                        </p>
                    )}
                </div>
                <div className="mt-auto">
                    <hr className="border-border-gray" />
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue group-hover:underline">
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
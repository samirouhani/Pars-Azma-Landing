import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  category: string;
  href: string;
  imageSrc: string;
  ctaLabel?: string;
}

export default function ProductCard({ title, category, href, imageSrc, ctaLabel = "View Specs" }: ProductCardProps) {
    return (
        <div className='group relative h-full'>

            {/*The copy underneith, for the hover effect:*/}
            <span className="pointer-events-none absolute inset-0 bg-accent-blue/30 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 z-0"/>

            <div className="group relative flex flex-col border border-border-gray bg-white w-full h-full duration-250 ease-in-out group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 group-hover:border-accent-blue transition-[transform,background-color,color,border-color,translate] z-1 group-active:translate-x-0 group-active:translate-y-0">
                <div className="relative aspect-square w-full overflow-hidden bg-slightly-blue flex items-center justify-center">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
                <div className="p-3 xs:p-5 flex flex-1 flex-col justify-between bg-white">
                    <div className='mb-3 xs:mb-5 flex flex-col justify-start gap-2 xs:gap-3'>
                        <Link href="#" className="relative z-10 text-uppercase-label text-accent-blue hover:underline w-max">
                            {category}
                        </Link>
                        <h3 className="text-h3 text-black-blue line-clamp-3">
                            {title}
                        </h3>
                    </div>
                    <div className='mt-auto'>
                        <hr className="border-border-gray" />
                        <Link
                            href={href} 
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue group-hover:underline before:absolute before:inset-0 before:z-0" 
                        >
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
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
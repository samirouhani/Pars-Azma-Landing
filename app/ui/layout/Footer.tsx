import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0b0c2a] text-slate-300 pt-12 pb-8 text-[0.8rem] sm:text-sm">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                
                {/* TOP SECTION: 2-Column Grid on Mobile, 4 on Desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10">
                    
                    {/* Column 1: Brand & Description (Full width on mobile) */}
                    <div className="flex flex-col gap-5 col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            {/* Logo Placeholder */}
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white text-[#0b0c2a]">
                                <Image
                                    src="/branding/Logo-no-text.webp"
                                    alt="Pars Azma Co. Logo"
                                    width={44}
                                    height={44}
                                    className="h-11 w-11 shrink-0 rounded bg-white object-contain p-1.5"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-base sm:text-lg font-bold text-white tracking-wide leading-tight">Pars Azma Co.</h2>
                                <p className="text-[#c25364] text-[0.65rem] sm:text-xs font-semibold tracking-wider mt-0.5">(Knowledge-Based)</p>
                            </div>
                        </div>
                        <p className="leading-relaxed text-slate-400">
                            ISO 9001 and ISO 9002 certified environmental chambers, 
                            specialized ovens, and climate control systems for advanced 
                            scientific research.
                        </p>
                    </div>

                    {/* Column 2: Factory Phones (Half width on mobile) */}
                    <div className="flex flex-col gap-4 col-span-1">
                        <h3 className="font-bold text-white tracking-widest uppercase mb-1">Factory</h3>
                        <p className="text-slate-400 mb-1">Phone Numbers:</p>
                        <ul className="flex flex-col gap-3 font-mono text-[0.75rem] sm:text-sm">
                            <li>
                                <a href="tel:+983145642889" className="flex items-center gap-1.5 sm:gap-3 hover:text-white transition-colors group">
                                    <ChevronIcon /> +98-31-45642889
                                </a>
                            </li>
                            <li>
                                <a href="tel:+983145644605" className="flex items-center gap-1.5 sm:gap-3 hover:text-white transition-colors group">
                                    <ChevronIcon /> +98-31-45644605
                                </a>
                            </li>
                        </ul>
                        <p className="text-slate-400 mt-2 mb-1">Fax:</p>
                        <ul className="flex flex-col gap-3 font-mono text-[0.75rem] sm:text-sm">
                            <li>
                                <span className="flex items-center gap-1.5 sm:gap-3">
                                    <ChevronIcon /> +98-31-45642959
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Business Affairs Phones (Half width on mobile) */}
                    <div className="flex flex-col gap-4 col-span-1">
                        <h3 className="font-bold text-white tracking-widest uppercase mb-1">Business Affairs</h3>
                        <p className="text-slate-400 mb-1">Phone Numbers:</p>
                        <ul className="flex flex-col gap-3 font-mono text-[0.75rem] sm:text-sm">
                            <li>
                                <a href="tel:+982188521748" className="flex items-center gap-1.5 sm:gap-3 hover:text-white transition-colors group">
                                    <ChevronIcon /> +98-21-88521748
                                </a>
                            </li>
                            <li>
                                <a href="tel:+982188521749" className="flex items-center gap-1.5 sm:gap-3 hover:text-white transition-colors group">
                                    <ChevronIcon /> +98-21-88521749
                                </a>
                            </li>
                            <li>
                                <a href="tel:+982188753144" className="flex items-center gap-1.5 sm:gap-3 hover:text-white transition-colors group">
                                    <ChevronIcon /> +98-21-88753144
                                </a>
                            </li>
                            <li>
                                <a href="tel:+982188740225" className="flex items-center gap-1.5 sm:gap-3 hover:text-white transition-colors group">
                                    <ChevronIcon /> +98-21-88740225
                                </a>
                            </li>
                        </ul>
                        <p className="text-slate-400 mt-2 mb-1">Fax:</p>
                        <ul className="flex flex-col gap-3 font-mono text-[0.75rem] sm:text-sm">
                            <li>
                                <span className="flex items-center gap-1.5 sm:gap-3">
                                    <ChevronIcon /> +98-21-88732415
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Our Services (Full width on mobile, 2 internal columns) */}
                    <div className="flex flex-col gap-4 col-span-2 lg:col-span-1 mt-4 lg:mt-0">
                        <h3 className="font-bold text-white tracking-widest uppercase mb-1">Our Services</h3>
                        {/* Notice the grid-cols-2 here to create the side-by-side lists on mobile */}
                        <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-4">
                            <li>
                                <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                                    <span className="hidden lg:inline-block"><ChevronIcon /></span> Lab Furniture Solutions
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                                    <span className="hidden lg:inline-block"><ChevronIcon /></span> Orders
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center gap-3 hover:text-white transition-colors group">
                                    <span className="hidden lg:inline-block"><ChevronIcon /></span> Track Order
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="flex items-center gap-3 hover:text-white transition-colors group">
                                    <span className="hidden lg:inline-block"><ChevronIcon /></span> Product Catalog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="flex items-center gap-3 hover:text-white transition-colors group">
                                    <span className="hidden lg:inline-block"><ChevronIcon /></span> Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-10 border-white/10" />

                {/* MIDDLE SECTION: Addresses */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="font-bold text-white tracking-widest uppercase text-base">Address:</h3>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-slate-400">
                        <h4 className="font-bold text-white tracking-widest uppercase">Factory</h4>
                        <p className="leading-relaxed">
                            No. 175, corner of Sheikh Bahai 6th, Sheikh Bahai St., 
                            Morchekhort Industrial Park, Isfahan
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-slate-400">
                        <h4 className="font-bold text-white tracking-widest uppercase">Business Affairs</h4>
                        <p className="leading-relaxed">
                            No. 251, 2nd Floor, Unit 4, Tehran, Dr. Beheshti St. (Abbas Abad) 
                            Between Pakistan and Modarres
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-white/10" />

                {/* BOTTOM SECTION: Copyright & Socials */}
                <div className="flex flex-row items-end justify-between gap-4 text-slate-400 text-xs">
                    {/* Constraining width on mobile so the text wraps nicely beside the icons */}
                    <p className="max-w-[65%] sm:max-w-none">
                        All material and intellectual property rights of this site belong to{' '}
                        <Link href="/" className="underline hover:text-white transition-colors">
                            Pars Azma
                        </Link> Company.
                    </p>
                    
                    <div className="flex items-center gap-3 sm:gap-4 pb-0.5">
                        {/* Telegram */}
                        <a href="#" className="hover:text-white transition-colors">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0l-3.21 2.01c-.55.38-1.04.56-1.5.54-.51-.02-1.49-.29-2.22-.53-.89-.28-1.6-.43-1.53-.91.04-.25.41-.5.98-.75 3.84-1.67 6.4-2.78 7.68-3.32 3.64-1.55 4.41-1.81 4.91-1.82.11 0 .36.03.49.13.11.08.14.2.15.28-.01.07 0 .22-.01.37z" />
                            </svg>
                        </a>
                        {/* WhatsApp */}
                        <a href="#" className="hover:text-white transition-colors">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm5.36 14.16c-.22.62-1.28 1.18-1.78 1.23-.42.04-1.01.12-3.18-.78-2.6-1.08-4.26-3.73-4.38-3.9-.11-.16-1.05-1.39-1.05-2.66 0-1.27.66-1.89.9-2.16.23-.26.5-.32.67-.32.16 0 .33 0 .47.01.15.01.34-.06.52.4.21.52.71 1.74.77 1.87.07.13.11.28.03.45-.08.16-.12.26-.23.4-.11.12-.24.27-.33.36-.11.11-.23.23-.11.44.12.21.53.88 1.14 1.42.78.69 1.44.91 1.65 1.01.21.11.34.09.47-.06.13-.15.55-.63.7-.85.15-.21.3-.18.49-.11.2.07 1.25.59 1.46.7.21.11.35.16.4.26.05.09.05.54-.17 1.16z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="hover:text-white transition-colors">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.36.88.4.4.66.8.88 1.36.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.88 1.36-.4.4-.8.66-1.36.88-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41-.56-.22-.96-.48-1.36-.88-.4-.4-.66-.8-.88-1.36-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.88-1.36.4-.4.8-.66 1.36-.88.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.8.3-1.47.7-2.14 1.37-.67.67-1.07 1.34-1.37 2.14-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.8.7 1.47 1.37 2.14.67.67 1.34 1.07 2.14 1.37.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.8-.3 1.47-.7 2.14-1.37.67-.67 1.07-1.34 1.37-2.14.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.8-.7-1.47-1.37-2.14-.67-.67-1.34-1.07-2.14-1.37-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-11.44a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

// Reusable SVG chevron
function ChevronIcon() {
    return (
        <svg 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    );
}
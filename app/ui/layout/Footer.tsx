import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#0b0c2a] text-slate-300 pt-12 pb-8 text-[0.8rem] sm:text-sm">
            <div className="mx-auto px-5 sm:px-6 lg:px-20">
                
                {/* TOP SECTION: 2-Column Grid on Mobile, 4 on Desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10">
                    
                    {/* Column 1: Brand & Description (Added lg:pr-12 xl:pr-16 for a larger visual gap) */}
                    <div className="flex flex-col gap-5 col-span-2 lg:col-span-1 lg:pr-12 xl:pr-16">
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

                    {/* Column 2: Factory Phones */}
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

                    {/* Column 3: Business Affairs Phones */}
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

                    {/* Column 4: Our Services */}
                    <div className="flex flex-col gap-4 col-span-2 lg:col-span-1 mt-4 lg:mt-0">
                        <h3 className="font-bold text-white tracking-widest uppercase mb-1">Our Services</h3>
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
                    {/* Added lg:pr-12 xl:pr-16 here as well to keep it aligned with the top section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:pr-12 xl:pr-16">
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
                    <p className="max-w-[65%] sm:max-w-none">
                        All material and intellectual property rights of this site belong to{' '}
                        <Link href="/" className="underline hover:text-white transition-colors">
                            Pars Azma
                        </Link> Company.
                    </p>
                    
                    <div className="flex items-center gap-3 sm:gap-4 pb-0.5">
                        {/* Telegram */}
                        <a href="#" className="hover:text-white transition-colors">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.075 0C4.50937 0 0 4.50937 0 10.075C0 15.6406 4.50937 20.15 10.075 20.15C15.6406 20.15 20.15 15.6406 20.15 10.075C20.15 4.50937 15.6406 0 10.075 0ZM14.7469 6.85344C14.5966 8.44594 13.9384 12.3134 13.6053 14.0969C13.4631 14.8525 13.1869 15.1044 12.9187 15.1287C12.3337 15.1816 11.8909 14.7428 11.3222 14.3691C10.4366 13.7881 9.93281 13.4266 9.07562 12.8578C8.08031 12.2037 8.72625 11.8422 9.29094 11.2531C9.44125 11.0987 12.0169 8.75469 12.0656 8.54344C12.0737 8.515 12.0778 8.4175 12.0169 8.36469C11.9559 8.31187 11.8706 8.33219 11.8097 8.34437C11.7203 8.36469 10.3025 9.29906 7.56031 11.1516C7.15812 11.4278 6.7925 11.5619 6.4675 11.5537C6.10594 11.5456 5.41531 11.3506 4.89937 11.1841C4.26969 10.9809 3.76594 10.8712 3.81063 10.5219C3.835 10.3391 4.08281 10.1562 4.55812 9.96531C7.49531 8.68562 9.45344 7.84062 10.4325 7.43437C13.2316 6.2725 13.8125 6.06937 14.1903 6.06125C14.2756 6.06125 14.4584 6.08156 14.5803 6.17906C14.6616 6.24813 14.7103 6.34562 14.7225 6.45125C14.7428 6.58125 14.7469 6.71531 14.7387 6.84937L14.7469 6.85344Z" fill="#94A3B8"/>
                            </svg>
                        </a>
                        {/* WhatsApp */}
                        <a href="#" className="hover:text-white transition-colors">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.3741 6.54459C17.6719 4.83834 15.405 3.8999 12.996 3.8999C8.02346 3.8999 3.97721 7.94615 3.97721 12.9187C3.97721 14.5071 4.39159 16.059 5.17971 17.428L3.90002 22.0999L8.68159 20.8446C9.99784 21.5637 11.4806 21.9415 12.9919 21.9415H12.996C17.9644 21.9415 22.1 17.8952 22.1 12.9227C22.1 10.5137 21.0763 8.25084 19.3741 6.54459ZM12.996 20.4221C11.6472 20.4221 10.3269 20.0605 9.17721 19.378L8.90502 19.2155L6.0694 19.959L6.82502 17.1924L6.64627 16.908C5.89471 15.7137 5.50065 14.3365 5.50065 12.9187C5.50065 8.78709 8.8644 5.42334 13 5.42334C15.0028 5.42334 16.8838 6.20334 18.2975 7.62115C19.7113 9.03896 20.5806 10.9199 20.5766 12.9227C20.5766 17.0583 17.1275 20.4221 12.996 20.4221ZM17.1072 14.8077C16.8838 14.694 15.7747 14.1496 15.5675 14.0765C15.3603 13.9993 15.21 13.9627 15.0597 14.1902C14.9094 14.4177 14.4788 14.9215 14.3447 15.0758C14.2147 15.2262 14.0806 15.2465 13.8572 15.1327C12.5328 14.4705 11.6635 13.9505 10.79 12.4515C10.5585 12.0533 11.0216 12.0818 11.4522 11.2205C11.5253 11.0702 11.4888 10.9402 11.4319 10.8265C11.375 10.7127 10.9241 9.60365 10.7372 9.15271C10.5544 8.71396 10.3675 8.7749 10.2294 8.76678C10.0994 8.75865 9.94909 8.75865 9.79877 8.75865C9.64846 8.75865 9.40471 8.81553 9.19752 9.03896C8.99034 9.26646 8.4094 9.81084 8.4094 10.9199C8.4094 12.029 9.21784 13.1015 9.32752 13.2518C9.44127 13.4021 10.916 15.6771 13.1788 16.6562C14.6088 17.2737 15.1694 17.3265 15.8844 17.2208C16.3191 17.1558 17.2169 16.6765 17.4038 16.1483C17.5906 15.6202 17.5906 15.1693 17.5338 15.0758C17.481 14.9743 17.3306 14.9174 17.1072 14.8077Z" fill="#94A3B8"/>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="hover:text-white transition-colors">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0122 8.32806C10.4325 8.31993 8.33626 10.4081 8.32814 12.9877C8.32001 15.5674 10.4081 17.6637 12.9878 17.6718C15.5675 17.6799 17.6638 15.5918 17.6719 13.0121C17.68 10.4324 15.5919 8.33618 13.0122 8.32806ZM12.9878 9.96931C14.6616 9.96118 16.0225 11.314 16.0306 12.9877C16.0388 14.6615 14.686 16.0224 13.0122 16.0306C11.3384 16.0387 9.97751 14.6859 9.96939 13.0121C9.96126 11.3384 11.3141 9.97743 12.9878 9.96931ZM16.7822 8.13712C16.7822 7.53587 17.2697 7.04837 17.871 7.04837C18.4722 7.04837 18.9597 7.53587 18.9597 8.13712C18.9597 8.73837 18.4722 9.22587 17.871 9.22587C17.2697 9.22587 16.7822 8.73837 16.7822 8.13712ZM22.0513 9.24212C21.9822 7.78368 21.6491 6.49181 20.5806 5.42743C19.5163 4.36306 18.2244 4.02993 16.766 3.95681C15.2628 3.87149 10.7575 3.87149 9.25439 3.95681C7.80001 4.02587 6.50814 4.35899 5.4397 5.42337C4.37126 6.48774 4.0422 7.77962 3.96907 9.23806C3.88376 10.7412 3.88376 15.2465 3.96907 16.7496C4.03814 18.2081 4.37126 19.4999 5.4397 20.5643C6.50814 21.6287 7.79595 21.9618 9.25439 22.0349C10.7575 22.1202 15.2628 22.1202 16.766 22.0349C18.2244 21.9659 19.5163 21.6327 20.5806 20.5643C21.645 19.4999 21.9781 18.2081 22.0513 16.7496C22.1366 15.2465 22.1366 10.7452 22.0513 9.24212ZM20.1094 18.3624C19.7925 19.1587 19.1791 19.7721 18.3788 20.0931C17.1803 20.5684 14.3366 20.4587 13.0122 20.4587C11.6878 20.4587 8.84001 20.5643 7.64564 20.0931C6.84939 19.7762 6.23595 19.1627 5.91501 18.3624C5.4397 17.164 5.54939 14.3202 5.54939 12.9959C5.54939 11.6715 5.44376 8.82368 5.91501 7.62931C6.23189 6.83306 6.84532 6.21962 7.64564 5.89868C8.84407 5.42337 11.6878 5.53306 13.0122 5.53306C14.3366 5.53306 17.1844 5.42743 18.3788 5.89868C19.175 6.21556 19.7885 6.82899 20.1094 7.62931C20.5847 8.82774 20.475 11.6715 20.475 12.9959C20.475 14.3202 20.5847 17.1681 20.1094 18.3624Z" fill="#94A3B8"/>
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

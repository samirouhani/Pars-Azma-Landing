"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/app/ui/common/SearchBar";
import LanguageSelector from "@/app/ui/common/LanguageSelector";
import NavbarLink from "@/app/ui/common/NavbarLink";
import VerticalDivider from "@/app/ui/common/VerticalDivider";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`flex sticky top-0 z-50 w-full h-20 md:h-22 border-b border-border-gray bg-white/60 backdrop-blur-md ${
        scrolled ? "shadow-lg" : "shadow-none"} transition-shadow duration-300 ease-in-out`}>
        <nav
            className="mx-auto flex w-full items-center justify-between px-6 md:p-4 xl:px-20"
            aria-label="Main Navigation"
        >
            <Link href="/" className="font-bold text-xl">
            <div className="flex items-center gap-2">
                <Image
                src={"/branding/Logo-text.webp"}
                alt="Pars Azma Company Logo"
                width={402}
                height={328}
                className="object-cover w-14.5 h-11.75 md:w-15 md:h-12.1323529408 lg:w-17 lg:h-13.75"
                ></Image>
                <div className="hidden xxs:flex flex-col items-left gap">
                <div className="text-accent-blue xl:text-[1.125rem] text-[1rem]">
                    Pars Azma Company
                </div>
                <div className="text-red-700 font-light text-[0.875rem]">
                    (Knowledge-Based)
                </div>
                </div>
            </div>
            </Link>
            <div className="hidden md:flex gap-5 lg:gap-6 xl:gap-8 h-full items-center">
                <NavbarLink title="Products" linkTo="#" />
                <VerticalDivider height="40%"/>
                <NavbarLink title="Services and Support" linkTo="#" />
                <VerticalDivider height="40%"/>
                <NavbarLink title="About Us" linkTo="#" />
                <VerticalDivider height="40%"/>
                <NavbarLink title="Contact Us" linkTo="#" />
            </div>
            <div className="flex gap-4 lg:gap-9 ml-4 items-center">
                <SearchBar />
                <LanguageSelector />
                <RxHamburgerMenu className="md:hidden size-7.5 cursor-pointer"/>
            </div>
        </nav>
        </header>
    );
}

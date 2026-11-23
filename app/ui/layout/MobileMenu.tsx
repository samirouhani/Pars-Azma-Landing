"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "@/app/ui/common/LanguageSelector";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navItems = [
    { title: t.navbar.links.products, href: "#" },
    { title: t.navbar.links.services, href: "#" },
    { title: t.navbar.links.about, href: "#" },
    { title: t.navbar.links.contact, href: "#" },
  ];

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 md:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Blurred backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 transition-[background-color,backdrop-filter] duration-300 ease-out ${
          isOpen
            ? "bg-black-blue/35 backdrop-blur-sm"
            : "bg-black-blue/0 backdrop-blur-[0px]"
        }`}
        aria-hidden="true"
      />

      {/* Slide-in drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.navbar.navAriaLabel}
        className={`absolute inset-y-0 inset-e-0 flex w-[88%] max-w-sm flex-col justify-between bg-white border-s border-border-gray shadow-xl px-6 py-6 transition-transform duration-300 ease-out ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div>
          {/* Top header: Logo & Close button */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={onClose} className="inline-flex items-center">
              <Image
                src="/branding/Logo-text.webp"
                alt={t.navbar.logoAlt}
                width={402}
                height={328}
                className="object-contain w-16 h-auto"
              />
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label={t.navbar.closeMenuAria}
              className="p-1.5 text-black-blue hover:text-accent-blue transition-colors cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <hr className="border-border-gray mt-4" />

          {/* Navigation links */}
          <nav
            aria-label={t.navbar.navAriaLabel}
            className="mt-4 flex flex-col"
          >
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between py-6 text-h3 text-black-blue hover:text-accent-blue transition-colors"
              >
                <span>{item.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-5 text-black-blue/80 group-hover:text-accent-blue transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom language selector */}
        <div className="mt-auto pt-4">
          <hr className="border-border-gray mb-5" />
          <LanguageSelector placement="top" className="inline-block" />
        </div>
      </div>
    </div>
  );
}

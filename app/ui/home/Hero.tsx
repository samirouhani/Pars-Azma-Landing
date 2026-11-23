"use client";

import Image from "next/image";
import VerticalDivider from "@/app/ui/common/VerticalDivider";
import LinkButton from "@/app/ui/common/LinkButton";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-8 xs:py-14 sm:py-22 lg:py-32">
      <div
        aria-hidden="true"
        className='pointer-events-none absolute inset-0 z-0 bg-[url("/images/hero/parsazma_hero_mobile.webp")] bg-cover bg-no-repeat bg-center sm:bg-[url("/images/hero/parsazmahero.webp")] rtl:-scale-x-100'
      />
      <div className="relative z-10 h-full sm:max-w-[75%] px-5.5 md:px-14 xl:px-22">
        <div className="flex flex-col">
          <RevealOnScroll
            className="flex h-5.25 items-center gap-3.5 text-mono text-secondary-text"
            delay={0}
          >
            <div dir="ltr" className="flex h-full items-center gap-3.5">
              <span>ISO9001</span>
              <VerticalDivider height={"100%"} />
              <span>ISO9002</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            className="mt-4"
            delay={150}
          >
            <h1 className="text-h1 text-black-blue">{t.hero.title}</h1>
          </RevealOnScroll>

          <RevealOnScroll
            className="mt-6"
            delay={300}
          >
            <p className="text-body text-secondary-text">
              {t.hero.description}
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          className="mt-8 flex w-full flex-wrap items-center gap-4"
          delay={500}
        >
          <LinkButton
            href="/products"
            variant="primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
          >
            {t.hero.primaryCta}
          </LinkButton>

          <LinkButton href="/contact" variant="secondary">
            {t.hero.secondaryCta}
          </LinkButton>
        </RevealOnScroll>

        <RevealOnScroll className="my-8" delay={700}>
          <hr className="border-border-gray" />
        </RevealOnScroll>

        <RevealOnScroll
          className="grid grid-cols-3 items-center gap-3 text-xs font-light text-accent-blue xs:flex xs:flex-wrap"
          delay={700}
        >
          <a
            href="https://t.me/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-gray bg-white/30 backdrop-blur-md px-2 py-1 transition-colors hover:border-blue-gray hover:bg-white xs:pe-4"
          >
            <Image
              className="size-6.5 font-semibold"
              src={"icons/telegram-brands-solid-full.svg"}
              alt={t.hero.socials.telegram}
              width={40}
              height={40}
            />
            <span className="hidden tracking-wide rtl:tracking-normal xs:block">{t.hero.socials.telegram}</span>
          </a>

          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-gray bg-white/30 backdrop-blur-md px-2 py-1 transition-colors hover:border-blue-gray hover:bg-white xs:pe-4"
          >
            <Image
              className="size-6.5 font-semibold"
              src={"icons/whatsapp-brands-solid-full.svg"}
              alt={t.hero.socials.whatsapp}
              width={40}
              height={40}
            />
            <span className="hidden tracking-wide rtl:tracking-normal xs:block">{t.hero.socials.whatsapp}</span>
          </a>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-gray bg-white/30 backdrop-blur-md px-2 py-1 transition-colors hover:border-blue-gray hover:bg-white xs:pe-4"
          >
            <Image
              className="size-6.5 font-semibold"
              src={"icons/instagram-brands-solid-full.svg"}
              alt={t.hero.socials.instagram}
              width={40}
              height={40}
            />
            <span className="hidden tracking-wide rtl:tracking-normal xs:block">{t.hero.socials.instagram}</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

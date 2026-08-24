"use client";

import Image from "next/image";
import { Wittgenstein } from "next/font/google";
import VerticalDivider from "@/app/ui/common/VerticalDivider";
import LinkButton from "@/app/ui/common/LinkButton";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein-serif",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className='overflow-hidden bg-[url("/images/hero/parsazma_hero_mobile.webp")] bg-cover bg-no-repeat bg-center py-8 xs:py-14 sm:bg-[url("/images/hero/parsazmahero.webp")] sm:py-22 lg:py-32'>
      <div className="h-full sm:max-w-[75%] px-5.5 md:px-14 xl:px-22">
        <div className="flex flex-col">
          <RevealOnScroll
            className="flex h-5.25 items-center gap-3.5 text-xs font-semibold tracking-wider text-secondary-text"
            delay={0}
          >
            <span className="text-[14px] font-normal">ISO9001</span>
            <VerticalDivider height={"100%"} />
            <span className="text-[14px] font-normal">ISO9002</span>
          </RevealOnScroll>

          <RevealOnScroll
            className={`${wittgenstein.className} mt-4 text-5xl font-bold leading-[1.15] tracking-tight text-black-blue md:text-6xl xl:text-7xl`}
            delay={150}
          >
            <h1>Specialized Laboratory Equipment</h1>
          </RevealOnScroll>

          <RevealOnScroll
            className="mt-6 text-[1rem] leading-relaxed text-secondary-text"
            delay={300}
          >
            <p>
              Design and manufacture of equipment such as laboratory ovens and
              furnaces, incubators, centrifuges, laboratory hoods and
              environmental testing equipment.
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
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            }
          >
            Explore Product Range
          </LinkButton>

          <LinkButton href="/contact" variant="secondary">
            Free Technical Consultation
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
            className="inline-flex items-center justify-center gap-2 border border-border-gray bg-white/30 backdrop-blur-md pl-2 pr-2 py-1 transition-colors hover:border-slate-400 hover:bg-white xs:pr-4"
          >
            <Image
              className="size-6.5 font-semibold"
              src={"icons/telegram-brands-solid-full.svg"}
              alt="Telegram"
              width={40}
              height={40}
            />
            <span className="hidden tracking-wide xs:block">Telegram</span>
          </a>

          <a
            href="https://wa.me/yournumber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-gray bg-white/30 backdrop-blur-md pl-2 pr-2 py-1 transition-colors hover:border-slate-400 hover:bg-white xs:pr-4"
          >
            <Image
              className="size-6.5 font-semibold"
              src={"icons/whatsapp-brands-solid-full.svg"}
              alt="Whatsapp"
              width={40}
              height={40}
            />
            <span className="hidden tracking-wide xs:block">Whatsapp</span>
          </a>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-gray bg-white/30 backdrop-blur-md pl-2 pr-2 py-1 transition-colors hover:border-slate-400 hover:bg-white xs:pr-4"
          >
            <Image
              className="size-6.5 font-semibold"
              src={"icons/instagram-brands-solid-full.svg"}
              alt="Instagram"
              width={40}
              height={40}
            />
            <span className="hidden tracking-wide xs:block">Instagram</span>
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}

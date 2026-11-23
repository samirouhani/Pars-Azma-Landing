"use client";

import { PiMagnifyingGlass } from "react-icons/pi";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function SearchBar() {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex w-max rounded-3xl md:border md:border-border-gray sm:bg-white/30 md:border-solid h-8 gap-8.5 px-2 lg:px-4 py-2 items-center cursor-pointer hover:border-blue-gray sm:hover:bg-slightly-blue/70 transition-border duration-100 ease-in-out">
        <span className="text-black-blue font-light text-[0.875rem] hidden lg:block">{t.navbar.search}</span>
        <PiMagnifyingGlass className="text-black-blue size-7.5 md:size-4"/>
      </div>
    </>
  );
}

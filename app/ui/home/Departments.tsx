"use client";

import DepartmentCard from "@/app/ui/common/DepartmentCard";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";
import { useLanguage } from "@/app/i18n/LanguageContext";

const mainDepartmentsMeta = [
  { imageSrc: "/images/departments/furniture-placeholder.webp", linkTo: "#" },
  { imageSrc: "/images/departments/assembly-placeholder.webp", linkTo: "#" },
];

const subDepartmentsMeta = [
  { imageSrc: "/images/departments/qc.webp", linkTo: "#" },
  { imageSrc: "/images/departments/rd.webp", linkTo: "#" },
  { imageSrc: "/images/departments/metal.webp", linkTo: "#" },
  { imageSrc: "/images/departments/coating.webp", linkTo: "#" },
  { imageSrc: "/images/departments/electronics.webp", linkTo: "#" },
];

export default function Departments() {
  const { t } = useLanguage();

  const mainDepartments = mainDepartmentsMeta.map((meta, index) => ({
    ...meta,
    ...t.departments.main[index],
  }));

  const subDepartments = subDepartmentsMeta.map((meta, index) => ({
    ...meta,
    ...t.departments.sub[index],
  }));

  // Duplicate the array so the marquee seamlessly loops
  const scrollingDepartments = [...subDepartments, ...subDepartments];

  return (
    <section className="flex flex-col bg-slightly-blue py-13 md:py-20 overflow-hidden border-t border-b border-border-gray">
      
      {/* 1. Header Area */}
      <div className="mx-auto w-full max-w-500 px-5.5 sm:px-10 md:px-20 mb-10">
        <RevealOnScroll delay={0}>
            <h2 className="text-h2 text-black-blue mb-4">
            {t.departments.title}
            </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
            <p className="max-w-2xl text-body text-secondary-text">
            {t.departments.description}
            </p>
        </RevealOnScroll>
      </div>

      {/* 2. Top Large Departments */}
      <div className="mx-auto w-full max-w-500 px-6 sm:px-10 md:px-20 mb-10 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mainDepartments.map((dept, index) => (
            <div key={index} className="w-full">
              {/* Passed h-full here to keep the grid stretch intact */}
              <RevealOnScroll delay={index * 150} className="h-full">
                <DepartmentCard
                    title={dept.title}
                    description={dept.description}
                    imageSrc={dept.imageSrc}
                    linkTo={dept.linkTo}
                    ctaLabel={t.departments.viewMoreDetails}
                />
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Divider */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 md:px-20 mb-6 md:mb-12">
        <RevealOnScroll delay={200}>
            <hr className="border-border-gray" />
        </RevealOnScroll>
      </div>

      {/* 4. Infinite Scroll Marquee */}
      {/* Wrapped the entire scrolling section to fade in together */}
      <RevealOnScroll delay={300} className="relative w-full overflow-hidden flex">
        {/* Left Feathered Fade & Progressive Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 lg:w-32 z-20"
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(249,250,252,1) 0%, rgba(249,250,252,0.85) 25%, rgba(249,250,252,0.45) 55%, rgba(249,250,252,0.12) 80%, rgba(249,250,252,0) 100%)",
            }}
          />
        </div>

        {/* Right Feathered Fade & Progressive Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 lg:w-32 z-20"
        >
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to left, rgba(249,250,252,1) 0%, rgba(249,250,252,0.85) 25%, rgba(249,250,252,0.45) 55%, rgba(249,250,252,0.12) 80%, rgba(249,250,252,0) 100%)",
            }}
          />
        </div>

        <div className="flex w-max animate-marquee gap-6 px-6 sm:gap-8 py-4">
          {scrollingDepartments.map((dept, index) => (
            <div key={index} className="w-50 sm:w-70 shrink-0">
                <DepartmentCard
                    title={dept.title}
                    imageSrc={dept.imageSrc}
                    linkTo={dept.linkTo}
                    ctaLabel={t.departments.viewMoreDetails}
                />
            </div>
          ))}
        </div>
      </RevealOnScroll>

    </section>
  );
}
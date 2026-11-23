"use client";

import ProductCard from "@/app/ui/common/ProductCard";
import LinkButton from "@/app/ui/common/LinkButton";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";
import { useLanguage } from "@/app/i18n/LanguageContext";

const productMeta = [
  { id: 1, href: "/products/1", imageSrc: "/images/products/product1 .webp" },
  { id: 2, href: "/products/2", imageSrc: "/images/products/product2 .webp" },
  { id: 3, href: "/products/3", imageSrc: "/images/products/product3 .webp" },
  { id: 4, href: "/products/4", imageSrc: "/images/products/product4.webp" },
  { id: 5, href: "/products/5", imageSrc: "/images/products/product5.webp" },
  { id: 6, href: "/products/6", imageSrc: "/images/products/product6.webp" },
  { id: 7, href: "/products/7", imageSrc: "/images/products/product7.webp" },
  { id: 8, href: "/products/8", imageSrc: "/images/products/product8.webp" },
];

export default function ProductsPreview() {
    const { t } = useLanguage();

    return (
        <section className="flex flex-col gap-12 py-16 md:py-24 bg-white px-6 sm:px-10 md:px-20">
        
            {/* Header Area */}
            <div className="flex flex-col items-center gap-4 text-center">
                <RevealOnScroll delay={0}>
                    <h2 className="text-h2 text-black-blue">
                    {t.productsPreview.title}
                    </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={75}>
                    <p className="max-w-3xl text-body text-secondary-text">
                    {t.productsPreview.description}
                    </p>
                </RevealOnScroll>
            </div>

            {/* 
                Grid Setup:
                - Mobile: 2 cols, 32px gap (gap-8)
                - Tablet (sm): 3 cols
                - Desktop (lg): 4 cols, 32px col gap, 50px row gap (lg:gap-y-[50px])
            */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-12.5 max-w-500 m-auto">
                {productMeta.map((product, index) => {
                    const item = t.productsPreview.items[index];
                    let visibilityClass = "";
                    if (index >= 4 && index < 6) visibilityClass = "hidden sm:block";
                    if (index >= 6) visibilityClass = "hidden lg:block";

                    return (
                        // 1. Outer div is the grid item and handles visibility
                        <div key={product.id} className={visibilityClass}>
                            
                            {/* 2. Modulo math for the delay, and passing h-full */}
                            <RevealOnScroll delay={((index % 4) * 100) - 100} className="h-full">
                                <ProductCard
                                    title={item.title}
                                    category={item.category}
                                    href={product.href}
                                    imageSrc={product.imageSrc}
                                    ctaLabel={t.productsPreview.viewSpecs}
                                />
                            </RevealOnScroll>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <LinkButton 
                    href="#"
                    variant="secondary"
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
                    <div>{t.productsPreview.viewAll}</div>
                </LinkButton>
            </div>
        </section>
    );
}
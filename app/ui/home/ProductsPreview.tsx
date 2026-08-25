import { Wittgenstein } from "next/font/google";
import ProductCard from "@/app/ui/common/ProductCard";
import LinkButton from "@/app/ui/common/LinkButton";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll";

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein-serif",
  subsets: ["latin"],
});

// A standard data array that you can customize per product
const productsData = [
  { id: 1, title: "Laboratory Plant Germinator", category: "germinators", href: "/products/1", imageSrc: "/images/products/product1 .webp" },
  { id: 2, title: "Universal Laboratory Centrifuge", category: "centrifuges", href: "/products/2", imageSrc: "/images/products/product2 .webp" },
  { id: 3, title: "Laboratory Platelet Agitator", category: "agitators", href: "/products/3", imageSrc: "/images/products/product3 .webp" },
  { id: 4, title: "Laboratory Incubator", category: "incubators", href: "/products/4", imageSrc: "/images/products/product4.webp" },
  { id: 5, title: "Laminar Hood", category: "hoods", href: "/products/5", imageSrc: "/images/products/product5.webp" },
  { id: 6, title: "Vacuum Oven", category: "ovens", href: "/products/6", imageSrc: "/images/products/product6.webp" },
  { id: 7, title: "Laboratory Fogging Test Apparatus for Insulating Glass", category: "environmental", href: "/products/7", imageSrc: "/images/products/product7.webp" },
  { id: 8, title: "Laboratory Boiling Water Bath", category: "Bain-Marie", href: "/products/8", imageSrc: "/images/products/product8.webp" },
];

export default function ProductsPreview() {
    return (
        <section className="flex flex-col gap-12 py-16 md:py-24 bg-white px-6 sm:px-10 md:px-20">
        
            {/* Header Area */}
            <div className="flex flex-col items-center gap-4 text-center">
                <RevealOnScroll delay={0}>
                    <h2 className={`${wittgenstein.className} font-semibold text-4xl md:text-[2.5rem] text-[#0b0c2a] leading-tight`}>
                    Featured Products
                    </h2>
                </RevealOnScroll>
                <RevealOnScroll delay={75}>
                    <p className="max-w-3xl text-slate-600 leading-relaxed">
                    With more than 37 years of experience, Pars Azma operates as one of the first specialized manufacturers 
                    of laboratory and medical equipment in Iran. By relying on its design capabilities and customized 
                    production expertise, this company provides solutions tailored to the needs of academic, research, 
                    and industrial sectors.
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
                {productsData.map((product, index) => {
                    let visibilityClass = "";
                    if (index >= 4 && index < 6) visibilityClass = "hidden sm:block";
                    if (index >= 6) visibilityClass = "hidden lg:block";

                    return (
                        // 1. Outer div is the grid item and handles visibility
                        <div key={product.id} className={visibilityClass}>
                            
                            {/* 2. Modulo math for the delay, and passing h-full */}
                            <RevealOnScroll delay={((index % 4) * 100) - 100} className="h-full">
                                <ProductCard
                                    title={product.title}
                                    category={product.category}
                                    href={product.href}
                                    imageSrc={product.imageSrc}
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
                    <div>View All Products</div>
                </LinkButton>
            </div>
        </section>
    );
}
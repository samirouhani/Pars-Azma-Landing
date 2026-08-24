import { Wittgenstein } from "next/font/google";
import ProductCard from "@/app/ui/common/ProductCard";
import LinkButton from "@/app/ui/common/LinkButton";

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein-serif",
  subsets: ["latin"],
});

// A standard data array that you can customize per product
const productsData = [
  { id: 1, title: "Laboratory plant germinator", category: "germinators", href: "/products/1", imageSrc: "/images/products/product1.webp" },
  { id: 2, title: "Industrial Drying Ovenldfjalskdfjlaksjdf lkajsldfsadfljaslkf ajksdfkaldf", category: "ovens", href: "/products/2", imageSrc: "/images/products/product2.webp" },
  { id: 3, title: "Laminar Flow Cabinet", category: "clean benches", href: "/products/3", imageSrc: "/images/products/product3.webp" },
  { id: 4, title: "Chemical Fume Hood", category: "hoods", href: "/products/4", imageSrc: "/images/products/product4.webp" },
  { id: 5, title: "BOD Incubator", category: "incubators", href: "/products/5", imageSrc: "/images/products/product5.webp" },
  { id: 6, title: "Muffle Furnace", category: "furnaces", href: "/products/6", imageSrc: "/images/products/product6.webp" },
  { id: 7, title: "Climatic Test Chamber", category: "environmental", href: "/products/7", imageSrc: "/images/products/product7.webp" },
  { id: 8, title: "Laboratory Centrifuge", category: "centrifuges", href: "/products/8", imageSrc: "/images/products/product8.webp" },
];

export default function ProductsPreview() {
    return (
        <section className="flex flex-col gap-12 py-16 md:py-24 bg-white px-6 sm:px-10 md:px-20">
        
        {/* Header Area */}
        <div className="flex flex-col items-center gap-4 text-center">
            <h2 className={`${wittgenstein.className} font-semibold text-4xl md:text-[2.5rem] text-[#0b0c2a] leading-tight`}>
            Laboratory Equipment Purchase
            </h2>
            <p className="max-w-3xl text-slate-600 leading-relaxed">
            With more than 37 years of experience, Pars Azma operates as one of the first specialized manufacturers 
            of laboratory and medical equipment in Iran. By relying on its design capabilities and customized 
            production expertise, this company provides solutions tailored to the needs of academic, research, 
            and industrial sectors.
            </p>
        </div>

        {/* 
            Grid Setup:
            - Mobile: 2 cols, 32px gap (gap-8)
            - Tablet (sm): 3 cols
            - Desktop (lg): 4 cols, 32px col gap, 50px row gap (lg:gap-y-[50px])
        */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-12.5 max-w-500 m-auto">
            {productsData.map((product, index) => {
            // Determine visibility based on array index
            let visibilityClass = "";
            if (index >= 4 && index < 6) visibilityClass = "hidden sm:block";
            if (index >= 6) visibilityClass = "hidden lg:block";

            return (
                <div key={product.id} className={visibilityClass}>
                <ProductCard
                    title={product.title}
                    category={product.category}
                    href={product.href}
                    imageSrc={product.imageSrc}
                />
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
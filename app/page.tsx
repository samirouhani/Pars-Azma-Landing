import Image from "next/image";
import Hero from '@/app/ui/home/Hero';
import StatementBanner from "@/app/ui/common/StatementBanner";
import ProductsPreview from "@/app/ui/home/ProductsPreview";
import Departments from "@/app/ui/home/Departments";
import Testimonials from "@/app/ui/home/Testimonials";
import Articles from "@/app/ui/home/Articles";
import FAQ from "@/app/ui/home/FAQ";


export default function Home() {
  return (
    <>
      <Hero />
      <StatementBanner />
      <ProductsPreview />
      <Departments />
      <Testimonials />
      <Articles />
      <FAQ />
    </>
  );
}

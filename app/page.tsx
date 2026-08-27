import Image from "next/image";
import Hero from '@/app/ui/home/Hero';
import { Wittgenstein } from "next/font/google";
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
      <StatementBanner content="The first large factory producing various laboratory equipment according to global standards in Iran"/>
      <ProductsPreview />
      <Departments />
      <Testimonials />
      <Articles />
      <FAQ />
    </>
  );
}

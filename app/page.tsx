import Image from "next/image";
import Hero from '@/app/ui/home/Hero';
import { Wittgenstein } from "next/font/google";
import StatementBanner from "@/app/ui/common/StatementBanner";
import ProductsPreview from "@/app/ui/home/ProductsPreview";


export default function Home() {
  return (
    <>
      <Hero />
      <StatementBanner content="The first large factory producing various laboratory equipment according to global standards in Iran"/>
      <ProductsPreview />
    </>
  );
}

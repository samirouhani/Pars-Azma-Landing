import { Wittgenstein } from "next/font/google";
import DepartmentCard from "@/app/ui/common/DepartmentCard";
import RevealOnScroll from "@/app/ui/common/RevealOnScroll"; // Import added

const wittgenstein = Wittgenstein({
  variable: "--font-wittgenstein-serif",
  subsets: ["latin"],
});

// Data Arrays
const mainDepartments = [
  {
    title: "Laboratory Furniture Division",
    description: "Designing chemical-resistant workstations, storage cabinets, and fume hoods engineered to enhance safety, efficiency, and flexibility in scientific environments.",
    imageSrc: "/images/departments/furniture-placeholder.webp", linkTo: "#"
  },
  {
    title: "Assembly Department",
    description: "Integrating mechanical and electronic components under strict ISO standards with rigorous quality control to deliver precise, reliable laboratory equipment.",
    imageSrc: "/images/departments/assembly-placeholder.webp", linkTo: "#"
  },
];

// The smaller departments for the marquee
const subDepartments = [
  { title: "Quality Control", imageSrc: "/images/departments/qc.webp", linkTo: "#" },
  { title: "Research & Development", imageSrc: "/images/departments/rd.webp", linkTo: "#" },
  { title: "Sheet Metal Fabrication", imageSrc: "/images/departments/metal.webp", linkTo: "#" },
  { title: "Powder Coating", imageSrc: "/images/departments/coating.webp", linkTo: "#" },
  { title: "Electronics Lab", imageSrc: "/images/departments/electronics.webp", linkTo: "#" },
];

// Duplicate the array so the marquee seamlessly loops
const scrollingDepartments = [...subDepartments, ...subDepartments];

export default function Departments() {
  return (
    <section className="flex flex-col bg-slate-50 py-13 md:py-20 overflow-hidden border-t border-b border-border-gray">
      
      {/* 1. Header Area */}
      <div className="mx-auto w-full max-w-500 px-5.5 sm:px-10 md:px-20 mb-10">
        <RevealOnScroll delay={0}>
            <h2 className={`${wittgenstein.className} font-semibold text-3xl md:text-[2.5rem] text-black-blue leading-tight mb-4`}>
            The Main Departments of Pars Azma
            </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
            <p className="max-w-2xl text-[#475569] leading-relaxed text-sm sm:text-base">
            Exploring our specialized facilities dedicated to custom laboratory furniture design and high-precision equipment assembly.
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
        <div className="flex w-max animate-marquee gap-6 px-6 sm:gap-8 py-4">
          {scrollingDepartments.map((dept, index) => (
            <div key={index} className="w-50 sm:w-70 shrink-0">
                <DepartmentCard
                    title={dept.title}
                    imageSrc={dept.imageSrc}
                    linkTo={dept.linkTo}
                />
            </div>
          ))}
        </div>
      </RevealOnScroll>

    </section>
  );
}
import { PiMagnifyingGlass } from "react-icons/pi";

export default function SearchBar() {
  return (
    <>
      <div className="flex w-max rounded-3xl md:border md:border-border-gray bg-white/30 md:border-solid h-8 gap-8.5 px-2 lg:px-4 py-2 items-center cursor-pointer hover:border-slate-400 hover:bg-slate-50/70 transition-border duration-100 ease-in-out">
        <span className="text-black-blue font-light text-[0.875rem] hidden lg:block">Search</span>
        <PiMagnifyingGlass className="text-black-blue size-7.5 md:size-4"/>
      </div>
    </>
  );
}

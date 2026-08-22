import { PiGlobe } from "react-icons/pi";
import { MdExpandMore } from "react-icons/md";

export default function LanguageSelector() {
    return(
        <>
            <div className="hidden md:flex w-max border border-border-gray border-solid h-8 gap-1.5 pl-2 pr-1.5 py-1 items-center bg-slightly-blue cursor-pointer hover:border-slate-400 transition-border duration-100 ease-in-out">
                <PiGlobe className="text-black-blue size-4.5"/>
                <span className="text-black-blue font-medium text-[0.875rem] ">EN</span>
                <MdExpandMore className="text-black-blue size-4.5"/>
            </div>
        </>
    );
}
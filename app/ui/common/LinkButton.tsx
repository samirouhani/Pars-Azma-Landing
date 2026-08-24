import Link from "next/link";
import type { ReactNode } from "react";

type LinkButtonVariant = "primary" | "secondary";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  icon?: ReactNode;
  className?: string;
};

const variantStyles: Record<LinkButtonVariant, string> = {
  primary:
    "bg-accent-blue text-white border-transparent",
  secondary: "bg-white text-slate-800 hover:bg-slate-50 border-border-gray",
};

export default function LinkButton({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: LinkButtonProps) {
  return (
    <div
      className={`group relative inline-block w-full sm:w-max ${className}`}
    >
        <span className="pointer-events-none absolute inset-0 bg-accent-blue/30 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 " />
        <Link
            href={href}
            className={`relative z-10 inline-flex w-full items-center justify-between gap-2 border px-6 py-3.5 text-sm font-medium transition-[transform,background-color,color,border-color,translate] duration-250 ease-in-out group-hover:-translate-x-1.25 group-hover:-translate-y-1.25 group-hover:border-accent-blue sm:w-max sm:justify-center group-active:translate-x-0 group-active:translate-y-0 ${variantStyles[variant]}`}
        >
            <span>{children}</span>
            {icon ? (
                <span className="inline-block transition-transform delay-75 duration-200 ease-in-out group-hover:translate-x-1.5">
                    {icon}
                </span>
            ) : null}
        </Link>
    </div>
  );
}

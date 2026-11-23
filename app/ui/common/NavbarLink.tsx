import Link from 'next/link'

interface NavbarLinkProps {
  title: string;
  linkTo: string;
}

export default function NavbarLink ({ title, linkTo } : NavbarLinkProps) {

    return(
        <Link href={linkTo} className="relative flex h-full items-center text-[0.875rem] font-medium text-secondary-text transition-text hover:text-accent-blue after:absolute after:inset-s-0 after:bottom-3 after:h-px after:w-full after:origin-left rtl:after:origin-right after:scale-x-0 after:bg-current hover:after:scale-x-100 after:transition-transform">
            {title}
        </Link>
    );
}
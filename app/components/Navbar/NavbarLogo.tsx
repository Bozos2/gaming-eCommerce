import LogoIcon from "@/app/assets/NavbarIcons/LogoIcon";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <section className="md:flex sm:hidden">
      <Link
        href="/home"
        className="pointer-cursor flex flex-row items-center gap-1"
      >
        <LogoIcon /> <h1 className="font-bold text-4xl">Gaming</h1>
      </Link>
    </section>
  );
};

export default NavbarLogo;

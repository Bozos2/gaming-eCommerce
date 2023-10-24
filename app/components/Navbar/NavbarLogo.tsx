import LogoIcon from "@/app/assets/NavbarIcons/LogoIcon";

const NavbarLogo = () => {
  return (
    <section className="flex flex-row items-center gap-1">
      <LogoIcon /> <h1 className="font-bold text-4xl">Gaming</h1>
    </section>
  );
};

export default NavbarLogo;

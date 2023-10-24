import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarAuth from "./NavbarAuth";
import CartButton from "../Buttons/CartButton";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 w-full">
      <nav className="h-20 flex justify-around max-w-full m-auto  bg-zinc-950">
        <NavbarLogo />
        <NavbarLinks />
        <div className="flex flex-row gap-6">
          <CartButton />
          <NavbarAuth />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import Link from "next/link";

import HomeIcon from "@/app/assets/NavbarIcons/MobileIcons/HomeIcon";
import ProductsIcon from "@/app/assets/NavbarIcons/MobileIcons/ProductsIcon";
import SpecialIcon from "@/app/assets/NavbarIcons/MobileIcons/SpecialIcon";
import CartMobile from "@/app/assets/NavbarIcons/MobileIcons/CartMobile";
import ProfileIcon from "@/app/assets/NavbarIcons/MobileIcons/ProfileIcon";

const MobileNavbar = () => {
  return (
    <nav className="w-full h-[42px] bg-neutral-900 sticky bottom-0 left-0 sm:hidden">
      <ul className="flex flex-row">
        <Link
          href="/#"
          className="min-w-16 w-[126px] px-[9px] pb-2 pt-[5px] focus:text-[#22c55e] focus:border-t-2 focus:border-[#22c55e] focus:text-[11px]"
          autoFocus
        >
          <li className="flex flex-col items-center">
            <HomeIcon />
            <p className="text-[9px]">Početna</p>
          </li>
        </Link>
        <Link
          href="/#"
          className="min-w-16 w-[126px] px-[9px] pb-2 pt-[5px] focus:text-[#22c55e] focus:border-t-2 focus:border-[#22c55e] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <ProductsIcon />
            <p className="text-[9px]">Proizvodi</p>
          </li>
        </Link>
        <Link
          href="/#"
          className="min-w-16 w-[126px] px-[9px] pb-2 pt-[5px] focus:text-[#22c55e] focus:border-t-2 focus:border-[#22c55e] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <SpecialIcon />
            <p className="text-[9px]">Special</p>
          </li>
        </Link>
        <Link
          href="/#"
          className="min-w-16 w-[126px] px-[9px] pb-2 pt-[5px] focus:text-[#22c55e] focus:border-t-2 focus:border-[#22c55e] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <CartMobile />
            <p className="text-[9px]">Košarica</p>
          </li>
        </Link>
        <Link
          href="/#"
          className="min-w-16 w-[126px] px-[9px] pb-2 pt-[5px] focus:text-[#22c55e] focus:border-t-2 focus:border-[#22c55e] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <ProfileIcon />
            <p className="text-[9px]">Profile</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default MobileNavbar;

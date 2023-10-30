"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import HomeIcon from "@/app/assets/NavbarIcons/MobileIcons/HomeIcon";
import ProductsIcon from "@/app/assets/NavbarIcons/MobileIcons/ProductsIcon";
import SpecialIcon from "@/app/assets/NavbarIcons/MobileIcons/SpecialIcon";
import CartMobile from "@/app/assets/NavbarIcons/MobileIcons/CartMobile";
import ProfileIcon from "@/app/assets/NavbarIcons/MobileIcons/ProfileIcon";

const MobileNavbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  let scrollTimeout: NodeJS.Timeout;
  let isBottom: boolean;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if ((latest > previous || latest < previous) && latest > 150 && !isBottom) {
      setHidden(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setHidden(false), 1000);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full h-[45px] bg-neutral-900 sticky bottom-0 sm:hidden"
    >
      <ul className="flex flex-row">
        <Link
          href="#"
          className="min-w-16 w-[126px] px-[9px]  pt-[7px] focus:text-[#e11d48] focus:border-t-2 focus:border-[#e11d48] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <HomeIcon />
            <p className="text-[9px]">Početna</p>
          </li>
        </Link>
        <Link
          href="#"
          className="min-w-16 w-[126px] px-[9px]  pt-[7px] focus:text-[#e11d48] focus:border-t-2 focus:border-[#e11d48] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <ProductsIcon />
            <p className="text-[9px]">Proizvodi</p>
          </li>
        </Link>
        <Link
          href="#"
          className="min-w-16 w-[126px] px-[9px]  pt-[7px] focus:text-[#e11d48] focus:border-t-2 focus:border-[#e11d48] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <SpecialIcon />
            <p className="text-[9px]">Special</p>
          </li>
        </Link>
        <Link
          href="#"
          className="min-w-16 w-[126px] px-[9px]  pt-[7px] focus:text-[#e11d48] focus:border-t-2 focus:border-[#e11d48] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <CartMobile />
            <p className="text-[9px]">Košarica</p>
          </li>
        </Link>
        <Link
          href="#"
          className="min-w-16 w-[126px] px-[9px] pt-[7px] focus:text-[#e11d48] focus:border-t-2 focus:border-[#e11d48] focus:text-[11px]"
        >
          <li className="flex flex-col items-center">
            <ProfileIcon />
            <p className="text-[9px]">Profil</p>
          </li>
        </Link>
      </ul>
    </motion.nav>
  );
};

export default MobileNavbar;

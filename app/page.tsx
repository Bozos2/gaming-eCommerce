import Image from "next/image";
import SearchIcon from "./assets/NavbarIcons/SearchIcon";
import HomeIcon from "./assets/NavbarIcons/MobileIcons/HomeIcon";
import ProductsIcon from "./assets/NavbarIcons/MobileIcons/ProductsIcon";
import SpecialIcon from "./assets/NavbarIcons/MobileIcons/SpecialIcon";
import CartMobile from "./assets/NavbarIcons/MobileIcons/CartMobile";
import ProfileIcon from "./assets/NavbarIcons/MobileIcons/ProfileIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <p className="text-2xl text-muted-foreground">
        Ovo je tekst samo da testiram kako radi shadcnUI
      </p>
    </main>
  );
}

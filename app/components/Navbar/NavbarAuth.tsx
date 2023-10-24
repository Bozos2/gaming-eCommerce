import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NavbarAuth = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link href="/login" className={buttonVariants({ variant: "outline" })}>
        Log in
      </Link>
      <Link href="/login" className={buttonVariants({ variant: "default" })}>
        Sign up
      </Link>
    </div>
  );
};

export default NavbarAuth;

"use client";

import { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogOverlay,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProfileIcon from "@/app/assets/NavbarIcons/MobileIcons/ProfileIcon";

type ProfileProps = {
  selectedSelection: number;
};

const MobileProfile = () => {
  let router = useRouter();

  return (
    <Dialog>
      <DialogOverlay onClose={() => router.back()}>
        <DialogContent className="max-w-[310px] sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="gap-4 border-b-2 pb-4 text-xl">
              Shoping Cart
            </DialogTitle>
          </DialogHeader>
          <div>jastajasta</div>
          <DialogFooter className="sm:justify-start"></DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
export default MobileProfile;

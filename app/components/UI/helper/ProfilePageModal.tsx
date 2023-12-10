import {
  Dialog,
  InterceptedDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import ProfileContent from "./ProfileModalContent";

export default function InterceptedPageAsModal() {
  return (
    <Dialog open>
      <InterceptedDialogContent className="max-w-[310px] sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="pb-1 text-xl">Korisnički Profil</DialogTitle>
          <DialogDescription>
            Ovdje mozete vidjeti povijest svojih transakcija kao i promjeniti
            sliku profila i lozinku ukoliko ima potrebe.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <ProfileContent />
        </div>
      </InterceptedDialogContent>
    </Dialog>
  );
}

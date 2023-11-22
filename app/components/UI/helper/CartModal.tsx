import {
  Dialog,
  InterceptedDialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function InterceptedCartPageAsModal() {
  return (
    <Dialog open>
      <InterceptedDialogContent className="max-w-[310px] sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="gap-4 border-b-2 pb-4 text-xl">
            Shoping Cart
          </DialogTitle>
        </DialogHeader>
        samo je ovo mali test
      </InterceptedDialogContent>
    </Dialog>
  );
}

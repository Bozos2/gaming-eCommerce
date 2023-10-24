import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CartIcon from "@/app/assets/NavbarIcons/CartIcon";

const CartButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer font-oswald transition ease-in duration-200 hover:-translate-y-0.5  hover:scale-110">
          <span className="">
            <CartIcon />
          </span>
          <span className="absolute mt-[-52px] ml-2 font-semibold bg-red-600 px-2 rounded-full">
            0
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="gap-4 border-b-2 pb-4 text-xl">
            Shoping Cart
          </DialogTitle>
        </DialogHeader>
        <div>jastajasta</div>
      </DialogContent>
    </Dialog>
  );
};
export default CartButton;

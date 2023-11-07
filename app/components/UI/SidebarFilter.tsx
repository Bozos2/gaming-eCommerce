import PriceSlider from "./DoubleRangeSlider";
import Filters from "./Filters";
import { Button } from "@/components/ui/button";

const SidebarFilter = () => {
  return (
    <div className="w-80 flex flex-col gap-4">
      <PriceSlider />
      <Filters />
      <Button
        variant="default"
        className="py-7 px-16 hover:bg-foreground hover:text-primary font-bold tracking-wider text-lg"
      >
        Spremi
      </Button>
    </div>
  );
};

export default SidebarFilter;

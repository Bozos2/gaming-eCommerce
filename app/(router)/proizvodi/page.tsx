import MascotImage from "@/app/components/HomeUI/MascotImage";
import Search from "@/app/components/UI/Serachbar";
import SidebarFilter from "@/app/components/UI/SidebarFilter";
import Breadcrumbs from "@/app/components/UI/Breadcrumbs";
import FilterButton from "@/app/components/Buttons/FilterButton";

const Proizvodi = () => {
  return (
    <section className="flex flex-row justify-center lg:justify-between   min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black font-poppins">
      <div className="mt-12 lg:ml-12">
        <div className="mb-12 lg:mb-24">
          <Breadcrumbs />
        </div>
        <div className="flex flex-row justify-center items-center gap-4 lg:block lg:gap-0">
          <div className="lg:mb-10">
            <Search />
          </div>
          <div className="hidden lg:block">
            <SidebarFilter />
          </div>
          <div className="lg:hidden">
            <FilterButton />
          </div>
        </div>
      </div>
      <div className="flex items-center"></div>
    </section>
  );
};

export default Proizvodi;

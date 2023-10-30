import Image from "next/image";

import HomeText from "@/app/components/UI/HomeText";
import MascotImage from "@/app/components/UI/MascotImage";
import AboutText from "@/app/components/UI/AboutText";
import AboutIcons from "@/app/components/UI/AboutIcons";
import UsersText from "@/app/components/UI/UsersText";
import CommunitySection from "@/app/components/UI/CommunitySection";

const Home = () => {
  return (
    <main className="min-h-screen">
      <div className="flex flex-row justify-around sm:pt-12  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
        <div>
          <HomeText />
        </div>
        <div className="hidden mr-2 lg:block">
          <MascotImage />
        </div>
      </div>
      <div className="bg-neutral-900">
        <UsersText />
      </div>

      <div className=" bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black  py-4">
        <div className="flex justify-end">
          <AboutText />
        </div>
        <div className="flex justify-center mt-44">
          <AboutIcons />
        </div>
      </div>
      <div className=" bg-neutral-900">
        <CommunitySection />
      </div>
    </main>
  );
};

export default Home;

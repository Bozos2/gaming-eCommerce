import Image from "next/image";

import HomeText from "@/app/components/UI/HomeText";
import MascotImage from "@/app/components/UI/MascotImage";

const Home = () => {
  return (
    <main>
      <div className="w-full h-full flex flex-row justify-around sm:pt-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
        <div>
          <HomeText />
        </div>
        <div className="hidden mr-2 lg:block">
          <MascotImage />
        </div>
      </div>
    </main>
  );
};

export default Home;

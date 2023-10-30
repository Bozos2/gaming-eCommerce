"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import DiscordIcon from "@/app/assets/CommunityIcons/DiscordIcon";
import FacebookIcon from "@/app/assets/CommunityIcons/FacebookIcon";
import InstagramIcon from "@/app/assets/CommunityIcons/InstagramIcon";
import LinkedinIcon from "@/app/assets/CommunityIcons/LinkedinIcon";
import PinterestIcon from "@/app/assets/CommunityIcons/PinterestIcon";
import TelegramIcon from "@/app/assets/CommunityIcons/TelegramIcon";
import TiktokIcon from "@/app/assets/CommunityIcons/TiktokIcon";
import TwitterIcon from "@/app/assets/CommunityIcons/TwitterIcon";

const CommunitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="h-[800px] xl:h-[500px] flex flex-col xl:flex-row  justify-around items-center ">
      <motion.div
        ref={ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "-100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-4"
      >
        <h1 className="text-5xl font-roboto">Pridruži se našoj zajednici!</h1>
        <p className="text-lg font-poppins pt-4">
          Pozivamo te da postaneš deo naše strastvene zajednice posvećene 3d
          modeliranju. Zajedno stvaramo prostor gde možemo razmenjivati ideje,
          iskustva i inspiraciju. Naša zajednica je otvorena za sve koji dele
          istu strast prema modelingu i žele se povezati s istomišljenicima. Bez
          obzira da li si iskusni entuzijasta ili tek početnik, dobrodošao/la si
          da se pridružiš i doprineseš zajednici. Postani deo naše priče i
          pronađi podršku, prijateljstvo i neiscrpnu inspiraciju.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-4 gap-2 sm:gap-4"
      >
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="discord">
            <DiscordIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <TwitterIcon className="mt-1" />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <FacebookIcon className="mr-1" />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <InstagramIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <TelegramIcon className="mr-1.5" />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <LinkedinIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <TiktokIcon />
          </Link>
        </div>
        <div className="h-[70px] w-[70px] border-2 rounded-full text-[#e11d48] border-[#e11d48] flex justify-center items-center hover:bg-[#e11d48] hover:text-white hover:cursor-pointer transition ease-in duration-300 hover:-translate-y-0.5  hover:scale-110">
          <Link href="">
            <PinterestIcon />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunitySection;

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import rev1 from "../../assets/Images/rev1.jpeg";
import rev2 from "../../assets/Images/rev2.jpg";
import rev3 from "../../assets/Images/rev3.jpg";
import rev4 from "../../assets/Images/rev4.jpeg";

const Review = () => {
  const [selectedSelection, setSelectedSelection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleSelectionClick = (index: number) => {
    setSelectedSelection(index);
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
      className="min-h-screen py-8 sm:py-12"
    >
      <h1 className="text-foreground text-4xl sm:text-5xl pt-8 sm:pt-24 font-black font-roboto text-center mx-4">
        Recenzije naših korisnika
      </h1>
      <div className="flex justify-center ml-6 sm:ml-0 mt-24 sm:mt-48">
        <div
          className={`relative bg-gray-300 h-[101px] w-[101px]  ml-[-26px] flex justify-center items-center  rounded-full transition-transform transform hover:-translate-x-6  ${
            selectedSelection === 0 ? "focus:-translate-x-6 bg-[#e11d48]" : ""
          }`}
          onClick={() => handleSelectionClick(0)}
          tabIndex={0}
        >
          <Avatar className="absolute  h-[95px] w-[95px]  cursor-pointer">
            <AvatarImage src={rev1.src} alt="@shadcn" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </div>
        <div
          className={`relative bg-gray-300 h-[101px] w-[101px] ml-[-26px] flex justify-center items-center  rounded-full transition-transform transform hover:-translate-x-6  ${
            selectedSelection === 1 ? "focus:-translate-x-6 bg-[#e11d48]" : ""
          }`}
          onClick={() => handleSelectionClick(1)}
          tabIndex={0}
        >
          <Avatar className="absolute  h-[95px] w-[95px]  align-center cursor-pointer">
            <AvatarImage src={rev2.src} alt="@shadcn" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
        </div>
        <div
          className={`relative bg-gray-300 h-[101px] w-[101px] ml-[-26px] flex justify-center items-center  rounded-full transition-transform transform hover:-translate-x-6  ${
            selectedSelection === 2 ? "focus:-translate-x-6 bg-[#e11d48]" : ""
          }`}
          onClick={() => handleSelectionClick(2)}
          tabIndex={0}
        >
          <Avatar className="absolute  h-[95px] w-[95px]  cursor-pointer">
            <AvatarImage src={rev3.src} alt="@shadcn" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
        </div>
        <div
          className={`relative bg-gray-300 h-[101px] w-[101px] ml-[-26px] flex justify-center items-center  rounded-full transition-transform transform hover:-translate-x-6  ${
            selectedSelection === 3 ? "focus:-translate-x-6 bg-[#e11d48]" : ""
          }`}
          onClick={() => handleSelectionClick(3)}
          tabIndex={0}
        >
          <Avatar className="absolute  h-[95px] w-[95px]  cursor-pointer">
            <AvatarImage src={rev4.src} alt="@shadcn" />
            <AvatarFallback>JN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 font-poppins">
        <div
          className={`${
            selectedSelection === 0 ? "" : "hidden"
          } flex flex-col justify-center items-center max-w-7xl text-center`}
        >
          <p className="text-4xl mx-4">
            Narudžba moje omiljene igračke nikad nije bila lakša. Samo sam
            poslala svoj dizajn, a ekipa je pretvorila moju ideju u stvarnost.
            Brza isporuka i vrhunska kvaliteta!
          </p>
          <h1 className="mt-12  text-[#e11d48] text-3xl font-bold">
            Ana Petrović
          </h1>
          <h4 className="mt-2 font-semibold">Zagreb,Hrvatska</h4>
        </div>
        <div
          className={`${
            selectedSelection === 1 ? "" : "hidden"
          } flex flex-col justify-center  items-center max-w-7xl text-center`}
        >
          <p className="text-4xl mx-4">
            "Oduševljen sam svojom novom 3D gaming figuricom! Izgleda točno kao
            moj omiljeni lik iz igre. Hvala vam na brzoj i pouzdanoj usluzi."
          </p>
          <h1 className="mt-12  text-[#e11d48] text-3xl font-bold">
            Jovan Nikolić
          </h1>
          <h4 className="mt-2 font-semibold">Niš,Srbija</h4>
        </div>
        <div
          className={`${
            selectedSelection === 2 ? "" : "hidden"
          } flex flex-col justify-center items-center max-w-7xl text-center`}
        >
          <p className="text-4xl mx-4">
            "Kupila sam svojoj djeci personalizirane gaming figurice za njihove
            rođendane, i bili su oduševljeni! Savršen poklon za sve ljubitelje
            videoigara."
          </p>
          <h1 className="mt-12  text-[#e11d48] text-3xl font-bold">
            Izidora Novak
          </h1>
          <h4 className="mt-2 font-semibold">Ljubljana,Slovenija</h4>
        </div>
        <div
          className={`${
            selectedSelection === 3 ? "" : "hidden"
          } flex flex-col justify-center items-center max-w-7xl text-center`}
        >
          <p className="text-4xl mx-4">
            "Savršeno mjesto za nabavku jedinstvenih 3D gaming figura. Iznenadio
            sam svog prijatelja personaliziranom figuricom za njegov rođendan, i
            bio je bez riječi."
          </p>
          <h1 className="mt-12  text-[#e11d48] text-3xl font-bold">
            János Nagy
          </h1>
          <h4 className="mt-2 font-semibold">Miškolc,Mađarska</h4>
        </div>
      </div>
    </motion.section>
  );
};

export default Review;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuth } from "@/app/context/auth-context";

import profileimg from "../../../assets/Images/rev1.jpeg";
import { buttonVariants } from "@/components/ui/button";

const DUMMYTransakcije = [
  {
    ime: "Fornite Skull Trooper figurica",
    cijena: "€60.00",
    datum: "22.11.2022",
  },
  {
    ime: "Cod Gaming 3d figurica",
    cijena: "€90.00",
    datum: "08.01.2023",
  },
  {
    ime: "Jinx Arcane 3d figurica",
    cijena: "€120.00",
    datum: "28.06.2023",
  },
  {
    ime: "Pubg gaming 3d figurica",
    cijena: "€20.00",
    datum: "12.04.2022",
  },
];

const ProfileContent = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const authData = useAuth();
  const cookie = authData.token;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file ? file.name : "");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      {cookie ? (
        <>
          <div className="flex justify-center">
            <Image
              alt="slika profila"
              width={150}
              height={150}
              src={profileimg}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="mt-1 flex flex-col justify-center items-center">
            <label
              htmlFor="file"
              className="text-white px-4  rounded cursor-pointer"
            >
              Klikni za promjenu
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <div className="text-center text-gray-400 text-xs">
                Odabrana datoteka: {selectedFile}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center gap-3 mt-2">
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Ime: </span>
                {authData.data.firstName}
              </h2>
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Prezime: </span>
                {authData.data.lastName}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center pt-1">
              <h2 className="text-gray-400">
                <span className="font-bold  text-white">Email:</span>{" "}
                {authData.data.email}
              </h2>
            </div>
            <div className="flex justify-center mt-2">
              <button className="ml-1 text-blue-500 hover:underline hover:text-blue-700 text-sm">
                Promjenite lozinku
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm pr-1">
                  Povijest transakcija
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col">
                    {DUMMYTransakcije.map((item: any, i) => (
                      <li
                        className="flex flex-row justify-between py-1 gap-3 sm:gap-4"
                        key={i}
                      >
                        <div className="max-w-[140px] overflow-hidden">
                          {item.ime}
                        </div>
                        <p className=" text-gray-400">{item.cijena}</p>
                        <p className=" text-gray-400">{item.datum}</p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-center">
            Za pojedinosti profila morate biti prijavljeni!
          </h1>{" "}
        </div>
      )}
    </div>
  );
};

export default ProfileContent;

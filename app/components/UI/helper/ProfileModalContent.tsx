"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuth } from "@/app/context/auth-context";
import ResetPasswordModal from "./ResetPasswordModal";

import profileimg from "../../../assets/Images/rev1.jpeg";
import { buttonVariants } from "@/components/ui/button";
import axios from "axios";

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

interface CustomDateFormatOptions {
  year: "numeric";
  month: "2-digit";
  day: "2-digit";
}

const ProfileContent = () => {
  const authData = useAuth();
  const cookie = authData.token;

  const originalDateString = authData.data.date_of_birth;
  const originalDate = new Date(originalDateString);
  const originalCreatedString = authData.data.created;
  const originalCreated = new Date(originalCreatedString);

  const options: CustomDateFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = originalDate.toLocaleDateString("en-US", options);
  const formattedCreated = originalCreated.toLocaleDateString("en-US", options);

  return (
    <div className="flex flex-col justify-center">
      {cookie ? (
        <>
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
            <div className="flex flex-row justify-center gap-3 mt-2">
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Datum Rođenja: </span>
                {formattedDate}
              </h2>
              <h2 className="text-gray-400">
                <span className="font-bold text-white">Spol: </span>
                {authData.data.gender}
              </h2>
            </div>
            <div className="flex flex-wrap justify-center pt-1">
              <h2 className="text-gray-400">
                <span className="font-bold  text-white">Kreirano:</span>{" "}
                {formattedCreated}
              </h2>
            </div>
            <div className="flex justify-center mt-2">
              <ResetPasswordModal title="Promjenite lozinku" />
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

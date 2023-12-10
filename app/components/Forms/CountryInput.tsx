"use client";

import React from "react";

import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./SignupForm";
import { Select, SelectItem, Avatar, SelectSection } from "@nextui-org/react";

const CountryInput = ({ register }: { register: UseFormRegister<Inputs> }) => {
  return (
    <div>
      <label htmlFor="drzave">Država:</label>
      <Select
        id="drzave"
        aria-label="Država"
        {...register("drzava")}
        classNames={{
          base: "max-w-xs",
          trigger: "bg-[#3B3B3B] hover:bg-[#3B3B3B]",
          popoverContent: "bg-[#3B3B3B]",
        }}
        labelPlacement="outside"
        defaultSelectedKeys={["ostale"]}
        placeholder="Izaberi državu"
        required
      >
        <SelectSection>
          <SelectItem
            key="srbija"
            startContent={
              <Avatar
                alt="Srbija"
                className="w-6 h-6"
                src="https://flagcdn.com/rs.svg"
              />
            }
          >
            Srbija
          </SelectItem>
          <SelectItem
            key="crnagora"
            startContent={
              <Avatar
                alt="Crna Gora"
                className="w-6 h-6"
                src="https://flagcdn.com/me.svg"
              />
            }
          >
            Crna Gora
          </SelectItem>
          <SelectItem
            key="hrvatska"
            startContent={
              <Avatar
                alt="Hrvatska"
                className="w-6 h-6"
                src="https://flagcdn.com/hr.svg"
              />
            }
          >
            Hrvatska
          </SelectItem>
          <SelectItem
            key="bih"
            startContent={
              <Avatar
                alt="BiH"
                className="w-6 h-6"
                src="https://flagcdn.com/ba.svg"
              />
            }
          >
            BiH
          </SelectItem>
          <SelectItem
            key="germany"
            startContent={
              <Avatar
                alt="Germany"
                className="w-6 h-6"
                src="https://flagcdn.com/de.svg"
              />
            }
          >
            Germany
          </SelectItem>
          <SelectItem
            key="macedonia"
            startContent={
              <Avatar
                alt="Makedonia"
                className="w-6 h-6"
                src="https://flagcdn.com/mk.svg"
              />
            }
          >
            Makedonia
          </SelectItem>
          <SelectItem
            key="grcka"
            startContent={
              <Avatar
                alt="Grčka"
                className="w-6 h-6"
                src="https://flagcdn.com/gr.svg"
              />
            }
          >
            Grčka
          </SelectItem>
          <SelectItem
            key="slovenija"
            startContent={
              <Avatar
                alt="Slovenija"
                className="w-6 h-6"
                src="https://flagcdn.com/si.svg"
              />
            }
          >
            Slovenija
          </SelectItem>
          <SelectItem
            key="madarska"
            startContent={
              <Avatar
                alt="Mađarska"
                className="w-6 h-6"
                src="https://flagcdn.com/hu.svg"
              />
            }
          >
            Mađarska
          </SelectItem>
          <SelectItem
            key="ostale"
            startContent={
              <Avatar
                alt="Ostale"
                className="w-6 h-6"
                src="https://flagcdn.com/eu.svg"
              />
            }
          >
            Ostale
          </SelectItem>
        </SelectSection>
      </Select>
    </div>
  );
};

export default CountryInput;

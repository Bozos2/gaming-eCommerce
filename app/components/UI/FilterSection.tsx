"use client";
import React, { useState } from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "../UI/helper/CustomCheckbox";
import { Button } from "@/components/ui/button";

const FilterSection = () => {
  const [groupSelected, setGroupSelected] = useState<string[]>([]);
  return (
    <div className="flex flex-col gap-3 w-full font-poppins">
      <div className="flex flex-col mt-4 w-full mb-2">
        <label className="text-[#a1a1aa] font-bold">Cijena</label>
        <div className="flex flex-row items-center gap-1">
          <input
            type="number"
            className="w-24 bg-background/80 border-4 text-center border-b-rose-600 border-t-0 border-r-transparent border-l-transparent focus:outline-none"
          />
          DO{" "}
          <input
            type="number"
            className="w-24 bg-background/80 border-4  text-center border-b-rose-600 border-t-0 border-r-transparent border-l-transparent focus:outline-none"
          />{" "}
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full mb-2">
        <CheckboxGroup
          className="gap-1"
          label={<span className="font-bold">Kategorija</span>}
          orientation="horizontal"
          color="primary"
          value={groupSelected}
          onChange={(newValue) => {
            if (Array.isArray(newValue)) {
              setGroupSelected(newValue);
            }
          }}
        >
          <CustomCheckbox value="Svi proizvodi">Svi proizvodi</CustomCheckbox>
          <CustomCheckbox value="League of legends">
            League of legends
          </CustomCheckbox>
          <CustomCheckbox value="Warcraft">Warcraft</CustomCheckbox>
          <CustomCheckbox value="Starcraft">Starcraft</CustomCheckbox>
          <CustomCheckbox value="Battle Royale">Battle Royale</CustomCheckbox>
          <CustomCheckbox value="Ostali">Ostali</CustomCheckbox>
        </CheckboxGroup>
      </div>
      <div className="flex flex-col gap-1 w-full mb-2">
        <CheckboxGroup
          className="gap-1"
          label={<span className="font-bold">Dimenzije</span>}
          orientation="horizontal"
          color="primary"
          value={groupSelected}
          onChange={(newValue) => {
            if (Array.isArray(newValue)) {
              setGroupSelected(newValue);
            }
          }}
        >
          <CustomCheckbox value="5x5">5x5</CustomCheckbox>
          <CustomCheckbox value="10x10">10x10</CustomCheckbox>
          <CustomCheckbox value="15x15">15x15</CustomCheckbox>
          <CustomCheckbox value="30x30">30x30</CustomCheckbox>
        </CheckboxGroup>
      </div>
      <div className="flex flex-col gap-1 w-full mb-2">
        <CheckboxGroup
          className="gap-1"
          label={<span className="font-bold">Sortiraj po</span>}
          orientation="horizontal"
          color="primary"
          value={groupSelected}
          onChange={(newValue) => {
            if (Array.isArray(newValue)) {
              setGroupSelected(newValue);
            }
          }}
        >
          <CustomCheckbox value="najniza">Cena: najniza</CustomCheckbox>
          <CustomCheckbox value="najviša">Cena: najviša</CustomCheckbox>
          <CustomCheckbox value="A-Z">Naziv: A-Z</CustomCheckbox>
          <CustomCheckbox value="Z-A">Naziv: Z-A</CustomCheckbox>
        </CheckboxGroup>
      </div>

      <div className="flex justify-center mt-1">
        <Button
          variant="default"
          className="py-2 px-12 tracking-widest rounded-xl hover:bg-foreground hover:text-primary font-semibold font-poppins"
        >
          Spremi{" "}
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;

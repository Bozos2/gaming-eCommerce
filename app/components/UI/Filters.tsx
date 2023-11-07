"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

const Filters = () => {
  return (
    <Accordion type="single" collapsible className="max-w-sm w-full  p-2">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="text-lg">Kategorija</AccordionTrigger>
        <AccordionContent>
          <div className="flex  gap-4">
            <CheckboxGroup defaultValue={["Svi proizvodi"]}>
              <Checkbox value="Svi proizvodi">Svi proizvodi</Checkbox>
              <Checkbox value="League of legends">League of legends</Checkbox>
              <Checkbox value="Warcraft">Warcraft</Checkbox>
              <Checkbox value="Starcraft">Starcraft</Checkbox>
              <Checkbox value="Battle Royale">Battle Royale</Checkbox>
              <Checkbox value="Ostali">Ostali</Checkbox>
            </CheckboxGroup>
          </div>{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-0">
        <AccordionTrigger className="text-lg">Dimenzije</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-4">
            <CheckboxGroup>
              <Checkbox value="5x5">5x5</Checkbox>
              <Checkbox value="10x10">10x10</Checkbox>
              <Checkbox value="15x15">15x15</Checkbox>
              <Checkbox value="30x30">30x30</Checkbox>
            </CheckboxGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-0">
        <AccordionTrigger className="text-lg">Sortiraj po</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-4">
            <CheckboxGroup>
              <Checkbox value="najniza">Cena: najniza</Checkbox>
              <Checkbox value="najviša">Cena: najviša</Checkbox>
              <Checkbox value="A-Z">Naziv: A-Z</Checkbox>
              <Checkbox value="Z-A">Naziv: Z-A</Checkbox>
            </CheckboxGroup>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;

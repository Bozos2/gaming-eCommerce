"use client";

import React from "react";
import { Slider, SliderValue } from "@nextui-org/react";

export default function PriceSlider() {
  const [value, setValue] = React.useState<SliderValue>([30, 90]);

  return (
    <div className="flex flex-col gap-2 max-w-sm w-full h-full  items-start justify-center">
      <Slider
        label="Izaberi budžet"
        formatOptions={{ style: "currency", currency: "EUR" }}
        step={10}
        maxValue={120}
        minValue={0}
        value={value}
        onChange={setValue}
        className="max-w-md"
      />
      <p className="text-foreground font-medium text-small w-full pt-4 flex flex-row justify-center items-center">
        {Array.isArray(value) &&
          value.map((b, index) => (
            <React.Fragment key={index}>
              <span className="block border-2 border-primary mx-1 py-2 text-xl bg-neutral-800 w-28 text-center">
                {`€${b}`}
              </span>
              {index < value.length - 1 && (
                <span className="inline-block text-center">━━</span>
              )}
            </React.Fragment>
          ))}
      </p>
    </div>
  );
}

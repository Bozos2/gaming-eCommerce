"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const EmailinputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = EmailinputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
  };

  return (
    <div className="max-w-xs  p-4 ">
      <h1 className="text-3xl font-semibold mb-2">Budi u trendu!</h1>
      <p className="text-foreground text-sm mb-4">
        Prijavi se za primanje najnovijih informacija o našim 3D figuricama i
        posebnim ponudama.
      </p>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Tvoj e-mail"
          className="p-2 border border-gray-300 rounded mb-2 focus:outline focus:outline-rose-600 focus:border-none"
        />
        <Button
          type="submit"
          className="w-1/3 mt-1 bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-2"
        >
          Pošalji!
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;

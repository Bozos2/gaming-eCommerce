"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const emailValue = emailRef.current?.value;

    const data = {
      email: emailValue,
    };

    try {
      const response = await fetch("http://localhost:3001/api/news/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      console.log(responseData);

      const { err, msg } = responseData;

      if (!err) {
        toast({
          title: "Uspješna prijava!",
          description: "Hvala vam na Vašoj vjernosti",
        });
      } else if (response.status === 400 && responseData.err) {
        console.log("Invalid credentials");
        toast({
          variant: "destructive",
          title: "Neuspješna prijava!",
          description:
            "Unesena mail adresa se već nalazi u našoj bazi podataka",
        });
      }

      console.log("data:", emailValue);
    } catch (error) {
      console.error("Error during POST request:", error);
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
          ref={emailRef}
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

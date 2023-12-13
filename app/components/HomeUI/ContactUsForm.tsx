"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LocationIcon from "@/app/assets/ContactIcons/LocationIcon";
import MailIcon from "@/app/assets/ContactIcons/MailIcon";
import PhoneIcon from "@/app/assets/ContactIcons/PhoneIcon";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactUsForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { toast } = useToast();

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const emailValue = emailRef.current?.value;
    const firstNameValue = firstNameRef.current?.value;
    const lastNameValue = lastNameRef.current?.value;
    const messageValue = messageRef.current?.value;

    const data = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      email: emailValue,
      message: messageValue,
    };

    try {
      const response = await fetch(
        "http://localhost:3001/api/auth/contact-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (response.status === 200) {
        formRef.current?.reset();
        toast({
          title: "Forma uspješno popunjena!",
          description: "U najkraćem mogućem roku ćemo vam odgovoriti. Hvala!",
        });
      } else if (response.status === 400 && responseData.err) {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during POST request:", error);
    }
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
      className="flex flex-col items-center justify-center min-h-screen py-12"
    >
      <div className="mx-8  mb-24 ">
        <h1 className="text-foreground text-4xl sm:text-5xl pt-12 font-black font-roboto">
          Kontaktirajte nas!
        </h1>
        <p className="max-w-2xl pt-6 text-lg font-poppins pr-2">
          Naš tim stručnjaka stoji vam na usluzi. Javite nam se s pitanjima,
          sugestijama ili komentarima putem kontakt forme ispod ili koristeći
          naše kontakt informacije. Vaša povratna informacija nam je od velikog
          značaja, i radujemo se vašem kontaktu.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 h-[660px] lg:h-[300px]">
        <div className="flex flex-col justify-between gap-2 max-w-xl">
          <Link
            href="/contact"
            className="w-full  flex flex-row items-center gap-3 p-4  rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background"
          >
            <PhoneIcon />
            <p className="text-foreground text-base font-semibold">
              {" "}
              +387-123-465
            </p>
          </Link>

          <Link
            href="/contact"
            className="w-full  flex flex-row items-center gap-3 p-4 rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background"
          >
            <MailIcon />{" "}
            <p className="text-foreground text-base font-semibold">
              mainheimtrgovina@gmail.com
            </p>
          </Link>
          <Link
            href="/contact"
            className="w-full flex flex-row items-center gap-3 p-4  rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background"
          >
            <LocationIcon />{" "}
            <p className="text-foreground text-base font-semibold">
              3050 Novi Sad, Srbija
            </p>
          </Link>
        </div>
        <form
          ref={formRef}
          method="POST"
          className="w-[330px] sm:w-[430px] flex flex-col gap-2 justify-between"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col gap-2 sm:flex-row justify-between">
            <input
              id="firstname"
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border border-[#e11d48]  py-3 px-3 rounded-md"
              ref={firstNameRef}
            />
            <input
              id="lastname"
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-[#e11d48]  py-3 px-3 rounded-md"
              ref={lastNameRef}
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="border border-[#e11d48] w-full py-3 px-3 rounded-md"
            ref={emailRef}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-[#e11d48] w-full  pb-12 pt-4 px-3 rounded-md"
            ref={messageRef}
          ></textarea>
          <Button
            className="w-full bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-5"
            type="submit"
          >
            Pošalji!
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactUsForm;

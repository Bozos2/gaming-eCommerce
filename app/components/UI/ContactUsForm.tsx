"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import LocationIcon from "@/app/assets/ContactIcons/LocationIcon";
import MailIcon from "@/app/assets/ContactIcons/MailIcon";
import PhoneIcon from "@/app/assets/ContactIcons/PhoneIcon";
import { Button } from "@/components/ui/button";

const ContactUsForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

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
          <div className="w-full  flex flex-row items-center gap-3 p-4  rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background">
            <PhoneIcon />
            <p className="text-foreground text-base font-semibold">
              {" "}
              +387-123-465
            </p>
          </div>
          <div className="w-full  flex flex-row items-center gap-3 p-4 rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background">
            <MailIcon />{" "}
            <p className="text-foreground text-base font-semibold">
              mainheimtrgovina@gmail.com
            </p>
          </div>
          <div className="w-full flex flex-row items-center gap-3 p-4  rounded-md bg-[#1f1f1f] hover:cursor-pointer hover:bg-background">
            <LocationIcon />{" "}
            <p className="text-foreground text-base font-semibold">
              3050 Novi Sad, Srbija
            </p>
          </div>
        </div>
        <form
          method="POST"
          className="w-[330px] sm:w-[430px] flex flex-col gap-2 justify-between"
        >
          <div className="flex flex-col gap-2 sm:flex-row justify-between">
            <input
              id="firstname"
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border border-[#e11d48]  py-3 px-3 rounded-md"
            />
            <input
              id="lastname"
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border border-[#e11d48]  py-3 px-3 rounded-md"
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="border border-[#e11d48] w-full py-3 px-3 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-[#e11d48] w-full  pb-12 pt-4 px-3 rounded-md"
          ></textarea>
          <Button className="w-full bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-5">
            Pošalji!
          </Button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactUsForm;

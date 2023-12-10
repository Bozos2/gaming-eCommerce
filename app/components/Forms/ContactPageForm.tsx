import Link from "next/link";

import LocationIcon from "@/app/assets/ContactIcons/LocationIcon";
import MailIcon from "@/app/assets/ContactIcons/MailIcon";
import PhoneIcon from "@/app/assets/ContactIcons/PhoneIcon";
import { Button } from "@/components/ui/button";
import BreadcrumbsDetail from "../UI/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Kontakt", link: "/contact" },
];

const ContactUsPage = () => {
  return (
    <section className="flex flex-col items-center  min-h-screen py-12 font-poppins">
      <div className="sm:pl-12 mx-8 mb-12 ">
        <div>
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className=" text-4xl sm:text-5xl pt-12 font-black font-roboto">
          Kontaktirajte nas!
        </h1>
        <p className="max-w-2xl pt-6 text-lg font-poppins pr-2 text-gray-400">
          Naš tim stručnjaka stoji vam na usluzi. Javite nam se s pitanjima,
          sugestijama ili komentarima putem kontakt forme ispod ili koristeći
          naše kontakt informacije. Vaša povratna informacija nam je od velikog
          značaja, i radujemo se vašem kontaktu.
        </p>
      </div>
      <form
        method="POST"
        className="w-[330px] sm:w-[630px] flex flex-col gap-2 justify-between  rounded-lg px-12 py-6 mb-12 bg-zinc-950 border shadow-md shadow-neutral-500"
      >
        <label className="mb-8 text-3xl tracking-wide font-medium font-blackops">
          Obratite nam se direktno
        </label>
        <div className="flex flex-col gap-2 sm:flex-row justify-between">
          <input
            id="firstname"
            type="text"
            name="firstName"
            placeholder="Unesite ime..."
            className="border border-[#e11d48]  py-3 px-3 rounded-md w-full"
          />
          <input
            id="lastname"
            type="text"
            name="lastName"
            placeholder="Unesite prezime..."
            className="border border-[#e11d48]  py-3 px-3 rounded-md w-full"
          />
        </div>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Unesite email..."
          className="border border-[#e11d48] w-full py-3 px-3 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Poruka..."
          className="border border-[#e11d48] w-full  pb-12 pt-4 px-3 rounded-md"
        ></textarea>
        <Button className="w-full bg-primary hover:bg-foreground hover:text-primary font-bold rounded-md py-5">
          Pošalji!
        </Button>
      </form>
      <div className="flex flex-row flex-wrap justify-center lg:flex-row gap-4 max-w-2xl">
        <div className="w-[300px]  flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <PhoneIcon width={33} height={33} />
          <span className="ml-1">+213 2131 2132</span>
        </div>
        <div className="w-[300px]  flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <PhoneIcon width={33} height={33} />
          <span className="ml-1">+213 123 457</span>
        </div>
        <div className="w-[300px] flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <MailIcon width={33} height={33} />
          <span className="ml-1">gameloot2@gmail.com</span>
        </div>
        <div className="w-[300px] flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <MailIcon width={33} height={33} />
          <span className="ml-1">gameloottrgovina@gmail.com</span>
        </div>
        <div className="w-[300px]  flex flex-row justify-center items-center bg-zinc-950 px-2 py-4 rounded-lg shadow-md shadow-neutral-500 border hover:shadow-rose-600">
          <LocationIcon width={33} height={33} />
          <span className="ml-1">3050 Novi Sad,Srbija</span>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import TruckIcon from "@/app/assets/CardIcons/TruckIcon";
import SecurePayment from "@/app/assets/CardIcons/SecurePayment";
import ContactIcon from "@/app/assets/CardIcons/ContactIcon";
import WarrantyIcon from "@/app/assets/CardIcons/WarrantyIcon";

const AboutIcons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%" },
  };

  return (
    <motion.section
      className="flex flex-row flex-wrap justify-center gap-12 font-roboto mb-12"
      ref={ref}
    >
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <TruckIcon className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">Brza isporuka unutar 72h</h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Naša brza isporuka unutar 72 sata čini vaše online iskustvo kupovine
          bržim i jednostavnijim nego ikad. Bez obzira da li naručujete
          proizvode za sebe ili kao poklon, možete se osloniti na nas da vam
          vaši željeni artikli stignu na vrata u rekordnom vremenu.
        </p>
        <Link href="/shipping" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            Pogledaj više
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 0.5,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <SecurePayment className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">Siguran način plaćanja</h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Vaša bezbednost je naš prioritet. Nudimo vam pouzdane i sigurne opcije
          plaćanja kako biste bez brige mogli obavljati online transakcije. Bez
          obzira da li se odlučite za plaćanje kreditnom karticom, PayPal-om ili
          nekom drugom opcijom.
        </p>
        <Link href="/online-payments" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            Pogledaj više
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 0.9,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <ContactIcon className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">Korisnička podrška 24/7</h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Nema potrebe za čekanjem - naša stručna korisnička podrška dostupna je
          24 sata dnevno, 7 dana u nedelji, kako biste brzo rešili sve svoje
          nedoumice i upite. Bez obzira kada nam se obratite, naš tim je spreman
          da vam pomogne i pruži sve odgovore.
        </p>
        <Link href="/contact" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            Pogledaj više
          </Button>
        </Link>
      </motion.div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{
          delay: 1.3,
        }}
        className="flex flex-col items-center w-[290px] h-[500px] group rounded-xl hover:cursor-pointer hover:border hover:border-[#e11d48] hover:bg-[#1f1f1f]"
      >
        <WarrantyIcon className="text-[#1f1f1f] group-hover:text-primary pt-1.5" />
        <h1 className="text-xl px-4 text-center">
          7 dana garancije na povrat novca
        </h1>
        <p className="pt-6 px-4 text-center font-poppins">
          Vaše zadovoljstvo je naš prioritet, i zato vam nudimo 7-dnevnu
          garanciju na povrat novca. Ako niste potpuno zadovoljni sa vašom
          kupovinom, jednostavno nas kontaktirajte, a mi ćemo vam vratiti vaš
          novac bez ikakvih pitanja.
        </p>
        <Link href="/warranty" className="mt-6 ml-32 font-poppins">
          <Button
            variant="link"
            className="flex flex-row text-xs text-foreground hover:text-primary"
          >
            <ArrowRightIcon className="mr-1" />
            Pogledaj više
          </Button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default AboutIcons;

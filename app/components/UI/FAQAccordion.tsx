"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="h-[1200px] sm:h-[850px] xl:h-[550px] flex  xl:flex-row flex-col-reverse  justify-around items-center">
      <div className="w-[320px] sm:w-[500px]">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              Kako mogu naručiti svoju 3D gaming figuricu?
            </AccordionTrigger>
            <AccordionContent>
              Da biste naručili svoju omiljenu gaming figuricu, jednostavno
              odaberite proizvod, dodajte ga u košaricu i slijedite upute za
              završetak narudžbe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              Koja je prosečna dostava za gaming figurice?
            </AccordionTrigger>
            <AccordionContent>
              Prosečno vreme dostave za naše gaming figurice je unutar 3-5
              radnih dana.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              Imate li opciju prilagođavanja gaming figurica?
            </AccordionTrigger>
            <AccordionContent>
              Da, nudimo personalizaciju!Imate poseban dio na našem sajtu za
              personalizaciju sopstvene figurice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              Kako se vrši plaćanje narudžbe?
            </AccordionTrigger>
            <AccordionContent>
              Prihvatamo različite načine plaćanja, uključujući kreditne kartice
              i PayPal. Odaberite onu opciju koja vam najviše odgovara prilikom
              završetka narudžbe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b-2">
            <AccordionTrigger className="text-lg pr-1">
              Šta ako nisam zadovoljan svojom narudžbom?
            </AccordionTrigger>
            <AccordionContent>
              Vaše zadovoljstvo je naš prioritet. Ako niste potpuno zadovoljni
              svojom narudžbom, slobodno nas kontaktirajte. Pružit ćemo vam
              podršku u vezi povrata ili zamene.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <motion.div
        ref={ref}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: inView ? "0%" : "100%", opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-4"
      >
        <h1 className="text-4xl sm:text-5xl font-roboto">
          Često postavljana pitanja
        </h1>
        <p className="text-lg font-poppins pt-4">
          Naša selekcija čestih pitanja i odgovora ima za cilj da vam brzo i
          lako pruži potrebne informacije. Sva pitanja su pažljivo odabrana kako
          bismo obuhvatili različite aspekte naših usluga. Odgovori na ta
          pitanja pružaju jasne i detaljne informacije koje vam pomažu da bolje
          razumete našu ponudu. Ako imate bilo kakva dodatna pitanja, slobodno
          nas kontaktirajte. Vaše zadovoljstvo je naš prioritet.
        </p>
      </motion.div>
    </section>
  );
};

export default Faq;

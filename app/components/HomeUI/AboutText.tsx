"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutText = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: inView ? "0%" : "100%", opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12"
    >
      <div className="max-w-2xl mx-3 lg:mr-48 font-roboto">
        <h1 className="text-primary font-bold text-4xl font-roboto">
          Što je Meinham trgovina?
        </h1>
        <p className="pt-4 text-lg">
          Meinheim trgovina je nova online trgovina osnovana 6.Augusta
          2022.godine sa svrhom prodaje gaming figurica.Naše figurice kreiramo s
          3D printerom za izradu figurica.Nalazimo se u Beogradu,trenutno nemamo
          radnju pa jedini nacin za narudžbu ide preko Web stranice.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutText;

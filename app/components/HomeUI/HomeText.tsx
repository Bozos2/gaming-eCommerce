"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const text = `Dobrodosli na naš sajt trgovine 3D gaming figurica.Ovdje možete pronaći figurice kako za sebe tako i za vaše najbliže uz jednostavan način kupovine.Jednim klikom do liste naših prioizvoda.`;

const textArray = text.split(" ");

const HomeText = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {textArray.map((word, index) => {
          return (
            <motion.span
              className="text-white opacity-0 font-poppins"
              key={index}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="my-12 lg:my-4 p-4 h-[850px] overflow-y-auto w-full  max-w-4xl mx-auto rounded-md">
      <div className="mt-4">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 w-full tracking-wider text-left pl-2"
        >
          <h1 className="text-foreground text-6xl sm:text-7xl  xl:text-8xl font-bold font-blackops">
            Dizajniraj <span className="text-primary">figuru</span> po svojoj
            želji
          </h1>
        </motion.div>
        <div className="text-foreground text-xl sm:text-2xl md:text-3xl leading-snug tracking-widest px-3 text-left">
          {renderWords()}
        </div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row m-12 sm:m-0 gap-6 pt-4 sm:pt-16  font-poppins"
        >
          <Button
            asChild
            variant="default"
            className="py-7 px-16 hover:bg-foreground hover:text-primary font-bold shadow-lg shadow-red-700/30"
          >
            <Link href="/home">Kupi sada</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="py-7 px-6 border border-foreground font-medium"
          >
            <Link href="/faq">
              <EnterIcon className="mr-2 h-6 w-6" />
              Kako dizajnirati?
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeText;

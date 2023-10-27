"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/maskota.png";
import img2 from "../../assets/maskota2.png";
import img3 from "../../assets/maskota3.png";

const ImageStyle = {
  width: "350px",
  height: "800px",
};

const MascotImage = () => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={img}
        alt="maskota"
        width={410}
        height={800}
        style={ImageStyle}
      />
    </motion.div>
  );
};

export default MascotImage;

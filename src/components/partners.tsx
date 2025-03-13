"use client";
import { Logos } from "@/assets/images";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

const Partners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-24">
      {/* Text Section */}
      <motion.div 
        variants={textVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
      >
        <h3 className="primary text-4xl md:text-5xl font-bold mb-5">
          Trusted partners <br /> worldwide
        </h3>
        <p className="text-gray-400">
          We&apos;re partners with countless major organisations around the globe
        </p>
      </motion.div>

      {/* Logos Section */}
      <motion.div 
        className="grid grid-cols-2 mt-5 md:mt-0 md:grid-cols-3 gap-5 md:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {Logos.map((logo, index) => (
          <motion.div 
            key={index} 
            variants={logoVariants} 
            custom={index} 
            whileHover={{ scale: 1.05 }} 
            className="cursor-pointer"
          >
            <Image
              src={logo.name}
              alt={logo.alt}
              title={logo.alt}
              width={100}
              height={50}
              className="object-contain grayscale transition-all duration-300 ease-in-out hover:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;

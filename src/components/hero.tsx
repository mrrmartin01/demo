"use client";
import React from "react";
import Slider from "./slider/slider";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative top-5 rounded-[40px] bg-[#63C57B] w-[284.5px] h-[550px] flex items-center justify-center">
        <div className="rounded-4xl bg-[#233375] w-[270px] h-[532px] flex items-center justify-center"></div>
      </div>

      <Slider />
      <div className="flex w-full md:flex-row flex-col items-center justify-between gap-5 px-10 md:px-24  md:py-8 ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex gap-2 md:flex-row flex-col items-start justify-center"
        >
          <h3 className="text-sm">News & Release update</h3>
          <div className="grid grid-col-2">
            <h3 className="text-base">
              June 20, 2022 —{" "}
              <span className="text-blue-500">
                Bomba now has a dollar wallet, activate your account
              </span>
            </h3>
            <h3>
              June 01, 2022 —{" "}
              <span className="text-blue-500">
                {" "}
                Top 10 Summer Vacation Places In 2022
              </span>
            </h3>
          </div>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }} 
        href={""} className="text-lg md:text-xl flex items-center">
          Scroll Down <ArrowDown className="text-emerald-500 w-5 h-5" />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;

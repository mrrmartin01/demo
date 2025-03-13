"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const SlotCard = ({
  title,
  content,
  date,
  imgSrc,
}: {
  title: string;
  content: string;
  date: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      className="relative rounded-xl shadow-lg bg-slate-100 overflow-hidden h-full w-full max-w-sm flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="relative ">
        <div className="absolute top-6 left-6 bg-slate-900 w-[45%] md:w-1/3 h-9 rounded-md z-0" />
        <Button className="text-white w-[45%] md:w-1/3 bg-green-500 hover:bg-green-600 text-xs font-semibold m-5 px-3 mt-5 relative z-10">
          {title}
        </Button>
      </div>
      <div className="p-5">
        <h2 className="text-lg md:text-xl font-bold primary">{content}</h2>
        <p className="text-gray-400 text-sm mt-1">{date}</p>
      </div>
      <div className="-mb-5 -mx-1 ">
        <Image
          src={imgSrc || "/fallback.png"} 
          alt={title}
          title={title}
          width={500}
          height={300}
          className="w-full h-auto object-cover rounded-b-xl"
          loading="lazy"
          priority={false}
        />
      </div>
    </motion.div>
  );
};

export default SlotCard;

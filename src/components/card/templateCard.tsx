"use client"
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const TemplateCard = ({
  header,
  title,
  content,
  bg,
  link,
  imgSrc,
}: {
  header?: string;
  title: string;
  bg: string;
  content: string;
  link: string;
  imgSrc: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={cn(
        bg,
        "flex flex-col  items-start justify-center px-10 rounded-xl w-full max-w-xl overflow-hidden"
      )}
    >
      <div className="pt-10 md:pt-24 ">
        <h5 className="text-xl capitalize text-gray-500">{title}</h5>
      </div>
      <h1 className="font-bold primary text-lg md:text-3xl my-3">{header}</h1>
      <p className="w-full max-w-[75%] text-gray-500">{content}</p>
      <div className="flex   items-start justify-between w-full mt-5">
        <div className="flex flex-col md:flex-row items-start justify-between w-full mt-10 ">
          <div className="">
            <div className="text-blue-500 flex gap-2 items-center">
              <span>{link} now</span>
              <ArrowRight className="w-5 h-5" />
            </div>
            <Separator
              orientation="horizontal"
              className="bg-blue-500 h-0.5 w-full"
            />
          </div>
          <Image
            width={300}
            height={900}
            alt="image"
            src={imgSrc}
            className="flex-1 my-5 md:my-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TemplateCard;

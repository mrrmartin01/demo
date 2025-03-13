"use client";
import SlotCard from "@/components/card/slotCard";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const pressData = [
  {
    title: "Connecting Africa",
    content: "Combining AI, fintech to solve African problems - Ericsson",
    date: "December 06, 2021",
    imgSrc: "/face_recognition.png",
  },
  {
    title: "Tech Labari",
    content: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
    date: "May 24, 2022",
    imgSrc: "/africa_fintech.png",
  },
  {
    title: "Techstars",
    content: "Midterm Report: Techstars Toronto's Second 2021 Class",
    date: "Dec 06, 2021",
    imgSrc: "/image_1.png",
  },
  {
    title: "Medium",
    content: "Wise granted approval to join Zengin, Japan's domestic payment system",
    date: "December 06, 2021",
    imgSrc: "/wide.png",
  },
  {
    title: "Further Africa",
    content: "African startups to participate at Techstars Toronto October 2021 cohort",
    date: "October 23, 2021",
    imgSrc: "/tech_star.png",
  },
  {
    title: "TechCrunch",
    content: "More African startups get into Techstars Toronto",
    date: "October 18, 2021",
    imgSrc: "/tech_star1.png",
  },
];

const PressPage = () => {
  return (
    <div>
      {/* Header Section */}
      <motion.div
        className="h-[90dvh] flex flex-col items-start justify-center space-y-10 bg-slate-100 px-10 md:px-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold primary text-left text-lg md:text-5xl leading-10">
          Latest news and media <br />
          from around the world
        </h1>
        <p className="text-gray-500 text-left w-full md:w-[30%]">
          Please write to us at media@bomba.co if you have a media enquiry.
          We&apos;ll do our best to get back to you as soon as possible.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <div className="text-blue-500 flex gap-2 items-center">
            <span>Get press kit</span>
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </div>
          <Separator
            orientation="horizontal"
            className="bg-blue-500 h-0.5 w-full"
          />
        </motion.div>
      </motion.div>

      {/* News Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 lg:gap-12 xl:gap-16 px-10 md:px-24"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {pressData.map(({ title, content, date, imgSrc }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SlotCard title={title} content={content} date={date} imgSrc={imgSrc}/>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PressPage;

import SlotCard from "@/components/card/slotCard";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";

const Press = () => {
  return (
    <div>
      <div className="h-[70dvh] flex flex-col items-start justify-center space-y-10 bg-slate-100 px-10 md:px-24">
        <h1 className="font-bold primary text-left text-lg md:text-5xl leading-10">
          Latest news and media <br />
          from around the world
        </h1>
        <p className="text-gray-500 text-left w-full max-w-[30%]">
          Please write to us at media@bomba.co if you have a media enquiry.
          We&apos;ll do our best to get back to you as soon as possible.
        </p>
        <div className="">
          <div className="text-blue-500 flex gap-2 items-center">
            <span>Get press kit</span>
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </div>
          <Separator
            orientation="horizontal"
            className="bg-blue-500 h-0.5 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 lg:gap-12 xl:gap-16 px-10 md:px-24">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <SlotCard
            key={index}
            title={
              [
                "Connecting Africa",
                "Tech Labari",
                "Techstars",
                "Medium",
                "Futher Africa",
                "TechCrunch",
              ][index]
            }
            content={
              [
                "Combining AI, fintech to solve African problems - Ericsson",
                "Ghana to Host the 14th Africa Fintech Summit on October 8th",
                "Midterm Report: Techstars Toronto’s Second 2021 Class",
                "Wise granted approval to join Zengin, Japan’s domestic payment system",
                "African startups to participate at Techstars Toronto October 2021 cohort",
                "More African startups get into Techstars Toronto",
              ][index]
            }
            date={
              [
                "December 06, 2021",
                "May 24, 2022 ",
                "Dec 06, 2021",
                "December 06, 2021",
                "October 23, 2021",
                "October 18, 2021",
              ][index]
            }
            imgSrc={
              [
                "/face_recognition.png",
                "/africa_fintech.png",
                "/image_1.png",
                "/wide.png",
                "/tech_star.png",
                "/tech_star1.png",
              ][index]
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Press;

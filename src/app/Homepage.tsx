"use client"
import { CardImages } from "@/assets/images";
import TemplateCard from "@/components/card/templateCard";
import Convert from "@/components/convert";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import { Separator } from "@/components/ui/separator";
import {motion} from "framer-motion"

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <Convert />
      <div className="grid mx-5 md:mx-24">
        <div className="mx-auto mt-10 md:mt-24 w-full max-w-[70%] flex flex-col items-center justify-center">
          <Separator />
          <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hidden md:block text-left md:text-center mb-5 mt-10 font-semibold text-xl md:text-4xl tracking-tighter primary ">
            The Bomba app help our users send & receive money, swap currencies
            across borders and pay bills, safely, conveniently, cheaply and on
            time
          </motion.h1>
          <h1 className="block md:hidden text-left md:text-center mb-5 mt-10 font-semibold text-xl md:text-4xl tracking-tighter primary ">
          The Bomba app is all you need to send money both at home and abroad
          </h1>
          <p className="text-gray-400 w-full max-w-xl text-left md:text-center">
            We are customer centric and focused on offering values to you that
            enable you achieve your financial needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8 lg:gap-12 xl:gap-16">
          {[0, 1, 2, 3].map((index) => (
            <TemplateCard
              key={index}
              title={
                ["swap", "Express", "Refer & Earn", "Bomba Connect"][index]
              }
              header={
                [
                  "Peer to peer marketplace",
                  "Take the express lane",
                  "Make money while you refer",
                  "Deals from top brands",
                ][index]
              }
              content={
                [
                  "Do you worry about unfavourable exchange rates when sending money? Create or accept offers at your preferred rate on Bomba's Peer to peer marketplace. ",
                  "Transact with light speed using Bomba Express. You can send funds at Bomba’s exchange rates to family and friends from the UK & US to 20 African countries.",
                  "Bomba allows you to earn passively through its platform. Refer your friends and family to use Bomba and earn up to £140",
                  "With Bomba Connect, you can pay for and access goods and services from some of the best and trusted brands - at the best rates and with minimal wait time - all within the Bomba App.  ",
                ][index]
              }
              bg={
                [
                  "bg-purple-100",
                  "bg-green-100",
                  "bg-slate-100",
                  "bg-orange-100",
                ][index]
              }
              link={
                ["Swap", "Send", "Share ", "Explore"][index]
              }
              imgSrc={CardImages[index]}
            />
          ))}
        </div>
        <Partners />
      </div>
    </div>
  );
}

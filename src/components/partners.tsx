import { Logos } from "@/assets/images";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-24">
      <div className="">
        <h3 className="primary text-4xl md:text-5xl font-bold mb-5">
          Trusted partners <br /> worldwide
        </h3>
        <p className="text-gray-400">
          We&apos;re partners with countless major organisations around the
          globe
        </p>
      </div>
      <div className="grid grid-cols-2 mt-5 md:mt-0 md:grid-cols-3 gap-5 md:gap-10">
        {Logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.name}
            alt={logo.alt}
            title={logo.alt}
            width={100}
            height={50}
            className="object-contain grayscale transition-all duration-300 ease-in-out hover:grayscale-0 cursor-pointer"
            />
        ))}
      </div>
    </div>
  );
};

export default Partners;

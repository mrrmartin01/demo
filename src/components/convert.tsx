import React from "react";
import CurrencyConverter from "./currency-convert/convertor";

const Convert = () => {
  return (
    <div className="w-full bg-white border-t border-dashed border-purple-500">
      <h1 className="text-center mt-10 font-semibold text-xl md:text-3xl  px-20 md:px-32 primary ">
        We are on a mission to reduce the cost of sending <br />
        money to Africa at an average cost of 1%
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 w-full px-10 md:px-24 items-center justify-evenly mt-10 gap-8">
        <div className="flex flex-col ">
          <h6 className="hidden md:block">&nbsp;</h6> <CurrencyConverter />
        </div>

        <div className="space-y-10 ">
          <h6 className="inline-block align-top text-lg">Why Bomba?</h6>
          <h1 className="text-4xl md:text-7xl font-semibold primary">
            Send & Receive money on your own terms
          </h1>
          <p className="text-gray-500">
            Bomba provides you the luxury of sending money at rates that suit
            you. You can easily send and swap money between{" "}
            <span className="text-gray-900">GBP, USD, NGN</span> and up to 20
            other African countries using Bomba&apos;s &lsquo;
            <span className="green-primary">Swap</span>&rsquo; and &lsquo;
            <span className="green-primary">Express</span>&rsquo; services. Beat
            bank rates, save time and gain more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Convert;

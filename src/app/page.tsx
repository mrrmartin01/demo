import React from "react";
import { Metadata } from "next";
import HomePage from "./Homepage";

export const metadata: Metadata = {
  title: "Home || Bomba",
  description:
    "Join Bomba and be a part of the 500 million people over the wolrd sending money easily across the globe. Bomba - The App you love",
};
const Press = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Press;

import React from "react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import { Input } from "./ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type FooterItems = {
  id: number;
  name: string;
  href: string;
};

type FooterItem = {
  title: string;
  items: FooterItems[];
};

const FooterData: FooterItem[] = [
  {
    title: "Company",
    items: [
      { id: 1, name: "About Us", href: "#" },
      { id: 2, name: "Features", href: "#" },
      { id: 3, name: "Blog", href: "#" },
      { id: 4, name: "Careers", href: "#" },
      { id: 5, name: "Legal", href: "#" },
    ],
  },
  {
    title: "Support",
    items: [
      { id: 1, name: "Help Center", href: "#" },
      { id: 2, name: "WhatsApp", href: "#" },
      { id: 3, name: "Live Chat", href: "#" },
    ],
  },
];

const FooterData2: FooterItems[] = [
  { id: 1, name: "Instagram", href: "https://www.instagram.com" },
  { id: 2, name: "Facebook", href: "https://www.facebook.com" },
  { id: 3, name: "LinkedIn", href: "https://www.linkedin.com" },
  { id: 4, name: "Twitter", href: "https://www.twitter.com" },
];

const Footer = () => {
  return (
    <div className="mx-5 md:mx-24 mt-[10%] mb-10">
      <div className="mt-5">
        <h1 className="primary text-4xl md:text-5xl font-bold mb-5">
          Sign up for free
          <br /> Join thousands of users{" "}
        </h1>
        <Separator />
        <div className="flex flex-col md:flex-row items-start justify-between mt-15">
          <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
            {FooterData.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm primary font-semibold my-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="text-blue-900 hover:text-blue-700"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-auto">
            <h3 className="text-sm primary font-semibold my-2">
              The neo bank for Africans globally
            </h3>
            <p className="text-gray-600">
              Bomba Ltd is a UK-incorporated Company with{" "}
              <br className="hidden md:block" />
              Registration Number (RC. 12551277)
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mt-10 md:mt-24">
          <div className="w-full md:w-auto primary">
            {/* Buttons Section */}
            <div className="grid grid-cols-2 gap-8">
              <Button
                variant="outline"
                className="flex items-center space-x-2 py-5"
              >
                <IoLogoGooglePlaystore className="w-5 h-5" />
                <div>
                  <p className="text-[8px]">Get it on</p>
                  <span className="font-bold">Google Play</span>
                </div>
              </Button>

              <Button
                variant="outline"
                className="flex items-center space-x-2 py-5"
              >
                <IoLogoApple className="w-5 h-5" />
                <div>
                  <p className="text-[8px]">Download on the</p>
                  <span className="font-bold text-lg">App Store</span>
                </div>
              </Button>
            </div>

            {/* Footer Text Section */}
            <div className="mt-4 text-center md:text-left">
              <p className="text-sm">
                © 2022 Bomba Limited. All rights reserved.
              </p>
              <span className="text-sm">
                Terms of Service | Privacy Policy | T&C UK | Cookie Policy
              </span>
            </div>
          </div>

          <div className="mt-5 md:mt-0 w-full md:w-auto">
            <h3 className="text-lg md:text-xl primary font-semibold my-2">
              Stay update on our newsletter
            </h3>
            <div className="flex flex-col md:flex-row space-y-1 ms:space-y-0">
              <Input
                placeholder="Enter your email address"
                className="text-white bg-blue-900 w-full md:w-80   md:rounded-r-none h-10"
              />
              <Button
                variant="outline"
                className="flex items-center h-10 space-x-2 md:rounded-l-none primary"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex items-center justify-evenly">
              {FooterData2.map((item) => (
                <div key={item.id} className="">
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-blue-700 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

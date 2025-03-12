"use client";
import { NavbarData } from "@/data/navbarData";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <header className="border-b border-[#8f98aa]">
      <nav className="flex items-center justify-center gap-5 h-16 w-full">
        {NavbarData.map((nav) => (
          <div
            key={nav.id}
            className="relative"
            ref={nav.dropdown ? dropdownRef : undefined}
          >
            {nav.dropdown ? (
              <button
                onClick={() => handleDropdownToggle(nav.id)}
                className="flex cursor-pointer items-center gap-1 navColor font-push-bold text-sm transition-colors duration-500"
              >
                {nav.name}
                <ChevronDown
                  className={`w-5 h-5 green-primary transition-transform duration-300 ${
                    activeDropdown === nav.id ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href={nav.href || "#"}
                className="flex items-center gap-1 navColor font-push-bold text-sm transition-colors duration-500"
              >
                {nav.name}
              </Link>
            )}

            {nav.dropdown && activeDropdown === nav.id && (
              <div className="absolute top-full left-0 mt-2 w-48 border bg-white rounded-md shadow-lg py-2 z-50">
                {nav.dropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

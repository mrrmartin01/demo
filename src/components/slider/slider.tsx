"use client";

import { useState, useEffect, useRef } from "react";
import { slides } from "./slideData"; // Ensure slideData exports a properly typed array

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection("right");
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection("left");
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setDirection(index > currentSlide ? "right" : "left");
    setCurrentSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (!isTransitioning) {
      slideTimerRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [currentSlide, isTransitioning]);

  return (
    <div className="w-full flex flex-col items-center md:items-end justify-center overflow-hidden">
      <div className="relative w-full overflow-hidden mt-16">
        <div className="relative h-[300px] md:h-[150px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute bottom-4 left-0 w-full flex flex-col md:flex-row md:items-end items-center px-10 md:px-24 space-y-8 md:space-y-0 md:space-x-12 transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0 opacity-100"
                  : index === (currentSlide - 1 + slides.length) % slides.length
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="flex-1">
                <h1 className="primary text-4xl md:text-5xl font-bold">
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </h1>
              </div>

              <div className="flex-1">
                <div className="text-[#233375] text-sm md:align-text-bottom leading-relaxed">
                  {slide.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full">
        <div className="w-full h-0.5 bg-gray-300 rounded-full absolute top-0 transform -translate-y-1/3" />

        <div className="relative flex justify-between w-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-0.5 w-36 rounded-md transition-all cursor-pointer duration-300 ${
                index <= currentSlide ? "bg-blue-700 scale-125" : "bg-transparent"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

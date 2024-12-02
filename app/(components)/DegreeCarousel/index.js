"use client";

import React, { useState, useEffect, useCallback } from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { degreePrograms } from "@/app/utils/programs";

export default function DegreeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Update the number of items per slide based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3); // Large screens
      } else if (window.innerWidth >= 640) {
        setItemsPerSlide(2); // Medium screens
      } else {
        setItemsPerSlide(1); // Small screens
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Set the initial number of items per slide
    handleResize();

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + itemsPerSlide) % degreePrograms.length
    );
  }, [itemsPerSlide]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - itemsPerSlide + degreePrograms.length) %
        degreePrograms.length
    );
  }, [itemsPerSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="m-2 pb-4 px-2 border-2 shadow-lg border-yellow-300 rounded-lg flex items-center flex-col ">
      <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
        Undergraduate Programs
      </h2>
      <div className="relative w-full max-w-6xl mx-auto px-4 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
          }}
        >
          {degreePrograms.map((program) => (
            <div
              key={program.id}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
            >
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 h-full flex flex-col items-center justify-center">
                <RiGraduationCapFill className="text-4xl text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-yellow-800 mb-2 text-center">
                  {program.category}
                </h3>
                <p className="text-sm text-yellow-700 text-center">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-yellow-800 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          aria-label="Previous slide"
        >
          <RiArrowLeftSLine className="text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-yellow-800 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          aria-label="Next slide"
        >
          <RiArrowRightSLine className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

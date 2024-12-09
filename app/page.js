"use client";

import Image from "next/image";
import TitleBar from "./(components)/Titlebar";
import DegreeCarousel from "./(components)/DegreeCarousel";
import GetStarted from "@/public/getstarted.jpg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { SavedPrograms } from "./(components)/SavedPrograms";

const savedCourses = [
  { id: 1, name: "Computer Science", description: "Learn computational theory." },
  { id: 2, name: "Nursing BSN", description: "Care for patients." },
 
];

export default function Home() {
  return (
    <div className="mb-6 ">
      <TitleBar title="Home"/>
      <DegreeCarousel />

      {/* Saved/Favorited Courses Card */}
      <SavedPrograms savedCourses={savedCourses} />

      {/* Get Started Card with Image Background */}
      <div className="my-4 relative m-2 rounded-lg shadow-lg transition-all duration-300 opacity-0 animate-fade-in">
        <div className="absolute inset-0 z-0  ">
          <Image
            src={GetStarted}
            // Add your background image URL here
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-100 rounded-2xl "
          />
        </div>
        <div className="relative z-9 px-8 py-2 bg-white bg-opacity-50 rounded-lg border-2 border-yellow-300 shadow-lg ">
          <h2 className="text-2xl font-bold text-yellow-800 mb-1">
            Get Started!
          </h2>
          <p className="text-lg font-semibold text-gray-600 mb-1">
            Start comparing degree programs and find your perfect fit!
          </p>
          <button className="bg-yellow-400 text-yellow-800 py-2 px-4 rounded-lg text-lg font-bold flex items-center">
            Start Now
            <FaRegArrowAltCircleRight className="ml-2 font-semibold" />
          </button>
        </div>
        <div className="mb-20 mt-20"></div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import TitleBar from "./(components)/Titlebar";
import DegreeCarousel from "./(components)/DegreeCarousel";
import GetStarted from "@/public/getstarted.jpg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { SavedPrograms } from "./(components)/SavedPrograms";

const savedCourses = [
  { id: 1, name: "Data Science", description: "Analyze complex data." },
  { id: 2, name: "Marketing", description: "Master market strategies." },
  { id: 3, name: "Nursing", description: "Care for patients." },
  { id: 4, name: "Psychology", description: "Explore human behavior." },
  {
    id: 5,
    name: "Computer Science",
    description: "Learn computational theory.",
  },
];

export default function Home() {
  return (
    <div className="mb-6 ">
      <TitleBar title="Home"/>
      <DegreeCarousel />

      {/* Saved/Favorited Courses Card */}
      <SavedPrograms savedCourses={savedCourses} />

      {/* Get Started Card with Image Background */}
      <div className="my-8 relative m-4 rounded-2xl shadow-lg">
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
        <div className="relative z-9 p-8 bg-white bg-opacity-50 rounded-2xl border-2 border-yellow-300 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">
            Get Started!
          </h2>
          <p className="text-lg font-semibold text-gray-600 mb-4">
            Start comparing degree programs and find your perfect fit!
          </p>
          <button className="bg-yellow-400 text-yellow-800 py-2 px-4 rounded-2xl text-lg font-bold flex items-center">
            Start Now
            <FaRegArrowAltCircleRight className="ml-2 font-semibold" />
          </button>
        </div>
        <div className="mb-20 mt-20"></div>
      </div>
    </div>
  );
}

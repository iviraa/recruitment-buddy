"use client";
import { use } from "react";
import { degreePrograms } from "@/app/utils/programs";
import { IoCall } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import Link from "next/link";

const DegreeDetails = ({ params }) => {
  const { id } = use(params);

  const program = degreePrograms.find((p) => p.id.toString() === id);
  return (
    <div className=" mx-4 my-6 p-6 border border-yellow-400 shadow-lg rounded-lg bg-white">
      <h1 className="text-2xl font-bold text-yellow-800">{program.name}</h1>
      <div className="text-sm text-gray-500 mt-1">
        Program Category: {program.category}
      </div>
      <div className="text-base italic text-gray-700 mt-1">
        {program.short_description}
      </div>
      <hr className="mt-4" />
      <p className="text-base text-gray-700 mt-4">{program.long_description}</p>
      <hr className="mt-4" />
      <div className="text-base flex  text-gray-700 mt-4">
        <p className="font-semibold mr-1">Hours to Degree: </p>{" "}
        {program.hours_to_degree}
      </div>
      <div className="text-base flex  text-gray-700 mt-4">
        <p className="font-semibold mr-1">Requirements: </p>{" "}
        {program.requirements}
      </div>
      <div className="text-base flex  text-gray-700 mt-4">
        <p className="font-semibold mr-1">Accreditation: </p>{" "}
        {program.accreditation}
      </div>

      <hr className="mt-4" />
      <div className=" mt-4 flex justify-around ">
        <Link href="/programs/compare">
          <button className="mt-2 sm:mt-0 px-2 py-2 text-sm bg-yellow-400 text-yellow-900 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group">
            Compare
            <MdCompareArrows className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
        <button className="mt-2 sm:mt-0 px-2 py-2 text-sm bg-yellow-800 text-yellow-400 rounded-full hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group">
          Contact Us
          <IoCall className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default DegreeDetails;

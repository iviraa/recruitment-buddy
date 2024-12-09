"use client";
import { IoCall } from "react-icons/io5";
import { MdCompareArrows, MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";

const FacultyDetails = () => {
  return (
    <div className="mx-4 max-w-4xl my-8 p-6 border border-yellow-400 shadow-lg rounded-lg bg-white">
      {/* Program Title */}
      <h1 className="text-3xl font-bold text-yellow-800">
        Computer Science BS
      </h1>

      {/* Program Category */}
      <div className="text-sm text-gray-500 mt-1">
        <span className="font-semibold">Program Category:</span> BS
      </div>

      <hr className="mt-4" />

      {/* Faculty Details */}
      <h2 className="text-xl font-semibold text-yellow-500 mt-4">
        Dr. Serene Aryal
      </h2>
      <div className="text-base font-semibold italic text-yellow-800 mt-2">
        Dr. Serene Aryal is a seasoned faculty member in the field of computer
        science. With a degree in computer science from the University of San
        Marino, she has a deep understanding of the latest technologies and
        trends in the field. Her expertise lies in designing and implementing
        cutting-edge software solutions, and she is passionate about helping
        students navigate the complex world of technology.
      </div>
      <hr className="mt-4" />
      <div className="text-base font-semibold text-gray-700 mt-2">
        <p className="font-bold text-lg">Qualifications:</p>
        <ul className="list-disc list-inside mt-1 ml-4">
          <li>Ph.D. in Computer Science</li>
          <li>M.S. in Artificial Intelligence</li>
          <li>Bachelor's in Software Engineering</li>
        </ul>
      </div>

      <p className="text-base font-semibold text-gray-700 mt-2">
        <span className="font-bold text-lg ">Contact Email:</span>{" "}
        Serene.Aryal@usm.edu
      </p>
      <p className="text-base font-semibold text-gray-700 mt-2">
        <span className="font-bold text-lg">Office Hours:</span> Mon-Fri, 10 AM - 3
        PM
      </p>

      <hr className="mt-6" />

      {/* Action Buttons */}
      <div className="mt-6 flex justify-around">
        <Link href="/programs">
          <button className="mt-2 sm:mt-0 px-4 py-2 text-sm bg-yellow-400 text-yellow-900 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group">
            Send an Email
            <MdEmail className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
        <Link href="/visit">
          <button className="mt-2 sm:mt-0 px-4 py-2 text-sm bg-yellow-800 text-yellow-400 rounded-full hover:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group">
            Schedule Visit
            <FaCalendar className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FacultyDetails;

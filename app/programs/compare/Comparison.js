"use client";
import React from "react";
import { IoMdList } from "react-icons/io";
const ProgramCompare = ({ selectedPrograms, removeProgram }) => {
  console.log(selectedPrograms);



  

  return (
    <div className="grid grid-cols-2 min-h-[60vh] gap-2 mt-2">
      {/* Comparison Box 1 */}
      <div
        className={`p-2 border-2 rounded-lg shadow-lg ${
          selectedPrograms[1] ? " border-yellow-300 " : "border-gray-300"
        }`}
      >
        {selectedPrograms[0] ? (
          <div className="relative font-semibold">
            <button
              className="absolute -top-4 -right-4 font-bold text-yellow-800 rounded-full w-6 h-6 flex bg-yellow-400 items-center justify-center"
              onClick={() => removeProgram(0)}
            >
              ✕
            </button>
            <div className="program-details">
              <h2 className="text-base font-bold">
                {selectedPrograms[0].name}
              </h2>

              <div>
                <p className="text-sm italic text-yellow-600">
                  {selectedPrograms[0].short_description}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800 ">
                  Description
                </h3>
                <p className="font-semibold text-gray-500">
                  {selectedPrograms[0].long_description}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Hours to Degree
                </h3>
                <p className="font-semibold text-gray-500">
                  {selectedPrograms[0].hours_to_degree}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Requirements
                </h3>
                <p className="font-semibold text-gray-500">
                  {selectedPrograms[0].requirements}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Accreditation
                </h3>
                <p className="font-semibold text-gray-500">
                  {selectedPrograms[0].accreditation}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-base flex h-full items-center font-semibold text-gray-500">
            <p className="mx-auto flex items-center ">
              Select a program <IoMdList className="ml-2" />
            </p>
          </div>
        )}
      </div>

      {/* Comparison Box 2 */}
      <div
        className={`p-2 border-2 rounded-lg shadow-lg ${
          selectedPrograms[1] ? " border-yellow-300 " : "border-gray-300"
        }`}
      >
        {selectedPrograms[1] ? (
          <div className="relative">
            <button
              className="absolute -top-4 -right-4 font-bold text-yellow-800 rounded-full w-6 h-6 flex bg-yellow-400 items-center justify-center"
              onClick={() => removeProgram(1)}
            >
              ✕
            </button>
            <div className="program-details">
              <h2 className="text-base font-bold">
                {selectedPrograms[1].name}
              </h2>

              <div>
                <p className="text-sm italic font-semibold text-yellow-600">
                  {selectedPrograms[1].short_description}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800 ">
                  Description
                </h3>
                <p className=" font-semibold text-gray-500">
                  {selectedPrograms[1].long_description}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Hours to Degree
                </h3>
                <p className=" font-semibold text-gray-500">
                  {selectedPrograms[1].hours_to_degree}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Requirements
                </h3>
                <p className=" font-semibold text-gray-500">
                  {selectedPrograms[1].requirements}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Accreditation
                </h3>
                <p className="font-semibold text-gray-500">
                  {selectedPrograms[1].accreditation}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-base flex h-full items-center font-semibold text-gray-500">
            <p className="mx-auto flex items-center ">
              Select a program <IoMdList className="ml-2" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgramCompare;

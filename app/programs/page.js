"use client";
import React, { useState } from "react";
import TitleBar from "../(components)/Titlebar";
import SearchBar from "./SearchBar";
import { degreePrograms } from "@/app/utils/programs";
import { RiArrowRightLine } from "react-icons/ri";

const items = [
  { id: 1, name: "Computer Science", category: "Computer Science" },
  { id: 2, name: "Business Administration", category: "Business" },
  { id: 3, name: "Psychology", category: "Psychology" },
  { id: 4, name: "Nursing", category: "Nursing" },
];

const Programs = () => {
  const [filteredItems, setFilteredItems] = useState(degreePrograms);
  let count = 1;

  return (
    <div className="">
      <TitleBar title="Programs" />
      <div className="mx-4 ">
        <SearchBar
          items={degreePrograms}
          onFilter={(results) => setFilteredItems(results)}
        />
        <div className="mt-8 space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-row justify-between items-start p-2 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
            >
              <div className="flex items-center flex-row ">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <div className="w-5 h-5  text-yellow-800 flex items-center justify-center rounded-full font-semibold text-lg">
                    {count++}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
              <button className="mt-2 sm:mt-0 px-2 py-2 text-sm bg-yellow-400 text-yellow-900 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group">
                Details
                <RiArrowRightLine className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <p className="text-center text-gray-600">
              No programs match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;

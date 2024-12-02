"use client";
import React, { useState } from "react";
import TitleBar from "../(components)/Titlebar";
import SearchBar from "@/app/programs/SearchBar";
import { scholarshipPrograms } from "@/app/utils/programs";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Scholarships = () => {
  const router = useRouter();

  const handleRoute = (id) => {
    router.push(`/scholarships/${id}`);
  };

  const [filteredItems, setFilteredItems] = useState(scholarshipPrograms);
  let count = 1;

  return (
    <div className="">
      <TitleBar title="Scholarships;" />
      <div className="mx-4 ">
        <SearchBar
          items={scholarshipPrograms}
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
                    {item.id}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-base font-bold text-red-600">
                      ${item.amount}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRoute(item.id)}
                className="mt-2 sm:mt-0 px-2 py-2 text-sm bg-yellow-400 text-yellow-900 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group"
              >
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

export default Scholarships;

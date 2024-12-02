"use client";

import { useState, useEffect, useRef } from "react";
import ProgramCompare from "./Comparison";
import { degreePrograms } from "@/app/utils/programs";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
// Import the ProgramCompare component

// Sample data for demonstration, replace with your data

const DropdownSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([null, null]);
  const dropdownRef = useRef(null); // Reference to the dropdown
  const inputRef = useRef(null); // Reference to the search input

  // Filter programs based on search query
  const filteredPrograms = degreePrograms.filter((program) =>
    program.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle selecting a program
  const selectProgram = (program, index) => {
    const updatedPrograms = [...selectedPrograms];
    updatedPrograms[index] = program;
    setSelectedPrograms(updatedPrograms);
    setSearchQuery(""); // Optionally clear search input when a program is selected
  };

  // Handle removing a program
  const removeProgram = (index) => {
    const updatedPrograms = [...selectedPrograms];
    updatedPrograms[index] = null;
    setSelectedPrograms(updatedPrograms);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setSearchQuery(""); // Optionally clear search input
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectProgram = (program) => {
    if (!selectedPrograms[0]) {
      selectProgram(program, 0);
    } else if (!selectedPrograms[1]) {
      selectProgram(program, 1);
    }
    setSearchQuery("");
  };

  return (
    <div className="px-2">
      <div className="relative">
        {/* Search Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Search programs..."
          className="w-full p-2 pl-10 pr-10 border-2 shadow-lg rounded-lg focus:outline-yellow-500 bg-white "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
        {searchQuery && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500 hover:text-yellow-700"
            onClick={() => setSearchQuery("")}
          >
            <RiCloseLine className="text-xl" />
          </button>
        )}

        {/* Dropdown List */}
        {searchQuery && filteredPrograms.length > 0 && (
          <ul
            ref={dropdownRef}
            className="absolute z-10 w-full bg-white border-2 border-yellow-400 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg"
          >
            {filteredPrograms.map((program) => (
              <li
                key={program.id}
                className="p-3 cursor-pointer hover:bg-yellow-100 transition-colors duration-150 text-yellow-800"
                onClick={() => handleSelectProgram(program)}
              >
                {program.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ProgramCompare
        selectedPrograms={selectedPrograms}
        selectProgram={selectProgram}
        removeProgram={removeProgram}
      />
    </div>
  );
};

export default DropdownSearch;

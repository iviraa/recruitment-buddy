"use client";
import React, { useState } from "react";
import { RiSearchLine, RiFilterLine } from "react-icons/ri";

const SearchBar = ({ items, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filters = ["Ascending", "Descending"]; // Example additional filters

  const handleSearch = (term, category) => {
    const filteredItems = items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(term.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    onFilter(filteredItems);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        {/* Filter Icon Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowFilterDropdown((prev) => !prev)}
            className="p-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            <RiFilterLine className="text-xl" />
          </button>
          {showFilterDropdown && (
            <div className="absolute z-10 bg-white shadow-md rounded-lg mt-2 right-0 translate-x-full w-48">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    console.log(`Filter selected: ${filter}`); 
                    setShowFilterDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-yellow-400"
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Search Bar */}
        <div className="flex items-center bg-white p-2 rounded-lg shadow-md w-full">
          <RiSearchLine className="text-gray-500 text-lg mx-2" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch(e.target.value, selectedCategory);
            }}
            className="w-full border-none focus:outline-none text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";

const Dropdown = ({ label, options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative mb-4">
      <label className="block text-sm font-medium text-yellow-700 mb-1">
        {label}
      </label>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full pl-10 pr-3 py-2 text-base text-gray-400 border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md cursor-pointer"
      >
        {selectedValue || "Fall 2025"}
      </div>
      {isOpen && (
        <div
          style={{ zIndex: 9999 }}
          className="absolute mt-2 w-full  bg-white border border-gray-300 shadow-lg rounded-md"
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 hover:bg-yellow-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

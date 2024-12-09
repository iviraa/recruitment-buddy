"use client";

import React, { useState } from "react";
import {
  RiCalendar2Line,
  RiUser3Line,
  RiPhoneLine,
  RiMailLine,
  RiBookOpenLine,
} from "react-icons/ri";
import dayjs from "dayjs";
import Dropdown from "./Dropdown";

const InputField = ({
  id,
  label,
  icon,
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <div className="mb-4">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-yellow-700 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        id={id}
        className="block w-full pl-10 pr-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  </div>
);

const CalendarDropdown = ({ selectedDate, onDateSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const generateCalendar = () => {
    const startOfMonth = currentMonth.startOf("month");
    const endOfMonth = currentMonth.endOf("month");
    const daysInMonth = [];

    for (
      let day = startOfMonth;
      day.isBefore(endOfMonth, "day");
      day = day.add(1, "day")
    ) {
      daysInMonth.push(day);
    }

    return daysInMonth;
  };

  const handleDateClick = (date) => {
    onDateSelect(date);
    setIsOpen(false); // Close the calendar after selecting a date
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center space-x-2 mt-3 ml-3"
      >
        <RiCalendar2Line className="h-5 w-5 ml-1/2 text-yellow-400" />
        <span className="text-gray-400 text-base">
          {selectedDate ? selectedDate.format("MMM D, YYYY") : "Select a date"}
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
            >
              &lt;
            </button>
            <span className="font-semibold">
              {currentMonth.format("MMMM YYYY")}
            </span>
            <button
              onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
            >
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {generateCalendar().map((date) => (
              <div
                key={date.format("YYYY-MM-DD")}
                onClick={() => handleDateClick(date)}
                className={`cursor-pointer rounded-full ${
                  date.isSame(selectedDate, "day")
                    ? "bg-yellow-400 text-white"
                    : ""
                }`}
              >
                {date.date()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CampusVisitScheduler = () => {
  const [Name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [startTerm, setStartTerm] = useState("");
  const [visitDate, setVisitDate] = useState(null);
  const [inquiry, setInquiry] = useState("");

  const handleScheduleVisit = () => {
    // Handle scheduling logic here
    console.log({ Name, phone, email, startTerm, visitDate });
    // You could call an API or update state in a parent component here
  };

  return (
    <div className="bg-white mx-6 p-6 rounded-lg shadow-lg max-w-md">
      <h2 className="text-2xl font-bold text-yellow-800 mb-6 text-center ">
        Schedule Your Visit
      </h2>
      <div className="space-y-4 ">
        <InputField
          id="Name"
          label="Name"
          icon={<RiUser3Line className="h-5 w-5 text-yellow-400" />}
          value={Name}
          onChange={setName}
          placeholder="John"
          
        />

        <InputField
          id="phone"
          label="Phone Number"
          icon={<RiPhoneLine className="h-5 w-5 text-yellow-400" />}
          value={phone}
          onChange={setPhone}
          type="tel"
          placeholder="(123) 456-7890"
        />
        <InputField
          id="email"
          label="Email Address"
          icon={<RiMailLine className="h-5 w-5 text-yellow-400" />}
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="john@example.com"
        />
        <div className="mb-4">
          <label
            htmlFor="startTerm"
            className="block text-sm font-medium text-yellow-700 mb-1"
          >
            Anticipated Start Term
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiBookOpenLine className="h-5 w-5 text-yellow-400" />
            </div>
            <Dropdown
              options={["Spring 2025", "Fall 2025", "Spring 2026", "Fall 2026"]}
              selectedValue={startTerm}
              onSelect={setStartTerm}
            />
          </div>
        </div>
        <InputField
          id="question"
          label="Submit your inquiry"
          icon={<RiMailLine className="h-5 w-5 text-yellow-400" />}
          value={inquiry}
          onChange={setInquiry}
          type="email"
          placeholder="Add your inquiries here"
        />
        <div className="mb-4">
          <label
            htmlFor="visitDate"
            className="block text-sm font-medium text-yellow-700 mb-1"
          >
            Preferred Visit Date
          </label>
          <CalendarDropdown
            selectedDate={visitDate}
            onDateSelect={setVisitDate}
          />
        </div>
        <button
          onClick={handleScheduleVisit}
          className=" flex items-center justify-center mx-auto py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          <p>Schedule Visit</p>
        </button>
      </div>
    </div>
  );
};

export default CampusVisitScheduler;

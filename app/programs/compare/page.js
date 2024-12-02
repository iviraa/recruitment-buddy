"use client";
import React from "react";
import DropdownSearch from "./CourseSearch";
import TitleBar from "@/app/(components)/Titlebar";

const ComparePrograms = () => {
  return (
    <div>
      <TitleBar title="Compare Programs" />
      <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center ">
        Compare Degree Programs
      </h2>
      <DropdownSearch />
    </div>
  );
};

export default ComparePrograms;

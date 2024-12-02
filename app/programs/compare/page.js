"use client";
import React from "react";
import DropdownSearch from "./CourseSearch";
import TitleBar from "@/app/(components)/Titlebar";

const ComparePrograms = () => {
  return (
    <div>
      <TitleBar title="Compare Programs" />
      <DropdownSearch />
    </div>
  );
};

export default ComparePrograms;

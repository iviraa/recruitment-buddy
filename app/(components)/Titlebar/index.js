"use client";

import React from "react";
import { TbSchool } from "react-icons/tb";

function TitleBar({ title, isActive = true }) {
  if (!isActive) return null;

  return (
    <div className="sticky top-0 z-10 bg-yellow-400 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-yellow-700 ml-4">{title}</h1>
          <TbSchool className="text-3xl text-yellow-700 mr-4" />
        </div>
      </div>
    </div>
  );
}

export default TitleBar;

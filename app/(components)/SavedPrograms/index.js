import React from "react";
import { RiBookmarkLine, RiArrowRightLine } from "react-icons/ri";

export function SavedPrograms({ savedCourses }) {
  return (
    <div className="my-8 m-2 bg-white p-6 rounded-lg shadow-lg border-2 border-yellow-300 ">
      <div className="text-2xl font-semibold text-yellow-800 mb-6 flex items-center justify-center ">
        <RiBookmarkLine className="mr-2 text-yellow-800" />
        Your Saved Programs
      </div>
      <div className="space-y-4">
        {savedCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-row justify-between items-start p-2 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in"
          >
            <div className="flex items-center flex-row ">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="w-10 h-10 bg-yellow-400 text-white flex items-center justify-center rounded-full font-semibold text-lg">
                  {course.id}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                </div>
              </div>
            </div>
            <button className="mt-2 sm:mt-0 px-2 py-2 text-sm bg-yellow-400 text-yellow-900 rounded-full hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-colors duration-300 flex items-center group">
              Details
              <RiArrowRightLine className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

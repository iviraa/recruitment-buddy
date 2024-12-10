"use client";

import React, { useState } from "react";
import { RiMenu3Line, RiNotification3Line } from "react-icons/ri";
import Profile from "@/public/profile2.jpg";
import Image from "next/image";

function TitleBar({ title, isActive = true }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationCount = 5;

  if (!isActive) return null;

  return (
    <div className="sticky top-0 z-10 bg-yellow-400 shadow-md mb-4">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between ml-2">
          <div className="flex items-center space-x-3">
            <RiMenu3Line className="text-2xl text-yellow-700 cursor-pointer" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-yellow-800"></span>
           
          </div>
          <div className="flex items-center space-x-4 mr-2">
            <div className="relative">
              <RiNotification3Line
                className="text-2xl text-yellow-700 cursor-pointer"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <div className="px-4 py-2 text-sm text-gray-700">
                    You have {notificationCount} new notifications
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Image
                src={Profile}
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;

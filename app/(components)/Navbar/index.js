"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome5Line, RiHome5Fill } from "react-icons/ri";
import { RiBookOpenLine, RiBookOpenFill } from "react-icons/ri";
import { RiAwardLine, RiAwardFill } from "react-icons/ri";
import { RiMapPin2Line, RiMapPin2Fill } from "react-icons/ri";
import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: RiHome5Line, activeIcon: RiHome5Fill },
    {
      href: "/programs",
      label: "Programs",
      icon: RiBookOpenLine,
      activeIcon: RiBookOpenFill,
    },
    {
      href: "/scholarships",
      label: "Scholarships",
      icon: RiAwardLine,
      activeIcon: RiAwardFill,
    },
    {
      href: "/visit",
      label: "Campus Visit",
      icon: RiMapPin2Line,
      activeIcon: RiMapPin2Fill,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-yellow-400 px-4 py-2">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.activeIcon : item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center"
            >
              <div
                className={`p-2 rounded-full ${
                  isActive ? "bg-yellow-500" : "bg-transparent"
                } transition-all duration-300`}
              >
                <Icon
                  className={`text-2xl ${
                    isActive ? "text-white" : "text-yellow-800"
                  }`}
                />
              </div>
              <span
                className={`text-xs mt-1 ${
                  isActive ? "text-yellow-800 font-semibold" : "text-yellow-700"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;

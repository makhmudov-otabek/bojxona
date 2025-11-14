"use client";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaUserAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div
      className={`${
        pathName === "/home"
          ? "/block"
          : pathName === "/kompleksAudit"
          ? "block"
          : "hidden"
      }`}
    >
      <div className="flex justify-between gap-10 p-4">
        <div className="flex items-center gap-3 flex-1">
          <button>
            <RxHamburgerMenu
              size={24}
              strokeWidth={0.5}
              className="cursor-pointer"
            />
          </button>
          <div className="flex-1">
            <form className="flex items-center gap-2">
              <label htmlFor="search">
                <CiSearch
                  size={26}
                  strokeWidth={0.5}
                  className="pointer-events-none"
                />
              </label>

              <input
                id="search"
                type="search"
                name="search"
                className="w-full text-xl border-0 border-b-2 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 bg-transparent duration-200"
              />
            </form>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <button>
              <FaBell size={24} className="text-[#508afe] cursor-pointer" />
            </button>
          </div>
          <div>
            <button className="w-10 h-10 p-2 rounded-full bg-[#508afe] cursor-pointer">
              <FiUser size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

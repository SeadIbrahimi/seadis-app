import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="border-b max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to='/'
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="font-extrabold self-center text-2xl whitespace-nowrap ">
            <span className="font-bold text-green-400">My</span> App
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

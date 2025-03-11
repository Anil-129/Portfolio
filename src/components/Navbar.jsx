import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600">
        Anil Kumar
      </h1>

      <div className="space-x-6">
        <Link
          to="/"
          className="text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/skills"
          className="text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 hover:underline"
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 hover:underline"
        >
          Projects
        </Link>
        <Link
          to="/experience"
          className="text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 hover:underline"
        >
          Experience
        </Link>
        <Link
          to="/education"
          className="text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 hover:underline"
        >
          Education
        </Link>
        <Link
          to="/contact"
          className="text-lg font-semibold transition-all duration-300 hover:text-gray-300 hover:scale-105 hover:underline"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

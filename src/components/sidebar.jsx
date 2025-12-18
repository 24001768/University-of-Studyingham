import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import unilogo from "../Image/unilogo.png"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 right-[-10px] bg-red-900 text-white px-2 py-1 rounded"
      >
        <FiMenu size={22} />
      </button>

      <div
        className={`bg-red-900 text-white min-h-screen p-5 transition-all duration-300
          ${isOpen ? "w-64 rounded" : "w-0 overflow-hidden rounded-none"}`}
      >
        {isOpen && (
          <>
            <h2 className="text-xl font-bold mb-6">Student Portal</h2>


             <div className="mb-6">
              <img
                src={unilogo}
                alt="University Logo"
                className="w-40 h-40 rounded mx-auto"
              />
            </div>
            <nav className="space-y-4">
              <Link to="/dashboard" className="block hover:text-gray-300">
                Dashboard
              </Link>
              <Link to="/attendance" className="block hover:text-gray-300">
                Attendance
              </Link>
              <Link to="/resources" className="block hover:text-gray-300">
                Resources
              </Link>
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;



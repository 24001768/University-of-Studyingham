import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      
      <h2 className="text-xl font-bold mb-6">
        Student Portal
      </h2>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block hover:text-gray-300"
        >
          Dashboard
        </Link>

        <Link
          to="/attendance"
          className="block hover:text-gray-300"
        >
          Attendance
        </Link>

        <Link
          to="/resources"
          className="block hover:text-gray-300"
        >
          Resources
        </Link>
      </nav>

    </div>
  );
};

export default Sidebar;


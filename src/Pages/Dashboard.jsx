import React from "react";
import BasicTable from "../BasicTable.jsx";
import Checkin from "../Checkin.jsx";
import UpcomingLectures from "../UpcomingLectures.jsx";
import ModuleInsight from "../ModuleInsight.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-5 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Student Dashboard
        </h1>
        <p className="text-xl text-gray-600">
          Track your classes and attendance
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto">
        <div className="lg:flex-1">
          <div className="mb-6">
            <BasicTable />
          </div>
          <Checkin />
        </div>

        <div className="lg:flex-1">
          <div className="mb-6">
            <UpcomingLectures />
          </div>
          <ModuleInsight />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

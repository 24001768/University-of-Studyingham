import React from "react";
import AttendanceDetails from "../AttendanceDetails";
import LectureMissed from "../LectureMissed";

const AttendancePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5 space-y-8">
      <AttendanceDetails />
      <LectureMissed />
    </div>
  );
};

export default AttendancePage;

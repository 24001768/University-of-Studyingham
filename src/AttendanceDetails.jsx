import { useState } from 'react';

const AttendanceDetails = () => {
  const [attendance, setAttendance] = useState({
    studentName: "Lewis Hamilton",
    studentID: "2500106",
    level: "I",
    attendance: 65,
    absence: 25,
  });

  const total = attendance.attendance + attendance.absence;
  const attendancePercentage = (attendance.attendance / total) * 100;
  const absencePercentage = (attendance.absence / total) * 100;

  return (
      <div className="attendance-details max-w-4xl mx-auto bg-white rounded-lg shadow-md p-5">
        <h2 className="text-gray-800 text-2xl font-semibold mb-5 text-center">
          Attendance Details
        </h2>

        <div className="attendance-layout flex flex-col lg:flex-row gap-5">
         
          <div className="table-section flex-1">
            <div className="column-table rounded-lg overflow-hidden border border-gray-300">
              
              <div className="column-row flex border-b border-gray-300">
                <div className="column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">
                  Student Name
                </div>
                <div className="column-value w-3/5 p-4 text-gray-700">
                  {attendance.studentName}
                </div>
              </div>

              <div className="column-row flex border-b border-gray-300">
                <div className="column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">
                  Student ID
                </div>
                <div className="column-value w-3/5 p-4 text-gray-700">
                  {attendance.studentID}
                </div>
              </div>

              <div className="column-row flex border-b border-gray-300">
                <div className="column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">
                  Level
                </div>
                <div className="column-value w-3/5 p-4 text-gray-700">
                  {attendance.level}
                </div>
              </div>

              <div className="column-row flex border-b border-gray-300">
                <div className="column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">
                  Attendance
                </div>
                <div className="column-value w-3/5 p-4 text-gray-700">
                  {attendance.attendance}
                </div>
              </div>

              <div className="column-row flex">
                <div className="column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">
                  Absence
                </div>
                <div className="column-value w-3/5 p-4 text-gray-700">
                  {attendance.absence}
                </div>
              </div>

            </div>
          </div>

         
          <div className="chart-section flex-1 flex flex-col items-center justify-center">
            <h3 className="text-gray-800 text-xl font-semibold mb-5">
              Attendance Overview
            </h3>

            <div className="pie-chart relative w-48 h-48 rounded-full mb-5">
              <div
                className="chart-slice w-full h-full rounded-full"
                style={{
                  background: `conic-gradient(
                    #28a745 0% ${attendancePercentage}%,
                    #dc3545 ${attendancePercentage}% 100%
                  )`,
                }}
              >
                <div className="chart-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-800">
                    {Math.round(attendancePercentage)}%
                  </span>
                </div>
              </div>
            </div>

            
            <div className="chart-legend flex flex-col gap-3">
              <div className="legend-item flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-green-600"></div>
                <span className="text-gray-700">
                  Attendance: {attendance.attendance} (
                  {Math.round(attendancePercentage)}%)
                </span>
              </div>

              <div className="legend-item flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-red-600"></div>
                <span className="text-gray-700">
                  Absence: {attendance.absence} (
                  {Math.round(absencePercentage)}%)
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default AttendanceDetails;
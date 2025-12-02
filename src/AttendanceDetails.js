import React, { useState } from 'react';

const AttendanceDetails = () => {
  const [attendance] = useState({
    studentName: 'Lewis Hamilton',
    studentID: '2500106',
    level: 'I',
    attendance: 65,
    absence: 25
  });

  const total = attendance.attendance + attendance.absence;
  const attendancePercentage = (attendance.attendance / total) * 100;
  const absencePercentage = (attendance.absence / total) * 100;

  return React.createElement('div', { className: 'App bg-gray-100 min-h-screen p-5 font-sans' },
    React.createElement('div', { className: 'attendance-details max-w-4xl mx-auto bg-white rounded-lg shadow-md p-5' },
      React.createElement('h2', { className: 'text-gray-800 text-2xl font-semibold mb-5 text-center' }, 'Attendance Details'),
      React.createElement('div', { className: 'attendance-layout flex flex-col lg:flex-row gap-5' },
        // Table Section
        React.createElement('div', { className: 'table-section flex-1' },
          React.createElement('div', { className: 'column-table rounded-lg overflow-hidden border border-gray-300' },
            // Student Name Row
            React.createElement('div', { className: 'column-row flex border-b border-gray-300' },
              React.createElement('div', { className: 'column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300 flex items-center' }, 'Student Name'),
              React.createElement('div', { className: 'column-value w-3/5 p-4 text-gray-700 flex items-center' }, attendance.studentName)
            ),
            // Student ID Row
            React.createElement('div', { className: 'column-row flex border-b border-gray-300' },
              React.createElement('div', { className: 'column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300 flex items-center' }, 'Student ID'),
              React.createElement('div', { className: 'column-value w-3/5 p-4 text-gray-700 flex items-center' }, attendance.studentID)
            ),
            // Level Row
            React.createElement('div', { className: 'column-row flex border-b border-gray-300' },
              React.createElement('div', { className: 'column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300 flex items-center' }, 'Level'),
              React.createElement('div', { className: 'column-value w-3/5 p-4 text-gray-700 flex items-center' }, attendance.level)
            ),
            // Attendance Row
            React.createElement('div', { className: 'column-row flex border-b border-gray-300' },
              React.createElement('div', { className: 'column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300 flex items-center' }, 'Attendance'),
              React.createElement('div', { className: 'column-value w-3/5 p-4 text-gray-700 flex items-center' }, attendance.attendance)
            ),
            // Absence Row
            React.createElement('div', { className: 'column-row flex' },
              React.createElement('div', { className: 'column-label w-2/5 p-4 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300 flex items-center' }, 'Absence'),
              React.createElement('div', { className: 'column-value w-3/5 p-4 text-gray-700 flex items-center' }, attendance.absence)
            )
          )
        ),
        // Chart Section
        React.createElement('div', { className: 'chart-section flex-1 flex flex-col items-center justify-center' },
          React.createElement('h3', { className: 'text-gray-800 text-xl font-semibold mb-5' }, 'Attendance Overview'),
          React.createElement('div', { className: 'pie-chart relative w-48 h-48 rounded-full mb-5' },
            React.createElement('div', {
              className: 'chart-slice attendance-slice w-full h-full rounded-full relative',
              style: {
                background: `conic-gradient(#28a745 0% ${attendancePercentage}%, #dc3545 ${attendancePercentage}% 100%)`
              }
            },
              React.createElement('div', { className: 'chart-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center' },
                React.createElement('span', { className: 'chart-percentage text-lg font-bold text-gray-800' },
                  Math.round(attendancePercentage) + '%'
                )
              )
            )
          ),
          // Legend
          React.createElement('div', { className: 'chart-legend flex flex-col gap-3' },
            React.createElement('div', { className: 'legend-item flex items-center gap-3' },
              React.createElement('div', { className: 'legend-color w-5 h-5 rounded bg-green-600' }),
              React.createElement('span', { className: 'text-gray-700' },
                `Attendance: ${attendance.attendance} (${Math.round(attendancePercentage)}%)`
              )
            ),
            React.createElement('div', { className: 'legend-item flex items-center gap-3' },
              React.createElement('div', { className: 'legend-color w-5 h-5 rounded bg-red-600' }),
              React.createElement('span', { className: 'text-gray-700' },
                `Absence: ${attendance.absence} (${Math.round(absencePercentage)}%)`
              )
            )
          )
        )
      )
    )
  );
};

export default AttendanceDetails;
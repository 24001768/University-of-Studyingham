import React, { useState } from 'react';

const HorizontalRow = ({ label, value }) => {
  const isStatus = label === 'Status';
  
  return React.createElement('div', { 
    className: 'flex border-b border-gray-200 last:border-b-0' 
  },
    React.createElement('div', { 
      className: 'w-32 p-4 bg-blue-50 font-bold border-r border-gray-200 flex items-center' 
    }, label),
    React.createElement('div', { 
      className: `flex-1 p-4 flex items-center text-gray-800 ${isStatus ? 'justify-center' : ''}` 
    },
      isStatus ? 
        React.createElement('span', { 
          className: 'text-green-700 font-bold px-3 py-1 rounded-md bg-green-100' 
        }, value)
        : value
    )
  );
};

const BasicTable = () => {
  const [schedules] = useState([
    { 
      data: 'Monday 30 October', 
      time: '11:00 to 12:00', 
      room: 'FML-104', 
      instructor: 'Dr Bruce', 
      status: 'Ongoing' 
    }
  ]);

  const schedule = schedules[0];

  return React.createElement('div', { 
    className: 'bg-white rounded-xl shadow-lg p-6' 
  },
    React.createElement('div', { 
      className: 'border border-gray-200 rounded-lg overflow-hidden' 
    },
      React.createElement(HorizontalRow, { label: 'Date', value: schedule.data }),
      React.createElement(HorizontalRow, { label: 'Time', value: schedule.time }),
      React.createElement(HorizontalRow, { label: 'Room', value: schedule.room }),
      React.createElement(HorizontalRow, { label: 'Instructor', value: schedule.instructor }),
      React.createElement(HorizontalRow, { label: 'Status', value: schedule.status })
    )
  );
};

export default BasicTable;

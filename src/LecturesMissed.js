import React from 'react';

const LectureMissed = () => {
  const missedLectures = [
    { id: 1, course: 'Computer Science', room: 'Fml100', date: '11/11/11', time: '9:00' },
    { id: 2, course: 'Computer Science', room: 'Fml100', date: '11/11/11', time: '9:00' },
    { id: 3, course: 'Computer Science', room: 'Fml100', date: '11/11/11', time: '9:00' },
    { id: 4, course: 'Computer Science', room: 'Fml100', date: '11/11/11', time: '9:00' },
    { id: 5, course: 'Computer Science', room: 'Fml100', date: '11/11/11', time: '9:00' }
  ];

  return React.createElement('div', { className: 'lecture-missed bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8' },
    React.createElement('h2', { className: 'text-gray-800 text-2xl font-semibold mb-6' }, 'Lectures Missed'),
    React.createElement('div', { className: 'overflow-x-auto' },
      React.createElement('table', { className: 'min-w-full divide-y divide-gray-200' },
        React.createElement('thead', { className: 'bg-gray-50' },
          React.createElement('tr', null,
            React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Course'),
            React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Room'),
            React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Date'),
            React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Time')
          )
        ),
        React.createElement('tbody', { className: 'bg-white divide-y divide-gray-200' },
          missedLectures.map(lecture =>
            React.createElement('tr', { key: lecture.id, className: 'hover:bg-gray-50 transition-colors' },
              React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-800' }, lecture.course),
              React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-800' }, lecture.room),
              React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-800' }, lecture.date),
              React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-800' }, lecture.time)
            )
          )
        )
      )
    )
  );
};

export default LectureMissed;
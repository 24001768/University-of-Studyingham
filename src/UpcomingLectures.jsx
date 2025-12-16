import React from 'react';

const UpcomingLectures = () => {
  
  const lectures = [
    { title: 'Data Structure', time: '2:00 to 3:00' },
    { title: 'C++ Programme', time: '3:00 to 4:00' }
  ];

  return React.createElement('div', {
    className: 'bg-white rounded-lg shadow-md p-6 max-w-md mx-auto'
  },
    
    React.createElement('h1', {
      className: 'text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200'
    }, 'Upcoming Lectures'),
    
    
    React.createElement('div', {
      className: 'space-y-4'
    },
      lectures.map((lecture, index) => 
        React.createElement('div', {
          key: index,
          className: 'flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200'
        },
          React.createElement('div', { className: 'flex-1' },
            React.createElement('h2', { 
              className: 'font-semibold text-gray-800 text-lg' 
            }, lecture.title)
          ),
          React.createElement('div', { className: 'ml-4' },
            React.createElement('span', { 
              className: 'font-medium text-gray-600' 
            }, lecture.time)
          )
        )
      )
    )
  );
};

export default UpcomingLectures;
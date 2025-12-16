import React from 'react';

const Checkin = () => {
  const handleCheckin = () => {
    alert('Check-in successful!');
  };

  return React.createElement('div', {
    className: 'bg-white rounded-xl shadow-lg p-8 text-center'
  },
    
    React.createElement('h1', {
      className: 'text-lg text-gray-600 mb-6'
    }, "You haven't checked in yet"),
    
    
    React.createElement('button', {
      onClick: handleCheckin,
      className: 'bg-green-600 hover:bg-green-700 text-white border-none py-4 px-12 text-lg font-bold rounded-xl cursor-pointer transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'
    }, 'Check In')
  );
};

export default Checkin;
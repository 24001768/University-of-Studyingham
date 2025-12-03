import React from 'react';
import BasicTable from './BasicTable';
import Checkin from './Checkin';
import UpcomingLectures from './UpcomingLectures';
import ModuleInsight from './ModuleInsight';
import './App.css';

const App = () => {
  return React.createElement('div', { 
    className: 'min-h-screen bg-gray-50 p-5 font-sans' 
  },
    // Header
    React.createElement('div', { 
      className: 'text-center mb-8' 
    },
      React.createElement('h1', { 
        className: 'text-3xl md:text-4xl font-bold text-gray-800 mb-3' 
      }, 'Student Dashboard'),
      React.createElement('p', { 
        className: 'text-xl text-gray-600' 
      }, 'Track your classes and attendance')
    ),
    
    // Main Content
    React.createElement('div', { 
      className: 'flex flex-col lg:flex-row gap-5 max-w-6xl mx-auto' 
    },
      // Left Section
      React.createElement('div', { 
        className: 'lg:flex-1' 
      },
        React.createElement('div', { 
          className: 'mb-6' 
        },
          React.createElement(BasicTable)
        ),
        React.createElement('div', null,
          React.createElement(Checkin)
        )
      ),
      
      // Right Section
      React.createElement('div', { 
        className: 'lg:flex-1' 
      },
        React.createElement('div', { 
          className: 'mb-6' 
        },
          React.createElement(UpcomingLectures)
        ),
        React.createElement('div', null,
          React.createElement(ModuleInsight)
        )
      )
    )
  );
};

export default App;
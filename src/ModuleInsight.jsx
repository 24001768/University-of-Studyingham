import React from 'react';

const ModuleInsight = () => {
  const attendance = 24;
  const absence = 8;
  const total = attendance + absence;
  const attendancePercentage = Math.round((attendance / total) * 100);
  const absencePercentage = Math.round((absence / total) * 100);
  
  return React.createElement('div', {
    className: 'bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto'
  },
    React.createElement('h1', {
      className: 'text-2xl font-bold text-gray-800 mb-6 text-center md:text-left border-b pb-4 border-gray-200'
    }, 'Module Insights'),
    
    React.createElement('div', {
      className: 'flex flex-col md:flex-row items-center justify-between'
    },
      
      React.createElement('div', {
        className: 'w-full md:w-1/2 mb-8 md:mb-0 md:pr-8'
      },
        React.createElement('div', { className: 'mb-6' },
          React.createElement('div', { className: 'flex items-center mb-2' },
            React.createElement('div', { 
              className: 'w-4 h-4 rounded-full mr-3 bg-attendance-green' 
            }),
            React.createElement('span', { 
              className: 'text-gray-600 font-medium' 
            }, 'Attendance')
          ),
          React.createElement('div', { 
            className: 'text-3xl font-bold text-gray-800 ml-7' 
          }, attendance)
        ),
        
        React.createElement('div', null,
          React.createElement('div', { className: 'flex items-center mb-2' },
            React.createElement('div', { 
              className: 'w-4 h-4 rounded-full mr-3 bg-absence-red' 
            }),
            React.createElement('span', { 
              className: 'text-gray-600 font-medium' 
            }, 'Absence')
          ),
          React.createElement('div', { 
            className: 'text-3xl font-bold text-gray-800 ml-7' 
          }, absence)
        ),
        
        React.createElement('div', { 
          className: 'mt-8 pt-6 border-t border-gray-200' 
        },
          React.createElement('div', { 
            className: 'text-gray-600 mb-1 text-sm' 
          }, 'Total Classes'),
          React.createElement('div', { 
            className: 'text-2xl font-bold text-gray-800' 
          }, total)
        )
      ),
      
      
      React.createElement('div', {
        className: 'w-full md:w-1/2 flex flex-col items-center'
      },
        React.createElement('div', {
          className: 'relative w-48 h-48 mb-4'
        },
          React.createElement('svg', {
            width: '192',
            height: '192',
            viewBox: '0 0 100 100',
            className: 'transform -rotate-80'
          },
            React.createElement('circle', {
              cx: '50',
              cy: '50',
              r: '40',
              fill: 'transparent',
              stroke: '#e5e7eb',
              strokeWidth: '10'
            }),
            React.createElement('circle', {
              cx: '50',
              cy: '50',
              r: '40',
              fill: 'transparent',
              stroke: '#10B981',
              strokeWidth: '10',
              strokeDasharray: `${attendancePercentage * 2.513} 251.3`,
              strokeLinecap: 'round'
            }),
            absencePercentage > 0 && React.createElement('circle', {
              cx: '50',
              cy: '50',
              r: '40',
              fill: 'transparent',
              stroke: '#EF4444',
              strokeWidth: '10',
              strokeDasharray: `${absencePercentage * 2.513} 251.3`,
              strokeDashoffset: `-${attendancePercentage * 2.513}`,
              strokeLinecap: 'round'
            })
          ),
          
          React.createElement('div', {
            className: 'absolute inset-0 flex items-center justify-center'
          },
            React.createElement('div', {
              className: 'text-center transform rotate-00'
            },
              React.createElement('div', {
                className: 'text-3xl font-bold text-gray-800'
              }, `${attendancePercentage}%`),
              React.createElement('div', {
                className: 'text-sm text-gray-600 mt-1'
              }, 'Attendance')
            )
          )
        ),
        
        React.createElement('div', {
          className: 'flex justify-center space-x-6 mt-4'
        },
          React.createElement('div', {
            className: 'flex items-center'
          },
            React.createElement('div', {
              className: 'w-3 h-3 rounded-full mr-2 bg-attendance-green'
            }),
            React.createElement('span', {
              className: 'text-sm text-gray-600'
            }, `Attendance (${attendancePercentage}%)`)
          ),
          
          React.createElement('div', {
            className: 'flex items-center'
          },
            React.createElement('div', {
              className: 'w-3 h-3 rounded-full mr-2 bg-absence-red'
            }),
            React.createElement('span', {
              className: 'text-sm text-gray-600'
            }, `Absence (${absencePercentage}%)`)
          )
        )
      )
    )
  );
};

export default ModuleInsight;
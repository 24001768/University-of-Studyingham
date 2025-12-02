import React from 'react';

const ResourceManagement = () => {
  const programmeDetails = [
    { label: 'Programme of Study', value: 'Bachelors' },
    { label: 'Mode of Attendance', value: 'Full Time' },
    { label: 'Level', value: 'I' },
    { label: 'Start Date', value: 'September' },
    { label: 'Completion Date', value: 'June 2027' },
    { label: 'Degree', value: 'University of Studingham' }
  ];

  return React.createElement(
    'div',
    { 
      className: 'w-full mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-200' 
    },
    React.createElement(
      'h2',
      { className: 'text-2xl font-bold text-gray-800 mb-2' },
      'Programme Details'
    ),
    React.createElement(
      'h3',
      { className: 'text-gray-600 font-medium mb-6' },
      'Your Details'
    ),
    React.createElement(
      'table',
      { className: 'w-full border-collapse' },
      React.createElement(
        'tbody',
        null,
        programmeDetails.map((detail, index) =>
          React.createElement(
            'tr',
            { 
              key: index,
              className: 'border-b border-gray-200 last:border-b-0 hover:bg-gray-50' 
            },
            React.createElement(
              'td',
              { 
                className: 'py-4 px-5 font-semibold text-gray-700 bg-gray-50 w-[45%]' 
              },
              detail.label
            ),
            React.createElement(
              'td',
              { 
                className: 'py-4 px-5 text-gray-900 bg-white font-medium' 
              },
              detail.value
            )
          )
        )
      )
    )
  );
};

export default ResourceManagement;
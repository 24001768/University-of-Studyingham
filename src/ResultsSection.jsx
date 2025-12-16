import React from 'react';

const ResultsSection = () => {
  return React.createElement(
    'div',
    { className: 'space-y-6' },
    React.createElement(
      'div',
      { className: 'bg-white rounded-xl p-6 shadow-lg border border-gray-200' },
      React.createElement(
        'h3',
        { className: 'text-xl font-semibold text-gray-800 mb-4' },
        'Results'
      ),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'First Year'
        ),
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'Second Year'
        ),
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'Third Year'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'bg-white rounded-xl p-6 shadow-lg border border-gray-200' },
      React.createElement(
        'h3',
        { className: 'text-xl font-semibold text-gray-800 mb-2' },
        'Academic Tools'
      ),
      React.createElement(
        'p',
        { className: 'text-gray-600 font-medium mb-6' },
        'Tools to help with University'
      ),
      React.createElement(
        'div',
        { className: 'space-y-3' },
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'Bibliography Generator'
        ),
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'PDF Converter'
        ),
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'Student Planner'
        ),
        React.createElement(
          'div',
          { className: 'p-4 bg-gray-50 rounded-lg font-medium text-gray-700' },
          'Pomodoro Timer'
        )
      )
    )
  );
};

export default ResultsSection;
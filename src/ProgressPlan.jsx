import React from 'react';

const ProgressPlan = () => {
  return React.createElement(
    'div',
    { className: 'w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200' },
    
    // Main Title
    React.createElement(
      'h1',
      { className: 'text-4xl font-bold text-center text-gray-900 mb-10 pb-4 border-b-2 border-blue-200' },
      'Academic Progress Plan'
    ),
    
    // Year 1 Section
    React.createElement(
      'div',
      { className: 'mb-12' },
      React.createElement(
        'div',
        { className: 'flex items-center mb-6' },
        React.createElement(
          'div',
          { className: 'w-4 h-12 bg-blue-600 rounded-l-lg' }
        ),
        React.createElement(
          'h2',
          { className: 'text-2xl font-bold text-white bg-blue-600 px-6 py-3 rounded-r-lg shadow-lg' },
          'Year 1'
        ),
        React.createElement(
          'span',
          { className: 'ml-4 text-lg font-semibold text-gray-600 bg-blue-100 px-4 py-1 rounded-full' },
          'Foundation Year'
        )
      ),
      
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 ml-6' },
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Introduction to Programming')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Introduction to Artificial Intelligence')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Data Fundamentals')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Fundamentals of Computer Science')
        )
      )
    ),
    
    // Year 2 Section
    React.createElement(
      'div',
      { className: 'mb-12' },
      React.createElement(
        'div',
        { className: 'flex items-center mb-6' },
        React.createElement(
          'div',
          { className: 'w-4 h-12 bg-green-600 rounded-l-lg' }
        ),
        React.createElement(
          'h2',
          { className: 'text-2xl font-bold text-white bg-green-600 px-6 py-3 rounded-r-lg shadow-lg' },
          'Year 2'
        ),
        React.createElement(
          'span',
          { className: 'ml-4 text-lg font-semibold text-gray-600 bg-green-100 px-4 py-1 rounded-full' },
          'Intermediate Year'
        )
      ),
      
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-6' },
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-green-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Object-Oriented Programming with C++')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-green-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Introduction to Software Engineering')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-green-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Web Development')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-green-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Algorithm Design')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1' },
          React.createElement('div', { className: 'w-2 h-2 bg-green-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Networks')
        )
      )
    ),
    
    // Year 3 Section
    React.createElement(
      'div',
      { className: 'mb-12' },
      React.createElement(
        'div',
        { className: 'flex items-center mb-6' },
        React.createElement(
          'div',
          { className: 'w-4 h-12 bg-purple-600 rounded-l-lg' }
        ),
        React.createElement(
          'h2',
          { className: 'text-2xl font-bold text-white bg-purple-600 px-6 py-3 rounded-r-lg shadow-lg' },
          'Year 3'
        ),
        React.createElement(
          'span',
          { className: 'ml-4 text-lg font-semibold text-gray-600 bg-purple-100 px-4 py-1 rounded-full' },
          'Advanced Year'
        )
      ),
      
      React.createElement(
        'div',
        { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 ml-6' },
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Spatial Programming')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Internet of Things')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Machine Learning')
        ),
        React.createElement(
          'div',
          { className: 'flex items-start p-4 bg-white rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-shadow' },
          React.createElement('div', { className: 'w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3' }),
          React.createElement('span', { className: 'font-semibold text-gray-800' }, 'Cybersecurity')
        )
      )
    ),
    
    // Graduation Section
    React.createElement(
      'div',
      { className: 'mt-16 pt-8 border-t-2 border-gray-300' },
      React.createElement(
        'div',
        { className: 'text-center' },
        React.createElement(
          'div',
          { className: 'relative inline-block' },
          React.createElement(
            'div',
            { className: 'absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur-xl opacity-50' }
          ),
          React.createElement(
            'h3',
            { className: 'relative text-3xl font-bold text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent py-2' },
            '🎓 Graduation 🎓'
          )
        ),
        React.createElement(
          'p',
          { className: 'mt-4 text-lg text-gray-600 font-medium' },
          'Bachelor of Science in Computer Science'
        ),
        React.createElement(
          'p',
          { className: 'mt-2 text-gray-500' },
          'University of Studingham | Expected: June 2027'
        ),
        React.createElement(
          'div',
          { className: 'mt-6 flex justify-center space-x-4' },
          React.createElement(
            'div',
            { className: 'w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full' }
          ),
          React.createElement(
            'div',
            { className: 'w-16 h-1 bg-gradient-to-r from-green-500 to-purple-500 rounded-full' }
          ),
          React.createElement(
            'div',
            { className: 'w-16 h-1 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full' }
          )
        )
      )
    )
  );
};

export default ProgressPlan;
import React from 'react';
import ResourceManagement from './ResourceManagement.js';
import ResultsSection from './ResultsSection.js';
import ProgressPlan from './ProgressPlan.js'

function App() {
  return React.createElement('div', {
    className: 'min-h-screen bg-gray-100 p-5 space-y-8'
  },
    React.createElement(ResourceManagement, null),
    React.createElement(ResultsSection, null),
    React.createElement(ProgressPlan,null)
  );
}

export default App;
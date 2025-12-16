import React from "react";
import ResourceManagement from "../ResourceManagement";
import ResultsSection from "../ResultsSection";
import ProgressPlan from "../ProgressPlan";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5 space-y-8">
      <ResourceManagement />
      <ResultsSection />
      <ProgressPlan />
    </div>
  );
};

export default ResourcesPage;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Dashboard from "./Pages/Dashboard";
import AttendancePage from "./Pages/AttendancePage";
import ResourcesPage from "./Pages/ResourcesPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

        
        <Sidebar />

        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<AttendancePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;

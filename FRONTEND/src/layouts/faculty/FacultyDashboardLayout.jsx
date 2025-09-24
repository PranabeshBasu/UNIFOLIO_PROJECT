import React from "react";
import { Outlet } from "react-router-dom";
import FacultySidebar from "../../components/faculty/FacultySidebar";

const FacultyDashboardLayout = () => {
  return (
    <div className="flex">
      <FacultySidebar /> {/* Render only once */}
      <main className="flex-1 p-6 bg-slate-50 min-h-screen">
        <Outlet /> {/* This is where all nested pages will render */}
      </main>
    </div>
  );
};

export default FacultyDashboardLayout;

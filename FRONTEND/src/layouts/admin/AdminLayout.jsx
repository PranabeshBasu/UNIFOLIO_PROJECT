import React from "react";
import { Outlet } from "react-router-dom";
// These paths are correct if the folder structure below is followed.
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";
import AdminNavbar from "../../components/admin/AdminNavbar.jsx";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <AdminSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminNavbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;


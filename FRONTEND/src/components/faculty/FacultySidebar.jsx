// src/components/faculty/FacultySidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, CheckSquare, Send, Users, BarChart2, LogOut } from "lucide-react";

const NavItem = ({ to, icon, children }) => {
  const baseClasses = "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors";
  const activeClasses = "bg-primary text-white shadow-md";
  const inactiveClasses = "text-slate-500 hover:bg-primary-light hover:text-primary";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        {icon}
        <span className="font-semibold">{children}</span>
      </NavLink>
    </li>
  );
};

const FacultySidebar = () => {
  return (
    <aside className="w-64 bg-white h-screen flex-col p-4 border-r border-slate-200 sticky top-0 hidden lg:flex">
      <div className="text-2xl font-bold text-primary px-4 py-2 mb-8">
        UniFolio Faculty
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <NavItem to="/faculty/home" icon={<LayoutDashboard size={20} />}>
            Dashboard
          </NavItem>
          <NavItem to="/faculty/approval" icon={<CheckSquare size={20} />}>
            Approval Panel
          </NavItem>
          <NavItem to="/faculty/post-event" icon={<Send size={20} />}>
            Post Event/Notice
          </NavItem>
          <NavItem to="/faculty/students" icon={<Users size={20} />}>
            Student Database
          </NavItem>
          <NavItem to="/faculty/analytics" icon={<BarChart2 size={20} />}>
            Analytics
          </NavItem>
        </ul>
      </nav>
      <div className="mt-auto">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={20} />
          <span className="font-semibold">Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default FacultySidebar;

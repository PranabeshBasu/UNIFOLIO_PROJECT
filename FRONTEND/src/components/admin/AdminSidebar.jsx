import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  Send,
  Users,
  BarChart2,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const NavItem = ({ to, icon, children, collapsed }) => {
  const commonClasses = "flex items-center gap-3 w-full p-3 text-left rounded hover:bg-gray-100 transition-colors";
  const activeClasses = "bg-indigo-100 text-indigo-600 font-semibold";
  const inactiveClasses = "text-gray-600";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${commonClasses} ${isActive ? activeClasses : inactiveClasses}`
      }
    >
      {icon}
      {!collapsed && <span>{children}</span>}
    </NavLink>
  );
};


const AdminSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { to: "/admin/dashboard", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
        { to: "/admin/approvals", icon: <CheckSquare size={20} />, text: "Approval Panel" },
        { to: "/admin/post-notice", icon: <Send size={20} />, text: "Post Notice" },
        { to: "/admin/students", icon: <Users size={20} />, text: "Student Database" },
        { to: "/admin/analytics", icon: <BarChart2 size={20} />, text: "Analytics" },
    ];

  return (
    <aside className={`bg-white border-r h-screen transition-all duration-300 shadow-sm flex flex-col ${ collapsed ? "w-20" : "w-64" }`}>
        <div className="flex items-center gap-4 p-4 border-b">
            <img
                src="https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=fff&bold=true"
                alt="Admin Avatar"
                className={`w-10 h-10 rounded-full transition-all ${ collapsed ? "mx-auto" : ""}`}
            />
            {!collapsed && (
                <div>
                    <p className="font-semibold text-gray-800">Dr. Evans</p>
                    <p className="text-sm text-gray-500">Administrator</p>
                </div>
            )}
        </div>

        <nav className="flex-1 mt-4 px-2 space-y-1">
            {navItems.map(item => (
                <NavItem key={item.to} to={item.to} icon={item.icon} collapsed={collapsed}>
                    {item.text}
                </NavItem>
            ))}
        </nav>

        <div className="mt-auto border-t pt-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          {!collapsed && <span className="font-semibold">Collapse</span>}
        </button>
        <a
          href="#"
          className={`flex items-center gap-4 w-full px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut size={20} />
          {!collapsed && <span className="font-semibold">Logout</span>}
        </a>
      </div>
    </aside>
  );
};

export default AdminSidebar;

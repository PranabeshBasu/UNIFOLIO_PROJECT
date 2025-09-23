import React, { useState } from "react";
import { Home, FileText, BookOpen, User, Users, CreditCard, Zap, LogOut } from "lucide-react";

const Sidebar = ({ activeView, setActiveView }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Digital Portfolio", icon: <FileText size={18} /> },
    { name: "Academics", icon: <BookOpen size={18} /> },
    { name: "My Documents", icon: <FileText size={18} /> },
    { name: "AI Career Guidance", icon: <Zap size={18} /> },
    { name: "Opportunities", icon: <Users size={18} /> },
    { name: "Alumni Network", icon: <User size={18} /> },
    { name: "Credit Score", icon: <CreditCard size={18} /> },
  ];

  return (
    <aside
      className={`bg-white border-r h-screen transition-all duration-300 shadow-sm ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* User profile */}
        <div className="flex items-center gap-4 p-4 border-b">
          <img
            src="https://ui-avatars.com/api/?name=Student&background=4F46E5&color=fff"
            alt="avatar"
            className={`w-10 h-10 rounded-full transition ${collapsed ? "mx-auto" : ""}`}
          />
          {!collapsed && (
            <div className="flex flex-col">
              <p className="font-semibold text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">ID: 123456</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveView(item.name)}
              className={`flex items-center gap-3 w-full p-3 text-left rounded hover:bg-gray-100 transition-colors ${
                activeView === item.name
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse & Logout */}
        <div className="p-4 mt-auto flex flex-col gap-2 border-t">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition-colors"
          >
            {collapsed ? "→" : "←"} {!collapsed && "Collapse"}
          </button>
          <button className="flex items-center gap-3 p-2 text-red-600 hover:bg-red-50 rounded transition-colors">
            <LogOut size={18} /> {!collapsed && "Logout"}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

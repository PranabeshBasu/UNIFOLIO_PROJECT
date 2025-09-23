import React from "react";

const Navbar = ({ activeView }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-bold text-gray-800">{activeView}</h1>
      {/* Placeholder for future actions, like user profile, notifications, etc. */}
      <div className="flex items-center gap-4">
        {/* Example: Notifications or Profile Avatar */}
      </div>
    </header>
  );
};

export default Navbar;

import React from 'react';

const StatCard = ({ title, value, icon }) => {
  return (
    <header class="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 class="text-xl font-bold text-gray-800"></h1>
      <div class="flex items-center gap-4"></div>
    </header>
  );
};

export default StatCard;

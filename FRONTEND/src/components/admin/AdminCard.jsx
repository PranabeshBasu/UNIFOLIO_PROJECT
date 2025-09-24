import React from 'react';

/**
 * A reusable card component for the admin dashboard.
 * It provides consistent styling for containers.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {string} [props.className=""] - Optional additional CSS classes to apply to the card.
 */
const AdminCard = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
};

export default AdminCard;

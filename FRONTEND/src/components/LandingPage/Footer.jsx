import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Unifolio. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Empowering the future of education, one portfolio at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

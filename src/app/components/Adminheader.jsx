import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side with the title */}
        <h1 className="text-xl font-semibold">Lere Dashboard</h1>
        {/* Right side with the logout button */}
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

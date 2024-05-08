import React from 'react';
import Link from 'next/link'


const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Right side with the logout button */}
        <Link href="" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Start quiz
        </Link>
        {/* Left side with the title */}
        <h1 className="text-xl font-semibold">Dashboard</h1>
        {/* Right side with the logout button */}
        <Link href="/" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
        Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;

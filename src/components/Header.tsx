import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-gray-900 dark:text-white shadow-md p-4 sticky top-0 z-50 transition-colors font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">🌍 World News</h1>
        <nav className="space-x-6 text-sm md:text-base flex items-center">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">World</a>
          <a href="#" className="hover:underline">Technology</a>
          <a href="#" className="hover:underline">Sports</a>
          <button className="ml-4 px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Login</button>
          <button className="ml-2 px-4 py-1 rounded-md border border-white dark:border-gray-700 text-white hover:bg-white hover:text-black dark:hover:text-white dark:hover:bg-gray-700 transition">Signup</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
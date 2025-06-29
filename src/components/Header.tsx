import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {


  
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
       <header className="bg-white  dark:bg-gray-900 text-gray-900 dark:text-white shadow-md p-4 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide font-mono">🌍 World News</h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base items-center">
          <a href="#" className="hover:underline">Home</a>
          <a href="https://www.bbc.com/news/world" className="hover:underline">World</a>
          <a href="https://www.thehindu.com/sci-tech/technology/" className="hover:underline">Technology</a>
          <a href="https://www.thehindu.com/sport/" className="hover:underline">Sports</a>
          <button className="ml-4 px-4 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Login</button>
          <button className="ml-2 px-4 py-1 rounded-md border border-gray-700 dark:border-gray-300 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Signup
          </button>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden  mt-2 space-y-2 px-2 pb-4">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">World</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Technology</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Sports</a>
          <button className="w-full text-left px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">Login</button>
          <button  className="w-full  text-left px-4 py-2 rounded-md border border-gray-700 dark:border-gray-300 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Signup
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
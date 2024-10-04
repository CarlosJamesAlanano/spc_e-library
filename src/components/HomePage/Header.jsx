import React, { useState } from 'react';
import NavBar from './NavBar.jsx';

/**
 * Header component that contains the logo, title, and navigation menu.
 * It also includes the hamburger menu for mobile devices.
 */

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State to track mobile menu open/close

  /**
   * Function to toggle the state of the mobile menu.
   */
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        {/* Logo and title */}
        <div className="flex items-center space-x-4">
          <img src="src/assets/logo.png" alt="SPC Library Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="text-xl md:text-2xl font-bold">SPC eLibrary</h1>
        </div>
        
        {/* Hamburger menu for mobile */}
        <button
          aria-label="Toggle Menu"
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {/* SVG Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Bar (visible on larger screens, toggled on mobile) */}
        <NavBar isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * NavBar component that renders navigation links.
 * It conditionally displays the menu based on the screen size and mobile menu state.
 *
 * isMenuOpen - Determines if the menu should be visible on mobile.
 */
const NavBar = ({ isMenuOpen }) => {
  return (
    <nav className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-700 md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
      <Link to="/" className="hover:text-blue-600 transition">Home</Link>
      <Link to="/browse" className="hover:text-blue-600 transition">Browse</Link>
      <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
      <Link to="/about" className="hover:text-blue-600 transition">About</Link>
    </nav>
  );
};

export default NavBar;

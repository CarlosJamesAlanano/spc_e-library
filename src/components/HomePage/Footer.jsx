import React from 'react';

/**
 * Footer component that contains navigation links and copyright information.
 * It is rendered at the bottom of all pages.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          {/* Footer links (not yet implemented)*/}
          <a href="/home" className="mx-4 hover:text-gray-400">Home</a>
          <a href="/privacy" className="mx-4 hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="mx-4 hover:text-gray-400">Terms of Service</a>
        </div>
        {/* Copyright information */}
        <p className="text-sm">&copy; 2024 SPC eLibrary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

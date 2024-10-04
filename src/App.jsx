import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/HomePage/Header';
import Intro from './components/HomePage/Intro';
import AboutSection from './components/HomePage/AboutSection';
import RecentlyAdded from './components/HomePage/RecentlyAdded';
import Featured from './components/HomePage/Featured';
import Announcements from './components/HomePage/Announcements';
import Footer from './components/HomePage/Footer';
import Browse from './components/pages/Browse.jsx';
import Contact from './components/pages/Contact.jsx';
import About from './components/pages/About.jsx';
import Home from './components/pages/Home';

/**
 * Main App component that handles routing.
 * It wraps the entire application in `BrowserRouter` and defines routes for different pages.
 */

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 antialiased">
        <Header />
        <main className="container mx-auto py-16 px-6 md:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

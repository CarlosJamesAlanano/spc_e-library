import React from 'react';
import Intro from '../HomePage/Intro';
import AboutSection from '../HomePage/AboutSection';
import RecentlyAdded from '../HomePage/RecentlyAdded';
import Featured from '../HomePage/Featured';
import Announcements from '../HomePage/Announcements';

/**
 * Home page component that combines various sections of the homepage.
 * It includes a intro section, about information, recently added research, collections, and announcements.
 */

const Home = () => {
  return (
    <div>
      <Intro /> {/* Intro Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <AboutSection /> {/* About the library */}
        <RecentlyAdded /> {/* Recently added research papers */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Featured /> {/* Featured collections */}
        <Announcements /> {/* Announcements or library news */}
      </div>
    </div>
  );
};

export default Home;

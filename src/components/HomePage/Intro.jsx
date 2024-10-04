import React from 'react';

const Intro = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-8 text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Discover Knowledge at SPC eLibrary</h2>
      <p className="text-lg text-gray-600 mb-6">Access a world of research and educational resources from anywhere.</p>
      <a href="/browse" className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition">
        Explore Now
      </a>
    </section>
  );
};

export default Intro;

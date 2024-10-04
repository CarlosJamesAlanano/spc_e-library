import React from 'react';

const Featured = () => {
  return (
    <div className="lg:col-span-1">
      <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src="#" alt="Collection 1" className="w-full h-40 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-semibold">Collection Title 1</h3>
            <p className="text-gray-600">Brief description of collection.</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img src="#" alt="Collection 2" className="w-full h-40 object-cover" />
          <div className="p-6">
            <h3 className="text-lg font-semibold">Collection Title 2</h3>
            <p className="text-gray-600">Brief description of collection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

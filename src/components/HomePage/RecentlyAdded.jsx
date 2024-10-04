import React from 'react';

const RecentlyAdded = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Recently Added</h2>
      <ul className="space-y-4">
        <li className="bg-white shadow rounded-md p-6">
          <h3 className="text-xl font-semibold">Research Title 1</h3>
          <p className="text-gray-600">Brief description of this study.</p>
        </li>
        <li className="bg-white shadow rounded-md p-6">
          <h3 className="text-xl font-semibold">Research Title 2</h3>
          <p className="text-gray-600">Brief description of this study.</p>
        </li>
      </ul>
    </div>
  );
};

export default RecentlyAdded;

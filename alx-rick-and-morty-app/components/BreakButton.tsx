import React from 'react';

const BreakButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        throw new Error("This is your first error!");
      }}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
    >
      Break the world
    </button>
  );
};

export default BreakButton;

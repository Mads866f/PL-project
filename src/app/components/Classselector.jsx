import React from 'react';

const Column = () => {
  const title = "Klasser";
  const entries = ["1.B", "3.A", "2.A"];

  return (
    <div className="w-full md:w-1/5 p-4 border">
      <div className="max-h-screen h-screen overflow-y-auto">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {/* Entries */}
        {entries.map((entry, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-2 mb-2">
            {/* Entry content */}
            <p>{entry}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Column;

import React from 'react';
import Groups from './Groups';

const ClassColumn = () => {
  const title = "Klasser";
  const entries = ["1.B", "3.A", "2.A","ph"];

  return (
    <div className="w-full md:w-1/5 p-4 border">
      <div className="max-h-screen h-screen overflow-y-auto">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        {/* Entries */}
        {entries.map((entry, index) => (
            <Groups key={index} groupName={entry}/>
        ))}
      </div>
    </div>
  );
};

export default ClassColumn;

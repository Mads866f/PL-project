import React from 'react';
import Groups from './Groups';

const ClassColumn = () => {
  const title = "Klasser";
    const entries = [
        { name: "Demo-klasse", subItems: ["Sub-item 1", "Sub-item 2", "Sub-item 3"] },
        { name: "Test-klasse", subItems: ["Sub-item A", "Sub-item B", "Sub-item C"] }
    ];

  return (
    <div className="">
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
        {entries.map((entry, index) => (
            <Groups key={index} groupName={entry.name} subItems={entry.subItems}/>
        ))}
      </div>
    </div>
  );
};

export default ClassColumn;

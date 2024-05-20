import React from 'react';
import Groups from './Groups';

const ClassColumn = ({ selectedStudent, handleStudentChange }) => {
  const title = "Klasser";
    const entries = [
        { name: "Demo-klasse", subItems: ["demo"] },
        {
            "name": "Test-klasse",
            "subItems": [
                "Student 1",
                "Student 2",
                "Student 3",
                "Student 4",
                "Student 5",
                "Student 6",
                "Student 7",
                "Student 8",
                "Student 9",
                "Student 10",
                "Student 11",
                "Student 12",
                "Student 13",
                "Student 14"
            ]
        }
    ];

  return (
    <div className="">
      <div className="">
        <h2 className="text-lg font-semibold">{title}</h2>
        {entries.map((entry, index) => (
            <Groups
                key={index}
                groupName={entry.name}
                subItems={entry.subItems}
                onStudentChange={handleStudentChange}
            />
        ))}
      </div>
    </div>
  );
};

export default ClassColumn;

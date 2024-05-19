import React from 'react';
import StudentScoresChart from './StudentScoresChart';

const StudentChartWrapper = ({ studentData, selectedStudent }) => {
    const getStudentData = (studentName) => {
        return studentData.filter(entry => entry.student === studentName);
    };

    const getDates = (data) => {
        return data.map(entry => entry.date);
    };

    const getScores = (data) => {
        return data.map(entry => entry.scores);
    };

    const studentDataToShow = getStudentData(selectedStudent);

    return (
        <div>
            {studentDataToShow.length > 0 ? (
                <StudentScoresChart
                    data={getScores(studentDataToShow)}
                    title={`${selectedStudent} Scores`}
                    dates={getDates(studentDataToShow)}
                />
            ) : (
                <p>No data available for the selected student.</p>
            )}
        </div>
    );
};

export default StudentChartWrapper;

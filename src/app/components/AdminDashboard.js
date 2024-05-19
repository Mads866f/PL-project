"use client";
import React, { useEffect, useState } from 'react';
import AdminHeader from "./Adminheader"
import ClassColumn from "./ClassColumn";
import studentScoresData from '@/app/studentScores.json';
import StudentChartWrapper from "@/app/admin/components/StudentChartWrapper";


const AdminDashboard = () => {

    const [studentData, setStudentData] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState("Student 6");

    useEffect(() => {
        setStudentData(studentScoresData);
    }, []);

    const handleStudentChange = (studentName) => {
        setSelectedStudent(studentName);
    };

    return (
      <div className="max-h-screen max-w-screen">
        <div className="">
            <AdminHeader />
        </div>
          <div className="flex flex-row">
              <div className="w-1/6 h-[calc(100vh-74px)] overflow-y-auto">
                  <ClassColumn
                  selectedStudent={selectedStudent}
                  handleStudentChange={handleStudentChange}
                  />
              </div>
              <div className="w-4/6">
                  <div className="flex flex-col border-4">
                      <div className="bg-white border">
                          <StudentChartWrapper
                              studentData={studentData}
                              selectedStudent={selectedStudent}
                          />
                      </div>
                      <div className="bg-gray-100 border-t border-gray-300">
                          <div className="h-full bg-yellow-100">
                              <div className="flex items-center justify-center">
                                  Notes
                              </div>
                              <textarea className="w-full bg-yellow-100">
                              </textarea>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default AdminDashboard;

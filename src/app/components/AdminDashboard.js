"use client";
import React from "react";
import AdminHeader from "./Adminheader"
import ClassColumn from "./ClassColumn";
import LineGraph from "@/app/admin/components/LineGraph";
import StudentScoresChart from "@/app/admin/components/StudentScoresChart";

const AdminDashboard = () => {

    const elev6_data = [
        [50, 100, 50, 100, 50, 50, 100, 100, 100, 50, 50, 50],
        [100, 50, 100, 100, 100, 50, 100, 100, 100, 50, 50, 100],
        [100, 100, 50, 100, 100, 50, 100, 100, 100, 50, 50, 100],
        [100, 100, 50, 100, 100, 100, 100, 100, 100, 50, 50, 100]
    ];

    const elev10_data = [
        [0, 50, 50, 0, 50, 100, 100, 50, 100, 50, 100, 50],
        [0, 50, 50, 50, 100, 100, 100, 50, 100, 50, 100, 50],
        [0, 50, 50, 50, 100, 100, 100, 100, 100, 50, 100, 50],
        [0, 50, 50, 100, 100, 100, 100, 50, 100, 20, 100, 50]
    ];

    const dates = ['06.05', '08.05', '13.05', '16.05'];


    return (
      <div className="max-h-screen max-w-screen">
        <div className="">
            <AdminHeader/>
        </div>
          <div className="flex flex-row">
              <div className="w-1/6 h-[calc(100vh-74px)] overflow-y-scroll">
                  <ClassColumn/>
              </div>
              <div className="w-4/6">
                  <div className="flex flex-col border-4">
                      <div className="bg-white border">
                          <StudentScoresChart data={elev6_data} title="Student 6 Scores" dates={dates} />
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

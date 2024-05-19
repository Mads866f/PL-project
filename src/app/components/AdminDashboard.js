import React from "react";
import AdminHeader from "./Adminheader"
import ClassColumn from "./ClassColumn";
import LineGraph from "@/app/admin/components/LineGraph";

const AdminDashboard = () => {
    const data = [
        { x: 0, y: 10 },
        { x: 1, y: 20 },
        { x: 2, y: 15 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        { x: 3, y: 25 },
        // Add more data points as needed
    ];

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
                          <LineGraph data={data}/>
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

import React from "react";
import AdminHeader from "./Adminheader"
import ClassColumn from "./classColumn";

const AdminDashboard = () => {
  return (
    <div className="flex flex-wrap">
    <AdminHeader/>
    <ClassColumn/>
  </div>
  );
};

export default AdminDashboard;

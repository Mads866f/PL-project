import React from "react";
import Graph from "./Graph";
import AdminHeader from "./Adminheader"
import Classselector from "./Classselector"
const AdminDashboard = () => {
  return (
    <div className="flex flex-wrap">
    <AdminHeader/>
    <Classselector/>
  </div>
  );
};

export default AdminDashboard;

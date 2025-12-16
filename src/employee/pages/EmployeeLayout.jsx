import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";EmployeeSideBar
import { Outlet } from "react-router-dom";
import EmployeeSideBar from "../components/EmployeeSideBar";
import EmployeeNavbar from "../components/EmployeeNavbar";


const EmployeeLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen w-full flex bg-white overflow-hidden">

      {/* Sidebar */}
      <EmployeeSideBar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main area */}
      <div className="flex flex-col flex-1 h-screen bg-white">

        {/* NAVBAR — Add mobile menu button */}
        <div className="h-16 bg-white border-b border-gray-300 px-4 flex items-center justify-between md:hidden">
          <button
            className="p-2 rounded-md hover:bg-gray-200"
            onClick={() => setMobileOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>

        <EmployeeNavbar className="hidden md:block"/>

        {/* ROUTER CONTENT */}
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout;

import { faBell, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ManagerNavbar = () => {
  const [profile,setProfile]=useState(false);
  return (
    <div className="w-full h-16 border-b border-gray-300 flex items-center justify-between">
      <div>
        <input type="text" placeholder="Search" className="border border-gray-300 p-1 md:p-2 mx-2 md:mx-5  w-48 md:w-64 text-sm"/>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <FontAwesomeIcon icon={faMoon} className="text-[#64748B] text-xl md:text-2xl" />
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className="text-[#64748B] text-xl md:text-2xl " />
        </div>
        <div className="me-" onClick={()=>setProfile(!profile)}>
          <img
            src="https://i.pravatar.cc/40"
            className="w-7 md:w-9 h-7 md:h-9 rounded-full me-4"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerNavbar;

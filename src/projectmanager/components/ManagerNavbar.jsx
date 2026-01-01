import { faBell, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getNotificationAPI } from "../../services/allAPI";

const ManagerNavbar = () => {
  const [profile, setProfile] = useState(false);
  //state for storing notifications
  const [notifications, setNotifications] = useState([]);
  //state for shoiwng notifications
  const [showNotifications, setShowNotifications] = useState(false);

  //function
  const fetchNotifications = async () => {
    try {
      const result = await getNotificationAPI();
      setNotifications(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  //useEffect for fetch Notifications
  useEffect(() => {
    fetchNotifications();
  },[]);
  return (
    <div className="w-full h-16 border-b border-gray-300 flex items-center justify-between">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-1 md:p-2 mx-2 md:mx-5  w-48 md:w-64 text-sm"
        />
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <FontAwesomeIcon
          icon={faMoon}
          className="text-[#64748B] text-xl md:text-2xl"
        />
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
            }}
          >
            <FontAwesomeIcon
              icon={faBell}
              className="text-[#64748B] text-xl md:text-2xl "
            />
            {notifications.some((n) => !n.isRead) && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full "></span>
            )}
          </button>
        </div>
        <div className="me-" onClick={() => setProfile(!profile)}>
          <img
            src="https://i.pravatar.cc/40"
            className="w-7 md:w-9 h-7 md:h-9 rounded-full me-4"
            alt="profile"
          />
        </div>
      </div>
      {showNotifications &&(
        <div className="absolute right-0 top-14 w-[420px]  rounded-xl bg-white backgrop filter-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden"> 
        {/* header */}
        <div className="flex items-center justify-between px-5 py-4 bg-linear-to-r from-purple-600 to-indigo-600 ">
          <h3 className="text-white font-semibold">Notifications</h3>
          {
            notifications.some(n=>!n.isRead) && (
              <span>
                {notifications.filter(n=>!n.isRead).length}new
              </span>
            )
          }
        </div>
        {/* Body */}
        {
          notifications.map((n)=>(
            <div key={n._id} onClick={()=>markAsRead(n._id)} className={`group flex gap-4 px-5 py-4 cursor-pointer transition-all ${m.isRead?"bg-white hover:bg-gray-50":"bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-600 hover:to-indigo-100"}`}>
            {/* status dot */}
            <div className="mt-2">
             {
              n.isRead && (
                <span className="block w-2.5 h-2.5 rounded-full bg-linear-to-r from-purple-600 to-indigo-600  shadow-md"></span>
              )
             } 
            </div>
            {/* content */}
            <div className="flex-1">
              <p className="text-sm text-gray-800 leading-relaxed font-medium group hover:text-black">{n.message}</p>
              <p className="text-xs text-gray-100 mt-1">{new Date(n.createdAt).toLocaleString()}</p> 
            </div>
            </div>  
          ))
        }
        {/* Footer */}
        <div className="px-5 py-3 bg-gray-100/60 backdrop-blur-md text-sm text-center text-purple-600 font-semibold hover:bg-gray-100 cursor pointer">
           view all notifications 
        </div>
        </div>
      )}
    </div>
  );
};

export default ManagerNavbar;

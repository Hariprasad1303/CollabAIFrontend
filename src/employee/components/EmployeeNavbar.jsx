import { faBell, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import {
  acceptInviteAPI,
  getEmployeeProjectAPI,
  getNotificationAPI,
} from "../../services/allAPI";
import { toast } from "react-toastify";
import { ProjectContext } from "../../context/ProjectContext";

const EmployeeNavbar = () => {
  const { fetchProjects }=useContext(ProjectContext);

  const [profile, setProfile] = useState(false);
  //state for storing notifications
  const [notifications, setNotifications] = useState([]);
  //state for shoiwng notifications
  const [showNotifications, setShowNotifications] = useState(false);
 
  
  //function for fetching notifications
  const fetchNotifications = async () => {
    try {
      const result = await getNotificationAPI();
      setNotifications(result.data);
    } catch (err) {
      console.log(err);
      setNotifications([]);
    }
  };
  //useEffect for fetch Notifications
  useEffect(() => {
    fetchNotifications();
  }, []);
  //function for accepting invite
  const handleAccept = async (inviteId) => {
    console.log(inviteId);
    try {
      const result = await acceptInviteAPI(inviteId);
      console.log(result.data);

      //remove accepted notifications
      setNotifications((prev) => prev.filter((n) => n.inviteId !== inviteId));
      fetchProjects();
      
    } catch (err) {
      console.log(err);
      toast.warning("Failed to accept invite");
    }
  };
  const handleReject = async (inviteId) => {
    //logic
  };
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
      {/*  */}
      {showNotifications && (
        <div className="absolute right-0 top-14 w-[420px] rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-purple-600 to-indigo-600">
            <h3 className="text-white font-semibold text-lg">Notifications</h3>

            {notifications.some((n) => !n.isRead) && (
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                {notifications.filter((n) => !n.isRead).length} new
              </span>
            )}
          </div>
          {/* Body */}
          <div className="max-h-[420px] overflow-y-auto divide-y divide-white/10">
            {notifications.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                <div className="text-4xl mb-2">🔔</div>
                <p className="text-sm">No notifications yet</p>
              </div>
            )}
            {/* content */}
            <div className="flex-1 flex flex-col">
              {notifications.map((n) => (
                <div
                  key={n._id}
                  className={`flex items-center justify-between p-3 border-b transition-all hover:bg-gray-50 ${
                    !n.isRead ? "bg-white" : ""
                  }`}
                >
                  {/* messgae sections */}
                  <div>
                    <p className="text-sm text-gray-800 leading-relaxed font-medium group-hover:text-black">
                      {n.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(n.createdAt).toLocaleString()}
                    </p>
                  </div>
                  {/* action sections */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAccept(n.inviteId)}
                      className="bg-purple-600 text-white rounded-lg px-3 py-2 hover:bg-purple-700 transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(n.inviteId)}
                      className="bg-purple-600 text-white rounded-lg px-3 py-2 hover:bg-purple-700 transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="px-5 py-3 bg-gray-100/60 backdrop-blur-md text-center text-sm text-purple-700 font-semibold hover:bg-gray-100 cursor-pointer transition">
            View all notifications
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeNavbar;

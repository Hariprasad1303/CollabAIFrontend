import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const ManagerSettings = () => {
  const [profile, setProfile] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [security, setSecurity] = useState(false);
  return (
    // Tabs creation
    <div className="flex flex-col items-start">
      <div className="flex flex-col">
        <h4 className="text-purple-600 font-extrabold text-2xl   md:text-4xl mb-1.5">
          Settings
        </h4>
        <p className="text-[#64748B] font-normal text-md md:text-2xl">
          Manage your account and workspace settings
        </p>
      </div>
      <div className="flex justify-center md:justify-start items-center my-10  bg-white opactity-80  rounded">
        <p
          onClick={() => {
            setProfile(true);
            setNotifications(false);
            setSecurity(false);
          }}
          className={
            profile
              ? "px-4 md:px-20 py-4 bg-white text-[#0F172A] font-semibold transition-all duration-300  text-sm md:text-lg border-l border-t border-r border-b border-gray-300 rounded cursor-pointer"
              : notifications
              ? "px-4 py-4 md:px-20 font-extrabold  text-sm md:text-lg text-[#0F172A]  bg-gray-200 border-gray-100 opacity-75  transition-all duration-300"
              : "px-4 md:px-20 py-4  font-extrabold  text-sm md:text-lg text-[#0F172A] bg-gray-200 border-gray-100 opacity-75  transition-all duration-300"
          }
        >
          Profile
        </p>

        <p
          onClick={() => {
            setProfile(false);
            setNotifications(true);
            setSecurity(false);
          }}
          className={
            notifications
              ? "px-4 py-4 md:px-20  bg-white font-semibold  text-sm md:text-lg text-[#0F172A] border-l border-t border-r border-b border-gray-300 rounded cursor-pointer transition-all duration-300"
              : security
              ? "px-4 md:px-20 py-4  font-extrabold   text-sm md:text-lg text-[#0F172A] bg-gray-200 border-gray-100  opacity-75 transition-all duration-300"
              : "px-4 md:px-20 py-4 text-[#0F172A] font-extrabold   text-sm md:text-lg bg-gray-200 border-gray-100 opacity-75 transition-all duration-300"
          }
        >
          Notifications
        </p>

        <p
          onClick={() => {
            setProfile(false);
            setNotifications(false);
            setSecurity(true);
          }}
          className={
            security
              ? "px-4 py-4 md:px-20  font-semibold  text-sm md:text-lg bg-white text-[#0F172A] border-l border-t border-r border-b border-gray-300 rounded cursor-pointer transition-all duration-300"
              : profile
              ? "px-4 md:px-20 py-4 font-extrabold   text-sm md:text-lg text-[#0F172A] border-gray-100 bg-gray-200 opacity-75  transition-all duration-300"
              : "px-4 md:px-20 py-4 text-[#0F172A] font-extrabold   text-sm md:text-lg bg-gray-200 border-gray-100 opacity-75 transition-all duration-300"
          }
        >
          Security
        </p>
      </div>
      {/* content */}
      {profile && (
        <div className="border border-gray-300 w-3/5 p-4">
          <h2 className="text-2xl text-[#0F172A] font-bold mb-2">
            Profile Information
          </h2>
          <p className="text-lg text-[#64748B]">
            Update your personal information and profile picture
          </p>
          {/* image and change photo button */}
          <div className="flex items-center justify-start gap-8 my-4">
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <button className="border border-gray-300 text-[#0F172A] font-bold px-5 py-4">
              <FontAwesomeIcon icon={faCamera} className="me-4" />
              Change Photo
            </button>
          </div>
          <div>
            <form className="p-4 flex flex-col justify-between gap-y-5">
              {/* First name and Last name */}
              <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
                {/* First name */}
                <div className="flex-1">
                  <label
                    className="block text-[#0F172A] font-bold text-3xs mb-1"
                    htmlFor="fName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Hariprasad V V"
                    id="fName"
                    className="border border-[#64748B] w-full p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                {/* last name */}
                <div className="flex-1">
                  <label
                    className="block text-[#0F172A] font-bold text-3xs mb-1"
                    htmlFor="lName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="V V"
                    id="lName"
                    className="border border-[#64748B] w-full p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  className="block text-[#0F172A] font-bold text-lg mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  id="email"
                  className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-[#0F172A] font-bold text-lg mb-1"
                >
                  Role
                </label>
                <input
                  type="text"
                  placeholder="Manager"
                  id="role"
                  className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* Svae Changes BUtton */}
              <div>
                <button className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white px-5 py-3 font-bold rounded-lg">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {notifications && <div>Notifications</div>}
      {security && <div>Security</div>}
    </div>
  );
};

export default ManagerSettings;

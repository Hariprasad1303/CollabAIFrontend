import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const ManagerSettings = () => {
  const [profile, setProfile] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [security, setSecurity] = useState(false);
  const [emailOn, setEmailOn] = useState(false);
  const [taskOn, setTaskOn] = useState(false);
  const [projectOn, setProjectOn] = useState(false);
  const [summaryOn, setSummaryOn] = useState(false);
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
              {/* Save Changes BUtton */}
              <div>
                <button className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white px-5 py-3 font-bold rounded-lg">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {notifications && (
        <div className="border border-gray-300 w-3/5 p-4">
          <h2 className="text-2xl text-[#0F172A] font-bold mb-2">
            Notification Preferences
          </h2>
          <p className="text-lg text-[#64748B]">
            Choose how you want to be notified
          </p>
          <div className="flex flex-col gap-6 mt-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-[#0F172A] font-bold">
                  Email Notifications
                </h3>
                <p className="text-md text-[#64748B]">
                  Receive notifications via email
                </p>
              </div>
              <div>
                <button
                  onClick={() => setEmailOn(!emailOn)}
                  className={`relative h-8 w-16 inline-flex items-center rounded-full transition-all duration-300 ${
                    emailOn ? "bg-purple-600 shadow-lg" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute h-7 w-7 rounded-full bg-white shadow-md transform transition-all duration-300 ${
                      emailOn ? "translate-x-8" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-[#0F172A] font-bold">
                  Task Updates
                </h3>
                <p className="text-md text-[#64748B]">
                  Get notified when tasks are updated
                </p>
              </div>
              <div>
                <button
                  onClick={() => setTaskOn(!taskOn)}
                  className={`relative w-16 h-8 items-center inline-flex rounded-full transform transition-all duration-300 ${
                    taskOn ? "bg-purple-600 shadow-lg" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute w-7 h-7 rounded-full bg-white shadow-md transition-all duration-300 ${
                      taskOn ? "translate-x-8" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-[#0F172A] font-bold">
                  Project Mentions
                </h3>
                <p className="text-md text-[#64748B]">
                  Get notified when you're mentioned
                </p>
              </div>
              <div>
                <button
                  onClick={() => setProjectOn(!projectOn)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-300 inline-flex items-center ${
                    projectOn ? "bg-purple-600 shadow-lg" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute h-7 w-7 bg-white rounded-full transition-all duration-300 ${
                      projectOn ? "translate-x-8" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg text-[#0F172A] font-bold">
                  Weekly Summary
                </h3>
                <p className="text-md text-[#64748B]">
                  Receive weekly productivity report
                </p>
              </div>
              <div>
                <button
                  onClick={() => setSummaryOn(!summaryOn)}
                  className={`inline-flex items-center relative w-16 h-8 rounded-full transition-all duration-300 ${
                    summaryOn ? "bg-purple-600 shadow-lg" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`absolute h-7 w-7 bg-white rounded-full transition-all duration-300 ${
                      summaryOn ? "translate-x-8" : "translate-x-1"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {security && (
        <div className="border border-gray-300 w-3/5 p-4">
          <h2 className="text-2xl text-[#0F172A] font-bold mb-2">
            Security Settings
          </h2>
          <p className="text-lg text-[#64748B]">
            Manage your password and security preferences
          </p>
          <div>
            <form className="p-4 flex flex-col justify-between gap-y-5 my-5">
              {/* Current Password */}
              <div>
                <label
                  className="block text-[#0F172A] font-bold text-lg mb-1"
                  htmlFor="email"
                >
                  Current Password
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="email"
                  className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* New Password */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-[#0F172A] font-bold text-lg mb-1"
                >
                  New Password
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="role"
                  className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* Confirm passord  */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-[#0F172A] font-bold text-lg mb-1"
                >
                  Confirm passord
                </label>
                <input
                  type="text"
                  placeholder=""
                  id="role"
                  className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                />
              </div>
              {/* update password button */}
              <div className="mt-4">
                <button className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white px-5 py-3 font-bold rounded-lg">
                  Update password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerSettings;

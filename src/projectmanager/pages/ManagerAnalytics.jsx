import {
  faArrowDown,
  faArrowUp,
  faCircleCheck,
  faClock,
  faFolderClosed,
  faFolderOpen,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManagerAnalytics = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {/*Analaytics Heading */}
        <div className="flex  justify-center md:justify-between items-center mb-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl text-[#0F172A] font-extrabold px-4">
              Project Analytics
            </h2>
            <p className="text-[#64748B] text-md md:text-xl text-justify font-normal px-4">
              Track your projects, team performance, and task completion metrics
            </p>
          </div>
          <div className="hidden md:block bg-purple-200  px-4 py-2 text-purple-600 font-bold p-2 rounded-xl">
            Manager View
          </div>
        </div>
        {/* Analaytics Cards */}
        <div className="flex items-center justify-between gap-3 ">
          {/*card1  */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-violet-50 to-violet-200 opacity-75">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">Total Projects</h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">7</span>
              <p className="text-green-600 mt-2">
                <FontAwesomeIcon icon={faArrowUp} className="me-2 font-semibold" />2 this month
              </p>
            </div>
            <div className="bg-violet-300 rounded-full p-3">
              <FontAwesomeIcon icon={faFolderOpen} className="text-violet-700 text-2xl"/>
            </div> 
          </div>
          {/* card 2 */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-green-50 to-green-100">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">Tasks Completed</h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">48</span>
              <p className="text-green-600 mt-2">
                <FontAwesomeIcon icon={faArrowUp} className="me-2 font-semibold" />75% rate
              </p>
            </div>
            <div className="bg-green-200 rounded-full p-3">
              <FontAwesomeIcon icon={faCircleCheck} className="text-green-700 text-2xl" />
            </div>
          </div>
          {/* card3 */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-pink-50 to-pink-100">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">Total Projects</h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">12</span>
              <p className="text-gray-500 mt-2">
                <FontAwesomeIcon icon={faUsers} className="me-2 font-semibold" />Across Projects
              </p>
            </div>
            <div className="bg-pink-200 rounded-full p-3">
              <FontAwesomeIcon icon={faUsers} className="text-pink-700 text-2xl"/>
            </div>
          </div>
          {/* card4 */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-cyan-50 to-cyan-100">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg" >Total Projects</h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">4.2d</span>
              <p className="text-green-500 mt-2">
                <FontAwesomeIcon icon={faArrowDown} className="me-2 font-semibold" />0.5d faster
              </p>
            </div>
            <div className="bg-cyan-200 rounded-full p-3">
              <FontAwesomeIcon icon={faClock} className="text-cyan-700 text-2xl"/>
            </div>
          </div>
        </div>
        {/* Recharts Elements */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 border-2 border-gray-200 shadow-md bg-white">1</div>
          <div className="flex-1 border-2 border-gray-200 shadow-md bg-white">2</div>
        </div>
      </div>
    </>
  );
};

export default ManagerAnalytics;

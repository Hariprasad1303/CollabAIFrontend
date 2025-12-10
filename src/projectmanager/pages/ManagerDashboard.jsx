import {
  faArrowDown,
  faArrowTrendUp,
  faCalendar,
  faChartLine,
  faClock,
  faComment,
  faComments,
  faFolderOpen,
  faListCheck,
  faPlus,
  faRobot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const ManagerDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/*Dashboard heading  */}
      <div className="flex  justify-center md:justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl text-[#0F172A] font-extrabold px-4">
            Manager dashboard
          </h2>
          <p className="text-[#64748B] text-md md:text-xl text-justify font-normal px-4">
            Create projects, assign tasks, and track your team's progress
          </p>
        </div>
        <div className="hidden md:block bg-purple-200  px-4 py-2 text-purple-600 font-bold p-2 rounded-xl">
          project Manager
        </div>
      </div>
      {/* manager Respnsiblities */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1  shadow-4xl border border-gray-200 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faFolderOpen}
            className="text-purple-600 text-xl"
          />
          <h3 className="text-xl font-bold mt-2">Create projects</h3>
          <p className="text-[#64748B] font-semibold">Set up new projects</p>
        </div>
        <div className="flex-1 shadow-4xl border border-gray-200 rounded-lg p-4">
          <FontAwesomeIcon icon={faUsers} className="text-purple-600 text-xl" />
          <h3 className="text-xl font-bold mt-2">Assign members</h3>
          <p className="text-[#64748B] font-semibold">
            Add emnployees to the teams
          </p>
        </div>
        <div className="flex-1 shadow-4xl border border-gray-200 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faChartLine}
            className="text-purple-600 text-xl"
          />
          <h3 className="text-xl font-bold mt-2">Track progress</h3>
          <p className="text-[#64748B] font-semibold">Monitor Task complete</p>
        </div>
        <div className="flex-1 shadow-4xl border border-gray-200 rounded-lg p-4">
          <FontAwesomeIcon
            icon={faComments}
            className="text-purple-600 text-xl"
          />
          <h3 className="text-xl font-bold mt-2">Team Chat</h3>
          <p className="text-[#64748B] font-semibold">
            Communication with team
          </p>
        </div>
      </div>
      {/* quick actions */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between border bg-purple-100 opacity-70 border-purple-500 rounded-xs p-6 gap-4">
        <div>
          <h4 className="text-[#0F172A] text-2xl font-semibold mb-1.5">
            Quick Actions
          </h4>
          <p className="text-[#64748B] font-semibold">
            Create projects, assign tasks, and manage your team
          </p>
        </div>
        <div className="flex flex-col  md:flex-row items-center gap-6">
          <button className="bg-purple-700 text-white px-3 py-3 rounded-md md:w-auto">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-white text-md mx-1"
            />
            New Project
          </button>
          <button className="bg-purple-700 text-white px-4 py-3 rounded-md md:w-auto">
            <FontAwesomeIcon
              icon={faComment}
              className="text-white text-md mx-1"
            />
            Assign tasks
          </button>
          <button className="bg-purple-700 text-white px-3 py-3 rounded-md md:w-auto">
            <FontAwesomeIcon
              icon={faComment}
              className="text-white text-md mx-1"
            />
            Team Chat
          </button>
        </div>
      </div>
      {/* Tasks */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Active projects
            </h4>
            <span className="font-extrabold text-4xl md:text-5xl text-[#0F172A]">
              0
            </span>
            <p className="text-[#0F172A] font-semibold text-sm md:text-md">
              <FontAwesomeIcon icon={faArrowDown} className="text-red-600" />
              <span className="text-red-600">0%</span>vs last week
            </p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="text-purple-600 text-2xl md:text-3xl  font-bold md:font-extrabold"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Total Tasks
            </h4>
            <span className="font-extrabold text-4xl md:text-5xl text-[#0F172A]">
              0
            </span>
            <p className="text-[#0F172A] font-semibold text-sm md:text-md">
              <FontAwesomeIcon icon={faArrowDown} className="text-red-600" />
              <span className="text-red-600">0%</span>vs last week
            </p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faListCheck}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Completed
            </h4>
            <span className="font-extrabold text-4xl md:text-5xl text-[#0F172A]">
              0
            </span>
            <p className="text-[#0F172A] font-semibold text-sm md:text-md">
              <FontAwesomeIcon icon={faArrowDown} className="text-red-600" />
              <span className="text-red-600">0%</span>vs last week
            </p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faClock}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-200 rounded-lg p-4">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Team Members
            </h4>
            <span className="font-extrabold text-4xl  md:text-5xl text-[#0F172A]">
              0
            </span>
            <p className="text-[#0F172A] font-semibold text-sm md:text-md">
              <FontAwesomeIcon icon={faArrowDown} className="text-red-600" />
              <span className="text-red-600">0%</span>vs last week
            </p>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-purple-600 text-3xl md:text-4xl font-bold md:font-extrabold"
            />
          </div>
        </div>
      </div>
      {/* project and ai */}
      <div className="flex flex-col md:flex-row gap-4 h-70 p-1">
        <div className="flex-3/5 flex flex-col justify-around gap-3 bg-white p-4  shadow-2xl rounded-lg border border-gray-200">
          <div className="flex justify-between items-center">
            <h4 className="text-xl md:text-2xl font-bold text-[#0F172A]">
              My Projects
            </h4>
            <span className="text-md md:text-xl font-semibold text-[#0F172A]">
              View All
            </span>
          </div>
          <div className="mx-auto">
            <p className="text-[#64748B] font-semibold text-md md:text-xl text-justify">
              No projects yet. Create your first project to get started!
            </p>
          </div>
          <div className="mx-auto">
            <button className="bg-purple-600 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-white text-md md:text-xl mx-1.5"
              />
              New Projects
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg rounded-lg p-4">
          <h4 className="text-white font-bold text-xl">Productivity Score</h4>
          <div>
            <p className="text-white">
              <span className="me-6 text-6xl text-white font-bold">87</span>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <FontAwesomeIcon icon={faPlus} />
              12%
            </p>
          </div>
          <p className="text-white font-normal">
            Great work! You're exceeding your productivity goals this week.
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-white">
              <p>Tasks Complted</p>
              <span>166</span>
            </div>
            <div className="flex items-center justify-between text-white">
              <p>Active projects</p>
              <span>6</span>
            </div>
          </div>
        </div>
      </div>
      {/* Team activity */}
      <div className="flex flex-col md:flex-row gap-4 p-1">
        <div className="flex flex-col flex-2 border-2 gap-4 border-gray-200 bg-white shadow=2xl p-4">
          <h4 className="text-[#0F172A] font-bold mb-3">Team Activity</h4>
          {/* members */}
          <div className="w-full flex items-center justify-between bg-gray-200/40 p-2">
            {/* left section */}
            <div className="flex justify-start items-center gap-3">
              <div className="border border-purple-600 p-1 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  className="w-9 md:w-12 h-9 md:h-12 rounded-full"
                  alt="employee"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#0F172A] font-bold text-md md:text-lg">
                  Sarah Chen
                </p>
                <p className="text-[#64748B] font-normal text-sm md:text-md">
                  Working on design tasks
                </p>
              </div>
            </div>
            {/* right section */}
            <div>
              <button className="bg-purple-200 text-purple-600 px-4 py-2 text-sm md:text-md font-extrabold rounded-xl">
                Active
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-200/40 p-2">
            {/* left section */}
            <div className="flex justify-start items-center gap-3">
              <div className="border border-purple-600 p-1 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  className="w-9 md:w-12 h-9 md:h-12 rounded-full"
                  alt="employee"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#0F172A] font-bold text-md md:text-lg">
                  Alex Johnson
                </p>
                <p className="text-[#64748B] font-normal text-sm md:text-md">
                  Working on design tasks
                </p>
              </div>
            </div>
            {/* right section */}
            <div>
              <button className="bg-purple-200 text-purple-600 px-4 py-2 text-sm md:text-md font-extrabold rounded-xl">
                Active
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-200/40 p-2">
            {/* left section */}
            <div className="flex justify-start items-center gap-3">
              <div className="border border-purple-600 p-1 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  className="w-9 md:w-12 h-9 md:h-12 rounded-full"
                  alt="employee"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#0F172A] font-bold text-md md:text-lg">
                  Emma davis
                </p>
                <p className="text-[#64748B] font-normal text-sm md:text-md">
                  Working on design tasks
                </p>
              </div>
            </div>
            {/* right section */}
            <div>
              <button className="bg-purple-200 text-purple-600 px-4 py-2 text-sm md:text-md font-extrabold rounded-xl">
                Active
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-200/40 p-2">
            {/* left section */}
            <div className="flex justify-start items-center gap-3">
              <div className="border border-purple-600 p-1 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="w-9 md:w-12 h-9 md:h-12 rounded-full"
                  alt="employee"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#0F172A] font-bold text-md md:text-lg">
                  Mike Rodriguez
                </p>
                <p className="text-[#64748B] font-normal text-sm md:text-md">
                  Working on design tasks
                </p>
              </div>
            </div>
            {/* right section */}
            <div>
              <button className="bg-purple-200 text-purple-600 px-4 py-2 text-sm md:text-md font-extrabold rounded-xl">
                Active
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-200/40 p-2">
            {/* left section */}
            <div className="flex justify-start items-center gap-3">
              <div className="border border-purple-600 p-1 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/women/37.jpg"
                  className="w-9 md:w-12 h-9 md:h-12 rounded-full"
                  alt="employee"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#0F172A] font-bold text-md md:text-lg">
                  Lisa Zhang
                </p>
                <p className="text-[#64748B] font-normal text-sm md:text-md">
                  Working on design tasks
                </p>
              </div>
            </div>
            {/* right section */}
            <div>
              <button className="bg-purple-200 text-purple-600 px-4 py-2 text-sm md:text-md font-extrabold rounded-xl">
                Active
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-between bg-gray-200/40 p-2">
            {/* left section */}
            <div className="flex justify-start items-center gap-3">
              <div className="border border-purple-600 p-1 rounded-full">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  className="w-9 md:w-12 h-9 md:h-12 rounded-full"
                  alt="employee"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#0F172A] font-bold text-md md:text-lg">
                  James Wilson
                </p>
                <p className="text-[#64748B] font-normal text-sm md:text-md">
                  Working on design tasks
                </p>
              </div>
            </div>
            {/* right section */}
            <div>
              <button className="bg-purple-200 text-purple-600 px-4 py-2 text-sm md:text-md font-extrabold rounded-xl">
                Active
              </button>
            </div>
          </div>
        </div>
        {/* Deadlines */}
        <div className="flex-1 flex flex-col gap-6 border border-gray-100 p-4 mb-8 shadow-2xl">
          <div className="flex justify-between items-center mb-3 md:mb-6">
            <h4 className="text-[#0F172A] text-xl md:text-2xl font-bold">
              Upcoming deadlines
            </h4>
            <div>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                Design new homepage layout
              </h5>
              <p className="text-[#64748B] text-sm md:text-md font-semibold">
                Website Redesign
              </p>
            </div>
            <div className="flex items-center gap-3 bg-orange-600 p-1 rounded-md">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-sm md:text-md"
              />
              <span className="text-white text-sm md:text-md">11/15</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                Implement user authentication
              </h5>
              <p className="text-[#64748B] text-sm md:text-md font-semibold">
                Mobile App Launch
              </p>
            </div>
            <div className="flex items-center gap-3 bg-orange-600 p-1 rounded-md">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-sm md:text-md"
              />
              <span className="text-white text-sm md:text-md">11/15</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                Write API documentation
              </h5>
              <p className="text-[#64748B] text-sm md:text-md font-semibold">
                AI Integration
              </p>
            </div>
            <div className="flex items-center gap-3 bg-orange-600 p-1 rounded-md">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-sm md:text-md"
              />
              <span className="text-white text-sm md:text-md">11/15</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                Fix payment gateway bug
              </h5>
              <p className="text-[#64748B] text-sm md:text-md font-semibold">
                Website Redesign
              </p>
            </div>
            <div className="flex items-center gap-3 bg-orange-600 p-1 rounded-md">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-sm md:text-md"
              />
              <span className="text-white text-sm md:text-md">11/15</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                Design new homepage layout
              </h5>
              <p className="text-[#64748B] text-sm md:text-md font-semibold">
                Website Redesign
              </p>
            </div>
            <div className="flex items-center gap-3 bg-orange-600 p-1 rounded-md">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-sm md:text-md"
              />
              <span className="text-white text-sm md:text-md">11/15</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                Design new homepage layout
              </h5>
              <p className="text-[#64748B] text-sm md:text-md font-semibold">
                Website Redesign
              </p>
            </div>
            <div className="flex items-center gap-3 bg-orange-600 p-1 rounded-md">
              <FontAwesomeIcon
                icon={faClock}
                className="text-white text-sm md:text-md"
              />
              <span className="text-white text-sm md:text-md">11/15</span>
            </div>
          </div>
        </div>
      </div>
      {/* AI Features */}
      <div className="bg-white border border-gray-200 shadow-2xl w-full md:w-105 p-4">
        <div className="flex items-center justify-center md:justify-start m-4">
          <div>
            <FontAwesomeIcon
              icon={faRobot}
              className="text-white bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] p-4 font-extrabold text-2xl rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h5 className="text-[#0F172A] text-xl font-bold mx-6">
              AI Assistant
            </h5>
            <p className="text-sm mx-3 md:text-md font-semibold text-[#64748B]">
              Ask me anything about your projects
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-evenly items-center">
            <button className="border border-gray-300 text-[#0F172A] px-3 md:px-4 py-2 md:py-3 rounded-lg  text-xs md:text-sm me-3">Generate Project Summary</button>
            <button className="border border-gray-300 text-[#0F172A] px-3 md:px-4 py-2 md:py-3 rounded-lg  text-xs md:text-sm me-3">Suggest Tasks</button>
          </div>
          <div className="flex justify-evenly items-center">
            <button className="border border-gray-300 text-[#0F172A] px-3 md:px-4 py-2 md:py-3 rounded-lg  text-xs md:text-sm me-3">Analyse Team Perfomance</button>
            <button className="border border-gray-300 text-[#0F172A] px-3 md:px-4 py-2 md:py-3 rounded-lg  text-xs md:text-sm me-3">Weekly Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;

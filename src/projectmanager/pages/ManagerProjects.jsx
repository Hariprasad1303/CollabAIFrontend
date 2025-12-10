import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Form } from "react-router-dom";

const ManagerProjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-4">
        <div className="flex flex-col  gap-2">
          <h2 className="text-3xl font-extrabold text-center text-[#0F172A]">
            Projects
          </h2>
          <p className="text-[#64748B]">Manage and track all your projects</p>
        </div>

        {/* New Project button */}
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-xl text-white font-bold px-5 py-3 rounded-lg"
        >
          Project
          <FontAwesomeIcon icon={faPlus} className="text-white mx-2" />
        </button>
      </div>
      {/* Modal  start*/}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className="flex justify-center items-center fixed inset-0 bg-black/10 backdrop-blur-sm z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[92%] max-w-3xl rounded-2xl shadow-2xl mx-4 p-4"
          >
            {/* Header Portion */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                Create New Project
              </h3>
              <button
                onClick={() => setModalOpen(!modalOpen)}
                className="text-gray-600 hover:text-red-500 text-3xl font-bold leading-none"
              >
                &times;
              </button>
            </div>
            {/* body Portion */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* project Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Description
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Enter project name..."
                />
              </div>
              {/* project  Description*/}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Name</label>
                <textarea
                  className="w-full h-32 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Enter project description..."
                ></textarea>
              </div>
              {/* project due and project priority */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project priority
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none">
                    <option value="">Select an Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Description
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                    placeholder="Enter project name..."
                  />
                </div>
              </div>
              {/* Bottopm Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold">Cancel</button>
                <button className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-lg text-white font-semibold px-3 py-2 rounded-lg">Create project</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Modal End */}
      <div className="flex justify-between items-center gap-4 mt-4">
        <div className="flex-3">
          <input
            type="text"
            placeholder="Search projects"
            className="border-2 w-full p-3  border-gray-300"
          />
        </div>
        <div className="flex-1 w-full">
          {/* <label className="block text-gray-700 font-semibold mb-2">
            Priority
          </label> */}
          {/* use select for clearer UX */}
          <select className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none">
            <option value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ManagerProjects;

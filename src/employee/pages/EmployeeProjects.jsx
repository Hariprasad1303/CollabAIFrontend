import {
  faArrowRight,
  faEllipsisVertical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../context/projectContext";
import { Link } from "react-router-dom";

const EmployeeProjects = () => {
  //context
  const { projects=[] } = useContext(ProjectContext);

  //state for project filtering
  const [projectFilter, setProjectFilter] = useState("All priorities");

  //state for search term  
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects=(projects||[]).filter((project)=>{
    if(!project) return false;
    const matchPriority=projectFilter=="All priorities"||project.priority==projectFilter;
    const matchSearch=project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchPriority && matchSearch;
  })
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3 p-4 w-full">
      {/* heading section */}
      <div className=" flex-3 flex flex-col md:flex-row items-center justify-start md:justify-between gap-4">
        <div className="flex flex-col  gap-2">
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Projects</h2>
          <p className="text-[#64748B]">Manage and track all your projects</p>
        </div>
      </div>
      {/* input and filtering section */}
      <div className=" flex-1 flex justify-between items-center gap-4 mt-4">
        <div className="flex-3">
          <input
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search projects"
            className="w-full p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        <div className="flex-1 w-full">
          {/* use select for clearer UX */}
          <select value={projectFilter} onChange={(e)=>setProjectFilter(e.target.value)} className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none">
            <option
              className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
              value=""
            >
              All priorities
            </option>
            <option
              className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
              value="High"
            >
              High
            </option>
            <option
              className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
              value="Medium"
            >
              Medium
            </option>
            <option
              className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
              value="Low"
            >
              Low
            </option>
          </select>
        </div>
      </div>
      {/* project container */}
      <div className="flex flex-col md:flex-row w-full ">
        {/*sub containetr  */}
        <div className="flex-1 flex flex-col bg-white rounded-xl p-6">
          {/* project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="relative flex flex-col gap-3 bg-white shadow-md hover:shadow-2xl rounded-xl transition-all duration-300 border border-gray-200 p-6"
              >
                {/*project description  */}
                <span
                  className={`absolute top-4 right-12 px-3 py-1 text-xs font-semibold rounded-full ${
                    project.priority == "High"
                      ? "bg-red-100 text-red-600"
                      : project.priority == "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {project.priority}
                </span>
                {/* projet name */}
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-purple-600 transition">
                  {project.name}
                </h2>
                {/* project description */}
                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>
                {/* project progression */}
                <div className="flex flex-col gap-1.5">
                  <h5 className="text-[#0F172A] text-md md:text-lg font-bold">
                    {project.name}
                  </h5>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0F172A] text-3xs md:text-sm font-semibold">
                      24 tasks
                    </span>
                    <p className="flex items-center bg-purple-600 text-white text-3xs md:text-sm  p-1 md:p-2 rounded-lg">
                      90%
                    </p>
                  </div>
                  <div className="bg-pink-500 relative h-2.5 md:h-3 rounded-lg">
                    <div className="absolute bg-purple-600 w-[90%] h-2.5 md:h-3 rounded-lg z-40"></div>
                  </div>
                </div>
                {/* bottom row */}
                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                  <span>📅{new Date(project.date).toLocaleDateString()}</span>
                  <Link to={`${project._id}`}>
                    <button className="text-purple-600 font-semibold hover:underline">
                      View More <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProjects;

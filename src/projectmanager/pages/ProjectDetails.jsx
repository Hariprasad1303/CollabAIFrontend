import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getEveryDetailsProjectAPI } from "../../services/allAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowTrendUp,
  faBarsProgress,
  faCalendarDay,
  faCircleCheck,
  faClipboardList,
  faClock,
  faListCheck,
  faPlus,
  faTasks,
  faUsers,
  faUsersSlash,
} from "@fortawesome/free-solid-svg-icons";

const ProjectDetails = () => {
  //js code

  //state for holding  projectStats
  const [projectStats, setProjectStats] = useState({});

  //state for project
  const [project, setProject] = useState([]);

  //state for tasks
  const [tasks, setTasks] = useState([]);

  //state for Members
  const [members, setMembers] = useState([]);

  //function to get projectdetails
  const getFullProjectDetails = async (projectId) => {
    try {
      const result = await getEveryDetailsProjectAPI(projectId);
      console.log(result.data);
      setProjectStats(result.data.stats);
      setProject(result.data.project[0]);
      setTasks(result.data.Tasks);
      setMembers(result.data.members);
    } catch (err) {
      console.log(err.message);
    }
  };

  //to get id
  const { id } = useParams();

  //useEffect
  useEffect(() => {
    if (id) {
      getFullProjectDetails(id);
    }
  }, [id]);
  return (
    <div className="flex flex-col gap-3">
      {/*Project Heading  */}
      <div className="flex  justify-center md:justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl text-[#0F172A] font-extrabold px-4">
            {project.name}
          </h2>
          <p className="text-[#64748B] text-md md:text-xl text-justify font-normal px-4">
            {project.description}
          </p>
        </div>
        <div className="hidden md:block bg-purple-200  px-4 py-2 text-purple-600 font-bold p-2 rounded-xl">
          project Manager
        </div>
      </div>
      {/* project stats */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* total members */}
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Team Members
            </h4>
            <span className="font-extrabold text-3xl md:text-4xl text-[#0F172A]">
              {projectStats.totalMembers}
            </span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-purple-600 text-3xl md:text-4xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        {/* total tasks */}
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Total Tasks
            </h4>
            <span className="font-extrabold text-3xl md:text-4xl text-[#0F172A]">
              {projectStats.totaltasks}
            </span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faTasks}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        {/*Todo Tasks*/}
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Todo
            </h4>
            <span className="font-extrabold text-3xl md:text-4xl text-[#0F172A]">
              {projectStats.todo}
            </span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        {/*in-progress tasks Tasks*/}
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              In Progress
            </h4>
            <span className="font-extrabold text-3xl md:text-4xl text-[#0F172A]">
              {projectStats.inProgress}
            </span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faBarsProgress}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        {/* Completed Tasks*/}
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Completed
            </h4>
            <span className="font-extrabold text-3xl md:text-4xl text-[#0F172A]">
              {projectStats.completed}
            </span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        {/* project due date */}
        <div className="flex-1 flex items-center justify-between shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Due date
            </h4>
            <span className="font-extrabold text-2xl md:text-3xl text-[#0F172A]">
              {project.date &&
                new Date(project.date)
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })
                  .replace(",", "")}
            </span>
          </div>
          <div className="bg-purple-200 p-4 rounded-lg">
            <FontAwesomeIcon
              icon={faCalendarDay}
              className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
            />
          </div>
        </div>
        {/* project progress bar */}
        <div className="flex-1 flex flex-col items-center justify-start shadow-4xl border border-gray-300 rounded-lg p-4 shadow-lg">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#64748B] text-md md:text-xl font-bold">
              Project progress
            </h4>
          </div>
          <div className="w-full flex flex-col gap-1.5 mt-6">
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex justify-between items-center gap-4">
                <span className="text-[#0F172A] text-xs md:text-sm font-semibold">
                  {projectStats.totaltasks} tasks
                </span>
                <p className="bg-purple-600 text-white text-xs md:text-xs font-semibold p-1 md:p-1 rounded-lg flex items-center">
                  90%
                </p>
              </div>
            </div>
            <div className="bg-pink-500 relative h-2.5 md:h-3 rounded-lg">
              <div className=" absolute bg-purple-600 w-[90%] h-2.5 md:h-3 rounded-lg z-40"></div>
            </div>
          </div>
        </div>
      </div>
      {/*task section */}
      <div className="w-full p-4  h-100 flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-full border border-gray-300 shadow-lg">
            <div className="flex items-center justify-center">
              <h2 className=" p-3 text-2xl text-center font-bold text-[#0F172A]">
                Todo tasks
              </h2>{" "}
              <FontAwesomeIcon
                icon={faClipboardList}
                className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
              />
            </div>
          </div>
          <div className="w-full bg-white flex flex-col gap-3 justify-between items-center p-3">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="w-full flex flex-col gap-2 border border-gray-100 shadow-md p-4"
              >
                <div className="w-full flex justify-between items-center">
                  <h3>{task.title}</h3>
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  {/* task priority */}
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      task.priority === "Medium"
                        ? "text-red-600 bg-red-100"
                        : task.priority == "Medium"
                        ? "text-yellow-600 bg-yellow-100"
                        : "text-green-600 bg-green-100"
                    }`}
                  >
                    {task.priority}
                  </span>
                  {/* user priority */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center text-white text-sm font-bold">
                      {task.assignedTo.username.trim()[0].toUpperCase() || "U"}
                    </div>
                    <span>{/* {tasks.assignedTo.username} */}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full border border-gray-300 shadow-lg">
              <div className="flex items-center justify-center">
                <h2 className=" p-3 text-2xl text-center font-bold text-[#0F172A]">
                  In Progress taks
                </h2>{" "}
                <FontAwesomeIcon
                  icon={faBarsProgress}
                  className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
                />
              </div>
            </div>
            <div className="w-full bg-white flex flex-col gap-3 justify-between items-center p-3">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="w-full flex flex-col gap-2 border border-gray-100 shadow-md p-4"
                >
                  <div className="w-full flex justify-between items-center">
                    <h3>{task.title}</h3>
                    <button>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* task priority */}
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        task.priority === "Medium"
                          ? "text-red-600 bg-red-100"
                          : task.priority == "Medium"
                          ? "text-yellow-600 bg-yellow-100"
                          : "text-green-600 bg-green-100"
                      }`}
                    >
                      {task.priority}
                    </span>
                    {/* user priority */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center text-white text-sm font-bold">
                        {task.assignedTo.username.trim()[0].toUpperCase() ||
                          "U"}
                      </div>
                      <span>{/* {tasks.assignedTo.username} */}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex-1 flex flex-col gap-2">
            <div className="w-full border border-gray-300 shadow-lg">
              <div className="flex items-center justify-center">
                <h2 className=" p-3 text-2xl text-center font-bold text-[#0F172A]">
                  Completed tasks
                </h2>{" "}
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-purple-600 text-2xl md:text-3xl font-bold md:font-extrabold"
                />
              </div>
            </div>
            <div className="w-full bg-white flex flex-col gap-3 justify-between items-center p-3">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="w-full flex flex-col gap-2 border border-gray-100 shadow-md p-4"
                >
                  <div className="w-full flex justify-between items-center">
                    <h3>{task.title}</h3>
                    <button>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    {/* task priority */}
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        task.priority === "Medium"
                          ? "text-red-600 bg-red-100"
                          : task.priority == "Medium"
                          ? "text-yellow-600 bg-yellow-100"
                          : "text-green-600 bg-green-100"
                      }`}
                    >
                      {task.priority}
                    </span>
                    {/* user priority */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center text-white text-sm font-bold">
                        {task.assignedTo.username.trim()[0].toUpperCase() ||
                          "U"}
                      </div>
                      <span>{/* {tasks.assignedTo.username} */}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
};

export default ProjectDetails;

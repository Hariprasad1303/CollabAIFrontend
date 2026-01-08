import {
  faClock,
  faClockFour,
  faEnvelope,
  faEnvelopeSquare,
  faFolderOpen,
  faList,
  faMessage,
  faTable,
  faTasks,
  faTasksAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  createTaskAPI,
  getAllTaskAPI,
  getProjectAPI,
  getProjectMembersAPI,
} from "../../services/allAPI";
const ManagerTaskProvider = () => {
  //state for showing add task modal
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  // tab
  const tabs = [
    { id: "listview", label: "List view", icon: faList },
    { id: "tableview", label: "Table", icon: faTable },
  ];

  //set Task
  const [tasks, setTasks] = useState([]);

  //state for task details
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    priority: "",
  });
  //state for tab
  const [activeTab, setActiveTab] = useState("List View");

  //state for getting details of project created by manager
  const [projects, setProjects] = useState([]);

  //state for members
  const [members, setMembers] = useState([]);

  //state for getting selected projects
  const [selectedProject, setSelectedProject] = useState("");

  //state for assigned project
  const [assignedUser, setAssignedUser] = useState("");

  //state for projectDuedate
  const [projectDuedate, setProjectDueDate] = useState("");

  //state for task due date
  const [taskDuedate, setTaskDueDate] = useState("");

  //function for getting project details
  const getManagerProjects = async () => {
    try {
      const result = await getProjectAPI();
      console.log(result);
      setProjects(result.data);
    } catch (err) {
      console.log(err);
      toast.warning("Unable to fetch project details");
    }
  };

  //fetch project memebers for each projects
  const getFetchMembers = async (projectId) => {
    try {
      const result = await getProjectMembersAPI(projectId);
      console.log(result.data);
      setMembers(result.data);
    } catch (err) {
      console.log(err);
      toast.warning("Fetching prof project memebers failed");
    }
  };

  //function to project change
  const handleProjectChange = async (e) => {
    const projectId = e.target.value;
    console.log(projectId);
    setSelectedProject(projectId);
    //get project
    const project = projects.find((p) => String(p._id) === String(projectId));
    console.log(project);

    //get members
    if (project) {
      //project due date fetching
      if (project.date) {
        setProjectDueDate(project.date.split("T")[0]);
      } else {
        setProjectDueDate("");
      }
      getFetchMembers(projectId);
    } else {
      setMembers([]);
      setProjectDueDate("");
    }
  };

  //function to create tasks
  const handleCreateTask = async (req, res) => {
    try {
      // validate require fields
      const { title, description, priority } = taskDetails;
      console.log(
        title,
        description,
        priority,
        selectedProject,
        taskDuedate,
        assignedUser
      );

      const payload = {
        title: title,
        description: description,
        priority: priority,
        projectId: selectedProject,
        dueDate: taskDuedate,
        assignedTo: assignedUser,
      };
      if (
        !title ||
        !description ||
        !priority ||
        !selectedProject ||
        !taskDuedate ||
        !assignedUser
      ) {
        toast.info("Please fill all the fields");
      } else {
        //api call
        const result = await createTaskAPI(payload);
        console.log(result.data);
        if (result.status == 200) {
          toast.success("task created suceesfully");
          setTaskDetails({
            title: "",
            description: "",
            priority: "",
          });
          setAssignedUser("");
          setSelectedProject("");
          setTaskDueDate("");
          setTeamModalOpen(false);
        } else if (result.status == 400) {
          toast.warning(result.response.data);
          setTaskDetails({
            title: "",
            description: "",
            priority: "",
          });
          setAssignedUser("");
          setSelectedProject("");
          setTaskDueDate("");
          setTeamModalOpen(false);
        } else {
          toast.warning("Something went wrong");
          setTaskDetails({
            title: "",
            description: "",
            priority: "",
          });
          setAssignedUser("");
          setSelectedProject("");
          setTaskDueDate("");
          setTeamModalOpen(false);
        }
      }
    } catch (err) {
      console.log(err);
      toast.warning("task creation failed");
    }
  };

  //const get all tasks
  const getAlltasks = async () => {
    try {
      const result = await getAllTaskAPI();
      console.log(result);
      setTasks(result.data);
    } catch (err) {
      console.log(err);
      toast.warning("Tasks fetching failed successfully");
    }
  };

  //page loading effect
  useEffect(() => {
    getManagerProjects();
    getAlltasks();
  }, []);

  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      {/* task management heading  Heading */}
      <div className=" flex-3 flex flex-col md:flex-row items-center justify-start md:justify-between gap-4">
        <div className="flex flex-col  gap-2">
          <h2 className="text-3xl font-extrabold bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent">
            Task Management
          </h2>
          <p className="text-[#64748B]">
            Create, assign, and manage tasks for your team
          </p>
        </div>
        {/* New Project button */}
        <div className="flex gap-4">
          <button
            onClick={() => setTeamModalOpen(!teamModalOpen)}
            className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-xl text-white font-bold px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
          >
            Create Task
            <FontAwesomeIcon
              icon={faTasksAlt}
              className="text-white mx-2 hover:text-white transition-all duration-300"
            />
          </button>
        </div>
      </div>
      {/* Task assigned data data */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* manager Team data card1  */}
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faClock}
              className=" bg-purple-200 rounded-full p-4 text-purple-700 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <p className="text-[#64748B] text-lg font-bold mb-2">Total Tasks</p>
            <span className="text-[#0F172A] text-4xl font-extrabold">8</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faClock}
              className=" bg-orange-200 rounded-full p-4 text-orange-400 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <p className="text-[#64748B] text-lg font-bold mb-2">In Progress</p>
            <span className="text-[#0F172A] text-4xl font-extrabold">0</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faClock}
              className=" bg-green-200 rounded-full p-4 text-green-700 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <div>
              <p className="text-[#64748B] text-lg font-bold mb-2">
                Unassigned
              </p>
              <span className="text-[#0F172A] text-4xl font-extrabold">0</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faClockFour}
              className=" bg-cyan-200 rounded-full p-4 text-cyan-700 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <div>
              <p className="text-[#64748B] text-lg font-bold mb-2">Completed</p>
              <span className="text-[#0F172A] text-4xl font-extrabold">0</span>
            </div>
          </div>
        </div>
      </div>
      {/* search bar and dropdowns */}
      <div className=" flex-1 flex justify-between items-center gap-4 mt-4">
        {/* search bar */}
        <div className="flex-2">
          <input
            type="text"
            placeholder="Search projects"
            className="border-2 w-full p-3  border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
        {/* drop down */}
        <div className="flex gap-4">
          {/*task status  dropdown */}
          <div className="flex-1 w-full">
            {/* use select for clearer UX */}
            <select className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none">
              <option
                className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
                value=""
              >
                Task status
              </option>
              <option
                className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
                value="High"
              >
                todo
              </option>
              <option
                className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
                value="Medium"
              >
                in-progress
              </option>
              <option
                className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
                value="Low"
              >
                done
              </option>
            </select>
          </div>
          {/* project name drop down*/}
          <div className="flex-1 w-full">
            {/* use select for clearer UX */}
            <select className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none">
              <option
                className="bg-purple-600 hover:bg-pink-500 text-white text-md font-semibold p-2"
                value=""
              >
                Select project
              </option>
              {projects.map((project) => (
                <option key={project._id} value={project.name}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* tab for list view and table view */}
      {/* tab */}
      <div className="w-full">
        {/*Tab Headers */}
        <div className="inline-flex rounded-lg bg-gray-100 p-2 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                activeTab == tab.id
                  ? "bg-white text-[#0F172A] font-extrabold shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <FontAwesomeIcon icon={tab.icon} className="me-2 text-md" />
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="mt-6">
          {activeTab == "listview" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-2 bg-gray-50 min-h-screen">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition overflow-hidden"
                >
                  {/* header */}
                  <div className="bg-linear-to-r from-purple-500 to-pink-400 p-4">
                    <h3 className="text-white font-semibold text-lg truncate">
                      {task.title}
                    </h3>
                    <p className="text-indigo-100 text-xs font-semibold mt-2">{task.dueDate.split("T")[0]}</p>
                  </div>
                  {/* Body */}
                  <div className="p-4 space-y-3">
                    {/*Description*/}
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {task.description}
                    </p>
                    {/* prioriyty+user */}
                    <div className="flex justify-between items-center">
                      {/* priority */}
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600 ${task.priority=="High"?"text-red-600 bg-red-100":task.priority=="Medium"?"text-yellow-600 bg-yellow-100":"text-green-600 bg-green-100" }`}>
                        {task.priority}
                      </span>
                      {/* user profile */}
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 flex justify-center items-center text-white text-sm font-bold">
                          {task.assignedTo.username.trim()[0].toUpperCase() ||
                            "U"}
                        </div>
                        <span>{task.assignedTo.username}</span>
                      </div>
                    </div>
                    <p>{task.projectId.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab == "invites" && <div>Pending Invites</div>}
        </div>
      </div>
      {/* Team Invitation Modal  start*/}
      {teamModalOpen && (
        <div
          onClick={() => setTeamModalOpen(!teamModalOpen)}
          className="flex justify-center items-center fixed inset-0 bg-black/10 backdrop-blur-sm z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[92%] max-w-xl rounded-2xl shadow-2xl mx-4 p-4 overflow-y-auto"
          >
            {/* Header Portion */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    className="text-purple-600 text-4xl font-bold me-2"
                  />
                  Create Task
                </h3>
                <p className="text-[#64748B] text-md  font-semibold ">
                  Create a task and assign it to a team member
                </p>
              </div>
              <button
                onClick={() => setTeamModalOpen(!teamModalOpen)}
                className="text-gray-600 hover:text-red-500 text-3xl font-bold leading-none"
              >
                &times;
              </button>
            </div>
            {/* body Portion */}
            <form className="space-y-6">
              {/*Task title*/}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Task title
                </label>
                <input
                  value={taskDetails.title}
                  onChange={(e) =>
                    setTaskDetails({ ...taskDetails, title: e.target.value })
                  }
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Design sign up page"
                />
              </div>
              {/*Task Description*/}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Task description
                </label>
                <textarea
                  value={taskDetails.description}
                  onChange={(e) =>
                    setTaskDetails({
                      ...taskDetails,
                      description: e.target.value,
                    })
                  }
                  className="w-full h-32 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Enter Task description..."
                ></textarea>
              </div>
              {/* Task details*/}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Asssigned To
                        </label>
                        <select
                          value={assignedUser}
                          onChange={(e) => setAssignedUser(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                        >
                          <option value="">Select the Priority</option>
                          {Array.isArray(members) &&
                            members.map((m) => (
                              <option key={m.userId._id} value={m.userId._id}>
                                {m.userId.email}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Project
                        </label>
                        <select
                          value={selectedProject}
                          onChange={handleProjectChange}
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                        >
                          <option value="">Project</option>
                          {Array.isArray(projects) &&
                            projects.map((project) => (
                              <option key={project._id} value={project._id}>
                                {project.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Priority
                        </label>
                        <select
                          value={taskDetails.priority}
                          onChange={(e) =>
                            setTaskDetails({
                              ...taskDetails,
                              priority: e.target.value,
                            })
                          }
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                        >
                          <option value="">Select the Priority</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label
                          htmlFor="dueDate"
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Due Date
                        </label>
                        <input
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          max={projectDuedate}
                          value={taskDuedate}
                          onChange={(e) => setTaskDueDate(e.target.value)}
                          placeholder="choose task due date"
                          id="dueDate"
                          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Task Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleCreateTask}
                  className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-lg text-white font-semibold px-3 py-2 rounded-lg"
                >
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-xl text-white me-2"
                  />{" "}
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/*Team Invitation Modal End */}
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
};

export default ManagerTaskProvider;

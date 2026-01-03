import {
  faArrowRight,
  faEllipsisVertical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  deleteProjectAPI,
  getProjectAPI,
  projectAPI,
  updateProjectAPI,
} from "../../services/allAPI";

const ManagerProjects = () => {
  //state for getting project details
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    priority: "",
    date: "",
  });
  //state for getting projects form db
  const [projects, setProjects] = useState([]);

  //state for selected Project
  const [selectedProject,setSelectedProject]=useState(null);

  //useEffect for defaukltedly filled form for updating project data
  useEffect(()=>{
    if(selectedProject){
      setProjectDetails({
        name:selectedProject.name,
        description:selectedProject.description,
        priority:selectedProject.priority,
        date:selectedProject.date
      })
    }
  },[selectedProject]);
  
  //function for creating projects
  const handleCreateProject = async (req, res) => {
    console.log("button clicked");
    const { name, description, priority, date } = projectDetails;
    console.log(name, description, priority, date);
    if (!name || !description || !priority || !date) {
      toast.info("Please fill all the details");
    } else {
      // api call
      const result = await projectAPI({ name, description, priority, date });
      console.log(result);
      if (result.status == 200) {
        toast.success("Project created succesfully");
        setProjectDetails({
          name: "",
          description: "",
          priority: "",
          date: "",
        });
        setModalOpen(false);
        getProjects();
      } else if (result.status == 400) {
        toast.warning(result.response.data);
        setProjectDetails({
          name: "",
          description: "",
          priority: "",
          date: "",
        });
      } else {
        toast.warning("something went wrong");
        setProjectDetails({
          name: "",
          description: "",
          priority: "",
          date: "",
        });
      }
    }
  };
  //page loading effect
  useEffect(() => {
    getProjects();
  }, []);

  //state for project filtering
  const [projectFilter, setProjectFilter] = useState("All priorities");

  //state for search feature
  const [searchTerm, setSearchTerm] = useState("");

  //search +filter
  const filteredProjects = projects.filter((project) => {
    const matchPriority =
      projectFilter === "All priorities" || project.priority == projectFilter;
    const matchSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchPriority && matchSearch;
  });

  //state for project icon
  const [projectIcon, setProjectIcon] = useState(null);
  const getProjects = async () => {
    try {
      const result = await getProjectAPI();
      console.log(result);
      if (result.status == 200) {
        setProjects(result.data);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };

  //functions for deleting the the projects
  const handleDeleteProject=async(projectId)=>{
    try{
      await deleteProjectAPI(projectId);
      toast.success("project deleted succesfully");
      getProjects();
    }catch(err){
      console.log(err);
      toast.warning("Project Deletion failed")
    }
  }
  //function for updating the projects
  const handleUpdateProject = async (projectid) => {
    try{
      await updateProjectAPI(selectedProject._id,projectDetails);
      getProjects();
      setUpdateModal(false);
      setSelectedProject(null);
    }catch(err){
      console.log(err);
      toast.warning("Project updation failed");
    }
  };
  // state for  project  create modal
  const [modalOpen, setModalOpen] = useState(false);

  //state for project update modal
  const [updateModal, setUpdateModal] = useState(false);
  return (
    <div className="flex flex-col gap-3 p-4 w-full">
      {/* first row */}
      <div className=" flex-3 flex flex-col md:flex-row items-center justify-start md:justify-between gap-4">
        <div className="flex flex-col  gap-2">
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Projects</h2>
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
      {/* search bar and filtering dropdown */}
      <div className=" flex-1 flex justify-between items-center gap-4 mt-4">
        {/* search bar */}
        <div className="flex-3">
          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            placeholder="Search projects"
            className="border-2 w-full p-3  border-gray-300"
          />
        </div>
        {/* drop down */}
        <div className="flex-1 w-full">
          {/* use select for clearer UX */}
          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-500 outline-none"
          >
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
      {/* project cards -main container*/}
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
                <button
                  onClick={() =>
                    setProjectIcon(
                      projectIcon === project._id ? null : project._id
                    )
                  }
                >
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="absolute ms-4 top-4 right-2"
                  />
                </button>
                {/* project card modal starting */}
                {projectIcon == project._id && (
                  <div className="absolute top-10 right-2 w-36 bg-white shadow-xl rounded-lg p-2 z-50">
                    <button
                      onClick={() =>{setSelectedProject(project) ;setUpdateModal(!updateModal)}}
                      className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                    >
                      Update
                    </button>
                    <button
                      onClick={() =>handleDeleteProject(project._id)}
                      className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                    <button className="block w-full text-left px-2 py-1 hover:bg-gray-100">
                      Add task
                    </button>
                  </div>
                )}
                {/* projectcard modal ending */}
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
      {/* project create Modal  start*/}
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
            <form className="space-y-6">
              {/* project Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Name
                </label>
                <input
                  value={projectDetails.name}
                  onChange={(e) => {
                    setProjectDetails({
                      ...projectDetails,
                      name: e.target.value,
                    });
                  }}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Enter project name..."
                />
              </div>
              {/* project  Description*/}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Description
                </label>
                <textarea
                  value={projectDetails.description}
                  onChange={(e) => {
                    setProjectDetails({
                      ...projectDetails,
                      description: e.target.value,
                    });
                  }}
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
                  <select
                    value={projectDetails.priority}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        priority: e.target.value,
                      });
                    }}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  >
                    <option value="">Select an Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Date
                  </label>
                  <input
                    value={projectDetails.date}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        date: e.target.value,
                      });
                    }}
                    type="date"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                    placeholder="Enter project name..."
                  />
                </div>
              </div>
              {/* Bottopm Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  type="button"
                  className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-lg text-white font-semibold px-3 py-2 rounded-lg"
                >
                  Create project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* project create Modal End */}
      {/* project update Modal  start*/}
      {updateModal && (
        <div
          onClick={() => setUpdateModal(!updateModal)}
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
            <form className="space-y-6">
              {/* project Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Name
                </label>
                <input
                  value={projectDetails.name}
                  onChange={(e) => {
                    setProjectDetails({
                      ...projectDetails,
                      name: e.target.value,
                    });
                  }}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Enter project name..."
                />
              </div>
              {/* project  Description*/}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Description
                </label>
                <textarea
                  value={projectDetails.description}
                  onChange={(e) => {
                    setProjectDetails({
                      ...projectDetails,
                      description: e.target.value,
                    });
                  }}
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
                  <select
                    value={projectDetails.priority}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        priority: e.target.value,
                      });
                    }}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  >
                    <option value="">Select an Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Project Date
                  </label>
                  <input
                    value={projectDetails.date}
                    onChange={(e) => {
                      setProjectDetails({
                        ...projectDetails,
                        date: e.target.value,
                      });
                    }}
                    type="date"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                    placeholder="Enter project name..."
                  />
                </div>
              </div>
              {/* Bottopm Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={()=>handleUpdateProject()
                  }
                  type="button"
                  className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-lg text-white font-semibold px-3 py-2 rounded-lg"
                >
                  Update changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* project update Modal End */}
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
};

export default ManagerProjects;

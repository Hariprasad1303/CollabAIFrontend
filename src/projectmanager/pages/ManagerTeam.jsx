import {
  faArrowTrendUp,
  faEnvelope,
  faEnvelopeCircleCheck,
  faEnvelopeOpen,
  faEnvelopeSquare,
  faFolderOpen,
  faFolderTree,
  faLightbulb,
  faMessage,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectAPI, projectInviteAPI } from "../../services/allAPI";
import { toast, ToastContainer } from "react-toastify";

const ManagerTeam = () => {
  const tabs = [
    { id: "teammembers", label: "Team members", icon: faUsers },
    { id: "invites", label: "pending Invites", icon: faEnvelope },
  ];
  //state for getting the project details
  const [projects, setProjects] = useState([]);

  //functions for getting the project details
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

  //page reloading  
  useEffect(()=>{
    getProjects();
  },[])

  //state for   holding invitation details
  const [invitationDetails, setInvitationDetails] = useState({
    username: "",
    email: "",
    projectName: "",
  });
  //function for sending invitation
  const handleSendInvitation=async() => {
    const { username, email, projectName } = invitationDetails;
    console.log(username, email, projectName);
    if (!username || !email || !projectName) {
      toast.info("please fill all the details");
    } else {
      //api call
      const result = await projectInviteAPI({ username, email, projectName });
      console.log(result);
      if(result.status==200){
        toast.success("Project invitation invitation sent successfully");
        setInvitationDetails({
          username:"",
          email:"",
          projectName:""
        })
      }else if(result.status==400){
        toast.warning(result.response.data);
         setInvitationDetails({
          username:"",
          email:"",
          projectName:""
        })
      }else{
        toast.warning("something went wrong");
         setInvitationDetails({
          username:"",
          email:"",
          projectName:""
        })
      }
    }
  };
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Team Members");
  return (
    <div className="flex flex-col gap-6 p-4 w-full">
      {/* Manager Team  Heading */}
      <div className=" flex-3 flex flex-col md:flex-row items-center justify-start md:justify-between gap-4">
        <div className="flex flex-col  gap-2">
          <h2 className="text-3xl font-extrabold bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent">
            My Team
          </h2>
          <p className="text-[#64748B]">
            Manage team members and invite new colleagues to your projects
          </p>
        </div>
        {/* New Project button */}
        <div className="flex gap-4">
          <Link to={"/manager/projects"}>
            <button className="text-md md:text-xl text-[#0F172A] font-bold px-5 py-3 rounded-lg border-gray-400 border">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-[#0F172A] mx-2"
              />
              View Projects
            </button>
          </Link>
          <button
            onClick={() => setTeamModalOpen(!teamModalOpen)}
            className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-xl text-white font-bold px-5 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
          >
            Invite by Email
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white mx-2 hover:text-white transition-all duration-300"
            />
          </button>
        </div>
      </div>
      {/* Manager team card */}
      <div className="flex flex-col md:flex-row items-center justify-start gap-6 bg-purple-100 border-2 border-purple-300 p-6 rounded-lg">
        <div className="bg-violet-300 rounded-full p-3">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-violet-700 text-2xl"
          />
        </div>
        <div>
          <h5 className="text-[#0F172A] text-2xl font-bold">Team Invitation</h5>
          <p className="text-[#64748B] text-lg">
            Invite new team members by email. They will receive an invitation to
            join your project. You can also add existing users directly to your
            projects.
          </p>
        </div>
      </div>
      {/* Manager Team data */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* manager Team data card1  */}
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              className=" bg-purple-200 rounded-full p-4 text-purple-700 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <p className="text-[#64748B] text-lg font-bold mb-2">
              Team Members
            </p>
            <span className="text-[#0F172A] text-4xl font-extrabold">8</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              className=" bg-orange-200 rounded-full p-4 text-orange-400 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <p className="text-[#64748B] text-lg font-bold mb-2">
              Pending Time
            </p>
            <span className="text-[#0F172A] text-4xl font-extrabold">0</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              className=" bg-green-200 rounded-full p-4 text-green-700 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <div>
              <p className="text-[#64748B] text-lg font-bold mb-2">
                Task Completed
              </p>
              <span className="text-[#0F172A] text-4xl font-extrabold">
                0/0
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-start w-full md:4/12 p-6 shadow-md bg-white border-gray-300 border gap-3 rounded-md">
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              className=" bg-cyan-200 rounded-full p-4 text-cyan-700 text-md md:text-lg font-extrabold me-3 "
            />
          </div>
          <div>
            <div>
              <p className="text-[#64748B] text-lg font-bold mb-2">
                Completion Rate
              </p>
              <span className="text-[#0F172A] text-4xl font-extrabold">0%</span>
            </div>
          </div>
        </div>
      </div>
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
          {activeTab == "teammembers" && <div>Team members</div>}
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
            className="bg-white w-[92%] max-w-xl rounded-2xl shadow-2xl mx-4 p-4"
          >
            {/* Header Portion */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                  <FontAwesomeIcon
                    icon={faEnvelopeSquare}
                    className="text-purple-600 text-4xl font-bold me-2"
                  />
                  Invite Team Member
                </h3>
                <p className="text-[#64748B] text-md  font-semibold ">
                  Send an invitation email to add a new team member to your
                  project.
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
              {/*Invitaion username */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Username
                </label>
                <input
                  value={invitationDetails.username}
                  onChange={(e) => {
                    setInvitationDetails({
                      ...invitationDetails,
                      username: e.target.value,
                    });
                  }}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="John Doe"
                />
              </div>
              {/* Invitaion Email Description*/}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  value={invitationDetails.email}
                  onChange={(e) => {
                    setInvitationDetails({
                      ...invitationDetails,
                      email: e.target.value,
                    });
                  }}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="college@example.com"
                />
              </div>
              {/* Assigned Project*/}
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Asssigned Project
                  </label>
                  <select
                    value={invitationDetails.projectName}
                    onChange={(e) => {
                      setInvitationDetails({
                        ...invitationDetails,
                        projectName: e.target.value,
                      });
                    }}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-purple-600 outline-none"
                  >
                  {
                    projects.map((project)=>(
                      <option key={project._id} value={project.name}>{project.name}</option>
                    ))
                  }
                  </select>
                </div>
              </div>
              {/* Invitation Information */}
              <div className="flex flex-col">
                <h5 className=" font-bold text-xl text-[#0F172A]">
                  What happens next?
                </h5>
                <ul className="mt-2">
                  <li className="mb-1 text-[#64748B] text-sm">
                    The invitaion will receive an email with link to join
                  </li>
                  <li className="mb-1 text-[#64748B] text-sm">
                    They will be assigned "Team member Role"
                  </li>
                  <li className="mb-1 text-[#64748B] text-sm">
                    The invitaion will expire in 7 days
                  </li>
                </ul>
              </div>
              {/* Bottopm Buttons */}
              <div className="flex justify-end gap-4 mt-4">
                <button className="px-3 py-2 bg-red-600 text-white rounded-lg font-semibold">
                  Cancel
                </button>
                <button
                  onClick={handleSendInvitation}
                  type="button"
                  className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-md md:text-lg text-white font-semibold px-3 py-2 rounded-lg"
                >
                  <FontAwesomeIcon
                    icon={faMessage}
                    className="text-xl text-white me-2"
                  />{" "}
                  Send Invitaion
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

export default ManagerTeam;

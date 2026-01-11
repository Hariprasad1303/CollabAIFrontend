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
import { toast, ToastContainer } from "react-toastify";
import { getTeamMemberAPI } from "../../services/allAPI";

const ManagerTeam = () => {
  //tab details
  const tabs = [
    { id: "teammembers", label: "Team members", icon: faUsers },
    { id: "invites", label: "pending Invites", icon: faEnvelope },
  ];
  //state for modal
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  //state for tab
  const [activeTab, setActiveTab] = useState("Team Members");

  //state for getting team member details
  const [teamMember, setTeamMember] = useState({});

  //function for getting teammmember details
  const getTeamMember = async () => {
    try {
      const result = await getTeamMemberAPI();
      console.log(result.data);
      setTeamMember(result.data);
      const members = result.data.members;
      console.log(members);
    } catch (err) {
      console.log(err);
      toast.warning("Team details feching failed");
    }
  };

  //page loading effect
  useEffect(() => {
    getTeamMember();
  }, []);
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
          <button className="text-md md:text-xl text-[#0F172A] font-bold px-5 py-3 rounded-lg border-gray-400 border">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="text-[#0F172A] mx-2"
            />
            View Projects
          </button>
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
            <span className="text-[#0F172A] text-4xl font-extrabold">
              {teamMember.totalMembers}
            </span>
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
          {activeTab == "teammembers" && (
            <div className="bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
              {/*header*/}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Team
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  People working with you across projects
                </p>
              </div>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                  <thead className="text-gray-500">
                    <tr className="border-b border-gray-100">
                      <th className="px-6 py-3 font-medium text-left">
                        Member
                      </th>
                      <th className="px-6 py-3 font-medium text-left">
                        Project
                      </th>
                      <th className="px-6 py-3 font-medium text-left">
                        Due Date
                      </th>
                      <th className="px-6 py-3 font-medium text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMember.members.map((member) => (
                      <tr key={member._id} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-5 flex items-center gap-4">
                          <div className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-semibold text-lg">
                            {member.username.trim()[0].toUpperCase()}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <p className="font-medium text-gray-900">{member.username}</p>
                            <p className="text-xs text-gray-400">
                              {member.email}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-5 font-medium text-gray-700 mx-2">
                          {member.projects.map((project)=>project.name)},
                        </td>
                        <td className="px-6 py-5 text-gray-500 mx-2">{member.projects.map((project)=>project.dueDate.split("T")[0])}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-green-600 text-sm font-medium">
                              Active
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab == "invites" && <div>Pending Invites</div>}
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
};

export default ManagerTeam;

import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//signup api
export const signupAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/signup`, reqBody);
};

//login api
export const loginAPI = async (reqBody) => {
  return await commonAPI("POST", `${serverURL}/login`, reqBody);
};

//get user details api
export const getUserDetailsAPI = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/userdetails`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//project api
export const projectAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("POST", `${serverURL}/manager/projects`, reqBody, {
    Authorization: `Bearer ${token}`,
  });
};

// get project api
export const getProjectAPI = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/manager/projects`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//get project count api
export const getProjectCountAPI = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/manager/projects/count`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//delete project api
export const deleteProjectAPI = async (projectId) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI(
    "DELETE",
    `${serverURL}/manager/project/${projectId}`,
    "",
    { Authorization: `Bearer ${token}` }
  );
};

//update project api
export const updateProjectAPI = async (projectId, reqBody) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI(
    "PUT",
    `${serverURL}/manager/project/${projectId}`,
    reqBody,
    { Authorization: `Bearer ${token}` }
  );
};

//project invite api
export const projectInviteAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("POST", `${serverURL}/manager/invite`, reqBody, {
    Authorization: `Bearer ${token}`,
  });
};

//get notification API
export const getNotificationAPI = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/notifications`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//get isRead API
export const isReadAPI = async (id) => {
  const token = sessionStorage.getItem("toekn");
  console.log(token);
  return await commonAPI("PUT", `${serverURL}/${id}/read`, "", {
    Authorization: `Bearer ${token}`,
  });
};

//update profile
export const updateProfileAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("PUT", `${serverURL}/profile`, reqBody, {
    Authorization: `Bearer ${token}`,
  });
};

//accept an invite
export const acceptInviteAPI = async (inviteId) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI(
    "PUT",
    `${serverURL}/accept/${inviteId}`,
    {},
    { Authorization: `Bearer ${token}` }
  );
};

//reject an invite
export const rejectInviteAPI = async (inviteId) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI(
    "PUT",
    `${serverURL}/reject/${inviteId}`,
    {},
    { Authorization: `Bearer ${token}` }
  );
};

//get employee projects
export const getEmployeeProjectAPI = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/employee/my-projects`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//get projectMembers api
export const getProjectMembersAPI = async(projectId) => {
  //logic
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI(
    "GET",
    `${serverURL}/manager/project-members/${projectId}`,
    null,
    { Authorization: `Bearer ${token}` }
  );
};

//create task api
export const createTaskAPI=async(reqBody)=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("POST",`${serverURL}/manager/create-task`,reqBody,{Authorization:`Bearer ${token}`})
}

//get tasks
export const getAllTaskAPI=async(projectId)=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/manager/tasks`,null,{Authorization:`Bearer ${token}`})
}

//get task count api(manager)
export const taskCountAPI=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/manager/tasks/count`,null,{Authorization:`Bearer ${token}`});
}

//get task count api(employee)
export const TaskCountEmployeeAPI=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/employee/tasks/count`,null,{Authorization:`Bearer ${token}`})
}

//get team member details api(employee)
export const getTeamMemberAPI=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/employee/team`,null,{Authorization:`Bearer ${token}`})
}

//get team member details (manager)
export const getTeamMemberManagerAPI=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/manager/team`,null,{Authorization:`Bearer ${token}`});
}
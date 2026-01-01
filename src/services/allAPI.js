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
  const token =sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/manager/projects`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//get project api
export const getProjectCountAPI = async () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/manager/projects/count`, null, {
    Authorization: `Bearer ${token}`,
  });
};

//project invite api
export const projectInviteAPI=async(reqBody)=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await  commonAPI("POST",`${serverURL}/manager/invite`,reqBody,{Authorization:`Bearer ${token}`});
}

//get notification API
export const getNotificationAPI=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/notifications`,null,{Authorization:`Bearer ${token}`});
}

//get isRead API
export const isReadAPI=async(id)=>{
  const token=sessionStorage.getItem("toekn");
  console.log(token);
  return await commonAPI("PUT",`${serverURL}/${id}/read`,"",{Authorization:`Bearer ${token}`})
}

//update profile
export const updateProfileAPI = async (reqBody) => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("PUT", `${serverURL}/profile`, reqBody, {
    Authorization: `Bearer ${token}`,
  });
};

//accept an invite
export const acceptInviteAPI=async(inviteId)=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("PUT",`${serverURL}/accept/${inviteId}`,{},{Authorization:`Bearer ${token}`});
}

//reject an invite
export const rejectInviteAPI=async(inviteId)=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("PUT",`${serverURL}/reject/${inviteId}`,{},{Authorization:`Bearer ${token}`});
}


//get employee projects
export const getEmployeeProjectAPI=async()=>{
  const token=sessionStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET",`${serverURL}/employee/my-projects`,null,{Authorization:`Bearer ${token}`});
}

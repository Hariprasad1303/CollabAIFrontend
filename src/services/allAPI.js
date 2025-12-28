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

//project api
export const projectAPI = async (reqBody) => {
  const token = localStorage.getItem("token");
  console.log(token);
  return await commonAPI("POST", `${serverURL}/manager/projects`, reqBody, {
    Authorization: `Bearer ${token}`,
  });
};

// get project api
export const getProjectAPI = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return await commonAPI("GET", `${serverURL}/manager/projects`,null,{
    Authorization: `Bearer ${token}`,
  });
};


//update profile
export const updateProfileAPI=async(reqBody)=>{
    const token=localStorage.getItem("token");
    console.log(token);
    return await commonAPI("PUT",`${serverURL}/manager/profile`,reqBody,{Authorization:`Bearer ${token}`})
}
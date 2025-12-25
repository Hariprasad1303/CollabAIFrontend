import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

//signup api
export const signupAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/signup`,reqBody);
}

//login api
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody);
}


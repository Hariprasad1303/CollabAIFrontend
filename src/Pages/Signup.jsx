import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faUsers,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Signup = () => {
  const tabs = [
    { id: "users", label: "Sign Up(User)", icon: faUsers },
    { id: "admin", label: "Sign Up(Admin)", icon: faUserShield },
  ];
  //state for creating an tag
  const [activeTab, setActiveTab] = useState("users");
  //state for getting data fromn user
  const [userDetails,setUserDetails]=useState({
    username:"",
    email:"",
    password:"",
    role:""
  });
  //handle signup
  const handleSignUp=()=>{
    const {username,email,password,role}=userDetails;
    if(!username || !email ||!password ||!role){
      toast.success("Please fill the form");
    }
    else{
      // api call

    }
  }
  console.log(userDetails);
  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/*left section */}
        <div className=" text-black w-full h-full flex flex-col justify-center items-center bg-[linear-gradient(0deg,rgba(227,216,255,0.7)_0%,rgba(242,233,255,0.7)_100%)]">
          <h2 className="text-[#0F172A] font-extrabold text-center text-4xl md:text-5xl mb-5 mt-10">
            Start Building{" "}
            <span className="bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent ">
              Amazing Things
            </span>
          </h2>
          <p className="text-[#64748B] p-4 text-justify font-bold text-xl mb-5">
            Get started with CollabAI today. No credit card required.
          </p>
          <ul className="flex flex-col items-start mt-8">
            <li className="flex justify-start items-center mb-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-4xl p-1 font-bold me-3"
              />
              <h4> AI-powered task generation</h4>
            </li>
            <li className="flex justify-start items-center  mb-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-4xl p-1 font-bold me-3"
              />
              <h4>Real-time analytics dashboard</h4>
            </li>
            <li className="flex justify-start items-center  mb-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-4xl p-1 font-bold me-3"
              />
              <h4>Integrated team chat</h4>
            </li>
            <li className="flex justify-start items-center  mb-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-4xl p-1 font-bold me-3"
              />
              <h4>Automated workflows</h4>
            </li>
          </ul>
        </div>
        {/*Right Section-includes form */}
        <div className="h-full overflow-y-auto flex justify-center">
          <div className="w-full max-w-2xl mx-auto">
            <div className="h-full overflow-y-auto max-w-2xl lg:max-w-3xl xl:max-w-4xl p-4">
              {/* tab Header */}
              <div className="w-full flex justify-center items-center rounded-xl mt-5 border-2 shadow-2xl border-gray-300 bg-white gap-2 max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {tabs.map((tab) => (
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    key={tab.id}
                    className={`px-6 py-5 flex-1 text-md font-bold rounded-md transition ${
                      activeTab == tab.id
                        ? "bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white font-extrabold shadow-sm"
                        : "bg-white text-purple-600 hover:text-purple-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* tab content */}
              <div>
                {activeTab == "users" && (
                  <div className="flex flex-col justify-start items-stretch my-10">
                    {/*Heading  */}
                    <div>
                      <h3 className="text-[#0F172A]  font-extrabold text-2xl md:text-4xl text-center">
                        Create your account
                      </h3>
                      <p className="text-center p-4">
                        Start your free trial today
                      </p>
                    </div>
                    <div className="w-full p-6 shadow-3xl rounded-2xl border border-gray-300 mt-5 shadow-purple-300">
                      {/* form */}
                      <form className="p-4 flex flex-col justify-between gap-y-5">
                        {/* username */}
                        <div>
                          <label
                            className="block text-[#0F172A] font-bold text-3xs mb-1"
                            htmlFor="userName"
                          >
                            Username
                          </label>
                          <input
                            value={userDetails.username}
                            onChange={(e)=>{setUserDetails({...userDetails,username:e.target.value})}}
                            type="text"
                            placeholder="Hariprasad V V"
                            id="userName"
                            className="border border-[#64748B] w-full p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        {/* email */}
                        <div>
                          <label
                            className="block text-[#0F172A] font-bold text-lg mb-1"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            value={userDetails.email}
                            onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}}
                            type="email"
                            placeholder="name@example.com"
                            id="email"
                            className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        {/* password */}
                        <div>
                          <label
                            className="block text-[#0F172A] font-bold text-lg mb-1"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            value={userDetails.password}
                            onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}}
                            type="email"
                            placeholder="create a strong password"
                            id="password"
                            className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                          />
                          <p className="text-[#64748B] font-medium mt-2 text-sm">
                            Must be at least 8 characters
                          </p>
                        </div>
                        {/* Role */}
                        <div>
                          <label
                            htmlFor="role"
                            className="block text-[#0F172A] font-bold text-lg mb-1"
                          >
                            Role
                          </label>
                          <select
                            value={userDetails.role}
                            onChange={(e)=>{setUserDetails({...userDetails,role:e.target.value})}}
                            id="role"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          >
                            <option
                              value=""
                              className="text-lg text-white font-medium bg-[#0F172A]"
                            >
                              Choose a Role
                            </option>
                            <option
                              value="manager"
                              className="text-lg text-white font-medium bg-[#0F172A]"
                            >
                              manager
                            </option>
                            <option
                              value="employee"
                              className="text-lg text-white font-medium bg-[#0F172A]"
                            >
                              employee
                            </option>
                          </select>
                        </div>
                        {/* create button */}
                        <div className="w-full mt-4">
                            <button type="button" onClick={handleSignUp} className="w-full bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-lg py-4 px-3 text-lg font-bold active:opacity-80  transition duration-300">
                              Create Account
                            </button>
                        </div>
                        <hr className="w-full border-gray-300 mt-4" />
                        {/*google nad github  */}
                        <div className="flex justify-between items-center gap-4">
                          <div className="border border-gray-300 text-lg py-2 px-5 w-full text-[#0F172A] font-medium">
                            <FontAwesomeIcon icon={faGoogle} className="mx-3" />
                            Google
                          </div>
                          <div className="w-full border border-gray-300 text-lg py-2 px-5 text-[#0F172A] font-medium">
                            <FontAwesomeIcon icon={faGithub} className="mx-3" />
                            Github
                          </div>
                        </div>
                        {/* link to sign in page */}
                        <div>
                          <p className="text-[#64748B] text-sm text-center font-medium">
                            Already Have an Account?
                            <Link to={"/login"}>
                              <span className="font-medium text-purple-500 mx-3">
                                Sign in
                              </span>
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                {activeTab == "admin" && (
                  <div className="w-full flex flex-col justify-start items-stretch my-10">
                    {/*Heading  */}
                    <div>
                      <h3 className="text-[#0F172A]  font-extrabold text-2xl md:text-4xl text-center">
                        Create your account
                      </h3>
                      <p className="text-center p-4">
                        Start your free trial today
                      </p>
                    </div>
                    <div  className="w-full p-6 shadow-3xl rounded-2xl border border-gray-300 mt-5  shadow-purple-300">
                      {/* form */}
                      <form className="p-8  flex flex-col justify-between gap-y-6">
                        {/* email */}
                        <div>
                          <label
                            className="block text-[#0F172A] font-bold text-lg mb-1"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            id="email"
                            className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                          />
                        </div>
                        {/* password */}
                        <div>
                          <label
                            className="block text-[#0F172A] font-bold text-lg mb-1"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <input
                            type="email"
                            placeholder="create a strong password"
                            id="email"
                            className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                          />
                          <p className="text-[#64748B] font-medium mt-2 text-sm">
                            Must be at least 8 characters
                          </p>
                        </div>
                        {/* Admin otp verification */}
                        <div className="w-full">
                          <label
                            htmlFor="adminOtp"
                            className="text-[#0F172A] font-bold text-lg mb-1"
                          >
                            Admin OTP
                          </label>
                          <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="enter 6 digit OTP "
                            className="w-full border border-[#64748B] p-2 text-md fond-bold rounded-lg focus:outline-none focus:ring focus:ring-purple-600"
                            id="adminOtp"
                          />
                        </div>
                        {/* create account button */}
                        <div className="w-full">
                            <button type="button" className="w-full bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-lg py-4 px-3 text-lg font-bold active:opacity-80  transition duration-300">
                              Create Account
                            </button>
                        </div>
                        <hr className="w-full border-gray-300 mt-4" />
                        <div className="flex justify-between items-center gap-4">
                          <div className="border text-cneter border-gray-300 text-lg py-2 px-5 w-full text-[#0F172A] font-medium">
                            <FontAwesomeIcon icon={faGoogle} className="mx-3" />
                            Google
                          </div>
                          <div className="w-full border border-gray-300 text-lg py-2 px-5 text-[#0F172A] font-medium">
                            <FontAwesomeIcon icon={faGithub} className="mx-3" />
                            Github
                          </div>
                        </div>
                        {/* link to sign in page */}
                        <div>
                          <p className="text-[#64748B] text-sm text-center font-medium">
                            Already Have an Account?
                            <Link to={"/login"}>
                              <span className="font-medium text-purple-500 mx-3">
                                Sign in
                              </span>
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" theme="colored" autoClose={2000} />
      </div>
    </>
  );
};

export default Signup;

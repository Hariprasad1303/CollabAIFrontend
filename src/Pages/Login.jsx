import { icon } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faUsers,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/allAPI";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  //tab creation
  const login = [
    { id: "users", label: "Log in(User)", icon: faUsers },
    { id: "admin", label: "Log in(Admin)", icon: faUserShield },
  ];
  const navigate=useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    const {email,password } = userDetails;
    console.log(email, password);
    if (!email || !password) {
      toast.info("Please Fill the form completely");
    } else {
      // api call
      const result = await loginAPI({ email, password });
      console.log(result);
      if (result.status == 200) {
        toast.success("Login sucessfull...");
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", JSON.stringify(result.data.token));
        setTimeout(() => {
          if (role === "manager") {
            navigate("/manager");
          } else if (role === "employee") {
            navigate("/employee");
          } else {
            navigate("/login");
          }
        }, 3000);
      }
    }
  };
  //state for tab creation
  const [activeTab, setActivetab] = useState("users");
  return (
    <>
      <div className="max-w-full md:w-full grid grid-cols-1 md:grid-cols-2 md:h-screen">
        {/*left section  */}
        <div className="min-h-screen flex justify-center items-start pt-10">
          <div className="w-full max-w-2xl mx-auto">
            {/* Tab Header */}
            <div className="max-w-4xl p-4">
              {/*Tab header  */}
              <div className="w-full flex justify-center items-center rounded-xl mt-5 border-2 shadow-2xl border-gray-300 bg-white gap-2 max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                {login.map((tab) => (
                  <button
                    onClick={() => setActivetab(tab.id)}
                    key={tab.id}
                    className={`px-6 py-5 flex-1  text-md font-bold rounded-md transition ${
                      activeTab == tab.id
                        ? "bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white font-extrabold shadow-sm text-lg"
                        : "bg-white text-purple-600 hover:text-purple-700 text-lg"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={tab.icon}
                      className="me-2 text-2xl"
                    />
                    {tab.label}
                  </button>
                ))}
              </div>
              {/* tab content */}
            </div>
            {/* tab Content */}
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
                  <div className="w-full  shadow-3xl rounded-2xl border border-gray-300 mt-5 shadow-purple-300">
                    {/* form */}
                    <form className="p-4 flex flex-col justify-between gap-y-5 bg-white">
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
                          onChange={(e) => {
                            setUserDetails({
                              ...userDetails,
                              email: e.target.value,
                            });
                          }}
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
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              password: e.target.value,
                            })
                          }
                          type="password"
                          placeholder="create a strong password"
                          id="password"
                          className="w-full border border-[#64748B]  p-2 text-sm font-bold rounded-lg focus:outline-none focus:border-transparent focus:ring-2 focus:ring-purple-500"
                        />
                        <p className="text-[#64748B] font-medium mt-2 text-sm">
                          Must be at least 8 characters
                        </p>
                      </div>
                      {/* sign in button */}
                      <div className="w-full mt-4">
                        <button
                          type="button"
                          onClick={handleLogin}
                          className="w-full bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-lg py-4 px-3 text-lg font-bold active:opacity-80  transition duration-300"
                        >
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
                      {/* link to signup page */}
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
                  <div className="w-full p-6 shadow-3xl rounded-2xl border border-gray-300 mt-5  shadow-purple-300">
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
                        <Link to={"/login"}>
                          <button className="w-full bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-lg py-4 px-3 text-lg font-bold active:opacity-80  transition duration-300">
                            Sign In
                          </button>
                        </Link>
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
                              Sign up for free
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
        {/* Right Section */}
        <div className=" text-black w-full flex flex-col justify-center items-center bg-[linear-gradient(0deg,rgba(227,216,255,0.7)_0%,rgba(242,233,255,0.7)_100%)]">
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
        <ToastContainer
          position="top-center"
          theme="colored"
          autoClose={2000}
        />
      </div>
    </>
  );
};

export default Login;

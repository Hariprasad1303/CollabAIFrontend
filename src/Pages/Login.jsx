
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="max-w-full md:w-full grid grid-cols-1 md:grid-cols-2 md:h-screen">
        <div className="flex flex-col justify-start items-center my-20">
          <div>
            <h3 className="text-[#0F172A]  font-extrabold text-2xl md:text-4xl text-center">
              Welcome Back
            </h3>
            <p className="text-center p-4 text-[#64748B] font-medium">Sign into your account to continue</p>
          </div>
          <div className=" w-[90%] md:max-w-xl p-6 shadow-3xl rounded-2xl border border-gray-300 mt-10 shadow-2xl shadow-purple-300">
            <form className="p-4 flex flex-col justify-between gap-y-5">
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
              <div className="flex items-start md:items-center gap-4">
                <input type="radio" className="text-purple-500" />
                <p className="text-justify text-purple-500">
                 Remember me for 30 days
                </p>
              </div>
              <div className="w-full">
                <Link to={'/manager'}>
                  <button className="w-full bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] text-white rounded-lg py-4 px-3 text-lg font-bold active:opacity-80  transition duration-300">
                    Sign in
                  </button>
                </Link>
              </div>
              <hr className="w-full border-gray-300 mt-4" />
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
              <div>
                <p className="text-[#64748B] text-sm text-center font-medium">
                  Don't have an account?
                  <Link to={"/signup"}>
                    <span className="font-medium text-purple-500 mx-3">
                      Sign up for free
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Login;

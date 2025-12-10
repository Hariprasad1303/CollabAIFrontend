import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({id}) => {
  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto  py-16 md:gap-y-20" id={id}>
        <div className="flex flex-col">
          <h2 className="text-center bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent font-bold text-4xl md:text-6xl mb-3  p-6">
            Let's Start a Conversation
          </h2>
          <p className="text-justify px-6 mx-auto text-[#64748B] text-lg font-medium">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-between md:items-start items-center">
            <div
              className="shadow-2xl bg-white rounded-lg p-4 mx-4 my-3 w-[90%] sm:w-[360px] max-w-full"
            >
              <div className="h-12 w-12 rounded bg-linear-to-br from-purple-500 to-pink-500 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl text-white"
                />
              </div>
              <h3 className="text-[#0F172A] font-bold text-lg mt-3">
                Email us
              </h3>
              <p className="text-[#64748B] font-medium mt-1">
                We're here to help
              </p>
              <h4 className="text-blue-800 font-medium mt-1">
                hello@collabai.com
              </h4>
            </div>
            <div
              className="shadow-2xl bg-white rounded-lg p-4 mx-4 my-3  w-[90%] sm:w-[360px] max-w-full"
            >
              <div
                className="h-12 w-12 rounded bg-linear-to-br from-blue-500 to-cyan-500 flex justify-center items-center

"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl text-white"
                />
              </div>
              <h3 className="text-[#0F172A] font-bold text-lg mt-3">Call us</h3>
              <p className="text-[#64748B] font-medium mt-1">
                Mon-Fri from 9am to 6pm
              </p>
              <h4 className="text-blue-800 mt-1">+1 (234) 567-890</h4>
            </div>
            <div
              className="shadow-2xl bg-white rounded-lg p-4 mx-4 my-3  w-[90%] sm:w-[360px] max-w-full"
            >
              <div
                className="h-12 w-12 rounded bg-linear-to-br from-orange-500 to-rose-500 flex justify-center items-center

"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl text-white"
                />
              </div>
              <h3 className="text-[#0F172A] font-bold text-lg mt-3"> Visit Us</h3>
              <p className="text-[#64748B] font-medium mt-1">
               Come say hello
              </p>
              <h4 className="text-blue-800 mt-1">Ernakulam</h4>
            </div>
          </div>
          <div className="p-5">
            <form className="w-full p-5 md:p-12 text-[#0F172A] bg-white shadow-2xl  rounded-lg gap-y-8">
             <div className="md:flex gap-y-8 gap-x-4 justify-evenly w-full">
                  <div className="flex flex-col mb-4 md:w-1/2">
                    <label htmlFor="fName"className="font-medium text-base">First Name</label>
                    <input type="text" placeholder="Hariprasad" id="fName" className=" font-medium text-xs p-2 mt-1 md:mt-2 border border-gray-300 rounded-lg focus:border-transparent  focus:ring-1 focus:ring-purple-400 focus:outline-none transition" />
                  </div>
                  <div className="flex flex-col mb-4 md:w-1/2">
                    <label htmlFor="lName" className="font-medium text-base">Last Name</label>
                    <input type="text" placeholder=" V V" id="lName" className="font-medium text-xs border p-2 mt-1 md:mt-2 border-gray-300 rounded-lg focus:border-transparent focus:ring-1 focus:ring-purple-400 focus:outline-none transition"/>
                  </div>
             </div>
              <div className="flex flex-col mb-4 w-full">
                <label htmlFor="enquiry" className="font-medium text-base">Subject</label>
                <input type="text" placeholder="How can we Help you ?" id="enquiry" className="font-medium text-xs border p-2 mt-1 md:mt-2 border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 focus:outline-none focus:border-transparent"/>
              </div>
              <div className="flex flex-col mb-4 w-full">
                <label htmlFor="" className="font-medium text-base">Message</label>
                <textarea className="font-medium text-xs border p-2 mt-1 md:mt-4 border-gray-300 rounded-lg h-24 focus:border-"></textarea>
              </div>
              <div className="flex flex-col mt-8 w-full" >
                <button className="border p-2 font-bold text-white rounded-lg bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] "><FontAwesomeIcon icon={faPaperPlane} className="mx-2" />Send Message</button>
              </div>
              <hr className="border-gray-300 mt-8"/>
              <p className="text-center text-xs text-[#64748B] mt-4">Trusted by leading companies worldwide</p>
              <div className="flex justify-center items-center mt-4">
                <h4 className="text-[#64748B] font-medium mx-3">TECH</h4>
                <h4 className="text-[#64748B] font-medium mx-3">STARTUP</h4>
                <h4 className="text-[#64748B] font-medium mx-3">CREATIVE</h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-300 w-full" />
      <div className="w-full md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-8 py-16">
          <div className="text-center">
            <h3 className="text-[#0F172A] font-extrabold text-2xl md:text-4xl mb-4 mt-4">Follow us on</h3>
            <div className="flex justify-center items-center">
              <FontAwesomeIcon icon={faInstagram}  className="mx-4 text-3xl md:text-4xl text-[hsl(340,82%,65%)] font-extrabold"/>
              <FontAwesomeIcon icon={faLinkedin} className="mx-4 text-3xl md:text-4xl font-bold text-[#0A66C2]"/>
              <FontAwesomeIcon icon={faFacebook} className="mx-4 text-3xl md:text-4xl font-bold text-[#1877F2]"/>
              <FontAwesomeIcon icon={faTwitter} className="mx-4 text-3xl md:text-4xl font-bold text-[#1DA1F2]"/>
              <FontAwesomeIcon icon={faYoutube} className="mx-4 text-3xl md:text-4xl font-bold text-[#FF0000]"/>
            </div>
          </div>
          <hr className="border-gray-300 w-full md:hidden" />
          <div className="text-justify mx-auto">
            <h3 className="text-[#0F172A] text-lg md:text-xl font-extrabold my-4">Product</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Features</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Price</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Security</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Roadmap</a>
              </li>
            </ul>
          </div>
          <hr className="border-gray-300 w-full  md:hidden" />
           <div className="text-justify mx-auto">
            <h3 className="text-[#0F172A] text-lg md:text-xl font-extrabold my-4">Product</h3>
            <ul>
              <li className="mb-2" >
                <a href="#" className="text-[#64748B] font-bold">Features</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Price</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Security</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Roadmap</a>
              </li>
            </ul>
          </div>
          <hr className="border-gray-300 w-full md:hidden" />
           <div className="text-justify mx-auto ">
            <h3 className="text-[#0F172A] text-lg md:text-xl font-extrabold my-4">Product</h3>
            <ul>
              <li className="mb-2" >
                <a href="#" className="text-[#64748B] font-bold">Features</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Price</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Security</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[#64748B] font-bold">Roadmap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-300 w-full my-8" />
        <div></div>
      </div>
    </>
  );
};

export default Footer;

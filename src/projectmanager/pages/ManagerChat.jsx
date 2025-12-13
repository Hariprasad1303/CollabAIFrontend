import {
  faEllipsisVertical,
  faMagnifyingGlass,
  faMessage,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ManagerChat = () => {
  const [selectedChat, setSelectedChat] = useState("Design Team");
  const Chats = [
    {
      name: "Design Team",
      preview: "Sarah: The new mockups are ready for review",
      time: "5m",
      icon: "https://ui-avatars.com/api/?name=D+T&background=4f46e5&color=fff",
    },
    {
      name: "Sarah Chen",
      preview: "Can you review the latest PR?",
      time: "1h",
      icon: "https://ui-avatars.com/api/?name=S+C&background=14b8a6&color=fff",
    },
    {
      name: "Project Alpha",
      preview: "Mike: Meeting at 3pm today",
      time: "2h",
      icon: "https://ui-avatars.com/api/?name=P+A&background=f59e0b&color=fff",
    },
  ];
  return (
    <div className="w-full h-screen flex bg-white overflow-hidden">
      {/*Sidebar*/}
      <div className="border-r border-gray-300 w-80 flex flex-col">
        <h3 className="p-4 text-lg font-semibold text-[#0F172A]">Messages</h3>
        {/* Chat Search bar */}
        <div className="px-4 pb-3">
          <div className="flex items-center bg-gray-200 gap-2 rounded-lg px-3 py-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />
            <input
              type="text"
              placeholder="Search Converstaions..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>
        {/* Chats */}
        <div className="overflow-y-auto">
          {Chats.map((chat) => (
            <div
              key={chat.name}
              onClick={() => setSelectedChat(chat.name)}
              className={`p-4 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all ${
                selectedChat == chat.name ? "bg-gray-100" : ""
              } `}
            >
              {/*Chatting Person Profile */}
              <img
                src={chat.icon}
                alt="Profile image"
                className="w-10 h-10 rounded-full"
              />
              {/* chat description */}
              <div className="flex-1">
                <div className="font-medium text-sm">{chat.name}</div>
                <div className="text-xs text-gray-500 truncate">
                  {chat.preview}
                </div>
              </div>
              {/*chat time*/}
              <div className="text-xs text-gray-400 whitespace-nowrap">
                {chat.time}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="h-16 border-b border-gray-300 px-6 flex items-center  justify-between">
          {/*chat content  */}
          <div>
            <div className="font-semibold text-[#0F172A]">{selectedChat}</div>
            <div className="text-xs text-[#64748B]">& Members</div>
          </div>
          {/* chat icons */}
          <div className="flex items-center gap-4 text-gray-600">
            <FontAwesomeIcon
              icon={faPhone}
              className="size-5 cursor-pointer hover:text-gray-800 transition"
            />
            <FontAwesomeIcon
              icon={faVideo}
              className="size-5 cursor-pointer hover:text-gray-800 transition"
            />
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="size-5 cursor-pointer hover:text-gray-800 transition"
            />
          </div>
        </div>
        {/*chat body*/}
        <div className="flex-1 overflow-y-auto p-6 bg-white"></div>
          {/*chat input and send button  */}
        <div className="border-t border-gray-300 flex items-center gap-3  p-4">
          <input type="text" placeholder="Type a message..." className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm outline-none" />
          <button className="px-4 py-2  rounded-xl bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition-all duration-300"><FontAwesomeIcon icon={faMessage} className="me-2"/>send</button>
        </div>
      </div>
    </div>
  );
};

export default ManagerChat;

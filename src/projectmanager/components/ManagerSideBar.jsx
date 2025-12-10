import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  faGauge,
  faFolderOpen,
  faUsers,
  faChartLine,
  faComments,
  faCog,
  faRobot,
  faRightFromBracket,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { name: "Dashboard", href: "/manager/dashboard", icon: faGauge },
  { name: "Projects", href: "/manager/projects", icon: faFolderOpen },
  { name: "Team", href: "/manager/team", icon: faUsers },
  { name: "Analytics", href: "/manager/analytics", icon: faChartLine },
  { name: "Chat", href: "/manager/chat", icon: faComments },
  { name: "Settings", href: "/manager/settings", icon: faCog },
];

const ManagerSideBar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed md:relative top-0 left-0 h-screen bg-white border-r border-gray-300
          shadow-sm z-50 transition-all duration-300 ease-in-out

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0

          ${collapsed ? "md:w-20" : "md:w-64"}
          w-60
          
          md:flex md:flex-col
        `}
      >
        {/* Close (Mobile Only) */}
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} className="text-2xl" />
        </button>

        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-300">
          {(!collapsed || mobileOpen) ? (
            <h1 className="text-2xl font-extrabold bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)]
 bg-clip-text text-transparent">CollabAI</h1>
          ) : (
            <span className="text-3xl font-extrabold  bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)]
 bg-clip-text text-transparent">C</span>
          )}
        </div>

        {/* Nav Items */}
        <nav className="mt-4 flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const active = location.pathname === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-4 px-3 py-2 rounded-lg transition-all
                  ${collapsed && !mobileOpen ? "justify-center" : ""}
                  ${
                    active
                      ? "bg-purple-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-lg ${active ? "text-white" : "text-gray-500"}`}
                />

                {(!collapsed || mobileOpen) && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* AI Assistant */}
        {(!collapsed || mobileOpen) && (
          <div className="px-4 mt-6">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)]
 text-white">
              <FontAwesomeIcon icon={faRobot} />
              <span>AI Assistant</span>
            </button>
          </div>
        )}

        {/* User Section */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-300">
          <div
            className={`
              flex items-center gap-3 px-2 py-2 rounded-lg transition-all
              ${collapsed && !mobileOpen ? "justify-center" : "hover:bg-gray-100"}
            `}
          >
            <img
              src="https://i.pravatar.cc/40"
              className="w-9 h-9 rounded-full border"
              alt=""
            />

            {(!collapsed || mobileOpen) && (
              <div className="flex flex-col">
                <p className="text-sm font-semibold">Alex Johnson</p>
                <p className="text-xs text-gray-500">Project Manager</p>
              </div>
            )}
          </div>

          <button
            className={`
              mt-3 flex items-center gap-3 text-red-500 px-2 py-2 rounded-lg hover:bg-red-50 w-full transition-all
              ${collapsed && !mobileOpen ? "justify-center" : ""}
            `}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            {(!collapsed || mobileOpen) && (
              <span className="text-sm font-medium">Logout</span>
            )}
          </button>
        </div>

        {/* Collapse Button (Desktop Only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex absolute -right-3 top-20 w-7 h-7 rounded-full border bg-white border-gray-300 shadow-md items-center justify-center hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`text-sm transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </aside>
    </>
  );
};

export default ManagerSideBar;

import {
  faArrowDown,
  faArrowUp,
  faChartColumn,
  faCircleCheck,
  faClock,
  faDiagramProject,
  faFolderOpen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ManagerAnalytics = () => {
  // weekly task chat data
  const data = [
    {
      day: "Monday",
      total: 12,
      done: 8,
    },
    {
      day: "Tuesday",
      total: 15,
      done: 12,
    },
    {
      day: "Wednesday",
      total: 18,
      done: 14,
    },
    {
      day: "Thursday",
      total: 14,
      done: 11,
    },
    {
      day: "Friday",
      total: 20,
      done: 16,
    },
    {
      day: "Saturday",
      total: 8,
      done: 7,
    },
    {
      day: "Sunday",
      total: 5,
      done: 4,
    },
  ];
  const pieChartData = [
    { name: "Active", value: 4, color: "#7C3AED" },
    { name: "Completed", value: 2, color: "#22C55E" },
    { name: "On Hold", value: 1, color: "#F59E0B" },
  ];
  return (
    <>
      <div className="flex flex-col gap-6">
        {/*Analaytics Heading */}
        <div className="flex  justify-center md:justify-between items-center mb-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl text-[#0F172A] font-extrabold px-4">
              Project Analytics
            </h2>
            <p className="text-[#64748B] text-md md:text-xl text-justify font-normal px-4">
              Track your projects, team performance, and task completion metrics
            </p>
          </div>
          <div className="hidden md:block bg-purple-200  px-4 py-2 text-purple-600 font-bold p-2 rounded-xl">
            Manager View
          </div>
        </div>
        {/* Analaytics Cards */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 ">
          {/*card1  */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-violet-50 to-violet-200 opacity-75">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">
                Total Projects
              </h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">7</span>
              <p className="text-green-600 mt-2">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="me-2 font-semibold"
                />
                2 this month
              </p>
            </div>
            <div className="bg-violet-300 rounded-full p-3">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-violet-700 text-2xl"
              />
            </div>
          </div>
          {/* card 2 */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-green-50 to-green-100">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">
                Tasks Completed
              </h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">48</span>
              <p className="text-green-600 mt-2">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="me-2 font-semibold"
                />
                75% rate
              </p>
            </div>
            <div className="bg-green-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-700 text-2xl"
              />
            </div>
          </div>
          {/* card3 */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-pink-50 to-pink-100">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">
                Total Projects
              </h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">12</span>
              <p className="text-gray-500 mt-2">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="me-2 font-semibold"
                />
                Across Projects
              </p>
            </div>
            <div className="bg-pink-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-pink-700 text-2xl"
              />
            </div>
          </div>
          {/* card4 */}
          <div className="flex-1 flex justify-between items-center p-6 shadow-md bg-linear-to-br from-cyan-50 to-cyan-100">
            <div className="flex flex-col gap-1">
              <h4 className="text-gray-600 font-bold text-lg">
                Total Projects
              </h4>
              <span className="text-[#0F172A] text-5xl font-extrabold">
                4.2d
              </span>
              <p className="text-green-500 mt-2">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="me-2 font-semibold"
                />
                0.5d faster
              </p>
            </div>
            <div className="bg-cyan-200 rounded-full p-3">
              <FontAwesomeIcon
                icon={faClock}
                className="text-cyan-700 text-2xl"
              />
            </div>
          </div>
        </div>
        {/* Recharts Elements */}
        <div className="flex flex-col md:flex-row  items-center justify-between gap-4">
          <div className="flex-1 flex flex-col border-2 border-gray-200 shadow-md bg-white">
            {/* weekly progress heading */}
            <div className="flex items-center justify-start gap-4 mb-6 p-4">
              <FontAwesomeIcon
                icon={faChartColumn}
                className="text-purple-600 text-3xl"
              />
              <h4 className="text-3xl text-[#0F172A] font-bold">
                Weekly task Process
              </h4>
            </div>
            {/* weekly progress chart */}
            <div>
              <BarChart
                style={{
                  width: "100%",
                  maxWidth: "80%",
                  maxHeight: "70vh",
                  aspectRatio: 1.618,
                }}
                responsive
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#E5E7EB" />
                <Bar dataKey="done" fill="#7C3AED" />
              </BarChart>
            </div>
          </div>
          <div className="flex-1 flex flex-col border-2 border-gray-200 shadow-md bg-white">
            {/*Project Status heading */}
            <div className="flex items-center justify-start gap-4 mb-6 p-4">
              <FontAwesomeIcon
                icon={faDiagramProject}
                className="text-purple-600 text-3xl"
              />
              <h4 className="text-3xl text-[#0F172A] font-bold">
                Project Status
              </h4>
            </div>
            {/* Project Status -pie chart */}
            <div>
              <ResponsiveContainer width="100%" height={420}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    dataKey={"value"}
                    innerRadius={55}
                    outerRadius={120}
                    stroke="white"
                    strokeWidth={3}
                    label={({
                      cx,
                      cy,
                      innerRadius,
                      midAngle,
                      outerRadius,
                      name,
                      value,
                    }) => {
                      const radius =
                        innerRadius + (outerRadius - innerRadius) * 1.2;
                      const x =
                        cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                      const y =
                        cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#374151"
                          fontSize={12}
                          fontWeight={500}
                          dominantBaseline="center"
                          textAnchor={x > cx ? "start" : "end"}
                        >
                          {name}:{value}
                        </text>
                      );
                    }}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  {/* Tool tip */}
                  <Tooltip
                    formatter={(value, name) => [`${value}`, name]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      fontSize: "13px",
                    }}
                    cursor={{ fill: "transparent" }}
                  />
                  {/* Legend */}
                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    formatter={(value) => (
                      <span className="text-gray-600 text-s">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Perfomance and another anlaytical chart */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col shadow-md bg-white border border-gray-300 flex-7 p-4 gap-4">
            {/*Team perfomanace Heading */}
            <div className="flex justify-start items-center gap-3">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-purple-600 text-3xl"
              />
              <h4 className="text-[#0F172A] text-3xl font-bold">
                Team Perfomanace
              </h4>
            </div>
            {/* Team progress bar */}
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <h5 className="text-[#0F172A] text-lg font-bold">Alice</h5>
                  <div className="flex items-center gap-4">
                    <span className="text-[#0F172A] text-sm font-semibold">
                      24 tasks
                    </span>
                    <p className="bg-purple-600 text-white text-sm font-semibold p-2 rounded-lg flex items-center">
                      90%
                    </p>
                  </div>
                </div>
                <div className="bg-pink-500 relative h-3 rounded-lg">
                  <div className=" absolute bg-purple-600 w-[90%] h-3 rounded-lg z-40"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <h5 className="text-[#0F172A] text-lg font-bold">Bob</h5>
                  <div className="flex items-center gap-4">
                    <span className="text-[#0F172A] text-sm font-semibold">
                      17 tasks
                    </span>
                    <p className="bg-purple-600 text-white text-sm font-semibold p-2 rounded-lg flex items-center">
                      70%
                    </p>
                  </div>
                </div>
                <div className="bg-pink-500 relative h-3 rounded-lg">
                  <div className=" absolute bg-purple-600 w-[70%] h-3 rounded-lg z-40"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <h5 className="text-[#0F172A] text-lg font-bold">Alice</h5>
                  <div className="flex items-center gap-4">
                    <span className="text-[#0F172A] text-sm font-semibold">
                      19 tasks
                    </span>
                    <p className="bg-purple-600 text-white text-sm font-semibold p-2 rounded-lg flex items-center">
                      77%
                    </p>
                  </div>
                </div>
                <div className="bg-pink-500 relative h-3 rounded-lg">
                  <div className=" absolute bg-purple-600 w-[77%] h-3 rounded-lg z-40"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <h5 className="text-[#0F172A] text-lg font-bold">Alice</h5>
                  <div className="flex items-center gap-4">
                    <span className="text-[#0F172A] text-sm font-semibold">
                      14 tasks
                    </span>
                    <p className="bg-purple-600 text-white text-sm font-semibold p-2 rounded-lg flex items-center">
                      60%
                    </p>
                  </div>
                </div>
                <div className="bg-pink-500 relative h-3 rounded-lg">
                  <div className=" absolute bg-purple-600 w-[60%] h-3 rounded-lg z-40"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <h5 className="text-[#0F172A] text-lg font-bold">Alice</h5>
                  <div className="flex items-center gap-4">
                    <span className="text-[#0F172A] text-sm font-semibold">
                      27 tasks
                    </span>
                    <p className="bg-purple-600 text-white text-sm font-semibold p-2 rounded-lg flex items-center">
                      96%
                    </p>
                  </div>
                </div>
                <div className="bg-pink-500 relative h-3 rounded-lg">
                  <div className=" absolute bg-purple-600 w-[96%] h-3 rounded-lg z-40"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-md bg-white border border-gray-300 flex-5">
            2
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default ManagerAnalytics;

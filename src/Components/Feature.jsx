import {faRobot,faChartLine,faComments,faBolt,faUsersGear,faFileAlt,faShieldAlt,faClock, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const featuresData = [
  {
    id: 1,
    icon: faRobot,
    title: "AI Assistant",
    description:
      "Intelligent task generation, smart summaries, and context-aware suggestions powered by advanced AI.",
    color: "text-purple-500",
     iconColor: "#8E63F9",
    bgColor: "#E9DDFF",
  },
  {
    id: 2,
    icon: faChartLine,
    title: "Predictive Analytics",
    description:
      "Machine learning insights that forecast completion times, identify bottlenecks, and optimize workflows.",
    color: "text-pink-500",
     iconColor: "#38BDF8",
    bgColor: "#DFF5FF",
  },
  {
    id: 3,
    icon: faComments,
    title: "Real-Time Collaboration",
    description:
      "Instant messaging, live updates, and seamless team communication with typing indicators and presence.",
    color: "text-sky-500",
     iconColor: "#22C55E",
    bgColor: "#E5FFE9",
  },
  {
    id: 4,
    icon: faBolt,
    title: "Automated Workflows",
    description:
      "Smart automation that handles repetitive tasks, generates reports, and streamlines your processes.",
    color: "text-green-500",
     iconColor: "#22C55E",
    bgColor: "#E5FFE9",
  },
  {
    id: 5,
    icon: faUsersGear,
    title: "Team Management",
    description:
      "Role-based access control, activity tracking, and comprehensive team performance monitoring.",
    color: "text-purple-500",
     iconColor: "#A855F7",
    bgColor: "#F2E1FF",
  },
  {
    id: 6,
    icon: faFileAlt,
    title: "AI Reports",
    description:
      "Automatically generated insights and professional reports in PDF or Markdown format.",
    color: "text-pink-500",
    iconColor: "#EC4899",
    bgColor: "#FFE4F1",
  },
];
const Feature = ({id}) => {
  return (
    <>
     <div className='flex flex-col items-center w-full mt-40 mb-20' id={id}>
        <div>
            <h2 className='text-[#0F172A] text-4xl md:text-6xl px-6 md:px-12 my-4 font-extrabold max-w-3xl text-center'><span className='bg-[linear-gradient(135deg,hsl(262,83%,58%)0%,hsl(340,82%,65%)_100%)] bg-clip-text text-transparent'>Powerful features</span> for Modern Teams</h2>
            <p className='text-[#64748B] font-medium px-6 md:px-12 max-w-4xl'>Everything you need to manage projects, collaborate seamlessly, and make data-driven decisions.</p>
        </div>
        <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-6 bg-[#fffefe]'>
            {featuresData.map((feature,index)=>(
                  <div key={index} className='shadow flex flex-col mb-8 rounded-2xl w-[80%] sm:w-[330px max-w-full bg-white' style={{width:'440px',height:'250px'}}>
                        <div className='m-4  rounded md:mx-4 md:mb-4 sm:mx-2 sm:my-4 flex justify-center items-center' style={{height:'64px',width:'64px',backgroundColor:feature.bgColor}}><FontAwesomeIcon icon={feature.icon} className='text-2xl font-medium' style={{color:feature.iconColor}} /></div> 
                        <h3 className='text-lg font-extrabold md:text-xl sm:text-xl mx-4 text-[#0F172A]'>{feature.title}</h3>
                        <p className='text-justify px-4 mt-1.5 md:px-3 text-[#64748B] font-medium'>{feature.description}</p> 
                 </div>  
            ))}
        </div>
     </div>    
    </>
  )
}

export default Feature
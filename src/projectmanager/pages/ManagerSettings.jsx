import React, { useState } from 'react'

const ManagerSettings = () => {
  const [profile,setProfile]=useState(true);
  const [notifications,setNotifications]=useState(false);
  const [security,setSecurity]=useState(false);
  return (
    // Tabs creation
    <div className='flex flex-col items-start'>
      <div className='flex flex-col'>
        <h4 className='text-purple-600 font-extrabold text-2xl   md:text-4xl mb-1.5'>Settings</h4>
        <p className='text-[#64748B] font-normal text-md md:text-2xl'>Manage your account and workspace settings</p>
      </div>
      <div className='flex justify-center md:justify-start items-center my-5 gap-16  bg-gray-200 py-2 px-1 rounded'>
        <p onClick={()=>{setProfile(true);setNotifications(false);setSecurity(false);}} className={profile?'px-16 py-1.5 bg-white text-[#0F172A] font-semibold  text-sm md:text-lg border-l border-t border-r border-gray-200 rounded cursor-pointer':notifications?"px-16 py-1.5 font-semibold  text-sm md:text-lg text-[#0F172A]  bg-gray-100 opacity-80":" px-16 py-1.5 font-semibold  text-sm md:text-lg text-[#0F172A] bg-gray-100 opacity-80"}>Profile</p>

        <p onClick={()=>{setProfile(false);setNotifications(true);setSecurity(false);}} className={notifications?'px-16 py-1.5  bg-white font-semibold  text-sm md:text-lg text-[#0F172A] border-l border-t border-r border-gray-200 rounded cursor-pointer':security?"px-16 py-1.5 font-semibold  text-sm md:text-lg text-[#0F172A] b-gray-100 opacity-80":"px-16 py-1.5 text-[#0F172A] font-semibold  text-sm md:text-lg bg-gray-100 opacity-80"}>Notifications</p>

        <p onClick={()=>{setProfile(false);setNotifications(false);setSecurity(true);}} className={security?'px-16 py-1.5 font-semibold  text-sm md:text-lg bg-white text-[#0F172A] border-l border-t border-r border-gray-200 rounded cursor-pointer':profile?"px-16 py-1.5 font-semibold  text-sm md:text-lg text-[#0F172A] border-gray-100 opacity-80":"px-16 py-1.5 text-[#0F172A] font-semibold  text-sm md:text-lg bg-gray-100 opacity-80"}>Security</p>
      </div>
    </div>
   
  )
}

export default ManagerSettings

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getEveryDetailsProjectAPI } from "../../services/allAPI";

const ProjectDetails = () => {
  //js code

  //state for holding  projectStats
  const [projectStats,setProjectStats]=useState({});
  const getFullProjectDetails = async (projectId) => {
    try {
      const result = await getEveryDetailsProjectAPI(projectId);
      console.log(result.data);
      setProjectStats(result.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  //
  const {id}=useParams();

  //useEffect
  useEffect(()=>{
    if(id){
    getFullProjectDetails(id);
    }
  },[id]);
  return (
    <div>
      {/*Project Heading  */}
      <div className="flex  justify-center md:justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl text-[#0F172A] font-extrabold px-4">
          </h2>
        </div>
        <div className="hidden md:block bg-purple-200  px-4 py-2 text-purple-600 font-bold p-2 rounded-xl">
          project Manager
        </div>
      </div>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </div>
  );
};

export default ProjectDetails;

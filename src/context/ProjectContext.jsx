import { createContext, useEffect, useState } from "react";
import { getEmployeeProjectAPI } from "../services/allAPI";

//create an context
export const ProjectContext = createContext();

//create the provider component
export const ProjectProvider = ({ children }) => {
  //state for storing employee project details  
  const [projects, setProjects] = useState([]);

  //function for fetching  project  assigned to employee
  const fetchProjects = async () => {
    try {
      const result = await getEmployeeProjectAPI();
      console.log(result);
      setProjects(result.data);
    } catch (err) {
      console.log(err);
      toast.warning("Feching employee projects failed");
    }
  };
  //useEffect
  useEffect(() => {
    fetchProjects();
  },[]);

  return(
    <ProjectContext.Provider value={{projects,fetchProjects}}>
     {children}   
    </ProjectContext.Provider>
  )
};
export default ProjectProvider;

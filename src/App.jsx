import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ManagerLayout from "./projectmanager/pages/ManagerLayout"
import ManagerDashboard from './projectmanager/pages/ManagerDashboard'
import ManagerProjects from './projectmanager/pages/ManagerProjects'
import ManagerAnalytics from './projectmanager/pages/ManagerAnalytics'
import ManagerTeam from "./projectmanager/pages/ManagerTeam"
import ManagerChat from "./projectmanager/pages/ManagerChat"
import ManagerSettings from './projectmanager/pages/ManagerSettings'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        {/* Manager Routes */}
        <Route path="/manager" element={<ManagerLayout/>}>
          <Route index element={<ManagerDashboard/>}/>
          <Route path="dashboard" element={<ManagerDashboard/>}/>
          <Route path="projects" element={<ManagerProjects/>}/>
          <Route path="team" element={<ManagerTeam/>}/>
          <Route path="analytics" element={<ManagerAnalytics/>}/>
          <Route path="chat" element={<ManagerChat/>}/>
          <Route path="settings" element={<ManagerSettings/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

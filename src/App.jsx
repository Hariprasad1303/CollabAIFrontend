import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

// manager role import statements
import ManagerLayout from "./projectmanager/pages/ManagerLayout";
import ManagerDashboard from "./projectmanager/pages/ManagerDashboard";
import ManagerProjects from "./projectmanager/pages/ManagerProjects";
import ManagerAnalytics from "./projectmanager/pages/ManagerAnalytics";
import ManagerTeam from "./projectmanager/pages/ManagerTeam";
import ManagerChat from "./projectmanager/pages/ManagerChat";
import ManagerSettings from "./projectmanager/pages/ManagerSettings";

//employee role import statements 
import EmployeeDashboard from './employee/pages/EmployeeDashboard'
import EmployeeLayout from "./employee/pages/EmployeeLayout";
import EmployeeChat from "./employee/pages/EmployeeChat";
import EmployeeAnalytics from './employee/pages/EmployeeAnalytics'
import EmployeeTeam from './employee/pages/EmployeeTeam'
import EmployeeSettings from './employee/pages/EmployeeSettings'
import EmployeeProjects from './employee/pages/EmployeeProjects'


//admin role import statements
import AdminLayout from "./admin/pages/AdminLayout";
import AdminDashboard from './admin/pages/AdminDashboard'
import AdminFeedback from './admin/pages/AdminFeedback'
import AdminUserManagement from './admin/pages/AdminUserManagement'
import AdminAnalytics from "./admin/pages/AdminAnalytics";
import AdminProjects from "./admin/pages/AdminProjects";
import AdminSettings from "./admin/pages/AdminSettings";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Manager Routes */}
        <Route path="/manager" element={<ManagerLayout />}>
          <Route index element={<ManagerDashboard />} />
          <Route path="dashboard" element={<ManagerDashboard />} />
          <Route path="projects" element={<ManagerProjects />} />
          <Route path="team" element={<ManagerTeam />} />
          <Route path="analytics" element={<ManagerAnalytics />} />
          <Route path="chat" element={<ManagerChat />} />
          <Route path="settings" element={<ManagerSettings />} />
        </Route>

        {/* Employee Routes */}
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="projects" element={<EmployeeProjects />} />
          <Route path="team" element={<EmployeeTeam />} />
          <Route path="analytics" element={<EmployeeAnalytics />} />
          <Route path="chat" element={<EmployeeChat />} />
          <Route path="settings" element={<EmployeeSettings />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="feedbacks" element={<AdminFeedback />} />
          <Route path="users" element={<AdminUserManagement/>} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

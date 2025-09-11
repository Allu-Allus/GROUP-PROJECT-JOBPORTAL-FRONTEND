
import { Route, Routes } from 'react-router-dom'
import './App.css'
import JobDescription from './Pages/user/JobDescription'
import Dashboard from './Pages/admin/Dashboard'
import LandingPage from './Pages/user/LandingPage'
import Auth from './Pages/user/Auth'
import AdminAuth from './Pages/user/AdminAuth'
import Administration from './Pages/admin/Administration'
import Myapplication from './Pages/user/Myapplication'
import Jobapplypage from './Pages/user/Jobapplypage'
import ManageJob from './Pages/admin/Managejob'
import Addjob from './Pages/admin/Addjob'
import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {


   const [getJob,setGetJob]=useState([])
  const [jobData,setJobData]=useState({
    jobTitle:"",
    location:"",
    jobtype:"",
    experience:"",
    dead:"",
  jobrole:"",
  requirements:"",
  companyname:"",
  jobid:"",
  responsibilties:"",
  worktype:"",
  salary:""

  })

  return (
    <>
      <Routes>
         {/* User side */}
        <Route path='/description' element={<JobDescription getJob={getJob} setGetJob={setGetJob}/>} />
        <Route path="/" element={<LandingPage getJob={getJob} setGetJob={setGetJob} />} />
        <Route path="/login" element={<Auth login />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/myapplication" element={<Myapplication/>} />
        <Route path="/application" element={<Jobapplypage />} />

        {/* Admin side */}
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/login-job" element={<AdminAuth login />} />
        <Route path="/register-job" element={<AdminAuth />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/manage" element={<ManageJob getJob={getJob} setGetJob={setGetJob} />} />
        <Route path="/add" element={<Addjob jobData={jobData} setJobData={setJobData}/>} />
      </Routes>
    </>
  )
}

export default App
